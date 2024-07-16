"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import RecentProjects1 from "./RecentProject1";
import RecentProjects2 from "./RecentProject2";
import RecentProjects3 from "./RecentProject3";

const RecentProjects = () => {
  return (
    <div className="">
      <h1 className="heading">
        My project <br />
        <span className="text-purple text-lg">
          🚀 I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects. 🚀
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/https://blackonefurniture.vercel.app"
              href="https://blackonefurniture.vercel.app/"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 h-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <a href="https://blackonefurniture.vercel.app/"></a>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  {" "}
                  <a
                    className="flex"
                    href="https://blackonefurniture.vercel.app/"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple btn">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />{" "}
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
        <RecentProjects1 />
        <RecentProjects2 />
        <RecentProjects3 />
      </div>
    </div>
  );
};

export default RecentProjects;
