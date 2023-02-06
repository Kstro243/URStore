import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleAsideService {
  activeAside: boolean = false;

  closeAside() {
    this.activeAside = false;
  }

  openAside() {
    this.activeAside = true;
  }
}
