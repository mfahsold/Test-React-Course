import GenericListComponent from "../utils/GenericListComponent";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from "./MoviesList.module.css";
import React from 'react';

export default function MoviesList(props: moviesListProps) {
  return (
  <GenericListComponent 
  loadingUI ={<>Loading...</>}
  list={props.movies}
  >
    <div className={css.div}>
      {props.movies?.map((movie) => (
        <IndividualMovie {...movie} key={movie.ID} />
      ))}
    </div>
  </GenericListComponent>
  )
  
  
}

interface moviesListProps {
  movies?: movieDTO[];
}
