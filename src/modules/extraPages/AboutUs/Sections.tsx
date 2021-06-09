import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../shared/constants/AppEnums';
import { AboutUsData } from '../../../@crema/services/db/extraPages/aboutUs';
import { CremaTheme } from '../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => {
  return {
    sectionCard: {
      padding: 20,
      textAlign: 'center'
    },
    avatarClass: {
      height: 60,
      width: 60,
      backgroundColor: (props: { avatarColor: string }) => props.avatarColor,
      display: 'inline-flex',
      [theme.breakpoints.up('md')]: {
        height: 60,
        width: 60,
        fontSize: 48
      },
      [theme.breakpoints.up('xl')]: {
        height: 80,
        width: 80
      }
    },
    readButton: {
      fontWeight: Fonts.MEDIUM,
      fontSize: 14,
      backgroundColor: 'white',
      color: 'black'
    }
  };
});

interface SectionsProps {
  data: AboutUsData;
}

const Sections: React.FC<SectionsProps> = ({ data }) => {
  const classes = useStyles({ avatarColor: data.avatarColor });

  return (
    <Card className={classes.sectionCard}>
      <Box mb={4}>
        <Avatar className={classes.avatarClass}>{data.icon}</Avatar>
      </Box>

      <Box component="h2" mb={4} fontWeight={Fonts.BOLD} fontSize={16}>
        {data.title}
      </Box>

      <Box component="p" mb={5}>
        {data.content}
      </Box>

      <Button variant="contained" className={classes.readButton}>
        <IntlMessages id="dashboard.readMore" />
      </Button>
    </Card>
  );
};

export default Sections;
