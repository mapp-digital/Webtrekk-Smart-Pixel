import React from "react";
import lorem from "../helper/lorem";
import wtSmart from "../helper/tracking";
const WebtrekkContentEngagement = wtSmart.WebtrekkContentEngagement;

const ContentEngagement: React.FC<{}> = () => {
    return (
        <div>
            <h1>Content Engagement</h1>
            <WebtrekkContentEngagement
                name="Demo content"
                percentageStepsInAnalytics={5}
                sendContentEngagement={1}
                percentageReached={25}
                secondsReached={30}
                largeBrowserResolution={1080}
                largeBrowserSeconds={1}
                mediumBrowserResolution={700}
                mediumBrowserSeconds={1}
                smallBrowserResolution={400}
                smallBrowserSeconds={1}
            >
                <div className="content-engagement">{lorem}</div>
            </WebtrekkContentEngagement>
        </div>
    );
};

export default ContentEngagement;
