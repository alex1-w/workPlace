import profileIcon from "@/icons/profileIcon.png";
import { facebookIcon, inIcon, instagramIcon, twitterIcon } from "@/icons/icons"
import { IFreelancer } from "@/types/IFreelancer";
import { IOrder } from "@/types/IOrder";
import { IReview } from "@/types/IReview";
import image from "@/icons/profileImg.png";
import siteImage from "@/icons/siteImage.png";



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

export const reviews: IReview[] = [
    {
        rating: 3,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[3],
        type: 'positive'
        , id: 109
    },
    {
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[9],
        type: 'positive'
        , id: 108
    },
    {
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[1],
        type: 'positive'
        , id: 12
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[5],
        type: 'positive'
        , id: 122
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[6],
        type: 'positive'
        , id: 133
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[3],
        type: 'positive'
        , id: 13
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[0],
        type: 'positive'
        , id: 33
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[0],
        type: 'positive'
        , id: 234
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[0],
        type: 'positive'
        , id: 1786
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[0],
        type: 'positive'
        , id: 1656
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[0],
        type: 'positive'
        , id: 1
    },
    {
        rating: 2,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[1],
        type: 'negative'
        , id: 2
    },
    {
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[2],
        type: 'positive'
        , id: 3
    },
    {
        rating: 3,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[3],
        type: 'negative'
        , id: 4
    },
    {
        rating: 2,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[4],
        type: 'negative'
        , id: 5
    },
    {
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[5],
        type: 'positive'
        , id: 6
    },
    {
        rating: 5,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[6],
        type: 'positive'
        , id: 7
    },
    {
        rating: 4,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[7],
        type: 'positive'
        , id: 8
    },
    {
        rating: 3,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[7],
        type: 'positive'
        , id: 9
    },
    {
        rating: 2,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[7],
        type: 'negative'
        , id: 10
    },
    {
        rating: 1,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[7],
        type: 'negative'
        , id: 11
    },
    {
        rating: 2,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[1],
        type: 'negative'
        , id: 12
    },
    {
        rating: 1,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[4],
        type: 'negative'
        , id: 132
    },
    {
        rating: 2,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[6],
        type: 'negative'
        , id: 12432
    },
    {
        rating: 1,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[4],
        type: 'negative'
        , id: 13242
    },
    {
        rating: 1,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[7],
        type: 'negative'
        , id: 126324
    },
    {
        rating: 1,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[8],
        type: 'negative'
        , id: 1902
    },
    {
        rating: 1,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[1],
        type: 'negative'
        , id: 12
    },
    {
        rating: 1,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[7],
        type: 'negative'
        , id: 1222
    },
    {
        rating: 1,
        reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. ',
        user: freelancers[5],
        type: 'negative'
        , id: 2212
    },
]

export const works = [
    {
        title: "Верстка landing page",
        description: "Привет! Раз уж ты открыл этот work, то тебе нужен классный дизайн для твоего сайта. И да, поздравляю, ты по адресу! В UX/UI дизайне я уже 2 года и за это время успел поработать с очень крупными компаниями(КазМунайГаз, КБТУ, Hickmet travel, YLP delivery) и знаменитыми личностями (Ахметбек Нурсила, Артур Кривов). Создал для них очень крутые дизайны сайтов и не только. Хочешь и тебе сделаю? Выбери интересующий пакет и поехали!",
        img: siteImage,
        id: 1,
    },
    {
        title: "Сделать дизайн сайта-каталога и посадить на какой нибудь ко...",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
        img: siteImage,
        id: 2,
    },
    {
        title: "Сделать дизайн интернет-магазина",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
        img: siteImage,
        id: 3,
    },
    {
        title: "Продвижение instagram ",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
        img: siteImage,
        id: 4,
    },
    {
        title: "Срочно! Нужен веб дизайнер!",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
        img: siteImage,
        id: 5,
    },
];
