"use client";

import { RootLayoutProvider } from "@providers/RootLayoutProvider";
import { ThemeModeProvider } from "@providers/ThemeModeProvider";
import { ProviderEntry, Providers } from "@utils/Providers"

export type RootProviderProps = {
    providers?: ProviderEntry[];
    children: React.ReactNode;
}

export const RootProvider = ({
    providers = [],
    ...props
}: RootProviderProps) => {
    return <Providers
        data={[
            { provider: ThemeModeProvider },
            { provider: RootLayoutProvider },
            // ...providers
        ]}
        {...props}
    />
}