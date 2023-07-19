import appsettings from "../configs/appsettings";

export class TokenService{
    token: string | null;
    constructor(){
        this.token = window.localStorage.getItem(appsettings.token.key);
    }

    setToken = (tokenValue: string) => {
        window.localStorage.setItem(appsettings.token.key, tokenValue);
    }

    getAuthToken = () => window.localStorage.getItem(appsettings.token.key);

    removeAuthToken =()=> window.localStorage.removeItem(appsettings.token.key);
}