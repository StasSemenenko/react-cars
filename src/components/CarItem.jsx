import { Link } from "react-router-dom";

const CarItem = ({ car }) => {
  return (
    <div className="car-item">
      <img src={car.image} alt="Car" />
      <p className="name">
        <Link to={"/car/" + car.id}>{car.name}</Link>
      </p>
      <p className="price">${car.price}</p>
    </div>
  );
};

export default CarItem;
