import React from "react";
import { FaUser, FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.contactListItem}>
      <div className={s.contactDetails}>
        <p>
          <FaUser />
          <span>{name}</span>
        </p>
        <p>
          <FaPhone />
          <span>{number}</span>
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
