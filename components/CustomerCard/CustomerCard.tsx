import { Rating } from 'components/ui';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: string;
  rating: number;
};

export default function CustomerCard({
  title,
  description,
  image,
  rating
}: Props) {
  return (
    <li className="bg-gray-100 dark:bg-gray-800 p-8 md:p-12 rounded-lg">
      <article className="space-y-4">
        <div className="flex justify-between items-center">
          <Image
            src={image}
            width={112}
            height={112}
            alt=""
            className="rounded-full w-24 h-24 object-cover"
          />
          <Rating value={rating} />
        </div>
        <div>
          <h3 className="leading-tight text-3xl">{title}</h3>
          <p className="mt-4 max-w-md">{description}</p>
        </div>
      </article>
    </li>
  );
}
