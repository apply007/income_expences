import { Component } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sidenav',
  imports: [MaterialModule,RouterModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {
navitems:{name:string,link:string}[]=[
  {name:'maintenance',link:'maintenance'},
  {name:'view data',link:'view'},
]
}
