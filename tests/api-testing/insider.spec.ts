import test, { expect } from "@playwright/test";
import petController from "../../src/controller/pet-controller";
import { petInfo } from "../../src/insider-test-data";

test.describe("Insider CRUD Apis for pet", () => {
  test.beforeAll(async ({ request }) => {
    await petController.PetController();
  });

  test("Create Pet", async ({ request }) => {
    const data = petInfo;
    console.log("Pet ID: " + data.id);
    data.id = Math.floor(Math.random() * 1000000);

    console.log("Pet ID: " + data.id);
    const responseCreate = await petController.createPet(data);
    expect(responseCreate.status()).toBe(200);
  });

  test("Read Created Pet", async ({ request }) => {
    const data = petInfo;
    console.log("Pet ID: " + data.id);
    data.id = Math.floor(Math.random() * 1000000);

    console.log("Pet ID: " + data.id);
    const responseCreate = await petController.createPet(data);
    expect(responseCreate.status()).toBe(200);

    const responseRead = await petController.readPet(data.id);
    expect(responseRead.status()).toBe(200);
  });

  test("Update Created Pet", async ({ request }) => {
    const data = petInfo;
    console.log("Pet ID: " + data.id);
    data.id = Math.floor(Math.random() * 1000000);

    console.log("Pet ID: " + data.id);
    const responseCreate = await petController.createPet(data);
    expect(responseCreate.status()).toBe(200);

    data.name = "Updated Doggie";
    const responseUpdate = await petController.updatePet(data);
    expect(responseUpdate.status()).toBe(200);
  });


  test("Delete Created Pet", async ({ request }) => {
    const data = petInfo;
    console.log("Pet ID: " + data.id);
    data.id = Math.floor(Math.random() * 1000000);

    console.log("Pet ID: " + data.id);
    const responseCreate = await petController.createPet(data);
    expect(responseCreate.status()).toBe(200);

    const responseDelete = await petController.deletePet(data.id);
    expect(responseDelete.status()).toBe(200);
  });
});
