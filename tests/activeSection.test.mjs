import test from "node:test";
import assert from "node:assert/strict";
import { getActiveSection } from "../src/lib/activeSection.ts";

const sections = [
  { id: "hero", top: 0 },
  { id: "projects", top: 600 },
  { id: "about", top: 1400 },
  { id: "contact", top: 2000 },
];

test("a short Contact section is active at the bottom even before reaching the marker", () => {
  assert.equal(getActiveSection(sections, 1700, 800, 2500, 100), "contact");
});
test("About stays active while Contact is below the marker and the page has not ended", () => {
  assert.equal(getActiveSection(sections, 1550, 800, 2500, 100), "about");
});
test("normal section transitions account for the fixed navigation", () => {
  assert.equal(getActiveSection(sections, 499, 800, 2500, 100), "hero");
  assert.equal(getActiveSection(sections, 500, 800, 2500, 100), "projects");
  assert.equal(getActiveSection(sections, 1300, 800, 2500, 100), "about");
});
test("scrolling back up clears the Contact selection", () => {
  assert.equal(getActiveSection(sections, 1700, 800, 2500, 100), "contact");
  assert.equal(getActiveSection(sections, 1450, 800, 2500, 100), "about");
});
test("a page shorter than the viewport does not select its last section automatically", () => {
  assert.equal(getActiveSection([{ id: "hero", top: 0 }, { id: "contact", top: 500 }], 0, 900, 700, 100), "hero");
});
test("clicking Contact holds its indicator while smooth scrolling through Work and About", () => {
  assert.equal(getActiveSection(sections, 600, 800, 2800, 100, "contact"), "contact");
  assert.equal(getActiveSection(sections, 1400, 800, 2800, 100, "contact"), "contact");
  assert.equal(getActiveSection(sections, 1900, 800, 2800, 100), "contact");
});
test("invalid destinations cannot override the real active section", () => {
  assert.equal(getActiveSection(sections, 600, 800, 2800, 100, "missing"), "projects");
});
test("Contact has no wraparound to Work at or beyond the bottom", () => {
  assert.equal(getActiveSection(sections, 2000, 800, 2800, 100), "contact");
  assert.equal(getActiveSection(sections, 2010, 800, 2800, 100), "contact");
});
