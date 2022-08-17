/// <reference types="cypress" />
import {parseTrackrequest} from '../../support/e2e';

context('React Reducer Tracking', () => {
    beforeEach(() => {
        cy.smartIntercept();

    });


    it('custom action reducer', () => {
        cy.visit('/apps/react/reducer');
        cy.wait('@trackRequest').then(inception => {
            const pageview = parseTrackrequest(inception);
            expect(pageview.eid).to.match(/^\d{19}$/);
            expect(pageview.p[1]).to.match(/.*apps\/react\/reducer$/);
            expect(pageview.pageName).to.match(/.*apps\/react\/reducer$/);
            expect(pageview.pu).to.match(/.*apps\/react\/reducer$/);
            expect(pageview.fns).to.equal('1');
            expect(pageview.one).to.equal('1');
        });
        cy.get('#increment').click();

        cy.wait('@trackRequest').then(inception => {
            const customReducer = parseTrackrequest(inception);
            expect(customReducer.eid).to.match(/^\d{19}$/);
            expect(customReducer.p[1]).to.match(/.*apps\/react\/reducer$/);
            expect(customReducer.pageName).to.match(/.*apps\/react\/reducer$/);
            expect(customReducer.ct).to.equal('increment');
            expect(customReducer.ck1).to.equal('1');
        });

    });

    it('webtrekk/page data reducer', () => {

        cy.get('#page-reducer').click();

        cy.wait('@trackRequest').then(inception => {
            const pageReducer = parseTrackrequest(inception);
            expect(pageReducer.eid).to.match(/^\d{19}$/);
            expect(pageReducer.p[1]).to.equal("page reducer test");
            expect(pageReducer.pageName).to.equal("page reducer test");
            expect(pageReducer.ct).to.not.exist;
            expect(pageReducer.cp8).to.equal("test page parameter 8");
        });

    });

    it('webtrekk/session, campaign, customer, action data reducer', () => {

        cy.get('#session-reducer').click();
        cy.get('#campaign-reducer').click();
        cy.get('#customer-reducer').click();
        cy.get('#action-reducer').click();

        cy.wait('@trackRequest').then(inception => {
            const actionReducer = parseTrackrequest(inception);
            expect(actionReducer.eid).to.match(/^\d{19}$/);
            expect(actionReducer.pageName).to.equal("page reducer test");
            expect(actionReducer.ct).to.equal("reducer action test");
            expect(actionReducer.cp8).to.not.exist;
            expect(actionReducer.cc4).to.equal("test campaign parameter 4");
            expect(actionReducer.cd).to.equal("customer test id");
            expect(actionReducer.ck99).to.equal("test event parameter 99");
            expect(actionReducer.cs3).to.equal("test session parameter 3");
            expect(actionReducer.uc4).to.equal("test customer category 4");
        });
    });

    it('webtrekk/product reducer', () => {

        cy.get('#product-reducer').click();

        cy.wait('@trackRequest').then(inception => {
            const productReducer = parseTrackrequest(inception);
            expect(productReducer.eid).to.match(/^\d{19}$/);
            expect(productReducer.pageName).to.equal("page reducer test");
            expect(productReducer.ba).to.equal("ABC-123");
            expect(productReducer.ca1).to.equal("tops");
            expect(productReducer.ca2).to.equal("noname");
            expect(productReducer.cb1).to.equal("L");
            expect(productReducer.cb760).to.equal("0");
            expect(productReducer.cb767).to.equal("green");
            expect(productReducer.co).to.equal("99.9");
            expect(productReducer.qn).to.equal("2");
            expect(productReducer.st).to.equal("add");
        });
    });

    it('webtrekk/products, order reducer', () => {

        cy.get('#products-reducer').click();
        cy.get('#order-reducer').click();

        cy.wait('@trackRequest').then(inception => {
            const orderReducer = parseTrackrequest(inception);
            expect(orderReducer.eid).to.match(/^\d{19}$/);
            expect(orderReducer.pageName).to.equal("page reducer test");
            expect(orderReducer.ba).to.equal("EFG-456;HIJ-456");
            expect(orderReducer.ca1).to.equal("tops;test");
            expect(orderReducer.ca2).to.equal("noname;bar");
            expect(orderReducer.cb1).to.equal("L;XL");
            expect(orderReducer.cb563).to.equal("10");
            expect(orderReducer.cb760).to.equal("0;0");
            expect(orderReducer.cb761).to.equal("paypal");
            expect(orderReducer.cb762).to.equal("dhl");
            expect(orderReducer.cb763).to.equal("express");
            expect(orderReducer.cb764).to.equal("4.95");
            expect(orderReducer.cb765).to.equal("12.95");
            expect(orderReducer.cb767).to.equal("green;red");
            expect(orderReducer.co).to.equal("99.99;9.9");
            expect(orderReducer.qn).to.equal("2;9");
            expect(orderReducer.st).to.equal("conf");
            expect(orderReducer.oi).to.equal("M-12345");
            expect(orderReducer.ov).to.equal("120.99");
        });
    });

    it('webtrekk/track with keepdata reducer', () => {

        cy.get('#customer-reducer').click();
        cy.get('#track-reducer').click();
        cy.wait('@trackRequest').then(inception => {
            const trackReducer = parseTrackrequest(inception);
            expect(trackReducer.pageName).to.equal("page reducer test");
            expect(trackReducer.cd).to.equal("customer test id");
            expect(trackReducer.ct).to.equal("webtrekk_ignore");
        });

    });

    it('webtrekk/trackPage reducer', () => {

        cy.get('#trackPage-reducer').click();
        cy.wait('@trackRequest').then(inception => {
            const trackReducer = parseTrackrequest(inception);
            expect(trackReducer.pageName).to.equal("page reducer test");
            expect(trackReducer.cd).to.equal("customer test id");
            expect(trackReducer.ct).to.not.exist;
        });

    });

    it('webtrekk/trackAction reducer', () => {

        cy.get('#trackAction-reducer').click();
        cy.wait('@trackRequest').then(inception => {
            const trackReducer = parseTrackrequest(inception);
            expect(trackReducer.pageName).to.equal("page reducer test");
            expect(trackReducer.ct).to.equal("webtrekk_ignore");
        });

    });



    it('webtrekk/init reducer', () => {

        cy.get('#init-reducer').click();
        cy.window().then(win => {
            const init = win.wtSmart.init.get();
            expect(init.trackId).to.equal("123123123123124");
        });

    });

    it('webtrekk/advanced reducer', () => {

        cy.get('#advanced-reducer').click();
        cy.window().then(win => {
            const advanced = win.wtSmart.advanced.get();
            expect(advanced.optOutName).to.equal("abc");
        });

    });
});
