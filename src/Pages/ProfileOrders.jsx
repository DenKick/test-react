import React from 'react';

import Layout from '../Components/Layout';
import AllOrders from '../Components/AllOrders';

export default function ProfileOrders() {
  return (
    <Layout pageName="Мой профиль">
      <AllOrders />
    </Layout>
  )
}
