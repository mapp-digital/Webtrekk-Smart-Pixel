// / <reference types="cypress" />
import {parseTrackrequest} from '../../support/e2e';

context('react complete order process', () => {
    beforeEach(() => {
        cy.smartIntercept();
        Cypress.Cookies.preserveOnce('mapp_e2e_cart', 'mapp_e2e_token');
    });

    it('login', () => {
        cy.clearCookie('mapp_e2e_cart'); // get new cart
        cy.clearCookie('mapp_e2e_token'); // make sure to not be logged in already
        const trackData = [];
        cy.visit('/apps/react/login');
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.get('#login input[name="name"]').type('Mapp');
        cy.get('#login input[name="password"]').type('meh');
        cy.get('#login button[type="submit"]').click();
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains('Your username is: Mapp').should('be.visible').then(() => {
            const loginPageRequest = trackData[0];
            const accountPageRequest = trackData[1];
            const loginCheckEventRequest = trackData[2];

            expect(loginPageRequest.eid).to.match(/^\d{19}$/);
            expect(loginPageRequest.p[1]).to.match(/.*apps\/react\/login$/);
            expect(loginPageRequest.pageName).to.match(/.*apps\/react\/login$/);
            expect(loginPageRequest.pu).to.match(/.*apps\/react\/login$/);
            expect(loginPageRequest.fns).to.equal('1');
            expect(loginPageRequest.one).to.equal('1');
            // expect(loginPageRequest.cs1).to.equal('session test');
            // expect(loginPageRequest.cs800).to.equal('logged out');

            expect(accountPageRequest.eid).to.match(/^\d{19}$/);
            expect(accountPageRequest.p[1]).to.match(/.*apps\/react\/account$/);
            expect(accountPageRequest.pageName).to.match(/.*apps\/react\/account$/);
            expect(accountPageRequest.pu).to.match(/.*apps\/react\/account$/);

            expect(loginCheckEventRequest.eid).to.match(/^\d{19}$/);
            expect(loginCheckEventRequest.p[1]).to.match(/.*apps\/react\/account$/);
            expect(loginCheckEventRequest.pageName).to.match(/.*apps\/react\/account$/);
            expect(loginCheckEventRequest.pu).to.match(/.*apps\/react\/account$/);
            expect(loginCheckEventRequest.ct).to.equal("check-login");
            expect(loginCheckEventRequest.cs800).to.equal("logged in");
            expect(loginCheckEventRequest.cd).to.equal("Mapp");
        });
    });

    it('account', () => {
        const trackData = [];
        cy.visit('/apps/react/account');
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.contains('Your username is: Mapp').should('be.visible').then(() => {
            const pageRequest = trackData[0];
            expect(pageRequest.eid).to.match(/^\d{19}$/);
            expect(pageRequest.p[1]).to.match(/.*apps\/react\/account$/);
            expect(pageRequest.pageName).to.match(/.*apps\/react\/account$/);
            expect(pageRequest.pu).to.match(/.*apps\/react\/account$/);
            expect(pageRequest.fns).to.equal('1');
            expect(pageRequest.one).to.equal('1');
        });
    });

    it('shop list and add', () => {
        const trackData = [];
        cy.visit('/apps/react/shop');
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.get('#product_1 button').click();
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.get('#product_2 button').click();
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.get('#product_2 button').click();
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        }).then(() => {
            const pageRequest = trackData[0];
            const productList = trackData[1];
            const product1add = trackData[2];
            const product2add1 = trackData[3];
            const product2add2 = trackData[4];

            expect(pageRequest.eid).to.match(/^\d{19}$/);
            expect(pageRequest.p[1]).to.match(/.*apps\/react\/shop$/);
            expect(pageRequest.pageName).to.match(/.*apps\/react\/shop$/);
            expect(pageRequest.pu).to.match(/.*apps\/react\/shop$/);
            expect(pageRequest.fns).to.equal('1');
            expect(pageRequest.one).to.equal('1');
            // these moved to the next request in React 18
            // expect(pageRequest.cs1).to.equal('session test');
            // expect(pageRequest.cs800).to.equal('logged in');

            expect(productList.eid).to.match(/^\d{19}$/);
            expect(productList.p[1]).to.match(/.*apps\/react\/shop$/);
            expect(productList.pageName).to.match(/.*apps\/react\/shop$/);
            expect(productList.pu).to.match(/.*apps\/react\/shop$/);
            expect(productList.ba).to.equal('1;2;3;4;5');
            expect(productList.cb760).to.equal('0;0;0;0;0');
            expect(productList.co).to.equal('129.99;99.99;79.99;169.99;99.99');
            expect(productList.ct).to.equal('webtrekk_ignore');
            expect(productList.plp).to.equal('1;2;3;4;5');
            expect(productList.qn).to.equal('1;1;1;1;1');
            expect(productList.st).to.equal('list');
            expect(productList.ca1).to.equal('vintage field jacket, 100% cotton;lightweight jacket in 100% cotton;bomber jacket with knitted cuffs;2-in-1 field jacket with a zip-off waistcoat;parka with teddy-bear fur lined hood');
            expect(productList.cb1).to.equal('075ee2g002;085cc2g007;085cc2g016;085ee2g020;095cc2g009');
            expect(productList.cs1).to.equal('session test');
            expect(productList.cs800).to.equal('logged in');

            expect(product1add.eid).to.match(/^\d{19}$/);
            expect(product1add.p[1]).to.match(/.*apps\/react\/shop$/);
            expect(product1add.pageName).to.match(/.*apps\/react\/shop$/);
            expect(product1add.pu).to.match(/.*apps\/react\/shop$/);
            expect(product1add.ba).to.equal('1');
            expect(product1add.cb760).to.equal('0');
            expect(product1add.co).to.equal('129.99');
            expect(product1add.ct).to.equal('addToCart');
            expect(product1add.qn).to.equal('1');
            expect(product1add.st).to.equal('add');

            expect(product2add1.eid).to.match(/^\d{19}$/);
            expect(product2add1.p[1]).to.match(/.*apps\/react\/shop$/);
            expect(product2add1.pageName).to.match(/.*apps\/react\/shop$/);
            expect(product2add1.pu).to.match(/.*apps\/react\/shop$/);
            expect(product2add1.ba).to.equal('2');
            expect(product2add1.cb760).to.equal('0');
            expect(product2add1.co).to.equal('99.99');
            expect(product2add1.ct).to.equal('addToCart');
            expect(product2add1.qn).to.equal('1');
            expect(product2add1.st).to.equal('add');

            expect(product2add2.eid).to.match(/^\d{19}$/);
            expect(product2add2.p[1]).to.match(/.*apps\/react\/shop$/);
            expect(product2add2.pageName).to.match(/.*apps\/react\/shop$/);
            expect(product2add2.pu).to.match(/.*apps\/react\/shop$/);
            expect(product2add2.ba).to.equal('2');
            expect(product2add2.cb760).to.equal('0');
            expect(product2add2.co).to.equal('99.99');
            expect(product2add2.ct).to.equal('addToCart');
            expect(product2add2.qn).to.equal('1');
            expect(product2add2.st).to.equal('add');
        });
    });

    it('Single product multi add', () => {
        const trackData = [];
        cy.visit('/apps/react/shop/6');
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.get('input[name="quantity"').clear().type('5');
        cy.get('button').click();
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
            const pageView = trackData[0];
            const productAdd = trackData[1];

            expect(pageView.eid).to.match(/^\d{19}$/);
            expect(pageView.p[1]).to.match(/.*apps\/react\/shop\/6$/);
            expect(pageView.pageName).to.match(/.*apps\/react\/shop\/6$/);
            expect(pageView.pu).to.match(/.*apps\/react\/shop\/6$/);
            expect(pageView.ba).to.equal('6');
            expect(pageView.cb760).to.equal('0');
            expect(pageView.co).to.equal('49.99');
            expect(pageView.qn).to.equal('1');
            expect(pageView.st).to.equal('view');
            expect(pageView.ca1).to.equal('denim shorts in 100% cotton');
            expect(pageView.cb1).to.equal('055cc2c019');

            expect(productAdd.eid).to.match(/^\d{19}$/);
            expect(productAdd.p[1]).to.match(/.*apps\/react\/shop\/6$/);
            expect(productAdd.pageName).to.match(/.*apps\/react\/shop\/6$/);
            expect(productAdd.pu).to.match(/.*apps\/react\/shop\/6$/);
            expect(productAdd.ba).to.equal('6');
            expect(productAdd.cb760).to.equal('0');
            expect(productAdd.co).to.equal('249.95');
            expect(productAdd.ct).to.equal('addToCart');
            expect(productAdd.qn).to.equal('5');
            expect(productAdd.st).to.equal('add');
            expect(pageView.ca1).to.equal('denim shorts in 100% cotton');
            expect(pageView.cb1).to.equal('055cc2c019');
        });
    });

    it('Add order', () => {
        const trackData = [];
        cy.visit('/apps/react/');
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.get('#openCart').click();
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.get('#addOrder').click();
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
            const pageView = trackData[0];
            const openCartEvent = trackData[1];
            const closeCartEvent = trackData[2];
            const orderRequest = trackData[3];

            expect(pageView.eid).to.match(/^\d{19}$/);
            expect(pageView.p[1]).to.match(/.*apps\/react\/$/);
            expect(pageView.pageName).to.match(/.*apps\/react\/$/);
            expect(pageView.pu).to.match(/.*apps\/react\/$/);
            // these moved to the next request in React 18
            // expect(pageView.cs1).to.equal('session test');
            // expect(pageView.cs800).to.equal('logged in');
            // expect(pageView.cd).to.equal('Mapp');

            expect(openCartEvent.eid).to.match(/^\d{19}$/);
            expect(openCartEvent.p[1]).to.match(/.*apps\/react\/$/);
            expect(openCartEvent.pageName).to.match(/.*apps\/react\/$/);
            expect(openCartEvent.pu).to.match(/.*apps\/react\/$/);
            expect(openCartEvent.ct).to.equal('Open cart');
            expect(openCartEvent.cs1).to.equal('session test');
            expect(openCartEvent.cs800).to.equal('logged in');
            expect(openCartEvent.cd).to.equal('Mapp');

            expect(closeCartEvent.eid).to.match(/^\d{19}$/);
            expect(closeCartEvent.p[1]).to.match(/.*apps\/react\/$/);
            expect(closeCartEvent.pageName).to.match(/.*apps\/react\/$/);
            expect(closeCartEvent.pu).to.match(/.*apps\/react\/$/);
            expect(closeCartEvent.ct).to.equal('Close cart');

            expect(orderRequest.eid).to.match(/^\d{19}$/);
            expect(orderRequest.p[1]).to.match(/.*apps\/react\/thankyou$/);
            expect(orderRequest.pageName).to.match(/.*apps\/react\/thankyou$/);
            expect(orderRequest.pu).to.match(/.*apps\/react\/thankyou$/);
            expect(orderRequest.ba).to.equal('6;2;1');
            expect(orderRequest.cb760).to.equal('0;0;0');
            expect(orderRequest.co).to.equal('249.95;199.98;129.99');
            expect(orderRequest.oi).to.match(/\d+/);
            expect(orderRequest.ov).to.equal('579.92');
            expect(orderRequest.qn).to.equal('5;2;1');
            expect(orderRequest.st).to.equal('conf');
            // expect(pageView.cd).to.equal('Mapp');
        });
    });
});
