import { mount } from '@auth/AuthApp';
import RemoteApp from './RemoteApp';

export default ({ onSignIn }) => <RemoteApp mount={mount} onSignIn={onSignIn} />;
