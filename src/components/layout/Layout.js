import propTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header/Header';

const Layout = ({ children }) => (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  )
const Main = styled.main`
  margin: 50px auto;
  width: 100%;
  max-width: 640px;
`;
Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
