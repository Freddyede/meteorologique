import {useState} from "react";
import { Api } from "../utils/Api.jsx";

function HeaderLayout({setCitiesState, citiesState}) {
    const [search, setSearch] = useState('');
    const [cityLoaded, setCityLoaded] = useState([]);
    const [newObject, setNewObject] = useState({});
    const addFavorite = () => {
        const obj = {
            id: citiesState.length + 1,
            name: newObject.location.name,
            favorite: true
        };
        setCityLoaded([...cityLoaded, obj]);
        setCitiesState([...citiesState, obj]);
    }
    return (
        <header>
            <nav>
                <div className="containerSearch">
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        onClick={
                            () => {
                                Api.searchByInput(search).then((result) => setNewObject(result));
                            }
                        }
                    >Rechercher
                    </button>
                </div>
                <div className={ cityLoaded.length > 0 ? "containerResult2" : null }>
                    {
                        cityLoaded.map(
                            city => (
                                <div>
                                    <p>{city.name}</p>
                                </div>
                            )
                        )
                    }
                </div>
                {newObject.location ?
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
            </nav>
        </header>
    )
}

export default HeaderLayout;