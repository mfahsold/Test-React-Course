import TheatreForm from "./TheatreForm";
import React from 'react';

export default function CreateTheatre() {
  return (
    <>
      <h3> Create Movie Theatre</h3>
      <TheatreForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
