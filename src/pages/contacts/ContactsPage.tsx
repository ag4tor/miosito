import React from "react";
import { NavLink } from "react-router-dom";
import { MapQuest } from "../../shared/MapQuest";
export const ContactsPage: React.FC = () => {
    return (
        <div className="page">
        <div className=" page-wrapper">

           
           <MapQuest city="milano" onClick={() => console.log("map click") }  />
           
            Contacts
            <NavLink to="/">
                    <i className="fa fa-times close-button"></i>
                </NavLink>
        </div>


    </div>
    )
}