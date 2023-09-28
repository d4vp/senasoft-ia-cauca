import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectRecognitionPageComponent } from './object-recognition-page.component';

describe('ObjectRecognitionPageComponent', () => {
  let component: ObjectRecognitionPageComponent;
  let fixture: ComponentFixture<ObjectRecognitionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectRecognitionPageComponent]
    });
    fixture = TestBed.createComponent(ObjectRecognitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
