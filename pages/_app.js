import "@/styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import '../public/estilo.css';

const activeChainId = ChainId.SolanaDevnet;

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThirdwebProvider desiredChainId={activeChainId}>
                <Component {...pageProps} />
            </ThirdwebProvider>
        </>
    );
}
