import {Api} from "../utils/Api.jsx";
import {useState} from "react";
import './navbar.component.css';

function NavbarComponent({setCitiesState, citiesState}) {
    const [search, setSearch] = useState('');
    const [cityLoaded, setCityLoaded] = useState([]);
    const [activeCity, setActiveCity] = useState(false);
    const [newObject, setNewObject] = useState({});
    const addFavorite = () => {
        const obj = {
            id: citiesState.length + 1,
            name: newObject.location.name,
            favorite: true
        };
        setCityLoaded([...cityLoaded, obj]);
        setCitiesState([...citiesState, obj]);
        setActiveCity(false);
    }

    return (
        <nav>
            <div>
                <div className="containerSearch">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        onClick={
                            () => {
                                Api.searchByInput(search).then((result) => setNewObject(result));
                                setSearch('');
                                setActiveCity(true);
                            }
                        }
                    >Rechercher
                    </button>
                </div>
                <div className={cityLoaded.length > 0 ? "containerResult2" : null}>
                    {
                        cityLoaded.map(
                            city => (
                                <div key={ city.name }>
                                    <p>{city.name}</p>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <div>
                {newObject.location && activeCity ?
                    <div className="containerResult">
                        <div>
                            <p>{newObject.location.name}</p>
                        </div>
                        <div>
                            <button onClick={addFavorite}>Add to favorite</button>
                        </div>
                    </div>
                    : null
                }
            </div>
        </nav>
    );
}

export default NavbarComponent;