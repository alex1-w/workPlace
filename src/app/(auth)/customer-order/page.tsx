import Footer from "@/pageComponents/Footer/Footer";
import Header from "@/pageComponents/Header/Header";
import CustomerOrder from "@/pageComponents/Orders/CustomerOrder/CustomerOrder";

export default function Home() {
    return (
        <>
            <Header />
            <CustomerOrder />
            <Footer />
        </>
    );
}
