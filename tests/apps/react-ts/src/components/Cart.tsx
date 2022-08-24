import React, { useContext } from "react";
import CartMenu from "./CartMenu";
import Store from "../store/Store";

const Cart: React.FC = () => {
    const ctx = useContext(Store);
    return (
        <div className="header cart wrapper">
            <svg
                id="openCart"
                className="header cart icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onClick={() => {
                    ctx.openCartHandler(!ctx.cartIsOpen);
                }}
            >
                <path
                    style={{ fill: "white" }}
                    d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
                />
            </svg>
            <div
                className="header cart text"
                onClick={() => {
                    ctx.openCartHandler(!ctx.cartIsOpen);
                }}
            >
                ( {ctx.cartAmount} )
            </div>
            <CartMenu />
        </div>
    );
};

export default Cart;
