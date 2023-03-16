import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent} from './userform/userform.component'
// const routes: Routes = [
//   {path:'',component:UserformComponent,pathMatch:'full'}
// ];
const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
