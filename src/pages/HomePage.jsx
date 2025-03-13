import Login from "../components/Login";
import Settings from "../components/Settings";
import Uploader from "../components/Uploader";
import { decodeToken } from 'react-jwt';

function HomePage({userData})
{
    var returned;

    if(userData)
    {
        var decodedUserData = decodeToken(userData);

        returned = 
            <>
                <h1 className="font-inter font-medium cursor-default text-7xl m-10 text-indigo-300">Connected as<p className="text-white">{decodedUserData.username}</p></h1>
                <div className="flex my-32">
                    <Uploader userData={userData} />
                    <Settings userData={userData} />
                </div>
            </>
    }
    else{ returned = <Login /> }

    return (
    <div>
        {returned}
    </div>);
}

export default HomePage;