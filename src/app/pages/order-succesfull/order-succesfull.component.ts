import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CourseDetailsService } from 'src/app/service/course-details.service';

@Component({
  selector: 'app-order-succesfull',
  templateUrl: './order-succesfull.component.html',
  styleUrls: ['./order-succesfull.component.css']
})
export class OrderSuccesfullComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
