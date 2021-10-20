import { useParams } from "react-router";
import GenreForm from "./GenreForm";
import React from 'react';

export default function EditGenres() {
  const { id }: any = useParams();
  return (
    <>
      <h3>Edit Gerne</h3>
      <GenreForm
        model={{ name: "Action" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 1));
          console.log(value);
          console.log(id);
        }}
      />
    </>
  );
}
