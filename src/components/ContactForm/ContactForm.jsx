import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .matches(
      /^[A-Z][a-z]*(?: (?:[a-z]+ )?[A-Z][a-z]*)*$/,
      "Name must start with a capital letter, can have multiple words, and may include lowercase connectors"
    )

    .required("Full name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must follow the pattern XXX-XX-XX")
    .required("Phone number is required"),
});

const ContactForm = ({ addContact }) => {
  const nameID = nanoid();
  const numberID = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        addContact({ id: nanoid(), ...values });
        actions.resetForm();
      }}
      validationSchema={ContactSchema}
    >
      <Form className={s.formContainer}>
        <div>
          <label htmlFor={nameID}>
            <span>Full name:</span>
            <Field type="text" name="name" id={nameID} />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
        </div>
        <div>
          <label htmlFor={numberID}>
            <span>Phone number:</span>
            <Field type="text" name="number" id={numberID} />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
