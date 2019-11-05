import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	constructor(private router: Router, private api: ApiService) {}

	ngOnInit() {}

	onLogOut() {
		var datetime = new Date();
		var datetimeSend = datetime.toISOString();

		const DateToSend = {
			logout: datetimeSend
		};

		console.log(DateToSend);

		this.api.postTime(DateToSend).subscribe(
			(res) => {
				this.router.navigate([ '/' ]);
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
