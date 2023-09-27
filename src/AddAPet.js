import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AddAPet.scss";
import APIURL from "./APIURL";

const AddAPet = () => {
    const [roundedAge, setRoundedAge] = useState("");
    const [shelters, setShelters] = useState([]);
    const navigateTo = useNavigate();

    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(`${APIURL}/shelterDirectory`);

            const data = await response.json();
            console.log("data", data);
            setShelters(data.shelterDirectory);
        };
        makeAPICall();
    }, []);

    const submitForm = async (event) => {
        event.preventDefault();
        const shelterid = await submitAndAddForm(event);
        navigateTo(`/ShelterViewMyAnimals/${shelterid}`);
    };

    const submitAndAddForm = async (event) => {
        console.log("submitForm()");
        console.log("event: ", event);
        console.log(event.target.elements);
        event.preventDefault();

        const shelterid = event.target.elements.shelterid.value;

        if (
            // checking that everything is filled out
            event.target.elements.photo.value === "" ||
            event.target.elements.name.value === "" ||
            event.target.elements.age.value === "" ||
            event.target.elements.breed.value === "" ||
            event.target.elements.county.value === "" ||
            event.target.elements.description.value === "" ||
            event.target.elements.shelterid.value === ""
        ) {
            // Not filled out!
            alert("All fields are required");
        } else {
            // Yes it is filled out
            const formData = new FormData(event.target);
            const response = await fetch(`${APIURL}/availablePets`, {
                method: "POST",
                body: formData,
            });

            event.target.elements.name.value = "";
            event.target.elements.age.value = "";
            event.target.elements.breed.value = "";
            event.target.elements.county.value = "";
            event.target.elements.description.value = "";
            event.target.elements.shelterid.value = "";
        }

        return shelterid;
    };
    const roundAge = (event) => {
        const ageInput = event.target;
        const currentAge = ageInput.value;
        let ageRounded = Math.round(currentAge);
        if (ageRounded === 0) {
            ageRounded = "";
        }
        setRoundedAge(ageRounded);

        //const roundedAge = Math.round(event.target.value);
    };
    return (
        <>
            <div className="container" id="addAPet">
                <div className="row">
                    <div className="col-8">
                        <h1>
                            <Link to="/">Find Your Furever Friend</Link>
                        </h1>
                    </div>
                </div>

                <form onSubmit={submitForm}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="name">Name*</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                // placeholder="Name.."
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="age">Age*</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="number"
                                min="0"
                                step="1"
                                id="age"
                                name="age"
                                onChange={roundAge}
                                value={roundedAge}

                                // placeholder="Age.."
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="breed">
                                Breed*
                                <span className="resize-words">
                                    {" "}
                                    (NA if not applicable)
                                </span>{" "}
                            </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                id="breed"
                                name="breed"
                                // placeholder="Breed (if known).."
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="country">County*</label>
                        </div>
                        <div className="col-75">
                            <select id="county" name="county">
                                <option value=""></option>
                                <option value="onondaga">Onondoga</option>
                                <option value="cortland">Cortland</option>
                                <option value="oswego">Oswego</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="country">Shelter*</label>
                        </div>
                        <div className="col-75">
                            <select id="shelterid" name="shelterid">
                                <option value=""></option>
                                {shelters.map((eachShelter) => {
                                    return (
                                        <option
                                            key={eachShelter.id}
                                            value={eachShelter.id}
                                        >
                                            {eachShelter.name}
                                        </option>
                                    );
                                })}
                                {/* <option value="1">The Cat's Meow</option>
                                <option value="2">Cortland</option>
                                <option value="3">Oswego</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Description*</label>
                        </div>
                        <div className="col-75">
                            <textarea
                                id="description"
                                name="description"
                                // placeholder="Write something.."
                                // style="height: 200px"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <p>
                            Click on the "Choose photo" button to upload a
                            photo*
                        </p>
                        <input
                            type="file"
                            name="photo"
                            accept="image/.pdf,.jpg,.gif,.png"
                            id="photoButton"
                        />
                        <h6 id="required">* Required Field</h6>
                    </div>
                    <div className="row">
                        <button
                            onClick={submitAndAddForm}
                            type="button"
                            id="submitButton"
                        >
                            Submit and Add Another
                        </button>
                        <button type="submit" id="submitButton">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddAPet;

// const logOutText = (evt) => {
//     console.log(evt.target.value)
// }

// <input
// type="text"
// onChange={logOutText}
// />
