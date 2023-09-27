import { Link } from "react-router-dom";
import "./AdopterProfilePage.scss";

const AdopterProfilePage = () => {
    return (
        <div className="container-fluid" id="AdopterProfilePage">
            {/* <!-- <div className="row"> */}
            <div className="col-8">
                <Link to="/">
                    <h3>Find Your Furever Friend</h3>
                </Link>
            </div>
            {/* </div> --> */}
            {/* <!-- end of row 1 --> */}
            <div className="row" id="Shannon Allen">
                <div className="col-4">
                    <h1>Shannon Allen</h1>
                </div>
            </div>
        </div>
    );
};

export default AdopterProfilePage;
