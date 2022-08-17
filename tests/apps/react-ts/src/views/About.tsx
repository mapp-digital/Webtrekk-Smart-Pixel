import React, { useEffect } from "react";
import wtSmart from "../helper/tracking";

const About: React.FC<{}> = () => {
    useEffect(() => {
        wtSmart.WebtrekkSmartPixelReact.page("", {
            category: {
                1: "category test",
            },
            parameter: { 1: "parameter test" },
        });
    }, []);
    return (
        <div className="about">
            <h1>This is an about page</h1>
        </div>
    );
};

export default About;
