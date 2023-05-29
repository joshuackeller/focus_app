import axios from "axios";

const useFocusApi = () => {
  const token = localStorage.getItem("token");
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
