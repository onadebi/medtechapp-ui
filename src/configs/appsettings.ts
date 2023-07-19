const appsettings = {
    backend:{
        baseUrl: 'https://localhost:7166/api/v1'
    },
    userInfo: 'userInfo' || '',
    UserService:{
        baseApiUrl: '/api/users'
    },
    validations:{
        auth:{
            minPasswordLength: 3
        },
    },
    functions: {
        createCookieInHour: (cookieName: string, cookieValue: string, hourToExpire: number) => {
            const date = new Date();
            date.setTime(date.getTime() + (hourToExpire * 60 * 60 * 1000));
            document.cookie = cookieName + " = " + cookieValue + "; expires = " + date.toLocaleString();
        },
        getCookieByName: (cookieName: string): string | undefined => {
            const name = cookieName + "=";
            const allCookieArray = document.cookie.split(';');
            for (let i = 0; i < allCookieArray.length; i++) {
                const temp = allCookieArray[i].trim();
                if (temp.indexOf(name) === 0)
                    return temp.substring(name.length, temp.length);
            }
            return undefined;
        },
        ToSentenceUpper(text: string) {
            return text[0].toUpperCase() + text.slice(1);
        },
        getAllCookies:():string=>{
            return document.cookie;
        },
        NumberCommaFormat :(x: number)=> {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    token:{
        key: 'token'
    },
}
export default appsettings;