import { ImageSourcePropType } from 'react-native';

interface AppConfig {
  api: unknown;
  meta: {
    title: string;
    description: string;
    logoImage: ImageSourcePropType;
  };
  fontFamily?: {
    [key: string]: string;
  };
  borderRadius?: {
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };
  theme: {
    dark: {
      colors: {
        primary: ColorFunction;
        secondary: ColorFunction;
        card: ColorFunction;
        foreground: ColorFunction;
        muted: ColorFunction;
        input: ColorFunction;
        border: ColorFunction;
        success: ColorFunction;
        warning: ColorFunction;
        info: ColorFunction;
        destructive: ColorFunction;
        background: ColorFunction;
        accent: ColorFunction;
      };
    };
    light: {
      colors: {
        primary: ColorFunction;
        secondary: ColorFunction;
        card: ColorFunction;
        foreground: ColorFunction;
        muted: ColorFunction;
        input: ColorFunction;
        border: ColorFunction;
        success: ColorFunction;
        warning: ColorFunction;
        info: ColorFunction;
        destructive: ColorFunction;
        background: ColorFunction;
        accent: ColorFunction;
      };
    };
  };
  auth: {
    login: string;
    logout: string;
    user: string;
  };
  routes: Route[];
}
interface Route {
  path: string;
  name: string;
  component: unknown;
  meta: {
    title: string;
    description: string;
    icon: string;
    permission: string;
  };
  children: Route[];
}

export type ColorFunction = (opacity?: number) => string;
export const appConfig: AppConfig = {
  api: {
    url: 'http://localhost:3000/api',
  },
  meta: {
    title: 'Angular Starter',
    description: 'Angular Starter',
    logoImage: require('./assets/favicon.png'),
  },
  auth: {
    login: '/login',
    logout: '/logout',
    user: '/user',
  },
  theme: {
    dark: {
      colors: {
        primary: (o: number = 1) => `hsla(163 91% 39% /${o})`,
        secondary: (o: number = 1) => `hsla(283 4% 65% /${o})`,
        card: (o: number = 1) => `hsla( 218 12% 13% /${o})`,
        foreground: (o: number = 1) => `hsla(140 16% 96% /${o})`,
        muted: (o: number = 1) => `hsla(240 18% 12% /${o})`,
        input: (o: number = 1) => `hsla(218 9% 27% /${o})`,
        border: (o: number = 1) => `hsla(218 9% 27% /${o})`,
        success: (o: number = 1) => `hsla(163 91% 39% /${o})`,
        warning: (o: number = 1) => `hsla(163 91% 39% /${o})`,
        info: (o: number = 1) => `hsla(195 91% 39% /${o})`,
        destructive: (o: number = 1) => `hsla(0 84% 60% /${o})`,
        background: (o: number = 1) => `hsla(206 13% 11% /${o})`,
        accent: (o: number = 1) => `hsla(218 9% 27% /${o})`,
      },
    },
    light: {
      colors: {
        primary: (o: number = 1) => `hsla(163 91% 39% /${o})`,
        secondary: (o: number = 1) => `hsla(210 16% 93% /${o})`,
        card: (o: number = 1) => `hsla(0 0% 100% /${o})`,
        foreground: (o: number = 1) => `hsla(180 4% 5% /${o})`,
        muted: (o: number = 1) => `hsla(240 7% 97% /${o})`,
        input: (o: number = 1) => `hsla(210 16% 87% /${o})`,
        border: (o: number = 1) => `hsla(210 11% 93% /${o})`,
        success: (o: number = 1) => `hsla(163 91% 39% /${o})`,
        warning: (o: number = 1) => `hsla(163 91% 39% /${o})`,
        info: (o: number = 1) => `hsla(195 91% 39% /${o})`,
        destructive: (o: number = 1) => `hsla(0 84% 60% /${o})`,
        background: (o: number = 1) => `hsla(0 0% 100% /${o})`,
        accent: (o: number = 1) => `hsla(240 7% 97% /${o})`,
      },
    },
  },
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: null,
      meta: {
        title: 'Dashboard',
        description: 'Dashboard',
        icon: 'dashboard',
        permission: '',
      },

      children: [],
    },
    {
      path: '/users',
      name: 'Users',
      component: null,
      meta: {
        title: 'Users',
        description: 'Users',
        icon: 'user',
        permission: 'users',
      },
      children: [],
    },
    {
      path: '/settings',
      name: 'Settings',
      component: null,
      meta: {
        title: 'Settings',
        description: 'Settings',
        icon: 'setting',
        permission: 'settings',
      },
      children: [],
    },
  ],
};
