import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";
import React, { useState } from "react";
import MultipleSelector, {
  multipleSelectorModel,
} from "../forms/MultipleSelector";
import { genreDTO } from "../genres/genres.model";
import { theatreDTO } from "../movietheaters/theatre.model";

export function MovieForm(props: movieFormProps) {
  const [selectedGenres, setSeltecedGenres] = useState(
    mapToModel(props.selectedGenres)
  );
  const [nonSelectedGenres, setNonSeltecedGenres] = useState(
    mapToModel(props.nonSelectedGenres)
  );
  const [selectedTheatres, setSeltecedTheatres] = useState(
    mapToModel(props.selectedTheatres)
  );
  const [nonSelectedTheatres, setNonSeltecedTheatres] = useState(
    mapToModel(props.nonSelectedTheatres)
  );

  function mapToModel(
    items: { id: number; name: string }[]
  ): multipleSelectorModel[] {
    return items.map((items) => {
      return { key: items.id, value: items.name };
    });
  }

  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.genresIds = selectedGenres.map((item) => item.key);
        values.theatresIds = selectedTheatres.map((item) => item.key);
        props.onSubmit(values, actions);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Title" field="title" />
          <CheckboxField displayName="In Theaters" field="inTheaters" />
          <TextField displayName="Trailer" field="trailer" />
          <DateField displayName="Release Date" field="releaseDate" />
          <ImageField
            displayName="Poster"
            field="poster"
            imageURL={props.model.posterURL}
          />
          <MultipleSelector
            displayName={"Genres"}
            selected={selectedGenres}
            nonSelected={nonSelectedGenres}
            onChange={(selected, nonSelected) => {
              setSeltecedGenres(selected);
              setNonSeltecedGenres(nonSelected);
            }}
          />

          <MultipleSelector
            displayName={"Theatres"}
            selected={selectedTheatres}
            nonSelected={nonSelectedTheatres}
            onChange={(selected, nonSelected) => {
              setSeltecedTheatres(selected);
              setNonSeltecedTheatres(nonSelected);
            }}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link className="btn btn-secondary" to="/create">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedTheatres: theatreDTO[];
  nonSelectedTheatres: theatreDTO[];
}
