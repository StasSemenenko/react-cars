import { useRef } from "react";

const PriceFilter = ({ filterByPrice }) => {
  const minInput = useRef();
  const maxInput = useRef();

  const valuesChanged = () => {
    const min = minInput.current.value;
    const max = maxInput.current.value;
    filterByPrice(min, max);
  };

  return (
    <div className="price-filter">
      <p>Фильтр по цене:</p>
      <span>
        Мин: <input type="number" onChange={valuesChanged} ref={minInput} />
        Макс: <input type="number" onChange={valuesChanged} ref={maxInput} />
      </span>
    </div>
  );
};

export default PriceFilter;
