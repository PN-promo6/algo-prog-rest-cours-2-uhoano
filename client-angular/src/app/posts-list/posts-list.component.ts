import { Component, OnInit, Input } from "@angular/core";

import { Post } from "../models/post/post";
import { DataService } from "../services/data-service/data.service";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.css"],
})
export class PostsListComponent implements OnInit {
  posts: Post[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchPosts().subscribe(
      (res) => {
        // console.log(res);
        this.posts = res;
      },
      (error) => {
        "Error Try Again";
      }
    );
  }
}
