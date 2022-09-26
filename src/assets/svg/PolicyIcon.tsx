import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {Colors} from '../../styles/colors';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const PolicyIcon = ({
  width = 20,
  height = 20,
  color = Colors.DarkGray,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="13 0 69.000000 35.000000">
      <G
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none">
        <Path
          d="M260 480 l0 -280 166 0 c128 0 165 3 162 13 -3 8 -46 13 -149 17
l-144 5 0 245 0 245 113 3 112 3 0 -76 0 -75 75 0 75 0 0 -59 c0 -48 3 -60 18
-63 16 -4 17 3 14 71 l-4 76 -76 78 -77 77 -142 0 -143 0 0 -280z m344 180
l38 -40 -41 0 -41 0 0 40 c0 22 1 40 3 40 2 0 20 -18 41 -40z"
        />
        <Path
          d="M357 486 c-3 -8 -3 -17 0 -20 4 -3 62 -6 130 -6 116 0 123 1 123 20
0 19 -7 20 -124 20 -97 0 -125 -3 -129 -14z"
        />
        <Path
          d="M587 425 c-48 -20 -59 -22 -64 -10 -8 22 -158 21 -166 0 -9 -22 7
-26 96 -24 l82 2 7 -47 c8 -59 48 -128 90 -154 l33 -21 29 23 c39 29 82 110
89 164 l5 43 -55 25 c-68 29 -73 29 -146 -1z m159 -48 c14 -14 -21 -101 -53
-135 l-34 -36 -33 34 c-19 19 -32 37 -30 39 2 2 -4 17 -12 33 -24 46 -15 68
36 88 42 16 46 16 82 0 21 -9 41 -20 44 -23z"
        />
        <Path
          d="M357 344 c-16 -17 11 -24 89 -24 68 0 84 3 84 15 0 12 -16 15 -83 15
-46 0 -87 -3 -90 -6z"
        />
      </G>
    </Svg>
  );
};
