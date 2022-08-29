import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';  

import { NgbdNavCustomStyle } from './nav-custom-style';
import { StatusComponent } from './status/status-component';
import { HomeComponent } from './home/home.component';
import { LocaleSwitcherComponent } from './locale-switcher/locale-switcher.component';

@NgModule({
  imports: [BrowserModule, NgbModule, HttpClientModule ],
  declarations: [NgbdNavCustomStyle, StatusComponent, HomeComponent,LocaleSwitcherComponent],
  exports: [NgbdNavCustomStyle,StatusComponent, HomeComponent,LocaleSwitcherComponent],
  bootstrap: [NgbdNavCustomStyle, StatusComponent, HomeComponent,LocaleSwitcherComponent]
})
export class NgbdNavCustomStyleModule {}
