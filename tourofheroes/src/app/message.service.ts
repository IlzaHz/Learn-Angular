import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages: string[] = [];

  //method - add to cache
  add(message: string) {
    this.messages.push(message);
  }

  //method - clear the cache
  clear() {
    this.messages = [];
  }

  constructor() { }
}
