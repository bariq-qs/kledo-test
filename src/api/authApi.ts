import { LoginInput } from 'views/login';
import { defaultApi } from 'configs/api';
import { store } from 'redux/store';
import { setDataUser, setDefaultDataUser } from 'redux/user-store';


export const loginUserFn = async (user: LoginInput) => {
  try {
    const response = await defaultApi.post('authentication/login', user);
    if (response.data?.success) {
      store.dispatch(setDataUser(response.data.data))
    }
    return response.data;
  } catch (error: any) {
    throw error.response
  }
}

export const logoutUserFn = async () => {
  try {
    const response = await defaultApi.post('authentication/logout', {}, {
      headers: {
        Authorization: "Bearer " + store.getState().user.access_token
      }
    })
    if (response.data?.success) {
      store.dispatch(setDefaultDataUser())
    }
    return response.data;
  } catch (error: any) {
    throw error.response
  }
}


