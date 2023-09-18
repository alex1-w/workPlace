import styles from './Projects.module.scss'
import { IOrder } from '@/types/IOrder'
import { freelancers, myProjects } from '@/links/links.data'
import { OrderCard } from '@/components/OrderCard/OrderCard'
import { FilterBlock } from './FilterBlock/FilterBlock'

export const Projects = () => {
    return (
        <section className={styles.projectsBlock} id='projects'>
            <div>
                <h3>{myProjects.length} - проектов по дизайну</h3>
                <FilterBlock />
            </div>

            <div className={styles.projects}>
                {myProjects.map(project => (
                    <OrderCard
                        description={project.description}
                        documents={project.documents}
                        timeFrame={project.timeFrame}
                        category={project.category}
                        createdAt={project.createdAt}
                        id={project.id}
                        offers={project.offers}
                        owner={project.owner}
                        price={project.price}
                        title={project.title}
                        key={project.id}
                    />
                ))}
            </div>
        </section>
    )
}
