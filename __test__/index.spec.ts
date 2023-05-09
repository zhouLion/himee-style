import { assert, describe, it } from "vitest";
import { handlerUrl } from "../src/provider/Provider";

describe("handlerUrl", () => {
  it("common usage", () => {
    assert.equal(handlerUrl("test", {}), "test");

    assert.equal(
      handlerUrl("test/{id}", {
        // @ts-ignore
        path: {
          id: 1,
        },
      }),
      "test/1"
    );

    assert.equal(
      handlerUrl("test/delete/{id}", {
        // @ts-ignore
        path: {
          id: 1,
        },
      }),
      "test/delete/1"
    );

    assert.equal(
      handlerUrl("test", {
        // @ts-ignore
        query: {
          foo: 1,
          baz: 2,
        },
      }),
      "test?foo=1&baz=2"
    );

    assert.equal(
      handlerUrl("test/{id}", {
        // @ts-ignore
        path: {
          id: 1,
        },
        // @ts-ignore
        query: {
          foo: 1,
          baz: 2,
        },
      }),
      "test/1?foo=1&baz=2"
    );

    assert.equal(
      handlerUrl("test", {
        // @ts-ignore
        body: {
          foo: 1,
          baz: 2,
        },
      }),
      "test"
    );
  });
});
