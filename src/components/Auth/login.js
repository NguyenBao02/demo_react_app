import { FaEye } from "react-icons/fa";
import "../../assets/scss/login.scss";
import { useState } from "react";
import { postParticipantLogin } from "../../service/apiService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmitForm = async () => {
        let res = await postParticipantLogin(email, password);
        if (res.status) {
            navigate('/');
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }
    }

    return (
        <div className="login-container container-fluid">
            <div className="login-header d-flex justify-content-end p-2">
                <span>Don't have an account yet? <button className="btn btn-outline-dark">Sign up</button></span>
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
                    <div className="mb-2">
                        <label className="py-2">Password</label>
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder="At least 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="input-group-text" id="basic-addon1"><FaEye /></span>
                        </div>
                    </div>
                    <span className="d-block forgot-password mb-4">Forgot password?</span>
                    <button className="btn btn-dark w-100" onClick={() => handleSubmitForm()}>Log in to Typeform</button>
                </div>
            </div>
        </div>
    )
}

export default Login;