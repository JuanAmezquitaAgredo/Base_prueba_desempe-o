import { BodyRequestRegister } from "../models/Register_model";
export class RegisterController {

    async postRegister(data:BodyRequestRegister):Promise<void> {
        const headers: Record<string, string>={
            'Content-Type':'application/json'
        }
    
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }
    
    
        const url = 'http://190.147.64.47:5155/api/v1/users';
        const result = await fetch(url,reqOptions);
    
        console.log(result.status);
    
        if(result.status === 201){
            alert('Registro exitoso');
        }else if(result.status === 401){
            alert('No autorizado');
            throw new Error("Conexion fallida");
        }else{
            alert('Usuario o contraseña incorrecto');
            throw new Error("Conexion fallida");
        }
    }
}