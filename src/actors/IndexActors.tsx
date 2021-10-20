import { Link } from "react-router-dom";
import React from 'react';

export default function IndexActors() {
  return (
    <>
      <h3>Actors</h3>
      <Link className="btn btn-primary" to="/actors/create">Create actor</Link>
    </>
  );
}
