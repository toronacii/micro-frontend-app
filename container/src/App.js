import { mount } from '@marketing/MarketingApp';
import RemoteApp from './components/RemoteApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <RemoteApp mount={mount} />
    </BrowserRouter>);
}