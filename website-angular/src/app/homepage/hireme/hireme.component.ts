import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServices } from 'src/app/Api/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-hireme',
  templateUrl: './hireme.component.html',
  styleUrls: ['./hireme.component.css']
})
export class HiremeComponent implements OnInit {

  form:FormGroup


  constructor(private api : ApiServices, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      firstname: [null, Validators.required],lastname: [null, Validators.required],
      message: [null, Validators.required]
    })
  }

  sweetAlert(content:string){
    Swal.fire({
      title:'Form Posted',
      text:content,
      icon:'success',
      showCancelButton: false,
      showConfirmButton:false,
      timer:2500
    })
  }

  postDetails(){
    let details = {
      firstName : this.form.get('firstname').value, 
      lastName : this.form.get('lastname').value, 
      email : this.form.get('email').value, 
      message : this.form.get('message').value
    }
    console.log(details)
    this.api.contactDetails(details).subscribe(response => {
      if (response.status){
        this.sweetAlert(response.message)
      }
      else{

      }
    }, err => console.log(err))
  }

}
