import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseComponent } from './case/case.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { CaseCreateComponent } from './case-create/case-create.component';
import { CaseEditComponent } from './case-edit/case-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import {MatDatepickerModule} from '@angular/material/datepicker';

// import { headerComponentNew } from './header/header.component';

import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatDatepickerModule,
	MatNativeDateModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		data: { title: 'Case Login' }
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		data: { title: 'Case Dashboard' }
	},
	{
		path: 'cases',
		component: CaseComponent,
		data: { title: 'Case List' }
	},
	{
		path: 'case-details/:id',
		component: CaseDetailComponent,
		data: { title: 'Case Details' }
	},
	{
		path: 'case-create',
		component: CaseCreateComponent,
		data: { title: 'Create Case' }
	},
	{
		path: 'case-edit/:id',
		component: CaseEditComponent,
		data: { title: 'Edit Case' }
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CaseComponent,
		CaseDetailComponent,
		CaseCreateComponent,
		CaseEditComponent,
		SidebarComponent,
		DashboardComponent,
		LoginComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	providers: [ MatDatepickerModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
