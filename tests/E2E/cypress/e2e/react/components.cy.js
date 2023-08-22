// / <reference types="cypress" />
import { parseTrackrequest } from "../../support/e2e";

context("Test React Components", () => {
    beforeEach(() => {
        cy.smartIntercept();
        Cypress.Cookies.preserveOnce("mapp_e2e_cart", "mapp_e2e_token");
    });

    it("page, campaign, cutomer, product, order, session", () => {
        const trackData = [];
        cy.visit("/apps/react/components");
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains("pageData").click();
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains("campaignData").click();
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains("customerData").click();
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains("productData").click();
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains("orderData").click();
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains("sessionData").click();
        cy.wait("@trackRequest")
            .then((inception) => {
                trackData.push(parseTrackrequest(inception));
            })
            .then(() => {
                const pageRequest = trackData[0];
                const pageDataRequest = trackData[1];
                const campaignDataRequest = trackData[2];
                const customerDataRequest = trackData[3];
                const productDataRequest = trackData[4];
                const orderDataRequest = trackData[5];
                const sessionDataRequest = trackData[6];

                expect(pageRequest.eid).to.match(/^\d{19}$/);
                expect(pageRequest.p[1]).to.match(/.*apps\/react\/components$/);
                expect(pageRequest.pageName).to.match(
                    /.*apps\/react\/components$/
                );
                expect(pageRequest.pu).to.match(/.*apps\/react\/components$/);
                expect(pageRequest.fns).to.equal("1");
                expect(pageRequest.one).to.equal("1");
                // expect(pageRequest.cs1).to.equal("session test");
                // expect(pageRequest.cs800).to.equal("logged out");

                expect(pageDataRequest.eid).to.match(/^\d{19}$/);
                expect(pageDataRequest.p[1]).to.equal("React component tests");
                expect(pageDataRequest.pageName).to.equal(
                    "React component tests"
                );
                expect(pageDataRequest.pu).to.match(
                    /.*apps\/react\/components$/
                );
                expect(pageDataRequest.cb2).to.equal("goal value 2");
                expect(pageDataRequest.cg8).to.equal("category value 8");
                expect(pageDataRequest.cp5).to.equal("parameter value 5");
                expect(pageDataRequest.cp771).to.equal("7");
                expect(pageDataRequest.cp772).to.equal("error: ...");
                expect(pageDataRequest.cp774).to.equal("article title");
                expect(pageDataRequest.cp775).to.equal("content tags");
                expect(pageDataRequest.cp776).to.equal("page title");
                expect(pageDataRequest.cp777).to.equal("page type");
                expect(pageDataRequest.cp778).to.equal("medium");
                expect(pageDataRequest.cp779).to.equal("5");
                expect(pageDataRequest.cp781).to.equal("test variant");
                expect(pageDataRequest.cp782).to.equal("test experiment");
                expect(pageDataRequest.is).to.equal("search term");

                expect(campaignDataRequest.eid).to.match(/^\d{19}$/);
                expect(campaignDataRequest.p[1]).to.equal(
                    "React component tests"
                );
                expect(campaignDataRequest.pageName).to.equal(
                    "React component tests"
                );
                expect(campaignDataRequest.pu).to.match(
                    /.*apps\/react\/components$/
                );
                expect(campaignDataRequest.cc1).to.equal("Newsletter 123");
                expect(campaignDataRequest.ct).to.equal("webtrekk_ignore");
                expect(campaignDataRequest.mc).to.equal(
                    "wt_mc%3Den.internal.newsletter.2017.05"
                );

                expect(customerDataRequest.eid).to.match(/^\d{19}$/);
                expect(customerDataRequest.p[1]).to.equal(
                    "React component tests"
                );
                expect(customerDataRequest.pageName).to.equal(
                    "React component tests"
                );
                expect(customerDataRequest.pu).to.match(
                    /.*apps\/react\/components$/
                );
                expect(customerDataRequest.cd).to.equal("user5684798169");
                expect(customerDataRequest.ct).to.equal("webtrekk_ignore");
                expect(customerDataRequest.uc5).to.equal("login");
                expect(customerDataRequest.uc700).to.equal(
                    "john.doe@webtrekk.com"
                );
                expect(customerDataRequest.uc702).to.equal("1");
                expect(customerDataRequest.uc703).to.equal("John");
                expect(customerDataRequest.uc704).to.equal("Doe");
                expect(customerDataRequest.uc705).to.equal("0049132456789");
                expect(customerDataRequest.uc706).to.equal("1");
                expect(customerDataRequest.uc707).to.equal("19870913");
                expect(customerDataRequest.uc708).to.equal("Germany");
                expect(customerDataRequest.uc709).to.equal("Berlin");
                expect(customerDataRequest.uc710).to.equal("10115");
                expect(customerDataRequest.uc711).to.equal("Robert-Koch-Platz");
                expect(customerDataRequest.uc712).to.equal("4");
                expect(customerDataRequest.uc713).to.equal("1");

                expect(productDataRequest.eid).to.match(/^\d{19}$/);
                expect(productDataRequest.p[1]).to.equal(
                    "React component tests"
                );
                expect(productDataRequest.pageName).to.equal(
                    "React component tests"
                );
                expect(productDataRequest.pu).to.match(
                    /.*apps\/react\/components$/
                );
                expect(productDataRequest.ba).to.equal("ABC-123");
                expect(productDataRequest.ca1).to.equal("tops");
                expect(productDataRequest.ca2).to.equal("noname");
                expect(productDataRequest.cb1).to.equal("L");
                expect(productDataRequest.cb760).to.equal("0");
                expect(productDataRequest.cb767).to.equal("green");
                expect(productDataRequest.co).to.equal("99.9");
                expect(productDataRequest.qn).to.equal("2");
                expect(productDataRequest.st).to.equal("view");

                expect(orderDataRequest.eid).to.match(/^\d{19}$/);
                expect(orderDataRequest.p[1]).to.equal("React component tests");
                expect(orderDataRequest.pageName).to.equal(
                    "React component tests"
                );
                expect(orderDataRequest.pu).to.match(
                    /.*apps\/react\/components$/
                );
                expect(orderDataRequest.cb5).to.equal("bill");
                expect(orderDataRequest.cb563).to.equal("10");
                expect(orderDataRequest.cb761).to.equal("paypal");
                expect(orderDataRequest.cb762).to.equal("dhl");
                expect(orderDataRequest.cb763).to.equal("express");
                expect(orderDataRequest.cb764).to.equal("4.95");
                expect(orderDataRequest.cb765).to.equal("12.95");
                expect(orderDataRequest.oi).to.equal("M-12345");
                expect(orderDataRequest.ov).to.equal("120.99");

                expect(sessionDataRequest.eid).to.match(/^\d{19}$/);
                expect(sessionDataRequest.p[1]).to.equal(
                    "React component tests"
                );
                expect(sessionDataRequest.pageName).to.equal(
                    "React component tests"
                );
                expect(sessionDataRequest.pu).to.match(
                    /.*apps\/react\/components$/
                );
                expect(sessionDataRequest.cs5).to.equal("male");
                expect(sessionDataRequest.cs800).to.equal("login");
                expect(sessionDataRequest.ct).to.equal("webtrekk_ignore");
            });
    });

    it("init, advanced", () => {
        const trackData = [];
        cy.visit("/apps/react/components");
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains("initData").click();
        cy.contains("advancedData").click();
        cy.window().then(win => {
            const pageRequest = trackData[0];
            const initData = win.wtSmart.init.get();
            const advancedData = win.wtSmart.advanced.get();
            
            expect(pageRequest.eid).to.match(/^\d{19}$/);
            expect(pageRequest.p[1]).to.match(/.*apps\/react\/components$/);
            expect(pageRequest.pageName).to.match(
                /.*apps\/react\/components$/
            );
            expect(pageRequest.pu).to.match(/.*apps\/react\/components$/);
            expect(pageRequest.fns).to.equal("1");
            expect(pageRequest.one).to.equal("1");
            // expect(pageRequest.cs1).to.equal("session test");
            // expect(pageRequest.cs800).to.equal("logged out");

            expect(initData.cookie).to.equal("1");
            expect(initData.domain[0]).to.equal("sub.domain.tld");
            expect(initData.trackDomain).to.equal("test-abc.net");
            expect(initData.trackId).to.equal("111111111111111");

            expect(advancedData.forceOldEverId).to.equal(false);
            expect(advancedData.optOutName).to.equal("testOptOut");
            expect(advancedData.requestObfuscation).to.equal(false);
            expect(advancedData.requestQueue.activated).to.equal(false);
            expect(advancedData.requestQueue.resendInterval).to.equal(5555);
            expect(advancedData.requestQueue.size).to.equal(55);
            expect(advancedData.requestQueue.ttl).to.equal(9999);
            expect(advancedData.secureCookie).to.equal(false);
            expect(advancedData.sendViaSDK).to.equal(false);
            expect(advancedData.sendViaServer.activated).to.equal(false);
            expect(advancedData.sendViaServer.blacklist[0]).to.equal("testBlackList");
            expect(advancedData.sendViaServer.droppedRequests).to.equal(0);
            expect(advancedData.sendViaServer.serverDomain).to.equal("");
            expect(advancedData.sendViaServer.serverPath).to.equal("");
            expect(advancedData.useHashForDefaultPageName).to.equal(false);
            expect(advancedData.useParamsForDefaultPageName).to.be.empty;
            expect(advancedData.userIdentification.anonymousCookieName).to.equal("miCookieOptOut");
            expect(advancedData.userIdentification.anonymousOptIn).to.equal(false);
            expect(advancedData.userIdentification.enableAnonymousFunction).to.equal(false);
            expect(advancedData.userIdentification.suppressParameter).to.be.empty;
        })
    });
});
