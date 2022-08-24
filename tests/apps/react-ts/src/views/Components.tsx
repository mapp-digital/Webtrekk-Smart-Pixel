import React, { useState } from "react";
import wtSmart from "../helper/tracking";

const WebtrekkPageData = wtSmart.WebtrekkPageData;
const WebtrekkCampaignData = wtSmart.WebtrekkCampaignData;
const WebtrekkCustomerData = wtSmart.WebtrekkCustomerData;
const WebtrekkProductData = wtSmart.WebtrekkProductData;
const WebtrekkOrderData = wtSmart.WebtrekkOrderData;
const WebtrekkSessionData = wtSmart.WebtrekkSessionData;
const WebtrekkInitData = wtSmart.WebtrekkInitData;
const WebtrekkAdvancedData = wtSmart.WebtrekkAdvancedData;

const Components: React.FC<{}> = () => {
    const [currentComponent, setCurrentComponent] = useState<null | string>(
        null
    );

    const renderComponent = () => {
        switch (currentComponent) {
            case null:
                return null;
            case "pageData":
                return (
                    <div>
                        <WebtrekkPageData
                            name="React component tests"
                            search="search term"
                            numberSearchResults={7}
                            errorMessages="error: ..."
                            paywall={false}
                            articleTitle="article title"
                            contentTags="content tags"
                            title="page title"
                            type="page type"
                            length="medium"
                            daysSincePublication={5}
                            testVariant="test variant"
                            testExperiment="test experiment"
                            parameter={{ 5: "parameter value 5" }}
                            category={{ 8: "category value 8" }}
                            goal={{ 2: "goal value 2" }}
                        />
                    </div>
                );
            case "campaignData":
                return (
                    <div>
                        <WebtrekkCampaignData
                            id="wt_mc%3Den.internal.newsletter.2017.05"
                            mediaCode={["mc", "wt_mc"]}
                            oncePerSession={false}
                            parameter={{ 1: "Newsletter 123" }}
                        />
                    </div>
                );
            case "customerData":
                return (
                    <div>
                        <WebtrekkCustomerData
                            id="user5684798169"
                            email="john.doe@webtrekk.com"
                            emailRID=""
                            emailOptin={true}
                            gender={1}
                            birthday="19870913"
                            firstName="John"
                            lastName="Doe"
                            telephone="0049132456789"
                            country="Germany"
                            city="Berlin"
                            postalCode="10115"
                            street="Robert-Koch-Platz"
                            streetNumber="4"
                            category={{ 5: "login" }}
                            validation={true}
                        />
                    </div>
                );
            case "productData":
                return (
                    <div>
                        <WebtrekkProductData
                            id="ABC-123"
                            action="view"
                            cost={99.9}
                            quantity={2}
                            soldOut={false}
                            variant="green"
                            parameter={{ 1: "L" }}
                            category={{ 1: "tops", 2: "noname" }}
                        />
                    </div>
                );
            case "orderData":
                return (
                    <div>
                        <WebtrekkOrderData
                            value={120.99}
                            id="M-12345"
                            couponValue={10.0}
                            paymentMethod="paypal"
                            shippingService="dhl"
                            shippingSpeed="express"
                            shippingCosts={4.95}
                            grossMargin={12.95}
                            parameter={{ 5: "bill" }}
                        />
                    </div>
                );
            case "sessionData":
                return (
                    <div>
                        <WebtrekkSessionData
                            loginStatus="login"
                            parameter={{ 5: "male" }}
                        />
                    </div>
                );
            case "initData":
                return (
                    <div>
                        <WebtrekkInitData
                            trackId="111111111111111"
                            trackDomain="test-abc.net"
                            domain="sub.domain.tld"
                            cookie="1"
                        />
                    </div>
                );
            case "advancedData":
                return (
                    <div>
                        <WebtrekkAdvancedData
                            secureCookie={false}
                            optOutName="testOptOut"
                            requestObfuscation={false}
                            // forceOldEverId={true}
                            execCDB={false}
                            useCDBCache={false}
                            requestQueue={{
                                activated: false,
                                ttl: 9999,
                                resendInterval: 5555,
                                size: 55,
                            }}
                            sendViaServer={{
                                blacklist: ["testBlackList"]
                            }}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    const renderButtons = () => {
        const labels = [
            "pageData",
            "campaignData",
            "customerData",
            "productData",
            "orderData",
            "sessionData",
            "initData",
            "advancedData",
        ];
        return labels.map((label) => {
            return (
                <button
                    className="button"
                    onClick={() => {
                        setCurrentComponent(label);
                        if (
                            currentComponent !== "initData" &&
                            currentComponent !== "advancedData"
                        ) {
                            setTimeout(() => {
                                wtSmart.WebtrekkSmartPixelReact.track();
                            }, 500);
                        }
                    }}
                >
                    {label}
                </button>
            );
        });
    };

    return (
        <div>
            <h1>Component tests</h1>
            {renderButtons()}
            {renderComponent()}
        </div>
    );
};

export default Components;
