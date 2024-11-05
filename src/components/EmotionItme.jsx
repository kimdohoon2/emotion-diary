import "./EmotionItme.css";
import { getEmotionIamge } from "../util/get-emotion-image";
const EmotionItme = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionTime_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionIamge(emotionId)} alt="" />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};
export default EmotionItme;
