import { createStore } from "redux"

const results = {
    page: "https://rickandmortyapi.com/api/character/?page=1",
    characters: []
}

const RickAndMorty = (state = results, action) => {
    switch (action.type) {
        case "Next":
            return {
                page: action.characters.info.next,
                characters: action.characters.results,
            }
        case "Prev":
            return {
                page: action.characters.info.prev,
                characters: action.characters.results,
            }
        default:
            return state
    }
    
};

export default createStore(RickAndMorty);