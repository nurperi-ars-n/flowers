

export function setLocal(key, value) {
    return localStorage.setItem(key, JSON.stringify(value) )
}


export function getLocal(key) {
    return JSON.parse(localStorage.getItem(key))
}

export function removeLocal(key) {
    return localStorage.removeItem(key)
}