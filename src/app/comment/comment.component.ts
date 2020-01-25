import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	id: number;
	text: string;
	replies: CommentComponent[];
	thread: Thread;
	dateCreated: Date;
	user: UserComponent;
	replyingTo: CommentComponent;
  constructor() { }

  ngOnInit() {
  }

}
