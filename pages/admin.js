import React from 'react';
import AdminPanel from '../components/AdminPanel';
import User from '../components/User';
import Container from '../components/styled/Container';

const AdminPage = () => (
  <User>
    {({ data: { me } }) => (
      <Container>
        {(!me || !me.permissions.includes('ADMIN')) && (
          <h3>
            401 // You have to have admin permissions to access this data.
          </h3>
        )}
        {me && me.permissions.includes('ADMIN') && <AdminPanel />}
      </Container>
    )}
  </User>
);

export default AdminPage;
