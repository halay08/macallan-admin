import React from 'react';
import Grid from '@material-ui/core/Grid';
import CoinStats from './CoinStats';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import { isBreakPointDown } from '../../../../@crema/utility/Utils';
import { blue, indigo, red, teal } from '@material-ui/core/colors';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { CoinsDataProps } from '../../../../types/models/dashboards/Crypto';

interface Props {
  coinsData: CoinsDataProps;
}

const Coins: React.FC<Props> = ({ coinsData }) => {
  return (
    <Box>
      <Box
        component="h2"
        color="text.primary"
        fontSize={16}
        mb={{ xs: 4, sm: 4, xl: 6 }}
        fontWeight={Fonts.BOLD}
      >
        <IntlMessages id="dashboard.coins" />
      </Box>
      <Grid container spacing={isBreakPointDown('md') ? 4 : 8}>
        <Grid item xs={12} sm={6}>
          <CoinStats
            icon={'/assets/images/bitcoin.png'}
            bgColor={red[600]}
            data={coinsData.bitcoin}
            heading={<IntlMessages id="dashboard.bitcoinPrice" />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CoinStats
            icon={'/assets/images/etherium.png'}
            bgColor={blue[500]}
            data={coinsData.etherium}
            heading={<IntlMessages id="dashboard.etheriumPrice" />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CoinStats
            icon={'/assets/images/litcoin.png'}
            bgColor={indigo[700]}
            data={coinsData.liteCoin}
            heading={<IntlMessages id="dashboard.litecoinPrice" />}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CoinStats
            icon={'/assets/images/ripple.png'}
            bgColor={teal[600]}
            data={coinsData.ripple}
            heading={<IntlMessages id="dashboard.ripplePrice" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Coins;
