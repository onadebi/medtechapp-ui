import { menuMapper } from "../data/menuMapper";
import agent from "../helpers/agent.api";
import GenResponse from "../models/GenResponse";
import TMenuModel from "../models/TMenuModel";

export class MenuService {
    initMenu = {};

    getAllMenu = async () => {
        const objResp = await agent.get<GenResponse<TMenuModel[]>>(`Navigation/GetAllNavigationMenu`);
        const objResult: GenResponse<TMenuModel[]> = new GenResponse();
        if (objResp.isSuccess === true && objResp.result) {
            objResult.result = menuMapper.filter((menu) => {
                return objResp.result?.some((obj) => {
                    return menu.menuActions.every((val) => obj.menuActions.find(name => name.actionName === val.actionName))
                })
            }).sort((a, b) => a.orderPriority - b.orderPriority)
        }
        return objResult;
    }
}