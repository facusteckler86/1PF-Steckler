import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  /**
   *
   * @param nombre del alumno que va a realizar el curso [string]
   * @param apellido del alumno que va a realizar el curso [string]
   * @returns el nombre y apellido completo del alumno [string]
   */

  transform(nombre: string,apellido: string):string {
    return `${nombre} ${apellido}`;


  }

}
