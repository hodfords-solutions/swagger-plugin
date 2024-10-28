import CustomParameters from './CustomParameters';
import CustomInfo from './CustomInfo';

const SwaggerCustomUI = (system) => ({
  wrapComponents: {
    parameters: CustomParameters,
    info: CustomInfo,
  },
  statePlugins: {
    app: {
      actions: {
        setAPISDK: (payload) => {
          return {
            type: 'SET_API_SDK',
            payload,
          };
        },
      },
      reducers: {
        'SET_API_SDK': (state, action) => {
          return state.set("apiSdk", action.payload);
        },
      },
      selectors: {
        apiSdk: (state) => state.get('apiSdk'),
      }
    }
  },
  async afterLoad(s) {
    const response = await fetch('https://jsonblob.com/api/jsonBlob/1299284977597145088');
    const data = await response.json();
    system.appActions.setAPISDK(data)
  },
});

export {
  SwaggerCustomUI,
}
