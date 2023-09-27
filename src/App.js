import "./App.scss";
import Homepage from "./HomepageIndex";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdopterSignin from "./AdopterSignin";
import ShelterSignin from "./ShelterSignin";
import Directory from "./Directory";
import CreateAdopterAccount from "./CreateAdopterAccount";
import CreateShelterAccount from "./CreateShelterAccount";
import PetDetails from "./PetDetails";
import AddAPet from "./AddAPet";
import ShelterProfilePage from "./ShelterProfilePage";
import AdopterProfilePage from "./AdopterProfilePage";
import ShelterViewMyAnimals from "./ShelterViewMyAnimals";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/adopterSignin",
            element: <AdopterSignin />,
        },
        {
            path: "/ShelterSignin",
            element: <ShelterSignin />,
        },
        {
            path: "/Directory",
            element: <Directory />,
        },
        {
            path: "/CreateAdopterAccount",
            element: <CreateAdopterAccount />,
        },
        {
            path: "/CreateShelterAccount",
            element: <CreateShelterAccount />,
        },
        {
            path: "/PetDetails",
            element: <PetDetails />,
        },
        {
            path: "/AddAPet",
            element: <AddAPet />,
        },
        {
            path: "/ShelterProfilePage",
            element: <ShelterProfilePage />,
        },
        {
            path: "/AdopterProfilePage",
            element: <AdopterProfilePage />,
        },
        {
            path: "/ShelterViewMyAnimals/:shelterID",
            element: <ShelterViewMyAnimals />,
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
