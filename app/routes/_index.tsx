import { Link } from "@remix-run/react";
import React from "react";
import Blogs from "~/components/blogs";
import Button from "~/components/button";

export default function Index() {
  return (
    <div className="text-3xl ">
      <div>
        Blog einträge:
        <br />
        <br />
        <Blogs
          text="Slovenien ist ein kleines Land in Mitteleuropa mit atemberaubenden Landschaften und charmanten Städten. Hier gibt es alles, was das Urlauberherz begehrt: kristallklare Flüsse, Berge zum Wandern und Skifahren, Seen zum Schwimmen und Bootfahren, historische Burgen und Städte zum Entdecken und natürlich auch köstliches Essen und Wein. Ein Urlaub in Slowenien bietet eine perfekte Mischung aus Natur, Kultur und Entspannung.
        



"
          title="Urlaub in Slowenien"
        />
        <br />
        <Blogs
          text="Serbien ist ein faszinierendes Reiseziel mit einer reichen Kulturgeschichte und atemberaubenden Landschaften. Von der pulsierenden Hauptstadt Belgrad bis zu den malerischen Dörfern in den Bergen, gibt es viel zu entdecken. Probieren Sie unbedingt die einzigartige Küche und besuchen Sie die wunderschönen orthodoxen Klöster. Die gastfreundliche Bevölkerung macht den Aufenthalt zu einem unvergesslichen Erlebnis. Ein Urlaub in Serbien lohnt sich auf jeden Fall!"
          title="Das Unterschätzte Land Serbien"
        />
        <br />
        <br />
      </div>
    </div>
  );
}
