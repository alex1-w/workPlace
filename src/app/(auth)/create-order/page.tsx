import Footer from "@/pageComponents/Footer/Footer";
import Header from "@/pageComponents/Header/Header";
import { Chat } from "@/pageComponents/Chat/Chat";
import { CreateWork } from "@/pageComponents/CreateWork/CreateWork";
import CreateOrder from "@/pageComponents/CreateOrder/CreateOrder";

export default function CreateOrderComponent() {
    return (
        <>
            <Header />
            <CreateOrder />
            <Footer />
        </>
    );
}
