import api from "../api";

export function createForm(_id) {
  const data = api.post(`/forms`, { _id });
  return data;
}
export function getFormDetails(_id, creator_id) {
  const data = api.get(`/forms`, { _id, creator_id });
  return data;
}

export function updateFormDetails(data) {
  const response = api.post(`/forms/update`, data);
  return response;
}

export function getUserFormList(_id) {
  const response = api.get(`/forms/find`, { _id });
  return response;
}