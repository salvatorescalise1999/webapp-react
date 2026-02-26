import { Outlet } from "react-router-dom";

//  import della navbar dentro MainHeader
import MainHeader from "../components/MainHeader";

//  import del loader
import Loader from "../components/Loader";

// TEMP var di settaggio caricamento
const isLoading = true;

const DefaultLayout = () => {

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