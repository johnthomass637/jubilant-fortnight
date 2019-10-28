import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-member-detail',
	templateUrl: './member-detail.component.html',
	styleUrls: [ './member-detail.component.css' ]
})
export class MemberDetailComponent implements OnInit {
	memberId: any;
	case = {};
	DOB='';
	DOB1 : any;
	timediff : any;
	age: number;
	getCaseDetails(id) {
		this.api.getCase(id).subscribe((data) => {
			console.log(data);
			this.case = data;
			this.DOB=data.dateofbirth;
			

			console.log(this.DOB)
			this.DOB1 = new Date(this.DOB)
			console.log(this.DOB1)
			let Cureentdate = Math.abs(Date.now())
			console.log(Cureentdate);
			this.timediff = Cureentdate.valueOf() - this.DOB1.valueOf();
			console.log(this.timediff)
			this.age = Math.floor((this.timediff/(1000*3600*24))/365);
			console.log(this.age)
				  
		  
		});
	}

	
	deleteCase(id) {
		this.api.deleteCase(id).subscribe(
			(res) => {
				this.router.navigate([ '/cases' ]);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

	ngOnInit() {
		this.memberId = this.route.snapshot.params['id'];
		this.getCaseDetails(this.route.snapshot.params['id']);
	}
}
