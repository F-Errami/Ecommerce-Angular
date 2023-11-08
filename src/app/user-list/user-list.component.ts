import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { MatDialog } from '@angular/material/dialog';
import { JewelryDialogComponent } from '../jewelry-dialog/jewelry-dialog.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})




export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedUsers: User[] = [];
  displayLimit: number = 7;
  showAll: boolean = false;

  constructor(private userService: UserService ,public dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.displayedUsers = this.users.slice(0, this.displayLimit); // Display only 3 initial products
    });
  }

  seeMore(): void {
    this.showAll = true; // Update flag to display all products
    this.displayedUsers = this.users; // Show all products
  }
  openDialog(user: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data: user
    });
  }
}
