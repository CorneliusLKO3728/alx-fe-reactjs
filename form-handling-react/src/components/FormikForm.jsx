
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      alert("User registered successfully with Formik!");
      resetForm();
    } else {
      alert("Registration failed!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>User Registration (Formik + Yup)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div style={{ margin: "10px 0" }}>
            <Field name="username" placeholder="Username" style={{ width: "100%" }} />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          </div>

          <div style={{ margin: "10px 0" }}>
            <Field name="email" type="email" placeholder="Email" style={{ width: "100%" }} />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div style={{ margin: "10px 0" }}>
            <Field name="password" type="password" placeholder="Password" style={{ width: "100%" }} />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
