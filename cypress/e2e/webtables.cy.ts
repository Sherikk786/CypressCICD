import { WebTablesPage } from "../support/pages/WebTablesPage";

describe("DemoQA Web Tables Test", () => {
  const webTables = new WebTablesPage();

  it("should add a new record successfully", () => {
    webTables.navigate();

  });
});
