import { Component, Inject, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css'],
})
export class AppShellComponent implements OnInit {
  // `APP_BASE_HREF` refers to the token in main-server.js
  constructor(@Inject(APP_BASE_HREF) private appBaseHref: string | undefined) {}

  ngOnInit(): void {
    console.log({ APP_BASE_HREF: this.appBaseHref });
  }
}
