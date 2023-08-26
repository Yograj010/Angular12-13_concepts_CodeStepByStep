import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrojobComponent } from './crojob.component';

describe('CrojobComponent', () => {
  let component: CrojobComponent;
  let fixture: ComponentFixture<CrojobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrojobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrojobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
