import { Component, OnInit } from "@angular/core";
import { SubjectObject } from "./SubjectObject";
import { MatSnackBar } from "../../../node_modules/@angular/material";

@Component({
  selector: "app-list-subjects",
  templateUrl: "./list-subjects.component.html",
  styleUrls: ["./list-subjects.component.css"]
})
export class ListSubjectsComponent implements OnInit {
  show: boolean = false;
  takeCourse: boolean = false;
  markSuggestion: string;

  sub
  englishSubject: SubjectObject = new SubjectObject();
  description: string;
  selectedSubjects: SubjectObject[] = [];
  subjects: SubjectObject[] = [
    { description: "Mathematics", mark: null, status: false },

    { description: "Physical Science", mark: null, status: false },

    { description: "Life Science", mark: null, status: false },

    { description: "Geography", mark: null, status: false },

    { description: "Arts And Culture", mark: null, status: false },

    { description: "Economics", mark: null, status: false },

    { description: "Business Studies", mark: null, status: false },

    { description: "English", mark: null, status: true },

    { description: "Mathematics Literacy", mark: null, status: false },

    { description: "Accounting", mark: null, status: false }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  public onClick(subject: SubjectObject) {
    this.selectedSubjects.push(subject);
  }

  public setShow() {
    this.englishSubject = this.selectedSubjects.find(
      subject => subject.description === "English"
    );

    if (this.selectedSubjects.length === 0) {
      this.snackBar.open(
        "You have not selected any subjects",
        "Please select subjects that you are enrolled in",
        {
          duration: 2000
        }
      );

      this.show = false;
    } else {
      this.show = true;
    }

    if (this.englishSubject === undefined || this.englishSubject === null) {
      this.snackBar.open(
        "English must be part of the selected subjects",
        "Select English",
        { duration: 2000 }
      );
      this.show = false;
    }
  }

  public checkForMark(subject: SubjectObject) {

    if ( this.selectedSubjects.find(
      subject => subject.description === "English"
    )!== undefined || this.selectedSubjects.find(
      subject => subject.description === "English"
    ) !== null) 
    
    {
      if (this.selectedSubjects.find(
        subject => subject.description === "English"
      ).mark >= 50) {
        if ((
          this.selectedSubjects.find(
            subject => subject.description === "Physical Science"
          ) !== null || this.selectedSubjects.find(
            subject => subject.description === "Physical Science"
          ) !== undefined )&&(
          this.selectedSubjects.find(
            subject => subject.description === "Mathematics"
          ) !== null || this.selectedSubjects.find(
            subject => subject.description === "Mathematics"
          ) !== undefined 
        )){
        if (
          this.selectedSubjects.find(
            subject => subject.description === "Physical Science"
          ).mark > 60 &&
          this.selectedSubjects.find(
            subject => subject.description === "Mathematics"
          ).mark > 60
        ) {
            this.takeCourse = true;
        }
      }

        if(this.takeCourse){
          this.markSuggestion = "Engineering";
        }

        if(this.takeCourse &&  this.selectedSubjects.find(
          subject => subject.description === "Life Science"
        ).mark > 60 ){
           this.markSuggestion = "Science";
        }

        if(this.selectedSubjects.find(subject => subject.description == "Accounting").mark > 60 &&  this.selectedSubjects.find(
          subject => subject.description === "Mathematics"
        ).mark > 60 ){
           this.markSuggestion = "Accounting";
        }


      }

      else {
          this.markSuggestion = "Please improve you english marks to atleast 50%";
          if(this.selectedSubjects.find(
            subject => subject.description === "English"
          ) ){
            this.markSuggestion = "Humanities";
          }
      }
      
    }
  }
}
