const BlogSkeleton = () => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4 max-w-screen cursor-pointer">
    <div role="status"className="max-w-sm animate-pulse">
        <div className="flex">
        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="font-extralight pl-2 text-sm justify-center flex-col">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="pl-2 font-thin text-slate-400 text-sm justify-center flex-col">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        </div>
        <div className="text-xl font-semibold pt-2">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-2">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
 
        {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span> */}
    </div>
  )
}

export default BlogSkeleton