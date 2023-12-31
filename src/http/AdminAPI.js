import {$authHost, $host} from "./index";
import {jwtDecode} from 'jwt-decode'

export const registration = async (email, password, firstname, lastname) => {
    const {data} = await $host.post('api/admin/registration', {
        email,
        password,
        firstname,
        lastname
    })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/admin/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/admin/registration')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const postReview = async (name, text) => {
    const {data} = await $host.post('api/user/review', {name, text})
    return data
}

export const getReviews = async () => {
    const {data} = await $host.get('api/user/reviews')
    return data
}

export const postOrder = async (name, phone, text) => {
    const {data} = await $host.post('api/user/order', {name, phone, text})
    return data
}

export const getOrders = async () => {
    const {data} = await $host.get('api/user/orders')
    return data
}




