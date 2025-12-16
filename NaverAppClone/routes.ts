export const RouteNames = {
  Home: 'home' as const,
  Shopping: 'shopping' as const,
  HOME_TAB: 'home-tab' as const,
  BROWSER: 'browser' as const,
};

export type RootStackParamList = {
  [RouteNames.HOME_TAB]: undefined;
  [RouteNames.BROWSER]: {initialUrl: string};
};
