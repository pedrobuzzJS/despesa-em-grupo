import api from "./api";
export default class Auth {
    async signIn(username: string, password: string) {
        let USER;
        let TOKEN;
        try {
            await api.post("login", {
                data: JSON.stringify({username, password})
            }).then(response => {
                const { user, token } = response.data;
                USER = user;
                TOKEN = token;
            }).catch(async error => {
                console.log("a");
            }).finally();
        } catch (error) {
            console.log("b");
        };
        return { USER, TOKEN };
    };
    async getPermissions(id: number, username: string, token: string) {
        try {
            await api.get("permissions", {
                params: {
                    id: id,
                    username: username,
                    token: token
                }
            }).then(
                response => {

                }
            ).finally();
        } catch (error) {
        }
    };
};