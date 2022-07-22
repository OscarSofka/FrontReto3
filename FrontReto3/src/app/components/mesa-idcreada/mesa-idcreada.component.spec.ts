import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaIdcreadaComponent } from './mesa-idcreada.component';

describe('MesaIdcreadaComponent', () => {
  let component: MesaIdcreadaComponent;
  let fixture: ComponentFixture<MesaIdcreadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaIdcreadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesaIdcreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
