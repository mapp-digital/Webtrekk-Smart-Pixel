import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEngagementComponent } from './content-engagement.component';

describe('ContentEngagementComponent', () => {
  let component: ContentEngagementComponent;
  let fixture: ComponentFixture<ContentEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEngagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
