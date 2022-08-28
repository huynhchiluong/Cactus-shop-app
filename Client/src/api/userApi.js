import axiosClient from "./axiosClient";

const userApi = {
  login: (payload) => {
    const url = "/users/login";
    return axiosClient.post(url, payload);
  },

  getAll: () => {
    const url = "users";
    return axiosClient.get(url,{
        mode: 'no-cors' 
      })
  }
};

export default userApi;
