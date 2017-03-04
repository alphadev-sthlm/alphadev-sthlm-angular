import {Component, OnInit, Input} from '@angular/core';
import {Profession} from "../../dto/profession";

@Component({
  selector: 'services-profession',
  templateUrl: './services-profession.component.html',
  styleUrls: ['../our-services.component.scss']
})
export class ServicesProfessionComponent implements OnInit {
  @Input() profession: Profession;

  ngOnInit() {
  }

}
