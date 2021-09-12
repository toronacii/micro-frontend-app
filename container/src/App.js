import { mount } from '@marketing/MarketingApp';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RemoteApp from './components/RemoteApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ctnr'
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <RemoteApp mount={mount} />
      </BrowserRouter>
    </StylesProvider>);
}