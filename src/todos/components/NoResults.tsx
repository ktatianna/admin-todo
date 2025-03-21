import Image from "next/image";

const NoResults = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[600px] my-20">
      <Image src="/lazy.jpg" alt="tailus logo" width={500} height={300} />
      <span className="text-gray-500 text-xl mt-4">You have no tasks</span>
      <span className="text-gray-400 text-xl mt-4">Write something</span>
    </div>
  );
};

export default NoResults;
