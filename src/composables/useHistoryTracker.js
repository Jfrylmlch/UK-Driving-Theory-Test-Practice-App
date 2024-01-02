import { reactive } from "vue"
import { useLocalStorage } from "./useLocalStorage";

const history = reactive([])
const { writeStorageData } = useLocalStorage()

function addHistoryItem(item){
    history.push(item)
    writeStorageData("history", history)
}

export function useHistoryTracker(){
    return {
        history,
        addHistoryItem,
    }
}