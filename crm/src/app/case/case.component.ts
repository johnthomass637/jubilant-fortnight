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
	memId: any;

	displayedColumns = [ 'memname', '_id', 'memberid', 'dob', 'status' ];
	displayedColumns1 = [ 'id', 'type', 'status', 'createdon' ];
	displayedColumns2 = [ 'workid', 'crmid', 'mmsid', 'date', 'case' ];
	dataSource = new CaseDataSource(this.api);
	constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

	ngOnInit() {
		localStorage.setItem('case', '1');
		localStorage.removeItem('caseCreate');
		this.api.getCases().subscribe(
			(res) => {
				console.log(res);
				this.cases = res;
			},
			(err) => {
				console.log(err);
			}
		);
	}

	searchId() {
		console.log(this.memId);
		console.log(this.memId._id);
		this.api.getCasemember(this.memId).subscribe(
			(res) => {
				console.log(res);
				console.log(res._id);
				if (res._id === '' || res._id === undefined || res._id === null) {
					alert('No Data Found !!!');
				} else {
					this.router.navigate([ '/case-details/' + res._id ]);
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
