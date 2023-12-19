import Users from "@/features/dashboard/users";
import { fetchedUsers } from "@/features/dashboard/users/services";

type UsersPageProps = {
  searchParams: { [key: string]: string | undefined }
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const query = searchParams.q || '';
  const users = await fetchedUsers(query);

  return (
    <Users users={users}/>
  );
};

export default UsersPage;