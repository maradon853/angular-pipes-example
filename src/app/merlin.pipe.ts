import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'merlin'
})
export class MerlinPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let newStr: string = "";
    for (let i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }

}
