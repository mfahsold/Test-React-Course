import React from "react";
import { genreDTO } from "../genres/genres.model";
import { theatreDTO } from "../movietheaters/theatre.model";
import { MovieForm } from "./MovieForm";

export default function EditMovie() {
  const selectedGenres: genreDTO[] = [{ id: 1, name: "Comedy" }];
  const nonSelectedGenres: genreDTO[] = [{ id: 2, name: "Drama" }];
  const selectedTheatres: theatreDTO[] = [{ id: 1, name: "UCI Othmarschen" }];
  const nonSelectedTheatres: theatreDTO[] = [{ id: 2, name: "Cinemax Dammtor" }];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Terminator",
          inTheaters: true,
          trailer: "https://www.youtube.com/watch?v=WXB7avUfo0I",
          releaseDate: new Date("2016-01-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={selectedGenres}
        nonSelectedGenres={nonSelectedGenres}
        selectedTheatres={selectedTheatres}
        nonSelectedTheatres={nonSelectedTheatres}
      />
    </>
  );
}
