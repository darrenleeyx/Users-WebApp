import { useLoaderData } from "react-router-dom";
import { getUser } from "../api/users";
import UserCard from "../components/UserCard";

function User() {
  const user = useLoaderData();
  return <UserCard key={user.data.id} {...user.data} />;
}

function loader({ request: { signal }, params: { userId } }) {
  return getUser(userId, { signal });
}

export const userRoute = {
  loader,
  element: <User />,
};
