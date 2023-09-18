import { choosePerson } from "./choosePerson";
import { chooseSettings } from "./chooseSetings";
import { offerTabs } from "./tabs";

export const tabItems = document.querySelectorAll(".tabs-offer__item");


export const initOffer = ()=> {
    offerTabs()
    chooseSettings()
    choosePerson()
}