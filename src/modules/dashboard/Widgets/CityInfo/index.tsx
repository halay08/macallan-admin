import React from 'react';
import Slider from 'react-slick';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Fonts } from '../../../../shared/constants/AppEnums';
import useStyles from './index.style';
import AppCard from '../../../../@crema/core/AppCard';
import { CityData } from '../../../../types/models/dashboards/Widgets';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

interface CityInfoProps {
  cityData: CityData[];
}

const CityInfo: React.FC<CityInfoProps> = ({ cityData }) => {
  const classes = useStyles();

  return (
    <AppCard height="1" contentStyle={{ padding: 0 }}>
      <Slider className={classes.imageCardSlide} {...settings}>
        {cityData.map(city => {
          return (
            <Box key={city.id} className={classes.imageSlide}>
              <img
                className={classes.imageSlideFull}
                src={city.image}
                alt="building"
              />
              <Box className={classes.imageSlideContent}>
                <Box
                  component="h3"
                  mb={4}
                  fontWeight={Fonts.BOLD}
                  fontSize={16}
                >
                  {city.name}
                </Box>

                <Box mt="auto">
                  <Typography component="p">{city.desc}</Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </AppCard>
  );
};

export default CityInfo;
