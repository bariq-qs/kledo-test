import { defaultApi } from 'configs/api';
import { store } from 'redux/store';
import { ShippingCompsInput } from 'views/shipping/form';

export const getShippingCompsFn = async (search: string) => {
  try {
    const response = await defaultApi.get(`finance/shippingComps?search=${search}`, {
      headers: {
        Authorization: "Bearer " + store.getState().user.access_token
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response
  }
}

export const getDetailShippingCompsFn = async (id: string) => {
  try {
    const response = await defaultApi.get(`finance/shippingComps/${id}`, {
      headers: {
        Authorization: "Bearer " + store.getState().user.access_token
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response
  }
}

export const createShippingCompsFn = async (payload: ShippingCompsInput) => {
  try {
    const response = await defaultApi.post(`finance/shippingComps`, payload, {
      headers: {
        Authorization: "Bearer " + store.getState().user.access_token
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response
  }
}

export const updateShippingCompsFn = async (id: string, payload: ShippingCompsInput) => {
  try {
    const response = await defaultApi.put(`finance/shippingComps/${id}`, payload, {
      headers: {
        Authorization: "Bearer " + store.getState().user.access_token
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response
  }
}

export const deleteShippingCompsFn = async (id: string) => {
  try {
    const response = await defaultApi.delete(`finance/shippingComps/${id}`, {
      headers: {
        Authorization: "Bearer " + store.getState().user.access_token
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response
  }
}