import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { PostsListComponent } from './posts-list/posts-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';

@NgModule({
  declarations: [AppComponent, UsersListComponent, PostsListComponent, UserPreviewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
