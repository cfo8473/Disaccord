import * as APIUserUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER"
export const REMOVE_USER = "REMOVE_USER"

export const fetchUsers = () => dispatch => {
  return APIUserUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)));
}

export const fetchUser = id => dispatch => {
  return APIUserUtil
    .fetchUser(id).then(user => dispatch(receiveUser(user)));
};

export const createUser = user => dispatch => {
  return APIUserUtil
    .createUser(user).then(user => dispatch(receiveUser(user)));
};

export const editUser = user => dispatch => {
  return APIUserUtil
    .editUser(user).then(user => dispatch(receiveUser(user)));
};

export const removeUser = userId => dispatch => {
  return APIUserUtil
    .deleteUser(userId).then(() => dispatch(deleteUser()));
}

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const deleteUser = userId => ({
  type: REMOVE_USER,
  userId
});