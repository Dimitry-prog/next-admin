import Image from "next/image";

const SidebarUserInfo = () => {
  return (
    <div className='mb-5 flex items-center gap-5'>
      <Image src='/next.svg' alt='user image' width={50} height={50} className='rounded-full object-cover'/>
      <div className='flex flex-col'>
        <h4 className='font-medium'>Dimitry</h4>
        <p className='text-white-dark text-xs'>Web developer</p>
      </div>
    </div>
  );
};

export default SidebarUserInfo;