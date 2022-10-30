import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate {

    

    constructor(private cookie:CookieService , private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.cookie.check("login")){
            return true;
        }else {
            this.router.navigate(['login']);
            return false;
        }
    }

}