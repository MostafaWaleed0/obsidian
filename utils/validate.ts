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

  if (!email || email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!subject || subject.trim() === '') {
    errors.subject = 'subject is required';
  }

  if (!body || body.trim() === '') {
    errors.body = 'Body is required';
  } else if (body.length > 1000) {
    errors.body = "Your details can't be more than 1000 characters";
  }

  return errors;
};
