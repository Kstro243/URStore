import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleAsideService {
  activeAside: boolean = false;

  toggleAside() {
    this.activeAside = !this.activeAside;
  }
}
