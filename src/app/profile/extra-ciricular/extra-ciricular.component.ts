import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-extra-ciricular',
    templateUrl: './extra-ciricular.component.html',
    styleUrls: ['./extra-ciricular.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class ExtraCiricularComponent implements OnInit {
  extras: any
  constructor(private profileService: ProfileService) { }
  ngOnInit() {
    this.extras = this.profileService.extraCircular()
  }
}
