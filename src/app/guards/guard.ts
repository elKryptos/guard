import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router"

export const controlRandom: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    let userLoggato = sessionStorage.getItem("userLoggato");
    return userLoggato !== null && userLoggato === "true";
}