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
	selector: 'app-member-edit',
	templateUrl: './member-edit.component.html',
	styleUrls: [ './member-edit.component.css' ]
})
export class MemberEditComponent implements OnInit {
	memberForm: FormGroup;
	id: string = '';
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

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private api: ApiService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.getMember(this.route.snapshot.params['id']);
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

	getMember(id) {
		this.api.getMember(id).subscribe((data) => {
			console.log(data);
			this.id = data._id;
			this.memberForm.setValue({
				memberid: data.memberid,
				memfirstname: data.memfirstname,
				memlastname: data.memlastname,
				cntdate: data.cntdate,
				locofvis: data.locofvis,
				cntentity: data.cntentity,
				cntname: data.cntname,
				intdispmem: data.intdispmem,
				elgbleissue: data.elgbleissue,
				memserve: data.memserve,
				servegap: data.servegap,
				phycond: data.phycond,
				phychange: data.phychange,
				medappnt: data.medappnt,
				phyenv: data.phyenv,
				moodemo: data.moodemo,
				recfall: data.recfall,
				servcare: data.servcare,
				memrisk: data.memrisk,
				restintrv: data.restintrv,
				memresult: data.memresult,
				othtopic: data.othtopic,
				nursename: data.nursename,
				assesstype: data.assesstype,
				status: data.status
			});
		});
	}

	onFormSubmit(form: NgForm) {
		this.api.updateMember(this.id, this.memberForm.value).subscribe(
			(res) => {
				let id = res['_id'];
				this.router.navigate([ '/member-details', id ]);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	memberDetails() {
		this.router.navigate([ '/member-details', this.id ]);
	}
}
