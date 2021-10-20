import { Link } from "react-router-dom";
import React from 'react';

export default function IndexGenres() {
  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary" to="/genres/create">Create genre</Link>
    </>
  );
}
