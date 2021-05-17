import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  token = localStorage.getItem("token")
  isAuth:boolean

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated()
  }

  logout(){
    this.authService.logout()
    this.isAuthenticated()
  }

  isAuthenticated(){
    this.isAuth = this.authService.isAuthenticated()
  }



  

  // setButtonType(){
  //   if (this.token != null ){
  //     return 'btn btn-success'
  //   } else {
  //     return 'btn btn-primary'
  //   }

  // }

}
