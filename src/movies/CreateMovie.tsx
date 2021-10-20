import React from "react";
import { genreDTO } from "../genres/genres.model";
import { theatreDTO } from "../movietheaters/theatre.model";
import { MovieForm } from "./MovieForm";

export default function CreateMovie() {
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: "Comedy" },
    { id: 2, name: "Drama" },
  ];
  const nonSelectedTheatres: theatreDTO[] = [
    { id: 1, name: "UCI Othmarschen" },
    { id: 2, name: "Cinemax Dammtor" },
  ];

  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{ title: "", inTheaters: false, trailer: "" }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={[]}
        nonSelectedGenres={nonSelectedGenres}
        selectedTheatres={[]}
        nonSelectedTheatres={nonSelectedTheatres}
      />
    </>
  );
}
