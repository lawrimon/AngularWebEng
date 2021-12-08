import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseDetailsService } from 'src/app/service/course-details.service';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:CourseDetailsService) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu')
    if(this.getMenuId){
     this.menuData = this.service.courseDetails.filter((value)=>{
        return value.id == this.getMenuId // Selected Id gets saved and displayed
      })
    }
  }

}
