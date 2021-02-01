import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // need to be public to bind to in the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
