import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPipe } from './pipes.pipe';
import { NombreCompletoPipe } from './nombre-completo.pipe';



@NgModule({
  declarations: [
    PipesPipe,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PipesPipe,NombreCompletoPipe],
})
export class SharedModule { }
