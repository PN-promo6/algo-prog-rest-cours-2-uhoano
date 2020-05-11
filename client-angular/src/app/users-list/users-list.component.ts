import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data-service/data.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "../models/user/user";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchUsers().subscribe(
      (res) => {
        // console.log(res);
        this.users = res;
      },
      (error) => {
        "Error Try Again";
      }
    );

    this.dataService.fetchUserById("5eaecda0cba960e77fc9f205").subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        "Error Try Again";
      }
    );
  }
}
