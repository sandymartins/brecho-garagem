import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoData'
})
export class FormatoDataPipe implements PipeTransform {
  transform(value: string): string {
    const partesData = value.split('-')
    const ano = partesData[0];
    const mes = partesData[1];
    const dia = partesData[2];

    return `${dia}/${mes}/${ano}`;
}

}
