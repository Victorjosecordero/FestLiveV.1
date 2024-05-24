import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FestivalesComponent } from './festivales/festivales.component';
import { InicioComponent } from './inicio/inicio.component';
import { SoporteComponent } from './soporte/soporte.component';
import { EventosComponent } from './eventos/eventos.component';
import { CantantesComponent } from './cantantes/cantantes.component';
import { CompraEntradasComponent } from './compra-entradas/compra-entradas.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EncargosComponent } from './encargos/encargos.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { MediosComponent } from './medios/medios.component';





export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'festivales', component: FestivalesComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'soporte', component: SoporteComponent },
    { path: 'cantantes', component: CantantesComponent },
    { path: 'comprar-entradas', component: CompraEntradasComponent },
    { path: 'empresas', component: EmpresasComponent },
    { path: 'encargos', component: EncargosComponent },
    { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'ubicaciones', component: DocumentosComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: 'medios', component: MediosComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    
];
