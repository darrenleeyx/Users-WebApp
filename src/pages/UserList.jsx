import { Link, Navigate, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";
import UserCard from "../components/UserCard";

function UserList() {
  const users = useLoaderData();

  return users.data.map((user) => {
    return (
      <>
        <UserCard key={user.id} {...user} />
        <Link to={user.id.toString()}>View</Link>
      </>
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
