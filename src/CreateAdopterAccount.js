import { Link } from "react-router-dom";
import "./CreateAdopterAccount.scss";

const CreateAdopterAccount = () => {
    return (
        <div>
            <div className="container-fluid" id="CreateAdopterAccount">
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
                        <h2>Create Adopter Account</h2>
                        <label for="email">Email:</label>
                        <br />
                        <input type="text" name="email" />
                        <br />
                        <label for="username">Username:</label>
                        <br />
                        <input type="text" name="username" />
                        <br />
                        <label for="password">Password:</label>
                        <br />
                        <input type="text" name="password" />
                        <br />
                        <label for="verifyPassword">Verify Password:</label>
                        <br />
                        <input type="text" name="verifyPassword" /> <br />
                        <button id="submitButton">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAdopterAccount;
