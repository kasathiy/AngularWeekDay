import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorate'
})
export class DecoratePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("Value", value);
    console.log("Arguments", args);
    return args[0] + value + args[1];
  }

}
