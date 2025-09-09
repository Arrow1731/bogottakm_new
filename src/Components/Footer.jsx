import React from "react";
import Map_img from '../assets/Link → Google Map.png';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between items-start py-[50px]">
          <div>
            <h3 className="font-bold text-[24px]">Bizga Tashrif Buyuring</h3><br />
            <p><a href="#">Beruniy MFY, O'zbekistan ko'chasi, 11 - uy</a></p>
            <p><a href="#">+998 315-19-51</a></p>
            <p><a href="#">bogottakm@gmail.com</a></p>

            {/* Social Icons */}
            <div></div>
          </div>
          <div>
            <h3 className="font-bold text-[24px]">Ish Vaqti</h3><br />
            <p>Dushanbadan - Jumagacha</p>
            <p>Shanba - Yakshanba</p>
          </div>
          <div>
            <h3 className="text-[#ffff]">Visit Us</h3><br />
            <p>09:00 - 18:00</p>
            <p>Dam Olish Kuni</p>
          </div>
        </div>
      </div>

      {/* Footer Info */}

      <div>
        <div className="h-[452.27px] relative">
          <img className=" container w-[1280px] h-80 left-[620px] top-0 absolute rounded-[30px]" src={Map_img} />
          <div className="w-full h-44 left-0 top-[282.27px] absolute bg-gray-800">
            <div className="container">
              <div className="top-[78px] absolute right-[1100px]  text-white">© 2025 Bog'ot tumani - AKM. Barcha huquqlar himoyalangan.</div>
              <div className="text-[#fff] top-[102px] absolute right-[1170px]"><span class="text-white">Powered by </span> <span class="text-white "><a href="#">AZIZBEK1701</a></span> and  <span className="text-white"><a href="#">SOBIRJON</a></span></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
