type Props = {
  title: string;
  description: string;
};

export default function Headline({ title, description }: Props) {
  return (
    <header className="text-center space-y-4">
      <h2>{title}</h2>
      <p className="w-fit mx-auto">{description}</p>
    </header>
  );
}
