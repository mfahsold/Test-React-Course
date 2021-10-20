import TheatreForm from "./TheatreForm";
import React from 'react';

export default function EditTheatre() {
    return (
        <>
        <h3>Edit Theatre</h3>
        <TheatreForm
            model={{name: "UCI Othmarschen"}}
            onSubmit={values => console.log(values)} />
        </>
    )
  }
  