import React from 'react';
import { AuthUserProvider } from '../../context/authUserContext';

interface AppProps {
    Component: React.ComponentType<any>;
    pageProps: Record<string, any>;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <AuthUserProvider>
        <Component {...pageProps} />
    </AuthUserProvider>
);

export default App;