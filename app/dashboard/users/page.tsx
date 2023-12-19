import Users from "@/features/dashboard/users";
import { fetchedUsers } from "@/shared/libs/data";

const UsersPage = async () => {
  const users = await fetchedUsers();

  return (
    <Users users={users}/>
  );
};

export default UsersPage;