import PropTypes from "prop-types";
const Card = ({
  name,
  position,
  company,
  description,
  image,
  age,
  disable,
}) => {
  return (
    <div className=" h-96 rounded-md bg-white flex flex-col p-10 text-xl ">
      <div>
        <p>{description} </p>
      </div>
      <div className="flex ">
        <img
          className="w-12 h-7 mt-16 rounded-full object-fill mr-7"
          src={image}
          alt=""
        />
        <div className="text-sm  flex-col mt-10 text-center">
          <p>{name}</p>
          <p className="">
            {position} @ {company}
          </p>
          <p>{age} </p>
          <p>{disable} </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  age: PropTypes.number,
  disable: PropTypes.bool,
};
export default Card;
