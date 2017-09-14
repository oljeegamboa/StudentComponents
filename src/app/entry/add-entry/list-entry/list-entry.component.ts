import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent implements OnInit {

  @Input() errorMessage;
  @Input() studRecord;
  @Output() displayError = new EventEmitter<string>();
  @Output() displayCollection = new EventEmitter<Array<object>>();

  studentCollection: Array<object> = [];

  printing = false;

  listStudents(): void{
    this.printing = true;
    console.log("Student is successfully displayed");
    this.studentCollection.push(this.studRecord);
  }

  initCollection(){
    this.displayCollection.emit(this.studentCollection);
  }

  initErrorMessage(){
    this.displayError.emit(this.errorMessage);
  }

  constructor() { }

  ngOnInit() {
  }

}
