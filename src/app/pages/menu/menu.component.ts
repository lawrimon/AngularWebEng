import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from 'src/app/service/course-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:CourseDetailsService) { }
  courseData:any;
  ngOnInit(): void {
    this.courseData = this.service.courseDetails; //Which course was chosen
  }

}
