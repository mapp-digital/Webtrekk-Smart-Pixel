import React from 'react';
import {shallow, mount} from './../../../enzyme';
import {expectInCallback} from './../../../helper';
import {WebtrekkSessionData, WebtrekkSmartPixelReact} from './../../../../src/index';

const reactVersion = parseInt(React.version.split('.')[0]);
let invalidPropIndex = 0;
if (reactVersion > 16) {
    invalidPropIndex = 2;
}

describe('WebtrekkSessionData', () => {
    let spyOnError;
    let renderedWebtrekkSessionData;

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
                <WebtrekkSessionData
                    loginStatus={123451234512345}
                    parameter={{1: 'foo', 2: 2}}
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(2);

            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain('Invalid prop `loginStatus` of type `number` supplied to `WebtrekkSessionData`, expected `string`');
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain('Invalid prop `parameter.2` of type `number` supplied to `WebtrekkSessionData`, expected `string`');
        });

        test('don\'t returns children', () => {
            expect(shallow(<WebtrekkSessionData/>)).toEqual({});
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
                wtSmart.session.data.remove();

                spyOnError.mockRestore();
                spyOnError = null;

                done();
            });
        });

        test('mount campaign', (done) => {
            mount(<WebtrekkSessionData
                loginStatus="logged in"
                parameter={{1: 'foo', 2: 'bar'}}
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const sessionData = wtSmart.session.data.get();
                    expect(sessionData.loginStatus).toBe('logged in');
                    expect(sessionData.parameter[1]).toBe('foo');
                    expect(sessionData.parameter[2]).toBe('bar');
                }, done);
            });
        });

        test('update campaign', (done) => {
            renderedWebtrekkSessionData = mount(<WebtrekkSessionData
                loginStatus="logged in"
                parameter={{1: 'foo', 2: 'bar'}}
            />);

            renderedWebtrekkSessionData.setProps({
                loginStatus: 'logged out'
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const sessionData = wtSmart.session.data.get();
                    expect(sessionData.loginStatus).toBe('logged out');
                    expect(sessionData.parameter[1]).toBe('foo');
                    expect(sessionData.parameter[2]).toBe('bar');
                }, done);
            });
        });
    });
});
