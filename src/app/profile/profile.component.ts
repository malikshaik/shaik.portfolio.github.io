import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports: [HeaderComponent, IntroComponent, AboutComponent, ExperienceComponent, SkillsComponent, EducationComponent, ContactComponent, FooterComponent]
})
export class ProfileComponent implements OnInit {

  name = 'saleem';

  constructor(
    // private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    // this.spinner.show();
    // setTimeout(() => {
    //     this.spinner.hide();
    // }, 2000);
  }

  onNameChange() {
    
    //
    //
    //
    this.name = 'Saleem Malik';
  }

}
