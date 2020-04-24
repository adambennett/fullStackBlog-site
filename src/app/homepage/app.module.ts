import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../services/post/post.service';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiphyService } from '../services/giphy.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostEditComponent } from '../posts/post-edit/post-edit.component';
import { PostAddComponent } from '../posts/post-add/post-add.component';
import { PostDeleteComponent } from '../posts/post-delete/post-delete.component';
import { BoardAddComponent } from '../boards/board-add/board-add.component';
import { BoardDeleteComponent } from '../boards/board-delete/board-delete.component';
import { BoardEditComponent } from '../boards/board-edit/board-edit.component';
import { BoardListComponent } from '../boards/board-list/board-list.component';
import { BoardViewComponent } from '../boards/board-view/board-view.component';
import {MatSelectModule} from '@angular/material/select';
import { PostCommentComponent } from '../posts/post-comment/post-comment.component';
import { PostViewCommentsComponent } from '../posts/post-view-comments/post-view-comments.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PostViewComponent } from '../posts/post-view/post-view.component';
import { UserLoginComponent } from '../account/user-login/user-login.component';
import { UserRegisterComponent } from '../account/user-register/user-register.component';
import { UserSettingsComponent } from '../account/user-settings/user-settings.component';
import { SearchPostTitleComponent } from '../search/search-post-title/search-post-title.component';
import { SearchPostAuthorComponent } from '../search/search-post-author/search-post-author.component';
import { SearchPostTimeComponent } from '../search/search-post-time/search-post-time.component';
import { SearchPostTextComponent } from '../search/search-post-text/search-post-text.component';
import { SearchTagsComponent } from '../search/search-tags/search-tags.component';
import { SearchBoardsComponent } from '../search/search-boards/search-boards.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

const appRoutes: Routes = [
  { path: '', redirectTo: '/post-list', pathMatch: 'full' },
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path: 'post-add',
    component: PostAddComponent
  },
  {
    path: 'post-comment/:id',
    component: PostCommentComponent
  },
  {
    path: 'post-view-comments/:id',
    component: PostViewCommentsComponent
  },
  {
    path: 'post-delete/:id',
    component: PostDeleteComponent
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent
  },
  {
    path: 'post-view/:id',
    component: PostViewComponent
  },
  {
    path: 'board-list',
    component: BoardListComponent
  },
  {
    path: 'board-add',
    component: BoardAddComponent
  },
  {
    path: 'board-delete/:id',
    component: BoardDeleteComponent
  },
  {
    path: 'board-view/:id',
    component: BoardViewComponent
  },
  {
    path: 'board-edit/:id',
    component: BoardEditComponent
  },
  {
    path: 'user-login/:id',
    component: UserLoginComponent
  },
  {
    path: 'user-register/:id',
    component: UserRegisterComponent
  },
  {
    path: 'user-settings/:id',
    component: UserSettingsComponent
  },
  {
    path: 'search-boards',
    component: SearchBoardsComponent
  },
  {
    path: 'search-tags',
    component: SearchTagsComponent
  },
  {
    path: 'search-post-author',
    component: SearchPostAuthorComponent
  },
  {
    path: 'search-post-text',
    component: SearchPostTextComponent
  },
  {
    path: 'search-post-time',
    component: SearchPostTimeComponent
  },
  {
    path: 'search-post-title',
    component: SearchPostTitleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostEditComponent,
    PostAddComponent,
    PostDeleteComponent,
    BoardAddComponent,
    BoardDeleteComponent,
    BoardEditComponent,
    BoardListComponent,
    BoardViewComponent,
    PostCommentComponent,
    PostViewCommentsComponent,
    PostViewComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserSettingsComponent,
    SearchPostTitleComponent,
    SearchPostAuthorComponent,
    SearchPostTimeComponent,
    SearchPostTextComponent,
    SearchTagsComponent,
    SearchBoardsComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        FormsModule,
        MatFormFieldModule,
        RouterModule.forRoot(appRoutes),
        MatSelectModule,
        ReactiveFormsModule,
        MatInputModule,
        MatMenuModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule
    ],
  providers: [PostService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
