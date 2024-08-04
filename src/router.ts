import { Routes } from "./helpers/Routes";

export function router() {
    
    const path = window.location.pathname;
    const publicRoute = Routes.public.find(route => route.path === path);
    const privateRoute = Routes.private.find(route => route.path === path);

    //*Si la ruta no es publica ni privada */
    if (!publicRoute && !privateRoute && path !== '/') {
        alert('Pagina no encontrado');
        navigateTo('/Login');
        return;
    }

    const token = sessionStorage.getItem('token');

    //*Si esta accediendo a la ruta pricipal y no tiene token */
    if (path === '/' && !token) {
        navigateTo('/Login');
        return;
    }

    //*Si esta accediendo a la ruta pricipal y tiene token */

    if (path === '/' && token) {
        navigateTo('/home');
        return;
    }

    //*Rutas publicas */

    if (publicRoute) {
        if((path === '/Login' || path === '/Register') && token){ 
            navigateTo('/home');
            return;
        }else{
            publicRoute.component();
            return;
        }
    }

    //*Rutas privadas */

    if (privateRoute) {
        if(token){
            privateRoute.component();
            return;
        }else{
            navigateTo('/Login');
            return;
        }
    }


}

export function navigateTo(path: string):void {
    window.history.pushState({}, "", window.location.origin + path);
    router();
}