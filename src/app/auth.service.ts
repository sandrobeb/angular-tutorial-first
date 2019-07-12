import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private access= false;

  constructor() { }

  isEnabled() {
    return this.access;
  }

  allow() {
    this.access = true;
  }

  disallow() {
    this.access = false;
  }
}

