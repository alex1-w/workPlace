import profileIcon from "@/icons/profileIcon.png";
import { facebookIcon, inIcon, instagramIcon, twitterIcon } from "@/icons/icons"
import { IFreelancer } from "@/types/IFreelancer";
import { IOrder } from "@/types/IOrder";

export const topCategories = [
    {
        title: 'Тексты и переводы',
        link: '/'
    },
    {
        title: 'Разработка',
        link: '/'
    },
    {
        title: 'Дизайн',
        link: '/'
    },
    {
        title: 'Аудио, видео монтаж',
        link: '/'
    },
    {
        title: 'Соцсети и реклама',
        link: '/'
    },
    {
        title: 'Бизнес и жизнь',
        link: '/'
    },
    {
        title: 'SEO и оптимизация',
        link: '/'
    },
]


export const aboutLinks = [
    {
        title: 'О нас',
        link: '/'
    },
    {
        title: 'Как Это Работает',
        link: '/'
    },
    {
        title: 'Политика Приватности',
        link: '/'
    },
    {
        title: 'Правила Пользования ',
        link: '/'
    },
    {
        title: 'Пресса о нас',
        link: '/'
    },
]

export const supportLinks = [
    {
        title: 'Контакты',
        link: '/'
    },
    {
        title: 'Политика Безопасности',
        link: '/'
    },
    {
        title: 'FAQ',
        link: '/'
    },
]

export const socialsLinks = [
    {
        title: 'facebook',
        link: '/',
        img: facebookIcon
    },
    {
        title: 'twitter',
        link: '/',
        img: twitterIcon
    },
    {
        title: 'instagram',
        link: '/',
        img: instagramIcon
    },
    {
        title: 'in',
        link: '/',
        img: inIcon
    },
]

export const freelancers: IFreelancer[] = [
    {
        name: "Марина Королёва",
        profession: "Разработчик PHP",
        countProject: 44,
        rating: 4,
        img: profileIcon,
        id: 1,
    },
    {
        name: "Семён Сергеев",
        profession: "Разработчик PHP",
        countProject: 44,
        rating: 4,
        img: profileIcon,
        id: 2,
    },
    {
        name: "Ангелина Сорокина",
        profession: "Разработчик PHP",
        countProject: 44,
        rating: 4,
        img: profileIcon,
        id: 3,
    },
    {
        name: "Марина Королёва",
        profession: "Разработчик PHP",
        countProject: 44,
        img: profileIcon,
        rating: 4,
        id: 4,
    },
    {
        name: "Марина Королёва",
        profession: "Разработчик PHP",
        img: profileIcon,
        countProject: 44,
        rating: 4,
        id: 5,
    },
    {
        name: "Марина Королёва",
        profession: "Разработчик PHP",
        img: profileIcon,
        countProject: 44,
        rating: 4,
        id: 6,
    },
    {
        name: "Марина Королёва",
        profession: "Разработчик PHP",
        img: profileIcon,
        countProject: 44,
        rating: 4,
        id: 7,
    },
    {
        name: "Марина Королёва",
        profession: "Разработчик PHP",
        img: profileIcon,
        countProject: 44,
        rating: 4,
        id: 8,
    },
    {
        name: "Марина Королёва",
        profession: "Разработчик PHP",
        img: profileIcon,
        countProject: 44,
        rating: 4,
        id: 9,
    },
    {
        name: "Марина Королёва",
        profession: "Разработчик PHP",
        img: profileIcon,
        countProject: 44,
        rating: 4,
        id: 10,
    },
];



export const myProjects: IOrder[] = [
    {
        createdAt: '2.11.2019',
        offers: 3,
        owner: freelancers[0],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 2,
        category: 'design'
    },

    {
        createdAt: '2.11.2019',
        offers: 3,
        owner: freelancers[1],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 1,
        category: 'design'
    },
    {
        createdAt: '2.11.2019',
        offers: 3,
        owner: freelancers[2],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 3,
        category: 'design'
    },
    {
        createdAt: '2.11.2019',
        offers: 3,
        owner: freelancers[3],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 4,
        category: 'design'
    },
    {
        createdAt: '11.03.2022',
        offers: 3,
        owner: freelancers[4],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 5,
        category: 'design'
    },
    {
        createdAt: '11.03.2022',
        offers: 3,
        owner: freelancers[5],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 6,
        category: 'design'
    },
    {
        createdAt: '11.03.2022',
        offers: 3,
        owner: freelancers[6],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 7,
        category: 'design'
    },
    {
        createdAt: '11.03.2022',
        offers: 3,
        owner: freelancers[7],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 8,
        category: 'design'
    },
    {
        createdAt: '11.03.2022',
        offers: 3,
        owner: freelancers[8],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 1,
        category: 'design'
    },
    {
        createdAt: '11.03.2022',
        offers: 3,
        owner: freelancers[9],
        price: 2000,
        title: 'Нужно сделать Дизайн сайта по тематике авто',
        id: 10,
        category: 'design'
    },

]

export const jobLinks = [
    {
        title: "Тексты и переводы ",
        link: "/",
    },
    {
        title: "Разработка",
        link: "/",
    },
    {
        title: "Дизайн",
        link: "/",
    },
    {
        title: "Аудио, видео монтаж ",
        link: "/",
    },
    {
        title: "SEO и оптимизация",
        link: "/",
    },
    {
        title: "Бизнес и жизнь",
        link: "/",
    },
    {
        title: "Соцсети и реклама",
        link: "/",
    },
];