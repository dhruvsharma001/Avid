import { Timestamp } from "firebase/firestore"
import moment from "moment"
export function firebaseDateToLocalString(date: Timestamp) {
    if (!date) return ""
    const d = moment(date.toDate())
    return d.toLocaleString()
}