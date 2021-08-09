import "./styles.scss";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Cars from "./components/Cars";
import CarInfo from "./components/CarInfo";
import PriceFilter from "./components/PriceFilter";
import cars_array from "./cars.json";

export default function App() {
  const [cars, setCars] = useState(cars_array);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState();

  useEffect(() => {
    if (!companies.length) {
      const companies_all = cars.map((car) => car.company);
      const companies_set = new Set(companies_all);
      setCompanies([...companies_set]);
    }
  }, [cars]);

  const searchCar = (event) => {
    var query = event.target.value;
    const filteredCars = cars_array.filter((item) => {
      return item.name.search(new RegExp(query, "gi")) >= 0;
    });
    setCars(filteredCars);
  };

  const selectCompany = (company) => {
    if (company === selectedCompany) {
      setCars(cars_array);
      setSelectedCompany("");
    } else {
      const filteredCars = cars_array.filter(
        (item) => item.company === company
      );
      setCars(filteredCars);
      setSelectedCompany(company);
    }
  };

  const filterByPrice = (min, max) => {
    const filteredCars = cars_array.filter((item) => {
      if (min) {
        if (item.price < min) {
          return false;
        }
      }

      if (max) {
        if (item.price > max) {
          return false;
        }
      }

      return true;
    });

    setCars(filteredCars);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="menu">
          <div className="wrapper">
            <Link to="/">Cars & Price</Link>
            <input
              className="search"
              type="text"
              placeholder="Search car by name"
              onChange={searchCar}
            />
          </div>
        </div>

        <div className="wrapper page">
          <div className="companies">
            {companies.map((item) => (
              <div
                key={item}
                className={selectedCompany === item ? "selected" : ""}
                onClick={() => selectCompany(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <PriceFilter filterByPrice={filterByPrice} />
          <Switch>
            <Route exact path="/">
              <Cars cars={cars} />
            </Route>
            <Route path="/car/:id">
              <CarInfo />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
