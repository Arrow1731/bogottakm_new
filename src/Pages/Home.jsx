import React, { Component } from "react";
import Photo_D from "../assets/Direktor rasmi.png";
import Side_1 from "../assets/Slide 1.png";
// import HeaderBg from "../assets/header_bg.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* HERO SECTION */}
        <section
          className="relative bg-[url('/assets/header_bg.jpg')] bg-cover bg-center py-16"
        >
          <div className="absolute inset-0 bg-black/50"></div> {/* dark overlay */}
          <div className="relative container mx-auto text-center px-4 text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Bog'ot tumani axborot kutubxona markaziga <br /> Xush kelibsiz
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto">
              Bilim, ta'lim va jamiyat uchun darvozangiz. Minglab kitoblarni
              kashf eting, tadbirlarda qatnashing va boshqa kitobxonlar bilan
              bog'laning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/books"
                className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
              >
                Kitoblarni ko'rish
              </a>
              <a
                href="/news"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-2xl bg-white/10 hover:bg-white/20 transition"
              >
                Yangiliklarni ko'rish
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Kutubxonamiz Haqida
            </h2>
            <p className="text-gray-600 mb-4">
              Hozirda Bog’ot tuman Axborot-kutubxona markazi tumandagi
              Madaniyat uyi binosida joylashgan.
            </p>
            <p className="text-gray-600">
              Bizning fondimizda 96 000 dan ortiq kitoblar, elektron, audio va
              raqamli adabiyotlar, davriy nashrlar va multimedia fayillari
              mavjud.
            </p>
          </div>
          <div>
            <img
              src={Side_1}
              alt="Kutubxona rasmi"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </section>

        {/* DIRECTOR INFO */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
            Xorazm viloyati, Bog‘ot tuman Axborot kutubxona markazi direktori
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
            <img
              src={Photo_D}
              alt="Direktor Rajabova Gulbahor Farxadovna"
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg md:text-xl">
                Rajabova Gulbahor Farxadovna
              </h3>
              <p className="mt-2">
                Tel:{" "}
                <a
                  href="tel:+998991666900"
                  className="text-blue-600 hover:underline"
                >
                  +998 (99) 166-69-00
                </a>
              </p>
              <p className="mt-2">
                Qabul kuni: <br />
                <span className="font-medium">Chorshanba</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}