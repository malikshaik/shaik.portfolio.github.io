import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [FormsModule, NgClass]
})
export class ContactComponent implements OnInit {
 
  model: any = {};

  constructor(){}

  ngOnInit() {
     }


}
