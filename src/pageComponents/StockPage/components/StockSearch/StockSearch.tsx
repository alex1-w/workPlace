import { Field } from "@/components/UI/Field/Field";
import styles from "./StockSearch.module.scss";
import { FC } from "react";
import LinkButton from "@/components/UI/LinkButton/LinkButton";
import { arrowDownIcon } from "@/icons/icons";
import { jobLinks } from "@/links/links.data";


const StockSearch: FC = () => {
    return (
        <section className={styles.main}>
            <div className={styles.wrapper}>
                <div>
                    <h1>
                        Ищите и находите подходящую работу среди <span>10,000+</span>
                        проектов и покажите на что Вы способны!
                    </h1>
                </div>
                <div className={styles.searchBlock}>
                    <Field placeholder="Какую работу ищeте?" type="text" />
                    <div className={styles.searchBlock__tags}>
                        {jobLinks.map((item) => (
                            <LinkButton
                                link={item.link}
                                name={item.title}
                                styleVariant="tagLink"
                                key={item.title}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h3>
                        Ниже все заказы по <span>дизайну</span>
                    </h3>
                    {arrowDownIcon}
                </div>
            </div>
        </section>
    );
};

export default StockSearch;
