import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public snack: SnackService
  ) { }

  ngOnInit() {
    if (this.afAuth.user) {
      this.snack.alreadyLoggedIn();
      this.router.navigate(["/"]);
    }
  }
}
