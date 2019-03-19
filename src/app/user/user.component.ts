import { Component, OnInit } from '@angular/core';
import { ApiService } from "../app.service";
import { User } from "./user.model";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  users: [User]
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getUsers().subscribe(
      data => this.users = data);
  }
}