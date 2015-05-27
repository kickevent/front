import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2';

import { RootRouter } from 'angular2/src/router/router';
import { Pipeline } from 'angular2/src/router/pipeline';
import { bind } from 'angular2/di';
import { Router } from 'angular2/router';


@Component({
  selector: 'main'
})

@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})

class Main {
  constructor(router:Router) {
    this.router = router;
    router
      .config('/home', Home, 'home')
      .then((_) => router.config('/event', Event, 'event'))
      .then((_) => router.navigate('/home'))
  }
}


bootstrap(Main,
  bind(Router).toValue(new RootRouter(new Pipeline()))
);
