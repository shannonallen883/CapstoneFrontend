import { Link } from "react-router-dom";
import "./HomepageIndex.scss";

const Homepage = () => {
    return (
        <div id="Homepage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <h1>Find Your Furever Friend</h1>
                    </div>
                    {/* <!-- end of Find col --> */}
                    <div className="col-2">
                        <h4>
                            <Link to="/adopterSignin">Adopters</Link>
                        </h4>
                    </div>
                    {/* <!-- end of adopters col --> */}
                    <div className="col-2">
                        <h4>
                            <Link to="/Directory">Shelters</Link>
                        </h4>
                    </div>
                    {/* <!-- end of shelters col --> */}
                </div>
                {/* <!-- end of row 1 --> */}
                <div className="row">
                    <div className="col-8">
                        {" "}
                        <div id="welcome">
                            <h3>
                                Welcome to the heartwarming world of pet rescue!
                            </h3>
                            <p>
                                At Find Your Furever Friend we are dedicated to
                                making a difference in the lives of animals in
                                need. Our mission is simple yet profound: to
                                provide a second chance at life and a loving
                                furever home for every furry friend who crosses
                                our path.
                            </p>
                            <p>
                                Our website is a window into the compassionate
                                universe of animal rescue. <p />
                                Discover the following on our website: <br />
                                Adoption Opportunities: Explore our gallery of
                                adorable, adoptable pets waiting for their
                                furever families and find out how you can bring
                                a new furry companion into your home. <p />
                                Rescue Stories: Be inspired by the incredible
                                journeys of animals who have found hope,
                                healing, and happiness through our efforts.
                                These heartwarming tales will remind you of the
                                powerful impact of love and care.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Featured Pets</h2>
                        <div className="row">
                            <div className="col text-center">
                                <Link id="kittenLink" to="Kitten.jpg">
                                    <img
                                        src="/images/Kitten.jpg"
                                        alt="Kitten with Mittens"
                                        className="critterImage"
                                    />
                                    <figcaption>Lilith Jayne</figcaption>
                                </Link>
                            </div>
                            <div className="col text-center">
                                <Link to="Bowie.jpg">
                                    <img
                                        src="/images/Bowie.jpg"
                                        alt="Bowie the best girl"
                                        className="critterImage"
                                    />
                                    <figcaption>Bowie</figcaption>
                                </Link>
                            </div>

                            <div className="col text-center">
                                <Link to="newOliver.jpg">
                                    <img
                                        src="/images/newOliver.jpg"
                                        alt="Oliver the orange floofy cat"
                                        className="critterImage"
                                    />
                                    <figcaption>Oliver</figcaption>
                                </Link>
                            </div>
                            <div className="col text-center">
                                <Link to="Monroe.jpg">
                                    <img
                                        src="/images/Monroe.jpg"
                                        alt="Monroe the kitten"
                                        className="critterImage"
                                    />
                                    <figcaption>Monroe</figcaption>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- end of featured pets col --> */}
                    </div>
                    {/* <!-- end of row 2 --> */}
                    <div className="row text-center">
                        {/* <!-- end of photos col --> */}
                    </div>
                    {/* <!-- end of row 3 --> */}
                </div>
                <div className="row">
                    <div className="col" id="contact">
                        <p>
                            {" "}
                            Contact Us: <br />
                            Have questions or want to get in touch? <br />
                            Call us at: (777) 888-4242 <br />
                            Email: findyourfureverfriend@fluff.com
                        </p>
                        <p>
                            Thank you for visiting our site. <br />
                            Your support and compassion are the driving forces
                            behind our mission to create a brighter future for
                            animals in need. <br />
                            Together, we can make a world of difference, one paw
                            at a time. Join us in the journey to save lives, and
                            let love lead the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
