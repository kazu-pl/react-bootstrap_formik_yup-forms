import React from "react";
import logo from "./logo.svg";

import "./App.css";
import yup from "common/yup/yup";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form as FormikForm, Formik, FormikHelpers } from "formik";
import Login, { InitialValues } from "view/Login";

const initialValues: InitialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const handleSubmit = (
  values: InitialValues,
  { resetForm }: FormikHelpers<InitialValues>
) => {
  console.log(values);
  console.log({ resetForm });
};

function App() {
  return (
    <div className="App">
      <Container fluid="sm">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormikForm>
            <Login />
          </FormikForm>
        </Formik>
      </Container>
    </div>
  );
}

export default App;
