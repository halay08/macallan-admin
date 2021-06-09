import React from 'react';
import { Box } from '@material-ui/core';
import { Fonts } from '../../../shared/constants/AppEnums';
import { getBreakPointsValue, useWidth } from '../../utility/Utils';

interface SemiCircleProgressProps {
  activeColor?: string;
  valueNode?: any;
  labelStyle?: any;
  strokeWidth: number;
  pathColor?: string;
  diameter?: any;
  orientation?: 'up' | 'down';
  direction?: 'left' | 'right';
  showPercentValue?: boolean;
  percentage?: any;

  [x: string]: any;
}

const SemiCircleProgress: React.FC<SemiCircleProgressProps> = ({
  activeColor = '#02B732',
  labelStyle = {},
  strokeWidth = 10,
  pathColor = '#D0D0CE',
  diameter = 200,
  orientation = 'up',
  direction = 'right',
  showPercentValue = false,
  valueNode,
  percentage
}) => {
  const width = useWidth();
  const actualDiameter = getBreakPointsValue(diameter, width);

  const coordinateForCircle = actualDiameter / 2;
  const radius = (actualDiameter - 2 * strokeWidth) / 2;
  const circumference = Math.PI * radius;

  let percentageValue;
  if (percentage > 100) {
    percentageValue = 100;
  } else if (percentage < 0) {
    percentageValue = 0;
  } else {
    percentageValue = percentage;
  }
  const semiCirclePercentage = percentageValue * (circumference / 100);

  let rotation;
  if (orientation === 'down') {
    if (direction === 'left') {
      rotation = 'rotate(180deg) rotateY(180deg)';
    } else {
      rotation = 'rotate(180deg)';
    }
  } else {
    if (direction === 'right') {
      rotation = 'rotateY(180deg)';
    }
  }

  return (
    <Box width={actualDiameter} style={{ position: 'relative' }}>
      <svg
        width={actualDiameter}
        height={actualDiameter / 2}
        style={{ transform: rotation, overflow: 'hidden' }}
      >
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={pathColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: circumference
          }}
        />
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke={activeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: semiCirclePercentage,
            transition:
              'activeColor-dashoffset .3s ease 0s, activeColor-dasharray .3s ease 0s, activeColor .3s'
          }}
        />
      </svg>
      {showPercentValue && typeof valueNode === 'object' ? (
        valueNode
      ) : (
        <Box
          style={{
            width: '100%',
            left: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: orientation === 'down' ? 'auto' : '0',
            position: 'absolute',
            ...labelStyle
          }}
        >
          <Box
            component="span"
            fontSize={{ xs: 18, sm: 20, xl: 22 }}
            fontWeight={Fonts.LIGHT}
          >
            {percentage}%
          </Box>
          <Box
            component="span"
            fontSize={{ xs: 16, sm: 18, xl: 20 }}
            style={{ textTransform: 'uppercase' }}
            color="text.secondary"
          >
            Progress
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default SemiCircleProgress;
