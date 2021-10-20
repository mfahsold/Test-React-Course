import { Link } from "react-router-dom";
import React from 'react';

export default function IndexTheatres() {
  return (
    <>
      <h3>Theatres</h3>
      <Link className="btn btn-primary" to="/theatres/create">Create theatre</Link>
    </>
  );
}
