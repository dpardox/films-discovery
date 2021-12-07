import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  {
    path: 'web',
    component: WebLayoutComponent,
    loadChildren: () => import('./layouts/web-layout/web-layout.module').then(m => m.WebLayoutModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'web' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
