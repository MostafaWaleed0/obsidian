import { memo } from 'react';
import rangeMap from 'lib/range-map';
import { Star } from 'components/icons';

type Props = {
  value: number;
};

export default memo(function Quantity({ value }: Props) {
  return (
    <div className="flex flex-row py-6 text-yellow-500">
      {rangeMap(5, (i) => (
        <span
          key={`star_${i}`}
          className={`inline-block ml-1 , ${
            i >= Math.floor(value) ? 'text-transparent' : ''
          }`}
        >
          <Star />
        </span>
      ))}
    </div>
  );
});
