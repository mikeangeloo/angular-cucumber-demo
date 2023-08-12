import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { AppRoutePrefixes } from './router-links';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: AppRoutePrefixes.CUCUMBER_PREFIX,
    loadChildren: () => import('./features/cucumber/cucumber.module').then(m => m.CucumberModule)
  },
  {
    path: '**',
    redirectTo: AppRoutePrefixes.DEFAULT_PREFIX
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
