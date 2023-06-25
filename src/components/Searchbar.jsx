import { useState } from "react";
import "./style.css";

function Searchbar(pros) {
  const [val, setVal] = useState("");
  return (
    <div className="searchbar">
      <input
        onChange={(e) => {
          setVal(e.target.value);
        }}
        value={val}
        type="text"
        placeholder="Search"
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            if (val.toString().trim().length) {
              pros.setVideo(null);
              pros.setSearch(val);
              setVal("");
            }
          }
        }}
      />
      <div
        className="searchIcon"
        onClick={() => {
          if (val.toString().trim().length) {
            pros.setVideo(null);
            pros.setSearch(val);
            setVal("");
          }
        }}
      >
        Search
      </div>
    </div>
  );
}

export default Searchbar;
