import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";

// === ADMIN LOGIN SETTINGS ===
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "12345";

export default function AdminPanel() {
  // Authentication state
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Mode: books | news
  const [mode, setMode] = useState("books");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Books
  const [bookName, setBookName] = useState("");
  const [bookImg, setBookImg] = useState("");
  const [bookInfo, setBookInfo] = useState("");
  const [books, setBooks] = useState([]);

  // News
  const [newsTitle, setNewsTitle] = useState("");
  const [newsImg, setNewsImg] = useState("");
  const [newsDesc, setNewsDesc] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [news, setNews] = useState([]);

  // Fetch data
  const fetchData = async () => {
    const booksQuery = query(collection(db, "books"), orderBy("createdAt", "desc"));
    const newsQuery = query(collection(db, "news"), orderBy("createdAt", "desc"));

    const booksSnapshot = await getDocs(booksQuery);
    const newsSnapshot = await getDocs(newsQuery);

    setBooks(booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setNews(newsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  // Add Book
  const addBook = async () => {
    if (!bookName || !bookImg || !bookInfo) {
      alert("Please fill all book fields!");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "books"), {
        name: bookName,
        img: bookImg,
        info: bookInfo,
        createdAt: Timestamp.now(),
      });
      setBookName("");
      setBookImg("");
      setBookInfo("");
      fetchData();
      alert("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
    }
    setLoading(false);
  };

  // Add News
  const addNews = async () => {
    if (!newsTitle || !newsImg || !newsDesc || !newsDate) {
      alert("Please fill all news fields!");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "news"), {
        title: newsTitle,
        img: newsImg,
        description: newsDesc,
        publishDate: newsDate,
        createdAt: Timestamp.now(),
      });
      setNewsTitle("");
      setNewsImg("");
      setNewsDesc("");
      setNewsDate("");
      fetchData();
      alert("News added successfully!");
    } catch (error) {
      console.error("Error adding news:", error);
    }
    setLoading(false);
  };

  // Delete item (books or news)
  const deleteItem = async (id, type) => {
    try {
      await deleteDoc(doc(db, type, id));
      fetchData();
      alert(`${type === "books" ? "Book" : "News"} deleted successfully!`);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Edit item (books or news)
  const editItem = async (id, type) => {
    const field = type === "books" ? "name" : "title";
    const newValue = prompt(`Enter new ${field}:`);
    if (!newValue) return;

    try {
      await updateDoc(doc(db, type, id), { [field]: newValue });
      fetchData();
      alert("Updated successfully!");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // If not logged in → show login form
  if (!loggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-lg w-80"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all w-full"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h1>

        {/* Select mode */}
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="w-full p-3 mb-5 border rounded-lg"
        >
          <option value="books">📚 Manage Books</option>
          <option value="news">📰 Manage News</option>
        </select>

        {/* Form for Books */}
        {mode === "books" && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Add Book</h2>
            <input
              type="text"
              placeholder="Book Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Book Image URL"
              value={bookImg}
              onChange={(e) => setBookImg(e.target.value)}
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <textarea
              placeholder="Book Info"
              value={bookInfo}
              onChange={(e) => setBookInfo(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <button
              onClick={addBook}
              disabled={loading}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all"
            >
              {loading ? "Adding..." : "Add Book"}
            </button>

            {/* Books List */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-3">📚 Added Books</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {books.map((book) => (
                  <div
                    key={book.id}
                    className="p-4 bg-gray-100 rounded-lg shadow-md"
                  >
                    <img
                      src={book.img}
                      alt={book.name}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-bold text-lg">{book.name}</h3>
                    <p className="text-gray-700">{book.info}</p>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => editItem(book.id, "books")}
                        className="bg-yellow-400 px-3 py-1 rounded-lg text-white hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteItem(book.id, "books")}
                        className="bg-red-500 px-3 py-1 rounded-lg text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Form for News */}
        {mode === "news" && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Add News</h2>
            <input
              type="text"
              placeholder="News Title"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="News Image URL"
              value={newsImg}
              onChange={(e) => setNewsImg(e.target.value)}
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <textarea
              placeholder="News Description"
              value={newsDesc}
              onChange={(e) => setNewsDesc(e.target.value)}
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <input
              type="date"
              value={newsDate}
              onChange={(e) => setNewsDate(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <button
              onClick={addNews}
              disabled={loading}
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all"
            >
              {loading ? "Adding..." : "Add News"}
            </button>

            {/* News List */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-3">📰 Added News</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {news.map((n) => (
                  <div
                    key={n.id}
                    className="p-4 bg-gray-100 rounded-lg shadow-md"
                  >
                    <img
                      src={n.img}
                      alt={n.title}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-bold text-lg">{n.title}</h3>
                    <p className="text-gray-700">{n.description}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Published: {n.publishDate}
                    </p>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => editItem(n.id, "news")}
                        className="bg-yellow-400 px-3 py-1 rounded-lg text-white hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteItem(n.id, "news")}
                        className="bg-red-500 px-3 py-1 rounded-lg text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}