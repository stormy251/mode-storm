import {spaceInit} from './contexts/SpaceContext';
import HomeLayout from './HomeLayout';
import {ModeZone} from 'lib/types/ModeZone';

const HomeZone: ModeZone = {
  zoneInit: async ({query}) => {
    const spaceInitData = await spaceInit(query.spaceId);

    return {
      ...spaceInitData
    };
  },
  LayoutComponent: HomeLayout
};

export default HomeZone;
