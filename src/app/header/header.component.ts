import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  value?: string;
  view?: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  param = { value: 'world' };
  lang: Language[] = [
    { value: 'en', view: 'EN' },
    { value: 'th', view: 'TH' },
  ];
  translate: TranslateService;
  constructor(translate: TranslateService) {
    this.translate = translate;
    this.translate.setDefaultLang('en');
  }
  changeLanguage(lang: any) {
    console.log(lang.target.value);

    this.translate.use(lang.target.value);
  }

  ngOnInit(): void {}

  hamburger() {
    let hamburger: any = document.getElementById('hamburger');
    hamburger.style.display === 'flex'
      ? (hamburger.style.display = 'none')
      : (hamburger.style.display = 'flex');
  }
}
