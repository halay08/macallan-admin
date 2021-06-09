import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
import useStyles from './index.style';
import Zoom from '@material-ui/core/Zoom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { TransitionProps } from '@material-ui/core/transitions';

const settings: {
  dots: boolean;
  arrows: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  adaptiveHeight: boolean;
} = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const renderRow = (data: any, index: number) => {
  if (data.metaData.type.startsWith('image')) {
    return (
      <img
        key={index}
        src={data.src}
        alt={data.name ? data.name : 'detail view'}
      />
    );
  } else {
    return (
      <Box className="embed-responsive">
        <iframe
          key={index}
          src={data.src}
          title={data.name ? data.name : 'detail view'}
        />
      </Box>
    );
  }
};
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

interface MediaViewerProps {
  index: number;
  medias: any;
  onClose: () => void;
}

const MediaViewer: React.FC<MediaViewerProps> = ({
  index,
  medias,
  onClose
}) => {
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (index > -1) setOpen(true);
    else {
      setOpen(false);
    }
  }, [index]);

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onClose}
      className={classes.dialogRoot}
      TransitionComponent={Transition}
    >
      <Box className={classes.mediaViewerRoot}>
        <IconButton className={classes.cancelBtn} onClick={onClose}>
          <HighlightOffIcon />
        </IconButton>
        {index >= 0 ? (
          <Box className={classes.carouselRoot}>
            <Slider
              // @ts-ignore
              settings={{ ...settings, initialSlide: index }}
              slickGoTo={index}
              containerStyle={{ width: '100%' }}
            >
              {medias.map((data: any, index: number) => renderRow(data, index))}
            </Slider>
          </Box>
        ) : null}
      </Box>
    </Dialog>
  );
};

export default MediaViewer;
