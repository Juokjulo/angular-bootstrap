import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdNavCustomStyle } from './nav-custom-style';
import { StatusComponent } from './status/status-component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdNavCustomStyle, StatusComponent],
  exports: [NgbdNavCustomStyle,StatusComponent],
  bootstrap: [NgbdNavCustomStyle, StatusComponent]
})
export class NgbdNavCustomStyleModule {}
