import {mount, createLocalVue} from '@vue/test-utils';
import ProductDirective from './../template/Product-directive.vue';
import {expectInCallback} from './../helper';
import Webtrekk from './../../src/index';
import WebtrekkSmartPixelVue from './../../src/lib/WebtrekkSmartPixelVue';

const localVue = createLocalVue();
localVue.use(Webtrekk, {
    trackId: '111111111111111',
    trackDomain: 'analytics01.wt-eu02.net',
    requestQueue: {
        activated: false
    }
});

describe('Product directive test', () => {
    test('Product directive test', done => {
        mount(ProductDirective, {
            sync: false,
            localVue
        });

        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const viewData = wtSmart.product.view.data.get();
                expect(viewData[0].id).toBe('1st product');
                expect(viewData[0].cost).toBe(99.9);
                expect(viewData[0].quantity).toBe(2);
                expect(viewData[0].soldOut).toBe(false);
                expect(viewData[0].variant).toBe('green');
                expect(viewData[0].parameter[1]).toBe('L');
                expect(viewData[0].category[1]).toBe('tops');

                expect(viewData.length).toBe(1);

                const basketData = wtSmart.product.basket.data.get();
                expect(basketData[0].id).toBe('1st product');
                expect(basketData[0].cost).toBe(99.9);
                expect(basketData[0].quantity).toBe(2);
                expect(basketData[0].soldOut).toBe(false);
                expect(basketData[0].variant).toBe('green');
                expect(basketData[0].parameter[1]).toBe('L');
                expect(basketData[0].category[1]).toBe('tops');

                const listData = wtSmart.product.list.data.get();
                expect(listData[0].id).toBe('1st product');
                expect(listData[0].cost).toBe(99.9);
                expect(listData[0].quantity).toBe(2);
                expect(listData[0].soldOut).toBe(false);
                expect(listData[0].variant).toBe('green');
                expect(listData[0].parameter[1]).toBe('L');
                expect(listData[0].category[1]).toBe('tops');

                expect(listData.length).toBe(3);
                expect(listData[1].id).toBe('2nd product');
                expect(listData[1].cost).toBe(0);
                expect(listData[2].id).toBe('3rd product');
                expect(listData[2].cost).toBe(9.99);

                const confirmationData = wtSmart.product.confirmation.data.get();
                expect(confirmationData[0].id).toBe('1st product');
                expect(confirmationData[0].cost).toBe(99.9);
                expect(confirmationData[0].quantity).toBe(2);
                expect(confirmationData[0].soldOut).toBe(false);
                expect(confirmationData[0].variant).toBe('green');
                expect(confirmationData[0].parameter[1]).toBe('L');
                expect(confirmationData[0].category[1]).toBe('tops');
            }, done);
        });
    });
});
