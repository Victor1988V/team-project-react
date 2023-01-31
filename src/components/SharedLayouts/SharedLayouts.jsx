import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { useMatchMedia } from 'hooks/useMatchMedia';

import { Header } from 'components/Header/Header';
import { StyledContainerDiv } from './SharedLayouts.styled';
import HomePageBg from 'components/HomePageBg/HomePageBg';
import Loader from 'components/Loader/Loader';

import kapusta from 'images/kapustaTab.svg';
import kapustaDesktop from 'images/kapustaDesk.svg';

import { StyledHomePage, KapustaTab, KapustaDesk } from 'page/HomePage/HomePage.styled';

export const SharedLayouts = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  return (
    <StyledContainerDiv>
      <Header />
      <HomePageBg />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {isTablet && <KapustaTab src={kapusta} width="183" height="146" />}
      {isDesktop && (
        <KapustaDesk src={kapustaDesktop} width="1334" height="232" />
      )}
    </StyledContainerDiv>
  );
};
