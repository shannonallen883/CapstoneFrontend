import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ShelterViewMyAnimals.scss";
import APIURL from "./APIURL";
import { Buffer } from "buffer";

const ShelterViewMyAnimals = () => {
    const [pets, setPets] = useState([]);
    const [shelter, setShelter] = useState(null);
    const params = useParams();
    console.log("PARAMS: ", params.shelterID);
    useEffect(() => {
        const getAllPets = async () => {
            //gets pets from all shelters
            const response = await fetch(`${APIURL}/availablePets`);
            const data = await response.json();
            console.log("All Pets Data: ", data);
            setPets(data.availablePets);
            setShelter({
                name: "All Available Pets",
            });
        };

        const getShelterPets = async () => {
            //gets the pets that go with the shelter that is chosen
            const response = await fetch(`${APIURL}/petShelter`, {
                method: "POST",
                body: JSON.stringify({
                    shelterID: params.shelterID,
                }),
                headers: {
                    "content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log("data", data);
            setPets(data.availablePets);
            setShelter(data.shelter);
        };
        if (params.shelterID === "0") {
            console.log("Get all pets");
            getAllPets();
            // get all the pets
        } else {
            // get the pets from the shelter where id===shelterID
            getShelterPets();
        }
    }, []);
    // const searchPets = async (event) => {
    //     event.preventDefault();

    //     const response = await fetch(`${APIURL}/petsSearch`, {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             query: event.target.elements.searchInput.value,
    //         }),
    //         method: "POST",
    //     });

    //     const data = await response.json();
    //     setPets(data.Pets);
    // };
    return (
        //remove container div & h1 - does that apply to me?
        <div id="ShelterViewMyAnimals">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Link to="/">
                            <h4>Find Your Furever Friend</h4>
                        </Link>
                    </div>
                    <div className="col-4" id="MyProfile">
                        <Link to="/ShelterProfilePage" id="MyProfile">
                            <h6>My Profile</h6>
                        </Link>
                    </div>
                </div>
                {/* end of first row */}
                <div className="row">
                    <div className="col">
                        <h1>
                            {shelter?.name ? shelter.name : "Hold Please..."}
                        </h1>
                    </div>
                </div>
                {/* end of Pawsitivitea row */}

                <button>
                    <Link to="/AddAPet">Add New Pet</Link>
                </button>
                <div id="pets" className="row">
                    {!pets ? (
                        <p>No pets yet...</p>
                    ) : (
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Breed</th>
                                    <th>County</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pets.map((eachPet) => {
                                    // 28 Make the Post component show for each post from the DB
                                    //and pass the post info in a prop called data

                                    return (
                                        <tr id="RequiredInfo" key={eachPet.id}>
                                            <td>
                                                {eachPet.image ? (
                                                    <img
                                                        src={`data:${
                                                            eachPet.imageType
                                                        };base64,${Buffer.from(
                                                            eachPet.image.data
                                                        ).toString("base64")}`}
                                                        style={{
                                                            maxWidth: "100px",
                                                        }}
                                                        alt="pet"
                                                    />
                                                ) : null}
                                            </td>
                                            <td>
                                                {/* .name is the value in the object returned from database */}
                                                {eachPet.name}
                                            </td>
                                            <td>{eachPet.age}</td>
                                            <td>{eachPet.breed}</td>
                                            <td>{eachPet.county}</td>
                                            <td>{eachPet.description}</td>
                                            {/* <div className="col-2">
                                        <h6>Adoption status</h6>
                                    </div> */}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        // 27 Loop over each of the posts
                    )}
                </div>

                {/* end of RequiredInfo row */}
                <hr />

                {/* end of AnimalInfo row */}
            </div>
            {/* end of container-fluid */}
        </div>
    );
};

export default ShelterViewMyAnimals;

{
    /* <div className="row" id="RequiredInfo">
                    <div className="col"></div>
                    <div className="col-1">
                        <h6>Name</h6>
                    </div>
                    <div className="col-1">
                        <h6>Age</h6>
                    </div>
                    <div className="col-2">
                        <h6>Breed (if known)</h6>
                    </div>
                    <div className="col-2">
                        <h6>Health</h6>
                    </div>
                    <div className="col-2">
                        <h6>Number of times saved</h6>
                    </div>
                    <div className="col-2">
                        <h6>Adoption status</h6>
                    </div>
                </div> */
}

{
    /* <div className="row" id="LilithJayneInfo">
                    <div className="col">
                        <h6>PHOTO</h6>
                    </div>
                    <div className="col">
                        <h6>Lilith Jayne</h6>
                    </div>
                    <div className="col">
                        <h6>11 years old</h6>
                    </div>
                    <div className="col">
                        <h6>Bombay</h6>
                    </div>
                    <div className="col">
                        <h6>NA</h6>
                    </div>
                    <div className="col">
                        <h6>42</h6>
                    </div>
                    <div className="col">
                        <h6>Adopted</h6>
                    </div>
                    <div className="col">
                        <h6>Edit Info</h6>
                    </div>
                </div>
                <hr />
                <div className="row" id="BowieInfo">
                    <div className="col">
                        <h6>PHOTO</h6>
                    </div>
                    <div className="col">
                        <h6>Bowie</h6>
                    </div>
                    <div className="col">
                        <h6>5 years old</h6>
                    </div>
                    <div className="col">
                        <h6>Shorthair tuxedo</h6>
                    </div>
                    <div className="col">
                        <h6>NA</h6>
                    </div>
                    <div className="col">
                        <h6>42</h6>
                    </div>
                    <div className="col">
                        <h6>Adopted</h6>
                    </div>
                    <div className="col">
                        <h6>Edit Info</h6>
                    </div>
                </div>
                <hr />
                <div className="row" id="OliverInfo">
                    <div className="col">
                        <h6>PHOTO</h6>
                    </div>
                    <div className="col">
                        <h6>Oliver</h6>
                    </div>
                    <div className="col">
                        <h6>5 years old</h6>
                    </div>
                    <div className="col">
                        <h6>Purebred Persian Tabby</h6>
                    </div>
                    <div className="col">
                        <h6>NA</h6>
                    </div>
                    <div className="col">
                        <h6>42</h6>
                    </div>
                    <div className="col">
                        <h6>Adopted</h6>
                    </div>
                    <div className="col">
                        <h6>Edit Info</h6>
                    </div>
                </div>
                <hr />
                <div className="row" id="MonroeInfo">
                    <div className="col">
                        <h6>PHOTO</h6>
                    </div>
                    <div className="col">
                        <h6>Monroe</h6>
                    </div>
                    <div className="col">
                        <h6>1 year old</h6>
                    </div>
                    <div className="col">
                        <h6>Siamese and Maine Coon</h6>
                    </div>
                    <div className="col">
                        <h6>NA</h6>
                    </div>
                    <div className="col">
                        <h6>42</h6>
                    </div>
                    <div className="col">
                        <h6>Adopted</h6>
                    </div>
                    <div className="col">
                        <h6>Edit Info</h6>
                    </div>
                </div> */
}

// const myObj = {
//     name: "Shannon",
//     favoriteLanguage: "Javascript"
// }

// if (this is true) {
//     do this;
//     and this;
//     etc;

// } else {
//     do this other stuff;
// }

// const myFunction = () => {
//     // this does nothing until it gets called
//     console.log("Hello, somone called me!")
// }
// myFunction();
// ^ Now the function runs
