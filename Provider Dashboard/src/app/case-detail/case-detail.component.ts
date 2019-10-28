import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit {

  case = {};
  DOB: any;

  getCaseDetails(id) {
  this.api.getCase(id)
    .subscribe(data => {
      console.log(data);
      this.case = data;


      let DOBINP = new  Date(data.dateofbirth)
      console.log(DOBINP)
      var DOBCON = DOBINP.toString();
      console.log(DOBCON);
      var DOBCON1 = DOBCON.slice(11,15);
      console.log(DOBCON1);

    //  var DOB1 = data.dateofbirth.slice(0,6);
    //  console.log(DOB1);
      var DOB1 = "**/**/";
      // console.log(DOB1);
      // var DOB2 = data.dateofbirth.slice(6);
      // console.log(DOB2);
      // // var DOB = DOB1.concat(DOB2);
      // this.DOB = DOB1.concat(DOB2);
      this.DOB = DOB1.concat(DOBCON1)
      console.log (this.DOB);

    });
  }
  
  deleteCase(id) {
  this.api.deleteCase(id)
    .subscribe(res => {
        this.router.navigate(['/cases']);
      }, (err) => {
        console.log(err);
      }
    );
  }
  
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
	  this.getCaseDetails(this.route.snapshot.params['id']);
  }

}
