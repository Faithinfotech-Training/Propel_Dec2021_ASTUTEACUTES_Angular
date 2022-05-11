import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // create a constructor
  constructor(private authService: AuthService,
    public router: Router){

    
  }


  //admin/manager/coordinator role
  //check role ID here:
  //routes roleId and sessionRole == true != false
  canActivate(
    route: ActivatedRouteSnapshot) : boolean  {
      //expected role : URl
      const expectedRole = route.data.role;

      //current role : SessionStorage
      const currentRole = sessionStorage.getItem("ACCESS_ROLE");
      
      if(currentRole != expectedRole){
        this.router.navigateByUrl('login');
        return false;

      }


    return true;
  }
  
}
