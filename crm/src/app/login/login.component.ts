import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {}

	OnSubmit(form: NgForm) {
		if (form.value.emailId === 'manager' && form.value.password === '123456') {
			this.router.navigate([ '/cases' ]);
		} else {
			alert('Invalid Login Details');
		}
	}
}
