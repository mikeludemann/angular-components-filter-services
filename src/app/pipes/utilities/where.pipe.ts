import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'where'
})
export class WherePipe implements PipeTransform {

  transform(input: any, object?: any): any {

    function convertToArray(object) {

      return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

        return object[key];

      });

    }

    function containsObject(partial, object) {

      var keys = Object.keys(partial);

      return keys.map(function (el) {

        return (object[el] !== undefined) && (object[el] == partial[el]);

      }).indexOf(false) == -1;

    }

    function isObject(object) {

      return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    if (typeof object === undefined) {

      return input;

    }

    input = isObject(input) ? convertToArray(input) : input;

    return input.filter((element: any) => containsObject(object, element));

  }

}
