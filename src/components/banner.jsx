import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
       <div className="carousel w-full">

  
  <div
    id="slide1"
    className="carousel-item relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://i.ibb.co.com/Q0xQZtV/premium-photo-1661903078140-b2f497f7bf02-q-80-w-1170-auto-format-fit-crop.jpg')",
    }}
  >

    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>


    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-4">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Find Your Perfect Tutor
        </h1>

        <p className="py-6 text-m lg:text-lg">
          Learn anytime from expert tutors.
        </p>

        <Link href="/tutors" className="btn bg-blue-500 text-white rounded-full">
          Get Started
        </Link>
      </div>
    </div>

 
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
      <a href="#slide3" className="btn btn-circle">
        ❮
      </a>

      <a href="#slide2" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>

  
  <div
    id="slide2"
    className="carousel-item relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://i.ibb.co.com/PdtvGWP/photo-1501504905252-473c47e087f8-q-80-w-1074-auto-format-fit-crop.jpg')",
    }}
  >

    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>


    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-4">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Learn From Expert Tutors
        </h1>

        <p className="py-6 text-lg">
          Online and offline tutoring for every subject.
        </p>

         <Link href="/tutors" className="btn bg-blue-500 text-white rounded-full">
          Get Started
        </Link>
      </div>
    </div>

  
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
      <a href="#slide1" className="btn btn-circle">
        ❮
      </a>

      <a href="#slide3" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>

  
  <div
    id="slide3"
    className="carousel-item relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://i.ibb.co.com/jPcNFw1Q/photo-1522202176988-66273c2fd55f-q-80-w-1171-auto-format-fit-crop.jpg')",
    }}
  >
  
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>


    <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-4">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Start Learning Today
        </h1>

        <p className="py-6 text-lg">
          Book classes with trusted tutors easily.
        </p>

         <Link href="/tutors" className="btn bg-blue-500 text-white rounded-full">
          Get Started
        </Link>
      </div>
    </div>

    {/* Navigation */}
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-20">
      <a href="#slide2" className="btn btn-circle">
        ❮
      </a>

      <a href="#slide1" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>

</div>
    );
};

export default Banner;