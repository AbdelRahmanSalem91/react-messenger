import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import "./register.css";
import { useNavigate } from "react-router";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          name: values.name,
          email: values.email,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: true,
        });
        navigate("/", { replace: true });
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("*Name is required"),
      email: Yup.string()
        .email("*Invalid email")
        .required("*Email is required"),
      password: Yup.string().required("*Password is required"),
    }),
  });
  return (
    <section className="register">
      <h3>Create an account</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="btn-container">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Creating your account..." : "Sign Up"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
