import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import "./login.css";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const result = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        await updateDoc(doc(db, "users", result.user.uid), {
          isOnline: true,
        });
        navigate("/", { replace: true });
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("*Invalid email")
        .required("*Email is required"),
      password: Yup.string().required("*Password is required"),
    }),
  });
  return (
    <section className="login">
      <h3>Login</h3>
      <form onSubmit={formik.handleSubmit}>
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
            {loading ? "Loging you in..." : "Login"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
