var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JFCLS6YR.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "h-full bg-slate-50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/newroute/index.tsx
var newroute_exports = {};
__export(newroute_exports, {
  default: () => Unterseite
});
var import_jsx_runtime3 = require("react/jsx-runtime");
function Unterseite() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex h-full min-h-screen flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { children: "Hallo Unterseite" }) });
}

// app/routes/reviews/index.tsx
var reviews_exports = {};
__export(reviews_exports, {
  default: () => NotesPage,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/models/review.server.ts
var import_client = require("@prisma/client"), prisma = new import_client.PrismaClient();
function getReviews() {
  return prisma.reviews.findMany();
}

// app/routes/reviews/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
async function loader({ request }) {
  let noteListItems = await getReviews();
  return (0, import_node2.json)({ noteListItems });
}
function NotesPage() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex h-full min-h-screen flex-col", children: data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "p-4", children: "No notes yet" }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: data.noteListItems.map((review) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { children: review.name }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: review.text })
  ] })) }) });
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader2
});
async function loader2({ request }) {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await fetch(url.toString(), { method: "HEAD" }).then((r) => {
      if (!r.ok)
        return Promise.reject(r);
    }), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react4 = require("react"), import_solid = require("@heroicons/react/20/solid"), import_react5 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_jsx_runtime5 = require("react/jsx-runtime"), product = {
  name: "Alex Milde",
  price: "--- \u20AC",
  rating: 3.9,
  reviewCount: 4,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Developer", href: "#" },
    { id: 2, name: "Fullstack", href: "#" }
  ],
  images: [
    {
      id: 1,
      imageSrc: "images/IMG_0779.jpeg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: !0
    },
    {
      id: 2,
      imageSrc: "images/IMG_0803.jpeg",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: !1
    },
    {
      id: 3,
      imageSrc: "images/IMG_8312.JPG",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: !1
    }
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    { name: "Heather Grey", bgColor: "bg-gray-400", selectedColor: "ring-gray-400" }
  ],
  sizes: [
    { name: "Vue", inStock: !0 },
    { name: "React", inStock: !0 },
    { name: "Php", inStock: !0 },
    { name: "CI-CD", inStock: !0 },
    { name: "JS/TS", inStock: !0 },
    { name: "IE 9", inStock: !1 }
  ],
  description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors"
  ]
}, policies = [
  { name: "International delivery", icon: import_outline.GlobeAmericasIcon, description: "Get your order in 2 years" },
  { name: "Loyalty rewards", icon: import_outline.CurrencyDollarIcon, description: "Don't look at other tees" }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Index() {
  let [selectedColor, setSelectedColor] = (0, import_react4.useState)(product.colors[0]), [selectedSize, setSelectedSize] = (0, import_react4.useState)(product.sizes[2]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "pt-6 pb-16 sm:pb-24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { "aria-label": "Breadcrumb", className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ol", { role: "list", className: "flex items-center space-x-4", children: [
      product.breadcrumbs.map((breadcrumb) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: breadcrumb.href, className: "mr-4 text-base text-gray-900 font-sofia-medium", children: breadcrumb.name }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "svg",
          {
            viewBox: "0 0 6 20",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            className: "h-5 w-auto text-gray-300",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z", fill: "currentColor" })
          }
        )
      ] }) }, breadcrumb.id)),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: product.href, "aria-current": "page", className: "text-base text-gray-500 hover:text-gray-600 font-sofia-medium", children: product.name }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "lg:col-span-5 lg:col-start-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "text-xl font-medium text-gray-900", children: product.name }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-xl font-medium text-gray-900", children: product.price })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "sr-only", children: "Reviews" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "text-sm text-gray-700", children: [
              product.rating,
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: " out of 5 stars" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "ml-1 flex items-center", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              import_solid.StarIcon,
              {
                className: classNames(
                  product.rating > rating ? "text-yellow-400" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                ),
                "aria-hidden": "true"
              },
              rating
            )) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { "aria-hidden": "true", className: "ml-4 text-sm text-gray-300", children: "\xB7" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "ml-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("a", { href: "#", className: "text-sm font-medium text-indigo-600 hover:text-indigo-500", children: [
              "See all ",
              product.reviewCount,
              " reviews"
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "sr-only", children: "Images" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8", children: product.images.map((image) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "img",
          {
            src: image.imageSrc,
            alt: image.imageAlt,
            className: classNames(
              image.primary ? "lg:col-span-2 lg:row-span-2" : "hidden lg:block",
              "rounded-lg"
            )
          },
          image.id
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8 lg:col-span-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("form", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-sm font-medium text-gray-900", children: "Variants" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.RadioGroup, { value: selectedColor, onChange: setSelectedColor, className: "mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.RadioGroup.Label, { className: "sr-only", children: " Choose a color " }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex items-center space-x-3", children: product.colors.map((color) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                import_react5.RadioGroup.Option,
                {
                  value: color,
                  className: ({ active, checked }) => classNames(
                    color.selectedColor,
                    active && checked ? "ring ring-offset-1" : "",
                    !active && checked ? "ring-2" : "",
                    "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.RadioGroup.Label, { as: "span", className: "sr-only", children: [
                      " ",
                      color.name,
                      " "
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: classNames(
                          color.bgColor,
                          "h-8 w-8 border border-black border-opacity-10 rounded-full"
                        )
                      }
                    )
                  ]
                },
                color.name
              )) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-sm font-medium text-gray-900", children: "Available Options" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "#", className: "text-sm font-medium text-indigo-600 hover:text-indigo-500", children: "See options chart" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.RadioGroup, { value: selectedSize, onChange: setSelectedSize, className: "mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.RadioGroup.Label, { className: "sr-only", children: " Choose a size " }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grid grid-cols-3 gap-3 sm:grid-cols-6", children: product.sizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                import_react5.RadioGroup.Option,
                {
                  value: size,
                  className: ({ active, checked }) => classNames(
                    size.inStock ? "cursor-pointer focus:outline-none" : "opacity-25 cursor-not-allowed",
                    active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                    checked ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700" : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                    "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                  ),
                  disabled: !size.inStock,
                  children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.RadioGroup.Label, { as: "span", children: size.name })
                },
                size.name
              )) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "submit",
              className: "mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              children: "Contact"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-sm font-medium text-gray-900", children: "Description" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: "prose prose-sm mt-4 text-gray-500",
              dangerouslySetInnerHTML: { __html: product.description }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8 border-t border-gray-200 pt-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-sm font-medium text-gray-900", children: "Fabric & Care" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "prose prose-sm mt-4 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { role: "list", children: product.details.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: item }, item)) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { "aria-labelledby": "policies-heading", className: "mt-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { id: "policies-heading", className: "sr-only", children: "Our Policies" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dl", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2", children: policies.map((policy) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "rounded-lg border border-gray-200 bg-gray-50 p-6 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("dt", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(policy.icon, { className: "mx-auto h-6 w-6 flex-shrink-0 text-gray-400", "aria-hidden": "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "mt-4 text-sm font-medium text-gray-900", children: policy.name })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { className: "mt-1 text-sm text-gray-500", children: policy.description })
          ] }, policy.name)) })
        ] })
      ] })
    ] }) })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5d6cefb9", entry: { module: "/build/entry.client-NFEMGWEF.js", imports: ["/build/_shared/chunk-GJSIWBVP.js", "/build/_shared/chunk-LMXH6R3J.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-R5AWXPMQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-BQ2SXEZN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WYVDLC7N.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/newroute/index": { id: "routes/newroute/index", parentId: "root", path: "newroute", index: !0, caseSensitive: void 0, module: "/build/routes/newroute/index-CRUNKCRI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reviews/index": { id: "routes/reviews/index", parentId: "root", path: "reviews", index: !0, caseSensitive: void 0, module: "/build/routes/reviews/index-NIG67ADA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-5D6CEFB9.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/newroute/index": {
    id: "routes/newroute/index",
    parentId: "root",
    path: "newroute",
    index: !0,
    caseSensitive: void 0,
    module: newroute_exports
  },
  "routes/reviews/index": {
    id: "routes/reviews/index",
    parentId: "root",
    path: "reviews",
    index: !0,
    caseSensitive: void 0,
    module: reviews_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
