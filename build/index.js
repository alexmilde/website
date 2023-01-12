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
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_react_router_dom = require("react-router-dom");

// app/models/review.server.ts
var import_client = require("@prisma/client"), import_nodemailer = __toESM(require("nodemailer")), prisma = new import_client.PrismaClient();
function getReviewsPublishedCount() {
  return prisma.review.count({
    where: {
      published: !0
    }
  });
}
function getReviewsRatingAverage() {
  return prisma.review.aggregate({
    where: {
      published: !0
    },
    _avg: {
      rating: !0
    }
  });
}
function getReviews() {
  return prisma.review.findMany({
    where: {
      published: !0
    }
  });
}
async function createReview(review) {
  let info = await import_nodemailer.default.createTransport({
    host: "smtp.ionos.de",
    port: 465,
    secure: !0,
    auth: {
      user: "drop@finekost.com",
      pass: process.env.MAIL_PASSWORD
    }
  }).sendMail({
    from: "drop@finekost.com",
    to: "alex@finekost.com",
    subject: "New Review recieved",
    text: `${review.name} [${review.rating}] ${review.text}`,
    html: `${review.name} [${review.rating}] ${review.text}`
  });
  return prisma.review.create({ data: review });
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-DUGCVKHO.css";

// app/root.tsx
var import_react3 = require("react"), import_react4 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline");

// app/components.tsx/gallery.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Gallery(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8", children: props.images.map((image) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  )) });
}

// app/components.tsx/rating.tsx
var import_solid = require("@heroicons/react/20/solid"), import_jsx_runtime3 = require("react/jsx-runtime");
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Rating(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "text-sm text-gray-700", children: [
      props.rating,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: " out of 5 stars" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "items-cente ml-1 flex", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_solid.StarIcon,
      {
        className: classNames2(
          props.rating > rating ? "text-yellow-400" : "text-gray-200",
          "h-5 w-5 flex-shrink-0"
        ),
        "aria-hidden": "true"
      },
      rating
    )) })
  ] });
}

// app/root.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
async function loader({ request }) {
  let reviewsRatingAverage = (await getReviewsRatingAverage())._avg.rating;
  return { reviewsPublishedCount: await getReviewsPublishedCount(), reviewsRatingAverage };
}
var links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "Alex Milde / Fullstack Developer",
  viewport: "width=device-width,initial-scale=1"
}), product = {
  name: "Alex Milde.",
  price: "--- \u20AC",
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
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400"
    }
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
  {
    name: "International delivery",
    icon: import_outline.GlobeAmericasIcon,
    description: "Get your order in 2 years"
  },
  {
    name: "Loyalty rewards",
    icon: import_outline.CurrencyDollarIcon,
    description: "Don't look at other tees"
  }
];
function classNames3(...classes) {
  return classes.filter(Boolean).join(" ");
}
function App() {
  let data = (0, import_react2.useLoaderData)(), location = (0, import_react_router_dom.useLocation)(), [selectedColor, setSelectedColor] = (0, import_react3.useState)(product.colors[0]), [selectedSize, setSelectedSize] = (0, import_react3.useState)(product.sizes[2]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { className: "h-full bg-slate-50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "pt-6 pb-16 sm:pb-24", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "nav",
          {
            "aria-label": "Breadcrumb",
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ol", { role: "list", className: "flex items-center space-x-4", children: [
              product.breadcrumbs.map((breadcrumb) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "a",
                  {
                    href: breadcrumb.href,
                    className: "mr-4 font-sofia-medium text-base text-gray-900",
                    children: breadcrumb.name
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "svg",
                  {
                    viewBox: "0 0 6 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    className: "h-5 w-auto text-gray-300",
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                      "path",
                      {
                        d: "M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z",
                        fill: "currentColor"
                      }
                    )
                  }
                )
              ] }) }, breadcrumb.id)),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "a",
                {
                  href: product.href,
                  "aria-current": "page",
                  className: "font-sofia-medium text-base text-gray-500 hover:text-gray-600",
                  children: product.name
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "lg:col-span-5 lg:col-start-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "text-xl font-medium text-gray-900", children: product.name }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xl font-medium text-gray-900", children: product.price })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "sr-only", children: "Reviews" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Rating, { rating: data.reviewsRatingAverage }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "div",
                  {
                    "aria-hidden": "true",
                    className: "ml-4 text-sm text-gray-300",
                    children: "\xB7"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "ml-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                  import_react2.Link,
                  {
                    to: "/reviews",
                    className: "text-sm font-medium text-indigo-600 hover:text-indigo-500",
                    children: [
                      "See all ",
                      data.reviewsPublishedCount,
                      " reviews"
                    ]
                  }
                ) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0", children: [
            location.pathname !== "/" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react2.Outlet, {}),
            location.pathname === "/" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Gallery, { images: product.images })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-8 lg:col-span-5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("form", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-sm font-medium text-gray-900", children: "Variants" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                  import_react4.RadioGroup,
                  {
                    value: selectedColor,
                    onChange: setSelectedColor,
                    className: "mt-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react4.RadioGroup.Label, { className: "sr-only", children: [
                        " ",
                        "Choose a color",
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center space-x-3", children: product.colors.map((color) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                        import_react4.RadioGroup.Option,
                        {
                          value: color,
                          className: ({ active, checked }) => classNames3(
                            color.selectedColor,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react4.RadioGroup.Label, { as: "span", className: "sr-only", children: [
                              " ",
                              color.name,
                              " "
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                              "span",
                              {
                                "aria-hidden": "true",
                                className: classNames3(
                                  color.bgColor,
                                  "h-8 w-8 rounded-full border border-black border-opacity-10"
                                )
                              }
                            )
                          ]
                        },
                        color.name
                      )) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-8", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-sm font-medium text-gray-900", children: "Available Options" }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "a",
                    {
                      href: "#",
                      className: "text-sm font-medium text-indigo-600 hover:text-indigo-500",
                      children: "See options chart"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                  import_react4.RadioGroup,
                  {
                    value: selectedSize,
                    onChange: setSelectedSize,
                    className: "mt-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react4.RadioGroup.Label, { className: "sr-only", children: [
                        " ",
                        "Choose a size",
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grid grid-cols-3 gap-3 sm:grid-cols-6", children: product.sizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        import_react4.RadioGroup.Option,
                        {
                          value: size,
                          className: ({ active, checked }) => classNames3(
                            size.inStock ? "cursor-pointer focus:outline-none" : "cursor-not-allowed opacity-25",
                            active ? "ring-2 ring-indigo-500 ring-offset-2" : "",
                            checked ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700" : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                            "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                          ),
                          disabled: !size.inStock,
                          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.RadioGroup.Label, { as: "span", children: size.name })
                        },
                        size.name
                      )) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "submit",
                  className: "mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                  children: "Contact"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-10", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-sm font-medium text-gray-900", children: "Description" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "div",
                {
                  className: "prose prose-sm mt-4 text-gray-500",
                  dangerouslySetInnerHTML: { __html: product.description }
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "mt-8 border-t border-gray-200 pt-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-sm font-medium text-gray-900", children: "Fabric & Care" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "prose prose-sm mt-4 text-gray-500", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { role: "list", children: product.details.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: item }, item)) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { "aria-labelledby": "policies-heading", className: "mt-10", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { id: "policies-heading", className: "sr-only", children: "Our Policies" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dl", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2", children: policies.map((policy) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "div",
                {
                  className: "rounded-lg border border-gray-200 bg-gray-50 p-6 text-center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("dt", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        policy.icon,
                        {
                          className: "mx-auto h-6 w-6 flex-shrink-0 text-gray-400",
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "mt-4 text-sm font-medium text-gray-900", children: policy.name })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dd", { className: "mt-1 text-sm text-gray-500", children: policy.description })
                  ]
                },
                policy.name
              )) })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
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

// app/routes/login/index.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login
});
var import_react5 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/utils/session.server.ts
var import_node2 = require("@remix-run/node"), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function login(password) {
  return password === "letmein";
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function createUserSession(userId, redirectTo) {
  console.log("create session");
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/routes/login/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), action = async ({ request }) => {
  let password = (await request.formData()).get("password");
  return await login(password) ? createUserSession("user", "../admin") : (0, import_node3.redirect)("");
};
function Login() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Login" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react5.Form, { method: "post", className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          type: "password",
          name: "password",
          required: !0
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "submit",
          className: "rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700",
          children: "Send"
        }
      )
    ] })
  ] });
}

// app/routes/reviews.tsx
var reviews_exports = {};
__export(reviews_exports, {
  default: () => Reviews,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_solid2 = require("@heroicons/react/20/solid");
var import_jsx_runtime6 = require("react/jsx-runtime");
async function loader3({ request }) {
  let noteListItems = await getReviews();
  return (0, import_node4.json)({ noteListItems });
}
function Reviews() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "w-2/3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react6.Link,
        {
          to: "write",
          className: "text-sm font-medium text-indigo-600 hover:text-indigo-500",
          children: "Write a review"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react6.Link,
        {
          to: "/",
          className: "text-sm font-medium text-indigo-600 hover:text-indigo-500",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_solid2.XCircleIcon, { className: "h-5 w-5 flex-shrink-0", "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Outlet, {}),
      data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "p-4", children: "No notes yet" }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: data.noteListItems.map((review) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "mb-4 text-sm font-medium text-gray-900", children: review.name }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Rating, { rating: review.rating }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "prose prose-sm mt-4 text-gray-500", children: review.text })
      ] }, review.id)) })
    ] })
  ] });
}

// app/routes/reviews/write.tsx
var write_exports = {};
__export(write_exports, {
  action: () => action2,
  default: () => NewPost
});
var import_react7 = require("@remix-run/react"), import_node5 = require("@remix-run/node");
var import_tiny_invariant = __toESM(require("tiny-invariant")), import_solid3 = require("@heroicons/react/20/solid"), import_react8 = require("react"), import_jsx_runtime7 = require("react/jsx-runtime"), action2 = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), text = formData.get("text"), rating = Number(formData.get("rating")), errors = {
    name: name ? null : "Name is required",
    text: text ? null : "text is required",
    rating: rating ? null : "Rating is required"
  };
  return Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node5.json)(errors) : ((0, import_tiny_invariant.default)(typeof name == "string", "name must be a string"), (0, import_tiny_invariant.default)(typeof text == "string", "text must be a string"), (0, import_tiny_invariant.default)(typeof rating == "number", "rating must be a number"), await createReview({ name, text, rating }), (0, import_node5.redirect)("../"));
}, inputClassName = "w-full border-b border-gray-500 px-2 py-1 text-base font-light invalid:border-black";
function classNames4(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NewPost() {
  let [rating, setRating] = (0, import_react8.useState)(3), errors = (0, import_react7.useActionData)(), transition = (0, import_react7.useTransition)(), isCreating = Boolean(transition.submission);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react7.Form, { method: "post", className: "mb-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "input",
      {
        type: "text",
        name: "name",
        className: inputClassName,
        placeholder: "Name",
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "my-4 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-sm text-gray-700", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "sr-only", children: [
        rating,
        " out of 5 stars"
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "items-cente ml-1 flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "input",
          {
            type: "hidden",
            name: "rating",
            value: rating,
            required: !0
          }
        ),
        [0, 1, 2, 3, 4].map((ratingTemp) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_solid3.StarIcon,
          {
            className: classNames4(
              rating > ratingTemp ? "text-yellow-400" : "text-gray-200",
              "h-5 w-5 flex-shrink-0"
            ),
            "aria-hidden": "true",
            onClick: () => setRating(ratingTemp + 1)
          },
          ratingTemp
        ))
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "textarea",
      {
        id: "text",
        rows: 4,
        name: "text",
        className: inputClassName,
        required: !0
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react7.Link,
        {
          to: "../",
          className: "rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          type: "submit",
          className: "rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700",
          disabled: isCreating,
          children: isCreating ? "Sending..." : "Send"
        }
      )
    ] })
  ] });
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Login2,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node");
var import_jsx_runtime8 = require("react/jsx-runtime"), loader4 = async ({ request }) => {
  if (!await getUserId(request))
    throw new Response("Unauthorized", { status: 401 });
  return (0, import_node6.json)({});
};
function Login2() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { children: "admin" }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1ffa5815", entry: { module: "/build/entry.client-OGAZTCEX.js", imports: ["/build/_shared/chunk-JKKITEQK.js", "/build/_shared/chunk-LMXH6R3J.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MEXSTG7S.js", imports: ["/build/_shared/chunk-L42U4QZD.js", "/build/_shared/chunk-I2PN4Q7O.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-GPCUZ554.js", imports: ["/build/_shared/chunk-QVTEGN3F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-BQ2SXEZN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "root", path: "login", index: !0, caseSensitive: void 0, module: "/build/routes/login/index-5FTXE4U4.js", imports: ["/build/_shared/chunk-QVTEGN3F.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reviews": { id: "routes/reviews", parentId: "root", path: "reviews", index: void 0, caseSensitive: void 0, module: "/build/routes/reviews-LX4COI2W.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reviews/write": { id: "routes/reviews/write", parentId: "routes/reviews", path: "write", index: void 0, caseSensitive: void 0, module: "/build/routes/reviews/write-DMHXE4OL.js", imports: ["/build/_shared/chunk-I2PN4Q7O.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1FFA5815.js" };

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
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: !0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/reviews": {
    id: "routes/reviews",
    parentId: "root",
    path: "reviews",
    index: void 0,
    caseSensitive: void 0,
    module: reviews_exports
  },
  "routes/reviews/write": {
    id: "routes/reviews/write",
    parentId: "routes/reviews",
    path: "write",
    index: void 0,
    caseSensitive: void 0,
    module: write_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
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
