import GenResponse from "../models/GenResponse";
import IUserLoginReq from "../models/IUserLoginReq";
import TUserLoginResp from "../models/TUserLoginResp";
import TUserRegister from "../models/TUserRegister";
import AppRouter from "../routes/AppRouter";
import agent from '../helpers/agent.api';
import { storeService } from "./storeService";
import { AxiosError } from "axios";

export class UserService{

    initLoginUser: IUserLoginReq ={password:'',email:''};

    initRegisterUser: TUserRegister ={
        firstName:'',lastName:'',email:'',password:'',confirmPassword:'',medicCompanyId:0,MedicBranchId:0, SalutationId: 0,GenderCategoryId:0, UserGroupIds:[0,0]
    };

    login = async (creds: IUserLoginReq): Promise<GenResponse<TUserLoginResp>> => {
        const objResp  = await agent.post<GenResponse<TUserLoginResp>>(`/Auth/login`,creds);
        if (objResp && objResp.isSuccess && objResp.result?.token) {
            storeService.tokenService.setToken(objResp.result.token);
        }
        return objResp;
    }

    logout = async () => {
        agent.post<boolean>('/Auth/logout',{})
        .then(data=>{
            console.log('Logged out ',data);
            storeService.tokenService.removeAuthToken();
        })
        .catch((err: AxiosError)=> console.log(err.message));
        AppRouter.navigate('/login')
    }

    // register=(creds: any)=>{

    // }
}