import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorExist: boolean = false;
  hide=true;
  email = new FormControl('juan.cruz@gmail.com', [Validators.required, Validators.email]);
  password = new FormControl('Abc123',[Validators.required, Validators.minLength(6)]);
  constructor(private authService: AuthService, 
              public dialog: MatDialog,
              private router: Router
  ) { }

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
    }).subscribe({
      next: (resp)=>{
        console.log(resp);
        this.authService.setAuth(resp);
        this.errorExist=false;
        this.router.navigate(['/countries/home']);
      },//la funcion que se ejecuta cuando el subscribe es ok
      error: (e) => {
        console.error('ERROR',e);
        this.authService.setAuth(e);
        this.dialog.open(DialogComponent);
        this.errorExist = true; //por si yo quiero mostrar un mensaje de error en el template y no como dialogo
      },//cuando se produce un error
      complete: () => console.info('complete') //cuando el ciclo del subscribe finaliza
    });

  }

}
