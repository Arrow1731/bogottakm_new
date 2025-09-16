// import React, { Component } from 'react'
// import Photo_D from '../assets/Direktor rasmi.png';
// import Side_1 from '../assets/Slide 1.png';

// export default class Home extends Component {
//   render() {
//     return (
//       <div>
//         <div className='bg-[#E5E5E5] h-[500px]'>
//           <div className="h-96 relative container">
//             <div className="h-64 left-[320px] top-[80px] absolute">
//               <div className="w-[1196.31px] h-28 left-[-300px] top-0 absolute text-center justify-center text-[#000] text-[50px] font-bold">Bog'ot tumani axborot kutubxona markaziga <br /> Xush kelibsiz</div>
//               <div className="w-[760px] h-12 top-[148px] absolute text-center justify-center left-[-80px] text-[#000] text-[23px]">Bilim, ta'lim va jamiyat uchun darvozangiz. Minglab kitoblarni kashf eting,<br /> tadbirlarda qatnashing va boshqa kitobxonlar bilan bog'laning.</div>
//               <div className='relative left-[150px]'>
//                 <div className="w-[140px] h-10 top-[232px] absolute bg-blue-600 rounded-2xl">
//                   <div className="w-[130px] h-3.5 left-[6px] top-[13px] absolute text-center justify-center text-[#000] text-sm font-normal font-['Inter'] leading-tight"><a href="#">Kitoblarni ko'rish</a></div>
//                 </div>
//                 <div className="w-[120px] h-10 left-[152px] top-[232px] absolute rounded-2xl outline outline-2 outline-offset-[-2px] outline-blue-600">
//                   <div className="w-[100px] h-3.5 left-[12px] top-[13px] absolute text-center justify-center text-blue-600 text-xs font-normal font-['Inter'] leading-tight"><a href="#">Yangiliklarni ko'rish</a></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MAIN Sec */}
//         <main>
//           <section className='container'>
//             <div className="h-[512px] relative ">
//               <div className="w-64 h-9 top-[150px] absolute justify-center text-gray-900 text-3xl font-bold font-['Inter'] leading-9">Kutubxonamiz Haqida</div>
//               <div className="w-[566.37px] h-1 top-[215px] absolute justify-center text-gray-600 text-base font-normal font-['Inter'] leading-7">Hozirda Bog’ot tuman Axborot-kutubxona markazi tumandagi<br />Madaniyat uyi binosida joylashgan.</div>
//               <div className="w-[521.06px] h-11 top-[287px] absolute justify-center text-gray-600 text-base font-normal font-['Inter'] leading-7">Bizning fondimizda 96 000 dan ortiq kitoblar, elektron, audio va raqamli<br />adabiyotlar, davriy nashrlar va multimedia fayillari mavjud.</div>
//               <div className="w-[600px] h-96 left-[984px] top-[32px] absolute">
//                 <div className="w-[552px] h-96 left-[24px] top-[24px] absolute overflow-hidden">
//                   <img className="w-[552px] h-96 left-0 top-0 absolute rounded" src={Side_1} />
//                 </div>
//               </div>
//             </div>


//             {/* Info of Director */}

//             <div className='container flex flex-col justify-center items-center'>
//               <h2 className='text-center font-bold text-[25px]'>Xorazm viloyati, Bog‘ot tuman Axborot kutubxona markazi direktori</h2>
//               <div className='flex items-center gap-[90px] max-w-[660px] w-full h-[350px] mt-[100px] mb-[100px] bg-[#e5e6e5d3] shadow-lg shadow-gray-400 rounded-[20px] p-[20px]'>
//                 <div>
//                   <img src={Photo_D} alt="" />
//                 </div>
//                 <div>
//                   {/* <div>Director</div> */}
//                   <div className='font-bold text-[21px]'>Rajabova Gulbahor Farxadovna</div><br />
//                   <div>Tel: <a href="#">+998 (99) - 166 - 69 - 00</a></div>
//                   <div>Qabul kuni: <br /> Chorshanba</div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     )
//   }
// }










import React, { Component } from "react";
import Photo_D from "../assets/Direktor rasmi.png";
import Side_1 from "../assets/Slide 1.png";

export default class Home extends Component {
  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* HERO SECTION */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Bog'ot tumani axborot kutubxona markaziga <br /> Xush kelibsiz
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Bilim, ta'lim va jamiyat uchun darvozangiz. Minglab kitoblarni
              kashf eting, tadbirlarda qatnashing va boshqa kitobxonlar bilan
              bog'laning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
              >
                Kitoblarni ko'rish
              </a>
              <a
                href="#"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50 transition"
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