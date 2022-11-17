import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
onAddNewPost() {
  this.router.navigateByUrl('/create');
}
  isAuth$!: Observable<boolean>;

  constructor(private router:Router) { }

  ngOnInit() {
    // this.isAuth$ = this.auth.isAuth$.pipe(
      // shareReplay(1)
    // );
  }
  onLogout() {
    // this.auth.logout();
  }
}
