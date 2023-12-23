import Image from "next/image";
import { auth } from "@/shared/libs/auth";

const SidebarUserInfo = async () => {
  const session = await auth();

  return (
    <div className='mb-5 flex items-center gap-5'>
      <Image src={session?.user?.image ? session.user.image : '/next.svg'} alt='user image' width={50} height={50}
             className='rounded-full object-cover'/>
      <div className='flex flex-col'>
        <h4 className='font-medium'>{session?.user?.name}</h4>
        <p className='text-white-dark text-xs'>Web developer</p>
      </div>
    </div>
  );
};

export default SidebarUserInfo;