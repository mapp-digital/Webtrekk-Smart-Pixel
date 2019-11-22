import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WebtrekkSmartPixelModule, WebtrekkSmartPixelAngular } from './../index';
import { expectInCallback } from './../_helper/expectInCallback';
import { ExtensionScrollPositionWithoutData, ExtensionScrollPositionWithData } from "./../_helper/components"

describe('ExtensionDirective', () => {
    let service: WebtrekkSmartPixelAngular;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false
                })
            ],
            declarations: [ ExtensionScrollPositionWithoutData, ExtensionScrollPositionWithData ]
        });

        service = TestBed.get(WebtrekkSmartPixelAngular);
    });

    afterEach((done) => {
        service.call((wtSmart) => {
            wtSmart.extension.scroll_position.deactivate();

            done();
        });
    });

    test('activate scroll position', (done) => {
        fixture = TestBed.createComponent(ExtensionScrollPositionWithoutData);
        fixture.detectChanges();

        service.call((wtSmart) => {
            expectInCallback(() => {
                expect(wtSmart.extension.scroll_position.isActivated()).toBe(true);
            }, done);
        });
    });

    test('configure scroll position', (done) => {
        fixture = TestBed.createComponent(ExtensionScrollPositionWithData);
        fixture.detectChanges();

        service.call((wtSmart) => {
            expectInCallback(() => {
                const data = wtSmart.extension.scroll_position.config();
                expect(data.roundResult).toBe(false);
                expect(data.pageHeight).toBe(6);
                expect(data.sendAsFigure).toBe(12);
            }, done);
        });
    });
});
