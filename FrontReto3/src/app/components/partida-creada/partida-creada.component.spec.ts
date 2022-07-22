import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaCreadaComponent } from './partida-creada.component';

describe('PartidaCreadaComponent', () => {
  let component: PartidaCreadaComponent;
  let fixture: ComponentFixture<PartidaCreadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaCreadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidaCreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
