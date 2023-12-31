/*!
 * vue-resource v1.3.5
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.VueResource = e()
}(this, function () {
    "use strict";

    function t(t) {
        this.state = $, this.value = void 0, this.deferred = [];
        var e = this;
        try {
            t(function (t) {
                e.resolve(t)
            }, function (t) {
                e.reject(t)
            })
        } catch (t) {
            e.reject(t)
        }
    }

    function e(t, e) {
        t instanceof Promise ? this.promise = t : this.promise = new Promise(t.bind(e)), this.context = e
    }

    function n(t) {
        return t ? t.replace(/^\s*|\s*$/g, "") : ""
    }

    function o(t) {
        return t ? t.toLowerCase() : ""
    }

    function r(t) {
        return "string" == typeof t
    }

    function i(t) {
        return "function" == typeof t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function u(t) {
        return s(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function a(t, n, o) {
        var r = e.resolve(t);
        return arguments.length < 2 ? r : r.then(n, o)
    }

    function c(t, e, n) {
        return n = n || {}, i(n) && (n = n.call(e)), p(t.bind({
            $vm: e,
            $options: n
        }), t, {
            $options: n
        })
    }

    function f(t, e) {
        var n, o;
        if (H(t))
            for (n = 0; n < t.length; n++) e.call(t[n], t[n], n);
        else if (s(t))
            for (o in t) S.call(t, o) && e.call(t[o], t[o], o);
        return t
    }

    function p(t) {
        return k.call(arguments, 1).forEach(function (e) {
            h(t, e, !0)
        }), t
    }

    function h(t, e, n) {
        for (var o in e) n && (u(e[o]) || H(e[o])) ? (u(e[o]) && !u(t[o]) && (t[o] = {}), H(e[o]) && !H(t[o]) && (t[o] = []), h(t[o], e[o], n)) : void 0 !== e[o] && (t[o] = e[o])
    }

    function d(t, e, n) {
        var o = function (t) {
                var e = ["+", "#", ".", "/", ";", "?", "&"],
                    n = [];
                return {
                    vars: n,
                    expand: function (o) {
                        return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (t, r, i) {
                            if (r) {
                                var s = null,
                                    u = [];
                                if (-1 !== e.indexOf(r.charAt(0)) && (s = r.charAt(0), r = r.substr(1)), r.split(/,/g).forEach(function (t) {
                                        var e = /([^:\*]*)(?::(\d+)|(\*))?/.exec(t);
                                        u.push.apply(u, function (t, e, n, o) {
                                            var r = t[n],
                                                i = [];
                                            if (l(r) && "" !== r)
                                                if ("string" == typeof r || "number" == typeof r || "boolean" == typeof r) r = r.toString(), o && "*" !== o && (r = r.substring(0, parseInt(o, 10))), i.push(y(e, r, m(e) ? n : null));
                                                else if ("*" === o) Array.isArray(r) ? r.filter(l).forEach(function (t) {
                                                i.push(y(e, t, m(e) ? n : null))
                                            }) : Object.keys(r).forEach(function (t) {
                                                l(r[t]) && i.push(y(e, r[t], t))
                                            });
                                            else {
                                                var s = [];
                                                Array.isArray(r) ? r.filter(l).forEach(function (t) {
                                                    s.push(y(e, t))
                                                }) : Object.keys(r).forEach(function (t) {
                                                    l(r[t]) && (s.push(encodeURIComponent(t)), s.push(y(e, r[t].toString())))
                                                }), m(e) ? i.push(encodeURIComponent(n) + "=" + s.join(",")) : 0 !== s.length && i.push(s.join(","))
                                            } else ";" === e ? i.push(encodeURIComponent(n)) : "" !== r || "&" !== e && "?" !== e ? "" === r && i.push("") : i.push(encodeURIComponent(n) + "=");
                                            return i
                                        }(o, s, e[1], e[2] || e[3])), n.push(e[1])
                                    }), s && "+" !== s) {
                                    var a = ",";
                                    return "?" === s ? a = "&" : "#" !== s && (a = s), (0 !== u.length ? s : "") + u.join(a)
                                }
                                return u.join(",")
                            }
                            return v(i)
                        })
                    }
                }
            }(t),
            r = o.expand(e);
        return n && n.push.apply(n, o.vars), r
    }

    function l(t) {
        return void 0 !== t && null !== t
    }

    function m(t) {
        return ";" === t || "&" === t || "?" === t
    }

    function y(t, e, n) {
        return e = "+" === t || "#" === t ? v(e) : encodeURIComponent(e), n ? encodeURIComponent(n) + "=" + e : e
    }

    function v(t) {
        return t.split(/(%[0-9A-Fa-f]{2})/g).map(function (t) {
            return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t)), t
        }).join("")
    }

    function b(t, e) {
        var n, o = this || {},
            s = t;
        return r(t) && (s = {
            url: t,
            params: e
        }), s = p({}, b.options, o.$options, s), b.transforms.forEach(function (t) {
            r(t) && (t = b.transform[t]), i(t) && (n = function (t, e, n) {
                return function (o) {
                    return t.call(n, o, e)
                }
            }(t, n, o.$vm))
        }), n(s)
    }

    function g(t, e, n) {
        var o, r = H(e),
            i = u(e);
        f(e, function (e, u) {
            o = s(e) || H(e), n && (u = n + "[" + (i || o ? u : "") + "]"), !n && r ? t.add(e.name, e.value) : o ? g(t, e, u) : t.add(u, e)
        })
    }

    function w(t) {
        return new e(function (e) {
            var n = new XDomainRequest,
                o = function (o) {
                    var r = o.type,
                        i = 0;
                    "load" === r ? i = 200 : "error" === r && (i = 500), e(t.respondWith(n.responseText, {
                        status: i
                    }))
                };
            t.abort = function () {
                return n.abort()
            }, n.open(t.method, t.getUrl()), t.timeout && (n.timeout = t.timeout), n.onload = o, n.onabort = o, n.onerror = o, n.ontimeout = o, n.onprogress = function () {}, n.send(t.getBody())
        })
    }

    function T(t) {
        return new e(function (e) {
            var n, o, r = t.jsonp || "callback",
                i = t.jsonpCallback || "_jsonp" + Math.random().toString(36).substr(2),
                s = null;
            n = function (n) {
                var r = n.type,
                    u = 0;
                "load" === r && null !== s ? u = 200 : "error" === r && (u = 500), u && window[i] && (delete window[i], document.body.removeChild(o)), e(t.respondWith(s, {
                    status: u
                }))
            }, window[i] = function (t) {
                s = JSON.stringify(t)
            }, t.abort = function () {
                n({
                    type: "abort"
                })
            }, t.params[r] = i, t.timeout && setTimeout(t.abort, t.timeout), (o = document.createElement("script")).src = t.getUrl(), o.type = "text/javascript", o.async = !0, o.onload = n, o.onerror = n, document.body.appendChild(o)
        })
    }

    function x(t) {
        function n(n) {
            return new e(function (e, c) {
                function f() {
                    i(o = r.pop()) ? o.call(t, n, p) : (! function (t) {
                        "undefined" != typeof console && I && console.warn("[VueResource warn]: " + t)
                    }("Invalid interceptor of type " + typeof o + ", must be a function"), p())
                }

                function p(n) {
                    if (i(n)) u.unshift(n);
                    else if (s(n)) return u.forEach(function (e) {
                        n = a(n, function (n) {
                            return e.call(t, n) || n
                        }, c)
                    }), void a(n, e, c);
                    f()
                }
                f()
            }, t)
        }
        var o, r = [j],
            u = [];
        return s(t) || (t = null), n.use = function (t) {
            r.push(t)
        }, n
    }

    function j(t, o) {
        o((t.client || (q ? function (t) {
            return new e(function (e) {
                var o = new XMLHttpRequest,
                    r = function (r) {
                        var i = t.respondWith("response" in o ? o.response : o.responseText, {
                            status: 1223 === o.status ? 204 : o.status,
                            statusText: 1223 === o.status ? "No Content" : n(o.statusText)
                        });
                        f(n(o.getAllResponseHeaders()).split("\n"), function (t) {
                            i.headers.append(t.slice(0, t.indexOf(":")), t.slice(t.indexOf(":") + 1))
                        }), e(i)
                    };
                t.abort = function () {
                    return o.abort()
                }, t.progress && ("GET" === t.method ? o.addEventListener("progress", t.progress) : /^(POST|PUT)$/i.test(t.method) && o.upload.addEventListener("progress", t.progress)), o.open(t.method, t.getUrl(), !0), t.timeout && (o.timeout = t.timeout), t.responseType && "responseType" in o && (o.responseType = t.responseType), (t.withCredentials || t.credentials) && (o.withCredentials = !0), t.crossOrigin || t.headers.set("X-Requested-With", "XMLHttpRequest"), t.headers.forEach(function (t, e) {
                    o.setRequestHeader(e, t)
                }), o.onload = r, o.onabort = r, o.onerror = r, o.ontimeout = r, o.send(t.getBody())
            })
        } : function (t) {
            var o = require("got");
            return new e(function (e) {
                var r, i = t.getUrl(),
                    s = t.getBody(),
                    u = t.method,
                    a = {};
                t.headers.forEach(function (t, e) {
                    a[e] = t
                }), o(i, {
                    body: s,
                    method: u,
                    headers: a
                }).then(r = function (o) {
                    var r = t.respondWith(o.body, {
                        status: o.statusCode,
                        statusText: n(o.statusMessage)
                    });
                    f(o.headers, function (t, e) {
                        r.headers.set(e, t)
                    }), e(r)
                }, function (t) {
                    return r(t.response)
                })
            })
        }))(t))
    }

    function E(t, e) {
        return Object.keys(t).reduce(function (t, n) {
            return o(e) === o(n) ? n : t
        }, null)
    }

    function O(t) {
        var n = this || {},
            o = x(n.$vm);
        return function (t) {
            k.call(arguments, 1).forEach(function (e) {
                for (var n in e) void 0 === t[n] && (t[n] = e[n])
            })
        }(t || {}, n.$options, O.options), O.interceptors.forEach(function (t) {
            r(t) && (t = O.interceptor[t]), i(t) && o.use(t)
        }), o(new D(t)).then(function (t) {
            return t.ok ? t : e.reject(t)
        }, function (t) {
            return t instanceof Error && function (t) {
                "undefined" != typeof console && console.error(t)
            }(t), e.reject(t)
        })
    }

    function P(t, e, n, o) {
        var r = this || {},
            i = {};
        return n = L({}, P.actions, n), f(n, function (n, s) {
            n = p({
                url: t,
                params: L({}, e)
            }, o, n), i[s] = function () {
                return (r.$http || O)(function (t, e) {
                    var n, o = L({}, t),
                        r = {};
                    switch (e.length) {
                        case 2:
                            r = e[0], n = e[1];
                            break;
                        case 1:
                            /^(POST|PUT|PATCH)$/i.test(o.method) ? n = e[0] : r = e[0];
                            break;
                        case 0:
                            break;
                        default:
                            throw "Expected up to 2 arguments [params, body], got " + e.length + " arguments"
                    }
                    return o.body = n, o.params = L({}, o.params, r), o
                }(n, arguments))
            }
        }), i
    }

    function C(t) {
        C.installed || (! function (t) {
            var e = t.config,
                n = t.nextTick;
            A = n, I = e.debug || !e.silent
        }(t), t.url = b, t.http = O, t.resource = P, t.Promise = e, Object.defineProperties(t.prototype, {
            $url: {
                get: function () {
                    return c(t.url, this, this.$options.url)
                }
            },
            $http: {
                get: function () {
                    return c(t.http, this, this.$options.http)
                }
            },
            $resource: {
                get: function () {
                    return t.resource.bind(this)
                }
            },
            $promise: {
                get: function () {
                    var e = this;
                    return function (n) {
                        return new t.Promise(n, e)
                    }
                }
            }
        }))
    }
    var $ = 2;
    t.reject = function (e) {
        return new t(function (t, n) {
            n(e)
        })
    }, t.resolve = function (e) {
        return new t(function (t, n) {
            t(e)
        })
    }, t.all = function (e) {
        return new t(function (n, o) {
            function r(t) {
                return function (o) {
                    s[t] = o, (i += 1) === e.length && n(s)
                }
            }
            var i = 0,
                s = [];
            0 === e.length && n(s);
            for (var u = 0; u < e.length; u += 1) t.resolve(e[u]).then(r(u), o)
        })
    }, t.race = function (e) {
        return new t(function (n, o) {
            for (var r = 0; r < e.length; r += 1) t.resolve(e[r]).then(n, o)
        })
    };
    var U = t.prototype;
    U.resolve = function (t) {
        var e = this;
        if (e.state === $) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var o = t && t.then;
                if (null !== t && "object" == typeof t && "function" == typeof o) return void o.call(t, function (t) {
                    n || e.resolve(t), n = !0
                }, function (t) {
                    n || e.reject(t), n = !0
                })
            } catch (t) {
                return void(n || e.reject(t))
            }
            e.state = 0, e.value = t, e.notify()
        }
    }, U.reject = function (t) {
        if (this.state === $) {
            if (t === this) throw new TypeError("Promise settled with itself.");
            this.state = 1, this.value = t, this.notify()
        }
    }, U.notify = function () {
        var t = this;
        ! function (t, e) {
            A(t, e)
        }(function () {
            if (t.state !== $)
                for (; t.deferred.length;) {
                    var e = t.deferred.shift(),
                        n = e[0],
                        o = e[1],
                        r = e[2],
                        i = e[3];
                    try {
                        0 === t.state ? r("function" == typeof n ? n.call(void 0, t.value) : t.value) : 1 === t.state && ("function" == typeof o ? r(o.call(void 0, t.value)) : i(t.value))
                    } catch (t) {
                        i(t)
                    }
                }
        })
    }, U.then = function (e, n) {
        var o = this;
        return new t(function (t, r) {
            o.deferred.push([e, n, t, r]), o.notify()
        })
    }, U.catch = function (t) {
        return this.then(void 0, t)
    }, "undefined" == typeof Promise && (window.Promise = t), e.all = function (t, n) {
        return new e(Promise.all(t), n)
    }, e.resolve = function (t, n) {
        return new e(Promise.resolve(t), n)
    }, e.reject = function (t, n) {
        return new e(Promise.reject(t), n)
    }, e.race = function (t, n) {
        return new e(Promise.race(t), n)
    };
    var R = e.prototype;
    R.bind = function (t) {
        return this.context = t, this
    }, R.then = function (t, n) {
        return t && t.bind && this.context && (t = t.bind(this.context)), n && n.bind && this.context && (n = n.bind(this.context)), new e(this.promise.then(t, n), this.context)
    }, R.catch = function (t) {
        return t && t.bind && this.context && (t = t.bind(this.context)), new e(this.promise.catch(t), this.context)
    }, R.finally = function (t) {
        return this.then(function (e) {
            return t.call(this), e
        }, function (e) {
            return t.call(this), Promise.reject(e)
        })
    };
    var A, S = {}.hasOwnProperty,
        k = [].slice,
        I = !1,
        q = "undefined" != typeof window,
        H = Array.isArray,
        L = Object.assign || function (t) {
            return k.call(arguments, 1).forEach(function (e) {
                h(t, e)
            }), t
        };
    b.options = {
        url: "",
        root: null,
        params: {}
    }, b.transform = {
        template: function (t) {
            var e = [],
                n = d(t.url, t.params, e);
            return e.forEach(function (e) {
                delete t.params[e]
            }), n
        },
        query: function (t, e) {
            var n = Object.keys(b.options.params),
                o = {},
                r = e(t);
            return f(t.params, function (t, e) {
                -1 === n.indexOf(e) && (o[e] = t)
            }), (o = b.params(o)) && (r += (-1 == r.indexOf("?") ? "?" : "&") + o), r
        },
        root: function (t, e) {
            var n = e(t);
            return r(t.root) && !/^(https?:)?\//.test(n) && (n = function (t, e) {
                return t && void 0 === e ? t.replace(/\s+$/, "") : t && e ? t.replace(new RegExp("[" + e + "]+$"), "") : t
            }(t.root, "/") + "/" + n), n
        }
    }, b.transforms = ["template", "query", "root"], b.params = function (t) {
        var e = [],
            n = encodeURIComponent;
        return e.add = function (t, e) {
            i(e) && (e = e()), null === e && (e = ""), this.push(n(t) + "=" + n(e))
        }, g(e, t), e.join("&").replace(/%20/g, "+")
    }, b.parse = function (t) {
        var e = document.createElement("a");
        return document.documentMode && (e.href = t, t = e.href), e.href = t, {
            href: e.href,
            protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
            port: e.port,
            host: e.host,
            hostname: e.hostname,
            pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname,
            search: e.search ? e.search.replace(/^\?/, "") : "",
            hash: e.hash ? e.hash.replace(/^#/, "") : ""
        }
    };
    var B = q && "withCredentials" in new XMLHttpRequest,
        M = function (t) {
            var e = this;
            this.map = {}, f(t, function (t, n) {
                return e.append(n, t)
            })
        };
    M.prototype.has = function (t) {
        return null !== E(this.map, t)
    }, M.prototype.get = function (t) {
        var e = this.map[E(this.map, t)];
        return e ? e.join() : null
    }, M.prototype.getAll = function (t) {
        return this.map[E(this.map, t)] || []
    }, M.prototype.set = function (t, e) {
        this.map[function (t) {
            if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return n(t)
        }(E(this.map, t) || t)] = [n(e)]
    }, M.prototype.append = function (t, e) {
        var o = this.map[E(this.map, t)];
        o ? o.push(n(e)) : this.set(t, e)
    }, M.prototype.delete = function (t) {
        delete this.map[E(this.map, t)]
    }, M.prototype.deleteAll = function () {
        this.map = {}
    }, M.prototype.forEach = function (t, e) {
        var n = this;
        f(this.map, function (o, r) {
            f(o, function (o) {
                return t.call(e, o, r, n)
            })
        })
    };
    var N = function (t, n) {
        var o = n.url,
            i = n.headers,
            s = n.status,
            u = n.statusText;
        this.url = o, this.ok = s >= 200 && s < 300, this.status = s || 0, this.statusText = u || "", this.headers = new M(i), this.body = t, r(t) ? this.bodyText = t : function (t) {
            return "undefined" != typeof Blob && t instanceof Blob
        }(t) && (this.bodyBlob = t, function (t) {
            return 0 === t.type.indexOf("text") || -1 !== t.type.indexOf("json")
        }(t) && (this.bodyText = function (t) {
            return new e(function (e) {
                var n = new FileReader;
                n.readAsText(t), n.onload = function () {
                    e(n.result)
                }
            })
        }(t)))
    };
    N.prototype.blob = function () {
        return a(this.bodyBlob)
    }, N.prototype.text = function () {
        return a(this.bodyText)
    }, N.prototype.json = function () {
        return a(this.text(), function (t) {
            return JSON.parse(t)
        })
    }, Object.defineProperty(N.prototype, "data", {
        get: function () {
            return this.body
        },
        set: function (t) {
            this.body = t
        }
    });
    var D = function (t) {
        this.body = null, this.params = {}, L(this, t, {
            method: function (t) {
                return t ? t.toUpperCase() : ""
            }(t.method || "GET")
        }), this.headers instanceof M || (this.headers = new M(this.headers))
    };
    D.prototype.getUrl = function () {
        return b(this)
    }, D.prototype.getBody = function () {
        return this.body
    }, D.prototype.respondWith = function (t, e) {
        return new N(t, L(e || {}, {
            url: this.getUrl()
        }))
    };
    var J = {
        "Content-Type": "application/json;charset=utf-8"
    };
    return O.options = {}, O.headers = {
        put: J,
        post: J,
        patch: J,
        delete: J,
        common: {
            Accept: "application/json, text/plain, */*"
        },
        custom: {}
    }, O.interceptor = {
        before: function (t, e) {
            i(t.before) && t.before.call(this, t), e()
        },
        method: function (t, e) {
            t.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(t.method) && (t.headers.set("X-HTTP-Method-Override", t.method), t.method = "POST"), e()
        },
        jsonp: function (t, e) {
            "JSONP" == t.method && (t.client = T), e()
        },
        json: function (t, e) {
            var n = t.headers.get("Content-Type") || "";
            s(t.body) && 0 === n.indexOf("application/json") && (t.body = JSON.stringify(t.body)), e(function (t) {
                return t.bodyText ? a(t.text(), function (e) {
                    if (0 === (n = t.headers.get("Content-Type") || "").indexOf("application/json") || function (t) {
                            var e = t.match(/^\s*(\[|\{)/);
                            return e && {
                                "[": /]\s*$/,
                                "{": /}\s*$/
                            } [e[1]].test(t)
                        }(e)) try {
                        t.body = JSON.parse(e)
                    } catch (e) {
                        t.body = null
                    } else t.body = e;
                    return t
                }) : t
            })
        },
        form: function (t, e) {
            ! function (t) {
                return "undefined" != typeof FormData && t instanceof FormData
            }(t.body) ? s(t.body) && t.emulateJSON && (t.body = b.params(t.body), t.headers.set("Content-Type", "application/x-www-form-urlencoded")): t.headers.delete("Content-Type"), e()
        },
        header: function (t, e) {
            f(L({}, O.headers.common, t.crossOrigin ? {} : O.headers.custom, O.headers[o(t.method)]), function (e, n) {
                t.headers.has(n) || t.headers.set(n, e)
            }), e()
        },
        cors: function (t, e) {
            if (q) {
                var n = b.parse(location.href),
                    o = b.parse(t.getUrl());
                o.protocol === n.protocol && o.host === n.host || (t.crossOrigin = !0, t.emulateHTTP = !1, B || (t.client = w))
            }
            e()
        }
    }, O.interceptors = ["before", "method", "jsonp", "json", "form", "header", "cors"], ["get", "delete", "head", "jsonp"].forEach(function (t) {
        O[t] = function (e, n) {
            return this(L(n || {}, {
                url: e,
                method: t
            }))
        }
    }), ["post", "put", "patch"].forEach(function (t) {
        O[t] = function (e, n, o) {
            return this(L(o || {}, {
                url: e,
                method: t,
                body: n
            }))
        }
    }), P.actions = {
        get: {
            method: "GET"
        },
        save: {
            method: "POST"
        },
        query: {
            method: "GET"
        },
        update: {
            method: "PUT"
        },
        remove: {
            method: "DELETE"
        },
        delete: {
            method: "DELETE"
        }
    }, "undefined" != typeof window && window.Vue && window.Vue.use(C), C
});