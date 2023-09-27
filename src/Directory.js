import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import APIURL from "./APIURL";
import "./Directory.scss";

const Directory = () => {
    const [shelters, setShelters] = useState([]);

    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(`${APIURL}/shelterDirectory`);

            const data = await response.json();
            console.log("data", data);
            setShelters(data.shelterDirectory);
        };
        makeAPICall();
        console.log("Help");
    }, []);

    return (
        <div>
            <div className="container" id="Directory">
                <div className="row">
                    <div className="col-8">
                        <h1>
                            <Link to="/">Find Your Furever Friend</Link>
                        </h1>
                    </div>
                    {/* <!-- end of Find col --> */}
                    <div className="col-2">
                        <h6>
                            <Link to="/CreateShelterAccount">
                                Create Account
                            </Link>
                        </h6>
                    </div>
                    {/* <!-- end of adopters col --> */}
                    <div className="col-2">
                        <h6>
                            {" "}
                            <Link to="/ShelterSignin">Signin</Link>{" "}
                        </h6>
                    </div>
                    {/* <!-- end of shelters col --> */}
                </div>
                {/* <!-- end of row 1 --> */}

                {/* <!-- end of row 4 --> */}
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Shelter Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shelters.map((eachShelter) => {
                            // 28 Make the Post component show for each post from the DB
                            //and pass the post info in a prop called data

                            return (
                                <tr id="RequiredInfo" key={eachShelter.id}>
                                    <td>
                                        <Link
                                            to={`/ShelterViewMyAnimals/${eachShelter.id}`}
                                        >
                                            {/* .name is the value in the object returned from database */}
                                            {eachShelter.name}
                                        </Link>
                                    </td>
                                    <td>{eachShelter.phoneNumber}</td>
                                    <td>{eachShelter.address}</td>
                                    <td>{eachShelter.email}</td>

                                    {/* <div className="col-2">
                                        <h6>Adoption status</h6>
                                    </div> */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* <!-- end of container-fluid --></div> */}
            {/* </div> */}
        </div>
    );
};

export default Directory;
