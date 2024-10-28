import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"
import { getQuestionQuizz } from "../../service/apiService";
import _ from "lodash";
import "../../assets//scss/detailQuiz.scss"

const DetailQuiz = (props) => {
    const params = useParams();

    useEffect(() => {
        fetchDataQuestion();
    }, [params.id]);

    const fetchDataQuestion = async () => {
        let res = await getQuestionQuizz(params.id);
        if (res && res.status) {
            console.log(res.data)
        }
    }

    const location = useLocation();

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {params.id}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">
                        Question 1: How are you doing?
                    </div>
                    <div className="answer">
                        <div className="a-child">A. jakhsjdh</div>
                        <div className="b-child">B. jakhsjdh</div>
                        <div className="c-child">C. jakhsjdh</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Next</button>
                    <button className="btn btn-primary">Prev</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz