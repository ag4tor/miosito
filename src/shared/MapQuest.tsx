import React from "react";
interface MapQuestProps{
    city?:string;
    width?:number;
    height?:number;
    /* onClick: () => void; */
    
}

const API = 'https://www.mapquestapi.com/staticmap/v5/map';

// la definizione dopo  & indica che questo componente eredita tutte le props e gli attributi dell'elemento html base indicato
//così da non definirle nelle props. ad esempio la funzione onClick che dovremmo destrutturare e passare dalla chiamata del componente.
export const MapQuest : React.FC<MapQuestProps &  React.ImgHTMLAttributes<HTMLImageElement>>= ({
    city = "crotone",
    width = 300,
    height = 200,
    /* onClick */
    //con ...rest raccogliamo tutte le props che non sono destrutturate e le possiamo passare a img
    ...rest
}) => {
    const url = `${API}?&size=${width},${width}&key=s8elga69IvJpqOYdqpyTNzcSBGedl8kY&center=${city}`
    return (
        <img width = "100%" src={url} alt={city} {...rest}></img>

    );
}