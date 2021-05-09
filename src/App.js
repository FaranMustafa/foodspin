import React from 'react';

import styled from 'styled-components';

import Spinner from './features/spinner';
import CircleSection from './components/CircleSection';

const NavBar = React.lazy(() => import('./components/Navbar'));

function App() {
  return (
    <React.Suspense fallback={Spinner}>
      <Layout>
        <NavBar />
        <CircleSection />
      </Layout>
    </React.Suspense>
  );
}

export default App;

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;
