import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';
import { Router } from '@angular/router';
import { TOKEN_NAME } from 'src/app/_shared/var.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  clave: string;
  mensaje: string = "";
  error: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    (window as any).initialize();
  }
  iniciarSession(){
    
    this.loginService.login(this.usuario, this.clave).subscribe(data => {
      //console.log(data);
      if (data) {
        let token = JSON.stringify(data);
        sessionStorage.setItem(TOKEN_NAME, token);
      }
    });
  }

}
