import { FaEye } from "react-icons/fa";
import "../../assets/scss/login.scss";
import { useState } from "react";
import { postParticipantLogin, postParticipantRegister } from "../../service/apiService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { type } from "@testing-library/user-event/dist/type";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [showHidePassword, setShowHidePassword] = useState(false)
    const navigate = useNavigate();

    const handleSubmitForm = async () => {
        let res = await postParticipantRegister(email, password, username);
        if (res.status) {
            navigate('/login');
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }
    }

    return (
        <div className="login-container container-fluid">
            <div className="login-header d-flex justify-content-end p-2">
                <span>Already have an account? <button className="btn btn-outline-dark" onClick={() => navigate("/login")}>Log in</button></span>
            </div>

            <div className="login-content col-4 mx-auto ">
                <div className="login-title">
                    <h3>HoiDanIT</h3>
                </div>
                <div className="login-welcome">
                    <p>Hello, who’s this?</p>
                </div>

                <div className="form-group">
                    <div className="py-2">
                        <label className="py-2">Email</label>
                        <input type="email" className="form-control" placeholder="abc@gmail.com" aria-describedby="basic-addon1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="py-2">
                        <label className="py-2">Username</label>
                        <input type="text" className="form-control" placeholder="Eric" aria-describedby="basic-addon1" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="py-2">Password</label>
                        <div className="input-group">
                            <input
                                type={showHidePassword ? "text" : "password"}
                                className="form-control"
                                placeholder="At least 6 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="input-group-text" id="basic-addon1" onClick={() => setShowHidePassword(!showHidePassword)}><FaEye /></span>
                        </div>
                    </div>
                    <button className="btn btn-dark w-100 mt-4" onClick={() => handleSubmitForm()}>Register in to Typeform</button>
                </div>
            </div>
        </div>
    )
}

export default Register;