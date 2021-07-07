//경로 파일
//프로젝트
const HOME = "/";
const VIDEO = "/video";
const INFO = "/info";
const IMAGE = "/image";
const SEARCH = "/search";
const GET = "/get";
const ALL = "/all";
const USER_DETAIL = "/userDetail";
const IMAGE_DETAIL = "/:id";
const VIDEO_DETAIL = "/:id";
const routes = {
  home: HOME,
  video: VIDEO,
  info: INFO,
  image: IMAGE,
  search: SEARCH,
  get: GET,
  all: ALL,
  userDetail: USER_DETAIL,
  videoDetail: id => {
    if (id) {
      return `/video/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  imageDetail: id => {
    if (id) {
      return `/image/${id}`;
    } else {
      return IMAGE_DETAIL;
    }
  }
};

export default routes;
