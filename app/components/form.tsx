"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { validate } from "app/utils/validate";
import { Button } from "app/components/ui";

interface IValues {
  email: string;
  subject: string;
  body: string;
}

function FormInput({
  type,
  id,
  error = false,
  require,
  errorMessage = "",
  variablePropName = "aria-describedby",
  variablePropValue = `${id}_error`,
  ...props
}) {
  const variableAttribute = { [variablePropName]: variablePropValue };
  return (
    <div>
      <label
        htmlFor={id}
        className="uppercase after:content-['\a'] after:whitespace-pre text-gray-500 dark:text-white font-medium leading-6 text-sm tracking-wider"
      >
        {id}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        autoComplete="off"
        spellCheck="false"
        aria-required="true"
        className="mt-1 p-3 w-full outline-none bg-gray-200 dark:bg-gray-800 rounded-md text-black dark:text-white outline-offset-4 focus:outline-black transition-all"
        {...(error ? variableAttribute : "")}
        {...props}
      />
      {error && (
        <p id={`${id}_error`} className="text-red-600 dark:text-red-600 mt-3">
          * {errorMessage}
        </p>
      )}
    </div>
  );
}

function FormTextArea({
  id,
  error = false,
  errorMessage = "",
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}) {
  const variableAttribute = { [variablePropName]: variablePropValue };

  return (
    <>
      <label
        htmlFor={id}
        className="uppercase after:content-['\a'] after:whitespace-pre text-gray-500 dark:text-white font-medium leading-6 text-sm tracking-wider"
      >
        {id}
      </label>
      <textarea
        {...props}
        name={id}
        id={id}
        rows={10}
        spellCheck="false"
        autoComplete="off"
        className="mt-1 p-3 w-full outline-none bg-gray-200 dark:bg-gray-800 rounded-md text-black dark:text-white outline-offset-4 focus:outline-black transition-all"
        {...(error ? variableAttribute : "")}
      ></textarea>
      {error && (
        <p id={`${id}_error`} className="text-red-600 dark:text-red-600 mt-3">
          *{errorMessage}
        </p>
      )}
    </>
  );
}

interface IErrors extends Partial<IValues> {}

export function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<IValues>({
    email: "",
    subject: "",
    body: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = form.current;
    if (!formElement) return;

    const formValues: IValues = {
      email: formElement.email.value,
      subject: formElement.subject.value,
      body: formElement.body.value,
    };

    const validationErrors = validate(formValues);
    if (validationErrors && Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    setErrors({});
    setLoading(true);

    // Assuming emailjs implementation here
    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    //     formElement,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(() => {
    //     return setValues({
    //       email: "",
    //       subject: "",
    //       body: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Email sending failed:", error);
    //   });

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-10" ref={form} onSubmit={handleSubmit}>
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          value={values.email}
          type="email"
          id="email"
          require={true}
          onChange={handleChange}
          error={!!errors.email}
          errorMessage={errors.email ? errors.email : ""}
          placeholder="Email"
        />
        <FormInput
          value={values.subject}
          type="text"
          id="subject"
          require={true}
          onChange={handleChange}
          error={!!errors.subject}
          errorMessage={errors.subject ? errors.subject : ""}
          placeholder="Subject"
        />
      </div>
      <div>
        <FormTextArea
          value={values.body}
          id="body"
          onChange={handleChange}
          error={!!errors.body}
          errorMessage={errors.body ? errors.body : ""}
          placeholder="Body"
        />
      </div>
      <div>
        <Button type="button" disabled={loading}>
          send
        </Button>
      </div>
    </form>
  );
}
