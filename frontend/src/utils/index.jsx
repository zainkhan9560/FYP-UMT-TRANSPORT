const backendDomain = import.meta.env.VITE_BACKEND_URL;

const summaryApi = {
  signUp: {
    url: `${backendDomain}/api/auth/signup`,
    method: "post",
  },

  login: {
    url: `${backendDomain}/api/auth/login`,
    method: "post",
  },
};

export default summaryApi