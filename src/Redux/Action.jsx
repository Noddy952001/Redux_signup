export const Email = "Email"
export const Password = "Password"
export const Loading = "Loading"
export const Success = "Success"
export const Error = "Error"


export const email = (payload) => ({
    type :Email,
    payload
})

export const password = (payload) => ({
    type : Password,
    payload
})

export const loading = (payload) => ({
    type : Loading,
    payload
})

export const success = (payload) => ({
    type : Success,
    payload
})

export const error = (payload) => ({
    type : Error,
    payload
})

