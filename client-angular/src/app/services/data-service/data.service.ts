import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "src/app/models/user/user";
import { Post } from "src/app/models/post/post";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public users: User[];
  public posts: Post[];
  constructor(private httpClient: HttpClient) {}

  public fetchUsers(): Observable<User[]> {
    let obsData: Observable<User[]> = this.httpClient.get<User[]>(
      "http://localhost:3000/users"
    );
    return obsData;
  }

  public fetchUserById(id: string): Observable<User[]> {
    let obsDataById: Observable<User[]> = this.httpClient.get<User[]>(
      "http://localhost:3000/users/" + id
    );
    return obsDataById;
  }

  public fetchPosts(): Observable<Post[]> {
    let obsPost: Observable<Post[]> = this.httpClient.get<Post[]>(
      "http://localhost:3000/posts"
    );
    return obsPost;
  }
}
