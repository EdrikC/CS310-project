import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#recipes", label: "Recipes" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Reviews' },
    { value: '300+', label: 'Recipes' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Baked Mac and Cheese",
        price: "View Here",
        rating: "4.6",
    },
    {
        imgURL: shoe5,
        name: "Pasta Primavera",
        price: "View Here",
        rating: "4.8",
    },
    {
        imgURL: shoe6,
        name: "Egg Fried Rice",
        price: "View Here",
        rating: "4.7",
    },
    {
        imgURL: shoe7,
        name: "Smoothies",
        price: "View Here",
        rating: "5.0",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Quality Meals",
        subtext: "Find amazing recipes for any meal anytime."
    },
    {
        imgURL: shieldTick,
        label: "Seamless Experience",
        subtext: "Enjoy seamless browsing and reviews on recipes."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Recipes",
        links: [
            { name: "Mac and Cheese", link: "/" },
            { name: "Sweet and Sour Soup", link: "/" },
            { name: "Smoothies", link: "/" },
            { name: "Three Cheese Omlette", link: "/" },
            { name: "Baked Potatoes", link: "/" },
            { name: "Pasta Primavera", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@quickeatz.com", link: "mailto:customer@quickeatz.com" },
            { name: "+123-456-7899", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];