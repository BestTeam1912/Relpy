import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './class/comment';
import { User } from '../thread/classes/user.class';
import { ActiveUser } from './class/active-user';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	@Input() private comment: Comment;
	private reply: Comment;
	private wantToReply: boolean;
	constructor(private service:CommentService) {
		this.wantToReply = false;
		this.comment = new Comment();
		this.comment.text = "";
		this.comment.replies = [];
		this.reply = new Comment();
		this.reply.text = "";
		this.comment.dateCreated = new Date;
	}

	setComment(comment: Comment){
		this.comment = comment;
	}

	replyToThisComment(){
		this.wantToReply = !this.wantToReply;
	}

	cancel(){
		this.wantToReply = false;
		this.reply = new Comment();
	}

	post(){
		this.reply.dateCreated = new Date();
		if(this.reply.isValidComment()){
			this.service.addComment(this.reply).subscribe(res=>{
				this.reply = res;
				this.comment.replies.push(this.reply);
				this.reply = new Comment();
				this.service.updateComment(this.comment).subscribe(res=>this.comment = res);
			});
		}else{
			this.reply.text = "Needs Text to post a comment In this space now we"+
			"will try to take as many characters away so that the message can"+
			"not be sent. I think it needs five hundred characters before it "+
			"stops the comment from going through to stop you a second time"+
			". I hope this works well. Now you might know what is going on"+
			"I don't know if I have typed enough characters to stop it from "+
			"going through, So I will just type a little more to confirm then"+
			" copy and paste\n"+"Needs Text to post a comment In this space now we"+
			"will try to take as many characters away so that the message can"+
			"not be sent. I think it needs five hundred characters before it "+
			"stops the comment from going through to stop you a second time"+
			". I hope this works well. Now you might know what is going on"+
			"I don't know if I have typed enough characters to stop it from "+
			"going through, So I will just type a little more to confirm then"+
			" copy and paste";
		}
	}

	ngOnInit() {
		this.service.addComment(this.comment)
			.subscribe(res=>{
				this.comment = res;
			});
	}

}
