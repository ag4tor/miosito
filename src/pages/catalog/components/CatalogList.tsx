import React  from "react";
import { MapQuest } from "../../../shared/MapQuest";
import { CatalogItem } from "../model";
import { CatalogListItem } from "./CatalogListItem";

interface CatalogListProps {
    items:CatalogItem[]
}

export const CatalogList : React.FC<CatalogListProps> = (props) => {
    return (

        <div className="row">
        {
            props.items.map(item => {return <CatalogListItem item={item} key={item.id} />  })


        }
    </div>


    );

}