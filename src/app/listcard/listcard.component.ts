import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.scss']
})
export class ListcardComponent implements OnInit {
 @Input() title:string='';
 @Input() company:string='';
 @Input() description:string='';
 @Input() link:string='';
 @Output('delete') deleteData:EventEmitter<void>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
this.deleteData.emit()
  }

}
