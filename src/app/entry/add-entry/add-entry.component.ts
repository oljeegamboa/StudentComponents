import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  @Input() studNo1;
  @Input() studFname1;
  @Input() studLname1;
  @Input() studProg1;
  @Input() studYr1;
  @Output() clear = new EventEmitter<any>();
  @Output() displayMessage = new EventEmitter<string>();
  @Output() studCollect = new EventEmitter<Array<object>>();

  studentRecord: object;

  studNumber: number;
  studFirstName: string;
  studLastName: string;
  studProgram: string;
  studYear: number;

  clearValue = null;
  messages = '';

  private checkPatterns(value: any, pattern: RegExp): boolean{
    if(pattern.test(value))
      return true;
    else
      return false;
  }

  addStudentEntry(): boolean{
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    if(this.checkPatterns(this.studNo1, studNumberPattern) && this.checkPatterns(this.studFname1, stringPattern) &&
      this.checkPatterns(this.studLname1, stringPattern) && this.checkPatterns(this.studProg1, stringPattern) &&
      this.checkPatterns(this.studYr1, studYearPattern)){

        this.studentRecord = {
          studNumber: this.studNo1,
          studFirstName: this.studFname1,
          studLastName: this.studLname1,
          studProgram: this.studProg1,
          studYear: this.studYr1
        };

        this.messages = null;
        this.clearValues();

        console.log('Very Good! You really entered here!');
      }else {
        console.log('Very Good! Entered in error area!');
        this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
        return false;
      }
  }

  clearValues(): void{
    this.studNo1 = null;
    this.clear.emit(this.studNo1);
    this.studFname1 = null;
    this.clear.emit(this.studFname1);
    this.studLname1 = null;
    this.clear.emit(this.studLname1);
    this.studProg1 = null;
    this.clear.emit(this.studProg1);
    this.studYr1 = null;
    this.clear.emit(this.studYr1);

  }

  displayCollect(event){
    this.studCollect.emit(event);
  }

  displayErr(event){
    this.displayMessage.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
