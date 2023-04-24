import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Button from "~/components/button";

export async function loader() {
  const url = new URL("https://api.coinlore.net/api/tickers/");
  const response = await fetch(url);
  const cryptos = await response.json();
  return json({ cryptos });
}

export default function Crypto() {
  const { cryptos } = useLoaderData();

  return (
    <div className="justify-center ml-12">
      <h1 className="text-5xl">Cryptos</h1>
      <br />
      <ul className="underline">
        {cryptos.data.map((crypto: any, index: any) => (
          <li key={index}>
            <Button to={crypto.id}>{crypto.symbol}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
