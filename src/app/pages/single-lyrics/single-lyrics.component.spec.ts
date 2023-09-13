import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLyricsComponent } from './single-lyrics.component';

describe('SingleLyricsComponent', () => {
  let component: SingleLyricsComponent;
  let fixture: ComponentFixture<SingleLyricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleLyricsComponent]
    });
    fixture = TestBed.createComponent(SingleLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
