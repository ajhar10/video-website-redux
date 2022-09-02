import React from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

function RelatedVideoList({ currentVideoId, tags }) {
  const dispatch = useDispatch();
  const { relatedVideos, isError, error, isLoading } = useSelector(
    (state) => state.relatedVideo
  );
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [currentVideoId, dispatch, tags]);

  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && relatedVideos.length === 0)
    content = <div className="col-span-12">Videos Not Found</div>;
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} relatedVideo={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
}

export default RelatedVideoList;
