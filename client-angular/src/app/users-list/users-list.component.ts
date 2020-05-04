import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data-service/data.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
  users: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.users.subscribe((users) => {
    //   this.users = users;
    // });

    this.dataService.fetchUsers().subscribe(
      (res) => {
        // console.log(res);
        this.users = res;
      },
      (error) => {
        "Error Try Again";
      }
    );
  }
}
