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
	valueArray = [];
	constructor(private api: ApiService) {}

	ngOnInit() {
		localStorage.setItem('dashboard', '1');
		localStorage.removeItem('case');
		localStorage.removeItem('caseCreate');

		this.api.getCases().subscribe(
			(res) => {
				console.log(res);
				this.total = res.length;
				console.log(this.total);

				let submittedArray = [];
				let rejectedArray = [];
				let pendingArray = [];

				// for (let i = 0; i < res.length; i++) {
				// 	console.log(res[i]);
				// 	if (res[i].status == 'Submitted') {
				// 		submittedArray.push(res[i]);
				// 	}
				// 	if (res[i].status == 'Pending') {
				// 		pendingArray.push(res[i]);
				// 	}
				// 	if (res[i].status == 'Rejected') {
				// 		rejectedArray.push(res[i]);
				// 	}
				// }

				for (let i = 0; i < res.length; i++) {
					console.log(res[i]);
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
				this.valueArray = [ this.total, this.submitted, this.rejected, this.pending ];
				console.log(this.valueArray);

				var ctx = document.getElementById('myChart');
				var myChart = new Chart(ctx, {
					type: 'bar',
					data: {
						labels: [ 'Total', 'Submitted', 'Rejected', 'Pending' ],
						datasets: [
							{
								// label: '# of cases',
								data: this.valueArray,
								backgroundColor: [ '#338ef3', '#22cb9c', '#f05657', '#fba946' ],
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

				var ctx = document.getElementById('myChart1');
				var myChart1 = new Chart(ctx, {
					type: 'doughnut',
					data: {
						labels: [ 'Total', 'Submitted', 'Rejected', 'Pending' ],
						datasets: [
							{
								// label: '# of cases',
								data: this.valueArray,
								backgroundColor: [ '#338ef3', '#22cb9c', '#f05657', '#fba946' ],
								borderColor: [ '#338ef3', '#22cb9c', '#f05657', '#fba946' ],
								borderWidth: 1
							}
						]
					},
					options: {
						legend: {
							display: false,
							position: 'right'
						}
						// scales: {
						// 	yAxes: [
						// 		{
						// 			ticks: {
						// 				beginAtZero: true
						// 			}
						// 		}
						// 	]
						// }
					}
				});
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
