import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Store from "../store/Store";
import wtSmart from "../helper/tracking";

const WebtrekkProductList = wtSmart.WebtrekkProductList;

const ProductPreview: React.FC<{ product: IProduct; position: number }> = (
    props
) => {
    const ctx = useContext(Store);
    // useEffect(() => {
    //     //@ts-ignore
    //     window.wtstp_pli = window.wtstp_pli || [];
    //     //@ts-ignore
    //     window.wtstp_pli.push({
    //         selector: '#product_1',
    //         data: {
    //             id: "product_1",
    //             position: 1
    //         },
    //     });
    // }, []);
    return (
        <div className="card" id={"product_" + props.product.id}>
            <WebtrekkProductList
                id={props.product.id.toString()}
                position={props.position + 1}
                cost={props.product.price}
                quantity={1}
                parameter={{
                    1: props.product.sku,
                }}
                category={{
                    1: props.product.name,
                }}
            >
                <Link to={"/shop/" + props.product.id}>
                    <img
                        src={props.product.imageUrl}
                        alt={props.product.name + "title"}
                    />
                    <h1>{props.product.name}</h1>
                </Link>
            </WebtrekkProductList>

            <p className="price">${props.product.price}</p>
            <p>{props.product.description}</p>
            <p>
                <button
                    onClick={() => {
                        ctx.cartHandler(props.product, "add");
                    }}
                >
                    Add to Cart
                </button>
            </p>
        </div>
    );
};

export default ProductPreview;
