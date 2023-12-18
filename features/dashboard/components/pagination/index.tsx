const DashboardPagination = () => {
  return (
    <div className='p-2.5 flex items-center justify-between'>
      <button type='button' className='px-2.5 py-1.5 rounded bg-purple disabled:cursor-not-allowed'>Previous</button>
      <button type='button' className='px-2.5 py-1.5 rounded bg-purple disabled:cursor-not-allowed'>Next</button>
    </div>
  );
};

export default DashboardPagination;