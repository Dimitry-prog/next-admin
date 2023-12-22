import SingleUser from "@/features/dashboard/users/components/single-user";
import { fetchedUser } from "@/features/dashboard/users/services";

type UserPageProps = {
  params: {
    userId: string
  }
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await fetchedUser(params.userId);

  return (
    <SingleUser user={user}/>
  );
};

export default UserPage;