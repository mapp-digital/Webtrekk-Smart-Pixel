import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Store from "../store/Store";

const AccountMenu: React.FC = () => {
    const ctx = useContext(Store);
    const loginLogout = () => {
        if (ctx.userData === false) {
            return (
                <li className="header right">
                    <NavLink className="headerLink" to="/login">
                        Register / Login
                    </NavLink>
                </li>
            );
        }
        return <li className="header right logout" onClick={() => {
            ctx.logoutHandler();
        }}>Logout</li>;
    };

    return (
        <div>
            {loginLogout()}
            {ctx.userData !== false && (
                <li className="header right">
                    <NavLink className="headerLink" to="/account">
                        Account
                    </NavLink>
                </li>
            )}
        </div>
    );
};

export default AccountMenu;
