import React, { useEffect, useState } from "react";
import { getFixtureData } from "../helper/requests";

const Home: React.FC<{}> = () => {
    const [content, setContent] = useState<IArticle[] | false>(false);
    useEffect(() => {
        getFixtureData("pages/slug/home").then((c) => {
            setContent(c);
        });
    }, []);

    const contentOutput = () => {
        if (!content) {
            return null;
        }
        return <div dangerouslySetInnerHTML={{__html: content[0].content}} />;
    };

    return (
        <div>
            <h1>{content ? content[0].title : 'Loading data...' }</h1>
            <h2>React Typescript</h2>
            {contentOutput()}
        </div>
    );
};

export default Home;
