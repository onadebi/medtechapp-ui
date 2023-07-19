import { MenuService } from "./MenuService";
import { TokenService } from "./TokenService"
import { UserService } from "./UserService";

interface IStoreService{
    tokenService: TokenService;
    userService: UserService;
    menuService: MenuService;
}

export const storeService : IStoreService = {
    tokenService: new TokenService(),
    userService: new UserService(),
    menuService: new MenuService(),
}