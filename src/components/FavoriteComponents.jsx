import './favorite.component.css';
import CardComponent from "./CardComponent.jsx";

function FavoriteComponents({ citiesState, changeFavorite }) {
    return (
        <div className="card-container">
            {citiesState.map(city => (<CardComponent changeFavorite={ (id) => changeFavorite(id) } id={city.id} source={city.source} isFavorite={city.favorite} name={city.name} key={city.id}/>))}
        </div>
    )
}

export default FavoriteComponents;