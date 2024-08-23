import videoHomepage from "../../assets/video/hero.mp4";
import "../../assets/scss/homepage.scss";

const HomePage = (props) => {
    return (
        <div className="homepage-container pt-5 pb-5 container">
            <div className="row">
                <div className="col-lg-6">
                    <video autoPlay muted loop className="w-100 p-2">
                        <source src={videoHomepage} type="video/mp4" />
                    </video>
                </div>
                <div className="col-lg-6 d-flex align-self-center flex-column">
                    <h1 className="title mb-3">Make forms worth filling out</h1>
                    <p className="description mt-4">Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different</p>
                    <button className="btn btn-dark mt-4 p-3" >Get started—it's free</button>
                </div>
            </div>

        </div>
    )
}

export default HomePage