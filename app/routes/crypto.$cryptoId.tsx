import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderArgs) {
  const { cryptoId } = params;
  const url = new URL(`https://api.coinlore.net/api/ticker/?id=${cryptoId}`);
  const response = await fetch(url);
  const data = await response.json();
  return json({ data: data[0] });
}

export default function Country() {
  const { data } = useLoaderData();

  return (
    <div>
      <h1 className="mb-6 text-2xl">{data.id}</h1>
      <div className="flex flex-col w-full gap-2 text-2xl">
        <div className="flex w-1/2 flex-col items-start gap-2">
          <p></p>
          <p>
            <br />
          </p>
        </div>
        Symb:
        {data.symbol}
        <br />
        price:
        {data.price_usd}
        <br />
        rank:
        {data.rank}
        <br />
        name:
        {data.name}
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
