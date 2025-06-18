import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ui';
}
// ee 