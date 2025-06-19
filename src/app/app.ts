import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material-module';
import { PageHeader } from './page-header/page-header';
import { Sidenav } from './sidenav/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MaterialModule,PageHeader,Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ui';

  menuClicked:boolean=false
}
