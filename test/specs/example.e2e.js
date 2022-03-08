describe("My test app", () => {
  it('shows "Hello World!" text', async () => {
    var message = await $("h1").getText();
    expect(message).toBe('Hello World!');
  });
});
