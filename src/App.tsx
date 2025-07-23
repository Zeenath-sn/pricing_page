import { useState } from "react";
import { data } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="mx-12">
      <header className=" flex items-center pt-8 border-t-1 border-b-1 border-gray-300 mt-8 justify-center flex-col pb-10">
        <h1 className="text-center text-3xl font-bold pb-2">
          Choose a plan to grow your buisness
        </h1>
        <h3 className="text-center text-sm">
          Select one of the three plans to help us move forward and provide you
          with the best services/
        </h3>
      </header>
      <main className="pt-8 flex justify-center">
        <div className="relative border-gray-950 border-1 w-fit rounded-sm">
          <button
            className="bg-black text-white px-3 py-2 hover:cursor-pointer hover:shadow hover:shadow-lg"
            onClick={() => setIsMonthly(true)}
          >
            MONTHLY
          </button>
          <button
            className="bg-white text-gray-950 px-3 py-2 rounded-sm hover:cursor-pointer hover:shadow hover:shadow-lg"
            onClick={() => setIsMonthly(false)}
          >
            ANNUAL
          </button>
          <div className="text-sm absolute -top-4 -right-23 bg-gray-100 px-3 py-1 before:content-[''] before:w-[21px] before:h-[21px] before:absolute before:block before:rounded-sm before:bg-gray-100 before:rotate-45 before:left-[-12px]">
            Save 20%
          </div>
        </div>
      </main>
      <div className="w-[100%] m-auto md:w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 md:m-15">
          {data?.map((d) => {
            return (
              <div
                key={d.id}
                className={`border-gray-300 border-1 rounded-md shadow text-center m-4 p-5 flex flex-col gap-4 relative ${
                  d.name === "pro" && "shadow-2xl"
                }`}
              >
                {d.name === "pro" && (
                  <div className="absolute -top-[5%] left-0 bg-gray-800 text-white w-[100%] rounded-t-md">
                    Recommended
                  </div>
                )}
                <h3 className="text-lg uppercase font-medium">{d.name}</h3>
                <h3 className="text-3xl uppercase font-bold">
                  {isMonthly ? d.monthly : d.yearly}
                </h3>
                <p className="text-sm text-gray-500">{d.description}</p>
                <p>
                  Feature A
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={d.featureA ? faCheck : faXmark}
                    />{" "}
                  </span>
                </p>
                <p>
                  Feature B
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={d.featureB ? faCheck : faXmark}
                    />{" "}
                  </span>
                </p>
                <p>
                  Feature C
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={d.featureC ? faCheck : faXmark}
                    />{" "}
                  </span>
                </p>
                <button className="bg-gray-950 text-white px-3 py-2 hover:cursor-pointer hover:shadow hover:shadow-lg">
                  Select Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="text-lg font-bold flex align-center justify-center">
          Need a custom plan? Let's talk.
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-sm hover:cursor-pointer hover:shadow hover:shadow-lg">
          Schedule a Call
        </button>
      </div>
    </section>
  );
}

export default App;
