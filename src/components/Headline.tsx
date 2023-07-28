type Props = {
  text: string;
};

const Headline = ({ text }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{text}</h1>
  );
};

export default Headline;
