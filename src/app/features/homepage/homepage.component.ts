import { Component } from '@angular/core';
import { AppRoutePrefixes } from '../../router-links';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  readonly CUCUMBER_ROUTING_LINK: string = AppRoutePrefixes.CUCUMBER_PREFIX;
}
