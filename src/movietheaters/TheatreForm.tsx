import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { theatreCreationDTO } from "./theatre.model";
import * as Yup from 'yup';

import React from 'react'

export default function TheatreForm(props: theatreForm) {
  return (
    <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required("This field is required").firstLetterUppercase()
        })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name" />
          <div style={{marginBottom: "1rem"}}>
            
          </div>
          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link className="btn btn-secondary" to="/theatres">Cancel</Link>
        </Form>
      )}
    </Formik>
  );
}
interface theatreForm {
    model: theatreCreationDTO;
    onSubmit(values: theatreCreationDTO, actions: FormikHelpers<theatreCreationDTO>): void;
}
