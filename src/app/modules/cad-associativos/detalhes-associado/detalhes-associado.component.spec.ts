import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAssociadoComponent } from './detalhes-associado.component';

describe('DetalhesAssociadoComponent', () => {
  let component: DetalhesAssociadoComponent;
  let fixture: ComponentFixture<DetalhesAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
