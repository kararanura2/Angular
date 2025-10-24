import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeagues } from './list-leagues';

describe('ListLeagues', () => {
  let component: ListLeagues;
  let fixture: ComponentFixture<ListLeagues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLeagues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLeagues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
