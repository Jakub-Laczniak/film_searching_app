import React from 'react';
import { useSelector } from 'react-redux';

function Film() {
    const film = useSelector(state => state.app.film);
    return (
    <div>
        <h1>{film?.name}</h1>
        <img src={film?.image?.medium} style={{margin: "5px 0 30px"}}></img>
        <p style={{maxWidth: "500px", margin: "auto"}}>{film?.summary.slice(3, film?.summary.length - 4).replace("<b>", "").replace("</b>", "")}</p>
    </div>
    )
}

export default Film