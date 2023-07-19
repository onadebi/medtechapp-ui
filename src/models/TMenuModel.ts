type TMenuModel = {
    id: string
    orderPriority: number
    controllerName: string
    controllerCode: string
    urlPath: string
    displayName: string
    iconClass: string
    controllerDescription: string
    menuActions: MenuAction[]
}

export interface MenuAction {
    id: string
    orderPriority: number
    companyId: number
    actionName: string
    urlPath: string
    displayName: string
    iconClass: string
    actionDescription: string | null;
    allowAnonymous: boolean
    menuControllerId: string
    menuModules: string| null;
    uipath: string //| null;
}

export default TMenuModel;