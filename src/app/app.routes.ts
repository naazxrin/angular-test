import { Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:"employee", component:EmployeComponent
    },
    {
        path: 'login', component:LoginComponent 
    }
];