import React, { useState, useEffect } from "react";
import ProductPreview from "../components/ProductPreview";
import { get, getFixtureData } from "../helper/requests";

const Shop: React.FC = () => {
    const [products, setProducts] = useState<IProduct[] | false>(false);
    const [content, setContent] = useState<IArticle[] | false>(false);

    const productList = () => {
        if (!products) {
            return <div>Loading data...</div>;
        }
        return products.map((product, index) => {
            return <ProductPreview product={product} position={index} key={product.id} />;
        });
    };

    useEffect(() => {
        get("api/fixture/products").then((productData) => {
            setProducts(productData as IProduct[]);
        });
        getFixtureData("pages/slug/shop").then((c) => {
            setContent(c);
        });
    }, []);

    const contentOutput = () => {
        if (!content) {
            return null;
        }
        return <div dangerouslySetInnerHTML={{ __html: content[0].content }} />;
    };
    return (
        <React.Fragment>
            <h1>{content ? content[0].title : "Loading data..."}</h1>
            {contentOutput()}
            {productList()}
        </React.Fragment>
    );
};

export default Shop;
