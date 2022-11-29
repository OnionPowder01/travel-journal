import mountFuji from '../images/photo-1589308078059-be1415eab4c3.png'
import sydneyOpera from '../images/Sydney_Opera_House_Front_angle.jpg'
import geiranger from '../images/Geiranger_fjord.jpg'


const arrayData =  
[
    {
        title: "Mount Fuji",
        location: "JAPAN",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: `${mountFuji}`
    },

    {
        title: "Sydney Opera House",
        location: "AUSTRALIA",
        googleMapsUrl: "https://goo.gl/maps/TPGinRqZ6SGjcTP19",
        startDate: "27 May, 2021",
        endDate: "08 Jun, 2021",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        imageUrl: `${sydneyOpera}`
    },

    {
        title: "Geirangerfjord",
        location: "NORWAY",
        googleMapsUrl: "https://goo.gl/maps/fjzSyHaZUJemgpzL9",
        startDate: "01 Oct, 2021",
        endDate: "18 Nov, 2021",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        imageUrl: `${geiranger}`
    }
]

export default arrayData