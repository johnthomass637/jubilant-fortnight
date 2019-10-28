import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {
	FormControl,
	FormsModule,
	ReactiveFormsModule,
	FormGroupDirective,
	FormBuilder,
	FormGroup,
	NgForm,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-case-create',
	templateUrl: './case-create.component.html',
	styleUrls: [ './case-create.component.css' ]
})
export class CaseCreateComponent implements OnInit {
	caseForm: FormGroup;
	memberid: string = '';
	memname: string = '';
	dateofbirth: string = '';
	servicepvdid: string = '';
	requestpvdid: string = '';
	diagcode: string = '';
	procode: string = '';
	startdate: string = '';
	enddate: string = '';

	constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {}

	ngOnInit() {
		localStorage.setItem('caseCreate', '2');
		localStorage.removeItem('case');
		this.caseForm = this.formBuilder.group({
			memberid: [ null, Validators.required ],
			memname: [ null, Validators.required ],
			dateofbirth: [ null, Validators.required ],
			servicepvdid: [ null, Validators.required ],
			requestpvdid: [ null, Validators.required ],
			diagcode: [ null, Validators.required ],
			procode: [ null, Validators.required ],
			startdate: [ null, Validators.required ],
			enddate: [ null, Validators.required ],
			status: 'Submitted'
		});
	}

	onFormSubmit(form: NgForm) {
		this.api.postCase(form).subscribe(
			(res) => {
				let id = res['_id'];
				this.router.navigate([ '/case-details', id ]);
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
