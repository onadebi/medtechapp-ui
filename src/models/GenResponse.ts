class GenResponse<T>{
    isSuccess: boolean;
    result: T| undefined| null;
    message: string | null;
    statCode: StatusCode;
    error: string| null;

    constructor(){
        this.isSuccess = false;
        this.message = '';
        this.statCode = 200;
        this.error = '';
    }

    static Result<T>(objVal: T,isSuccess = false, statusCode: StatusCode = StatusCode.OK, message: string|null = '', error: string| null= null):GenResponse<T>{
        const objResp = new GenResponse<T>();
        
        objResp.result = objVal;
        objResp.isSuccess = isSuccess;
        objResp.message = message;
        objResp.statCode = statusCode;
        objResp.error = error;
        
        return objResp;
    }
}


export enum StatusCode{
    OK = 200,
    Created=201,
    // NoChanges=304,
    BadRequest=400,
    Unauthorized=401,
    Forbidden=403,
    NotFound = 404,
    UnAvailableForLegalReasons=451,
    ServerError=500,
    NotImplemented=501,
    ServiceNotAvailable=503,
    GatewayTimeout=504,
    InsufficientStorage=507
}


export default GenResponse;