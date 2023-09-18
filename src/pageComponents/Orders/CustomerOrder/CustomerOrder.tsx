import styles from './CustomerOrder.module.scss';
import { Order } from '@/components/Order/Order';
import { FC } from "react"
import { orders } from '@/links/orders';

const order = orders[0]

const CustomerOrder: FC = () => {
    // console.log(orders[0]);
    // console.log(342342);
    
    return (
        <main className={styles.main}>
            <Order
                category={order.category}
                createdAt={order.createdAt}
                description={order.description}
                documents={order.documents}
                id={order.id}
                owner={order.owner}
                price={order.price}
                timeFrame={order.timeFrame}
                title={order.title}
                offers={order.offers}
            />
        </main>
    )
};

export default CustomerOrder;
