import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {
  private platformId: Object = inject(PLATFORM_ID);
  
  public L: any;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.L = require('leaflet');
    }
  }
}
