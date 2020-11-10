import React from 'react';
import { shallow, mount } from './../../../enzyme';
import { expectInCallback } from './../../../helper';
import { WebtrekkCustomerData, WebtrekkSmartPixelReact } from './../../../../src/index';

describe('WebtrekkCustomerData', () => {
    let spyOnError;
    let renderedWebtrekkCustomerData;

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
                <WebtrekkCustomerData
                    id={ 123456789 }
                    email={ 1 }
                    emailRID={ 2 }
                    emailOptin={ 1 }
                    firstName={ 1 }
                    lastName={ 1 }
                    telephone={ 1 }
                    gender={ 'm' }
                    birthday={ 1 }
                    country={ 1 }
                    city={ 1 }
                    postalCode={ 1 }
                    street={ 1 }
                    streetNumber={ 1 }
                    validation={ 1 }
                    category={ {1: 'foo', 2: 3} }
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(16);

            expect(spyOnError.mock.calls[0][0]).toContain('Invalid prop `id` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[1][0]).toContain('Invalid prop `email` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[2][0]).toContain('Invalid prop `emailRID` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[3][0]).toContain('Invalid prop `emailOptin` of type `number` supplied to `WebtrekkCustomerData`, expected `boolean`.');
            expect(spyOnError.mock.calls[4][0]).toContain('Invalid prop `firstName` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[5][0]).toContain('Invalid prop `lastName` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[6][0]).toContain('Invalid prop `telephone` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[7][0]).toContain('Invalid prop `gender` of type `string` supplied to `WebtrekkCustomerData`, expected `number`.');
            expect(spyOnError.mock.calls[8][0]).toContain('Invalid prop `birthday` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[9][0]).toContain('Invalid prop `country` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[10][0]).toContain('Invalid prop `city` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[11][0]).toContain('Invalid prop `postalCode` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[12][0]).toContain('Invalid prop `street` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[13][0]).toContain('Invalid prop `streetNumber` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
            expect(spyOnError.mock.calls[14][0]).toContain('Invalid prop `validation` of type `number` supplied to `WebtrekkCustomerData`, expected `boolean`.');
            expect(spyOnError.mock.calls[15][0]).toContain('Invalid prop `category.2` of type `number` supplied to `WebtrekkCustomerData`, expected `string`.');
        });

        test('required props', () => {
            shallow(<WebtrekkCustomerData />);

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(1);

            expect(spyOnError.mock.calls[0][0]).toContain('The prop `id` is marked as required in `WebtrekkCustomerData`, but its value is `null`.');
        });

        test('don\'t returns children', () => {
            const renderedWebtrekkCustomerData = shallow(<WebtrekkCustomerData />);
            expect(renderedWebtrekkCustomerData).toEqual({});
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
                wtSmart.customer.data.remove();

                spyOnError.mockRestore();
                spyOnError = null;

                done();
            });
        });

        test('mount customer', (done) => {
            mount(<WebtrekkCustomerData
                id='test@tester.com'
                email='test@tester.com'
                emailRID='emailRID'
                emailOptin={ true }
                firstName='test'
                lastName='tester'
                telephone='0123456789'
                gender={ 1 }
                birthday='19870913'
                country='germany'
                city='berlin'
                postalCode='12345'
                street='test-street'
                streetNumber='15A'
                validation={ false }
                category={ {1: 'foo', 2: 'bar'} }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const customerData = wtSmart.customer.data.get();
                    expect(customerData.id).toBe('1f9e575ad4234c30a81d30c70affd4bba7b0d57d8e8607ad255496863d72c8bb');
                    expect(customerData.email).toBe('test@tester.com');
                    expect(customerData.emailRID).toBe('emailRID');
                    expect(customerData.emailOptin).toBe(true);
                    expect(customerData.firstName).toBe('test');
                    expect(customerData.lastName).toBe('tester');
                    expect(customerData.telephone).toBe('0123456789');
                    expect(customerData.gender).toBe(1);
                    expect(customerData.birthday).toBe('19870913');
                    expect(customerData.country).toBe('germany');
                    expect(customerData.city).toBe('berlin');
                    expect(customerData.postalCode).toBe('12345');
                    expect(customerData.street).toBe('test-street');
                    expect(customerData.streetNumber).toBe('15A');
                    expect(customerData.validation).toBe(false);
                    expect(customerData.category['1']).toBe('foo');
                    expect(customerData.category['2']).toBe('bar');
                }, done);
            });
        });

        test('update customer', (done) => {
            renderedWebtrekkCustomerData = mount(<WebtrekkCustomerData
                id='test@tester.com'
                email='test@tester.com'
                emailRID='emailRID'
                emailOptin={ true }
                firstName='test'
                lastName='tester'
                telephone='0123456789'
                gender={ 1 }
                birthday='19870913'
                country='germany'
                city='berlin'
                postalCode='12345'
                street='test-street'
                streetNumber='15A'
                validation={ false }
                category={ {1: 'foo', 2: 'bar'} }
            />);

            renderedWebtrekkCustomerData.setProps({
                id: '15',
                validation: true
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const customerData = wtSmart.customer.data.get();
                    expect(customerData.id).toBe('15');
                    expect(customerData.email).toBe('test@tester.com');
                    expect(customerData.emailRID).toBe('emailRID');
                    expect(customerData.emailOptin).toBe(true);
                    expect(customerData.firstName).toBe('test');
                    expect(customerData.lastName).toBe('tester');
                    expect(customerData.telephone).toBe('0123456789');
                    expect(customerData.gender).toBe(1);
                    expect(customerData.birthday).toBe('19870913');
                    expect(customerData.country).toBe('germany');
                    expect(customerData.city).toBe('berlin');
                    expect(customerData.postalCode).toBe('12345');
                    expect(customerData.street).toBe('test-street');
                    expect(customerData.streetNumber).toBe('15A');
                    expect(customerData.validation).toBe(true);
                    expect(customerData.category['1']).toBe('foo');
                    expect(customerData.category['2']).toBe('bar');
                }, done);
            });
        });
    });
});
