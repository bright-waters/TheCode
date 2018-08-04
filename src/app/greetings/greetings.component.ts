import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  @Input() name:string;

 constructor(private router: Router) { }

 ngOnInit() {
  }
  goToMenuOnClick(){
 this.router.navigate(['Home/Options']);
  }
}
