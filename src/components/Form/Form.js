import React from "react";
import { useForm } from "@formcarry/react";
import success from "../../images/Success.png";
import "./Form.css";

function Form() {
  const { state, submit } = useForm({
    id: "s0HXuq19o",
  });

  if (state.submitted) {
    return (
      <div className="form__response">
        <span className="form__responce-text">
          Thank you! I am received your submission.
        </span>
        <img className="form__response-image" alt="success" src={success} />
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <label className="form__email-label" htmlFor="email">
        Enter your email here
      </label>
      <input
        className="form__email-input"
        placeholder="Email"
        id="email"
        type="email"
        name="email"
        minLength={2}
        required
      />
      <label className="form__text-label" htmlFor="message">
        And your message
      </label>
      <textarea
        placeHolder="Message"
        className="form__text-input"
        id="message"
        name="message"
        minLength={20}
        required
      />
      <button className="form__button" type="submit">
        Send
      </button>
    </form>
  );
}
export default Form;
