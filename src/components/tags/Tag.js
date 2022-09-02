import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelected, tagRemoved } from "../../features/filter/filterSlice";

const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(tag.title) ? true : false;

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(tag.title));
    }
    if (!isSelected) {
      dispatch(tagSelected(tag.title));
    }
  };

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  return (
    <div onClick={handleSelect} className={style}>
      {tag.title}
    </div>
  );
};

export default Tag;
