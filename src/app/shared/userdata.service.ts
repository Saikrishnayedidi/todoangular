import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  //  userdata:any[]=[];
  notes:Note[]=new Array<Note>()
  constructor() { }

  getAll(){
    console.log(this.notes)
    return this.notes
  }

  get(id:number){
    return this.notes[id];
  }

  getId(note:Note){
   return this.notes.indexOf(note);
  }
  add(note:Note){
    let newLength=this.notes.push(note);
    let index=newLength -1;
    return index
  }
  update(id:number,title:string,company:string,description:string){
    let note=this.notes[id];
    note.title=title;
    note.company=company;
    note.description=description;
  }
  delete(id:number): void{
    this.notes.splice(id,1);
  }
}
