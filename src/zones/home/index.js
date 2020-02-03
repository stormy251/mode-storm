import {DefinitionContext, DefinitionContextProvider} from './contexts/DefinitionContext';
import {OrganizationContext, OrganizationContextProvider} from './contexts/OrganizationContext';
import {SpaceContext, SpaceContextProvider, spaceInit} from './contexts/SpaceContext';
import HomeLayout from './HomeLayout';

const zoneInit = async ({query}) => {
  const spaceInitData = await spaceInit(query.spaceId);

  return {
    ...spaceInitData
  };
};

const LayoutComponent = HomeLayout;

export {
  zoneInit,
  LayoutComponent,
  DefinitionContext,
  DefinitionContextProvider,
  OrganizationContext,
  OrganizationContextProvider,
  SpaceContext,
  SpaceContextProvider
};
