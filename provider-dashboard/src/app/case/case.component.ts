import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-case',
	templateUrl: './case.component.html',
	styleUrls: [ './case.component.css' ]
})
export class CaseComponent implements OnInit {
	cases: any;
	DOBARR = [];
	case = {};
	DOB: any;

	displayedColumns = [ 'memname', '_id', 'memberid', 'dob', 'MMSStatus', 'view' ];
	dataSource = new CaseDataSource(this.api);
	constructor(private api: ApiService) {}
	// constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

	ngOnInit() {
		localStorage.setItem('case', '1');
		localStorage.removeItem('caseCreate');
		localStorage.removeItem('dashboard');
		this.api.getCases().subscribe(
			(res) => {
				console.log(res);
				console.log(res[0].dateofbirth);
				this.cases = res;
				// this.getCaseDetails();
				console.log(this.cases.length);
				var caseslength = res.length;
				console.log('caseslength:' + caseslength);
				for (var i = 0; i <= caseslength; i++) {
					// console.log("cases:"+this.cases[i])
					console.log('dob..' + this.cases[i].dateofbirth);

					let DOBINP = new Date(this.cases[i].dateofbirth);
					console.log(DOBINP);
					var DOBCON = DOBINP.toString();
					console.log(DOBCON);
					var DOBCON1 = DOBCON.slice(11, 15);
					console.log(DOBCON1);
					var DOB1 = '**/**/';
					this.DOB = DOB1.concat(DOBCON1);
					console.log(this.DOB);
					this.DOBARR[i] = this.DOB;
					console.log(this.DOBARR);
				}
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
export class CaseDataSource extends DataSource<any> {
	constructor(private api: ApiService) {
		super();
	}
	connect() {
		return this.api.getCases();
	}
	disconnect() {}
}
