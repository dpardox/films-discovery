import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PosterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PosterComponent
  ]
})
export class ComponentsModule { }
