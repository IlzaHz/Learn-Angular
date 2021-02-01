import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  //dummyData array
  dummyData: any = [
    { id: '1', title: 'Buy Apple', done: false, date: new Date() },
    { id: '2', title: 'Meeting with Alice', done: false, date: new Date() },
    { id: '3', title: 'Dinner', done: false, date: new Date() },
    { id: '4', title: 'Morning Jog', done: false, date: new Date() }
  ];

  //properties for show/hide, set/update
  show: boolean = false; ///show edit form
  value: string; ///set the value of edit
  id: number; //assign the id

  constructor() { }

  // C: create function
  create(item) {
    this.dummyData.push({
      id: Date.now(),
      title: item,
      done: false,
      date: new Date()
    });
  }

  clear(){
    this.value = '';
  }

  //U: update/edit function
  edit(id, title) {
    this.show = true;
    this.value = title;
    this.id = id;
  }

  update(title){
    this.dummyData.map(item => {
      if(item.id == this.id) {
        item['title'] = title;
      }
    });
    this.show = false; //hide the edit form
  }

  //D: delete function
  remove(id) {
    this.dummyData = this.dummyData.filter(item => {
      if(item.id !== id) {
        return item;
      }
    });
  }

  setTaskComplete(id) {
    this.dummyData.map(item => {
      if(item.id == id) {
        item['done'] = true;
      }
    });
  }

  ngOnInit(): void {
  }

}
