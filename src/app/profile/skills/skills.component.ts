import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class SkillsComponent implements OnInit {

  skills: any

  constructor(private profileService:ProfileService) { }

    ngOnInit() {

      this.skills =  this.profileService.skills()
    }

}
