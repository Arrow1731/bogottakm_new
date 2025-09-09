import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const querySnapshot = await getDocs(collection(db, "books"));
      const booksArray = [];
      querySnapshot.forEach((doc) => {
        booksArray.push({ id: doc.id, ...doc.data() });
      });
      setBooks(booksArray);
    };
    fetchBooks();
  }, []);

  return (
    <div className="container p-6">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border p-4 rounded shadow bg-white">
            <img src={book.img} alt={book.name} className="h-40 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold">{book.name}</h2>
            <p className="text-gray-600">{book.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}