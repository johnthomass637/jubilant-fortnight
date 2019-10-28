import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-member',
	templateUrl: './member.component.html',
	styleUrls: [ './member.component.css' ]
})
export class MemberComponent implements OnInit {
	members: any;
	public searchString: string;

	displayedColumns = [ 'memberid', 'memfirstname', 'cntdate', 'assesstype', 'status', 'view' ];
	dataSource = new MemberDataSource(this.api);
	constructor(private api: ApiService) {}

	ngOnInit() {
		localStorage.setItem('member', '1');
		localStorage.removeItem('memberCreate');
		this.api.getMembers().subscribe(
			(res) => {
				console.log(res);
				this.members = res;
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
export class MemberDataSource extends DataSource<any> {
	constructor(private api: ApiService) {
		super();
	}
	connect() {
		return this.api.getMembers();
	}
	disconnect() {}
}
