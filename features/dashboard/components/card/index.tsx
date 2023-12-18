import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className='w-full p-5 flex gap-5 rounded-md bg-bg-light cursor-pointer hover:bg-bg-hover duration-500'>
      <MdSupervisedUserCircle size={24}/>

      <div className='flex flex-col gap-5'>
        <h3 className=''>Total</h3>
        <p className='text-2xl font-medium'>10.769789</p>
        <p className='font-light'><span className='text-green'>12%</span> more than</p>
      </div>
    </div>
  );
};

export default Card;