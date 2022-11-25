import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function CustomerCard({ title, description, image }: Props) {
  return (
    <li className="py-20 mx-4">
      <article className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start items-center space-y-3 lg:space-y-0">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={image}
            width={250}
            height={250}
            alt="Illustration of Desk Lamp"
            className="h-40 w-40 md:h-auto md:w-auto"
          />
          <h3 className="text-4xl">{title}</h3>
        </div>
        <p className="text-2xl lg:text-5xl leading-tight text-center lg:text-start">
          {description}
        </p>
      </article>
    </li>
  );
}
