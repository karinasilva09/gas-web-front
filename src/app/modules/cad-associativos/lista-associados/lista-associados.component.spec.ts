import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAssociadosComponent } from './lista-associados.component';

describe('ListaAssociadosComponent', () => {
  let component: ListaAssociadosComponent;
  let fixture: ComponentFixture<ListaAssociadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAssociadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAssociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
