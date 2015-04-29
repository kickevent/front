import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'front'
})

@View({
  templateUrl: 'front.html'
})

export class Front {

  constructor() {
    console.info('Front Component Mounted Successfully');
  }

}
