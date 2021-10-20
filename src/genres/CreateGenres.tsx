import GenreForm from "./GenreForm";
import React from 'react';

export default function CreateGenres() {
  return (
    <>
      <h3>Create Genres</h3>

      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 1));
          console.log(value);
        }}
      />
    </>
  );
}
