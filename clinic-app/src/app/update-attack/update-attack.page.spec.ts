import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAttackPage } from './update-attack.page';

describe('UpdateAttackPage', () => {
  let component: UpdateAttackPage;
  let fixture: ComponentFixture<UpdateAttackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAttackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
