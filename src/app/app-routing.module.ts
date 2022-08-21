import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { PagerorComponent } from './pageror/pageror.component';

const routes: Routes = [
  {path:'about', component:AboutUsComponent },
  {path: 'errr', component:PagerorComponent},
  {path: 'home', component:HomeComponent},
  {path: 'book', component:BookComponent},
  {path: '**', redirectTo:'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
