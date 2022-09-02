import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateVideoThunk } from "../../features/video/videoSlice";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";

export default function LikeUnlike({ id, likes, unlikes }) {
  const [localLike, setLocallike] = useState(likes);
  const [localUnLike, setLocalUnlike] = useState(unlikes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateVideoThunk({ id, likes: localLike, unlikes: localUnLike }));
  }, [dispatch, id, localLike, localUnLike]);

  const updateLike = (current_like) => {
    setLocallike(current_like);
  };
  const updateUnlike = (current_unlike) => {
    setLocalUnlike(current_unlike);
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div
          className="shrink-0 pr-1"
          onClick={() => updateLike(localLike + 1)}
        >
          <img
            className="w-5 block cursor-pointer"
            src={likeImage}
            alt="Like"
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {localLike}
        </div>
      </div>
      <div className="flex gap-1">
        <div
          className="shrink-0 pr-1"
          onClick={() => updateUnlike(localUnLike + 1)}
        >
          <img
            className="w-5 block cursor-pointer"
            src={unlikeImage}
            alt="Unlike"
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {localUnLike}
        </div>
      </div>
    </div>
  );
}
