import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { get } from "../helper/requests";
import { trackOrder } from "../helper/tracking";
import Store from "../store/Store";
import CartItem from "./CartItem";

const CartMenu: React.FC = () => {
    const ctx = useContext(Store);
    const renderCartmenu = () => {
        if (ctx.cartIsOpen) {
            const getProducts = () => {
                return ctx.cart.map((cartItem) => {
                    return <CartItem key={cartItem.id} product={cartItem} />;
                });
            };

            const CartContent: React.FC = () => {
                if (ctx.cart.length > 0) {
                    return (
                        <div>
                            <table className="cartTable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th></th>
                                        <th>Quantity</th>
                                        <th></th>
                                        <th>Sum</th>
                                    </tr>
                                </thead>
                                <tbody>{getProducts()}</tbody>
                            </table>
                        </div>
                    );
                }
                return (
                    <div>
                        <p>Your cart is empty</p>
                    </div>
                );
            };
            const FooterButton: React.FC = () => {
                const history = useNavigate();
                if (ctx.userData) {
                    return (
                        <button
                            id="addOrder"
                            type="submit"
                            onClick={() => {
                                ctx.openCartHandler(false);
                                get("cart/order").then((order) => {
                                    ctx.refreshCart();
                                    const orderData =
                                        order as IOrderResponseData;
                                    trackOrder(orderData, ctx.userData as IUser);
                                    ctx.snackbarHandler(
                                        "Order with id " +
                                            orderData.orderId +
                                            " was succesful!"
                                    );
                                    ctx.userDataHandler();
                                    history("/thankyou");
                                });
                            }}
                        >
                            Order Items
                        </button>
                    );
                }
                return (
                    <button
                        type="submit"
                        onClick={() => {
                            ctx.openCartHandler(false);
                            history("/login");
                        }}
                    >
                        Login or register to checkout
                    </button>
                );
            };
            return (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span
                                className="close"
                                onClick={() => {
                                    ctx.openCartHandler(false);
                                }}
                            >
                                &times;
                            </span>
                            <h2>
                                You have {ctx.cartAmount} items in your cart
                            </h2>
                        </div>
                        <CartContent />
                        <div className="modal-footer">
                            {ctx.cart.length > 0 && <p>${ctx.cartSum}</p>}
                            <FooterButton />
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };
    return renderCartmenu();
};

export default CartMenu;
