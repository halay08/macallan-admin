import React, { useContext, useEffect } from 'react';
import MomentUtils from '@date-io/moment';
// import moment from 'moment';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import AppContext from '../AppContext';
import AppLocale from 'shared/localization';
import { responsiveFontSizes } from '@material-ui/core';
import { useBreakPointDown } from '../Utils';
import { NavStyle, ThemeMode, ThemeStyle } from 'shared/constants/AppEnums';
import { useUrlSearchParams } from 'use-url-search-params';
import AppContextPropsType from '../../../types/AppContextPropsType';

const CremaThemeProvider: React.FC<React.ReactNode> = props => {
  const {
    theme,
    locale,
    isRTL,
    updateThemeMode,
    changeNavStyle,
    updateThemeStyle,
    setRTL,
    updateTheme
  } = useContext<AppContextPropsType>(AppContext);
  const { muiLocale } = AppLocale[locale.locale];
  const isBelowMd = useBreakPointDown('md');

  const initailValue: InitialType = {};
  const types: TypesType = {};
  const [params] = useUrlSearchParams(initailValue, types);

  useEffect(() => {
    const updateQuerySetting = () => {
      if (params.theme_mode) {
        updateThemeMode!(params.theme_mode as ThemeMode);
      }
    };
    updateQuerySetting();
  }, [params.theme_mode, updateThemeMode]);

  useEffect(() => {
    const updateQuerySetting = () => {
      if (params.is_rtl) {
        setRTL!(params.is_rtl as boolean);
      }
      if (params.is_rtl || isRTL) {
        document.body.setAttribute('dir', 'rtl');
      } else {
        document.body.setAttribute('dir', 'ltr');
      }
    };
    updateQuerySetting();
  }, [isRTL, params.is_rtl, setRTL]);

  useEffect(() => {
    const updateQuerySetting = () => {
      if (params.nav_style) {
        changeNavStyle!(params.nav_style as NavStyle);
      }
    };
    updateQuerySetting();
  }, [changeNavStyle, params.nav_style]);

  useEffect(() => {
    const updateQuerySetting = () => {
      if (params.theme_style) {
        if (params.theme_style === ThemeStyle.MODERN) {
          if (isBelowMd) {
            theme.overrides.MuiCard.root.borderRadius = 20;
            theme.overrides.MuiToggleButton.root.borderRadius = 20;
          } else {
            theme.overrides.MuiCard.root.borderRadius = 30;
            theme.overrides.MuiToggleButton.root.borderRadius = 30;
          }
          theme.overrides.MuiButton.root.borderRadius = 30;
          theme.overrides.MuiCardLg.root.borderRadius = 50;
        } else {
          theme.overrides.MuiCard.root.borderRadius = 4;
          theme.overrides.MuiToggleButton.root.borderRadius = 4;
          theme.overrides.MuiButton.root.borderRadius = 4;
          theme.overrides.MuiCardLg.root.borderRadius = 4;
        }
        updateTheme!(theme);
        if (
          params.theme_style === ThemeStyle.MODERN ||
          params.theme_style === ThemeStyle.STANDARD
        ) {
          updateThemeStyle!(params.theme_style as ThemeStyle);
        }
      }
    };
    updateQuerySetting();
  }, [params.theme_style, theme, isBelowMd, updateTheme, updateThemeStyle]);

  return (
    <ThemeProvider
      theme={responsiveFontSizes(createMuiTheme(theme, muiLocale))}
    >
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {props.children}
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default React.memo(CremaThemeProvider);
