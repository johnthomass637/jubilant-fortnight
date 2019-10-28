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
	selector: 'app-member-create',
	templateUrl: './member-create.component.html',
	styleUrls: [ './member-create.component.css' ]
})
export class MemberCreateComponent implements OnInit {
	memberForm: FormGroup;
	memberid: string = '';
	memfirstname: string = '';
	memlastname: string = '';
	assesstype: string = '';
	status: string = '';
	cntdate: string = '';
	locofvis: string = '';
	cntentity: string = '';
	cntname: string = '';
	intdispmem: string = '';
	elgbleissue: string = '';
	memserve: string = '';
	servegap: string = '';
	phycond: string = '';
	phychange: string = '';
	medappnt: string = '';
	phyenv: string = '';
	moodemo: string = '';
	recfall: string = '';
	servcare: string = '';
	memrisk: string = '';
	restintrv: string = '';
	memresult: string = '';
	othtopic: string = '';
	nursename: string = '';

	constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {}

	ngOnInit() {
		localStorage.setItem('memberCreate', '2');
		localStorage.removeItem('member');
		this.memberForm = this.formBuilder.group({
			memberid: [ null, Validators.required ],
			memfirstname: [ null, Validators.required ],
			memlastname: [ null, Validators.required ],
			assesstype: [ null, Validators.required ],
			status: [ null, Validators.required ],
			cntdate: [ null, Validators.required ],
			locofvis: [ null, Validators.required ],
			cntentity: [ null, Validators.required ],
			cntname: [ null, Validators.required ],
			intdispmem: [ null, Validators.required ],
			elgbleissue: [ null, Validators.required ],
			memserve: [ null, Validators.required ],
			servegap: [ null, Validators.required ],
			phycond: [ null, Validators.required ],
			phychange: [ null, Validators.required ],
			medappnt: [ null, Validators.required ],
			phyenv: [ null, Validators.required ],
			moodemo: [ null, Validators.required ],
			recfall: [ null, Validators.required ],
			servcare: [ null, Validators.required ],
			memrisk: [ null, Validators.required ],
			restintrv: [ null, Validators.required ],
			memresult: [ null, Validators.required ],
			othtopic: [ null, Validators.required ],
			nursename: [ null, Validators.required ]
		});
	}

	onFormSubmit(form: NgForm) {
		this.api.postMember(form).subscribe(
			(res) => {
				let id = res['_id'];
				this.router.navigate([ '/member-details', id ]);
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
