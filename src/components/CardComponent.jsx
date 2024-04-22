import { useEffect, useState } from "react";
import emptyStar from "../assets/emptyStar.png";
import fullStar from "../assets/fullStar.png";
import './card.component.css';
import { Api } from "../utils/Api.jsx";

function CardComponent({ id, name, isFavorite, changeFavorite }) {
    const [weather, setWeather] = useState('');
    const [className, setClassName] = useState('');
    useEffect(() => {
        const api = new Api(name);
        api.search().then(r => {
            setWeather(r.current.condition.icon);
        });
    }, []);
    useEffect(() => {
        let value;
        if(weather !== undefined && weather !== '')  {
            if(weather.split('/').length === 7) {
                value = weather.split('/')[6].split('.')[0];
            }
        }
        switch(parseInt(value)) {
            case 113:
                setClassName('card-sun');
            break;
            case 302:
                setClassName('card-rain');
            break;
            case 326:
                setClassName('card-rain');
            break;
        }
    }, [weather]);
    return (
        <div className={className !== '' ? 'card ' + className : 'card'}>
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