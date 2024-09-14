import { http, createConfig } from "@wagmi/core";
import { polygon } from "wagmi/chains";

export const config = createConfig({
  autoConnect: true,
  chains: [polygon],
  transports: {
    [polygon.id]: http(),
  },
});

export const appName = "Seaport Sandbox Wagmi + RainbowKit";
