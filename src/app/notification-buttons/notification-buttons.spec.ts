import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationButtons } from './notification-buttons';

describe('NotificationButtons', () => {
  let component: NotificationButtons;
  let fixture: ComponentFixture<NotificationButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
