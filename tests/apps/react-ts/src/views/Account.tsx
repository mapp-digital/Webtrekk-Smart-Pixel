import React, { useContext } from "react";
import OrderProductList from "../components/OrderProductList";
import Store from "../store/Store";

const Account: React.FC<{}> = () => {
    const ctx = useContext(Store);
    if (!ctx.userData || !ctx.userData.orders) {
        return null;
    }
    return (
        <div>
            <h1>Account</h1>
            <p>
                Hello {ctx.userData.firstName} {ctx.userData.lastName}!
            </p>
            <p>Your username is: {ctx.userData.name}</p>
            <h2>Your orders</h2>
            <hr />
            {ctx.userData.orders.map((order) => {
                return (
                    <div key={order.orderId}>
                        <h3>Order ID: {order.orderId}</h3>
                        <OrderProductList products={order.products} />
                        <strong>Order Value: $ {order.orderValue}</strong>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default Account;
