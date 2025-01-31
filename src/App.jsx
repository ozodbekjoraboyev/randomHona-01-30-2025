import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [random, setrandom] = useState(0);
  const [stol, setstol] = useState(0);
  const number_son = () => {
    setrandom(Math.floor(Math.random() * 6));
    setstol(Math.floor(Math.random() * 3));
  };
  // console.log(number_son);

  const stullar = [
    [
      {
        bormi: true,
        oquvchi: {
          name: "Samandar",
          yoshi: 16,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "Abdulaziz",
          yoshi: 18,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "Bahrom",
          yoshi: 18,
        },
      },
    ],
    [
      {
        bormi: true,
        oquvchi: {
          name: "Muhamad",
          yoshi: 16,
        },
      },
      {
        bormi: false,
        name: undefined,
      },
      {
        bormi: false,
        name: undefined,
      },
    ],
    [
      {
        bormi: false,
        name: undefined,
      },
      {
        bormi: false,
        name: undefined,
      },
      {
        bormi: true,
        oquvchi: {
          name: "Asadbek",
          yoshi: 18,
        },
      },
    ],
    [
      {
        bormi: true,
        oquvchi: {
          name: "Ozodbek",
          yoshi: 18,
        },
      },
      {
        bormi: true,
        oquvchi: {
          name: "Nazirov",
          yoshi: 18,
        },
      },
      {
        bormi: false,
        name: undefined,
      },
    ],
    [
      {
        bormi: false,
        name: undefined,
      },
      {
        bormi: false,
        name: undefined,
      },
      {
        bormi: true,
        oquvchi: {
          name: "Abduloh",
          yoshi: 18,
        },
      },
    ],
    [
      {
        bormi: false,
        name: undefined,
        yoshi: null,
      },
      {
        bormi: false,
        name: undefined,
        yoshi: null,
      },
      {
        bormi: false,
        name: undefined,
        yoshi: null,
      },
    ],
  ];
  const xona = {
    patalog: "yashil",
    prayektr: "epson",
    doska: {
      rangi: "oq",

      doskani_pardasi: {
        rangi: "oq",
        uzunligi: 2,
        eniga: 2,
      },
    },
    partalar: stullar,
    oynlar: [
      {
        boyi: 150,
        eni: 100,
        ochiqligi: 2,
        jaluzi_rangi: "kulrang",
      },
      {
        boyi: 150,
        eni: 100,
        ochiqligi: 0,
        jaluzi_rangi: "kulrang",
      },
    ],
    kanditsaner: {
      rangi: "oq",
      ishlashi: false,
    },
  };
  console.log();

  return (
    <div className=" border-2 w-[600px] pl-8 p-2 m-auto">
      <div className=" m-auto w-[650px]  grid grid-cols-2 container gap-3  items-center">
        {xona.partalar.map((stolar, parta_index) => {
          return (
            <div>
              <div
                className={`${
                  random === parta_index ? "bg-red-700" : "bg-amber-600 "
                } rounded h-14 w-52`}
              ></div>
              <div className="flex justify-around w-52">
                {stolar.map((item, stol_index) => {
                  return (
                    <div
                      key={item.id}
                      className={` ${
                        random === parta_index && stol === stol_index
                          ? "bg-red-700 "
                          : "bg-amber-600 "
                      } mt-1  w-10 ${
                        item.bormi ? " h-7 " : " h-2"
                      } rounded text-white text-center`}
                    >
                      <div>{item.oquvchi?.name.slice(0, 1)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="m-auto flex  container justify-center -ml-5">
        <button
          onClick={number_son}
          className=" bg-green-600 px-10 py-2 rounded-xl cursor-pointer  text-white "
        >
          Random
        </button>
      </div>
    </div>
  );

}

export default App;
