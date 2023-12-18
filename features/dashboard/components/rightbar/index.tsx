import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <aside className='flex-1'>
      <div className='fixed'>
        <div className='px-5 py-5 mb-5 rounded-md relative bg-gradient-to-t from-[#182237] to-[#253352]'>
          <div className='w-1/2 h-1/2 absolute bottom-0 right-0'>
            <Image src='/next.svg' alt='bg image' fill className='object-cover opacity-30'/>
          </div>

          <div className='flex flex-col gap-6'>
            <span className='font-bold'>🔥 Available Now</span>
            <h3 className='text-xl font-medium'>Next admin?</h3>
            <span className='text-sm text-white-dark font-medium'>3 minutes to read</span>
            <p className='text-white-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
              corporis inventore
              porro. Et,
              maiores, quas?
            </p>
            <button type='button' className='max-w-max p-2.5 flex items-center gap-2.5 rounded bg-purple'>
              <MdPlayCircleFilled/>
              Watch
            </button>
          </div>
        </div>

        <div className='px-5 py-5 mb-5 rounded-md relative bg-gradient-to-t from-[#182237] to-[#253352]'>
          <div className='flex flex-col gap-6'>
            <span className='font-bold'>🚀 Coming Soon</span>
            <h3 className='text-xl font-medium'>Next server components?</h3>
            <span className='text-sm text-white-dark font-medium'>5 minutes to read</span>
            <p className='text-white-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
              corporis inventore
              porro. Et,
              maiores, quas?
            </p>
            <button type='button' className='max-w-max p-2.5 flex items-center gap-2.5 rounded bg-purple'>
              <MdReadMore/>
              Read
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightBar;