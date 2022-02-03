import React from 'react';
import { shallow, mount } from './../../../enzyme';
import { expectInCallback } from './../../../helper';
import { WebtrekkOrderData, WebtrekkSmartPixelReact } from './../../../../src/index';

const reactVersion = parseInt(React.version.split('.')[0]);
let invalidPropIndex = 0;
if (reactVersion > 16) {
    invalidPropIndex = 2;
}

describe('WebtrekkOrderData', () => {
    let spyOnError;
    let renderedWebtrekkOrderData;

    describe('shallow rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
        });

        test('ignore wrong type', () => {
            shallow(
                <WebtrekkOrderData
                    value={false}
                    id={123456789}
                    currency={false}
                    couponValue={false}
                    paymentMethod={1}
                    shippingService={2}
                    shippingSpeed={3}
                    shippingCosts={false}
                    grossMargin={false}
                    orderStatus={5}
                    parameter={{1: 'foo', 2: 2}}
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(11);

            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain('Invalid prop `value` supplied to `WebtrekkOrderData`');
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain('Invalid prop `id` of type `number` supplied to `WebtrekkOrderData`, expected `string`');
            expect(spyOnError.mock.calls[2][invalidPropIndex]).toContain('Invalid prop `currency` of type `boolean` supplied to `WebtrekkOrderData`, expected `string`');
            expect(spyOnError.mock.calls[3][invalidPropIndex]).toContain('Invalid prop `couponValue` supplied to `WebtrekkOrderData`');
            expect(spyOnError.mock.calls[4][invalidPropIndex]).toContain('Invalid prop `paymentMethod` of type `number` supplied to `WebtrekkOrderData`, expected `string`');
            expect(spyOnError.mock.calls[5][invalidPropIndex]).toContain('Invalid prop `shippingService` of type `number` supplied to `WebtrekkOrderData`, expected `string`');
            expect(spyOnError.mock.calls[6][invalidPropIndex]).toContain('Invalid prop `shippingSpeed` of type `number` supplied to `WebtrekkOrderData`, expected `string`');
            expect(spyOnError.mock.calls[7][invalidPropIndex]).toContain('Invalid prop `shippingCosts` supplied to `WebtrekkOrderData`');
            expect(spyOnError.mock.calls[8][invalidPropIndex]).toContain('Invalid prop `grossMargin` supplied to `WebtrekkOrderData`');
            expect(spyOnError.mock.calls[9][invalidPropIndex]).toContain('Invalid prop `orderStatus` of type `number` supplied to `WebtrekkOrderData`, expected `string`');
            expect(spyOnError.mock.calls[10][invalidPropIndex]).toContain('Invalid prop `parameter.2` of type `number` supplied to `WebtrekkOrderData`, expected `string`');
        });

        test('don\'t returns children', () => {
            expect(shallow(<WebtrekkOrderData />)).toEqual({});
        });
    });

    describe('full rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call(() => {
                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
                done();
            });
        });

        afterEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                wtSmart.order.data.remove();

                spyOnError.mockRestore();
                spyOnError = null;

                done();
            });
        });

        test('mount init', (done) => {
            mount(<WebtrekkOrderData
                value={ 19.95 }
                id='123456789'
                currency='EUR'
                couponValue={ 10 }
                paymentMethod='1'
                shippingService='2'
                shippingSpeed='3'
                shippingCosts={ 2.75 }
                grossMargin={ 2.50 }
                orderStatus='5'
                parameter={ {1: 'foo', 2: 'bar'} }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const orderData = wtSmart.order.data.get();
                    expect(orderData.value).toBe(19.95);
                    expect(orderData.id).toBe('123456789');
                    expect(orderData.currency).toBe('EUR');
                    expect(orderData.couponValue).toBe(10);
                    expect(orderData.paymentMethod).toBe('1');
                    expect(orderData.shippingService).toBe('2');
                    expect(orderData.shippingSpeed).toBe('3');
                    expect(orderData.shippingCosts).toBe(2.75);
                    expect(orderData.grossMargin).toBe(2.50);
                    expect(orderData.orderStatus).toBe('5');
                    expect(orderData.parameter[1]).toBe('foo');
                    expect(orderData.parameter[2]).toBe('bar');
                }, done);
            });
        });

        test('update init', (done) => {
            renderedWebtrekkOrderData = mount(<WebtrekkOrderData
                value={ 19.95 }
                id='123456789'
                currency='EUR'
                couponValue={ 10 }
                paymentMethod='1'
                shippingService='2'
                shippingSpeed='3'
                shippingCosts={ 2.75 }
                grossMargin={ 2.50 }
                orderStatus='5'
                parameter={ {1: 'foo', 2: 'bar'} }
            />);

            renderedWebtrekkOrderData.setProps({
                id: 'A-123456789',
                shippingSpeed: '7'
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const orderData = wtSmart.order.data.get();
                    expect(orderData.value).toBe(19.95);
                    expect(orderData.id).toBe('A-123456789');
                    expect(orderData.currency).toBe('EUR');
                    expect(orderData.couponValue).toBe(10);
                    expect(orderData.paymentMethod).toBe('1');
                    expect(orderData.shippingService).toBe('2');
                    expect(orderData.shippingSpeed).toBe('7');
                    expect(orderData.shippingCosts).toBe(2.75);
                    expect(orderData.grossMargin).toBe(2.50);
                    expect(orderData.orderStatus).toBe('5');
                    expect(orderData.parameter[1]).toBe('foo');
                    expect(orderData.parameter[2]).toBe('bar');
                }, done);
            });
        });
    });
});
