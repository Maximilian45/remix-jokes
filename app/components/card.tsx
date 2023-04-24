import React from "react";

export default function Card({ children, text }: any) {
  return (
    <div className="bg-white p-4 text-black">
      <h1>{children}</h1>
      <p>{text}</p>
    </div>
  );
}
{
}
