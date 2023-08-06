import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (searchName) => {
  const location = useLocation();

  return (new URLSearchParams(location.search)).get(searchName);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`)
  }

};