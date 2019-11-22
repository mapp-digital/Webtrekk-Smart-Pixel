import React from 'react';
import { shallow, mount } from './../../../enzyme';
import { expectInCallback } from './../../../helper';
import { WebtrekkOrderData, WebtrekkSmartPixelReact } from './../../../../src/index';

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
                    value='19.95'
                    id={ 123456789 }
                    currency={ false }
                    couponValue={ '10' }
                    paymentMethod={ 1 }
                    shippingService={ 2 }
                    shippingSpeed={ 3 }
                    shippingCosts={ '2.75' }
                    grossMargin={ '2.50' }
                    orderStatus={ 5 }
                    parameter={ {1: 'foo', 2: 2} }
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(11);

            expect(spyOnError.mock.calls[0][0]).toContain('Invalid prop `value` of type `string` supplied to `WebtrekkOrderData`, expected `number`.');
            expect(spyOnError.mock.calls[1][0]).toContain('Invalid prop `id` of type `number` supplied to `WebtrekkOrderData`, expected `string`.');
            expect(spyOnError.mock.calls[2][0]).toContain('Invalid prop `currency` of type `boolean` supplied to `WebtrekkOrderData`, expected `string`.');
            expect(spyOnError.mock.calls[3][0]).toContain('Invalid prop `couponValue` of type `string` supplied to `WebtrekkOrderData`, expected `number`.');
            expect(spyOnError.mock.calls[4][0]).toContain('Invalid prop `paymentMethod` of type `number` supplied to `WebtrekkOrderData`, expected `string`.');
            expect(spyOnError.mock.calls[5][0]).toContain('Invalid prop `shippingService` of type `number` supplied to `WebtrekkOrderData`, expected `string`.');
            expect(spyOnError.mock.calls[6][0]).toContain('Invalid prop `shippingSpeed` of type `number` supplied to `WebtrekkOrderData`, expected `string`.');
            expect(spyOnError.mock.calls[7][0]).toContain('Invalid prop `shippingCosts` of type `string` supplied to `WebtrekkOrderData`, expected `number`.');
            expect(spyOnError.mock.calls[8][0]).toContain('Invalid prop `grossMargin` of type `string` supplied to `WebtrekkOrderData`, expected `number`.');
            expect(spyOnError.mock.calls[9][0]).toContain('Invalid prop `orderStatus` of type `number` supplied to `WebtrekkOrderData`, expected `string`.');
            expect(spyOnError.mock.calls[10][0]).toContain('Invalid prop `parameter.2` of type `number` supplied to `WebtrekkOrderData`, expected `string`.');
        });

        test('required props', () => {
            shallow(<WebtrekkOrderData />);

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(1);

            expect(spyOnError.mock.calls[0][0]).toContain('The prop `value` is marked as required in `WebtrekkOrderData`, but its value is `null`.');
        });

        test('don\'t returns children', () => {
            const renderedWebtrekkOrderData = shallow(<WebtrekkOrderData />);
            expect(renderedWebtrekkOrderData).toEqual({});
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

        test('mount order', (done) => {
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

        test('send instantly order', (done) => {
            var spyOnTrack;

            WebtrekkSmartPixelReact.call(() => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});

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
                    sendInstantly={ true }
                />);
            });

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done, 150);
            });
        });

        test('update order', (done) => {
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
