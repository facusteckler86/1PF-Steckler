import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPipe } from './pipes/pipes.pipe';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { DirectiveDirective } from './directive/directive.directive';



@NgModule({
  declarations: [
    PipesPipe,
    NombreCompletoPipe,
    DirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [PipesPipe,NombreCompletoPipe],
})
export class SharedModule { }
