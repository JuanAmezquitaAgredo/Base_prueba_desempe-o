import { BodyRequestLogin } from "../models/Login_model";

export class LoginController {

    async postLogin(data:BodyRequestLogin):Promise<void> {
        const headers: Record<string, string>={
            'Content-Type':'application/json'
        }
    
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }
    
    
        const url = 'http://190.147.64.47:5155/api/v1/auth/login';
        const result = await fetch(url,reqOptions);
    
        console.log(result.status);
    
        if(result.status === 201){
            alert('Login exitoso');
        }else if(result.status === 401){
            alert('Usuario o contraseña incorrecto');
            throw new Error("Conexion fallida");
        }else{
            alert('Usuario o contraseña incorrecto');
            throw new Error("Conexion fallida");
        }
    
        const userData = (await result.json()).data;
        const token = userData.token;
        const id = userData.id;
        sessionStorage.setItem('id',id);
        sessionStorage.setItem('token',token);
        
    }
}