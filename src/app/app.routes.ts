import { Routes } from '@angular/router';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
{path:"",redirectTo:'maintenence',pathMatch:'full'},
{path:"**",component:PageNotFound},


];
