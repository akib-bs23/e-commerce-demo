import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  users = [
    { name: 'John', id: 1 },
    { name: 'Andrew', id: 2 },
    { name: 'Anna', id: 3 },
    { name: 'Iris', id: 4 },
  ];

  blackListedUsers: any = [];

  selectedUserId: any = null;
  isUserBlackListed = false;
  allowBlackListedUsers: any = false;

  changeUser() {
    this.isUserBlackListed = !!this.blackListedUsers.find(
      (blackListedUserId: any) => this.selectedUserId === blackListedUserId
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
