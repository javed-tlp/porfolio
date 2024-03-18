import React from "react";
import myimg from "/image/prashant.jpg";
import pdfFile from "/resume/PRashant.pdf";
const Home = () => {
  return (
    <div className="p-3 sm:px-20 ">
      <div className="flex  justify-center items-center flex-wrap ">
        <div className=" text-left sm:ml-3 sm:w-3/5 mx-2 mt-4 md:my-20 ">
          <div className="  sm:float-start sm:px-10 justify-center">
            <p className="text-2xl font-semibold sm:text-4xl md:font-bold">
              Hello, It's Me 
            </p>
            <h2 className="text-3xl font-medium sm:text-6xl md:font-bold">
              Prashant Singh
            </h2>
            <h2 className="text-2xl mt-3 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 sm:text-4xl bg-orange-600 text-transparent bg-clip-text font-bold ">
              MERN Stack Developer
            </h2>
            <p className="text-lg font-semibold mt-5  sm:mt-6">
              Welcome to my portfolio! I'm thrilled to have you here. I'm a B.Tech, Mechanical Engineering graduate.
              🌐 I build web application using MERN stack. I love to use React.js and Next.js
            </p>
          </div>
        </div>
        <div className="flex justify-center m-4 sm:m-2   shadow-orange-400 md:mx-8 md:h-60">
          <img
            className="h-60 w-52 border-2 p-2  shadow-md  transition-all duration-300 shadow-cyan-300 hover:border-orange-500  hover:scale-110 hover:brightness-50 "
            src={myimg}
            alt="Img"
          ></img>
        </div>
      </div>
      <div className="grid place-content-center mt-2 ">
        <a className="mx-auto" href={pdfFile} download="PrashantSingh">
          <button
            className="px-9 py-2 rounded-2xl font-semibold bg-orange-500 hover:bg-yellow-500 ease-in duration-300"
            type="file"
            download="true"
          >
            Download-Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
