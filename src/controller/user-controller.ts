import { APIRequestContext, expect, request } from "@playwright/test";
import { base } from "../../config/base-config";

class UserController {

private APIRequest: APIRequestContext;

    async UserController() {
    this.APIRequest = await request.newContext({
        baseURL: base.baseUrl,
        extraHTTPHeaders: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
            `Bearer ${base.token}`,
        },
    });
}

  async listUsers() {

    const responseGetAllUser = await this.APIRequest.get("users");
    expect(responseGetAllUser.status()).toEqual(200);
    //console.log(await responseGetAllUser.json());
    
   //const responseBody = await responseGetAllUser.json();
    //console.log(
      //  "Name : " +
        //  responseBody[0]["name"] +
          //"Email : " +
          //responseBody[0]["email"]
      //);

  }
  createUser(data: { [key: string]: string | number }) {
    return this.APIRequest.post("users", { data });
  }
  updateUser(id: string, data: { [key: string]: string }) {
    return this.APIRequest.put(`users/${id}`, { data });
  }
  deleteUser(id: string) {
    return this.APIRequest.delete(`users/${id}`);
  }
  getUserById(id: string){
    return this.APIRequest.get(`users/${id}`);
  }
}


export default new UserController();
