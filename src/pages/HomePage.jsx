import Footer from "../components/Footer";
import Header from "../components/Header";
import Boxtrain from "../components/Boxtrain";
import Boxworld from "../components/Boxworld";

function HomePage()
{
    return (
        <>
            <Header />
            <div className="mt-20"> {/* Ajout de marge en haut */}
        <Boxtrain />
      </div>
      <div className="mt-20"> {/* Ajout de marge en haut */}
        <Boxworld />
      </div>
            <Footer />
        </>
    )
}

export default HomePage;