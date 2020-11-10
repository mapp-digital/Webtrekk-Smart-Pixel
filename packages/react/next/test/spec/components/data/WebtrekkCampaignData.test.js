import React from 'react';
import { shallow, mount } from './../../../enzyme';
import { expectInCallback } from './../../../helper';
import { WebtrekkCampaignData, WebtrekkSmartPixelReact } from './../../../../src/index';

describe('WebtrekkCampaignData', () => {
    let spyOnError;
    let renderedWebtrekkCampaignData;

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
                <WebtrekkCampaignData
                    id={ 123456789 }
                    mediaCode={ 'param' }
                    oncePerSession={ 1 }
                    parameter={ {1: 'foo', 2: 3} }
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(4);

            expect(spyOnError.mock.calls[0][0]).toContain('Invalid prop `id` of type `number` supplied to `WebtrekkCampaignData`, expected `string`.');
            expect(spyOnError.mock.calls[1][0]).toContain('Invalid prop `mediaCode` of type `string` supplied to `WebtrekkCampaignData`, expected an array.');
            expect(spyOnError.mock.calls[2][0]).toContain('Invalid prop `oncePerSession` of type `number` supplied to `WebtrekkCampaignData`, expected `boolean`.');
            expect(spyOnError.mock.calls[3][0]).toContain('Invalid prop `parameter.2` of type `number` supplied to `WebtrekkCampaignData`, expected `string`.');
        });

        test('required props', () => {
            shallow(<WebtrekkCampaignData />);

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(1);

            expect(spyOnError.mock.calls[0][0]).toContain('The prop `id` is marked as required in `WebtrekkCampaignData`, but its value is `null`.');
        });

        test('don\'t returns children', () => {
            const renderedWebtrekkCampaignData = shallow(<WebtrekkCampaignData />);
            expect(renderedWebtrekkCampaignData).toEqual({});
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
                wtSmart.campaign.data.remove();

                spyOnError.mockRestore();
                spyOnError = null;

                done();
            });
        });

        test('mount campaign', (done) => {
            mount(<WebtrekkCampaignData
                id='wt_mc%3foo.bar'
                mediaCode={ ['wt_mc', 'mc'] }
                oncePerSession={ true }
                parameter={ {1: 'foo', 2: 'bar'} }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const campaignData = wtSmart.campaign.data.get();
                    expect(campaignData.id).toBe('wt_mc%3foo.bar');
                    expect(campaignData.mediaCode.join(',')).toBe('wt_mc,mc');
                    expect(campaignData.oncePerSession).toBe(true);
                    expect(campaignData.parameter['1']).toBe('foo');
                    expect(campaignData.parameter['2']).toBe('bar');
                }, done);
            });
        });

        test('update campaign', (done) => {
            renderedWebtrekkCampaignData = mount(<WebtrekkCampaignData
                id='wt_mc%3foo.bar'
                mediaCode={ ['wt_mc', 'mc'] }
                oncePerSession={ true }
                parameter={ {1: 'foo', 2: 'bar'} }
            />);

            renderedWebtrekkCampaignData.setProps({
                mediaCode: ['foo'],
                oncePerSession: false
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const campaignData = wtSmart.campaign.data.get();
                    expect(campaignData.id).toBe('wt_mc%3foo.bar');
                    expect(campaignData.mediaCode.join(',')).toBe('foo');
                    expect(campaignData.oncePerSession).toBe(false);
                    expect(campaignData.parameter['1']).toBe('foo');
                    expect(campaignData.parameter['2']).toBe('bar');
                }, done);
            });
        });
    });
});
