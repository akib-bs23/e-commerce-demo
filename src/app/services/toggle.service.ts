import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private showSidebar$ = new BehaviorSubject(false);

  getShowSidebar() {
    return this.showSidebar$.asObservable();
  }

  setShowSidebar(hideShow: boolean) {
    this.showSidebar$.next(hideShow);
  }

  toggleSidebarState() {
    this.showSidebar$.next(!this.showSidebar$.value);
  }

  isSidebarOpen() {
    return this.showSidebar$.value;
  }

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.setShowSidebar(false);
    });
  }
}
