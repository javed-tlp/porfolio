import React from "react";


function TechStack() {
  return (
    
      <div className=" flex mt-2 sm:h-96 justify-center items-center">
        {" "}
        <ul className=" h-4/5 w-4/5 grid grid-cols-2 sm:grid-cols-5  items-center gap-3">
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/html5.png" alt="html"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/css3.png" alt="css"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/js.png" alt="javascript"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/mongo.webp" alt="mongoDB"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/express.png" alt="express"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/react.png" alt="react"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/redux.png" alt="redux"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/node.png" alt="npde"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/tailwind.png" alt="npde"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src="/icon/git.png" alt="npde"></img>
          </li>
        </ul>
      </div>
  
  );
}

export default TechStack;
