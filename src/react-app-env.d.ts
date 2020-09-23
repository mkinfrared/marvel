/// <reference types="react-scripts" />

export type LoadableModal = <T>(
  loadFn: (props: T) => Promise<DefaultComponent<T>>
) => LoadableComponent<T>;
