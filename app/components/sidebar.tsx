import { Link, Outlet } from "@remix-run/react";
import Button from "./button";

export default function Sidebar() {
  return (
    <div className="bg-black text-white">
      <Button to="/countries">Countries</Button>|<Button to="/">Blog</Button>|
      <Button to="/about">About</Button>
      <Button to="/crypto">Cryptos</Button>
      <img className="h-32" src="https://jooinn.com/images/globe-logo-4.jpg" />
    </div>
  );
}
<div className="flex flex-row min-h-screen">
  <Sidebar />

  <div className=" ">
    <Outlet />
  </div>
</div>;
