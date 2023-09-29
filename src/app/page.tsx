import { QuestionsProvider } from "@/pageComponents/CreateWork/QuestionsProvider";
import Footer from "@/pageComponents/Footer/Footer";
import Header from "@/pageComponents/Header/Header";
import HomePage from "@/pageComponents/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <QuestionsProvider>
        <Header />

        <HomePage />

        <Footer />
      </QuestionsProvider>
    </>
  );
}
