import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showSidebar: Observable<boolean> | undefined;

  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {
    this.showSidebar = this.toggleService.getShowSidebar();
  }

  closeSidebar() {
    this.toggleService.toggleSidebarState();
  }
}
