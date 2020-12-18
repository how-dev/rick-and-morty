export const Person = (persons) => ({
    type: "Person",
    persons,
})

export const Next = (characters) => ({
    type: "Next",
    characters,
})

export const Prev = (characters) => ({
    type: "Prev",
    characters,
})

export const Fav = (favList) => ({
    type: "Fav",
    favList,
})

export const RemFav = (remItem) => ({
    type: "RemFav",
    remItem,
})

export const ShowFav = (condition) => ({
    type: "Show",
    condition,
})

export const Search = (item) => ({
    type: "Search",
    item,
})
