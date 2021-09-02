import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repo/repo.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {"path":"users","component":UserComponent},
   {"path":"repos","component":ReposComponent},
   { path: '', redirectTo: '/navigation', pathMatch: 'full' },
   {path: '', component:NotFoundComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
