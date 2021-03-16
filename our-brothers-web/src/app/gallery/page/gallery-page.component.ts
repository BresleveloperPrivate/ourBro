import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {
  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) {}
  ngOnInit() {
    const s = this._renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js';
    s.text = ``;
    this._renderer2.appendChild(this._document.body, s);
  }
}
