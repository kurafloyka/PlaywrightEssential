import test, { expect } from "@playwright/test";
import userController from "../src/controller/user-controller";
import { data, data2 } from "../config/base-config";

test.describe("API CRUD Testing", () => {
  let createUser;
  let createUser2;

  test.beforeAll(async ({ request }) => {
    await userController.UserController();
  });

  test("List Users", async ({ request }) => {
    await userController.listUsers();
  });

  test("Create User", async ({ request }) => {
    const responseCreate = await userController.createUser(data);
    console.log("Response Body : ....." + (await responseCreate.body()));
    expect(responseCreate.status()).toBe(201);
    const responseJson = await responseCreate.json();

    expect(responseJson.name).toEqual(data.name);
    expect(responseJson.email).toEqual(data.email);
    expect(responseJson.gender).toEqual(data.gender);
    expect(responseJson.status).toEqual(data.status);
    expect(responseJson).toHaveProperty("name");
    expect(responseJson).toHaveProperty("email");
    expect(responseJson).toHaveProperty("gender");
    expect(responseJson).toHaveProperty("status");
  });

  test("Update User", async ({ request }) => {
    createUser = await userController.createUser(data);
    //console.log(await createUser.json());
    const createUserJson = await createUser.json();
    console.log("Created User ID: " + (await createUserJson.id));
    console.log("Created User Full Name: " + (await createUserJson.name));
    const updatedUser = await userController.updateUser(
      createUserJson.id,
      data2
    );
    //console.log(await updatedUser.json());
    expect(updatedUser.status()).toBe(200);
    const updatedUserJson = await updatedUser.json();
    console.log("Created User ID: " + (await updatedUserJson.id));
    console.log("Updated User Full Name: " + (await updatedUserJson.name));
  });

  test("Delete User", async ({ request }) => {
    createUser2 = await userController.createUser(data);
    const createUser2Json = await createUser2.json();
    console.log("Created User ID: " + (await createUser2Json.id));
    console.log("Created User Full Name: " + (await createUser2Json.name));
    const deletedUser = await userController.deleteUser(createUser2Json.id);
    expect(deletedUser.status()).toBe(204);
  });
});
