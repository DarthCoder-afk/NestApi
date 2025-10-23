import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
    signup(){
        return {message: "signup endpoint from service"};
    }

    signin(){
        return {message: "signin endpoint from service"};
    }
}