import { navigateTo } from "../../../router";

export function HomeView() {
    const $root = document.getElementById('root') as HTMLElement;
    
    $root.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Vista desde home';
    $root.appendChild(h1);

    const logout_button = document.createElement('button');
    logout_button.textContent = 'Logout';
    $root.appendChild(logout_button);

    //* Logic */

    logout_button.addEventListener('click', () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('id');
        navigateTo('/');
    });

};