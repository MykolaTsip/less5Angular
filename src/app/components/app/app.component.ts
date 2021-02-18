import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 1, 2
  // title = 'less5';
  // id: number;

  user: User = {
    id: 0,
    name: 'asd',
  };

  // 1
  // logTitle(): void {
  //   console.log(this.title);
  // }

constructor(private userService: UserService) {
}

// 2
//   showUser(): void {
// this.userService.userById(this.id)
//   .subscribe(user => console.log(user));
//   }

  // 2, 3
//   showValue(referensAngular: HTMLInputElement): void {
//     console.log(referensAngular);
//     console.log(referensAngular.value);
//   }


  // 3, 4
  // show(id: NgModel, name: NgModel): void {
  //   console.log(id);
  // }


// 5
//   search(): void {
//   }

// 6
//   search(id: NgModel, name: NgModel): void {
// this.userService.users()
//   .subscribe(users => {
//     const filtUsers = this.userService.searchUser(users, this.user);
//     console.log(filtUsers);
//   });
//
//  }


  // 7
  search(id: NgModel, name: NgModel): void {
this.userService.users()
  .subscribe(users => {
    const filtUsers = this.userService.searchUser(users, this.user);
    console.log(filtUsers);
  });

 }

  xx(myForm: NgForm): void {
    console.log(myForm);
    console.log(myForm.controls.name.value);
  }
}
