import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { validate } from 'utils/validate';
import FormTextArea from 'components/form/FormTextArea';
import FormInput from 'components/form/FormInput';
import { Button } from 'components/ui';

interface IValues {
  email: string;
  subject: string;
  body: string;
}

interface IErrors extends Partial<IValues> {}

export default function FormView() {
  const form = useRef();
  const [values, setValues] = useState<IValues>({
    email: '',
    subject: '',
    body: ''
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        return setValues({
          email: '',
          subject: '',
          body: ''
        });
      });

    setLoading(false);
  }

  async function handleChange(e: {
    preventDefault: () => void;
    target: {
      name: string;
      value: string;
    };
  }) {
    e.preventDefault();
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form className="space-y-10" ref={form}>
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput
          value={values.email}
          type="email"
          id="email"
          require={true}
          onChange={handleChange}
          error={!!errors.email}
          errorMessage={errors.email ? errors.email : ''}
          placeholder="Email"
        />
        <FormInput
          value={values.subject}
          type="text"
          id="subject"
          require={true}
          onChange={handleChange}
          error={!!errors.subject}
          errorMessage={errors.subject ? errors.subject : ''}
          placeholder="Subject"
        />
      </div>
      <div>
        <FormTextArea
          value={values.body}
          id="body"
          onChange={handleChange}
          error={!!errors.body}
          errorMessage={errors.body ? errors.body : ''}
          placeholder="Body"
        />
      </div>
      <div>
        <Button type="button" disabled={loading} onClick={handleSubmit}>
          send
        </Button>
      </div>
    </form>
  );
}
