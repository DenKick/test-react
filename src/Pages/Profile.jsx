import React from 'react';

import Layout from '../Components/Layout';
import Orders from '../Components/Orders';
import ECardsContainer from '../Components/ECardsContainer';

export default function Profile() {
  return (
    <Layout pageName="Мой профиль">
      <Orders />
      <ECardsContainer />
    </Layout>
  )
}
