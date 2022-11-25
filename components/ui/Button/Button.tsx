type Props = {
  children: React.ReactNode;
  type: 'link' | 'button';
  [x: string]: any;
};
const style: string =
  'inline-block text-lg font-medium leading-none text-black dark:text-white py-5 px-10 rounded-full outline-none ring-2 ring-black dark:ring-white hover:ring-4 focus-visible:ring-4 transition-all capitalize';

export default function Button({ children, type, ...props }: Props) {
  return (
    <>
      {type === 'link' ? (
        <a className={style} {...props}>
          {children}
        </a>
      ) : (
        <button className={style} {...props} type="submit">
          {children}
        </button>
      )}
    </>
  );
}
