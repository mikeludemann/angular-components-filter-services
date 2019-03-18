import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './container/error/error.component';
import { StartComponent } from './container/start/start.component';

const routes: Routes = [
  { path: '', 
    redirectTo: 'start',
    pathMatch: 'full' 
  },
  { path: 'start', component: StartComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
