import { Field } from "formik";

const Input = ({ type, placeholder, name, onChange, value }) => {
  return (
    <>
      <Field
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;
