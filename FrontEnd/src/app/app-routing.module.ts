import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'acceder', component: AccesoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
