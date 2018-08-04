import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-viewmanu',
  templateUrl: './viewmanu.component.html',
  styleUrls: ['./viewmanu.component.css']
})
export class ViewmanuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToSubjectsOnClick(){
    this.router.navigate(['Home/Options/Subjects']);
     }

}
