import {Component, View, bootstrap} from 'angular2/angular2';
import {Front} from 'front';

@Component({
  selector: 'main'
})

@View({
  directives: [Front],
  template: `
    <front></front>
  `
})

class Main {

}

bootstrap(Main);
