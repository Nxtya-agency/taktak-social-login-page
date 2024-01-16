/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/appwrite@13.0.1/dist/iife/sdk.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t, i) {
  "use strict";
  function n(e, t, i, n) {
    return new (i || (i = Promise))(function (o, s) {
      function r(e) {
        try {
          a(n.next(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        try {
          a(n.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(r, c);
      }
      a((n = n.apply(e, t || [])).next());
    });
  }
  class o {
    constructor(e) {
      this.client = e;
    }
    static flatten(e, t = "") {
      let i = {};
      for (const n in e) {
        let o = e[n],
          s = t ? `${t}[${n}]` : n;
        Array.isArray(o)
          ? (i = Object.assign(i, this.flatten(o, s)))
          : (i[s] = o);
      }
      return i;
    }
  }
  o.CHUNK_SIZE = 5242880;
  class s {}
  (s.equal = (e, t) => s.addQuery(e, "equal", t)),
    (s.notEqual = (e, t) => s.addQuery(e, "notEqual", t)),
    (s.lessThan = (e, t) => s.addQuery(e, "lessThan", t)),
    (s.lessThanEqual = (e, t) => s.addQuery(e, "lessThanEqual", t)),
    (s.greaterThan = (e, t) => s.addQuery(e, "greaterThan", t)),
    (s.greaterThanEqual = (e, t) => s.addQuery(e, "greaterThanEqual", t)),
    (s.isNull = (e) => `isNull("${e}")`),
    (s.isNotNull = (e) => `isNotNull("${e}")`),
    (s.between = (e, t, i) =>
      `between("${e}", ${s.parseValues(t)}, ${s.parseValues(i)})`),
    (s.startsWith = (e, t) => s.addQuery(e, "startsWith", t)),
    (s.endsWith = (e, t) => s.addQuery(e, "endsWith", t)),
    (s.select = (e) => `select([${e.map((e) => `"${e}"`).join(",")}])`),
    (s.search = (e, t) => s.addQuery(e, "search", t)),
    (s.orderDesc = (e) => `orderDesc("${e}")`),
    (s.orderAsc = (e) => `orderAsc("${e}")`),
    (s.cursorAfter = (e) => `cursorAfter("${e}")`),
    (s.cursorBefore = (e) => `cursorBefore("${e}")`),
    (s.limit = (e) => `limit(${e})`),
    (s.offset = (e) => `offset(${e})`),
    (s.addQuery = (e, t, i) =>
      i instanceof Array
        ? `${t}("${e}", [${i.map((e) => s.parseValues(e)).join(",")}])`
        : `${t}("${e}", [${s.parseValues(i)}])`),
    (s.parseValues = (e) =>
      "string" == typeof e || e instanceof String ? `"${e}"` : `${e}`);
  class r extends Error {
    constructor(e, t = 0, i = "", n = "") {
      super(e),
        (this.name = "AppwriteException"),
        (this.message = e),
        (this.code = t),
        (this.type = i),
        (this.response = n);
    }
  }
  class c {}
  (c.read = (e) => `read("${e}")`),
    (c.write = (e) => `write("${e}")`),
    (c.create = (e) => `create("${e}")`),
    (c.update = (e) => `update("${e}")`),
    (c.delete = (e) => `delete("${e}")`);
  (e.Account = class extends o {
    constructor(e) {
      super(e);
    }
    get() {
      return n(this, void 0, void 0, function* () {
        const e = new URL(this.client.config.endpoint + "/account");
        return yield this.client.call(
          "get",
          e,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    create(e, t, i, o) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "userId"');
        if (void 0 === t) throw new r('Missing required parameter: "email"');
        if (void 0 === i) throw new r('Missing required parameter: "password"');
        const n = {};
        void 0 !== e && (n.userId = e),
          void 0 !== t && (n.email = t),
          void 0 !== i && (n.password = i),
          void 0 !== o && (n.name = o);
        const s = new URL(this.client.config.endpoint + "/account");
        return yield this.client.call(
          "post",
          s,
          { "content-type": "application/json" },
          n
        );
      });
    }
    updateEmail(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "email"');
        if (void 0 === t) throw new r('Missing required parameter: "password"');
        const i = {};
        void 0 !== e && (i.email = e), void 0 !== t && (i.password = t);
        const n = new URL(this.client.config.endpoint + "/account/email");
        return yield this.client.call(
          "patch",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    listIdentities(e) {
      return n(this, void 0, void 0, function* () {
        const t = {};
        void 0 !== e && (t.queries = e);
        const i = new URL(this.client.config.endpoint + "/account/identities");
        return yield this.client.call(
          "get",
          i,
          { "content-type": "application/json" },
          t
        );
      });
    }
    deleteIdentity(e) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e)
          throw new r('Missing required parameter: "identityId"');
        const t = "/account/identities/{identityId}".replace("{identityId}", e),
          i = new URL(this.client.config.endpoint + t);
        return yield this.client.call(
          "delete",
          i,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    createJWT() {
      return n(this, void 0, void 0, function* () {
        const e = new URL(this.client.config.endpoint + "/account/jwt");
        return yield this.client.call(
          "post",
          e,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    listLogs(e) {
      return n(this, void 0, void 0, function* () {
        const t = {};
        void 0 !== e && (t.queries = e);
        const i = new URL(this.client.config.endpoint + "/account/logs");
        return yield this.client.call(
          "get",
          i,
          { "content-type": "application/json" },
          t
        );
      });
    }
    updateName(e) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "name"');
        const t = {};
        void 0 !== e && (t.name = e);
        const i = new URL(this.client.config.endpoint + "/account/name");
        return yield this.client.call(
          "patch",
          i,
          { "content-type": "application/json" },
          t
        );
      });
    }
    updatePassword(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "password"');
        const i = {};
        void 0 !== e && (i.password = e), void 0 !== t && (i.oldPassword = t);
        const n = new URL(this.client.config.endpoint + "/account/password");
        return yield this.client.call(
          "patch",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    updatePhone(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "phone"');
        if (void 0 === t) throw new r('Missing required parameter: "password"');
        const i = {};
        void 0 !== e && (i.phone = e), void 0 !== t && (i.password = t);
        const n = new URL(this.client.config.endpoint + "/account/phone");
        return yield this.client.call(
          "patch",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    getPrefs() {
      return n(this, void 0, void 0, function* () {
        const e = new URL(this.client.config.endpoint + "/account/prefs");
        return yield this.client.call(
          "get",
          e,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    updatePrefs(e) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "prefs"');
        const t = {};
        void 0 !== e && (t.prefs = e);
        const i = new URL(this.client.config.endpoint + "/account/prefs");
        return yield this.client.call(
          "patch",
          i,
          { "content-type": "application/json" },
          t
        );
      });
    }
    createRecovery(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "email"');
        if (void 0 === t) throw new r('Missing required parameter: "url"');
        const i = {};
        void 0 !== e && (i.email = e), void 0 !== t && (i.url = t);
        const n = new URL(this.client.config.endpoint + "/account/recovery");
        return yield this.client.call(
          "post",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    updateRecovery(e, t, i, o) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "userId"');
        if (void 0 === t) throw new r('Missing required parameter: "secret"');
        if (void 0 === i) throw new r('Missing required parameter: "password"');
        if (void 0 === o)
          throw new r('Missing required parameter: "passwordAgain"');
        const n = {};
        void 0 !== e && (n.userId = e),
          void 0 !== t && (n.secret = t),
          void 0 !== i && (n.password = i),
          void 0 !== o && (n.passwordAgain = o);
        const s = new URL(this.client.config.endpoint + "/account/recovery");
        return yield this.client.call(
          "put",
          s,
          { "content-type": "application/json" },
          n
        );
      });
    }
    listSessions() {
      return n(this, void 0, void 0, function* () {
        const e = new URL(this.client.config.endpoint + "/account/sessions");
        return yield this.client.call(
          "get",
          e,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    deleteSessions() {
      return n(this, void 0, void 0, function* () {
        const e = new URL(this.client.config.endpoint + "/account/sessions");
        return yield this.client.call(
          "delete",
          e,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    createAnonymousSession() {
      return n(this, void 0, void 0, function* () {
        const e = new URL(
          this.client.config.endpoint + "/account/sessions/anonymous"
        );
        return yield this.client.call(
          "post",
          e,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    createEmailSession(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "email"');
        if (void 0 === t) throw new r('Missing required parameter: "password"');
        const i = {};
        void 0 !== e && (i.email = e), void 0 !== t && (i.password = t);
        const n = new URL(
          this.client.config.endpoint + "/account/sessions/email"
        );
        return yield this.client.call(
          "post",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    createMagicURLSession(e, t, i) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "userId"');
        if (void 0 === t) throw new r('Missing required parameter: "email"');
        const n = {};
        void 0 !== e && (n.userId = e),
          void 0 !== t && (n.email = t),
          void 0 !== i && (n.url = i);
        const o = new URL(
          this.client.config.endpoint + "/account/sessions/magic-url"
        );
        return yield this.client.call(
          "post",
          o,
          { "content-type": "application/json" },
          n
        );
      });
    }
    updateMagicURLSession(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "userId"');
        if (void 0 === t) throw new r('Missing required parameter: "secret"');
        const i = {};
        void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
        const n = new URL(
          this.client.config.endpoint + "/account/sessions/magic-url"
        );
        return yield this.client.call(
          "put",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    createOAuth2Session(e, t, i, n) {
      if (void 0 === e) throw new r('Missing required parameter: "provider"');
      const s = "/account/sessions/oauth2/{provider}".replace("{provider}", e),
        c = {};
      void 0 !== t && (c.success = t),
        void 0 !== i && (c.failure = i),
        void 0 !== n && (c.scopes = n);
      const a = new URL(this.client.config.endpoint + s);
      c.project = this.client.config.project;
      for (const [e, t] of Object.entries(o.flatten(c)))
        a.searchParams.append(e, t);
      if (
        "undefined" == typeof window ||
        !(null === window || void 0 === window ? void 0 : window.location)
      )
        return a;
      window.location.href = a.toString();
    }
    createPhoneSession(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "userId"');
        if (void 0 === t) throw new r('Missing required parameter: "phone"');
        const i = {};
        void 0 !== e && (i.userId = e), void 0 !== t && (i.phone = t);
        const n = new URL(
          this.client.config.endpoint + "/account/sessions/phone"
        );
        return yield this.client.call(
          "post",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    updatePhoneSession(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "userId"');
        if (void 0 === t) throw new r('Missing required parameter: "secret"');
        const i = {};
        void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
        const n = new URL(
          this.client.config.endpoint + "/account/sessions/phone"
        );
        return yield this.client.call(
          "put",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    getSession(e) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e)
          throw new r('Missing required parameter: "sessionId"');
        const t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
          i = new URL(this.client.config.endpoint + t);
        return yield this.client.call(
          "get",
          i,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    updateSession(e) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e)
          throw new r('Missing required parameter: "sessionId"');
        const t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
          i = new URL(this.client.config.endpoint + t);
        return yield this.client.call(
          "patch",
          i,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    deleteSession(e) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e)
          throw new r('Missing required parameter: "sessionId"');
        const t = "/account/sessions/{sessionId}".replace("{sessionId}", e),
          i = new URL(this.client.config.endpoint + t);
        return yield this.client.call(
          "delete",
          i,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    updateStatus() {
      return n(this, void 0, void 0, function* () {
        const e = new URL(this.client.config.endpoint + "/account/status");
        return yield this.client.call(
          "patch",
          e,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    createVerification(e) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "url"');
        const t = {};
        void 0 !== e && (t.url = e);
        const i = new URL(
          this.client.config.endpoint + "/account/verification"
        );
        return yield this.client.call(
          "post",
          i,
          { "content-type": "application/json" },
          t
        );
      });
    }
    updateVerification(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "userId"');
        if (void 0 === t) throw new r('Missing required parameter: "secret"');
        const i = {};
        void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
        const n = new URL(
          this.client.config.endpoint + "/account/verification"
        );
        return yield this.client.call(
          "put",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
    createPhoneVerification() {
      return n(this, void 0, void 0, function* () {
        const e = new URL(
          this.client.config.endpoint + "/account/verification/phone"
        );
        return yield this.client.call(
          "post",
          e,
          { "content-type": "application/json" },
          {}
        );
      });
    }
    updatePhoneVerification(e, t) {
      return n(this, void 0, void 0, function* () {
        if (void 0 === e) throw new r('Missing required parameter: "userId"');
        if (void 0 === t) throw new r('Missing required parameter: "secret"');
        const i = {};
        void 0 !== e && (i.userId = e), void 0 !== t && (i.secret = t);
        const n = new URL(
          this.client.config.endpoint + "/account/verification/phone"
        );
        return yield this.client.call(
          "put",
          n,
          { "content-type": "application/json" },
          i
        );
      });
    }
  }),
    (e.AppwriteException = r),
    (e.Avatars = class extends o {
      constructor(e) {
        super(e);
      }
      getBrowser(e, t, i, n) {
        if (void 0 === e) throw new r('Missing required parameter: "code"');
        const s = "/avatars/browsers/{code}".replace("{code}", e),
          c = {};
        void 0 !== t && (c.width = t),
          void 0 !== i && (c.height = i),
          void 0 !== n && (c.quality = n);
        const a = new URL(this.client.config.endpoint + s);
        c.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(c)))
          a.searchParams.append(e, t);
        return a;
      }
      getCreditCard(e, t, i, n) {
        if (void 0 === e) throw new r('Missing required parameter: "code"');
        const s = "/avatars/credit-cards/{code}".replace("{code}", e),
          c = {};
        void 0 !== t && (c.width = t),
          void 0 !== i && (c.height = i),
          void 0 !== n && (c.quality = n);
        const a = new URL(this.client.config.endpoint + s);
        c.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(c)))
          a.searchParams.append(e, t);
        return a;
      }
      getFavicon(e) {
        if (void 0 === e) throw new r('Missing required parameter: "url"');
        const t = {};
        void 0 !== e && (t.url = e);
        const i = new URL(this.client.config.endpoint + "/avatars/favicon");
        t.project = this.client.config.project;
        for (const [e, n] of Object.entries(o.flatten(t)))
          i.searchParams.append(e, n);
        return i;
      }
      getFlag(e, t, i, n) {
        if (void 0 === e) throw new r('Missing required parameter: "code"');
        const s = "/avatars/flags/{code}".replace("{code}", e),
          c = {};
        void 0 !== t && (c.width = t),
          void 0 !== i && (c.height = i),
          void 0 !== n && (c.quality = n);
        const a = new URL(this.client.config.endpoint + s);
        c.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(c)))
          a.searchParams.append(e, t);
        return a;
      }
      getImage(e, t, i) {
        if (void 0 === e) throw new r('Missing required parameter: "url"');
        const n = {};
        void 0 !== e && (n.url = e),
          void 0 !== t && (n.width = t),
          void 0 !== i && (n.height = i);
        const s = new URL(this.client.config.endpoint + "/avatars/image");
        n.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(n)))
          s.searchParams.append(e, t);
        return s;
      }
      getInitials(e, t, i, n) {
        const s = {};
        void 0 !== e && (s.name = e),
          void 0 !== t && (s.width = t),
          void 0 !== i && (s.height = i),
          void 0 !== n && (s.background = n);
        const r = new URL(this.client.config.endpoint + "/avatars/initials");
        s.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(s)))
          r.searchParams.append(e, t);
        return r;
      }
      getQR(e, t, i, n) {
        if (void 0 === e) throw new r('Missing required parameter: "text"');
        const s = {};
        void 0 !== e && (s.text = e),
          void 0 !== t && (s.size = t),
          void 0 !== i && (s.margin = i),
          void 0 !== n && (s.download = n);
        const c = new URL(this.client.config.endpoint + "/avatars/qr");
        s.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(s)))
          c.searchParams.append(e, t);
        return c;
      }
    }),
    (e.Client = class {
      constructor() {
        (this.config = {
          endpoint: "https://HOSTNAME/v1",
          endpointRealtime: "",
          project: "",
          jwt: "",
          locale: "",
        }),
          (this.headers = {
            "x-sdk-name": "Web",
            "x-sdk-platform": "client",
            "x-sdk-language": "web",
            "x-sdk-version": "13.0.1",
            "X-Appwrite-Response-Format": "1.4.0",
          }),
          (this.realtime = {
            socket: void 0,
            timeout: void 0,
            url: "",
            channels: new Set(),
            subscriptions: new Map(),
            subscriptionsCounter: 0,
            reconnect: !0,
            reconnectAttempts: 0,
            lastMessage: void 0,
            connect: () => {
              clearTimeout(this.realtime.timeout),
                (this.realtime.timeout =
                  null === window || void 0 === window
                    ? void 0
                    : window.setTimeout(() => {
                        this.realtime.createSocket();
                      }, 50));
            },
            getTimeout: () => {
              switch (!0) {
                case this.realtime.reconnectAttempts < 5:
                  return 1e3;
                case this.realtime.reconnectAttempts < 15:
                  return 5e3;
                case this.realtime.reconnectAttempts < 100:
                  return 1e4;
                default:
                  return 6e4;
              }
            },
            createSocket: () => {
              var e, t;
              if (this.realtime.channels.size < 1) return;
              const i = new URLSearchParams();
              i.set("project", this.config.project),
                this.realtime.channels.forEach((e) => {
                  i.append("channels[]", e);
                });
              const n =
                this.config.endpointRealtime + "/realtime?" + i.toString();
              (n !== this.realtime.url ||
                !this.realtime.socket ||
                (null === (e = this.realtime.socket) || void 0 === e
                  ? void 0
                  : e.readyState) > WebSocket.OPEN) &&
                (this.realtime.socket &&
                  (null === (t = this.realtime.socket) || void 0 === t
                    ? void 0
                    : t.readyState) < WebSocket.CLOSING &&
                  ((this.realtime.reconnect = !1),
                  this.realtime.socket.close()),
                (this.realtime.url = n),
                (this.realtime.socket = new WebSocket(n)),
                this.realtime.socket.addEventListener(
                  "message",
                  this.realtime.onMessage
                ),
                this.realtime.socket.addEventListener("open", (e) => {
                  this.realtime.reconnectAttempts = 0;
                }),
                this.realtime.socket.addEventListener("close", (e) => {
                  var t, i, n;
                  if (
                    !this.realtime.reconnect ||
                    ("error" ===
                      (null ===
                        (i =
                          null === (t = this.realtime) || void 0 === t
                            ? void 0
                            : t.lastMessage) || void 0 === i
                        ? void 0
                        : i.type) &&
                      1008 ===
                        (null === (n = this.realtime) || void 0 === n
                          ? void 0
                          : n.lastMessage.data
                        ).code)
                  )
                    return void (this.realtime.reconnect = !0);
                  const o = this.realtime.getTimeout();
                  console.error(
                    `Realtime got disconnected. Reconnect will be attempted in ${
                      o / 1e3
                    } seconds.`,
                    e.reason
                  ),
                    setTimeout(() => {
                      this.realtime.reconnectAttempts++,
                        this.realtime.createSocket();
                    }, o);
                }));
            },
            onMessage: (e) => {
              var t, i;
              try {
                const n = JSON.parse(e.data);
                switch (((this.realtime.lastMessage = n), n.type)) {
                  case "connected":
                    const e = JSON.parse(
                        null !==
                          (t = window.localStorage.getItem("cookieFallback")) &&
                          void 0 !== t
                          ? t
                          : "{}"
                      ),
                      o =
                        null == e
                          ? void 0
                          : e[`a_session_${this.config.project}`],
                      s = n.data;
                    o &&
                      !s.user &&
                      (null === (i = this.realtime.socket) ||
                        void 0 === i ||
                        i.send(
                          JSON.stringify({
                            type: "authentication",
                            data: { session: o },
                          })
                        ));
                    break;
                  case "event":
                    let r = n.data;
                    if (null == r ? void 0 : r.channels) {
                      if (
                        !r.channels.some((e) => this.realtime.channels.has(e))
                      )
                        return;
                      this.realtime.subscriptions.forEach((e) => {
                        r.channels.some((t) => e.channels.includes(t)) &&
                          setTimeout(() => e.callback(r));
                      });
                    }
                    break;
                  case "error":
                    throw n.data;
                }
              } catch (e) {
                console.error(e);
              }
            },
            cleanUp: (e) => {
              this.realtime.channels.forEach((t) => {
                if (e.includes(t)) {
                  Array.from(this.realtime.subscriptions).some(([e, i]) =>
                    i.channels.includes(t)
                  ) || this.realtime.channels.delete(t);
                }
              });
            },
          });
      }
      setEndpoint(e) {
        return (
          (this.config.endpoint = e),
          (this.config.endpointRealtime =
            this.config.endpointRealtime ||
            this.config.endpoint
              .replace("https://", "wss://")
              .replace("http://", "ws://")),
          this
        );
      }
      setEndpointRealtime(e) {
        return (this.config.endpointRealtime = e), this;
      }
      setProject(e) {
        return (
          (this.headers["X-Appwrite-Project"] = e),
          (this.config.project = e),
          this
        );
      }
      setJWT(e) {
        return (
          (this.headers["X-Appwrite-JWT"] = e), (this.config.jwt = e), this
        );
      }
      setLocale(e) {
        return (
          (this.headers["X-Appwrite-Locale"] = e),
          (this.config.locale = e),
          this
        );
      }
      subscribe(e, t) {
        let i = "string" == typeof e ? [e] : e;
        i.forEach((e) => this.realtime.channels.add(e));
        const n = this.realtime.subscriptionsCounter++;
        return (
          this.realtime.subscriptions.set(n, { channels: i, callback: t }),
          this.realtime.connect(),
          () => {
            this.realtime.subscriptions.delete(n),
              this.realtime.cleanUp(i),
              this.realtime.connect();
          }
        );
      }
      call(e, t, s = {}, c = {}) {
        var a, d;
        return n(this, void 0, void 0, function* () {
          (e = e.toUpperCase()), (s = Object.assign({}, this.headers, s));
          let n = { method: e, headers: s, credentials: "include" };
          if (
            ("undefined" != typeof window &&
              window.localStorage &&
              (s["X-Fallback-Cookies"] =
                null !== (a = window.localStorage.getItem("cookieFallback")) &&
                void 0 !== a
                  ? a
                  : ""),
            "GET" === e)
          )
            for (const [e, i] of Object.entries(o.flatten(c)))
              t.searchParams.append(e, i);
          else
            switch (s["content-type"]) {
              case "application/json":
                n.body = JSON.stringify(c);
                break;
              case "multipart/form-data":
                let e = new FormData();
                for (const t in c)
                  Array.isArray(c[t])
                    ? c[t].forEach((i) => {
                        e.append(t + "[]", i);
                      })
                    : e.append(t, c[t]);
                (n.body = e), delete s["content-type"];
            }
          try {
            let e = null;
            const o = yield i.fetch(t.toString(), n);
            if (
              ((e = (
                null === (d = o.headers.get("content-type")) || void 0 === d
                  ? void 0
                  : d.includes("application/json")
              )
                ? yield o.json()
                : { message: yield o.text() }),
              400 <= o.status)
            )
              throw new r(
                null == e ? void 0 : e.message,
                o.status,
                null == e ? void 0 : e.type,
                e
              );
            const s = o.headers.get("X-Fallback-Cookies");
            return (
              "undefined" != typeof window &&
                window.localStorage &&
                s &&
                (window.console.warn(
                  "Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."
                ),
                window.localStorage.setItem("cookieFallback", s)),
              e
            );
          } catch (e) {
            if (e instanceof r) throw e;
            throw new r(e.message);
          }
        });
      }
    }),
    (e.Databases = class extends o {
      constructor(e) {
        super(e);
      }
      listDocuments(e, t, i) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "databaseId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "collectionId"');
          const n =
              "/databases/{databaseId}/collections/{collectionId}/documents"
                .replace("{databaseId}", e)
                .replace("{collectionId}", t),
            o = {};
          void 0 !== i && (o.queries = i);
          const s = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "get",
            s,
            { "content-type": "application/json" },
            o
          );
        });
      }
      createDocument(e, t, i, o, s) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "databaseId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "collectionId"');
          if (void 0 === i)
            throw new r('Missing required parameter: "documentId"');
          if (void 0 === o) throw new r('Missing required parameter: "data"');
          const n =
              "/databases/{databaseId}/collections/{collectionId}/documents"
                .replace("{databaseId}", e)
                .replace("{collectionId}", t),
            c = {};
          void 0 !== i && (c.documentId = i),
            void 0 !== o && (c.data = o),
            void 0 !== s && (c.permissions = s);
          const a = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "post",
            a,
            { "content-type": "application/json" },
            c
          );
        });
      }
      getDocument(e, t, i, o) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "databaseId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "collectionId"');
          if (void 0 === i)
            throw new r('Missing required parameter: "documentId"');
          const n =
              "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
                .replace("{databaseId}", e)
                .replace("{collectionId}", t)
                .replace("{documentId}", i),
            s = {};
          void 0 !== o && (s.queries = o);
          const c = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "get",
            c,
            { "content-type": "application/json" },
            s
          );
        });
      }
      updateDocument(e, t, i, o, s) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "databaseId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "collectionId"');
          if (void 0 === i)
            throw new r('Missing required parameter: "documentId"');
          const n =
              "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
                .replace("{databaseId}", e)
                .replace("{collectionId}", t)
                .replace("{documentId}", i),
            c = {};
          void 0 !== o && (c.data = o), void 0 !== s && (c.permissions = s);
          const a = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "patch",
            a,
            { "content-type": "application/json" },
            c
          );
        });
      }
      deleteDocument(e, t, i) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "databaseId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "collectionId"');
          if (void 0 === i)
            throw new r('Missing required parameter: "documentId"');
          const n =
              "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
                .replace("{databaseId}", e)
                .replace("{collectionId}", t)
                .replace("{documentId}", i),
            o = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "delete",
            o,
            { "content-type": "application/json" },
            {}
          );
        });
      }
    }),
    (e.Functions = class extends o {
      constructor(e) {
        super(e);
      }
      listExecutions(e, t, i) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "functionId"');
          const n = "/functions/{functionId}/executions".replace(
              "{functionId}",
              e
            ),
            o = {};
          void 0 !== t && (o.queries = t), void 0 !== i && (o.search = i);
          const s = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "get",
            s,
            { "content-type": "application/json" },
            o
          );
        });
      }
      createExecution(e, t, i, o, s, c) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "functionId"');
          const n = "/functions/{functionId}/executions".replace(
              "{functionId}",
              e
            ),
            a = {};
          void 0 !== t && (a.body = t),
            void 0 !== i && (a.async = i),
            void 0 !== o && (a.path = o),
            void 0 !== s && (a.method = s),
            void 0 !== c && (a.headers = c);
          const d = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "post",
            d,
            { "content-type": "application/json" },
            a
          );
        });
      }
      getExecution(e, t) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "functionId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "executionId"');
          const i = "/functions/{functionId}/executions/{executionId}"
              .replace("{functionId}", e)
              .replace("{executionId}", t),
            n = new URL(this.client.config.endpoint + i);
          return yield this.client.call(
            "get",
            n,
            { "content-type": "application/json" },
            {}
          );
        });
      }
    }),
    (e.Graphql = class extends o {
      constructor(e) {
        super(e);
      }
      query(e) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "query"');
          const t = {};
          void 0 !== e && (t.query = e);
          const i = new URL(this.client.config.endpoint + "/graphql");
          return yield this.client.call(
            "post",
            i,
            { "x-sdk-graphql": "true", "content-type": "application/json" },
            t
          );
        });
      }
      mutation(e) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "query"');
          const t = {};
          void 0 !== e && (t.query = e);
          const i = new URL(this.client.config.endpoint + "/graphql/mutation");
          return yield this.client.call(
            "post",
            i,
            { "x-sdk-graphql": "true", "content-type": "application/json" },
            t
          );
        });
      }
    }),
    (e.ID = class {
      static custom(e) {
        return e;
      }
      static unique() {
        return "unique()";
      }
    }),
    (e.Locale = class extends o {
      constructor(e) {
        super(e);
      }
      get() {
        return n(this, void 0, void 0, function* () {
          const e = new URL(this.client.config.endpoint + "/locale");
          return yield this.client.call(
            "get",
            e,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      listCodes() {
        return n(this, void 0, void 0, function* () {
          const e = new URL(this.client.config.endpoint + "/locale/codes");
          return yield this.client.call(
            "get",
            e,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      listContinents() {
        return n(this, void 0, void 0, function* () {
          const e = new URL(this.client.config.endpoint + "/locale/continents");
          return yield this.client.call(
            "get",
            e,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      listCountries() {
        return n(this, void 0, void 0, function* () {
          const e = new URL(this.client.config.endpoint + "/locale/countries");
          return yield this.client.call(
            "get",
            e,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      listCountriesEU() {
        return n(this, void 0, void 0, function* () {
          const e = new URL(
            this.client.config.endpoint + "/locale/countries/eu"
          );
          return yield this.client.call(
            "get",
            e,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      listCountriesPhones() {
        return n(this, void 0, void 0, function* () {
          const e = new URL(
            this.client.config.endpoint + "/locale/countries/phones"
          );
          return yield this.client.call(
            "get",
            e,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      listCurrencies() {
        return n(this, void 0, void 0, function* () {
          const e = new URL(this.client.config.endpoint + "/locale/currencies");
          return yield this.client.call(
            "get",
            e,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      listLanguages() {
        return n(this, void 0, void 0, function* () {
          const e = new URL(this.client.config.endpoint + "/locale/languages");
          return yield this.client.call(
            "get",
            e,
            { "content-type": "application/json" },
            {}
          );
        });
      }
    }),
    (e.Permission = c),
    (e.Query = s),
    (e.Role = class {
      static any() {
        return "any";
      }
      static user(e, t = "") {
        return "" === t ? `user:${e}` : `user:${e}/${t}`;
      }
      static users(e = "") {
        return "" === e ? "users" : `users/${e}`;
      }
      static guests() {
        return "guests";
      }
      static team(e, t = "") {
        return "" === t ? `team:${e}` : `team:${e}/${t}`;
      }
      static member(e) {
        return `member:${e}`;
      }
      static label(e) {
        return `label:${e}`;
      }
    }),
    (e.Storage = class extends o {
      constructor(e) {
        super(e);
      }
      listFiles(e, t, i) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "bucketId"');
          const n = "/storage/buckets/{bucketId}/files".replace(
              "{bucketId}",
              e
            ),
            o = {};
          void 0 !== t && (o.queries = t), void 0 !== i && (o.search = i);
          const s = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "get",
            s,
            { "content-type": "application/json" },
            o
          );
        });
      }
      createFile(e, t, i, s, c = (e) => {}) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "bucketId"');
          if (void 0 === t) throw new r('Missing required parameter: "fileId"');
          if (void 0 === i) throw new r('Missing required parameter: "file"');
          const n = "/storage/buckets/{bucketId}/files".replace(
              "{bucketId}",
              e
            ),
            a = {};
          void 0 !== t && (a.fileId = t),
            void 0 !== i && (a.file = i),
            void 0 !== s && (a.permissions = s);
          const d = new URL(this.client.config.endpoint + n);
          if (!(i instanceof File))
            throw new r('Parameter "file" has to be a File.');
          const l = i.size;
          if (l <= o.CHUNK_SIZE)
            return yield this.client.call(
              "post",
              d,
              { "content-type": "multipart/form-data" },
              a
            );
          const p = { "content-type": "multipart/form-data" };
          let u,
            h = 0;
          if ("unique()" != t)
            try {
              (u = yield this.client.call(
                "GET",
                new URL(this.client.config.endpoint + n + "/" + t),
                p
              )),
                (h = u.chunksUploaded * o.CHUNK_SIZE);
            } catch (e) {}
          for (; h < l; ) {
            let e = Math.min(h + o.CHUNK_SIZE - 1, l - 1);
            (p["content-range"] = "bytes " + h + "-" + e + "/" + l),
              u && u.$id && (p["x-appwrite-id"] = u.$id);
            const t = i.slice(h, e + 1);
            (a.file = new File([t], i.name)),
              (u = yield this.client.call("post", d, p, a)),
              c &&
                c({
                  $id: u.$id,
                  progress: (h / l) * 100,
                  sizeUploaded: h,
                  chunksTotal: u.chunksTotal,
                  chunksUploaded: u.chunksUploaded,
                }),
              (h += o.CHUNK_SIZE);
          }
          return u;
        });
      }
      getFile(e, t) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "bucketId"');
          if (void 0 === t) throw new r('Missing required parameter: "fileId"');
          const i = "/storage/buckets/{bucketId}/files/{fileId}"
              .replace("{bucketId}", e)
              .replace("{fileId}", t),
            n = new URL(this.client.config.endpoint + i);
          return yield this.client.call(
            "get",
            n,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      updateFile(e, t, i, o) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "bucketId"');
          if (void 0 === t) throw new r('Missing required parameter: "fileId"');
          const n = "/storage/buckets/{bucketId}/files/{fileId}"
              .replace("{bucketId}", e)
              .replace("{fileId}", t),
            s = {};
          void 0 !== i && (s.name = i), void 0 !== o && (s.permissions = o);
          const c = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "put",
            c,
            { "content-type": "application/json" },
            s
          );
        });
      }
      deleteFile(e, t) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e)
            throw new r('Missing required parameter: "bucketId"');
          if (void 0 === t) throw new r('Missing required parameter: "fileId"');
          const i = "/storage/buckets/{bucketId}/files/{fileId}"
              .replace("{bucketId}", e)
              .replace("{fileId}", t),
            n = new URL(this.client.config.endpoint + i);
          return yield this.client.call(
            "delete",
            n,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      getFileDownload(e, t) {
        if (void 0 === e) throw new r('Missing required parameter: "bucketId"');
        if (void 0 === t) throw new r('Missing required parameter: "fileId"');
        const i = "/storage/buckets/{bucketId}/files/{fileId}/download"
            .replace("{bucketId}", e)
            .replace("{fileId}", t),
          n = {},
          s = new URL(this.client.config.endpoint + i);
        n.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(n)))
          s.searchParams.append(e, t);
        return s;
      }
      getFilePreview(e, t, i, n, s, c, a, d, l, p, u, h, f) {
        if (void 0 === e) throw new r('Missing required parameter: "bucketId"');
        if (void 0 === t) throw new r('Missing required parameter: "fileId"');
        const v = "/storage/buckets/{bucketId}/files/{fileId}/preview"
            .replace("{bucketId}", e)
            .replace("{fileId}", t),
          w = {};
        void 0 !== i && (w.width = i),
          void 0 !== n && (w.height = n),
          void 0 !== s && (w.gravity = s),
          void 0 !== c && (w.quality = c),
          void 0 !== a && (w.borderWidth = a),
          void 0 !== d && (w.borderColor = d),
          void 0 !== l && (w.borderRadius = l),
          void 0 !== p && (w.opacity = p),
          void 0 !== u && (w.rotation = u),
          void 0 !== h && (w.background = h),
          void 0 !== f && (w.output = f);
        const m = new URL(this.client.config.endpoint + v);
        w.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(w)))
          m.searchParams.append(e, t);
        return m;
      }
      getFileView(e, t) {
        if (void 0 === e) throw new r('Missing required parameter: "bucketId"');
        if (void 0 === t) throw new r('Missing required parameter: "fileId"');
        const i = "/storage/buckets/{bucketId}/files/{fileId}/view"
            .replace("{bucketId}", e)
            .replace("{fileId}", t),
          n = {},
          s = new URL(this.client.config.endpoint + i);
        n.project = this.client.config.project;
        for (const [e, t] of Object.entries(o.flatten(n)))
          s.searchParams.append(e, t);
        return s;
      }
    }),
    (e.Teams = class extends o {
      constructor(e) {
        super(e);
      }
      list(e, t) {
        return n(this, void 0, void 0, function* () {
          const i = {};
          void 0 !== e && (i.queries = e), void 0 !== t && (i.search = t);
          const n = new URL(this.client.config.endpoint + "/teams");
          return yield this.client.call(
            "get",
            n,
            { "content-type": "application/json" },
            i
          );
        });
      }
      create(e, t, i) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          if (void 0 === t) throw new r('Missing required parameter: "name"');
          const n = {};
          void 0 !== e && (n.teamId = e),
            void 0 !== t && (n.name = t),
            void 0 !== i && (n.roles = i);
          const o = new URL(this.client.config.endpoint + "/teams");
          return yield this.client.call(
            "post",
            o,
            { "content-type": "application/json" },
            n
          );
        });
      }
      get(e) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          const t = "/teams/{teamId}".replace("{teamId}", e),
            i = new URL(this.client.config.endpoint + t);
          return yield this.client.call(
            "get",
            i,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      updateName(e, t) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          if (void 0 === t) throw new r('Missing required parameter: "name"');
          const i = "/teams/{teamId}".replace("{teamId}", e),
            n = {};
          void 0 !== t && (n.name = t);
          const o = new URL(this.client.config.endpoint + i);
          return yield this.client.call(
            "put",
            o,
            { "content-type": "application/json" },
            n
          );
        });
      }
      delete(e) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          const t = "/teams/{teamId}".replace("{teamId}", e),
            i = new URL(this.client.config.endpoint + t);
          return yield this.client.call(
            "delete",
            i,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      listMemberships(e, t, i) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          const n = "/teams/{teamId}/memberships".replace("{teamId}", e),
            o = {};
          void 0 !== t && (o.queries = t), void 0 !== i && (o.search = i);
          const s = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "get",
            s,
            { "content-type": "application/json" },
            o
          );
        });
      }
      createMembership(e, t, i, o, s, c, a) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          if (void 0 === t) throw new r('Missing required parameter: "roles"');
          const n = "/teams/{teamId}/memberships".replace("{teamId}", e),
            d = {};
          void 0 !== i && (d.email = i),
            void 0 !== o && (d.userId = o),
            void 0 !== s && (d.phone = s),
            void 0 !== t && (d.roles = t),
            void 0 !== c && (d.url = c),
            void 0 !== a && (d.name = a);
          const l = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "post",
            l,
            { "content-type": "application/json" },
            d
          );
        });
      }
      getMembership(e, t) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "membershipId"');
          const i = "/teams/{teamId}/memberships/{membershipId}"
              .replace("{teamId}", e)
              .replace("{membershipId}", t),
            n = new URL(this.client.config.endpoint + i);
          return yield this.client.call(
            "get",
            n,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      updateMembership(e, t, i) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "membershipId"');
          if (void 0 === i) throw new r('Missing required parameter: "roles"');
          const n = "/teams/{teamId}/memberships/{membershipId}"
              .replace("{teamId}", e)
              .replace("{membershipId}", t),
            o = {};
          void 0 !== i && (o.roles = i);
          const s = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "patch",
            s,
            { "content-type": "application/json" },
            o
          );
        });
      }
      deleteMembership(e, t) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "membershipId"');
          const i = "/teams/{teamId}/memberships/{membershipId}"
              .replace("{teamId}", e)
              .replace("{membershipId}", t),
            n = new URL(this.client.config.endpoint + i);
          return yield this.client.call(
            "delete",
            n,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      updateMembershipStatus(e, t, i, o) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          if (void 0 === t)
            throw new r('Missing required parameter: "membershipId"');
          if (void 0 === i) throw new r('Missing required parameter: "userId"');
          if (void 0 === o) throw new r('Missing required parameter: "secret"');
          const n = "/teams/{teamId}/memberships/{membershipId}/status"
              .replace("{teamId}", e)
              .replace("{membershipId}", t),
            s = {};
          void 0 !== i && (s.userId = i), void 0 !== o && (s.secret = o);
          const c = new URL(this.client.config.endpoint + n);
          return yield this.client.call(
            "patch",
            c,
            { "content-type": "application/json" },
            s
          );
        });
      }
      getPrefs(e) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          const t = "/teams/{teamId}/prefs".replace("{teamId}", e),
            i = new URL(this.client.config.endpoint + t);
          return yield this.client.call(
            "get",
            i,
            { "content-type": "application/json" },
            {}
          );
        });
      }
      updatePrefs(e, t) {
        return n(this, void 0, void 0, function* () {
          if (void 0 === e) throw new r('Missing required parameter: "teamId"');
          if (void 0 === t) throw new r('Missing required parameter: "prefs"');
          const i = "/teams/{teamId}/prefs".replace("{teamId}", e),
            n = {};
          void 0 !== t && (n.prefs = t);
          const o = new URL(this.client.config.endpoint + i);
          return yield this.client.call(
            "put",
            o,
            { "content-type": "application/json" },
            n
          );
        });
      }
    }),
    Object.defineProperty(e, "__esModule", { value: !0 });
})((this.Appwrite = this.Appwrite || {}), 0, window);
//# sourceMappingURL=/sm/d10637df3d33859e8db425411485515db5aec89aa85b5f46a7795cbc1a901c60.map
