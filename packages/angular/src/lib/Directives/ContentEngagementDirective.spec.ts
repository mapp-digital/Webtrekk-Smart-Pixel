import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WebtrekkSmartPixelModule, WebtrekkSmartPixelAngular } from './../index';
import { expectInCallback } from './../_helper/expectInCallback';
import { ContentEngagementWithoutSelector, ContentEngagementWithSelector } from "./../_helper/components"

describe('ContentEngagementDirective', () => {
    let service: WebtrekkSmartPixelAngular;
    let spyOnAddContentEngagementElement;
    let fixture;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false
                })
            ],
            declarations: [ ContentEngagementWithoutSelector, ContentEngagementWithSelector ]
        });

        service = TestBed.get(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            spyOnAddContentEngagementElement = jest.spyOn(wtSmart.extension.content_engagement, 'add').mockImplementation(() => {});

            done();
        });
    });

    afterEach((done) => {
        service.call((wtSmart) => {
            wtSmart.extension.content_engagement.deactivate();

            spyOnAddContentEngagementElement.mockRestore();
            spyOnAddContentEngagementElement = null;

            done();
        });
    });

    test('add element with config - 1', (done) => {
        fixture = TestBed.createComponent(ContentEngagementWithoutSelector);
        fixture.detectChanges();

        service.call(() => {
            expectInCallback(() => {
                const mock = spyOnAddContentEngagementElement.mock.calls;
                expect(mock.length).toBe(1);

                const data = mock[0][0];
                expect(data.selector instanceof HTMLDivElement).toBe(true);
                expect(data.name).toBe('name of the content engangement element');
                expect(data.config.percentageStepsInAnalytics).toBe(5);
                expect(data.config.sendContentEngagement).toBe(2);
                expect(data.config.percentageReached).toBe(20);
                expect(data.config.secondsReached).toBe(30);
                expect(data.config.largeBrowserResolution).toBe(1080);
                expect(data.config.largeBrowserSeconds).toBe(20);
                expect(data.config.mediumBrowserResolution).toBe(700);
                expect(data.config.mediumBrowserSeconds).toBe(10);
                expect(data.config.smallBrowserResolution).toBe(400);
                expect(data.config.smallBrowserSeconds).toBe(5);
            }, done);
        });
    });

    test('add element with config - 2', (done) => {
        fixture = TestBed.createComponent(ContentEngagementWithSelector);
        fixture.detectChanges();

        service.call(() => {
            expectInCallback(() => {
                const mock = spyOnAddContentEngagementElement.mock.calls;
                expect(mock.length).toBe(1);

                const data = mock[0][0];
                expect(data.selector).toBe('#ce1');
                expect(data.name).toBe('name of the content engangement element');
                expect(data.config.percentageStepsInAnalytics).toBe(10);
                expect(data.config.sendContentEngagement).toBe(1);
                expect(data.config.percentageReached).toBe(25);
                expect(data.config.secondsReached).toBe(30);
                expect(data.config.largeBrowserResolution).toBe(1080);
                expect(data.config.largeBrowserSeconds).toBe(20);
                expect(data.config.mediumBrowserResolution).toBe(700);
                expect(data.config.mediumBrowserSeconds).toBe(10);
                expect(data.config.smallBrowserResolution).toBe(400);
                expect(data.config.smallBrowserSeconds).toBe(5);
            }, done);
        });
    });
});
