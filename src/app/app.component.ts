import { UsersService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } if (id === 2 ) {
          this.user2Activated = true;
        }
      }
    );
  }

}
