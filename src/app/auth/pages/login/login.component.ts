import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  email = new FormControl('juan.cruz@gmail.com', [Validators.required, Validators.email]);
  password = new FormControl('123456',[Validators.required, Validators.minLength(6)]);
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getErrorMessage(field: string){
    if(field==='email'){
      if (this.email.hasError('required')) {
        return 'Este campo no puede estar vacío';
      }
      return this.email.hasError('email') ? 'Mail no válido' : '';
    }else if(field==='password'){
      return this.password.hasError('required') ? 'El campo no puede estar vacío':'El campo no puede tener menos de 6 caracteres'
    }
    return '';
  }

  login(){

    this.authService.login({
      email: this.email.value,
      password: this.password.value
    }).subscribe( resp => console.log(resp) );

  }

}
