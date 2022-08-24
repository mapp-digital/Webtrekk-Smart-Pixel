/// <reference types="cypress" />
import {parseTrackrequest} from '../../support/e2e';

context('React Redux Middleware Tracking', () => {
    beforeEach(() => {
        cy.smartIntercept();
    });


    it('custom action middleware', () => {
        cy.visit('/apps/react/redux');
        cy.wait('@trackRequest').then(inception => {
            const pageview = parseTrackrequest(inception);
            expect(pageview.eid).to.match(/^\d{19}$/);
            expect(pageview.p[1]).to.match(/.*apps\/react\/redux$/);
            expect(pageview.pageName).to.match(/.*apps\/react\/redux$/);
            expect(pageview.pu).to.match(/.*apps\/react\/redux$/);
            expect(pageview.fns).to.equal('1');
            expect(pageview.one).to.equal('1');
        });
        cy.get('#count').contains('0');
        cy.get('#increment').click();
        cy.wait('@trackRequest').then(inception => {
            const customAction = parseTrackrequest(inception);
            expect(customAction.eid).to.match(/^\d{19}$/);
            expect(customAction.p[1]).to.match(/.*apps\/react\/redux$/);
            expect(customAction.pageName).to.match(/.*apps\/react\/redux$/);
            expect(customAction.ct).to.equal('counter/INCREMENT');
            expect(customAction.ck1).to.equal('1');
        });
        cy.get('#count').contains('1');
        cy.get('#add').click();
        cy.wait('@trackRequest').then(inception => {
            const customAction = parseTrackrequest(inception);
            expect(customAction.eid).to.match(/^\d{19}$/);
            expect(customAction.p[1]).to.match(/.*apps\/react\/redux$/);
            expect(customAction.pageName).to.match(/.*apps\/react\/redux$/);
            expect(customAction.ct).to.equal('counter/ADD');
            expect(customAction.ck1).to.equal('6');
            expect(customAction.ck2).to.equal('5');
        });
        cy.get('#count').contains('6');
    });

    it('webtrekk/page data middleware', () => {

        cy.get('#webtrekk-page').click();
        cy.wait('@trackRequest').then(inception => {
            const pageMiddlware = parseTrackrequest(inception);
            expect(pageMiddlware.eid).to.match(/^\d{19}$/);
            expect(pageMiddlware.p[1]).to.equal("page middleware test");
            expect(pageMiddlware.pageName).to.equal("page middleware test");
            expect(pageMiddlware.ct).to.not.exist;
            expect(pageMiddlware.cp8).to.equal("test page parameter 8");
        });
        cy.get('#count').contains('8');
    });

    it('webtrekk/session, campaign, customer, action data middlware', () => {

        cy.get('#webtrekk-session').click();
        cy.get('#count').contains('10');
        cy.get('#webtrekk-campaign').click();
        cy.get('#count').contains('12');
        cy.get('#webtrekk-customer').click();
        cy.get('#count').contains('14');
        cy.get('#webtrekk-action').click();
        cy.get('#count').contains('16');

        cy.wait('@trackRequest').then(inception => {
            const actionMiddleware = parseTrackrequest(inception);
            expect(actionMiddleware.eid).to.match(/^\d{19}$/);
            expect(actionMiddleware.pageName).to.equal("page middleware test");
            expect(actionMiddleware.ct).to.equal("middleware action test");
            expect(actionMiddleware.cp8).to.not.exist;
            expect(actionMiddleware.cc4).to.equal("test campaign parameter 4");
            expect(actionMiddleware.cd).to.equal("customer test id");
            expect(actionMiddleware.ck99).to.equal("test event parameter 99");
            expect(actionMiddleware.cs3).to.equal("test session parameter 3");
            expect(actionMiddleware.uc4).to.equal("test customer category 4");
        });
    });

    it('webtrekk/product middlware', () => {

        cy.get('#webtrekk-product').click();

        cy.wait('@trackRequest').then(inception => {
            const productMiddleware = parseTrackrequest(inception);
            expect(productMiddleware.eid).to.match(/^\d{19}$/);
            expect(productMiddleware.pageName).to.equal("page middleware test");
            expect(productMiddleware.ba).to.equal("ABC-123");
            expect(productMiddleware.ca1).to.equal("tops");
            expect(productMiddleware.ca2).to.equal("noname");
            expect(productMiddleware.cb1).to.equal("L");
            expect(productMiddleware.cb760).to.equal("0");
            expect(productMiddleware.cb767).to.equal("green");
            expect(productMiddleware.co).to.equal("99.9");
            expect(productMiddleware.qn).to.equal("2");
            expect(productMiddleware.st).to.equal("add");
        });
        cy.get('#count').contains('18');
    });

    it('webtrekk/products, order middleware', () => {

        cy.get('#webtrekk-products').click();
        cy.get('#count').contains('20');
        cy.get('#webtrekk-order').click();

        cy.wait('@trackRequest').then(inception => {
            const orderMiddleware = parseTrackrequest(inception);
            expect(orderMiddleware.eid).to.match(/^\d{19}$/);
            expect(orderMiddleware.pageName).to.equal("page middleware test");
            expect(orderMiddleware.ba).to.equal("EFG-456;HIJ-456");
            expect(orderMiddleware.ca1).to.equal("tops;test");
            expect(orderMiddleware.ca2).to.equal("noname;bar");
            expect(orderMiddleware.cb1).to.equal("L;XL");
            expect(orderMiddleware.cb563).to.equal("10");
            expect(orderMiddleware.cb760).to.equal("0;0");
            expect(orderMiddleware.cb761).to.equal("paypal");
            expect(orderMiddleware.cb762).to.equal("dhl");
            expect(orderMiddleware.cb763).to.equal("express");
            expect(orderMiddleware.cb764).to.equal("4.95");
            expect(orderMiddleware.cb765).to.equal("12.95");
            expect(orderMiddleware.cb767).to.equal("green;red");
            expect(orderMiddleware.co).to.equal("99.99;9.9");
            expect(orderMiddleware.qn).to.equal("2;9");
            expect(orderMiddleware.st).to.equal("conf");
            expect(orderMiddleware.oi).to.equal("M-12345");
            expect(orderMiddleware.ov).to.equal("120.99");
        });
        cy.get('#count').contains('22');
    });

    it('webtrekk/track with keepdata middleware', () => {

        cy.get('#webtrekk-customer').click();
        cy.get('#count').contains('24');
        cy.get('#webtrekk-track').click();
        cy.wait('@trackRequest').then(inception => {
            const trackMiddleware = parseTrackrequest(inception);
            expect(trackMiddleware.pageName).to.equal("page middleware test");
            expect(trackMiddleware.cd).to.equal("customer test id");
            expect(trackMiddleware.ct).to.equal("webtrekk_ignore");
        });
        cy.get('#count').contains('26');
    });

    it('webtrekk/trackPage middleware', () => {

        cy.get('#webtrekk-trackPage').click();
        cy.wait('@trackRequest').then(inception => {
            const trackMiddleware = parseTrackrequest(inception);
            expect(trackMiddleware.pageName).to.equal("page middleware test");
            expect(trackMiddleware.cd).to.equal("customer test id");
            expect(trackMiddleware.ct).to.not.exist;
        });
        cy.get('#count').contains('28');
    });

    it('webtrekk/trackAction middleware', () => {

        cy.get('#webtrekk-trackAction').click();
        cy.wait('@trackRequest').then(inception => {
            const trackMiddleware = parseTrackrequest(inception);
            expect(trackMiddleware.pageName).to.equal("page middleware test");
            expect(trackMiddleware.ct).to.equal("webtrekk_ignore");
        });
        cy.get('#count').contains('30');
    });



    it('webtrekk/init middleware', () => {

        cy.get('#webtrekk-init').click();
        cy.window().then(win => {
            const init = win.wtSmart.init.get();
            expect(init.trackId).to.equal("123123123123124");
        });
        cy.get('#count').contains('32');
    });

    it('webtrekk/advanced middleware', () => {

        cy.get('#webtrekk-advanced').click();
        cy.window().then(win => {
            const advanced = win.wtSmart.advanced.get();
            expect(advanced.optOutName).to.equal("abc");
        });
        cy.get('#count').contains('34');
    });
});
