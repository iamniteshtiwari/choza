import axios from 'axios';
export const LOGIN_USER_KEY = 'CHOZA_LOGIN_USER_KEY';

/* var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'http://127.0.0.1:8000';
} */
const baseURL='http://127.0.0.1:8000';
const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    (config) => {
      if (config.requireToken) {
        const user = localStorage.getItem(LOGIN_USER_KEY)
          ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY))
          : null;
        config.headers.common["Authorization"] = user.token;
      }
      return config;
    },
    (err) => console.error(err)
  );

api.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		// if (error.response.status === 401) {
		// 	localStorage.removeItem(LOGIN_USER_KEY);
		// }

		return Promise.reject(error);
	}
);


export default class API {
      /////////////////////////
    // Users
    /////////////////////////
    signUp = async (username, email, password) => {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        console.log('password',password);
        const savedPost = await api
            .post("/user/signup/", formData)
            .then((response) => {
                console.log(response.data);
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return savedPost
    }
    signIn = async (email, password) => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const savedPost = await api
            .post("/user/signin/", formData)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return savedPost
    }
    getUsers = async (token) => {
        const posts = await api
            .get("/user/", {
                data: {},
                headers: {
                    "Authorization": token,
                }
            })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return posts
    }


    getPosts = params => {
        return api
            .get('/posts/', { params })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
    };
    addPost = postBody => {
        const formData = new FormData();

        for (const key in postBody) {
            formData.append(key, postBody[key]);
        }

        return api
            .post('/posts/add/', formData)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
    };
    deletePost = id => {
        return api.delete(`/posts/delete/${id}/`).catch(error => {
            throw new Error(error);
        });
    };
    getItems = async (page, category) => {
        const items = await api
            .get('/items/', { params: { category, page } })
            .then(response => {
                return response;
            })
            .catch(error => {
                throw new Error(error);
            });
        return items;
      };

    addCarts = async (item_id) => {
        const savedCart = await api
        .post(
            "/cart/add/",
            {
            item_id,
            quantity: 1,
            },
            { requireToken: true }
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw new Error(error);
        });
        return savedCart;
    };
    getCarts = async () => {
        const carts = await api
          .get("cart/", {
            requireToken: true,
          })
          .then((response) => {
            return response;
          })
          .catch((error) => {
            throw new Error(error);
          });
        return carts;
      };
      
}