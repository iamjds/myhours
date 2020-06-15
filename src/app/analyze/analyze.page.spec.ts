import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnalyzePage } from './analyze.page';

describe('AnalyzePage', () => {
  let component: AnalyzePage;
  let fixture: ComponentFixture<AnalyzePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyzePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
