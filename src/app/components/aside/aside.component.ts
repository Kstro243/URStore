import { Component } from '@angular/core';
import { ToggleAsideService } from '../../services/toggleAside/toggle-aside.service';
import { RequestAPIService } from 'src/app/services/RequestAPI/request-api.service';
import { AsideInfoService } from 'src/app/services/AsideInfo/aside-info.service';
import { ShoppingserviceService } from 'src/app/services/shoppingservice/shoppingservice.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  constructor(
    public ToggleAside: ToggleAsideService,
    public Request: RequestAPIService,
    public Aside: AsideInfoService,
    public list: ShoppingserviceService,
  ) {}
}
