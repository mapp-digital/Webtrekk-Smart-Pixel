import React from 'react';
import { shallow, mount } from './../../../enzyme';
import { expectInCallback } from './../../../helper';
import { WebtrekkInitData, WebtrekkSmartPixelReact } from './../../../../src/index';

describe('WebtrekkInitData', () => {
    let spyOnError;
    let renderedWebtrekkInitData;

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
                <WebtrekkInitData
                    trackId={ 123451234512345 }
                    trackDomain={ 1 }
                    domain='test.tester.com'
                    cookie='4'
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(4);

            expect(spyOnError.mock.calls[0][0]).toContain('Invalid prop `trackId` of type `number` supplied to `WebtrekkInitData`, expected `string`.');
            expect(spyOnError.mock.calls[1][0]).toContain('Invalid prop `trackDomain` of type `number` supplied to `WebtrekkInitData`, expected `string`.');
            expect(spyOnError.mock.calls[2][0]).toContain('Invalid prop `domain` of type `string` supplied to `WebtrekkInitData`, expected an array.');
            expect(spyOnError.mock.calls[3][0]).toContain('Invalid prop `cookie` of value `4` supplied to `WebtrekkInitData`, expected one of ["1","3"].');
        });

        test('required props', () => {
            shallow(<WebtrekkInitData />);

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(2);

            expect(spyOnError.mock.calls[0][0]).toContain('The prop `trackId` is marked as required in `WebtrekkInitData`, but its value is `null`.');
            expect(spyOnError.mock.calls[1][0]).toContain('The prop `trackDomain` is marked as required in `WebtrekkInitData`, but its value is `null`.');
        });

        test('don\'t returns children', () => {
            const renderedWebtrekkInitData = shallow(<WebtrekkInitData />);
            expect(renderedWebtrekkInitData).toEqual({});
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
                wtSmart.init.remove();

                spyOnError.mockRestore();
                spyOnError = null;

                done();
            });
        });

        test('mount init', (done) => {
            mount(<WebtrekkInitData
                trackId='123451234512345'
                trackDomain='analytics01.webtrekk.net'
                domain='sub.domain.tld'
                cookie='1'
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('123451234512345');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');
                    expect(initData.domain.join(',')).toBe('sub.domain.tld');
                    expect(initData.cookie).toBe('1');
                }, done);
            });
        });

        test('update init', (done) => {
            renderedWebtrekkInitData = mount(<WebtrekkInitData
                trackId='123451234512345'
                trackDomain='analytics01.webtrekk.net'
                domain='sub.domain.tld'
                cookie='1'
            />);

            renderedWebtrekkInitData.setProps({
                trackDomain: 'analytics01.wt-eu02.net',
                cookie: '3'
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('123451234512345');
                    expect(initData.trackDomain).toBe('analytics01.wt-eu02.net');
                    expect(initData.domain.join(',')).toBe('sub.domain.tld');
                    expect(initData.cookie).toBe('3');
                }, done);
            });
        });
    });
});
