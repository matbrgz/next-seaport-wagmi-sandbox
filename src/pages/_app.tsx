import type { AppProps } from "next/app";
import * as React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { WagmiConfig } from "wagmi";
import { appName, config } from "../wagmi";
import { SeaportContextProvider } from "../context/SeaportContext";
import { StorageContextProvider } from "../context/StorageContext";

import "../styles/styles.css";

const queryClient = new QueryClient() 

function App({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig client={config}>
			<QueryClientProvider client={queryClient}> 
				<SeaportContextProvider>
					<StorageContextProvider>
						<Component {...pageProps} />
					</StorageContextProvider>
				</SeaportContextProvider>
				</QueryClientProvider> 
		</WagmiConfig>
	);
}

export default App;
