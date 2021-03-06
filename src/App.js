import React from 'react';

//components
import Spinner from './features/spinner';

//styles
import styled from 'styled-components';

// section component with lazy loading
const NavBar = React.lazy(() => import('./components/Navbar'));
const ContentSection = React.lazy(() => import('./components/ContentSection'));

function App() {
  return (
    <React.Suspense fallback={Spinner}>
      <Layout>
        <NavBar />
        <ContentSection />
      </Layout>
    </React.Suspense>
  );
}

export default App;

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;
