import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";
import React from 'react';

export default function TypeAheadActors(props: typeAheadActorsProps) {
  const actors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Arnold Schwarzenegger",
      character: "",
      picture:
        "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg",
    },
    {
      id: 2,
      name: "Angelina Jolie",
      character: "",
      picture:
        "https://www.hawtcelebs.com/wp-content/uploads/2012/02/Angelina-Jolie-at-In-The-Land-Of-Blood-And-Honey-Photocall-in-Berlin-7.jpg",
    },
    {
      id: 3,
      name: "Will Smith",
      character: "",
      picture:
        "https://www.hdwallpaper.nu/wp-content/uploads/2015/07/will_smith_actor_man_face_black_serious_look_hd-wallpaper-18774.jpg",
    },
    {
      id: 4,
      name: "Judi Dench",
      character: "",
      picture:
        "https://turkinfo.hu/wp-content/uploads/2019/12/DENCH-Judi-scaled.jpg",
    },
  ];
  const [multiSelections, setMultiSelections] = useState([]);
  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={(actor) => {
          console.log(actor);
        }}
        options={actors}
        labelKey={(actor) => actor.name}
        filterBy={["name"]}
        placeholder="Write the name of the actor"
        minLength={1}
      />
    </ div>
  );
}

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
}
