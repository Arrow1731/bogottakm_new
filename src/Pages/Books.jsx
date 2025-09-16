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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Kitoblar</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border rounded-lg shadow p-4 flex flex-col"
          >
            <img
              src={book.img}
              alt={book.name}
              className="h-48 w-full object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{book.name}</h2>
            <p className="text-gray-600 text-sm flex-grow">{book.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}