Feature("example");

Scenario("test something", async ({ I }) => {
  await I.refreshPage();

  await I.see("Hello World!", "h1");

  await I.mockRoute("https://fakestoreapi.com/**", (route) => {
    route.fulfill({
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      contentType: "application/json",
      body: '{"title": "this was mocked" }',
    });
  });

  await I.click("Ver título", 5);
  await I.see("this was mocked", "h1#title");
  await I.stopMockingRoute("https://fakestoreapi.com/**");
  await I.refreshPage();
  await I.click("Ver título");
  await I.waitForResponse('https://fakestoreapi.com/**', 10);
  await I.dontSee("this was mocked", "h1#title");
});
