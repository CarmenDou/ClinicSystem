import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAttackPage } from './add-attack.page';

describe('AddAttackPage', () => {
  let component: AddAttackPage;
  let fixture: ComponentFixture<AddAttackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
