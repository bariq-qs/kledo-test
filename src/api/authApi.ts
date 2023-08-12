import { LoginInput } from 'views/login';
import { defaultApi } from 'configs/api';

export const loginUserFn = async (user: LoginInput) => {
  try {
    const response = await defaultApi.post('authentication/login', user);
    console.log('response login', response);
    return response.data;
  } catch (error: any) {
    console.log('what err', error)
    throw error.response
  }
};