import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth/guards/auth.guard";
import { AppGuard } from './auth/guards/app.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: ()=>import('./auth/auth.module').then((m)=>m.AuthModule),
        canLoad:[AppGuard]
    },
    {
        path: 'countries', 
        loadChildren: ()=>import('./countries/countries.module').then((m)=>m.CountriesModule),
        canLoad:[AuthGuard]
    },
    {
        path: '**',
        redirectTo:'/auth/login',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {}