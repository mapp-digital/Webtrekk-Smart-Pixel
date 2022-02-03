import React from 'react';
import {shallow, mount} from './../../../enzyme';
import {expectInCallback} from './../../../helper';
import {WebtrekkAdvancedData, WebtrekkSmartPixelReact} from './../../../../src/index';

const reactVersion = parseInt(React.version.split('.')[0]);
let invalidPropIndex = 0;
if (reactVersion > 16) {
    invalidPropIndex = 2;
}

describe('WebtrekkAdvancedData', () => {
    let spyOnError;
    let renderedWebtrekkAdvancedData;

    describe('shallow rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {
            });
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
        });

        test('ignore wrong type', () => {
            shallow(
                <WebtrekkAdvancedData
                    secureCookie={''}
                    optOutName={123456789}
                    requestObfuscation={'foo'}
                    execCDB={1}
                    useCDBCache={1}
                    sendViaSDK={1}
                    sendViaServer={{
                        activated: 0,
                        serverDomain: false,
                        serverPath: false,
                        droppedRequests: '',
                        blacklist: ''
                    }}
                    useHashForDefaultPageName={1}
                    useParamsForDefaultPageName={'param'}
                    requestQueue={{
                        activated: 0,
                        ttl: false,
                        resendInterval: false,
                        size: ''
                    }}
                    userIdentification={{
                        enableOptOut: 0,
                        optOutCookieName: false,
                        suppressParameter: ''
                    }}
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(11);
            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain('Invalid prop `secureCookie` of type `string` supplied to `WebtrekkAdvancedData`, expected `boolean`');
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain('Invalid prop `optOutName` of type `number` supplied to `WebtrekkAdvancedData`, expected `string`');
            expect(spyOnError.mock.calls[2][invalidPropIndex]).toContain('Invalid prop `requestObfuscation` of type `string` supplied to `WebtrekkAdvancedData`, expected `boolean`');
            expect(spyOnError.mock.calls[3][invalidPropIndex]).toContain('Invalid prop `execCDB` of type `number` supplied to `WebtrekkAdvancedData`, expected `boolean`');
            expect(spyOnError.mock.calls[4][invalidPropIndex]).toContain('Invalid prop `useCDBCache` of type `number` supplied to `WebtrekkAdvancedData`, expected `boolean`');
            expect(spyOnError.mock.calls[5][invalidPropIndex]).toContain('Invalid prop `sendViaSDK` of type `number` supplied to `WebtrekkAdvancedData`, expected `boolean`');
            expect(spyOnError.mock.calls[6][invalidPropIndex]).toContain('Invalid prop `sendViaServer.activated` of type `number` supplied to `WebtrekkAdvancedData`, expected `boolean`');
            expect(spyOnError.mock.calls[7][invalidPropIndex]).toContain('Invalid prop `useHashForDefaultPageName` of type `number` supplied to `WebtrekkAdvancedData`, expected `boolean`');
            expect(spyOnError.mock.calls[8][invalidPropIndex]).toContain('Invalid prop `useParamsForDefaultPageName` of type `string` supplied to `WebtrekkAdvancedData`, expected an array');
            expect(spyOnError.mock.calls[9][invalidPropIndex]).toContain('Invalid prop `requestQueue.activated` of type `number` supplied to `WebtrekkAdvancedData`, expected `boolean`');
            expect(spyOnError.mock.calls[10][invalidPropIndex]).toContain('Invalid prop `userIdentification.enableOptOut` of type `number` supplied to `WebtrekkAdvancedData`, expected `boolean`');
        });

        test('don\'t returns children', () => {
            const renderedWebtrekkAdvancedData = shallow(<WebtrekkAdvancedData/>);
            expect(renderedWebtrekkAdvancedData).toEqual({});
        });
    });

    describe('full rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call(() => {
                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {
                });
                done();
            });
        });

        afterEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                wtSmart.advanced.remove();

                spyOnError.mockRestore();
                spyOnError = null;

                done();
            });
        });

        test('mount advanced', (done) => {
            mount(<WebtrekkAdvancedData
                secureCookie={true}
                optOutName="webtrekkTestOptOut"
                requestObfuscation={true}
                execCDB={false}
                useCDBCache={true}
                sendViaSDK={true}
                sendViaServer={{
                    activated: true,
                    serverDomain: 'sub.domain.tld',
                    serverPath: 'path/to/s2s',
                    droppedRequests: 0,
                    blacklist: ['foo', 'bar']
                }}
                useHashForDefaultPageName={true}
                useParamsForDefaultPageName={['param1', 'param2']}
                requestQueue={{
                    activated: true,
                    ttl: 5 * 60 * 1000,
                    resendInterval: 5000,
                    size: 500
                }}
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const advancedData = wtSmart.advanced.get();
                    expect(advancedData.secureCookie).toBe(true);
                    expect(advancedData.optOutName).toBe('webtrekkTestOptOut');
                    expect(advancedData.requestObfuscation).toBe(true);
                    expect(advancedData.execCDB).toBe(false);
                    expect(advancedData.useCDBCache).toBe(true);
                    expect(advancedData.sendViaSDK).toBe(true);
                    expect(advancedData.sendViaServer.activated).toBe(true);
                    expect(advancedData.sendViaServer.serverDomain).toBe('sub.domain.tld');
                    expect(advancedData.sendViaServer.serverPath).toBe('path/to/s2s');
                    expect(advancedData.sendViaServer.droppedRequests).toBe(0);
                    expect(advancedData.sendViaServer.blacklist).toEqual(['foo', 'bar']);
                    expect(advancedData.useHashForDefaultPageName).toBe(true);
                    expect(advancedData.useParamsForDefaultPageName.join(',')).toBe('param1,param2');
                    expect(advancedData.requestQueue.activated).toBe(true);
                    expect(advancedData.requestQueue.ttl).toBe(5 * 60 * 1000);
                    expect(advancedData.requestQueue.resendInterval).toBe(5000);
                    expect(advancedData.requestQueue.size).toBe(500);
                }, done);
            });
        });

        test('update advanced', (done) => {
            renderedWebtrekkAdvancedData = mount(<WebtrekkAdvancedData
                secureCookie={true}
                optOutName="webtrekkTestOptOut"
                requestObfuscation={true}
                execCDB={false}
                useCDBCache={true}
                sendViaSDK={true}
                sendViaServer={{
                    activated: true,
                    serverDomain: 'sub.domain.tld',
                    serverPath: 'path/to/s2s',
                    droppedRequests: 0,
                    blacklist: ['foo', 'bar']
                }}
                useHashForDefaultPageName={true}
                useParamsForDefaultPageName={['param1', 'param2']}
                requestQueue={{
                    activated: true,
                    ttl: 5 * 60 * 1000,
                    resendInterval: 5000,
                    size: 500
                }}
            />);

            renderedWebtrekkAdvancedData.setProps({
                optOutName: 'webtrekkTestOptOut-2',
                execCDB: true,
                useCDBCache: false
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const advancedData = wtSmart.advanced.get();
                    expect(advancedData.secureCookie).toBe(true);
                    expect(advancedData.optOutName).toBe('webtrekkTestOptOut-2');
                    expect(advancedData.requestObfuscation).toBe(true);
                    expect(advancedData.execCDB).toBe(true);
                    expect(advancedData.useCDBCache).toBe(false);
                    expect(advancedData.sendViaSDK).toBe(true);
                    expect(advancedData.sendViaServer.activated).toBe(true);
                    expect(advancedData.sendViaServer.serverDomain).toBe('sub.domain.tld');
                    expect(advancedData.sendViaServer.serverPath).toBe('path/to/s2s');
                    expect(advancedData.sendViaServer.droppedRequests).toBe(0);
                    expect(advancedData.sendViaServer.blacklist).toEqual(['foo', 'bar']);
                    expect(advancedData.useHashForDefaultPageName).toBe(true);
                    expect(advancedData.useParamsForDefaultPageName.join(',')).toBe('param1,param2');
                    expect(advancedData.requestQueue.activated).toBe(true);
                    expect(advancedData.requestQueue.ttl).toBe(5 * 60 * 1000);
                    expect(advancedData.requestQueue.resendInterval).toBe(5000);
                    expect(advancedData.requestQueue.size).toBe(500);
                }, done);
            });
        });
    });
});
