import { Button } from 'components/ui';

type Props = {
  title: string;
  description: string;
  href: string;
  icon?: JSX.Element;
};

export default function CourseCard({ title, description, href, icon }: Props) {
  return (
    <li className="bg-gray-100 dark:bg-gray-800 pb-10 pt-36 px-8 md:px-16 md:pb-20 relative rounded-lg">
      <article>
        <div>
          <h3 className="leading-tight text-3xl md:text-4xl">{title}</h3>
          <p className="leading-tight text-2xl md:text-4xl mt-4 max-w-md">
            {description}
          </p>
          <div className="mt-16">
            <Button type="link" href={href}>
              learn more
            </Button>
          </div>
        </div>
      </article>
      <div className="absolute left-16 -top-11">{icon}</div>
    </li>
  );
}
