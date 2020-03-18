import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchesListComponent } from './couches-list.component';

describe('CouchesListComponent', () => {
  let component: CouchesListComponent;
  let fixture: ComponentFixture<CouchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
