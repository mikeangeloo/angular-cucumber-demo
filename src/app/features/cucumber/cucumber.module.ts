import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CucumberRoutingModule } from './cucumber-routing.module';
import { ComplexSyntaxTutorialComponent } from './complex-syntax-tutorial/complex-syntax-tutorial.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComplexSyntaxTutorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CucumberRoutingModule
  ]
})
export class CucumberModule { }
