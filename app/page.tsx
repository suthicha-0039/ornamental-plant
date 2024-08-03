import MyNavBar from "@/components/MyNavBar";
import React from "react";

function Home() {
  return (
    <>
      
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://img.kapook.com/u/2018/Jarosphan/Home/Garden/149994/dc_03.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-2xl font-extrabold text-black sm:text-4xl">
        6504031630039 สุธิชา ชัยสุ

        <strong className="block font-extrabold text-rose-800"> Ornamental plants. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-rose-800 sm:text-xl/relaxed">
      ไม้ประดับ หมายถึงพืชที่ปลูกไว้เพื่อความสวยงามที่มากขึ้น ใช้ประดับตกแต่งอาคารบ้านเรือนให้เกิดความเจริญตา ส่วนใหญ่ไม้ประดับมักเป็นพืชดอก จึงเรียกรวมกันว่า ไม้ดอกไม้ประดับ ซึ่งความเป็นจริงแล้วไม้ประดับไม่จำเป็นต้องมีดอกก็ได้ เพียงมีใบที่ดูดีหรือมีสีสันสวยงามก็ใช้ได้ ไม้ประดับมีขนาดเล็กหรือขนาดย่อมพอเหมาะแก่พื้นที่จัดตกแต่ง อาจปลูกไว้ในกระถาง ปลูกลงดิน หรือแขวนห้อยไว้ก็ได้
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;
