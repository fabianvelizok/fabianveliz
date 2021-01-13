import { ApolloProvider } from "@apollo/client";
import { useApollo } from "Apollo/apolloClient";

import GoogleTagManager from 'Components/atoms/GoogleTagManager/GoogleTagManager';
import 'Styles/base/base.scss';

function MyApp({ Component, pageProps }) {
  const client = useApollo();
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />

      <GoogleTagManager />
    </ApolloProvider>
  );
}

export default MyApp;
