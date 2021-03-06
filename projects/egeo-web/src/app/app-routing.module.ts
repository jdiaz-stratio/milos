/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {environment} from '../environments/environment';

export const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
   { path: 'general', loadChildren: './modules/general/general.module#GeneralModule' },
   { path: 'components', loadChildren: './modules/demos/demo.module#DemoModule'},
   { path: 'theme', loadChildren: './modules/theme/theme.module#ThemeModule'}
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { useHash: true })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
