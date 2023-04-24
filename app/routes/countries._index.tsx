import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Button from "~/components/button";

export async function loader() {
  const url = new URL("https://restcountries.com/v3.1/region/europe");
  const response = await fetch(url);
  const data = await response.json();
  return json({ data });
}

export default function Countries() {
  const { data } = useLoaderData();

  return (
    <div className="justify-center ml-12">
      <h1 className="text-5xl">Countries</h1>
      <br />
      <ul className="underline">
        {data.map((country: any, index: any) => (
          <li>
            <Button to={country.name.common}>{country.name.common}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
