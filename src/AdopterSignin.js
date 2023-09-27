import { Link } from "react-router-dom";
import "./AdopterSignin.scss";

const AdopterSignin = () => {
    return (
        <div id="adopterSignin">
            <div className="container-fluid">
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
                        <h2>Adopter Signin Here</h2>
                        <label for="username">Username:</label>
                        <br />
                        <input type="text" name="username" />
                        <br />
                        <label for="password">Password:</label>
                        <br />
                        <input type="text" name="password" /> <br />
                        <button id="submitButton">Submit</button>
                        <h6>or</h6>
                        <h5>
                            <Link to="/createAdopterAccount">
                                Create Account
                            </Link>
                        </h5>
                    </form>
                </div>
            </div>
            {/* <h1>Adopter shit goes here</h1> */}
        </div>
    );
};

export default AdopterSignin;
