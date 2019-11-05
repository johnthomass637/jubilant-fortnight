import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	total: any;
	submitted: any;
	rejected: any;
	pending: any;
	// valueArray = [];
	update: boolean;
	updateData: any;

	displayedColumns = [ 'memname' ];
	dataSource = new CaseDataSource(this.api);

	constructor(private api: ApiService) {}

	ngOnInit() {
		localStorage.setItem('dashboard', '1');
		localStorage.removeItem('case');
		localStorage.removeItem('caseCreate');

		this.api.getTime().subscribe(
			(res) => {
				if (res == [] || res == null || res == '') {
					this.update = true;
				} else {
					this.update = false;
					this.updateData = res.length;
				}
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);

		this.api.getCases().subscribe(
			(res) => {
				console.log(res);
				this.total = res.length;

				let submittedArray = [];
				let rejectedArray = [];
				let pendingArray = [];

				for (let i = 0; i < res.length; i++) {
					if (res[i].MMSStatus == 'APPROVED') {
						submittedArray.push(res[i]);
					}
					if (res[i].MMSStatus == 'PENDING') {
						pendingArray.push(res[i]);
					}
					if (res[i].MMSStatus == 'DENIED') {
						rejectedArray.push(res[i]);
					}
				}

				this.submitted = submittedArray.length;
				this.pending = pendingArray.length;
				this.rejected = rejectedArray.length;
				// this.valueArray = [ this.total, this.submitted, this.rejected, this.pending ];
			},
			(err) => {
				console.log(err);
			}
		);

		this.api.getCountByMonth().subscribe(
			(res) => {
				let arrData = [];
				let arrLabel = [];

				for (let i = 0; i < res.length; i++) {
					if (res[i]._id == '1') {
						arrLabel.push('January');
					}
					if (res[i]._id == '2') {
						arrLabel.push('February');
					}
					if (res[i]._id == '3') {
						arrLabel.push('March');
					}
					if (res[i]._id == '4') {
						arrLabel.push('April');
					}
					if (res[i]._id == '5') {
						arrLabel.push('May');
					}
					if (res[i]._id == '6') {
						arrLabel.push('June');
					}
					if (res[i]._id == '7') {
						arrLabel.push('July');
					}
					if (res[i]._id == '8') {
						arrLabel.push('August');
					}
					if (res[i]._id == '9') {
						arrLabel.push('September');
					}
					if (res[i]._id == '10') {
						arrLabel.push('October');
					}
					if (res[i]._id == '11') {
						arrLabel.push('November');
					}
					if (res[i]._id == '12') {
						arrLabel.push('December');
					}
				}

				for (let i = 0; i < res.length; i++) {
					arrData.push(res[i].createddate);
				}

				var ctx = document.getElementById('myChart');
				var myChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: arrLabel,
						datasets: [
							{
								data: arrData,
								backgroundColor: [ 'rgb(110, 174, 234)' ],
								borderColor: [ '#338ef3', '#22cb9c', '#f05657', '#fba946' ],
								borderWidth: 1
							}
						]
					},
					options: {
						legend: {
							display: false,
							position: 'right'
						},
						scales: {
							yAxes: [
								{
									ticks: {
										beginAtZero: true
									}
								}
							]
						}
					}
				});
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
		return this.api.getTime();
	}
	disconnect() {}
}
