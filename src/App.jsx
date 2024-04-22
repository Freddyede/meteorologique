import './App.css';
import HeaderLayout from "./Layouts/HeaderLayout.jsx";
import FavoriteComponents from "./components/FavoriteComponents.jsx";
import {useState} from "react";

function App() {
    const [citiesState, setCitiesState] = useState([]);
    const changeFavorite = (id) => setCitiesState(citiesState.filter(city => city.id !== id));
    return (
        <>
            <HeaderLayout citiesState={citiesState} setCitiesState={(val) => setCitiesState(val)}/>
            { citiesState.length > 0 ? <FavoriteComponents changeFavorite={(id) => changeFavorite(id)} citiesState={citiesState} /> : null }
        </>
    );
}

export default App
