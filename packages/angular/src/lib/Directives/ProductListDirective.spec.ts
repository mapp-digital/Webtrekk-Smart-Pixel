import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WebtrekkSmartPixelModule, WebtrekkSmartPixelAngular } from './../index';
import { expectInCallback } from './../_helper/expectInCallback';
import { ProductListWithoutSelector, ProductListWithSelector } from "./../_helper/components"

describe('ProductListDirective', () => {
    let service: WebtrekkSmartPixelAngular;
    let spyOnAddProductListElement;
    let fixture;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false
                })
            ],
            declarations: [ ProductListWithoutSelector, ProductListWithSelector ]
        });

        service = TestBed.get(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            spyOnAddProductListElement = jest.spyOn(wtSmart.extension.product_list_tracking, 'add').mockImplementation(() => {});

            done();
        });
    });

    afterEach((done) => {
        service.call((wtSmart) => {
            wtSmart.extension.product_list_tracking.deactivate();

            spyOnAddProductListElement.mockRestore();
            spyOnAddProductListElement = null;

            done();
        });
    });

    test('add element with config - 1', (done) => {
        fixture = TestBed.createComponent(ProductListWithoutSelector);
        fixture.detectChanges();

        service.call(() => {
            expectInCallback(() => {
                const mock = spyOnAddProductListElement.mock.calls;
                expect(mock.length).toBe(1);

                const data = mock[0][0];
                expect(data.selector instanceof HTMLDivElement).toBe(true);
                expect(data.data.id).toBe('product id 1');
                expect(data.data.position).toBe(2);
                expect(data.data.cost).toBe(19.95);
                expect(data.data.quantity).toBe(1);
                expect(data.data.variant).toBe('product variant');
                expect(data.data.soldOut).toBe(false);
                expect(data.data.category).toEqual({1: 'category-1', 5: 'category-5'});
                expect(data.data.parameter).toEqual({1: 'parameter-1', 7: 'parameter-7'});
            }, done);
        });
    });

    test('add element with config - 2', (done) => {
        fixture = TestBed.createComponent(ProductListWithSelector);
        fixture.detectChanges();

        service.call(() => {
            expectInCallback(() => {
                const mock = spyOnAddProductListElement.mock.calls;
                expect(mock.length).toBe(1);

                const data = mock[0][0];
                expect(data.selector).toBe('#ce1');
                expect(data.data.id).toBe('product id 2');
                expect(data.data.position).toBe(3);
                expect(data.data.cost).toBe(89.95);
                expect(data.data.quantity).toBe(5);
                expect(data.data.variant).toBe('product variant');
                expect(data.data.soldOut).toBe(false);
                expect(data.data.category).toEqual({2: 'category-2', 9: 'category-9'});
                expect(data.data.parameter).toEqual({1: 'parameter-1', 6: 'parameter-6'});
            }, done);
        });
    });
});
