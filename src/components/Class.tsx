type Props = {
  name: string;
  description: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative mx-5 inline-block w-[400px]">
      {/* OVERLAY */}
      <div className="overlay">
        <p className="font-montserrat text-2xl">{name}</p>
        <p>{description}</p>
      </div>
      <img src={image} alt={name} />
    </li>
  );
};

export default Class;
