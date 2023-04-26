import React from "react";
import Button from "~/components/button";
import supabase from "utils/supabase";
import { Form, useLoaderData } from "@remix-run/react";
import { ActionArgs, LoaderArgs } from "@remix-run/node";
import data from "~/components/data";

export const loader = async ({ request }: LoaderArgs) => {
  /* const { data } = await supabase.from("gästebuch").select(); */
  const url = new URL(request.url);
  const search = url.searchParams.get("search");

  if (search) {
    const { data, error } = await supabase
      .from("gästebuch")
      .select()
      .ilike("name", `%${search}%`);

    return { data };
  }
  const { data } = await supabase.from("gästebuch").select();
  return { data };
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const ankunfts_datum = formData.get("ankunfts_datum");
  const kurznachricht = formData.get("kurznachricht");

  await supabase
    .from("gästebuch")
    .insert([{ name, ankunfts_datum, kurznachricht }]);

  return {};
}

export default function gästebuch() {
  const { data } = useLoaderData();
  return (
    <div>
      <Form method="get">
        <input
          className="border-2 border-black rounded-lg text-black gap-2"
          type="text"
          name="search"
          placeholder="search"
        ></input>
        <button>suchen</button>
      </Form>

      <Form method="post">
        <br />

        <div>
          <h1 className="text-3xl">Gästebuch</h1>
          <br />
          <div className="flex flex-col w-[200px]">
            Name:
            <input
              className="border-2 border-black rounded-lg text-black"
              type="text"
              name="name"
              placeholder="name"
            ></input>
          </div>
          <br />
          Datum der Ankunft:
          <div className="w-[200px]">
            <input
              className="border-2 border-black rounded-lg text-black"
              type="text"
              name="ankunfts_datum"
              placeholder="ankunfts_datum"
            ></input>
            <br />
            <br />
            Kurznachricht (Optional):
            <div className="">
              <textarea
                className="border-2 border-black rounded-lg text-black w-[300px] p-2"
                cols={6}
                name="kurznachricht"
                placeholder="kurznachricht"
              ></textarea>
              <br />
              <br />
              <div className="link">
                <button>Speichern</button>
              </div>
            </div>
            {data.map((entry: any, index: any) => (
              <div key={index}>
                <div className="flex flex-col">
                  {entry.name}
                  <br />
                  {entry.ankunfts_datum}
                  <br />
                  {entry.kurznachricht}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Form>
    </div>
  );
}
