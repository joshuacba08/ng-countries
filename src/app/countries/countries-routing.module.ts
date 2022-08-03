import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./pages/detail/detail.component";
import { HomeComponent } from "./pages/home/home.component";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
    {
        path: '', // countries/
        component: MainComponent,
        children: [
            {    
                path:'home',
                component: HomeComponent
            },
            {
                path:'detail/:name', //los ":" indican que este valor será dinámico, es decir enviaremos un valor que luego te obtendrá como parámetro
                component: DetailComponent
            },
            {
                path:'**',
                redirectTo: 'home' //TODO: poner 404
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CountriesRoutingModule {};