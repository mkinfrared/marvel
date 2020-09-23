import assignForwardedRefs from "./assignForwardedRefs";

describe("assignForwardedRefs", () => {
  it("should call forwardedRef with ref if forwardedRef is a function", () => {
    const ref = 42 as any;
    const forwardedRef = jest.fn();

    assignForwardedRefs(forwardedRef, ref);

    expect(forwardedRef).toHaveBeenCalledTimes(1);

    expect(forwardedRef).toHaveBeenCalledWith(ref);
  });

  it("should assign forwardedRef.current to ref if forwardedRef is a ref object", () => {
    const ref = 42 as any;

    const forwardedRef = {
      current: null
    };

    assignForwardedRefs(forwardedRef, ref);

    expect(forwardedRef.current).toBe(ref);
  });
});
