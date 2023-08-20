import { PhotographIcon, EmojiHappyIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.britannica.com%2F92%2F215392-050-96A4BC1D%2FAustralian-actor-Chris-Hemsworth-2019.jpg&w=1200&q=75"
        alt="user-image"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightnes-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="2"
            placeholder="What's happening"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
            disabled
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
