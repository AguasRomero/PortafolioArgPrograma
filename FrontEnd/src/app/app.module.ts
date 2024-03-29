import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/experencia/editar-experiencia.component';
import { EditarHabilidadesComponent } from './componentes/habilidades/editar-habilidades.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos.component';
import { editarPerfil } from './componentes/acerca-de/acerca-de.component';
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
    NuevoProyectoComponent,
    EditarEducacionComponent,
    EditarExperienciaComponent,
    EditarHabilidadesComponent,
    EditarProyectosComponent,
    editarPerfil
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [InterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
