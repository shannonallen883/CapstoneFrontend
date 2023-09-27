import { Link } from "react-router-dom";
import "./ShelterSignin.scss";

const ShelterSignin = () => {
    return (
        <div id="shelterSignin">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>
                            <Link to="/">Find Your Furever Friend</Link>
                        </h1>
                    </div>

                    {/* <!-- <div id="signinContainer"></div> --> */}
                </div>
                <div>
                    <form>
                        <h2>Shelter's Signin Here</h2>
                        <label for="username">Username:</label>
                        <br />
                        <input type="text" name="username" />
                        <br />
                        <label for="password">Password:</label>
                        <br />
                        <input type="text" name="password" /> <br />
                        <button id="submitButton">Submit</button>
                    </form>
                </div>
            </div>
            {/* <h1>Adopter shit goes here</h1> */}
        </div>
    );
};

export default ShelterSignin;
