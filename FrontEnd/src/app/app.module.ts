import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CabezalComponent } from './componentes/cabezal/cabezal.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperenciaComponent } from './componentes/experencia/experencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorProvider } from './servicios/interceptor-service';
import { NuevaExperienciaComponent } from './componentes/experencia/nueva-experiencia.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { NuevaHabilidadComponent } from './componentes/habilidades/nueva-habilidad.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
@NgModule({
  declarations: [
    AppComponent,
    CabezalComponent,
    AcercaDeComponent,
    ExperenciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    AccesoComponent,
    NuevaExperienciaComponent,
    NuevaEducacionComponent,
    NuevaHabilidadComponent,
    NuevoProyectoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [InterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
