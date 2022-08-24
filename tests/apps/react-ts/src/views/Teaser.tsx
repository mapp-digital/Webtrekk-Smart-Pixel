import React from "react";
import { Link } from "react-router-dom";
import wtSmart from "../helper/tracking";
const WebtrekkTeaser = wtSmart.WebtrekkTeaser;

const Teaser: React.FC<{}> = () => {
    return (
        <div>
            <WebtrekkTeaser
                name="Teaser 0"
                rank="header"
                content="Teasertest"
                variant="demo"
                type="click"
                goal="order"
                value="10%"
            >
                <div className="teaser" id="teaser1">
                    <Link to="/">
                        <h1>This is a teaser</h1>
                    </Link>
                </div>
            </WebtrekkTeaser>

            <p>Scroll down to find another teaser.</p>

            <WebtrekkTeaser
                name="Teaser 1"
                rank="bottom"
                content="Teasertest"
                variant="demo"
                type="click"
                goal="order"
                value="10%"
            >
                <div className="teaser teaser-bottom" id="teaser2">
                    <Link to="/">
                        <h1>This is another teaser</h1>
                    </Link>
                </div>
            </WebtrekkTeaser>
        </div>
    );
};

export default Teaser;
