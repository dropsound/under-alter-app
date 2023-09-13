import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsCardComponent } from './lyrics-card.component';

describe('LyricsCardComponent', () => {
  let component: LyricsCardComponent;
  let fixture: ComponentFixture<LyricsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LyricsCardComponent]
    });
    fixture = TestBed.createComponent(LyricsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
