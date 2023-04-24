import React from "react";

const person = {
  name: "Maximilian",
  age: 15,

  hobbys: [
    {
      bezeichnung: "trading",
      beschreibung: "trading with kryptocurrencys",
    },
    {
      bezeichnung: "gym",
      beschreibung: "training",
    },
  ],

  adress: {
    housenumber: 35,
    city: "Bückeburg",
    street: "Zu den Brücken",
  },

  haircolor: "brown",
  eyecolor: "blue",
  ownsbike: true,
};

export default function About() {
  return (
    <div>
      <div className=" flex flex-col">
        <h1 className="text-3xl">About me</h1>
        <p> name: {person.name}</p>
        <p> age: {person.age}</p>
        <p>hobys: {person.hobbys[0].bezeichnung} hobys: </p>

        <ul>
          {person.hobbys.map((hobby: any, index: any) => (
            <li key={index}>
              <div> {hobby.bezeichnung}</div>
              <div> {hobby.beschreibung}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
