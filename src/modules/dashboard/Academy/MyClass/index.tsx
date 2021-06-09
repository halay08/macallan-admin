import AppCard from '../../../../@crema/core/AppCard';
import AppList from '../../../../@crema/core/AppList';
import React from 'react';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppLinearProgress from '../../../../@crema/core/AppLinearProgress';
import { useIntl } from 'react-intl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core';
import { ClassData } from '../../../../types/models/dashboards/Academy';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  thumbRoot: {
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    padding: 6
  },
  perRoot: {
    color: fade(theme.palette.primary.main, 0.5),
    fontWeight: Fonts.MEDIUM
  }
}));

interface ClassItemProps {
  item: ClassData;
}

const ClassItem: React.FC<ClassItemProps> = ({ item }) => {
  const classes = useStyles();
  return (
    <Box
      key={item.id}
      px={5}
      py={2}
      display="flex"
      alignItems="center"
      className="item-hover"
    >
      <Box
        className={classes.thumbRoot}
        width={50}
        height={50}
        bgcolor="#470137"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img alt="" src={item.icon} />
      </Box>
      <Box flex={1} ml={4}>
        <Box display="flex" alignItems="center">
          <Box
            component="h3"
            display="inline-block"
            fontWeight={Fonts.REGULAR}
            fontSize={14}
          >
            {item.name}
          </Box>
          <Box ml="auto" className={classes.perRoot}>
            {item.percent}%
          </Box>
        </Box>
        <Box mt={1}>
          <AppLinearProgress value={item.percent} activeColor="#FAB817" />
        </Box>
      </Box>
    </Box>
  );
};

interface MyClassPropss {
  classData: ClassData[];
}

const MyClass: React.FC<MyClassPropss> = ({ classData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      height={1}
      title={messages['academy.myClass']}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={classData}
        renderRow={(data, index) => <ClassItem key={index} item={data} />}
      />
    </AppCard>
  );
};

export default MyClass;
