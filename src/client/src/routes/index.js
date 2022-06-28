import { Subscription } from '@startupquickstart/react/authenticators';
import { Users } from '@startupquickstart/react/views';
import { Dashboard } from '@/views';

export const routes = [
  { path: '/', Component: Dashboard, Authenticator: Subscription },
  { path: '/admin/users', Component: Users, Authenticator: Subscription },
];

export default routes;
