import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent implements OnInit {
	isHome: boolean;
	isAddCase: boolean;
	isCaseList: boolean;
	constructor() {}

	ngOnInit() {
		if (localStorage.getItem('dashboard') === '1') {
			this.isHome = true;
		}

		if (localStorage.getItem('case') === '1') {
			this.isCaseList = true;
		}
		if (localStorage.getItem('caseCreate') === '2') {
			this.isAddCase = true;
		}
		//this.isHome = true;
		// this.isAddCase = false;
	}

	gotoHome() {
		this.isHome = true;
		this.isAddCase = false;
		this.isCaseList = false;
	}

	gotoAddCase() {
		this.isAddCase = true;
		this.isHome = false;
		this.isCaseList = false;
	}

	gotoCaseList() {
		this.isCaseList = true;
		this.isAddCase = false;
		this.isHome = false;
	}
}
