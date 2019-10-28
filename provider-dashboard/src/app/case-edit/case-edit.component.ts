import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
	selector: 'app-case-edit',
	templateUrl: './case-edit.component.html',
	styleUrls: [ './case-edit.component.css' ]
})
export class CaseEditComponent implements OnInit {
	caseForm: FormGroup;
	id: string = '';
	memberid: string = '';
	memname: string = '';
	dateofbirth: string = '';
	servicepvdid: string = '';
	requestpvdid: string = '';
	diagcode: string = '';
	procode: string = '';
	startdate: string = '';
	enddate: string = '';

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private api: ApiService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.getCase(this.route.snapshot.params['id']);
		this.caseForm = this.formBuilder.group({
			memberid: [ null, Validators.required ],
			memname: [ null, Validators.required ],
			dateofbirth: [ null, Validators.required ],
			servicepvdid: [ null, Validators.required ],
			requestpvdid: [ null, Validators.required ],
			diagcode: [ null, Validators.required ],
			procode: [ null, Validators.required ],
			startdate: [ null, Validators.required ],
			enddate: [ null, Validators.required ]
		});
	}

	getCase(id) {
		this.api.getCase(id).subscribe((data) => {
			console.log(data);
			this.id = data._id;
			this.caseForm.setValue({
				memberid: data.memberid,
				memname: data.memname,
				dateofbirth: data.dateofbirth,
				servicepvdid: data.servicepvdid,
				requestpvdid: data.requestpvdid,
				diagcode: data.diagcode,
				procode: data.procode,
				startdate: data.startdate,
				enddate: data.enddate
			});
		});
	}

	onFormSubmit(form: NgForm) {
		this.api.updateCase(this.id, this.caseForm.value).subscribe(
			(res) => {
				let id = res['_id'];
				this.router.navigate([ '/case-details', id ]);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	caseDetails() {
		this.router.navigate([ '/case-details', this.id ]);
	}
}
