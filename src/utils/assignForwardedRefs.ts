const assignForwardedRefs = (
  forwardedRef: React.Ref<HTMLInputElement>,
  ref: HTMLInputElement | null
) => {
  if (typeof forwardedRef === "function") {
    forwardedRef(ref);
  } else {
    (forwardedRef as any).current = ref;
  }
};

export default assignForwardedRefs;
