import {launchDarklyInit} from './contexts/LaunchDarklyContext';
import {userInit} from './contexts/UserContext';
import AppLayout from './AppLayout';
import {ModeZone} from 'lib/types/ModeZone';

const AppZone: ModeZone = {
  zoneInit: async () => {
    const userInitData = await userInit();
    const launchDarklyInitData = await launchDarklyInit(userInitData.user);

    return {
      ...userInitData,
      ...launchDarklyInitData
    };
  },
  LayoutComponent: AppLayout
};

export default AppZone;
