import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  function handleSearch(searchText) {
    if (searchText === "") {
      fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
    } else {
      const searchedPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchText.toLowerCase()));
      setPlants(searchedPlants);
    } 
  }

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={handleSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
