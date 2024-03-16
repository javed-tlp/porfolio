import React from "react";
import codeImg from "/image/coding.jpg";

const About = () => {
  return (
    <>
      <div className=" items-center sm:grid gap-4 sm:grid-cols-2 ">
        <div className="h-1/4 m-1 p-1  sm:w-auto sm:h-3/4 sm:m-8">
          <img
            className="ring-4 ring-neutral-50 h-full w-full"
            src={codeImg}
            alt="codeimg"
          ></img>
        </div>
        <div className=" m-1 sm:w-auto sm:m-8 md:h-3/4 p-1">
          <h3 className="text-xl sm:text-2xl underline font-bold">about me</h3>
          <p className="text-sm my-2 sm:text-lg border p-1">
            I'm Prashnat, a former gearhead and current coding enthusiast. While
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
