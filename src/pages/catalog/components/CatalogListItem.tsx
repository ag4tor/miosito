import React from "react";
import { MapQuest } from "../../../shared/MapQuest";
import { CatalogItem } from "../model";

interface CataloListItemProps {
    item:CatalogItem;
}


export const CatalogListItem : React.FC<CataloListItemProps>= ({item}) => {

    function openMap(){
        window.open( `https://www.google.com/maps/place/${item.city}` )

    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4" key ={item.id}>
                {item.title}
                <MapQuest city ={item.city} onClick={ openMap  }  />
                <p>{item.address} - {item.city}</p>
            </div>
    )
}