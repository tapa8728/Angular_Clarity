/* Copyright (c) 2018 VMware, Inc. All rights reserved. */

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppRoutingComponent} from './app-routing.component';
import {ListComponent}  from './views/list/list.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {CreateEditComponent} from "./views/actions/create-edit/create-edit.component";
import {CreateWizardComponent} from "./views/actions/create-edit/create-wizard.component";
import {DeleteComponent} from "./views/actions/delete/delete.component";
import {DetailsViewComponent} from "./views/details-view/details-view.component";
import {WelcomeComponent}  from './views/welcome/welcome.component';
import {SettingsComponent}  from './views/settings/settings.component';
import {VmActionModalComponent} from './views/actions/vm/vm-action-modal.component';

const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: 'index.html',},
   {path: 'index.html', component: AppRoutingComponent},
   {path: 'create', component: CreateEditComponent},
   {path: 'create-wizard', component: CreateWizardComponent},
   {path: 'edit', component: CreateEditComponent},
   {path: 'delete', component: DeleteComponent},
   {path: 'list', component: ListComponent},
   {path: 'welcome', component: WelcomeComponent},
   {path: 'settings', component: SettingsComponent},
   {path: 'vm-action-modal', component: VmActionModalComponent},
   {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routableComponents = [
   AppRoutingComponent,
   CreateEditComponent,
   CreateWizardComponent,
   DeleteComponent,
   WelcomeComponent,
   SettingsComponent,
   VmActionModalComponent,
   ListComponent,
   DetailsViewComponent,
   PageNotFoundComponent
];