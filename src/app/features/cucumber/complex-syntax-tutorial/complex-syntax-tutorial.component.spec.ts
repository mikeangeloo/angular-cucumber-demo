import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSyntaxTutorialComponent } from './complex-syntax-tutorial.component';

describe('ComplexSyntaxTutorialComponent', () => {
  let component: ComplexSyntaxTutorialComponent;
  let fixture: ComponentFixture<ComplexSyntaxTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexSyntaxTutorialComponent]
    });
    fixture = TestBed.createComponent(ComplexSyntaxTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
