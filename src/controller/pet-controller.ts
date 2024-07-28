import { APIRequestContext, request } from "@playwright/test";
import { baseUrl, PetData } from "../insider-test-data";

class PetController {
  private APIRequest: APIRequestContext;

  async PetController() {
    this.APIRequest = await request.newContext({
      baseURL: baseUrl,
      extraHTTPHeaders: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  createPet(data: PetData) {
    return this.APIRequest.post("", { data });
  }

  updatePet(data: PetData) {
    return this.APIRequest.put("", { data });
  }

  readPet(id: number) {
    return this.APIRequest.get(`/${id}`);
  }

  deletePet(id: number) {
    return this.APIRequest.delete(`/${id}`);
  }
}
