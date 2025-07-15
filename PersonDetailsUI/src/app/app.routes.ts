import { Routes } from '@angular/router';
import { ViewDetails } from './view-details/view-details';
import { PersonForm } from './person-form/person-form';

export const routes: Routes = [
    {path: 'registerDetails', component: PersonForm},
    {path: 'viewDetails', component: ViewDetails}
];
