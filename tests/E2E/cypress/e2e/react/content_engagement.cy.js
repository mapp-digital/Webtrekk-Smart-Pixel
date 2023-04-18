/// <reference types="cypress" />
import { parseTrackrequest } from "../../support/e2e";

context("React TS Content Engagement", () => {
    beforeEach(() => {
        cy.smartIntercept();
    });

    it("content engagement scroll and view", () => {
        cy.visit("/apps/react/content-engagement");
        const trackData = [];
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
            cy.scrollTo("bottom");
        });
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
            cy.scrollTo("bottom");
            const pageview = trackData[0];
            const contentEngagement0 = trackData[1];
            const contentEngagement25 = trackData[2];

            // Pageview
            expect(pageview.eid).to.match(/^\d{19}$/);
            expect(pageview.p[1]).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(pageview.pageName).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(pageview.pu).to.match(/.*apps\/react\/content-engagement$/);
            expect(pageview.fns).to.equal("1");
            expect(pageview.one).to.equal("1");

            // Content Engagement 0%
            expect(contentEngagement0.eid).to.match(/^\d{19}$/);
            expect(contentEngagement0.p[1]).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement0.pageName).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement0.pu).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement0.ck921).to.equal("Demo content");
            expect(contentEngagement0.ck922).to.equal("0");
            expect(contentEngagement0.ck923).to.equal("0");

            // Content Engagement 25%
            expect(contentEngagement25.eid).to.match(/^\d{19}$/);
            expect(contentEngagement25.p[1]).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement25.pageName).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement25.pu).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement25.ck921).to.equal("Demo content");
            expect(contentEngagement25.ck922).to.equal("25");
            expect(contentEngagement25.ck923).to.equal("25");
        });
    });

    it("content engagement leave page", () => {
        cy.visit("/apps/react/content-engagement");
        const trackData = [];
        // PI
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        // content engagement
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains("Home").click();
        // linkClick
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        // homepagePI
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait(5000).then(() => {
            const pageview = trackData[0];
            const contentEngagement0 = trackData[1];
            const linkClick = trackData[2];
            const homepagePI = trackData[3];

            // Pageview
            expect(pageview.eid).to.match(/^\d{19}$/);
            expect(pageview.p[1]).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(pageview.pageName).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(pageview.pu).to.match(/.*apps\/react\/content-engagement$/);
            expect(pageview.fns).to.equal("1");
            expect(pageview.one).to.equal("1");

            // Content Engagement 0%
            expect(contentEngagement0.eid).to.match(/^\d{19}$/);
            expect(contentEngagement0.p[1]).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement0.pageName).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement0.pu).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(contentEngagement0.ck921).to.equal("Demo content");
            expect(contentEngagement0.ck922).to.equal("0");
            expect(contentEngagement0.ck923).to.equal("0");

            // linkClick
            expect(linkClick.eid).to.match(/^\d{19}$/);
            expect(linkClick.p[1]).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(linkClick.pageName).to.match(
                /.*apps\/react\/content-engagement$/
            );
            expect(linkClick.pu).to.match(/.*apps\/react\/content-engagement$/);
            expect(linkClick.ct).to.match(/.*apps\/react$/);

            // homepagePI
            expect(homepagePI.eid).to.match(/^\d{19}$/);
            expect(homepagePI.p[1]).to.match(/.*apps\/react$/);
            expect(homepagePI.pageName).to.match(/.*apps\/react$/);
            expect(homepagePI.pu).to.match(/.*apps\/react$/);
        });
        cy.get('@trackRequest.all').then((interceptions) => {
            expect(interceptions).to.have.length(4);
        });
    });
});
