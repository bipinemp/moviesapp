interface VideoPopup {
  show: boolean;
  setShow: (show: boolean) => void;
  videoId: string | null;
  setVideoId: (videoId: string | null) => void;
}

import ReactPlayer from "react-player";
import { IoCloseCircle } from "react-icons/io5";

export default function VideoPopup({
  show,
  setShow,
  videoId,
  setVideoId,
}: VideoPopup) {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <>
      <div
        className={`fixed w-full h-screen flex justify-center items-center top-0 left-0 ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        } z-50`}
      >
        <div
          className={`${
            show ? "opacity-100 visible" : "opacity-0 invisible"
          } absolute inset-0 w-[100%] h-[100%] bg-black/70 backdrop-blur-sm`}
          onClick={hidePopup}
        ></div>
        <div className="flex flex-col items-end w-[680px] h-[400px] border-[1.5px] p-[6px] rounded-lg z-50">
          <button onClick={hidePopup} className="bg-white rounded-full mb-1">
            <IoCloseCircle size={50} className="fill-darkprimary" />
          </button>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}
