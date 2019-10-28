import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Common/Header/Header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
// import { MatDatepickerModule } from '@angular/material/datepicker';

const appRoutes: Routes = [
	{
		path: 'members',
		component: MemberComponent,
		data: { title: 'Member List' }
	},
	{
		path: 'member-details/:id',
		component: MemberDetailComponent,
		data: { title: 'Member Details' }
	},
	{
		path: 'member-create',
		component: MemberCreateComponent,
		data: { title: 'Create Member' }
	},
	{
		path: 'member-edit/:id',
		component: MemberEditComponent,
		data: { title: 'Edit Member' }
	},
	{
		path: '',
		redirectTo: '/members',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MemberComponent,
		MemberDetailComponent,
		MemberCreateComponent,
		MemberEditComponent,
		SidebarComponent
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
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
