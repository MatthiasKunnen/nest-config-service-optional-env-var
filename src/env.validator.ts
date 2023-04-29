export class EnvironmentVariables {
    OPT?: string
}

export function validateEnvironmentVariables(config: Record<string, unknown>) {
    return {
        OPT: undefined,
    };
}
