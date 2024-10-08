import React from "react";
import codeImg from "/image/coding.jpg";

const About = () => {
  return (



    
    <>
      <div className=" items-center mt-auto sm:grid sm:grid-cols-2 ">
        <div className="h-1/4 m-1 p-1  sm:w-auto sm:h-3/4 sm:ml-20">
          <img
            className=" border-orange-400 border-l-4 border-b-4 h-full w-full"
            src={codeImg}
            alt="codeimg"
          ></img>
        </div>
        <div className="m-1 sm:mt-24 sm:w-auto sm:mr-20 md:h-3/4 p-1">
          <h3 className="text-xl sm:text-2xl text-orange-600  underline font-bold">about me</h3>
          <p className="text-sm my-2 sm:text-lg  border-orange-400 border-l-2 border-b-2  p-2">
            I'm Prashant, a former gearhead <strong>(Mechanical Engineer)</strong> and current coding enthusiast. While
            I loved the world of mechanics, the pull of creativity and user
            connection in web development proved too strong. Now, I'm leveraging
            my analytical mind and problem-solving skills to build intuitive and
            impactful web experiences. I'm actively building projects showcasing
            my skills in Web-Developement. Excited to keep learning,
            collaborating, and contributing meaningful solutions. Want to join
            the journey? Explore my portfolio and let's connect!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
