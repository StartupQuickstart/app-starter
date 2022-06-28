import path from 'path';
import { server, setAppConfig } from '@startupquickstart/server';

(async () => {
  await server.start();

  setAppConfig({
    pricing: {
      title: 'title',
      slogan: 'slogan',
      prices: [
        {
          title: 'title',
          subtitle: 'subtitle',
          isRecommended: false,
          features: [
            { id: '1', title: 'feature1', isAvailable: true },
            { id: '2', title: 'feature2', isAvailable: true },
            { id: '3', title: 'feature3', isAvailable: false },
            { id: '4', title: 'feature4', isAvailable: false },
            { id: '5', title: 'feature5', isAvailable: false },
          ],
          plans: {
            monthly: { id: 'price_1IJWvLBcyMPDim1C0SbUGDvV', price: 50 },
            yearly: { id: 'price_1IJWvLBcyMPDim1C0SbUGDvV', price: 40 },
          },
        },
        {
          title: 'title',
          subtitle: 'subtitle',
          isRecommended: true,
          features: [
            { id: '1', title: 'feature1', isAvailable: true },
            { id: '2', title: 'feature2', isAvailable: true },
            { id: '3', title: 'feature3', isAvailable: false },
            { id: '4', title: 'feature4', isAvailable: false },
            { id: '5', title: 'feature5', isAvailable: false },
          ],
          plans: {
            monthly: { id: 'price_1IJWvLBcyMPDim1C0SbUGDvV', price: 50 },
            yearly: { id: 'price_1IJWvLBcyMPDim1C0SbUGDvV', price: 40 },
          },
        },
        {
          title: 'title',
          subtitle: 'subtitle',
          isRecommended: false,
          features: [
            { id: '1', title: 'feature1', isAvailable: true },
            { id: '2', title: 'feature2', isAvailable: true },
            { id: '3', title: 'feature3', isAvailable: false },
            { id: '4', title: 'feature4', isAvailable: false },
            { id: '5', title: 'feature5', isAvailable: false },
          ],
          plans: {
            monthly: { id: 'price_1IJWvLBcyMPDim1C0SbUGDvV', price: 50 },
            yearly: { id: 'price_1IJWvLBcyMPDim1C0SbUGDvV', price: 40 },
          },
        },
      ],
    },
  });

  server.registerClient(path.resolve(__dirname, './client/build'));
})();
