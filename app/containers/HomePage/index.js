// @flow
import React, {Component} from 'react';
import {Layout} from 'antd';
import {
  PageLayout,
  PageHeader,
  PageFooter,
  PageSider,
  PageContent,
  HeaderText,
  LogoWrapper,
} from './styled';
import Logo from './../../assets/nekonata_logo.png';
import 'antd/dist/antd.css';

import Menu from './components/Menu';
import ContentRouter from './components/ContentRouter';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <PageLayout>
        <PageHeader>
          <LogoWrapper>
          <img src={Logo} alt="Logo" height="36" width="36" />
          <HeaderText>Nekonata</HeaderText>
        </LogoWrapper>
          <Menu />
        </PageHeader>
        <Layout>
          <PageContent>
            <ContentRouter />
          </PageContent>
        </Layout>
        <PageFooter>Nekonata Network - Alpha build</PageFooter>
      </PageLayout>
    );
  }
}
