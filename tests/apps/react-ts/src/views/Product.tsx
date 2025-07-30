import React, { useState, useEffect, useContext } from "react";
import type { FunctionComponent } from "react";
import { useParams } from 'react-router-dom';
import { get } from "../helper/requests";
import { trackProductView } from "../helper/tracking";
import Store from "../store/Store";

const Product: FunctionComponent = () => {
    const ctx = useContext(Store);
    let { id } = useParams();
    const [product, setProduct] = useState<IProduct | false>(false);
    const [quantity, setQuantity] = useState<string |number>(1);
    const content = () => {
        if (!product) {
            return <div>loading data...</div>;
        }
        return (
            <React.Fragment>
                <h1>{product.name}</h1>
                <img src={product.imageUrl} alt={product.name} />
                <p>{product.description}</p>
                <p>
                    <small>SKU: {product.sku}</small>
                </p>
                <p>
                    <strong>Price: ${product.price}</strong>
                </p>
                <form onSubmit={(e)=>{
                        e.preventDefault();
                        ctx.cartHandler({...product, quantity: quantity}, "add");
                    }}>
                    <input type="number" name="quantity" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} />
                    <button type="submit" >Add to cart</button>
                </form>
            </React.Fragment>
        );
    };

    useEffect(() => {
        get(`api/fixture/products/id/${id}`).then((productData) => {
            const p = productData as IProduct[];
            setProduct(p[0]);
            trackProductView(p[0]);
        });
    }, [id]);

    return content();
};

export default Product;
