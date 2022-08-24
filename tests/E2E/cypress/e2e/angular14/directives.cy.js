import { parseTrackrequest } from "../../support/e2e";

context("Angular14 Directives", () => {
    beforeEach(() => {
        cy.smartIntercept();
    });

    it("track directive", () => {
        const trackData = [];
        cy.visit("/apps/angular14/directives");
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.get("#track").click();
        cy.wait("@trackRequest").then((inception) => {
            trackData.push(parseTrackrequest(inception));
            expect(trackData.length).to.equal(2);
            const normalPageRequest = trackData[0];
            const directivePageRequest = trackData[1];
            expect(normalPageRequest.pageName).to.equal(
                "phoenix:4000/apps/angular14/directives"
            );
            expect(directivePageRequest.pageName).to.equal(
                "directiveTracktest"
            );
        });
    });

    it("content-engagement directive with selector", () => {
        const contentEngagementrequests = [];
        cy.get("#content-engagement").click();
        cy.wait("@trackRequest").then((inception) => {
            contentEngagementrequests.push(parseTrackrequest(inception));
        });
        cy.wait("@trackRequest").then((inception) => {
            contentEngagementrequests.push(parseTrackrequest(inception));
        });
        cy.wait("@trackRequest").then((inception) => {
            contentEngagementrequests.push(parseTrackrequest(inception));
            expect(contentEngagementrequests.length).to.equal(3);
            expect(contentEngagementrequests[0].ck921).to.equal("My Content");
            expect(contentEngagementrequests[0].ck922).to.equal("0");
            expect(contentEngagementrequests[0].ck923).to.equal("0");
            expect(contentEngagementrequests[0].ct).to.equal("webtrekk_ignore");
            expect(contentEngagementrequests[1].ck921).to.equal("My Content");
            expect(contentEngagementrequests[1].ck922).to.equal("50");
            expect(contentEngagementrequests[1].ck923).to.equal("50");
            expect(contentEngagementrequests[1].ct).to.equal("webtrekk_ignore");
            expect(contentEngagementrequests[2].ck921).to.equal("My Content");
            expect(contentEngagementrequests[2].ck922).to.equal("100");
            expect(contentEngagementrequests[2].ck923).to.equal("100");
            expect(contentEngagementrequests[2].ct).to.equal("webtrekk_ignore");
        });
    });

    it("teaser directive with selector", () => {
        const teaserRequests = [];
        cy.get("#teaser").click();
        cy.wait("@trackRequest").then((inception) => {
            teaserRequests.push(parseTrackrequest(inception));
            expect(teaserRequests.length).to.equal(1);
            const teaser = teaserRequests[0];
            expect(teaser.ck520).to.equal("header");
            expect(teaser.ck521).to.equal("My products");
            expect(teaser.ck522).to.equal("click");
            expect(teaser.ck523).to.equal("1");
            expect(teaser.ck526).to.equal("My products overview");
            expect(teaser.ck527).to.equal("products");
            expect(teaser.ct).to.equal("webtrekk_ignore");
        });
    });

    it("product-list directive with selector", () => {
        const productListRequests = [];
        cy.get("#product-list").click();
        cy.wait("@trackRequest").then((inception) => {
            productListRequests.push(parseTrackrequest(inception));
            expect(productListRequests.length).to.equal(1);
            const product = productListRequests[0];
            expect(product.ct).to.equal("webtrekk_ignore");
            expect(product.ba).to.equal("product id 1");
            expect(product.ca1).to.equal("category-1");
            expect(product.ca5).to.equal("category-5");
            expect(product.cb1).to.equal("parameter-1");
            expect(product.cb7).to.equal("parameter-7");
            expect(product.cb760).to.equal("0");
            expect(product.cb767).to.equal("product variant");
            expect(product.co).to.equal("19.95");
        });
    });

    it("init directive", () => {
        cy.get("#init").click();
        cy.window().then((win) => {
            const init = win.wtSmart.init.get();
            expect(init.cookie).to.equal("3");
            expect(init.trackDomain).to.equal("test.test");
            expect(init.trackId).to.equal("999999999999999");
            expect(init.domain.length).to.equal(1);
            expect(init.domain[0]).to.equal("sub.test.test");
        });
    });

    it("advanced directive", () => {
        cy.get("#advanced").click();
        cy.window().then((win) => {
            const advanced = win.wtSmart.advanced.get();
            expect(advanced.execCDB).to.equal(false);
            expect(advanced.forceOldEverId).to.equal(false);
            expect(advanced.optOutName).to.equal("webtrekkTestOptOut");
            expect(advanced.requestLimit.activated).to.equal(true);
            expect(advanced.requestLimit.amount).to.equal(88);
            expect(advanced.requestLimit.duration).to.equal(888);
            expect(advanced.requestObfuscation).to.equal(true);
            expect(advanced.requestQueue.activated).to.equal(true);
            expect(advanced.requestQueue.resendInterval).to.equal(99999);
            expect(advanced.requestQueue.retries).to.equal(-1);
            expect(advanced.requestQueue.retriesOption).to.equal(1);
            expect(advanced.requestQueue.size).to.equal(999);
            expect(advanced.requestQueue.ttl).to.equal(9999);
            expect(advanced.secureCookie).to.equal(true);
            expect(advanced.sendViaSDK).to.equal(false);
            expect(advanced.sendViaServer.activated).to.equal(false);
            expect(advanced.sendViaServer.blacklist.length).to.equal(1);
            expect(advanced.sendViaServer.blacklist[0]).to.equal("abc");
            expect(advanced.sendViaServer.droppedRequests).to.equal(0);
            expect(advanced.sendViaServer.serverDomain).to.equal(
                "testserver.test"
            );
            expect(advanced.sendViaServer.serverPath).to.equal(
                "testserverpath"
            );
            expect(advanced.useCDBCache).to.equal(true);
            expect(advanced.useHashForDefaultPageName).to.equal(true);
            expect(advanced.useParamsForDefaultPageName.length).to.equal(2);
            expect(advanced.useParamsForDefaultPageName[0]).to.equal("param1");
            expect(advanced.useParamsForDefaultPageName[1]).to.equal("param2");
            expect(advanced.userIdentification.anonymousCookieName).to.equal(
                "miCookieTestOptOut"
            );
            expect(advanced.userIdentification.anonymousOptIn).to.equal(true);
            expect(
                advanced.userIdentification.enableAnonymousFunction
            ).to.equal(true);
            // expect(advanced.userIdentification.suppressParameter.length).to.equal(2); //TODO needs fix
            // expect(advanced.userIdentification.suppressParameter[0]).to.equal('ab');
            // expect(advanced.userIdentification.suppressParameter[1]).to.equal('xy');
        });
    });

    it("page directive", () => {
        cy.get("#page").click();
        cy.window().then((win) => {
            const page = win.wtSmart.page.data.get();
            expect(page.articleTitle).to.equal("articleTitle");
            expect(page.category[1]).to.equal("category foo");
            expect(page.category[3]).to.equal("category bar");
            expect(page.contentTags).to.equal("contentTags");
            expect(page.daysSincePublication).to.equal(12);
            expect(page.errorMessages).to.equal("errorMessages");
            expect(page.goal[1]).to.equal("goal foo");
            expect(page.goal[4]).to.equal("goal bar");
            expect(page.length).to.equal("length");
            expect(page.name).to.equal("name");
            expect(page.numberSearchResults).to.equal(7);
            expect(page.parameter[1]).to.equal("parameter foo");
            expect(page.parameter[2]).to.equal("parameter bar");
            expect(page.paywall).to.equal(true);
            expect(page.search).to.equal("search");
            expect(page.testExperiment).to.equal("testExperiment");
            expect(page.testVariant).to.equal("testVariant");
            expect(page.title).to.equal("title");
            expect(page.type).to.equal("type");
        });
    });

    it("campaign directive", () => {
        cy.get("#campaign").click();
        cy.window().then((win) => {
            const campaign = win.wtSmart.campaign.data.get();
            expect(campaign.action).to.equal("c");
            expect(campaign.mediaCode.length).to.equal(2);
            expect(campaign.mediaCode[0]).to.equal("abc");
            expect(campaign.mediaCode[1]).to.equal("def");
            expect(campaign.oncePerSession).to.equal(true);
            expect(campaign.oncePerSession).to.equal(true);
            expect(campaign.parameter[1]).to.equal("foo");
            expect(campaign.parameter[2]).to.equal("bar");
        });
    });

    it("customer directive", () => {
        cy.get("#customer").click();
        cy.window().then((win) => {
            const customer = win.wtSmart.customer.data.get();
            expect(customer.birthday).to.equal("19870913");
            expect(customer.category[1]).to.equal("foo");
            expect(customer.category[2]).to.equal("bar");
            expect(customer.city).to.equal("berlin");
            expect(customer.country).to.equal("germany");
            expect(customer.email).to.equal("test@tester.com");
            expect(customer.emailOptin).to.equal(true);
            expect(customer.emailRID).to.equal("emailRID");
            expect(customer.firstName).to.equal("test");
            expect(customer.gender).to.equal(1);
            expect(customer.id).to.equal(
                "1f9e575ad4234c30a81d30c70affd4bba7b0d57d8e8607ad255496863d72c8bb"
            );
            expect(customer.lastName).to.equal("tester");
            expect(customer.postalCode).to.equal("12345");
            expect(customer.street).to.equal("test-street");
            expect(customer.streetNumber).to.equal("15A");
            expect(customer.telephone).to.equal("0123456789");
            expect(customer.validation).to.equal(false);
        });
    });

    it("product directive", () => {
        cy.get("#product").click();
        cy.window().then((win) => {
            const product = win.wtSmart.product.view.data.get();
            expect(product.length).to.equal(1);
            const product1 = product[0];
            expect(product1.category[1]).to.equal("category-1");
            expect(product1.category[5]).to.equal("category-5");
            expect(product1.cost).to.equal(19.95);
            expect(product1.id).to.equal("product id 1");
            expect(product1.parameter[1]).to.equal("parameter-1");
            expect(product1.parameter[7]).to.equal("parameter-7");
            expect(product1.quantity).to.equal(1);
            expect(product1.soldOut).to.equal(false);
            expect(product1.status).to.equal("view");
            expect(product1.variant).to.equal("product variant");
        });
    });

    it("order directive", () => {
        cy.get("#order").click();
        cy.window().then((win) => {
            const order = win.wtSmart.order.data.get();
            expect(order.couponValue).to.equal(10);
            expect(order.currency).to.equal("EUR");
            expect(order.grossMargin).to.equal(2.5);
            expect(order.id).to.equal("123456789");
            expect(order.parameter[1]).to.equal("foo");
            expect(order.parameter[2]).to.equal("bar");
            expect(order.paymentMethod).to.equal("1");
            expect(order.shippingCosts).to.equal(2.75);
            expect(order.shippingService).to.equal("2");
            expect(order.shippingSpeed).to.equal("3");
            expect(order.value).to.equal(19.95);
        });
    });

    it("session directive", () => {
        cy.get("#session").click();
        cy.window().then((win) => {
            const session = win.wtSmart.session.data.get();
            expect(session.loginStatus).to.equal("logged in");
            expect(session.parameter[1]).to.equal("foo");
            expect(session.parameter[2]).to.equal("bar");
        });
    });
});
