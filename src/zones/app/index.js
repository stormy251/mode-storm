import {LaunchDarklyContext, LaunchDarklyContextProvider, launchDarklyInit} from './contexts/LaunchDarklyContext';
import {ModalContext, ModalContextProvider} from './contexts/ModalContext';
import {UserContext, UserContextProvider, userInit} from './contexts/UserContext';
import AppLayout from './AppLayout';

const zoneInit = async () => {
  const userInitData = await userInit();
  const launchDarklyInitData = await launchDarklyInit(userInitData.user);

  return {
    ...userInitData,
    ...launchDarklyInitData
  };
};

const LayoutComponent = AppLayout;

export {
  zoneInit,
  LayoutComponent,
  LaunchDarklyContext,
  LaunchDarklyContextProvider,
  ModalContext,
  ModalContextProvider,
  UserContext,
  UserContextProvider
};
