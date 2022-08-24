import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';  

import { NgbdNavCustomStyle } from './nav-custom-style';
import { StatusComponent } from './status/status-component';

@NgModule({
  imports: [BrowserModule, NgbModule, HttpClientModule ],
  declarations: [NgbdNavCustomStyle, StatusComponent],
  exports: [NgbdNavCustomStyle,StatusComponent],
  bootstrap: [NgbdNavCustomStyle, StatusComponent]
})
export class NgbdNavCustomStyleModule {}
