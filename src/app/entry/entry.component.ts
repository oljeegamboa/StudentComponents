import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;

  clearStud(event){
    console.log('There is an object');
    this.studNo = event;
    this.studFname = event;
    this.studLname = event;
    this.studProg = event;
    this.studYr = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
