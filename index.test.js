const getAboutUsLink = require("./index");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});
test("Returns acerca-de for spanish language", () => {
    expect(getAboutUsLink("es-ES")).toBe("/acerca-de")
})