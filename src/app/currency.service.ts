import { Injectable } from '@angular/core';
import { data } from './rates';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  result;
  Observer;


  constructor() {
    this.result = this.transformObjectToArray(data.rates);
    this.Observer = new Observable(this.subscribe());
  }

  transformObjectToArray(object) {
    const result = [];
    const keys = Object.keys(object);
    for (const key of keys) {
      const value = object[key];
      const item = {
        currency: key,
        value
      };
      result.push(item);
    }
    return result;
  }


  filter(cb) {
    this.result = this.result.filter(cb);
    return this;
  }

  map(cb) {
    this.result = this.result.map(cb);
    return this;
  }

  subscribe() {
    return (subscriber) => {
      let i = 0;
 
      for (const item of this.result) {
 
        setTimeout( () => {
          subscriber.next(item);
        }, i * 500);
        i++;
      }
      setTimeout( () => {
        subscriber.complete();
      }, i * 500);
    };
 }
 }