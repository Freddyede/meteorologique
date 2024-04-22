import { useEffect, useState } from "react";
import emptyStar from "../assets/emptyStar.png";
import fullStar from "../assets/fullStar.png";
import './card.component.css';
import { Api } from "../utils/Api.jsx";

function CardComponent({ id, name, isFavorite, changeFavorite }) {
    const [weather, setWeather] = useState('');
    useEffect(() => {
        const api = new Api(name);
        api.search().then(r => {
            setWeather(r.current.condition.icon);
        });
    }, []);
    return (
        <div className="card">
            <div className="card-header">
                <p>{name}</p>
                <img src={weather} alt={weather} />
            </div>
            <div className="card-footer">
                <img onClick={() => changeFavorite(id)} src={!isFavorite ? emptyStar : fullStar} alt=""/>
            </div>
        </div>
    );
}

export default CardComponent;