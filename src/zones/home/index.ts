import {spaceInit} from './contexts/SpaceContext';
import HomeLayout from './HomeLayout';

const HomeZone = {
  zoneInit: async ({query}) => {
    const spaceInitData = await spaceInit(query.spaceId);

    return {
      ...spaceInitData
    };
  },
  LayoutComponent: HomeLayout
};

export default HomeZone;
