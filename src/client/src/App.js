import '@startupquickstart/react/assets/css/main.css';
import { Admin } from '@startupquickstart/react/templates';
import { Api, Auth } from '@startupquickstart/react/lib/startupquickstart-server';
import routes from './routes';

export function App() {
  return <Admin Auth={new Auth('v1')} Api={Api} routes={routes} />;
}

export default App;
