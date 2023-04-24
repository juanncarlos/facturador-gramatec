import { Component, OnInit } from '@angular/core';

import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public searchText: string;

  public modalRef: NgbModalRef;

  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }


  public openModal(modalContent, user) {
    /* if(user){
      this.user = user;
      this.form.setValue(user);
      this.genderOption = user.profile.gender; 
    } 
    else{
      this.user = new User();
      this.user.profile = new UserProfile();
      this.user.work = new UserWork();
      this.user.contacts = new UserContacts();
      this.user.social = new UserSocial();
      this.user.settings = new UserSettings();
    }  */  
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });
    
    /* this.modalRef.result.then((result) => {
      this.form.reset();
      this.genderOption = null;
    }, (reason) => {
      this.form.reset();
      this.genderOption = null;
    }); */
  }

  public toggle(type){
    /* this.type = type; */
  }

}
