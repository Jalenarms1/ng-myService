import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  route: string = ''
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(res => {
      this.route = res['opt']
      
    })
  }

}
