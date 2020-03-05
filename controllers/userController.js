import { users } from "../database";
//globalRouter -> controller -> rendering
export const home = (req, res) => {
  try {
    res.render("index", { title: "Express" });
  } catch (error) {
    console.log(error);
  }
};
//infoRouter ->controller -> rendering

export const getSearch = (req, res) => {
  try {
    res.render("search", {
      title: "Search",
      pageTitle: "Search"
    });
  } catch (error) {
    console.log(error);
  }
};
export const postSearch = (req, res) => {
  const {
    body: { term: searchingBy } // const searchingBy = req.query.term
  } = req;
  const result =
    users.findIndex(x => x.name === searchingBy) !== -1 ? "YES" : "NO";

  try {
    res.render("search", {
      title: "getSearch",
      pageTitle: "getSearch",
      searchingBy,
      result
    });
  } catch (error) {
    console.log(error);
  }
};
export const getInfo = (req, res) => {
  try {
    res.render("getInfo", {
      title: "getInfo",
      pageTitle: "getInfo"
    });
  } catch (error) {
    console.log(error);
  }
};

export const postInfo = (req, res) => {
  const {
    body: { term: searchingBy } // const searchingBy = req.query.term
  } = req;

  let results = [];
  results.push(users[users.findIndex(x => x.name === searchingBy)]);
  try {
    console.log(results);
    res.render("userDetail", {
      title: "userDetail",
      pageTitle: "userDetail",
      searchingBy,
      results
    });
  } catch (error) {
    console.log(error);
  }
};
export const allInfo = (req, res) => {
  try {
    res.render("allInfo", { pageTitle: "All-User-Info", users });
  } catch (error) {
    console.log(error);
  }
};
