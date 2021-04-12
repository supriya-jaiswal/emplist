import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title:string = "Employee Details"
  employeedata;
  name:any;
  key = "id";
  reverse:boolean = false;


candidate_data:Employee[]=[

{ "id": 11,"name": "Ash","department": "Finance","joining_date": 8/10/2016},
{"id": 12,"name": "John","department": "HR","joining_date": 18/1/2011},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": 28/11/2019},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": 7/7/2017},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": 19/8/2014},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": 5/10/2014},
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": 6/4/2014},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": 8/12/2010},
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": 7/5/2011},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": 20/10/2010}

]




constructor() { }

  ngOnInit() {

    //Remove all candidates from 'Development' department.

    this.candidate_data = this.candidate_data.filter(res=> res.department !=="Development")


    //Get distinct departments and count of candidates in each.


    var result = this.candidate_data.reduce( (acc, o) => (acc[o.department] = (acc[o.department] || 0)+1, acc), {},
     );
    console.log(result);
     }

    //Search by name.

    Search(name){
    this.candidate_data = this.candidate_data.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    })
    }

    //Sort by name, joining date.

    sort(key){
    this.reverse = !this.reverse;

    }

  }
