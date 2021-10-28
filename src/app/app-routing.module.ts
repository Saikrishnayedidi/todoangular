import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'signin',component:RegisterComponent},
{path:'todolist',component:TodolistComponent},  
  {path:'new',component:TododetailsComponent},
  {path:'todolist/:id',component:TododetailsComponent}

];
// {path:'new',component:TododetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
