import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.scss']
})
export class TododetailsComponent implements OnInit {
  note!:Note;
  noteId!: number;
  new!:boolean
  constructor(private _userdata:UserdataService, private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
     this.router.params.subscribe((params:Params)=>{
      this.note=new Note()
       if(params.id){
        
         this.note=this._userdata.get(params.id);
         this.noteId=params.id;
         this.new=false;
       }
       else{
         this.new=true;
       }
     })
  }
 onSubmit(form:NgForm){
   if(this.new){
    this._userdata.add(form.value)
   
   }else{
     this._userdata.update(this.noteId,form.value.title,form.value.company,form.value.description)
   }
   this.route.navigateByUrl('/todolist')
 
 }
 cancel(){
   this.route.navigateByUrl('/todolist');
   console.log('hello')
 }
}
