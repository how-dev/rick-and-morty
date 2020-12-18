import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Person } from "../../../reducer/actions"

import Card from "../card/card"
import FavoriteCard from "../card/favoriteCard"
import Buttons from "./buttons"

const Home = () => {
    const dispatch = useDispatch();

    const Page = useSelector(state => state.favorites.page)
    const Characters = useSelector(state => state.favorites.characters)
    const show = useSelector(state => state.favorites.showFavorites)
    const favoriteList = useSelector(state => state.favorites.favorite)
    const search = useSelector(state => state.favorites.search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const InitialPerson = (data) => {
        dispatch(Person(data))
    }
    useEffect(() => {
        axios.get(Page)
        .then(res => InitialPerson(res.data))
    }, [InitialPerson, Page])

    if(show) {
        if(favoriteList.length > 0) {
            return favoriteList.map((elt, index) => <FavoriteCard key={index} name={elt.name} image={elt.image}/>)
        } else {
            return <h1 style={{textAlign: "center"}}>Nada aqui... Que tal escolher alguns personagens?</h1>
        }
    } else {
        if(Characters) {
            return (
                <>
                    <Buttons />
                    {search === "" ? Characters.map((elt, index) => <Card key={index} name={elt.name} type={elt.type} image={elt.image} location={elt.location.name} firstLetter={elt.name[0]}/>) : Characters.filter(elt => elt.name === search).map((elt, index) => <Card key={index} name={elt.name} type={elt.type} image={elt.image} location={elt.location.name} firstLetter={elt.name[0]}/>)}
                </>
            )
        } else {
            return <span></span>
        }
    }
};

export default Home;
