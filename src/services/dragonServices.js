import { API_URL } from "../constants/services";

export function fetchDragons() {
  return fetch(`${API_URL}/dragon`).then((res) => res.json());
}

export function updateDragon(data) {
  return fetch(`${API_URL}/dragon/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
