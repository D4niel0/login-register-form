import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { slideInAnimation } from '../../shared/animations/slideInAnimation';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, NzLayoutModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  animations: [slideInAnimation],
})
export class AuthComponent {
  bgClasses: string = '';

  prepareRoute(outlet: RouterOutlet) {
    const option = outlet.activatedRouteData['option'];
    if (option === 2) {
      this.bgClasses = 'bg-reg';
    } else {
      this.bgClasses = 'bg-log';
    }
    return option;
  }
}
