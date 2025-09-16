import React from "react";
import Map_img from "../assets/Link → Google Map.png";

function Footer() {
  return (
    <footer className="bg-gray-100">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        {/* Address */}
        <div>
          <h3 className="font-bold text-xl mb-3">Bizga Tashrif Buyuring</h3>
          <p className="mb-1">
            <a href="#">Beruniy MFY, O'zbekistan ko'chasi, 11 - uy</a>
          </p>
          <p className="mb-1">
            <a href="tel:+9983151951">+998 315-19-51</a>
          </p>
          <p>
            <a href="mailto:bogottakm@gmail.com">bogottakm@gmail.com</a>
          </p>
        </div>

        {/* Working Days */}
        <div>
          <h3 className="font-bold text-xl mb-3">Ish Vaqti</h3>
          <p>Dushanbadan - Jumagacha</p>
          <p>Shanba - Yakshanba</p>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-bold text-xl mb-3">Visit Us</h3>
          <p>09:00 - 18:00</p>
          <p>Dam Olish Kuni</p>
        </div>
      </div>

      {/* Map + Bottom Info */}
      <div className="relative w-full">
        <div className="container">
          <img
            src={Map_img}
            alt="Google Map"
            className="w-full h-72 object-cover rounded-t-2xl"
          />
        </div>
        <div className="bg-gray-800 text-white text-center py-6 px-4">
          <p className="text-sm">
            © 2025 Bog'ot tumani - AKM. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-sm mt-2">
            Powered by{" "}
            <a href="https://azizbekkamilov.vercel.app/" target="_blank" className="font-semibold">
              AZIZBEK1701
            </a>{" "}
            and{" "}
            <a href="https://sobirjonotajonov.netlify.app/" target="_blank" className="font-semibold">
              SOBIRJON
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;