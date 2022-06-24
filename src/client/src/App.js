import '@startupquickstart/react/assets/css/main.css';
import { Admin } from '@startupquickstart/react/components';
import { StartupQuickstartServer } from '@startupquickstart/react/lib';
import routes from './routes';

const { Auth, Api } = StartupQuickstartServer;

export function App() {
  return (
    <Admin
      Auth={new Auth('v1')}
      Api={Api}
      routes={routes}
      sidebarItems={[
        {
          name: '',
          items: [{ name: 'Dashboard', to: '/', icon: 'BarChart2' }],
        },
        {
          name: 'Admin',
          canView: (user) => ['admin', 'super_admin'].some((role) => user?.roles?.includes?.(role)),
          items: [{ name: 'Users', to: '/admin/users', icon: 'Users' }],
        },
      ]}
      requireActivation={false}
      callToAction={{
        title: 'StartupQuickStart Beta',
        description: 'This is a beta version of the StartupQuickStart.',
        actionTitle: 'Learn More',
        actionTo: 'https://github.com/startupquickstart/sample-app',
        newTab: true,
      }}
    />
  );
}

export default App;
