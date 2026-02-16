import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgFor } from '@angular/common';
import { SplitPipe } from '../split.pipe';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: true,
    imports: [NgFor, SplitPipe]
})
export class ExperienceComponent implements OnInit {

workexp: any

  constructor(private profileService:ProfileService) { }

    ngOnInit() {

      this.workexp =  this.profileService.exprience()
    }
}
