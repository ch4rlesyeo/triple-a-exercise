declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-object-type
  interface FC<T = {}> extends React.FC<T & { children?: React.ReactNode }> {}
}

// This export is needed to make the file a module
export {};
