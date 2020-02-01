import { Component, OnInit, Input } from '@angular/core';
import { Thread } from './classes/thread.class';
import { User } from './classes/user.class';
import { Community } from '../community/classes/community.class';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  @Input() thread:Thread; 
  @Input() community: Community;
  constructor() {
    // this.thread = new Thread();
    // This is just for testing remove when you have a service.
    // this.thread.title = "Look at this game!!!";
    // this.thread.description = "So I just bought this game and I think its really cool!!!";
    // this.thread.user = new User();
    // this.thread.user.username = "someuser";
  }

  ngOnInit() {
  }

}
