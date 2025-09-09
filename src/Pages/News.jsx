import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const snapshot = await getDocs(collection(db, "news"));
      const newsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNewsList(newsData);
      setLoading(false);
    } catch (error) {
      console.error("Xatolik: Yangiliklarni yuklab bo‘lmadi", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        ⏳ Yangiliklar yuklanmoqda...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">📢 Yangiliklar</h1>
        {newsList.length === 0 ? (
          <p className="text-center text-gray-500">
            Hozircha yangiliklar mavjud emas.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <img
                  src={item.rasm}
                  alt={item.sarlavha}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{item.sarlavha}</h2>
                  <p className="text-gray-600 mt-2">
                    {item.info.length > 100
                      ? item.info.substring(0, 100) + "..."
                      : item.info}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    📅 {item.sana}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}