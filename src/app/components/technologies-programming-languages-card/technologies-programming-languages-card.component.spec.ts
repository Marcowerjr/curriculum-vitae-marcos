import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechnologiesProgrammingLanguagesCardComponent } from './technologies-programming-languages-card.component';

describe('TechnologiesProgrammingLanguagesCardComponent', () => {
  let component: TechnologiesProgrammingLanguagesCardComponent;
  let fixture: ComponentFixture<TechnologiesProgrammingLanguagesCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesProgrammingLanguagesCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologiesProgrammingLanguagesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
