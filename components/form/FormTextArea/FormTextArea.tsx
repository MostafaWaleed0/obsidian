import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  [x: string]: any;
  id: string;
  error?: boolean;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

export default function FormTextArea({
  id,
  error = false,
  errorMessage = '',
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}: Props) {
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
        {...(error ? variableAttribute : '')}
      ></textarea>
      {error && (
        <p id={`${id}_error`} className="text-red-600 dark:text-red-600 mt-3">
          *{errorMessage}
        </p>
      )}
    </>
  );
}
