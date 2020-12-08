import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Next } from "../../../reducer/actions"

import Card from "../card/card"

const Home = () => {
    const dispatch = useDispatch();
    const Page = useSelector(state => state.page)
    const Characters = useSelector(state => state.characters)

    const InitialPerson = (data) => {
        dispatch(Next(data))
    } 
    useEffect(() => {
        axios.get(Page)
        .then(res => InitialPerson(res))
    }, [])

    return (
        Characters.map((elt, index) => <Card key={index} name={elt.name} type={elt.type} image={elt.image} location={elt.location.name} firstLetter={elt.name[0]}/>)
    )
};

export default Home;
