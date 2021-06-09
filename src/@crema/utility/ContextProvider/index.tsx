import React, { useCallback, useReducer } from 'react';
import defaultConfig from './defaultConfig';
import AppContext from '../AppContext';
import routes from '../../../modules';
import { contextReducer, ThemeSetting } from './ContextReducer';
import { CremaTheme } from '../../../types/AppContextPropsType';
import {
  FooterType,
  HeaderType,
  LayoutType,
  RouteTransition,
  ThemeMode,
  ThemeStyle
} from '../../../shared/constants/AppEnums';

export const ContextState = {
  theme: defaultConfig.theme,
  footer: defaultConfig.footer,
  footerType: defaultConfig.footerType,
  themeMode: defaultConfig.themeMode,
  headerMode: defaultConfig.headerMode,
  themeStyle: defaultConfig.themeStyle,
  layoutType: defaultConfig.layoutType,
  isRTL: defaultConfig.theme.direction === 'rtl',
  locale: defaultConfig.locale,
  navStyle: defaultConfig.navStyle,
  rtAnim: defaultConfig.rtAnim,
  primary: defaultConfig.theme.palette.primary.main,
  sidebarColor: defaultConfig.theme.palette.sidebar.bgColor,
  secondary: defaultConfig.theme.palette.secondary.main
};
const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(
    contextReducer,
    ContextState,
    () => ContextState
  );

  const setFooter = (footer: boolean) => {
    dispatch({ type: ThemeSetting.SET_FOOTER, payload: footer });
  };

  const setFooterType = (footerType: FooterType) => {
    dispatch({ type: ThemeSetting.SET_FOOTER_TYPE, payload: footerType });
  };

  const updateHeaderMode = (headerMode: HeaderType) => {
    dispatch({ type: ThemeSetting.UPDATE_HEADER_MODE, payload: headerMode });
  };

  const updateThemeStyle = useCallback((themeStyle: ThemeStyle) => {
    dispatch({ type: ThemeSetting.UPDATE_THEME_STYLE, payload: themeStyle });
  }, []);

  const updateLayoutStyle = (layoutType: LayoutType) => {
    dispatch({ type: ThemeSetting.UPDATE_LAYOUT_STYLE, payload: layoutType });
  };

  const changeLocale = (locale: any) => {
    dispatch({ type: ThemeSetting.CHANGE_LOCALE, payload: locale });
  };

  const changeNavStyle = useCallback(navStyle => {
    dispatch({ type: ThemeSetting.CHANGE_NAV_STYLE, payload: navStyle });
  }, []);

  const changeRTAnim = (rtAnim: RouteTransition) => {
    dispatch({ type: ThemeSetting.CHANGE_RT_ANIM, payload: rtAnim });
  };
  const updatePrimaryColor = (primary: string) => {
    dispatch({ type: ThemeSetting.UPDATE_PRIMARY_COLOR, payload: primary });
  };

  const updateSidebarColor = (sidebarColor: string) => {
    dispatch({
      type: ThemeSetting.UPDATE_SIDEBAR_COLOR,
      payload: sidebarColor
    });
  };

  const updateSecondaryColor = (secondary: string) => {
    dispatch({ type: ThemeSetting.UPDATE_SECONDARY_COLOR, payload: secondary });
  };

  const updateThemeMode = useCallback((themeMode: ThemeMode) => {
    dispatch({ type: ThemeSetting.UPDATE_THEME_MODE, payload: themeMode });
  }, []);
  const updateTheme = (theme: CremaTheme) => {
    dispatch({ type: ThemeSetting.UPDATE_THEME, payload: theme });
  };

  const setRTL = useCallback(rtl => {
    dispatch({ type: ThemeSetting.SET_RTL, payload: rtl });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        routes,
        updateLayoutStyle,
        rtlLocale: defaultConfig.rtlLocale,
        setRTL,
        updateSidebarColor,
        setFooter,
        setFooterType,
        updateThemeStyle,
        updateTheme,
        updateHeaderMode,
        updateThemeMode,
        updatePrimaryColor,
        updateSecondaryColor,
        changeLocale,
        changeNavStyle,
        changeRTAnim
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
