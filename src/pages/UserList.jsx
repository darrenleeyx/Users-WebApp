import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";
import UserCard from "../components/UserCard";

function UserList() {
  const users = useLoaderData();

  return users.data.map((user) => {
    return (
      <React.Fragment key={user.id}>
        <UserCard {...user} />
        <Link to={user.id.toString()}>View</Link>
      </React.Fragment>
    );
  });
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
