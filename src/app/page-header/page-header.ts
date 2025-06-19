import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../material/material-module';

@Component({
  selector: 'page-header',
  imports: [MaterialModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
  @Output()
  onMenuClicked = new EventEmitter();
}
