import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'toHourFormat'})
export class SecondToHourPipe implements PipeTransform {
  transform(value: number): string {
     const hours = Math.floor(value/3600);
     const minutes = Math.floor((value -(hours*3600))/60);
     const stgHours = hours < 10 ? "0" + hours : hours;
     const stgMinutes = minutes < 10 ? "0" + minutes : minutes;
     return stgHours+":"+stgMinutes;
  }
}
