
const results = {
    page: "https://rickandmortyapi.com/api/character/?page=1",
    characters: [],
    favorite: JSON.parse(localStorage.getItem("favoriteList")),
    showFavorites: false,
    search: "",
}

const RickAndMorty = (state = results, action) => {
    localStorage.setItem("favoriteList", JSON.stringify(state.favorite))
    console.log(state.favorite)
    switch (action.type) {
        case "Person":
            return {
                page: state.page,
                characters: action.persons.results,
                favorite: state.favorite,
                showFavorites: state.showFavorites,
                search: state.search,
            }
        case "Next":
            return {
                page: action.characters,
                characters: action.characters.results,
                favorite: state.favorite,
                showFavorites: state.showFavorites,
                search: state.search,
            }
        case "Prev":
            return {
                page: action.characters,
                characters: action.characters.results,
                favorite: state.favorite,
                showFavorites: state.showFavorites,
                search: state.search,
            }
        case "Fav":
            return {
                page: state.page,
                characters: state.characters,
                favorite: [...state.favorite, action.favList],
                showFavorites: state.showFavorites,
                search: state.search,
            }
        case "RemFav":
            return {
                page: state.page,
                characters: state.characters,
                favorite: state.favorite.filter(character => character.name !== action.remItem),
                showFavorites: state.showFavorites,
                search: state.search,
            }
        case "Show":
            return {
                page: state.page,
                characters: state.characters,
                favorite: state.favorite,
                showFavorites: action.condition,
                search: state.search,
            }
        case "Search":
            return {
                page: state.page,
                characters: state.characters,
                favorite: state.favorite,
                showFavorites: state.showFavorites,
                search: action.item,
            }
        default:
            return state
    }
    
};

export default RickAndMorty;