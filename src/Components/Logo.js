import React from 'react';
import {View, Text} from 'react-native';
import Svg, {G, Text as Texttwo, TSpan, Path} from 'react-native-svg';

export default function Logo() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={150}
      height={45}
      viewBox="0 0 188.544 54">
      <G data-name="Group 2991">
        <Texttwo
          data-name="PACE X"
          transform="translate(51.545 44)"
          fill="#4571b0"
          fontSize={41}
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight={700}>
          <TSpan x={0} y={0}>
            {'PACE X'}
          </TSpan>
        </Texttwo>
        <G data-name="Group 2984" fill="none" strokeWidth={10}>
          <Path
            data-name="Line 40"
            stroke="#233551"
            opacity={0.88}
            d="M43.341 10.839L13.714 40.466"
          />
          <Path
            data-name="Line 41"
            stroke="#244674"
            opacity={0.88}
            d="M35.392 8.671L8.655 35.769"
          />
          <Path
            data-name="Line 42"
            stroke="#285eab"
            opacity={0.88}
            d="M23.83 10.116L3.597 30.349"
          />
          <Path
            data-name="Line 43"
            stroke="#233551"
            opacity={0.88}
            d="M12.991 15.897l28.904 29.627"
          />
          <Path
            data-name="Line 44"
            stroke="#244674"
            opacity={0.88}
            d="M7.933 20.955l24.569 24.569"
          />
          <Path
            data-name="Line 45"
            stroke="#285eab"
            opacity={0.88}
            d="M3.597 25.291L23.83 46.247"
          />
        </G>
      </G>
    </Svg>
  );
}
