import { Outlet } from "react-router-dom";

// import hook custom del contesto globale
import { useGlobal } from "../contexts/GlobalContext";

//  import della navbar dentro MainHeader
import MainHeader from "../components/MainHeader";

//  import del loader
import Loader from "../components/Loader";


const DefaultLayout = () => {

    // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
    const { isLoading } = useGlobal();

    return (

        <>
            <MainHeader />

            <main className="container">

                <Outlet />

            </main>

            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout