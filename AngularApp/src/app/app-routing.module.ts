import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveUsageComponent } from './components/directive-usage/directive-usage/directive-usage.component';
import { HomeComponent } from './components/home/home/home.component';
import { BuiltInPipesComponent } from './components/pipes/built-in-pipes/built-in-pipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'pipes', component: BuiltInPipesComponent },
  { path: 'directives', component: DirectiveUsageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
