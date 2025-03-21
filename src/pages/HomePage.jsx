import Footer from "../components/Footer";
import Header from "../components/Header";
import Boxtrain from "../components/Boxtrain";
import Boxworld from "../components/Boxworld";
import BoxGraph from "../components/BoxGraph";
import Box_profile from "../components/Box_profile";
import Progress from "../components/Progress";
function HomePage()
{
    return (
        <>
            <Header />
            <div className="mt-20"> {/* Ajout de marge en haut */}
              <Box_profile />
              <Progress/>
            </div>
            <div className="mt-20"> {/* Ajout de marge en haut */}
        <Boxtrain />
      </div>
      <div className="mt-20"> {/* Ajout de marge en haut */}
        <BoxGraph />
      </div>
      <div className="mt-20"> {/* Ajout de marge en haut */}
        <Boxworld />
      </div>
            <Footer />
        </>
    )
}

export default HomePage;