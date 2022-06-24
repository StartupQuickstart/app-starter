import { Private } from '@startupquickstart/react/authenticators';
import { Users } from '@startupquickstart/react/views';
import { Dashboard } from '@/views';

export const routes = [
  { path: '/', Component: Dashboard, Authenticator: Private },
  { path: '/admin/users', Component: Users, Authenticator: Private },
];

export default routes;
