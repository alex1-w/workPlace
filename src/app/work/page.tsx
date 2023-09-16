import Footer from "@/pageComponents/Footer/Footer";
import Header from "@/pageComponents/Header/Header";
import { PersonalAccount } from "@/pageComponents/UserProfile/PersonalAccount";
import { WorkPageComponent } from "@/pageComponents/WorkPageComponent/WorkPageComponent";

export default function WorkPage() {
    return (
        <>
            <Header />
            <WorkPageComponent />
            <Footer />
        </>
    );
}
