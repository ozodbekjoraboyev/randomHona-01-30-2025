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
    <>
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
                          ? "bg-red-700"
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
      <div className="m-auto flex  container justify-center -ml-14">
        <button
          onClick={number_son}
          className=" bg-green-600 px-10 py-2 rounded-xl cursor-pointer  text-white "
        >
          Random
        </button>
      </div>
    </>
  );

  //! 1 misol
  // const books = [
  //   { title: "Atomic Habits", pages: 320, genre: "Self-help" },
  //   { title: "Clean Code", pages: 464, genre: "Programming" },
  //   { title: "The Pragmatic Programmer", pages: 352, genre: "Programming" },
  //   { title: "War and Peace", pages: 1225, genre: "Fiction" },
  //   { title: "The Alchemist", pages: 197, genre: "Fiction" }
  // ];

  // const shortBooks = books.filter((item)=>item.pages < 500)

  // console.log(shortBooks);
  //! 2 misol

  // const users = [
  //   { name: "Ali", age: 22, city: "Tashkent" },
  //   { name: "Madina", age: 17, city: "Samarkand" },
  //   { name: "Javohir", age: 19, city: "Bukhara" },
  //   { name: "Sardor", age: 16, city: "Fergana" },
  // ];

  // const adultNames = users
  //   .filter((item) => item.age > 18)
  //   .map((ism) => ism.name);

  // console.log(adultNames);

  //! 3 misol

  // const products = [
  //   { name: "Laptop", price: 1200 },
  //   { name: "Phone", price: 800 },
  //   { name: "Tablet", price: 500 }
  // ];
  // const discountedProducts = products.map((item)=>({
  //   name: item.name,
  //   price: item.price * 0.9
  // }))

  // console.log(discountedProducts);
  //! 4 misol

  // const developers = [
  //   { name: "Hasan", experience: 5, tech: "React" },
  //   { name: "Zuhra", experience: 2, tech: "Vue" },
  //   { name: "Aziz", experience: 4, tech: "Angular" },
  //   { name: "Olim", experience: 1, tech: "Svelte" },
  // ];

  // const seniorDevs = developers
  //   .filter((item) => item.experience > 3)
  //   .map((ism) => ({
  //     name: ism.name,
  //     tech: ism.tech
  //   }));
  // console.log(seniorDevs);
  //! 5 misol

  // const students = [
  //   { name: "Ali", score: 95 },
  //   { name: "Madina", score: 82 },
  //   { name: "Javohir", score: 76 },
  //   { name: "Sardor", score: 65 },
  // ];

  // // Har bir talabaga harfli baho qo'shish
  // const gradedStudents = students.map((item) => {
  //   if (item.score > 90) {
  //     return { ...item, grade: "A" };
  //   } else if (item.score > 80) {
  //     return { ...item, grade: "B" };
  //   } else if (item.score > 70) {
  //     return { ...item, grade: "C" };
  //   } else if (item.score > 60) {
  //     return { ...item, grade: "F" };
  //   }
  // });

  // console.log(gradedStudents);
}

export default App;
