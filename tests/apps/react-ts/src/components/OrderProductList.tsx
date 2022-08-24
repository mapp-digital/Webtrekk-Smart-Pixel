import React from "react";

const OrderProductList: React.FC<{ products: ICartItem[] }> = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th></th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Sum</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <img
                                    height="100"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.sku}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td>{product.sum}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default OrderProductList;
