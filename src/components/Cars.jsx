import CarItem from "../components/CarItem";

const Cars = ({ cars }) => {
  return (
    <div className="cars-list">
      {/* <h1>On sale:</h1> */}
      {cars.map((car, index) => (
        <CarItem key={index} car={car} />
      ))}
    </div>
  );
};

export default Cars;
