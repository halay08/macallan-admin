import React from 'react';
import Box from '@material-ui/core/Box';
import { indigo } from '@material-ui/core/colors';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { BalanceCoins } from '../../../../types/models/dashboards/Crypto';

interface CoinsInfoProps {
  coins: BalanceCoins[];
}

const CoinsInfo: React.FC<CoinsInfoProps> = ({ coins }) => {
  return (
    <Box
      mx={-2}
      mb={{ xl: 1 }}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {coins.map(coin => {
        return (
          <Box mt={{ xl: 3 }} px={2} key={coin.id}>
            <Box
              mb={{ xs: 0, sm: 0, xl: 3 }}
              color="primary.contrastText"
              fontWeight={Fonts.BOLD}
              component="h3"
              fontSize={20}
            >
              {coin.value}
            </Box>
            <Box component="p" fontSize={14} color={indigo[200]}>
              {coin.name}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CoinsInfo;
