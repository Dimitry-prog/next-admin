import Users from "@/features/dashboard/users";
import { fetchedUsers } from "@/features/dashboard/users/services";

type UsersPageProps = {
  searchParams: { [key: string]: string | undefined }
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const query = searchParams.q || '';
  const page = parseInt(searchParams.page || '1');
  const { users, totalUsers } = await fetchedUsers(query, page);

  return (
    <Users users={users} totalUsers={totalUsers}/>
  );
};

export default UsersPage;