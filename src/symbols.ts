import type { InjectionKey, Ref } from "vue";

export const sbGlobalName = Symbol('Global Name') as InjectionKey<Ref<string>>
