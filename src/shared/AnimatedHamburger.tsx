import classNames from "classnames";
import React, { useState } from "react";
interface AnimatedHamburgerProps {
    items: Item[];
    onIconClick: (url:string) => void

}
export interface Item {
    icon: string;
    url: string;
}


export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = (props) => {


    const [openMenu, setOpened] = useState<boolean>(false);
    const toggle = () => {
        console.log("test function");
        setOpened(!openMenu);
    }
    function iconClickHandler(url: string) {
        props.onIconClick(url);
        setOpened(false)

    }

    //const openedClass = openMenu ? "menu-open opened" : "menu-open";
    const openedClass = classNames("menu-open", { opened: openMenu })

    return (
        <div>
            <nav className="menu">
                <div className={openedClass} />
                <label className="menu-open-button " onClick={toggle} >
                    <span className="hamburger hamburger-1"></span>
                    <span className="hamburger hamburger-2"></span>
                    <span className="hamburger hamburger-3"></span>
                </label>

                {
                    props.items.map(item => {
                        return (<div key={item.icon} className="menu-item" onClick={() => iconClickHandler(item.url)}>
                            <i className={item.icon}></i>
                        </div>)
                    })
                }


            </nav>
        </div>




    );
};