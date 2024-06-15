import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTodoComponent } from './type-todo.component';

describe('TypeTodoComponent', () => {
  let component: TypeTodoComponent;
  let fixture: ComponentFixture<TypeTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
