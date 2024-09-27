import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getQuestionQuizz } from "../../service/apiService";

const DetailQuiz = (props) => {
    const params = useParams();

    useEffect(() => {
        fetchDataQuestion();
    }, [params.id]);

    const fetchDataQuestion = async () => {
        let res = await getQuestionQuizz(params.id);
        console.log(res);

    }

    return (
        <div className="detail-quiz-container">
            detail quiz
        </div>
    )
}

export default DetailQuiz