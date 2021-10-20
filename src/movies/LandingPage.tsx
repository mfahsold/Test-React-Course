import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";
import React from 'react';

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            ID: 1,
            title: "Spiderman 3",
            poster:
              "https://www.themoviedb.org/t/p/original/2jLxKF73SAPkyhIWrnv67IH7kJ1.jpg",
          },
          {
            ID: 2,
            title: "Superman",
            poster:
              "https://www.themoviedb.org/t/p/original/aIuTzeGQNSkZEdBzsZrT9yr8Jkf.jpg",
          },
          {
            ID: 3,
            title: "Matrix",
            poster:
              "https://www.themoviedb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
          },
        ],
        upcomingReleases: [
          {
            ID: 4,
            title: "Das Schöne und das Biest",
            poster:
              "https://image.tmdb.org/t/p/w500/2fZ8FQXplJPA9EloPH7Fkaw4mQX.jpg",
          },
          {
            ID: 5,
            title: "Cars",
            poster:
              "https://farm4.staticflickr.com/3801/13104752074_8003b06e80_o.jpg",
          },
          {
            ID: 6,
            title: "Shrek",
            poster:
              "https://fanart.tv/fanart/movies/808/movieposter/shrek-5272990541c4a.jpg",
          },
        ],
      });
    }, 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />
      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </>
  );
}
