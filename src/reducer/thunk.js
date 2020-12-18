import { Fav } from "./actions"
export const FavThunk = (favItem, list) => {
    return (dispatch, getState) => {
        // const person = JSON.parse(localStorage.getItem("favoriteList")) || [];
        // person.push(favItem)
        localStorage.setItem("favoriteList", JSON.stringify([...list, favItem]))
        dispatch(Fav(favItem))
    }
        
}
