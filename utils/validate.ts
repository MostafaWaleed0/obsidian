const checkValues = (value: string) => {
  return !value || value.trim() === '';
};

const checkLength = (value: string, length?: number) => {
  return value.length > (length || 1000);
};

const validateValues = (reg: RegExp, value: string) => {
  return !reg.test(value);
};

export const validate = ({
  email,
  subject,
  body
}: {
  email: string;
  subject: string;
  body: string;
}) => {
  const errors: {
    email?: string;
    subject?: string;
    body?: string;
  } = {};

  if (checkValues(email)) {
    errors.email = 'Email is required';
  } else if (
    validateValues(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (checkValues(subject)) {
    errors.subject = 'subject is required';
  }

  if (checkValues(body)) {
    errors.body = 'Body is required';
  } else if (checkLength(body)) {
    errors.body = "Your details can't be more than 1000 characters";
  }

  return errors;
};
