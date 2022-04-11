import Images from "../components/images"
import Latarnia from "../images/latarnia.png"
import Motylarnia from "../images/motylarnia.jpg"
import OceanPark from "../images/ocean-park.png"
import ParkMiniatur from "../images/park-miniatur.png"
import Plaza from "../images/plaza.jpeg"
import Woda from "../images/woda.jpg"
import R10 from "../images/r10.jpg"
import PlacZabaw from "../images/plac-zabaw.jpeg"
import Kuchnia from "../images/kuchnia.jpg"
import Parking from "../images/parking.jpg"
import fb from "../images/fb.png"
import insta from "../images/insta.png"

const atractions = [
    {image:Latarnia, title:"LATARNIA MORSKA W ROZERWIU",link:"http://www.tpnmm.pl/latarnie/rozewie"},
    {image:Motylarnia,title:"MOTYLARNIA W ROZEWIU",link:"https://motylarnia-rozewie.pl/"},
    {image:OceanPark,title:"OCEAN PARK WE WŁADYSŁAWOWIE",link:"http://www.oceanpark.pl/"},
    {image:Plaza,title:"PLAŻA",link:"https://www.rozewie.pl/atrakcje/plaza-w-rozewiu"},
    {image:ParkMiniatur,title:"PARK MINIATUR LATARNI MORSKICH I DOM DO GÓRY NOGAMI",link:"http://www.blizapark.pl/"},
    {image:Woda,title:"SPORTY WODNE",link:"https://www.karwia.com/atrakcje/wodne-atrakcje-baltyku-940"},
    {image:R10,title:"MALOWNICZE TRASY ROWEROWE", link:"https://gmina.puck.pl/pomorskie-trasy-rowerowe-o-znaczeniu-miedzynarodowym-r10-i-wislana-trasa-rowerowa-r9/?fbclid=IwAR1V_u4xplOEN_WcBItHMdUfxo7QBhMZHF52mCqbgk4AqSNlKV4i3WJB2UQ"}
];

const contact = ["D.W. Nawigator","ul. Nowa 70","80-105 Ostrowo","kom. 506-211-876"];

const tabs = [
    {key:'rooms',title:'Pokoje',photos:Images.ROOMS},
    {key:'hall',title:'Hol',photos:Images.HALL},
    {key:'kitchen',title:'Kuchnia',photos:Images.KITCHEN},
    {key:'surroundings',title:'Otoczenie',photos:Images.SURROUNDINGS}
];

const cards=[
    {image:PlacZabaw,title:"PLAC ZABAW",text:"Dla najmłodszych atrakcja zapewniona w formie kolorowego placu zabaw"},
    {image:Kuchnia,title:"WSPÓLNA KUCHNIA",text:"Dla gości dostępna jest w pełni wyposażona kuchnia do codziennego użytku"},
    {image:Parking,title:"PARKING",text:"Dla użytku gości posiadamy darmowy parking przy budynku."}
];

const socials = [
    {signature:fb,link:"https://www.facebook.com/Dom-wczasowy-Nawigator-112227893780906", alt:"fb"},
    {signature:insta,link:"https://www.instagram.com/wczasy_nawigator/", alt:"insta"}
]

const Config = {
    CONTACT:contact,
    TABS:tabs,
    CARDS:cards,
    ATRACTIONS:atractions,
    SOCIALS:socials
}

export default Config;