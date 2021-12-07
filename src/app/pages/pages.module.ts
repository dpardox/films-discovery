import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { MoviesPage } from './movies/movies.page';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MoviesPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
