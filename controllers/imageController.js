import { images } from "../database";
import routes from "../routes";
export const imageDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    let image = [];
    await image.push(images[images.findIndex(x => x.id == id)]);
    console.log(id);
    console.log(image);
    res.render("imageDetail", { pageTitle: "imageDetail", image });
  } catch (error) {
    console.log("id: have not image");
    console.log(error);
    res.redirect(routes.home);
  }
};
