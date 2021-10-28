import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  notes:Note[]=new Array<Note>()
  constructor(private _userdata:UserdataService) { }

  ngOnInit(): void {
  this.notes=this._userdata.getAll();
  }
  deleteCard(id:number){
    this._userdata.delete(id)
  }

}
