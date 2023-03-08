import Http from "./Http";
export const getTable = (page) => {
  return Http.get(`?page=${page}&results=10`);
};
