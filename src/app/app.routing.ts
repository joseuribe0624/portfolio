import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [

  {path: '', component: AppComponent},
  {path:'**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
