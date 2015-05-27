import {Component, View} from 'angular2/angular2';
import { Router } from 'angular2/router';

@Component({
  selector: 'home'
})

@View({
  template: '<div><h1>Home</h1></div>',
})
export class Home {


  constructor(router: Router) {
    console.log('Home')
  }



}
