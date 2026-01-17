// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';

// @Component({
//   selector: 'app-client-form',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     MatInputModule,
//     MatSelectModule,
//     MatTabsModule,
//     MatCheckboxModule,
//     MatButtonModule,
//     MatCardModule,
//     MatDatepickerModule,
//     MatNativeDateModule
//   ],
//   templateUrl: './client-form.component.html',
//   styleUrls: ['./client-form.component.scss']
// })
// export class ClientFormComponent implements OnInit {
//   clientForm!: FormGroup;

//   clientTypes = ['Enterprises', 'SME'];
//   segmentTypes = ['Corporate', 'Retail'];
//   subSegments = ['Public Limited Company', 'Private Limited'];
//   countries = ['Tanzania', 'Kenya', 'Uganda'];
//   regions = ['ARUSHA', 'DAR ES SALAAM', 'MWANZA'];
//   wards = ['BOMAHBUZI', 'CENTRAL', 'EAST'];
//   districts = ['HAI', 'ILALA', 'KINONDONI'];

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.clientForm = this.fb.group({
//       clientId: [''],
//       applicationId: [''],
//       clientName: ['', Validators.required],
//       baseId: [''],
//       clientType: ['Enterprises'],
//       segmentType: ['Corporate'],
//       subSegmentType: ['Public Limited Company'],
//       clientClassification: [''],
      
//       corporateDetails: this.fb.group({
//         companyName: [''],
//         lineOfBusiness: ['Proprietary'],
//         lineOfBusinessMoreInfo: [''],
//         natureOfBusiness: [''],
//         identificationType: [''],
//         dateOfRegistration: [''],
//         registrationNo: [''],
//         registeredOffice: [''],
//         registeredAt: [''],
//         businessStartedYear: [''],
//         noOfEmployees: [''],
//         comments: [''],
//         website: [''],
//         openedBy: [''],
//         openedOn: [''],
//         relationshipManager: [''],
//         tinNumber: ['']
//       }),
      
//       addresses: this.fb.group({
//         residentialAddress: [''],
//         businessAddress: [''],
//         officeAddress: [''],
//         mailingAddress: [''],
//         homeCountryAddress: [''],
//         address2: [''],
//         region: [''],
//         street: [''],
//         country: ['Tanzania'],
//         zipCode: [''],
//         regionSelect: ['ARUSHA'],
//         phoneHome: [''],
//         ward: ['BOMAHBUZI'],
//         district: ['HAI'],
//         phoneWork: [''],
//         mobile: [''],
//         faxNo: [''],
//         email: ['', Validators.email],
//         landMark: ['']
//       }),
      
//       specialOffers: this.fb.group({
//         sendGreetings: [false],
//         associateOffers: [false],
//         ourOffers: [false],
//         statementOnline: [false],
//         mobileAlert: [false]
//       }),
      
//       audit: this.fb.group({
//         status: [{ value: 'Open', disabled: true }],
//         openDate: [{ value: '', disabled: true }],
//         closedDate: [{ value: '', disabled: true }],
//         createdBy: [{ value: '', disabled: true }],
//         modifiedBy: [{ value: '', disabled: true }],
//         supervisedBy: [{ value: '', disabled: true }],
//         createdOn: [{ value: '', disabled: true }],
//         modifiedOn: [{ value: '', disabled: true }],
//         supervisedOn: [{ value: '', disabled: true }]
//       })
//     });
//   }

//   save() {
//     if (this.clientForm.valid) {
//       console.log('Form Data:', this.clientForm.getRawValue());
//       alert('Form saved successfully!');
//     } else {
//       console.log('Form is invalid');
//       this.markFormGroupTouched(this.clientForm);
//     }
//   }

  

//   cancel() {
//     if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
//       this.clientForm.reset();
//       this.ngOnInit(); // Reset to initial values
//     }
//   }

//   private markFormGroupTouched(formGroup: FormGroup) {
//     Object.keys(formGroup.controls).forEach(key => {
//       const control = formGroup.get(key);
//       control?.markAsTouched();

//       if (control instanceof FormGroup) {
//         this.markFormGroupTouched(control);
//       }
//     });
//   }
// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  
  clientForm!: FormGroup;

  clientTypes = ['Enterprises', 'SME'];
  segmentTypes = ['Corporate', 'Retail'];
  subSegments = ['Public Limited Company', 'Private Limited'];
  countries = ['Tanzania', 'Kenya', 'Uganda'];
  regions = ['ARUSHA', 'DAR ES SALAAM', 'MWANZA'];
  wards = ['BOMAHBUZI', 'CENTRAL', 'EAST'];
  districts = ['HAI', 'ILALA', 'KINONDONI'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      clientId: [''],
      applicationId: [''],
      clientName: ['', Validators.required],
      baseId: [''],
      clientType: ['Enterprises'],
      segmentType: ['Corporate'],
      subSegmentType: ['Public Limited Company'],
      clientClassification: [''],
      
      corporateDetails: this.fb.group({
        companyName: [''],
        lineOfBusiness: ['Proprietary'],
        lineOfBusinessMoreInfo: [''],
        natureOfBusiness: [''],
        identificationType: [''],
        dateOfRegistration: [''],
        registrationNo: [''],
        registeredOffice: [''],
        registeredAt: [''],
        businessStartedYear: [''],
        noOfEmployees: [''],
        comments: [''],
        website: [''],
        openedBy: [''],
        openedOn: [''],
        relationshipManager: [''],
        tinNumber: ['']
      }),
      
      addresses: this.fb.group({
        residentialAddress: [''],
        businessAddress: [''],
        officeAddress: [''],
        mailingAddress: [''],
        homeCountryAddress: [''],
        address2: [''],
        region: [''],
        street: [''],
        country: ['Tanzania'],
        zipCode: [''],
        regionSelect: ['ARUSHA'],
        phoneHome: [''],
        ward: ['BOMAHBUZI'],
        district: ['HAI'],
        phoneWork: [''],
        mobile: [''],
        faxNo: [''],
        email: ['', Validators.email],
        landMark: ['']
      }),
      
      specialOffers: this.fb.group({
        sendGreetings: [false],
        associateOffers: [false],
        ourOffers: [false],
        statementOnline: [false],
        mobileAlert: [false]
      }),
      
      audit: this.fb.group({
        status: [{ value: 'Open', disabled: true }],
        openDate: [{ value: '', disabled: true }],
        closedDate: [{ value: '', disabled: true }],
        createdBy: [{ value: '', disabled: true }],
        modifiedBy: [{ value: '', disabled: true }],
        supervisedBy: [{ value: '', disabled: true }],
        createdOn: [{ value: '', disabled: true }],
        modifiedOn: [{ value: '', disabled: true }],
        supervisedOn: [{ value: '', disabled: true }]
      })
    });
  }

  previousTab() {
    if (this.tabGroup && this.tabGroup.selectedIndex !== null && this.tabGroup.selectedIndex > 0) {
      this.tabGroup.selectedIndex = this.tabGroup.selectedIndex - 1;
    }
  }

  nextTab() {
    if (this.tabGroup && this.tabGroup.selectedIndex !== null) {
      const maxIndex = this.tabGroup._tabs.length - 1;
      if (this.tabGroup.selectedIndex < maxIndex) {
        this.tabGroup.selectedIndex = this.tabGroup.selectedIndex + 1;
      }
    }
  }

  get isFirstTab(): boolean {
    return this.tabGroup ? this.tabGroup.selectedIndex === 0 : true;
  }

  get isLastTab(): boolean {
    if (!this.tabGroup) return true;
    const maxIndex = this.tabGroup._tabs.length - 1;
    return this.tabGroup.selectedIndex === maxIndex;
  }

  save() {
    if (this.clientForm.valid) {
      console.log('Form Data:', this.clientForm.getRawValue());
      alert('Form saved successfully!');
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched(this.clientForm);
    }
  }

  cancel() {
    if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
      this.clientForm.reset();
      this.ngOnInit(); 
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}