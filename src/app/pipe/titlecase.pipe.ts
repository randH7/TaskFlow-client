import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'titleCase'
  })
  export class TitleCasePipe implements PipeTransform {
    transform(value: string): string {
      if (!value) return value;
  
      // Split the string into words
      const words = value.toLowerCase().split('_');
  
      // Capitalize the first letter of each word
      const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
      // Join the words back into a string
      return titleCaseWords.join(' ');
    }
  }