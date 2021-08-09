import cars_array from "../cars.json";
import { useParams } from "react-router-dom";

const CarInfo = () => {
  const { id } = useParams();
  const car = cars_array.find((item) => item.id === id);

  return (
    <div className="car-info">
      <img src={car.image} alt="Car" />

      <div className="right">
        <div className="name">
          {car.name} - {car.year}
        </div>
        <div className="company">
          Марка: <span>{car.company}</span>
        </div>
        <div className="price">
          Цена: <span>${car.price}</span>
        </div>
        <div className="about">
          <p>Описание:</p>
          <p className="text">{car.about}</p>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
