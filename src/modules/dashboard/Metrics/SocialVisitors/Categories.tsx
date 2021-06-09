import React from 'react';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { SocialVisitorsData } from '../../../../types/models/dashboards/Metrics';

interface CategoriesProps {
  data: SocialVisitorsData[];
}

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {data.map((item: SocialVisitorsData) => {
        return (
          <Box px={4.5} mb={2} key={item.id}>
            <Box display="flex" alignItems="center">
              <Box
                component="span"
                height={{ xs: 12, xl: 16 }}
                width={{ xs: 12, xl: 16 }}
                borderRadius="50%"
                display="block"
                bgcolor={item.color}
                p={1}
                mr={2}
              />
              <Box component="p" mb={1} fontWeight={Fonts.MEDIUM} fontSize={16}>
                {item.visitors}
              </Box>
            </Box>
            <Box
              component="p"
              color="text.secondary"
              fontSize={14}
              style={{ textTransform: 'capitalize' }}
            >
              {item.name}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Categories;
