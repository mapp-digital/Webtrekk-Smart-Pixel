/// <reference types="cypress" />
import {parseTrackrequest} from '../../support/e2e';

context('React Teaser Tracking', () => {
    beforeEach(() => {
        cy.smartIntercept();
    });

    it('React teaser views', () => {
        cy.visit('/apps/react/teaser');
        const trackData = [];
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
            cy.scrollTo('bottom');
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        }).then(() => {
            expect(trackData.length).to.equal(3);
            const pageview = trackData[0];
            const teaser1 = trackData[1];
            const teaser2 = trackData[2];

            // Pageview
            expect(pageview.eid).to.match(/^\d{19}$/);
            expect(pageview.p[1]).to.match(/.*apps\/react\/teaser$/);
            expect(pageview.pageName).to.match(/.*apps\/react\/teaser$/);
            expect(pageview.pu).to.match(/.*apps\/react\/teaser$/);
            expect(pageview.fns).to.equal('1');
            expect(pageview.one).to.equal('1');

            // Teaser 1
            expect(teaser1.eid).to.match(/^\d{19}$/);
            expect(teaser1.p[1]).to.match(/.*apps\/react\/teaser$/);
            expect(teaser1.pageName).to.match(/.*apps\/react\/teaser$/);
            expect(teaser1.pu).to.match(/.*apps\/react\/teaser$/);
            expect(teaser1.ck520).to.equal('header');
            expect(teaser1.ck521).to.equal('Teaser 0');
            expect(teaser1.ck523).to.equal('1');
            expect(teaser1.ck527).to.equal('demo');
            expect(teaser1.ct).to.equal('webtrekk_ignore');

            // Teaser 2
            expect(teaser2.eid).to.match(/^\d{19}$/);
            expect(teaser2.p[1]).to.match(/.*apps\/react\/teaser$/);
            expect(teaser2.pageName).to.match(/.*apps\/react\/teaser$/);
            expect(teaser2.pu).to.match(/.*apps\/react\/teaser$/);
            expect(teaser2.ck520).to.equal('bottom');
            expect(teaser2.ck521).to.equal('Teaser 1');
            expect(teaser2.ck523).to.equal('1');
            expect(teaser2.ck527).to.equal('demo');
            expect(teaser2.ct).to.equal('webtrekk_ignore');
        });
    });

    it('React teaser click and engagement', () => {
        cy.visit('/apps/react/teaser');
        const trackData = [];
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
            cy.contains('This is a teaser').click();
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
        });
        cy.wait('@trackRequest').then(inception => {
            trackData.push(parseTrackrequest(inception));
            const pageview = trackData[0];
            const teaserView = trackData[1];
            const clickTracking = trackData[2];
            const teaserClick = trackData[3];
            const pageViewTarget = trackData[4];
            const teaserEngagement = trackData[5];

            // Pageview
            expect(pageview.eid).to.match(/^\d{19}$/);
            expect(pageview.p[1]).to.match(/.*apps\/react\/teaser$/);
            expect(pageview.pageName).to.match(/.*apps\/react\/teaser$/);
            expect(pageview.pu).to.match(/.*apps\/react\/teaser$/);
            expect(pageview.fns).to.equal('1');
            expect(pageview.one).to.equal('1');

            // Teaser View
            expect(teaserView.eid).to.match(/^\d{19}$/);
            expect(teaserView.p[1]).to.match(/.*apps\/react\/teaser$/);
            expect(teaserView.pageName).to.match(/.*apps\/react\/teaser$/);
            expect(teaserView.pu).to.match(/.*apps\/react\/teaser$/);
            expect(teaserView.ck520).to.equal('header');
            expect(teaserView.ck521).to.equal('Teaser 0');
            expect(teaserView.ck523).to.equal('1');
            expect(teaserView.ck527).to.equal('demo');
            expect(teaserView.ct).to.equal('webtrekk_ignore');

            // Click Tracking
            expect(clickTracking.eid).to.match(/^\d{19}$/);
            expect(clickTracking.p[1]).to.match(/.*apps\/react\/teaser$/);
            expect(clickTracking.pageName).to.match(/.*apps\/react\/teaser$/);
            expect(clickTracking.pu).to.match(/.*apps\/react\/teaser$/);
            expect(clickTracking.ct).to.match(/.*apps\/react$/);

            // Teaser Click
            expect(teaserClick.eid).to.match(/^\d{19}$/);
            expect(teaserClick.p[1]).to.match(/.*apps\/react\/teaser$/);
            expect(teaserClick.pageName).to.match(/.*apps\/react\/teaser$/);
            expect(teaserClick.pu).to.match(/.*apps\/react\/teaser$/);
            expect(teaserClick.ck520).to.equal('header');
            expect(teaserClick.ck521).to.equal('Teaser 0');
            expect(teaserClick.ck524).to.equal('1');
            expect(teaserClick.ck527).to.equal('demo');
            expect(teaserClick.ct).to.equal('webtrekk_ignore');

            // Pageview of teaser target page (homepage)
            expect(pageViewTarget.eid).to.match(/^\d{19}$/);
            expect(pageViewTarget.p[1]).to.match(/.*apps\/react$/);
            expect(pageViewTarget.pageName).to.match(/.*apps\/react$/);
            expect(pageViewTarget.pu).to.match(/.*apps\/react$/);

            // Teaser Engagement
            expect(teaserEngagement.eid).to.match(/^\d{19}$/);
            expect(teaserEngagement.p[1]).to.match(/.*apps\/react$/);
            expect(teaserEngagement.pageName).to.match(/.*apps\/react$/);
            expect(teaserEngagement.pu).to.match(/.*apps\/react$/);
            expect(teaserEngagement.ck520).to.equal('header');
            expect(teaserEngagement.ck521).to.equal('Teaser 0');
            expect(teaserEngagement.ck525).to.equal('1');
            expect(teaserEngagement.ck527).to.equal('demo');
            expect(teaserEngagement.ct).to.equal('webtrekk_ignore');
        });
    });
});
