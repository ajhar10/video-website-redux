import axios from "../../utils/axios";

export const getVideos = async (tags, search, page, author) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  if (author !== "") {
    queryString += `&author_like=${author}`;
  }

  const response = await axios.get(
    `/videos/?${queryString}&_page=${page}&_limit=8`
  );

  return response.data;
};
