import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.something.something',
  appName: 'Ionic App',
  webDir: '../../dist/ionic-app',
  bundledWebRuntime: false,
  loggingBehavior: 'debug',
  includePlugins: [],
};

export default config;
