import { Component } from '@angular/core';
import { ToggleAsideService } from '../../services/toggleAside/toggle-aside.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  constructor(
    public ToggleAside: ToggleAsideService
  ) {}
}
