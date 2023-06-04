import { RiFileWarningFill } from 'react-icons/ri'

export const Error = () => {
  return (
    <div className='flex items-center h-screen w-full mx-auto max-w-[1248px]'>
      <div className='mx-autos bg-secondary w-2/3 mx-auto p-4 h-36 rounded-xl shadow-xl shadow-gray-400'>
        <div className='flex items-center justify-center gap-3'>
          <RiFileWarningFill color='#ffd95a' size={25} />
          <h2 className='text-[#e4e6e9] text-2xl'>Error --- Page Not Found</h2>
        </div>
      </div>
    </div>
  )
}
