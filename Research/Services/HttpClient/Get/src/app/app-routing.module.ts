import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CriarComponent } from './criar/criar.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [

     { path: 'lista', component: ListaComponent },
     { path: 'criar', component: CriarComponent },
     { path: '',   redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
