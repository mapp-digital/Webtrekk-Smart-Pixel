import React, { useContext } from "react";
import Store from "../store/Store";

const CartItem: React.FC<{product: ICartItem}> = (props) => {
    const ctx = useContext(Store);
    return (
        <tr>
        <td>
            <img
                src={props.product.imageUrl}
                alt={props.product.name + 'title'}
                style={{width: "50px"}}
            />
        </td>
        <td>
            <p>{ props.product.name }</p>
        </td>
        <td>
            <p>${ props.product.price }</p>
        </td>
        <td>
            <button
                className="cart-quantity-button"
                type="button"
                name="button"
                onClick={() => {
                    ctx.cartHandler({...props.product, quantity: 1}, "delete");
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                >
                    <path d="M0 10h24v4h-24z" />
                </svg>
            </button>
        </td>
        <td>
            <p>{ props.product.quantity }</p>
        </td>

        <td>
            <button
                className="cart-quantity-button"
                type="button"
                name="button"
                onClick={() => {
                    ctx.cartHandler({...props.product, quantity: 1}, "add");
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                >
                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                </svg>
            </button>
        </td>
        <td>
            <p>${ props.product.sum }</p>
        </td>
    </tr>
    )
};

export default CartItem;
