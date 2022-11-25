import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  [x: string]: any;
  type: string;
  id: string;
  error?: boolean;
  errorMessage?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

export default function FormInput({
  type,
  id,
  error = false,
  require,
  errorMessage = '',
  variablePropName = 'aria-describedby',
  variablePropValue = `${id}_error`,
  ...props
}: Props) {
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
        {...(error ? variableAttribute : '')}
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
