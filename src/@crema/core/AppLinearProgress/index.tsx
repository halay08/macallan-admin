import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    height: (props: {
      thickness: number;
      borderRadius: number;
      pathColor: string;
      activeColor: string;
    }) => props.thickness,
    borderRadius: (props: {
      thickness: number;
      borderRadius: number;
      pathColor: string;
      activeColor: string;
    }) => props.borderRadius
  },
  colorPrimary: {
    backgroundColor: (props: {
      thickness: number;
      borderRadius: number;
      pathColor: string;
      activeColor: string;
    }) => props.pathColor
  },
  bar: {
    borderRadius: (props: {
      thickness: number;
      borderRadius: number;
      pathColor: string;
      activeColor: string;
    }) => props.borderRadius,
    backgroundColor: (props: {
      thickness: number;
      borderRadius: number;
      pathColor: string;
      activeColor: string;
    }) => props.activeColor
  }
});

interface CustomLinearProgressProps {
  pathColor: string;
  activeColor: string;
  borderRadius: number;
  thickness: number;

  [x: string]: any;
}

const CustomLinearProgress: React.FC<CustomLinearProgressProps> = ({
  pathColor,
  activeColor,
  thickness,
  borderRadius,
  ...rest
}) => {
  const classes = useStyles({
    pathColor,
    activeColor,
    thickness,
    borderRadius
  });
  return (
    <LinearProgress
      className={classes.root}
      classes={{ colorPrimary: classes.colorPrimary, bar: classes.bar }}
      {...rest}
    />
  );
};

interface AppLinearProgressProps {
  pathColor?: string;
  borderRadius?: number;
  activeColor?: string;
  thickness?: number;
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query';

  [x: string]: any;
}

const AppLinearProgress: React.FC<AppLinearProgressProps> = ({
  thickness = 5,
  borderRadius = 10,
  pathColor = '#d6d6d6',
  activeColor = '#1a90ff',
  variant = 'determinate',
  ...rest
}) => {
  return (
    <CustomLinearProgress
      pathColor={pathColor}
      thickness={thickness}
      borderRadius={borderRadius}
      activeColor={activeColor}
      variant={variant}
      {...rest}
    />
  );
};
export default AppLinearProgress;
