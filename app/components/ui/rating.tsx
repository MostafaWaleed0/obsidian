import { Star } from "app/components/icons";
import { rangeMap } from "app/lib/range-map";
import { memo } from "react";

export default memo(function Quantity({ value }: { value: number }) {
  return (
    <div className="flex flex-row py-6 text-yellow-500">
      {rangeMap(5, (i) => (
        <span
          key={`star_${i}`}
          className={`inline-block ml-1 , ${
            i >= Math.floor(value) ? "text-transparent" : ""
          }`}
        >
          <Star />
        </span>
      ))}
    </div>
  );
});
