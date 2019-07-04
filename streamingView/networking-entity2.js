class PlayerPosition {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
            z: 0
        }, this.update = null, alt.on("playerPosition", (e, t, o) => {
            this.position.x = e, this.position.y = t, this.position.z = o, this.update && this.update(this.position)
        })
    }
    getPosition() {
        return this.position
    }
}
var playerPosition = new PlayerPosition;
/*!
 * protobuf.js v6.8.8 (c) 2016, daniel wirtz
 * compiled thu, 19 jul 2018 00:33:26 utc
 * licensed under the bsd-3-clause license
 * see: https://github.com/dcodeio/protobuf.js for details
 */
! function (tt) {
    var r, e, t, i, _Mathmin = Math.min,
        _Mathpow = Math.pow,
        _Mathfloor = Math.floor,
        _StringfromCharCode = String.fromCharCode;
    r = {
        1: [function (e, t) {
            t.exports = function (e, t) {
                for (var o = Array(arguments.length - 1), n = 0, i = 2, d = !0; i < arguments.length;) o[n++] = arguments[i++];
                return new Promise(function (s, r) {
                    o[n] = function (e) {
                        if (d)
                            if (d = !1, e) r(e);
                            else {
                                for (var t = Array(arguments.length - 1), o = 0; o < t.length;) t[o++] = arguments[o];
                                s.apply(null, t)
                            }
                    };
                    try {
                        e.apply(t || null, o)
                    } catch (e) {
                        d && (d = !1, r(e))
                    }
                })
            }
        }, {}],
        2: [function (o, t, i) {
            var n = i;
            n.length = function (e) {
                var t = e.length;
                if (!t) return 0;
                for (var o = 0; 1 < --t % 4 && "=" === e.charAt(t);)++o;
                return Math.ceil(3 * e.length) / 4 - o
            };
            for (var d = Array(64), a = Array(123), r = 0; 64 > r;) a[d[r] = 26 > r ? r + 65 : 52 > r ? r + 71 : 62 > r ? r - 4 : 43 | r - 59] = r++;
            n.encode = function (a, t, p) {
                for (var n, l, y = null, c = [], s = 0, m = 0; t < p;) l = a[t++], 0 == m ? (c[s++] = d[l >> 2], n = (3 & l) << 4, m = 1) : 1 == m ? (c[s++] = d[n | l >> 4], n = (15 & l) << 2, m = 2) : 2 == m ? (c[s++] = d[n | l >> 6], c[s++] = d[63 & l], m = 0) : void 0, 8191 < s && ((y || (y = [])).push(_StringfromCharCode.apply(String, c)), s = 0);
                return m && (c[s++] = d[n], c[s++] = 61, 1 == m && (c[s++] = 61)), y ? (s && y.push(_StringfromCharCode.apply(String, c.slice(0, s))), y.join("")) : _StringfromCharCode.apply(String, c.slice(0, s))
            };
            n.decode = function (d, t, i) {
                for (var p, l, f = i, e = 0, y = 0; y < d.length && (l = d.charCodeAt(y++), !(61 === l && 1 < e));) {
                    if ((l = a[l]) === tt) throw Error("invalid encoding");
                    0 == e ? (p = l, e = 1) : 1 == e ? (t[i++] = p << 2 | (48 & l) >> 4, p = l, e = 2) : 2 == e ? (t[i++] = (15 & p) << 4 | (60 & l) >> 2, p = l, e = 3) : 3 == e ? (t[i++] = (3 & p) << 6 | l, e = 0) : void 0
                }
                if (1 == e) throw Error("invalid encoding");
                return i - f
            }, n.test = function (e) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
            }
        }, {}],
        3: [function (e, t) {
            function o(e, r) {
                function d(l) {
                    if ("string" != typeof l) {
                        var f = p();
                        if (o.verbose && console.log("codegen: " + f), f = "return " + f, l) {
                            for (var y = Object.keys(l), n = Array(y.length + 1), r = Array(y.length), e = 0; e < y.length;) n[e] = y[e], r[e] = l[y[e++]];
                            return n[e] = f, Function.apply(null, n).apply(null, r)
                        }
                        return Function(f)()
                    }
                    for (var c = Array(arguments.length - 1), u = 0; u < c.length;) c[u] = arguments[++u];
                    if (u = 0, l = l.replace(/%([%dfijs])/g, function (e, t) {
                        var o = c[u++];
                        return "d" === t || "f" === t ? +o + "" : "i" === t ? _Mathfloor(o) + "" : "j" === t ? JSON.stringify(o) : "s" === t ? o + "" : "%"
                    }), u !== c.length) throw Error("parameter count mismatch");
                    return a.push(l), d
                }

                function p(o) {
                    return "function " + (o || r || "") + "(" + (e && e.join(",") || "") + "){\n  " + a.join("\n  ") + "\n}"
                }
                "string" == typeof e && (r = e, e = tt);
                var a = [];
                return d.toString = p, d
            } (t.exports = o).verbose = !1
        }, {}],
        4: [function (e, t) {
            function o() {
                this.i = {}
            } (t.exports = o).prototype.on = function (e, t, o) {
                return (this.i[e] || (this.i[e] = [])).push({
                    fn: t,
                    ctx: o || this
                }), this
            }, o.prototype.off = function (e, t) {
                if (e === tt) this.i = {};
                else if (t === tt) this.i[e] = [];
                else
                    for (var o = this.i[e], n = 0; n < o.length;) o[n].fn === t ? o.splice(n, 1) : ++n;
                return this
            }, o.prototype.emit = function (e) {
                var t = this.i[e];
                if (t) {
                    for (var o = [], n = 1; n < arguments.length;) o.push(arguments[n++]);
                    for (n = 0; n < t.length;) t[n].fn.apply(t[n++].ctx, o)
                }
                return this
            }
        }, {}],
        5: [function (e, t) {
            function d(s, n, a) {
                return "function" == typeof n ? (a = n, n = {}) : n || (n = {}), a ? !n.xhr && i && i.readFile ? i.readFile(s, function (e, t) {
                    return e && "undefined" != typeof XMLHttpRequest ? d.xhr(s, n, a) : e ? a(e) : a(null, n.binary ? t : t.toString("utf8"))
                }) : d.xhr(s, n, a) : o(d, this, s, n)
            }
            t.exports = d;
            var o = e(1),
                i = e(7)("fs");
            d.xhr = function (o, s, n) {
                var r = new XMLHttpRequest;
                r.onreadystatechange = function () {
                    if (4 !== r.readyState) return tt;
                    if (0 !== r.status && 200 !== r.status) return n(Error("status " + r.status));
                    if (s.binary) {
                        var e = r.response;
                        if (!e) {
                            e = [];
                            for (var o = 0; o < r.responseText.length; ++o) e.push(255 & r.responseText.charCodeAt(o))
                        }
                        return n(null, "undefined" == typeof Uint8Array ? e : new Uint8Array(e))
                    }
                    return n(null, r.responseText)
                }, s.binary && ("overrideMimeType" in r && r.overrideMimeType("text/plain; charset=x-user-defined"), r.responseType = "arraybuffer"), r.open("GET", o), r.send()
            }
        }, {
            1: 1,
            7: 7
        }],
        6: [function (o, t) {
            function i(d) {
                var a = Math.LN2,
                    p = Math.log;
                return "undefined" == typeof Float32Array ? function () {
                    function o(o, t, d, n) {
                        var r = Math.round,
                            l = 0 > t ? 1 : 0;
                        if (l && (t = -t), 0 === t) o(0 < 1 / t ? 0 : 2147483648, d, n);
                        else if (isNaN(t)) o(2143289344, d, n);
                        else if (34028234663852886e22 < t) o((2139095040 | l << 31) >>> 0, d, n);
                        else if (11754943508222875e-54 > t) o((l << 31 | r(t / 1401298464324817e-60)) >>> 0, d, n);
                        else {
                            var e = _Mathfloor(p(t) / a);
                            o((l << 31 | e + 127 << 23 | 8388607 & r(8388608 * (t * _Mathpow(2, -e)))) >>> 0, d, n)
                        }
                    }

                    function t(o, t, i) {
                        var n = o(t, i),
                            r = 2 * (n >> 31) + 1,
                            e = 255 & n >>> 23,
                            s = 8388607 & n;
                        return 255 == e ? s ? NaN : r * (1 / 0) : 0 == e ? 1401298464324817e-60 * r * s : r * _Mathpow(2, e - 150) * (s + 8388608)
                    }
                    d.writeFloatLE = o.bind(null, n), d.writeFloatBE = o.bind(null, r), d.readFloatLE = t.bind(null, e), d.readFloatBE = t.bind(null, s)
                }() : function () {
                    function o(e, t, o) {
                        a[0] = e, t[o] = r[0], t[o + 1] = r[1], t[o + 2] = r[2], t[o + 3] = r[3]
                    }

                    function i(e, t, o) {
                        a[0] = e, t[o] = r[3], t[o + 1] = r[2], t[o + 2] = r[1], t[o + 3] = r[0]
                    }

                    function n(e, t) {
                        return r[0] = e[t], r[1] = e[t + 1], r[2] = e[t + 2], r[3] = e[t + 3], a[0]
                    }

                    function s(e, t) {
                        return r[3] = e[t], r[2] = e[t + 1], r[1] = e[t + 2], r[0] = e[t + 3], a[0]
                    }
                    var a = new Float32Array([-0]),
                        r = new Uint8Array(a.buffer),
                        e = 128 === r[3];
                    d.writeFloatLE = e ? o : i, d.writeFloatBE = e ? i : o, d.readFloatLE = e ? n : s, d.readFloatBE = e ? s : n
                }(), "undefined" == typeof Float64Array ? function () {
                    function o(d, t, i, n, l, e) {
                        var s = 0 > n ? 1 : 0;
                        if (s && (n = -n), 0 === n) d(0, l, e + t), d(0 < 1 / n ? 0 : 2147483648, l, e + i);
                        else if (isNaN(n)) d(0, l, e + t), d(2146959360, l, e + i);
                        else if (17976931348623157e292 < n) d(0, l, e + t), d((2146435072 | s << 31) >>> 0, l, e + i);
                        else {
                            var u;
                            if (22250738585072014e-324 > n) d((u = n / 5e-324) >>> 0, l, e + t), d((s << 31 | u / 4294967296) >>> 0, l, e + i);
                            else {
                                var y = _Mathfloor(p(n) / a);
                                1024 === y && (y = 1023), d(4503599627370496 * (u = n * _Mathpow(2, -y)) >>> 0, l, e + t), d((s << 31 | y + 1023 << 20 | 1048575 & 1048576 * u) >>> 0, l, e + i)
                            }
                        }
                    }

                    function t(d, t, i, n, r) {
                        var e = d(n, r + t),
                            s = d(n, r + i),
                            a = 2 * (s >> 31) + 1,
                            o = 2047 & s >>> 20,
                            p = 4294967296 * (1048575 & s) + e;
                        return 2047 == o ? p ? NaN : a * (1 / 0) : 0 == o ? 5e-324 * a * p : a * _Mathpow(2, o - 1075) * (p + 4503599627370496)
                    }
                    d.writeDoubleLE = o.bind(null, n, 0, 4), d.writeDoubleBE = o.bind(null, r, 4, 0), d.readDoubleLE = t.bind(null, e, 0, 4), d.readDoubleBE = t.bind(null, s, 4, 0)
                }() : function () {
                    function o(e, t, o) {
                        a[0] = e, t[o] = r[0], t[o + 1] = r[1], t[o + 2] = r[2], t[o + 3] = r[3], t[o + 4] = r[4], t[o + 5] = r[5], t[o + 6] = r[6], t[o + 7] = r[7]
                    }

                    function i(e, t, o) {
                        a[0] = e, t[o] = r[7], t[o + 1] = r[6], t[o + 2] = r[5], t[o + 3] = r[4], t[o + 4] = r[3], t[o + 5] = r[2], t[o + 6] = r[1], t[o + 7] = r[0]
                    }

                    function n(e, t) {
                        return r[0] = e[t], r[1] = e[t + 1], r[2] = e[t + 2], r[3] = e[t + 3], r[4] = e[t + 4], r[5] = e[t + 5], r[6] = e[t + 6], r[7] = e[t + 7], a[0]
                    }

                    function s(e, t) {
                        return r[7] = e[t], r[6] = e[t + 1], r[5] = e[t + 2], r[4] = e[t + 3], r[3] = e[t + 4], r[2] = e[t + 5], r[1] = e[t + 6], r[0] = e[t + 7], a[0]
                    }
                    var a = new Float64Array([-0]),
                        r = new Uint8Array(a.buffer),
                        e = 128 === r[7];
                    d.writeDoubleLE = e ? o : i, d.writeDoubleBE = e ? i : o, d.readDoubleLE = e ? n : s, d.readDoubleBE = e ? s : n
                }(), d
            }

            function n(e, t, o) {
                t[o] = 255 & e, t[o + 1] = 255 & e >>> 8, t[o + 2] = 255 & e >>> 16, t[o + 3] = e >>> 24
            }

            function r(e, t, o) {
                t[o] = e >>> 24, t[o + 1] = 255 & e >>> 16, t[o + 2] = 255 & e >>> 8, t[o + 3] = 255 & e
            }

            function e(e, t) {
                return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
            }

            function s(e, t) {
                return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }
            t.exports = i(i)
        }, {}],
        7: [function (t, i, n) {
            function r(t) {
                try {
                    var i = eval("require")(t);
                    if (i && (i.length || Object.keys(i).length)) return i
                } catch (e) { }
                return null
            }
            i.exports = r
        }, {}],
        8: [function (o, t, i) {
            var n = i,
                d = n.isAbsolute = function (e) {
                    return /^(?:\/|\w+:)/.test(e)
                },
                r = n.normalize = function (o) {
                    var s = (o = o.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
                        i = d(o),
                        n = "";
                    i && (n = s.shift() + "/");
                    for (var a = 0; a < s.length;) ".." === s[a] ? 0 < a && ".." !== s[a - 1] ? s.splice(--a, 2) : i ? s.splice(a, 1) : ++a : "." === s[a] ? s.splice(a, 1) : ++a;
                    return n + s.join("/")
                };
            n.resolve = function (e, o, s) {
                return s || (o = r(o)), d(o) ? o : (s || (e = r(e)), (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? r(e + "/" + o) : o)
            }
        }, {}],
        9: [function (e, t) {
            t.exports = function (s, n, r) {
                var d = r || 8192,
                    e = null,
                    a = d;
                return function (o) {
                    if (1 > o || d >>> 1 < o) return s(o);
                    d < a + o && (e = s(d), a = 0);
                    var t = n.call(e, a, a += o);
                    return 7 & a && (a = 1 + (7 | a)), t
                }
            }
        }, {}],
        10: [function (e, t, o) {
            var n = o;
            n.length = function (e) {
                for (var t = 0, o = 0, s = 0; s < e.length; ++s) 128 > (o = e.charCodeAt(s)) ? t += 1 : 2048 > o ? t += 2 : 55296 == (64512 & o) && 56320 == (64512 & e.charCodeAt(s + 1)) ? (++s, t += 4) : t += 3;
                return t
            }, n.read = function (o, t, d) {
                if (1 > d - t) return "";
                for (var n, a = null, p = [], s = 0; t < d;) 128 > (n = o[t++]) ? p[s++] = n : 191 < n && 224 > n ? p[s++] = (31 & n) << 6 | 63 & o[t++] : 239 < n && 365 > n ? (n = ((7 & n) << 18 | (63 & o[t++]) << 12 | (63 & o[t++]) << 6 | 63 & o[t++]) - 65536, p[s++] = 55296 + (n >> 10), p[s++] = 56320 + (1023 & n)) : p[s++] = (15 & n) << 12 | (63 & o[t++]) << 6 | 63 & o[t++], 8191 < s && ((a || (a = [])).push(_StringfromCharCode.apply(String, p)), s = 0);
                return a ? (s && a.push(_StringfromCharCode.apply(String, p.slice(0, s))), a.join("")) : _StringfromCharCode.apply(String, p.slice(0, s))
            }, n.write = function (o, t, i) {
                for (var d, a, p = i, s = 0; s < o.length; ++s) 128 > (d = o.charCodeAt(s)) ? t[i++] = d : (2048 > d ? t[i++] = 192 | d >> 6 : (55296 == (64512 & d) && 56320 == (64512 & (a = o.charCodeAt(s + 1))) ? (d = 65536 + ((1023 & d) << 10) + (1023 & a), ++s, t[i++] = 240 | d >> 18, t[i++] = 128 | 63 & d >> 12) : t[i++] = 224 | d >> 12, t[i++] = 128 | 63 & d >> 6), t[i++] = 128 | 63 & d);
                return i - p
            }
        }, {}],
        11: [function (o, t) {
            function s(e, o) {
                d.test(e) || (e = "google/protobuf/" + e + ".proto", o = {
                    nested: {
                        google: {
                            nested: {
                                protobuf: {
                                    nested: o
                                }
                            }
                        }
                    }
                }), s[e] = o
            }
            t.exports = s;
            var e, d = /\/|\./;
            s("any", {
                Any: {
                    fields: {
                        type_url: {
                            type: "string",
                            id: 1
                        },
                        value: {
                            type: "bytes",
                            id: 2
                        }
                    }
                }
            }), s("duration", {
                Duration: e = {
                    fields: {
                        seconds: {
                            type: "int64",
                            id: 1
                        },
                        nanos: {
                            type: "int32",
                            id: 2
                        }
                    }
                }
            }), s("timestamp", {
                Timestamp: e
            }), s("empty", {
                Empty: {
                    fields: {}
                }
            }), s("struct", {
                Struct: {
                    fields: {
                        fields: {
                            keyType: "string",
                            type: "Value",
                            id: 1
                        }
                    }
                },
                Value: {
                    oneofs: {
                        kind: {
                            oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
                        }
                    },
                    fields: {
                        nullValue: {
                            type: "NullValue",
                            id: 1
                        },
                        numberValue: {
                            type: "double",
                            id: 2
                        },
                        stringValue: {
                            type: "string",
                            id: 3
                        },
                        boolValue: {
                            type: "bool",
                            id: 4
                        },
                        structValue: {
                            type: "Struct",
                            id: 5
                        },
                        listValue: {
                            type: "ListValue",
                            id: 6
                        }
                    }
                },
                NullValue: {
                    values: {
                        NULL_VALUE: 0
                    }
                },
                ListValue: {
                    fields: {
                        values: {
                            rule: "repeated",
                            type: "Value",
                            id: 1
                        }
                    }
                }
            }), s("wrappers", {
                DoubleValue: {
                    fields: {
                        value: {
                            type: "double",
                            id: 1
                        }
                    }
                },
                FloatValue: {
                    fields: {
                        value: {
                            type: "float",
                            id: 1
                        }
                    }
                },
                Int64Value: {
                    fields: {
                        value: {
                            type: "int64",
                            id: 1
                        }
                    }
                },
                UInt64Value: {
                    fields: {
                        value: {
                            type: "uint64",
                            id: 1
                        }
                    }
                },
                Int32Value: {
                    fields: {
                        value: {
                            type: "int32",
                            id: 1
                        }
                    }
                },
                UInt32Value: {
                    fields: {
                        value: {
                            type: "uint32",
                            id: 1
                        }
                    }
                },
                BoolValue: {
                    fields: {
                        value: {
                            type: "bool",
                            id: 1
                        }
                    }
                },
                StringValue: {
                    fields: {
                        value: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                BytesValue: {
                    fields: {
                        value: {
                            type: "bytes",
                            id: 1
                        }
                    }
                }
            }), s("field_mask", {
                FieldMask: {
                    fields: {
                        paths: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                        }
                    }
                }
            }), s.get = function (e) {
                return s[e] || null
            }
        }, {}],
        12: [function (e, t, o) {
            function a(a, t, i, n) {
                if (!t.resolvedType) {
                    var r = !1;
                    switch (t.type) {
                        case "double":
                        case "float":
                            a("m%s=Number(d%s)", n, n);
                            break;
                        case "uint32":
                        case "fixed32":
                            a("m%s=d%s>>>0", n, n);
                            break;
                        case "int32":
                        case "sint32":
                        case "sfixed32":
                            a("m%s=d%s|0", n, n);
                            break;
                        case "uint64":
                            r = !0;
                        case "int64":
                        case "sint64":
                        case "fixed64":
                        case "sfixed64":
                            a("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, r)("else if(typeof d%s===\"string\")", n)("m%s=parseInt(d%s,10)", n, n)("else if(typeof d%s===\"number\")", n)("m%s=d%s", n, n)("else if(typeof d%s===\"object\")", n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, r ? "true" : "");
                            break;
                        case "bytes":
                            a("if(typeof d%s===\"string\")", n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length)", n)("m%s=d%s", n, n);
                            break;
                        case "string":
                            a("m%s=String(d%s)", n, n);
                            break;
                        case "bool":
                            a("m%s=Boolean(d%s)", n, n);
                    }
                } else if (t.resolvedType instanceof d) {
                    a("switch(d%s){", n);
                    for (var p = t.resolvedType.values, e = Object.keys(p), s = 0; s < e.length; ++s) t.repeated && p[e[s]] === t.typeDefault && a("default:"), a("case%j:", e[s])("case %i:", p[e[s]])("m%s=%j", n, p[e[s]])("break");
                    a("}")
                } else a("if(typeof d%s!==\"object\")", n)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, i, n);
                return a
            }

            function s(o, t, i, n) {
                if (t.resolvedType) t.resolvedType instanceof d ? o("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, i, n, n) : o("d%s=types[%i].toObject(m%s,o)", n, i, n);
                else {
                    var r = !1;
                    switch (t.type) {
                        case "double":
                        case "float":
                            o("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                            break;
                        case "uint64":
                            r = !0;
                        case "int64":
                        case "sint64":
                        case "fixed64":
                        case "sfixed64":
                            o("if(typeof m%s===\"number\")", n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, r ? "true" : "", n);
                            break;
                        case "bytes":
                            o("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
                            break;
                        default:
                            o("d%s=m%s", n, n);
                    }
                }
                return o
            }
            var n = o,
                d = e(15),
                p = e(37);
            n.fromObject = function (o) {
                var t = o.fieldsArray,
                    i = p.codegen(["d"], o.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                if (!t.length) return i("return new this.ctor");
                i("var m=new this.ctor");
                for (var n = 0; n < t.length; ++n) {
                    var l = t[n].resolve(),
                        e = p.safeProp(l.name);
                    l.map ? (i("if(d%s){", e)("if(typeof d%s!==\"object\")", e)("throw TypeError(%j)", l.fullName + ": object expected")("m%s={}", e)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", e), a(i, l, n, e + "[ks[i]]")("}")("}")) : l.repeated ? (i("if(d%s){", e)("if(!Array.isArray(d%s))", e)("throw TypeError(%j)", l.fullName + ": array expected")("m%s=[]", e)("for(var i=0;i<d%s.length;++i){", e), a(i, l, n, e + "[i]")("}")("}")) : (l.resolvedType instanceof d || i("if(d%s!=null){", e), a(i, l, n, e), l.resolvedType instanceof d || i("}"))
                }
                return i("return m")
            }, n.toObject = function (l) {
                var t = l.fieldsArray.slice().sort(p.compareFieldsById);
                if (!t.length) return p.codegen()("return {}");
                for (var i = p.codegen(["m", "o"], l.name + "$toObject")("if(!o)")("o={}")("var d={}"), n = [], r = [], e = [], y = 0; y < t.length; ++y) t[y].partOf || (t[y].resolve().repeated ? n : t[y].map ? r : e).push(t[y]);
                if (n.length) {
                    for (i("if(o.arrays||o.defaults){"), y = 0; y < n.length; ++y) i("d%s=[]", p.safeProp(n[y].name));
                    i("}")
                }
                if (r.length) {
                    for (i("if(o.objects||o.defaults){"), y = 0; y < r.length; ++y) i("d%s={}", p.safeProp(r[y].name));
                    i("}")
                }
                if (e.length) {
                    for (i("if(o.defaults){"), y = 0; y < e.length; ++y) {
                        var m = e[y],
                            g = p.safeProp(m.name);
                        if (m.resolvedType instanceof d) i("d%s=o.enums===String?%j:%j", g, m.resolvedType.valuesById[m.typeDefault], m.typeDefault);
                        else if (m.long) i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", m.typeDefault.low, m.typeDefault.high, m.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", g)("}else")("d%s=o.longs===String?%j:%i", g, m.typeDefault.toString(), m.typeDefault.toNumber());
                        else if (m.bytes) {
                            var b = "[" + Array.prototype.slice.call(m.typeDefault).join(",") + "]";
                            i("if(o.bytes===String)d%s=%j", g, _StringfromCharCode.apply(String, m.typeDefault))("else{")("d%s=%s", g, b)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", g, g)("}")
                        } else i("d%s=%j", g, m.typeDefault)
                    }
                    i("}")
                }
                var h = !1;
                for (y = 0; y < t.length; ++y) {
                    m = t[y];
                    var v = l.e.indexOf(m);
                    g = p.safeProp(m.name), m.map ? (h || (h = !0, i("var ks2")), i("if(m%s&&(ks2=Object.keys(m%s)).length){", g, g)("d%s={}", g)("for(var j=0;j<ks2.length;++j){"), s(i, m, v, g + "[ks2[j]]")("}")) : m.repeated ? (i("if(m%s&&m%s.length){", g, g)("d%s=[]", g)("for(var j=0;j<m%s.length;++j){", g), s(i, m, v, g + "[j]")("}")) : (i("if(m%s!=null&&m.hasOwnProperty(%j)){", g, m.name), s(i, m, v, g), m.partOf && i("if(o.oneofs)")("d%s=%j", p.safeProp(m.partOf.name), m.name)), i("}")
                }
                return i("return d")
            }
        }, {
            15: 15,
            37: 37
        }],
        13: [function (e, t) {
            t.exports = function (p) {
                var t = a.codegen(["r", "l"], p.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (p.fieldsArray.filter(function (e) {
                    return e.map
                }).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
                p.group && t("if((t&7)===4)")("break"), t("switch(t>>>3){");
                for (var i = 0; i < p.fieldsArray.length; ++i) {
                    var l = p.e[i].resolve(),
                        r = l.resolvedType instanceof d ? "int32" : l.type,
                        e = "m" + a.safeProp(l.name);
                    t("case %i:", l.id), l.map ? (t("r.skip().pos++")("if(%s===util.emptyObject)", e)("%s={}", e)("k=r.%s()", l.keyType)("r.pos++"), o.long[l.keyType] === tt ? o.basic[r] === tt ? t("%s[k]=types[%i].decode(r,r.uint32())", e, i) : t("%s[k]=r.%s()", e, r) : o.basic[r] === tt ? t("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())", e, i) : t("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", e, r)) : l.repeated ? (t("if(!(%s&&%s.length))", e, e)("%s=[]", e), o.packed[r] !== tt && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", e, r)("}else"), o.basic[r] === tt ? t(l.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", e, i) : t("%s.push(r.%s())", e, r)) : o.basic[r] === tt ? t(l.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", e, i) : t("%s=r.%s()", e, r), t("break")
                }
                for (t("default:")("r.skipType(t&7)")("break")("}")("}"), i = 0; i < p.e.length; ++i) {
                    var s = p.e[i];
                    s.required && t("if(!m.hasOwnProperty(%j))", s.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + s.name + "'")
                }
                return t("return m")
            };
            var d = e(15),
                o = e(36),
                a = e(37)
        }, {
            15: 15,
            36: 36,
            37: 37
        }],
        14: [function (e, t) {
            function d(e, t, o, n) {
                return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", o, n, (3 | t.id << 3) >>> 0, (4 | t.id << 3) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", o, n, (2 | t.id << 3) >>> 0)
            }
            t.exports = function (y) {
                for (var t, c = a.codegen(["m", "w"], y.name + "$encode")("if(!w)")("w=Writer.create()"), n = y.fieldsArray.slice().sort(a.compareFieldsById), r = 0; r < n.length; ++r) {
                    var m = n[r].resolve(),
                        s = y.e.indexOf(m),
                        u = m.resolvedType instanceof p ? "int32" : m.type,
                        o = l.basic[u];
                    t = "m" + a.safeProp(m.name), m.map ? (c("if(%s!=null&&m.hasOwnProperty(%j)){", t, m.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (2 | m.id << 3) >>> 0, 8 | l.mapKey[m.keyType], m.keyType), o === tt ? c("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", s, t) : c(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | o, u, t), c("}")("}")) : m.repeated ? (c("if(%s!=null&&%s.length){", t, t), m.packed && l.packed[u] !== tt ? c("w.uint32(%i).fork()", (2 | m.id << 3) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", u, t)("w.ldelim()") : (c("for(var i=0;i<%s.length;++i)", t), o === tt ? d(c, m, s, t + "[i]") : c("w.uint32(%i).%s(%s[i])", (m.id << 3 | o) >>> 0, u, t)), c("}")) : (m.optional && c("if(%s!=null&&m.hasOwnProperty(%j))", t, m.name), o === tt ? d(c, m, s, t) : c("w.uint32(%i).%s(%s)", (m.id << 3 | o) >>> 0, u, t))
                }
                return c("return w")
            };
            var p = e(15),
                l = e(36),
                a = e(37)
        }, {
            15: 15,
            36: 36,
            37: 37
        }],
        15: [function (s, t) {
            function d(o, t, i, n, r) {
                if (a.call(this, o, i), t && "object" != typeof t) throw TypeError("values must be an object");
                if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = n, this.comments = r || {}, this.reserved = tt, t)
                    for (var e = Object.keys(t), s = 0; s < e.length; ++s) "number" == typeof t[e[s]] && (this.valuesById[this.values[e[s]] = t[e[s]]] = e[s])
            }
            t.exports = d;
            var a = s(24);
            ((d.prototype = Object.create(a.prototype)).constructor = d).className = "Enum";
            var e = s(23),
                o = s(37);
            d.fromJSON = function (e, t) {
                var o = new d(e, t.values, t.options, t.comment, t.comments);
                return o.reserved = t.reserved, o
            }, d.prototype.toJSON = function (e) {
                var t = !!e && !!e.keepComments;
                return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : tt, "comment", t ? this.comment : tt, "comments", t ? this.comments : tt])
            }, d.prototype.add = function (e, t, r) {
                if (!o.isString(e)) throw TypeError("name must be a string");
                if (!o.isInteger(t)) throw TypeError("id must be an integer");
                if (this.values[e] !== tt) throw Error("duplicate name '" + e + "' in " + this);
                if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
                if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
                if (this.valuesById[t] !== tt) {
                    if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
                    this.values[e] = t
                } else this.valuesById[this.values[e] = t] = e;
                return this.comments[e] = r || null, this
            }, d.prototype.remove = function (e) {
                if (!o.isString(e)) throw TypeError("name must be a string");
                var t = this.values[e];
                if (null == t) throw Error("name '" + e + "' does not exist in " + this);
                return delete this.valuesById[t], delete this.values[e], delete this.comments[e], this
            }, d.prototype.isReservedId = function (o) {
                return e.isReservedId(this.reserved, o)
            }, d.prototype.isReservedName = function (o) {
                return e.isReservedName(this.reserved, o)
            }
        }, {
            23: 23,
            24: 24,
            37: 37
        }],
        16: [function (e, t) {
            function d(o, t, i, n, d, a, c) {
                if (f.isObject(n) ? (c = d, a = n, n = d = tt) : f.isObject(d) && (c = a, a = d, d = tt), p.call(this, o, a), !f.isInteger(t) || 0 > t) throw TypeError("id must be a non-negative integer");
                if (!f.isString(i)) throw TypeError("type must be a string");
                if (n !== tt && !y.test(n = n.toString().toLowerCase())) throw TypeError("rule must be a string rule");
                if (d !== tt && !f.isString(d)) throw TypeError("extend must be a string");
                this.rule = n && "optional" !== n ? n : tt, this.type = i, this.id = t, this.extend = d || tt, this.required = "required" === n, this.optional = !this.required, this.repeated = "repeated" === n, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!f.Long && l.long[i] !== tt, this.bytes = "bytes" === i, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this.u = null, this.comment = c
            }
            t.exports = d;
            var p = e(24);
            ((d.prototype = Object.create(p.prototype)).constructor = d).className = "Field";
            var o, i = e(15),
                l = e(36),
                f = e(37),
                y = /^required|optional|repeated$/;
            d.fromJSON = function (e, t) {
                return new d(e, t.id, t.type, t.rule, t.extend, t.options, t.comment)
            }, Object.defineProperty(d.prototype, "packed", {
                get: function () {
                    return null === this.u && (this.u = !1 !== this.getOption("packed")), this.u
                }
            }), d.prototype.setOption = function (e, t, o) {
                return "packed" === e && (this.u = null), p.prototype.setOption.call(this, e, t, o)
            }, d.prototype.toJSON = function (e) {
                var t = !!e && !!e.keepComments;
                return f.toObject(["rule", "optional" !== this.rule && this.rule || tt, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : tt])
            }, d.prototype.resolve = function () {
                if (this.resolved) return this;
                if ((this.typeDefault = l.defaults[this.type]) === tt && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.typeDefault = this.resolvedType instanceof o ? null : this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof i && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (this.options.packed === tt || !this.resolvedType || this.resolvedType instanceof i) || delete this.options.packed, Object.keys(this.options).length || (this.options = tt)), this.long) this.typeDefault = f.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
                else if (this.bytes && "string" == typeof this.typeDefault) {
                    var e;
                    f.base64.test(this.typeDefault) ? f.base64.decode(this.typeDefault, e = f.newBuffer(f.base64.length(this.typeDefault)), 0) : f.utf8.write(this.typeDefault, e = f.newBuffer(f.utf8.length(this.typeDefault)), 0), this.typeDefault = e
                }
                return this.defaultValue = this.map ? f.emptyObject : this.repeated ? f.emptyArray : this.typeDefault, this.parent instanceof o && (this.parent.ctor.prototype[this.name] = this.defaultValue), p.prototype.resolve.call(this)
            }, d.d = function (o, n, a, e) {
                return "function" == typeof n ? n = f.decorateType(n).name : n && "object" == typeof n && (n = f.decorateEnum(n).name),
                    function (r, t) {
                        f.decorateType(r.constructor).add(new d(t, o, n, a, {
                            default: e
                        }))
                    }
            }, d.o = function (e) {
                o = e
            }
        }, {
            15: 15,
            24: 24,
            36: 36,
            37: 37
        }],
        17: [function (e, t) {
            var o = t.exports = e(18);
            o.build = "light", o.load = function (e, t, r) {
                return "function" == typeof t ? (r = t, t = new o.Root) : t || (t = new o.Root), t.load(e, r)
            }, o.loadSync = function (e, t) {
                return t || (t = new o.Root), t.loadSync(e)
            }, o.encoder = e(14), o.decoder = e(13), o.verifier = e(40), o.converter = e(12), o.ReflectionObject = e(24), o.Namespace = e(23), o.Root = e(29), o.Enum = e(15), o.Type = e(35), o.Field = e(16), o.OneOf = e(25), o.MapField = e(20), o.Service = e(33), o.Method = e(22), o.Message = e(21), o.wrappers = e(41), o.types = e(36), o.util = e(37), o.ReflectionObject.o(o.Root), o.Namespace.o(o.Type, o.Service, o.Enum), o.Root.o(o.Type), o.Field.o(o.Type)
        }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            18: 18,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            29: 29,
            33: 33,
            35: 35,
            36: 36,
            37: 37,
            40: 40,
            41: 41
        }],
        18: [function (o, t, i) {
            function n() {
                e.Reader.o(e.BufferReader), e.util.o()
            }
            var e = i;
            e.build = "minimal", e.Writer = o(42), e.BufferWriter = o(43), e.Reader = o(27), e.BufferReader = o(28), e.util = o(39), e.rpc = o(31), e.roots = o(30), e.configure = n, e.Writer.o(e.BufferWriter), n()
        }, {
            27: 27,
            28: 28,
            30: 30,
            31: 31,
            39: 39,
            42: 42,
            43: 43
        }],
        19: [function (e, t) {
            var o = t.exports = e(17);
            o.build = "full", o.tokenize = e(34), o.parse = e(26), o.common = e(11), o.Root.o(o.Type, o.parse, o.common)
        }, {
            11: 11,
            17: 17,
            26: 26,
            34: 34
        }],
        20: [function (e, t) {
            function d(o, t, i, n, r, e) {
                if (a.call(this, o, t, n, tt, tt, r, e), !p.isString(i)) throw TypeError("keyType must be a string");
                this.keyType = i, this.resolvedKeyType = null, this.map = !0
            }
            t.exports = d;
            var a = e(16);
            ((d.prototype = Object.create(a.prototype)).constructor = d).className = "MapField";
            var r = e(36),
                p = e(37);
            d.fromJSON = function (e, t) {
                return new d(e, t.id, t.keyType, t.type, t.options, t.comment)
            }, d.prototype.toJSON = function (e) {
                var t = !!e && !!e.keepComments;
                return p.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : tt])
            }, d.prototype.resolve = function () {
                if (this.resolved) return this;
                if (r.mapKey[this.keyType] === tt) throw Error("invalid key type: " + this.keyType);
                return a.prototype.resolve.call(this)
            }, d.d = function (o, n, r) {
                return "function" == typeof r ? r = p.decorateType(r).name : r && "object" == typeof r && (r = p.decorateEnum(r).name),
                    function (e, t) {
                        p.decorateType(e.constructor).add(new d(t, o, n, r))
                    }
            }
        }, {
            16: 16,
            36: 36,
            37: 37
        }],
        21: [function (e, t) {
            function o(e) {
                if (e)
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o) this[t[o]] = e[t[o]]
            }
            t.exports = o;
            var r = e(39);
            o.create = function (e) {
                return this.$type.create(e)
            }, o.encode = function (e, t) {
                return this.$type.encode(e, t)
            }, o.encodeDelimited = function (e, t) {
                return this.$type.encodeDelimited(e, t)
            }, o.decode = function (e) {
                return this.$type.decode(e)
            }, o.decodeDelimited = function (e) {
                return this.$type.decodeDelimited(e)
            }, o.verify = function (e) {
                return this.$type.verify(e)
            }, o.fromObject = function (e) {
                return this.$type.fromObject(e)
            }, o.toObject = function (e, t) {
                return this.$type.toObject(e, t)
            }, o.prototype.toJSON = function () {
                return this.$type.toObject(this, r.toJSONOptions)
            }
        }, {
            39: 39
        }],
        22: [function (e, t) {
            function o(p, t, i, n, r, l, f, y) {
                if (a.isObject(r) ? (f = r, r = l = tt) : a.isObject(l) && (f = l, l = tt), t !== tt && !a.isString(t)) throw TypeError("type must be a string");
                if (!a.isString(i)) throw TypeError("requestType must be a string");
                if (!a.isString(n)) throw TypeError("responseType must be a string");
                d.call(this, p, f), this.type = t || "rpc", this.requestType = i, this.requestStream = !!r || tt, this.responseType = n, this.responseStream = !!l || tt, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = y
            }
            t.exports = o;
            var d = e(24);
            ((o.prototype = Object.create(d.prototype)).constructor = o).className = "Method";
            var a = e(37);
            o.fromJSON = function (e, t) {
                return new o(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment)
            }, o.prototype.toJSON = function (e) {
                var t = !!e && !!e.keepComments;
                return a.toObject(["type", "rpc" !== this.type && this.type || tt, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : tt])
            }, o.prototype.resolve = function () {
                return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), d.prototype.resolve.call(this))
            }
        }, {
            24: 24,
            37: 37
        }],
        23: [function (d, t) {
            function i(e, t) {
                if (!e || !e.length) return tt;
                for (var o = {}, n = 0; n < e.length; ++n) o[e[n].name] = e[n].toJSON(t);
                return o
            }

            function p(e, t) {
                r.call(this, e, t), this.nested = tt, this.f = null
            }

            function l(e) {
                return e.f = null, e
            }
            t.exports = p;
            var r = d(24);
            ((p.prototype = Object.create(r.prototype)).constructor = p).className = "Namespace";
            var a, y, c, m = d(16),
                o = d(37);
            p.fromJSON = function (e, t) {
                return new p(e, t.options).addJSON(t.nested)
            }, p.arrayToJSON = i, p.isReservedId = function (e, t) {
                if (e)
                    for (var o = 0; o < e.length; ++o)
                        if ("string" != typeof e[o] && e[o][0] <= t && e[o][1] >= t) return !0;
                return !1
            }, p.isReservedName = function (e, t) {
                if (e)
                    for (var o = 0; o < e.length; ++o)
                        if (e[o] === t) return !0;
                return !1
            }, Object.defineProperty(p.prototype, "nestedArray", {
                get: function () {
                    return this.f || (this.f = o.toArray(this.nested))
                }
            }), p.prototype.toJSON = function (e) {
                return o.toObject(["options", this.options, "nested", i(this.nestedArray, e)])
            }, p.prototype.addJSON = function (e) {
                if (e)
                    for (var t, o = Object.keys(e), n = 0; n < o.length; ++n) t = e[o[n]], this.add((t.fields === tt ? t.values === tt ? t.methods === tt ? t.id === tt ? p.fromJSON : m.fromJSON : y.fromJSON : c.fromJSON : a.fromJSON)(o[n], t));
                return this
            }, p.prototype.get = function (e) {
                return this.nested && this.nested[e] || null
            }, p.prototype.getEnum = function (e) {
                if (this.nested && this.nested[e] instanceof c) return this.nested[e].values;
                throw Error("no such enum: " + e)
            }, p.prototype.add = function (e) {
                if (!(e instanceof m && e.extend !== tt || e instanceof a || e instanceof c || e instanceof y || e instanceof p)) throw TypeError("object must be a valid nested object");
                if (this.nested) {
                    var t = this.get(e.name);
                    if (t) {
                        if (!(t instanceof p && e instanceof p) || t instanceof a || t instanceof y) throw Error("duplicate name '" + e.name + "' in " + this);
                        for (var o = t.nestedArray, n = 0; n < o.length; ++n) e.add(o[n]);
                        this.remove(t), this.nested || (this.nested = {}), e.setOptions(t.options, !0)
                    }
                } else this.nested = {};
                return (this.nested[e.name] = e).onAdd(this), l(this)
            }, p.prototype.remove = function (e) {
                if (!(e instanceof r)) throw TypeError("object must be a ReflectionObject");
                if (e.parent !== this) throw Error(e + " is not a member of " + this);
                return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = tt), e.onRemove(this), l(this)
            }, p.prototype.define = function (e, s) {
                if (o.isString(e)) e = e.split(".");
                else if (!Array.isArray(e)) throw TypeError("illegal path");
                if (e && e.length && "" === e[0]) throw Error("path must be relative");
                for (var i, d = this; 0 < e.length;)
                    if (i = e.shift(), !(d.nested && d.nested[i])) d.add(d = new p(i));
                    else if (!((d = d.nested[i]) instanceof p)) throw Error("path conflicts with non-namespace objects");
                return s && d.addJSON(s), d
            }, p.prototype.resolveAll = function () {
                for (var e = this.nestedArray, t = 0; t < e.length;) e[t] instanceof p ? e[t++].resolveAll() : e[t++].resolve();
                return this.resolve()
            }, p.prototype.lookup = function (s, d, a) {
                if ("boolean" == typeof d ? (a = d, d = tt) : d && !Array.isArray(d) && (d = [d]), o.isString(s) && s.length) {
                    if ("." === s) return this.root;
                    s = s.split(".")
                } else if (!s.length) return this;
                if ("" === s[0]) return this.root.lookup(s.slice(1), d);
                var l = this.get(s[0]);
                if (!l) {
                    for (var u = 0; u < this.nestedArray.length; ++u)
                        if (this.f[u] instanceof p && (l = this.f[u].lookup(s, d, !0))) return l;
                } else if (1 === s.length) {
                    if (!d || -1 < d.indexOf(l.constructor)) return l;
                } else if (l instanceof p && (l = l.lookup(s.slice(1), d, !0))) return l;
                return null === this.parent || a ? null : this.parent.lookup(s, d)
            }, p.prototype.lookupType = function (e) {
                var t = this.lookup(e, [a]);
                if (!t) throw Error("no such type: " + e);
                return t
            }, p.prototype.lookupEnum = function (e) {
                var t = this.lookup(e, [c]);
                if (!t) throw Error("no such Enum '" + e + "' in " + this);
                return t
            }, p.prototype.lookupTypeOrEnum = function (e) {
                var t = this.lookup(e, [a, c]);
                if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);
                return t
            }, p.prototype.lookupService = function (e) {
                var t = this.lookup(e, [y]);
                if (!t) throw Error("no such Service '" + e + "' in " + this);
                return t
            }, p.o = function (e, t, o) {
                a = e, y = t, c = o
            }
        }, {
            16: 16,
            24: 24,
            37: 37
        }],
        24: [function (o, t) {
            function i(e, t) {
                if (!s.isString(e)) throw TypeError("name must be a string");
                if (t && !s.isObject(t)) throw TypeError("options must be an object");
                this.options = t, this.name = e, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
            } (t.exports = i).className = "ReflectionObject";
            var e, s = o(37);
            Object.defineProperties(i.prototype, {
                root: {
                    get: function () {
                        for (var e = this; null !== e.parent;) e = e.parent;
                        return e
                    }
                },
                fullName: {
                    get: function () {
                        for (var e = [this.name], t = this.parent; t;) e.unshift(t.name), t = t.parent;
                        return e.join(".")
                    }
                }
            }), i.prototype.toJSON = function () {
                throw Error()
            }, i.prototype.onAdd = function (o) {
                this.parent && this.parent !== o && this.parent.remove(this), this.parent = o, this.resolved = !1;
                var t = o.root;
                t instanceof e && t.h(this)
            }, i.prototype.onRemove = function (o) {
                var t = o.root;
                t instanceof e && t.a(this), this.parent = null, this.resolved = !1
            }, i.prototype.resolve = function () {
                return this.resolved || this.root instanceof e && (this.resolved = !0), this
            }, i.prototype.getOption = function (e) {
                return this.options ? this.options[e] : tt
            }, i.prototype.setOption = function (e, t, o) {
                return o && this.options && this.options[e] !== tt || ((this.options || (this.options = {}))[e] = t), this
            }, i.prototype.setOptions = function (e, t) {
                if (e)
                    for (var o = Object.keys(e), n = 0; n < o.length; ++n) this.setOption(o[n], e[o[n]], t);
                return this
            }, i.prototype.toString = function () {
                var e = this.constructor.className,
                    t = this.fullName;
                return t.length ? e + " " + t : e
            }, i.o = function (o) {
                e = o
            }
        }, {
            37: 37
        }],
        25: [function (o, t) {
            function d(e, t, o, s) {
                if (Array.isArray(t) || (o = t, t = tt), a.call(this, e, o), t !== tt && !Array.isArray(t)) throw TypeError("fieldNames must be an Array");
                this.oneof = t || [], this.fieldsArray = [], this.comment = s
            }

            function s(e) {
                if (e.parent)
                    for (var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t])
            }
            t.exports = d;
            var a = o(24);
            ((d.prototype = Object.create(a.prototype)).constructor = d).className = "OneOf";
            var e = o(16),
                p = o(37);
            d.fromJSON = function (e, t) {
                return new d(e, t.oneof, t.options, t.comment)
            }, d.prototype.toJSON = function (e) {
                var t = !!e && !!e.keepComments;
                return p.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : tt])
            }, d.prototype.add = function (o) {
                if (!(o instanceof e)) throw TypeError("field must be a Field");
                return o.parent && o.parent !== this.parent && o.parent.remove(o), this.oneof.push(o.name), this.fieldsArray.push(o), s(o.partOf = this), this
            }, d.prototype.remove = function (o) {
                if (!(o instanceof e)) throw TypeError("field must be a Field");
                var t = this.fieldsArray.indexOf(o);
                if (0 > t) throw Error(o + " is not a member of " + this);
                return this.fieldsArray.splice(t, 1), -1 < (t = this.oneof.indexOf(o.name)) && this.oneof.splice(t, 1), o.partOf = null, this
            }, d.prototype.onAdd = function (e) {
                a.prototype.onAdd.call(this, e);
                for (var t, o = 0; o < this.oneof.length; ++o) t = e.get(this.oneof[o]), t && !t.partOf && (t.partOf = this).fieldsArray.push(t);
                s(this)
            }, d.prototype.onRemove = function (e) {
                for (var t, o = 0; o < this.fieldsArray.length; ++o)(t = this.fieldsArray[o]).parent && t.parent.remove(t);
                a.prototype.onRemove.call(this, e)
            }, d.d = function () {
                for (var e = Array(arguments.length), o = 0; o < arguments.length;) e[o] = arguments[o++];
                return function (o, t) {
                    p.decorateType(o.constructor).add(new d(t, e)), Object.defineProperty(o, t, {
                        get: p.oneOfGetter(e),
                        set: p.oneOfSetter(e)
                    })
                }
            }
        }, {
            16: 16,
            24: 24,
            37: 37
        }],
        26: [function (e, t) {
            function ee(I, t, R) {
                function C(e, t, o) {
                    var n = ee.filename;
                    return o || (ee.filename = null), Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + M.line + ")")
                }

                function b() {
                    var e, o = [];
                    do {
                        if ("\"" !== (e = G()) && "'" !== e) throw C(e);
                        o.push(G()), U(e), e = H()
                    } while ("\"" === e || "'" === e);
                    return o.join("")
                }

                function L(e) {
                    var o = G();
                    switch (o) {
                        case "'":
                        case "\"":
                            return _(o), b();
                        case "true":
                        case "TRUE":
                            return !0;
                        case "false":
                        case "FALSE":
                            return !1;
                    }
                    try {
                        return function (e, o) {
                            var r = 1;
                            switch ("-" === e.charAt(0) && (r = -1, e = e.substring(1)), e) {
                                case "inf":
                                case "INF":
                                case "Inf":
                                    return r * (1 / 0);
                                case "nan":
                                case "NAN":
                                case "Nan":
                                case "NaN":
                                    return NaN;
                                case "0":
                                    return 0;
                            }
                            if (l.test(e)) return r * parseInt(e, 10);
                            if (m.test(e)) return r * parseInt(e, 16);
                            if (h.test(e)) return r * parseInt(e, 8);
                            if (x.test(e)) return r * parseFloat(e);
                            throw C(e, "number", o)
                        }(o, !0)
                    } catch (n) {
                        if (e && A.test(o)) return o;
                        throw C(o, "value")
                    }
                }

                function D(e, t) {
                    for (var o, i; t && ("\"" === (o = H()) || "'" === o) ? e.push(b()) : e.push([i = j(G()), U("to", !0) ? j(G()) : i]), U(",", !0););
                    U(";")
                }

                function j(e, t) {
                    switch (e) {
                        case "max":
                        case "MAX":
                        case "Max":
                            return 536870911;
                        case "0":
                            return 0;
                    }
                    if (!t && "-" === e.charAt(0)) throw C(e, "id");
                    if (n.test(e)) return parseInt(e, 10);
                    if (g.test(e)) return parseInt(e, 16);
                    if (v.test(e)) return parseInt(e, 8);
                    throw C(e, "id")
                }

                function P() {
                    if (V !== tt) throw C("package");
                    if (V = G(), !A.test(V)) throw C(V, "name");
                    te = te.define(V), U(";")
                }

                function E() {
                    var e, o = H();
                    switch (o) {
                        case "weak":
                            e = X || (X = []), G();
                            break;
                        case "public":
                            G();
                        default:
                            e = q || (q = []);
                    }
                    o = b(), U(";"), e.push(o)
                }

                function B() {
                    if (U("="), $ = b(), !(Z = "proto3" === $) && "proto2" !== $) throw C($, "syntax");
                    U(";")
                }

                function F(e, t) {
                    return "option" === t ? (T(e, t), U(";"), !0) : "message" === t ? (function (e, t) {
                        if (!O.test(t = G())) throw C(t, "type name");
                        var r = new o(t);
                        J(r, function (e) {
                            if (!F(r, e)) switch (e) {
                                case "map":
                                    ! function (o) {
                                        U("<");
                                        var t = G();
                                        if (f.mapKey[t] === tt) throw C(t, "type");
                                        U(",");
                                        var i = G();
                                        if (!A.test(i)) throw C(i, "type");
                                        U(">");
                                        var n = G();
                                        if (!O.test(n)) throw C(n, "name");
                                        U("=");
                                        var r = new s(oe(n), j(G()), t, i);
                                        J(r, function (e) {
                                            if ("option" !== e) throw C(e);
                                            T(r, e), U(";")
                                        }, function () {
                                            z(r)
                                        }), o.add(r)
                                    }(r);
                                    break;
                                case "required":
                                case "optional":
                                case "repeated":
                                    S(r, e);
                                    break;
                                case "oneof":
                                    ! function (e, t) {
                                        if (!O.test(t = G())) throw C(t, "name");
                                        var o = new p(oe(t));
                                        J(o, function (e) {
                                            "option" === e ? (T(o, e), U(";")) : (_(e), S(o, "optional"))
                                        }), e.add(o)
                                    }(r, e);
                                    break;
                                case "extensions":
                                    D(r.extensions || (r.extensions = []));
                                    break;
                                case "reserved":
                                    D(r.reserved || (r.reserved = []), !0);
                                    break;
                                default:
                                    if (!Z || !A.test(e)) throw C(e);
                                    _(e), S(r, "optional");
                            }
                        }), e.add(r)
                    }(e, t), !0) : "enum" === t ? (function (e, t) {
                        if (!O.test(t = G())) throw C(t, "name");
                        var o = new a(t);
                        J(o, function (e) {
                            "option" === e ? (T(o, e), U(";")) : "reserved" === e ? D(o.reserved || (o.reserved = []), !0) : ! function (e, t) {
                                if (!O.test(t)) throw C(t, "name");
                                U("=");
                                var o = j(G(), !0),
                                    n = {};
                                J(n, function (e) {
                                    if ("option" !== e) throw C(e);
                                    T(n, e), U(";")
                                }, function () {
                                    z(n)
                                }), e.add(t, o, n.comment)
                            }(o, e)
                        }), e.add(o)
                    }(e, t), !0) : "service" === t ? (function (e, t) {
                        if (!O.test(t = G())) throw C(t, "service name");
                        var o = new u(t);
                        J(o, function (e) {
                            if (!F(o, e)) {
                                if ("rpc" !== e) throw C(e);
                                ! function (d, t) {
                                    var a = t;
                                    if (!O.test(t = G())) throw C(t, "name");
                                    var n, p, l, c, m = t;
                                    if (U("("), U("stream", !0) && (p = !0), !A.test(t = G())) throw C(t);
                                    if (n = t, U(")"), U("returns"), U("("), U("stream", !0) && (c = !0), !A.test(t = G())) throw C(t);
                                    l = t, U(")");
                                    var o = new y(m, a, n, l, p, c);
                                    J(o, function (e) {
                                        if ("option" !== e) throw C(e);
                                        T(o, e), U(";")
                                    }), d.add(o)
                                }(o, e)
                            }
                        }), e.add(o)
                    }(e, t), !0) : !("extend" != t) && (function (e, o) {
                        if (!A.test(o = G())) throw C(o, "reference");
                        var r = o;
                        J(null, function (o) {
                            switch (o) {
                                case "required":
                                case "repeated":
                                case "optional":
                                    S(e, o, r);
                                    break;
                                default:
                                    if (!Z || !A.test(o)) throw C(o);
                                    _(o), S(e, "optional", r);
                            }
                        })
                    }(e, t), !0)
                }

                function J(o, t, i) {
                    var n = M.line;
                    if (o && (o.comment = K(), o.filename = ee.filename), U("{", !0)) {
                        for (var r;
                            "}" !== (r = G());) t(r);
                        U(";", !0)
                    } else i && i(), U(";"), o && "string" != typeof o.comment && (o.comment = K(n))
                }

                function S(a, t, i) {
                    var n = G();
                    if ("group" !== n) {
                        if (!A.test(n)) throw C(n, "type");
                        var r = G();
                        if (!O.test(r)) throw C(r, "name");
                        r = oe(r), U("=");
                        var p = new d(r, j(G()), n, t, i);
                        J(p, function (e) {
                            if ("option" !== e) throw C(e);
                            T(p, e), U(";")
                        }, function () {
                            z(p)
                        }), a.add(p), Z || !p.repeated || f.packed[n] === tt && f.basic[n] !== tt || p.setOption("packed", !1, !0)
                    } else ! function (a, t) {
                        var i = G();
                        if (!O.test(i)) throw C(i, "name");
                        var p = c.lcFirst(i);
                        i === p && (i = c.ucFirst(i)), U("=");
                        var r = j(G()),
                            e = new o(i);
                        e.group = !0;
                        var s = new d(p, r, i, t);
                        s.filename = ee.filename, J(e, function (o) {
                            switch (o) {
                                case "option":
                                    T(e, o), U(";");
                                    break;
                                case "required":
                                case "optional":
                                case "repeated":
                                    S(e, o);
                                    break;
                                default:
                                    throw C(o);
                            }
                        }), a.add(e).add(s)
                    }(a, t)
                }

                function T(e, t) {
                    var o = U("(", !0);
                    if (!A.test(t = G())) throw C(t, "name");
                    var n = t;
                    o && (U(")"), n = "(" + n + ")", t = H(), k.test(t) && (n += t, G())), U("="),
                        function e(t, o) {
                            if (U("{", !0))
                                do {
                                    if (!O.test(W = G())) throw C(W, "name");
                                    "{" === H() ? e(t, o + "." + W) : (U(":"), "{" === H() ? e(t, o + "." + W) : N(t, o + "." + W, L(!0))), U(",", !0)
                                } while (!U("}", !0));
                            else N(t, o, L(!0))
                        }(e, n)
                }

                function N(e, t, o) {
                    e.setOption && e.setOption(t, o)
                }

                function z(e) {
                    if (U("[", !0)) {
                        for (; T(e, "option"), U(",", !0););
                        U("]")
                    }
                    return e
                }
                t instanceof Y || (R = t, t = new Y), R || (R = ee.defaults);
                for (var V, q, X, $, W, M = r(I, R.alternateCommentMode || !1), G = M.next, _ = M.push, H = M.peek, U = M.skip, K = M.cmnt, Q = !0, Z = !1, te = t, oe = R.keepCase ? function (e) {
                    return e
                } : c.camelCase; null !== (W = G());) switch (W) {
                    case "package":
                        if (!Q) throw C(W);
                        P();
                        break;
                    case "import":
                        if (!Q) throw C(W);
                        E();
                        break;
                    case "syntax":
                        if (!Q) throw C(W);
                        B();
                        break;
                    case "option":
                        if (!Q) throw C(W);
                        T(te, W), U(";");
                        break;
                    default:
                        if (F(te, W)) {
                            Q = !1;
                            continue
                        }
                        throw C(W);
                }
                return ee.filename = null, {
                    package: V,
                    imports: q,
                    weakImports: X,
                    syntax: $,
                    root: t
                }
            } (t.exports = ee).filename = null, ee.defaults = {
                keepCase: !1
            };
            var r = e(34),
                Y = e(29),
                o = e(35),
                d = e(16),
                s = e(20),
                p = e(25),
                a = e(15),
                u = e(33),
                y = e(22),
                f = e(36),
                c = e(37),
                l = /^[1-9][0-9]*$/,
                n = /^-?[1-9][0-9]*$/,
                m = /^0[x][0-9a-fA-F]+$/,
                g = /^-?0[x][0-9a-fA-F]+$/,
                h = /^0[0-7]+$/,
                v = /^-?0[0-7]+$/,
                x = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
                O = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                A = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
                k = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/
        }, {
            15: 15,
            16: 16,
            20: 20,
            22: 22,
            25: 25,
            29: 29,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37
        }],
        27: [function (d, t) {
            function p(e, t) {
                return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
            }

            function u(e) {
                this.buf = e, this.pos = 0, this.len = e.length
            }

            function o() {
                var e = new r(0, 0),
                    t = 0;
                if (!(4 < this.len - this.pos)) {
                    for (; 3 > t; ++t) {
                        if (this.pos >= this.len) throw p(this);
                        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, 128 > this.buf[this.pos++]) return e
                    }
                    return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e
                }
                for (; 4 > t; ++t)
                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, 128 > this.buf[this.pos++]) return e;
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, 128 > this.buf[this.pos++]) return e;
                if (t = 0, 4 < this.len - this.pos) {
                    for (; 5 > t; ++t)
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, 128 > this.buf[this.pos++]) return e;
                } else
                    for (; 5 > t; ++t) {
                        if (this.pos >= this.len) throw p(this);
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, 128 > this.buf[this.pos++]) return e
                    }
                throw Error("invalid varint encoding")
            }

            function i(e, t) {
                return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
            }

            function a() {
                if (this.pos + 8 > this.len) throw p(this, 8);
                return new r(i(this.buf, this.pos += 4), i(this.buf, this.pos += 4))
            }
            t.exports = u;
            var l, y, c = d(39),
                r = c.LongBits,
                e = c.utf8,
                s = "undefined" == typeof Uint8Array ? function (e) {
                    if (Array.isArray(e)) return new u(e);
                    throw Error("illegal buffer")
                } : function (e) {
                    if (e instanceof Uint8Array || Array.isArray(e)) return new u(e);
                    throw Error("illegal buffer")
                };
            u.create = c.Buffer ? function (e) {
                return (u.create = function (e) {
                    return c.Buffer.isBuffer(e) ? new l(e) : s(e)
                })(e)
            } : s, u.prototype.c = c.Array.prototype.subarray || c.Array.prototype.slice, u.prototype.uint32 = (y = 4294967295, function () {
                if (y = (127 & this.buf[this.pos]) >>> 0, 128 > this.buf[this.pos++]) return y;
                if (y = (y | (127 & this.buf[this.pos]) << 7) >>> 0, 128 > this.buf[this.pos++]) return y;
                if (y = (y | (127 & this.buf[this.pos]) << 14) >>> 0, 128 > this.buf[this.pos++]) return y;
                if (y = (y | (127 & this.buf[this.pos]) << 21) >>> 0, 128 > this.buf[this.pos++]) return y;
                if (y = (y | (15 & this.buf[this.pos]) << 28) >>> 0, 128 > this.buf[this.pos++]) return y;
                if ((this.pos += 5) > this.len) throw this.pos = this.len, p(this, 10);
                return y
            }), u.prototype.int32 = function () {
                return 0 | this.uint32()
            }, u.prototype.sint32 = function () {
                var e = this.uint32();
                return 0 | e >>> 1 ^ -(1 & e)
            }, u.prototype.bool = function () {
                return 0 !== this.uint32()
            }, u.prototype.fixed32 = function () {
                if (this.pos + 4 > this.len) throw p(this, 4);
                return i(this.buf, this.pos += 4)
            }, u.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw p(this, 4);
                return 0 | i(this.buf, this.pos += 4)
            }, u.prototype.float = function () {
                if (this.pos + 4 > this.len) throw p(this, 4);
                var e = c.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, e
            }, u.prototype.double = function () {
                if (this.pos + 8 > this.len) throw p(this, 4);
                var e = c.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, e
            }, u.prototype.bytes = function () {
                var e = this.uint32(),
                    t = this.pos,
                    o = this.pos + e;
                if (o > this.len) throw p(this, e);
                return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, o) : t === o ? new this.buf.constructor(0) : this.c.call(this.buf, t, o)
            }, u.prototype.string = function () {
                var o = this.bytes();
                return e.read(o, 0, o.length)
            }, u.prototype.skip = function (e) {
                if ("number" == typeof e) {
                    if (this.pos + e > this.len) throw p(this, e);
                    this.pos += e
                } else
                    do
                        if (this.pos >= this.len) throw p(this); while (128 & this.buf[this.pos++]);
                return this
            }, u.prototype.skipType = function (e) {
                switch (e) {
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for (; 4 != (e = 7 & this.uint32());) this.skipType(e);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + e + " at offset " + this.pos);
                }
                return this
            }, u.o = function (e) {
                l = e;
                var t = c.Long ? "toLong" : "toNumber";
                c.merge(u.prototype, {
                    int64: function () {
                        return o.call(this)[t](!1)
                    },
                    uint64: function () {
                        return o.call(this)[t](!0)
                    },
                    sint64: function () {
                        return o.call(this).zzDecode()[t](!1)
                    },
                    fixed64: function () {
                        return a.call(this)[t](!0)
                    },
                    sfixed64: function () {
                        return a.call(this)[t](!1)
                    }
                })
            }
        }, {
            39: 39
        }],
        28: [function (o, t) {
            function i(o) {
                e.call(this, o)
            }
            t.exports = i;
            var e = o(27);
            (i.prototype = Object.create(e.prototype)).constructor = i;
            var n = o(39);
            n.Buffer && (i.prototype.c = n.Buffer.prototype.slice), i.prototype.string = function () {
                var e = this.uint32();
                return this.buf.utf8Slice(this.pos, this.pos = _Mathmin(this.pos + e, this.len))
            }
        }, {
            27: 27,
            39: 39
        }],
        29: [function (a, t) {
            function l(e) {
                m.call(this, "", e), this.deferred = [], this.files = []
            }

            function y() { }

            function c(e, t) {
                var o = t.parent.lookup(t.extend);
                if (o) {
                    var n = new h(t.fullName, t.id, t.type, t.rule, tt, t.options);
                    return (n.declaringField = t).extensionField = n, o.add(n), !0
                }
                return !1
            }
            t.exports = l;
            var m = a(23);
            ((l.prototype = Object.create(m.prototype)).constructor = l).className = "Root";
            var r, g, b, h = a(16),
                s = a(15),
                u = a(25),
                x = a(37);
            l.fromJSON = function (e, t) {
                return t || (t = new l), e.options && t.setOptions(e.options), t.addJSON(e.nested)
            }, l.prototype.resolvePath = x.path.resolve, l.prototype.load = function e(t, d, p) {
                function m(e, t) {
                    if (p) {
                        var r = p;
                        if (p = null, o) throw e;
                        r(e, t)
                    }
                }

                function h(s, t) {
                    try {
                        if (x.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)), x.isString(t)) {
                            g.filename = s;
                            var p, l = g(t, c, d),
                                r = 0;
                            if (l.imports)
                                for (; r < l.imports.length; ++r)(p = c.resolvePath(s, l.imports[r])) && a(p);
                            if (l.weakImports)
                                for (r = 0; r < l.weakImports.length; ++r)(p = c.resolvePath(s, l.weakImports[r])) && a(p, !0)
                        } else c.setOptions(t.options).addJSON(t.nested)
                    } catch (e) {
                        m(e)
                    }
                    o || f || m(null, c)
                }

                function a(s, d) {
                    var r = s.lastIndexOf("google/protobuf/");
                    if (-1 < r) {
                        var t = s.substring(r);
                        t in b && (s = t)
                    }
                    if (!(-1 < c.files.indexOf(s)))
                        if (c.files.push(s), s in b) o ? h(s, b[s]) : (++f, setTimeout(function () {
                            --f, h(s, b[s])
                        }));
                        else if (o) {
                            var i;
                            try {
                                i = x.fs.readFileSync(s).toString("utf8")
                            } catch (e) {
                                return void (d || m(e))
                            }
                            h(s, i)
                        } else ++f, x.fetch(s, function (e, t) {
                            --f, p && (e ? d ? f || m(null, c) : m(e) : h(s, t))
                        })
                }
                "function" == typeof d && (p = d, d = tt);
                var c = this;
                if (!p) return x.asPromise(e, c, t, d);
                var o = p === y,
                    f = 0;
                x.isString(t) && (t = [t]);
                for (var v, k = 0; k < t.length; ++k)(v = c.resolvePath("", t[k])) && a(v);
                return o ? c : (f || m(null, c), tt)
            }, l.prototype.loadSync = function (e, t) {
                if (!x.isNode) throw Error("not supported");
                return this.load(e, t, y)
            }, l.prototype.resolveAll = function () {
                if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
                    return "'extend " + e.extend + "' in " + e.parent.fullName
                }).join(", "));
                return m.prototype.resolveAll.call(this)
            };
            var o = /^[A-Z]/;
            l.prototype.h = function (e) {
                if (e instanceof h) e.extend === tt || e.extensionField || c(0, e) || this.deferred.push(e);
                else if (e instanceof s) o.test(e.name) && (e.parent[e.name] = e.values);
                else if (!(e instanceof u)) {
                    if (e instanceof r)
                        for (var t = 0; t < this.deferred.length;) c(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                    for (var d = 0; d < e.nestedArray.length; ++d) this.h(e.f[d]);
                    o.test(e.name) && (e.parent[e.name] = e)
                }
            }, l.prototype.a = function (e) {
                if (e instanceof h) {
                    if (e.extend !== tt)
                        if (e.extensionField) e.extensionField.parent.remove(e.extensionField), e.extensionField = null;
                        else {
                            var t = this.deferred.indexOf(e); - 1 < t && this.deferred.splice(t, 1)
                        }
                } else if (e instanceof s) o.test(e.name) && delete e.parent[e.name];
                else if (e instanceof m) {
                    for (var r = 0; r < e.nestedArray.length; ++r) this.a(e.f[r]);
                    o.test(e.name) && delete e.parent[e.name]
                }
            }, l.o = function (e, t, o) {
                r = e, g = t, b = o
            }
        }, {
            15: 15,
            16: 16,
            23: 23,
            25: 25,
            37: 37
        }],
        30: [function (e, t) {
            t.exports = {}
        }, {}],
        31: [function (e, t, o) {
            o.Service = e(32)
        }, {
            32: 32
        }],
        32: [function (e, t) {
            function r(e, t, o) {
                if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
                d.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = !!t, this.responseDelimited = !!o
            }
            t.exports = r;
            var d = e(39);
            ((r.prototype = Object.create(d.EventEmitter.prototype)).constructor = r).prototype.rpcCall = function o(a, t, n, r, e) {
                if (!r) throw TypeError("request must be specified");
                var s = this;
                if (!e) return d.asPromise(o, s, a, t, n, r);
                if (!s.rpcImpl) return setTimeout(function () {
                    e(Error("already ended"))
                }, 0), tt;
                try {
                    return s.rpcImpl(a, t[s.requestDelimited ? "encodeDelimited" : "encode"](r).finish(), function (o, t) {
                        if (o) return s.emit("error", o, a), e(o);
                        if (null === t) return s.end(!0), tt;
                        if (!(t instanceof n)) try {
                            t = n[s.responseDelimited ? "decodeDelimited" : "decode"](t)
                        } catch (o) {
                            return s.emit("error", o, a), e(o)
                        }
                        return s.emit("data", t, a), e(null, t)
                    })
                } catch (o) {
                    return s.emit("error", o, a), setTimeout(function () {
                        e(o)
                    }, 0), tt
                }
            }, r.prototype.end = function (e) {
                return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
            }
        }, {
            39: 39
        }],
        33: [function (e, t) {
            function d(e, t) {
                a.call(this, e, t), this.methods = {}, this.l = null
            }

            function i(e) {
                return e.l = null, e
            }
            t.exports = d;
            var a = e(23);
            ((d.prototype = Object.create(a.prototype)).constructor = d).className = "Service";
            var p = e(22),
                l = e(37),
                o = e(31);
            d.fromJSON = function (o, t) {
                var i = new d(o, t.options);
                if (t.methods)
                    for (var n = Object.keys(t.methods), r = 0; r < n.length; ++r) i.add(p.fromJSON(n[r], t.methods[n[r]]));
                return t.nested && i.addJSON(t.nested), i.comment = t.comment, i
            }, d.prototype.toJSON = function (e) {
                var t = a.prototype.toJSON.call(this, e),
                    o = !!e && !!e.keepComments;
                return l.toObject(["options", t && t.options || tt, "methods", a.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || tt, "comment", o ? this.comment : tt])
            }, Object.defineProperty(d.prototype, "methodsArray", {
                get: function () {
                    return this.l || (this.l = l.toArray(this.methods))
                }
            }), d.prototype.get = function (e) {
                return this.methods[e] || a.prototype.get.call(this, e)
            }, d.prototype.resolveAll = function () {
                for (var e = this.methodsArray, t = 0; t < e.length; ++t) e[t].resolve();
                return a.prototype.resolve.call(this)
            }, d.prototype.add = function (e) {
                if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
                return e instanceof p ? i((this.methods[e.name] = e).parent = this) : a.prototype.add.call(this, e)
            }, d.prototype.remove = function (e) {
                if (e instanceof p) {
                    if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this);
                    return delete this.methods[e.name], e.parent = null, i(this)
                }
                return a.prototype.remove.call(this, e)
            }, d.prototype.create = function (d, t, i) {
                for (var n, a, p = new o.Service(d, t, i), e = 0; e < this.methodsArray.length; ++e) a = l.lcFirst((n = this.l[e]).resolve().name).replace(/[^$\w_]/g, ""), p[a] = l.codegen(["r", "c"], l.isReserved(a) ? a + "_" : a)("return this.rpcCall(m,q,s,r,c)")({
                    m: n,
                    q: n.resolvedRequestType.ctor,
                    s: n.resolvedResponseType.ctor
                });
                return p
            }
        }, {
            22: 22,
            23: 23,
            31: 31,
            37: 37
        }],
        34: [function (o, t) {
            function s(e) {
                return e.replace(y, function (e, t) {
                    return "\\" === t || "" === t ? t : n[t] || ""
                })
            }

            function i(x, O) {
                function S(e) {
                    return Error("illegal " + e + " (line " + A + ")")
                }

                function y(e) {
                    return x.charAt(e)
                }

                function t(o, d) {
                    I = x.charAt(o++), T = A, N = !1;
                    var i, a = o - (O ? 2 : 3);
                    do
                        if (0 > --a || "\n" === (i = x.charAt(a))) {
                            N = !0;
                            break
                        }
                    while (" " === i || "\t" === i);
                    for (var f = x.substring(o, d).split(u), e = 0; e < f.length; ++e) f[e] = f[e].replace(O ? l : p, "").trim();
                    E = f.join("\n").trim()
                }

                function n(e) {
                    var t = m(e),
                        o = x.substring(e, t);
                    return /^\s*\/{1,2}/.test(o)
                }

                function m(e) {
                    for (var t = e; t < j && "\n" !== y(t);) t++;
                    return t
                }

                function g() {
                    if (0 < R.length) return R.shift();
                    if (C) return function () {
                        var o = "'" === C ? a : e;
                        o.lastIndex = k - 1;
                        var t = o.exec(x);
                        if (!t) throw S("string");
                        return k = o.lastIndex, r(C), C = null, s(t[1])
                    }();
                    var o, p, l, c, g;
                    do {
                        if (k === j) return null;
                        for (o = !1; f.test(l = y(k));)
                            if ("\n" === l && ++A, ++k === j) return null;
                        if ("/" === y(k)) {
                            if (++k === j) throw S("comment");
                            if ("/" !== y(k)) {
                                if ("*" !== (l = y(k))) return "/";
                                c = k + 1, g = O || "*" === y(c);
                                do {
                                    if ("\n" === l && ++A, ++k === j) throw S("comment");
                                    p = l, l = y(k)
                                } while ("*" !== p || "/" !== l);
                                ++k, g && t(c, k - 2), o = !0
                            } else if (O) {
                                if (g = !1, n(c = k)) {
                                    g = !0;
                                    do {
                                        if ((k = m(k)) === j) break;
                                        k++
                                    } while (n(k))
                                } else k = _Mathmin(j, m(k) + 1);
                                g && t(c, k), A++ , o = !0
                            } else {
                                for (g = "/" === y(c = k + 1);
                                    "\n" !== y(++k);)
                                    if (k === j) return null;
                                ++k, g && t(c, k - 1), ++A, o = !0
                            }
                        }
                    } while (o);
                    var h = k;
                    if (d.lastIndex = 0, !d.test(y(h++)))
                        for (; h < j && !d.test(y(h));)++h;
                    var b = x.substring(k, k = h);
                    return "\"" !== b && "'" !== b || (C = b), b
                }

                function r(e) {
                    R.push(e)
                }

                function b() {
                    if (!R.length) {
                        var e = g();
                        if (null === e) return null;
                        r(e)
                    }
                    return R[0]
                }
                x = x.toString();
                var k = 0,
                    j = x.length,
                    A = 1,
                    I = null,
                    E = null,
                    T = 0,
                    N = !1,
                    R = [],
                    C = null;
                return Object.defineProperty({
                    next: g,
                    peek: b,
                    push: r,
                    skip: function (e, t) {
                        var o = b();
                        if (o === e) return g(), !0;
                        if (!t) throw S("token '" + o + "', '" + e + "' expected");
                        return !1
                    },
                    cmnt: function (e) {
                        var t = null;
                        return e === tt ? T === A - 1 && (O || "*" === I || N) && (t = E) : (T < e && b(), T !== e || N || !O && "/" !== I || (t = E)), t
                    }
                }, "line", {
                        get: function () {
                            return A
                        }
                    })
            }
            t.exports = i;
            var d = /[\s{}=;:[\],'"()<>]/g,
                e = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                a = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                p = /^ *[*/]+ */,
                l = /^\s*\*?\/*/,
                u = /\n/g,
                f = /\s/,
                y = /\\(.?)/g,
                n = {
                    0: "\0",
                    r: "\r",
                    n: "\n",
                    t: "\t"
                };
            i.unescape = s
        }, {}],
        35: [function (r, t) {
            function g(e, t) {
                m.call(this, e, t), this.fields = {}, this.oneofs = tt, this.extensions = tt, this.reserved = tt, this.group = tt, this.v = null, this.e = null, this.p = null, this.w = null
            }

            function i(e) {
                return e.v = e.e = e.p = null, delete e.encode, delete e.decode, delete e.verify, e
            }
            t.exports = g;
            var m = r(23);
            ((g.prototype = Object.create(m.prototype)).constructor = g).className = "Type";
            var u = r(15),
                o = r(25),
                f = r(16),
                h = r(20),
                a = r(33),
                c = r(21),
                x = r(27),
                s = r(42),
                l = r(37),
                v = r(14),
                d = r(13),
                p = r(40),
                k = r(12),
                y = r(41);
            Object.defineProperties(g.prototype, {
                fieldsById: {
                    get: function () {
                        if (this.v) return this.v;
                        this.v = {};
                        for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                            var o = this.fields[e[t]],
                                n = o.id;
                            if (this.v[n]) throw Error("duplicate id " + n + " in " + this);
                            this.v[n] = o
                        }
                        return this.v
                    }
                },
                fieldsArray: {
                    get: function () {
                        return this.e || (this.e = l.toArray(this.fields))
                    }
                },
                oneofsArray: {
                    get: function () {
                        return this.p || (this.p = l.toArray(this.oneofs))
                    }
                },
                ctor: {
                    get: function () {
                        return this.w || (this.ctor = g.generateConstructor(this)())
                    },
                    set: function (e) {
                        var t = e.prototype;
                        t instanceof c || ((e.prototype = new c).constructor = e, l.merge(e.prototype, t)), e.$type = e.prototype.$type = this, l.merge(e, c, !0), this.w = e;
                        for (var o = 0; o < this.fieldsArray.length; ++o) this.e[o].resolve();
                        var i = {};
                        for (o = 0; o < this.oneofsArray.length; ++o) i[this.p[o].resolve().name] = {
                            get: l.oneOfGetter(this.p[o].oneof),
                            set: l.oneOfSetter(this.p[o].oneof)
                        };
                        o && Object.defineProperties(e.prototype, i)
                    }
                }
            }), g.generateConstructor = function (e) {
                for (var t, o = l.codegen(["p"], e.name), n = 0; n < e.fieldsArray.length; ++n)(t = e.e[n]).map ? o("this%s={}", l.safeProp(t.name)) : t.repeated && o("this%s=[]", l.safeProp(t.name));
                return o("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
            }, g.fromJSON = function (d, t) {
                var i = new g(d, t.options);
                i.extensions = t.extensions, i.reserved = t.reserved;
                for (var n = Object.keys(t.fields), p = 0; p < n.length; ++p) i.add((void 0 === t.fields[n[p]].keyType ? f.fromJSON : h.fromJSON)(n[p], t.fields[n[p]]));
                if (t.oneofs)
                    for (n = Object.keys(t.oneofs), p = 0; p < n.length; ++p) i.add(o.fromJSON(n[p], t.oneofs[n[p]]));
                if (t.nested)
                    for (n = Object.keys(t.nested), p = 0; p < n.length; ++p) {
                        var l = t.nested[n[p]];
                        i.add((l.id === tt ? l.fields === tt ? l.values === tt ? l.methods === tt ? m.fromJSON : a.fromJSON : u.fromJSON : g.fromJSON : f.fromJSON)(n[p], l))
                    }
                return t.extensions && t.extensions.length && (i.extensions = t.extensions), t.reserved && t.reserved.length && (i.reserved = t.reserved), t.group && (i.group = !0), t.comment && (i.comment = t.comment), i
            }, g.prototype.toJSON = function (e) {
                var t = m.prototype.toJSON.call(this, e),
                    o = !!e && !!e.keepComments;
                return l.toObject(["options", t && t.options || tt, "oneofs", m.arrayToJSON(this.oneofsArray, e), "fields", m.arrayToJSON(this.fieldsArray.filter(function (e) {
                    return !e.declaringField
                }), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : tt, "reserved", this.reserved && this.reserved.length ? this.reserved : tt, "group", this.group || tt, "nested", t && t.nested || tt, "comment", o ? this.comment : tt])
            }, g.prototype.resolveAll = function () {
                for (var e = this.fieldsArray, t = 0; t < e.length;) e[t++].resolve();
                var o = this.oneofsArray;
                for (t = 0; t < o.length;) o[t++].resolve();
                return m.prototype.resolveAll.call(this)
            }, g.prototype.get = function (e) {
                return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null
            }, g.prototype.add = function (e) {
                if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
                if (e instanceof f && e.extend === tt) {
                    if (this.v ? this.v[e.id] : this.fieldsById[e.id]) throw Error("duplicate id " + e.id + " in " + this);
                    if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this);
                    if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this);
                    return e.parent && e.parent.remove(e), (this.fields[e.name] = e).message = this, e.onAdd(this), i(this)
                }
                return e instanceof o ? (this.oneofs || (this.oneofs = {}), (this.oneofs[e.name] = e).onAdd(this), i(this)) : m.prototype.add.call(this, e)
            }, g.prototype.remove = function (e) {
                if (e instanceof f && e.extend === tt) {
                    if (!this.fields || this.fields[e.name] !== e) throw Error(e + " is not a member of " + this);
                    return delete this.fields[e.name], e.parent = null, e.onRemove(this), i(this)
                }
                if (e instanceof o) {
                    if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + " is not a member of " + this);
                    return delete this.oneofs[e.name], e.parent = null, e.onRemove(this), i(this)
                }
                return m.prototype.remove.call(this, e)
            }, g.prototype.isReservedId = function (e) {
                return m.isReservedId(this.reserved, e)
            }, g.prototype.isReservedName = function (e) {
                return m.isReservedName(this.reserved, e)
            }, g.prototype.create = function (e) {
                return new this.ctor(e)
            }, g.prototype.setup = function () {
                for (var o = this.fullName, t = [], i = 0; i < this.fieldsArray.length; ++i) t.push(this.e[i].resolve().resolvedType);
                this.encode = v(this)({
                    Writer: s,
                    types: t,
                    util: l
                }), this.decode = d(this)({
                    Reader: x,
                    types: t,
                    util: l
                }), this.verify = p(this)({
                    types: t,
                    util: l
                }), this.fromObject = k.fromObject(this)({
                    types: t,
                    util: l
                }), this.toObject = k.toObject(this)({
                    types: t,
                    util: l
                });
                var a = y[o];
                if (a) {
                    var r = Object.create(this);
                    r.fromObject = this.fromObject, this.fromObject = a.fromObject.bind(r), r.toObject = this.toObject, this.toObject = a.toObject.bind(r)
                }
                return this
            }, g.prototype.encode = function (e, t) {
                return this.setup().encode(e, t)
            }, g.prototype.encodeDelimited = function (e, t) {
                return this.encode(e, t && t.len ? t.fork() : t).ldelim()
            }, g.prototype.decode = function (e, t) {
                return this.setup().decode(e, t)
            }, g.prototype.decodeDelimited = function (e) {
                return e instanceof x || (e = x.create(e)), this.decode(e, e.uint32())
            }, g.prototype.verify = function (e) {
                return this.setup().verify(e)
            }, g.prototype.fromObject = function (e) {
                return this.setup().fromObject(e)
            }, g.prototype.toObject = function (e, t) {
                return this.setup().toObject(e, t)
            }, g.d = function (e) {
                return function (o) {
                    l.decorateType(o, e)
                }
            }
        }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            20: 20,
            21: 21,
            23: 23,
            25: 25,
            27: 27,
            33: 33,
            37: 37,
            40: 40,
            41: 41,
            42: 42
        }],
        36: [function (o, t, i) {
            function n(o, t) {
                var s = 0,
                    d = {};
                for (t |= 0; s < o.length;) d[e[s + t]] = o[s++];
                return d
            }
            var d = i,
                r = o(37),
                e = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
            d.basic = n([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), d.defaults = n([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", r.emptyArray, null]), d.long = n([0, 0, 0, 1, 1], 7), d.mapKey = n([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), d.packed = n([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
        }, {
            37: 37
        }],
        37: [function (d, r) {
            var a, p, l = r.exports = d(39),
                t = d(30);
            l.codegen = d(3), l.fetch = d(5), l.path = d(8), l.fs = l.inquire("fs"), l.toArray = function (e) {
                if (e) {
                    for (var t = Object.keys(e), o = Array(t.length), n = 0; n < t.length;) o[n] = e[t[n++]];
                    return o
                }
                return []
            }, l.toObject = function (o) {
                for (var t = {}, i = 0; i < o.length;) {
                    var s = o[i++],
                        r = o[i++];
                    r !== tt && (t[s] = r)
                }
                return t
            };
            var i = /\\/g,
                s = /"/g;
            l.isReserved = function (e) {
                return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e)
            }, l.safeProp = function (e) {
                return !/^[$\w_]+$/.test(e) || l.isReserved(e) ? "[\"" + e.replace(i, "\\\\").replace(s, "\\\"") + "\"]" : "." + e
            }, l.ucFirst = function (e) {
                return e.charAt(0).toUpperCase() + e.substring(1)
            };
            var o = /_([a-z])/g;
            l.camelCase = function (e) {
                return e.substring(0, 1) + e.substring(1).replace(o, function (e, t) {
                    return t.toUpperCase()
                })
            }, l.compareFieldsById = function (e, t) {
                return e.id - t.id
            }, l.decorateType = function (e, t) {
                if (e.$type) return t && e.$type.name !== t && (l.decorateRoot.remove(e.$type), e.$type.name = t, l.decorateRoot.add(e.$type)), e.$type;
                a || (a = d(35));
                var o = new a(t || e.name);
                return l.decorateRoot.add(o), o.ctor = e, Object.defineProperty(e, "$type", {
                    value: o,
                    enumerable: !1
                }), Object.defineProperty(e.prototype, "$type", {
                    value: o,
                    enumerable: !1
                }), o
            };
            var u = 0;
            l.decorateEnum = function (e) {
                if (e.$type) return e.$type;
                p || (p = d(15));
                var t = new p("Enum" + u++, e);
                return l.decorateRoot.add(t), Object.defineProperty(e, "$type", {
                    value: t,
                    enumerable: !1
                }), t
            }, Object.defineProperty(l, "decorateRoot", {
                get: function () {
                    return t.decorated || (t.decorated = new (d(29)))
                }
            })
        }, {
            15: 15,
            29: 29,
            3: 3,
            30: 30,
            35: 35,
            39: 39,
            5: 5,
            8: 8
        }],
        38: [function (o, t) {
            function d(e, t) {
                this.lo = e >>> 0, this.hi = t >>> 0
            }
            t.exports = d;
            var e = o(39),
                a = d.zero = new d(0, 0);
            a.toNumber = function () {
                return 0
            }, a.zzEncode = a.zzDecode = function () {
                return this
            }, a.length = function () {
                return 1
            };
            var n = d.zeroHash = "\0\0\0\0\0\0\0\0";
            d.fromNumber = function (e) {
                if (0 === e) return a;
                var o = 0 > e;
                o && (e = -e);
                var i = e >>> 0,
                    s = (e - i) / 4294967296 >>> 0;
                return o && (s = ~s >>> 0, i = ~i >>> 0, 4294967295 < ++i && (i = 0, 4294967295 < ++s && (s = 0))), new d(i, s)
            }, d.from = function (o) {
                if ("number" == typeof o) return d.fromNumber(o);
                if (e.isString(o)) {
                    if (!e.Long) return d.fromNumber(parseInt(o, 10));
                    o = e.Long.fromString(o)
                }
                return o.low || o.high ? new d(o.low >>> 0, o.high >>> 0) : a
            }, d.prototype.toNumber = function (e) {
                if (!e && this.hi >>> 31) {
                    var t = 1 + ~this.lo >>> 0,
                        o = ~this.hi >>> 0;
                    return t || (o = o + 1 >>> 0), -(t + 4294967296 * o)
                }
                return this.lo + 4294967296 * this.hi
            }, d.prototype.toLong = function (o) {
                return e.Long ? new e.Long(0 | this.lo, 0 | this.hi, !!o) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: !!o
                }
            };
            var r = String.prototype.charCodeAt;
            d.fromHash = function (e) {
                return e === n ? a : new d((r.call(e, 0) | r.call(e, 1) << 8 | r.call(e, 2) << 16 | r.call(e, 3) << 24) >>> 0, (r.call(e, 4) | r.call(e, 5) << 8 | r.call(e, 6) << 16 | r.call(e, 7) << 24) >>> 0)
            }, d.prototype.toHash = function () {
                return _StringfromCharCode(255 & this.lo, 255 & this.lo >>> 8, 255 & this.lo >>> 16, this.lo >>> 24, 255 & this.hi, 255 & this.hi >>> 8, 255 & this.hi >>> 16, this.hi >>> 24)
            }, d.prototype.zzEncode = function () {
                var e = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
            }, d.prototype.zzDecode = function () {
                var e = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
            }, d.prototype.length = function () {
                var e = this.lo,
                    t = (this.lo >>> 28 | this.hi << 4) >>> 0,
                    o = this.hi >>> 24;
                return 0 == o ? 0 == t ? 16384 > e ? 128 > e ? 1 : 2 : 2097152 > e ? 3 : 4 : 16384 > t ? 128 > t ? 5 : 6 : 2097152 > t ? 7 : 8 : 128 > o ? 9 : 10
            }
        }, {
            39: 39
        }],
        39: [function (o, t, i) {
            function d(o, t, i) {
                for (var n = Object.keys(t), r = 0; r < n.length; ++r) o[n[r]] !== tt && i || (o[n[r]] = t[n[r]]);
                return o
            }

            function e(e) {
                function o(e, t) {
                    return this instanceof o ? void (Object.defineProperty(this, "message", {
                        get: function () {
                            return e
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", {
                        value: Error().stack || ""
                    }), t && d(this, t)) : new o(e, t)
                }
                return (o.prototype = Object.create(Error.prototype)).constructor = o, Object.defineProperty(o.prototype, "name", {
                    get: function () {
                        return e
                    }
                }), o.prototype.toString = function () {
                    return this.name + ": " + this.message
                }, o
            }
            var s = i;
            s.asPromise = o(1), s.base64 = o(2), s.EventEmitter = o(4), s.float = o(6), s.inquire = o(7), s.utf8 = o(10), s.pool = o(9), s.LongBits = o(38), s.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this, s.emptyArray = Object.freeze ? Object.freeze([]) : [], s.emptyObject = Object.freeze ? Object.freeze({}) : {}, s.isNode = !!(s.global.process && s.global.process.versions && s.global.process.versions.node), s.isInteger = Number.isInteger || function (e) {
                return "number" == typeof e && isFinite(e) && _Mathfloor(e) === e
            }, s.isString = function (e) {
                return "string" == typeof e || e instanceof String
            }, s.isObject = function (e) {
                return e && "object" == typeof e
            }, s.isset = s.isSet = function (e, t) {
                var o = e[t];
                return null != o && e.hasOwnProperty(t) && ("object" != typeof o || 0 < (Array.isArray(o) ? o.length : Object.keys(o).length))
            }, s.Buffer = function () {
                try {
                    var e = s.inquire("buffer").Buffer;
                    return e.prototype.utf8Write ? e : null
                } catch (e) {
                    return null
                }
            }(), s.y = null, s.b = null, s.newBuffer = function (e) {
                return "number" == typeof e ? s.Buffer ? s.b(e) : new s.Array(e) : s.Buffer ? s.y(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
            }, s.Array = "undefined" == typeof Uint8Array ? Array : Uint8Array, s.Long = s.global.dcodeIO && s.global.dcodeIO.Long || s.global.Long || s.inquire("long"), s.key2Re = /^true|false|0|1$/, s.key32Re = /^-?(?:0|[1-9][0-9]*)$/, s.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, s.longToHash = function (e) {
                return e ? s.LongBits.from(e).toHash() : s.LongBits.zeroHash
            }, s.longFromHash = function (e, t) {
                var o = s.LongBits.fromHash(e);
                return s.Long ? s.Long.fromBits(o.lo, o.hi, t) : o.toNumber(!!t)
            }, s.merge = d, s.lcFirst = function (e) {
                return e.charAt(0).toLowerCase() + e.substring(1)
            }, s.newError = e, s.ProtocolError = e("ProtocolError"), s.oneOfGetter = function (e) {
                for (var o = {}, t = 0; t < e.length; ++t) o[e[t]] = 1;
                return function () {
                    for (var e = Object.keys(this), t = e.length - 1; - 1 < t; --t)
                        if (1 === o[e[t]] && this[e[t]] !== tt && null !== this[e[t]]) return e[t]
                }
            }, s.oneOfSetter = function (e) {
                return function (o) {
                    for (var t = 0; t < e.length; ++t) e[t] !== o && delete this[e[t]]
                }
            }, s.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, s.o = function () {
                var e = s.Buffer;
                e ? (s.y = e.from !== Uint8Array.from && e.from || function (o, t) {
                    return new e(o, t)
                }, s.b = e.allocUnsafe || function (o) {
                    return new e(o)
                }) : s.y = s.b = null
            }
        }, {
            1: 1,
            10: 10,
            2: 2,
            38: 38,
            4: 4,
            6: 6,
            7: 7,
            9: 9
        }],
        40: [function (e, t) {
            function d(e, t) {
                return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected"
            }

            function n(a, t, i, n) {
                if (!t.resolvedType) switch (t.type) {
                    case "int32":
                    case "uint32":
                    case "sint32":
                    case "fixed32":
                    case "sfixed32":
                        a("if(!util.isInteger(%s))", n)("return%j", d(t, "integer"));
                        break;
                    case "int64":
                    case "uint64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        a("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", d(t, "integer|Long"));
                        break;
                    case "float":
                    case "double":
                        a("if(typeof %s!==\"number\")", n)("return%j", d(t, "number"));
                        break;
                    case "bool":
                        a("if(typeof %s!==\"boolean\")", n)("return%j", d(t, "boolean"));
                        break;
                    case "string":
                        a("if(!util.isString(%s))", n)("return%j", d(t, "string"));
                        break;
                    case "bytes":
                        a("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", n, n, n)("return%j", d(t, "buffer"));
                } else if (t.resolvedType instanceof o) {
                    a("switch(%s){", n)("default:")("return%j", d(t, "enum value"));
                    for (var r = Object.keys(t.resolvedType.values), e = 0; e < r.length; ++e) a("case %i:", t.resolvedType.values[r[e]]);
                    a("break")("}")
                } else a("{")("var e=types[%i].verify(%s);", i, n)("if(e)")("return%j+e", t.name + ".")("}");
                return a
            }

            function a(e, t, o) {
                switch (t.keyType) {
                    case "int32":
                    case "uint32":
                    case "sint32":
                    case "fixed32":
                    case "sfixed32":
                        e("if(!util.key32Re.test(%s))", o)("return%j", d(t, "integer key"));
                        break;
                    case "int64":
                    case "uint64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        e("if(!util.key64Re.test(%s))", o)("return%j", d(t, "integer|Long key"));
                        break;
                    case "bool":
                        e("if(!util.key2Re.test(%s))", o)("return%j", d(t, "boolean key"));
                }
                return e
            }
            t.exports = function (l) {
                var t = p.codegen(["m"], l.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected"),
                    i = l.oneofsArray,
                    f = {};
                i.length && t("var p={}");
                for (var r = 0; r < l.fieldsArray.length; ++r) {
                    var y = l.e[r].resolve(),
                        s = "m" + p.safeProp(y.name);
                    if (y.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", s, y.name), y.map) t("if(!util.isObject(%s))", s)("return%j", d(y, "object"))("var k=Object.keys(%s)", s)("for(var i=0;i<k.length;++i){"), a(t, y, "k[i]"), n(t, y, r, s + "[k[i]]")("}");
                    else if (y.repeated) t("if(!Array.isArray(%s))", s)("return%j", d(y, "array"))("for(var i=0;i<%s.length;++i){", s), n(t, y, r, s + "[i]")("}");
                    else {
                        if (y.partOf) {
                            var u = p.safeProp(y.partOf.name);
                            1 === f[y.partOf.name] && t("if(p%s===1)", u)("return%j", y.partOf.name + ": multiple values"), f[y.partOf.name] = 1, t("p%s=1", u)
                        }
                        n(t, y, r, s)
                    }
                    y.optional && t("}")
                }
                return t("return null")
            };
            var o = e(15),
                p = e(37)
        }, {
            15: 15,
            37: 37
        }],
        41: [function (e, t, o) {
            var d = e(21);
            o[".google.protobuf.Any"] = {
                fromObject: function (e) {
                    if (e && e["@type"]) {
                        var t = this.lookup(e["@type"]);
                        if (t) {
                            var o = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
                            return this.create({
                                type_url: "/" + o,
                                value: t.encode(t.fromObject(e)).finish()
                            })
                        }
                    }
                    return this.fromObject(e)
                },
                toObject: function (o, s) {
                    if (s && s.json && o.type_url && o.value) {
                        var i = o.type_url.substring(o.type_url.lastIndexOf("/") + 1),
                            n = this.lookup(i);
                        n && (o = n.decode(o.value))
                    }
                    if (!(o instanceof this.ctor) && o instanceof d) {
                        var r = o.$type.toObject(o, s);
                        return r["@type"] = o.$type.fullName, r
                    }
                    return this.toObject(o, s)
                }
            }
        }, {
            21: 21
        }],
        42: [function (y, t) {
            function m(e, t, o) {
                this.fn = e, this.len = t, this.next = tt, this.val = o
            }

            function o() { }

            function i(e) {
                this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states
            }

            function f() {
                this.len = 0, this.head = new m(o, 0, 0), this.tail = this.head, this.states = null
            }

            function a(e, t, o) {
                t[o] = 255 & e
            }

            function c(e, t) {
                this.len = e, this.next = tt, this.val = t
            }

            function l(e, t, o) {
                for (; e.hi;) t[o++] = 128 | 127 & e.lo, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
                for (; 127 < e.lo;) t[o++] = 128 | 127 & e.lo, e.lo >>>= 7;
                t[o++] = e.lo
            }

            function g(e, t, o) {
                t[o] = 255 & e, t[o + 1] = 255 & e >>> 8, t[o + 2] = 255 & e >>> 16, t[o + 3] = e >>> 24
            }
            t.exports = f;
            var d, h = y(39),
                r = h.LongBits,
                e = h.base64,
                s = h.utf8;
            f.create = h.Buffer ? function () {
                return (f.create = function () {
                    return new d
                })()
            } : function () {
                return new f
            }, f.alloc = function (e) {
                return new h.Array(e)
            }, h.Array !== Array && (f.alloc = h.pool(f.alloc, h.Array.prototype.subarray)), f.prototype.g = function (e, t, o) {
                return this.tail = this.tail.next = new m(e, t, o), this.len += t, this
            }, (c.prototype = Object.create(m.prototype)).fn = function (e, o, r) {
                for (; 127 < e;) o[r++] = 128 | 127 & e, e >>>= 7;
                o[r] = e
            }, f.prototype.uint32 = function (e) {
                return this.len += (this.tail = this.tail.next = new c(128 > (e >>>= 0) ? 1 : 16384 > e ? 2 : 2097152 > e ? 3 : 268435456 > e ? 4 : 5, e)).len, this
            }, f.prototype.int32 = function (e) {
                return 0 > e ? this.g(l, 10, r.fromNumber(e)) : this.uint32(e)
            }, f.prototype.sint32 = function (e) {
                return this.uint32((e << 1 ^ e >> 31) >>> 0)
            }, f.prototype.int64 = f.prototype.uint64 = function (e) {
                var t = r.from(e);
                return this.g(l, t.length(), t)
            }, f.prototype.sint64 = function (e) {
                var t = r.from(e).zzEncode();
                return this.g(l, t.length(), t)
            }, f.prototype.bool = function (e) {
                return this.g(a, 1, e ? 1 : 0)
            }, f.prototype.sfixed32 = f.prototype.fixed32 = function (e) {
                return this.g(g, 4, e >>> 0)
            }, f.prototype.sfixed64 = f.prototype.fixed64 = function (e) {
                var t = r.from(e);
                return this.g(g, 4, t.lo).g(g, 4, t.hi)
            }, f.prototype.float = function (e) {
                return this.g(h.float.writeFloatLE, 4, e)
            }, f.prototype.double = function (e) {
                return this.g(h.float.writeDoubleLE, 8, e)
            };
            var u = h.Array.prototype.set ? function (e, t, o) {
                t.set(e, o)
            } : function (e, t, o) {
                for (var n = 0; n < e.length; ++n) t[o + n] = e[n]
            };
            f.prototype.bytes = function (o) {
                var r = o.length >>> 0;
                if (!r) return this.g(a, 1, 0);
                if (h.isString(o)) {
                    var s = f.alloc(r = e.length(o));
                    e.decode(o, s, 0), o = s
                }
                return this.uint32(r).g(u, r, o)
            }, f.prototype.string = function (e) {
                var t = s.length(e);
                return t ? this.uint32(t).g(s.write, t, e) : this.g(a, 1, 0)
            }, f.prototype.fork = function () {
                return this.states = new i(this), this.head = this.tail = new m(o, 0, 0), this.len = 0, this
            }, f.prototype.reset = function () {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new m(o, 0, 0), this.len = 0), this
            }, f.prototype.ldelim = function () {
                var e = this.head,
                    t = this.tail,
                    o = this.len;
                return this.reset().uint32(o), o && (this.tail.next = e.next, this.tail = t, this.len += o), this
            }, f.prototype.finish = function () {
                for (var e = this.head.next, o = this.constructor.alloc(this.len), r = 0; e;) e.fn(e.val, o, r), r += e.len, e = e.next;
                return o
            }, f.o = function (e) {
                d = e
            }
        }, {
            39: 39
        }],
        43: [function (d, t) {
            function i() {
                o.call(this)
            }

            function s(e, t, o) {
                40 > e.length ? a.utf8.write(e, t, o) : t.utf8Write(e, o)
            }
            t.exports = i;
            var o = d(42);
            (i.prototype = Object.create(o.prototype)).constructor = i;
            var a = d(39),
                n = a.Buffer;
            i.alloc = function (e) {
                return (i.alloc = a.b)(e)
            };
            var e = n && n.prototype instanceof Uint8Array && "set" === n.prototype.set.name ? function (e, t, o) {
                t.set(e, o)
            } : function (e, t, o) {
                if (e.copy) e.copy(t, o, 0, e.length);
                else
                    for (var i = 0; i < e.length;) t[o++] = e[i++]
            };
            i.prototype.bytes = function (o) {
                a.isString(o) && (o = a.y(o, "base64"));
                var n = o.length >>> 0;
                return this.uint32(n), n && this.g(e, n, o), this
            }, i.prototype.string = function (e) {
                var t = n.byteLength(e);
                return this.uint32(t), t && this.g(s, t, e), this
            }
        }, {
            39: 39,
            42: 42
        }]
    }, e = {}, t = [19], i = function o(t) {
        var i = e[t];
        return i || r[t][0].call(i = e[t] = {
            exports: {}
        }, o, i, i.exports), i.exports
    }(t[0]), i.util.global.protobuf = i, "function" == typeof define && define.amd && define(["long"], function (e) {
        return e && e.isLong && (i.util.Long = e, i.configure()), i
    }), "object" == typeof module && module && module.exports && (module.exports = i)
}();
class Proto {
    constructor() { // List of promises waiting for protoBuf to finish indexing
        this.protoBufGets = [], this.proto = null, protobuf.load("entity.proto", (e, t) => {
            if (e) throw e;
            this.proto = {
                Position: t.lookupType("Entity.Position"),
                ClientEvent: t.lookupType("Entity.ClientEvent"),
                ServerEvent: t.lookupType("Entity.ServerEvent"),
                AuthEvent: t.lookupType("Entity.AuthEvent"),
                EntityStreamInEvent: t.lookupType("Entity.EntityStreamInEvent"),
                EntityStreamOutEvent: t.lookupType("Entity.EntityStreamOutEvent")
            };
            for (const o of this.protoBufGets) o(this.proto)
        }), this.executor = this.executor.bind(this), this.getProto = this.getProto.bind(this), this.getValue = this.getValue.bind(this)
    }
    getProto() {
        return new Promise(this.executor)
    }
    getValue() {
        return this.proto
    }
    executor(e, t) {
        null == this.proto ? this.protoBufGets.push(e) : e(this.proto)
    }
}
var proto = new Proto,
    streamingWorker = "let maxCoordinate = 50000;\nlet areaSize = 100;\nlet maxAreaIndex = maxCoordinate / areaSize;\n\nonmessage = function (e) {\n    let data = e.data;\n    if (!this.areas) { // Init areas for fast spacing algorithm\n        this.areas = new Array(maxAreaIndex);\n        for (let i = 0; i < maxAreaIndex; i++) {\n            this.areas[i] = new Array(maxAreaIndex);\n            for (let j = 0; j < maxAreaIndex; j++) {\n                this.areas[i][j] = [];\n            }\n        }\n    }\n    if (!this.streamedIn) {\n        this.streamedIn = new Map();\n    }\n    if (data.position) {\n        this.position = data.position;\n    }\n    if (data.entities) {\n        // Fill entities in areas\n        for (let i = 0; i < maxAreaIndex; i++) {\n            for (let j = 0; j < maxAreaIndex; j++) {\n                this.areas[i][j] = [];\n            }\n        }\n        for (const [id, entity] of data.entities) {\n            addEntityToArea(entity);\n        }\n    }\n    if (data.entityToAdd) {\n        addEntityToArea(data.entityToAdd);\n    }\n    if (data.entityToRemove) {\n        if (this.streamedIn.has(data.entityToRemove.id)) {\n            this.streamedIn.delete(data.entityToRemove.id);\n            postMessage({streamOut: this.streamedIn.get(data.entityToRemove.id)});\n        }\n        removeEntityFromArea(data.entityToRemove);\n    }\n    start(this.position);\n};\n\nfunction addEntityToArea(entity) {\n    const [startingYIndex, startingXIndex, stoppingYIndex, stoppingXIndex] = calcStartStopIndex(entity);\n    if (startingYIndex == null || startingXIndex == null || stoppingYIndex == null || stoppingXIndex == null) return;\n    for (let i = startingYIndex; i <= stoppingYIndex; i++) {\n        for (let j = startingXIndex; j <= stoppingXIndex; j++) {\n            this.areas[i][j].push(entity);\n        }\n    }\n}\n\nfunction calcStartStopIndex(entity) {\n    let posX = offsetPosition(entity.position.x);\n    let posY = offsetPosition(entity.position.y);\n\n    if (posX < 0 || posY < 0 || posX > maxCoordinate || posY > maxCoordinate) return [null, null, null, null];\n\n    let maxX = posX + entity.range;\n    let maxY = posY + entity.range;\n    let minX = posX - entity.range;\n    let minY = posY - entity.range;\n\n    let startingYIndex = Math.floor(minY / areaSize);\n    let startingXIndex = Math.floor(minX / areaSize);\n    let stoppingYIndex = Math.floor(maxY / areaSize);\n    let stoppingXIndex = Math.floor(maxX / areaSize);\n\n    return [startingYIndex, startingXIndex, stoppingYIndex, stoppingXIndex];\n}\n\nfunction removeEntityFromArea(entity) {\n    const [startingYIndex, startingXIndex, stoppingYIndex, stoppingXIndex] = calcStartStopIndex(entity);\n    if (startingYIndex == null || startingXIndex == null || stoppingYIndex == null || stoppingXIndex == null) return;\n    for (let i = startingYIndex; i <= stoppingYIndex; i++) {\n        for (let j = startingXIndex; j <= stoppingXIndex; j++) {\n            this.areas[i][j].filter((arrEntity) => arrEntity.id !== entity.id)\n        }\n    }\n}\n\nfunction distance(v1, v2) {\n    const dx = v1.x - v2.x;\n    const dy = v1.y - v2.y;\n    const dz = v1.z - v2.z;\n\n    return Math.sqrt(dx * dx + dy * dy + dz * dz);\n}\n\nfunction offsetPosition(value) {\n    return value + 10000;\n}\n\nfunction start(position) {\n    let keysToDeleteFromStreamedIn = [];\n    for (const [id, entity] of this.streamedIn) {\n        if (distance(entity.position, position) > entity.range) {\n            postMessage({streamOut: entity});\n            keysToDeleteFromStreamedIn.push(id);\n        }\n    }\n    for (let key of keysToDeleteFromStreamedIn) {\n        this.streamedIn.delete(key);\n    }\n\n    let posX = offsetPosition(position.x);\n    let posY = offsetPosition(position.y);\n\n    if (posX < 0 || posY < 0 || posX > maxCoordinate || posY > maxCoordinate) return;\n\n    let xIndex = Math.floor(posX / areaSize);\n    let yIndex = Math.floor(posY / areaSize);\n\n    let entitiesInArea = this.areas[xIndex][yIndex];\n\n    for (let entity of entitiesInArea) {\n        if (!this.streamedIn.has(entity.id)) {\n            if (distance(entity.position, position) <= entity.range) {\n                postMessage({streamIn: entity});\n                this.streamedIn.set(entity.id, entity)\n            }\n        }\n    }\n}";
class EntityRepository {
    constructor(e) {
        this.websocket = e, this.entities = new Map, this.streamedInEntities = new Set;
        const t = new Blob([streamingWorker], {
            type: "application/javascript"
        });
        this.streamingWorker = new Worker(window.URL.createObjectURL(t)), playerPosition.update = () => {
            this.updateWorker()
        }, this.streamingWorker.onmessage = t => {
            console.log(JSON.stringify(t.data));
            const o = t.data.streamIn,
                n = t.data.streamOut;
            o ? (this.streamedInEntities.add(o.id), proto.getProto().then(t => {
                e.sendEvent({
                    streamIn: t.EntityStreamInEvent.create({
                        entityId: o.id
                    })
                })
            }), alt.emit("networkingEntityStreamIn", o)) : n && (this.streamedInEntities.delete(n.id), proto.getProto().then(t => {
                e.sendEvent({
                    streamOut: t.EntityStreamOutEvent.create({
                        entityId: n.id
                    })
                })
            }), alt.emit("networkingEntityStreamOut", n))
        }
    }
    isStreamedIn(e) {
        return this.streamedInEntities.has(e)
    }
    getEntities() {
        return this.entities.values()
    }
    setEntities(e) {
        let t = new Map;
        for (const o of e) t.set(o.id, o);
        this.entities = t, this.updateWorker()
    }
    addEntity(e) {
        this.entities.set(e.id, e), this.streamingWorker.postMessage({
            position: playerPosition.getPosition(),
            entityToAdd: e
        })
    }
    removeEntity(e) {
        if (this.entities.has(e)) {
            let t = this.entities.get(e);
            t && (this.entities.delete(e), this.streamingWorker.postMessage({
                position: playerPosition.getPosition(),
                entityToRemove: t
            }))
        }
    }
    updateWorker() {
        this.streamingWorker.postMessage({
            position: playerPosition.getPosition(),
            entities: this.entities
        })
    }
}
class WebSocket$1 {
    constructor(e, t) {
        this.connection = new ReconnectingWebSocket(e), this.connection.binaryType = "arraybuffer", this.entityRepository = new EntityRepository(this), this.connection.onopen = () => {
            proto.getProto().then(e => {
                const o = e.AuthEvent.create({
                    token: t
                }),
                    n = e.ClientEvent.create({
                        auth: o
                    }),
                    r = e.ClientEvent.encode(n).finish();
                this.connection.send(r)
            })
        }, this.connection.onerror = e => {
            console.log("err", e)
        }, this.connection.onmessage = t => {
            proto.getProto().then(async e => {
                const o = e.ServerEvent.decode(new Uint8Array((await new Response(t.data).arrayBuffer()))),
                    n = e.ServerEvent.toObject(o, {
                        defaults: !0
                    });
                if (console.log("event", n, o), null != n.send) {
                    const e = n.send.entities;
                    this.entityRepository.setEntities(e)
                } else if (null != n.dataChange) {
                    const e = n.dataChange;
                    if (this.entityRepository.entities.has(e.id)) {
                        const t = this.entityRepository.entities.get(e.id);
                        t.data || (t.data = {}), t.data[e.key] = e.value;
                        const o = this.entityRepository.entities.get(e.id);
                        console.log("data changed", o.id, o.data), delete e.id, this.entityRepository.isStreamedIn(e.id) && alt.emit("networkingEntityDataChange", o, e)
                    }
                } else if (n.positionChange) {
                    const e = n.positionChange;
                    if (this.entityRepository.entities.has(e.id)) {
                        const t = this.entityRepository.entities.get(e.id);
                        t.position = e.position, this.entityRepository.updateWorker(), console.log("position changed", t.id, t.position)
                    }
                } else if (n.rangeChange) {
                    const e = n.rangeChange;
                    if (this.entityRepository.entities.has(e.id)) {
                        const t = this.entityRepository.entities.get(e.id);
                        t.range = e.range, this.entityRepository.updateWorker(), console.log("range changed", t.id, t.range)
                    }
                } else if (n.delete) {
                    const e = n.delete;
                    e && this.entityRepository.removeEntity(e.id)
                } else if (n.create) {
                    const e = n.create;
                    e.entity && this.entityRepository.addEntity(e.entity)
                } else if (n.multipleDataChange) {
                    const e = n.multipleDataChange;
                    if (this.entityRepository.entities.has(e.id)) {
                        const t = this.entityRepository.entities.get(e.id);
                        for (const o in t.data || (t.data = {}), e.data) e.data.hasOwnProperty(o) && (t.data[o] = e.data[o]);
                        const o = this.entityRepository.entities.get(e.id);
                        console.log("multiple data change", o.id, o.data), this.entityRepository.isStreamedIn(e.id) && alt.emit("networkingEntityDataChange", o, e.data)
                    }
                } else if (n.dimensionChange) {
                    const e = n.dimensionChange;
                    if (this.entityRepository.entities.has(e.id)) {
                        const t = this.entityRepository.entities.get(e.id);
                        t.dimension = e.dimension, this.entityRepository.updateWorker(), console.log("dimension changed", t.id, t.dimension)
                    }
                }
            })
        }
    }
    sendEvent(e) {
        proto.getProto().then(t => {
            const o = t.ClientEvent.create(e),
                n = t.ClientEvent.encode(o).finish();
            this.connection.send(n)
        })
    }
} ! function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "undefined" != typeof module && module.exports ? module.exports = t() : e.ReconnectingWebSocket = t()
}(window, function () {
    var o = Math.pow;

    function t(n, r, s) {
        function a(e, t) {
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, !1, !1, t), o
        }
        var p = {
            debug: !1,
            automaticOpen: !0,
            reconnectInterval: 1e3,
            maxReconnectInterval: 3e4,
            reconnectDecay: 1.5,
            timeoutInterval: 2e3
        };
        for (var e in s || (s = {}), p) this[e] = "undefined" == typeof s[e] ? p[e] : s[e];
        this.url = n, this.reconnectAttempts = 0, this.readyState = WebSocket.CONNECTING, this.protocol = null;
        var l, u = this,
            f = !1,
            y = !1,
            m = document.createElement("div");
        m.addEventListener("open", function (e) {
            u.onopen(e)
        }), m.addEventListener("close", function (e) {
            u.onclose(e)
        }), m.addEventListener("connecting", function (e) {
            u.onconnecting(e)
        }), m.addEventListener("message", function (e) {
            u.onmessage(e)
        }), m.addEventListener("error", function (e) {
            u.onerror(e)
        }), this.addEventListener = m.addEventListener.bind(m), this.removeEventListener = m.removeEventListener.bind(m), this.dispatchEvent = m.dispatchEvent.bind(m), this.open = function (n) {
            l = new WebSocket(u.url, r || []), n || m.dispatchEvent(a("connecting")), (u.debug || t.debugAll) && console.debug("ReconnectingWebSocket", "attempt-connect", u.url);
            var i = l,
                s = setTimeout(function () {
                    (u.debug || t.debugAll) && console.debug("ReconnectingWebSocket", "connection-timeout", u.url), y = !0, i.close(), y = !1
                }, u.timeoutInterval);
            l.onopen = function () {
                clearTimeout(s), (u.debug || t.debugAll) && console.debug("ReconnectingWebSocket", "onopen", u.url), u.protocol = l.protocol, u.readyState = WebSocket.OPEN, u.reconnectAttempts = 0;
                var e = a("open");
                e.isReconnect = n, n = !1, m.dispatchEvent(e)
            }, l.onclose = function (r) {
                if (clearTimeout(s), l = null, f) u.readyState = WebSocket.CLOSED, m.dispatchEvent(a("close"));
                else {
                    u.readyState = WebSocket.CONNECTING;
                    var i = a("connecting");
                    i.code = r.code, i.reason = r.reason, i.wasClean = r.wasClean, m.dispatchEvent(i), n || y || ((u.debug || t.debugAll) && console.debug("ReconnectingWebSocket", "onclose", u.url), m.dispatchEvent(a("close")));
                    var s = u.reconnectInterval * o(u.reconnectDecay, u.reconnectAttempts);
                    setTimeout(function () {
                        u.reconnectAttempts++ , u.open(!0)
                    }, s > u.maxReconnectInterval ? u.maxReconnectInterval : s)
                }
            }, l.onmessage = function (e) {
                (u.debug || t.debugAll) && console.debug("ReconnectingWebSocket", "onmessage", u.url, e.data);
                var o = a("message");
                o.data = e.data, m.dispatchEvent(o)
            }, l.onerror = function (e) {
                (u.debug || t.debugAll) && console.debug("ReconnectingWebSocket", "onerror", u.url, e), m.dispatchEvent(a("error"))
            }
        }, 1 == this.automaticOpen && this.open(!1), this.send = function (e) {
            if (l) return (u.debug || t.debugAll) && console.debug("ReconnectingWebSocket", "send", u.url, e), l.send(e);
            throw "INVALID_STATE_ERR : Pausing to reconnect websocket"
        }, this.close = function (e, t) {
            "undefined" == typeof e && (e = 1e3), f = !0, l && l.close(e, t)
        }, this.refresh = function () {
            l && l.close()
        }
    }
    return t.prototype.onopen = function () { }, t.prototype.onclose = function () { }, t.prototype.onconnecting = function () { }, t.prototype.onmessage = function () { }, t.prototype.onerror = function () { }, t.debugAll = !1, t.CONNECTING = WebSocket.CONNECTING, t.OPEN = WebSocket.OPEN, t.CLOSING = WebSocket.CLOSING, t.CLOSED = WebSocket.CLOSED, t
});
class NetworkingEntity {
    constructor() {
        alt.on("networkingEntitySetup", (e, t) => {
            new WebSocket$1(e, t)
        })
    }
}
var networkingEntity = new NetworkingEntity;
export default networkingEntity;