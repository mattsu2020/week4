// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const App = () => (
  <div className="app">
    <h1>
      Name age Address Json Output Demo
    </h1>

    <Formik
      initialValues={{ name: "", age: 0, address: ""}}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
        console.log(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
	name: Yup.string().required(),
	age:  Yup.number().max(200,"Must be less than 200").required().positive().integer(),
	address:  Yup.string().required()
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ display: "block" }}>
              Name
            </label>

            <input
              id="name"
              placeholder="Enter your name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.name  && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}

            <label htmlFor="age" style={{ display: "block" }}>
              Age
            </label>

            <input
              id="age"
              placeholder="Enter your Age"
              type="number"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.age && touched.age
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.age  && touched.age && (
              <div className="input-feedback">{errors.age}</div>
            )}

            <label htmlFor="address" style={{ display: "block" }}>
              Address
            </label>

            <input
              id="address"
              placeholder="Enter your Adress"
              type="text"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.address && touched.address
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.address  && touched.address && (
              <div className="input-feedback">{errors.address}</div>
            )}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>

    <MoreResources />
  </div>
);

render(<App />, document.getElementById("root"));

