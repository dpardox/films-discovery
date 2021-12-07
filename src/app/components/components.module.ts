import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PosterComponent } from './poster/poster.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PosterComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PosterComponent,
    MovieDetailComponent
  ]
})
export class ComponentsModule { }
