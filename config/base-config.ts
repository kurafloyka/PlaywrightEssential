import { faker } from "@faker-js/faker";

export const base = {
    baseUrl: 'https://gorest.co.in/public/v2/',
    token:'784eade1eb774cbd2fe70cf4f2c61d790d6c46f5e2f83158243f931a13c11f59',
    email: "xxx@mail.com",
    password: "xxx123!"
  };


  export const data = {
    name: faker.person.fullName(),
    gender: faker.person.sex(),
    email: faker.internet.email(),
    status: "active",
  };

  export const data2 = {
    name: faker.person.fullName(),
    gender: faker.person.sex(),
    email: faker.internet.email(),
    status: "active",
  };