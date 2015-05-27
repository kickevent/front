import {View, Component} from 'angular2/angular2';
import {Home} from '../home/home';
import {Event} from '../event/event';
import { Router, RouterOutlet } from 'angular2/router';

@Component({
  selector: 'app'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})

export class App {
  constructor(router: Router) {
    this.router = router;
    router
      .config('/home', Home, 'home')
      .then((_) => router.config('/event', Event, 'event'))
      .then((_) => router.navigate('/home'))
  }
}

