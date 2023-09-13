import styles from "./TopFreelancers.module.scss";
import { FC } from "react";
import profileIcon from "@/icons/profileIcon.png";
import FreelancerCard from "@/components/FreelancerCard/FreelancerCard";
import LinkButton from "@/components/UI/LinkButton/LinkButton";

const freelancers = [
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
];

const TopFreelancers = () => {
    return (
        <section className={styles.main}>
            <h2>Топ фрилансеров</h2>
            <div>
                {freelancers.map((item) => (
                    <FreelancerCard
                        countProject={item.countProject}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        profession={item.profession}
                        rating={item.rating}
                        key={item.id}
                    />
                ))}
                <LinkButton
                    link="/"
                    name="Посмотреть всех ТОП фрилансеров"
                    styleVariant="bigLink"
                />
            </div>
        </section>
    );
};

export default TopFreelancers;
