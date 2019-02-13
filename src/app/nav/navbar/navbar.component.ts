import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMobile = this.deviceService.isMobile();

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
  }

}
