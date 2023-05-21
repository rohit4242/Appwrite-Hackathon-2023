import React from "react";
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";

const sortValues = [
  { value: "order-added", title: "Order added" },
  { value: "min-date", title: "Earlier first" },
  { value: "max-date", title: "Later first" },
  { value: "completed-first", title: "Completed first" },
  { value: "uncompleted-first", title: "Uncompleted first" },
];

const ButtonsSort = ({
  isListInView1,
  setIsListInView1,
  sortedBy,
  setSortedBy,
}) => {
  return (
    <div className="flex children-styles">
      <button onClick={() => setIsListInView1(true)} title="view in list">
        <IconView1 className={isListInView1 ? "text-[#00B3B2]" : ""} />
      </button>
      <button onClick={() => setIsListInView1(false)} title="view in grid">
        <IconView2 className={!isListInView1 ? "text-[#00B3B2]" : ""} />
      </button>
      <select
        className="ml-auto inputStyles"
        value={sortedBy}
        onChange={({ target }) => setSortedBy(target.value)}
      >
        <option value="" disabled>
          Sort by
        </option>
        {sortValues.map((val) => (
          <option
            key={val.value}
            value={val.value}
            className="bg-slate-100 dark:bg-slate-800"
          >
            {val.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ButtonsSort;
