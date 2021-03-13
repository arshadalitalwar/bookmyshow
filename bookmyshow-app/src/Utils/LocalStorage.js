export function loadData(key) {
    return localStorage.getItem(key)
}

export function saveData(key, item) {
    return localStorage.setItem(key, JSON.stringify(item))
}