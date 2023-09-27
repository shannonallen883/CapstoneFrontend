import { Link } from "react-router-dom";
import "./ShelterProfilePage.scss";

const ShelterProfilePage = () => {
    return (
        <div id="ShelterProfilePage">
            <div className="container">
                {/* <!-- <div className="row"> */}
                <div className="row">
                    <div className="col-8">
                        <h4>
                            <Link to="/">Find Your Furever Friend</Link>
                        </h4>
                    </div>
                    <div className="col-4">
                        <h6>
                            <Link to="/ShelterViewMyAnimals/0">
                                View My Animals
                            </Link>
                        </h6>
                    </div>

                    {/* </div> --> */}
                    {/* <!-- end of row 1 --> */}
                </div>
                {/* end of first row */}
                <div className="row" id="Pawsitivitea">
                    <div className="col">
                        <h1>The Cat's Meow</h1>
                    </div>
                </div>
                {/* end of Pawsitiviteas row */}

                {/* if I have a row with only one col needed do I need to use "-4" below */}
                <div className="row">
                    <div className="col-4">
                        <h5>Owner or point of contact: Shannon Hudson</h5>
                    </div>
                </div>
                {/* end of owner row */}
                <div className="row">
                    <div className="col-4">
                        <h5>Phone Number: (777) 589-4242</h5>
                    </div>
                </div>
                {/* end of phone number row */}
                <div className="row">
                    <div className="col-4">
                        <h5 style={{ display: "inline-block" }}>Address:</h5>
                        <div style={{ display: "inline-block" }}>
                            PO Box 42 <br /> Tully, NY 13159
                        </div>
                    </div>
                </div>
                {/* end of address row */}
                <div className="row">
                    <div className="col-4">
                        <h5>
                            About us: <p />
                            Welcome to The Cat's Meow, a haven for furry friends
                            in need. Our mission is to provide love, care, and a
                            second chance to animals who have been abandoned,
                            abused, or are simply seeking a new forever home.
                            Here's a glimpse into who we are and what we stand
                            for. <p />
                            Our Vision at The Cat's Meow is a world where every
                            animal is valued, cherished, and given the
                            opportunity to live a happy and healthy life. We
                            believe that every creature, big or small, deserves
                            respect, compassion, and a safe place to call home.
                            <p />
                            Our Mission is to rescue, rehabilitate, and rehome
                            animals in need. We strive to create a world where
                            no animal is left behind, and every pet finds a
                            loving family.
                        </h5>
                    </div>
                </div>
                {/* end of about us row */}
                <button id="EditProfile">Edit Profile</button>
            </div>
            {/* end of container-fluid */}
        </div>
    );
};

export default ShelterProfilePage;
