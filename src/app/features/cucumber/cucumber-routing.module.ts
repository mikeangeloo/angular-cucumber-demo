import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexSyntaxTutorialComponent } from './complex-syntax-tutorial/complex-syntax-tutorial.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ComplexSyntaxTutorialComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CucumberRoutingModule { }
