import { Link } from "react-router-dom";
import "./PetDetails.scss";

const PetDetails = () => {
    return (
        <div id="Homepage">
            <div id="PetDetails">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <h1>
                                <Link to="/">Find Your Furever Friend</Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    <div></div>;
};

export default PetDetails;
