import {mount, createLocalVue} from '@vue/test-utils';
import ProductsDirective from './../template/Products-directive.vue';
import {expectInCallback} from './../helper';
import Webtrekk from './../../src/index';
import WebtrekkSmartPixelVue from './../../src/lib/WebtrekkSmartPixelVue';

const localVue = createLocalVue();
localVue.use(Webtrekk, {
    trackId: '111111111111111',
    trackDomain: 'analytics01.wt-eu02.net'
});

describe('Products directive test', () => {
    test('Products directive test', done => {
        mount(ProductsDirective, {
            sync: false,
            localVue
        });

        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const listData = wtSmart.product.list.data.get();
                expect(listData.length).toBe(3);
                expect(listData[0].id).toBe('product1');
                expect(listData[1].id).toBe('product2');
                expect(listData[2].id).toBe('product3');
                expect(listData[0].cost).toBe(1);
                expect(listData[1].cost).toBe(2);
                expect(listData[2].cost).toBe(3);

                const viewData = wtSmart.product.view.data.get();
                expect(viewData.length).toBe(3);
                expect(viewData[0].id).toBe('product1');
                expect(viewData[1].id).toBe('product2');
                expect(viewData[2].id).toBe('product3');
                expect(viewData[0].cost).toBe(1);
                expect(viewData[1].cost).toBe(2);
                expect(viewData[2].cost).toBe(3);

                const basketData = wtSmart.product.basket.data.get();
                expect(basketData.length).toBe(3);
                expect(basketData[0].id).toBe('product1');
                expect(basketData[1].id).toBe('product2');
                expect(basketData[2].id).toBe('product3');
                expect(basketData[0].cost).toBe(1);
                expect(basketData[1].cost).toBe(2);
                expect(basketData[2].cost).toBe(3);

                const addToCartData = wtSmart.product.addToCart.data.get();
                expect(addToCartData.length).toBe(3);
                expect(addToCartData[0].id).toBe('product1');
                expect(addToCartData[1].id).toBe('product2');
                expect(addToCartData[2].id).toBe('product3');
                expect(addToCartData[0].cost).toBe(1);
                expect(addToCartData[1].cost).toBe(2);
                expect(addToCartData[2].cost).toBe(3);

                const deleteFromCartData = wtSmart.product.deleteFromCart.data.get();
                expect(deleteFromCartData.length).toBe(3);
                expect(deleteFromCartData[0].id).toBe('product1');
                expect(deleteFromCartData[1].id).toBe('product2');
                expect(deleteFromCartData[2].id).toBe('product3');
                expect(deleteFromCartData[0].cost).toBe(1);
                expect(deleteFromCartData[1].cost).toBe(2);
                expect(deleteFromCartData[2].cost).toBe(3);

                const checkoutData = wtSmart.product.checkout.data.get();
                expect(checkoutData.length).toBe(3);
                expect(checkoutData[0].id).toBe('product1');
                expect(checkoutData[1].id).toBe('product2');
                expect(checkoutData[2].id).toBe('product3');
                expect(checkoutData[0].cost).toBe(1);
                expect(checkoutData[1].cost).toBe(2);
                expect(checkoutData[2].cost).toBe(3);

                const confirmationData = wtSmart.product.confirmation.data.get();
                expect(confirmationData.length).toBe(3);
                expect(confirmationData[0].id).toBe('product1');
                expect(confirmationData[1].id).toBe('product2');
                expect(confirmationData[2].id).toBe('product3');
                expect(confirmationData[0].cost).toBe(1);
                expect(confirmationData[1].cost).toBe(2);
                expect(confirmationData[2].cost).toBe(3);

                const addToWishlistData = wtSmart.product.addToWishlist.data.get();
                expect(addToWishlistData.length).toBe(3);
                expect(addToWishlistData[0].id).toBe('product1');
                expect(addToWishlistData[1].id).toBe('product2');
                expect(addToWishlistData[2].id).toBe('product3');
                expect(addToWishlistData[0].cost).toBe(1);
                expect(addToWishlistData[1].cost).toBe(2);
                expect(addToWishlistData[2].cost).toBe(3);

                const deleteFromWishlistData = wtSmart.product.deleteFromWishlist.data.get();
                expect(deleteFromWishlistData.length).toBe(3);
                expect(deleteFromWishlistData[0].id).toBe('product1');
                expect(deleteFromWishlistData[1].id).toBe('product2');
                expect(deleteFromWishlistData[2].id).toBe('product3');
                expect(deleteFromWishlistData[0].cost).toBe(1);
                expect(deleteFromWishlistData[1].cost).toBe(2);
                expect(deleteFromWishlistData[2].cost).toBe(3);
            }, done);
        });
    });
});
