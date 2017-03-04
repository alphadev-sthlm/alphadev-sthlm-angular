import {Component, OnInit} from '@angular/core';
import {PROFESSIONS} from "../constants";
import {Profession} from "../dto/profession";

@Component({
  selector: 'our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  getLeftProfessions(): Profession[] {
    return PROFESSIONS.filter((_, i) => i%2==0);
  }
  getRightProfessions(): Profession[] {
    return PROFESSIONS.filter((_, i) => i%2!=0);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
