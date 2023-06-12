import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "success", component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
