import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebLayoutRoutingModule } from './web-layout-routing.module';
import { PagesModule } from 'src/app/pages/pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebLayoutRoutingModule,
    PagesModule,
  ]
})
export class WebLayoutModule { }
