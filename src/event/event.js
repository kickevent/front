import {Component, View} from 'angular2/angular2';
import { Router} from 'angular2/router';

@Component({
  selector: 'event'
})

@View({
  template: '<div>Events</div>'
})

export class Event {

  constructor(router: Router) {
    console.log('event')
  }

}
