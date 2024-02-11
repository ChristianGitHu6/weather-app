import {Component, OnInit} from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  selected: string;
  availableLanguages: string[] = ['ru', 'en'];
  private language: string | null | undefined;

  constructor(private translocoService: TranslocoService) {
  }
  ngOnInit(): void {
    const lang = localStorage.getItem('language_key');

    if (lang) {
      this.translocoService.setDefaultLang(lang);
      this.translocoService.setActiveLang(lang);
      this.selected = lang;
    }
  }

  onOptionSelect(language: string) {
    this.translocoService.setDefaultLang(language);
    this.translocoService.setActiveLang(language);
    localStorage.setItem('language_key', language);
  }
}
