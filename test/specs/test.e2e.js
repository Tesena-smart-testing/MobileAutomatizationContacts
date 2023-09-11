describe("Find element by accessibility id,Class Name", () => {
  it("Find element by XPath", async () => {
    //xpath- (//tagname[@attribute=value])
    const xpathElement = await $(
      "//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']"
    );
    await xpathElement.click();
  });

  it("Find element by Accessibility id", async () => {
    const callBtn = await $("~Create contact");
    await callBtn.click();
  });

  it("Find element by Text", async () => {
    const textFind = "Save";
    const elementByText = await $(`//*[contains(@text, "${textFind}")]`);
    await elementByText.click();
  });

  it("Find element by Class Name", async () => {
    const classNamellBtn = await $("android.widget.EditText");
    await classNamellBtn.click();
  });
});
