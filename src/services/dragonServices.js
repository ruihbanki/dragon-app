import { API_URL } from "../constants/services";

export function fetchDragons() {
  return fetch(`${API_URL}/dragon`).then((res) => res.json());
}
