import React from "react";
import Cart from "../components/Cart";
import { NavLink } from "react-router-dom";
import AccountMenu from "./AccountMenu";

const Header: React.FC = () => {
    const headerLinks = [
        { to: "/", name: "Home" },
        { to: "/shop", name: "Shop" },
        { to: "/teaser", name: "Teaser" },
        { to: "/content-engagement", name: "ContentEngagement" },
        { to: "/reducer", name: "Reducer" },
        { to: "/components", name: "Components" },
        { to: "/redux", name: "Redux" },
    ];
    const renderNavList = () => {
        return headerLinks.map((link) => {
            return (
                <li key={link.to}>
                    <NavLink to={link.to}>
                        {link.name}
                    </NavLink>
                </li>
            );
        });
    };
    return (
        <nav>
            <ul>
                {renderNavList()}
                <li className="header right">
                    <Cart />
                </li>
                <AccountMenu />
                <li className="header right">
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
