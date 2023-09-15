import styles from "./TopFreelancers.module.scss";
import FreelancerCard from "@/components/FreelancerCard/FreelancerCard";
import LinkButton from "@/components/UI/LinkButton/LinkButton";
import { freelancers } from "@/links/links.data";

const TopFreelancers = () => {
    return (
        <section className={styles.main}>
            <h2>Топ фрилансеров</h2>
            <div>
                {freelancers.slice(0,8).map((item) => (
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
