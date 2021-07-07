import { videos } from "../database";
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    let video = [];
    await video.push(images[videos.findIndex(x => x.id == id)]);
    res.render("videoDetail", { pageTitle: "videoDetail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
