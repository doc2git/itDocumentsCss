/**
 * Created by jsh on 2017/7/9.
 */
console.log(4);

//2017/7/9 设置左侧边栏等高于文章div块；
var leftColumn = document.getElementsByClassName(".left-column")[0];
var sidebarBox = document.getElementsByClassName(".sidebar-box")[0];
sidebarBox.style["height"] = document.getElementsByClassName("article")[0].offsetHeight + "px";
leftColumn.style["height"] = document.getElementsByClassName("article")[0].offsetHeight + "px";
console.log(sidebarBox.style.height, leftColumn.style.height);

(function () {
    var l = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.ia = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        for (var d in b)if ("prototype" != d)if (Object.defineProperties) {
            var e = Object.getOwnPropertyDescriptor(b, d);
            e && Object.defineProperty(a, d, e)
        } else a[d] = b[d]
    }, p = this, aa = function (a) {
        return "number" == typeof a
    }, ba = function (a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null"; else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    }, ca = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, da = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ea = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, r = function (a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r = da : r = ea;
        return r.apply(null, arguments)
    }, fa = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }, u = function (a) {
        var b = ha;

        function c() {
        }

        c.prototype = b.prototype;
        a.ia = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ja = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var ia = (new Date).getTime();
    var y = document, z = window;
    var ja = function (a, b) {
        a = parseInt(a, 10);
        return isNaN(a) ? b : a
    }, ka = function (a, b) {
        return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
    }, la = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, ma = function (a, b) {
        return a ? (a = a.match(la)) ? a[0] : b : b
    };
    var na = ja("468", 0);
    var oa = function () {
        return "r20170629"
    }, pa = ka("false", !1), qa = ka("false", !1), ra = ka("false", !1), sa = ra || !qa;
    var ta = function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, Ba = function (a) {
        if (!ua.test(a))return a;
        -1 != a.indexOf("&") && (a = a.replace(va, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(wa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(xa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(ya, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(za, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Aa, "&#0;"));
        return a
    }, va = /&/g, wa = /</g, xa = />/g, ya = /"/g, za = /'/g, Aa = /\x00/g, ua = /[\x00&<>"']/, Ca = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    }, Da = {"'": "\\'"}, Ea = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }, Fa = function (a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    };
    var Ga = function (a, b, c) {
        for (var d = a.length, e = "string" == typeof a ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }, Ha = function (a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" == typeof a ? a.split("") : a, g = 0; g < c; g++)if (g in f) {
            var h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h)
        }
        return d
    }, Ia = function (a) {
        return Array.prototype.concat.apply([], arguments)
    };
    var Ja;
    a:{
        var Ka = p.navigator;
        if (Ka) {
            var La = Ka.userAgent;
            if (La) {
                Ja = La;
                break a
            }
        }
        Ja = ""
    }
    var A = function (a) {
        return -1 != Ja.indexOf(a)
    };
    var Ma = function (a, b) {
        for (var c in a)if (b.call(void 0, a[c], c, a))return c
    };
    var Na = function (a) {
        Na[" "](a);
        return a
    };
    Na[" "] = function () {
    };
    var Oa = A("Opera"), Pa = A("Trident") || A("MSIE"), Qa = A("Edge"),
        Ra = A("Gecko") && !(-1 != Ja.toLowerCase().indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        Sa = -1 != Ja.toLowerCase().indexOf("webkit") && !A("Edge"), Ta = function () {
            var a = p.document;
            return a ? a.documentMode : void 0
        }, Ua;
    a:{
        var Va = "", Wa = function () {
            var a = Ja;
            if (Ra)return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Qa)return /Edge\/([\d\.]+)/.exec(a);
            if (Pa)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Sa)return /WebKit\/(\S+)/.exec(a);
            if (Oa)return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Wa && (Va = Wa ? Wa[1] : "");
        if (Pa) {
            var Xa = Ta();
            if (null != Xa && Xa > parseFloat(Va)) {
                Ua = String(Xa);
                break a
            }
        }
        Ua = Va
    }
    var Ya = Ua, Za = {}, $a;
    var ab = p.document;
    $a = ab && Pa ? Ta() || ("CSS1Compat" == ab.compatMode ? parseInt(Ya, 10) : 5) : void 0;
    var bb;
    if (!(bb = !Ra && !Pa)) {
        var cb;
        if (cb = Pa) cb = 9 <= Number($a);
        bb = cb
    }
    var db;
    if (!(db = bb)) {
        var eb;
        if (eb = Ra) {
            var fb;
            if (Object.prototype.hasOwnProperty.call(Za, "1.9.1")) fb = Za["1.9.1"]; else {
                for (var gb = 0, hb = ta(String(Ya)).split("."), ib = ta("1.9.1").split("."), jb = Math.max(hb.length, ib.length), kb = 0; !gb && kb < jb; kb++) {
                    var lb = hb[kb] || "", mb = ib[kb] || "";
                    do {
                        var nb = /(\d*)(\D*)(.*)/.exec(lb) || ["", "", "", ""],
                            ob = /(\d*)(\D*)(.*)/.exec(mb) || ["", "", "", ""];
                        if (0 == nb[0].length && 0 == ob[0].length)break;
                        gb = Ea(0 == nb[1].length ? 0 : parseInt(nb[1], 10), 0 == ob[1].length ? 0 : parseInt(ob[1], 10)) || Ea(0 == nb[2].length, 0 == ob[2].length) || Ea(nb[2], ob[2]);
                        lb = nb[3];
                        mb = ob[3]
                    } while (!gb)
                }
                fb = Za["1.9.1"] = 0 <= gb
            }
            eb = fb
        }
        db = eb
    }
    var pb = db;
    var qb = function (a) {
        return pb && a.children ? a.children : Ha(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    };
    var B = function (a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)a:{
                try {
                    Na(a.foo);
                    b = !0;
                    break a
                } catch (c) {
                }
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }, rb = function (a, b) {
        var c = a.createElement("script");
        c.src = b;
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }, C = function (a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }, sb = function (a) {
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }, tb = function (a, b) {
        for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }, ub = function (a) {
        var b = a.length;
        if (!b)return 0;
        for (var c = 305419896, d = 0; d < b; d++)c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }, vb = /^([0-9.]+)px$/, wb = /^(-?[0-9.]{1,30})$/, xb = function (a) {
        return wb.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }, yb = function (a) {
        return (a = vb.exec(a)) ? +a[1] : null
    };
    var zb = function () {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
            p.addEventListener("test", null, b)
        } catch (c) {
        }
        return a
    }(), Ab = function (a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, zb ? void 0 : !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }, Bb = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, zb ? void 0 : !1) : a.detachEvent && a.detachEvent("on" + b, c)
    };
    var Cb = function (a) {
        a = a || p;
        var b = a.context;
        if (!b)try {
            b = a.parent.context
        } catch (c) {
        }
        try {
            if (b && "pageViewId" in b && "canonicalUrl" in b)return b
        } catch (c) {
        }
        return null
    }, Db = function (a) {
        a = a || Cb();
        if (!a)return null;
        a = a.master;
        return B(a) ? a : null
    };
    var Eb = function (a, b) {
        p.google_image_requests || (p.google_image_requests = []);
        var c = p.document.createElement("img");
        if (b) {
            var d = function (a) {
                b(a);
                Bb(c, "load", d);
                Bb(c, "error", d)
            };
            Ab(c, "load", d);
            Ab(c, "error", d)
        }
        c.src = a;
        p.google_image_requests.push(c)
    };
    var Fb = Object.prototype.hasOwnProperty, Gb = function (a, b) {
            for (var c in a)Fb.call(a, c) && b.call(void 0, a[c], c, a)
        }, Hb = function (a) {
            return !(!a || !a.call) && "function" === typeof a
        }, Ib = function (a, b) {
            for (var c = 1, d = arguments.length; c < d; ++c)a.push(arguments[c])
        }, Jb = function (a, b) {
            if (a.indexOf)return a = a.indexOf(b), 0 < a || !a;
            for (var c = 0; c < a.length; c++)if (a[c] === b)return !0;
            return !1
        }, Kb = function (a) {
            a = Db(Cb(a)) || a;
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
        }, Lb = function (a) {
            a = Db(Cb(a)) || a;
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        }, Mb = !!window.google_async_iframe_id, Nb = Mb && window.parent || window, Ob = /(^| )adsbygoogle($| )/,
        Pb = function (a) {
            a = pa && a.google_top_window || a.top;
            return B(a) ? a : null
        };
    var D = function (a, b) {
        a = a.google_ad_modifications;
        return Jb(a ? a.eids || [] : [], b)
    }, E = function (a, b) {
        a = a.google_ad_modifications;
        return Jb(a ? a.loeids || [] : [], b)
    }, Qb = function (a, b, c) {
        if (!a)return null;
        for (var d = 0; d < a.length; ++d)if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)return a[d];
        return null
    };
    var Rb = function (a, b, c) {
        c = c ? c : {};
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Sb = function (a, b) {
        this.j = a;
        this.l = b
    }, Tb = function (a, b, c) {
        this.url = a;
        this.j = b;
        this.Y = !!c;
        this.depth = aa(void 0) ? void 0 : null
    };
    var Ub = function (a, b, c, d, e) {
        this.w = c || 4E3;
        this.m = a || "&";
        this.A = b || ",$";
        this.s = void 0 !== d ? d : "trn";
        this.M = e || null;
        this.v = !1;
        this.l = {};
        this.B = 0;
        this.j = []
    }, Vb = function (a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }, Xb = function (a, b, c, d, e) {
        var f = [];
        tb(a, function (a, h) {
            (a = Wb(a, b, c, d, e)) && f.push(h + "=" + a)
        });
        return f.join(b)
    }, Wb = function (a, b, c, d, e) {
        if (null == a)return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)f.push(Wb(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)return e = e || 0, 2 > e ? encodeURIComponent(Xb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }, Yb = function (a, b, c, d) {
        a.j.push(b);
        a.l[b] = Vb(c, d)
    }, $b = function (a, b, c, d) {
        b = b + "//" + c + d;
        var e = Zb(a) - d.length - 0;
        if (0 > e)return "";
        a.j.sort(function (a, b) {
            return a - b
        });
        d = null;
        c = "";
        for (var f = 0; f < a.j.length; f++)for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
            if (!e) {
                d = null == d ? g : d;
                break
            }
            var m = Xb(h[k], a.m, a.A);
            if (m) {
                m = c + m;
                if (e >= m.length) {
                    e -= m.length;
                    b += m;
                    c = a.m;
                    break
                } else a.v && (c = e, m[c - 1] == a.m && --c, b += m.substr(0, c), c = a.m, e = 0);
                d = null == d ? g : d
            }
        }
        f = "";
        a.s && null != d && (f = c + a.s + "=" + (a.M || d));
        return b + f + ""
    }, Zb = function (a) {
        if (!a.s)return a.w;
        var b = 1, c;
        for (c in a.l)b = c.length > b ? c.length : b;
        return a.w - a.s.length - b - a.m.length - 1
    };
    var ac = function (a, b, c, d, e, f) {
        if ((d ? a.v : Math.random()) < (e || a.j))try {
            if (c instanceof Ub)var g = c; else g = new Ub, tb(c, function (a, b) {
                var c = g, d = c.B++;
                a = Vb(b, a);
                c.j.push(d);
                c.l[d] = a
            });
            var h = $b(g, a.s, a.l, a.m + b + "&");
            h && ("undefined" === typeof f ? Eb(h) : Eb(h, f))
        } catch (k) {
        }
    };
    var bc = function (a, b) {
        this.start = a < b ? a : b;
        this.j = a < b ? b : a
    };
    var cc = function (a, b) {
        this.j = b >= a ? new bc(a, b) : null
    }, dc = function () {
        try {
            var a = parseInt(z.localStorage.getItem("google_experiment_mod"), 10)
        } catch (b) {
            return null
        }
        if (0 <= a && 1E3 > a)return a;
        a = Math.floor(1E3 * sb(z));
        try {
            return z.localStorage.setItem("google_experiment_mod", "" + a), a
        } catch (b) {
            return null
        }
    };
    var ec = !1, fc = function (a) {
        try {
            var b = (a || p).top.location.hash;
            if (b) {
                var c = b.match(/\bdeid=([\d,]+)/);
                return c && c[1] || ""
            }
        } catch (d) {
        }
        return ""
    }, gc = function (a, b) {
        var c;
        if (c = (c = fc().match(new RegExp("\\b(" + a.join("|") + ")\\b"))) && c[0] || null) a = c; else if (ec) a = null; else a:{
            if (!(1E-4 > Math.random()) && (c = Math.random(), c < b)) {
                c = sb(p);
                a = a[Math.floor(c * a.length)];
                break a
            }
            a = null
        }
        return a
    };
    var ic = function (a, b) {
        var c = hc();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = void 0
    };
    var jc = function (a, b) {
        this.events = [];
        this.l = b || p;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        b = fc(this.l);
        b = b.indexOf && 0 <= b.indexOf("1337");
        this.j = (this.j = null != c ? c : Math.random() < a) || b;
        a = this.l.performance;
        this.m = !!(a && a.mark && a.clearMarks && b)
    };
    jc.prototype.s = function (a) {
        if (a && this.m) {
            var b = this.l.performance;
            b.clearMarks("goog_" + a.uniqueId + "_start");
            b.clearMarks("goog_" + a.uniqueId + "_end")
        }
    };
    jc.prototype.start = function (a, b) {
        if (!this.j)return null;
        a = new ic(a, b);
        this.m && this.l.performance.mark("goog_" + a.uniqueId + "_start");
        return a
    };
    var hc = function () {
        var a = p.performance;
        return a && a.now ? a.now() : +new Date
    };
    var kc = function (a, b, c, d) {
        this.w = a;
        this.B = b;
        this.s = c;
        this.m = null;
        this.A = this.j;
        this.l = void 0 === d ? null : d;
        this.v = !1
    }, nc = function (a, b, c, d, e) {
        try {
            if (a.l && a.l.j) {
                var f = a.l.start(b.toString(), 3);
                var g = c();
                var h = a.l;
                c = f;
                h.j && aa(c.value) && (c.duration = hc() - c.value, h.m && h.l.performance.mark("goog_" + c.uniqueId + "_end"), h.j && h.events.push(c))
            } else g = c()
        } catch (k) {
            h = a.s;
            try {
                a.l && f && a.l.s(f), h = (e || a.A).call(a, b, new lc(mc(k), k.fileName, k.lineNumber), void 0, d)
            } catch (m) {
                a.j(217, m)
            }
            if (!h)throw k;
        }
        return g
    }, oc = function (a, b) {
        var c = F;
        return function (d) {
            for (var e = [], f = 0; f < arguments.length; ++f)e[f - 0] = arguments[f];
            return nc(c, a, function () {
                return b.apply(void 0, e)
            }, void 0, void 0)
        }
    };
    kc.prototype.j = function (a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new Ub;
            f.v = !0;
            Yb(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new lc(mc(b), b.fileName, b.lineNumber));
            b.msg && Yb(f, 2, "msg", b.msg.substring(0, 512));
            b.file && Yb(f, 3, "file", b.file);
            0 < b.line && Yb(f, 4, "line", b.line);
            var g = b.meta || {};
            if (this.m)try {
                this.m(g)
            } catch (G) {
            }
            if (d)try {
                d(g)
            } catch (G) {
            }
            b = [g];
            f.j.push(5);
            f.l[5] = b;
            d = p;
            b = [];
            g = null;
            do {
                var h = d;
                if (B(h)) {
                    var k = h.location.href;
                    g = h.document && h.document.referrer || null
                } else k = g, g = null;
                b.push(new Tb(k || "", h));
                try {
                    d = h.parent
                } catch (G) {
                    d = null
                }
            } while (d && h != d);
            k = 0;
            for (var m = b.length - 1; k <= m; ++k)b[k].depth = m - k;
            h = p;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)for (k = 1; k < b.length; ++k) {
                var q = b[k];
                q.url || (q.url = h.location.ancestorOrigins[k - 1] || "", q.Y = !0)
            }
            var t = new Tb(p.location.href, p, !1), n = b.length - 1;
            for (h = n; 0 <= h; --h) {
                var w = b[h];
                if (w.url && !w.Y) {
                    t = w;
                    break
                }
            }
            w = null;
            var v = b.length && b[n].url;
            0 != t.depth && v && (w = b[n]);
            var x = new Sb(t, w);
            x.l && Yb(f, 6, "top", x.l.url || "");
            Yb(f, 7, "url", x.j.url || "");
            ac(this.w, e, f, this.v, c)
        } catch (G) {
            try {
                ac(this.w, e, {context: "ecmserr", rctx: a, msg: mc(G), url: x.j.url}, this.v, c)
            } catch (we) {
            }
        }
        return this.s
    };
    var mc = function (a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;)d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    }, lc = function (a, b, c) {
        Rb.call(this, Error(a), {message: a, file: void 0 === b ? "" : b, line: void 0 === c ? -1 : c})
    };
    l(lc, Rb);
    var pc, F;
    if (Mb && !B(Nb)) {
        var qc = "." + y.domain;
        try {
            for (; 2 < qc.split(".").length && !B(Nb);)y.domain = qc = qc.substr(qc.indexOf(".") + 1), Nb = window.parent
        } catch (a) {
        }
        B(Nb) || (Nb = window)
    }
    var rc = Nb, H = new jc(1, rc), sc = function (a) {
        null != a && (rc.google_measure_js_timing = a);
        rc.google_measure_js_timing || (H.events != H.l.google_js_reporting_queue && (H.events.length = 0, H.m && Ga(H.events, H.s, H)), H.j = !1)
    };
    pc = new function () {
        var a = a ? a : z;
        this.s = "http:" === a.location.protocol ? "http:" : "https:";
        this.l = "pagead2.googlesyndication.com";
        this.m = "/pagead/gen_204?id=";
        this.j = .01;
        this.v = Math.random()
    };
    F = new kc(pc, "jserror", !0, H);
    "complete" == rc.document.readyState ? sc() : H.j && Ab(rc, "load", function () {
            sc()
        });
    var vc = function () {
        var a = [tc, uc];
        F.m = function (b) {
            Ga(a, function (a) {
                a(b)
            })
        }
    }, wc = function (a, b, c, d) {
        return nc(F, a, c, d, b)
    }, xc = function (a, b) {
        return oc(a, b)
    }, yc = F.j;
    var zc = function (a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        ac(pc, "ama", b, !0, .01, void 0)
    };
    var Ac = function (a, b, c) {
        c || (c = sa ? "https" : "http");
        z.location && "https:" == z.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    };
    var Bc = new function () {
        this.j = "google-auto-placed";
        this.l = {google_tag_origin: "qs"}
    };
    var Cc = function (a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return b
    };
    var Dc = A("Safari") && !((A("Chrome") || A("CriOS")) && !A("Edge") || A("Coast") || A("Opera") || A("Edge") || A("Silk") || A("Android")) && !(A("iPhone") && !A("iPod") && !A("iPad") || A("iPad") || A("iPod"));
    var Ec = null, Fc = null, Gc = Ra || Sa && !Dc || Oa || "function" == typeof p.btoa, Hc = function (a, b) {
        if (!Ec) {
            Ec = {};
            Fc = {};
            for (var c = 0; 65 > c; c++)Ec[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Fc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        b = b ? Fc : Ec;
        c = [];
        for (var d = 0; d < a.length; d += 3) {
            var e = a[d], f = d + 1 < a.length, g = f ? a[d + 1] : 0, h = d + 2 < a.length, k = h ? a[d + 2] : 0,
                m = e >> 2;
            e = (e & 3) << 4 | g >> 4;
            g = (g & 15) << 2 | k >> 6;
            k &= 63;
            h || (k = 64, f || (g = 64));
            c.push(b[m], b[e], b[g], b[k])
        }
        return c.join("")
    };
    var ha = function () {
    }, Ic = "function" == typeof Uint8Array, J = function (a, b, c) {
        a.j = null;
        b || (b = []);
        a.A = void 0;
        a.s = -1;
        a.l = b;
        a:{
            if (a.l.length) {
                b = a.l.length - 1;
                var d = a.l[b];
                if (d && "object" == typeof d && "array" != ba(d) && !(Ic && d instanceof Uint8Array)) {
                    a.v = b - a.s;
                    a.m = d;
                    break a
                }
            }
            a.v = Number.MAX_VALUE
        }
        a.w = {};
        if (c)for (b = 0; b < c.length; b++)d = c[b], d < a.v ? (d += a.s, a.l[d] = a.l[d] || I) : a.m[d] = a.m[d] || I
    }, I = [], K = function (a, b) {
        if (b < a.v) {
            b += a.s;
            var c = a.l[b];
            return c === I ? a.l[b] = [] : c
        }
        c = a.m[b];
        return c === I ? a.m[b] = [] : c
    }, Jc = function (a, b) {
        if (b < a.v) {
            b += a.s;
            var c = a.l[b];
            return c === I ? a.l[b] = [] : c
        }
        c = a.m[b];
        return c === I ? a.m[b] = [] : c
    }, Kc = function (a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = K(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }, Lc = function (a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = Jc(a, c), e = [], f = 0; f < d.length; f++)e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == I && (b = a.j[c] = []);
        return b
    }, Mc = function (a) {
        if (a.j)for (var b in a.j) {
            var c = a.j[b];
            if ("array" == ba(c))for (var d = 0; d < c.length; d++)c[d] && Mc(c[d]); else c && Mc(c)
        }
    };
    ha.prototype.toString = function () {
        Mc(this);
        return this.l.toString()
    };
    var Nc = function (a) {
        J(this, a, null)
    };
    u(Nc);
    var Pc = function (a) {
        J(this, a, Oc)
    };
    u(Pc);
    var Oc = [4], Qc = function (a) {
        J(this, a, null)
    };
    u(Qc);
    var Rc = function (a) {
        J(this, a, null)
    };
    u(Rc);
    var Tc = function (a) {
        J(this, a, Sc)
    };
    u(Tc);
    var Sc = [6, 7, 9];
    var Vc = function (a) {
        J(this, a, Uc)
    };
    u(Vc);
    var Uc = [1, 2, 5, 7], Wc = function (a) {
        J(this, a, null)
    };
    u(Wc);
    var Yc = function (a) {
        J(this, a, Xc)
    };
    u(Yc);
    var Xc = [2];
    var Zc = {overlays: 1, interstitials: 2, vignettes: 2, inserts: 3, immersives: 4, list_view: 5, full_page: 6};
    var $c = null, ad = function () {
        if (!$c) {
            for (var a = p, b = a, c = 0; a && a != a.parent;)if (a = a.parent, c++, B(a)) b = a; else break;
            $c = b
        }
        return $c
    };
    var bd = {C: "368226004", I: "368226005"}, cd = {C: "368226014", I: "368226015"},
        dd = {o: "10583695", u: "10583696"}, ed = {o: "10573695", u: "10573696"}, fd = {o: "10593695", u: "10593696"},
        gd = {o: "4089037", u: "4089038"}, L = {o: "4089040", O: "4089041", P: "4089042", R: "4089043"},
        hd = {o: "4089045", u: "4089046"}, id = {K: "20040067", o: "20040068", V: "1337"},
        jd = {o: "21060548", K: "21060549"}, M = {o: "62710010", VIEWPORT: "62710011", L: "62710012"},
        kd = {o: "62710013", VIEWPORT: "62710014", L: "62710015"}, ld = {o: "201222021", H: "201222023"},
        md = {o: "201222031", H: "201222033"}, nd = {o: "20040000", u: "20040001"},
        N = {N: "21060497", U: "21060498", T: "21060499", J: "21060500"}, od = {o: "21060538", u: "21060539"},
        pd = {o: "156549041", F: "156549042", G: "156549043", D: "156549044"},
        qd = {o: "156549051", F: "156549052", G: "156549053", D: "156549054"}, rd = {o: "21060518", u: "21060519"};
    ec = !1;
    var O = function (a) {
        a = a.document;
        return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
    };
    var sd = function (a, b) {
        Array.prototype.slice.call(a).forEach(b, void 0)
    };
    var td = function (a) {
        var b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d)c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)if (!c[b[d]])return !1;
        return !0
    };
    var ud = function (a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c], e = Fa(d.ka);
            a[e] = d.value
        }
    };
    var vd = function (a, b, c, d) {
        this.s = a;
        this.l = b;
        this.m = c;
        this.j = d
    };
    vd.prototype.toString = function () {
        return JSON.stringify({
            nativeQuery: this.s,
            occurrenceIndex: this.l,
            paragraphIndex: this.m,
            ignoreMode: this.j
        })
    };
    var wd = function (a, b) {
        if (null == a.j)return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }, yd = function (a) {
        var b = [];
        sd(a.getElementsByTagName("p"), function (a) {
            100 <= xd(a) && b.push(a)
        });
        return b
    }, xd = function (a) {
        if (3 == a.nodeType)return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)return 0;
        var b = 0;
        sd(a.childNodes, function (a) {
            b += xd(a)
        });
        return b
    }, zd = function (a) {
        return !a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };
    var Ad = {1: 1, 2: 2, 3: 3, 0: 0}, Bd = function (a) {
        return null != a ? Ad[a] : a
    }, Cd = {1: 0, 2: 1, 3: 2, 4: 3};
    var Dd = function (a, b) {
        if (!a)return !1;
        a = C(a, b);
        if (!a)return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }, Ed = function (a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;)a = a.previousSibling;
        return a ? a : null
    }, Fd = function (a) {
        return !!a.nextSibling || !!a.parentNode && Fd(a.parentNode)
    };
    var Hd = function () {
        this.l = new Gd(this);
        this.j = 0
    }, Id = function (a) {
        if (0 != a.j)throw Error("Already resolved/rejected.");
    }, Gd = function (a) {
        this.j = a
    };
    Gd.prototype.then = function (a, b) {
        if (this.l)throw Error("Then functions already set.");
        this.l = a;
        this.m = b;
        Jd(this)
    };
    var Jd = function (a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.s);
                break;
            case 2:
                a.m && a.m(a.j.m);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };
    var Kd = function (a) {
        this.exception = a
    }, Ld = function (a, b, c, d) {
        this.l = a;
        this.m = b;
        this.v = c;
        this.j = d
    };
    Ld.prototype.start = function () {
        this.s()
    };
    Ld.prototype.s = function () {
        try {
            switch (this.l.document.readyState) {
                case "complete":
                case "interactive":
                    Md(this.m, !0);
                    Nd(this);
                    break;
                default:
                    Md(this.m, !1) ? Nd(this) : this.l.setTimeout(r(this.s, this), this.v)
            }
        } catch (a) {
            Nd(this, a)
        }
    };
    var Nd = function (a, b) {
        try {
            var c = a.j, d = new Kd(b);
            Id(c);
            c.j = 1;
            c.s = d;
            Jd(c.l)
        } catch (e) {
            a = a.j, b = e, Id(a), a.j = 2, a.m = b, Jd(a.l)
        }
    };
    var Od = function (a, b) {
        this.j = p;
        this.v = a;
        this.s = b;
        this.m = Bc || null;
        this.l = !1
    }, Md = function (a, b) {
        if (a.l)return !0;
        try {
            var c = a.j.localStorage.getItem("google_ama_settings");
            var d = c ? new Nc(c ? JSON.parse(c) : null) : null
        } catch (g) {
            d = null
        }
        if (c = null !== d) d = K(d, 2), c = null == d ? !1 : d;
        if (c)return a = a.j.google_ama_state = a.j.google_ama_state || {}, a.eatf = !0;
        c = Lc(a.s, Tc, 1);
        for (d = 0; d < c.length; d++) {
            var e = c[d];
            if (1 == K(e, 8)) {
                var f = Kc(e, Rc, 4);
                if (f && 2 == K(f, 1) && Pd(a, e, b))return a.l = !0, a = a.j.google_ama_state = a.j.google_ama_state || {}, a.placement = d, !0
            }
        }
        return !1
    }, Pd = function (a, b, c) {
        if (1 != K(b, 8))return !1;
        var d = Kc(b, Pc, 1);
        if (!d)return !1;
        var e = K(d, 7);
        if (K(d, 1) || K(d, 3) || 0 < Jc(d, 4).length) {
            var f = K(d, 3), g = K(d, 1);
            var h = Jc(d, 4);
            e = K(d, 2);
            var k = K(d, 5);
            d = Bd(K(d, 6));
            var m = "";
            g && (m += g);
            f && (m += "#" + zd(f));
            if (h)for (f = 0; f < h.length; f++)m += "." + zd(h[f]);
            e = (h = m) ? new vd(h, e, k, d) : null
        } else e = e ? new vd(e, K(d, 2), K(d, 5), Bd(K(d, 6))) : null;
        if (!e)return !1;
        k = [];
        try {
            k = a.j.document.querySelectorAll(e.s)
        } catch (w) {
        }
        if (k.length) {
            h = k.length;
            if (0 < h) {
                d = Array(h);
                for (f = 0; f < h; f++)d[f] = k[f];
                k = d
            } else k = [];
            k = wd(e, k);
            aa(e.l) && (h = e.l, 0 > h && (h += k.length), k = 0 <= h && h < k.length ? [k[h]] : []);
            if (aa(e.m)) {
                h = [];
                for (d = 0; d < k.length; d++)f = yd(k[d]), g = e.m, 0 > g && (g += f.length), 0 <= g && g < f.length && h.push(f[g]);
                k = h
            }
            e = k
        } else e = [];
        if (!e.length)return !1;
        e = e[0];
        k = K(b, 2);
        k = Cd[k];
        k = void 0 !== k ? k : null;
        if (!(h = null == k)) {
            a:{
                h = a.j;
                switch (k) {
                    case 0:
                        h = Dd(Ed(e), h);
                        break a;
                    case 3:
                        h = Dd(e, h);
                        break a;
                    case 2:
                        d = e.lastChild;
                        h = Dd(d ? 1 == d.nodeType ? d : Ed(d) : null, h);
                        break a
                }
                h = !1
            }
            if (c = !h && !(!c && 2 == k && !Fd(e))) c = 1 == k || 2 == k ? e : e.parentNode, c = !(c && (1 != c.nodeType || "INS" != c.tagName || !td(c)) && 0 >= c.offsetWidth);
            h = !c
        }
        if (h)return !1;
        b = Kc(b, Qc, 3);
        h = {};
        b && (h.$ = K(b, 1), h.X = K(b, 2), h.fa = !!K(b, 3));
        b = a.j;
        c = a.m;
        a = a.v;
        f = b.document;
        d = f.createElement("div");
        g = d.style;
        g.textAlign = "center";
        g.width = "100%";
        g.height = "auto";
        g.clear = h.fa ? "both" : "none";
        h.ga && ud(g, h.ga);
        f = f.createElement("ins");
        g = f.style;
        g.display = "block";
        g.margin = "auto";
        g.backgroundColor = "transparent";
        h.$ && (g.marginTop = h.$);
        h.X && (g.marginBottom = h.X);
        h.ea && ud(g, h.ea);
        d.appendChild(f);
        h = d;
        d = f;
        d.setAttribute("data-ad-format", "auto");
        f = [];
        if (g = c && c.j) h.className = g;
        g = d;
        g.className = "adsbygoogle";
        g.setAttribute("data-ad-client", a);
        f.length && g.setAttribute("data-ad-channel", f.join("+"));
        var q;
        a:{
            try {
                a = h;
                switch (k) {
                    case 0:
                        e.parentNode && e.parentNode.insertBefore(a, e);
                        break;
                    case 3:
                        var t = e.parentNode;
                        if (t) {
                            var n = e.nextSibling;
                            if (n && n.parentNode != t)for (; n && 8 == n.nodeType;)n = n.nextSibling;
                            t.insertBefore(a, n)
                        }
                        break;
                    case 1:
                        e.insertBefore(a, e.firstChild);
                        break;
                    case 2:
                        e.appendChild(a)
                }
                if (1 != e.nodeType ? 0 : "INS" == e.tagName && td(e)) e.style.display = "block";
                t = d;
                t.setAttribute("data-adsbygoogle-status", "reserved");
                t = {element: t};
                (q = c && c.l) && (t.params = q);
                (b.adsbygoogle = b.adsbygoogle || []).push(t)
            } catch (w) {
                (q = h) && q.parentNode && q.parentNode.removeChild(q);
                q = !1;
                break a
            }
            q = !0
        }
        return q ? !0 : !1
    };
    var Qd = function (a) {
        zc(a, {atf: 1})
    }, Rd = function (a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        zc(a, {atf: 0})
    };
    var Sd = function () {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledByReactiveTag = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.debugCard = null;
        this.messageValidationEnabled = this.debugCardRequested = !1;
        this.adRegion = this.floatingAdsFillMessage = this.grappleTagStatusService = null
    };
    var Td = function (a) {
        if (!a)return !1;
        a = qb(a);
        if (!a)return !1;
        for (var b = 0; b < a.length; b++)if (a[b].hasAttribute("data-google-ad-template"))return !0;
        return !1
    };
    var Ud = {"120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0},
        Vd = function (a, b) {
            if (15 == b) {
                if (728 <= a)return 728;
                if (468 <= a)return 468
            } else if (90 == b) {
                if (200 <= a)return 200;
                if (180 <= a)return 180;
                if (160 <= a)return 160;
                if (120 <= a)return 120
            }
            return null
        };
    var uc = function (a) {
        try {
            var b = p.google_ad_modifications;
            if (null != b) {
                var c = Ia(b.eids, b.loeids);
                c && 0 < c.length && (a.eid = c.join(","))
            }
        } catch (d) {
        }
    }, tc = function (a) {
        a.shv = oa()
    };
    F.s = !pa;
    var P = function (a, b) {
        this.s = a;
        this.m = b
    };
    P.prototype.minWidth = function () {
        return this.s
    };
    P.prototype.height = function () {
        return this.m
    };
    P.prototype.j = function (a) {
        return 300 < a && 300 < this.m ? this.s : Math.min(1200, Math.round(a))
    };
    P.prototype.l = function (a) {
        return this.j(a) + "x" + this.height()
    };
    var Wd = {rectangle: 1, horizontal: 2, vertical: 4}, Q = function (a, b, c) {
        P.call(this, a, b);
        this.ha = c
    };
    l(Q, P);
    var Xd = function (a) {
        return function (b) {
            return !!(b.ha & a)
        }
    }, Yd = function (a, b) {
        P.call(this, a, b)
    };
    l(Yd, P);
    Yd.prototype.j = function () {
        return this.minWidth()
    };
    var R = [new Q(970, 90, 2), new Q(728, 90, 2), new Q(468, 60, 2), new Q(336, 280, 1), new Q(320, 100, 2), new Q(320, 50, 2), new Q(300, 600, 4), new Q(300, 250, 1), new Q(250, 250, 1), new Q(234, 60, 2), new Q(200, 200, 1), new Q(180, 150, 1), new Q(160, 600, 4), new Q(125, 125, 1), new Q(120, 600, 4), new Q(120, 240, 4)],
        Zd = [R[6], R[12], R[3], R[0], R[7], R[14], R[1], R[8], R[10], R[4], R[15], R[2], R[11], R[5], R[13], R[9]],
        $d = new Q(120, 120, 1), ae = new Q(120, 50, 2);

    function be(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = yb(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    var ce = function (a, b) {
        do {
            var c = C(a, b);
            if (c && "fixed" == c.position)return !1
        } while (a = a.parentElement);
        return !0
    }, de = function (a) {
        var b = 0, c;
        for (c in Wd)-1 != a.indexOf(c) && (b |= Wd[c]);
        return b
    };
    var ee = function (a, b, c) {
        if (a.style) {
            var d = yb(a.style[c]);
            if (d)return d
        }
        if (a = C(a, b))if (c = yb(a[c]))return c;
        return null
    }, fe = function (a) {
        return function (b) {
            return b.minWidth() <= a
        }
    }, ie = function (a, b, c) {
        var d = a && ge(c, b), e = he(b);
        return function (a) {
            return !(d && a.height() >= e)
        }
    }, ge = function (a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(), d = a.getBoundingClientRect();
            var e = {x: d.left - c.left, y: d.top - c.top}
        } catch (f) {
            e = null
        }
        a = e;
        return (a ? a.y : 0) < O(b).clientHeight - 100
    }, je = function (a, b) {
        var c = Infinity;
        do {
            var d = ee(b, a, "height");
            d && (c = Math.min(c, d));
            (d = ee(b, a, "maxHeight")) && (c = Math.min(c, d))
        } while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }, he = function (a) {
        var b = !Lb(a);
        return E(a, md.H) && b ? 2 * O(a).clientHeight / 3 : 250
    };
    var ke = function (a) {
        return function (b) {
            for (var c = a.length - 1; 0 <= c; --c)if (!a[c](b))return !1;
            return !0
        }
    }, le = function (a, b, c) {
        for (var d = a.length, e = null, f = 0; f < d; ++f) {
            var g = a[f];
            if (b(g)) {
                if (!c || c(g))return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var S = function (a, b) {
        this.l = a;
        this.j = b
    };
    var T = function (a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, T) : this.stack = Error().stack || ""
    };
    l(T, Error);
    var me = function (a) {
        return !(a.error && a.meta && a.id ? a.msg || mc(a.error) : mc(a)).indexOf("TagError")
    };
    var oe = function (a, b, c, d, e) {
        if (!ne(c) && !E(c, cd.C))return a;
        e.google_full_width_responsive_allowed = !1;
        if ("false" == e.google_full_width_responsive || !("auto" == b && 488 > O(c).clientWidth && c.innerHeight >= c.innerWidth))return a;
        b = O(c).clientWidth;
        var f = b - a;
        if (!(f = !b || 5 > f || .3 < f / b || (pa && c.google_top_window || c.top) != c || !(e.google_safe_for_responsive_override = ce(d, c))))a:{
            f = O(c).clientWidth;
            for (var g = d.parentElement, h = 0; 100 > h && g; h++) {
                var k = C(g, c);
                if ("hidden" == k.overflow && (k = yb(k.width)) && k < f) {
                    f = !0;
                    break a
                }
                g = g.parentElement
            }
            f = !1
        }
        if (f)return a;
        f = d.parentElement;
        if (!f)return a;
        e.google_full_width_responsive_allowed = !0;
        if (!ne(c))return a;
        e = C(f, c);
        e = yb(e.paddingLeft) || 0;
        for (h = g = 0; 100 > h && f; h++)g += f.offsetLeft + f.clientLeft - f.scrollLeft, f = f.offsetParent;
        e = g + e;
        "rtl" == C(d, c).direction ? d.style.marginRight = -1 * (b - a - e) + "px" : d.style.marginLeft = -1 * e + "px";
        d.style.width = b + "px";
        d.style.zIndex = 30;
        return b
    }, se = function (a, b, c, d, e) {
        var f = a;
        a = wc(247, yc, function () {
            return oe(a, b, c, d, e)
        });
        var g = f != a;
        f = "auto" == b ? .25 >= a / Math.min(1200, O(c).clientWidth) ? 4 : 3 : de(b);
        e.google_responsive_formats = f;
        var h = !(A("iPad") || A("Android") && !A("Mobile") || A("Silk")) && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile")) && !ge(d, c) && (e.google_safe_for_responsive_override = ce(d, c)),
            k = (h ? Zd : R).slice(0);
        k = Ia(k, pe(c));
        var m = 488 > O(c).clientWidth;
        m = [fe(a), qe(m), ie(m, c, d), Xd(f)];
        var q = [];
        if (h) {
            var t = je(c, d);
            q.push(function (a) {
                return a.height() <= t
            })
        }
        var n = le(k, ke(m), ke(q));
        if (!n)throw new T("No slot size for availableWidth=" + a);
        n = wc(248, yc, function () {
            var b = a;
            var e = n;
            if (g)if (ne(c))if (ge(d, c)) b = new Yd(b, e.height()); else {
                e = b / 1.2;
                var f = je(c, d);
                f = Math.min(e, f);
                if (f < .5 * e || 100 > f) f = e;
                b = new Yd(b, Math.floor(f))
            } else throw Error("Slot was expanded without experiment"); else b = e;
            return b
        });
        return new S(re(b, f), n)
    };

    function re(a, b) {
        if ("auto" == a)return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function qe(a) {
        return function (b) {
            return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
        }
    }

    function ne(a) {
        return "#google_full_width_responsive_preview" == (a.location && a.location.hash) ? !0 : E(a, cd.I)
    }

    function pe(a) {
        var b = [], c = E(a, qd.D);
        (E(a, qd.F) || c) && b.push($d);
        (E(a, qd.G) || c) && b.push(ae);
        return b
    };
    var te = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"],
        ue = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            image_card_stacked: 1 / 1.91,
            image_card_sidebyside: 1 / 3.74,
            text: 0
        }, ve = {image_stacked: 80, image_sidebyside: 0, image_card_stacked: 85, image_card_sidebyside: 0, text: 80},
        U = function (a, b) {
            P.call(this, a, b)
        };
    l(U, P);
    U.prototype.j = function (a) {
        return Math.min(1200, Math.round(a))
    };
    var xe = function (a) {
        var b = 0;
        Gb(te, function (c) {
            null != a[c] && ++b
        });
        if (!b)return !1;
        if (b == te.length)return !0;
        throw new T("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
    }, ze = function (a, b) {
        a < na ? (b.google_content_recommendation_ui_type = "image_sidebyside", b.google_content_recommendation_columns_num = 1, b.google_content_recommendation_rows_num = 13) : (b.google_content_recommendation_ui_type = "image_stacked", b.google_content_recommendation_columns_num = 4, b.google_content_recommendation_rows_num = 2);
        return new S(9, ye(a))
    };

    function ye(a) {
        return 1200 <= a ? new U(1200, 600) : 850 <= a ? new U(a, Math.floor(.5 * a)) : 550 <= a ? new U(a, Math.floor(.6 * a)) : 468 <= a ? new U(a, Math.floor(.7 * a)) : new U(a, Math.floor(3.44 * a))
    }

    var Ae = function (a, b) {
        var c = c ? c : {};
        var d = d ? d : {};
        var e = b.google_content_recommendation_ui_type.split(","),
            f = b.google_content_recommendation_columns_num.split(","),
            g = b.google_content_recommendation_rows_num.split(",");
        a:{
            if (e.length == f.length && f.length == g.length) {
                if (1 == e.length) {
                    var h = 0;
                    break a
                }
                if (2 == e.length) {
                    h = a < na ? 0 : 1;
                    break a
                }
                throw new T("The size of element (" + e.length + ") specified in tag data-matched-content-ui-type, data-matched-content-columns-num, data-matched-content-rows-num is wrong.");
            }
            throw new T("The size of element (" + e.length + "," + f.length + "," + g.length + ") specified in tag data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num does not match.");
        }
        e = ta(e[h]);
        f = +f[h];
        g = +g[h];
        b.google_content_recommendation_ui_type = e;
        b.google_content_recommendation_columns_num = f;
        b.google_content_recommendation_rows_num = g;
        if (isNaN(f) || !f)throw new T("Wrong value for data-matched-content-columns-num");
        if (isNaN(g) || !g)throw new T("Wrong value for data-matched-content-rows-num");
        b = Math.floor(((a - 8 * f - 8) / f * (c[e] || ue[e]) + (d[e] || ve[e])) * g + 8 * g + 8);
        if (1500 < a)throw new T("Calculated slot width is too large: " + a);
        if (1500 < b)throw new T("Calculated slot height is too large: " + b);
        return new S(9, new U(a, b))
    };

    function Be(a, b) {
        var c = +b.google_content_recommendation_columns_num;
        c = (a - 8 * c - 8) / c;
        var d = b.google_content_recommendation_ui_type;
        b = b.google_content_recommendation_rows_num - 1;
        return new U(a, Math.floor(c / 1.91 + 70) + Math.floor((c * ({}[d] || ue[d]) + ({}[d] || ve[d])) * b + 8 * b + 8))
    };
    var Ce = {
        "image-top": function (a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        }, "image-middle": function (a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        }, "image-side": function (a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        }, "text-only": function (a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        }, "in-article": function (a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };
    var V = function (a, b) {
        P.call(this, a, b)
    };
    l(V, P);
    V.prototype.j = function () {
        return this.minWidth()
    };
    V.prototype.l = function (a) {
        return P.prototype.l.call(this, a) + "_0ads_al"
    };
    var De = [new V(728, 15), new V(468, 15), new V(200, 90), new V(180, 90), new V(160, 90), new V(120, 90)],
        Ee = function (a) {
            var b = le(De, fe(a));
            if (!b)throw new T("No link unit size for width=" + a + "px");
            return b
        }, Fe = function (a, b, c, d) {
            c = void 0 === c ? 130 : c;
            d = void 0 === d ? 30 : d;
            var e = Ee(a);
            a = Math.min(a, 1200);
            e = e.height();
            b = Math.max(e, b);
            return new S(10, new V(a, Math.min(b, 15 == e ? d : c)))
        };
    var Ge = function (a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c)return D(a, dd.u) ? 6 : D(a, ed.u) ? 7 : D(a, fd.u) ? 14 : xe(b) ? 9 : 5;
        if ("auto" == c || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(c))return 1;
        if ("link" == c)return D(a, L.O) || D(a, L.P) || D(a, L.R) ? 15 : 13;
        if ("fluid" == c)return 8
    };

    function He(a, b, c, d, e) {
        var f = d.google_ad_format, g = d.google_ad_height || ee(c, e, "height");
        switch (a) {
            default:
            case 1:
                return se(b, f, e, c, d);
            case 5:
                return ze(b, d);
            case 6:
                return d.google_content_recommendation_ui_type && d.google_content_recommendation_columns_num && d.google_content_recommendation_rows_num ? b = Ae(b, d) : b < na ? (d.google_content_recommendation_ui_type = "image_sidebyside", d.google_content_recommendation_columns_num = 1, d.google_content_recommendation_rows_num = 12, b = new S(9, Be(b, d))) : (d.google_content_recommendation_ui_type = "image_stacked", d.google_content_recommendation_columns_num = 4, d.google_content_recommendation_rows_num = 2, b = new S(9, ye(b))), b;
            case 7:
                return d.google_content_recommendation_ui_type && d.google_content_recommendation_columns_num && d.google_content_recommendation_rows_num ? b = Ae(b, d) : b < na ? (d.google_content_recommendation_ui_type = "image_sidebyside", d.google_content_recommendation_columns_num = 1, d.google_content_recommendation_rows_num = 13, b = new S(9, Be(b, d))) : (d.google_content_recommendation_ui_type = "image_stacked", d.google_content_recommendation_columns_num = 4, d.google_content_recommendation_rows_num = 2, b = new S(9, ye(b))), b;
            case 14:
                return d.google_content_recommendation_ui_type && d.google_content_recommendation_columns_num && d.google_content_recommendation_rows_num ? Ae(b, d) : ze(b, d);
            case 9:
                return Ae(b, d);
            case 4:
                return new S(10, Ee(b));
            case 10:
                return g = Ee(b), new S(10, new V(Math.min(b, 1200), g.height()));
            case 12:
                return Fe(b, Ie(c, e));
            case 13:
                return d = Ie(c, e), d = Fe(b, d, 130, 30).j, b = d.minWidth(), d = d.height(), 15 <= g && (d = g), new S(10, new V(b, d));
            case 15:
                return d = Ie(c, e), d = Fe(b, d, D(e, L.O) ? 190 : D(e, L.P) ? 250 : 130, D(e, L.R) ? 90 : 30).j, b = d.minWidth(), d = d.height(), 15 <= g && (d = g), new S(10, new V(b, d));
            case 8:
                a:{
                    if (250 > b)throw new T("Fluid responsive ads must be at least 250px wide: availableWidth=" + b);
                    e = "" + (d.google_ad_layout || "image-top");
                    b = Math.min(1200, Math.floor(b));
                    if (g) {
                        if (g = Math.ceil(g), 50 > g)throw new T("Fluid responsive ads must be at least 50px tall: height=" + g);
                    } else {
                        if ("in-article" != e && (g = d.google_ad_layout_key)) {
                            g = "" + g;
                            d = Math.pow(10, 3);
                            if (a = (e = g.match(/([+-][0-9a-z]+)/g)) && e.length) {
                                c = [];
                                for (f = 0; f < a; f++)c.push(parseInt(e[f], 36) / d);
                                d = c
                            } else d = null;
                            if (!d)throw new T("Invalid data-ad-layout-key value: " + g);
                            g = (b + -725) / 1E3;
                            e = 0;
                            a = 1;
                            c = d.length;
                            for (f = 0; f < c; f++)e += d[f] * a, a *= g;
                            g = Math.ceil(1E3 * e - -725 + 10);
                            if (isNaN(g))throw new T("Invalid height: height=" + g);
                            if (50 > g)throw new T("Fluid responsive ads must be at least 50px tall: height=" + g);
                            if (1200 < g)throw new T("Fluid responsive ads must be at most 1200px tall: height=" + g);
                            b = new S(11, new P(b, g));
                            break a
                        }
                        g = Ce[e];
                        if (!g)throw new T("Invalid data-ad-layout value: " + e);
                        g = Math.ceil(g(b))
                    }
                    b = new S(11, new P(b, g))
                }
                return b
        }
    }

    function Ie(a, b) {
        if (D(b, hd.u)) {
            var c = ee(a, b, "height");
            if (!c) {
                var d = a.style.height;
                a.style.height = "inherit";
                c = ee(a, b, "height");
                a.style.height = d;
                if (!c) {
                    c = Infinity;
                    do(d = a.style && yb(a.style.height)) && (c = Math.min(c, d)), (d = ee(a, b, "maxHeight")) && (c = Math.min(c, d)); while ((a = a.parentElement) && "HTML" != a.tagName)
                }
            }
            b = c
        } else b = je(b, a);
        return b
    };
    var Je = {
        1: "0.1",
        3: "100",
        4: "200",
        5: "0",
        6: "0.05",
        7: "0",
        8: "0.0",
        9: "400",
        10: "200",
        11: "0.003",
        12: "0.01",
        13: "0.001",
        14: "320",
        15: "20",
        16: "600",
        17: "20",
        19: "0.01",
        20: "0",
        22: "0.01",
        23: "0.2",
        24: "0.05",
        26: "0.05",
        27: "0.001",
        28: "0.001",
        29: "0.01",
        31: "0.01",
        32: "0.02",
        33: "0.001",
        34: "0.001",
        35: "0.01",
        36: "0.95",
        37: "0.0",
        38: "0.04",
        39: "0.15",
        40: "0.15",
        41: "0.006",
        42: "0.001",
        43: "0.1",
        44: "0.0",
        45: "0.0",
        46: "0.0",
        47: "0.01",
        48: "0.2",
        49: "0.2",
        50: "0.02",
        51: "0.05",
        52: "0.5",
        54: "800",
        55: "40",
        56: "0.001",
        57: "0.001",
        58: "0.05",
        59: "0",
        60: "0.001",
        61: "0.05",
        62: "0.02"
    };
    var Ke = null, Le = function () {
        this.j = Je
    }, W = function (a, b) {
        a = parseFloat(a.j[b]);
        return isNaN(a) ? 0 : a
    };
    var Me = new cc(100, 299), Ne = new cc(300, 399), Oe = new cc(400, 599), Pe = new cc(600, 699),
        Qe = new cc(800, 899);
    var Se = function () {
        if ("#google_full_width_responsive_preview" != (z.location && z.location.hash)) {
            var a = z.google_ad_modifications = z.google_ad_modifications || {};
            if (!a.plle) {
                a.plle = !0;
                var b = a.eids = a.eids || [];
                a = a.loeids = a.loeids || [];
                var c;
                Ke || (Ke = new Le);
                var d = Ke;
                var e = cd;
                var f = Re(Me, W(d, 3), W(d, 4), [e.C, e.I]);
                X(a, f);
                var g = bd;
                f == e.C ? c = g.C : f == e.I ? c = g.I : c = "";
                X(b, c);
                e = dd;
                X(b, Y(W(d, 5), [e.o, e.u]));
                e = ed;
                X(b, Y(W(d, 6), [e.o, e.u]));
                e = fd;
                X(b, Y(W(d, 7), [e.o, e.u]));
                e = gd;
                X(b, Y(W(d, 8), [e.o, e.u]));
                e = L;
                X(b, Re(Oe, W(d, 9), W(d, 10), [e.o, e.O, e.P, e.R]));
                e = hd;
                X(b, Re(Pe, W(d, 16), W(d, 17), [e.o, e.u]));
                y.body || (e = nd, X(a, Y(W(d, 1), [e.o, e.u])));
                ta("") && X(a, "");
                e = M;
                f = Y(W(d, 11), [e.o, e.VIEWPORT, e.L]);
                e = Ma(e, function (a) {
                    return a == f
                });
                e = kd[e];
                X(b, f);
                X(b, e);
                e = N;
                e = Y(W(d, 12), [e.N, e.U, e.T, e.J]);
                X(a, e);
                e || (e = od, e = Y(W(d, 58), [e.o, e.u]), X(a, e));
                e || (e = rd, f = Y(W(d, 56), [e.o, e.u]), X(a, f));
                e = id;
                f = Y(W(d, 13), [e.K, e.o]);
                X(b, f);
                X(b, gc([e.V], 0));
                e = jd;
                f = Y(W(d, 60), [e.K, e.o]);
                X(b, f);
                e = md;
                f = Re(Ne, W(d, 14), W(d, 15), [e.o, e.H]);
                X(a, f);
                g = ld;
                f == e.o ? c = g.o : f == e.H ? c = g.H : c = "";
                X(b, c);
                e = qd;
                f = Re(Qe, W(d, 54), W(d, 55), [e.o, e.F, e.G, e.D]);
                X(a, f);
                g = pd;
                f == e.o ? c = g.o : f == e.F ? c = g.F : f == e.G ? c = g.G : f == e.D ? c = g.D : c = "";
                X(b, c)
            }
        }
    }, X = function (a, b) {
        b && a.push(b)
    }, Te = function (a) {
        var b = z.location && z.location.hash;
        b = (b = b && b.match(/google_plle=([\d,]+)/)) && b[1];
        return !!b && -1 != b.indexOf(a)
    }, Y = function (a, b) {
        for (var c = 0; c < b.length; c++)if (Te(b[c]))return b[c];
        return gc(b, a)
    }, Re = function (a, b, c, d) {
        for (var e = 0; e < d.length; e++)if (Te(d[e]))return d[e];
        e = new bc(b, b + c - 1);
        (c = 0 >= c || c % d.length) || (a = a.j, c = !(a.start <= e.start && a.j >= e.j));
        c ? b = null : (a = dc(), b = null !== a && e.start <= a && e.j >= a ? d[(a - b) % d.length] : null);
        return b
    };
    var Ue = function (a) {
        if (!a)return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var Ve = function (a, b, c) {
        var d = ["<iframe"], e;
        for (e in a)a.hasOwnProperty(e) && Ib(d, e + "=" + a[e]);
        d.push('style="' + ("left:0;position:absolute;top:0;width:" + b + "px;height:" + c + "px;") + '"');
        d.push("></iframe>");
        a = a.id;
        b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
        return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
    };
    var We = null;
    var Z = function (a) {
        this.s = [];
        this.l = a || window;
        this.j = 0;
        this.m = null;
        this.B = 0
    }, Xe;
    Z.prototype.M = function (a, b) {
        0 != this.j || this.s.length || b && b != window ? this.v(a, b) : (this.j = 2, this.A(new Ye(a, window)))
    };
    Z.prototype.v = function (a, b) {
        this.s.push(new Ye(a, b || this.l));
        Ze(this)
    };
    Z.prototype.ba = function (a) {
        this.j = 1;
        if (a) {
            var b = xc(188, r(this.w, this, !0));
            this.m = this.l.setTimeout(b, a)
        }
    };
    Z.prototype.w = function (a) {
        a && ++this.B;
        1 == this.j && (null != this.m && (this.l.clearTimeout(this.m), this.m = null), this.j = 0);
        Ze(this)
    };
    Z.prototype.ca = function () {
        return !(!window || !Array)
    };
    Z.prototype.aa = function () {
        return this.B
    };
    var Ze = function (a) {
        var b = xc(189, r(a.da, a));
        a.l.setTimeout(b, 0)
    };
    Z.prototype.da = function () {
        if (0 == this.j && this.s.length) {
            var a = this.s.shift();
            this.j = 2;
            var b = xc(190, r(this.A, this, a));
            a.j.setTimeout(b, 0);
            Ze(this)
        }
    };
    Z.prototype.A = function (a) {
        this.j = 0;
        a.l()
    };
    var $e = function (a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }, af = function (a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && $e(a) && Hb(a.nq) && Hb(a.nqa) && Hb(a.al) && Hb(a.rl)
    }, bf = function () {
        if (Xe && $e(Xe))return Xe;
        var a = ad(), b = a.google_jobrunner;
        return af(b) ? Xe = b : a.google_jobrunner = Xe = new Z(a)
    }, cf = function (a, b) {
        bf().nq(a, b)
    }, df = function (a, b) {
        bf().nqa(a, b)
    };
    Z.prototype.nq = Z.prototype.M;
    Z.prototype.nqa = Z.prototype.v;
    Z.prototype.al = Z.prototype.ba;
    Z.prototype.rl = Z.prototype.w;
    Z.prototype.sz = Z.prototype.ca;
    Z.prototype.tc = Z.prototype.aa;
    var Ye = function (a, b) {
        this.l = a;
        this.j = b
    };
    var ff = function (a) {
        var b = this;
        this.j = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {}, upd: function (a, d) {
                var c = ef("rx", a);
                a:{
                    if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
                        a = a[1];
                        break a
                    }
                    a = ""
                }
                a = (new Date).getTime() - a;
                c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= a ? "M" : 0 <= a ? a : "-M"));
                b.set(d, c);
                return c
            }
        });
        this.l = a.google_iframe_oncopy
    };
    ff.prototype.set = function (a, b) {
        var c = this;
        this.l.handlers[a] = b;
        this.j.addEventListener && this.j.addEventListener("load", function () {
            var b = c.j.document.getElementById(a);
            try {
                var e = b.contentWindow.document;
                if (b.onload && e && (!e.body || !e.body.firstChild)) b.onload()
            } catch (f) {
            }
        }, !1)
    };
    var ef = function (a, b) {
            var c = new RegExp("\\b" + a + "=(\\d+)"), d = c.exec(b);
            d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
            return b
        },
        gf = Ba("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
    var hf = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, jf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g, kf = function () {
    }, mf = function (a, b, c) {
        switch (typeof b) {
            case "string":
                lf(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (null == b) {
                    c.push("null");
                    break
                }
                if (b instanceof Array || void 0 != b.length && b.splice) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++)c.push(e), mf(a, b[f], c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (e in b)b.hasOwnProperty(e) && (f = b[e], "function" != typeof f && (c.push(d), lf(e, c), c.push(":"), mf(a, f, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }, lf = function (a, b) {
        b.push('"');
        b.push(a.replace(jf, function (a) {
            if (a in hf)return hf[a];
            var b = a.charCodeAt(0), c = "\\u";
            16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0");
            return hf[a] = c + b.toString(16)
        }));
        b.push('"')
    };
    var nf = {},
        of = (nf.google_ad_modifications = !0, nf.google_analytics_domain_name = !0, nf.google_analytics_uacct = !0, nf),
        pf = function (a) {
            try {
                if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
                    var b = function () {
                        return this
                    };
                    if (Object.prototype.hasOwnProperty("toJSON")) {
                        var c = Object.prototype.toJSON;
                        Object.prototype.toJSON = b
                    }
                    if (Array.prototype.hasOwnProperty("toJSON")) {
                        var d = Array.prototype.toJSON;
                        Array.prototype.toJSON = b
                    }
                    var e = window.encodeURIComponent(window.JSON.stringify(a));
                    try {
                        var f = Gc ? p.btoa(e) : Hc(Cc(e), void 0)
                    } catch (g) {
                        f = "#" + Hc(Cc(e), !0)
                    }
                    c && (Object.prototype.toJSON = c);
                    d && (Array.prototype.toJSON = d);
                    return f
                }
            } catch (g) {
                F.j(237, g, void 0, void 0)
            }
            return ""
        }, qf = function (a) {
            a.google_page_url && (a.google_page_url = String(a.google_page_url));
            var b = [];
            Gb(a, function (a, d) {
                if (null != a) {
                    try {
                        var c = [];
                        mf(new kf, a, c);
                        var f = c.join("")
                    } catch (g) {
                    }
                    f && (f = f.replace(/\//g, "\\$&"), Ib(b, d, "=", f, ";"))
                }
            });
            return b.join("")
        };
    var rf = Na("script");
    Lb(z);
    var sf = xc(215, function (a) {
        var b = a.google_sa_queue, c = b.shift();
        "function" == ba(c) && wc(216, yc, c);
        b.length && a.setTimeout(fa(sf, a), 0)
    }), uf = function (a) {
        return ["<", rf, ' src="', tf(void 0 === a ? "/show_ads_impl.js" : a), '"></', rf, ">"].join("")
    }, tf = function (a) {
        a = void 0 === a ? "/show_ads_impl.js" : a;
        var b = ra ? "https" : "http";
        a:{
            if (pa)try {
                var c = z.google_cafe_host || z.top.google_cafe_host;
                if (c) {
                    var d = c;
                    break a
                }
            } catch (e) {
            }
            d = ma("", "pagead2.googlesyndication.com")
        }
        return Ac(d, ["/pagead/js/", oa(), "/r20170110", a, ""].join(""), b)
    }, vf = function (a, b, c, d) {
        return function () {
            var e = !1;
            d && bf().al(3E4);
            try {
                var f = a.document.getElementById(b).contentWindow;
                if (B(f)) {
                    var g = a.document.getElementById(b).contentWindow, h = g.document;
                    h.body && h.body.firstChild || (/Firefox/.test(navigator.userAgent) ? h.open("text/html", "replace") : h.open(), g.google_async_iframe_close = !0, h.write(c))
                } else {
                    var k = a.document.getElementById(b).contentWindow;
                    f = c;
                    f = String(f);
                    g = ['"'];
                    for (h = 0; h < f.length; h++) {
                        var m = f.charAt(h), q = m.charCodeAt(0), t = h + 1, n;
                        if (!(n = Ca[m])) {
                            if (31 < q && 127 > q)var w = m; else {
                                var v = void 0, x = m;
                                if (x in Da) w = Da[x]; else if (x in Ca) w = Da[x] = Ca[x]; else {
                                    var G = x.charCodeAt(0);
                                    if (31 < G && 127 > G) v = x; else {
                                        if (256 > G) {
                                            if (v = "\\x", 16 > G || 256 < G) v += "0"
                                        } else v = "\\u", 4096 > G && (v += "0");
                                        v += G.toString(16).toUpperCase()
                                    }
                                    w = Da[x] = v
                                }
                            }
                            n = w
                        }
                        g[t] = n
                    }
                    g.push('"');
                    k.location.replace("javascript:" + g.join(""))
                }
                e = !0
            } catch (we) {
                k = ad().google_jobrunner, af(k) && k.rl()
            }
            e && (e = ef("google_async_rrc", c), (new ff(a)).set(b, vf(a, b, e, !1)))
        }
    }, wf = function (a) {
        var b = ["<iframe"];
        Gb(a, function (a, d) {
            null != a && b.push(" " + d + '="' + Ba(a) + '"')
        });
        b.push("></iframe>");
        return b.join("")
    }, yf = function (a, b, c) {
        xf(a, b, c, function (a, b, f) {
            a = a.document;
            for (var d = b.id, e = 0; !d || a.getElementById(d);)d = "aswift_" + e++;
            b.id = d;
            b.name = d;
            d = Number(f.google_ad_width);
            e = Number(f.google_ad_height);
            16 == f.google_reactive_ad_format ? (f = a.createElement("div"), a = Ve(b, d, e), f.innerHTML = a, c.appendChild(f.firstChild)) : (f = Ve(b, d, e), c.innerHTML = f);
            return b.id
        })
    }, zf = function (a) {
        var b = "<" + rf + ">window.google_sl_win.google_sa_impl.call(this, window, document, location);</" + rf + ">";
        E(a, N.T) ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl || (b = uf("/show_ads_impl_single_load.js") + b, a.google_sa_impl = function (b) {
            a.google_sa_queue.push(b)
        }, a.google_process_slots = function () {
            Ga(a.google_sa_queue, function (b) {
                a.google_sa_impl.call(b, b, b.document, b.location)
            });
            a.google_sa_queue.length = 0
        })) : E(a, N.U) || E(a, od.u) ? b = uf("/show_ads_impl_single_load.js") : E(a, N.N) || E(a, od.o) ? b = uf("/show_ads_impl.js?" + N.N) : E(a, N.J) || (b = E(a, rd.u) ? uf("/show_ads_impl_le.js") : E(a, rd.o) ? uf("/show_ads_impl_le_c.js") : uf());
        return b
    }, xf = function (a, b, c, d) {
        var e = {}, f = b.google_ad_height;
        e.width = '"' + b.google_ad_width + '"';
        e.height = '"' + f + '"';
        e.frameborder = '"0"';
        e.marginwidth = '"0"';
        e.marginheight = '"0"';
        e.vspace = '"0"';
        e.hspace = '"0"';
        e.allowtransparency = '"true"';
        e.scrolling = '"no"';
        e.allowfullscreen = '"true"';
        e.onload = '"' + gf + '"';
        d = d(a, e, b);
        f = b.google_ad_output;
        (e = b.google_ad_format) || "html" != f && null != f || (e = b.google_ad_width + "x" + b.google_ad_height);
        f = !b.google_ad_slot || b.google_override_format || !Ud[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
        e && f ? e = e.toLowerCase() : e = "";
        b.google_ad_format = e;
        if (!aa(b.google_reactive_sra_index) || !b.google_ad_unit_key) {
            e = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height];
            f = [];
            for (var g = 0, h = c; h && 25 > g; h = h.parentNode, ++g)f.push(9 !== h.nodeType && h.id || "");
            (f = f.join()) && e.push(f);
            b.google_ad_unit_key = ub(e.join(":")).toString();
            e = [];
            for (f = 0; c && 25 > f; ++f) {
                g = (g = 9 !== c.nodeType && c.id) ? "/" + g : "";
                a:{
                    if (c && c.nodeName && c.parentElement) {
                        h = c.nodeName.toString().toLowerCase();
                        for (var k = c.parentElement.childNodes, m = 0, q = 0; q < k.length; ++q) {
                            var t = k[q];
                            if (t.nodeName && t.nodeName.toString().toLowerCase() === h) {
                                if (c === t) {
                                    h = "." + m;
                                    break a
                                }
                                ++m
                            }
                        }
                    }
                    h = ""
                }
                e.push((c.nodeName && c.nodeName.toString().toLowerCase()) + g + h);
                c = c.parentElement
            }
            c = e.join() + ":";
            e = a;
            f = [];
            if (e)try {
                var n = e.parent;
                for (g = 0; n && n !== e && 25 > g; ++g) {
                    var w = n.frames;
                    for (h = 0; h < w.length; ++h)if (e === w[h]) {
                        f.push(h);
                        break
                    }
                    e = n;
                    n = e.parent
                }
            } catch (G) {
            }
            b.google_ad_dom_fingerprint = ub(c + f.join()).toString()
        }
        n = qf(b);
        w = pf(b);
        var v;
        b = b.google_ad_client;
        if (!We)b:{
            e = [p.top];
            c = [];
            for (f = 0; g = e[f++];) {
                c.push(g);
                try {
                    if (g.frames) {
                        var x = g.frames.length;
                        for (h = 0; h < x && 1024 > e.length; ++h)e.push(g.frames[h])
                    }
                } catch (G) {
                }
            }
            for (x = 0; x < c.length; x++)try {
                if (v = c[x].frames.google_esf) {
                    We = v;
                    break b
                }
            } catch (G) {
            }
            We = null
        }
        We ? v = "" : (v = {style: "display:none"}, /[^a-z0-9-]/.test(b) ? v = "" : (v["data-ad-client"] = Ue(b), v.id = "google_esf", v.name = "google_esf", v.src = Ac(ma("", "googleads.g.doubleclick.net"), ["/pagead/html/", oa(), "/r20170110/zrt_lookup.html#"].join("")), v = wf(v)));
        x = E(a, N.T) || E(a, N.J);
        b = ia;
        c = (new Date).getTime();
        a.google_t12n_vars = Je;
        x = ["<!doctype html><html><body>", v, "<" + rf + ">", n, "google_show_ads_impl=true;", x ? "google_sl_win=window.parent;" : "", "google_unique_id=" + Lb(a) + ";", 'google_async_iframe_id="' + d + '";', "google_start_time=" + b + ";", w ? 'google_pub_vars="' + w + '";' : "", "google_bpp=" + (c > b ? c - b : 1) + ";", "google_async_rrc=0;google_iframe_start_time=new Date().getTime();", "</" + rf + ">", zf(a), "</body></html>"].join("");
        v = a.document.getElementById(d) ? cf : df;
        d = vf(a, d, x, !0);
        E(a, N.J) ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl ? d() : a.google_sa_queue.push(d)) : v(d)
    }, Af = function (a, b) {
        var c = navigator;
        a && b && c && (a = a.document, b = Ue(b), /[^a-z0-9-]/.test(b) || ((c = ta("r20160913")) && (c += "/"), rb(a, Ac("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js"))))
    };
    var Bf = !1, Cf = 0, Df = !1, Ef = !1, Ff = function (a) {
        return Ob.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }, Hf = function (a, b) {
        var c = window;
        a.setAttribute("data-adsbygoogle-status", "done");
        Gf(a, b, c)
    }, Gf = function (a, b, c) {
        If(a, b, c);
        if (!Jf(a, b, c)) {
            if (Td(a)) {
                b.enable_native_ads = !0;
                var d = document.createElement("ins");
                d.style.display = "none";
                a.appendChild(d);
                a = d
            }
            Kf(b);
            if (b.google_reactive_ads_config) {
                if (Bf)throw new T("Only one 'enable_page_level_ads' allowed per page.");
                Bf = !0
            } else b.google_ama || Kb(c);
            Df || (Df = !0, Af(c, b.google_ad_client));
            Gb(of, function (a, d) {
                b[d] = b[d] || c[d]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === Cf;
            if ((d = b.google_ad_output) && "html" != d && "js" != d)throw new T("No support for google_ad_output=" + d);
            wc(164, yc, function () {
                yf(c, b, a)
            })
        }
    }, Kf = function (a) {
        if (a.enable_native_ads || a.google_native_ad_template) a.google_ad_type = "text", a.google_max_num_ads = 1, a.hasOwnProperty("google_ad_format") || (a.google_ad_format = "300x250")
    }, Jf = function (a, b, c) {
        var d = b.google_reactive_ads_config;
        if (d) {
            var e = d.page_level_pubvars;
            var f = (ca(e) ? e : {}).google_tag_origin
        }
        if (b.google_ama || "js" === b.google_ad_output)return !1;
        var g = b.google_ad_slot;
        e = c.google_ad_modifications;
        !e || Qb(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none", e = (g = Qb(e.ad_blacklist, g)) ? {
            W: !0,
            Z: g.space_collapsing || f
        } : e.remove_ads_by_default ? {W: !0, Z: f} : null);
        if (e && e.W && "on" != b.google_adtest)return "slot" == e.Z && (null !== xb(a.getAttribute("width")) && a.setAttribute("width", 0), null !== xb(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
        if ((e = C(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d))return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }, If = function (a, b, c) {
        for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
            var g = d[f];
            if (/data-/.test(g.name)) {
                var h = ta(g.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                if (!b.hasOwnProperty(h)) {
                    g = g.value;
                    var k = {};
                    k = (k.google_reactive_ad_format = ja, k.google_allow_expandable_ads = ka, k);
                    g = k.hasOwnProperty(h) ? k[h](g, null) : g;
                    null === g || (b[h] = g)
                }
            }
        }
        if (D(c, M.o) || D(c, M.VIEWPORT) || D(c, M.L) && a.style && c.document && c.document.body) {
            d = parseInt(a.style.width, 10);
            b:{
                if (e = Pb(c)) {
                    e = O(e).clientWidth;
                    f = c.document.body.currentStyle ? c.document.body.currentStyle.direction : c.getComputedStyle ? c.getComputedStyle(c.document.body).getPropertyValue("direction") : "";
                    if ("ltr" === f && e) {
                        e = Math.floor(Math.min(1200, e - a.getBoundingClientRect().left));
                        break b
                    }
                    if ("rtl" === f && e) {
                        f = c.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right;
                        e = Math.floor(Math.min(1200, e - f - Math.floor((e - c.document.body.clientWidth) / 2)));
                        break b
                    }
                }
                e = -1
            }
            if (0 < e && d > e)if (f = parseInt(a.style.height, 10), d = !!Ud[d + "x" + f], D(c, M.VIEWPORT)) {
                if (d)if (d = Vd(e, f)) e = d; else throw new T("No slot size for availableWidth=" + e);
                b.google_ad_width = e;
                a.style.width = e + "px";
                b.google_ad_format = null;
                b.google_override_format = !0;
                b.google_ad_resize = 1
            } else D(c, M.L) ? (a.style.width = e + "px", b.google_ad_format = d ? "link" : "auto", b.google_ad_resize = 2) : D(c, M.o) && (b.google_ad_resize = 0)
        }
        d = b.google_reactive_ad_format;
        !b.google_enable_content_recommendations || 1 != d && 2 != d ? (e = Ge(c, b)) ? (b.google_auto_format = b.google_ad_format, d = a.offsetWidth || (b.google_ad_resize ? parseInt(a.style.width, 10) : 0), c = He(e, d, a, b, c), e = c.j, b.google_ad_width = e.j(d), f = b.google_ad_height = e.height(), a.style.height = f + "px", b.google_ad_resizable = !0, b.google_ad_format = e.l(d), b.google_override_format = 1, b.google_responsive_auto_format = c.l, b.google_loader_features_used = 128) : !wb.test(b.google_ad_width) && !vb.test(a.style.width) || !wb.test(b.google_ad_height) && !vb.test(a.style.height) ? (c = C(a, c), a.style.width = c.width, a.style.height = c.height, be(c, b), b.google_ad_width || (b.google_ad_width = a.offsetWidth), b.google_ad_height || (b.google_ad_height = a.offsetHeight), b.google_loader_features_used = 256) : (be(a.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (c = a.style.width, a.style.width = "100%", d = a.offsetWidth, a.style.width = c, b.google_available_width = d)) : (b.google_ad_width = O(c).clientWidth, b.google_ad_height = 50, a.style.display = "none")
    }, Lf = function (a) {
        for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (Ff(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a))return d
        }
        return null
    }, Nf = function (a) {
        if (!Ef) {
            Ef = !0;
            try {
                var b = p.localStorage.getItem("google_ama_config")
            } catch (w) {
                b = null
            }
            try {
                var c = b ? new Vc(b ? JSON.parse(b) : null) : null
            } catch (w) {
                c = null
            }
            if (b = c)if (c = Kc(b, Wc, 3), !c || K(c, 1) <= +new Date)try {
                p.localStorage.removeItem("google_ama_config")
            } catch (w) {
                zc(p, {lserr: 1})
            } else {
                try {
                    a:{
                        var d = Jc(b, 5);
                        if (0 < d.length)var e = d; else {
                            c:{
                                var f = p.location.pathname, g = Lc(b, Yc, 7);
                                d = {};
                                for (c = 0; c < g.length; ++c) {
                                    var h = K(g[c], 1);
                                    aa(h) && !d[h] && (d[h] = g[c])
                                }
                                for (var k = f.replace(/(^\/)|(\/$)/g, ""); ;) {
                                    var m = ub(k);
                                    if (d[m]) {
                                        var q = d[m];
                                        break c
                                    }
                                    if (!k) {
                                        q = null;
                                        break c
                                    }
                                    k = k.substring(0, k.lastIndexOf("/"))
                                }
                            }
                            e = q ? Jc(q, 2) : []
                        }
                        for (q = 0; q < e.length; q++)if (1 == e[q]) {
                            var t = !0;
                            break a
                        }
                        t = !1
                    }
                    if (t) {
                        var n = new Hd;
                        (new Ld(p, new Od(a, b), 100, n)).start();
                        n.l.then(fa(Qd, p), fa(Rd, p))
                    }
                } catch (w) {
                    zc(p, {atf: -1})
                }
                t = Mf();
                p.document.documentElement.appendChild(t);
                n = {};
                a = (n.google_ama = !0, n.google_ad_client = a, n);
                Hf(t, a)
            }
        }
    }, Mf = function () {
        var a = document.createElement("ins");
        a.className = "adsbygoogle";
        a.style.display = "none";
        return a
    }, Of = function (a, b) {
        var c = {};
        Gb(Zc, function (b, d) {
            !1 === a.enable_page_level_ads ? c[d] = !1 : a.hasOwnProperty(d) && (c[d] = a[d])
        });
        ca(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = Mf();
        b ? y.body.appendChild(d) : y.documentElement.appendChild(d);
        b = {};
        b = (b.google_reactive_ads_config = c, b.google_ad_client = a.google_ad_client, b);
        Hf(d, b)
    }, Pf = function (a) {
        var b = Pb(window);
        if (!b)throw new T("Page-level tag does not work inside iframes.");
        b.google_reactive_ads_global_state || (b.google_reactive_ads_global_state = new Sd);
        b.google_reactive_ads_global_state.wasPlaTagProcessed = !0;
        b = E(z, nd.u);
        var c = !b;
        y.body || b ? Of(a, c) : Ab(y, "DOMContentLoaded", xc(191, function () {
            Of(a, c)
        }))
    }, Qf = function (a, b, c, d) {
        return me(b) ? (F.v = !0, F.j(a, b, .1, d, "puberror"), !1) : F.j(a, b, c, d)
    }, Rf = function (a, b, c, d) {
        return me(b) ? !1 : F.j(a, b, c, d)
    }, Tf = function (a) {
        var b = {};
        wc(165, Qf, function () {
            Sf(a, b)
        }, function (c) {
            c.client = c.client || b.google_ad_client || a.google_ad_client;
            c.slotname = c.slotname || b.google_ad_slot;
            c.tag_origin = c.tag_origin || b.google_tag_origin
        })
    }, Sf = function (a, b) {
        ia = (new Date).getTime();
        a:{
            if (void 0 != a.enable_page_level_ads) {
                if ("string" == typeof a.google_ad_client) {
                    var c = !0;
                    break a
                }
                throw new T("'google_ad_client' is missing from the tag config.");
            }
            c = !1
        }
        if (c) 0 === Cf && (Cf = 1), Nf(a.google_ad_client), Pf(a); else {
            0 === Cf && (Cf = 2);
            c = a.element;
            (a = a.params) && Gb(a, function (a, c) {
                b[c] = a
            });
            if ("js" === b.google_ad_output) {
                p.google_ad_request_done_fns = p.google_ad_request_done_fns || [];
                p.google_radlink_request_done_fns = p.google_radlink_request_done_fns || [];
                if (b.google_ad_request_done) {
                    if ("function" != ba(b.google_ad_request_done))throw new T("google_ad_request_done parameter must be a function.");
                    p.google_ad_request_done_fns.push(b.google_ad_request_done);
                    delete b.google_ad_request_done;
                    b.google_ad_request_done_index = p.google_ad_request_done_fns.length - 1
                } else throw new T("google_ad_request_done parameter must be specified.");
                if (b.google_radlink_request_done) {
                    if ("function" != ba(b.google_radlink_request_done))throw new T("google_radlink_request_done parameter must be a function.");
                    p.google_radlink_request_done_fns.push(b.google_radlink_request_done);
                    delete b.google_radlink_request_done;
                    b.google_radlink_request_done_index = p.google_radlink_request_done_fns.length - 1
                }
                a = Mf();
                p.document.documentElement.appendChild(a);
                c = a
            }
            if (c) {
                if (!Ff(c) && (c.id ? c = Lf(c.id) : c = null, !c))throw new T("'element' has already been filled.");
                if (!("innerHTML" in c))throw new T("'element' is not a good DOM element.");
            } else if (c = Lf(), !c)throw new T("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
            Hf(c, b)
        }
    }, Vf = function () {
        vc();
        wc(166, Rf, Uf)
    }, Uf = function () {
        Se();
        sc(D(z, id.K) || D(z, id.V));
        E(z, N.J) && !z.google_sa_queue && (z.google_sa_queue = [], z.google_sl_win = z, z.google_process_slots = fa(sf, z), rb(z.document, tf("/show_ads_impl_single_load.js")));
        var a = window.adsbygoogle;
        if (a && a.shift)try {
            for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;)Tf(b), --c
        } catch (d) {
            throw window.setTimeout(Vf, 0), d;
        }
        if (!a || !a.loaded) {
            window.adsbygoogle = {push: Tf, loaded: !0};
            a && Wf(a.onload);
            try {
                Object.defineProperty(window.adsbygoogle, "onload", {set: Wf})
            } catch (d) {
            }
        }
    }, Wf = function (a) {
        Hb(a) && window.setTimeout(a, 0)
    };
    Vf();
}).call(this);


