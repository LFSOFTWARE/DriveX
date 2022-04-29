import types from './types'

export function updatUser(user) {
    return { type: types.UPDATE_USER, user }
}

export function createUser() {
    return { type: types.CREATE_USER }
}