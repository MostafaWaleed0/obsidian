export default function Logo({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 12 22"
      fill="none"
      aria-hidden={true}
      focusable={false}
      {...props}
    >
      <path
        d="M0.906189 0.366455V21.6336C3.75499 21.6336 6.48713 20.5132 8.50153 18.519C10.5159 16.5249 11.6476 13.8202 11.6476 11C11.6476 8.17982 10.5159 5.47509 8.50153 3.48096C6.48713 1.48678 3.75499 0.366455 0.906189 0.366455Z"
        className="fill-gray-700 dark:fill-white"
      />
    </svg>
  );
}
