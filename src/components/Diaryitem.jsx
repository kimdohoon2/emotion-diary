import { getEmotionIamge } from "../util/get-emotion-image";
import Button from "./Button";
import "../components/DiaryItme.css";
import { useNavigate } from "react-router-dom";
const Diaryitem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  return (
    <div className="Diaryitem">
      <div onClick={() => nav(`/diary/${id}`)}></div>
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionIamge(emotionId)} alt="" />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="creatd_data">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
      </div>
    </div>
  );
};
export default Diaryitem;
