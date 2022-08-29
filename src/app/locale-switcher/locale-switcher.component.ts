import {
  Inject,
  Component,
  LOCALE_ID,
} from '@angular/core';
@Component({
  selector: 'app-locale-switcher',
  templateUrl: './locale-switcher.component.html',
})
export class LocaleSwitcherComponent {
  locales = [
    { code: 'en-CA', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' }
  ];
  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) {}
  onChange() {
    // When the visitor selects Arabic, we redirect
    // to `/ar`
    window.location.href = `/${this.activeLocale}`;
  }
}