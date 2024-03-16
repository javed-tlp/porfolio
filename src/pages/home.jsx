import React from "react";
import myimg from "/image/prashant.jpg";
import pdfFile from "/resume/PRashant.pdf";
const Home = () => {
  return (
    <div className=" ">
      <div className="flex  justify-center items-center flex-wrap ">
        <div className=" text-left sm:ml-3 sm:w-3/5 mx-2 mt-4 md:my-20 ">
          <div className="  sm:float-start justify-center">
            <h1 className="text-2xl font-semibold sm:text-5xl md:font-bold">
              Hi, I'm Prashant Singh
            </h1>
            <h2 className="text-2xl mt-3 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 sm:text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-cyan-500 to-blue-500 ...">
              MERN Stack Web-Developer
            </h2>
            <p className="text-lg font-semibold mt-5  sm:mt-6">
              Welcome to my portfolio! I'm thrilled to have you here. In this
              digital space, I aim to showcase my passion for web development
              and my dedication to creating immersive digital experiences. As
              you explore this portfolio, you'll discover a collection of
              projects that represent my skills, creativity.
            </p>
          </div>
        </div>
        <div className=" absoluteflex justify-center m-2  md:mx-8 md:h-52">
          <img
            className="h-52 border-4 mt-4 rounded-full w-52 bg-cover ring-8 ring-cyan-400 ring-opacity-40 bg-center"
            src={myimg}
            alt="Img"
          ></img>
        </div>
      </div>
      <div className="grid place-content-center mt-2 ">
        <a className="mx-auto" href={pdfFile} download="PrashantSingh">
          <button
            className="px-9 py-2 rounded-2xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
            type="file"
            src=""
            download="true"
          >
            Get-Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
