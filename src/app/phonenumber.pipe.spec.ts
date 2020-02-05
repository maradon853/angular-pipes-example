import { PhonenumberPipe } from "./phonenumber.pipe";

//all we need to initialize the pipe, get the result with the
//transform method and test the result with jasmine expect assertion.

describe("PhonenumberPipe", () => {
  it("create an instance", () => {
    const pipe = new PhonenumberPipe();
    expect(pipe).toBeTruthy();
  });

  it("should display in phone format", () => {
    const phoneNumber = "3333333333";

    const pipe = new PhonenumberPipe();

    const result = pipe.transform(phoneNumber);

    expect(result).toBe("(333) 333 3333");
  });
});
