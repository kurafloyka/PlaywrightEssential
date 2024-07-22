import userController from "../src/controller/user-controller";

export const login = async (email: string, password: string) => {
  const body = { email: email, password: password };
  const res = await userController.listUsers();
  //return res.body.token;
  //let  token = await login(config.email, config.password);
};//assert ekleme gibi
