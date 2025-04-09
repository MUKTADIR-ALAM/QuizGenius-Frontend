import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { toggleTheme } from "../redux/themeSlice";

const ThemeToggle = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  console.log(dispatch);
  React.useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div
     
      className={`p-6 transition-all duration-300 `}
    >
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 rounded-full text-3xl bg-black text-white h-10 w-10 hover:bg-black/70 flex items-center justify-center"
      >
        <span className="transition-transform duration-500 transform h-6 flex justify-center a items-center w-6 hover:scale-125">
          {mode === "dark" ? <IoMdSunny /> : <IoMdMoon />}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
