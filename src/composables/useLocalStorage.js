import { isRef, isReactive } from "vue" 
const retrieveArray = function (name, arr) {
    const tempArr = (JSON.parse(localStorage.getItem(name)) || []);
    if (tempArr.length) {
        arr.length = 0
        arr.push(...tempArr);
    }
}

function retrieveStorageData(name, v) {
    const data = localStorage.getItem(name)
    if (/^\[.*\]$/.test(data)) {retrieveArray(name, v); return}
    if (/^\d+$/.test(data)) { v.value = parseFloat(data) || 0; return}
    v.value = data; return
}

function removeStorageData(name) {
    localStorage.removeItem(name)
    return
}

function writeStorageData(name, item) {
    if (isRef(item)) {
        localStorage.setItem(name, item.value)
        return
    }
    if (isReactive(item)) {
        localStorage.setItem(name, JSON.stringify(item))
        return
    }
    localStorage.setItem(name, item.value)
    return
}

export function useLocalStorage(){
    return {
        retrieveStorageData,
        removeStorageData,
        writeStorageData
    }
}