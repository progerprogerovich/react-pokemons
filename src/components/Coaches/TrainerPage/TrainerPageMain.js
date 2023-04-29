import Header from "../../Header/Header";
import TrainerPage from "./TrainerPage";
import Footer from "../../Footer/Footer";

function TrainerPageMain() {
    return (
        <>
        <Header/>
        <main className="content">
            <TrainerPage/>
        </main>
        <Footer/>
        </>
    )
}

export default TrainerPageMain;