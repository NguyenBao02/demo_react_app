import { useEffect, useState } from "react";
import { getParticipantQuizz } from "../../service/apiService";

const ListQuizz = (props) => {
    const [arrQuizz, setArrQuizz] = useState([]);

    useEffect(() => {
        getListQuizz();
    }, []);

    const getListQuizz = async () => {
        let res = await getParticipantQuizz();
        if (res.status) {
            setArrQuizz(res.data)
        }
    }

    return (
        <div className="list-quizz-container d-flex container gap-3">
            {arrQuizz && arrQuizz.length > 0 &&
                arrQuizz.map((value, index) => {
                    return (
                        <div key={index} className="card" style={{ width: "18rem" }}>
                            <img src={value.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Quizz {index + 1}</h5>
                                <p className="card-text">{value.description}</p>
                                <a className="btn btn-primary">Start Now</a>
                            </div>
                        </div >
                    )
                })
            }

            {arrQuizz && arrQuizz.length === 0 &&
                <div>You don't have any quizz now</div>
            }
        </div>
    )
};

export default ListQuizz;