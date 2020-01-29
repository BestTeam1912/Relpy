import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment/class/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
	private url: string;
	constructor(private http:HttpClient) {
		this.url = "http://localhost:9000/";
	}

	public addComment(comment:Comment){
		return this.http.post<Comment>(this.url, comment);
	}

	public getCommentsToThreadId(id: number):Observable<Comment[]>{
		return this.http.get<Comment[]>(this.url+"/"+id);
	}

	public getCommentsRelatingToCommentId(id: number):Observable<Comment[]>{
		return this.http.get<Comment[]>(this.url+"/"+id);
	}
}
