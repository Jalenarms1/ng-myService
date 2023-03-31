import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JwtServiceService } from '../jwt-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currPath: string = ''
  loggedIn: boolean = true;
  private isAuthenticatedSubscription: Subscription;

  constructor(private jwtService: JwtServiceService, private router: Router, private activeR: ActivatedRoute) {
    // subscribe to isAuthenticated$ BehaviorSubject to get authentication status
    this.isAuthenticatedSubscription = this.jwtService.isAuthenticated$.subscribe((authenticated: boolean) => {
      this.loggedIn = authenticated;
    });
  }

  ngOnInit(): void {
    const token = this.jwtService.isAuthenticated();
    if (token) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.activeR.queryParams.subscribe(res => {
      this.currPath = res['opt']
    })
  }

  ngOnDestroy() {
    // unsubscribe from isAuthenticated$ BehaviorSubject
    this.isAuthenticatedSubscription.unsubscribe();
  }

  logout() {
    this.jwtService.destroyToken();
    this.loggedIn = false;
  }

  directTo(path: string) {
    this.router.navigateByUrl(`/?opt=${path}`)
  }

  

}
