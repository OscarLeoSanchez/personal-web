import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderMarkdownComponent } from './render-markdown.component';

describe('RenderMarkdownComponent', () => {
  let component: RenderMarkdownComponent;
  let fixture: ComponentFixture<RenderMarkdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderMarkdownComponent]
    });
    fixture = TestBed.createComponent(RenderMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
