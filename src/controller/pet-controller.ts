import { APIRequestContext, request } from "@playwright/test";
import { baseUrl, PetData } from "../insider-test-data";

class PetController {
  private APIRequest: APIRequestContext;

  async PetController() {
    this.APIRequest = await request.newContext({
      baseURL: baseUrl,
      extraHTTPHeaders: {
        Accept: "application/json",
      },
    });
  }

  createPet(data: PetData) {
    return this.APIRequest.post("", { data });
  }

  updatePet(data: PetData) {
    return this.APIRequest.put("", { data });
  }

  async readPet(id: number) {
    return await this.APIRequest.get(`${id}`);


    //const response=await request.get("https://petstore.swagger.io/v2/pet/975056");
    //console.log(await response.json());

  }

  deletePet(id: number) {
    return this.APIRequest.delete(`${id}`);
  }
}
export default new PetController();