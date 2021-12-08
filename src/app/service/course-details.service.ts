// All courses that are available with Details

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor() { }

    courseDetails = [

      {
        id:0,
        courseName:"Python Course",
        coursePrice:150,
        courseImg:"/../../../assets/img/py.png",
        courseDetails:" Coding in Python3 ",
        courseDuration:"Duration for the Course is about 20h "
      },
      
      {
        id:1,
        courseName:"C Course",
        coursePrice:100,
        courseImg:"/../../../assets/img/c.jpg",
        courseDetails:" Coding in C for hardware oriented Programing ",
        courseDuration:"Duration for the Course is about 15h "
      },

      {
        id:2,
        courseName:"Java Course",
        coursePrice:250,
        courseImg:"/../../../assets/img/java.png",
        courseDetails:" Coding in Java API 3 ",
        courseDuration:"Duration for the Course is about 25h "

      },

      {
        id:3,
        courseName:"Solve Problems",
        coursePrice:300,
        courseImg:"/../../../assets/img/bulb.png",
        courseDetails:" Learing how to solve Code problems. Best preparation for Interviews ",
        courseDuration:"Duration for the Course is about 35h "



      },

    ]




  }

