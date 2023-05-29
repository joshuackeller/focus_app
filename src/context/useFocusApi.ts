import axios from "axios";

const useFocusApi = () => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  if (token) {
    return axios.create({
      headers: {
        Authorization: token,
      },
    });
  } else {
    return axios.create({});
  }
};

export default useFocusApi;
