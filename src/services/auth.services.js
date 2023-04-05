import service from "./config.services";
//routes from the backend to do exactly what their name says
const signupService = (newUser) => {
  return service.post("/user/create", newUser);
};

const loginService = (userCredentials) => {
  return service.post("/user/login", userCredentials);
};

const userService = (userEmail) => {
  return service.get(`/user/${userEmail}`);
};

const verifyService = () => {
  return service.get("/user/verify");
};

export { signupService, loginService, userService, verifyService };
