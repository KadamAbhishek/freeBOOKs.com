import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerorComponent } from './pageror.component';

describe('PagerorComponent', () => {
  let component: PagerorComponent;
  let fixture: ComponentFixture<PagerorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagerorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
