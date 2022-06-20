import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearComponent } from './crear/crear.component';
import { OpcionesUsuarioComponent } from './opciones-usuario/opciones-usuario.component';
import { CrudComponent } from './crud/crud.component';
import { CartasComponent } from './cartas/cartas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'crear', component: CrearComponent },
  { path: 'opcionesusuario', component: OpcionesUsuarioComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'cartas', component: CartasComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
