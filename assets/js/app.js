/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var QP = Object.create;
  var zn = Object.defineProperty;
  var ZP = Object.getOwnPropertyDescriptor;
  var JP = Object.getOwnPropertyNames;
  var ew = Object.getPrototypeOf,
    tw = Object.prototype.hasOwnProperty;
  var rw = (e, t) => () => (e && (t = e(e = 0)), t);
  var E = (e, t) => () => (t || e((t = {
      exports: {}
    }).exports, t), t.exports),
    iw = (e, t) => {
      for (var r in t) zn(e, r, {
        get: t[r],
        enumerable: !0
      })
    },
    uc = (e, t, r, i) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let n of JP(t)) !tw.call(e, n) && n !== r && zn(e, n, {
          get: () => t[n],
          enumerable: !(i = ZP(t, n)) || i.enumerable
        });
      return e
    };
  var nw = (e, t, r) => (r = e != null ? QP(ew(e)) : {}, uc(t || !e || !e.__esModule ? zn(r, "default", {
      value: e,
      enumerable: !0
    }) : r, e)),
    aw = e => uc(zn({}, "__esModule", {
      value: !0
    }), e);
  var so = E(() => {
    window.tram = function (e) {
      function t(T, z) {
        var H = new w.Bare;
        return H.init(T, z)
      }

      function r(T) {
        return T.replace(/[A-Z]/g, function (z) {
          return "-" + z.toLowerCase()
        })
      }

      function i(T) {
        var z = parseInt(T.slice(1), 16),
          H = z >> 16 & 255,
          U = z >> 8 & 255,
          j = 255 & z;
        return [H, U, j]
      }

      function n(T, z, H) {
        return "#" + (1 << 24 | T << 16 | z << 8 | H).toString(16).slice(1)
      }

      function a() {}

      function s(T, z) {
        p("Type warning: Expected: [" + T + "] Got: [" + typeof z + "] " + z)
      }

      function o(T, z, H) {
        p("Units do not match [" + T + "]: " + z + ", " + H)
      }

      function l(T, z, H) {
        if (z !== void 0 && (H = z), T === void 0) return H;
        var U = H;
        return Ae.test(T) || !Pe.test(T) ? U = parseInt(T, 10) : Pe.test(T) && (U = 1e3 * parseFloat(T)), 0 > U && (U = 0), U === U ? U : H
      }

      function p(T) {
        se.debug && window && window.console.warn(T)
      }

      function u(T) {
        for (var z = -1, H = T ? T.length : 0, U = []; ++z < H;) {
          var j = T[z];
          j && U.push(j)
        }
        return U
      }
      var h = function (T, z, H) {
          function U(oe) {
            return typeof oe == "object"
          }

          function j(oe) {
            return typeof oe == "function"
          }

          function X() {}

          function ae(oe, ye) {
            function ne() {
              var Ye = new he;
              return j(Ye.init) && Ye.init.apply(Ye, arguments), Ye
            }

            function he() {}
            ye === H && (ye = oe, oe = Object), ne.Bare = he;
            var me, we = X[T] = oe[T],
              Rt = he[T] = ne[T] = new X;
            return Rt.constructor = ne, ne.mixin = function (Ye) {
              return he[T] = ne[T] = ae(ne, Ye)[T], ne
            }, ne.open = function (Ye) {
              if (me = {}, j(Ye) ? me = Ye.call(ne, Rt, we, ne, oe) : U(Ye) && (me = Ye), U(me))
                for (var Di in me) z.call(me, Di) && (Rt[Di] = me[Di]);
              return j(Rt.init) || (Rt.init = oe), ne
            }, ne.open(ye)
          }
          return ae
        }("prototype", {}.hasOwnProperty),
        v = {
          ease: ["ease", function (T, z, H, U) {
            var j = (T /= U) * T,
              X = j * T;
            return z + H * (-2.75 * X * j + 11 * j * j + -15.5 * X + 8 * j + .25 * T)
          }],
          "ease-in": ["ease-in", function (T, z, H, U) {
            var j = (T /= U) * T,
              X = j * T;
            return z + H * (-1 * X * j + 3 * j * j + -3 * X + 2 * j)
          }],
          "ease-out": ["ease-out", function (T, z, H, U) {
            var j = (T /= U) * T,
              X = j * T;
            return z + H * (.3 * X * j + -1.6 * j * j + 2.2 * X + -1.8 * j + 1.9 * T)
          }],
          "ease-in-out": ["ease-in-out", function (T, z, H, U) {
            var j = (T /= U) * T,
              X = j * T;
            return z + H * (2 * X * j + -5 * j * j + 2 * X + 2 * j)
          }],
          linear: ["linear", function (T, z, H, U) {
            return H * T / U + z
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (T, z, H, U) {
            return H * (T /= U) * T + z
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (T, z, H, U) {
            return -H * (T /= U) * (T - 2) + z
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (T, z, H, U) {
            return (T /= U / 2) < 1 ? H / 2 * T * T + z : -H / 2 * (--T * (T - 2) - 1) + z
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (T, z, H, U) {
            return H * (T /= U) * T * T + z
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (T, z, H, U) {
            return H * ((T = T / U - 1) * T * T + 1) + z
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (T, z, H, U) {
            return (T /= U / 2) < 1 ? H / 2 * T * T * T + z : H / 2 * ((T -= 2) * T * T + 2) + z
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (T, z, H, U) {
            return H * (T /= U) * T * T * T + z
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (T, z, H, U) {
            return -H * ((T = T / U - 1) * T * T * T - 1) + z
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (T, z, H, U) {
            return (T /= U / 2) < 1 ? H / 2 * T * T * T * T + z : -H / 2 * ((T -= 2) * T * T * T - 2) + z
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (T, z, H, U) {
            return H * (T /= U) * T * T * T * T + z
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (T, z, H, U) {
            return H * ((T = T / U - 1) * T * T * T * T + 1) + z
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (T, z, H, U) {
            return (T /= U / 2) < 1 ? H / 2 * T * T * T * T * T + z : H / 2 * ((T -= 2) * T * T * T * T + 2) + z
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (T, z, H, U) {
            return -H * Math.cos(T / U * (Math.PI / 2)) + H + z
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (T, z, H, U) {
            return H * Math.sin(T / U * (Math.PI / 2)) + z
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (T, z, H, U) {
            return -H / 2 * (Math.cos(Math.PI * T / U) - 1) + z
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (T, z, H, U) {
            return T === 0 ? z : H * Math.pow(2, 10 * (T / U - 1)) + z
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (T, z, H, U) {
            return T === U ? z + H : H * (-Math.pow(2, -10 * T / U) + 1) + z
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (T, z, H, U) {
            return T === 0 ? z : T === U ? z + H : (T /= U / 2) < 1 ? H / 2 * Math.pow(2, 10 * (T - 1)) + z : H / 2 * (-Math.pow(2, -10 * --T) + 2) + z
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (T, z, H, U) {
            return -H * (Math.sqrt(1 - (T /= U) * T) - 1) + z
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (T, z, H, U) {
            return H * Math.sqrt(1 - (T = T / U - 1) * T) + z
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (T, z, H, U) {
            return (T /= U / 2) < 1 ? -H / 2 * (Math.sqrt(1 - T * T) - 1) + z : H / 2 * (Math.sqrt(1 - (T -= 2) * T) + 1) + z
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (T, z, H, U, j) {
            return j === void 0 && (j = 1.70158), H * (T /= U) * T * ((j + 1) * T - j) + z
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (T, z, H, U, j) {
            return j === void 0 && (j = 1.70158), H * ((T = T / U - 1) * T * ((j + 1) * T + j) + 1) + z
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (T, z, H, U, j) {
            return j === void 0 && (j = 1.70158), (T /= U / 2) < 1 ? H / 2 * T * T * (((j *= 1.525) + 1) * T - j) + z : H / 2 * ((T -= 2) * T * (((j *= 1.525) + 1) * T + j) + 2) + z
          }]
        },
        d = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        },
        f = document,
        m = window,
        c = "bkwld-tram",
        g = /[\-\.0-9]/g,
        y = /[A-Z]/,
        b = "number",
        _ = /^(rgb|#)/,
        S = /(em|cm|mm|in|pt|pc|px)$/,
        I = /(em|cm|mm|in|pt|pc|px|%)$/,
        x = /(deg|rad|turn)$/,
        P = "unitless",
        L = /(all|none) 0s ease 0s/,
        D = /^(width|height)$/,
        O = " ",
        B = f.createElement("a"),
        R = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        V = function (T) {
          if (T in B.style) return {
            dom: T,
            css: T
          };
          var z, H, U = "",
            j = T.split("-");
          for (z = 0; z < j.length; z++) U += j[z].charAt(0).toUpperCase() + j[z].slice(1);
          for (z = 0; z < R.length; z++)
            if (H = R[z] + U, H in B.style) return {
              dom: H,
              css: F[z] + T
            }
        },
        W = t.support = {
          bind: Function.prototype.bind,
          transform: V("transform"),
          transition: V("transition"),
          backface: V("backface-visibility"),
          timing: V("transition-timing-function")
        };
      if (W.transition) {
        var ee = W.timing.dom;
        if (B.style[ee] = v["ease-in-back"][0], !B.style[ee])
          for (var A in d) v[A][0] = d[A]
      }
      var q = t.frame = function () {
          var T = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
          return T && W.bind ? T.bind(m) : function (z) {
            m.setTimeout(z, 16)
          }
        }(),
        G = t.now = function () {
          var T = m.performance,
            z = T && (T.now || T.webkitNow || T.msNow || T.mozNow);
          return z && W.bind ? z.bind(T) : Date.now || function () {
            return +new Date
          }
        }(),
        C = h(function (T) {
          function z(le, Ee) {
            var Oe = u(("" + le).split(O)),
              be = Oe[0];
            Ee = Ee || {};
            var Qe = K[be];
            if (!Qe) return p("Unsupported property: " + be);
            if (!Ee.weak || !this.props[be]) {
              var _t = Qe[0],
                at = this.props[be];
              return at || (at = this.props[be] = new _t.Bare), at.init(this.$el, Oe, Qe, Ee), at
            }
          }

          function H(le, Ee, Oe) {
            if (le) {
              var be = typeof le;
              if (Ee || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), be == "number" && Ee) return this.timer = new re({
                duration: le,
                context: this,
                complete: X
              }), void(this.active = !0);
              if (be == "string" && Ee) {
                switch (le) {
                  case "hide":
                    ne.call(this);
                    break;
                  case "stop":
                    ae.call(this);
                    break;
                  case "redraw":
                    he.call(this);
                    break;
                  default:
                    z.call(this, le, Oe && Oe[1])
                }
                return X.call(this)
              }
              if (be == "function") return void le.call(this, this);
              if (be == "object") {
                var Qe = 0;
                Rt.call(this, le, function (Le, YP) {
                  Le.span > Qe && (Qe = Le.span), Le.stop(), Le.animate(YP)
                }, function (Le) {
                  "wait" in Le && (Qe = l(Le.wait, 0))
                }), we.call(this), Qe > 0 && (this.timer = new re({
                  duration: Qe,
                  context: this
                }), this.active = !0, Ee && (this.timer.complete = X));
                var _t = this,
                  at = !1,
                  Gn = {};
                q(function () {
                  Rt.call(_t, le, function (Le) {
                    Le.active && (at = !0, Gn[Le.name] = Le.nextStyle)
                  }), at && _t.$el.css(Gn)
                })
              }
            }
          }

          function U(le) {
            le = l(le, 0), this.active ? this.queue.push({
              options: le
            }) : (this.timer = new re({
              duration: le,
              context: this,
              complete: X
            }), this.active = !0)
          }

          function j(le) {
            return this.active ? (this.queue.push({
              options: le,
              args: arguments
            }), void(this.timer.complete = X)) : p("No active transition timer. Use start() or wait() before then().")
          }

          function X() {
            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
              var le = this.queue.shift();
              H.call(this, le.options, !0, le.args)
            }
          }

          function ae(le) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
            var Ee;
            typeof le == "string" ? (Ee = {}, Ee[le] = 1) : Ee = typeof le == "object" && le != null ? le : this.props, Rt.call(this, Ee, Ye), we.call(this)
          }

          function oe(le) {
            ae.call(this, le), Rt.call(this, le, Di, $P)
          }

          function ye(le) {
            typeof le != "string" && (le = "block"), this.el.style.display = le
          }

          function ne() {
            ae.call(this), this.el.style.display = "none"
          }

          function he() {
            this.el.offsetHeight
          }

          function me() {
            ae.call(this), e.removeData(this.el, c), this.$el = this.el = null
          }

          function we() {
            var le, Ee, Oe = [];
            this.upstream && Oe.push(this.upstream);
            for (le in this.props) Ee = this.props[le], Ee.active && Oe.push(Ee.string);
            Oe = Oe.join(","), this.style !== Oe && (this.style = Oe, this.el.style[W.transition.dom] = Oe)
          }

          function Rt(le, Ee, Oe) {
            var be, Qe, _t, at, Gn = Ee !== Ye,
              Le = {};
            for (be in le) _t = le[be], be in ve ? (Le.transform || (Le.transform = {}), Le.transform[be] = _t) : (y.test(be) && (be = r(be)), be in K ? Le[be] = _t : (at || (at = {}), at[be] = _t));
            for (be in Le) {
              if (_t = Le[be], Qe = this.props[be], !Qe) {
                if (!Gn) continue;
                Qe = z.call(this, be)
              }
              Ee.call(this, Qe, _t)
            }
            Oe && at && Oe.call(this, at)
          }

          function Ye(le) {
            le.stop()
          }

          function Di(le, Ee) {
            le.set(Ee)
          }

          function $P(le) {
            this.$el.css(le)
          }

          function bt(le, Ee) {
            T[le] = function () {
              return this.children ? KP.call(this, Ee, arguments) : (this.el && Ee.apply(this, arguments), this)
            }
          }

          function KP(le, Ee) {
            var Oe, be = this.children.length;
            for (Oe = 0; be > Oe; Oe++) le.apply(this.children[Oe], Ee);
            return this
          }
          T.init = function (le) {
            if (this.$el = e(le), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, se.keepInherited && !se.fallback) {
              var Ee = J(this.el, "transition");
              Ee && !L.test(Ee) && (this.upstream = Ee)
            }
            W.backface && se.hideBackface && N(this.el, W.backface.css, "hidden")
          }, bt("add", z), bt("start", H), bt("wait", U), bt("then", j), bt("next", X), bt("stop", ae), bt("set", oe), bt("show", ye), bt("hide", ne), bt("redraw", he), bt("destroy", me)
        }),
        w = h(C, function (T) {
          function z(H, U) {
            var j = e.data(H, c) || e.data(H, c, new C.Bare);
            return j.el || j.init(H), U ? j.start(U) : j
          }
          T.init = function (H, U) {
            var j = e(H);
            if (!j.length) return this;
            if (j.length === 1) return z(j[0], U);
            var X = [];
            return j.each(function (ae, oe) {
              X.push(z(oe, U))
            }), this.children = X, this
          }
        }),
        M = h(function (T) {
          function z() {
            var X = this.get();
            this.update("auto");
            var ae = this.get();
            return this.update(X), ae
          }

          function H(X, ae, oe) {
            return ae !== void 0 && (oe = ae), X in v ? X : oe
          }

          function U(X) {
            var ae = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(X);
            return (ae ? n(ae[1], ae[2], ae[3]) : X).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
          }
          var j = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          T.init = function (X, ae, oe, ye) {
            this.$el = X, this.el = X[0];
            var ne = ae[0];
            oe[2] && (ne = oe[2]), ie[ne] && (ne = ie[ne]), this.name = ne, this.type = oe[1], this.duration = l(ae[1], this.duration, j.duration), this.ease = H(ae[2], this.ease, j.ease), this.delay = l(ae[3], this.delay, j.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = D.test(this.name), this.unit = ye.unit || this.unit || se.defaultUnit, this.angle = ye.angle || this.angle || se.defaultAngle, se.fallback || ye.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + O + this.duration + "ms" + (this.ease != "ease" ? O + v[this.ease][0] : "") + (this.delay ? O + this.delay + "ms" : ""))
          }, T.set = function (X) {
            X = this.convert(X, this.type), this.update(X), this.redraw()
          }, T.transition = function (X) {
            this.active = !0, X = this.convert(X, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), X == "auto" && (X = z.call(this))), this.nextStyle = X
          }, T.fallback = function (X) {
            var ae = this.el.style[this.name] || this.convert(this.get(), this.type);
            X = this.convert(X, this.type), this.auto && (ae == "auto" && (ae = this.convert(this.get(), this.type)), X == "auto" && (X = z.call(this))), this.tween = new Z({
              from: ae,
              to: X,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            })
          }, T.get = function () {
            return J(this.el, this.name)
          }, T.update = function (X) {
            N(this.el, this.name, X)
          }, T.stop = function () {
            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, N(this.el, this.name, this.get()));
            var X = this.tween;
            X && X.context && X.destroy()
          }, T.convert = function (X, ae) {
            if (X == "auto" && this.auto) return X;
            var oe, ye = typeof X == "number",
              ne = typeof X == "string";
            switch (ae) {
              case b:
                if (ye) return X;
                if (ne && X.replace(g, "") === "") return +X;
                oe = "number(unitless)";
                break;
              case _:
                if (ne) {
                  if (X === "" && this.original) return this.original;
                  if (ae.test(X)) return X.charAt(0) == "#" && X.length == 7 ? X : U(X)
                }
                oe = "hex or rgb string";
                break;
              case S:
                if (ye) return X + this.unit;
                if (ne && ae.test(X)) return X;
                oe = "number(px) or string(unit)";
                break;
              case I:
                if (ye) return X + this.unit;
                if (ne && ae.test(X)) return X;
                oe = "number(px) or string(unit or %)";
                break;
              case x:
                if (ye) return X + this.angle;
                if (ne && ae.test(X)) return X;
                oe = "number(deg) or string(angle)";
                break;
              case P:
                if (ye || ne && I.test(X)) return X;
                oe = "number(unitless) or string(unit or %)"
            }
            return s(oe, X), X
          }, T.redraw = function () {
            this.el.offsetHeight
          }
        }),
        k = h(M, function (T, z) {
          T.init = function () {
            z.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), _))
          }
        }),
        Q = h(M, function (T, z) {
          T.init = function () {
            z.init.apply(this, arguments), this.animate = this.fallback
          }, T.get = function () {
            return this.$el[this.name]()
          }, T.update = function (H) {
            this.$el[this.name](H)
          }
        }),
        te = h(M, function (T, z) {
          function H(U, j) {
            var X, ae, oe, ye, ne;
            for (X in U) ye = ve[X], oe = ye[0], ae = ye[1] || X, ne = this.convert(U[X], oe), j.call(this, ae, ne, oe)
          }
          T.init = function () {
            z.init.apply(this, arguments), this.current || (this.current = {}, ve.perspective && se.perspective && (this.current.perspective = se.perspective, N(this.el, this.name, this.style(this.current)), this.redraw()))
          }, T.set = function (U) {
            H.call(this, U, function (j, X) {
              this.current[j] = X
            }), N(this.el, this.name, this.style(this.current)), this.redraw()
          }, T.transition = function (U) {
            var j = this.values(U);
            this.tween = new ce({
              current: this.current,
              values: j,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var X, ae = {};
            for (X in this.current) ae[X] = X in j ? j[X] : this.current[X];
            this.active = !0, this.nextStyle = this.style(ae)
          }, T.fallback = function (U) {
            var j = this.values(U);
            this.tween = new ce({
              current: this.current,
              values: j,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            })
          }, T.update = function () {
            N(this.el, this.name, this.style(this.current))
          }, T.style = function (U) {
            var j, X = "";
            for (j in U) X += j + "(" + U[j] + ") ";
            return X
          }, T.values = function (U) {
            var j, X = {};
            return H.call(this, U, function (ae, oe, ye) {
              X[ae] = oe, this.current[ae] === void 0 && (j = 0, ~ae.indexOf("scale") && (j = 1), this.current[ae] = this.convert(j, ye))
            }), X
          }
        }),
        Z = h(function (T) {
          function z(ne) {
            oe.push(ne) === 1 && q(H)
          }

          function H() {
            var ne, he, me, we = oe.length;
            if (we)
              for (q(H), he = G(), ne = we; ne--;) me = oe[ne], me && me.render(he)
          }

          function U(ne) {
            var he, me = e.inArray(ne, oe);
            me >= 0 && (he = oe.slice(me + 1), oe.length = me, he.length && (oe = oe.concat(he)))
          }

          function j(ne) {
            return Math.round(ne * ye) / ye
          }

          function X(ne, he, me) {
            return n(ne[0] + me * (he[0] - ne[0]), ne[1] + me * (he[1] - ne[1]), ne[2] + me * (he[2] - ne[2]))
          }
          var ae = {
            ease: v.ease[1],
            from: 0,
            to: 1
          };
          T.init = function (ne) {
            this.duration = ne.duration || 0, this.delay = ne.delay || 0;
            var he = ne.ease || ae.ease;
            v[he] && (he = v[he][1]), typeof he != "function" && (he = ae.ease), this.ease = he, this.update = ne.update || a, this.complete = ne.complete || a, this.context = ne.context || this, this.name = ne.name;
            var me = ne.from,
              we = ne.to;
            me === void 0 && (me = ae.from), we === void 0 && (we = ae.to), this.unit = ne.unit || "", typeof me == "number" && typeof we == "number" ? (this.begin = me, this.change = we - me) : this.format(we, me), this.value = this.begin + this.unit, this.start = G(), ne.autoplay !== !1 && this.play()
          }, T.play = function () {
            this.active || (this.start || (this.start = G()), this.active = !0, z(this))
          }, T.stop = function () {
            this.active && (this.active = !1, U(this))
          }, T.render = function (ne) {
            var he, me = ne - this.start;
            if (this.delay) {
              if (me <= this.delay) return;
              me -= this.delay
            }
            if (me < this.duration) {
              var we = this.ease(me, 0, 1, this.duration);
              return he = this.startRGB ? X(this.startRGB, this.endRGB, we) : j(this.begin + we * this.change), this.value = he + this.unit, void this.update.call(this.context, this.value)
            }
            he = this.endHex || this.begin + this.change, this.value = he + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
          }, T.format = function (ne, he) {
            if (he += "", ne += "", ne.charAt(0) == "#") return this.startRGB = i(he), this.endRGB = i(ne), this.endHex = ne, this.begin = 0, void(this.change = 1);
            if (!this.unit) {
              var me = he.replace(g, ""),
                we = ne.replace(g, "");
              me !== we && o("tween", he, ne), this.unit = me
            }
            he = parseFloat(he), ne = parseFloat(ne), this.begin = this.value = he, this.change = ne - he
          }, T.destroy = function () {
            this.stop(), this.context = null, this.ease = this.update = this.complete = a
          };
          var oe = [],
            ye = 1e3
        }),
        re = h(Z, function (T) {
          T.init = function (z) {
            this.duration = z.duration || 0, this.complete = z.complete || a, this.context = z.context, this.play()
          }, T.render = function (z) {
            var H = z - this.start;
            H < this.duration || (this.complete.call(this.context), this.destroy())
          }
        }),
        ce = h(Z, function (T, z) {
          T.init = function (H) {
            this.context = H.context, this.update = H.update, this.tweens = [], this.current = H.current;
            var U, j;
            for (U in H.values) j = H.values[U], this.current[U] !== j && this.tweens.push(new Z({
              name: U,
              from: this.current[U],
              to: j,
              duration: H.duration,
              delay: H.delay,
              ease: H.ease,
              autoplay: !1
            }));
            this.play()
          }, T.render = function (H) {
            var U, j, X = this.tweens.length,
              ae = !1;
            for (U = X; U--;) j = this.tweens[U], j.context && (j.render(H), this.current[j.name] = j.value, ae = !0);
            return ae ? void(this.update && this.update.call(this.context)) : this.destroy()
          }, T.destroy = function () {
            if (z.destroy.call(this), this.tweens) {
              var H, U = this.tweens.length;
              for (H = U; H--;) this.tweens[H].destroy();
              this.tweens = null, this.current = null
            }
          }
        }),
        se = t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !W.transition,
          agentTests: []
        };
      t.fallback = function (T) {
        if (!W.transition) return se.fallback = !0;
        se.agentTests.push("(" + T + ")");
        var z = new RegExp(se.agentTests.join("|"), "i");
        se.fallback = z.test(navigator.userAgent)
      }, t.fallback("6.0.[2-5] Safari"), t.tween = function (T) {
        return new Z(T)
      }, t.delay = function (T, z, H) {
        return new re({
          complete: z,
          duration: T,
          context: H
        })
      }, e.fn.tram = function (T) {
        return t.call(null, this, T)
      };
      var N = e.style,
        J = e.css,
        ie = {
          transform: W.transform && W.transform.css
        },
        K = {
          color: [k, _],
          background: [k, _, "background-color"],
          "outline-color": [k, _],
          "border-color": [k, _],
          "border-top-color": [k, _],
          "border-right-color": [k, _],
          "border-bottom-color": [k, _],
          "border-left-color": [k, _],
          "border-width": [M, S],
          "border-top-width": [M, S],
          "border-right-width": [M, S],
          "border-bottom-width": [M, S],
          "border-left-width": [M, S],
          "border-spacing": [M, S],
          "letter-spacing": [M, S],
          margin: [M, S],
          "margin-top": [M, S],
          "margin-right": [M, S],
          "margin-bottom": [M, S],
          "margin-left": [M, S],
          padding: [M, S],
          "padding-top": [M, S],
          "padding-right": [M, S],
          "padding-bottom": [M, S],
          "padding-left": [M, S],
          "outline-width": [M, S],
          opacity: [M, b],
          top: [M, I],
          right: [M, I],
          bottom: [M, I],
          left: [M, I],
          "font-size": [M, I],
          "text-indent": [M, I],
          "word-spacing": [M, I],
          width: [M, I],
          "min-width": [M, I],
          "max-width": [M, I],
          height: [M, I],
          "min-height": [M, I],
          "max-height": [M, I],
          "line-height": [M, P],
          "scroll-top": [Q, b, "scrollTop"],
          "scroll-left": [Q, b, "scrollLeft"]
        },
        ve = {};
      W.transform && (K.transform = [te], ve = {
        x: [I, "translateX"],
        y: [I, "translateY"],
        rotate: [x],
        rotateX: [x],
        rotateY: [x],
        scale: [b],
        scaleX: [b],
        scaleY: [b],
        skew: [x],
        skewX: [x],
        skewY: [x]
      }), W.transform && W.backface && (ve.z = [I, "translateZ"], ve.rotateZ = [x], ve.scaleZ = [b], ve.perspective = [S]);
      var Ae = /ms/,
        Pe = /s|\./;
      return e.tram = t
    }(window.jQuery)
  });
  var cc = E((Hte, hc) => {
    var sw = window.$,
      ow = so() && sw.tram;
    hc.exports = function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        i = Object.prototype,
        n = Function.prototype,
        a = r.push,
        s = r.slice,
        o = r.concat,
        l = i.toString,
        p = i.hasOwnProperty,
        u = r.forEach,
        h = r.map,
        v = r.reduce,
        d = r.reduceRight,
        f = r.filter,
        m = r.every,
        c = r.some,
        g = r.indexOf,
        y = r.lastIndexOf,
        b = Array.isArray,
        _ = Object.keys,
        S = n.bind,
        I = e.each = e.forEach = function (R, F, V) {
          if (R == null) return R;
          if (u && R.forEach === u) R.forEach(F, V);
          else if (R.length === +R.length) {
            for (var W = 0, ee = R.length; W < ee; W++)
              if (F.call(V, R[W], W, R) === t) return
          } else
            for (var A = e.keys(R), W = 0, ee = A.length; W < ee; W++)
              if (F.call(V, R[A[W]], A[W], R) === t) return;
          return R
        };
      e.map = e.collect = function (R, F, V) {
        var W = [];
        return R == null ? W : h && R.map === h ? R.map(F, V) : (I(R, function (ee, A, q) {
          W.push(F.call(V, ee, A, q))
        }), W)
      }, e.find = e.detect = function (R, F, V) {
        var W;
        return x(R, function (ee, A, q) {
          if (F.call(V, ee, A, q)) return W = ee, !0
        }), W
      }, e.filter = e.select = function (R, F, V) {
        var W = [];
        return R == null ? W : f && R.filter === f ? R.filter(F, V) : (I(R, function (ee, A, q) {
          F.call(V, ee, A, q) && W.push(ee)
        }), W)
      };
      var x = e.some = e.any = function (R, F, V) {
        F || (F = e.identity);
        var W = !1;
        return R == null ? W : c && R.some === c ? R.some(F, V) : (I(R, function (ee, A, q) {
          if (W || (W = F.call(V, ee, A, q))) return t
        }), !!W)
      };
      e.contains = e.include = function (R, F) {
        return R == null ? !1 : g && R.indexOf === g ? R.indexOf(F) != -1 : x(R, function (V) {
          return V === F
        })
      }, e.delay = function (R, F) {
        var V = s.call(arguments, 2);
        return setTimeout(function () {
          return R.apply(null, V)
        }, F)
      }, e.defer = function (R) {
        return e.delay.apply(e, [R, 1].concat(s.call(arguments, 1)))
      }, e.throttle = function (R) {
        var F, V, W;
        return function () {
          F || (F = !0, V = arguments, W = this, ow.frame(function () {
            F = !1, R.apply(W, V)
          }))
        }
      }, e.debounce = function (R, F, V) {
        var W, ee, A, q, G, C = function () {
          var w = e.now() - q;
          w < F ? W = setTimeout(C, F - w) : (W = null, V || (G = R.apply(A, ee), A = ee = null))
        };
        return function () {
          A = this, ee = arguments, q = e.now();
          var w = V && !W;
          return W || (W = setTimeout(C, F)), w && (G = R.apply(A, ee), A = ee = null), G
        }
      }, e.defaults = function (R) {
        if (!e.isObject(R)) return R;
        for (var F = 1, V = arguments.length; F < V; F++) {
          var W = arguments[F];
          for (var ee in W) R[ee] === void 0 && (R[ee] = W[ee])
        }
        return R
      }, e.keys = function (R) {
        if (!e.isObject(R)) return [];
        if (_) return _(R);
        var F = [];
        for (var V in R) e.has(R, V) && F.push(V);
        return F
      }, e.has = function (R, F) {
        return p.call(R, F)
      }, e.isObject = function (R) {
        return R === Object(R)
      }, e.now = Date.now || function () {
        return new Date().getTime()
      }, e.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var P = /(.)^/,
        L = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\u2028|\u2029/g,
        O = function (R) {
          return "\\" + L[R]
        },
        B = /^\s*(\w|\$)+\s*$/;
      return e.template = function (R, F, V) {
        !F && V && (F = V), F = e.defaults({}, F, e.templateSettings);
        var W = RegExp([(F.escape || P).source, (F.interpolate || P).source, (F.evaluate || P).source].join("|") + "|$", "g"),
          ee = 0,
          A = "__p+='";
        R.replace(W, function (w, M, k, Q, te) {
          return A += R.slice(ee, te).replace(D, O), ee = te + w.length, M ? A += `'+
((__t=(` + M + `))==null?'':_.escape(__t))+
'` : k ? A += `'+
((__t=(` + k + `))==null?'':__t)+
'` : Q && (A += `';
` + Q + `
__p+='`), w
        }), A += `';
`;
        var q = F.variable;
        if (q) {
          if (!B.test(q)) throw new Error("variable is not a bare identifier: " + q)
        } else A = `with(obj||{}){
` + A + `}
`, q = "obj";
        A = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + A + `return __p;
`;
        var G;
        try {
          G = new Function(F.variable || "obj", "_", A)
        } catch (w) {
          throw w.source = A, w
        }
        var C = function (w) {
          return G.call(this, w, e)
        };
        return C.source = "function(" + q + `){
` + A + "}", C
      }, e
    }()
  });
  var Ze = E((jte, Ec) => {
    var _e = {},
      Ur = {},
      Xr = [],
      lo = window.Webflow || [],
      nr = window.jQuery,
      xt = nr(window),
      lw = nr(document),
      Dt = nr.isFunction,
      St = _e._ = cc(),
      pc = _e.tram = so() && nr.tram,
      jn = !1,
      uo = !1;
    pc.config.hideBackface = !1;
    pc.config.keepInherited = !0;
    _e.define = function (e, t, r) {
      Ur[e] && mc(Ur[e]);
      var i = Ur[e] = t(nr, St, r) || {};
      return dc(i), i
    };
    _e.require = function (e) {
      return Ur[e]
    };

    function dc(e) {
      _e.env() && (Dt(e.design) && xt.on("__wf_design", e.design), Dt(e.preview) && xt.on("__wf_preview", e.preview)), Dt(e.destroy) && xt.on("__wf_destroy", e.destroy), e.ready && Dt(e.ready) && uw(e)
    }

    function uw(e) {
      if (jn) {
        e.ready();
        return
      }
      St.contains(Xr, e.ready) || Xr.push(e.ready)
    }

    function mc(e) {
      Dt(e.design) && xt.off("__wf_design", e.design), Dt(e.preview) && xt.off("__wf_preview", e.preview), Dt(e.destroy) && xt.off("__wf_destroy", e.destroy), e.ready && Dt(e.ready) && hw(e)
    }

    function hw(e) {
      Xr = St.filter(Xr, function (t) {
        return t !== e.ready
      })
    }
    _e.push = function (e) {
      if (jn) {
        Dt(e) && e();
        return
      }
      lo.push(e)
    };
    _e.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top
    };
    var Hn = navigator.userAgent.toLowerCase(),
      vc = _e.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      cw = _e.env.chrome = /chrome/.test(Hn) && /Google/.test(navigator.vendor) && parseInt(Hn.match(/chrome\/(\d+)\./)[1], 10),
      fw = _e.env.ios = /(ipod|iphone|ipad)/.test(Hn);
    _e.env.safari = /safari/.test(Hn) && !cw && !fw;
    var oo;
    vc && lw.on("touchstart mousedown", function (e) {
      oo = e.target
    });
    _e.validClick = vc ? function (e) {
      return e === oo || nr.contains(e, oo)
    } : function () {
      return !0
    };
    var gc = "resize.webflow orientationchange.webflow load.webflow",
      pw = "scroll.webflow " + gc;
    _e.resize = ho(xt, gc);
    _e.scroll = ho(xt, pw);
    _e.redraw = ho();

    function ho(e, t) {
      var r = [],
        i = {};
      return i.up = St.throttle(function (n) {
        St.each(r, function (a) {
          a(n)
        })
      }), e && t && e.on(t, i.up), i.on = function (n) {
        typeof n == "function" && (St.contains(r, n) || r.push(n))
      }, i.off = function (n) {
        if (!arguments.length) {
          r = [];
          return
        }
        r = St.filter(r, function (a) {
          return a !== n
        })
      }, i
    }
    _e.location = function (e) {
      window.location = e
    };
    _e.env() && (_e.location = function () {});
    _e.ready = function () {
      jn = !0, uo ? dw() : St.each(Xr, fc), St.each(lo, fc), _e.resize.up()
    };

    function fc(e) {
      Dt(e) && e()
    }

    function dw() {
      uo = !1, St.each(Ur, dc)
    }
    var Tr;
    _e.load = function (e) {
      Tr.then(e)
    };

    function yc() {
      Tr && (Tr.reject(), xt.off("load", Tr.resolve)), Tr = new nr.Deferred, xt.on("load", Tr.resolve)
    }
    _e.destroy = function (e) {
      e = e || {}, uo = !0, xt.triggerHandler("__wf_destroy"), e.domready != null && (jn = e.domready), St.each(Ur, mc), _e.resize.off(), _e.scroll.off(), _e.redraw.off(), Xr = [], lo = [], Tr.state() === "pending" && yc()
    };
    nr(_e.ready);
    yc();
    Ec.exports = window.Webflow = _e
  });
  var ht = E((Wte, Fi) => {
    function mw(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Fi.exports = mw, Fi.exports.__esModule = !0, Fi.exports.default = Fi.exports
  });
  var Ar = E((Ute, Ut) => {
    function co() {
      return Ut.exports = co = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
        }
        return e
      }, Ut.exports.__esModule = !0, Ut.exports.default = Ut.exports, co.apply(this, arguments)
    }
    Ut.exports = co, Ut.exports.__esModule = !0, Ut.exports.default = Ut.exports
  });
  var bc = E((Xte, qi) => {
    function vw(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }
    qi.exports = vw, qi.exports.__esModule = !0, qi.exports.default = qi.exports
  });
  var fo = E(($te, _c) => {
    function gw(e, t, r, i) {
      for (var n = e.length, a = r + (i ? 1 : -1); i ? a-- : ++a < n;)
        if (t(e[a], a, e)) return a;
      return -1
    }
    _c.exports = gw
  });
  var xc = E((Kte, Sc) => {
    function yw() {
      this.__data__ = [], this.size = 0
    }
    Sc.exports = yw
  });
  var Wn = E((Yte, Ic) => {
    function Ew(e, t) {
      return e === t || e !== e && t !== t
    }
    Ic.exports = Ew
  });
  var Li = E((Qte, Tc) => {
    var bw = Wn();

    function _w(e, t) {
      for (var r = e.length; r--;)
        if (bw(e[r][0], t)) return r;
      return -1
    }
    Tc.exports = _w
  });
  var Pc = E((Zte, Ac) => {
    var Sw = Li(),
      xw = Array.prototype,
      Iw = xw.splice;

    function Tw(e) {
      var t = this.__data__,
        r = Sw(t, e);
      if (r < 0) return !1;
      var i = t.length - 1;
      return r == i ? t.pop() : Iw.call(t, r, 1), --this.size, !0
    }
    Ac.exports = Tw
  });
  var Cc = E((Jte, wc) => {
    var Aw = Li();

    function Pw(e) {
      var t = this.__data__,
        r = Aw(t, e);
      return r < 0 ? void 0 : t[r][1]
    }
    wc.exports = Pw
  });
  var Mc = E((ere, Oc) => {
    var ww = Li();

    function Cw(e) {
      return ww(this.__data__, e) > -1
    }
    Oc.exports = Cw
  });
  var Dc = E((tre, Rc) => {
    var Ow = Li();

    function Mw(e, t) {
      var r = this.__data__,
        i = Ow(r, e);
      return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
    }
    Rc.exports = Mw
  });
  var ki = E((rre, Fc) => {
    var Rw = xc(),
      Dw = Pc(),
      Fw = Cc(),
      qw = Mc(),
      Lw = Dc();

    function $r(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var i = e[t];
        this.set(i[0], i[1])
      }
    }
    $r.prototype.clear = Rw;
    $r.prototype.delete = Dw;
    $r.prototype.get = Fw;
    $r.prototype.has = qw;
    $r.prototype.set = Lw;
    Fc.exports = $r
  });
  var Lc = E((ire, qc) => {
    var kw = ki();

    function Nw() {
      this.__data__ = new kw, this.size = 0
    }
    qc.exports = Nw
  });
  var Nc = E((nre, kc) => {
    function Bw(e) {
      var t = this.__data__,
        r = t.delete(e);
      return this.size = t.size, r
    }
    kc.exports = Bw
  });
  var Vc = E((are, Bc) => {
    function Vw(e) {
      return this.__data__.get(e)
    }
    Bc.exports = Vw
  });
  var zc = E((sre, Gc) => {
    function Gw(e) {
      return this.__data__.has(e)
    }
    Gc.exports = Gw
  });
  var po = E((ore, Hc) => {
    var zw = typeof global == "object" && global && global.Object === Object && global;
    Hc.exports = zw
  });
  var It = E((lre, jc) => {
    var Hw = po(),
      jw = typeof self == "object" && self && self.Object === Object && self,
      Ww = Hw || jw || Function("return this")();
    jc.exports = Ww
  });
  var Kr = E((ure, Wc) => {
    var Uw = It(),
      Xw = Uw.Symbol;
    Wc.exports = Xw
  });
  var Kc = E((hre, $c) => {
    var Uc = Kr(),
      Xc = Object.prototype,
      $w = Xc.hasOwnProperty,
      Kw = Xc.toString,
      Ni = Uc ? Uc.toStringTag : void 0;

    function Yw(e) {
      var t = $w.call(e, Ni),
        r = e[Ni];
      try {
        e[Ni] = void 0;
        var i = !0
      } catch {}
      var n = Kw.call(e);
      return i && (t ? e[Ni] = r : delete e[Ni]), n
    }
    $c.exports = Yw
  });
  var Qc = E((cre, Yc) => {
    var Qw = Object.prototype,
      Zw = Qw.toString;

    function Jw(e) {
      return Zw.call(e)
    }
    Yc.exports = Jw
  });
  var ar = E((fre, ef) => {
    var Zc = Kr(),
      eC = Kc(),
      tC = Qc(),
      rC = "[object Null]",
      iC = "[object Undefined]",
      Jc = Zc ? Zc.toStringTag : void 0;

    function nC(e) {
      return e == null ? e === void 0 ? iC : rC : Jc && Jc in Object(e) ? eC(e) : tC(e)
    }
    ef.exports = nC
  });
  var Ft = E((pre, tf) => {
    function aC(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function")
    }
    tf.exports = aC
  });
  var mo = E((dre, rf) => {
    var sC = ar(),
      oC = Ft(),
      lC = "[object AsyncFunction]",
      uC = "[object Function]",
      hC = "[object GeneratorFunction]",
      cC = "[object Proxy]";

    function fC(e) {
      if (!oC(e)) return !1;
      var t = sC(e);
      return t == uC || t == hC || t == lC || t == cC
    }
    rf.exports = fC
  });
  var af = E((mre, nf) => {
    var pC = It(),
      dC = pC["__core-js_shared__"];
    nf.exports = dC
  });
  var lf = E((vre, of ) => {
    var vo = af(),
      sf = function () {
        var e = /[^.]+$/.exec(vo && vo.keys && vo.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
      }();

    function mC(e) {
      return !!sf && sf in e
    } of .exports = mC
  });
  var go = E((gre, uf) => {
    var vC = Function.prototype,
      gC = vC.toString;

    function yC(e) {
      if (e != null) {
        try {
          return gC.call(e)
        } catch {}
        try {
          return e + ""
        } catch {}
      }
      return ""
    }
    uf.exports = yC
  });
  var cf = E((yre, hf) => {
    var EC = mo(),
      bC = lf(),
      _C = Ft(),
      SC = go(),
      xC = /[\\^$.*+?()[\]{}|]/g,
      IC = /^\[object .+?Constructor\]$/,
      TC = Function.prototype,
      AC = Object.prototype,
      PC = TC.toString,
      wC = AC.hasOwnProperty,
      CC = RegExp("^" + PC.call(wC).replace(xC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function OC(e) {
      if (!_C(e) || bC(e)) return !1;
      var t = EC(e) ? CC : IC;
      return t.test(SC(e))
    }
    hf.exports = OC
  });
  var pf = E((Ere, ff) => {
    function MC(e, t) {
      return e ? . [t]
    }
    ff.exports = MC
  });
  var sr = E((bre, df) => {
    var RC = cf(),
      DC = pf();

    function FC(e, t) {
      var r = DC(e, t);
      return RC(r) ? r : void 0
    }
    df.exports = FC
  });
  var Un = E((_re, mf) => {
    var qC = sr(),
      LC = It(),
      kC = qC(LC, "Map");
    mf.exports = kC
  });
  var Bi = E((Sre, vf) => {
    var NC = sr(),
      BC = NC(Object, "create");
    vf.exports = BC
  });
  var Ef = E((xre, yf) => {
    var gf = Bi();

    function VC() {
      this.__data__ = gf ? gf(null) : {}, this.size = 0
    }
    yf.exports = VC
  });
  var _f = E((Ire, bf) => {
    function GC(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t
    }
    bf.exports = GC
  });
  var xf = E((Tre, Sf) => {
    var zC = Bi(),
      HC = "__lodash_hash_undefined__",
      jC = Object.prototype,
      WC = jC.hasOwnProperty;

    function UC(e) {
      var t = this.__data__;
      if (zC) {
        var r = t[e];
        return r === HC ? void 0 : r
      }
      return WC.call(t, e) ? t[e] : void 0
    }
    Sf.exports = UC
  });
  var Tf = E((Are, If) => {
    var XC = Bi(),
      $C = Object.prototype,
      KC = $C.hasOwnProperty;

    function YC(e) {
      var t = this.__data__;
      return XC ? t[e] !== void 0 : KC.call(t, e)
    }
    If.exports = YC
  });
  var Pf = E((Pre, Af) => {
    var QC = Bi(),
      ZC = "__lodash_hash_undefined__";

    function JC(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = QC && t === void 0 ? ZC : t, this
    }
    Af.exports = JC
  });
  var Cf = E((wre, wf) => {
    var eO = Ef(),
      tO = _f(),
      rO = xf(),
      iO = Tf(),
      nO = Pf();

    function Yr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var i = e[t];
        this.set(i[0], i[1])
      }
    }
    Yr.prototype.clear = eO;
    Yr.prototype.delete = tO;
    Yr.prototype.get = rO;
    Yr.prototype.has = iO;
    Yr.prototype.set = nO;
    wf.exports = Yr
  });
  var Rf = E((Cre, Mf) => {
    var Of = Cf(),
      aO = ki(),
      sO = Un();

    function oO() {
      this.size = 0, this.__data__ = {
        hash: new Of,
        map: new(sO || aO),
        string: new Of
      }
    }
    Mf.exports = oO
  });
  var Ff = E((Ore, Df) => {
    function lO(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    Df.exports = lO
  });
  var Vi = E((Mre, qf) => {
    var uO = Ff();

    function hO(e, t) {
      var r = e.__data__;
      return uO(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    qf.exports = hO
  });
  var kf = E((Rre, Lf) => {
    var cO = Vi();

    function fO(e) {
      var t = cO(this, e).delete(e);
      return this.size -= t ? 1 : 0, t
    }
    Lf.exports = fO
  });
  var Bf = E((Dre, Nf) => {
    var pO = Vi();

    function dO(e) {
      return pO(this, e).get(e)
    }
    Nf.exports = dO
  });
  var Gf = E((Fre, Vf) => {
    var mO = Vi();

    function vO(e) {
      return mO(this, e).has(e)
    }
    Vf.exports = vO
  });
  var Hf = E((qre, zf) => {
    var gO = Vi();

    function yO(e, t) {
      var r = gO(this, e),
        i = r.size;
      return r.set(e, t), this.size += r.size == i ? 0 : 1, this
    }
    zf.exports = yO
  });
  var Xn = E((Lre, jf) => {
    var EO = Rf(),
      bO = kf(),
      _O = Bf(),
      SO = Gf(),
      xO = Hf();

    function Qr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var i = e[t];
        this.set(i[0], i[1])
      }
    }
    Qr.prototype.clear = EO;
    Qr.prototype.delete = bO;
    Qr.prototype.get = _O;
    Qr.prototype.has = SO;
    Qr.prototype.set = xO;
    jf.exports = Qr
  });
  var Uf = E((kre, Wf) => {
    var IO = ki(),
      TO = Un(),
      AO = Xn(),
      PO = 200;

    function wO(e, t) {
      var r = this.__data__;
      if (r instanceof IO) {
        var i = r.__data__;
        if (!TO || i.length < PO - 1) return i.push([e, t]), this.size = ++r.size, this;
        r = this.__data__ = new AO(i)
      }
      return r.set(e, t), this.size = r.size, this
    }
    Wf.exports = wO
  });
  var yo = E((Nre, Xf) => {
    var CO = ki(),
      OO = Lc(),
      MO = Nc(),
      RO = Vc(),
      DO = zc(),
      FO = Uf();

    function Zr(e) {
      var t = this.__data__ = new CO(e);
      this.size = t.size
    }
    Zr.prototype.clear = OO;
    Zr.prototype.delete = MO;
    Zr.prototype.get = RO;
    Zr.prototype.has = DO;
    Zr.prototype.set = FO;
    Xf.exports = Zr
  });
  var Kf = E((Bre, $f) => {
    var qO = "__lodash_hash_undefined__";

    function LO(e) {
      return this.__data__.set(e, qO), this
    }
    $f.exports = LO
  });
  var Qf = E((Vre, Yf) => {
    function kO(e) {
      return this.__data__.has(e)
    }
    Yf.exports = kO
  });
  var Jf = E((Gre, Zf) => {
    var NO = Xn(),
      BO = Kf(),
      VO = Qf();

    function $n(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new NO; ++t < r;) this.add(e[t])
    }
    $n.prototype.add = $n.prototype.push = BO;
    $n.prototype.has = VO;
    Zf.exports = $n
  });
  var tp = E((zre, ep) => {
    function GO(e, t) {
      for (var r = -1, i = e == null ? 0 : e.length; ++r < i;)
        if (t(e[r], r, e)) return !0;
      return !1
    }
    ep.exports = GO
  });
  var ip = E((Hre, rp) => {
    function zO(e, t) {
      return e.has(t)
    }
    rp.exports = zO
  });
  var Eo = E((jre, np) => {
    var HO = Jf(),
      jO = tp(),
      WO = ip(),
      UO = 1,
      XO = 2;

    function $O(e, t, r, i, n, a) {
      var s = r & UO,
        o = e.length,
        l = t.length;
      if (o != l && !(s && l > o)) return !1;
      var p = a.get(e),
        u = a.get(t);
      if (p && u) return p == t && u == e;
      var h = -1,
        v = !0,
        d = r & XO ? new HO : void 0;
      for (a.set(e, t), a.set(t, e); ++h < o;) {
        var f = e[h],
          m = t[h];
        if (i) var c = s ? i(m, f, h, t, e, a) : i(f, m, h, e, t, a);
        if (c !== void 0) {
          if (c) continue;
          v = !1;
          break
        }
        if (d) {
          if (!jO(t, function (g, y) {
              if (!WO(d, y) && (f === g || n(f, g, r, i, a))) return d.push(y)
            })) {
            v = !1;
            break
          }
        } else if (!(f === m || n(f, m, r, i, a))) {
          v = !1;
          break
        }
      }
      return a.delete(e), a.delete(t), v
    }
    np.exports = $O
  });
  var sp = E((Wre, ap) => {
    var KO = It(),
      YO = KO.Uint8Array;
    ap.exports = YO
  });
  var lp = E((Ure, op) => {
    function QO(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (i, n) {
        r[++t] = [n, i]
      }), r
    }
    op.exports = QO
  });
  var hp = E((Xre, up) => {
    function ZO(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (i) {
        r[++t] = i
      }), r
    }
    up.exports = ZO
  });
  var mp = E(($re, dp) => {
    var cp = Kr(),
      fp = sp(),
      JO = Wn(),
      eM = Eo(),
      tM = lp(),
      rM = hp(),
      iM = 1,
      nM = 2,
      aM = "[object Boolean]",
      sM = "[object Date]",
      oM = "[object Error]",
      lM = "[object Map]",
      uM = "[object Number]",
      hM = "[object RegExp]",
      cM = "[object Set]",
      fM = "[object String]",
      pM = "[object Symbol]",
      dM = "[object ArrayBuffer]",
      mM = "[object DataView]",
      pp = cp ? cp.prototype : void 0,
      bo = pp ? pp.valueOf : void 0;

    function vM(e, t, r, i, n, a, s) {
      switch (r) {
        case mM:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          e = e.buffer, t = t.buffer;
        case dM:
          return !(e.byteLength != t.byteLength || !a(new fp(e), new fp(t)));
        case aM:
        case sM:
        case uM:
          return JO(+e, +t);
        case oM:
          return e.name == t.name && e.message == t.message;
        case hM:
        case fM:
          return e == t + "";
        case lM:
          var o = tM;
        case cM:
          var l = i & iM;
          if (o || (o = rM), e.size != t.size && !l) return !1;
          var p = s.get(e);
          if (p) return p == t;
          i |= nM, s.set(e, t);
          var u = eM(o(e), o(t), i, n, a, s);
          return s.delete(e), u;
        case pM:
          if (bo) return bo.call(e) == bo.call(t)
      }
      return !1
    }
    dp.exports = vM
  });
  var Kn = E((Kre, vp) => {
    function gM(e, t) {
      for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
      return e
    }
    vp.exports = gM
  });
  var He = E((Yre, gp) => {
    var yM = Array.isArray;
    gp.exports = yM
  });
  var _o = E((Qre, yp) => {
    var EM = Kn(),
      bM = He();

    function _M(e, t, r) {
      var i = t(e);
      return bM(e) ? i : EM(i, r(e))
    }
    yp.exports = _M
  });
  var bp = E((Zre, Ep) => {
    function SM(e, t) {
      for (var r = -1, i = e == null ? 0 : e.length, n = 0, a = []; ++r < i;) {
        var s = e[r];
        t(s, r, e) && (a[n++] = s)
      }
      return a
    }
    Ep.exports = SM
  });
  var So = E((Jre, _p) => {
    function xM() {
      return []
    }
    _p.exports = xM
  });
  var xo = E((eie, xp) => {
    var IM = bp(),
      TM = So(),
      AM = Object.prototype,
      PM = AM.propertyIsEnumerable,
      Sp = Object.getOwnPropertySymbols,
      wM = Sp ? function (e) {
        return e == null ? [] : (e = Object(e), IM(Sp(e), function (t) {
          return PM.call(e, t)
        }))
      } : TM;
    xp.exports = wM
  });
  var Tp = E((tie, Ip) => {
    function CM(e, t) {
      for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
      return i
    }
    Ip.exports = CM
  });
  var Xt = E((rie, Ap) => {
    function OM(e) {
      return e != null && typeof e == "object"
    }
    Ap.exports = OM
  });
  var wp = E((iie, Pp) => {
    var MM = ar(),
      RM = Xt(),
      DM = "[object Arguments]";

    function FM(e) {
      return RM(e) && MM(e) == DM
    }
    Pp.exports = FM
  });
  var Gi = E((nie, Mp) => {
    var Cp = wp(),
      qM = Xt(),
      Op = Object.prototype,
      LM = Op.hasOwnProperty,
      kM = Op.propertyIsEnumerable,
      NM = Cp(function () {
        return arguments
      }()) ? Cp : function (e) {
        return qM(e) && LM.call(e, "callee") && !kM.call(e, "callee")
      };
    Mp.exports = NM
  });
  var Dp = E((aie, Rp) => {
    function BM() {
      return !1
    }
    Rp.exports = BM
  });
  var Yn = E((zi, Jr) => {
    var VM = It(),
      GM = Dp(),
      Lp = typeof zi == "object" && zi && !zi.nodeType && zi,
      Fp = Lp && typeof Jr == "object" && Jr && !Jr.nodeType && Jr,
      zM = Fp && Fp.exports === Lp,
      qp = zM ? VM.Buffer : void 0,
      HM = qp ? qp.isBuffer : void 0,
      jM = HM || GM;
    Jr.exports = jM
  });
  var Qn = E((sie, kp) => {
    var WM = 9007199254740991,
      UM = /^(?:0|[1-9]\d*)$/;

    function XM(e, t) {
      var r = typeof e;
      return t = t ? ? WM, !!t && (r == "number" || r != "symbol" && UM.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    kp.exports = XM
  });
  var Zn = E((oie, Np) => {
    var $M = 9007199254740991;

    function KM(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $M
    }
    Np.exports = KM
  });
  var Vp = E((lie, Bp) => {
    var YM = ar(),
      QM = Zn(),
      ZM = Xt(),
      JM = "[object Arguments]",
      eR = "[object Array]",
      tR = "[object Boolean]",
      rR = "[object Date]",
      iR = "[object Error]",
      nR = "[object Function]",
      aR = "[object Map]",
      sR = "[object Number]",
      oR = "[object Object]",
      lR = "[object RegExp]",
      uR = "[object Set]",
      hR = "[object String]",
      cR = "[object WeakMap]",
      fR = "[object ArrayBuffer]",
      pR = "[object DataView]",
      dR = "[object Float32Array]",
      mR = "[object Float64Array]",
      vR = "[object Int8Array]",
      gR = "[object Int16Array]",
      yR = "[object Int32Array]",
      ER = "[object Uint8Array]",
      bR = "[object Uint8ClampedArray]",
      _R = "[object Uint16Array]",
      SR = "[object Uint32Array]",
      Ie = {};
    Ie[dR] = Ie[mR] = Ie[vR] = Ie[gR] = Ie[yR] = Ie[ER] = Ie[bR] = Ie[_R] = Ie[SR] = !0;
    Ie[JM] = Ie[eR] = Ie[fR] = Ie[tR] = Ie[pR] = Ie[rR] = Ie[iR] = Ie[nR] = Ie[aR] = Ie[sR] = Ie[oR] = Ie[lR] = Ie[uR] = Ie[hR] = Ie[cR] = !1;

    function xR(e) {
      return ZM(e) && QM(e.length) && !!Ie[YM(e)]
    }
    Bp.exports = xR
  });
  var zp = E((uie, Gp) => {
    function IR(e) {
      return function (t) {
        return e(t)
      }
    }
    Gp.exports = IR
  });
  var jp = E((Hi, ei) => {
    var TR = po(),
      Hp = typeof Hi == "object" && Hi && !Hi.nodeType && Hi,
      ji = Hp && typeof ei == "object" && ei && !ei.nodeType && ei,
      AR = ji && ji.exports === Hp,
      Io = AR && TR.process,
      PR = function () {
        try {
          var e = ji && ji.require && ji.require("util").types;
          return e || Io && Io.binding && Io.binding("util")
        } catch {}
      }();
    ei.exports = PR
  });
  var Jn = E((hie, Xp) => {
    var wR = Vp(),
      CR = zp(),
      Wp = jp(),
      Up = Wp && Wp.isTypedArray,
      OR = Up ? CR(Up) : wR;
    Xp.exports = OR
  });
  var To = E((cie, $p) => {
    var MR = Tp(),
      RR = Gi(),
      DR = He(),
      FR = Yn(),
      qR = Qn(),
      LR = Jn(),
      kR = Object.prototype,
      NR = kR.hasOwnProperty;

    function BR(e, t) {
      var r = DR(e),
        i = !r && RR(e),
        n = !r && !i && FR(e),
        a = !r && !i && !n && LR(e),
        s = r || i || n || a,
        o = s ? MR(e.length, String) : [],
        l = o.length;
      for (var p in e)(t || NR.call(e, p)) && !(s && (p == "length" || n && (p == "offset" || p == "parent") || a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || qR(p, l))) && o.push(p);
      return o
    }
    $p.exports = BR
  });
  var ea = E((fie, Kp) => {
    var VR = Object.prototype;

    function GR(e) {
      var t = e && e.constructor,
        r = typeof t == "function" && t.prototype || VR;
      return e === r
    }
    Kp.exports = GR
  });
  var Ao = E((pie, Yp) => {
    function zR(e, t) {
      return function (r) {
        return e(t(r))
      }
    }
    Yp.exports = zR
  });
  var Zp = E((die, Qp) => {
    var HR = Ao(),
      jR = HR(Object.keys, Object);
    Qp.exports = jR
  });
  var ta = E((mie, Jp) => {
    var WR = ea(),
      UR = Zp(),
      XR = Object.prototype,
      $R = XR.hasOwnProperty;

    function KR(e) {
      if (!WR(e)) return UR(e);
      var t = [];
      for (var r in Object(e)) $R.call(e, r) && r != "constructor" && t.push(r);
      return t
    }
    Jp.exports = KR
  });
  var Pr = E((vie, ed) => {
    var YR = mo(),
      QR = Zn();

    function ZR(e) {
      return e != null && QR(e.length) && !YR(e)
    }
    ed.exports = ZR
  });
  var Wi = E((gie, td) => {
    var JR = To(),
      eD = ta(),
      tD = Pr();

    function rD(e) {
      return tD(e) ? JR(e) : eD(e)
    }
    td.exports = rD
  });
  var id = E((yie, rd) => {
    var iD = _o(),
      nD = xo(),
      aD = Wi();

    function sD(e) {
      return iD(e, aD, nD)
    }
    rd.exports = sD
  });
  var sd = E((Eie, ad) => {
    var nd = id(),
      oD = 1,
      lD = Object.prototype,
      uD = lD.hasOwnProperty;

    function hD(e, t, r, i, n, a) {
      var s = r & oD,
        o = nd(e),
        l = o.length,
        p = nd(t),
        u = p.length;
      if (l != u && !s) return !1;
      for (var h = l; h--;) {
        var v = o[h];
        if (!(s ? v in t : uD.call(t, v))) return !1
      }
      var d = a.get(e),
        f = a.get(t);
      if (d && f) return d == t && f == e;
      var m = !0;
      a.set(e, t), a.set(t, e);
      for (var c = s; ++h < l;) {
        v = o[h];
        var g = e[v],
          y = t[v];
        if (i) var b = s ? i(y, g, v, t, e, a) : i(g, y, v, e, t, a);
        if (!(b === void 0 ? g === y || n(g, y, r, i, a) : b)) {
          m = !1;
          break
        }
        c || (c = v == "constructor")
      }
      if (m && !c) {
        var _ = e.constructor,
          S = t.constructor;
        _ != S && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof S == "function" && S instanceof S) && (m = !1)
      }
      return a.delete(e), a.delete(t), m
    }
    ad.exports = hD
  });
  var ld = E((bie, od) => {
    var cD = sr(),
      fD = It(),
      pD = cD(fD, "DataView");
    od.exports = pD
  });
  var hd = E((_ie, ud) => {
    var dD = sr(),
      mD = It(),
      vD = dD(mD, "Promise");
    ud.exports = vD
  });
  var fd = E((Sie, cd) => {
    var gD = sr(),
      yD = It(),
      ED = gD(yD, "Set");
    cd.exports = ED
  });
  var Po = E((xie, pd) => {
    var bD = sr(),
      _D = It(),
      SD = bD(_D, "WeakMap");
    pd.exports = SD
  });
  var ra = E((Iie, bd) => {
    var wo = ld(),
      Co = Un(),
      Oo = hd(),
      Mo = fd(),
      Ro = Po(),
      Ed = ar(),
      ti = go(),
      dd = "[object Map]",
      xD = "[object Object]",
      md = "[object Promise]",
      vd = "[object Set]",
      gd = "[object WeakMap]",
      yd = "[object DataView]",
      ID = ti(wo),
      TD = ti(Co),
      AD = ti(Oo),
      PD = ti(Mo),
      wD = ti(Ro),
      wr = Ed;
    (wo && wr(new wo(new ArrayBuffer(1))) != yd || Co && wr(new Co) != dd || Oo && wr(Oo.resolve()) != md || Mo && wr(new Mo) != vd || Ro && wr(new Ro) != gd) && (wr = function (e) {
      var t = Ed(e),
        r = t == xD ? e.constructor : void 0,
        i = r ? ti(r) : "";
      if (i) switch (i) {
        case ID:
          return yd;
        case TD:
          return dd;
        case AD:
          return md;
        case PD:
          return vd;
        case wD:
          return gd
      }
      return t
    });
    bd.exports = wr
  });
  var wd = E((Tie, Pd) => {
    var Do = yo(),
      CD = Eo(),
      OD = mp(),
      MD = sd(),
      _d = ra(),
      Sd = He(),
      xd = Yn(),
      RD = Jn(),
      DD = 1,
      Id = "[object Arguments]",
      Td = "[object Array]",
      ia = "[object Object]",
      FD = Object.prototype,
      Ad = FD.hasOwnProperty;

    function qD(e, t, r, i, n, a) {
      var s = Sd(e),
        o = Sd(t),
        l = s ? Td : _d(e),
        p = o ? Td : _d(t);
      l = l == Id ? ia : l, p = p == Id ? ia : p;
      var u = l == ia,
        h = p == ia,
        v = l == p;
      if (v && xd(e)) {
        if (!xd(t)) return !1;
        s = !0, u = !1
      }
      if (v && !u) return a || (a = new Do), s || RD(e) ? CD(e, t, r, i, n, a) : OD(e, t, l, r, i, n, a);
      if (!(r & DD)) {
        var d = u && Ad.call(e, "__wrapped__"),
          f = h && Ad.call(t, "__wrapped__");
        if (d || f) {
          var m = d ? e.value() : e,
            c = f ? t.value() : t;
          return a || (a = new Do), n(m, c, r, i, a)
        }
      }
      return v ? (a || (a = new Do), MD(e, t, r, i, n, a)) : !1
    }
    Pd.exports = qD
  });
  var Fo = E((Aie, Md) => {
    var LD = wd(),
      Cd = Xt();

    function Od(e, t, r, i, n) {
      return e === t ? !0 : e == null || t == null || !Cd(e) && !Cd(t) ? e !== e && t !== t : LD(e, t, r, i, Od, n)
    }
    Md.exports = Od
  });
  var Dd = E((Pie, Rd) => {
    var kD = yo(),
      ND = Fo(),
      BD = 1,
      VD = 2;

    function GD(e, t, r, i) {
      var n = r.length,
        a = n,
        s = !i;
      if (e == null) return !a;
      for (e = Object(e); n--;) {
        var o = r[n];
        if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
      }
      for (; ++n < a;) {
        o = r[n];
        var l = o[0],
          p = e[l],
          u = o[1];
        if (s && o[2]) {
          if (p === void 0 && !(l in e)) return !1
        } else {
          var h = new kD;
          if (i) var v = i(p, u, l, e, t, h);
          if (!(v === void 0 ? ND(u, p, BD | VD, i, h) : v)) return !1
        }
      }
      return !0
    }
    Rd.exports = GD
  });
  var qo = E((wie, Fd) => {
    var zD = Ft();

    function HD(e) {
      return e === e && !zD(e)
    }
    Fd.exports = HD
  });
  var Ld = E((Cie, qd) => {
    var jD = qo(),
      WD = Wi();

    function UD(e) {
      for (var t = WD(e), r = t.length; r--;) {
        var i = t[r],
          n = e[i];
        t[r] = [i, n, jD(n)]
      }
      return t
    }
    qd.exports = UD
  });
  var Lo = E((Oie, kd) => {
    function XD(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
      }
    }
    kd.exports = XD
  });
  var Bd = E((Mie, Nd) => {
    var $D = Dd(),
      KD = Ld(),
      YD = Lo();

    function QD(e) {
      var t = KD(e);
      return t.length == 1 && t[0][2] ? YD(t[0][0], t[0][1]) : function (r) {
        return r === e || $D(r, e, t)
      }
    }
    Nd.exports = QD
  });
  var Ui = E((Rie, Vd) => {
    var ZD = ar(),
      JD = Xt(),
      eF = "[object Symbol]";

    function tF(e) {
      return typeof e == "symbol" || JD(e) && ZD(e) == eF
    }
    Vd.exports = tF
  });
  var na = E((Die, Gd) => {
    var rF = He(),
      iF = Ui(),
      nF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      aF = /^\w*$/;

    function sF(e, t) {
      if (rF(e)) return !1;
      var r = typeof e;
      return r == "number" || r == "symbol" || r == "boolean" || e == null || iF(e) ? !0 : aF.test(e) || !nF.test(e) || t != null && e in Object(t)
    }
    Gd.exports = sF
  });
  var jd = E((Fie, Hd) => {
    var zd = Xn(),
      oF = "Expected a function";

    function ko(e, t) {
      if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(oF);
      var r = function () {
        var i = arguments,
          n = t ? t.apply(this, i) : i[0],
          a = r.cache;
        if (a.has(n)) return a.get(n);
        var s = e.apply(this, i);
        return r.cache = a.set(n, s) || a, s
      };
      return r.cache = new(ko.Cache || zd), r
    }
    ko.Cache = zd;
    Hd.exports = ko
  });
  var Ud = E((qie, Wd) => {
    var lF = jd(),
      uF = 500;

    function hF(e) {
      var t = lF(e, function (i) {
          return r.size === uF && r.clear(), i
        }),
        r = t.cache;
      return t
    }
    Wd.exports = hF
  });
  var $d = E((Lie, Xd) => {
    var cF = Ud(),
      fF = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      pF = /\\(\\)?/g,
      dF = cF(function (e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(fF, function (r, i, n, a) {
          t.push(n ? a.replace(pF, "$1") : i || r)
        }), t
      });
    Xd.exports = dF
  });
  var No = E((kie, Kd) => {
    function mF(e, t) {
      for (var r = -1, i = e == null ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
      return n
    }
    Kd.exports = mF
  });
  var tm = E((Nie, em) => {
    var Yd = Kr(),
      vF = No(),
      gF = He(),
      yF = Ui(),
      EF = 1 / 0,
      Qd = Yd ? Yd.prototype : void 0,
      Zd = Qd ? Qd.toString : void 0;

    function Jd(e) {
      if (typeof e == "string") return e;
      if (gF(e)) return vF(e, Jd) + "";
      if (yF(e)) return Zd ? Zd.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -EF ? "-0" : t
    }
    em.exports = Jd
  });
  var im = E((Bie, rm) => {
    var bF = tm();

    function _F(e) {
      return e == null ? "" : bF(e)
    }
    rm.exports = _F
  });
  var Xi = E((Vie, nm) => {
    var SF = He(),
      xF = na(),
      IF = $d(),
      TF = im();

    function AF(e, t) {
      return SF(e) ? e : xF(e, t) ? [e] : IF(TF(e))
    }
    nm.exports = AF
  });
  var ri = E((Gie, am) => {
    var PF = Ui(),
      wF = 1 / 0;

    function CF(e) {
      if (typeof e == "string" || PF(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -wF ? "-0" : t
    }
    am.exports = CF
  });
  var aa = E((zie, sm) => {
    var OF = Xi(),
      MF = ri();

    function RF(e, t) {
      t = OF(t, e);
      for (var r = 0, i = t.length; e != null && r < i;) e = e[MF(t[r++])];
      return r && r == i ? e : void 0
    }
    sm.exports = RF
  });
  var sa = E((Hie, om) => {
    var DF = aa();

    function FF(e, t, r) {
      var i = e == null ? void 0 : DF(e, t);
      return i === void 0 ? r : i
    }
    om.exports = FF
  });
  var um = E((jie, lm) => {
    function qF(e, t) {
      return e != null && t in Object(e)
    }
    lm.exports = qF
  });
  var cm = E((Wie, hm) => {
    var LF = Xi(),
      kF = Gi(),
      NF = He(),
      BF = Qn(),
      VF = Zn(),
      GF = ri();

    function zF(e, t, r) {
      t = LF(t, e);
      for (var i = -1, n = t.length, a = !1; ++i < n;) {
        var s = GF(t[i]);
        if (!(a = e != null && r(e, s))) break;
        e = e[s]
      }
      return a || ++i != n ? a : (n = e == null ? 0 : e.length, !!n && VF(n) && BF(s, n) && (NF(e) || kF(e)))
    }
    hm.exports = zF
  });
  var pm = E((Uie, fm) => {
    var HF = um(),
      jF = cm();

    function WF(e, t) {
      return e != null && jF(e, t, HF)
    }
    fm.exports = WF
  });
  var mm = E((Xie, dm) => {
    var UF = Fo(),
      XF = sa(),
      $F = pm(),
      KF = na(),
      YF = qo(),
      QF = Lo(),
      ZF = ri(),
      JF = 1,
      eq = 2;

    function tq(e, t) {
      return KF(e) && YF(t) ? QF(ZF(e), t) : function (r) {
        var i = XF(r, e);
        return i === void 0 && i === t ? $F(r, e) : UF(t, i, JF | eq)
      }
    }
    dm.exports = tq
  });
  var oa = E(($ie, vm) => {
    function rq(e) {
      return e
    }
    vm.exports = rq
  });
  var Bo = E((Kie, gm) => {
    function iq(e) {
      return function (t) {
        return t ? . [e]
      }
    }
    gm.exports = iq
  });
  var Em = E((Yie, ym) => {
    var nq = aa();

    function aq(e) {
      return function (t) {
        return nq(t, e)
      }
    }
    ym.exports = aq
  });
  var _m = E((Qie, bm) => {
    var sq = Bo(),
      oq = Em(),
      lq = na(),
      uq = ri();

    function hq(e) {
      return lq(e) ? sq(uq(e)) : oq(e)
    }
    bm.exports = hq
  });
  var or = E((Zie, Sm) => {
    var cq = Bd(),
      fq = mm(),
      pq = oa(),
      dq = He(),
      mq = _m();

    function vq(e) {
      return typeof e == "function" ? e : e == null ? pq : typeof e == "object" ? dq(e) ? fq(e[0], e[1]) : cq(e) : mq(e)
    }
    Sm.exports = vq
  });
  var Im = E((Jie, xm) => {
    var gq = /\s/;

    function yq(e) {
      for (var t = e.length; t-- && gq.test(e.charAt(t)););
      return t
    }
    xm.exports = yq
  });
  var Am = E((ene, Tm) => {
    var Eq = Im(),
      bq = /^\s+/;

    function _q(e) {
      return e && e.slice(0, Eq(e) + 1).replace(bq, "")
    }
    Tm.exports = _q
  });
  var la = E((tne, Cm) => {
    var Sq = Am(),
      Pm = Ft(),
      xq = Ui(),
      wm = 0 / 0,
      Iq = /^[-+]0x[0-9a-f]+$/i,
      Tq = /^0b[01]+$/i,
      Aq = /^0o[0-7]+$/i,
      Pq = parseInt;

    function wq(e) {
      if (typeof e == "number") return e;
      if (xq(e)) return wm;
      if (Pm(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Pm(t) ? t + "" : t
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = Sq(e);
      var r = Tq.test(e);
      return r || Aq.test(e) ? Pq(e.slice(2), r ? 2 : 8) : Iq.test(e) ? wm : +e
    }
    Cm.exports = wq
  });
  var Rm = E((rne, Mm) => {
    var Cq = la(),
      Om = 1 / 0,
      Oq = 17976931348623157e292;

    function Mq(e) {
      if (!e) return e === 0 ? e : 0;
      if (e = Cq(e), e === Om || e === -Om) {
        var t = e < 0 ? -1 : 1;
        return t * Oq
      }
      return e === e ? e : 0
    }
    Mm.exports = Mq
  });
  var Vo = E((ine, Dm) => {
    var Rq = Rm();

    function Dq(e) {
      var t = Rq(e),
        r = t % 1;
      return t === t ? r ? t - r : t : 0
    }
    Dm.exports = Dq
  });
  var Go = E((nne, Fm) => {
    var Fq = fo(),
      qq = or(),
      Lq = Vo(),
      kq = Math.max;

    function Nq(e, t, r) {
      var i = e == null ? 0 : e.length;
      if (!i) return -1;
      var n = r == null ? 0 : Lq(r);
      return n < 0 && (n = kq(i + n, 0)), Fq(e, qq(t, 3), n)
    }
    Fm.exports = Nq
  });
  var ue = E((ane, qm) => {
    var ua = function (e) {
      return e && e.Math == Math && e
    };
    qm.exports = ua(typeof globalThis == "object" && globalThis) || ua(typeof window == "object" && window) || ua(typeof self == "object" && self) || ua(typeof global == "object" && global) || function () {
      return this
    }() || Function("return this")()
  });
  var Ve = E((sne, Lm) => {
    Lm.exports = function (e) {
      try {
        return !!e()
      } catch {
        return !0
      }
    }
  });
  var Tt = E((one, km) => {
    var Bq = Ve();
    km.exports = !Bq(function () {
      return Object.defineProperty({}, 1, {
        get: function () {
          return 7
        }
      })[1] != 7
    })
  });
  var ct = E((lne, Nm) => {
    var $i = Function.prototype.call;
    Nm.exports = $i.bind ? $i.bind($i) : function () {
      return $i.apply($i, arguments)
    }
  });
  var zm = E(Gm => {
    "use strict";
    var Bm = {}.propertyIsEnumerable,
      Vm = Object.getOwnPropertyDescriptor,
      Vq = Vm && !Bm.call({
        1: 2
      }, 1);
    Gm.f = Vq ? function (t) {
      var r = Vm(this, t);
      return !!r && r.enumerable
    } : Bm
  });
  var Ki = E((hne, Hm) => {
    Hm.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      }
    }
  });
  var Te = E((cne, Wm) => {
    var jm = Function.prototype,
      zo = jm.bind,
      Ho = jm.call,
      Gq = zo && zo.bind(Ho);
    Wm.exports = zo ? function (e) {
      return e && Gq(Ho, e)
    } : function (e) {
      return e && function () {
        return Ho.apply(e, arguments)
      }
    }
  });
  var ii = E((fne, Xm) => {
    var Um = Te(),
      zq = Um({}.toString),
      Hq = Um("".slice);
    Xm.exports = function (e) {
      return Hq(zq(e), 8, -1)
    }
  });
  var Cr = E((pne, $m) => {
    var jq = ue(),
      Wq = Te(),
      Uq = Ve(),
      Xq = ii(),
      jo = jq.Object,
      $q = Wq("".split);
    $m.exports = Uq(function () {
      return !jo("z").propertyIsEnumerable(0)
    }) ? function (e) {
      return Xq(e) == "String" ? $q(e, "") : jo(e)
    } : jo
  });
  var ha = E((dne, Km) => {
    var Kq = ue(),
      Yq = Kq.TypeError;
    Km.exports = function (e) {
      if (e == null) throw Yq("Can't call method on " + e);
      return e
    }
  });
  var qt = E((mne, Ym) => {
    var Qq = Cr(),
      Zq = ha();
    Ym.exports = function (e) {
      return Qq(Zq(e))
    }
  });
  var Me = E((vne, Qm) => {
    Qm.exports = function (e) {
      return typeof e == "function"
    }
  });
  var Je = E((gne, Zm) => {
    var Jq = Me();
    Zm.exports = function (e) {
      return typeof e == "object" ? e !== null : Jq(e)
    }
  });
  var ft = E((yne, Jm) => {
    var Wo = ue(),
      eL = Me(),
      tL = function (e) {
        return eL(e) ? e : void 0
      };
    Jm.exports = function (e, t) {
      return arguments.length < 2 ? tL(Wo[e]) : Wo[e] && Wo[e][t]
    }
  });
  var ca = E((Ene, ev) => {
    var rL = Te();
    ev.exports = rL({}.isPrototypeOf)
  });
  var lr = E((bne, tv) => {
    var iL = ft();
    tv.exports = iL("navigator", "userAgent") || ""
  });
  var ur = E((_ne, ov) => {
    var sv = ue(),
      Uo = lr(),
      rv = sv.process,
      iv = sv.Deno,
      nv = rv && rv.versions || iv && iv.version,
      av = nv && nv.v8,
      At, fa;
    av && (At = av.split("."), fa = At[0] > 0 && At[0] < 4 ? 1 : +(At[0] + At[1]));
    !fa && Uo && (At = Uo.match(/Edge\/(\d+)/), (!At || At[1] >= 74) && (At = Uo.match(/Chrome\/(\d+)/), At && (fa = +At[1])));
    ov.exports = fa
  });
  var Xo = E((Sne, uv) => {
    var lv = ur(),
      nL = Ve();
    uv.exports = !!Object.getOwnPropertySymbols && !nL(function () {
      var e = Symbol();
      return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && lv && lv < 41
    })
  });
  var $o = E((xne, hv) => {
    var aL = Xo();
    hv.exports = aL && !Symbol.sham && typeof Symbol.iterator == "symbol"
  });
  var Ko = E((Ine, cv) => {
    var sL = ue(),
      oL = ft(),
      lL = Me(),
      uL = ca(),
      hL = $o(),
      cL = sL.Object;
    cv.exports = hL ? function (e) {
      return typeof e == "symbol"
    } : function (e) {
      var t = oL("Symbol");
      return lL(t) && uL(t.prototype, cL(e))
    }
  });
  var Yi = E((Tne, fv) => {
    var fL = ue(),
      pL = fL.String;
    fv.exports = function (e) {
      try {
        return pL(e)
      } catch {
        return "Object"
      }
    }
  });
  var Pt = E((Ane, pv) => {
    var dL = ue(),
      mL = Me(),
      vL = Yi(),
      gL = dL.TypeError;
    pv.exports = function (e) {
      if (mL(e)) return e;
      throw gL(vL(e) + " is not a function")
    }
  });
  var hr = E((Pne, dv) => {
    var yL = Pt();
    dv.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : yL(r)
    }
  });
  var vv = E((wne, mv) => {
    var EL = ue(),
      Yo = ct(),
      Qo = Me(),
      Zo = Je(),
      bL = EL.TypeError;
    mv.exports = function (e, t) {
      var r, i;
      if (t === "string" && Qo(r = e.toString) && !Zo(i = Yo(r, e)) || Qo(r = e.valueOf) && !Zo(i = Yo(r, e)) || t !== "string" && Qo(r = e.toString) && !Zo(i = Yo(r, e))) return i;
      throw bL("Can't convert object to primitive value")
    }
  });
  var ni = E((Cne, gv) => {
    gv.exports = !1
  });
  var pa = E((One, Ev) => {
    var yv = ue(),
      _L = Object.defineProperty;
    Ev.exports = function (e, t) {
      try {
        _L(yv, e, {
          value: t,
          configurable: !0,
          writable: !0
        })
      } catch {
        yv[e] = t
      }
      return t
    }
  });
  var Qi = E((Mne, _v) => {
    var SL = ue(),
      xL = pa(),
      bv = "__core-js_shared__",
      IL = SL[bv] || xL(bv, {});
    _v.exports = IL
  });
  var Jo = E((Rne, xv) => {
    var TL = ni(),
      Sv = Qi();
    (xv.exports = function (e, t) {
      return Sv[e] || (Sv[e] = t !== void 0 ? t : {})
    })("versions", []).push({
      version: "3.19.0",
      mode: TL ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
    })
  });
  var Fe = E((Dne, Iv) => {
    var AL = ue(),
      PL = ha(),
      wL = AL.Object;
    Iv.exports = function (e) {
      return wL(PL(e))
    }
  });
  var pt = E((Fne, Tv) => {
    var CL = Te(),
      OL = Fe(),
      ML = CL({}.hasOwnProperty);
    Tv.exports = Object.hasOwn || function (t, r) {
      return ML(OL(t), r)
    }
  });
  var da = E((qne, Av) => {
    var RL = Te(),
      DL = 0,
      FL = Math.random(),
      qL = RL(1.toString);
    Av.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + qL(++DL + FL, 36)
    }
  });
  var Re = E((Lne, Mv) => {
    var LL = ue(),
      kL = Jo(),
      Pv = pt(),
      NL = da(),
      wv = Xo(),
      Ov = $o(),
      ai = kL("wks"),
      Or = LL.Symbol,
      Cv = Or && Or.for,
      BL = Ov ? Or : Or && Or.withoutSetter || NL;
    Mv.exports = function (e) {
      if (!Pv(ai, e) || !(wv || typeof ai[e] == "string")) {
        var t = "Symbol." + e;
        wv && Pv(Or, e) ? ai[e] = Or[e] : Ov && Cv ? ai[e] = Cv(t) : ai[e] = BL(t)
      }
      return ai[e]
    }
  });
  var qv = E((kne, Fv) => {
    var VL = ue(),
      GL = ct(),
      Rv = Je(),
      Dv = Ko(),
      zL = hr(),
      HL = vv(),
      jL = Re(),
      WL = VL.TypeError,
      UL = jL("toPrimitive");
    Fv.exports = function (e, t) {
      if (!Rv(e) || Dv(e)) return e;
      var r = zL(e, UL),
        i;
      if (r) {
        if (t === void 0 && (t = "default"), i = GL(r, e, t), !Rv(i) || Dv(i)) return i;
        throw WL("Can't convert object to primitive value")
      }
      return t === void 0 && (t = "number"), HL(e, t)
    }
  });
  var Zi = E((Nne, Lv) => {
    var XL = qv(),
      $L = Ko();
    Lv.exports = function (e) {
      var t = XL(e, "string");
      return $L(t) ? t : t + ""
    }
  });
  var ma = E((Bne, Nv) => {
    var KL = ue(),
      kv = Je(),
      el = KL.document,
      YL = kv(el) && kv(el.createElement);
    Nv.exports = function (e) {
      return YL ? el.createElement(e) : {}
    }
  });
  var tl = E((Vne, Bv) => {
    var QL = Tt(),
      ZL = Ve(),
      JL = ma();
    Bv.exports = !QL && !ZL(function () {
      return Object.defineProperty(JL("div"), "a", {
        get: function () {
          return 7
        }
      }).a != 7
    })
  });
  var va = E(Gv => {
    var e2 = Tt(),
      t2 = ct(),
      r2 = zm(),
      i2 = Ki(),
      n2 = qt(),
      a2 = Zi(),
      s2 = pt(),
      o2 = tl(),
      Vv = Object.getOwnPropertyDescriptor;
    Gv.f = e2 ? Vv : function (t, r) {
      if (t = n2(t), r = a2(r), o2) try {
        return Vv(t, r)
      } catch {}
      if (s2(t, r)) return i2(!t2(r2.f, t, r), t[r])
    }
  });
  var Ke = E((zne, Hv) => {
    var zv = ue(),
      l2 = Je(),
      u2 = zv.String,
      h2 = zv.TypeError;
    Hv.exports = function (e) {
      if (l2(e)) return e;
      throw h2(u2(e) + " is not an object")
    }
  });
  var dt = E(Uv => {
    var c2 = ue(),
      f2 = Tt(),
      p2 = tl(),
      jv = Ke(),
      d2 = Zi(),
      m2 = c2.TypeError,
      Wv = Object.defineProperty;
    Uv.f = f2 ? Wv : function (t, r, i) {
      if (jv(t), r = d2(r), jv(i), p2) try {
        return Wv(t, r, i)
      } catch {}
      if ("get" in i || "set" in i) throw m2("Accessors not supported");
      return "value" in i && (t[r] = i.value), t
    }
  });
  var Ji = E((jne, Xv) => {
    var v2 = Tt(),
      g2 = dt(),
      y2 = Ki();
    Xv.exports = v2 ? function (e, t, r) {
      return g2.f(e, t, y2(1, r))
    } : function (e, t, r) {
      return e[t] = r, e
    }
  });
  var en = E((Wne, $v) => {
    var E2 = Te(),
      b2 = Me(),
      rl = Qi(),
      _2 = E2(Function.toString);
    b2(rl.inspectSource) || (rl.inspectSource = function (e) {
      return _2(e)
    });
    $v.exports = rl.inspectSource
  });
  var Qv = E((Une, Yv) => {
    var S2 = ue(),
      x2 = Me(),
      I2 = en(),
      Kv = S2.WeakMap;
    Yv.exports = x2(Kv) && /native code/.test(I2(Kv))
  });
  var ga = E((Xne, Jv) => {
    var T2 = Jo(),
      A2 = da(),
      Zv = T2("keys");
    Jv.exports = function (e) {
      return Zv[e] || (Zv[e] = A2(e))
    }
  });
  var tn = E(($ne, eg) => {
    eg.exports = {}
  });
  var Rr = E((Kne, ag) => {
    var P2 = Qv(),
      ng = ue(),
      il = Te(),
      w2 = Je(),
      C2 = Ji(),
      nl = pt(),
      al = Qi(),
      O2 = ga(),
      M2 = tn(),
      tg = "Object already initialized",
      ol = ng.TypeError,
      R2 = ng.WeakMap,
      ya, rn, Ea, D2 = function (e) {
        return Ea(e) ? rn(e) : ya(e, {})
      },
      F2 = function (e) {
        return function (t) {
          var r;
          if (!w2(t) || (r = rn(t)).type !== e) throw ol("Incompatible receiver, " + e + " required");
          return r
        }
      };
    P2 || al.state ? (cr = al.state || (al.state = new R2), rg = il(cr.get), sl = il(cr.has), ig = il(cr.set), ya = function (e, t) {
      if (sl(cr, e)) throw new ol(tg);
      return t.facade = e, ig(cr, e, t), t
    }, rn = function (e) {
      return rg(cr, e) || {}
    }, Ea = function (e) {
      return sl(cr, e)
    }) : (Mr = O2("state"), M2[Mr] = !0, ya = function (e, t) {
      if (nl(e, Mr)) throw new ol(tg);
      return t.facade = e, C2(e, Mr, t), t
    }, rn = function (e) {
      return nl(e, Mr) ? e[Mr] : {}
    }, Ea = function (e) {
      return nl(e, Mr)
    });
    var cr, rg, sl, ig, Mr;
    ag.exports = {
      set: ya,
      get: rn,
      has: Ea,
      enforce: D2,
      getterFor: F2
    }
  });
  var hl = E((Yne, og) => {
    var ll = Tt(),
      q2 = pt(),
      sg = Function.prototype,
      L2 = ll && Object.getOwnPropertyDescriptor,
      ul = q2(sg, "name"),
      k2 = ul && function () {}.name === "something",
      N2 = ul && (!ll || ll && L2(sg, "name").configurable);
    og.exports = {
      EXISTS: ul,
      PROPER: k2,
      CONFIGURABLE: N2
    }
  });
  var $t = E((Qne, cg) => {
    var B2 = ue(),
      lg = Me(),
      V2 = pt(),
      ug = Ji(),
      G2 = pa(),
      z2 = en(),
      hg = Rr(),
      H2 = hl().CONFIGURABLE,
      j2 = hg.get,
      W2 = hg.enforce,
      U2 = String(String).split("String");
    (cg.exports = function (e, t, r, i) {
      var n = i ? !!i.unsafe : !1,
        a = i ? !!i.enumerable : !1,
        s = i ? !!i.noTargetGet : !1,
        o = i && i.name !== void 0 ? i.name : t,
        l;
      if (lg(r) && (String(o).slice(0, 7) === "Symbol(" && (o = "[" + String(o).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!V2(r, "name") || H2 && r.name !== o) && ug(r, "name", o), l = W2(r), l.source || (l.source = U2.join(typeof o == "string" ? o : ""))), e === B2) {
        a ? e[t] = r : G2(t, r);
        return
      } else n ? !s && e[t] && (a = !0) : delete e[t];
      a ? e[t] = r : ug(e, t, r)
    })(Function.prototype, "toString", function () {
      return lg(this) && j2(this).source || z2(this)
    })
  });
  var fr = E((Zne, fg) => {
    var X2 = Math.ceil,
      $2 = Math.floor;
    fg.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? $2 : X2)(t)
    }
  });
  var si = E((Jne, pg) => {
    var K2 = fr(),
      Y2 = Math.max,
      Q2 = Math.min;
    pg.exports = function (e, t) {
      var r = K2(e);
      return r < 0 ? Y2(r + t, 0) : Q2(r, t)
    }
  });
  var mg = E((eae, dg) => {
    var Z2 = fr(),
      J2 = Math.min;
    dg.exports = function (e) {
      return e > 0 ? J2(Z2(e), 9007199254740991) : 0
    }
  });
  var Ce = E((tae, vg) => {
    var ek = mg();
    vg.exports = function (e) {
      return ek(e.length)
    }
  });
  var ba = E((rae, yg) => {
    var tk = qt(),
      rk = si(),
      ik = Ce(),
      gg = function (e) {
        return function (t, r, i) {
          var n = tk(t),
            a = ik(n),
            s = rk(i, a),
            o;
          if (e && r != r) {
            for (; a > s;)
              if (o = n[s++], o != o) return !0
          } else
            for (; a > s; s++)
              if ((e || s in n) && n[s] === r) return e || s || 0;
          return !e && -1
        }
      };
    yg.exports = {
      includes: gg(!0),
      indexOf: gg(!1)
    }
  });
  var fl = E((iae, bg) => {
    var nk = Te(),
      cl = pt(),
      ak = qt(),
      sk = ba().indexOf,
      ok = tn(),
      Eg = nk([].push);
    bg.exports = function (e, t) {
      var r = ak(e),
        i = 0,
        n = [],
        a;
      for (a in r) !cl(ok, a) && cl(r, a) && Eg(n, a);
      for (; t.length > i;) cl(r, a = t[i++]) && (~sk(n, a) || Eg(n, a));
      return n
    }
  });
  var _a = E((nae, _g) => {
    _g.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  });
  var Sa = E(Sg => {
    var lk = fl(),
      uk = _a(),
      hk = uk.concat("length", "prototype");
    Sg.f = Object.getOwnPropertyNames || function (t) {
      return lk(t, hk)
    }
  });
  var Ig = E(xg => {
    xg.f = Object.getOwnPropertySymbols
  });
  var Ag = E((oae, Tg) => {
    var ck = ft(),
      fk = Te(),
      pk = Sa(),
      dk = Ig(),
      mk = Ke(),
      vk = fk([].concat);
    Tg.exports = ck("Reflect", "ownKeys") || function (t) {
      var r = pk.f(mk(t)),
        i = dk.f;
      return i ? vk(r, i(t)) : r
    }
  });
  var wg = E((lae, Pg) => {
    var gk = pt(),
      yk = Ag(),
      Ek = va(),
      bk = dt();
    Pg.exports = function (e, t) {
      for (var r = yk(t), i = bk.f, n = Ek.f, a = 0; a < r.length; a++) {
        var s = r[a];
        gk(e, s) || i(e, s, n(t, s))
      }
    }
  });
  var xa = E((uae, Cg) => {
    var _k = Ve(),
      Sk = Me(),
      xk = /#|\.prototype\./,
      nn = function (e, t) {
        var r = Tk[Ik(e)];
        return r == Pk ? !0 : r == Ak ? !1 : Sk(t) ? _k(t) : !!t
      },
      Ik = nn.normalize = function (e) {
        return String(e).replace(xk, ".").toLowerCase()
      },
      Tk = nn.data = {},
      Ak = nn.NATIVE = "N",
      Pk = nn.POLYFILL = "P";
    Cg.exports = nn
  });
  var ge = E((hae, Og) => {
    var pl = ue(),
      wk = va().f,
      Ck = Ji(),
      Ok = $t(),
      Mk = pa(),
      Rk = wg(),
      Dk = xa();
    Og.exports = function (e, t) {
      var r = e.target,
        i = e.global,
        n = e.stat,
        a, s, o, l, p, u;
      if (i ? s = pl : n ? s = pl[r] || Mk(r, {}) : s = (pl[r] || {}).prototype, s)
        for (o in t) {
          if (p = t[o], e.noTargetGet ? (u = wk(s, o), l = u && u.value) : l = s[o], a = Dk(i ? o : r + (n ? "." : "#") + o, e.forced), !a && l !== void 0) {
            if (typeof p == typeof l) continue;
            Rk(p, l)
          }(e.sham || l && l.sham) && Ck(p, "sham", !0), Ok(s, o, p, e)
        }
    }
  });
  var wt = E((cae, Dg) => {
    var Mg = Te(),
      Fk = Pt(),
      Rg = Mg(Mg.bind);
    Dg.exports = function (e, t) {
      return Fk(e), t === void 0 ? e : Rg ? Rg(e, t) : function () {
        return e.apply(t, arguments)
      }
    }
  });
  var dl = E((fae, qg) => {
    var qk = ct(),
      Fg = Ke(),
      Lk = hr();
    qg.exports = function (e, t, r) {
      var i, n;
      Fg(e);
      try {
        if (i = Lk(e, "return"), !i) {
          if (t === "throw") throw r;
          return r
        }
        i = qk(i, e)
      } catch (a) {
        n = !0, i = a
      }
      if (t === "throw") throw r;
      if (n) throw i;
      return Fg(i), r
    }
  });
  var kg = E((pae, Lg) => {
    var kk = Ke(),
      Nk = dl();
    Lg.exports = function (e, t, r, i) {
      try {
        return i ? t(kk(r)[0], r[1]) : t(r)
      } catch (n) {
        Nk(e, "throw", n)
      }
    }
  });
  var oi = E((dae, Ng) => {
    Ng.exports = {}
  });
  var ml = E((mae, Bg) => {
    var Bk = Re(),
      Vk = oi(),
      Gk = Bk("iterator"),
      zk = Array.prototype;
    Bg.exports = function (e) {
      return e !== void 0 && (Vk.Array === e || zk[Gk] === e)
    }
  });
  var Ia = E((vae, Gg) => {
    var Hk = Re(),
      jk = Hk("toStringTag"),
      Vg = {};
    Vg[jk] = "z";
    Gg.exports = String(Vg) === "[object z]"
  });
  var an = E((gae, zg) => {
    var Wk = ue(),
      Uk = Ia(),
      Xk = Me(),
      Ta = ii(),
      $k = Re(),
      Kk = $k("toStringTag"),
      Yk = Wk.Object,
      Qk = Ta(function () {
        return arguments
      }()) == "Arguments",
      Zk = function (e, t) {
        try {
          return e[t]
        } catch {}
      };
    zg.exports = Uk ? Ta : function (e) {
      var t, r, i;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = Zk(t = Yk(e), Kk)) == "string" ? r : Qk ? Ta(t) : (i = Ta(t)) == "Object" && Xk(t.callee) ? "Arguments" : i
    }
  });
  var Dr = E((yae, Ug) => {
    var Jk = Te(),
      eN = Ve(),
      Hg = Me(),
      tN = an(),
      rN = ft(),
      iN = en(),
      jg = function () {},
      nN = [],
      Wg = rN("Reflect", "construct"),
      vl = /^\s*(?:class|function)\b/,
      aN = Jk(vl.exec),
      sN = !vl.exec(jg),
      sn = function (e) {
        if (!Hg(e)) return !1;
        try {
          return Wg(jg, nN, e), !0
        } catch {
          return !1
        }
      },
      oN = function (e) {
        if (!Hg(e)) return !1;
        switch (tN(e)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1
        }
        return sN || !!aN(vl, iN(e))
      };
    Ug.exports = !Wg || eN(function () {
      var e;
      return sn(sn.call) || !sn(Object) || !sn(function () {
        e = !0
      }) || e
    }) ? oN : sn
  });
  var li = E((Eae, Xg) => {
    "use strict";
    var lN = Zi(),
      uN = dt(),
      hN = Ki();
    Xg.exports = function (e, t, r) {
      var i = lN(t);
      i in e ? uN.f(e, i, hN(0, r)) : e[i] = r
    }
  });
  var on = E((bae, Kg) => {
    var cN = an(),
      $g = hr(),
      fN = oi(),
      pN = Re(),
      dN = pN("iterator");
    Kg.exports = function (e) {
      if (e != null) return $g(e, dN) || $g(e, "@@iterator") || fN[cN(e)]
    }
  });
  var ln = E((_ae, Yg) => {
    var mN = ue(),
      vN = ct(),
      gN = Pt(),
      yN = Ke(),
      EN = Yi(),
      bN = on(),
      _N = mN.TypeError;
    Yg.exports = function (e, t) {
      var r = arguments.length < 2 ? bN(e) : t;
      if (gN(r)) return yN(vN(r, e));
      throw _N(EN(e) + " is not iterable")
    }
  });
  var ey = E((Sae, Jg) => {
    "use strict";
    var SN = ue(),
      xN = wt(),
      IN = ct(),
      TN = Fe(),
      AN = kg(),
      PN = ml(),
      wN = Dr(),
      CN = Ce(),
      Qg = li(),
      ON = ln(),
      MN = on(),
      Zg = SN.Array;
    Jg.exports = function (t) {
      var r = TN(t),
        i = wN(this),
        n = arguments.length,
        a = n > 1 ? arguments[1] : void 0,
        s = a !== void 0;
      s && (a = xN(a, n > 2 ? arguments[2] : void 0));
      var o = MN(r),
        l = 0,
        p, u, h, v, d, f;
      if (o && !(this == Zg && PN(o)))
        for (v = ON(r, o), d = v.next, u = i ? new this : []; !(h = IN(d, v)).done; l++) f = s ? AN(v, a, [h.value, l], !0) : h.value, Qg(u, l, f);
      else
        for (p = CN(r), u = i ? new this(p) : Zg(p); p > l; l++) f = s ? a(r[l], l) : r[l], Qg(u, l, f);
      return u.length = l, u
    }
  });
  var Aa = E((xae, ny) => {
    var RN = Re(),
      ry = RN("iterator"),
      iy = !1;
    try {
      ty = 0, gl = {
        next: function () {
          return {
            done: !!ty++
          }
        },
        return: function () {
          iy = !0
        }
      }, gl[ry] = function () {
        return this
      }, Array.from(gl, function () {
        throw 2
      })
    } catch {}
    var ty, gl;
    ny.exports = function (e, t) {
      if (!t && !iy) return !1;
      var r = !1;
      try {
        var i = {};
        i[ry] = function () {
          return {
            next: function () {
              return {
                done: r = !0
              }
            }
          }
        }, e(i)
      } catch {}
      return r
    }
  });
  var ay = E(() => {
    var DN = ge(),
      FN = ey(),
      qN = Aa(),
      LN = !qN(function (e) {
        Array.from(e)
      });
    DN({
      target: "Array",
      stat: !0,
      forced: LN
    }, {
      from: FN
    })
  });
  var pr = E((Aae, sy) => {
    var kN = ii();
    sy.exports = Array.isArray || function (t) {
      return kN(t) == "Array"
    }
  });
  var oy = E(() => {
    var NN = ge(),
      BN = pr();
    NN({
      target: "Array",
      stat: !0
    }, {
      isArray: BN
    })
  });
  var uy = E(() => {
    "use strict";
    var VN = ge(),
      GN = ue(),
      zN = Ve(),
      HN = Dr(),
      jN = li(),
      ly = GN.Array,
      WN = zN(function () {
        function e() {}
        return !(ly.of.call(e) instanceof e)
      });
    VN({
      target: "Array",
      stat: !0,
      forced: WN
    }, {
      of: function () {
        for (var t = 0, r = arguments.length, i = new(HN(this) ? this : ly)(r); r > t;) jN(i, t, arguments[t++]);
        return i.length = r, i
      }
    })
  });
  var cy = E((Mae, hy) => {
    var UN = fl(),
      XN = _a();
    hy.exports = Object.keys || function (t) {
      return UN(t, XN)
    }
  });
  var py = E((Rae, fy) => {
    var $N = Tt(),
      KN = dt(),
      YN = Ke(),
      QN = qt(),
      ZN = cy();
    fy.exports = $N ? Object.defineProperties : function (t, r) {
      YN(t);
      for (var i = QN(r), n = ZN(r), a = n.length, s = 0, o; a > s;) KN.f(t, o = n[s++], i[o]);
      return t
    }
  });
  var yl = E((Dae, dy) => {
    var JN = ft();
    dy.exports = JN("document", "documentElement")
  });
  var dr = E((Fae, _y) => {
    var eB = Ke(),
      tB = py(),
      my = _a(),
      rB = tn(),
      iB = yl(),
      nB = ma(),
      aB = ga(),
      vy = ">",
      gy = "<",
      bl = "prototype",
      _l = "script",
      Ey = aB("IE_PROTO"),
      El = function () {},
      by = function (e) {
        return gy + _l + vy + e + gy + "/" + _l + vy
      },
      yy = function (e) {
        e.write(by("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t
      },
      sB = function () {
        var e = nB("iframe"),
          t = "java" + _l + ":",
          r;
        return e.style.display = "none", iB.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(by("document.F=Object")), r.close(), r.F
      },
      Pa, wa = function () {
        try {
          Pa = new ActiveXObject("htmlfile")
        } catch {}
        wa = typeof document < "u" ? document.domain && Pa ? yy(Pa) : sB() : yy(Pa);
        for (var e = my.length; e--;) delete wa[bl][my[e]];
        return wa()
      };
    rB[Ey] = !0;
    _y.exports = Object.create || function (t, r) {
      var i;
      return t !== null ? (El[bl] = eB(t), i = new El, El[bl] = null, i[Ey] = t) : i = wa(), r === void 0 ? i : tB(i, r)
    }
  });
  var ke = E((qae, Sy) => {
    var oB = Re(),
      lB = dr(),
      uB = dt(),
      Sl = oB("unscopables"),
      xl = Array.prototype;
    xl[Sl] == null && uB.f(xl, Sl, {
      configurable: !0,
      value: lB(null)
    });
    Sy.exports = function (e) {
      xl[Sl][e] = !0
    }
  });
  var Il = E(() => {
    "use strict";
    var hB = ge(),
      cB = Fe(),
      fB = Ce(),
      pB = fr(),
      dB = ke();
    hB({
      target: "Array",
      proto: !0
    }, {
      at: function (t) {
        var r = cB(this),
          i = fB(r),
          n = pB(t),
          a = n >= 0 ? n : i + n;
        return a < 0 || a >= i ? void 0 : r[a]
      }
    });
    dB("at")
  });
  var Tl = E((Nae, Ty) => {
    var mB = ue(),
      xy = pr(),
      vB = Dr(),
      gB = Je(),
      yB = Re(),
      EB = yB("species"),
      Iy = mB.Array;
    Ty.exports = function (e) {
      var t;
      return xy(e) && (t = e.constructor, vB(t) && (t === Iy || xy(t.prototype)) ? t = void 0 : gB(t) && (t = t[EB], t === null && (t = void 0))), t === void 0 ? Iy : t
    }
  });
  var Fr = E((Bae, Ay) => {
    var bB = Tl();
    Ay.exports = function (e, t) {
      return new(bB(e))(t === 0 ? 0 : t)
    }
  });
  var ui = E((Vae, Py) => {
    var _B = Ve(),
      SB = Re(),
      xB = ur(),
      IB = SB("species");
    Py.exports = function (e) {
      return xB >= 51 || !_B(function () {
        var t = [],
          r = t.constructor = {};
        return r[IB] = function () {
          return {
            foo: 1
          }
        }, t[e](Boolean).foo !== 1
      })
    }
  });
  var Dy = E(() => {
    "use strict";
    var TB = ge(),
      AB = ue(),
      PB = Ve(),
      wB = pr(),
      CB = Je(),
      OB = Fe(),
      MB = Ce(),
      wy = li(),
      RB = Fr(),
      DB = ui(),
      FB = Re(),
      qB = ur(),
      Ry = FB("isConcatSpreadable"),
      Cy = 9007199254740991,
      Oy = "Maximum allowed index exceeded",
      My = AB.TypeError,
      LB = qB >= 51 || !PB(function () {
        var e = [];
        return e[Ry] = !1, e.concat()[0] !== e
      }),
      kB = DB("concat"),
      NB = function (e) {
        if (!CB(e)) return !1;
        var t = e[Ry];
        return t !== void 0 ? !!t : wB(e)
      },
      BB = !LB || !kB;
    TB({
      target: "Array",
      proto: !0,
      forced: BB
    }, {
      concat: function (t) {
        var r = OB(this),
          i = RB(r, 0),
          n = 0,
          a, s, o, l, p;
        for (a = -1, o = arguments.length; a < o; a++)
          if (p = a === -1 ? r : arguments[a], NB(p)) {
            if (l = MB(p), n + l > Cy) throw My(Oy);
            for (s = 0; s < l; s++, n++) s in p && wy(i, n, p[s])
          } else {
            if (n >= Cy) throw My(Oy);
            wy(i, n++, p)
          } return i.length = n, i
      }
    })
  });
  var qy = E((Hae, Fy) => {
    "use strict";
    var VB = Fe(),
      Al = si(),
      GB = Ce(),
      zB = Math.min;
    Fy.exports = [].copyWithin || function (t, r) {
      var i = VB(this),
        n = GB(i),
        a = Al(t, n),
        s = Al(r, n),
        o = arguments.length > 2 ? arguments[2] : void 0,
        l = zB((o === void 0 ? n : Al(o, n)) - s, n - a),
        p = 1;
      for (s < a && a < s + l && (p = -1, s += l - 1, a += l - 1); l-- > 0;) s in i ? i[a] = i[s] : delete i[a], a += p, s += p;
      return i
    }
  });
  var Ly = E(() => {
    var HB = ge(),
      jB = qy(),
      WB = ke();
    HB({
      target: "Array",
      proto: !0
    }, {
      copyWithin: jB
    });
    WB("copyWithin")
  });
  var Lt = E((Uae, Ny) => {
    var UB = wt(),
      XB = Te(),
      $B = Cr(),
      KB = Fe(),
      YB = Ce(),
      QB = Fr(),
      ky = XB([].push),
      mr = function (e) {
        var t = e == 1,
          r = e == 2,
          i = e == 3,
          n = e == 4,
          a = e == 6,
          s = e == 7,
          o = e == 5 || a;
        return function (l, p, u, h) {
          for (var v = KB(l), d = $B(v), f = UB(p, u), m = YB(d), c = 0, g = h || QB, y = t ? g(l, m) : r || s ? g(l, 0) : void 0, b, _; m > c; c++)
            if ((o || c in d) && (b = d[c], _ = f(b, c, v), e))
              if (t) y[c] = _;
              else if (_) switch (e) {
            case 3:
              return !0;
            case 5:
              return b;
            case 6:
              return c;
            case 2:
              ky(y, b)
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              ky(y, b)
          }
          return a ? -1 : i || n ? n : y
        }
      };
    Ny.exports = {
      forEach: mr(0),
      map: mr(1),
      filter: mr(2),
      some: mr(3),
      every: mr(4),
      find: mr(5),
      findIndex: mr(6),
      filterReject: mr(7)
    }
  });
  var kt = E((Xae, By) => {
    "use strict";
    var ZB = Ve();
    By.exports = function (e, t) {
      var r = [][e];
      return !!r && ZB(function () {
        r.call(null, t || function () {
          throw 1
        }, 1)
      })
    }
  });
  var Vy = E(() => {
    "use strict";
    var JB = ge(),
      eV = Lt().every,
      tV = kt(),
      rV = tV("every");
    JB({
      target: "Array",
      proto: !0,
      forced: !rV
    }, {
      every: function (t) {
        return eV(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  });
  var Hy = E((Yae, zy) => {
    "use strict";
    var iV = Fe(),
      Gy = si(),
      nV = Ce();
    zy.exports = function (t) {
      for (var r = iV(this), i = nV(r), n = arguments.length, a = Gy(n > 1 ? arguments[1] : void 0, i), s = n > 2 ? arguments[2] : void 0, o = s === void 0 ? i : Gy(s, i); o > a;) r[a++] = t;
      return r
    }
  });
  var jy = E(() => {
    var aV = ge(),
      sV = Hy(),
      oV = ke();
    aV({
      target: "Array",
      proto: !0
    }, {
      fill: sV
    });
    oV("fill")
  });
  var Wy = E(() => {
    "use strict";
    var lV = ge(),
      uV = Lt().filter,
      hV = ui(),
      cV = hV("filter");
    lV({
      target: "Array",
      proto: !0,
      forced: !cV
    }, {
      filter: function (t) {
        return uV(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  });
  var Xy = E(() => {
    "use strict";
    var fV = ge(),
      pV = Lt().find,
      dV = ke(),
      Pl = "find",
      Uy = !0;
    Pl in [] && Array(1)[Pl](function () {
      Uy = !1
    });
    fV({
      target: "Array",
      proto: !0,
      forced: Uy
    }, {
      find: function (t) {
        return pV(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    dV(Pl)
  });
  var Ky = E(() => {
    "use strict";
    var mV = ge(),
      vV = Lt().findIndex,
      gV = ke(),
      wl = "findIndex",
      $y = !0;
    wl in [] && Array(1)[wl](function () {
      $y = !1
    });
    mV({
      target: "Array",
      proto: !0,
      forced: $y
    }, {
      findIndex: function (t) {
        return vV(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    gV(wl)
  });
  var Cl = E((ase, Qy) => {
    "use strict";
    var yV = ue(),
      EV = pr(),
      bV = Ce(),
      _V = wt(),
      SV = yV.TypeError,
      Yy = function (e, t, r, i, n, a, s, o) {
        for (var l = n, p = 0, u = s ? _V(s, o) : !1, h, v; p < i;) {
          if (p in r) {
            if (h = u ? u(r[p], p, t) : r[p], a > 0 && EV(h)) v = bV(h), l = Yy(e, t, h, v, l, a - 1) - 1;
            else {
              if (l >= 9007199254740991) throw SV("Exceed the acceptable array length");
              e[l] = h
            }
            l++
          }
          p++
        }
        return l
      };
    Qy.exports = Yy
  });
  var Zy = E(() => {
    "use strict";
    var xV = ge(),
      IV = Cl(),
      TV = Fe(),
      AV = Ce(),
      PV = fr(),
      wV = Fr();
    xV({
      target: "Array",
      proto: !0
    }, {
      flat: function () {
        var t = arguments.length ? arguments[0] : void 0,
          r = TV(this),
          i = AV(r),
          n = wV(r, 0);
        return n.length = IV(n, r, r, i, 0, t === void 0 ? 1 : PV(t)), n
      }
    })
  });
  var Jy = E(() => {
    "use strict";
    var CV = ge(),
      OV = Cl(),
      MV = Pt(),
      RV = Fe(),
      DV = Ce(),
      FV = Fr();
    CV({
      target: "Array",
      proto: !0
    }, {
      flatMap: function (t) {
        var r = RV(this),
          i = DV(r),
          n;
        return MV(t), n = FV(r, 0), n.length = OV(n, r, r, i, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), n
      }
    })
  });
  var t0 = E((hse, e0) => {
    "use strict";
    var qV = Lt().forEach,
      LV = kt(),
      kV = LV("forEach");
    e0.exports = kV ? [].forEach : function (t) {
      return qV(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var i0 = E(() => {
    "use strict";
    var NV = ge(),
      r0 = t0();
    NV({
      target: "Array",
      proto: !0,
      forced: [].forEach != r0
    }, {
      forEach: r0
    })
  });
  var Ol = E(() => {
    "use strict";
    var BV = ge(),
      VV = ba().includes,
      GV = ke();
    BV({
      target: "Array",
      proto: !0
    }, {
      includes: function (t) {
        return VV(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    GV("includes")
  });
  var a0 = E(() => {
    "use strict";
    var zV = ge(),
      HV = Te(),
      jV = ba().indexOf,
      WV = kt(),
      Ml = HV([].indexOf),
      n0 = !!Ml && 1 / Ml([1], 1, -0) < 0,
      UV = WV("indexOf");
    zV({
      target: "Array",
      proto: !0,
      forced: n0 || !UV
    }, {
      indexOf: function (t) {
        var r = arguments.length > 1 ? arguments[1] : void 0;
        return n0 ? Ml(this, t, r) || 0 : jV(this, t, r)
      }
    })
  });
  var o0 = E((gse, s0) => {
    var XV = Ve();
    s0.exports = !XV(function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    })
  });
  var Ca = E((yse, u0) => {
    var $V = ue(),
      KV = pt(),
      YV = Me(),
      QV = Fe(),
      ZV = ga(),
      JV = o0(),
      l0 = ZV("IE_PROTO"),
      Rl = $V.Object,
      eG = Rl.prototype;
    u0.exports = JV ? Rl.getPrototypeOf : function (e) {
      var t = QV(e);
      if (KV(t, l0)) return t[l0];
      var r = t.constructor;
      return YV(r) && t instanceof r ? r.prototype : t instanceof Rl ? eG : null
    }
  });
  var Ll = E((Ese, f0) => {
    "use strict";
    var tG = Ve(),
      rG = Me(),
      iG = dr(),
      h0 = Ca(),
      nG = $t(),
      aG = Re(),
      sG = ni(),
      ql = aG("iterator"),
      c0 = !1,
      Kt, Dl, Fl;
    [].keys && (Fl = [].keys(), "next" in Fl ? (Dl = h0(h0(Fl)), Dl !== Object.prototype && (Kt = Dl)) : c0 = !0);
    var oG = Kt == null || tG(function () {
      var e = {};
      return Kt[ql].call(e) !== e
    });
    oG ? Kt = {} : sG && (Kt = iG(Kt));
    rG(Kt[ql]) || nG(Kt, ql, function () {
      return this
    });
    f0.exports = {
      IteratorPrototype: Kt,
      BUGGY_SAFARI_ITERATORS: c0
    }
  });
  var un = E((bse, d0) => {
    var lG = dt().f,
      uG = pt(),
      hG = Re(),
      p0 = hG("toStringTag");
    d0.exports = function (e, t, r) {
      e && !uG(e = r ? e : e.prototype, p0) && lG(e, p0, {
        configurable: !0,
        value: t
      })
    }
  });
  var v0 = E((_se, m0) => {
    "use strict";
    var cG = Ll().IteratorPrototype,
      fG = dr(),
      pG = Ki(),
      dG = un(),
      mG = oi(),
      vG = function () {
        return this
      };
    m0.exports = function (e, t, r) {
      var i = t + " Iterator";
      return e.prototype = fG(cG, {
        next: pG(1, r)
      }), dG(e, i, !1, !0), mG[i] = vG, e
    }
  });
  var E0 = E((Sse, y0) => {
    var g0 = ue(),
      gG = Me(),
      yG = g0.String,
      EG = g0.TypeError;
    y0.exports = function (e) {
      if (typeof e == "object" || gG(e)) return e;
      throw EG("Can't set " + yG(e) + " as a prototype")
    }
  });
  var Oa = E((xse, b0) => {
    var bG = Te(),
      _G = Ke(),
      SG = E0();
    b0.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var e = !1,
        t = {},
        r;
      try {
        r = bG(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), r(t, []), e = t instanceof Array
      } catch {}
      return function (n, a) {
        return _G(n), SG(a), e ? r(n, a) : n.__proto__ = a, n
      }
    }() : void 0)
  });
  var Da = E((Ise, O0) => {
    "use strict";
    var xG = ge(),
      IG = ct(),
      Ma = ni(),
      w0 = hl(),
      TG = Me(),
      AG = v0(),
      _0 = Ca(),
      S0 = Oa(),
      PG = un(),
      wG = Ji(),
      kl = $t(),
      CG = Re(),
      x0 = oi(),
      C0 = Ll(),
      OG = w0.PROPER,
      MG = w0.CONFIGURABLE,
      I0 = C0.IteratorPrototype,
      Ra = C0.BUGGY_SAFARI_ITERATORS,
      hn = CG("iterator"),
      T0 = "keys",
      cn = "values",
      A0 = "entries",
      P0 = function () {
        return this
      };
    O0.exports = function (e, t, r, i, n, a, s) {
      AG(r, t, i);
      var o = function (g) {
          if (g === n && v) return v;
          if (!Ra && g in u) return u[g];
          switch (g) {
            case T0:
              return function () {
                return new r(this, g)
              };
            case cn:
              return function () {
                return new r(this, g)
              };
            case A0:
              return function () {
                return new r(this, g)
              }
          }
          return function () {
            return new r(this)
          }
        },
        l = t + " Iterator",
        p = !1,
        u = e.prototype,
        h = u[hn] || u["@@iterator"] || n && u[n],
        v = !Ra && h || o(n),
        d = t == "Array" && u.entries || h,
        f, m, c;
      if (d && (f = _0(d.call(new e)), f !== Object.prototype && f.next && (!Ma && _0(f) !== I0 && (S0 ? S0(f, I0) : TG(f[hn]) || kl(f, hn, P0)), PG(f, l, !0, !0), Ma && (x0[l] = P0))), OG && n == cn && h && h.name !== cn && (!Ma && MG ? wG(u, "name", cn) : (p = !0, v = function () {
          return IG(h, this)
        })), n)
        if (m = {
            values: o(cn),
            keys: a ? v : o(T0),
            entries: o(A0)
          }, s)
          for (c in m)(Ra || p || !(c in u)) && kl(u, c, m[c]);
        else xG({
          target: t,
          proto: !0,
          forced: Ra || p
        }, m);
      return (!Ma || s) && u[hn] !== v && kl(u, hn, v, {
        name: n
      }), x0[t] = v, m
    }
  });
  var q0 = E((Tse, F0) => {
    "use strict";
    var RG = qt(),
      Nl = ke(),
      M0 = oi(),
      R0 = Rr(),
      DG = Da(),
      D0 = "Array Iterator",
      FG = R0.set,
      qG = R0.getterFor(D0);
    F0.exports = DG(Array, "Array", function (e, t) {
      FG(this, {
        type: D0,
        target: RG(e),
        index: 0,
        kind: t
      })
    }, function () {
      var e = qG(this),
        t = e.target,
        r = e.kind,
        i = e.index++;
      return !t || i >= t.length ? (e.target = void 0, {
        value: void 0,
        done: !0
      }) : r == "keys" ? {
        value: i,
        done: !1
      } : r == "values" ? {
        value: t[i],
        done: !1
      } : {
        value: [i, t[i]],
        done: !1
      }
    }, "values");
    M0.Arguments = M0.Array;
    Nl("keys");
    Nl("values");
    Nl("entries")
  });
  var L0 = E(() => {
    "use strict";
    var LG = ge(),
      kG = Te(),
      NG = Cr(),
      BG = qt(),
      VG = kt(),
      GG = kG([].join),
      zG = NG != Object,
      HG = VG("join", ",");
    LG({
      target: "Array",
      proto: !0,
      forced: zG || !HG
    }, {
      join: function (t) {
        return GG(BG(this), t === void 0 ? "," : t)
      }
    })
  });
  var Fa = E((wse, B0) => {
    var Bl = Function.prototype,
      k0 = Bl.apply,
      jG = Bl.bind,
      N0 = Bl.call;
    B0.exports = typeof Reflect == "object" && Reflect.apply || (jG ? N0.bind(k0) : function () {
      return N0.apply(k0, arguments)
    })
  });
  var z0 = E((Cse, G0) => {
    "use strict";
    var WG = Fa(),
      UG = qt(),
      XG = fr(),
      $G = Ce(),
      KG = kt(),
      YG = Math.min,
      Vl = [].lastIndexOf,
      V0 = !!Vl && 1 / [1].lastIndexOf(1, -0) < 0,
      QG = KG("lastIndexOf"),
      ZG = V0 || !QG;
    G0.exports = ZG ? function (t) {
      if (V0) return WG(Vl, this, arguments) || 0;
      var r = UG(this),
        i = $G(r),
        n = i - 1;
      for (arguments.length > 1 && (n = YG(n, XG(arguments[1]))), n < 0 && (n = i + n); n >= 0; n--)
        if (n in r && r[n] === t) return n || 0;
      return -1
    } : Vl
  });
  var j0 = E(() => {
    var JG = ge(),
      H0 = z0();
    JG({
      target: "Array",
      proto: !0,
      forced: H0 !== [].lastIndexOf
    }, {
      lastIndexOf: H0
    })
  });
  var W0 = E(() => {
    "use strict";
    var e3 = ge(),
      t3 = Lt().map,
      r3 = ui(),
      i3 = r3("map");
    e3({
      target: "Array",
      proto: !0,
      forced: !i3
    }, {
      map: function (t) {
        return t3(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  });
  var Gl = E((Fse, X0) => {
    var n3 = ue(),
      a3 = Pt(),
      s3 = Fe(),
      o3 = Cr(),
      l3 = Ce(),
      u3 = n3.TypeError,
      U0 = function (e) {
        return function (t, r, i, n) {
          a3(r);
          var a = s3(t),
            s = o3(a),
            o = l3(a),
            l = e ? o - 1 : 0,
            p = e ? -1 : 1;
          if (i < 2)
            for (;;) {
              if (l in s) {
                n = s[l], l += p;
                break
              }
              if (l += p, e ? l < 0 : o <= l) throw u3("Reduce of empty array with no initial value")
            }
          for (; e ? l >= 0 : o > l; l += p) l in s && (n = r(n, s[l], l, a));
          return n
        }
      };
    X0.exports = {
      left: U0(!1),
      right: U0(!0)
    }
  });
  var hi = E((qse, $0) => {
    var h3 = ii(),
      c3 = ue();
    $0.exports = h3(c3.process) == "process"
  });
  var Y0 = E(() => {
    "use strict";
    var f3 = ge(),
      p3 = Gl().left,
      d3 = kt(),
      K0 = ur(),
      m3 = hi(),
      v3 = d3("reduce"),
      g3 = !m3 && K0 > 79 && K0 < 83;
    f3({
      target: "Array",
      proto: !0,
      forced: !v3 || g3
    }, {
      reduce: function (t) {
        var r = arguments.length;
        return p3(this, t, r, r > 1 ? arguments[1] : void 0)
      }
    })
  });
  var Z0 = E(() => {
    "use strict";
    var y3 = ge(),
      E3 = Gl().right,
      b3 = kt(),
      Q0 = ur(),
      _3 = hi(),
      S3 = b3("reduceRight"),
      x3 = !_3 && Q0 > 79 && Q0 < 83;
    y3({
      target: "Array",
      proto: !0,
      forced: !S3 || x3
    }, {
      reduceRight: function (t) {
        return E3(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  });
  var eE = E(() => {
    "use strict";
    var I3 = ge(),
      T3 = Te(),
      A3 = pr(),
      P3 = T3([].reverse),
      J0 = [1, 2];
    I3({
      target: "Array",
      proto: !0,
      forced: String(J0) === String(J0.reverse())
    }, {
      reverse: function () {
        return A3(this) && (this.length = this.length), P3(this)
      }
    })
  });
  var fn = E((zse, tE) => {
    var w3 = Te();
    tE.exports = w3([].slice)
  });
  var nE = E(() => {
    "use strict";
    var C3 = ge(),
      O3 = ue(),
      rE = pr(),
      M3 = Dr(),
      R3 = Je(),
      iE = si(),
      D3 = Ce(),
      F3 = qt(),
      q3 = li(),
      L3 = Re(),
      k3 = ui(),
      N3 = fn(),
      B3 = k3("slice"),
      V3 = L3("species"),
      zl = O3.Array,
      G3 = Math.max;
    C3({
      target: "Array",
      proto: !0,
      forced: !B3
    }, {
      slice: function (t, r) {
        var i = F3(this),
          n = D3(i),
          a = iE(t, n),
          s = iE(r === void 0 ? n : r, n),
          o, l, p;
        if (rE(i) && (o = i.constructor, M3(o) && (o === zl || rE(o.prototype)) ? o = void 0 : R3(o) && (o = o[V3], o === null && (o = void 0)), o === zl || o === void 0)) return N3(i, a, s);
        for (l = new(o === void 0 ? zl : o)(G3(s - a, 0)), p = 0; a < s; a++, p++) a in i && q3(l, p, i[a]);
        return l.length = p, l
      }
    })
  });
  var aE = E(() => {
    "use strict";
    var z3 = ge(),
      H3 = Lt().some,
      j3 = kt(),
      W3 = j3("some");
    z3({
      target: "Array",
      proto: !0,
      forced: !W3
    }, {
      some: function (t) {
        return H3(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  });
  var qa = E((Xse, sE) => {
    var U3 = ue(),
      X3 = an(),
      $3 = U3.String;
    sE.exports = function (e) {
      if (X3(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
      return $3(e)
    }
  });
  var uE = E(($se, lE) => {
    var oE = fn(),
      K3 = Math.floor,
      Hl = function (e, t) {
        var r = e.length,
          i = K3(r / 2);
        return r < 8 ? Y3(e, t) : Q3(e, Hl(oE(e, 0, i), t), Hl(oE(e, i), t), t)
      },
      Y3 = function (e, t) {
        for (var r = e.length, i = 1, n, a; i < r;) {
          for (a = i, n = e[i]; a && t(e[a - 1], n) > 0;) e[a] = e[--a];
          a !== i++ && (e[a] = n)
        }
        return e
      },
      Q3 = function (e, t, r, i) {
        for (var n = t.length, a = r.length, s = 0, o = 0; s < n || o < a;) e[s + o] = s < n && o < a ? i(t[s], r[o]) <= 0 ? t[s++] : r[o++] : s < n ? t[s++] : r[o++];
        return e
      };
    lE.exports = Hl
  });
  var fE = E((Kse, cE) => {
    var Z3 = lr(),
      hE = Z3.match(/firefox\/(\d+)/i);
    cE.exports = !!hE && +hE[1]
  });
  var dE = E((Yse, pE) => {
    var J3 = lr();
    pE.exports = /MSIE|Trident/.test(J3)
  });
  var gE = E((Qse, vE) => {
    var e5 = lr(),
      mE = e5.match(/AppleWebKit\/(\d+)\./);
    vE.exports = !!mE && +mE[1]
  });
  var TE = E(() => {
    "use strict";
    var t5 = ge(),
      xE = Te(),
      r5 = Pt(),
      i5 = Fe(),
      n5 = Ce(),
      yE = qa(),
      jl = Ve(),
      a5 = uE(),
      s5 = kt(),
      EE = fE(),
      o5 = dE(),
      bE = ur(),
      _E = gE(),
      vr = [],
      SE = xE(vr.sort),
      l5 = xE(vr.push),
      u5 = jl(function () {
        vr.sort(void 0)
      }),
      h5 = jl(function () {
        vr.sort(null)
      }),
      c5 = s5("sort"),
      IE = !jl(function () {
        if (bE) return bE < 70;
        if (!(EE && EE > 3)) {
          if (o5) return !0;
          if (_E) return _E < 603;
          var e = "",
            t, r, i, n;
          for (t = 65; t < 76; t++) {
            switch (r = String.fromCharCode(t), t) {
              case 66:
              case 69:
              case 70:
              case 72:
                i = 3;
                break;
              case 68:
              case 71:
                i = 4;
                break;
              default:
                i = 2
            }
            for (n = 0; n < 47; n++) vr.push({
              k: r + n,
              v: i
            })
          }
          for (vr.sort(function (a, s) {
              return s.v - a.v
            }), n = 0; n < vr.length; n++) r = vr[n].k.charAt(0), e.charAt(e.length - 1) !== r && (e += r);
          return e !== "DGBEFHACIJK"
        }
      }),
      f5 = u5 || !h5 || !c5 || !IE,
      p5 = function (e) {
        return function (t, r) {
          return r === void 0 ? -1 : t === void 0 ? 1 : e !== void 0 ? +e(t, r) || 0 : yE(t) > yE(r) ? 1 : -1
        }
      };
    t5({
      target: "Array",
      proto: !0,
      forced: f5
    }, {
      sort: function (t) {
        t !== void 0 && r5(t);
        var r = i5(this);
        if (IE) return t === void 0 ? SE(r) : SE(r, t);
        var i = [],
          n = n5(r),
          a, s;
        for (s = 0; s < n; s++) s in r && l5(i, r[s]);
        for (a5(i, p5(t)), a = i.length, s = 0; s < a;) r[s] = i[s++];
        for (; s < n;) delete r[s++];
        return r
      }
    })
  });
  var La = E((eoe, PE) => {
    "use strict";
    var d5 = ft(),
      m5 = dt(),
      v5 = Re(),
      g5 = Tt(),
      AE = v5("species");
    PE.exports = function (e) {
      var t = d5(e),
        r = m5.f;
      g5 && t && !t[AE] && r(t, AE, {
        configurable: !0,
        get: function () {
          return this
        }
      })
    }
  });
  var wE = E(() => {
    var y5 = La();
    y5("Array")
  });
  var CE = E(() => {
    "use strict";
    var E5 = ge(),
      b5 = ue(),
      _5 = si(),
      S5 = fr(),
      x5 = Ce(),
      I5 = Fe(),
      T5 = Fr(),
      A5 = li(),
      P5 = ui(),
      w5 = P5("splice"),
      C5 = b5.TypeError,
      O5 = Math.max,
      M5 = Math.min,
      R5 = 9007199254740991,
      D5 = "Maximum allowed length exceeded";
    E5({
      target: "Array",
      proto: !0,
      forced: !w5
    }, {
      splice: function (t, r) {
        var i = I5(this),
          n = x5(i),
          a = _5(t, n),
          s = arguments.length,
          o, l, p, u, h, v;
        if (s === 0 ? o = l = 0 : s === 1 ? (o = 0, l = n - a) : (o = s - 2, l = M5(O5(S5(r), 0), n - a)), n + o - l > R5) throw C5(D5);
        for (p = T5(i, l), u = 0; u < l; u++) h = a + u, h in i && A5(p, u, i[h]);
        if (p.length = l, o < l) {
          for (u = a; u < n - l; u++) h = u + l, v = u + o, h in i ? i[v] = i[h] : delete i[v];
          for (u = n; u > n - l + o; u--) delete i[u - 1]
        } else if (o > l)
          for (u = n - l; u > a; u--) h = u + l - 1, v = u + o - 1, h in i ? i[v] = i[h] : delete i[v];
        for (u = 0; u < o; u++) i[u + a] = arguments[u + 2];
        return i.length = n - l + o, p
      }
    })
  });
  var OE = E(() => {
    var F5 = ke();
    F5("flat")
  });
  var ME = E(() => {
    var q5 = ke();
    q5("flatMap")
  });
  var DE = E((uoe, RE) => {
    "use strict";
    var L5 = Ia(),
      k5 = an();
    RE.exports = L5 ? {}.toString : function () {
      return "[object " + k5(this) + "]"
    }
  });
  var FE = E(() => {
    var N5 = Ia(),
      B5 = $t(),
      V5 = DE();
    N5 || B5(Object.prototype, "toString", V5, {
      unsafe: !0
    })
  });
  var NE = E((foe, kE) => {
    var Wl = Te(),
      G5 = fr(),
      z5 = qa(),
      H5 = ha(),
      j5 = Wl("".charAt),
      qE = Wl("".charCodeAt),
      W5 = Wl("".slice),
      LE = function (e) {
        return function (t, r) {
          var i = z5(H5(t)),
            n = G5(r),
            a = i.length,
            s, o;
          return n < 0 || n >= a ? e ? "" : void 0 : (s = qE(i, n), s < 55296 || s > 56319 || n + 1 === a || (o = qE(i, n + 1)) < 56320 || o > 57343 ? e ? j5(i, n) : s : e ? W5(i, n, n + 2) : (s - 55296 << 10) + (o - 56320) + 65536)
        }
      };
    kE.exports = {
      codeAt: LE(!1),
      charAt: LE(!0)
    }
  });
  var GE = E(() => {
    "use strict";
    var U5 = NE().charAt,
      X5 = qa(),
      BE = Rr(),
      $5 = Da(),
      VE = "String Iterator",
      K5 = BE.set,
      Y5 = BE.getterFor(VE);
    $5(String, "String", function (e) {
      K5(this, {
        type: VE,
        string: X5(e),
        index: 0
      })
    }, function () {
      var t = Y5(this),
        r = t.string,
        i = t.index,
        n;
      return i >= r.length ? {
        value: void 0,
        done: !0
      } : (n = U5(r, i), t.index += n.length, {
        value: n,
        done: !1
      })
    })
  });
  var HE = E((moe, zE) => {
    var Q5 = ue();
    zE.exports = Q5
  });
  var WE = E((voe, jE) => {
    ay();
    oy();
    uy();
    Il();
    Dy();
    Ly();
    Vy();
    jy();
    Wy();
    Xy();
    Ky();
    Zy();
    Jy();
    i0();
    Ol();
    a0();
    q0();
    L0();
    j0();
    W0();
    Y0();
    Z0();
    eE();
    nE();
    aE();
    TE();
    wE();
    CE();
    OE();
    ME();
    FE();
    GE();
    var Z5 = HE();
    jE.exports = Z5.Array
  });
  var XE = E((goe, UE) => {
    var J5 = WE();
    UE.exports = J5
  });
  var QE = E((yoe, YE) => {
    var ez = ii(),
      tz = qt(),
      $E = Sa().f,
      rz = fn(),
      KE = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      iz = function (e) {
        try {
          return $E(e)
        } catch {
          return rz(KE)
        }
      };
    YE.exports.f = function (t) {
      return KE && ez(t) == "Window" ? iz(t) : $E(tz(t))
    }
  });
  var JE = E((Eoe, ZE) => {
    var nz = Ve();
    ZE.exports = !nz(function () {
      return Object.isExtensible(Object.preventExtensions({}))
    })
  });
  var Kl = E((boe, r1) => {
    var az = ge(),
      sz = Te(),
      oz = tn(),
      lz = Je(),
      Ul = pt(),
      uz = dt().f,
      e1 = Sa(),
      hz = QE(),
      cz = da(),
      fz = JE(),
      t1 = !1,
      Yt = cz("meta"),
      pz = 0,
      Xl = Object.isExtensible || function () {
        return !0
      },
      $l = function (e) {
        uz(e, Yt, {
          value: {
            objectID: "O" + pz++,
            weakData: {}
          }
        })
      },
      dz = function (e, t) {
        if (!lz(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!Ul(e, Yt)) {
          if (!Xl(e)) return "F";
          if (!t) return "E";
          $l(e)
        }
        return e[Yt].objectID
      },
      mz = function (e, t) {
        if (!Ul(e, Yt)) {
          if (!Xl(e)) return !0;
          if (!t) return !1;
          $l(e)
        }
        return e[Yt].weakData
      },
      vz = function (e) {
        return fz && t1 && Xl(e) && !Ul(e, Yt) && $l(e), e
      },
      gz = function () {
        yz.enable = function () {}, t1 = !0;
        var e = e1.f,
          t = sz([].splice),
          r = {};
        r[Yt] = 1, e(r).length && (e1.f = function (i) {
          for (var n = e(i), a = 0, s = n.length; a < s; a++)
            if (n[a] === Yt) {
              t(n, a, 1);
              break
            } return n
        }, az({
          target: "Object",
          stat: !0,
          forced: !0
        }, {
          getOwnPropertyNames: hz.f
        }))
      },
      yz = r1.exports = {
        enable: gz,
        fastKey: dz,
        getWeakData: mz,
        onFreeze: vz
      };
    oz[Yt] = !0
  });
  var Na = E((_oe, s1) => {
    var Ez = ue(),
      bz = wt(),
      _z = ct(),
      Sz = Ke(),
      xz = Yi(),
      Iz = ml(),
      Tz = Ce(),
      i1 = ca(),
      Az = ln(),
      Pz = on(),
      n1 = dl(),
      wz = Ez.TypeError,
      ka = function (e, t) {
        this.stopped = e, this.result = t
      },
      a1 = ka.prototype;
    s1.exports = function (e, t, r) {
      var i = r && r.that,
        n = !!(r && r.AS_ENTRIES),
        a = !!(r && r.IS_ITERATOR),
        s = !!(r && r.INTERRUPTED),
        o = bz(t, i),
        l, p, u, h, v, d, f, m = function (g) {
          return l && n1(l, "normal", g), new ka(!0, g)
        },
        c = function (g) {
          return n ? (Sz(g), s ? o(g[0], g[1], m) : o(g[0], g[1])) : s ? o(g, m) : o(g)
        };
      if (a) l = e;
      else {
        if (p = Pz(e), !p) throw wz(xz(e) + " is not iterable");
        if (Iz(p)) {
          for (u = 0, h = Tz(e); h > u; u++)
            if (v = c(e[u]), v && i1(a1, v)) return v;
          return new ka(!1)
        }
        l = Az(e, p)
      }
      for (d = l.next; !(f = _z(d, l)).done;) {
        try {
          v = c(f.value)
        } catch (g) {
          n1(l, "throw", g)
        }
        if (typeof v == "object" && v && i1(a1, v)) return v
      }
      return new ka(!1)
    }
  });
  var Ba = E((Soe, o1) => {
    var Cz = ue(),
      Oz = ca(),
      Mz = Cz.TypeError;
    o1.exports = function (e, t) {
      if (Oz(t, e)) return e;
      throw Mz("Incorrect invocation")
    }
  });
  var h1 = E((xoe, u1) => {
    var Rz = Me(),
      Dz = Je(),
      l1 = Oa();
    u1.exports = function (e, t, r) {
      var i, n;
      return l1 && Rz(i = t.constructor) && i !== r && Dz(n = i.prototype) && n !== r.prototype && l1(e, n), e
    }
  });
  var p1 = E((Ioe, f1) => {
    "use strict";
    var Fz = ge(),
      qz = ue(),
      Lz = Te(),
      c1 = xa(),
      kz = $t(),
      Nz = Kl(),
      Bz = Na(),
      Vz = Ba(),
      Gz = Me(),
      Yl = Je(),
      Ql = Ve(),
      zz = Aa(),
      Hz = un(),
      jz = h1();
    f1.exports = function (e, t, r) {
      var i = e.indexOf("Map") !== -1,
        n = e.indexOf("Weak") !== -1,
        a = i ? "set" : "add",
        s = qz[e],
        o = s && s.prototype,
        l = s,
        p = {},
        u = function (g) {
          var y = Lz(o[g]);
          kz(o, g, g == "add" ? function (_) {
            return y(this, _ === 0 ? 0 : _), this
          } : g == "delete" ? function (b) {
            return n && !Yl(b) ? !1 : y(this, b === 0 ? 0 : b)
          } : g == "get" ? function (_) {
            return n && !Yl(_) ? void 0 : y(this, _ === 0 ? 0 : _)
          } : g == "has" ? function (_) {
            return n && !Yl(_) ? !1 : y(this, _ === 0 ? 0 : _)
          } : function (_, S) {
            return y(this, _ === 0 ? 0 : _, S), this
          })
        },
        h = c1(e, !Gz(s) || !(n || o.forEach && !Ql(function () {
          new s().entries().next()
        })));
      if (h) l = r.getConstructor(t, e, i, a), Nz.enable();
      else if (c1(e, !0)) {
        var v = new l,
          d = v[a](n ? {} : -0, 1) != v,
          f = Ql(function () {
            v.has(1)
          }),
          m = zz(function (g) {
            new s(g)
          }),
          c = !n && Ql(function () {
            for (var g = new s, y = 5; y--;) g[a](y, y);
            return !g.has(-0)
          });
        m || (l = t(function (g, y) {
          Vz(g, o);
          var b = jz(new s, g, l);
          return y != null && Bz(y, b[a], {
            that: b,
            AS_ENTRIES: i
          }), b
        }), l.prototype = o, o.constructor = l), (f || c) && (u("delete"), u("has"), i && u("get")), (c || d) && u(a), n && o.clear && delete o.clear
      }
      return p[e] = l, Fz({
        global: !0,
        forced: l != s
      }, p), Hz(l, e), n || r.setStrong(l, e, i), l
    }
  });
  var Va = E((Toe, d1) => {
    var Wz = $t();
    d1.exports = function (e, t, r) {
      for (var i in t) Wz(e, i, t[i], r);
      return e
    }
  });
  var b1 = E((Aoe, E1) => {
    "use strict";
    var Uz = dt().f,
      Xz = dr(),
      m1 = Va(),
      $z = wt(),
      Kz = Ba(),
      Yz = Na(),
      Qz = Da(),
      Zz = La(),
      pn = Tt(),
      v1 = Kl().fastKey,
      y1 = Rr(),
      g1 = y1.set,
      Zl = y1.getterFor;
    E1.exports = {
      getConstructor: function (e, t, r, i) {
        var n = e(function (p, u) {
            Kz(p, a), g1(p, {
              type: t,
              index: Xz(null),
              first: void 0,
              last: void 0,
              size: 0
            }), pn || (p.size = 0), u != null && Yz(u, p[i], {
              that: p,
              AS_ENTRIES: r
            })
          }),
          a = n.prototype,
          s = Zl(t),
          o = function (p, u, h) {
            var v = s(p),
              d = l(p, u),
              f, m;
            return d ? d.value = h : (v.last = d = {
              index: m = v1(u, !0),
              key: u,
              value: h,
              previous: f = v.last,
              next: void 0,
              removed: !1
            }, v.first || (v.first = d), f && (f.next = d), pn ? v.size++ : p.size++, m !== "F" && (v.index[m] = d)), p
          },
          l = function (p, u) {
            var h = s(p),
              v = v1(u),
              d;
            if (v !== "F") return h.index[v];
            for (d = h.first; d; d = d.next)
              if (d.key == u) return d
          };
        return m1(a, {
          clear: function () {
            for (var u = this, h = s(u), v = h.index, d = h.first; d;) d.removed = !0, d.previous && (d.previous = d.previous.next = void 0), delete v[d.index], d = d.next;
            h.first = h.last = void 0, pn ? h.size = 0 : u.size = 0
          },
          delete: function (p) {
            var u = this,
              h = s(u),
              v = l(u, p);
            if (v) {
              var d = v.next,
                f = v.previous;
              delete h.index[v.index], v.removed = !0, f && (f.next = d), d && (d.previous = f), h.first == v && (h.first = d), h.last == v && (h.last = f), pn ? h.size-- : u.size--
            }
            return !!v
          },
          forEach: function (u) {
            for (var h = s(this), v = $z(u, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : h.first;)
              for (v(d.value, d.key, this); d && d.removed;) d = d.previous
          },
          has: function (u) {
            return !!l(this, u)
          }
        }), m1(a, r ? {
          get: function (u) {
            var h = l(this, u);
            return h && h.value
          },
          set: function (u, h) {
            return o(this, u === 0 ? 0 : u, h)
          }
        } : {
          add: function (u) {
            return o(this, u = u === 0 ? 0 : u, u)
          }
        }), pn && Uz(a, "size", {
          get: function () {
            return s(this).size
          }
        }), n
      },
      setStrong: function (e, t, r) {
        var i = t + " Iterator",
          n = Zl(t),
          a = Zl(i);
        Qz(e, t, function (s, o) {
          g1(this, {
            type: i,
            target: s,
            state: n(s),
            kind: o,
            last: void 0
          })
        }, function () {
          for (var s = a(this), o = s.kind, l = s.last; l && l.removed;) l = l.previous;
          return !s.target || !(s.last = l = l ? l.next : s.state.first) ? (s.target = void 0, {
            value: void 0,
            done: !0
          }) : o == "keys" ? {
            value: l.key,
            done: !1
          } : o == "values" ? {
            value: l.value,
            done: !1
          } : {
            value: [l.key, l.value],
            done: !1
          }
        }, r ? "entries" : "values", !r, !0), Zz(t)
      }
    }
  });
  var _1 = E(() => {
    "use strict";
    var Jz = p1(),
      eH = b1();
    Jz("Map", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0)
      }
    }, eH)
  });
  var x1 = E((Coe, S1) => {
    var tH = ue();
    S1.exports = tH.Promise
  });
  var T1 = E((Ooe, I1) => {
    var rH = ue(),
      iH = Dr(),
      nH = Yi(),
      aH = rH.TypeError;
    I1.exports = function (e) {
      if (iH(e)) return e;
      throw aH(nH(e) + " is not a constructor")
    }
  });
  var w1 = E((Moe, P1) => {
    var A1 = Ke(),
      sH = T1(),
      oH = Re(),
      lH = oH("species");
    P1.exports = function (e, t) {
      var r = A1(e).constructor,
        i;
      return r === void 0 || (i = A1(r)[lH]) == null ? t : sH(i)
    }
  });
  var Jl = E((Roe, C1) => {
    var uH = lr();
    C1.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(uH)
  });
  var lu = E((Doe, k1) => {
    var st = ue(),
      hH = Fa(),
      cH = wt(),
      O1 = Me(),
      fH = pt(),
      pH = Ve(),
      M1 = yl(),
      dH = fn(),
      R1 = ma(),
      mH = Jl(),
      vH = hi(),
      au = st.setImmediate,
      su = st.clearImmediate,
      gH = st.process,
      eu = st.Dispatch,
      yH = st.Function,
      D1 = st.MessageChannel,
      EH = st.String,
      tu = 0,
      dn = {},
      F1 = "onreadystatechange",
      mn, qr, ru, iu;
    try {
      mn = st.location
    } catch {}
    var ou = function (e) {
        if (fH(dn, e)) {
          var t = dn[e];
          delete dn[e], t()
        }
      },
      nu = function (e) {
        return function () {
          ou(e)
        }
      },
      q1 = function (e) {
        ou(e.data)
      },
      L1 = function (e) {
        st.postMessage(EH(e), mn.protocol + "//" + mn.host)
      };
    (!au || !su) && (au = function (t) {
      var r = dH(arguments, 1);
      return dn[++tu] = function () {
        hH(O1(t) ? t : yH(t), void 0, r)
      }, qr(tu), tu
    }, su = function (t) {
      delete dn[t]
    }, vH ? qr = function (e) {
      gH.nextTick(nu(e))
    } : eu && eu.now ? qr = function (e) {
      eu.now(nu(e))
    } : D1 && !mH ? (ru = new D1, iu = ru.port2, ru.port1.onmessage = q1, qr = cH(iu.postMessage, iu)) : st.addEventListener && O1(st.postMessage) && !st.importScripts && mn && mn.protocol !== "file:" && !pH(L1) ? (qr = L1, st.addEventListener("message", q1, !1)) : F1 in R1("script") ? qr = function (e) {
      M1.appendChild(R1("script"))[F1] = function () {
        M1.removeChild(this), ou(e)
      }
    } : qr = function (e) {
      setTimeout(nu(e), 0)
    });
    k1.exports = {
      set: au,
      clear: su
    }
  });
  var B1 = E((Foe, N1) => {
    var bH = lr(),
      _H = ue();
    N1.exports = /ipad|iphone|ipod/i.test(bH) && _H.Pebble !== void 0
  });
  var G1 = E((qoe, V1) => {
    var SH = lr();
    V1.exports = /web0s(?!.*chrome)/i.test(SH)
  });
  var Y1 = E((Loe, K1) => {
    var kr = ue(),
      z1 = wt(),
      xH = va().f,
      uu = lu().set,
      IH = Jl(),
      TH = B1(),
      AH = G1(),
      hu = hi(),
      H1 = kr.MutationObserver || kr.WebKitMutationObserver,
      j1 = kr.document,
      W1 = kr.process,
      Ga = kr.Promise,
      U1 = xH(kr, "queueMicrotask"),
      $1 = U1 && U1.value,
      vn, Lr, gn, ci, cu, fu, za, X1;
    $1 || (vn = function () {
      var e, t;
      for (hu && (e = W1.domain) && e.exit(); Lr;) {
        t = Lr.fn, Lr = Lr.next;
        try {
          t()
        } catch (r) {
          throw Lr ? ci() : gn = void 0, r
        }
      }
      gn = void 0, e && e.enter()
    }, !IH && !hu && !AH && H1 && j1 ? (cu = !0, fu = j1.createTextNode(""), new H1(vn).observe(fu, {
      characterData: !0
    }), ci = function () {
      fu.data = cu = !cu
    }) : !TH && Ga && Ga.resolve ? (za = Ga.resolve(void 0), za.constructor = Ga, X1 = z1(za.then, za), ci = function () {
      X1(vn)
    }) : hu ? ci = function () {
      W1.nextTick(vn)
    } : (uu = z1(uu, kr), ci = function () {
      uu(vn)
    }));
    K1.exports = $1 || function (e) {
      var t = {
        fn: e,
        next: void 0
      };
      gn && (gn.next = t), Lr || (Lr = t, ci()), gn = t
    }
  });
  var pu = E((koe, Z1) => {
    "use strict";
    var Q1 = Pt(),
      PH = function (e) {
        var t, r;
        this.promise = new e(function (i, n) {
          if (t !== void 0 || r !== void 0) throw TypeError("Bad Promise constructor");
          t = i, r = n
        }), this.resolve = Q1(t), this.reject = Q1(r)
      };
    Z1.exports.f = function (e) {
      return new PH(e)
    }
  });
  var eb = E((Noe, J1) => {
    var wH = Ke(),
      CH = Je(),
      OH = pu();
    J1.exports = function (e, t) {
      if (wH(e), CH(t) && t.constructor === e) return t;
      var r = OH.f(e),
        i = r.resolve;
      return i(t), r.promise
    }
  });
  var rb = E((Boe, tb) => {
    var MH = ue();
    tb.exports = function (e, t) {
      var r = MH.console;
      r && r.error && (arguments.length == 1 ? r.error(e) : r.error(e, t))
    }
  });
  var nb = E((Voe, ib) => {
    ib.exports = function (e) {
      try {
        return {
          error: !1,
          value: e()
        }
      } catch (t) {
        return {
          error: !0,
          value: t
        }
      }
    }
  });
  var sb = E((Goe, ab) => {
    ab.exports = typeof window == "object"
  });
  var Pb = E(() => {
    "use strict";
    var Xa = ge(),
      ja = ni(),
      Qt = ue(),
      RH = ft(),
      Zt = ct(),
      Wa = x1(),
      lb = $t(),
      DH = Va(),
      ub = Oa(),
      FH = un(),
      qH = La(),
      du = Pt(),
      yn = Me(),
      LH = Je(),
      kH = Ba(),
      NH = en(),
      hb = Na(),
      BH = Aa(),
      VH = w1(),
      gb = lu().set,
      yb = Y1(),
      GH = eb(),
      zH = rb(),
      Eb = pu(),
      mu = nb(),
      Eu = Rr(),
      HH = xa(),
      jH = Re(),
      WH = sb(),
      Ua = hi(),
      cb = ur(),
      UH = jH("species"),
      Jt = "Promise",
      fb = Eu.get,
      XH = Eu.set,
      $H = Eu.getterFor(Jt),
      Nr = Wa && Wa.prototype,
      mt = Wa,
      fi = Nr,
      bb = Qt.TypeError,
      vu = Qt.document,
      bu = Qt.process,
      mi = Eb.f,
      KH = mi,
      YH = !!(vu && vu.createEvent && Qt.dispatchEvent),
      _b = yn(Qt.PromiseRejectionEvent),
      Sb = "unhandledrejection",
      QH = "rejectionhandled",
      pb = 0,
      xb = 1,
      ZH = 2,
      _u = 1,
      Ib = 2,
      gu = !1,
      Ha, db, Su, mb, En = HH(Jt, function () {
        var e = NH(mt),
          t = e !== String(mt);
        if (!t && cb === 66 || ja && !fi.finally) return !0;
        if (cb >= 51 && /native code/.test(e)) return !1;
        var r = new mt(function (a) {
            a(1)
          }),
          i = function (a) {
            a(function () {}, function () {})
          },
          n = r.constructor = {};
        return n[UH] = i, gu = r.then(function () {}) instanceof i, gu ? !t && WH && !_b : !0
      }),
      JH = En || !BH(function (e) {
        mt.all(e).catch(function () {})
      }),
      Tb = function (e) {
        var t;
        return LH(e) && yn(t = e.then) ? t : !1
      },
      xu = function (e, t) {
        if (!e.notified) {
          e.notified = !0;
          var r = e.reactions;
          yb(function () {
            for (var i = e.value, n = e.state == xb, a = 0; r.length > a;) {
              var s = r[a++],
                o = n ? s.ok : s.fail,
                l = s.resolve,
                p = s.reject,
                u = s.domain,
                h, v, d;
              try {
                o ? (n || (e.rejection === Ib && tj(e), e.rejection = _u), o === !0 ? h = i : (u && u.enter(), h = o(i), u && (u.exit(), d = !0)), h === s.promise ? p(bb("Promise-chain cycle")) : (v = Tb(h)) ? Zt(v, h, l, p) : l(h)) : p(i)
              } catch (f) {
                u && !d && u.exit(), p(f)
              }
            }
            e.reactions = [], e.notified = !1, t && !e.rejection && ej(e)
          })
        }
      },
      Ab = function (e, t, r) {
        var i, n;
        YH ? (i = vu.createEvent("Event"), i.promise = t, i.reason = r, i.initEvent(e, !1, !0), Qt.dispatchEvent(i)) : i = {
          promise: t,
          reason: r
        }, !_b && (n = Qt["on" + e]) ? n(i) : e === Sb && zH("Unhandled promise rejection", r)
      },
      ej = function (e) {
        Zt(gb, Qt, function () {
          var t = e.facade,
            r = e.value,
            i = vb(e),
            n;
          if (i && (n = mu(function () {
              Ua ? bu.emit("unhandledRejection", r, t) : Ab(Sb, t, r)
            }), e.rejection = Ua || vb(e) ? Ib : _u, n.error)) throw n.value
        })
      },
      vb = function (e) {
        return e.rejection !== _u && !e.parent
      },
      tj = function (e) {
        Zt(gb, Qt, function () {
          var t = e.facade;
          Ua ? bu.emit("rejectionHandled", t) : Ab(QH, t, e.value)
        })
      },
      pi = function (e, t, r) {
        return function (i) {
          e(t, i, r)
        }
      },
      di = function (e, t, r) {
        e.done || (e.done = !0, r && (e = r), e.value = t, e.state = ZH, xu(e, !0))
      },
      yu = function (e, t, r) {
        if (!e.done) {
          e.done = !0, r && (e = r);
          try {
            if (e.facade === t) throw bb("Promise can't be resolved itself");
            var i = Tb(t);
            i ? yb(function () {
              var n = {
                done: !1
              };
              try {
                Zt(i, t, pi(yu, n, e), pi(di, n, e))
              } catch (a) {
                di(n, a, e)
              }
            }) : (e.value = t, e.state = xb, xu(e, !1))
          } catch (n) {
            di({
              done: !1
            }, n, e)
          }
        }
      };
    if (En && (mt = function (t) {
        kH(this, fi), du(t), Zt(Ha, this);
        var r = fb(this);
        try {
          t(pi(yu, r), pi(di, r))
        } catch (i) {
          di(r, i)
        }
      }, fi = mt.prototype, Ha = function (t) {
        XH(this, {
          type: Jt,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: pb,
          value: void 0
        })
      }, Ha.prototype = DH(fi, {
        then: function (t, r) {
          var i = $H(this),
            n = i.reactions,
            a = mi(VH(this, mt));
          return a.ok = yn(t) ? t : !0, a.fail = yn(r) && r, a.domain = Ua ? bu.domain : void 0, i.parent = !0, n[n.length] = a, i.state != pb && xu(i, !1), a.promise
        },
        catch: function (e) {
          return this.then(void 0, e)
        }
      }), db = function () {
        var e = new Ha,
          t = fb(e);
        this.promise = e, this.resolve = pi(yu, t), this.reject = pi(di, t)
      }, Eb.f = mi = function (e) {
        return e === mt || e === Su ? new db(e) : KH(e)
      }, !ja && yn(Wa) && Nr !== Object.prototype)) {
      mb = Nr.then, gu || (lb(Nr, "then", function (t, r) {
        var i = this;
        return new mt(function (n, a) {
          Zt(mb, i, n, a)
        }).then(t, r)
      }, {
        unsafe: !0
      }), lb(Nr, "catch", fi.catch, {
        unsafe: !0
      }));
      try {
        delete Nr.constructor
      } catch {}
      ub && ub(Nr, fi)
    }
    Xa({
      global: !0,
      wrap: !0,
      forced: En
    }, {
      Promise: mt
    });
    FH(mt, Jt, !1, !0);
    qH(Jt);
    Su = RH(Jt);
    Xa({
      target: Jt,
      stat: !0,
      forced: En
    }, {
      reject: function (t) {
        var r = mi(this);
        return Zt(r.reject, void 0, t), r.promise
      }
    });
    Xa({
      target: Jt,
      stat: !0,
      forced: ja || En
    }, {
      resolve: function (t) {
        return GH(ja && this === Su ? mt : this, t)
      }
    });
    Xa({
      target: Jt,
      stat: !0,
      forced: JH
    }, {
      all: function (t) {
        var r = this,
          i = mi(r),
          n = i.resolve,
          a = i.reject,
          s = mu(function () {
            var o = du(r.resolve),
              l = [],
              p = 0,
              u = 1;
            hb(t, function (h) {
              var v = p++,
                d = !1;
              u++, Zt(o, r, h).then(function (f) {
                d || (d = !0, l[v] = f, --u || n(l))
              }, a)
            }), --u || n(l)
          });
        return s.error && a(s.value), i.promise
      },
      race: function (t) {
        var r = this,
          i = mi(r),
          n = i.reject,
          a = mu(function () {
            var s = du(r.resolve);
            hb(t, function (o) {
              Zt(s, r, o).then(i.resolve, n)
            })
          });
        return a.error && n(a.value), i.promise
      }
    })
  });
  var Lb = E((joe, qb) => {
    var Rb = ue(),
      Db = Qi(),
      Fb = Me(),
      rj = dr(),
      $a = Ca(),
      ij = $t(),
      nj = Re(),
      aj = ni(),
      wb = "USE_FUNCTION_CONSTRUCTOR",
      Cb = nj("asyncIterator"),
      Ob = Rb.AsyncIterator,
      Mb = Db.AsyncIteratorPrototype,
      Nt, Iu;
    if (Mb) Nt = Mb;
    else if (Fb(Ob)) Nt = Ob.prototype;
    else if (Db[wb] || Rb[wb]) try {
      Iu = $a($a($a(Function("return async function*(){}()")()))), $a(Iu) === Object.prototype && (Nt = Iu)
    } catch {}
    Nt ? aj && (Nt = rj(Nt)) : Nt = {};
    Fb(Nt[Cb]) || ij(Nt, Cb, function () {
      return this
    });
    qb.exports = Nt
  });
  var wu = E((Woe, Vb) => {
    "use strict";
    var Tu = Fa(),
      Ka = Ke(),
      sj = dr(),
      kb = hr(),
      oj = Va(),
      Nb = Rr(),
      lj = ft(),
      uj = Lb(),
      Ya = lj("Promise"),
      hj = Nb.set,
      Au = Nb.get,
      Pu = function (e, t, r) {
        var i = e.done;
        Ya.resolve(e.value).then(function (n) {
          t({
            done: i,
            value: n
          })
        }, r)
      },
      Bb = function (t) {
        hj(this, {
          iterator: Ka(t),
          next: t.next
        })
      };
    Bb.prototype = oj(sj(uj), {
      next: function (t) {
        var r = Au(this),
          i = !!arguments.length;
        return new Ya(function (n, a) {
          var s = Ka(Tu(r.next, r.iterator, i ? [t] : []));
          Pu(s, n, a)
        })
      },
      return: function (e) {
        var t = Au(this).iterator,
          r = !!arguments.length;
        return new Ya(function (i, n) {
          var a = kb(t, "return");
          if (a === void 0) return i({
            done: !0,
            value: e
          });
          var s = Ka(Tu(a, t, r ? [e] : []));
          Pu(s, i, n)
        })
      },
      throw: function (e) {
        var t = Au(this).iterator,
          r = !!arguments.length;
        return new Ya(function (i, n) {
          var a = kb(t, "throw");
          if (a === void 0) return n(e);
          var s = Ka(Tu(a, t, r ? [e] : []));
          Pu(s, i, n)
        })
      }
    });
    Vb.exports = Bb
  });
  var zb = E((Uoe, Gb) => {
    var cj = ct(),
      fj = wu(),
      pj = Ke(),
      dj = ln(),
      mj = hr(),
      vj = Re(),
      gj = vj("asyncIterator");
    Gb.exports = function (e, t) {
      var r = arguments.length < 2 ? mj(e, gj) : t;
      return r ? pj(cj(r, e)) : new fj(dj(e))
    }
  });
  var jb = E((Xoe, Hb) => {
    var yj = ue();
    Hb.exports = function (e) {
      return yj[e].prototype
    }
  });
  var $b = E(($oe, Xb) => {
    "use strict";
    var Ej = ue(),
      Wb = ct(),
      Ub = Pt(),
      Cu = Ke(),
      bj = ft(),
      _j = hr(),
      Sj = 9007199254740991,
      xj = Ej.TypeError,
      bn = function (e) {
        var t = e == 0,
          r = e == 1,
          i = e == 2,
          n = e == 3;
        return function (a, s, o) {
          Cu(a);
          var l = bj("Promise"),
            p = Ub(a.next),
            u = 0,
            h = s !== void 0;
          return (h || !t) && Ub(s), new l(function (v, d) {
            var f = function (g, y) {
                try {
                  var b = _j(a, "return");
                  if (b) return l.resolve(Wb(b, a)).then(function () {
                    g(y)
                  }, function (_) {
                    d(_)
                  })
                } catch (_) {
                  return d(_)
                }
                g(y)
              },
              m = function (g) {
                f(d, g)
              },
              c = function () {
                try {
                  if (t && u > Sj && h) throw xj("The allowed number of iterations has been exceeded");
                  l.resolve(Cu(Wb(p, a))).then(function (g) {
                    try {
                      if (Cu(g).done) t ? (o.length = u, v(o)) : v(n ? !1 : i || void 0);
                      else {
                        var y = g.value;
                        h ? l.resolve(t ? s(y, u) : s(y)).then(function (b) {
                          r ? c() : i ? b ? c() : f(v, !1) : t ? (o[u++] = b, c()) : b ? f(v, n || y) : c()
                        }, m) : (o[u++] = y, c())
                      }
                    } catch (b) {
                      m(b)
                    }
                  }, m)
                } catch (g) {
                  m(g)
                }
              };
            c()
          })
        }
      };
    Xb.exports = {
      toArray: bn(0),
      forEach: bn(1),
      every: bn(2),
      some: bn(3),
      find: bn(4)
    }
  });
  var Yb = E((Koe, Kb) => {
    "use strict";
    var Ij = wt(),
      Tj = Fe(),
      Aj = Dr(),
      Pj = zb(),
      wj = ln(),
      Cj = on(),
      Oj = hr(),
      Mj = jb(),
      Rj = ft(),
      Dj = Re(),
      Fj = wu(),
      qj = $b().toArray,
      Lj = Dj("asyncIterator"),
      kj = Mj("Array").values;
    Kb.exports = function (t) {
      var r = this,
        i = arguments.length,
        n = i > 1 ? arguments[1] : void 0,
        a = i > 2 ? arguments[2] : void 0;
      return new(Rj("Promise"))(function (s) {
        var o = Tj(t);
        n !== void 0 && (n = Ij(n, a));
        var l = Oj(o, Lj),
          p = l ? void 0 : Cj(o) || kj,
          u = Aj(r) ? new r : [],
          h = l ? Pj(o, l) : new Fj(wj(o, p));
        s(qj(h, n, u))
      })
    }
  });
  var Qb = E(() => {
    var Nj = ge(),
      Bj = Yb();
    Nj({
      target: "Array",
      stat: !0
    }, {
      fromAsync: Bj
    })
  });
  var Zb = E(() => {
    Il()
  });
  var Jb = E(() => {
    "use strict";
    var Vj = ge(),
      Gj = Lt().filterReject,
      zj = ke();
    Vj({
      target: "Array",
      proto: !0
    }, {
      filterOut: function (t) {
        return Gj(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    zj("filterOut")
  });
  var e_ = E(() => {
    "use strict";
    var Hj = ge(),
      jj = Lt().filterReject,
      Wj = ke();
    Hj({
      target: "Array",
      proto: !0
    }, {
      filterReject: function (t) {
        return jj(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    Wj("filterReject")
  });
  var Ou = E((nle, r_) => {
    var Uj = wt(),
      Xj = Cr(),
      $j = Fe(),
      Kj = Ce(),
      t_ = function (e) {
        var t = e == 1;
        return function (r, i, n) {
          for (var a = $j(r), s = Xj(a), o = Uj(i, n), l = Kj(s), p, u; l-- > 0;)
            if (p = s[l], u = o(p, l, a), u) switch (e) {
              case 0:
                return p;
              case 1:
                return l
            }
          return t ? -1 : void 0
        }
      };
    r_.exports = {
      findLast: t_(0),
      findLastIndex: t_(1)
    }
  });
  var i_ = E(() => {
    "use strict";
    var Yj = ge(),
      Qj = Ou().findLast,
      Zj = ke();
    Yj({
      target: "Array",
      proto: !0
    }, {
      findLast: function (t) {
        return Qj(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    Zj("findLast")
  });
  var n_ = E(() => {
    "use strict";
    var Jj = ge(),
      eW = Ou().findLastIndex,
      tW = ke();
    Jj({
      target: "Array",
      proto: !0
    }, {
      findLastIndex: function (t) {
        return eW(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    tW("findLastIndex")
  });
  var s_ = E((ule, a_) => {
    a_.exports = function (e, t) {
      for (var r = 0, i = t.length, n = new e(i); i > r;) n[r] = t[r++];
      return n
    }
  });
  var l_ = E((hle, o_) => {
    var rW = ue(),
      iW = wt(),
      nW = Te(),
      aW = Cr(),
      sW = Fe(),
      oW = Zi(),
      lW = Ce(),
      uW = dr(),
      hW = s_(),
      cW = rW.Array,
      fW = nW([].push);
    o_.exports = function (e, t, r, i) {
      for (var n = sW(e), a = aW(n), s = iW(t, r), o = uW(null), l = lW(a), p = 0, u, h, v; l > p; p++) v = a[p], h = oW(s(v, p, n)), h in o ? fW(o[h], v) : o[h] = [v];
      if (i && (u = i(n), u !== cW))
        for (h in o) o[h] = hW(u, o[h]);
      return o
    }
  });
  var u_ = E(() => {
    "use strict";
    var pW = ge(),
      dW = l_(),
      mW = Tl(),
      vW = ke();
    pW({
      target: "Array",
      proto: !0
    }, {
      groupBy: function (t) {
        var r = arguments.length > 1 ? arguments[1] : void 0;
        return dW(this, t, r, mW)
      }
    });
    vW("groupBy")
  });
  var f_ = E(() => {
    var gW = ge(),
      yW = pr(),
      h_ = Object.isFrozen,
      c_ = function (e, t) {
        if (!h_ || !yW(e) || !h_(e)) return !1;
        for (var r = 0, i = e.length, n; r < i;)
          if (n = e[r++], !(typeof n == "string" || t && typeof n > "u")) return !1;
        return i !== 0
      };
    gW({
      target: "Array",
      stat: !0
    }, {
      isTemplateObject: function (t) {
        if (!c_(t, !0)) return !1;
        var r = t.raw;
        return !(r.length !== t.length || !c_(r, !1))
      }
    })
  });
  var m_ = E(() => {
    "use strict";
    var EW = Tt(),
      bW = ke(),
      p_ = Fe(),
      d_ = Ce(),
      _W = dt().f;
    EW && !("lastItem" in []) && (_W(Array.prototype, "lastItem", {
      configurable: !0,
      get: function () {
        var t = p_(this),
          r = d_(t);
        return r == 0 ? void 0 : t[r - 1]
      },
      set: function (t) {
        var r = p_(this),
          i = d_(r);
        return r[i == 0 ? 0 : i - 1] = t
      }
    }), bW("lastItem"))
  });
  var v_ = E(() => {
    "use strict";
    var SW = Tt(),
      xW = ke(),
      IW = Fe(),
      TW = Ce(),
      AW = dt().f;
    SW && !("lastIndex" in []) && (AW(Array.prototype, "lastIndex", {
      configurable: !0,
      get: function () {
        var t = IW(this),
          r = TW(t);
        return r == 0 ? 0 : r - 1
      }
    }), xW("lastIndex"))
  });
  var E_ = E((Ele, y_) => {
    "use strict";
    var PW = ft(),
      Qa = Te(),
      wW = Pt(),
      CW = Ce(),
      OW = Fe(),
      MW = Fr(),
      g_ = PW("Map"),
      Mu = g_.prototype,
      RW = Qa(Mu.forEach),
      DW = Qa(Mu.has),
      FW = Qa(Mu.set),
      qW = Qa([].push);
    y_.exports = function (t) {
      var r = OW(this),
        i = CW(r),
        n = MW(r, 0),
        a = new g_,
        s = t != null ? wW(t) : function (u) {
          return u
        },
        o, l, p;
      for (o = 0; o < i; o++) l = r[o], p = s(l), DW(a, p) || FW(a, p, l);
      return RW(a, function (u) {
        qW(n, u)
      }), n
    }
  });
  var b_ = E(() => {
    "use strict";
    var LW = ge(),
      kW = ke(),
      NW = E_();
    LW({
      target: "Array",
      proto: !0
    }, {
      uniqueBy: NW
    });
    kW("uniqueBy")
  });
  var S_ = E((Sle, __) => {
    var BW = XE();
    _1();
    Pb();
    Qb();
    Zb();
    Jb();
    e_();
    i_();
    n_();
    u_();
    f_();
    m_();
    v_();
    b_();
    __.exports = BW
  });
  var V_ = E(is => {
    "use strict";
    Object.defineProperty(is, "__esModule", {
      value: !0
    });
    is.strFromU8 = B_;
    is.unzip = ZW;
    var x_ = {},
      VW = function (e, t, r, i, n) {
        let a = new Worker(x_[t] || (x_[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
          type: "text/javascript"
        }))));
        return a.onmessage = function (s) {
          let o = s.data,
            l = o.$e$;
          if (l) {
            let p = new Error(l[0]);
            p.code = l[1], p.stack = l[2], n(p, null)
          } else n(null, o)
        }, a.postMessage(r, i), a
      },
      tt = Uint8Array,
      yr = Uint16Array,
      Ru = Uint32Array,
      Du = new tt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      Fu = new tt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      P_ = new tt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      w_ = function (e, t) {
        let r = new yr(31);
        for (var i = 0; i < 31; ++i) r[i] = t += 1 << e[i - 1];
        let n = new Ru(r[30]);
        for (i = 1; i < 30; ++i)
          for (let a = r[i]; a < r[i + 1]; ++a) n[a] = a - r[i] << 5 | i;
        return [r, n]
      },
      C_ = w_(Du, 2),
      qu = C_[0],
      GW = C_[1];
    qu[28] = 258, GW[258] = 28;
    var zW = w_(Fu, 0),
      O_ = zW[0],
      ts = new yr(32768);
    for (xe = 0; xe < 32768; ++xe) {
      let e = (43690 & xe) >>> 1 | (21845 & xe) << 1;
      e = (52428 & e) >>> 2 | (13107 & e) << 2, e = (61680 & e) >>> 4 | (3855 & e) << 4, ts[xe] = ((65280 & e) >>> 8 | (255 & e) << 8) >>> 1
    }
    var xe, vi = function (e, t, r) {
        let i = e.length,
          n = 0,
          a = new yr(t);
        for (; n < i; ++n) e[n] && ++a[e[n] - 1];
        let s = new yr(t);
        for (n = 0; n < t; ++n) s[n] = s[n - 1] + a[n - 1] << 1;
        let o;
        if (r) {
          o = new yr(1 << t);
          let l = 15 - t;
          for (n = 0; n < i; ++n)
            if (e[n]) {
              let p = n << 4 | e[n],
                u = t - e[n],
                h = s[e[n] - 1]++ << u;
              for (let v = h | (1 << u) - 1; h <= v; ++h) o[ts[h] >>> l] = p
            }
        } else
          for (o = new yr(i), n = 0; n < i; ++n) e[n] && (o[n] = ts[s[e[n] - 1]++] >>> 15 - e[n]);
        return o
      },
      _n = new tt(288);
    for (xe = 0; xe < 144; ++xe) _n[xe] = 8;
    for (xe = 144; xe < 256; ++xe) _n[xe] = 9;
    for (xe = 256; xe < 280; ++xe) _n[xe] = 7;
    for (xe = 280; xe < 288; ++xe) _n[xe] = 8;
    var M_ = new tt(32);
    for (xe = 0; xe < 32; ++xe) M_[xe] = 5;
    var R_ = vi(_n, 9, 1),
      D_ = vi(M_, 5, 1),
      Ja = function (e) {
        let t = e[0];
        for (let r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
        return t
      },
      vt = function (e, t, r) {
        let i = t / 8 | 0;
        return (e[i] | e[i + 1] << 8) >> (7 & t) & r
      },
      es = function (e, t) {
        let r = t / 8 | 0;
        return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
      },
      F_ = function (e) {
        return (e + 7) / 8 | 0
      },
      rs = function (e, t, r) {
        (t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
        let i = new(e.BYTES_PER_ELEMENT === 2 ? yr : e.BYTES_PER_ELEMENT === 4 ? Ru : tt)(r - t);
        return i.set(e.subarray(t, r)), i
      },
      q_ = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
      et = function (e, t, r) {
        let i = new Error(t || q_[e]);
        if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, et), !r) throw i;
        return i
      },
      L_ = function (e, t, r) {
        let i = e.length;
        if (!i || r && r.f && !r.l) return t || new tt(0);
        let n = !t || r,
          a = !r || r.i;
        r || (r = {}), t || (t = new tt(3 * i));
        let s = function (_) {
            let S = t.length;
            if (_ > S) {
              let I = new tt(Math.max(2 * S, _));
              I.set(t), t = I
            }
          },
          o = r.f || 0,
          l = r.p || 0,
          p = r.b || 0,
          u = r.l,
          h = r.d,
          v = r.m,
          d = r.n,
          f = 8 * i;
        do {
          if (!u) {
            o = vt(e, l, 1);
            let x = vt(e, l + 1, 3);
            if (l += 3, !x) {
              let P = e[(c = F_(l) + 4) - 4] | e[c - 3] << 8,
                L = c + P;
              if (L > i) {
                a && et(0);
                break
              }
              n && s(p + P), t.set(e.subarray(c, L), p), r.b = p += P, r.p = l = 8 * L, r.f = o;
              continue
            }
            if (x === 1) u = R_, h = D_, v = 9, d = 5;
            else if (x === 2) {
              let P = vt(e, l, 31) + 257,
                L = vt(e, l + 10, 15) + 4,
                D = P + vt(e, l + 5, 31) + 1;
              l += 14;
              let O = new tt(D),
                B = new tt(19);
              for (var m = 0; m < L; ++m) B[P_[m]] = vt(e, l + 3 * m, 7);
              l += 3 * L;
              let R = Ja(B),
                F = (1 << R) - 1,
                V = vi(B, R, 1);
              for (m = 0; m < D;) {
                let ee = V[vt(e, l, F)];
                var c;
                if (l += 15 & ee, (c = ee >>> 4) < 16) O[m++] = c;
                else {
                  var g = 0;
                  let A = 0;
                  for (c === 16 ? (A = 3 + vt(e, l, 3), l += 2, g = O[m - 1]) : c === 17 ? (A = 3 + vt(e, l, 7), l += 3) : c === 18 && (A = 11 + vt(e, l, 127), l += 7); A--;) O[m++] = g
                }
              }
              let W = O.subarray(0, P);
              var y = O.subarray(P);
              v = Ja(W), d = Ja(y), u = vi(W, v, 1), h = vi(y, d, 1)
            } else et(1);
            if (l > f) {
              a && et(0);
              break
            }
          }
          n && s(p + 131072);
          let _ = (1 << v) - 1,
            S = (1 << d) - 1,
            I = l;
          for (;; I = l) {
            let x = (g = u[es(e, l) & _]) >>> 4;
            if (l += 15 & g, l > f) {
              a && et(0);
              break
            }
            if (g || et(2), x < 256) t[p++] = x;
            else {
              if (x === 256) {
                I = l, u = null;
                break
              } {
                let P = x - 254;
                if (x > 264) {
                  var b = Du[m = x - 257];
                  P = vt(e, l, (1 << b) - 1) + qu[m], l += b
                }
                let L = h[es(e, l) & S],
                  D = L >>> 4;
                if (L || et(3), l += 15 & L, y = O_[D], D > 3 && (b = Fu[D], y += es(e, l) & (1 << b) - 1, l += b), l > f) {
                  a && et(0);
                  break
                }
                n && s(p + 131072);
                let O = p + P;
                for (; p < O; p += 4) t[p] = t[p - y], t[p + 1] = t[p + 1 - y], t[p + 2] = t[p + 2 - y], t[p + 3] = t[p + 3 - y];
                p = O
              }
            }
          }
          r.l = u, r.p = I, r.b = p, r.f = o, u && (o = 1, r.m = v, r.d = h, r.n = d)
        } while (!o);
        return p === t.length ? t : rs(t, 0, p)
      },
      HW = function (e, t) {
        let r = {};
        for (var i in e) r[i] = e[i];
        for (var i in t) r[i] = t[i];
        return r
      },
      I_ = function (e, t, r) {
        let i = e(),
          n = e.toString(),
          a = n.slice(n.indexOf("[") + 1, n.lastIndexOf("]")).replace(/\s+/g, "").split(",");
        for (let s = 0; s < i.length; ++s) {
          let o = i[s],
            l = a[s];
          if (typeof o == "function") {
            t += ";" + l + "=";
            let p = o.toString();
            if (o.prototype)
              if (p.indexOf("[native code]") !== -1) {
                let u = p.indexOf(" ", 8) + 1;
                t += p.slice(u, p.indexOf("(", u))
              } else {
                t += p;
                for (let u in o.prototype) t += ";" + l + ".prototype." + u + "=" + o.prototype[u].toString()
              }
            else t += p
          } else r[l] = o
        }
        return [t, r]
      },
      Za = [],
      jW = function (e) {
        let t = [];
        for (let r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
        return t
      },
      WW = function (e, t, r, i) {
        let n;
        if (!Za[r]) {
          let s = "",
            o = {},
            l = e.length - 1;
          for (let p = 0; p < l; ++p) n = I_(e[p], s, o), s = n[0], o = n[1];
          Za[r] = I_(e[l], s, o)
        }
        let a = HW({}, Za[r][1]);
        return VW(Za[r][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + t.toString() + "}", r, a, jW(a), i)
      },
      UW = function () {
        return [tt, yr, Ru, Du, Fu, P_, qu, O_, R_, D_, ts, q_, vi, Ja, vt, es, F_, rs, et, L_, Lu, k_, N_]
      },
      k_ = function (e) {
        return postMessage(e, [e.buffer])
      },
      N_ = function (e) {
        return e && e.size && new tt(e.size)
      },
      XW = function (e, t, r, i, n, a) {
        var s = WW(r, i, n, function (o, l) {
          s.terminate(), a(o, l)
        });
        return s.postMessage([e, t], t.consume ? [e.buffer] : []),
          function () {
            s.terminate()
          }
      },
      gr = function (e, t) {
        return e[t] | e[t + 1] << 8
      },
      er = function (e, t) {
        return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
      };

    function $W(e, t, r) {
      return r || (r = t, t = {}), typeof r != "function" && et(7), XW(e, t, [UW], function (i) {
        return k_(Lu(i.data[0], N_(i.data[1])))
      }, 1, r)
    }

    function Lu(e, t) {
      return L_(e, t)
    }
    var T_ = typeof TextDecoder < "u" && new TextDecoder,
      KW = function (e) {
        for (let t = "", r = 0;;) {
          let i = e[r++],
            n = (i > 127) + (i > 223) + (i > 239);
          if (r + n > e.length) return [t, rs(e, r - 1)];
          n ? n === 3 ? (i = ((15 & i) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, t += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : t += 1 & n ? String.fromCharCode((31 & i) << 6 | 63 & e[r++]) : String.fromCharCode((15 & i) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(i)
        }
      };

    function B_(e, t) {
      if (t) {
        let r = "";
        for (let i = 0; i < e.length; i += 16384) r += String.fromCharCode.apply(null, e.subarray(i, i + 16384));
        return r
      }
      if (T_) return T_.decode(e); {
        let r = KW(e),
          i = r[0];
        return r[1].length && et(8), i
      }
    }
    var YW = function (e, t) {
        return t + 30 + gr(e, t + 26) + gr(e, t + 28)
      },
      QW = function (e, t, r) {
        let i = gr(e, t + 28),
          n = B_(e.subarray(t + 46, t + 46 + i), !(2048 & gr(e, t + 8))),
          a = t + 46 + i,
          s = er(e, t + 20),
          o = r && s === 4294967295 ? z64e(e, a) : [s, er(e, t + 24), er(e, t + 42)],
          l = o[0],
          p = o[1],
          u = o[2];
        return [gr(e, t + 10), l, p, n, a + gr(e, t + 30) + gr(e, t + 32), u]
      },
      A_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function (e) {
        e()
      };

    function ZW(e, t, r) {
      r || (r = t, t = {}), typeof r != "function" && et(7);
      let i = [],
        n = function () {
          for (let p = 0; p < i.length; ++p) i[p]()
        },
        a = {},
        s = function (p, u) {
          A_(function () {
            r(p, u)
          })
        };
      A_(function () {
        s = r
      });
      let o = e.length - 22;
      for (; er(e, o) !== 101010256; --o)
        if (!o || e.length - o > 65558) return s(et(13, 0, 1), null), n;
      let l = gr(e, o + 8);
      if (l) {
        let p = l,
          u = er(e, o + 16),
          h = u === 4294967295 || p === 65535;
        if (h) {
          let f = er(e, o - 12);
          h = er(e, f) === 101075792, h && (p = l = er(e, f + 32), u = er(e, f + 48))
        }
        let v = t && t.filter,
          d = function () {
            let f = QW(e, u, h),
              m = f[0],
              c = f[1],
              g = f[2],
              y = f[3],
              b = f[4],
              _ = f[5],
              S = YW(e, _);
            u = b;
            let I = function (x, P) {
              x ? (n(), s(x, null)) : (P && (a[y] = P), --l || s(null, a))
            };
            if (!v || v({
                name: y,
                size: c,
                originalSize: g,
                compression: m
              }))
              if (m)
                if (m === 8) {
                  let x = e.subarray(S, S + c);
                  if (c < 32e4) try {
                    I(null, Lu(x, new tt(g)))
                  } catch (P) {
                    I(P, null)
                  } else i.push($W(x, {
                    size: g
                  }, I))
                } else I(et(14, "unknown compression type " + m, 1), null);
            else I(null, rs(e, S, S + c));
            else I(null, null)
          };
        for (let f = 0; f < p; ++f) d(f)
      } else s(null, {});
      return n
    }
  });
  var z_ = {};
  iw(z_, {
    fetchLottie: () => aU,
    unZipDotLottie: () => G_
  });

  function JW(e) {
    let t = JSON.parse(e);
    if (!("animations" in t)) throw new Error("Manifest not found");
    if (t.animations.length === 0) throw new Error("No animations listed in the manifest");
    return t
  }

  function eU(e) {
    let t = new Uint8Array(e, 0, 32);
    return t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4
  }
  async function tU(e) {
    return await fetch(new URL(e).href).then(t => t.arrayBuffer())
  }
  async function rU(e) {
    return (await new Promise(r => {
      let i = new FileReader;
      i.readAsDataURL(new Blob([e])), i.onload = () => r(i.result)
    })).split(",", 2)[1]
  }
  async function iU(e) {
    let t = new Uint8Array(e),
      r = await new Promise((i, n) => {
        (0, ns.unzip)(t, (a, s) => a ? n(a) : i(s))
      });
    return {
      read: i => (0, ns.strFromU8)(r[i]),
      readB64: async i => await rU(r[i])
    }
  }
  async function nU(e, t) {
    if (!("assets" in e)) return e;
    async function r(n) {
      let {
        p: a
      } = n;
      if (a == null || t.read(`images/${a}`) == null) return n;
      let s = a.split(".").pop(),
        o = await t.readB64(`images/${a}`);
      if (s ? .startsWith("data:")) return n.p = s, n.e = 1, n;
      switch (s) {
        case "svg":
        case "svg+xml":
          n.p = `data:image/svg+xml;base64,${o}`;
          break;
        case "png":
        case "jpg":
        case "jpeg":
        case "gif":
        case "webp":
          n.p = `data:image/${s};base64,${o}`;
          break;
        default:
          n.p = `data:;base64,${o}`
      }
      return n.e = 1, n
    }
    return (await Promise.all(e.assets.map(r))).map((n, a) => {
      e.assets[a] = n
    }), e
  }
  async function G_(e) {
    let t = await iU(e),
      r = JW(t.read("manifest.json"));
    return (await Promise.all(r.animations.map(n => {
      let a = JSON.parse(t.read(`animations/${n.id}.json`));
      return nU(a, t)
    })))[0]
  }
  async function aU(e) {
    let t = await tU(e);
    return eU(t) ? await G_(t) : JSON.parse(new TextDecoder().decode(t))
  }
  var ns, H_ = rw(() => {
    ns = nw(V_())
  });
  var $_ = E(gt => {
    "use strict";
    var Vu = ht().default;
    Object.defineProperty(gt, "__esModule", {
      value: !0
    });
    gt.ready = gt.init = gt.destroy = gt.createInstance = gt.cleanupElement = void 0;
    var sU = Vu(Ar()),
      as = Vu(bc()),
      ku = Vu(Go());
    S_();
    var oU = (H_(), aw(z_)),
      lU = () => window.Webflow.require("lottie").lottie,
      uU = () => !!(window.Webflow.env("design") || window.Webflow.env("preview")),
      Sn = {
        Playing: "playing",
        Stopped: "stopped"
      },
      Nu = class {
        constructor() {
          (0, as.default)(this, "_cache", [])
        }
        set(t, r) {
          let i = (0, ku.default)(this._cache, ({
            wrapper: n
          }) => n === t);
          i !== -1 && this._cache.splice(i, 1), this._cache.push({
            wrapper: t,
            instance: r
          })
        }
        delete(t) {
          let r = (0, ku.default)(this._cache, ({
            wrapper: i
          }) => i === t);
          r !== -1 && this._cache.splice(r, 1)
        }
        get(t) {
          let r = (0, ku.default)(this._cache, ({
            wrapper: i
          }) => i === t);
          return r !== -1 ? this._cache[r].instance : null
        }
      },
      ss = new Nu,
      j_ = {},
      Bu = class {
        constructor() {
          (0, as.default)(this, "config", null), (0, as.default)(this, "currentState", Sn.Stopped), (0, as.default)(this, "handlers", {
            enterFrame: [],
            complete: [],
            loop: [],
            dataReady: [],
            destroy: [],
            error: []
          })
        }
        load(t) {
          let i = (t.dataset || j_).src || "";
          i.endsWith(".lottie") ? (0, oU.fetchLottie)(i).then(n => {
            this._loadAnimation(t, n)
          }) : this._loadAnimation(t, void 0), ss.set(t, this), this.container = t
        }
        _loadAnimation(t, r) {
          let i = t.dataset || j_,
            n = i.src || "",
            a = i.preserveAspectRatio || "xMidYMid meet",
            s = i.renderer || "svg",
            o = parseFloat(i.loop) === 1,
            l = parseFloat(i.direction) || 1,
            p = parseFloat(i.autoplay) === 1,
            u = parseFloat(i.duration) || 0,
            h = parseFloat(i.isIx2Target) === 1,
            v = parseFloat(i.ix2InitialState);
          isNaN(v) && (v = null);
          let d = {
            src: n,
            loop: o,
            autoplay: p,
            renderer: s,
            direction: l,
            duration: u,
            hasIx2: h,
            ix2InitialValue: v,
            preserveAspectRatio: a
          };
          if (this.animationItem && this.config && this.config.src === n && s === this.config.renderer && a === this.config.preserveAspectRatio) {
            if (o !== this.config.loop && this.setLooping(o), h || (l !== this.config.direction && this.setDirection(l), u !== this.config.duration && (u > 0 && u !== this.duration ? this.setSpeed(this.duration / u) : this.setSpeed(1))), p && this.play(), v && v !== this.config.ix2InitialValue) {
              let m = v / 100;
              this.goToFrame(this.frames * m)
            }
            this.config = d;
            return
          }
          let f = {
            container: t,
            loop: o,
            autoplay: p,
            renderer: s,
            rendererSettings: {
              preserveAspectRatio: a,
              progressiveLoad: !0,
              hideOnTransparent: !0
            }
          };
          try {
            this.animationItem && this.destroy(), this.animationItem = lU().loadAnimation((0, sU.default)({}, f, r ? {
              animationData: r
            } : {
              path: n
            }))
          } catch (m) {
            this.handlers.error.forEach(c => c(m));
            return
          }
          this.animationItem && (uU() && (this.animationItem.addEventListener("enterFrame", () => {
            if (!this.isPlaying) return;
            let {
              currentFrame: m,
              totalFrames: c,
              playDirection: g
            } = this.animationItem, y = m / c * 100, b = Math.round(g === 1 ? y : 100 - y);
            this.handlers.enterFrame.forEach(_ => _(b, m))
          }), this.animationItem.addEventListener("complete", () => {
            if (this.currentState !== Sn.Playing) {
              this.handlers.complete.forEach(m => m());
              return
            }
            if (!this.animationItem.loop) {
              this.handlers.complete.forEach(m => m());
              return
            }
            this.currentState = Sn.Stopped
          }), this.animationItem.addEventListener("loopComplete", m => {
            this.handlers.loop.forEach(c => c(m))
          }), this.animationItem.addEventListener("data_failed", m => {
            this.handlers.error.forEach(c => c(m))
          }), this.animationItem.addEventListener("error", m => {
            this.handlers.error.forEach(c => c(m))
          })), this.isLoaded ? (this.handlers.dataReady.forEach(m => m()), p && this.play()) : this.animationItem.addEventListener("data_ready", () => {
            if (this.handlers.dataReady.forEach(m => m()), h || (this.setDirection(l), u > 0 && u !== this.duration && this.setSpeed(this.duration / u), p && this.play()), v) {
              let m = v / 100;
              this.goToFrame(this.frames * m)
            }
          }), this.config = d)
        }
        onFrameChange(t) {
          this.handlers.enterFrame.indexOf(t) === -1 && this.handlers.enterFrame.push(t)
        }
        onPlaybackComplete(t) {
          this.handlers.complete.indexOf(t) === -1 && this.handlers.complete.push(t)
        }
        onLoopComplete(t) {
          this.handlers.loop.indexOf(t) === -1 && this.handlers.loop.push(t)
        }
        onDestroy(t) {
          this.handlers.destroy.indexOf(t) === -1 && this.handlers.destroy.push(t)
        }
        onDataReady(t) {
          this.handlers.dataReady.indexOf(t) === -1 && this.handlers.dataReady.push(t)
        }
        onError(t) {
          this.handlers.error.indexOf(t) === -1 && this.handlers.error.push(t)
        }
        play() {
          if (!this.animationItem) return;
          let t = this.animationItem.playDirection === 1 ? 0 : this.frames;
          this.animationItem.goToAndPlay(t, !0), this.currentState = Sn.Playing
        }
        stop() {
          if (this.animationItem) {
            if (this.isPlaying) {
              let {
                playDirection: t
              } = this.animationItem, r = t === 1 ? 0 : this.frames;
              this.animationItem.goToAndStop(r, !0)
            }
            this.currentState = Sn.Stopped
          }
        }
        destroy() {
          this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(t => t()), this.container && ss.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(t => this.handlers[t].length = 0), this.animationItem = null, this.container = null, this.config = null)
        }
        get isPlaying() {
          return this.animationItem ? !this.animationItem.isPaused : !1
        }
        get isPaused() {
          return this.animationItem ? this.animationItem.isPaused : !1
        }
        get duration() {
          return this.animationItem ? this.animationItem.getDuration() : 0
        }
        get frames() {
          return this.animationItem ? this.animationItem.totalFrames : 0
        }
        get direction() {
          return this.animationItem ? this.animationItem.playDirection : 1
        }
        get isLoaded() {
          return this.animationItem, this.animationItem.isLoaded
        }
        get ix2InitialValue() {
          return this.config ? this.config.ix2InitialValue : null
        }
        goToFrame(t) {
          this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
        }
        setSubframe(t) {
          this.animationItem && this.animationItem.setSubframe(t)
        }
        setSpeed(t = 1) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
        }
        setLooping(t) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
        }
        setDirection(t) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(t === 1 ? 0 : this.frames))
        }
      },
      W_ = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')),
      U_ = e => {
        let t = ss.get(e);
        return t == null && (t = new Bu), t.load(e), t
      };
    gt.createInstance = U_;
    var Gu = e => {
      let t = ss.get(e);
      t && t.destroy()
    };
    gt.cleanupElement = Gu;
    var X_ = () => {
      W_().forEach(e => {
        parseFloat(e.getAttribute("data-is-ix2-target")) === 1 || Gu(e), U_(e)
      })
    };
    gt.init = X_;
    var hU = () => {
      W_().forEach(Gu)
    };
    gt.destroy = hU;
    var cU = X_;
    gt.ready = cU
  });
  var K_ = E((exports, module) => {
    typeof navigator < "u" && function (e, t) {
      typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).lottie = t()
    }(exports, function () {
      "use strict";
      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function (e) {
          _useWebWorker = !!e
        },
        getWebWorker = function () {
          return _useWebWorker
        },
        setLocationHref = function (e) {
          locationHref = e
        },
        getLocationHref = function () {
          return locationHref
        };

      function createTag(e) {
        return document.createElement(e)
      }

      function extendPrototype(e, t) {
        var r, i, n = e.length;
        for (r = 0; r < n; r += 1)
          for (var a in i = e[r].prototype) Object.prototype.hasOwnProperty.call(i, a) && (t.prototype[a] = i[a])
      }

      function getDescriptor(e, t) {
        return Object.getOwnPropertyDescriptor(e, t)
      }

      function createProxyFunction(e) {
        function t() {}
        return t.prototype = e, t
      }
      var audioControllerFactory = function () {
          function e(t) {
            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
          }
          return e.prototype = {
              addAudio: function (t) {
                this.audios.push(t)
              },
              pause: function () {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].pause()
              },
              resume: function () {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].resume()
              },
              setRate: function (t) {
                var r, i = this.audios.length;
                for (r = 0; r < i; r += 1) this.audios[r].setRate(t)
              },
              createAudio: function (t) {
                return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                  src: [t]
                }) : {
                  isPlaying: !1,
                  play: function () {
                    this.isPlaying = !0
                  },
                  seek: function () {
                    this.isPlaying = !1
                  },
                  playing: function () {},
                  rate: function () {},
                  setVolume: function () {}
                }
              },
              setAudioFactory: function (t) {
                this.audioFactory = t
              },
              setVolume: function (t) {
                this._volume = t, this._updateVolume()
              },
              mute: function () {
                this._isMuted = !0, this._updateVolume()
              },
              unmute: function () {
                this._isMuted = !1, this._updateVolume()
              },
              getVolume: function () {
                return this._volume
              },
              _updateVolume: function () {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
              }
            },
            function () {
              return new e
            }
        }(),
        createTypedArray = function () {
          function e(t, r) {
            var i, n = 0,
              a = [];
            switch (t) {
              case "int16":
              case "uint8c":
                i = 1;
                break;
              default:
                i = 1.1
            }
            for (n = 0; n < r; n += 1) a.push(i);
            return a
          }
          return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function (t, r) {
            return t === "float32" ? new Float32Array(r) : t === "int16" ? new Int16Array(r) : t === "uint8c" ? new Uint8ClampedArray(r) : e(t, r)
          } : e
        }();

      function createSizedArray(e) {
        return Array.apply(null, {
          length: e
        })
      }

      function _typeof$6(e) {
        return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$6(e)
      }
      var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        _shouldRoundValues = !1,
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};

      function ProjectInterface$1() {
        return {}
      }(function () {
        var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
          r = t.length;
        for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
      })(), BMMath.random = Math.random, BMMath.abs = function (e) {
        if (_typeof$6(e) === "object" && e.length) {
          var t, r = createSizedArray(e.length),
            i = e.length;
          for (t = 0; t < i; t += 1) r[t] = Math.abs(e[t]);
          return r
        }
        return Math.abs(e)
      };
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;

      function roundValues(e) {
        _shouldRoundValues = !!e
      }

      function bmRnd(e) {
        return _shouldRoundValues ? Math.round(e) : e
      }

      function styleDiv(e) {
        e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
      }

      function BMEnterFrameEvent(e, t, r, i) {
        this.type = e, this.currentTime = t, this.totalTime = r, this.direction = i < 0 ? -1 : 1
      }

      function BMCompleteEvent(e, t) {
        this.type = e, this.direction = t < 0 ? -1 : 1
      }

      function BMCompleteLoopEvent(e, t, r, i) {
        this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = i < 0 ? -1 : 1
      }

      function BMSegmentStartEvent(e, t, r) {
        this.type = e, this.firstFrame = t, this.totalFrames = r
      }

      function BMDestroyEvent(e, t) {
        this.type = e, this.target = t
      }

      function BMRenderFrameErrorEvent(e, t) {
        this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
      }

      function BMConfigErrorEvent(e) {
        this.type = "configError", this.nativeError = e
      }

      function BMAnimationConfigErrorEvent(e, t) {
        this.type = e, this.nativeError = t
      }
      var createElementID = (_count = 0, function () {
          return idPrefix$1 + "__lottie_element_" + (_count += 1)
        }),
        _count;

      function HSVtoRGB(e, t, r) {
        var i, n, a, s, o, l, p, u;
        switch (l = r * (1 - t), p = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), u = r * (1 - (1 - o) * t), s % 6) {
          case 0:
            i = r, n = u, a = l;
            break;
          case 1:
            i = p, n = r, a = l;
            break;
          case 2:
            i = l, n = r, a = u;
            break;
          case 3:
            i = l, n = p, a = r;
            break;
          case 4:
            i = u, n = l, a = r;
            break;
          case 5:
            i = r, n = l, a = p
        }
        return [i, n, a]
      }

      function RGBtoHSV(e, t, r) {
        var i, n = Math.max(e, t, r),
          a = Math.min(e, t, r),
          s = n - a,
          o = n === 0 ? 0 : s / n,
          l = n / 255;
        switch (n) {
          case a:
            i = 0;
            break;
          case e:
            i = t - r + s * (t < r ? 6 : 0), i /= 6 * s;
            break;
          case t:
            i = r - e + 2 * s, i /= 6 * s;
            break;
          case r:
            i = e - t + 4 * s, i /= 6 * s
        }
        return [i, o, l]
      }

      function addSaturationToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
      }

      function addBrightnessToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
      }

      function addHueToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
      }
      var rgbToHex = function () {
          var e, t, r = [];
          for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = t.length === 1 ? "0" + t : t;
          return function (i, n, a) {
            return i < 0 && (i = 0), n < 0 && (n = 0), a < 0 && (a = 0), "#" + r[i] + r[n] + r[a]
          }
        }(),
        setSubframeEnabled = function (e) {
          subframeEnabled = !!e
        },
        getSubframeEnabled = function () {
          return subframeEnabled
        },
        setExpressionsPlugin = function (e) {
          expressionsPlugin = e
        },
        getExpressionsPlugin = function () {
          return expressionsPlugin
        },
        setExpressionInterfaces = function (e) {
          expressionsInterfaces = e
        },
        getExpressionInterfaces = function () {
          return expressionsInterfaces
        },
        setDefaultCurveSegments = function (e) {
          defaultCurveSegments = e
        },
        getDefaultCurveSegments = function () {
          return defaultCurveSegments
        },
        setIdPrefix = function (e) {
          idPrefix$1 = e
        },
        getIdPrefix = function () {
          return idPrefix$1
        };

      function createNS(e) {
        return document.createElementNS(svgNS, e)
      }

      function _typeof$5(e) {
        return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$5(e)
      }
      var dataManager = function () {
          var e, t, r = 1,
            i = [],
            n = {
              onmessage: function () {},
              postMessage: function (l) {
                e({
                  data: l
                })
              }
            },
            a = {
              postMessage: function (l) {
                n.onmessage({
                  data: l
                })
              }
            };

          function s() {
            t || (t = function (l) {
              if (window.Worker && window.Blob && getWebWorker()) {
                var p = new Blob(["var _workerSelf = self; self.onmessage = ", l.toString()], {
                    type: "text/javascript"
                  }),
                  u = URL.createObjectURL(p);
                return new Worker(u)
              }
              return e = l, n
            }(function (l) {
              if (a.dataManager || (a.dataManager = function () {
                  function u(x, P) {
                    var L, D, O, B, R, F, V = x.length;
                    for (D = 0; D < V; D += 1)
                      if ("ks" in (L = x[D]) && !L.completed) {
                        if (L.completed = !0, L.hasMask) {
                          var W = L.masksProperties;
                          for (B = W.length, O = 0; O < B; O += 1)
                            if (W[O].pt.k.i) d(W[O].pt.k);
                            else
                              for (F = W[O].pt.k.length, R = 0; R < F; R += 1) W[O].pt.k[R].s && d(W[O].pt.k[R].s[0]), W[O].pt.k[R].e && d(W[O].pt.k[R].e[0])
                        }
                        L.ty === 0 ? (L.layers = h(L.refId, P), u(L.layers, P)) : L.ty === 4 ? v(L.shapes) : L.ty === 5 && S(L)
                      }
                  }

                  function h(x, P) {
                    var L = function (D, O) {
                      for (var B = 0, R = O.length; B < R;) {
                        if (O[B].id === D) return O[B];
                        B += 1
                      }
                      return null
                    }(x, P);
                    return L ? L.layers.__used ? JSON.parse(JSON.stringify(L.layers)) : (L.layers.__used = !0, L.layers) : null
                  }

                  function v(x) {
                    var P, L, D;
                    for (P = x.length - 1; P >= 0; P -= 1)
                      if (x[P].ty === "sh")
                        if (x[P].ks.k.i) d(x[P].ks.k);
                        else
                          for (D = x[P].ks.k.length, L = 0; L < D; L += 1) x[P].ks.k[L].s && d(x[P].ks.k[L].s[0]), x[P].ks.k[L].e && d(x[P].ks.k[L].e[0]);
                    else x[P].ty === "gr" && v(x[P].it)
                  }

                  function d(x) {
                    var P, L = x.i.length;
                    for (P = 0; P < L; P += 1) x.i[P][0] += x.v[P][0], x.i[P][1] += x.v[P][1], x.o[P][0] += x.v[P][0], x.o[P][1] += x.v[P][1]
                  }

                  function f(x, P) {
                    var L = P ? P.split(".") : [100, 100, 100];
                    return x[0] > L[0] || !(L[0] > x[0]) && (x[1] > L[1] || !(L[1] > x[1]) && (x[2] > L[2] || !(L[2] > x[2]) && null))
                  }
                  var m, c = function () {
                      var x = [4, 4, 14];

                      function P(L) {
                        var D, O, B, R = L.length;
                        for (D = 0; D < R; D += 1) L[D].ty === 5 && (B = void 0, B = (O = L[D]).t.d, O.t.d = {
                          k: [{
                            s: B,
                            t: 0
                          }]
                        })
                      }
                      return function (L) {
                        if (f(x, L.v) && (P(L.layers), L.assets)) {
                          var D, O = L.assets.length;
                          for (D = 0; D < O; D += 1) L.assets[D].layers && P(L.assets[D].layers)
                        }
                      }
                    }(),
                    g = (m = [4, 7, 99], function (x) {
                      if (x.chars && !f(m, x.v)) {
                        var P, L = x.chars.length;
                        for (P = 0; P < L; P += 1) {
                          var D = x.chars[P];
                          D.data && D.data.shapes && (v(D.data.shapes), D.data.ip = 0, D.data.op = 99999, D.data.st = 0, D.data.sr = 1, D.data.ks = {
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            }
                          }, x.chars[P].t || (D.data.shapes.push({
                            ty: "no"
                          }), D.data.shapes[0].it.push({
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            },
                            sk: {
                              k: 0,
                              a: 0
                            },
                            sa: {
                              k: 0,
                              a: 0
                            },
                            ty: "tr"
                          })))
                        }
                      }
                    }),
                    y = function () {
                      var x = [5, 7, 15];

                      function P(L) {
                        var D, O, B = L.length;
                        for (D = 0; D < B; D += 1) L[D].ty === 5 && (O = void 0, typeof (O = L[D].t.p).a == "number" && (O.a = {
                          a: 0,
                          k: O.a
                        }), typeof O.p == "number" && (O.p = {
                          a: 0,
                          k: O.p
                        }), typeof O.r == "number" && (O.r = {
                          a: 0,
                          k: O.r
                        }))
                      }
                      return function (L) {
                        if (f(x, L.v) && (P(L.layers), L.assets)) {
                          var D, O = L.assets.length;
                          for (D = 0; D < O; D += 1) L.assets[D].layers && P(L.assets[D].layers)
                        }
                      }
                    }(),
                    b = function () {
                      var x = [4, 1, 9];

                      function P(D) {
                        var O, B, R, F = D.length;
                        for (O = 0; O < F; O += 1)
                          if (D[O].ty === "gr") P(D[O].it);
                          else if (D[O].ty === "fl" || D[O].ty === "st")
                          if (D[O].c.k && D[O].c.k[0].i)
                            for (R = D[O].c.k.length, B = 0; B < R; B += 1) D[O].c.k[B].s && (D[O].c.k[B].s[0] /= 255, D[O].c.k[B].s[1] /= 255, D[O].c.k[B].s[2] /= 255, D[O].c.k[B].s[3] /= 255), D[O].c.k[B].e && (D[O].c.k[B].e[0] /= 255, D[O].c.k[B].e[1] /= 255, D[O].c.k[B].e[2] /= 255, D[O].c.k[B].e[3] /= 255);
                          else D[O].c.k[0] /= 255, D[O].c.k[1] /= 255, D[O].c.k[2] /= 255, D[O].c.k[3] /= 255
                      }

                      function L(D) {
                        var O, B = D.length;
                        for (O = 0; O < B; O += 1) D[O].ty === 4 && P(D[O].shapes)
                      }
                      return function (D) {
                        if (f(x, D.v) && (L(D.layers), D.assets)) {
                          var O, B = D.assets.length;
                          for (O = 0; O < B; O += 1) D.assets[O].layers && L(D.assets[O].layers)
                        }
                      }
                    }(),
                    _ = function () {
                      var x = [4, 4, 18];

                      function P(D) {
                        var O, B, R;
                        for (O = D.length - 1; O >= 0; O -= 1)
                          if (D[O].ty === "sh")
                            if (D[O].ks.k.i) D[O].ks.k.c = D[O].closed;
                            else
                              for (R = D[O].ks.k.length, B = 0; B < R; B += 1) D[O].ks.k[B].s && (D[O].ks.k[B].s[0].c = D[O].closed), D[O].ks.k[B].e && (D[O].ks.k[B].e[0].c = D[O].closed);
                        else D[O].ty === "gr" && P(D[O].it)
                      }

                      function L(D) {
                        var O, B, R, F, V, W, ee = D.length;
                        for (B = 0; B < ee; B += 1) {
                          if ((O = D[B]).hasMask) {
                            var A = O.masksProperties;
                            for (F = A.length, R = 0; R < F; R += 1)
                              if (A[R].pt.k.i) A[R].pt.k.c = A[R].cl;
                              else
                                for (W = A[R].pt.k.length, V = 0; V < W; V += 1) A[R].pt.k[V].s && (A[R].pt.k[V].s[0].c = A[R].cl), A[R].pt.k[V].e && (A[R].pt.k[V].e[0].c = A[R].cl)
                          }
                          O.ty === 4 && P(O.shapes)
                        }
                      }
                      return function (D) {
                        if (f(x, D.v) && (L(D.layers), D.assets)) {
                          var O, B = D.assets.length;
                          for (O = 0; O < B; O += 1) D.assets[O].layers && L(D.assets[O].layers)
                        }
                      }
                    }();

                  function S(x) {
                    x.t.a.length === 0 && x.t.p
                  }
                  var I = {
                    completeData: function (x) {
                      x.__complete || (b(x), c(x), g(x), y(x), _(x), u(x.layers, x.assets), function (P, L) {
                        if (P) {
                          var D = 0,
                            O = P.length;
                          for (D = 0; D < O; D += 1) P[D].t === 1 && (P[D].data.layers = h(P[D].data.refId, L), u(P[D].data.layers, L))
                        }
                      }(x.chars, x.assets), x.__complete = !0)
                    }
                  };
                  return I.checkColors = b, I.checkChars = g, I.checkPathProperties = y, I.checkShapes = _, I.completeLayers = u, I
                }()), a.assetLoader || (a.assetLoader = function () {
                  function u(h) {
                    var v = h.getResponseHeader("content-type");
                    return v && h.responseType === "json" && v.indexOf("json") !== -1 || h.response && _typeof$5(h.response) === "object" ? h.response : h.response && typeof h.response == "string" ? JSON.parse(h.response) : h.responseText ? JSON.parse(h.responseText) : null
                  }
                  return {
                    load: function (h, v, d, f) {
                      var m, c = new XMLHttpRequest;
                      try {
                        c.responseType = "json"
                      } catch {}
                      c.onreadystatechange = function () {
                        if (c.readyState === 4)
                          if (c.status === 200) m = u(c), d(m);
                          else try {
                            m = u(c), d(m)
                          } catch (g) {
                            f && f(g)
                          }
                      };
                      try {
                        c.open(["G", "E", "T"].join(""), h, !0)
                      } catch {
                        c.open(["G", "E", "T"].join(""), v + "/" + h, !0)
                      }
                      c.send()
                    }
                  }
                }()), l.data.type === "loadAnimation") a.assetLoader.load(l.data.path, l.data.fullPath, function (u) {
                a.dataManager.completeData(u), a.postMessage({
                  id: l.data.id,
                  payload: u,
                  status: "success"
                })
              }, function () {
                a.postMessage({
                  id: l.data.id,
                  status: "error"
                })
              });
              else if (l.data.type === "complete") {
                var p = l.data.animation;
                a.dataManager.completeData(p), a.postMessage({
                  id: l.data.id,
                  payload: p,
                  status: "success"
                })
              } else l.data.type === "loadData" && a.assetLoader.load(l.data.path, l.data.fullPath, function (u) {
                a.postMessage({
                  id: l.data.id,
                  payload: u,
                  status: "success"
                })
              }, function () {
                a.postMessage({
                  id: l.data.id,
                  status: "error"
                })
              })
            }), t.onmessage = function (l) {
              var p = l.data,
                u = p.id,
                h = i[u];
              i[u] = null, p.status === "success" ? h.onComplete(p.payload) : h.onError && h.onError()
            })
          }

          function o(l, p) {
            var u = "processId_" + (r += 1);
            return i[u] = {
              onComplete: l,
              onError: p
            }, u
          }
          return {
            loadAnimation: function (l, p, u) {
              s();
              var h = o(p, u);
              t.postMessage({
                type: "loadAnimation",
                path: l,
                fullPath: window.location.origin + window.location.pathname,
                id: h
              })
            },
            loadData: function (l, p, u) {
              s();
              var h = o(p, u);
              t.postMessage({
                type: "loadData",
                path: l,
                fullPath: window.location.origin + window.location.pathname,
                id: h
              })
            },
            completeAnimation: function (l, p, u) {
              s();
              var h = o(p, u);
              t.postMessage({
                type: "complete",
                animation: l,
                id: h
              })
            }
          }
        }(),
        ImagePreloader = function () {
          var e = function () {
            var o = createTag("canvas");
            o.width = 1, o.height = 1;
            var l = o.getContext("2d");
            return l.fillStyle = "rgba(0,0,0,0)", l.fillRect(0, 0, 1, 1), o
          }();

          function t() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function r() {
            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function i(o, l, p) {
            var u = "";
            if (o.e) u = o.p;
            else if (l) {
              var h = o.p;
              h.indexOf("images/") !== -1 && (h = h.split("/")[1]), u = l + h
            } else u = p, u += o.u ? o.u : "", u += o.p;
            return u
          }

          function n(o) {
            var l = 0,
              p = setInterval(function () {
                (o.getBBox().width || l > 500) && (this._imageLoaded(), clearInterval(p)), l += 1
              }.bind(this), 50)
          }

          function a(o) {
            var l = {
                assetData: o
              },
              p = i(o, this.assetsPath, this.path);
            return dataManager.loadData(p, function (u) {
              l.img = u, this._footageLoaded()
            }.bind(this), function () {
              l.img = {}, this._footageLoaded()
            }.bind(this)), l
          }

          function s() {
            this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
          }
          return s.prototype = {
            loadAssets: function (o, l) {
              var p;
              this.imagesLoadedCb = l;
              var u = o.length;
              for (p = 0; p < u; p += 1) o[p].layers || (o[p].t && o[p].t !== "seq" ? o[p].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(o[p]))) : (this.totalImages += 1, this.images.push(this._createImageData(o[p]))))
            },
            setAssetsPath: function (o) {
              this.assetsPath = o || ""
            },
            setPath: function (o) {
              this.path = o || ""
            },
            loadedImages: function () {
              return this.totalImages === this.loadedAssets
            },
            loadedFootages: function () {
              return this.totalFootages === this.loadedFootagesCount
            },
            destroy: function () {
              this.imagesLoadedCb = null, this.images.length = 0
            },
            getAsset: function (o) {
              for (var l = 0, p = this.images.length; l < p;) {
                if (this.images[l].assetData === o) return this.images[l].img;
                l += 1
              }
              return null
            },
            createImgData: function (o) {
              var l = i(o, this.assetsPath, this.path),
                p = createTag("img");
              p.crossOrigin = "anonymous", p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", function () {
                u.img = e, this._imageLoaded()
              }.bind(this), !1), p.src = l;
              var u = {
                img: p,
                assetData: o
              };
              return u
            },
            createImageData: function (o) {
              var l = i(o, this.assetsPath, this.path),
                p = createNS("image");
              isSafari ? this.testImageLoaded(p) : p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", function () {
                u.img = e, this._imageLoaded()
              }.bind(this), !1), p.setAttributeNS("http://www.w3.org/1999/xlink", "href", l), this._elementHelper.append ? this._elementHelper.append(p) : this._elementHelper.appendChild(p);
              var u = {
                img: p,
                assetData: o
              };
              return u
            },
            imageLoaded: t,
            footageLoaded: r,
            setCacheType: function (o, l) {
              o === "svg" ? (this._elementHelper = l, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
            }
          }, s
        }();

      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (e, t) {
          if (this._cbs[e])
            for (var r = this._cbs[e], i = 0; i < r.length; i += 1) r[i](t)
        },
        addEventListener: function (e, t) {
          return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
            function () {
              this.removeEventListener(e, t)
            }.bind(this)
        },
        removeEventListener: function (e, t) {
          if (t) {
            if (this._cbs[e]) {
              for (var r = 0, i = this._cbs[e].length; r < i;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, i -= 1), r += 1;
              this._cbs[e].length || (this._cbs[e] = null)
            }
          } else this._cbs[e] = null
        }
      };
      var markerParser = function () {
          function e(t) {
            for (var r, i = t.split(`\r
`), n = {}, a = 0, s = 0; s < i.length; s += 1)(r = i[s].split(":")).length === 2 && (n[r[0]] = r[1].trim(), a += 1);
            if (a === 0) throw new Error;
            return n
          }
          return function (t) {
            for (var r = [], i = 0; i < t.length; i += 1) {
              var n = t[i],
                a = {
                  time: n.tm,
                  duration: n.dr
                };
              try {
                a.payload = JSON.parse(t[i].cm)
              } catch {
                try {
                  a.payload = e(t[i].cm)
                } catch {
                  a.payload = {
                    name: t[i].cm
                  }
                }
              }
              r.push(a)
            }
            return r
          }
        }(),
        ProjectInterface = function () {
          function e(t) {
            this.compositions.push(t)
          }
          return function () {
            function t(r) {
              for (var i = 0, n = this.compositions.length; i < n;) {
                if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                i += 1
              }
              return null
            }
            return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
          }
        }(),
        renderers = {},
        registerRenderer = function (e, t) {
          renderers[e] = t
        };

      function getRenderer(e) {
        return renderers[e]
      }

      function getRegisteredRenderer() {
        if (renderers.canvas) return "canvas";
        for (var e in renderers)
          if (renderers[e]) return e;
        return ""
      }

      function _typeof$4(e) {
        return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$4(e)
      }
      var AnimationItem = function () {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
      };
      extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (e) {
        (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
        var t = "svg";
        e.animType ? t = e.animType : e.renderer && (t = e.renderer);
        var r = getRenderer(t);
        this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
      }, AnimationItem.prototype.onSetupError = function () {
        this.trigger("data_failed")
      }, AnimationItem.prototype.setupAnimation = function (e) {
        dataManager.completeAnimation(e, this.configAnimation)
      }, AnimationItem.prototype.setData = function (e, t) {
        t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
        var r = {
            wrapper: e,
            animationData: t
          },
          i = e.attributes;
        r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
        var n = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
        n === "false" ? r.loop = !1 : n === "true" ? r.loop = !0 : n !== "" && (r.loop = parseInt(n, 10));
        var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
        r.autoplay = a !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
      }, AnimationItem.prototype.includeLayers = function (e) {
        e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
        var t, r, i = this.animationData.layers,
          n = i.length,
          a = e.layers,
          s = a.length;
        for (r = 0; r < s; r += 1)
          for (t = 0; t < n;) {
            if (i[t].id === a[r].id) {
              i[t] = a[r];
              break
            }
            t += 1
          }
        if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
          for (n = e.assets.length, t = 0; t < n; t += 1) this.animationData.assets.push(e.assets[t]);
        this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
      }, AnimationItem.prototype.onSegmentComplete = function (e) {
        this.animationData = e;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.loadNextSegment()
      }, AnimationItem.prototype.loadNextSegment = function () {
        var e = this.animationData.segments;
        if (!e || e.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
        var t = e.shift();
        this.timeCompleted = t.time * this.frameRate;
        var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function () {
          this.trigger("data_failed")
        }.bind(this))
      }, AnimationItem.prototype.loadSegments = function () {
        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
      }, AnimationItem.prototype.imagesLoaded = function () {
        this.trigger("loaded_images"), this.checkLoaded()
      }, AnimationItem.prototype.preloadImages = function () {
        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
      }, AnimationItem.prototype.configAnimation = function (e) {
        if (this.renderer) try {
          this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
        } catch (t) {
          this.triggerConfigError(t)
        }
      }, AnimationItem.prototype.waitForFontsLoaded = function () {
        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
      }, AnimationItem.prototype.checkLoaded = function () {
        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
          this.isLoaded = !0;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
            this.trigger("DOMLoaded")
          }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
        }
      }, AnimationItem.prototype.resize = function (e, t) {
        var r = typeof e == "number" ? e : void 0,
          i = typeof t == "number" ? t : void 0;
        this.renderer.updateContainerSize(r, i)
      }, AnimationItem.prototype.setSubframe = function (e) {
        this.isSubframeEnabled = !!e
      }, AnimationItem.prototype.gotoFrame = function () {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
      }, AnimationItem.prototype.renderFrame = function () {
        if (this.isLoaded !== !1 && this.renderer) try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
        } catch (e) {
          this.triggerRenderFrameError(e)
        }
      }, AnimationItem.prototype.play = function (e) {
        e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
      }, AnimationItem.prototype.pause = function (e) {
        e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
      }, AnimationItem.prototype.togglePause = function (e) {
        e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
      }, AnimationItem.prototype.stop = function (e) {
        e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
      }, AnimationItem.prototype.getMarkerData = function (e) {
        for (var t, r = 0; r < this.markers.length; r += 1)
          if ((t = this.markers[r]).payload && t.payload.name === e) return t;
        return null
      }, AnimationItem.prototype.goToAndStop = function (e, t, r) {
        if (!r || this.name === r) {
          var i = Number(e);
          if (isNaN(i)) {
            var n = this.getMarkerData(e);
            n && this.goToAndStop(n.time, !0)
          } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
          this.pause()
        }
      }, AnimationItem.prototype.goToAndPlay = function (e, t, r) {
        if (!r || this.name === r) {
          var i = Number(e);
          if (isNaN(i)) {
            var n = this.getMarkerData(e);
            n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
          } else this.goToAndStop(i, t, r);
          this.play()
        }
      }, AnimationItem.prototype.advanceTime = function (e) {
        if (this.isPaused !== !0 && this.isLoaded !== !1) {
          var t = this.currentRawFrame + e * this.frameModifier,
            r = !1;
          t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
        }
      }, AnimationItem.prototype.adjustSegment = function (e, t) {
        this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
      }, AnimationItem.prototype.setSegment = function (e, t) {
        var r = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
      }, AnimationItem.prototype.playSegments = function (e, t) {
        if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) this.segments.push(e[r])
        } else this.segments.push(e);
        this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
      }, AnimationItem.prototype.resetSegments = function (e) {
        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
      }, AnimationItem.prototype.checkSegments = function (e) {
        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
      }, AnimationItem.prototype.destroy = function (e) {
        e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
      }, AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
        this.currentRawFrame = e, this.gotoFrame()
      }, AnimationItem.prototype.setSpeed = function (e) {
        this.playSpeed = e, this.updaFrameModifier()
      }, AnimationItem.prototype.setDirection = function (e) {
        this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
      }, AnimationItem.prototype.setLoop = function (e) {
        this.loop = e
      }, AnimationItem.prototype.setVolume = function (e, t) {
        t && this.name !== t || this.audioController.setVolume(e)
      }, AnimationItem.prototype.getVolume = function () {
        return this.audioController.getVolume()
      }, AnimationItem.prototype.mute = function (e) {
        e && this.name !== e || this.audioController.mute()
      }, AnimationItem.prototype.unmute = function (e) {
        e && this.name !== e || this.audioController.unmute()
      }, AnimationItem.prototype.updaFrameModifier = function () {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
      }, AnimationItem.prototype.getPath = function () {
        return this.path
      }, AnimationItem.prototype.getAssetsPath = function (e) {
        var t = "";
        if (e.e) t = e.p;
        else if (this.assetsPath) {
          var r = e.p;
          r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
        } else t = this.path, t += e.u ? e.u : "", t += e.p;
        return t
      }, AnimationItem.prototype.getAssetData = function (e) {
        for (var t = 0, r = this.assets.length; t < r;) {
          if (e === this.assets[t].id) return this.assets[t];
          t += 1
        }
        return null
      }, AnimationItem.prototype.hide = function () {
        this.renderer.hide()
      }, AnimationItem.prototype.show = function () {
        this.renderer.show()
      }, AnimationItem.prototype.getDuration = function (e) {
        return e ? this.totalFrames : this.totalFrames / this.frameRate
      }, AnimationItem.prototype.updateDocumentData = function (e, t, r) {
        try {
          this.renderer.getElementByPath(e).updateDocumentData(t, r)
        } catch {}
      }, AnimationItem.prototype.trigger = function (e) {
        if (this._cbs && this._cbs[e]) switch (e) {
          case "enterFrame":
            this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(e, new BMDestroyEvent(e, this));
            break;
          default:
            this.triggerEvent(e)
        }
        e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
      }, AnimationItem.prototype.triggerRenderFrameError = function (e) {
        var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
        this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
      }, AnimationItem.prototype.triggerConfigError = function (e) {
        var t = new BMConfigErrorEvent(e, this.currentFrame);
        this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
      };
      var animationManager = function () {
          var e = {},
            t = [],
            r = 0,
            i = 0,
            n = 0,
            a = !0,
            s = !1;

          function o(m) {
            for (var c = 0, g = m.target; c < i;) t[c].animation === g && (t.splice(c, 1), c -= 1, i -= 1, g.isPaused || u()), c += 1
          }

          function l(m, c) {
            if (!m) return null;
            for (var g = 0; g < i;) {
              if (t[g].elem === m && t[g].elem !== null) return t[g].animation;
              g += 1
            }
            var y = new AnimationItem;
            return h(y, m), y.setData(m, c), y
          }

          function p() {
            n += 1, f()
          }

          function u() {
            n -= 1
          }

          function h(m, c) {
            m.addEventListener("destroy", o), m.addEventListener("_active", p), m.addEventListener("_idle", u), t.push({
              elem: c,
              animation: m
            }), i += 1
          }

          function v(m) {
            var c, g = m - r;
            for (c = 0; c < i; c += 1) t[c].animation.advanceTime(g);
            r = m, n && !s ? window.requestAnimationFrame(v) : a = !0
          }

          function d(m) {
            r = m, window.requestAnimationFrame(v)
          }

          function f() {
            !s && n && a && (window.requestAnimationFrame(d), a = !1)
          }
          return e.registerAnimation = l, e.loadAnimation = function (m) {
            var c = new AnimationItem;
            return h(c, null), c.setParams(m), c
          }, e.setSpeed = function (m, c) {
            var g;
            for (g = 0; g < i; g += 1) t[g].animation.setSpeed(m, c)
          }, e.setDirection = function (m, c) {
            var g;
            for (g = 0; g < i; g += 1) t[g].animation.setDirection(m, c)
          }, e.play = function (m) {
            var c;
            for (c = 0; c < i; c += 1) t[c].animation.play(m)
          }, e.pause = function (m) {
            var c;
            for (c = 0; c < i; c += 1) t[c].animation.pause(m)
          }, e.stop = function (m) {
            var c;
            for (c = 0; c < i; c += 1) t[c].animation.stop(m)
          }, e.togglePause = function (m) {
            var c;
            for (c = 0; c < i; c += 1) t[c].animation.togglePause(m)
          }, e.searchAnimations = function (m, c, g) {
            var y, b = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
              _ = b.length;
            for (y = 0; y < _; y += 1) g && b[y].setAttribute("data-bm-type", g), l(b[y], m);
            if (c && _ === 0) {
              g || (g = "svg");
              var S = document.getElementsByTagName("body")[0];
              S.innerText = "";
              var I = createTag("div");
              I.style.width = "100%", I.style.height = "100%", I.setAttribute("data-bm-type", g), S.appendChild(I), l(I, m)
            }
          }, e.resize = function () {
            var m;
            for (m = 0; m < i; m += 1) t[m].animation.resize()
          }, e.goToAndStop = function (m, c, g) {
            var y;
            for (y = 0; y < i; y += 1) t[y].animation.goToAndStop(m, c, g)
          }, e.destroy = function (m) {
            var c;
            for (c = i - 1; c >= 0; c -= 1) t[c].animation.destroy(m)
          }, e.freeze = function () {
            s = !0
          }, e.unfreeze = function () {
            s = !1, f()
          }, e.setVolume = function (m, c) {
            var g;
            for (g = 0; g < i; g += 1) t[g].animation.setVolume(m, c)
          }, e.mute = function (m) {
            var c;
            for (c = 0; c < i; c += 1) t[c].animation.mute(m)
          }, e.unmute = function (m) {
            var c;
            for (c = 0; c < i; c += 1) t[c].animation.unmute(m)
          }, e.getRegisteredAnimations = function () {
            var m, c = t.length,
              g = [];
            for (m = 0; m < c; m += 1) g.push(t[m].animation);
            return g
          }, e
        }(),
        BezierFactory = function () {
          var e = {
              getBezierEasing: function (u, h, v, d, f) {
                var m = f || ("bez_" + u + "_" + h + "_" + v + "_" + d).replace(/\./g, "p");
                if (t[m]) return t[m];
                var c = new p([u, h, v, d]);
                return t[m] = c, c
              }
            },
            t = {},
            r = .1,
            i = typeof Float32Array == "function";

          function n(u, h) {
            return 1 - 3 * h + 3 * u
          }

          function a(u, h) {
            return 3 * h - 6 * u
          }

          function s(u) {
            return 3 * u
          }

          function o(u, h, v) {
            return ((n(h, v) * u + a(h, v)) * u + s(h)) * u
          }

          function l(u, h, v) {
            return 3 * n(h, v) * u * u + 2 * a(h, v) * u + s(h)
          }

          function p(u) {
            this._p = u, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
          }
          return p.prototype = {
            get: function (u) {
              var h = this._p[0],
                v = this._p[1],
                d = this._p[2],
                f = this._p[3];
              return this._precomputed || this._precompute(), h === v && d === f ? u : u === 0 ? 0 : u === 1 ? 1 : o(this._getTForX(u), v, f)
            },
            _precompute: function () {
              var u = this._p[0],
                h = this._p[1],
                v = this._p[2],
                d = this._p[3];
              this._precomputed = !0, u === h && v === d || this._calcSampleValues()
            },
            _calcSampleValues: function () {
              for (var u = this._p[0], h = this._p[2], v = 0; v < 11; ++v) this._mSampleValues[v] = o(v * r, u, h)
            },
            _getTForX: function (u) {
              for (var h = this._p[0], v = this._p[2], d = this._mSampleValues, f = 0, m = 1; m !== 10 && d[m] <= u; ++m) f += r;
              var c = f + (u - d[--m]) / (d[m + 1] - d[m]) * r,
                g = l(c, h, v);
              return g >= .001 ? function (y, b, _, S) {
                for (var I = 0; I < 4; ++I) {
                  var x = l(b, _, S);
                  if (x === 0) return b;
                  b -= (o(b, _, S) - y) / x
                }
                return b
              }(u, c, h, v) : g === 0 ? c : function (y, b, _, S, I) {
                var x, P, L = 0;
                do(x = o(P = b + (_ - b) / 2, S, I) - y) > 0 ? _ = P : b = P; while (Math.abs(x) > 1e-7 && ++L < 10);
                return P
              }(u, f, f + r, h, v)
            }
          }, e
        }(),
        pooling = {
          double: function (e) {
            return e.concat(createSizedArray(e.length))
          }
        },
        poolFactory = function (e, t, r) {
          var i = 0,
            n = e,
            a = createSizedArray(n);
          return {
            newElement: function () {
              return i ? a[i -= 1] : t()
            },
            release: function (s) {
              i === n && (a = pooling.double(a), n *= 2), r && r(s), a[i] = s, i += 1
            }
          }
        },
        bezierLengthPool = poolFactory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", getDefaultCurveSegments()),
            lengths: createTypedArray("float32", getDefaultCurveSegments())
          }
        }),
        segmentsLengthPool = poolFactory(8, function () {
          return {
            lengths: [],
            totalLength: 0
          }
        }, function (e) {
          var t, r = e.lengths.length;
          for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
          e.lengths.length = 0
        });

      function bezFunction() {
        var e = Math;

        function t(p, u, h, v, d, f) {
          var m = p * v + u * d + h * f - d * v - f * p - h * u;
          return m > -.001 && m < .001
        }
        var r = function (p, u, h, v) {
          var d, f, m, c, g, y, b = getDefaultCurveSegments(),
            _ = 0,
            S = [],
            I = [],
            x = bezierLengthPool.newElement();
          for (m = h.length, d = 0; d < b; d += 1) {
            for (g = d / (b - 1), y = 0, f = 0; f < m; f += 1) c = bmPow(1 - g, 3) * p[f] + 3 * bmPow(1 - g, 2) * g * h[f] + 3 * (1 - g) * bmPow(g, 2) * v[f] + bmPow(g, 3) * u[f], S[f] = c, I[f] !== null && (y += bmPow(S[f] - I[f], 2)), I[f] = S[f];
            y && (_ += y = bmSqrt(y)), x.percents[d] = g, x.lengths[d] = _
          }
          return x.addedLength = _, x
        };

        function i(p) {
          this.segmentLength = 0, this.points = new Array(p)
        }

        function n(p, u) {
          this.partialLength = p, this.point = u
        }
        var a, s = (a = {}, function (p, u, h, v) {
          var d = (p[0] + "_" + p[1] + "_" + u[0] + "_" + u[1] + "_" + h[0] + "_" + h[1] + "_" + v[0] + "_" + v[1]).replace(/\./g, "p");
          if (!a[d]) {
            var f, m, c, g, y, b, _, S = getDefaultCurveSegments(),
              I = 0,
              x = null;
            p.length === 2 && (p[0] !== u[0] || p[1] !== u[1]) && t(p[0], p[1], u[0], u[1], p[0] + h[0], p[1] + h[1]) && t(p[0], p[1], u[0], u[1], u[0] + v[0], u[1] + v[1]) && (S = 2);
            var P = new i(S);
            for (c = h.length, f = 0; f < S; f += 1) {
              for (_ = createSizedArray(c), y = f / (S - 1), b = 0, m = 0; m < c; m += 1) g = bmPow(1 - y, 3) * p[m] + 3 * bmPow(1 - y, 2) * y * (p[m] + h[m]) + 3 * (1 - y) * bmPow(y, 2) * (u[m] + v[m]) + bmPow(y, 3) * u[m], _[m] = g, x !== null && (b += bmPow(_[m] - x[m], 2));
              I += b = bmSqrt(b), P.points[f] = new n(b, _), x = _
            }
            P.segmentLength = I, a[d] = P
          }
          return a[d]
        });

        function o(p, u) {
          var h = u.percents,
            v = u.lengths,
            d = h.length,
            f = bmFloor((d - 1) * p),
            m = p * u.addedLength,
            c = 0;
          if (f === d - 1 || f === 0 || m === v[f]) return h[f];
          for (var g = v[f] > m ? -1 : 1, y = !0; y;)
            if (v[f] <= m && v[f + 1] > m ? (c = (m - v[f]) / (v[f + 1] - v[f]), y = !1) : f += g, f < 0 || f >= d - 1) {
              if (f === d - 1) return h[f];
              y = !1
            } return h[f] + (h[f + 1] - h[f]) * c
        }
        var l = createTypedArray("float32", 8);
        return {
          getSegmentsLength: function (p) {
            var u, h = segmentsLengthPool.newElement(),
              v = p.c,
              d = p.v,
              f = p.o,
              m = p.i,
              c = p._length,
              g = h.lengths,
              y = 0;
            for (u = 0; u < c - 1; u += 1) g[u] = r(d[u], d[u + 1], f[u], m[u + 1]), y += g[u].addedLength;
            return v && c && (g[u] = r(d[u], d[0], f[u], m[0]), y += g[u].addedLength), h.totalLength = y, h
          },
          getNewSegment: function (p, u, h, v, d, f, m) {
            d < 0 ? d = 0 : d > 1 && (d = 1);
            var c, g = o(d, m),
              y = o(f = f > 1 ? 1 : f, m),
              b = p.length,
              _ = 1 - g,
              S = 1 - y,
              I = _ * _ * _,
              x = g * _ * _ * 3,
              P = g * g * _ * 3,
              L = g * g * g,
              D = _ * _ * S,
              O = g * _ * S + _ * g * S + _ * _ * y,
              B = g * g * S + _ * g * y + g * _ * y,
              R = g * g * y,
              F = _ * S * S,
              V = g * S * S + _ * y * S + _ * S * y,
              W = g * y * S + _ * y * y + g * S * y,
              ee = g * y * y,
              A = S * S * S,
              q = y * S * S + S * y * S + S * S * y,
              G = y * y * S + S * y * y + y * S * y,
              C = y * y * y;
            for (c = 0; c < b; c += 1) l[4 * c] = e.round(1e3 * (I * p[c] + x * h[c] + P * v[c] + L * u[c])) / 1e3, l[4 * c + 1] = e.round(1e3 * (D * p[c] + O * h[c] + B * v[c] + R * u[c])) / 1e3, l[4 * c + 2] = e.round(1e3 * (F * p[c] + V * h[c] + W * v[c] + ee * u[c])) / 1e3, l[4 * c + 3] = e.round(1e3 * (A * p[c] + q * h[c] + G * v[c] + C * u[c])) / 1e3;
            return l
          },
          getPointInSegment: function (p, u, h, v, d, f) {
            var m = o(d, f),
              c = 1 - m;
            return [e.round(1e3 * (c * c * c * p[0] + (m * c * c + c * m * c + c * c * m) * h[0] + (m * m * c + c * m * m + m * c * m) * v[0] + m * m * m * u[0])) / 1e3, e.round(1e3 * (c * c * c * p[1] + (m * c * c + c * m * c + c * c * m) * h[1] + (m * m * c + c * m * m + m * c * m) * v[1] + m * m * m * u[1])) / 1e3]
          },
          buildBezierData: s,
          pointOnLine2D: t,
          pointOnLine3D: function (p, u, h, v, d, f, m, c, g) {
            if (h === 0 && f === 0 && g === 0) return t(p, u, v, d, m, c);
            var y, b = e.sqrt(e.pow(v - p, 2) + e.pow(d - u, 2) + e.pow(f - h, 2)),
              _ = e.sqrt(e.pow(m - p, 2) + e.pow(c - u, 2) + e.pow(g - h, 2)),
              S = e.sqrt(e.pow(m - v, 2) + e.pow(c - d, 2) + e.pow(g - f, 2));
            return (y = b > _ ? b > S ? b - _ - S : S - _ - b : S > _ ? S - _ - b : _ - b - S) > -1e-4 && y < 1e-4
          }
        }
      }
      var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;

      function interpolateValue(e, t) {
        var r, i = this.offsetTime;
        this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
        for (var n, a, s, o, l, p, u, h, v, d = t.lastIndex, f = d, m = this.keyframes.length - 1, c = !0; c;) {
          if (n = this.keyframes[f], a = this.keyframes[f + 1], f === m - 1 && e >= a.t - i) {
            n.h && (n = a), d = 0;
            break
          }
          if (a.t - i > e) {
            d = f;
            break
          }
          f < m - 1 ? f += 1 : (d = 0, c = !1)
        }
        s = this.keyframesMetadata[f] || {};
        var g, y = a.t - i,
          b = n.t - i;
        if (n.to) {
          s.bezierData || (s.bezierData = bez.buildBezierData(n.s, a.s || n.e, n.to, n.ti));
          var _ = s.bezierData;
          if (e >= y || e < b) {
            var S = e >= y ? _.points.length - 1 : 0;
            for (l = _.points[S].point.length, o = 0; o < l; o += 1) r[o] = _.points[S].point[o]
          } else {
            s.__fnct ? v = s.__fnct : (v = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, s.__fnct = v), p = v((e - b) / (y - b));
            var I, x = _.segmentLength * p,
              P = t.lastFrame < e && t._lastKeyframeIndex === f ? t._lastAddedLength : 0;
            for (h = t.lastFrame < e && t._lastKeyframeIndex === f ? t._lastPoint : 0, c = !0, u = _.points.length; c;) {
              if (P += _.points[h].partialLength, x === 0 || p === 0 || h === _.points.length - 1) {
                for (l = _.points[h].point.length, o = 0; o < l; o += 1) r[o] = _.points[h].point[o];
                break
              }
              if (x >= P && x < P + _.points[h + 1].partialLength) {
                for (I = (x - P) / _.points[h + 1].partialLength, l = _.points[h].point.length, o = 0; o < l; o += 1) r[o] = _.points[h].point[o] + (_.points[h + 1].point[o] - _.points[h].point[o]) * I;
                break
              }
              h < u - 1 ? h += 1 : c = !1
            }
            t._lastPoint = h, t._lastAddedLength = P - _.points[h].partialLength, t._lastKeyframeIndex = f
          }
        } else {
          var L, D, O, B, R;
          if (m = n.s.length, g = a.s || n.e, this.sh && n.h !== 1) e >= y ? (r[0] = g[0], r[1] = g[1], r[2] = g[2]) : e <= b ? (r[0] = n.s[0], r[1] = n.s[1], r[2] = n.s[2]) : quaternionToEuler(r, slerp(createQuaternion(n.s), createQuaternion(g), (e - b) / (y - b)));
          else
            for (f = 0; f < m; f += 1) n.h !== 1 && (e >= y ? p = 1 : e < b ? p = 0 : (n.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[f] ? v = s.__fnct[f] : (L = n.o.x[f] === void 0 ? n.o.x[0] : n.o.x[f], D = n.o.y[f] === void 0 ? n.o.y[0] : n.o.y[f], O = n.i.x[f] === void 0 ? n.i.x[0] : n.i.x[f], B = n.i.y[f] === void 0 ? n.i.y[0] : n.i.y[f], v = BezierFactory.getBezierEasing(L, D, O, B).get, s.__fnct[f] = v)) : s.__fnct ? v = s.__fnct : (L = n.o.x, D = n.o.y, O = n.i.x, B = n.i.y, v = BezierFactory.getBezierEasing(L, D, O, B).get, n.keyframeMetadata = v), p = v((e - b) / (y - b)))), g = a.s || n.e, R = n.h === 1 ? n.s[f] : n.s[f] + (g[f] - n.s[f]) * p, this.propType === "multidimensional" ? r[f] = R : r = R
        }
        return t.lastIndex = d, r
      }

      function slerp(e, t, r) {
        var i, n, a, s, o, l = [],
          p = e[0],
          u = e[1],
          h = e[2],
          v = e[3],
          d = t[0],
          f = t[1],
          m = t[2],
          c = t[3];
        return (n = p * d + u * f + h * m + v * c) < 0 && (n = -n, d = -d, f = -f, m = -m, c = -c), 1 - n > 1e-6 ? (i = Math.acos(n), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, o = Math.sin(r * i) / a) : (s = 1 - r, o = r), l[0] = s * p + o * d, l[1] = s * u + o * f, l[2] = s * h + o * m, l[3] = s * v + o * c, l
      }

      function quaternionToEuler(e, t) {
        var r = t[0],
          i = t[1],
          n = t[2],
          a = t[3],
          s = Math.atan2(2 * i * a - 2 * r * n, 1 - 2 * i * i - 2 * n * n),
          o = Math.asin(2 * r * i + 2 * n * a),
          l = Math.atan2(2 * r * a - 2 * i * n, 1 - 2 * r * r - 2 * n * n);
        e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
      }

      function createQuaternion(e) {
        var t = e[0] * degToRads,
          r = e[1] * degToRads,
          i = e[2] * degToRads,
          n = Math.cos(t / 2),
          a = Math.cos(r / 2),
          s = Math.cos(i / 2),
          o = Math.sin(t / 2),
          l = Math.sin(r / 2),
          p = Math.sin(i / 2);
        return [o * l * s + n * a * p, o * a * s + n * l * p, n * l * s - o * a * p, n * a * s - o * l * p]
      }

      function getValueAtCurrentTime() {
        var e = this.comp.renderedFrame - this.offsetTime,
          t = this.keyframes[0].t - this.offsetTime,
          r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
          this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
          var i = this.interpolateValue(e, this._caching);
          this.pv = i
        }
        return this._caching.lastFrame = e, this.pv
      }

      function setVValue(e) {
        var t;
        if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
        else
          for (var r = 0, i = this.v.length; r < i;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
      }

      function processEffectsSequence() {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
          if (this.lock) this.setVValue(this.pv);
          else {
            var e;
            this.lock = !0, this._mdf = this._isFirstFrame;
            var t = this.effectsSequence.length,
              r = this.kf ? this.pv : this.data.k;
            for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
          }
      }

      function addEffect(e) {
        this.effectsSequence.push(e), this.container.addDynamicProperty(this)
      }

      function ValueProperty(e, t, r, i) {
        this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
      }

      function MultiDimensionalProperty(e, t, r, i) {
        var n;
        this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
        var a = t.k.length;
        for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), n = 0; n < a; n += 1) this.v[n] = t.k[n] * this.mult, this.pv[n] = t.k[n];
        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
      }

      function KeyframedValueProperty(e, t, r, i) {
        this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: 0,
          _lastKeyframeIndex: -1
        }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
      }

      function KeyframedMultidimensionalProperty(e, t, r, i) {
        var n;
        this.propType = "multidimensional";
        var a, s, o, l, p = t.k.length;
        for (n = 0; n < p - 1; n += 1) t.k[n].to && t.k[n].s && t.k[n + 1] && t.k[n + 1].s && (a = t.k[n].s, s = t.k[n + 1].s, o = t.k[n].to, l = t.k[n].ti, (a.length === 2 && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || a.length === 3 && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[n].to = null, t.k[n].ti = null), a[0] === s[0] && a[1] === s[1] && o[0] === 0 && o[1] === 0 && l[0] === 0 && l[1] === 0 && (a.length === 2 || a[2] === s[2] && o[2] === 0 && l[2] === 0) && (t.k[n].to = null, t.k[n].ti = null));
        this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
        var u = t.k[0].s.length;
        for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), n = 0; n < u; n += 1) this.v[n] = initFrame, this.pv[n] = initFrame;
        this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", u)
        }, this.addEffect = addEffect
      }
      var PropertyFactory = {
        getProp: function (e, t, r, i, n) {
          var a;
          if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
            if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, i, n);
            else switch (r) {
              case 0:
                a = new KeyframedValueProperty(e, t, i, n);
                break;
              case 1:
                a = new KeyframedMultidimensionalProperty(e, t, i, n)
            } else a = new ValueProperty(e, t, i, n);
          return a.effectsSequence.length && n.addDynamicProperty(a), a
        }
      };

      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (e) {
          this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
        },
        iterateDynamicProperties: function () {
          var e;
          this._mdf = !1;
          var t = this.dynamicProperties.length;
          for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
        },
        initDynamicPropertyContainer: function (e) {
          this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
        }
      };
      var pointPool = poolFactory(8, function () {
        return createTypedArray("float32", 2)
      });

      function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
      }
      ShapePath.prototype.setPathData = function (e, t) {
        this.c = e, this.setLength(t);
        for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
      }, ShapePath.prototype.setLength = function (e) {
        for (; this._maxLength < e;) this.doubleArrayLength();
        this._length = e
      }, ShapePath.prototype.doubleArrayLength = function () {
        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
      }, ShapePath.prototype.setXYAt = function (e, t, r, i, n) {
        var a;
        switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
          case "v":
            a = this.v;
            break;
          case "i":
            a = this.i;
            break;
          case "o":
            a = this.o;
            break;
          default:
            a = []
        }(!a[i] || a[i] && !n) && (a[i] = pointPool.newElement()), a[i][0] = e, a[i][1] = t
      }, ShapePath.prototype.setTripleAt = function (e, t, r, i, n, a, s, o) {
        this.setXYAt(e, t, "v", s, o), this.setXYAt(r, i, "o", s, o), this.setXYAt(n, a, "i", s, o)
      }, ShapePath.prototype.reverse = function () {
        var e = new ShapePath;
        e.setPathData(this.c, this._length);
        var t = this.v,
          r = this.o,
          i = this.i,
          n = 0;
        this.c && (e.setTripleAt(t[0][0], t[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), n = 1);
        var a, s = this._length - 1,
          o = this._length;
        for (a = n; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], i[s][0], i[s][1], r[s][0], r[s][1], a, !1), s -= 1;
        return e
      }, ShapePath.prototype.length = function () {
        return this._length
      };
      var shapePool = (factory = poolFactory(4, function () {
          return new ShapePath
        }, function (e) {
          var t, r = e._length;
          for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
          e._length = 0, e.c = !1
        }), factory.clone = function (e) {
          var t, r = factory.newElement(),
            i = e._length === void 0 ? e.v.length : e._length;
          for (r.setLength(i), r.c = e.c, t = 0; t < i; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
          return r
        }, factory),
        factory;

      function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
      }
      ShapeCollection.prototype.addShape = function (e) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
      }, ShapeCollection.prototype.releaseShapes = function () {
        var e;
        for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
        this._length = 0
      };
      var shapeCollectionPool = (ob = {
          newShapeCollection: function () {
            return _length ? pool[_length -= 1] : new ShapeCollection
          },
          release: function (e) {
            var t, r = e._length;
            for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
            e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
          }
        }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
        ob, _length, _maxLength, pool, ShapePropertyFactory = function () {
          var e = -999999;

          function t(d, f, m) {
            var c, g, y, b, _, S, I, x, P, L = m.lastIndex,
              D = this.keyframes;
            if (d < D[0].t - this.offsetTime) c = D[0].s[0], y = !0, L = 0;
            else if (d >= D[D.length - 1].t - this.offsetTime) c = D[D.length - 1].s ? D[D.length - 1].s[0] : D[D.length - 2].e[0], y = !0;
            else {
              for (var O, B, R, F = L, V = D.length - 1, W = !0; W && (O = D[F], !((B = D[F + 1]).t - this.offsetTime > d));) F < V - 1 ? F += 1 : W = !1;
              if (R = this.keyframesMetadata[F] || {}, L = F, !(y = O.h === 1)) {
                if (d >= B.t - this.offsetTime) x = 1;
                else if (d < O.t - this.offsetTime) x = 0;
                else {
                  var ee;
                  R.__fnct ? ee = R.__fnct : (ee = BezierFactory.getBezierEasing(O.o.x, O.o.y, O.i.x, O.i.y).get, R.__fnct = ee), x = ee((d - (O.t - this.offsetTime)) / (B.t - this.offsetTime - (O.t - this.offsetTime)))
                }
                g = B.s ? B.s[0] : O.e[0]
              }
              c = O.s[0]
            }
            for (S = f._length, I = c.i[0].length, m.lastIndex = L, b = 0; b < S; b += 1)
              for (_ = 0; _ < I; _ += 1) P = y ? c.i[b][_] : c.i[b][_] + (g.i[b][_] - c.i[b][_]) * x, f.i[b][_] = P, P = y ? c.o[b][_] : c.o[b][_] + (g.o[b][_] - c.o[b][_]) * x, f.o[b][_] = P, P = y ? c.v[b][_] : c.v[b][_] + (g.v[b][_] - c.v[b][_]) * x, f.v[b][_] = P
          }

          function r() {
            var d = this.comp.renderedFrame - this.offsetTime,
              f = this.keyframes[0].t - this.offsetTime,
              m = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              c = this._caching.lastFrame;
            return c !== e && (c < f && d < f || c > m && d > m) || (this._caching.lastIndex = c < d ? this._caching.lastIndex : 0, this.interpolateShape(d, this.pv, this._caching)), this._caching.lastFrame = d, this.pv
          }

          function i() {
            this.paths = this.localShapeCollection
          }

          function n(d) {
            (function (f, m) {
              if (f._length !== m._length || f.c !== m.c) return !1;
              var c, g = f._length;
              for (c = 0; c < g; c += 1)
                if (f.v[c][0] !== m.v[c][0] || f.v[c][1] !== m.v[c][1] || f.o[c][0] !== m.o[c][0] || f.o[c][1] !== m.o[c][1] || f.i[c][0] !== m.i[c][0] || f.i[c][1] !== m.i[c][1]) return !1;
              return !0
            })(this.v, d) || (this.v = shapePool.clone(d), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
          }

          function a() {
            if (this.elem.globalData.frameId !== this.frameId)
              if (this.effectsSequence.length)
                if (this.lock) this.setVValue(this.pv);
                else {
                  var d, f;
                  this.lock = !0, this._mdf = !1, d = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                  var m = this.effectsSequence.length;
                  for (f = 0; f < m; f += 1) d = this.effectsSequence[f](d);
                  this.setVValue(d), this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            else this._mdf = !1
          }

          function s(d, f, m) {
            this.propType = "shape", this.comp = d.comp, this.container = d, this.elem = d, this.data = f, this.k = !1, this.kf = !1, this._mdf = !1;
            var c = m === 3 ? f.pt.k : f.ks.k;
            this.v = shapePool.clone(c), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
          }

          function o(d) {
            this.effectsSequence.push(d), this.container.addDynamicProperty(this)
          }

          function l(d, f, m) {
            this.propType = "shape", this.comp = d.comp, this.elem = d, this.container = d, this.offsetTime = d.data.st, this.keyframes = m === 3 ? f.pt.k : f.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
            var c = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, c), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = i, this._caching = {
              lastFrame: e,
              lastIndex: 0
            }, this.effectsSequence = [r.bind(this)]
          }
          s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = n, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = n, l.prototype.addEffect = o;
          var p = function () {
              var d = roundCorner;

              function f(m, c) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = c.d, this.elem = m, this.comp = m.comp, this.frameId = -1, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, c.p, 1, 0, this), this.s = PropertyFactory.getProp(m, c.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
              }
              return f.prototype = {
                reset: i,
                getValue: function () {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                },
                convertEllToPath: function () {
                  var m = this.p.v[0],
                    c = this.p.v[1],
                    g = this.s.v[0] / 2,
                    y = this.s.v[1] / 2,
                    b = this.d !== 3,
                    _ = this.v;
                  _.v[0][0] = m, _.v[0][1] = c - y, _.v[1][0] = b ? m + g : m - g, _.v[1][1] = c, _.v[2][0] = m, _.v[2][1] = c + y, _.v[3][0] = b ? m - g : m + g, _.v[3][1] = c, _.i[0][0] = b ? m - g * d : m + g * d, _.i[0][1] = c - y, _.i[1][0] = b ? m + g : m - g, _.i[1][1] = c - y * d, _.i[2][0] = b ? m + g * d : m - g * d, _.i[2][1] = c + y, _.i[3][0] = b ? m - g : m + g, _.i[3][1] = c + y * d, _.o[0][0] = b ? m + g * d : m - g * d, _.o[0][1] = c - y, _.o[1][0] = b ? m + g : m - g, _.o[1][1] = c + y * d, _.o[2][0] = b ? m - g * d : m + g * d, _.o[2][1] = c + y, _.o[3][0] = b ? m - g : m + g, _.o[3][1] = c - y * d
                }
              }, extendPrototype([DynamicPropertyContainer], f), f
            }(),
            u = function () {
              function d(f, m) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = f, this.comp = f.comp, this.data = m, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(f), m.sy === 1 ? (this.ir = PropertyFactory.getProp(f, m.ir, 0, 0, this), this.is = PropertyFactory.getProp(f, m.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(f, m.pt, 0, 0, this), this.p = PropertyFactory.getProp(f, m.p, 1, 0, this), this.r = PropertyFactory.getProp(f, m.r, 0, degToRads, this), this.or = PropertyFactory.getProp(f, m.or, 0, 0, this), this.os = PropertyFactory.getProp(f, m.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
              }
              return d.prototype = {
                reset: i,
                getValue: function () {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                },
                convertStarToPath: function () {
                  var f, m, c, g, y = 2 * Math.floor(this.pt.v),
                    b = 2 * Math.PI / y,
                    _ = !0,
                    S = this.or.v,
                    I = this.ir.v,
                    x = this.os.v,
                    P = this.is.v,
                    L = 2 * Math.PI * S / (2 * y),
                    D = 2 * Math.PI * I / (2 * y),
                    O = -Math.PI / 2;
                  O += this.r.v;
                  var B = this.data.d === 3 ? -1 : 1;
                  for (this.v._length = 0, f = 0; f < y; f += 1) {
                    c = _ ? x : P, g = _ ? L : D;
                    var R = (m = _ ? S : I) * Math.cos(O),
                      F = m * Math.sin(O),
                      V = R === 0 && F === 0 ? 0 : F / Math.sqrt(R * R + F * F),
                      W = R === 0 && F === 0 ? 0 : -R / Math.sqrt(R * R + F * F);
                    R += +this.p.v[0], F += +this.p.v[1], this.v.setTripleAt(R, F, R - V * g * c * B, F - W * g * c * B, R + V * g * c * B, F + W * g * c * B, f, !0), _ = !_, O += b * B
                  }
                },
                convertPolygonToPath: function () {
                  var f, m = Math.floor(this.pt.v),
                    c = 2 * Math.PI / m,
                    g = this.or.v,
                    y = this.os.v,
                    b = 2 * Math.PI * g / (4 * m),
                    _ = .5 * -Math.PI,
                    S = this.data.d === 3 ? -1 : 1;
                  for (_ += this.r.v, this.v._length = 0, f = 0; f < m; f += 1) {
                    var I = g * Math.cos(_),
                      x = g * Math.sin(_),
                      P = I === 0 && x === 0 ? 0 : x / Math.sqrt(I * I + x * x),
                      L = I === 0 && x === 0 ? 0 : -I / Math.sqrt(I * I + x * x);
                    I += +this.p.v[0], x += +this.p.v[1], this.v.setTripleAt(I, x, I - P * b * y * S, x - L * b * y * S, I + P * b * y * S, x + L * b * y * S, f, !0), _ += c * S
                  }
                  this.paths.length = 0, this.paths[0] = this.v
                }
              }, extendPrototype([DynamicPropertyContainer], d), d
            }(),
            h = function () {
              function d(f, m) {
                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = f, this.comp = f.comp, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(f), this.p = PropertyFactory.getProp(f, m.p, 1, 0, this), this.s = PropertyFactory.getProp(f, m.s, 1, 0, this), this.r = PropertyFactory.getProp(f, m.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
              }
              return d.prototype = {
                convertRectToPath: function () {
                  var f = this.p.v[0],
                    m = this.p.v[1],
                    c = this.s.v[0] / 2,
                    g = this.s.v[1] / 2,
                    y = bmMin(c, g, this.r.v),
                    b = y * (1 - roundCorner);
                  this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(f + c, m - g + y, f + c, m - g + y, f + c, m - g + b, 0, !0), this.v.setTripleAt(f + c, m + g - y, f + c, m + g - b, f + c, m + g - y, 1, !0), y !== 0 ? (this.v.setTripleAt(f + c - y, m + g, f + c - y, m + g, f + c - b, m + g, 2, !0), this.v.setTripleAt(f - c + y, m + g, f - c + b, m + g, f - c + y, m + g, 3, !0), this.v.setTripleAt(f - c, m + g - y, f - c, m + g - y, f - c, m + g - b, 4, !0), this.v.setTripleAt(f - c, m - g + y, f - c, m - g + b, f - c, m - g + y, 5, !0), this.v.setTripleAt(f - c + y, m - g, f - c + y, m - g, f - c + b, m - g, 6, !0), this.v.setTripleAt(f + c - y, m - g, f + c - b, m - g, f + c - y, m - g, 7, !0)) : (this.v.setTripleAt(f - c, m + g, f - c + b, m + g, f - c, m + g, 2), this.v.setTripleAt(f - c, m - g, f - c, m - g + b, f - c, m - g, 3))) : (this.v.setTripleAt(f + c, m - g + y, f + c, m - g + b, f + c, m - g + y, 0, !0), y !== 0 ? (this.v.setTripleAt(f + c - y, m - g, f + c - y, m - g, f + c - b, m - g, 1, !0), this.v.setTripleAt(f - c + y, m - g, f - c + b, m - g, f - c + y, m - g, 2, !0), this.v.setTripleAt(f - c, m - g + y, f - c, m - g + y, f - c, m - g + b, 3, !0), this.v.setTripleAt(f - c, m + g - y, f - c, m + g - b, f - c, m + g - y, 4, !0), this.v.setTripleAt(f - c + y, m + g, f - c + y, m + g, f - c + b, m + g, 5, !0), this.v.setTripleAt(f + c - y, m + g, f + c - b, m + g, f + c - y, m + g, 6, !0), this.v.setTripleAt(f + c, m + g - y, f + c, m + g - y, f + c, m + g - b, 7, !0)) : (this.v.setTripleAt(f - c, m - g, f - c + b, m - g, f - c, m - g, 1, !0), this.v.setTripleAt(f - c, m + g, f - c, m + g - b, f - c, m + g, 2, !0), this.v.setTripleAt(f + c, m + g, f + c - b, m + g, f + c, m + g, 3, !0)))
                },
                getValue: function () {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                },
                reset: i
              }, extendPrototype([DynamicPropertyContainer], d), d
            }(),
            v = {
              getShapeProp: function (d, f, m) {
                var c;
                return m === 3 || m === 4 ? c = (m === 3 ? f.pt : f.ks).k.length ? new l(d, f, m) : new s(d, f, m) : m === 5 ? c = new h(d, f) : m === 6 ? c = new p(d, f) : m === 7 && (c = new u(d, f)), c.k && d.addDynamicProperty(c), c
              },
              getConstructorFunction: function () {
                return s
              },
              getKeyframedConstructorFunction: function () {
                return l
              }
            };
          return v
        }(),
        Matrix = function () {
          var e = Math.cos,
            t = Math.sin,
            r = Math.tan,
            i = Math.round;

          function n() {
            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
          }

          function a(A) {
            if (A === 0) return this;
            var q = e(A),
              G = t(A);
            return this._t(q, -G, 0, 0, G, q, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function s(A) {
            if (A === 0) return this;
            var q = e(A),
              G = t(A);
            return this._t(1, 0, 0, 0, 0, q, -G, 0, 0, G, q, 0, 0, 0, 0, 1)
          }

          function o(A) {
            if (A === 0) return this;
            var q = e(A),
              G = t(A);
            return this._t(q, 0, G, 0, 0, 1, 0, 0, -G, 0, q, 0, 0, 0, 0, 1)
          }

          function l(A) {
            if (A === 0) return this;
            var q = e(A),
              G = t(A);
            return this._t(q, -G, 0, 0, G, q, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function p(A, q) {
            return this._t(1, q, A, 1, 0, 0)
          }

          function u(A, q) {
            return this.shear(r(A), r(q))
          }

          function h(A, q) {
            var G = e(q),
              C = t(q);
            return this._t(G, C, 0, 0, -C, G, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(A), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(G, -C, 0, 0, C, G, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function v(A, q, G) {
            return G || G === 0 || (G = 1), A === 1 && q === 1 && G === 1 ? this : this._t(A, 0, 0, 0, 0, q, 0, 0, 0, 0, G, 0, 0, 0, 0, 1)
          }

          function d(A, q, G, C, w, M, k, Q, te, Z, re, ce, se, N, J, ie) {
            return this.props[0] = A, this.props[1] = q, this.props[2] = G, this.props[3] = C, this.props[4] = w, this.props[5] = M, this.props[6] = k, this.props[7] = Q, this.props[8] = te, this.props[9] = Z, this.props[10] = re, this.props[11] = ce, this.props[12] = se, this.props[13] = N, this.props[14] = J, this.props[15] = ie, this
          }

          function f(A, q, G) {
            return G = G || 0, A !== 0 || q !== 0 || G !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, A, q, G, 1) : this
          }

          function m(A, q, G, C, w, M, k, Q, te, Z, re, ce, se, N, J, ie) {
            var K = this.props;
            if (A === 1 && q === 0 && G === 0 && C === 0 && w === 0 && M === 1 && k === 0 && Q === 0 && te === 0 && Z === 0 && re === 1 && ce === 0) return K[12] = K[12] * A + K[15] * se, K[13] = K[13] * M + K[15] * N, K[14] = K[14] * re + K[15] * J, K[15] *= ie, this._identityCalculated = !1, this;
            var ve = K[0],
              Ae = K[1],
              Pe = K[2],
              T = K[3],
              z = K[4],
              H = K[5],
              U = K[6],
              j = K[7],
              X = K[8],
              ae = K[9],
              oe = K[10],
              ye = K[11],
              ne = K[12],
              he = K[13],
              me = K[14],
              we = K[15];
            return K[0] = ve * A + Ae * w + Pe * te + T * se, K[1] = ve * q + Ae * M + Pe * Z + T * N, K[2] = ve * G + Ae * k + Pe * re + T * J, K[3] = ve * C + Ae * Q + Pe * ce + T * ie, K[4] = z * A + H * w + U * te + j * se, K[5] = z * q + H * M + U * Z + j * N, K[6] = z * G + H * k + U * re + j * J, K[7] = z * C + H * Q + U * ce + j * ie, K[8] = X * A + ae * w + oe * te + ye * se, K[9] = X * q + ae * M + oe * Z + ye * N, K[10] = X * G + ae * k + oe * re + ye * J, K[11] = X * C + ae * Q + oe * ce + ye * ie, K[12] = ne * A + he * w + me * te + we * se, K[13] = ne * q + he * M + me * Z + we * N, K[14] = ne * G + he * k + me * re + we * J, K[15] = ne * C + he * Q + me * ce + we * ie, this._identityCalculated = !1, this
          }

          function c(A) {
            var q = A.props;
            return this.transform(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10], q[11], q[12], q[13], q[14], q[15])
          }

          function g() {
            return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
          }

          function y(A) {
            for (var q = 0; q < 16;) {
              if (A.props[q] !== this.props[q]) return !1;
              q += 1
            }
            return !0
          }

          function b(A) {
            var q;
            for (q = 0; q < 16; q += 1) A.props[q] = this.props[q];
            return A
          }

          function _(A) {
            var q;
            for (q = 0; q < 16; q += 1) this.props[q] = A[q]
          }

          function S(A, q, G) {
            return {
              x: A * this.props[0] + q * this.props[4] + G * this.props[8] + this.props[12],
              y: A * this.props[1] + q * this.props[5] + G * this.props[9] + this.props[13],
              z: A * this.props[2] + q * this.props[6] + G * this.props[10] + this.props[14]
            }
          }

          function I(A, q, G) {
            return A * this.props[0] + q * this.props[4] + G * this.props[8] + this.props[12]
          }

          function x(A, q, G) {
            return A * this.props[1] + q * this.props[5] + G * this.props[9] + this.props[13]
          }

          function P(A, q, G) {
            return A * this.props[2] + q * this.props[6] + G * this.props[10] + this.props[14]
          }

          function L() {
            var A = this.props[0] * this.props[5] - this.props[1] * this.props[4],
              q = this.props[5] / A,
              G = -this.props[1] / A,
              C = -this.props[4] / A,
              w = this.props[0] / A,
              M = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / A,
              k = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / A,
              Q = new Matrix;
            return Q.props[0] = q, Q.props[1] = G, Q.props[4] = C, Q.props[5] = w, Q.props[12] = M, Q.props[13] = k, Q
          }

          function D(A) {
            return this.getInverseMatrix().applyToPointArray(A[0], A[1], A[2] || 0)
          }

          function O(A) {
            var q, G = A.length,
              C = [];
            for (q = 0; q < G; q += 1) C[q] = D(A[q]);
            return C
          }

          function B(A, q, G) {
            var C = createTypedArray("float32", 6);
            if (this.isIdentity()) C[0] = A[0], C[1] = A[1], C[2] = q[0], C[3] = q[1], C[4] = G[0], C[5] = G[1];
            else {
              var w = this.props[0],
                M = this.props[1],
                k = this.props[4],
                Q = this.props[5],
                te = this.props[12],
                Z = this.props[13];
              C[0] = A[0] * w + A[1] * k + te, C[1] = A[0] * M + A[1] * Q + Z, C[2] = q[0] * w + q[1] * k + te, C[3] = q[0] * M + q[1] * Q + Z, C[4] = G[0] * w + G[1] * k + te, C[5] = G[0] * M + G[1] * Q + Z
            }
            return C
          }

          function R(A, q, G) {
            return this.isIdentity() ? [A, q, G] : [A * this.props[0] + q * this.props[4] + G * this.props[8] + this.props[12], A * this.props[1] + q * this.props[5] + G * this.props[9] + this.props[13], A * this.props[2] + q * this.props[6] + G * this.props[10] + this.props[14]]
          }

          function F(A, q) {
            if (this.isIdentity()) return A + "," + q;
            var G = this.props;
            return Math.round(100 * (A * G[0] + q * G[4] + G[12])) / 100 + "," + Math.round(100 * (A * G[1] + q * G[5] + G[13])) / 100
          }

          function V() {
            for (var A = 0, q = this.props, G = "matrix3d("; A < 16;) G += i(1e4 * q[A]) / 1e4, G += A === 15 ? ")" : ",", A += 1;
            return G
          }

          function W(A) {
            return A < 1e-6 && A > 0 || A > -1e-6 && A < 0 ? i(1e4 * A) / 1e4 : A
          }

          function ee() {
            var A = this.props;
            return "matrix(" + W(A[0]) + "," + W(A[1]) + "," + W(A[4]) + "," + W(A[5]) + "," + W(A[12]) + "," + W(A[13]) + ")"
          }
          return function () {
            this.reset = n, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = h, this.shear = p, this.scale = v, this.setTransform = d, this.translate = f, this.transform = m, this.multiply = c, this.applyToPoint = S, this.applyToX = I, this.applyToY = x, this.applyToZ = P, this.applyToPointArray = R, this.applyToTriplePoints = B, this.applyToPointStringified = F, this.toCSS = V, this.to2dCSS = ee, this.clone = b, this.cloneFromProps = _, this.equals = y, this.inversePoints = O, this.inversePoint = D, this.getInverseMatrix = L, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
          }
        }();

      function _typeof$3(e) {
        return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$3(e)
      }
      var lottie = {},
        standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";

      function setLocation(e) {
        setLocationHref(e)
      }

      function searchAnimations() {
        standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
      }

      function setSubframeRendering(e) {
        setSubframeEnabled(e)
      }

      function setPrefix(e) {
        setIdPrefix(e)
      }

      function loadAnimation(e) {
        return standalone === !0 && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
      }

      function setQuality(e) {
        if (typeof e == "string") switch (e) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10)
        } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
        getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
      }

      function inBrowser() {
        return typeof navigator < "u"
      }

      function installPlugin(e, t) {
        e === "expressions" && setExpressionsPlugin(t)
      }

      function getFactory(e) {
        switch (e) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null
        }
      }

      function checkReady() {
        document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
      }

      function getQueryVariable(e) {
        for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
          var i = t[r].split("=");
          if (decodeURIComponent(i[0]) == e) return decodeURIComponent(i[1])
        }
        return null
      }
      lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
      var queryString = "";
      if (standalone) {
        var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || {
            src: ""
          };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        (typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u" || typeof define == "function" && define.amd || (window.bodymovin = lottie)
      } catch (e) {}
      var ShapeModifiers = function () {
        var e = {},
          t = {};
        return e.registerModifier = function (r, i) {
          t[r] || (t[r] = i)
        }, e.getModifier = function (r, i, n) {
          return new t[r](i, n)
        }, e
      }();

      function ShapeModifier() {}

      function TrimModifier() {}

      function PuckerAndBloatModifier() {}
      ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShapeToModifier = function () {}, ShapeModifier.prototype.addShape = function (e) {
        if (!this.closed) {
          e.sh.container.addDynamicProperty(e.sh);
          var t = {
            shape: e.sh,
            data: e,
            localShapeCollection: shapeCollectionPool.newShapeCollection()
          };
          this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
        }
      }, ShapeModifier.prototype.init = function (e, t) {
        this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
      }, ShapeModifier.prototype.processKeys = function () {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
      }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (e, t) {
        this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
      }, TrimModifier.prototype.addShapeToModifier = function (e) {
        e.pathsData = []
      }, TrimModifier.prototype.calculateShapeEdges = function (e, t, r, i, n) {
        var a = [];
        t <= 1 ? a.push({
          s: e,
          e: t
        }) : e >= 1 ? a.push({
          s: e - 1,
          e: t - 1
        }) : (a.push({
          s: e,
          e: 1
        }), a.push({
          s: 0,
          e: t - 1
        }));
        var s, o, l = [],
          p = a.length;
        for (s = 0; s < p; s += 1) {
          var u, h;
          (o = a[s]).e * n < i || o.s * n > i + r || (u = o.s * n <= i ? 0 : (o.s * n - i) / r, h = o.e * n >= i + r ? 1 : (o.e * n - i) / r, l.push([u, h]))
        }
        return l.length || l.push([0, 0]), l
      }, TrimModifier.prototype.releasePathsData = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
        return e.length = 0, e
      }, TrimModifier.prototype.processShapes = function (e) {
        var t, r, i, n;
        if (this._mdf || e) {
          var a = this.o.v % 360 / 360;
          if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
            var s = t;
            t = r, r = s
          }
          t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
        } else t = this.sValue, r = this.eValue;
        var o, l, p, u, h, v = this.shapes.length,
          d = 0;
        if (r === t)
          for (n = 0; n < v; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
        else if (r === 1 && t === 0 || r === 0 && t === 1) {
          if (this._mdf)
            for (n = 0; n < v; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
        } else {
          var f, m, c = [];
          for (n = 0; n < v; n += 1)
            if ((f = this.shapes[n]).shape._mdf || this._mdf || e || this.m === 2) {
              if (l = (i = f.shape.paths)._length, h = 0, !f.shape._mdf && f.pathsData.length) h = f.totalShapeLength;
              else {
                for (p = this.releasePathsData(f.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(i.shapes[o]), p.push(u), h += u.totalLength;
                f.totalShapeLength = h, f.pathsData = p
              }
              d += h, f.shape._mdf = !0
            } else f.shape.paths = f.localShapeCollection;
          var g, y = t,
            b = r,
            _ = 0;
          for (n = v - 1; n >= 0; n -= 1)
            if ((f = this.shapes[n]).shape._mdf) {
              for ((m = f.localShapeCollection).releaseShapes(), this.m === 2 && v > 1 ? (g = this.calculateShapeEdges(t, r, f.totalShapeLength, _, d), _ += f.totalShapeLength) : g = [
                  [y, b]
                ], l = g.length, o = 0; o < l; o += 1) {
                y = g[o][0], b = g[o][1], c.length = 0, b <= 1 ? c.push({
                  s: f.totalShapeLength * y,
                  e: f.totalShapeLength * b
                }) : y >= 1 ? c.push({
                  s: f.totalShapeLength * (y - 1),
                  e: f.totalShapeLength * (b - 1)
                }) : (c.push({
                  s: f.totalShapeLength * y,
                  e: f.totalShapeLength
                }), c.push({
                  s: 0,
                  e: f.totalShapeLength * (b - 1)
                }));
                var S = this.addShapes(f, c[0]);
                if (c[0].s !== c[0].e) {
                  if (c.length > 1)
                    if (f.shape.paths.shapes[f.shape.paths._length - 1].c) {
                      var I = S.pop();
                      this.addPaths(S, m), S = this.addShapes(f, c[1], I)
                    } else this.addPaths(S, m), S = this.addShapes(f, c[1]);
                  this.addPaths(S, m)
                }
              }
              f.shape.paths = m
            }
        }
      }, TrimModifier.prototype.addPaths = function (e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) t.addShape(e[r])
      }, TrimModifier.prototype.addSegment = function (e, t, r, i, n, a, s) {
        n.setXYAt(t[0], t[1], "o", a), n.setXYAt(r[0], r[1], "i", a + 1), s && n.setXYAt(e[0], e[1], "v", a), n.setXYAt(i[0], i[1], "v", a + 1)
      }, TrimModifier.prototype.addSegmentFromArray = function (e, t, r, i) {
        t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), i && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
      }, TrimModifier.prototype.addShapes = function (e, t, r) {
        var i, n, a, s, o, l, p, u, h = e.pathsData,
          v = e.shape.paths.shapes,
          d = e.shape.paths._length,
          f = 0,
          m = [],
          c = !0;
        for (r ? (o = r._length, u = r._length) : (r = shapePool.newElement(), o = 0, u = 0), m.push(r), i = 0; i < d; i += 1) {
          for (l = h[i].lengths, r.c = v[i].c, a = v[i].c ? l.length : l.length + 1, n = 1; n < a; n += 1)
            if (f + (s = l[n - 1]).addedLength < t.s) f += s.addedLength, r.c = !1;
            else {
              if (f > t.e) {
                r.c = !1;
                break
              }
              t.s <= f && t.e >= f + s.addedLength ? (this.addSegment(v[i].v[n - 1], v[i].o[n - 1], v[i].i[n], v[i].v[n], r, o, c), c = !1) : (p = bez.getNewSegment(v[i].v[n - 1], v[i].v[n], v[i].o[n - 1], v[i].i[n], (t.s - f) / s.addedLength, (t.e - f) / s.addedLength, l[n - 1]), this.addSegmentFromArray(p, r, o, c), c = !1, r.c = !1), f += s.addedLength, o += 1
            } if (v[i].c && l.length) {
            if (s = l[n - 1], f <= t.e) {
              var g = l[n - 1].addedLength;
              t.s <= f && t.e >= f + g ? (this.addSegment(v[i].v[n - 1], v[i].o[n - 1], v[i].i[0], v[i].v[0], r, o, c), c = !1) : (p = bez.getNewSegment(v[i].v[n - 1], v[i].v[0], v[i].o[n - 1], v[i].i[0], (t.s - f) / g, (t.e - f) / g, l[n - 1]), this.addSegmentFromArray(p, r, o, c), c = !1, r.c = !1)
            } else r.c = !1;
            f += s.addedLength, o += 1
          }
          if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), f > t.e) break;
          i < d - 1 && (r = shapePool.newElement(), c = !0, m.push(r), o = 0)
        }
        return m
      }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
      }, PuckerAndBloatModifier.prototype.processPath = function (e, t) {
        var r = t / 100,
          i = [0, 0],
          n = e._length,
          a = 0;
        for (a = 0; a < n; a += 1) i[0] += e.v[a][0], i[1] += e.v[a][1];
        i[0] /= n, i[1] /= n;
        var s, o, l, p, u, h, v = shapePool.newElement();
        for (v.c = e.c, a = 0; a < n; a += 1) s = e.v[a][0] + (i[0] - e.v[a][0]) * r, o = e.v[a][1] + (i[1] - e.v[a][1]) * r, l = e.o[a][0] + (i[0] - e.o[a][0]) * -r, p = e.o[a][1] + (i[1] - e.o[a][1]) * -r, u = e.i[a][0] + (i[0] - e.i[a][0]) * -r, h = e.i[a][1] + (i[1] - e.i[a][1]) * -r, v.setTripleAt(s, o, l, p, u, h, a);
        return v
      }, PuckerAndBloatModifier.prototype.processShapes = function (e) {
        var t, r, i, n, a, s, o = this.shapes.length,
          l = this.amount.v;
        if (l !== 0)
          for (r = 0; r < o; r += 1) {
            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      };
      var TransformPropertyFactory = function () {
        var e = [0, 0];

        function t(r, i, n) {
          if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = i, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || r), i.p && i.p.s ? (this.px = PropertyFactory.getProp(r, i.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, i.p.y, 0, 0, this), i.p.z && (this.pz = PropertyFactory.getProp(r, i.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, i.p || {
              k: [0, 0, 0]
            }, 1, 0, this), i.rx) {
            if (this.rx = PropertyFactory.getProp(r, i.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, i.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, i.rz, 0, degToRads, this), i.or.k[0].ti) {
              var a, s = i.or.k.length;
              for (a = 0; a < s; a += 1) i.or.k[a].to = null, i.or.k[a].ti = null
            }
            this.or = PropertyFactory.getProp(r, i.or, 1, degToRads, this), this.or.sh = !0
          } else this.r = PropertyFactory.getProp(r, i.r || {
            k: 0
          }, 0, degToRads, this);
          i.sk && (this.sk = PropertyFactory.getProp(r, i.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, i.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, i.a || {
            k: [0, 0, 0]
          }, 1, 0, this), this.s = PropertyFactory.getProp(r, i.s || {
            k: [100, 100, 100]
          }, 1, .01, this), i.o ? this.o = PropertyFactory.getProp(r, i.o, 0, .01, r) : this.o = {
            _mdf: !1,
            v: 1
          }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
        }
        return t.prototype = {
          applyToMatrix: function (r) {
            var i = this._mdf;
            this.iterateDynamicProperties(), this._mdf = this._mdf || i, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
          },
          getValue: function (r) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || r) {
                var i;
                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                  var n, a;
                  if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (n = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                  else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                    n = [], a = [];
                    var s = this.px,
                      o = this.py;
                    s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (n[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), n[1] = o.getValueAtTime((o.keyframes[0].t + .01) / i, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), a[1] = o.getValueAtTime(o.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (n[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), n[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / i, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), a[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / i, 0)) : (n = [s.pv, o.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), a[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / i, o.offsetTime))
                  } else n = a = e;
                  this.v.rotate(-Math.atan2(n[1] - a[1], n[0] - a[0]))
                }
                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
              }
              this.frameId = this.elem.globalData.frameId
            }
          },
          precalculateMatrix: function () {
            if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
              if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
              }
              this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }
          },
          autoOrient: function () {}
        }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function (r) {
          this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
        }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
          getTransformProperty: function (r, i, n) {
            return new t(r, i, n)
          }
        }
      }();

      function RepeaterModifier() {}

      function RoundCornersModifier() {}

      function floatEqual(e, t) {
        return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
      }

      function floatZero(e) {
        return Math.abs(e) <= 1e-5
      }

      function lerp(e, t, r) {
        return e * (1 - r) + t * r
      }

      function lerpPoint(e, t, r) {
        return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
      }

      function quadRoots(e, t, r) {
        if (e === 0) return [];
        var i = t * t - 4 * e * r;
        if (i < 0) return [];
        var n = -t / (2 * e);
        if (i === 0) return [n];
        var a = Math.sqrt(i) / (2 * e);
        return [n - a, n + a]
      }

      function polynomialCoefficients(e, t, r, i) {
        return [3 * t - e - 3 * r + i, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
      }

      function singlePoint(e) {
        return new PolynomialBezier(e, e, e, e, !1)
      }

      function PolynomialBezier(e, t, r, i, n) {
        n && pointEqual(e, t) && (t = lerpPoint(e, i, 1 / 3)), n && pointEqual(r, i) && (r = lerpPoint(e, i, 2 / 3));
        var a = polynomialCoefficients(e[0], t[0], r[0], i[0]),
          s = polynomialCoefficients(e[1], t[1], r[1], i[1]);
        this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, i]
      }

      function extrema(e, t) {
        var r = e.points[0][t],
          i = e.points[e.points.length - 1][t];
        if (r > i) {
          var n = i;
          i = r, r = n
        }
        for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
          if (a[s] > 0 && a[s] < 1) {
            var o = e.point(a[s])[t];
            o < r ? r = o : o > i && (i = o)
          } return {
          min: r,
          max: i
        }
      }

      function intersectData(e, t, r) {
        var i = e.boundingBox();
        return {
          cx: i.cx,
          cy: i.cy,
          width: i.width,
          height: i.height,
          bez: e,
          t: (t + r) / 2,
          t1: t,
          t2: r
        }
      }

      function splitData(e) {
        var t = e.bez.split(.5);
        return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
      }

      function boxIntersect(e, t) {
        return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
      }

      function intersectsImpl(e, t, r, i, n, a) {
        if (boxIntersect(e, t))
          if (r >= a || e.width <= i && e.height <= i && t.width <= i && t.height <= i) n.push([e.t, t.t]);
          else {
            var s = splitData(e),
              o = splitData(t);
            intersectsImpl(s[0], o[0], r + 1, i, n, a), intersectsImpl(s[0], o[1], r + 1, i, n, a), intersectsImpl(s[1], o[0], r + 1, i, n, a), intersectsImpl(s[1], o[1], r + 1, i, n, a)
          }
      }

      function crossProduct(e, t) {
        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
      }

      function lineIntersection(e, t, r, i) {
        var n = [e[0], e[1], 1],
          a = [t[0], t[1], 1],
          s = [r[0], r[1], 1],
          o = [i[0], i[1], 1],
          l = crossProduct(crossProduct(n, a), crossProduct(s, o));
        return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
      }

      function polarOffset(e, t, r) {
        return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
      }

      function pointDistance(e, t) {
        return Math.hypot(e[0] - t[0], e[1] - t[1])
      }

      function pointEqual(e, t) {
        return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
      }

      function ZigZagModifier() {}

      function setPoint(e, t, r, i, n, a, s) {
        var o = r - Math.PI / 2,
          l = r + Math.PI / 2,
          p = t[0] + Math.cos(r) * i * n,
          u = t[1] - Math.sin(r) * i * n;
        e.setTripleAt(p, u, p + Math.cos(o) * a, u - Math.sin(o) * a, p + Math.cos(l) * s, u - Math.sin(l) * s, e.length())
      }

      function getPerpendicularVector(e, t) {
        var r = [t[0] - e[0], t[1] - e[1]],
          i = .5 * -Math.PI;
        return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
      }

      function getProjectingAngle(e, t) {
        var r = t === 0 ? e.length() - 1 : t - 1,
          i = (t + 1) % e.length(),
          n = getPerpendicularVector(e.v[r], e.v[i]);
        return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
      }

      function zigZagCorner(e, t, r, i, n, a, s) {
        var o = getProjectingAngle(t, r),
          l = t.v[r % t._length],
          p = t.v[r === 0 ? t._length - 1 : r - 1],
          u = t.v[(r + 1) % t._length],
          h = a === 2 ? Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)) : 0,
          v = a === 2 ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
        setPoint(e, t.v[r % t._length], o, s, i, v / (2 * (n + 1)), h / (2 * (n + 1)), a)
      }

      function zigZagSegment(e, t, r, i, n, a) {
        for (var s = 0; s < i; s += 1) {
          var o = (s + 1) / (i + 1),
            l = n === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
            p = t.normalAngle(o);
          setPoint(e, t.point(o), p, a, r, l / (2 * (i + 1)), l / (2 * (i + 1)), n), a = -a
        }
        return a
      }

      function linearOffset(e, t, r) {
        var i = Math.atan2(t[0] - e[0], t[1] - e[1]);
        return [polarOffset(e, i, r), polarOffset(t, i, r)]
      }

      function offsetSegment(e, t) {
        var r, i, n, a, s, o, l;
        r = (l = linearOffset(e.points[0], e.points[1], t))[0], i = l[1], n = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
        var p = lineIntersection(r, i, n, a);
        p === null && (p = i);
        var u = lineIntersection(s, o, n, a);
        return u === null && (u = s), new PolynomialBezier(r, p, u, o)
      }

      function joinLines(e, t, r, i, n) {
        var a = t.points[3],
          s = r.points[0];
        if (i === 3 || pointEqual(a, s)) return a;
        if (i === 2) {
          var o = -t.tangentAngle(1),
            l = -r.tangentAngle(0) + Math.PI,
            p = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
            u = p ? pointDistance(p, a) : pointDistance(a, s) / 2,
            h = polarOffset(a, o, 2 * u * roundCorner);
          return e.setXYAt(h[0], h[1], "o", e.length() - 1), h = polarOffset(s, l, 2 * u * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], h[0], h[1], e.length()), s
        }
        var v = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
        return v && pointDistance(v, a) < n ? (e.setTripleAt(v[0], v[1], v[0], v[1], v[0], v[1], e.length()), v) : a
      }

      function getIntersection(e, t) {
        var r = e.intersections(t);
        return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
      }

      function pruneSegmentIntersection(e, t) {
        var r = e.slice(),
          i = t.slice(),
          n = getIntersection(e[e.length - 1], t[0]);
        return n && (r[e.length - 1] = e[e.length - 1].split(n[0])[0], i[0] = t[0].split(n[1])[1]), e.length > 1 && t.length > 1 && (n = getIntersection(e[0], t[t.length - 1])) ? [
          [e[0].split(n[0])[0]],
          [t[t.length - 1].split(n[1])[1]]
        ] : [r, i]
      }

      function pruneIntersections(e) {
        for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
        return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
      }

      function offsetSegmentSplit(e, t) {
        var r, i, n, a, s = e.inflectionPoints();
        if (s.length === 0) return [offsetSegment(e, t)];
        if (s.length === 1 || floatEqual(s[1], 1)) return r = (n = e.split(s[0]))[0], i = n[1], [offsetSegment(r, t), offsetSegment(i, t)];
        r = (n = e.split(s[0]))[0];
        var o = (s[1] - s[0]) / (1 - s[0]);
        return a = (n = n[1].split(o))[0], i = n[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(i, t)]
      }

      function OffsetPathModifier() {}

      function getFontProperties(e) {
        for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", i = "normal", n = t.length, a = 0; a < n; a += 1) switch (t[a].toLowerCase()) {
          case "italic":
            i = "italic";
            break;
          case "bold":
            r = "700";
            break;
          case "black":
            r = "900";
            break;
          case "medium":
            r = "500";
            break;
          case "regular":
          case "normal":
            r = "400";
            break;
          case "light":
          case "thin":
            r = "200"
        }
        return {
          style: i,
          weight: e.fWeight || r
        }
      }
      extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
      }, RepeaterModifier.prototype.applyTransforms = function (e, t, r, i, n, a) {
        var s = a ? -1 : 1,
          o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
          l = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
        e.translate(i.p.v[0] * s * n, i.p.v[1] * s * n, i.p.v[2]), t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), t.rotate(-i.r.v * s * n), t.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
      }, RepeaterModifier.prototype.init = function (e, t, r, i) {
        for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
      }, RepeaterModifier.prototype.resetElements = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
      }, RepeaterModifier.prototype.cloneElements = function (e) {
        var t = JSON.parse(JSON.stringify(e));
        return this.resetElements(t), t
      }, RepeaterModifier.prototype.changeGroupRender = function (e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
      }, RepeaterModifier.prototype.processShapes = function (e) {
        var t, r, i, n, a, s = !1;
        if (this._mdf || e) {
          var o, l = Math.ceil(this.c.v);
          if (this._groups.length < l) {
            for (; this._groups.length < l;) {
              var p = {
                it: this.cloneElements(this._elements),
                ty: "gr"
              };
              p.it.push({
                a: {
                  a: 0,
                  ix: 1,
                  k: [0, 0]
                },
                nm: "Transform",
                o: {
                  a: 0,
                  ix: 7,
                  k: 100
                },
                p: {
                  a: 0,
                  ix: 2,
                  k: [0, 0]
                },
                r: {
                  a: 1,
                  ix: 6,
                  k: [{
                    s: 0,
                    e: 0,
                    t: 0
                  }, {
                    s: 0,
                    e: 0,
                    t: 1
                  }]
                },
                s: {
                  a: 0,
                  ix: 3,
                  k: [100, 100]
                },
                sa: {
                  a: 0,
                  ix: 5,
                  k: 0
                },
                sk: {
                  a: 0,
                  ix: 4,
                  k: 0
                },
                ty: "tr"
              }), this.arr.splice(0, 0, p), this._groups.splice(0, 0, p), this._currentCopies += 1
            }
            this.elem.reloadShapes(), s = !0
          }
          for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
            if (o = a < l, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
              var u = this.elemsData[i].it,
                h = u[u.length - 1];
              h.transform.op.v !== 0 ? (h.transform.op._mdf = !0, h.transform.op.v = 0) : h.transform.op._mdf = !1
            }
            a += 1
          }
          this._currentCopies = l;
          var v = this.o.v,
            d = v % 1,
            f = v > 0 ? Math.floor(v) : Math.ceil(v),
            m = this.pMatrix.props,
            c = this.rMatrix.props,
            g = this.sMatrix.props;
          this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
          var y, b, _ = 0;
          if (v > 0) {
            for (; _ < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
            d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), _ += d)
          } else if (v < 0) {
            for (; _ > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
            d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), _ -= d)
          }
          for (i = this.data.m === 1 ? 0 : this._currentCopies - 1, n = this.data.m === 1 ? 1 : -1, a = this._currentCopies; a;) {
            if (b = (r = (t = this.elemsData[i].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), _ !== 0) {
              for ((i !== 0 && n === 1 || i !== this._currentCopies - 1 && n === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
              this.matrix.reset()
            } else
              for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
            _ += 1, a -= 1, i += n
          }
        } else
          for (a = this._currentCopies, i = 0, n = 1; a;) r = (t = this.elemsData[i].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, i += n;
        return s
      }, RepeaterModifier.prototype.addShape = function () {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
      }, RoundCornersModifier.prototype.processPath = function (e, t) {
        var r, i = shapePool.newElement();
        i.c = e.c;
        var n, a, s, o, l, p, u, h, v, d, f, m, c = e._length,
          g = 0;
        for (r = 0; r < c; r += 1) n = e.v[r], s = e.o[r], a = e.i[r], n[0] === s[0] && n[1] === s[1] && n[0] === a[0] && n[1] === a[1] ? r !== 0 && r !== c - 1 || e.c ? (o = r === 0 ? e.v[c - 1] : e.v[r - 1], p = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = f = n[0] + (o[0] - n[0]) * p, h = m = n[1] - (n[1] - o[1]) * p, v = u - (u - n[0]) * roundCorner, d = h - (h - n[1]) * roundCorner, i.setTripleAt(u, h, v, d, f, m, g), g += 1, o = r === c - 1 ? e.v[0] : e.v[r + 1], p = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = v = n[0] + (o[0] - n[0]) * p, h = d = n[1] + (o[1] - n[1]) * p, f = u - (u - n[0]) * roundCorner, m = h - (h - n[1]) * roundCorner, i.setTripleAt(u, h, v, d, f, m, g), g += 1) : (i.setTripleAt(n[0], n[1], s[0], s[1], a[0], a[1], g), g += 1) : (i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], g), g += 1);
        return i
      }, RoundCornersModifier.prototype.processShapes = function (e) {
        var t, r, i, n, a, s, o = this.shapes.length,
          l = this.rd.v;
        if (l !== 0)
          for (r = 0; r < o; r += 1) {
            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      }, PolynomialBezier.prototype.point = function (e) {
        return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
      }, PolynomialBezier.prototype.derivative = function (e) {
        return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
      }, PolynomialBezier.prototype.tangentAngle = function (e) {
        var t = this.derivative(e);
        return Math.atan2(t[1], t[0])
      }, PolynomialBezier.prototype.normalAngle = function (e) {
        var t = this.derivative(e);
        return Math.atan2(t[0], t[1])
      }, PolynomialBezier.prototype.inflectionPoints = function () {
        var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
        if (floatZero(e)) return [];
        var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
          r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
        if (r < 0) return [];
        var i = Math.sqrt(r);
        return floatZero(i) ? i > 0 && i < 1 ? [t] : [] : [t - i, t + i].filter(function (n) {
          return n > 0 && n < 1
        })
      }, PolynomialBezier.prototype.split = function (e) {
        if (e <= 0) return [singlePoint(this.points[0]), this];
        if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
        var t = lerpPoint(this.points[0], this.points[1], e),
          r = lerpPoint(this.points[1], this.points[2], e),
          i = lerpPoint(this.points[2], this.points[3], e),
          n = lerpPoint(t, r, e),
          a = lerpPoint(r, i, e),
          s = lerpPoint(n, a, e);
        return [new PolynomialBezier(this.points[0], t, n, s, !0), new PolynomialBezier(s, a, i, this.points[3], !0)]
      }, PolynomialBezier.prototype.bounds = function () {
        return {
          x: extrema(this, 0),
          y: extrema(this, 1)
        }
      }, PolynomialBezier.prototype.boundingBox = function () {
        var e = this.bounds();
        return {
          left: e.x.min,
          right: e.x.max,
          top: e.y.min,
          bottom: e.y.max,
          width: e.x.max - e.x.min,
          height: e.y.max - e.y.min,
          cx: (e.x.max + e.x.min) / 2,
          cy: (e.y.max + e.y.min) / 2
        }
      }, PolynomialBezier.prototype.intersections = function (e, t, r) {
        t === void 0 && (t = 2), r === void 0 && (r = 7);
        var i = [];
        return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, i, r), i
      }, PolynomialBezier.shapeSegment = function (e, t) {
        var r = (t + 1) % e.length();
        return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
      }, PolynomialBezier.shapeSegmentInverted = function (e, t) {
        var r = (t + 1) % e.length();
        return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
      }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
      }, ZigZagModifier.prototype.processPath = function (e, t, r, i) {
        var n = e._length,
          a = shapePool.newElement();
        if (a.c = e.c, e.c || (n -= 1), n === 0) return a;
        var s = -1,
          o = PolynomialBezier.shapeSegment(e, 0);
        zigZagCorner(a, e, 0, t, r, i, s);
        for (var l = 0; l < n; l += 1) s = zigZagSegment(a, o, t, r, i, -s), o = l !== n - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % n) : null, zigZagCorner(a, e, l + 1, t, r, i, s);
        return a
      }, ZigZagModifier.prototype.processShapes = function (e) {
        var t, r, i, n, a, s, o = this.shapes.length,
          l = this.amplitude.v,
          p = Math.max(0, Math.round(this.frequency.v)),
          u = this.pointsType.v;
        if (l !== 0)
          for (r = 0; r < o; r += 1) {
            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l, p, u));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
      }, OffsetPathModifier.prototype.processPath = function (e, t, r, i) {
        var n = shapePool.newElement();
        n.c = e.c;
        var a, s, o, l = e.length();
        e.c || (l -= 1);
        var p = [];
        for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), p.push(offsetSegmentSplit(o, t));
        if (!e.c)
          for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), p.push(offsetSegmentSplit(o, t));
        p = pruneIntersections(p);
        var u = null,
          h = null;
        for (a = 0; a < p.length; a += 1) {
          var v = p[a];
          for (h && (u = joinLines(n, h, v[0], r, i)), h = v[v.length - 1], s = 0; s < v.length; s += 1) o = v[s], u && pointEqual(o.points[0], u) ? n.setXYAt(o.points[1][0], o.points[1][1], "o", n.length() - 1) : n.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], n.length()), n.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], n.length()), u = o.points[3]
        }
        return p.length && joinLines(n, h, p[0][0], r, i), n
      }, OffsetPathModifier.prototype.processShapes = function (e) {
        var t, r, i, n, a, s, o = this.shapes.length,
          l = this.amount.v,
          p = this.miterLimit.v,
          u = this.lineJoin;
        if (l !== 0)
          for (r = 0; r < o; r += 1) {
            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l, u, p));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      };
      var FontManager = function () {
        var e = {
            w: 0,
            size: 0,
            shapes: [],
            data: {
              shapes: []
            }
          },
          t = [];
        t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var r = 127988,
          i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

        function n(u, h) {
          var v = createTag("span");
          v.setAttribute("aria-hidden", !0), v.style.fontFamily = h;
          var d = createTag("span");
          d.innerText = "giItT1WQy@!-/#", v.style.position = "absolute", v.style.left = "-10000px", v.style.top = "-10000px", v.style.fontSize = "300px", v.style.fontVariant = "normal", v.style.fontStyle = "normal", v.style.fontWeight = "normal", v.style.letterSpacing = "0", v.appendChild(d), document.body.appendChild(v);
          var f = d.offsetWidth;
          return d.style.fontFamily = function (m) {
            var c, g = m.split(","),
              y = g.length,
              b = [];
            for (c = 0; c < y; c += 1) g[c] !== "sans-serif" && g[c] !== "monospace" && b.push(g[c]);
            return b.join(",")
          }(u) + ", " + h, {
            node: d,
            w: f,
            parent: v
          }
        }

        function a(u, h) {
          var v, d = document.body && h ? "svg" : "canvas",
            f = getFontProperties(u);
          if (d === "svg") {
            var m = createNS("text");
            m.style.fontSize = "100px", m.setAttribute("font-family", u.fFamily), m.setAttribute("font-style", f.style), m.setAttribute("font-weight", f.weight), m.textContent = "1", u.fClass ? (m.style.fontFamily = "inherit", m.setAttribute("class", u.fClass)) : m.style.fontFamily = u.fFamily, h.appendChild(m), v = m
          } else {
            var c = new OffscreenCanvas(500, 500).getContext("2d");
            c.font = f.style + " " + f.weight + " 100px " + u.fFamily, v = c
          }
          return {
            measureText: function (g) {
              return d === "svg" ? (v.textContent = g, v.getComputedTextLength()) : v.measureText(g).width
            }
          }
        }

        function s(u) {
          var h = 0,
            v = u.charCodeAt(0);
          if (v >= 55296 && v <= 56319) {
            var d = u.charCodeAt(1);
            d >= 56320 && d <= 57343 && (h = 1024 * (v - 55296) + d - 56320 + 65536)
          }
          return h
        }

        function o(u) {
          var h = s(u);
          return h >= 127462 && h <= 127487
        }
        var l = function () {
          this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
        };
        l.isModifier = function (u, h) {
          var v = u.toString(16) + h.toString(16);
          return i.indexOf(v) !== -1
        }, l.isZeroWidthJoiner = function (u) {
          return u === 8205
        }, l.isFlagEmoji = function (u) {
          return o(u.substr(0, 2)) && o(u.substr(2, 2))
        }, l.isRegionalCode = o, l.isCombinedCharacter = function (u) {
          return t.indexOf(u) !== -1
        }, l.isRegionalFlag = function (u, h) {
          var v = s(u.substr(h, 2));
          if (v !== r) return !1;
          var d = 0;
          for (h += 2; d < 5;) {
            if ((v = s(u.substr(h, 2))) < 917601 || v > 917626) return !1;
            d += 1, h += 2
          }
          return s(u.substr(h, 2)) === 917631
        }, l.isVariationSelector = function (u) {
          return u === 65039
        }, l.BLACK_FLAG_CODE_POINT = r;
        var p = {
          addChars: function (u) {
            if (u) {
              var h;
              this.chars || (this.chars = []);
              var v, d, f = u.length,
                m = this.chars.length;
              for (h = 0; h < f; h += 1) {
                for (v = 0, d = !1; v < m;) this.chars[v].style === u[h].style && this.chars[v].fFamily === u[h].fFamily && this.chars[v].ch === u[h].ch && (d = !0), v += 1;
                d || (this.chars.push(u[h]), m += 1)
              }
            }
          },
          addFonts: function (u, h) {
            if (u) {
              if (this.chars) return this.isLoaded = !0, void(this.fonts = u.list);
              if (!document.body) return this.isLoaded = !0, u.list.forEach(function (I) {
                I.helper = a(I), I.cache = {}
              }), void(this.fonts = u.list);
              var v, d = u.list,
                f = d.length,
                m = f;
              for (v = 0; v < f; v += 1) {
                var c, g, y = !0;
                if (d[v].loaded = !1, d[v].monoCase = n(d[v].fFamily, "monospace"), d[v].sansCase = n(d[v].fFamily, "sans-serif"), d[v].fPath) {
                  if (d[v].fOrigin === "p" || d[v].origin === 3) {
                    if ((c = document.querySelectorAll('style[f-forigin="p"][f-family="' + d[v].fFamily + '"], style[f-origin="3"][f-family="' + d[v].fFamily + '"]')).length > 0 && (y = !1), y) {
                      var b = createTag("style");
                      b.setAttribute("f-forigin", d[v].fOrigin), b.setAttribute("f-origin", d[v].origin), b.setAttribute("f-family", d[v].fFamily), b.type = "text/css", b.innerText = "@font-face {font-family: " + d[v].fFamily + "; font-style: normal; src: url('" + d[v].fPath + "');}", h.appendChild(b)
                    }
                  } else if (d[v].fOrigin === "g" || d[v].origin === 1) {
                    for (c = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), g = 0; g < c.length; g += 1) c[g].href.indexOf(d[v].fPath) !== -1 && (y = !1);
                    if (y) {
                      var _ = createTag("link");
                      _.setAttribute("f-forigin", d[v].fOrigin), _.setAttribute("f-origin", d[v].origin), _.type = "text/css", _.rel = "stylesheet", _.href = d[v].fPath, document.body.appendChild(_)
                    }
                  } else if (d[v].fOrigin === "t" || d[v].origin === 2) {
                    for (c = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), g = 0; g < c.length; g += 1) d[v].fPath === c[g].src && (y = !1);
                    if (y) {
                      var S = createTag("link");
                      S.setAttribute("f-forigin", d[v].fOrigin), S.setAttribute("f-origin", d[v].origin), S.setAttribute("rel", "stylesheet"), S.setAttribute("href", d[v].fPath), h.appendChild(S)
                    }
                  }
                } else d[v].loaded = !0, m -= 1;
                d[v].helper = a(d[v], h), d[v].cache = {}, this.fonts.push(d[v])
              }
              m === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            } else this.isLoaded = !0
          },
          getCharData: function (u, h, v) {
            for (var d = 0, f = this.chars.length; d < f;) {
              if (this.chars[d].ch === u && this.chars[d].style === h && this.chars[d].fFamily === v) return this.chars[d];
              d += 1
            }
            return (typeof u == "string" && u.charCodeAt(0) !== 13 || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, h, v)), e
          },
          getFontByName: function (u) {
            for (var h = 0, v = this.fonts.length; h < v;) {
              if (this.fonts[h].fName === u) return this.fonts[h];
              h += 1
            }
            return this.fonts[0]
          },
          measureText: function (u, h, v) {
            var d = this.getFontByName(h),
              f = u;
            if (!d.cache[f]) {
              var m = d.helper;
              if (u === " ") {
                var c = m.measureText("|" + u + "|"),
                  g = m.measureText("||");
                d.cache[f] = (c - g) / 100
              } else d.cache[f] = m.measureText(u) / 100
            }
            return d.cache[f] * v
          },
          checkLoadedFonts: function () {
            var u, h, v, d = this.fonts.length,
              f = d;
            for (u = 0; u < d; u += 1) this.fonts[u].loaded ? f -= 1 : this.fonts[u].fOrigin === "n" || this.fonts[u].origin === 0 ? this.fonts[u].loaded = !0 : (h = this.fonts[u].monoCase.node, v = this.fonts[u].monoCase.w, h.offsetWidth !== v ? (f -= 1, this.fonts[u].loaded = !0) : (h = this.fonts[u].sansCase.node, v = this.fonts[u].sansCase.w, h.offsetWidth !== v && (f -= 1, this.fonts[u].loaded = !0)), this.fonts[u].loaded && (this.fonts[u].sansCase.parent.parentNode.removeChild(this.fonts[u].sansCase.parent), this.fonts[u].monoCase.parent.parentNode.removeChild(this.fonts[u].monoCase.parent)));
            f !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
          },
          setIsLoaded: function () {
            this.isLoaded = !0
          }
        };
        return l.prototype = p, l
      }();

      function SlotManager(e) {
        this.animationData = e
      }

      function slotFactory(e) {
        return new SlotManager(e)
      }

      function RenderableElement() {}
      SlotManager.prototype.getProp = function (e) {
        return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
      }, RenderableElement.prototype = {
        initRenderable: function () {
          this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
        },
        addRenderableComponent: function (e) {
          this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
        },
        removeRenderableComponent: function (e) {
          this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
        },
        prepareRenderableFrame: function (e) {
          this.checkLayerLimits(e)
        },
        checkTransparency: function () {
          this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
        },
        checkLayerLimits: function (e) {
          this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
        },
        renderRenderable: function () {
          var e, t = this.renderableComponents.length;
          for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
        },
        sourceRectAtTime: function () {
          return {
            top: 0,
            left: 0,
            width: 100,
            height: 100
          }
        },
        getLayerSize: function () {
          return this.data.ty === 5 ? {
            w: this.data.textData.width,
            h: this.data.textData.height
          } : {
            w: this.data.width,
            h: this.data.height
          }
        }
      };
      var getBlendMode = (blendModeEnums = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity"
        }, function (e) {
          return blendModeEnums[e] || ""
        }),
        blendModeEnums;

      function SliderEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function AngleEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function ColorEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
      }

      function PointEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
      }

      function LayerIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function MaskIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function CheckboxEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function NoValueEffect() {
        this.p = {}
      }

      function EffectsManager(e, t) {
        var r, i = e.ef || [];
        this.effectElements = [];
        var n, a = i.length;
        for (r = 0; r < a; r += 1) n = new GroupEffect(i[r], t), this.effectElements.push(n)
      }

      function GroupEffect(e, t) {
        this.init(e, t)
      }

      function BaseElement() {}

      function FrameElement() {}

      function FootageElement(e, t, r) {
        this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
      }

      function AudioElement(e, t, r) {
        this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
        var i = this.globalData.getAssetsPath(this.assetData);
        this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
          k: [100]
        }, 1, .01, this)
      }

      function BaseRenderer() {}
      extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (e, t) {
        var r;
        this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
        var i, n = this.data.ef.length,
          a = this.data.ef;
        for (r = 0; r < n; r += 1) {
          switch (i = null, a[r].ty) {
            case 0:
              i = new SliderEffect(a[r], t, this);
              break;
            case 1:
              i = new AngleEffect(a[r], t, this);
              break;
            case 2:
              i = new ColorEffect(a[r], t, this);
              break;
            case 3:
              i = new PointEffect(a[r], t, this);
              break;
            case 4:
            case 7:
              i = new CheckboxEffect(a[r], t, this);
              break;
            case 10:
              i = new LayerIndexEffect(a[r], t, this);
              break;
            case 11:
              i = new MaskIndexEffect(a[r], t, this);
              break;
            case 5:
              i = new EffectsManager(a[r], t, this);
              break;
            default:
              i = new NoValueEffect(a[r], t, this)
          }
          i && this.effectElements.push(i)
        }
      }, BaseElement.prototype = {
        checkMasks: function () {
          if (!this.data.hasMask) return !1;
          for (var e = 0, t = this.data.masksProperties.length; e < t;) {
            if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
            e += 1
          }
          return !1
        },
        initExpressions: function () {
          var e = getExpressionInterfaces();
          if (e) {
            var t = e("layer"),
              r = e("effects"),
              i = e("shape"),
              n = e("text"),
              a = e("comp");
            this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var s = r.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(s), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
          }
        },
        setBlendMode: function () {
          var e = getBlendMode(this.data.bm);
          (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
        },
        initBaseData: function (e, t, r) {
          this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
        },
        getType: function () {
          return this.type
        },
        sourceRectAtTime: function () {}
      }, FrameElement.prototype = {
        initFrame: function () {
          this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
        },
        prepareProperties: function (e, t) {
          var r, i = this.dynamicProperties.length;
          for (r = 0; r < i; r += 1)(t || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
        },
        addDynamicProperty: function (e) {
          this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
        }
      }, FootageElement.prototype.prepareFrame = function () {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function () {
        return null
      }, FootageElement.prototype.renderFrame = function () {}, FootageElement.prototype.destroy = function () {}, FootageElement.prototype.initExpressions = function () {
        var e = getExpressionInterfaces();
        if (e) {
          var t = e("footage");
          this.layerInterface = t(this)
        }
      }, FootageElement.prototype.getFootageData = function () {
        return this.footageData
      }, AudioElement.prototype.prepareFrame = function (e) {
        if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
        else {
          var t = this.tm.v;
          this._currentTime = t
        }
        this._volume = this.lv.v[0];
        var r = this._volume * this._volumeMultiplier;
        this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
      }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
      }, AudioElement.prototype.show = function () {}, AudioElement.prototype.hide = function () {
        this.audio.pause(), this._isPlaying = !1
      }, AudioElement.prototype.pause = function () {
        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
      }, AudioElement.prototype.resume = function () {
        this._canPlay = !0
      }, AudioElement.prototype.setRate = function (e) {
        this.audio.rate(e)
      }, AudioElement.prototype.volume = function (e) {
        this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
      }, AudioElement.prototype.getBaseElement = function () {
        return null
      }, AudioElement.prototype.destroy = function () {}, AudioElement.prototype.sourceRectAtTime = function () {}, AudioElement.prototype.initExpressions = function () {}, BaseRenderer.prototype.checkLayers = function (e) {
        var t, r, i = this.layers.length;
        for (this.completeLayers = !0, t = i - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
        this.checkPendingElements()
      }, BaseRenderer.prototype.createItem = function (e) {
        switch (e.ty) {
          case 2:
            return this.createImage(e);
          case 0:
            return this.createComp(e);
          case 1:
            return this.createSolid(e);
          case 3:
          default:
            return this.createNull(e);
          case 4:
            return this.createShape(e);
          case 5:
            return this.createText(e);
          case 6:
            return this.createAudio(e);
          case 13:
            return this.createCamera(e);
          case 15:
            return this.createFootage(e)
        }
      }, BaseRenderer.prototype.createCamera = function () {
        throw new Error("You're using a 3d camera. Try the html renderer.")
      }, BaseRenderer.prototype.createAudio = function (e) {
        return new AudioElement(e, this.globalData, this)
      }, BaseRenderer.prototype.createFootage = function (e) {
        return new FootageElement(e, this.globalData, this)
      }, BaseRenderer.prototype.buildAllItems = function () {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1) this.buildItem(e);
        this.checkPendingElements()
      }, BaseRenderer.prototype.includeLayers = function (e) {
        var t;
        this.completeLayers = !1;
        var r, i = e.length,
          n = this.layers.length;
        for (t = 0; t < i; t += 1)
          for (r = 0; r < n;) {
            if (this.layers[r].id === e[t].id) {
              this.layers[r] = e[t];
              break
            }
            r += 1
          }
      }, BaseRenderer.prototype.setProjectInterface = function (e) {
        this.globalData.projectInterface = e
      }, BaseRenderer.prototype.initItems = function () {
        this.globalData.progressiveLoad || this.buildAllItems()
      }, BaseRenderer.prototype.buildElementParenting = function (e, t, r) {
        for (var i = this.elements, n = this.layers, a = 0, s = n.length; a < s;) n[a].ind == t && (i[a] && i[a] !== !0 ? (r.push(i[a]), i[a].setAsParent(), n[a].parent !== void 0 ? this.buildElementParenting(e, n[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
      }, BaseRenderer.prototype.addPendingElement = function (e) {
        this.pendingElements.push(e)
      }, BaseRenderer.prototype.searchExtraCompositions = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1)
          if (e[t].xt) {
            var i = this.createComp(e[t]);
            i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
          }
      }, BaseRenderer.prototype.getElementById = function (e) {
        var t, r = this.elements.length;
        for (t = 0; t < r; t += 1)
          if (this.elements[t].data.ind === e) return this.elements[t];
        return null
      }, BaseRenderer.prototype.getElementByPath = function (e) {
        var t, r = e.shift();
        if (typeof r == "number") t = this.elements[r];
        else {
          var i, n = this.elements.length;
          for (i = 0; i < n; i += 1)
            if (this.elements[i].data.nm === r) {
              t = this.elements[i];
              break
            }
        }
        return e.length === 0 ? t : t.getElementByPath(e)
      }, BaseRenderer.prototype.setupGlobalData = function (e, t) {
        this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
          w: e.w,
          h: e.h
        }
      };
      var effectTypes = {
        TRANSFORM_EFFECT: "transformEFfect"
      };

      function TransformElement() {}

      function MaskElement(e, t, r) {
        this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
        var i, n, a = this.globalData.defs,
          s = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(s), this.solidPath = "";
        var o, l, p, u, h, v, d = this.masksProperties,
          f = 0,
          m = [],
          c = createElementID(),
          g = "clipPath",
          y = "clip-path";
        for (i = 0; i < s; i += 1)
          if ((d[i].mode !== "a" && d[i].mode !== "n" || d[i].inv || d[i].o.k !== 100 || d[i].o.x) && (g = "mask", y = "mask"), d[i].mode !== "s" && d[i].mode !== "i" || f !== 0 ? p = null : ((p = createNS("rect")).setAttribute("fill", "#ffffff"), p.setAttribute("width", this.element.comp.data.w || 0), p.setAttribute("height", this.element.comp.data.h || 0), m.push(p)), n = createNS("path"), d[i].mode === "n") this.viewData[i] = {
            op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
            elem: n,
            lastPath: ""
          }, a.appendChild(n);
          else {
            var b;
            if (f += 1, n.setAttribute("fill", d[i].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), d[i].x.k !== 0 ? (g = "mask", y = "mask", v = PropertyFactory.getProp(this.element, d[i].x, 0, null, this.element), b = createElementID(), (u = createNS("filter")).setAttribute("id", b), (h = createNS("feMorphology")).setAttribute("operator", "erode"), h.setAttribute("in", "SourceGraphic"), h.setAttribute("radius", "0"), u.appendChild(h), a.appendChild(u), n.setAttribute("stroke", d[i].mode === "s" ? "#000000" : "#ffffff")) : (h = null, v = null), this.storedData[i] = {
                elem: n,
                x: v,
                expan: h,
                lastPath: "",
                lastOperator: "",
                filterId: b,
                lastRadius: 0
              }, d[i].mode === "i") {
              l = m.length;
              var _ = createNS("g");
              for (o = 0; o < l; o += 1) _.appendChild(m[o]);
              var S = createNS("mask");
              S.setAttribute("mask-type", "alpha"), S.setAttribute("id", c + "_" + f), S.appendChild(n), a.appendChild(S), _.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + f + ")"), m.length = 0, m.push(_)
            } else m.push(n);
            d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
              elem: n,
              lastPath: "",
              op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
              invRect: p
            }, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i])
          } for (this.maskElement = createNS(g), s = m.length, i = 0; i < s; i += 1) this.maskElement.appendChild(m[i]);
        f > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + c + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
      }
      TransformElement.prototype = {
        initTransform: function () {
          var e = new Matrix;
          this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
              o: 0
            },
            _matMdf: !1,
            _localMatMdf: !1,
            _opMdf: !1,
            mat: e,
            localMat: e,
            localOpacity: 1
          }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
        },
        renderTransform: function () {
          if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
            var e, t = this.finalTransform.mat,
              r = 0,
              i = this.hierarchy.length;
            if (!this.finalTransform._matMdf)
              for (; r < i;) {
                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = !0;
                  break
                }
                r += 1
              }
            if (this.finalTransform._matMdf)
              for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < i; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
          }
          this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
        },
        renderLocalTransform: function () {
          if (this.localTransforms) {
            var e = 0,
              t = this.localTransforms.length;
            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
              for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
            if (this.finalTransform._localMatMdf) {
              var r = this.finalTransform.localMat;
              for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
                var i = this.localTransforms[e].matrix;
                r.multiply(i)
              }
              r.multiply(this.finalTransform.mat)
            }
            if (this.finalTransform._opMdf) {
              var n = this.finalTransform.localOpacity;
              for (e = 0; e < t; e += 1) n *= .01 * this.localTransforms[e].opacity;
              this.finalTransform.localOpacity = n
            }
          }
        },
        searchEffectTransforms: function () {
          if (this.renderableEffectsManager) {
            var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
            if (e.length) {
              this.localTransforms = [], this.finalTransform.localMat = new Matrix;
              var t = 0,
                r = e.length;
              for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
            }
          }
        },
        globalToLocal: function (e) {
          var t = [];
          t.push(this.finalTransform);
          for (var r, i = !0, n = this.comp; i;) n.finalTransform ? (n.data.hasMask && t.splice(0, 0, n.finalTransform), n = n.comp) : i = !1;
          var a, s = t.length;
          for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
          return e
        },
        mHelper: new Matrix
      }, MaskElement.prototype.getMaskProperty = function (e) {
        return this.viewData[e].prop
      }, MaskElement.prototype.renderFrame = function (e) {
        var t, r = this.element.finalTransform.mat,
          i = this.masksProperties.length;
        for (t = 0; t < i; t += 1)
          if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), this.masksProperties[t].mode !== "n" && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
            var n = this.storedData[t].expan;
            this.storedData[t].x.v < 0 ? (this.storedData[t].lastOperator !== "erode" && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), n.setAttribute("radius", -this.storedData[t].x.v)) : (this.storedData[t].lastOperator !== "dilate" && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
          }
      }, MaskElement.prototype.getMaskelement = function () {
        return this.maskElement
      }, MaskElement.prototype.createLayerSolidPath = function () {
        var e = "M0,0 ";
        return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
      }, MaskElement.prototype.drawPath = function (e, t, r) {
        var i, n, a = " M" + t.v[0][0] + "," + t.v[0][1];
        for (n = t._length, i = 1; i < n; i += 1) a += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[i][0] + "," + t.i[i][1] + " " + t.v[i][0] + "," + t.v[i][1];
        if (t.c && n > 1 && (a += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
          var s = "";
          r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
        }
      }, MaskElement.prototype.destroy = function () {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
      };
      var filtersFactory = function () {
          var e = {};
          return e.createFilter = function (t, r) {
            var i = createNS("filter");
            return i.setAttribute("id", t), r !== !0 && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
          }, e.createAlphaToLuminanceFilter = function () {
            var t = createNS("feColorMatrix");
            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
          }, e
        }(),
        featureSupport = function () {
          var e = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u"
          };
          return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
        }(),
        registeredEffects$1 = {},
        idPrefix = "filter_result_";

      function SVGEffects(e) {
        var t, r, i = "SourceGraphic",
          n = e.data.ef ? e.data.ef.length : 0,
          a = createElementID(),
          s = filtersFactory.createFilter(a, !0),
          o = 0;
        for (this.filters = [], t = 0; t < n; t += 1) {
          r = null;
          var l = e.data.ef[t].ty;
          registeredEffects$1[l] && (r = new registeredEffects$1[l].effect(s, e.effectsManager.effectElements[t], e, idPrefix + o, i), i = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
        }
        o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
      }

      function registerEffect$1(e, t, r) {
        registeredEffects$1[e] = {
          effect: t,
          countsAsEffect: r
        }
      }

      function SVGBaseElement() {}

      function HierarchyElement() {}

      function RenderableDOMElement() {}

      function IImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
          top: 0,
          left: 0,
          width: this.assetData.w,
          height: this.assetData.h
        }
      }

      function ProcessedElement(e, t) {
        this.elem = e, this.pos = t
      }

      function IShapeElement() {}
      SVGEffects.prototype.renderFrame = function (e) {
        var t, r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
      }, SVGEffects.prototype.getEffects = function (e) {
        var t, r = this.filters.length,
          i = [];
        for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
        return i
      }, SVGBaseElement.prototype = {
        initRendererElement: function () {
          this.layerElement = createNS("g")
        },
        createContainerElements: function () {
          this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
          var e = null;
          if (this.data.td) {
            this.matteMasks = {};
            var t = createNS("g");
            t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
          } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
          if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
            var r = createNS("clipPath"),
              i = createNS("path");
            i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var n = createElementID();
            if (r.setAttribute("id", n), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
              var a = createNS("g");
              a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
            } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
          }
          this.data.bm !== 0 && this.setBlendMode()
        },
        renderElement: function () {
          this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
        },
        destroyBaseElement: function () {
          this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
        },
        getBaseElement: function () {
          return this.data.hd ? null : this.baseElement
        },
        createRenderableComponents: function () {
          this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
        },
        getMatte: function (e) {
          if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
            var t, r, i, n, a = this.layerId + "_" + e;
            if (e === 1 || e === 3) {
              var s = createNS("mask");
              s.setAttribute("id", a), s.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(i), this.globalData.defs.appendChild(s), featureSupport.maskType || e !== 1 || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(i), s.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
            } else if (e === 2) {
              var o = createNS("mask");
              o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
              var l = createNS("g");
              o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
              var p = createNS("feComponentTransfer");
              p.setAttribute("in", "SourceGraphic"), r.appendChild(p);
              var u = createNS("feFuncA");
              u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), p.appendChild(u), this.globalData.defs.appendChild(r);
              var h = createNS("rect");
              h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(h), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), l.appendChild(h), n.appendChild(this.layerElement), l.appendChild(n)), this.globalData.defs.appendChild(o)
            }
            this.matteMasks[e] = a
          }
          return this.matteMasks[e]
        },
        setMatte: function (e) {
          this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
        }
      }, HierarchyElement.prototype = {
        initHierarchy: function () {
          this.hierarchy = [], this._isParent = !1, this.checkParenting()
        },
        setHierarchy: function (e) {
          this.hierarchy = e
        },
        setAsParent: function () {
          this._isParent = !0
        },
        checkParenting: function () {
          this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
        }
      }, extendPrototype([RenderableElement, createProxyFunction({
        initElement: function (e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
        },
        hide: function () {
          this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
        },
        show: function () {
          this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
        },
        renderFrame: function () {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        renderInnerContent: function () {},
        prepareFrame: function (e) {
          this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
        },
        destroy: function () {
          this.innerElem = null, this.destroyBaseElement()
        }
      })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
        var e = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
      }, IImageElement.prototype.sourceRectAtTime = function () {
        return this.sourceRect
      }, IShapeElement.prototype = {
        addShapeToModifiers: function (e) {
          var t, r = this.shapeModifiers.length;
          for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
        },
        isShapeInAnimatedModifiers: function (e) {
          for (var t = this.shapeModifiers.length; 0 < t;)
            if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
          return !1
        },
        renderModifiers: function () {
          if (this.shapeModifiers.length) {
            var e, t = this.shapes.length;
            for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
            for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
          }
        },
        searchProcessedElement: function (e) {
          for (var t = this.processedElements, r = 0, i = t.length; r < i;) {
            if (t[r].elem === e) return t[r].pos;
            r += 1
          }
          return 0
        },
        addProcessedElement: function (e, t) {
          for (var r = this.processedElements, i = r.length; i;)
            if (r[i -= 1].elem === e) return void(r[i].pos = t);
          r.push(new ProcessedElement(e, t))
        },
        prepareFrame: function (e) {
          this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
        }
      };
      var lineCapEnum = {
          1: "butt",
          2: "round",
          3: "square"
        },
        lineJoinEnum = {
          1: "miter",
          2: "round",
          3: "bevel"
        };

      function SVGShapeData(e, t, r) {
        this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
        for (var i = 0, n = e.length; i < n;) {
          if (e[i].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break
          }
          i += 1
        }
      }

      function SVGStyleData(e, t) {
        this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
      }

      function DashProperty(e, t, r, i) {
        var n;
        this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
        var a, s = t.length || 0;
        for (n = 0; n < s; n += 1) a = PropertyFactory.getProp(e, t[n].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[n] = {
          n: t[n].n,
          p: a
        };
        this.k || this.getValue(!0), this._isAnimated = this.k
      }

      function SVGStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
      }

      function SVGFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
      }

      function SVGNoStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
      }

      function GradientProperty(e, t, r) {
        this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
        var i = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
        this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
      }

      function SVGGradientFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
      }

      function SVGGradientStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
      }

      function ShapeGroupData() {
        this.it = [], this.prevViewData = [], this.gr = createNS("g")
      }

      function SVGTransformData(e, t, r) {
        this.transform = {
          mProps: e,
          op: t,
          container: r
        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
      }
      SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = !0
      }, SVGStyleData.prototype.reset = function () {
        this.d = "", this._mdf = !1
      }, DashProperty.prototype.getValue = function (e) {
        if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
          var t = 0,
            r = this.dataProps.length;
          for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
        }
      }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function (e, t) {
        for (var r = 0, i = this.o.length / 2; r < i;) {
          if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
          r += 1
        }
        return !0
      }, GradientProperty.prototype.checkCollapsable = function () {
        if (this.o.length / 2 != this.c.length / 4) return !1;
        if (this.data.k.k[0].s)
          for (var e = 0, t = this.data.k.k.length; e < t;) {
            if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
            e += 1
          } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
        return !0
      }, GradientProperty.prototype.getValue = function (e) {
        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
          var t, r, i, n = 4 * this.data.p;
          for (t = 0; t < n; t += 1) r = t % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[t] * r), this.c[t] !== i && (this.c[t] = i, this._cmdf = !e);
          if (this.o.length)
            for (n = this.prop.v.length, t = 4 * this.data.p; t < n; t += 1) r = t % 2 == 0 ? 100 : 1, i = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== i && (this.o[t - 4 * this.data.p] = i, this._omdf = !e);
          this._mdf = !e
        }
      }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function (e, t, r) {
        this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
          k: 0
        }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
          k: 0
        }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
      }, SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
        var r = createElementID(),
          i = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
        var n, a, s, o = [];
        for (s = 4 * t.g.p, a = 0; a < s; a += 4) n = createNS("stop"), i.appendChild(n), o.push(n);
        e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o
      }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, t) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var r, i, n, a = createNS("mask"),
            s = createNS("path");
          a.appendChild(s);
          var o = createElementID(),
            l = createElementID();
          a.setAttribute("id", l);
          var p = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
          p.setAttribute("id", o), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), n = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
          var u = this.stops;
          for (i = 4 * e.g.p; i < n; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(r), u.push(r);
          s.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), e.ty === "gs" && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && s.setAttribute("stroke-miterlimit", e.ml)), this.of = p, this.ms = a, this.ost = u, this.maskId = l, t.msElem = s
        }
      }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
      var buildShapeString = function (e, t, r, i) {
          if (t === 0) return "";
          var n, a = e.o,
            s = e.i,
            o = e.v,
            l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
          for (n = 1; n < t; n += 1) l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[n][0], s[n][1]) + " " + i.applyToPointStringified(o[n][0], o[n][1]);
          return r && t && (l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
        },
        SVGElementsRenderer = function () {
          var e = new Matrix,
            t = new Matrix;

          function r(p, u, h) {
            (h || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v), (h || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
          }

          function i() {}

          function n(p, u, h) {
            var v, d, f, m, c, g, y, b, _, S, I = u.styles.length,
              x = u.lvl;
            for (g = 0; g < I; g += 1) {
              if (m = u.sh._mdf || h, u.styles[g].lvl < x) {
                for (b = t.reset(), _ = x - u.styles[g].lvl, S = u.transformers.length - 1; !m && _ > 0;) m = u.transformers[S].mProps._mdf || m, _ -= 1, S -= 1;
                if (m)
                  for (_ = x - u.styles[g].lvl, S = u.transformers.length - 1; _ > 0;) b.multiply(u.transformers[S].mProps.v), _ -= 1, S -= 1
              } else b = e;
              if (d = (y = u.sh.paths)._length, m) {
                for (f = "", v = 0; v < d; v += 1)(c = y.shapes[v]) && c._length && (f += buildShapeString(c, c._length, c.c, b));
                u.caches[g] = f
              } else f = u.caches[g];
              u.styles[g].d += p.hd === !0 ? "" : f, u.styles[g]._mdf = m || u.styles[g]._mdf
            }
          }

          function a(p, u, h) {
            var v = u.style;
            (u.c._mdf || h) && v.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || h) && v.pElem.setAttribute("fill-opacity", u.o.v)
          }

          function s(p, u, h) {
            o(p, u, h), l(p, u, h)
          }

          function o(p, u, h) {
            var v, d, f, m, c, g = u.gf,
              y = u.g._hasOpacity,
              b = u.s.v,
              _ = u.e.v;
            if (u.o._mdf || h) {
              var S = p.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              u.style.pElem.setAttribute(S, u.o.v)
            }
            if (u.s._mdf || h) {
              var I = p.t === 1 ? "x1" : "cx",
                x = I === "x1" ? "y1" : "cy";
              g.setAttribute(I, b[0]), g.setAttribute(x, b[1]), y && !u.g._collapsable && (u.of.setAttribute(I, b[0]), u.of.setAttribute(x, b[1]))
            }
            if (u.g._cmdf || h) {
              v = u.cst;
              var P = u.g.c;
              for (f = v.length, d = 0; d < f; d += 1)(m = v[d]).setAttribute("offset", P[4 * d] + "%"), m.setAttribute("stop-color", "rgb(" + P[4 * d + 1] + "," + P[4 * d + 2] + "," + P[4 * d + 3] + ")")
            }
            if (y && (u.g._omdf || h)) {
              var L = u.g.o;
              for (f = (v = u.g._collapsable ? u.cst : u.ost).length, d = 0; d < f; d += 1) m = v[d], u.g._collapsable || m.setAttribute("offset", L[2 * d] + "%"), m.setAttribute("stop-opacity", L[2 * d + 1])
            }
            if (p.t === 1)(u.e._mdf || h) && (g.setAttribute("x2", _[0]), g.setAttribute("y2", _[1]), y && !u.g._collapsable && (u.of.setAttribute("x2", _[0]), u.of.setAttribute("y2", _[1])));
            else if ((u.s._mdf || u.e._mdf || h) && (c = Math.sqrt(Math.pow(b[0] - _[0], 2) + Math.pow(b[1] - _[1], 2)), g.setAttribute("r", c), y && !u.g._collapsable && u.of.setAttribute("r", c)), u.e._mdf || u.h._mdf || u.a._mdf || h) {
              c || (c = Math.sqrt(Math.pow(b[0] - _[0], 2) + Math.pow(b[1] - _[1], 2)));
              var D = Math.atan2(_[1] - b[1], _[0] - b[0]),
                O = u.h.v;
              O >= 1 ? O = .99 : O <= -1 && (O = -.99);
              var B = c * O,
                R = Math.cos(D + u.a.v) * B + b[0],
                F = Math.sin(D + u.a.v) * B + b[1];
              g.setAttribute("fx", R), g.setAttribute("fy", F), y && !u.g._collapsable && (u.of.setAttribute("fx", R), u.of.setAttribute("fy", F))
            }
          }

          function l(p, u, h) {
            var v = u.style,
              d = u.d;
            d && (d._mdf || h) && d.dashStr && (v.pElem.setAttribute("stroke-dasharray", d.dashStr), v.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), u.c && (u.c._mdf || h) && v.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || h) && v.pElem.setAttribute("stroke-opacity", u.o.v), (u.w._mdf || h) && (v.pElem.setAttribute("stroke-width", u.w.v), v.msElem && v.msElem.setAttribute("stroke-width", u.w.v))
          }
          return {
            createRenderFunction: function (p) {
              switch (p.ty) {
                case "fl":
                  return a;
                case "gf":
                  return o;
                case "gs":
                  return s;
                case "st":
                  return l;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return n;
                case "tr":
                  return r;
                case "no":
                  return i;
                default:
                  return null
              }
            }
          }
        }();

      function SVGShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
      }

      function LetterProps(e, t, r, i, n, a) {
        this.o = e, this.sw = t, this.sc = r, this.fc = i, this.m = n, this.p = a, this._mdf = {
          o: !0,
          sw: !!t,
          sc: !!r,
          fc: !!i,
          m: !0,
          p: !0
        }
      }

      function TextProperty(e, t) {
        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
          ascent: 0,
          boxWidth: this.defaultBoxWidth,
          f: "",
          fStyle: "",
          fWeight: "",
          fc: "",
          j: "",
          justifyOffset: "",
          l: [],
          lh: 0,
          lineWidths: [],
          ls: "",
          of: "",
          s: "",
          sc: "",
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: !1,
          strokeColorAnim: !1,
          strokeWidthAnim: !1,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __complete: !1
        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {}, SVGShapeElement.prototype.createContent = function () {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
      }, SVGShapeElement.prototype.filterUniqueShapes = function () {
        var e, t, r, i, n = this.shapes.length,
          a = this.stylesList.length,
          s = [],
          o = !1;
        for (r = 0; r < a; r += 1) {
          for (i = this.stylesList[r], o = !1, s.length = 0, e = 0; e < n; e += 1)(t = this.shapes[e]).styles.indexOf(i) !== -1 && (s.push(t), o = t._isAnimated || o);
          s.length > 1 && o && this.setShapesAsAnimated(s)
        }
      }, SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t].setAsAnimated()
      }, SVGShapeElement.prototype.createStyleElement = function (e, t) {
        var r, i = new SVGStyleData(e, t),
          n = i.pElem;
        return e.ty === "st" ? r = new SVGStrokeStyleData(this, e, i) : e.ty === "fl" ? r = new SVGFillStyleData(this, e, i) : e.ty === "gf" || e.ty === "gs" ? (r = new(e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), n.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : e.ty === "no" && (r = new SVGNoStyleData(this, e, i)), e.ty !== "st" && e.ty !== "gs" || (n.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), n.setAttribute("fill-opacity", "0"), e.lj === 1 && n.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && n.setAttribute("fill-rule", "evenodd"), e.ln && n.setAttribute("id", e.ln), e.cl && n.setAttribute("class", e.cl), e.bm && (n.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(i), this.addToAnimatedContents(e, r), r
      }, SVGShapeElement.prototype.createGroupElement = function (e) {
        var t = new ShapeGroupData;
        return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
      }, SVGShapeElement.prototype.createTransformElement = function (e, t) {
        var r = TransformPropertyFactory.getTransformProperty(this, e, this),
          i = new SVGTransformData(r, r.o, t);
        return this.addToAnimatedContents(e, i), i
      }, SVGShapeElement.prototype.createShapeElement = function (e, t, r) {
        var i = 4;
        e.ty === "rc" ? i = 5 : e.ty === "el" ? i = 6 : e.ty === "sr" && (i = 7);
        var n = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, i, this));
        return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(e, n), n
      }, SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
        for (var r = 0, i = this.animatedContents.length; r < i;) {
          if (this.animatedContents[r].element === t) return;
          r += 1
        }
        this.animatedContents.push({
          fn: SVGElementsRenderer.createRenderFunction(e),
          element: t,
          data: e
        })
      }, SVGShapeElement.prototype.setElementStyles = function (e) {
        var t, r = e.styles,
          i = this.stylesList.length;
        for (t = 0; t < i; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
      }, SVGShapeElement.prototype.reloadShapes = function () {
        var e;
        this._isFirstFrame = !0;
        var t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers()
      }, SVGShapeElement.prototype.searchShapes = function (e, t, r, i, n, a, s) {
        var o, l, p, u, h, v, d = [].concat(a),
          f = e.length - 1,
          m = [],
          c = [];
        for (o = f; o >= 0; o -= 1) {
          if ((v = this.searchProcessedElement(e[o])) ? t[o] = r[v - 1] : e[o]._render = s, e[o].ty === "fl" || e[o].ty === "st" || e[o].ty === "gf" || e[o].ty === "gs" || e[o].ty === "no") v ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], n), e[o]._render && t[o].style.pElem.parentNode !== i && i.appendChild(t[o].style.pElem), m.push(t[o].style);
          else if (e[o].ty === "gr") {
            if (v)
              for (p = t[o].it.length, l = 0; l < p; l += 1) t[o].prevViewData[l] = t[o].it[l];
            else t[o] = this.createGroupElement(e[o]);
            this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, n + 1, d, s), e[o]._render && t[o].gr.parentNode !== i && i.appendChild(t[o].gr)
          } else e[o].ty === "tr" ? (v || (t[o] = this.createTransformElement(e[o], i)), u = t[o].transform, d.push(u)) : e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr" ? (v || (t[o] = this.createShapeElement(e[o], d, n)), this.setElementStyles(t[o])) : e[o].ty === "tm" || e[o].ty === "rd" || e[o].ty === "ms" || e[o].ty === "pb" || e[o].ty === "zz" || e[o].ty === "op" ? (v ? (h = t[o]).closed = !1 : ((h = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = h, this.shapeModifiers.push(h)), c.push(h)) : e[o].ty === "rp" && (v ? (h = t[o]).closed = !0 : (h = ShapeModifiers.getModifier(e[o].ty), t[o] = h, h.init(this, e, o, t), this.shapeModifiers.push(h), s = !1), c.push(h));
          this.addProcessedElement(e[o], o + 1)
        }
        for (f = m.length, o = 0; o < f; o += 1) m[o].closed = !0;
        for (f = c.length, o = 0; o < f; o += 1) c[o].closed = !0
      }, SVGShapeElement.prototype.renderInnerContent = function () {
        var e;
        this.renderModifiers();
        var t = this.stylesList.length;
        for (e = 0; e < t; e += 1) this.stylesList[e].reset();
        for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
      }, SVGShapeElement.prototype.renderShape = function () {
        var e, t, r = this.animatedContents.length;
        for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && t.data !== !0 && t.fn(t.data, t.element, this._isFirstFrame)
      }, SVGShapeElement.prototype.destroy = function () {
        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
      }, LetterProps.prototype.update = function (e, t, r, i, n, a) {
        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
        var s = !1;
        return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, s = !0), this.m !== n && (this.m = n, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
      }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (e, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
      }, TextProperty.prototype.setCurrentData = function (e) {
        e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
      }, TextProperty.prototype.searchProperty = function () {
        return this.searchKeyframes()
      }, TextProperty.prototype.searchKeyframes = function () {
        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
      }, TextProperty.prototype.addEffect = function (e) {
        this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.getValue = function (e) {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
          this.currentData.t = this.data.d.k[this.keysIndex].s.t;
          var t = this.currentData,
            r = this.keysIndex;
          if (this.lock) this.setCurrentData(this.currentData);
          else {
            var i;
            this.lock = !0, this._mdf = !1;
            var n = this.effectsSequence.length,
              a = e || this.data.d.k[this.keysIndex].s;
            for (i = 0; i < n; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
            t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
          }
        }
      }, TextProperty.prototype.getKeyframeValue = function () {
        for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, i = e.length; r <= i - 1 && !(r === i - 1 || e[r + 1].t > t);) r += 1;
        return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
      }, TextProperty.prototype.buildFinalText = function (e) {
        for (var t, r, i = [], n = 0, a = e.length, s = !1, o = !1, l = ""; n < a;) s = o, o = !1, t = e.charCodeAt(n), l = e.charAt(n), FontManager.isCombinedCharacter(t) ? s = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, n) ? l = e.substr(n, 14) : (r = e.charCodeAt(n + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(n, 2), s = !0) : l = FontManager.isFlagEmoji(e.substr(n, 4)) ? e.substr(n, 4) : e.substr(n, 2)) : t > 56319 ? (r = e.charCodeAt(n + 1), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && (s = !0, o = !0), s ? (i[i.length - 1] += l, s = !1) : i.push(l), n += l.length;
        return i
      }, TextProperty.prototype.completeTextData = function (e) {
        e.__complete = !0;
        var t, r, i, n, a, s, o, l = this.elem.globalData.fontManager,
          p = this.data,
          u = [],
          h = 0,
          v = p.m.g,
          d = 0,
          f = 0,
          m = 0,
          c = [],
          g = 0,
          y = 0,
          b = l.getFontByName(e.f),
          _ = 0,
          S = getFontProperties(b);
        e.fWeight = S.weight, e.fStyle = S.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
        var I, x = e.tr / 1e3 * e.finalSize;
        if (e.sz)
          for (var P, L, D = !0, O = e.sz[0], B = e.sz[1]; D;) {
            P = 0, g = 0, r = (L = this.buildFinalText(e.t)).length, x = e.tr / 1e3 * e.finalSize;
            var R = -1;
            for (t = 0; t < r; t += 1) I = L[t].charCodeAt(0), i = !1, L[t] === " " ? R = t : I !== 13 && I !== 3 || (g = 0, i = !0, P += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(L[t], b.fStyle, b.fFamily), _ = i ? 0 : o.w * e.finalSize / 100) : _ = l.measureText(L[t], e.f, e.finalSize), g + _ > O && L[t] !== " " ? (R === -1 ? r += 1 : t = R, P += e.finalLineHeight || 1.2 * e.finalSize, L.splice(t, R === t ? 1 : 0, "\r"), R = -1, g = 0) : (g += _, g += x);
            P += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && B < P ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = L, r = e.finalText.length, D = !1)
          }
        g = -x, _ = 0;
        var F, V = 0;
        for (t = 0; t < r; t += 1)
          if (i = !1, (I = (F = e.finalText[t]).charCodeAt(0)) === 13 || I === 3 ? (V = 0, c.push(g), y = g > y ? g : y, g = -2 * x, n = "", i = !0, m += 1) : n = F, l.chars ? (o = l.getCharData(F, b.fStyle, l.getFontByName(e.f).fFamily), _ = i ? 0 : o.w * e.finalSize / 100) : _ = l.measureText(n, e.f, e.finalSize), F === " " ? V += _ + x : (g += _ + x + V, V = 0), u.push({
              l: _,
              an: _,
              add: d,
              n: i,
              anIndexes: [],
              val: n,
              line: m,
              animatorJustifyOffset: 0
            }), v == 2) {
            if (d += _, n === "" || n === " " || t === r - 1) {
              for (n !== "" && n !== " " || (d -= _); f <= t;) u[f].an = d, u[f].ind = h, u[f].extra = _, f += 1;
              h += 1, d = 0
            }
          } else if (v == 3) {
          if (d += _, n === "" || t === r - 1) {
            for (n === "" && (d -= _); f <= t;) u[f].an = d, u[f].ind = h, u[f].extra = _, f += 1;
            d = 0, h += 1
          }
        } else u[h].ind = h, u[h].extra = 0, h += 1;
        if (e.l = u, y = g > y ? g : y, c.push(g), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
        else switch (e.boxWidth = y, e.j) {
          case 1:
            e.justifyOffset = -e.boxWidth;
            break;
          case 2:
            e.justifyOffset = -e.boxWidth / 2;
            break;
          default:
            e.justifyOffset = 0
        }
        e.lineWidths = c;
        var W, ee, A, q, G = p.a;
        s = G.length;
        var C = [];
        for (a = 0; a < s; a += 1) {
          for ((W = G[a]).a.sc && (e.strokeColorAnim = !0), W.a.sw && (e.strokeWidthAnim = !0), (W.a.fc || W.a.fh || W.a.fs || W.a.fb) && (e.fillColorAnim = !0), q = 0, A = W.s.b, t = 0; t < r; t += 1)(ee = u[t]).anIndexes[a] = q, (A == 1 && ee.val !== "" || A == 2 && ee.val !== "" && ee.val !== " " || A == 3 && (ee.n || ee.val == " " || t == r - 1) || A == 4 && (ee.n || t == r - 1)) && (W.s.rn === 1 && C.push(q), q += 1);
          p.a[a].s.totalChars = q;
          var w, M = -1;
          if (W.s.rn === 1)
            for (t = 0; t < r; t += 1) M != (ee = u[t]).anIndexes[a] && (M = ee.anIndexes[a], w = C.splice(Math.floor(Math.random() * C.length), 1)[0]), ee.anIndexes[a] = w
        }
        e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
      }, TextProperty.prototype.updateDocumentData = function (e, t) {
        t = t === void 0 ? this.keysIndex : t;
        var r = this.copyData({}, this.data.d.k[t].s);
        r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.recalculate = function (e) {
        var t = this.data.d.k[e].s;
        t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
      }, TextProperty.prototype.canResizeFont = function (e) {
        this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.setMinimumFontSize = function (e) {
        this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
      };
      var TextSelectorProp = function () {
        var e = Math.max,
          t = Math.min,
          r = Math.floor;

        function i(n, a) {
          this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = n, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(n), this.s = PropertyFactory.getProp(n, a.s || {
            k: 0
          }, 0, 0, this), this.e = "e" in a ? PropertyFactory.getProp(n, a.e, 0, 0, this) : {
            v: 100
          }, this.o = PropertyFactory.getProp(n, a.o || {
            k: 0
          }, 0, 0, this), this.xe = PropertyFactory.getProp(n, a.xe || {
            k: 0
          }, 0, 0, this), this.ne = PropertyFactory.getProp(n, a.ne || {
            k: 0
          }, 0, 0, this), this.sm = PropertyFactory.getProp(n, a.sm || {
            k: 100
          }, 0, 0, this), this.a = PropertyFactory.getProp(n, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
        }
        return i.prototype = {
          getMult: function (n) {
            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
            var a = 0,
              s = 0,
              o = 1,
              l = 1;
            this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : l = 1 + this.xe.v / 100;
            var p = BezierFactory.getBezierEasing(a, s, o, l).get,
              u = 0,
              h = this.finalS,
              v = this.finalE,
              d = this.data.sh;
            if (d === 2) u = p(u = v === h ? n >= v ? 1 : 0 : e(0, t(.5 / (v - h) + (n - h) / (v - h), 1)));
            else if (d === 3) u = p(u = v === h ? n >= v ? 0 : 1 : 1 - e(0, t(.5 / (v - h) + (n - h) / (v - h), 1)));
            else if (d === 4) v === h ? u = 0 : (u = e(0, t(.5 / (v - h) + (n - h) / (v - h), 1))) < .5 ? u *= 2 : u = 1 - 2 * (u - .5), u = p(u);
            else if (d === 5) {
              if (v === h) u = 0;
              else {
                var f = v - h,
                  m = -f / 2 + (n = t(e(0, n + .5 - h), v - h)),
                  c = f / 2;
                u = Math.sqrt(1 - m * m / (c * c))
              }
              u = p(u)
            } else d === 6 ? (v === h ? u = 0 : (n = t(e(0, n + .5 - h), v - h), u = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (v - h))) / 2), u = p(u)) : (n >= r(h) && (u = e(0, t(n - h < 0 ? t(v, 1) - (h - n) : v - n, 1))), u = p(u));
            if (this.sm.v !== 100) {
              var g = .01 * this.sm.v;
              g === 0 && (g = 1e-8);
              var y = .5 - .5 * g;
              u < y ? u = 0 : (u = (u - y) / g) > 1 && (u = 1)
            }
            return u * this.a.v
          },
          getValue: function (n) {
            this.iterateDynamicProperties(), this._mdf = n || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, n && this.data.r === 2 && (this.e.v = this._currentTextLength);
            var a = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
              s = this.o.v / a,
              o = this.s.v / a + s,
              l = this.e.v / a + s;
            if (o > l) {
              var p = o;
              o = l, l = p
            }
            this.finalS = o, this.finalE = l
          }
        }, extendPrototype([DynamicPropertyContainer], i), {
          getTextSelectorProp: function (n, a, s) {
            return new i(n, a, s)
          }
        }
      }();

      function TextAnimatorDataProperty(e, t, r) {
        var i = {
            propType: !1
          },
          n = PropertyFactory.getProp,
          a = t.a;
        this.a = {
          r: a.r ? n(e, a.r, 0, degToRads, r) : i,
          rx: a.rx ? n(e, a.rx, 0, degToRads, r) : i,
          ry: a.ry ? n(e, a.ry, 0, degToRads, r) : i,
          sk: a.sk ? n(e, a.sk, 0, degToRads, r) : i,
          sa: a.sa ? n(e, a.sa, 0, degToRads, r) : i,
          s: a.s ? n(e, a.s, 1, .01, r) : i,
          a: a.a ? n(e, a.a, 1, 0, r) : i,
          o: a.o ? n(e, a.o, 0, .01, r) : i,
          p: a.p ? n(e, a.p, 1, 0, r) : i,
          sw: a.sw ? n(e, a.sw, 0, 0, r) : i,
          sc: a.sc ? n(e, a.sc, 1, 0, r) : i,
          fc: a.fc ? n(e, a.fc, 1, 0, r) : i,
          fh: a.fh ? n(e, a.fh, 0, 0, r) : i,
          fs: a.fs ? n(e, a.fs, 0, .01, r) : i,
          fb: a.fb ? n(e, a.fb, 0, .01, r) : i,
          t: a.t ? n(e, a.t, 0, 0, r) : i
        }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
      }

      function TextAnimatorProperty(e, t, r) {
        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
          alignment: {}
        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
      }

      function ITextElement() {}
      TextAnimatorProperty.prototype.searchProperties = function () {
        var e, t, r = this._textData.a.length,
          i = PropertyFactory.getProp;
        for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
        this._textData.p && "m" in this._textData.p ? (this._pathData = {
          a: i(this._elem, this._textData.p.a, 0, 0, this),
          f: i(this._elem, this._textData.p.f, 0, 0, this),
          l: i(this._elem, this._textData.p.l, 0, 0, this),
          r: i(this._elem, this._textData.p.r, 0, 0, this),
          p: i(this._elem, this._textData.p.p, 0, 0, this),
          m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
      }, TextAnimatorProperty.prototype.getMeasures = function (e, t) {
        if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
          this._isFirstFrame = !1;
          var r, i, n, a, s, o, l, p, u, h, v, d, f, m, c, g, y, b, _, S = this._moreOptions.alignment.v,
            I = this._animatorsData,
            x = this._textData,
            P = this.mHelper,
            L = this._renderType,
            D = this.renderedLetters.length,
            O = e.l;
          if (this._hasMaskedPath) {
            if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
              var B, R = _.v;
              for (this._pathData.r.v && (R = R.reverse()), s = {
                  tLength: 0,
                  segments: []
                }, a = R._length - 1, g = 0, n = 0; n < a; n += 1) B = bez.buildBezierData(R.v[n], R.v[n + 1], [R.o[n][0] - R.v[n][0], R.o[n][1] - R.v[n][1]], [R.i[n + 1][0] - R.v[n + 1][0], R.i[n + 1][1] - R.v[n + 1][1]]), s.tLength += B.segmentLength, s.segments.push(B), g += B.segmentLength;
              n = a, _.v.c && (B = bez.buildBezierData(R.v[n], R.v[0], [R.o[n][0] - R.v[n][0], R.o[n][1] - R.v[n][1]], [R.i[0][0] - R.v[0][0], R.i[0][1] - R.v[0][1]]), s.tLength += B.segmentLength, s.segments.push(B), g += B.segmentLength), this._pathData.pi = s
            }
            if (s = this._pathData.pi, o = this._pathData.f.v, v = 0, h = 1, p = 0, u = !0, m = s.segments, o < 0 && _.v.c)
              for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), h = (f = m[v = m.length - 1].points).length - 1; o < 0;) o += f[h].partialLength, (h -= 1) < 0 && (h = (f = m[v -= 1].points).length - 1);
            d = (f = m[v].points)[h - 1], c = (l = f[h]).partialLength
          }
          a = O.length, r = 0, i = 0;
          var F, V, W, ee, A, q = 1.2 * e.finalSize * .714,
            G = !0;
          W = I.length;
          var C, w, M, k, Q, te, Z, re, ce, se, N, J, ie = -1,
            K = o,
            ve = v,
            Ae = h,
            Pe = -1,
            T = "",
            z = this.defaultPropsArray;
          if (e.j === 2 || e.j === 1) {
            var H = 0,
              U = 0,
              j = e.j === 2 ? -.5 : -1,
              X = 0,
              ae = !0;
            for (n = 0; n < a; n += 1)
              if (O[n].n) {
                for (H && (H += U); X < n;) O[X].animatorJustifyOffset = H, X += 1;
                H = 0, ae = !0
              } else {
                for (V = 0; V < W; V += 1)(F = I[V].a).t.propType && (ae && e.j === 2 && (U += F.t.v * j), (A = I[V].s.getMult(O[n].anIndexes[V], x.a[V].s.totalChars)).length ? H += F.t.v * A[0] * j : H += F.t.v * A * j);
                ae = !1
              } for (H && (H += U); X < n;) O[X].animatorJustifyOffset = H, X += 1
          }
          for (n = 0; n < a; n += 1) {
            if (P.reset(), k = 1, O[n].n) r = 0, i += e.yOffset, i += G ? 1 : 0, o = K, G = !1, this._hasMaskedPath && (h = Ae, d = (f = m[v = ve].points)[h - 1], c = (l = f[h]).partialLength, p = 0), T = "", N = "", ce = "", J = "", z = this.defaultPropsArray;
            else {
              if (this._hasMaskedPath) {
                if (Pe !== O[n].line) {
                  switch (e.j) {
                    case 1:
                      o += g - e.lineWidths[O[n].line];
                      break;
                    case 2:
                      o += (g - e.lineWidths[O[n].line]) / 2
                  }
                  Pe = O[n].line
                }
                ie !== O[n].ind && (O[ie] && (o += O[ie].extra), o += O[n].an / 2, ie = O[n].ind), o += S[0] * O[n].an * .005;
                var oe = 0;
                for (V = 0; V < W; V += 1)(F = I[V].a).p.propType && ((A = I[V].s.getMult(O[n].anIndexes[V], x.a[V].s.totalChars)).length ? oe += F.p.v[0] * A[0] : oe += F.p.v[0] * A), F.a.propType && ((A = I[V].s.getMult(O[n].anIndexes[V], x.a[V].s.totalChars)).length ? oe += F.a.v[0] * A[0] : oe += F.a.v[0] * A);
                for (u = !0, this._pathData.a.v && (o = .5 * O[0].an + (g - this._pathData.f.v - .5 * O[0].an - .5 * O[O.length - 1].an) * ie / (a - 1), o += this._pathData.f.v); u;) p + c >= o + oe || !f ? (y = (o + oe - p) / l.partialLength, w = d.point[0] + (l.point[0] - d.point[0]) * y, M = d.point[1] + (l.point[1] - d.point[1]) * y, P.translate(-S[0] * O[n].an * .005, -S[1] * q * .01), u = !1) : f && (p += l.partialLength, (h += 1) >= f.length && (h = 0, m[v += 1] ? f = m[v].points : _.v.c ? (h = 0, f = m[v = 0].points) : (p -= l.partialLength, f = null)), f && (d = l, c = (l = f[h]).partialLength));
                C = O[n].an / 2 - O[n].add, P.translate(-C, 0, 0)
              } else C = O[n].an / 2 - O[n].add, P.translate(-C, 0, 0), P.translate(-S[0] * O[n].an * .005, -S[1] * q * .01, 0);
              for (V = 0; V < W; V += 1)(F = I[V].a).t.propType && (A = I[V].s.getMult(O[n].anIndexes[V], x.a[V].s.totalChars), r === 0 && e.j === 0 || (this._hasMaskedPath ? A.length ? o += F.t.v * A[0] : o += F.t.v * A : A.length ? r += F.t.v * A[0] : r += F.t.v * A));
              for (e.strokeWidthAnim && (te = e.sw || 0), e.strokeColorAnim && (Q = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (Z = [e.fc[0], e.fc[1], e.fc[2]]), V = 0; V < W; V += 1)(F = I[V].a).a.propType && ((A = I[V].s.getMult(O[n].anIndexes[V], x.a[V].s.totalChars)).length ? P.translate(-F.a.v[0] * A[0], -F.a.v[1] * A[1], F.a.v[2] * A[2]) : P.translate(-F.a.v[0] * A, -F.a.v[1] * A, F.a.v[2] * A));
              for (V = 0; V < W; V += 1)(F = I[V].a).s.propType && ((A = I[V].s.getMult(O[n].anIndexes[V], x.a[V].s.totalChars)).length ? P.scale(1 + (F.s.v[0] - 1) * A[0], 1 + (F.s.v[1] - 1) * A[1], 1) : P.scale(1 + (F.s.v[0] - 1) * A, 1 + (F.s.v[1] - 1) * A, 1));
              for (V = 0; V < W; V += 1) {
                if (F = I[V].a, A = I[V].s.getMult(O[n].anIndexes[V], x.a[V].s.totalChars), F.sk.propType && (A.length ? P.skewFromAxis(-F.sk.v * A[0], F.sa.v * A[1]) : P.skewFromAxis(-F.sk.v * A, F.sa.v * A)), F.r.propType && (A.length ? P.rotateZ(-F.r.v * A[2]) : P.rotateZ(-F.r.v * A)), F.ry.propType && (A.length ? P.rotateY(F.ry.v * A[1]) : P.rotateY(F.ry.v * A)), F.rx.propType && (A.length ? P.rotateX(F.rx.v * A[0]) : P.rotateX(F.rx.v * A)), F.o.propType && (A.length ? k += (F.o.v * A[0] - k) * A[0] : k += (F.o.v * A - k) * A), e.strokeWidthAnim && F.sw.propType && (A.length ? te += F.sw.v * A[0] : te += F.sw.v * A), e.strokeColorAnim && F.sc.propType)
                  for (re = 0; re < 3; re += 1) A.length ? Q[re] += (F.sc.v[re] - Q[re]) * A[0] : Q[re] += (F.sc.v[re] - Q[re]) * A;
                if (e.fillColorAnim && e.fc) {
                  if (F.fc.propType)
                    for (re = 0; re < 3; re += 1) A.length ? Z[re] += (F.fc.v[re] - Z[re]) * A[0] : Z[re] += (F.fc.v[re] - Z[re]) * A;
                  F.fh.propType && (Z = A.length ? addHueToRGB(Z, F.fh.v * A[0]) : addHueToRGB(Z, F.fh.v * A)), F.fs.propType && (Z = A.length ? addSaturationToRGB(Z, F.fs.v * A[0]) : addSaturationToRGB(Z, F.fs.v * A)), F.fb.propType && (Z = A.length ? addBrightnessToRGB(Z, F.fb.v * A[0]) : addBrightnessToRGB(Z, F.fb.v * A))
                }
              }
              for (V = 0; V < W; V += 1)(F = I[V].a).p.propType && (A = I[V].s.getMult(O[n].anIndexes[V], x.a[V].s.totalChars), this._hasMaskedPath ? A.length ? P.translate(0, F.p.v[1] * A[0], -F.p.v[2] * A[1]) : P.translate(0, F.p.v[1] * A, -F.p.v[2] * A) : A.length ? P.translate(F.p.v[0] * A[0], F.p.v[1] * A[1], -F.p.v[2] * A[2]) : P.translate(F.p.v[0] * A, F.p.v[1] * A, -F.p.v[2] * A));
              if (e.strokeWidthAnim && (ce = te < 0 ? 0 : te), e.strokeColorAnim && (se = "rgb(" + Math.round(255 * Q[0]) + "," + Math.round(255 * Q[1]) + "," + Math.round(255 * Q[2]) + ")"), e.fillColorAnim && e.fc && (N = "rgb(" + Math.round(255 * Z[0]) + "," + Math.round(255 * Z[1]) + "," + Math.round(255 * Z[2]) + ")"), this._hasMaskedPath) {
                if (P.translate(0, -e.ls), P.translate(0, S[1] * q * .01 + i, 0), this._pathData.p.v) {
                  b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                  var ye = 180 * Math.atan(b) / Math.PI;
                  l.point[0] < d.point[0] && (ye += 180), P.rotate(-ye * Math.PI / 180)
                }
                P.translate(w, M, 0), o -= S[0] * O[n].an * .005, O[n + 1] && ie !== O[n + 1].ind && (o += O[n].an / 2, o += .001 * e.tr * e.finalSize)
              } else {
                switch (P.translate(r, i, 0), e.ps && P.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                  case 1:
                    P.translate(O[n].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[O[n].line]), 0, 0);
                    break;
                  case 2:
                    P.translate(O[n].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[O[n].line]) / 2, 0, 0)
                }
                P.translate(0, -e.ls), P.translate(C, 0, 0), P.translate(S[0] * O[n].an * .005, S[1] * q * .01, 0), r += O[n].l + .001 * e.tr * e.finalSize
              }
              L === "html" ? T = P.toCSS() : L === "svg" ? T = P.to2dCSS() : z = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], J = k
            }
            D <= n ? (ee = new LetterProps(J, ce, se, N, T, z), this.renderedLetters.push(ee), D += 1, this.lettersChangedFlag = !0) : (ee = this.renderedLetters[n], this.lettersChangedFlag = ee.update(J, ce, se, N, T, z) || this.lettersChangedFlag)
          }
        }
      }, TextAnimatorProperty.prototype.getValue = function () {
        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
      }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function (e, t, r) {
        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
      }, ITextElement.prototype.prepareFrame = function (e) {
        this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
      }, ITextElement.prototype.createPathShape = function (e, t) {
        var r, i, n = t.length,
          a = "";
        for (r = 0; r < n; r += 1) t[r].ty === "sh" && (i = t[r].ks.k, a += buildShapeString(i, i.i.length, !0, e));
        return a
      }, ITextElement.prototype.updateDocumentData = function (e, t) {
        this.textProperty.updateDocumentData(e, t)
      }, ITextElement.prototype.canResizeFont = function (e) {
        this.textProperty.canResizeFont(e)
      }, ITextElement.prototype.setMinimumFontSize = function (e) {
        this.textProperty.setMinimumFontSize(e)
      }, ITextElement.prototype.applyTextPropertiesToMatrix = function (e, t, r, i, n) {
        switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
          case 1:
            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
            break;
          case 2:
            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
        }
        t.translate(i, n, 0)
      }, ITextElement.prototype.buildColor = function (e) {
        return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
      }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {}, ITextElement.prototype.validateText = function () {
        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
      };
      var emptyShapeData = {
        shapes: []
      };

      function SVGTextLottieElement(e, t, r) {
        this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
      }

      function ISolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function NullElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
      }

      function SVGRendererBase() {}

      function ICompElement() {}

      function SVGCompElement(e, t, r) {
        this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function SVGRenderer(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
        var r = "";
        if (t && t.title) {
          var i = createNS("title"),
            n = createElementID();
          i.setAttribute("id", n), i.textContent = t.title, this.svgElement.appendChild(i), r += n
        }
        if (t && t.description) {
          var a = createNS("desc"),
            s = createElementID();
          a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var o = createNS("defs");
        this.svgElement.appendChild(o);
        var l = createNS("g");
        this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
          preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: t && t.contentVisibility || "visible",
          progressiveLoad: t && t.progressiveLoad || !1,
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          viewBoxOnly: t && t.viewBoxOnly || !1,
          viewBoxSize: t && t.viewBoxSize || !1,
          className: t && t.className || "",
          id: t && t.id || "",
          focusable: t && t.focusable,
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "100%",
            height: t && t.filterSize && t.filterSize.height || "100%",
            x: t && t.filterSize && t.filterSize.x || "0%",
            y: t && t.filterSize && t.filterSize.y || "0%"
          },
          width: t && t.width,
          height: t && t.height,
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          defs: o,
          renderConfig: this.renderConfig
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
      }

      function ShapeTransformManager() {
        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function () {
        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
      }, SVGTextLottieElement.prototype.buildTextContents = function (e) {
        for (var t = 0, r = e.length, i = [], n = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (i.push(n), n = "") : n += e[t], t += 1;
        return i.push(n), i
      }, SVGTextLottieElement.prototype.buildShapeData = function (e, t) {
        if (e.shapes && e.shapes.length) {
          var r = e.shapes[0];
          if (r.it) {
            var i = r.it[r.it.length - 1];
            i.s && (i.s.k[0] = t, i.s.k[1] = t)
          }
        }
        return e
      }, SVGTextLottieElement.prototype.buildNewText = function () {
        var e, t;
        this.addDynamicProperty(this);
        var r = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
        var i = this.globalData.fontManager.getFontByName(r.f);
        if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
        else {
          this.layerElement.setAttribute("font-family", i.fFamily);
          var n = r.fWeight,
            a = r.fStyle;
          this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", n)
        }
        this.layerElement.setAttribute("aria-label", r.t);
        var s, o = r.l || [],
          l = !!this.globalData.fontManager.chars;
        t = o.length;
        var p = this.mHelper,
          u = this.data.singleShape,
          h = 0,
          v = 0,
          d = !0,
          f = .001 * r.tr * r.finalSize;
        if (!u || l || r.sz) {
          var m, c = this.textSpans.length;
          for (e = 0; e < t; e += 1) {
            if (this.textSpans[e] || (this.textSpans[e] = {
                span: null,
                childSpan: null,
                glyph: null
              }), !l || !u || e === 0) {
              if (s = c > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), c <= e) {
                if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
                  var g = createNS("g");
                  s.appendChild(g), this.textSpans[e].childSpan = g
                }
                this.textSpans[e].span = s, this.layerElement.appendChild(s)
              }
              s.style.display = "inherit"
            }
            if (p.reset(), u && (o[e].n && (h = -f, v += r.yOffset, v += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, p, o[e].line, h, v), h += o[e].l || 0, h += f), l) {
              var y;
              if ((m = this.globalData.fontManager.getCharData(r.finalText[e], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t === 1) y = new SVGCompElement(m.data, this.globalData, this);
              else {
                var b = emptyShapeData;
                m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
              }
              if (this.textSpans[e].glyph) {
                var _ = this.textSpans[e].glyph;
                this.textSpans[e].childSpan.removeChild(_.layerElement), _.destroy()
              }
              this.textSpans[e].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[e].childSpan.appendChild(y.layerElement), m.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
            } else u && s.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
          }
          u && s && s.setAttribute("d", "")
        } else {
          var S = this.textContainer,
            I = "start";
          switch (r.j) {
            case 1:
              I = "end";
              break;
            case 2:
              I = "middle";
              break;
            default:
              I = "start"
          }
          S.setAttribute("text-anchor", I), S.setAttribute("letter-spacing", f);
          var x = this.buildTextContents(r.finalText);
          for (t = x.length, v = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e].span || createNS("tspan")).textContent = x[e], s.setAttribute("x", 0), s.setAttribute("y", v), s.style.display = "inherit", S.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
            span: null,
            glyph: null
          }), this.textSpans[e].span = s, v += r.finalLineHeight;
          this.layerElement.appendChild(S)
        }
        for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
        this._sizeChanged = !0
      }, SVGTextLottieElement.prototype.sourceRectAtTime = function () {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
          this._sizeChanged = !1;
          var e = this.layerElement.getBBox();
          this.bbox = {
            top: e.y,
            left: e.x,
            width: e.width,
            height: e.height
          }
        }
        return this.bbox
      }, SVGTextLottieElement.prototype.getValue = function () {
        var e, t, r = this.textSpans.length;
        for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
      }, SVGTextLottieElement.prototype.renderInnerContent = function () {
        if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
          var e, t;
          this._sizeChanged = !0;
          var r, i, n, a = this.textAnimator.renderedLetters,
            s = this.textProperty.currentData.l;
          for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], i = this.textSpans[e].span, (n = this.textSpans[e].glyph) && n.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
        }
      }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
        var e = createNS("rect");
        e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
      }, NullElement.prototype.prepareFrame = function (e) {
        this.prepareProperties(e, !0)
      }, NullElement.prototype.renderFrame = function () {}, NullElement.prototype.getBaseElement = function () {
        return null
      }, NullElement.prototype.destroy = function () {}, NullElement.prototype.sourceRectAtTime = function () {}, NullElement.prototype.hide = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function (e) {
        return new NullElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createShape = function (e) {
        return new SVGShapeElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createText = function (e) {
        return new SVGTextLottieElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createImage = function (e) {
        return new IImageElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createSolid = function (e) {
        return new ISolidElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.configAnimation = function (e) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
        var t = this.globalData.defs;
        this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
        var r = createNS("clipPath"),
          i = createNS("rect");
        i.setAttribute("width", e.w), i.setAttribute("height", e.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
        var n = createElementID();
        r.setAttribute("id", n), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
      }, SVGRendererBase.prototype.destroy = function () {
        var e;
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
        var t = this.layers ? this.layers.length : 0;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
      }, SVGRendererBase.prototype.updateContainerSize = function () {}, SVGRendererBase.prototype.findIndexByInd = function (e) {
        var t = 0,
          r = this.layers.length;
        for (t = 0; t < r; t += 1)
          if (this.layers[t].ind === e) return t;
        return -1
      }, SVGRendererBase.prototype.buildItem = function (e) {
        var t = this.elements;
        if (!t[e] && this.layers[e].ty !== 99) {
          t[e] = !0;
          var r = this.createItem(this.layers[e]);
          if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
            var i = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
            if (i === -1) return;
            if (this.elements[i] && this.elements[i] !== !0) {
              var n = t[i].getMatte(this.layers[e].tt);
              r.setMatte(n)
            } else this.buildItem(i), this.addPendingElement(r)
          }
        }
      }, SVGRendererBase.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) {
          var e = this.pendingElements.pop();
          if (e.checkParenting(), e.data.tt)
            for (var t = 0, r = this.elements.length; t < r;) {
              if (this.elements[t] === e) {
                var i = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                  n = this.elements[i].getMatte(this.layers[t].tt);
                e.setMatte(n);
                break
              }
              t += 1
            }
        }
      }, SVGRendererBase.prototype.renderFrame = function (e) {
        if (this.renderedFrame !== e && !this.destroyed) {
          var t;
          e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
          var r = this.layers.length;
          for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
          if (this.globalData._mdf)
            for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }
      }, SVGRendererBase.prototype.appendElementInPos = function (e, t) {
        var r = e.getBaseElement();
        if (r) {
          for (var i, n = 0; n < t;) this.elements[n] && this.elements[n] !== !0 && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()), n += 1;
          i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
        }
      }, SVGRendererBase.prototype.hide = function () {
        this.layerElement.style.display = "none"
      }, SVGRendererBase.prototype.show = function () {
        this.layerElement.style.display = "block"
      }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
      }, ICompElement.prototype.prepareFrame = function (e) {
        if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
          if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
          else {
            var t = this.tm.v;
            t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
          }
          var r, i = this.elements.length;
          for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
        }
      }, ICompElement.prototype.renderInnerContent = function () {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }, ICompElement.prototype.setElements = function (e) {
        this.elements = e
      }, ICompElement.prototype.getElements = function () {
        return this.elements
      }, ICompElement.prototype.destroyElements = function () {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
      }, ICompElement.prototype.destroy = function () {
        this.destroyElements(), this.destroyBaseElement()
      }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function (e) {
        return new SVGCompElement(e, this.globalData, this)
      }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function (e) {
        return new SVGCompElement(e, this.globalData, this)
      }, ShapeTransformManager.prototype = {
        addTransformSequence: function (e) {
          var t, r = e.length,
            i = "_";
          for (t = 0; t < r; t += 1) i += e[t].transform.key + "_";
          var n = this.sequences[i];
          return n || (n = {
            transforms: [].concat(e),
            finalTransform: new Matrix,
            _mdf: !1
          }, this.sequences[i] = n, this.sequenceList.push(n)), n
        },
        processSequence: function (e, t) {
          for (var r = 0, i = e.transforms.length, n = t; r < i && !t;) {
            if (e.transforms[r].transform.mProps._mdf) {
              n = !0;
              break
            }
            r += 1
          }
          if (n)
            for (e.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
          e._mdf = n
        },
        processSequences: function (e) {
          var t, r = this.sequenceList.length;
          for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
        },
        getNewKey: function () {
          return this.transform_key_count += 1, "_" + this.transform_key_count
        }
      };
      var lumaLoader = function () {
        var e = "__lottie_element_luma_buffer",
          t = null,
          r = null,
          i = null;

        function n() {
          var a, s, o;
          t || (a = createNS("svg"), s = createNS("filter"), o = createNS("feColorMatrix"), s.setAttribute("id", e), o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(o), a.appendChild(s), a.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), i = a, document.body.appendChild(i), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
        }
        return {
          load: n,
          get: function (a) {
            return t || n(), t.width = a.width, t.height = a.height, r.filter = "url(#" + e + ")", t
          }
        }
      };

      function createCanvas(e, t) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
        var r = createTag("canvas");
        return r.width = e, r.height = t, r
      }
      var assetLoader = {
          loadLumaCanvas: lumaLoader.load,
          getLumaCanvas: lumaLoader.get,
          createCanvas
        },
        registeredEffects = {};

      function CVEffects(e) {
        var t, r, i = e.data.ef ? e.data.ef.length : 0;
        for (this.filters = [], t = 0; t < i; t += 1) {
          r = null;
          var n = e.data.ef[t].ty;
          registeredEffects[n] && (r = new registeredEffects[n].effect(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
        }
        this.filters.length && e.addRenderableComponent(this)
      }

      function registerEffect(e, t) {
        registeredEffects[e] = {
          effect: t
        }
      }

      function CVMaskElement(e, t) {
        var r;
        this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
        var i = this.masksProperties.length,
          n = !1;
        for (r = 0; r < i; r += 1) this.masksProperties[r].mode !== "n" && (n = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
        this.hasMasks = n, n && this.element.addRenderableComponent(this)
      }

      function CVBaseElement() {}
      CVEffects.prototype.renderFrame = function (e) {
        var t, r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
      }, CVEffects.prototype.getEffects = function (e) {
        var t, r = this.filters.length,
          i = [];
        for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
        return i
      }, CVMaskElement.prototype.renderFrame = function () {
        if (this.hasMasks) {
          var e, t, r, i, n = this.element.finalTransform.mat,
            a = this.element.canvasContext,
            s = this.masksProperties.length;
          for (a.beginPath(), e = 0; e < s; e += 1)
            if (this.masksProperties[e].mode !== "n") {
              var o;
              this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[e].v, t = n.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(t[0], t[1]);
              var l = i._length;
              for (o = 1; o < l; o += 1) r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
              r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
            } this.element.globalData.renderer.save(!0), a.clip()
        }
      }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
        this.element = null
      };
      var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out"
      };

      function CVShapeData(e, t, r, i) {
        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
        var n, a = 4;
        t.ty === "rc" ? a = 5 : t.ty === "el" ? a = 6 : t.ty === "sr" && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
        var s, o = r.length;
        for (n = 0; n < o; n += 1) r[n].closed || (s = {
          transforms: i.addTransformSequence(r[n].transforms),
          trNodes: []
        }, this.styledShapes.push(s), r[n].elements.push(s))
      }

      function CVShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
      }

      function CVTextElement(e, t, r) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
          fill: "rgba(0,0,0,0)",
          stroke: "rgba(0,0,0,0)",
          sWidth: 0,
          fValue: ""
        }, this.initElement(e, t, r)
      }

      function CVImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
      }

      function CVSolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function CanvasRendererBase() {}

      function CanvasContext() {
        this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
      }

      function CVContextData() {
        var e;
        for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
          var t = new CanvasContext;
          this.stack[e] = t
        }
        this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
      }

      function CVCompElement(e, t, r) {
        this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function CanvasRenderer(e, t) {
        this.animationItem = e, this.renderConfig = {
          clearCanvas: !t || t.clearCanvas === void 0 || t.clearCanvas,
          context: t && t.context || null,
          progressiveLoad: t && t.progressiveLoad || !1,
          preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: t && t.contentVisibility || "visible",
          className: t && t.className || "",
          id: t && t.id || "",
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
          frameNum: -1,
          _mdf: !1,
          renderConfig: this.renderConfig,
          currentGlobalAlpha: -1
        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
      }

      function HBaseElement() {}

      function HSolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function HShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }
      }

      function HTextElement(e, t, r) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
      }

      function HCameraElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
        var i = PropertyFactory.getProp;
        if (this.pe = i(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = i(this, e.ks.p.x, 1, 0, this), this.py = i(this, e.ks.p.y, 1, 0, this), this.pz = i(this, e.ks.p.z, 1, 0, this)) : this.p = i(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
          var n, a = e.ks.or.k.length;
          for (n = 0; n < a; n += 1) e.ks.or.k[n].to = null, e.ks.or.k[n].ti = null
        }
        this.or = i(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, e.ks.rx, 0, degToRads, this), this.ry = i(this, e.ks.ry, 0, degToRads, this), this.rz = i(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
          mProp: this
        }
      }

      function HImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
      }

      function HybridRendererBase(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: t && t.className || "",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "400%",
            height: t && t.filterSize && t.filterSize.height || "400%",
            x: t && t.filterSize && t.filterSize.x || "-100%",
            y: t && t.filterSize && t.filterSize.y || "-100%"
          }
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
      }

      function HCompElement(e, t, r) {
        this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function HybridRenderer(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: t && t.className || "",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "400%",
            height: t && t.filterSize && t.filterSize.height || "400%",
            x: t && t.filterSize && t.filterSize.x || "-100%",
            y: t && t.filterSize && t.filterSize.y || "-100%"
          },
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
      }
      CVBaseElement.prototype = {
        createElements: function () {},
        initRendererElement: function () {},
        createContainerElements: function () {
          if (this.data.tt >= 1) {
            this.buffers = [];
            var e = this.globalData.canvasContext,
              t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
            this.buffers.push(t);
            var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
            this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
          }
          this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
        },
        createContent: function () {},
        setBlendMode: function () {
          var e = this.globalData;
          if (e.blendMode !== this.data.bm) {
            e.blendMode = this.data.bm;
            var t = getBlendMode(this.data.bm);
            e.canvasContext.globalCompositeOperation = t
          }
        },
        createRenderableComponents: function () {
          this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
        },
        hideElement: function () {
          this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
        },
        showElement: function () {
          this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
        },
        clearCanvas: function (e) {
          e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
        },
        prepareLayer: function () {
          if (this.data.tt >= 1) {
            var e = this.buffers[0].getContext("2d");
            this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
          }
        },
        exitLayer: function () {
          if (this.data.tt >= 1) {
            var e = this.buffers[1],
              t = e.getContext("2d");
            if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
              var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
              r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
            }
            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
          }
        },
        renderFrame: function (e) {
          if (!this.hidden && !this.data.hd && (this.data.td !== 1 || e)) {
            this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
            var t = this.data.ty === 0;
            this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
          }
        },
        destroy: function () {
          this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
        },
        mHelper: new Matrix
      }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: !1
      }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
      }, CVShapeElement.prototype.createStyleElement = function (e, t) {
        var r = {
            data: e,
            type: e.ty,
            preTransforms: this.transformsManager.addTransformSequence(t),
            transforms: [],
            elements: [],
            closed: e.hd === !0
          },
          i = {};
        if (e.ty === "fl" || e.ty === "st" ? (i.c = PropertyFactory.getProp(this, e.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : e.ty !== "gf" && e.ty !== "gs" || (i.s = PropertyFactory.getProp(this, e.s, 1, null, this), i.e = PropertyFactory.getProp(this, e.e, 1, null, this), i.h = PropertyFactory.getProp(this, e.h || {
            k: 0
          }, 0, .01, this), i.a = PropertyFactory.getProp(this, e.a || {
            k: 0
          }, 0, degToRads, this), i.g = new GradientProperty(this, e.g, this)), i.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
          if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), i.w = PropertyFactory.getProp(this, e.w, 0, null, this), i.w.k || (r.wi = i.w.v), e.d) {
            var n = new DashProperty(this, e.d, "canvas", this);
            i.d = n, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
          }
        } else r.r = e.r === 2 ? "evenodd" : "nonzero";
        return this.stylesList.push(r), i.style = r, i
      }, CVShapeElement.prototype.createGroupElement = function () {
        return {
          it: [],
          prevViewData: []
        }
      }, CVShapeElement.prototype.createTransformElement = function (e) {
        return {
          transform: {
            opacity: 1,
            _opMdf: !1,
            key: this.transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this, e.o, 0, .01, this),
            mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
          }
        }
      }, CVShapeElement.prototype.createShapeElement = function (e) {
        var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
        return this.shapes.push(t), this.addShapeToModifiers(t), t
      }, CVShapeElement.prototype.reloadShapes = function () {
        var e;
        this._isFirstFrame = !0;
        var t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
      }, CVShapeElement.prototype.addTransformToStyleList = function (e) {
        var t, r = this.stylesList.length;
        for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
      }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
        var e, t = this.stylesList.length;
        for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
      }, CVShapeElement.prototype.closeStyles = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t].closed = !0
      }, CVShapeElement.prototype.searchShapes = function (e, t, r, i, n) {
        var a, s, o, l, p, u, h = e.length - 1,
          v = [],
          d = [],
          f = [].concat(n);
        for (a = h; a >= 0; a -= 1) {
          if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = i, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], f), v.push(t[a].style);
          else if (e[a].ty === "gr") {
            if (l)
              for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
            else t[a] = this.createGroupElement(e[a]);
            this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, i, f)
          } else e[a].ty === "tr" ? (l || (u = this.createTransformElement(e[a]), t[a] = u), f.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? l || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (l ? (p = t[a]).closed = !1 : ((p = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = p, this.shapeModifiers.push(p)), d.push(p)) : e[a].ty === "rp" && (l ? (p = t[a]).closed = !0 : (p = ShapeModifiers.getModifier(e[a].ty), t[a] = p, p.init(this, e, a, t), this.shapeModifiers.push(p), i = !1), d.push(p));
          this.addProcessedElement(e[a], a + 1)
        }
        for (this.removeTransformFromStyleList(), this.closeStyles(v), h = d.length, a = 0; a < h; a += 1) d[a].closed = !0
      }, CVShapeElement.prototype.renderInnerContent = function () {
        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
      }, CVShapeElement.prototype.renderShapeTransform = function (e, t) {
        (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
      }, CVShapeElement.prototype.drawLayer = function () {
        var e, t, r, i, n, a, s, o, l, p = this.stylesList.length,
          u = this.globalData.renderer,
          h = this.globalData.canvasContext;
        for (e = 0; e < p; e += 1)
          if (((o = (l = this.stylesList[e]).type) !== "st" && o !== "gs" || l.wi !== 0) && l.data._shouldRender && l.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
            for (u.save(), a = l.elements, o === "st" || o === "gs" ? (u.ctxStrokeStyle(o === "st" ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle(o === "fl" ? l.co : l.grd), u.ctxOpacity(l.coOp), o !== "st" && o !== "gs" && h.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
              for (o !== "st" && o !== "gs" || (h.beginPath(), l.da && (h.setLineDash(l.da), h.lineDashOffset = l.do)), n = (s = a[t].trNodes).length, i = 0; i < n; i += 1) s[i].t === "m" ? h.moveTo(s[i].p[0], s[i].p[1]) : s[i].t === "c" ? h.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : h.closePath();
              o !== "st" && o !== "gs" || (u.ctxStroke(), l.da && h.setLineDash(this.dashResetter))
            }
            o !== "st" && o !== "gs" && this.globalData.renderer.ctxFill(l.r), u.restore()
          }
      }, CVShapeElement.prototype.renderShape = function (e, t, r, i) {
        var n, a;
        for (a = e, n = t.length - 1; n >= 0; n -= 1) t[n].ty === "tr" ? (a = r[n].transform, this.renderShapeTransform(e, a)) : t[n].ty === "sh" || t[n].ty === "el" || t[n].ty === "rc" || t[n].ty === "sr" ? this.renderPath(t[n], r[n]) : t[n].ty === "fl" ? this.renderFill(t[n], r[n], a) : t[n].ty === "st" ? this.renderStroke(t[n], r[n], a) : t[n].ty === "gf" || t[n].ty === "gs" ? this.renderGradientFill(t[n], r[n], a) : t[n].ty === "gr" ? this.renderShape(a, t[n].it, r[n].it) : t[n].ty;
        i && this.drawLayer()
      }, CVShapeElement.prototype.renderStyledShape = function (e, t) {
        if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
          var r, i, n, a = e.trNodes,
            s = t.paths,
            o = s._length;
          a.length = 0;
          var l = e.transforms.finalTransform;
          for (n = 0; n < o; n += 1) {
            var p = s.shapes[n];
            if (p && p.v) {
              for (i = p._length, r = 1; r < i; r += 1) r === 1 && a.push({
                t: "m",
                p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0)
              }), a.push({
                t: "c",
                pts: l.applyToTriplePoints(p.o[r - 1], p.i[r], p.v[r])
              });
              i === 1 && a.push({
                t: "m",
                p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0)
              }), p.c && i && (a.push({
                t: "c",
                pts: l.applyToTriplePoints(p.o[r - 1], p.i[0], p.v[0])
              }), a.push({
                t: "z"
              }))
            }
          }
          e.trNodes = a
        }
      }, CVShapeElement.prototype.renderPath = function (e, t) {
        if (e.hd !== !0 && e._shouldRender) {
          var r, i = t.styledShapes.length;
          for (r = 0; r < i; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
        }
      }, CVShapeElement.prototype.renderFill = function (e, t, r) {
        var i = t.style;
        (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity)
      }, CVShapeElement.prototype.renderGradientFill = function (e, t, r) {
        var i, n = t.style;
        if (!n.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
          var a, s = this.globalData.canvasContext,
            o = t.s.v,
            l = t.e.v;
          if (e.t === 1) i = s.createLinearGradient(o[0], o[1], l[0], l[1]);
          else {
            var p = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
              u = Math.atan2(l[1] - o[1], l[0] - o[0]),
              h = t.h.v;
            h >= 1 ? h = .99 : h <= -1 && (h = -.99);
            var v = p * h,
              d = Math.cos(u + t.a.v) * v + o[0],
              f = Math.sin(u + t.a.v) * v + o[1];
            i = s.createRadialGradient(d, f, 0, o[0], o[1], p)
          }
          var m = e.g.p,
            c = t.g.c,
            g = 1;
          for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * a + 1]), i.addColorStop(c[4 * a] / 100, "rgba(" + c[4 * a + 1] + "," + c[4 * a + 2] + "," + c[4 * a + 3] + "," + g + ")");
          n.grd = i
        }
        n.coOp = t.o.v * r.opacity
      }, CVShapeElement.prototype.renderStroke = function (e, t, r) {
        var i = t.style,
          n = t.d;
        n && (n._mdf || this._isFirstFrame) && (i.da = n.dashArray, i.do = n.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (i.wi = t.w.v)
      }, CVShapeElement.prototype.destroy = function () {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
        var e = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var t = !1;
        e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
        var r = !1;
        e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
        var i, n, a, s, o, l, p, u, h, v, d, f, m = this.globalData.fontManager.getFontByName(e.f),
          c = e.l,
          g = this.mHelper;
        this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, n = e.finalText.length;
        var y = this.data.singleShape,
          b = .001 * e.tr * e.finalSize,
          _ = 0,
          S = 0,
          I = !0,
          x = 0;
        for (i = 0; i < n; i += 1) {
          s = (a = this.globalData.fontManager.getCharData(e.finalText[i], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, g.reset(), y && c[i].n && (_ = -b, S += e.yOffset, S += I ? 1 : 0, I = !1), h = (p = s.shapes ? s.shapes[0].it : []).length, g.scale(e.finalSize / 100, e.finalSize / 100), y && this.applyTextPropertiesToMatrix(e, g, c[i].line, _, S), d = createSizedArray(h - 1);
          var P = 0;
          for (u = 0; u < h; u += 1)
            if (p[u].ty === "sh") {
              for (l = p[u].ks.k.i.length, v = p[u].ks.k, f = [], o = 1; o < l; o += 1) o === 1 && f.push(g.applyToX(v.v[0][0], v.v[0][1], 0), g.applyToY(v.v[0][0], v.v[0][1], 0)), f.push(g.applyToX(v.o[o - 1][0], v.o[o - 1][1], 0), g.applyToY(v.o[o - 1][0], v.o[o - 1][1], 0), g.applyToX(v.i[o][0], v.i[o][1], 0), g.applyToY(v.i[o][0], v.i[o][1], 0), g.applyToX(v.v[o][0], v.v[o][1], 0), g.applyToY(v.v[o][0], v.v[o][1], 0));
              f.push(g.applyToX(v.o[o - 1][0], v.o[o - 1][1], 0), g.applyToY(v.o[o - 1][0], v.o[o - 1][1], 0), g.applyToX(v.i[0][0], v.i[0][1], 0), g.applyToY(v.i[0][0], v.i[0][1], 0), g.applyToX(v.v[0][0], v.v[0][1], 0), g.applyToY(v.v[0][0], v.v[0][1], 0)), d[P] = f, P += 1
            } y && (_ += c[i].l, _ += b), this.textSpans[x] ? this.textSpans[x].elem = d : this.textSpans[x] = {
            elem: d
          }, x += 1
        }
      }, CVTextElement.prototype.renderInnerContent = function () {
        var e, t, r, i, n, a;
        this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var s, o = this.textAnimator.renderedLetters,
          l = this.textProperty.currentData.l;
        t = l.length;
        var p, u, h = null,
          v = null,
          d = null,
          f = this.globalData.renderer;
        for (e = 0; e < t; e += 1)
          if (!l[e].n) {
            if ((s = o[e]) && (f.save(), f.ctxTransform(s.p), f.ctxOpacity(s.o)), this.fill) {
              for (s && s.fc ? h !== s.fc && (f.ctxFillStyle(s.fc), h = s.fc) : h !== this.values.fill && (h = this.values.fill, f.ctxFillStyle(this.values.fill)), i = (p = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                for (a = (u = p[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(u[n], u[n + 1], u[n + 2], u[n + 3], u[n + 4], u[n + 5]);
              this.globalData.canvasContext.closePath(), f.ctxFill()
            }
            if (this.stroke) {
              for (s && s.sw ? d !== s.sw && (d = s.sw, f.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, f.ctxLineWidth(this.values.sWidth)), s && s.sc ? v !== s.sc && (v = s.sc, f.ctxStrokeStyle(s.sc)) : v !== this.values.stroke && (v = this.values.stroke, f.ctxStrokeStyle(this.values.stroke)), i = (p = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                for (a = (u = p[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(u[n], u[n + 1], u[n + 2], u[n + 3], u[n + 4], u[n + 5]);
              this.globalData.canvasContext.closePath(), f.ctxStroke()
            }
            s && this.globalData.renderer.restore()
          }
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
          var e = createTag("canvas");
          e.width = this.assetData.w, e.height = this.assetData.h;
          var t, r, i = e.getContext("2d"),
            n = this.img.width,
            a = this.img.height,
            s = n / a,
            o = this.assetData.w / this.assetData.h,
            l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
          s > o && l === "xMidYMid slice" || s < o && l !== "xMidYMid slice" ? t = (r = a) * o : r = (t = n) / o, i.drawImage(this.img, (n - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
        }
      }, CVImageElement.prototype.renderInnerContent = function () {
        this.canvasContext.drawImage(this.img, 0, 0)
      }, CVImageElement.prototype.destroy = function () {
        this.img = null
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
        this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
      }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function (e) {
        return new CVShapeElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createText = function (e) {
        return new CVTextElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createImage = function (e) {
        return new CVImageElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createSolid = function (e) {
        return new CVSolidElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function (e) {
        e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
      }, CanvasRendererBase.prototype.ctxOpacity = function (e) {
        this.canvasContext.globalAlpha *= e < 0 ? 0 : e
      }, CanvasRendererBase.prototype.ctxFillStyle = function (e) {
        this.canvasContext.fillStyle = e
      }, CanvasRendererBase.prototype.ctxStrokeStyle = function (e) {
        this.canvasContext.strokeStyle = e
      }, CanvasRendererBase.prototype.ctxLineWidth = function (e) {
        this.canvasContext.lineWidth = e
      }, CanvasRendererBase.prototype.ctxLineCap = function (e) {
        this.canvasContext.lineCap = e
      }, CanvasRendererBase.prototype.ctxLineJoin = function (e) {
        this.canvasContext.lineJoin = e
      }, CanvasRendererBase.prototype.ctxMiterLimit = function (e) {
        this.canvasContext.miterLimit = e
      }, CanvasRendererBase.prototype.ctxFill = function (e) {
        this.canvasContext.fill(e)
      }, CanvasRendererBase.prototype.ctxFillRect = function (e, t, r, i) {
        this.canvasContext.fillRect(e, t, r, i)
      }, CanvasRendererBase.prototype.ctxStroke = function () {
        this.canvasContext.stroke()
      }, CanvasRendererBase.prototype.reset = function () {
        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
      }, CanvasRendererBase.prototype.save = function () {
        this.canvasContext.save()
      }, CanvasRendererBase.prototype.restore = function (e) {
        this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
      }, CanvasRendererBase.prototype.configAnimation = function (e) {
        if (this.animationItem.wrapper) {
          this.animationItem.container = createTag("canvas");
          var t = this.animationItem.container.style;
          t.width = "100%", t.height = "100%";
          var r = "0px 0px 0px";
          t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
        } else this.canvasContext = this.renderConfig.context;
        this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
          w: e.w,
          h: e.h,
          sx: 0,
          sy: 0,
          tx: 0,
          ty: 0
        }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
      }, CanvasRendererBase.prototype.updateContainerSize = function (e, t) {
        var r, i, n, a;
        if (this.reset(), e ? (r = e, i = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
          var s = this.renderConfig.preserveAspectRatio.split(" "),
            o = s[1] || "meet",
            l = s[0] || "xMidYMid",
            p = l.substr(0, 4),
            u = l.substr(4);
          n = r / i, (a = this.transformCanvas.w / this.transformCanvas.h) > n && o === "meet" || a < n && o === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = p === "xMid" && (a < n && o === "meet" || a > n && o === "slice") ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : p === "xMax" && (a < n && o === "meet" || a > n && o === "slice") ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = u === "YMid" && (a > n && o === "meet" || a < n && o === "slice") ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : u === "YMax" && (a > n && o === "meet" || a < n && o === "slice") ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
        } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
      }, CanvasRendererBase.prototype.destroy = function () {
        var e;
        for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
      }, CanvasRendererBase.prototype.renderFrame = function (e, t) {
        if ((this.renderedFrame !== e || this.renderConfig.clearCanvas !== !0 || t) && !this.destroyed && e !== -1) {
          var r;
          this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
          var i = this.layers.length;
          for (this.completeLayers || this.checkLayers(e), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
          if (this.globalData._mdf) {
            for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
            this.renderConfig.clearCanvas !== !0 && this.restore()
          }
        }
      }, CanvasRendererBase.prototype.buildItem = function (e) {
        var t = this.elements;
        if (!t[e] && this.layers[e].ty !== 99) {
          var r = this.createItem(this.layers[e], this, this.globalData);
          t[e] = r, r.initExpressions()
        }
      }, CanvasRendererBase.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
      }, CanvasRendererBase.prototype.hide = function () {
        this.animationItem.container.style.display = "none"
      }, CanvasRendererBase.prototype.show = function () {
        this.animationItem.container.style.display = "block"
      }, CVContextData.prototype.duplicate = function () {
        var e = 2 * this._length,
          t = 0;
        for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
        this._length = e
      }, CVContextData.prototype.reset = function () {
        this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
      }, CVContextData.prototype.restore = function (e) {
        this.cArrPos -= 1;
        var t, r = this.stack[this.cArrPos],
          i = r.transform,
          n = this.cTr.props;
        for (t = 0; t < 16; t += 1) n[t] = i[t];
        if (e) {
          this.nativeContext.restore();
          var a = this.stack[this.cArrPos + 1];
          this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
        }
        this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (e || r.opacity !== -1 && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
      }, CVContextData.prototype.save = function (e) {
        e && this.nativeContext.save();
        var t = this.cTr.props;
        this._length <= this.cArrPos && this.duplicate();
        var r, i = this.stack[this.cArrPos];
        for (r = 0; r < 16; r += 1) i.transform[r] = t[r];
        this.cArrPos += 1;
        var n = this.stack[this.cArrPos];
        n.opacity = i.opacity, n.fillStyle = i.fillStyle, n.strokeStyle = i.strokeStyle, n.lineWidth = i.lineWidth, n.lineCap = i.lineCap, n.lineJoin = i.lineJoin, n.miterLimit = i.miterLimit
      }, CVContextData.prototype.setOpacity = function (e) {
        this.stack[this.cArrPos].opacity = e
      }, CVContextData.prototype.setContext = function (e) {
        this.nativeContext = e
      }, CVContextData.prototype.fillStyle = function (e) {
        this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
      }, CVContextData.prototype.strokeStyle = function (e) {
        this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
      }, CVContextData.prototype.lineWidth = function (e) {
        this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
      }, CVContextData.prototype.lineCap = function (e) {
        this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
      }, CVContextData.prototype.lineJoin = function (e) {
        this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
      }, CVContextData.prototype.miterLimit = function (e) {
        this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
      }, CVContextData.prototype.transform = function (e) {
        this.transformMat.cloneFromProps(e);
        var t = this.cTr;
        this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
        var r = t.props;
        this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
      }, CVContextData.prototype.opacity = function (e) {
        var t = this.stack[this.cArrPos].opacity;
        t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
      }, CVContextData.prototype.fill = function (e) {
        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
      }, CVContextData.prototype.fillRect = function (e, t, r, i) {
        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, i)
      }, CVContextData.prototype.stroke = function () {
        this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
      }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
        var e, t = this.canvasContext;
        for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }, CVCompElement.prototype.destroy = function () {
        var e;
        for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
        this.layers = null, this.elements = null
      }, CVCompElement.prototype.createComp = function (e) {
        return new CVCompElement(e, this.globalData, this)
      }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function (e) {
        return new CVCompElement(e, this.globalData, this)
      }, HBaseElement.prototype = {
        checkBlendMode: function () {},
        initRendererElement: function () {
          this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
        },
        createContainerElements: function () {
          this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
        },
        renderElement: function () {
          var e = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matMdf) {
            var t = this.finalTransform.mat.toCSS();
            e.transform = t, e.webkitTransform = t
          }
          this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
        },
        renderFrame: function () {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        destroy: function () {
          this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
        },
        createRenderableComponents: function () {
          this.maskManager = new MaskElement(this.data, this, this.globalData)
        },
        addEffects: function () {},
        setMatte: function () {}
      }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
        var e;
        this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
      }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
        var e;
        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
        else {
          e = createNS("svg");
          var t = this.comp.data ? this.comp.data : this.globalData.compSize;
          e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
      }, HShapeElement.prototype.getTransformedPoint = function (e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
        return t
      }, HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
        var r, i, n, a, s, o = e.sh.v,
          l = e.transformers,
          p = o._length;
        if (!(p <= 1)) {
          for (r = 0; r < p - 1; r += 1) i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(i, n, a, s, t);
          o.c && (i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, n, a, s, t))
        }
      }, HShapeElement.prototype.checkBounds = function (e, t, r, i, n) {
        this.getBoundsOfCurve(e, t, r, i);
        var a = this.shapeBoundingBox;
        n.x = bmMin(a.left, n.x), n.xMax = bmMax(a.right, n.xMax), n.y = bmMin(a.top, n.y), n.yMax = bmMax(a.bottom, n.yMax)
      }, HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
      }, HShapeElement.prototype.getBoundsOfCurve = function (e, t, r, i) {
        for (var n, a, s, o, l, p, u, h = [
            [e[0], i[0]],
            [e[1], i[1]]
          ], v = 0; v < 2; ++v) a = 6 * e[v] - 12 * t[v] + 6 * r[v], n = -3 * e[v] + 9 * t[v] - 9 * r[v] + 3 * i[v], s = 3 * t[v] - 3 * e[v], a |= 0, s |= 0, (n |= 0) === 0 && a === 0 || (n === 0 ? (o = -s / a) > 0 && o < 1 && h[v].push(this.calculateF(o, e, t, r, i, v)) : (l = a * a - 4 * s * n) >= 0 && ((p = (-a + bmSqrt(l)) / (2 * n)) > 0 && p < 1 && h[v].push(this.calculateF(p, e, t, r, i, v)), (u = (-a - bmSqrt(l)) / (2 * n)) > 0 && u < 1 && h[v].push(this.calculateF(u, e, t, r, i, v))));
        this.shapeBoundingBox.left = bmMin.apply(null, h[0]), this.shapeBoundingBox.top = bmMin.apply(null, h[1]), this.shapeBoundingBox.right = bmMax.apply(null, h[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, h[1])
      }, HShapeElement.prototype.calculateF = function (e, t, r, i, n, a) {
        return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * i[a] + bmPow(e, 3) * n[a]
      }, HShapeElement.prototype.calculateBoundingBox = function (e, t) {
        var r, i = e.length;
        for (r = 0; r < i; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
      }, HShapeElement.prototype.expandStrokeBoundingBox = function (e, t) {
        var r = 0;
        if (e.keyframes) {
          for (var i = 0; i < e.keyframes.length; i += 1) {
            var n = e.keyframes[i].s;
            n > r && (r = n)
          }
          r *= e.mult
        } else r = e.v * e.mult;
        t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
      }, HShapeElement.prototype.currentBoxContains = function (e) {
        return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
      }, HShapeElement.prototype.renderInnerContent = function () {
        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
          var e = this.tempBoundingBox,
            t = 999999;
          if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
          var r = !1;
          if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
            this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
            var i = this.shapeCont.style,
              n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            i.transform = n, i.webkitTransform = n
          }
        }
      }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
        if (this.isMasked = this.checkMasks(), this.isMasked) {
          this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
          var e = createNS("g");
          this.maskedElement.appendChild(e), this.innerElem = e
        } else this.renderType = "html", this.innerElem = this.layerElement;
        this.checkParenting()
      }, HTextElement.prototype.buildNewText = function () {
        var e = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var t = this.innerElem.style,
          r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
        t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
        var i, n, a = this.globalData.fontManager.getFontByName(e.f);
        if (!this.globalData.fontManager.chars)
          if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
          else {
            t.fontFamily = a.fFamily;
            var s = e.fWeight,
              o = e.fStyle;
            t.fontStyle = o, t.fontWeight = s
          } var l, p, u, h = e.l;
        n = h.length;
        var v, d = this.mHelper,
          f = "",
          m = 0;
        for (i = 0; i < n; i += 1) {
          if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (p = this.textSpans[m]).children[0] : ((p = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(p)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (p = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(p = createTag("span")), styleDiv(l = createTag("span")), p.appendChild(l)), this.globalData.fontManager.chars) {
            var c, g = this.globalData.fontManager.getCharData(e.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
            if (c = g ? g.data : null, d.reset(), c && c.shapes && c.shapes.length && (v = c.shapes[0].it, d.scale(e.finalSize / 100, e.finalSize / 100), f = this.createPathShape(d, v), l.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(l);
            else {
              if (this.innerElem.appendChild(p), c && c.shapes) {
                document.body.appendChild(u);
                var y = u.getBBox();
                u.setAttribute("width", y.width + 2), u.setAttribute("height", y.height + 2), u.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                var b = u.style,
                  _ = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                b.transform = _, b.webkitTransform = _, h[i].yOffset = y.y - 1
              } else u.setAttribute("width", 1), u.setAttribute("height", 1);
              p.appendChild(u)
            }
          } else if (l.textContent = h[i].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
          else {
            this.innerElem.appendChild(p);
            var S = l.style,
              I = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
            S.transform = I, S.webkitTransform = I
          }
          this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = p, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
        }
        for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
      }, HTextElement.prototype.renderInnerContent = function () {
        var e;
        if (this.validateText(), this.data.singleShape) {
          if (!this._isFirstFrame && !this.lettersChangedFlag) return;
          if (this.isMasked && this.finalTransform._matMdf) {
            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
            var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
            e.transform = t, e.webkitTransform = t
          }
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
          var r, i, n, a, s, o = 0,
            l = this.textAnimator.renderedLetters,
            p = this.textProperty.currentData.l;
          for (i = p.length, r = 0; r < i; r += 1) p[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], n = l[o], o += 1, n._mdf.m && (this.isMasked ? a.setAttribute("transform", n.m) : (a.style.webkitTransform = n.m, a.style.transform = n.m)), a.style.opacity = n.o, n.sw && n._mdf.sw && s.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && s.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (s.setAttribute("fill", n.fc), s.style.color = n.fc));
          if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var u = this.innerElem.getBBox();
            if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
              this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
              var h = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              e.transform = h, e.webkitTransform = h
            }
          }
        }
      }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
        var e, t, r, i, n = this.comp.threeDElements.length;
        for (e = 0; e < n; e += 1)
          if ((t = this.comp.threeDElements[e]).type === "3d") {
            r = t.perspectiveElem.style, i = t.container.style;
            var a = this.pe.v + "px",
              s = "0px 0px 0px",
              o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            r.perspective = a, r.webkitPerspective = a, i.transformOrigin = s, i.mozTransformOrigin = s, i.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
          }
      }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
        var e, t, r = this._isFirstFrame;
        if (this.hierarchy)
          for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
        if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
          if (this.mat.reset(), this.hierarchy)
            for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
              var i = this.hierarchy[e].finalTransform.mProp;
              this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
            }
          if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
            var n;
            n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
            var a = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
              s = [n[0] / a, n[1] / a, n[2] / a],
              o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
              l = Math.atan2(s[1], o),
              p = Math.atan2(s[0], -s[2]);
            this.mat.rotateY(p).rotateX(-l)
          }
          this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
          var u = !this._prevMat.equals(this.mat);
          if ((u || this.pe._mdf) && this.comp.threeDElements) {
            var h, v, d;
            for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
              if ((h = this.comp.threeDElements[e]).type === "3d") {
                if (u) {
                  var f = this.mat.toCSS();
                  (d = h.container.style).transform = f, d.webkitTransform = f
                }
                this.pe._mdf && ((v = h.perspectiveElem.style).perspective = this.pe.v + "px", v.webkitPerspective = this.pe.v + "px")
              } this.mat.clone(this._prevMat)
          }
        }
        this._isFirstFrame = !1
      }, HCameraElement.prototype.prepareFrame = function (e) {
        this.prepareProperties(e, !0)
      }, HCameraElement.prototype.destroy = function () {}, HCameraElement.prototype.getBaseElement = function () {
        return null
      }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
        var e = this.globalData.getAssetsPath(this.assetData),
          t = new Image;
        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
      }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
      }, HybridRendererBase.prototype.appendElementInPos = function (e, t) {
        var r = e.getBaseElement();
        if (r) {
          var i = this.layers[t];
          if (i.ddd && this.supports3d) this.addTo3dContainer(r, t);
          else if (this.threeDElements) this.addTo3dContainer(r, t);
          else {
            for (var n, a, s = 0; s < t;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (a = this.elements[s], n = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || n), s += 1;
            n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
          }
        }
      }, HybridRendererBase.prototype.createShape = function (e) {
        return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createText = function (e) {
        return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createCamera = function (e) {
        return this.camera = new HCameraElement(e, this.globalData, this), this.camera
      }, HybridRendererBase.prototype.createImage = function (e) {
        return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createSolid = function (e) {
        return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function (e) {
        for (var t = 0, r = this.threeDElements.length; t < r;) {
          if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
          t += 1
        }
        return null
      }, HybridRendererBase.prototype.createThreeDContainer = function (e, t) {
        var r, i, n = createTag("div");
        styleDiv(n);
        var a = createTag("div");
        if (styleDiv(a), t === "3d") {
          (r = n.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
          var s = "50% 50%";
          r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
          var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          (i = a.style).transform = o, i.webkitTransform = o
        }
        n.appendChild(a);
        var l = {
          container: a,
          perspectiveElem: n,
          startPos: e,
          endPos: e,
          type: t
        };
        return this.threeDElements.push(l), l
      }, HybridRendererBase.prototype.build3dContainers = function () {
        var e, t, r = this.layers.length,
          i = "";
        for (e = 0; e < r; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (i !== "3d" && (i = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : (i !== "2d" && (i = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
        for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
      }, HybridRendererBase.prototype.addTo3dContainer = function (e, t) {
        for (var r = 0, i = this.threeDElements.length; r < i;) {
          if (t <= this.threeDElements[r].endPos) {
            for (var n, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a].getBaseElement()), a += 1;
            n ? this.threeDElements[r].container.insertBefore(e, n) : this.threeDElements[r].container.appendChild(e);
            break
          }
          r += 1
        }
      }, HybridRendererBase.prototype.configAnimation = function (e) {
        var t = createTag("div"),
          r = this.animationItem.wrapper,
          i = t.style;
        i.width = e.w + "px", i.height = e.h + "px", this.resizerElem = t, styleDiv(t), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), i.overflow = "hidden";
        var n = createNS("svg");
        n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
        var a = createNS("defs");
        n.appendChild(a), this.data = e, this.setupGlobalData(e, n), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
      }, HybridRendererBase.prototype.destroy = function () {
        var e;
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
        var t = this.layers ? this.layers.length : 0;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
      }, HybridRendererBase.prototype.updateContainerSize = function () {
        var e, t, r, i, n = this.animationItem.wrapper.offsetWidth,
          a = this.animationItem.wrapper.offsetHeight,
          s = n / a;
        this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = n / this.globalData.compSize.w, t = n / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
        var o = this.resizerElem.style;
        o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
      }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function () {
        this.resizerElem.style.display = "none"
      }, HybridRendererBase.prototype.show = function () {
        this.resizerElem.style.display = "block"
      }, HybridRendererBase.prototype.initItems = function () {
        if (this.buildAllItems(), this.camera) this.camera.setup();
        else {
          var e, t = this.globalData.compSize.w,
            r = this.globalData.compSize.h,
            i = this.threeDElements.length;
          for (e = 0; e < i; e += 1) {
            var n = this.threeDElements[e].perspectiveElem.style;
            n.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", n.perspective = n.webkitPerspective
          }
        }
      }, HybridRendererBase.prototype.searchExtraCompositions = function (e) {
        var t, r = e.length,
          i = createTag("div");
        for (t = 0; t < r; t += 1)
          if (e[t].xt) {
            var n = this.createComp(e[t], i, this.globalData.comp, null);
            n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
          }
      }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
      }, HCompElement.prototype.addTo3dContainer = function (e, t) {
        for (var r, i = 0; i < t;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
        r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
      }, HCompElement.prototype.createComp = function (e) {
        return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
      }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function (e) {
        return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
      };
      var CompExpressionInterface = function (e) {
        function t(r) {
          for (var i = 0, n = e.layers.length; i < n;) {
            if (e.layers[i].nm === r || e.layers[i].ind === r) return e.elements[i].layerInterface;
            i += 1
          }
          return null
        }
        return Object.defineProperty(t, "_name", {
          value: e.data.nm
        }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
      };

      function _typeof$2(e) {
        return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$2(e)
      }

      function seedRandom(e, t) {
        var r, i = this,
          n = 256,
          a = t.pow(n, 6),
          s = t.pow(2, 52),
          o = 2 * s,
          l = 255;

        function p(f) {
          var m, c = f.length,
            g = this,
            y = 0,
            b = g.i = g.j = 0,
            _ = g.S = [];
          for (c || (f = [c++]); y < n;) _[y] = y++;
          for (y = 0; y < n; y++) _[y] = _[b = l & b + f[y % c] + (m = _[y])], _[b] = m;
          g.g = function (S) {
            for (var I, x = 0, P = g.i, L = g.j, D = g.S; S--;) I = D[P = l & P + 1], x = x * n + D[l & (D[P] = D[L = l & L + I]) + (D[L] = I)];
            return g.i = P, g.j = L, x
          }
        }

        function u(f, m) {
          return m.i = f.i, m.j = f.j, m.S = f.S.slice(), m
        }

        function h(f, m) {
          var c, g = [],
            y = _typeof$2(f);
          if (m && y == "object")
            for (c in f) try {
              g.push(h(f[c], m - 1))
            } catch {}
          return g.length ? g : y == "string" ? f : f + "\0"
        }

        function v(f, m) {
          for (var c, g = f + "", y = 0; y < g.length;) m[l & y] = l & (c ^= 19 * m[l & y]) + g.charCodeAt(y++);
          return d(m)
        }

        function d(f) {
          return String.fromCharCode.apply(0, f)
        }
        t.seedrandom = function (f, m, c) {
          var g = [],
            y = v(h((m = m === !0 ? {
              entropy: !0
            } : m || {}).entropy ? [f, d(e)] : f === null ? function () {
              try {
                var S = new Uint8Array(n);
                return (i.crypto || i.msCrypto).getRandomValues(S), d(S)
              } catch {
                var I = i.navigator,
                  x = I && I.plugins;
                return [+new Date, i, x, i.screen, d(e)]
              }
            }() : f, 3), g),
            b = new p(g),
            _ = function () {
              for (var S = b.g(6), I = a, x = 0; S < s;) S = (S + x) * n, I *= n, x = b.g(1);
              for (; S >= o;) S /= 2, I /= 2, x >>>= 1;
              return (S + x) / I
            };
          return _.int32 = function () {
            return 0 | b.g(4)
          }, _.quick = function () {
            return b.g(4) / 4294967296
          }, _.double = _, v(d(b.S), e), (m.pass || c || function (S, I, x, P) {
            return P && (P.S && u(P, b), S.state = function () {
              return u(b, {})
            }), x ? (t.random = S, I) : S
          })(_, y, "global" in m ? m.global : this == t, m.state)
        }, v(t.random(), e)
      }

      function initialize$2(e) {
        seedRandom([], e)
      }
      var propTypes = {
        SHAPE: "shape"
      };

      function _typeof$1(e) {
        return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$1(e)
      }
      var ExpressionManager = function () {
          var ob = {},
            Math = BMMath,
            window = null,
            document = null,
            XMLHttpRequest = null,
            fetch = null,
            frames = null,
            _lottieGlobal = {};

          function resetFrame() {
            _lottieGlobal = {}
          }

          function $bm_isInstanceOfArray(e) {
            return e.constructor === Array || e.constructor === Float32Array
          }

          function isNumerable(e, t) {
            return e === "number" || t instanceof Number || e === "boolean" || e === "string"
          }

          function $bm_neg(e) {
            var t = _typeof$1(e);
            if (t === "number" || e instanceof Number || t === "boolean") return -e;
            if ($bm_isInstanceOfArray(e)) {
              var r, i = e.length,
                n = [];
              for (r = 0; r < i; r += 1) n[r] = -e[r];
              return n
            }
            return e.propType ? e.v : -e
          }
          initialize$2(BMMath);
          var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

          function sum(e, t) {
            var r = _typeof$1(e),
              i = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(i, t) || r === "string" || i === "string") return e + t;
            if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0))[0] += t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var n = 0, a = e.length, s = t.length, o = []; n < a || n < s;)(typeof e[n] == "number" || e[n] instanceof Number) && (typeof t[n] == "number" || t[n] instanceof Number) ? o[n] = e[n] + t[n] : o[n] = t[n] === void 0 ? e[n] : e[n] || t[n], n += 1;
              return o
            }
            return 0
          }
          var add = sum;

          function sub(e, t) {
            var r = _typeof$1(e),
              i = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(i, t)) return r === "string" && (e = parseInt(e, 10)), i === "string" && (t = parseInt(t, 10)), e - t;
            if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0))[0] -= t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var n = 0, a = e.length, s = t.length, o = []; n < a || n < s;)(typeof e[n] == "number" || e[n] instanceof Number) && (typeof t[n] == "number" || t[n] instanceof Number) ? o[n] = e[n] - t[n] : o[n] = t[n] === void 0 ? e[n] : e[n] || t[n], n += 1;
              return o
            }
            return 0
          }

          function mul(e, t) {
            var r, i, n, a = _typeof$1(e),
              s = _typeof$1(t);
            if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
              for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e[i] * t;
              return r
            }
            if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
              for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e * t[i];
              return r
            }
            return 0
          }

          function div(e, t) {
            var r, i, n, a = _typeof$1(e),
              s = _typeof$1(t);
            if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
              for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e[i] / t;
              return r
            }
            if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
              for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e / t[i];
              return r
            }
            return 0
          }

          function mod(e, t) {
            return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;

          function clamp(e, t, r) {
            if (t > r) {
              var i = r;
              r = t, t = i
            }
            return Math.min(Math.max(e, t), r)
          }

          function radiansToDegrees(e) {
            return e / degToRads
          }
          var radians_to_degrees = radiansToDegrees;

          function degreesToRadians(e) {
            return e * degToRads
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];

          function length(e, t) {
            if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
            var r;
            t || (t = helperLengthArray);
            var i = Math.min(e.length, t.length),
              n = 0;
            for (r = 0; r < i; r += 1) n += Math.pow(t[r] - e[r], 2);
            return Math.sqrt(n)
          }

          function normalize(e) {
            return div(e, length(e))
          }

          function rgbToHsl(e) {
            var t, r, i = e[0],
              n = e[1],
              a = e[2],
              s = Math.max(i, n, a),
              o = Math.min(i, n, a),
              l = (s + o) / 2;
            if (s === o) t = 0, r = 0;
            else {
              var p = s - o;
              switch (r = l > .5 ? p / (2 - s - o) : p / (s + o), s) {
                case i:
                  t = (n - a) / p + (n < a ? 6 : 0);
                  break;
                case n:
                  t = (a - i) / p + 2;
                  break;
                case a:
                  t = (i - n) / p + 4
              }
              t /= 6
            }
            return [t, r, l, e[3]]
          }

          function hue2rgb(e, t, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
          }

          function hslToRgb(e) {
            var t, r, i, n = e[0],
              a = e[1],
              s = e[2];
            if (a === 0) t = s, i = s, r = s;
            else {
              var o = s < .5 ? s * (1 + a) : s + a - s * a,
                l = 2 * s - o;
              t = hue2rgb(l, o, n + 1 / 3), r = hue2rgb(l, o, n), i = hue2rgb(l, o, n - 1 / 3)
            }
            return [t, r, i, e[3]]
          }

          function linear(e, t, r, i, n) {
            if (i !== void 0 && n !== void 0 || (i = t, n = r, t = 0, r = 1), r < t) {
              var a = r;
              r = t, t = a
            }
            if (e <= t) return i;
            if (e >= r) return n;
            var s, o = r === t ? 0 : (e - t) / (r - t);
            if (!i.length) return i + (n - i) * o;
            var l = i.length,
              p = createTypedArray("float32", l);
            for (s = 0; s < l; s += 1) p[s] = i[s] + (n[s] - i[s]) * o;
            return p
          }

          function random(e, t) {
            if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
              var r, i = t.length;
              e || (e = createTypedArray("float32", i));
              var n = createTypedArray("float32", i),
                a = BMMath.random();
              for (r = 0; r < i; r += 1) n[r] = e[r] + a * (t[r] - e[r]);
              return n
            }
            return e === void 0 && (e = 0), e + BMMath.random() * (t - e)
          }

          function createPath(e, t, r, i) {
            var n, a = e.length,
              s = shapePool.newElement();
            s.setPathData(!!i, a);
            var o, l, p = [0, 0];
            for (n = 0; n < a; n += 1) o = t && t[n] ? t[n] : p, l = r && r[n] ? r[n] : p, s.setTripleAt(e[n][0], e[n][1], l[0] + e[n][0], l[1] + e[n][1], o[0] + e[n][0], o[1] + e[n][1], n, !0);
            return s
          }

          function initiateExpression(elem, data, property) {
            function noOp(e) {
              return e
            }
            if (!elem.globalData.renderConfig.runExpressions) return noOp;
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = val.indexOf("random") !== -1,
              elemType = elem.data.ty,
              transform, $bm_transform, content, effect, thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
              get: function () {
                return thisProperty.v
              }
            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw ? elem.data.sw : 0,
              height = elem.data.sh ? elem.data.sh : 0,
              name = elem.data.nm,
              loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || this.data.hd !== !0,
              wiggle = function (e, t) {
                var r, i, n = this.pv.length ? this.pv.length : 1,
                  a = createTypedArray("float32", n),
                  s = Math.floor(5 * time);
                for (r = 0, i = 0; r < s;) {
                  for (i = 0; i < n; i += 1) a[i] += -t + 2 * t * BMMath.random();
                  r += 1
                }
                var o = 5 * time,
                  l = o - Math.floor(o),
                  p = createTypedArray("float32", n);
                if (n > 1) {
                  for (i = 0; i < n; i += 1) p[i] = this.pv[i] + a[i] + (-t + 2 * t * BMMath.random()) * l;
                  return p
                }
                return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
              }.bind(this);

            function loopInDuration(e, t) {
              return loopIn(e, t, !0)
            }

            function loopOutDuration(e, t) {
              return loopOut(e, t, !0)
            }
            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
              time, velocity, value, text, textIndex, textTotal, selectorValue;

            function lookAt(e, t) {
              var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
              return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
            }

            function easeOut(e, t, r, i, n) {
              return applyEase(easeOutBez, e, t, r, i, n)
            }

            function easeIn(e, t, r, i, n) {
              return applyEase(easeInBez, e, t, r, i, n)
            }

            function ease(e, t, r, i, n) {
              return applyEase(easeInOutBez, e, t, r, i, n)
            }

            function applyEase(e, t, r, i, n, a) {
              n === void 0 ? (n = r, a = i) : t = (t - r) / (i - r), t > 1 ? t = 1 : t < 0 && (t = 0);
              var s = e(t);
              if ($bm_isInstanceOfArray(n)) {
                var o, l = n.length,
                  p = createTypedArray("float32", l);
                for (o = 0; o < l; o += 1) p[o] = (a[o] - n[o]) * s + n[o];
                return p
              }
              return (a - n) * s + n
            }

            function nearestKey(e) {
              var t, r, i, n = data.k.length;
              if (data.k.length && typeof data.k[0] != "number")
                if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                else {
                  for (t = 0; t < n - 1; t += 1) {
                    if (e === data.k[t].t) {
                      r = t + 1, i = data.k[t].t;
                      break
                    }
                    if (e > data.k[t].t && e < data.k[t + 1].t) {
                      e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, i = data.k[t + 1].t) : (r = t + 1, i = data.k[t].t);
                      break
                    }
                  }
                  r === -1 && (r = t + 1, i = data.k[t].t)
                }
              else r = 0, i = 0;
              var a = {};
              return a.index = r, a.time = i / elem.comp.globalData.frameRate, a
            }

            function key(e) {
              var t, r, i;
              if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
              e -= 1, t = {
                time: data.k[e].t / elem.comp.globalData.frameRate,
                value: []
              };
              var n = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
              for (i = n.length, r = 0; r < i; r += 1) t[r] = n[r], t.value[r] = n[r];
              return t
            }

            function framesToTime(e, t) {
              return t || (t = elem.comp.globalData.frameRate), e / t
            }

            function timeToFrames(e, t) {
              return e || e === 0 || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
            }

            function seedRandom(e) {
              BMMath.seedrandom(randSeed + e)
            }

            function sourceRectAtTime() {
              return elem.sourceRectAtTime()
            }

            function substring(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
            }

            function substr(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
            }

            function posterizeTime(e) {
              time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
            }
            var index = elem.data.ind,
              hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
              parent, randSeed = Math.floor(1e6 * Math.random()),
              globalData = elem.globalData;

            function executeExpression(e) {
              return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
            }
            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
          }
          return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
        }(),
        Expressions = function () {
          var e = {};
          return e.initExpressions = function (t) {
            var r = 0,
              i = [];
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {
              r += 1
            }, t.renderer.globalData.popExpression = function () {
              (r -= 1) == 0 && function () {
                var n, a = i.length;
                for (n = 0; n < a; n += 1) i[n].release();
                i.length = 0
              }()
            }, t.renderer.globalData.registerExpressionProperty = function (n) {
              i.indexOf(n) === -1 && i.push(n)
            }
          }, e.resetFrame = ExpressionManager.resetFrame, e
        }(),
        MaskManagerInterface = function () {
          function e(t, r) {
            this._mask = t, this._data = r
          }
          return Object.defineProperty(e.prototype, "maskPath", {
              get: function () {
                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
              }
            }), Object.defineProperty(e.prototype, "maskOpacity", {
              get: function () {
                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
              }
            }),
            function (t) {
              var r, i = createSizedArray(t.viewData.length),
                n = t.viewData.length;
              for (r = 0; r < n; r += 1) i[r] = new e(t.viewData[r], t.masksProperties[r]);
              return function (a) {
                for (r = 0; r < n;) {
                  if (t.masksProperties[r].nm === a) return i[r];
                  r += 1
                }
                return null
              }
            }
        }(),
        ExpressionPropertyInterface = function () {
          var e = {
              pv: 0,
              v: 0,
              mult: 1
            },
            t = {
              pv: [0, 0, 0],
              v: [0, 0, 0],
              mult: 1
            };

          function r(n, a, s) {
            Object.defineProperty(n, "velocity", {
              get: function () {
                return a.getVelocityAtTime(a.comp.currentFrame)
              }
            }), n.numKeys = a.keyframes ? a.keyframes.length : 0, n.key = function (o) {
              if (!n.numKeys) return 0;
              var l = "";
              l = "s" in a.keyframes[o - 1] ? a.keyframes[o - 1].s : "e" in a.keyframes[o - 2] ? a.keyframes[o - 2].e : a.keyframes[o - 2].s;
              var p = s === "unidimensional" ? new Number(l) : Object.assign({}, l);
              return p.time = a.keyframes[o - 1].t / a.elem.comp.globalData.frameRate, p.value = s === "unidimensional" ? l[0] : l, p
            }, n.valueAtTime = a.getValueAtTime, n.speedAtTime = a.getSpeedAtTime, n.velocityAtTime = a.getVelocityAtTime, n.propertyGroup = a.propertyGroup
          }

          function i() {
            return e
          }
          return function (n) {
            return n ? n.propType === "unidimensional" ? function (a) {
              a && "pv" in a || (a = e);
              var s = 1 / a.mult,
                o = a.pv * s,
                l = new Number(o);
              return l.value = o, r(l, a, "unidimensional"),
                function () {
                  return a.k && a.getValue(), o = a.v * s, l.value !== o && ((l = new Number(o)).value = o, r(l, a, "unidimensional")), l
                }
            }(n) : function (a) {
              a && "pv" in a || (a = t);
              var s = 1 / a.mult,
                o = a.data && a.data.l || a.pv.length,
                l = createTypedArray("float32", o),
                p = createTypedArray("float32", o);
              return l.value = p, r(l, a, "multidimensional"),
                function () {
                  a.k && a.getValue();
                  for (var u = 0; u < o; u += 1) p[u] = a.v[u] * s, l[u] = p[u];
                  return l
                }
            }(n) : i
          }
        }(),
        TransformExpressionInterface = function (e) {
          function t(s) {
            switch (s) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return t.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return t.rotation;
              case "ADBE Rotate X":
                return t.xRotation;
              case "ADBE Rotate Y":
                return t.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return t.position;
              case "ADBE Position_0":
                return t.xPosition;
              case "ADBE Position_1":
                return t.yPosition;
              case "ADBE Position_2":
                return t.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return t.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return t.opacity;
              default:
                return null
            }
          }
          var r, i, n, a;
          return Object.defineProperty(t, "rotation", {
            get: ExpressionPropertyInterface(e.r || e.rz)
          }), Object.defineProperty(t, "zRotation", {
            get: ExpressionPropertyInterface(e.rz || e.r)
          }), Object.defineProperty(t, "xRotation", {
            get: ExpressionPropertyInterface(e.rx)
          }), Object.defineProperty(t, "yRotation", {
            get: ExpressionPropertyInterface(e.ry)
          }), Object.defineProperty(t, "scale", {
            get: ExpressionPropertyInterface(e.s)
          }), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), i = ExpressionPropertyInterface(e.py), e.pz && (n = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
            get: function () {
              return e.p ? a() : [r(), i(), n ? n() : 0]
            }
          }), Object.defineProperty(t, "xPosition", {
            get: ExpressionPropertyInterface(e.px)
          }), Object.defineProperty(t, "yPosition", {
            get: ExpressionPropertyInterface(e.py)
          }), Object.defineProperty(t, "zPosition", {
            get: ExpressionPropertyInterface(e.pz)
          }), Object.defineProperty(t, "anchorPoint", {
            get: ExpressionPropertyInterface(e.a)
          }), Object.defineProperty(t, "opacity", {
            get: ExpressionPropertyInterface(e.o)
          }), Object.defineProperty(t, "skew", {
            get: ExpressionPropertyInterface(e.sk)
          }), Object.defineProperty(t, "skewAxis", {
            get: ExpressionPropertyInterface(e.sa)
          }), Object.defineProperty(t, "orientation", {
            get: ExpressionPropertyInterface(e.or)
          }), t
        },
        LayerExpressionInterface = function () {
          function e(p) {
            var u = new Matrix;
            return p !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(p).clone(u) : this._elem.finalTransform.mProp.applyToMatrix(u), u
          }

          function t(p, u) {
            var h = this.getMatrix(u);
            return h.props[12] = 0, h.props[13] = 0, h.props[14] = 0, this.applyPoint(h, p)
          }

          function r(p, u) {
            var h = this.getMatrix(u);
            return this.applyPoint(h, p)
          }

          function i(p, u) {
            var h = this.getMatrix(u);
            return h.props[12] = 0, h.props[13] = 0, h.props[14] = 0, this.invertPoint(h, p)
          }

          function n(p, u) {
            var h = this.getMatrix(u);
            return this.invertPoint(h, p)
          }

          function a(p, u) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var h, v = this._elem.hierarchy.length;
              for (h = 0; h < v; h += 1) this._elem.hierarchy[h].finalTransform.mProp.applyToMatrix(p)
            }
            return p.applyToPointArray(u[0], u[1], u[2] || 0)
          }

          function s(p, u) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var h, v = this._elem.hierarchy.length;
              for (h = 0; h < v; h += 1) this._elem.hierarchy[h].finalTransform.mProp.applyToMatrix(p)
            }
            return p.inversePoint(u)
          }

          function o(p) {
            var u = new Matrix;
            if (u.reset(), this._elem.finalTransform.mProp.applyToMatrix(u), this._elem.hierarchy && this._elem.hierarchy.length) {
              var h, v = this._elem.hierarchy.length;
              for (h = 0; h < v; h += 1) this._elem.hierarchy[h].finalTransform.mProp.applyToMatrix(u);
              return u.inversePoint(p)
            }
            return u.inversePoint(p)
          }

          function l() {
            return [1, 1, 1, 1]
          }
          return function (p) {
            var u;

            function h(d) {
              switch (d) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return h.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return u;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return h.effect;
                case "ADBE Text Properties":
                  return h.textInterface;
                default:
                  return null
              }
            }
            h.getMatrix = e, h.invertPoint = s, h.applyPoint = a, h.toWorld = r, h.toWorldVec = t, h.fromWorld = n, h.fromWorldVec = i, h.toComp = r, h.fromComp = o, h.sampleImage = l, h.sourceRectAtTime = p.sourceRectAtTime.bind(p), h._elem = p;
            var v = getDescriptor(u = TransformExpressionInterface(p.finalTransform.mProp), "anchorPoint");
            return Object.defineProperties(h, {
              hasParent: {
                get: function () {
                  return p.hierarchy.length
                }
              },
              parent: {
                get: function () {
                  return p.hierarchy[0].layerInterface
                }
              },
              rotation: getDescriptor(u, "rotation"),
              scale: getDescriptor(u, "scale"),
              position: getDescriptor(u, "position"),
              opacity: getDescriptor(u, "opacity"),
              anchorPoint: v,
              anchor_point: v,
              transform: {
                get: function () {
                  return u
                }
              },
              active: {
                get: function () {
                  return p.isInRange
                }
              }
            }), h.startTime = p.data.st, h.index = p.data.ind, h.source = p.data.refId, h.height = p.data.ty === 0 ? p.data.h : 100, h.width = p.data.ty === 0 ? p.data.w : 100, h.inPoint = p.data.ip / p.comp.globalData.frameRate, h.outPoint = p.data.op / p.comp.globalData.frameRate, h._name = p.data.nm, h.registerMaskInterface = function (d) {
              h.mask = new MaskManagerInterface(d, p)
            }, h.registerEffectsInterface = function (d) {
              h.effect = d
            }, h
          }
        }(),
        propertyGroupFactory = function (e, t) {
          return function (r) {
            return (r = r === void 0 ? 1 : r) <= 0 ? e : t(r - 1)
          }
        },
        PropertyInterface = function (e, t) {
          var r = {
            _name: e
          };
          return function (i) {
            return (i = i === void 0 ? 1 : i) <= 0 ? r : t(i - 1)
          }
        },
        EffectsExpressionInterface = function () {
          function e(r, i, n, a) {
            function s(h) {
              for (var v = r.ef, d = 0, f = v.length; d < f;) {
                if (h === v[d].nm || h === v[d].mn || h === v[d].ix) return v[d].ty === 5 ? p[d] : p[d]();
                d += 1
              }
              throw new Error
            }
            var o, l = propertyGroupFactory(s, n),
              p = [],
              u = r.ef.length;
            for (o = 0; o < u; o += 1) r.ef[o].ty === 5 ? p.push(e(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : p.push(t(i.effectElements[o], r.ef[o].ty, a, l));
            return r.mn === "ADBE Color Control" && Object.defineProperty(s, "color", {
              get: function () {
                return p[0]()
              }
            }), Object.defineProperties(s, {
              numProperties: {
                get: function () {
                  return r.np
                }
              },
              _name: {
                value: r.nm
              },
              propertyGroup: {
                value: l
              }
            }), s.enabled = r.en !== 0, s.active = s.enabled, s
          }

          function t(r, i, n, a) {
            var s = ExpressionPropertyInterface(r.p);
            return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", a)),
              function () {
                return i === 10 ? n.comp.compInterface(r.p.v) : s()
              }
          }
          return {
            createEffectsInterface: function (r, i) {
              if (r.effectsManager) {
                var n, a = [],
                  s = r.data.ef,
                  o = r.effectsManager.effectElements.length;
                for (n = 0; n < o; n += 1) a.push(e(s[n], r.effectsManager.effectElements[n], i, r));
                var l = r.data.ef || [],
                  p = function (u) {
                    for (n = 0, o = l.length; n < o;) {
                      if (u === l[n].nm || u === l[n].mn || u === l[n].ix) return a[n];
                      n += 1
                    }
                    return null
                  };
                return Object.defineProperty(p, "numProperties", {
                  get: function () {
                    return l.length
                  }
                }), p
              }
              return null
            }
          }
        }(),
        ShapePathInterface = function (e, t, r) {
          var i = t.sh;

          function n(s) {
            return s === "Shape" || s === "shape" || s === "Path" || s === "path" || s === "ADBE Vector Shape" || s === 2 ? n.path : null
          }
          var a = propertyGroupFactory(n, r);
          return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
            path: {
              get: function () {
                return i.k && i.getValue(), i
              }
            },
            shape: {
              get: function () {
                return i.k && i.getValue(), i
              }
            },
            _name: {
              value: e.nm
            },
            ix: {
              value: e.ix
            },
            propertyIndex: {
              value: e.ix
            },
            mn: {
              value: e.mn
            },
            propertyGroup: {
              value: r
            }
          }), n
        },
        ShapeExpressionInterface = function () {
          function e(d, f, m) {
            var c, g = [],
              y = d ? d.length : 0;
            for (c = 0; c < y; c += 1) d[c].ty === "gr" ? g.push(t(d[c], f[c], m)) : d[c].ty === "fl" ? g.push(r(d[c], f[c], m)) : d[c].ty === "st" ? g.push(a(d[c], f[c], m)) : d[c].ty === "tm" ? g.push(s(d[c], f[c], m)) : d[c].ty === "tr" || (d[c].ty === "el" ? g.push(l(d[c], f[c], m)) : d[c].ty === "sr" ? g.push(p(d[c], f[c], m)) : d[c].ty === "sh" ? g.push(ShapePathInterface(d[c], f[c], m)) : d[c].ty === "rc" ? g.push(u(d[c], f[c], m)) : d[c].ty === "rd" ? g.push(h(d[c], f[c], m)) : d[c].ty === "rp" ? g.push(v(d[c], f[c], m)) : d[c].ty === "gf" ? g.push(i(d[c], f[c], m)) : g.push(n(d[c], f[c])));
            return g
          }

          function t(d, f, m) {
            var c = function (b) {
              switch (b) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return c.content;
                default:
                  return c.transform
              }
            };
            c.propertyGroup = propertyGroupFactory(c, m);
            var g = function (b, _, S) {
                var I, x = function (L) {
                  for (var D = 0, O = I.length; D < O;) {
                    if (I[D]._name === L || I[D].mn === L || I[D].propertyIndex === L || I[D].ix === L || I[D].ind === L) return I[D];
                    D += 1
                  }
                  return typeof L == "number" ? I[L - 1] : null
                };
                x.propertyGroup = propertyGroupFactory(x, S), I = e(b.it, _.it, x.propertyGroup), x.numProperties = I.length;
                var P = o(b.it[b.it.length - 1], _.it[_.it.length - 1], x.propertyGroup);
                return x.transform = P, x.propertyIndex = b.cix, x._name = b.nm, x
              }(d, f, c.propertyGroup),
              y = o(d.it[d.it.length - 1], f.it[f.it.length - 1], c.propertyGroup);
            return c.content = g, c.transform = y, Object.defineProperty(c, "_name", {
              get: function () {
                return d.nm
              }
            }), c.numProperties = d.np, c.propertyIndex = d.ix, c.nm = d.nm, c.mn = d.mn, c
          }

          function r(d, f, m) {
            function c(g) {
              return g === "Color" || g === "color" ? c.color : g === "Opacity" || g === "opacity" ? c.opacity : null
            }
            return Object.defineProperties(c, {
              color: {
                get: ExpressionPropertyInterface(f.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(f.o)
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), f.c.setGroupProperty(PropertyInterface("Color", m)), f.o.setGroupProperty(PropertyInterface("Opacity", m)), c
          }

          function i(d, f, m) {
            function c(g) {
              return g === "Start Point" || g === "start point" ? c.startPoint : g === "End Point" || g === "end point" ? c.endPoint : g === "Opacity" || g === "opacity" ? c.opacity : null
            }
            return Object.defineProperties(c, {
              startPoint: {
                get: ExpressionPropertyInterface(f.s)
              },
              endPoint: {
                get: ExpressionPropertyInterface(f.e)
              },
              opacity: {
                get: ExpressionPropertyInterface(f.o)
              },
              type: {
                get: function () {
                  return "a"
                }
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), f.s.setGroupProperty(PropertyInterface("Start Point", m)), f.e.setGroupProperty(PropertyInterface("End Point", m)), f.o.setGroupProperty(PropertyInterface("Opacity", m)), c
          }

          function n() {
            return function () {
              return null
            }
          }

          function a(d, f, m) {
            var c, g = propertyGroupFactory(I, m),
              y = propertyGroupFactory(S, g);

            function b(x) {
              Object.defineProperty(S, d.d[x].nm, {
                get: ExpressionPropertyInterface(f.d.dataProps[x].p)
              })
            }
            var _ = d.d ? d.d.length : 0,
              S = {};
            for (c = 0; c < _; c += 1) b(c), f.d.dataProps[c].p.setGroupProperty(y);

            function I(x) {
              return x === "Color" || x === "color" ? I.color : x === "Opacity" || x === "opacity" ? I.opacity : x === "Stroke Width" || x === "stroke width" ? I.strokeWidth : null
            }
            return Object.defineProperties(I, {
              color: {
                get: ExpressionPropertyInterface(f.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(f.o)
              },
              strokeWidth: {
                get: ExpressionPropertyInterface(f.w)
              },
              dash: {
                get: function () {
                  return S
                }
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), f.c.setGroupProperty(PropertyInterface("Color", g)), f.o.setGroupProperty(PropertyInterface("Opacity", g)), f.w.setGroupProperty(PropertyInterface("Stroke Width", g)), I
          }

          function s(d, f, m) {
            function c(y) {
              return y === d.e.ix || y === "End" || y === "end" ? c.end : y === d.s.ix ? c.start : y === d.o.ix ? c.offset : null
            }
            var g = propertyGroupFactory(c, m);
            return c.propertyIndex = d.ix, f.s.setGroupProperty(PropertyInterface("Start", g)), f.e.setGroupProperty(PropertyInterface("End", g)), f.o.setGroupProperty(PropertyInterface("Offset", g)), c.propertyIndex = d.ix, c.propertyGroup = m, Object.defineProperties(c, {
              start: {
                get: ExpressionPropertyInterface(f.s)
              },
              end: {
                get: ExpressionPropertyInterface(f.e)
              },
              offset: {
                get: ExpressionPropertyInterface(f.o)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function o(d, f, m) {
            function c(y) {
              return d.a.ix === y || y === "Anchor Point" ? c.anchorPoint : d.o.ix === y || y === "Opacity" ? c.opacity : d.p.ix === y || y === "Position" ? c.position : d.r.ix === y || y === "Rotation" || y === "ADBE Vector Rotation" ? c.rotation : d.s.ix === y || y === "Scale" ? c.scale : d.sk && d.sk.ix === y || y === "Skew" ? c.skew : d.sa && d.sa.ix === y || y === "Skew Axis" ? c.skewAxis : null
            }
            var g = propertyGroupFactory(c, m);
            return f.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", g)), f.transform.mProps.p.setGroupProperty(PropertyInterface("Position", g)), f.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", g)), f.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", g)), f.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", g)), f.transform.mProps.sk && (f.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", g)), f.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", g))), f.transform.op.setGroupProperty(PropertyInterface("Opacity", g)), Object.defineProperties(c, {
              opacity: {
                get: ExpressionPropertyInterface(f.transform.mProps.o)
              },
              position: {
                get: ExpressionPropertyInterface(f.transform.mProps.p)
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(f.transform.mProps.a)
              },
              scale: {
                get: ExpressionPropertyInterface(f.transform.mProps.s)
              },
              rotation: {
                get: ExpressionPropertyInterface(f.transform.mProps.r)
              },
              skew: {
                get: ExpressionPropertyInterface(f.transform.mProps.sk)
              },
              skewAxis: {
                get: ExpressionPropertyInterface(f.transform.mProps.sa)
              },
              _name: {
                value: d.nm
              }
            }), c.ty = "tr", c.mn = d.mn, c.propertyGroup = m, c
          }

          function l(d, f, m) {
            function c(b) {
              return d.p.ix === b ? c.position : d.s.ix === b ? c.size : null
            }
            var g = propertyGroupFactory(c, m);
            c.propertyIndex = d.ix;
            var y = f.sh.ty === "tm" ? f.sh.prop : f.sh;
            return y.s.setGroupProperty(PropertyInterface("Size", g)), y.p.setGroupProperty(PropertyInterface("Position", g)), Object.defineProperties(c, {
              size: {
                get: ExpressionPropertyInterface(y.s)
              },
              position: {
                get: ExpressionPropertyInterface(y.p)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function p(d, f, m) {
            function c(b) {
              return d.p.ix === b ? c.position : d.r.ix === b ? c.rotation : d.pt.ix === b ? c.points : d.or.ix === b || b === "ADBE Vector Star Outer Radius" ? c.outerRadius : d.os.ix === b ? c.outerRoundness : !d.ir || d.ir.ix !== b && b !== "ADBE Vector Star Inner Radius" ? d.is && d.is.ix === b ? c.innerRoundness : null : c.innerRadius
            }
            var g = propertyGroupFactory(c, m),
              y = f.sh.ty === "tm" ? f.sh.prop : f.sh;
            return c.propertyIndex = d.ix, y.or.setGroupProperty(PropertyInterface("Outer Radius", g)), y.os.setGroupProperty(PropertyInterface("Outer Roundness", g)), y.pt.setGroupProperty(PropertyInterface("Points", g)), y.p.setGroupProperty(PropertyInterface("Position", g)), y.r.setGroupProperty(PropertyInterface("Rotation", g)), d.ir && (y.ir.setGroupProperty(PropertyInterface("Inner Radius", g)), y.is.setGroupProperty(PropertyInterface("Inner Roundness", g))), Object.defineProperties(c, {
              position: {
                get: ExpressionPropertyInterface(y.p)
              },
              rotation: {
                get: ExpressionPropertyInterface(y.r)
              },
              points: {
                get: ExpressionPropertyInterface(y.pt)
              },
              outerRadius: {
                get: ExpressionPropertyInterface(y.or)
              },
              outerRoundness: {
                get: ExpressionPropertyInterface(y.os)
              },
              innerRadius: {
                get: ExpressionPropertyInterface(y.ir)
              },
              innerRoundness: {
                get: ExpressionPropertyInterface(y.is)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function u(d, f, m) {
            function c(b) {
              return d.p.ix === b ? c.position : d.r.ix === b ? c.roundness : d.s.ix === b || b === "Size" || b === "ADBE Vector Rect Size" ? c.size : null
            }
            var g = propertyGroupFactory(c, m),
              y = f.sh.ty === "tm" ? f.sh.prop : f.sh;
            return c.propertyIndex = d.ix, y.p.setGroupProperty(PropertyInterface("Position", g)), y.s.setGroupProperty(PropertyInterface("Size", g)), y.r.setGroupProperty(PropertyInterface("Rotation", g)), Object.defineProperties(c, {
              position: {
                get: ExpressionPropertyInterface(y.p)
              },
              roundness: {
                get: ExpressionPropertyInterface(y.r)
              },
              size: {
                get: ExpressionPropertyInterface(y.s)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function h(d, f, m) {
            function c(b) {
              return d.r.ix === b || b === "Round Corners 1" ? c.radius : null
            }
            var g = propertyGroupFactory(c, m),
              y = f;
            return c.propertyIndex = d.ix, y.rd.setGroupProperty(PropertyInterface("Radius", g)), Object.defineProperties(c, {
              radius: {
                get: ExpressionPropertyInterface(y.rd)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }

          function v(d, f, m) {
            function c(b) {
              return d.c.ix === b || b === "Copies" ? c.copies : d.o.ix === b || b === "Offset" ? c.offset : null
            }
            var g = propertyGroupFactory(c, m),
              y = f;
            return c.propertyIndex = d.ix, y.c.setGroupProperty(PropertyInterface("Copies", g)), y.o.setGroupProperty(PropertyInterface("Offset", g)), Object.defineProperties(c, {
              copies: {
                get: ExpressionPropertyInterface(y.c)
              },
              offset: {
                get: ExpressionPropertyInterface(y.o)
              },
              _name: {
                value: d.nm
              }
            }), c.mn = d.mn, c
          }
          return function (d, f, m) {
            var c;

            function g(y) {
              if (typeof y == "number") return (y = y === void 0 ? 1 : y) === 0 ? m : c[y - 1];
              for (var b = 0, _ = c.length; b < _;) {
                if (c[b]._name === y) return c[b];
                b += 1
              }
              return null
            }
            return g.propertyGroup = propertyGroupFactory(g, function () {
              return m
            }), c = e(d, f, g.propertyGroup), g.numProperties = c.length, g._name = "Contents", g
          }
        }(),
        TextExpressionInterface = function (e) {
          var t;

          function r(i) {
            return i === "ADBE Text Document" ? r.sourceText : null
          }
          return Object.defineProperty(r, "sourceText", {
            get: function () {
              e.textProperty.getValue();
              var i = e.textProperty.currentData.t;
              return t && i === t.value || ((t = new String(i)).value = i || new String(i), Object.defineProperty(t, "style", {
                get: function () {
                  return {
                    fillColor: e.textProperty.currentData.fc
                  }
                }
              })), t
            }
          }), r
        };

      function _typeof(e) {
        return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof(e)
      }
      var FootageInterface = (dataInterfaceFactory = function (e) {
          function t(r) {
            return r === "Outline" ? t.outlineInterface() : null
          }
          return t._name = "Outline", t.outlineInterface = function (r) {
            var i = "",
              n = r.getFootageData();

            function a(s) {
              if (n[s]) return i = s, _typeof(n = n[s]) === "object" ? a : n;
              var o = s.indexOf(i);
              if (o !== -1) {
                var l = parseInt(s.substr(o + i.length), 10);
                return _typeof(n = n[l]) === "object" ? a : n
              }
              return ""
            }
            return function () {
              return i = "", n = r.getFootageData(), a
            }
          }(e), t
        }, function (e) {
          function t(r) {
            return r === "Data" ? t.dataInterface : null
          }
          return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
        }),
        dataInterfaceFactory, interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface
        };

      function getInterface(e) {
        return interfaces[e] || null
      }
      var expressionHelpers = {
        searchExpressions: function (e, t, r) {
          t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
        },
        getSpeedAtTime: function (e) {
          var t = this.getValueAtTime(e),
            r = this.getValueAtTime(e + -.01),
            i = 0;
          if (t.length) {
            var n;
            for (n = 0; n < t.length; n += 1) i += Math.pow(r[n] - t[n], 2);
            i = 100 * Math.sqrt(i)
          } else i = 0;
          return i
        },
        getVelocityAtTime: function (e) {
          if (this.vel !== void 0) return this.vel;
          var t, r, i = -.001,
            n = this.getValueAtTime(e),
            a = this.getValueAtTime(e + i);
          if (n.length)
            for (t = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) t[r] = (a[r] - n[r]) / i;
          else t = (a - n) / i;
          return t
        },
        getValueAtTime: function (e) {
          return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
        },
        getStaticValueAtTime: function () {
          return this.pv
        },
        setGroupProperty: function (e) {
          this.propertyGroup = e
        }
      };

      function addPropertyDecorator() {
        function e(h, v, d) {
          if (!this.k || !this.keyframes) return this.pv;
          h = h ? h.toLowerCase() : "";
          var f, m, c, g, y, b = this.comp.renderedFrame,
            _ = this.keyframes,
            S = _[_.length - 1].t;
          if (b <= S) return this.pv;
          if (d ? m = S - (f = v ? Math.abs(S - this.elem.comp.globalData.frameRate * v) : Math.max(0, S - this.elem.data.ip)) : ((!v || v > _.length - 1) && (v = _.length - 1), f = S - (m = _[_.length - 1 - v].t)), h === "pingpong") {
            if (Math.floor((b - m) / f) % 2 != 0) return this.getValueAtTime((f - (b - m) % f + m) / this.comp.globalData.frameRate, 0)
          } else {
            if (h === "offset") {
              var I = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
                x = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
                P = this.getValueAtTime(((b - m) % f + m) / this.comp.globalData.frameRate, 0),
                L = Math.floor((b - m) / f);
              if (this.pv.length) {
                for (g = (y = new Array(I.length)).length, c = 0; c < g; c += 1) y[c] = (x[c] - I[c]) * L + P[c];
                return y
              }
              return (x - I) * L + P
            }
            if (h === "continue") {
              var D = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
                O = this.getValueAtTime((S - .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (g = (y = new Array(D.length)).length, c = 0; c < g; c += 1) y[c] = D[c] + (D[c] - O[c]) * ((b - S) / this.comp.globalData.frameRate) / 5e-4;
                return y
              }
              return D + (b - S) / .001 * (D - O)
            }
          }
          return this.getValueAtTime(((b - m) % f + m) / this.comp.globalData.frameRate, 0)
        }

        function t(h, v, d) {
          if (!this.k) return this.pv;
          h = h ? h.toLowerCase() : "";
          var f, m, c, g, y, b = this.comp.renderedFrame,
            _ = this.keyframes,
            S = _[0].t;
          if (b >= S) return this.pv;
          if (d ? m = S + (f = v ? Math.abs(this.elem.comp.globalData.frameRate * v) : Math.max(0, this.elem.data.op - S)) : ((!v || v > _.length - 1) && (v = _.length - 1), f = (m = _[v].t) - S), h === "pingpong") {
            if (Math.floor((S - b) / f) % 2 == 0) return this.getValueAtTime(((S - b) % f + S) / this.comp.globalData.frameRate, 0)
          } else {
            if (h === "offset") {
              var I = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
                x = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
                P = this.getValueAtTime((f - (S - b) % f + S) / this.comp.globalData.frameRate, 0),
                L = Math.floor((S - b) / f) + 1;
              if (this.pv.length) {
                for (g = (y = new Array(I.length)).length, c = 0; c < g; c += 1) y[c] = P[c] - (x[c] - I[c]) * L;
                return y
              }
              return P - (x - I) * L
            }
            if (h === "continue") {
              var D = this.getValueAtTime(S / this.comp.globalData.frameRate, 0),
                O = this.getValueAtTime((S + .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (g = (y = new Array(D.length)).length, c = 0; c < g; c += 1) y[c] = D[c] + (D[c] - O[c]) * (S - b) / .001;
                return y
              }
              return D + (D - O) * (S - b) / .001
            }
          }
          return this.getValueAtTime((f - ((S - b) % f + S)) / this.comp.globalData.frameRate, 0)
        }

        function r(h, v) {
          if (!this.k) return this.pv;
          if (h = .5 * (h || .4), (v = Math.floor(v || 5)) <= 1) return this.pv;
          var d, f, m = this.comp.renderedFrame / this.comp.globalData.frameRate,
            c = m - h,
            g = v > 1 ? (m + h - c) / (v - 1) : 1,
            y = 0,
            b = 0;
          for (d = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; y < v;) {
            if (f = this.getValueAtTime(c + y * g), this.pv.length)
              for (b = 0; b < this.pv.length; b += 1) d[b] += f[b];
            else d += f;
            y += 1
          }
          if (this.pv.length)
            for (b = 0; b < this.pv.length; b += 1) d[b] /= v;
          else d /= v;
          return d
        }

        function i(h) {
          this._transformCachingAtTime || (this._transformCachingAtTime = {
            v: new Matrix
          });
          var v = this._transformCachingAtTime.v;
          if (v.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
            var d = this.a.getValueAtTime(h);
            v.translate(-d[0] * this.a.mult, -d[1] * this.a.mult, d[2] * this.a.mult)
          }
          if (this.appliedTransformations < 2) {
            var f = this.s.getValueAtTime(h);
            v.scale(f[0] * this.s.mult, f[1] * this.s.mult, f[2] * this.s.mult)
          }
          if (this.sk && this.appliedTransformations < 3) {
            var m = this.sk.getValueAtTime(h),
              c = this.sa.getValueAtTime(h);
            v.skewFromAxis(-m * this.sk.mult, c * this.sa.mult)
          }
          if (this.r && this.appliedTransformations < 4) {
            var g = this.r.getValueAtTime(h);
            v.rotate(-g * this.r.mult)
          } else if (!this.r && this.appliedTransformations < 4) {
            var y = this.rz.getValueAtTime(h),
              b = this.ry.getValueAtTime(h),
              _ = this.rx.getValueAtTime(h),
              S = this.or.getValueAtTime(h);
            v.rotateZ(-y * this.rz.mult).rotateY(b * this.ry.mult).rotateX(_ * this.rx.mult).rotateZ(-S[2] * this.or.mult).rotateY(S[1] * this.or.mult).rotateX(S[0] * this.or.mult)
          }
          if (this.data.p && this.data.p.s) {
            var I = this.px.getValueAtTime(h),
              x = this.py.getValueAtTime(h);
            if (this.data.p.z) {
              var P = this.pz.getValueAtTime(h);
              v.translate(I * this.px.mult, x * this.py.mult, -P * this.pz.mult)
            } else v.translate(I * this.px.mult, x * this.py.mult, 0)
          } else {
            var L = this.p.getValueAtTime(h);
            v.translate(L[0] * this.p.mult, L[1] * this.p.mult, -L[2] * this.p.mult)
          }
          return v
        }

        function n() {
          return this.v.clone(new Matrix)
        }
        var a = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (h, v, d) {
          var f = a(h, v, d);
          return f.dynamicProperties.length ? f.getValueAtTime = i.bind(f) : f.getValueAtTime = n.bind(f), f.setGroupProperty = expressionHelpers.setGroupProperty, f
        };
        var s = PropertyFactory.getProp;
        PropertyFactory.getProp = function (h, v, d, f, m) {
          var c = s(h, v, d, f, m);
          c.kf ? c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c) : c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c.loopOut = e, c.loopIn = t, c.smooth = r, c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c), c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c), c.numKeys = v.a === 1 ? v.k.length : 0, c.propertyIndex = v.ix;
          var g = 0;
          return d !== 0 && (g = createTypedArray("float32", v.a === 1 ? v.k[0].s.length : v.k.length)), c._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: g
          }, expressionHelpers.searchExpressions(h, v, c), c.k && m.addDynamicProperty(c), c
        };
        var o = ShapePropertyFactory.getConstructorFunction(),
          l = ShapePropertyFactory.getKeyframedConstructorFunction();

        function p() {}
        p.prototype = {
          vertices: function (h, v) {
            this.k && this.getValue();
            var d, f = this.v;
            v !== void 0 && (f = this.getValueAtTime(v, 0));
            var m = f._length,
              c = f[h],
              g = f.v,
              y = createSizedArray(m);
            for (d = 0; d < m; d += 1) y[d] = h === "i" || h === "o" ? [c[d][0] - g[d][0], c[d][1] - g[d][1]] : [c[d][0], c[d][1]];
            return y
          },
          points: function (h) {
            return this.vertices("v", h)
          },
          inTangents: function (h) {
            return this.vertices("i", h)
          },
          outTangents: function (h) {
            return this.vertices("o", h)
          },
          isClosed: function () {
            return this.v.c
          },
          pointOnPath: function (h, v) {
            var d = this.v;
            v !== void 0 && (d = this.getValueAtTime(v, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
            for (var f, m = this._segmentsLength, c = m.lengths, g = m.totalLength * h, y = 0, b = c.length, _ = 0; y < b;) {
              if (_ + c[y].addedLength > g) {
                var S = y,
                  I = d.c && y === b - 1 ? 0 : y + 1,
                  x = (g - _) / c[y].addedLength;
                f = bez.getPointInSegment(d.v[S], d.v[I], d.o[S], d.i[I], x, c[y]);
                break
              }
              _ += c[y].addedLength, y += 1
            }
            return f || (f = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), f
          },
          vectorOnPath: function (h, v, d) {
            h == 1 ? h = this.v.c : h == 0 && (h = .999);
            var f = this.pointOnPath(h, v),
              m = this.pointOnPath(h + .001, v),
              c = m[0] - f[0],
              g = m[1] - f[1],
              y = Math.sqrt(Math.pow(c, 2) + Math.pow(g, 2));
            return y === 0 ? [0, 0] : d === "tangent" ? [c / y, g / y] : [-g / y, c / y]
          },
          tangentOnPath: function (h, v) {
            return this.vectorOnPath(h, v, "tangent")
          },
          normalOnPath: function (h, v) {
            return this.vectorOnPath(h, v, "normal")
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime
        }, extendPrototype([p], o), extendPrototype([p], l), l.prototype.getValueAtTime = function (h) {
          return this._cachingAtTime || (this._cachingAtTime = {
            shapeValue: shapePool.clone(this.pv),
            lastIndex: 0,
            lastTime: initialDefaultFrame
          }), h *= this.elem.globalData.frameRate, (h -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < h ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = h, this.interpolateShape(h, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
        }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var u = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (h, v, d, f, m) {
          var c = u(h, v, d, f, m);
          return c.propertyIndex = v.ix, c.lock = !1, d === 3 ? expressionHelpers.searchExpressions(h, v.pt, c) : d === 4 && expressionHelpers.searchExpressions(h, v.ks, c), c.k && h.addDynamicProperty(c), c
        }
      }

      function initialize$1() {
        addPropertyDecorator()
      }

      function addDecorator() {
        TextProperty.prototype.getExpressionValue = function (e, t) {
          var r = this.calculateExpression(t);
          if (e.t !== r) {
            var i = {};
            return this.copyData(i, e), i.t = r.toString(), i.__complete = !1, i
          }
          return e
        }, TextProperty.prototype.searchProperty = function () {
          var e = this.searchKeyframes(),
            t = this.searchExpressions();
          return this.kf = e || t, this.kf
        }, TextProperty.prototype.searchExpressions = function () {
          return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
        }
      }

      function initialize() {
        addDecorator()
      }

      function SVGComposableEffect() {}
      SVGComposableEffect.prototype = {
        createMergeNode: function (e, t) {
          var r, i, n = createNS("feMerge");
          for (n.setAttribute("result", e), i = 0; i < t.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", t[i]), n.appendChild(r), n.appendChild(r);
          return n
        }
      };
      var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

      function SVGTintFilter(e, t, r, i, n) {
        this.filterManager = t;
        var a = createNS("feColorMatrix");
        a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
        var s = this.createMergeNode(i, [n, i + "_tint_1", i + "_tint_2"]);
        e.appendChild(s)
      }

      function SVGFillFilter(e, t, r, i) {
        this.filterManager = t;
        var n = createNS("feColorMatrix");
        n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", i), e.appendChild(n), this.matrixFilter = n
      }

      function SVGStrokeEffect(e, t, r) {
        this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
      }

      function SVGTritoneFilter(e, t, r, i) {
        this.filterManager = t;
        var n = createNS("feColorMatrix");
        n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(n);
        var a = createNS("feComponentTransfer");
        a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
        var s = createNS("feFuncR");
        s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
        var o = createNS("feFuncG");
        o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
        var l = createNS("feFuncB");
        l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
      }

      function SVGProLevelsFilter(e, t, r, i) {
        this.filterManager = t;
        var n = this.filterManager.effectElements,
          a = createNS("feComponentTransfer");
        (n[10].p.k || n[10].p.v !== 0 || n[11].p.k || n[11].p.v !== 1 || n[12].p.k || n[12].p.v !== 1 || n[13].p.k || n[13].p.v !== 0 || n[14].p.k || n[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (n[17].p.k || n[17].p.v !== 0 || n[18].p.k || n[18].p.v !== 1 || n[19].p.k || n[19].p.v !== 1 || n[20].p.k || n[20].p.v !== 0 || n[21].p.k || n[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (n[24].p.k || n[24].p.v !== 0 || n[25].p.k || n[25].p.v !== 1 || n[26].p.k || n[26].p.v !== 1 || n[27].p.k || n[27].p.v !== 0 || n[28].p.k || n[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (n[31].p.k || n[31].p.v !== 0 || n[32].p.k || n[32].p.v !== 1 || n[33].p.k || n[33].p.v !== 1 || n[34].p.k || n[34].p.v !== 0 || n[35].p.k || n[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (n[3].p.k || n[3].p.v !== 0 || n[4].p.k || n[4].p.v !== 1 || n[5].p.k || n[5].p.v !== 1 || n[6].p.k || n[6].p.v !== 0 || n[7].p.k || n[7].p.v !== 1) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
      }

      function SVGDropShadowEffect(e, t, r, i, n) {
        var a = t.container.globalData.renderConfig.filterSize,
          s = t.data.fs || a;
        e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
        var o = createNS("feGaussianBlur");
        o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
        var l = createNS("feOffset");
        l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", i + "_drop_shadow_1"), l.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
        var p = createNS("feFlood");
        p.setAttribute("flood-color", "#00ff00"), p.setAttribute("flood-opacity", "1"), p.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = p, e.appendChild(p);
        var u = createNS("feComposite");
        u.setAttribute("in", i + "_drop_shadow_3"), u.setAttribute("in2", i + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", i + "_drop_shadow_4"), e.appendChild(u);
        var h = this.createMergeNode(i, [i + "_drop_shadow_4", n]);
        e.appendChild(h)
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v / 100;
          this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
        }
      }, SVGFillFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[2].p.v,
            r = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
        }
      }, SVGStrokeEffect.prototype.initialize = function () {
        var e, t, r, i, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (this.filterManager.effectElements[1].p.v === 1 ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < i; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
          p: e,
          m: r
        });
        if (this.filterManager.effectElements[10].p.v === 3) {
          var a = createNS("mask"),
            s = createElementID();
          a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
          var o = createNS("g");
          for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); n[0];) o.appendChild(n[0]);
          this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
          if (this.filterManager.effectElements[10].p.v === 2)
            for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
          this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
        }
        this.initialized = !0, this.pathMasker = t
      }, SVGStrokeEffect.prototype.renderFrame = function (e) {
        var t;
        this.initialized || this.initialize();
        var r, i, n = this.paths.length;
        for (t = 0; t < n; t += 1)
          if (this.paths[t].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[t].m], i = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
            var a;
            if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
              var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                l = i.getTotalLength();
              a = "0 0 0 " + l * s + " ";
              var p, u = l * (o - s),
                h = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                v = Math.floor(u / h);
              for (p = 0; p < v; p += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
              a += "0 " + 10 * l + " 0 0"
            } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
            i.setAttribute("stroke-dasharray", a)
          } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
          var d = this.filterManager.effectElements[3].p.v;
          this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
        }
      }, SVGTritoneFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            i = this.filterManager.effectElements[2].p.v,
            n = i[0] + " " + r[0] + " " + t[0],
            a = i[1] + " " + r[1] + " " + t[1],
            s = i[2] + " " + r[2] + " " + t[2];
          this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
        }
      }, SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
        var r = createNS(e);
        return r.setAttribute("type", "table"), t.appendChild(r), r
      }, SVGProLevelsFilter.prototype.getTableValue = function (e, t, r, i, n) {
        for (var a, s, o = 0, l = Math.min(e, t), p = Math.max(e, t), u = Array.call(null, {
            length: 256
          }), h = 0, v = n - i, d = t - e; o <= 256;) s = (a = o / 256) <= l ? d < 0 ? n : i : a >= p ? d < 0 ? i : n : i + v * Math.pow((a - e) / d, 1 / r), u[h] = s, h += 1, o += 256 / 255;
        return u.join(" ")
      }, SVGProLevelsFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t, r = this.filterManager.effectElements;
          this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
        }
      }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
            var t = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
          }
          if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
            var r = this.filterManager.effectElements[3].p.v,
              i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
              n = r * Math.cos(i),
              a = r * Math.sin(i);
            this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", a)
          }
        }
      };
      var _svgMatteSymbols = [];

      function SVGMatte3Effect(e, t, r) {
        this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
      }

      function SVGGaussianBlurEffect(e, t, r, i) {
        e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
        var n = createNS("feGaussianBlur");
        n.setAttribute("result", i), e.appendChild(n), this.feGaussianBlur = n
      }

      function TransformEffect() {}

      function SVGTransformEffect(e, t) {
        this.init(t)
      }

      function CVTransformEffect(e) {
        this.init(e)
      }
      return SVGMatte3Effect.prototype.findSymbol = function (e) {
        for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
          if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
          t += 1
        }
        return null
      }, SVGMatte3Effect.prototype.replaceInParent = function (e, t) {
        var r = e.layerElement.parentNode;
        if (r) {
          for (var i, n = r.children, a = 0, s = n.length; a < s && n[a] !== e.layerElement;) a += 1;
          a <= s - 2 && (i = n[a + 1]);
          var o = createNS("use");
          o.setAttribute("href", "#" + t), i ? r.insertBefore(o, i) : r.appendChild(o)
        }
      }, SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
        if (!this.findSymbol(t)) {
          var r = createElementID(),
            i = createNS("mask");
          i.setAttribute("id", t.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
          var n = e.globalData.defs;
          n.appendChild(i);
          var a = createNS("symbol");
          a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), n.appendChild(a);
          var s = createNS("use");
          s.setAttribute("href", "#" + r), i.appendChild(s), t.data.hd = !1, t.show()
        }
        e.setMatte(t.layerId)
      }, SVGMatte3Effect.prototype.initialize = function () {
        for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, i = t.length; r < i;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
        this.initialized = !0
      }, SVGMatte3Effect.prototype.renderFrame = function () {
        this.initialized || this.initialize()
      }, SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = .3 * this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            i = r == 3 ? 0 : t,
            n = r == 2 ? 0 : t;
          this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
          var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", a)
        }
      }, TransformEffect.prototype.init = function (e) {
        this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
      }, TransformEffect.prototype.renderFrame = function (e) {
        if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
          var t = this.effectsManager.effectElements,
            r = t[0].p.v,
            i = t[1].p.v,
            n = t[2].p.v === 1,
            a = t[3].p.v,
            s = n ? a : t[4].p.v,
            o = t[5].p.v,
            l = t[6].p.v,
            p = t[7].p.v;
          this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-p * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
        }
      }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
    })
  });
  var Q_ = E((Tle, Y_) => {
    var fU = Ze(),
      xn = $_(),
      pU = K_();
    fU.define("lottie", Y_.exports = function () {
      return {
        lottie: pU,
        createInstance: xn.createInstance,
        cleanupElement: xn.cleanupElement,
        init: xn.init,
        destroy: xn.destroy,
        ready: xn.ready
      }
    })
  });
  var Z_ = E(() => {
    (function () {
      if (typeof window > "u") return;
      let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        t = e ? parseInt(e[1], 10) >= 16 : !1;
      if ("objectFit" in document.documentElement.style && !t) {
        window.objectFitPolyfill = function () {
          return !1
        };
        return
      }
      let i = function (o) {
          let l = window.getComputedStyle(o, null),
            p = l.getPropertyValue("position"),
            u = l.getPropertyValue("overflow"),
            h = l.getPropertyValue("display");
          (!p || p === "static") && (o.style.position = "relative"), u !== "hidden" && (o.style.overflow = "hidden"), (!h || h === "inline") && (o.style.display = "block"), o.clientHeight === 0 && (o.style.height = "100%"), o.className.indexOf("object-fit-polyfill") === -1 && (o.className += " object-fit-polyfill")
        },
        n = function (o) {
          let l = window.getComputedStyle(o, null),
            p = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px"
            };
          for (let u in p) l.getPropertyValue(u) !== p[u] && (o.style[u] = p[u])
        },
        a = function (o) {
          let l = o.parentNode;
          i(l), n(o), o.style.position = "absolute", o.style.height = "100%", o.style.width = "auto", o.clientWidth > l.clientWidth ? (o.style.top = "0", o.style.marginTop = "0", o.style.left = "50%", o.style.marginLeft = o.clientWidth / -2 + "px") : (o.style.width = "100%", o.style.height = "auto", o.style.left = "0", o.style.marginLeft = "0", o.style.top = "50%", o.style.marginTop = o.clientHeight / -2 + "px")
        },
        s = function (o) {
          if (typeof o > "u" || o instanceof Event) o = document.querySelectorAll("[data-object-fit]");
          else if (o && o.nodeName) o = [o];
          else if (typeof o == "object" && o.length && o[0].nodeName) o = o;
          else return !1;
          for (let l = 0; l < o.length; l++) {
            if (!o[l].nodeName) continue;
            let p = o[l].nodeName.toLowerCase();
            if (p === "img") {
              if (t) continue;
              o[l].complete ? a(o[l]) : o[l].addEventListener("load", function () {
                a(this)
              })
            } else p === "video" ? o[l].readyState > 0 ? a(o[l]) : o[l].addEventListener("loadedmetadata", function () {
              a(this)
            }) : a(o[l])
          }
          return !0
        };
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
    })()
  });
  var J_ = E(() => {
    (function () {
      if (typeof window > "u") return;

      function e(i) {
        Webflow.env("design") || ($("video").each(function () {
          i && $(this).prop("autoplay") ? this.play() : this.pause()
        }), $(".w-background-video--control").each(function () {
          i ? r($(this)) : t($(this))
        }))
      }

      function t(i) {
        i.find("> span").each(function (n) {
          $(this).prop("hidden", () => n === 0)
        })
      }

      function r(i) {
        i.find("> span").each(function (n) {
          $(this).prop("hidden", () => n === 1)
        })
      }
      $(document).ready(() => {
        let i = window.matchMedia("(prefers-reduced-motion: reduce)");
        i.addEventListener("change", n => {
          e(!n.matches)
        }), i.matches && e(!1), $("video:not([autoplay])").each(function () {
          $(this).parent().find(".w-background-video--control").each(function () {
            t($(this))
          })
        }), $(document).on("click", ".w-background-video--control", function (n) {
          if (Webflow.env("design")) return;
          let a = $(n.currentTarget),
            s = $(`video#${a.attr("aria-controls")}`).get(0);
          if (s)
            if (s.paused) {
              let o = s.play();
              r(a), o && typeof o.catch == "function" && o.catch(() => {
                t(a)
              })
            } else s.pause(), t(a)
        })
      })
    })()
  });
  var rS = E((Ole, tS) => {
    var eS = Ze();
    eS.define("brand", tS.exports = function (e) {
      var t = {},
        r = document,
        i = e("html"),
        n = e("body"),
        a = ".w-webflow-badge",
        s = window.location,
        o = /PhantomJS/i.test(navigator.userAgent),
        l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        p;
      t.ready = function () {
        var d = i.attr("data-wf-status"),
          f = i.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(f) && s.hostname !== f && (d = !0), d && !o && (p = p || h(), v(), setTimeout(v, 500), e(r).off(l, u).on(l, u))
      };

      function u() {
        var d = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
        e(p).attr("style", d ? "display: none !important;" : "")
      }

      function h() {
        var d = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
          f = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
            marginRight: "8px",
            width: "16px"
          }),
          m = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
        return d.append(f, m), d[0]
      }

      function v() {
        var d = n.children(a),
          f = d.length && d.get(0) === p,
          m = eS.env("editor");
        if (f) {
          m && d.remove();
          return
        }
        d.length && d.remove(), m || n.append(p)
      }
      return t
    })
  });
  var nS = E((Mle, iS) => {
    var zu = Ze();
    zu.define("edit", iS.exports = function (e, t, r) {
      if (r = r || {}, (zu.env("test") || zu.env("frame")) && !r.fixture && !dU()) return {
        exit: 1
      };
      var i = {},
        n = e(window),
        a = e(document.documentElement),
        s = document.location,
        o = "hashchange",
        l, p = r.load || v,
        u = !1;
      try {
        u = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
      } catch {}
      u ? p() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && p() : n.on(o, h).triggerHandler(o);

      function h() {
        l || /\?edit/.test(s.hash) && p()
      }

      function v() {
        l = !0, window.WebflowEditor = !0, n.off(o, h), y(function (_) {
          e.ajax({
            url: g("https://editor-api.webflow.com/api/editor/view"),
            data: {
              siteId: a.attr("data-wf-site")
            },
            xhrFields: {
              withCredentials: !0
            },
            dataType: "json",
            crossDomain: !0,
            success: d(_)
          })
        })
      }

      function d(_) {
        return function (S) {
          if (!S) {
            console.error("Could not load editor data");
            return
          }
          S.thirdPartyCookiesSupported = _, f(c(S.bugReporterScriptPath), function () {
            f(c(S.scriptPath), function () {
              window.WebflowEditor(S)
            })
          })
        }
      }

      function f(_, S) {
        e.ajax({
          type: "GET",
          url: _,
          dataType: "script",
          cache: !0
        }).then(S, m)
      }

      function m(_, S, I) {
        throw console.error("Could not load editor script: " + S), I
      }

      function c(_) {
        return _.indexOf("//") >= 0 ? _ : g("https://editor-api.webflow.com" + _)
      }

      function g(_) {
        return _.replace(/([^:])\/\//g, "$1/")
      }

      function y(_) {
        var S = window.document.createElement("iframe");
        S.src = "https://webflow.com/site/third-party-cookie-check.html", S.style.display = "none", S.sandbox = "allow-scripts allow-same-origin";
        var I = function (x) {
          x.data === "WF_third_party_cookies_unsupported" ? (b(S, I), _(!1)) : x.data === "WF_third_party_cookies_supported" && (b(S, I), _(!0))
        };
        S.onerror = function () {
          b(S, I), _(!1)
        }, window.addEventListener("message", I, !1), window.document.body.appendChild(S)
      }

      function b(_, S) {
        window.removeEventListener("message", S, !1), _.remove()
      }
      return i
    });

    function dU() {
      try {
        return window.top.__Cypress__
      } catch {
        return !1
      }
    }
  });
  var sS = E((Rle, aS) => {
    var mU = Ze();
    mU.define("focus-visible", aS.exports = function () {
      function e(r) {
        var i = !0,
          n = !1,
          a = null,
          s = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
          };

        function o(b) {
          return !!(b && b !== document && b.nodeName !== "HTML" && b.nodeName !== "BODY" && "classList" in b && "contains" in b.classList)
        }

        function l(b) {
          var _ = b.type,
            S = b.tagName;
          return !!(S === "INPUT" && s[_] && !b.readOnly || S === "TEXTAREA" && !b.readOnly || b.isContentEditable)
        }

        function p(b) {
          b.getAttribute("data-wf-focus-visible") || b.setAttribute("data-wf-focus-visible", "true")
        }

        function u(b) {
          b.getAttribute("data-wf-focus-visible") && b.removeAttribute("data-wf-focus-visible")
        }

        function h(b) {
          b.metaKey || b.altKey || b.ctrlKey || (o(r.activeElement) && p(r.activeElement), i = !0)
        }

        function v() {
          i = !1
        }

        function d(b) {
          o(b.target) && (i || l(b.target)) && p(b.target)
        }

        function f(b) {
          o(b.target) && b.target.hasAttribute("data-wf-focus-visible") && (n = !0, window.clearTimeout(a), a = window.setTimeout(function () {
            n = !1
          }, 100), u(b.target))
        }

        function m() {
          document.visibilityState === "hidden" && (n && (i = !0), c())
        }

        function c() {
          document.addEventListener("mousemove", y), document.addEventListener("mousedown", y), document.addEventListener("mouseup", y), document.addEventListener("pointermove", y), document.addEventListener("pointerdown", y), document.addEventListener("pointerup", y), document.addEventListener("touchmove", y), document.addEventListener("touchstart", y), document.addEventListener("touchend", y)
        }

        function g() {
          document.removeEventListener("mousemove", y), document.removeEventListener("mousedown", y), document.removeEventListener("mouseup", y), document.removeEventListener("pointermove", y), document.removeEventListener("pointerdown", y), document.removeEventListener("pointerup", y), document.removeEventListener("touchmove", y), document.removeEventListener("touchstart", y), document.removeEventListener("touchend", y)
        }

        function y(b) {
          b.target.nodeName && b.target.nodeName.toLowerCase() === "html" || (i = !1, g())
        }
        document.addEventListener("keydown", h, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("visibilitychange", m, !0), c(), r.addEventListener("focus", d, !0), r.addEventListener("blur", f, !0)
      }

      function t() {
        if (typeof document < "u") try {
          document.querySelector(":focus-visible")
        } catch {
          e(document)
        }
      }
      return {
        ready: t
      }
    })
  });
  var uS = E((Dle, lS) => {
    var oS = Ze();
    oS.define("focus", lS.exports = function () {
      var e = [],
        t = !1;

      function r(s) {
        t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
      }

      function i(s) {
        var o = s.target,
          l = o.tagName;
        return /^a$/i.test(l) && o.href != null || /^(button|textarea)$/i.test(l) && o.disabled !== !0 || /^input$/i.test(l) && /^(button|reset|submit|radio|checkbox)$/i.test(o.type) && !o.disabled || !/^(button|input|textarea|select|a)$/i.test(l) && !Number.isNaN(Number.parseFloat(o.tabIndex)) || /^audio$/i.test(l) || /^video$/i.test(l) && o.controls === !0
      }

      function n(s) {
        i(s) && (t = !0, setTimeout(() => {
          for (t = !1, s.target.focus(); e.length > 0;) {
            var o = e.pop();
            o.target.dispatchEvent(new MouseEvent(o.type, o))
          }
        }, 0))
      }

      function a() {
        typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && oS.env.safari && (document.addEventListener("mousedown", n, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
      }
      return {
        ready: a
      }
    })
  });
  var fS = E((Fle, cS) => {
    "use strict";
    var Hu = window.jQuery,
      Bt = {},
      os = [],
      hS = ".w-ix",
      ls = {
        reset: function (e, t) {
          t.__wf_intro = null
        },
        intro: function (e, t) {
          t.__wf_intro || (t.__wf_intro = !0, Hu(t).triggerHandler(Bt.types.INTRO))
        },
        outro: function (e, t) {
          t.__wf_intro && (t.__wf_intro = null, Hu(t).triggerHandler(Bt.types.OUTRO))
        }
      };
    Bt.triggers = {};
    Bt.types = {
      INTRO: "w-ix-intro" + hS,
      OUTRO: "w-ix-outro" + hS
    };
    Bt.init = function () {
      for (var e = os.length, t = 0; t < e; t++) {
        var r = os[t];
        r[0](0, r[1])
      }
      os = [], Hu.extend(Bt.triggers, ls)
    };
    Bt.async = function () {
      for (var e in ls) {
        var t = ls[e];
        ls.hasOwnProperty(e) && (Bt.triggers[e] = function (r, i) {
          os.push([t, i])
        })
      }
    };
    Bt.async();
    cS.exports = Bt
  });
  var hs = E((qle, mS) => {
    "use strict";
    var ju = fS();

    function pS(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
    }
    var vU = window.jQuery,
      us = {},
      dS = ".w-ix",
      gU = {
        reset: function (e, t) {
          ju.triggers.reset(e, t)
        },
        intro: function (e, t) {
          ju.triggers.intro(e, t), pS(t, "COMPONENT_ACTIVE")
        },
        outro: function (e, t) {
          ju.triggers.outro(e, t), pS(t, "COMPONENT_INACTIVE")
        }
      };
    us.triggers = {};
    us.types = {
      INTRO: "w-ix-intro" + dS,
      OUTRO: "w-ix-outro" + dS
    };
    vU.extend(us.triggers, gU);
    mS.exports = us
  });
  var vS = E((Lle, tr) => {
    function Wu(e) {
      return tr.exports = Wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
        return typeof t
      } : function (t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }, tr.exports.__esModule = !0, tr.exports.default = tr.exports, Wu(e)
    }
    tr.exports = Wu, tr.exports.__esModule = !0, tr.exports.default = tr.exports
  });
  var Br = E((kle, In) => {
    var yU = vS().default;

    function gS(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (gS = function (n) {
        return n ? r : t
      })(e)
    }

    function EU(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || yU(e) !== "object" && typeof e != "function") return {
        default: e
      };
      var r = gS(t);
      if (r && r.has(e)) return r.get(e);
      var i = {},
        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
          s && (s.get || s.set) ? Object.defineProperty(i, a, s) : i[a] = e[a]
        } return i.default = e, r && r.set(e, i), i
    }
    In.exports = EU, In.exports.__esModule = !0, In.exports.default = In.exports
  });
  var ES = E((Nle, yS) => {
    var bU = ue(),
      _U = Te();
    yS.exports = function (e, t) {
      return _U(bU[e].prototype[t])
    }
  });
  var _S = E((Ble, bS) => {
    Ol();
    var SU = ES();
    bS.exports = SU("Array", "includes")
  });
  var xS = E((Vle, SS) => {
    var xU = _S();
    SS.exports = xU
  });
  var TS = E((Gle, IS) => {
    var IU = xS();
    IS.exports = IU
  });
  var Uu = E((zle, AS) => {
    var TU = Ao(),
      AU = TU(Object.getPrototypeOf, Object);
    AS.exports = AU
  });
  var Xu = E((Hle, wS) => {
    var PU = ar(),
      wU = Uu(),
      CU = Xt(),
      OU = "[object Object]",
      MU = Function.prototype,
      RU = Object.prototype,
      PS = MU.toString,
      DU = RU.hasOwnProperty,
      FU = PS.call(Object);

    function qU(e) {
      if (!CU(e) || PU(e) != OU) return !1;
      var t = wU(e);
      if (t === null) return !0;
      var r = DU.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && PS.call(r) == FU
    }
    wS.exports = qU
  });
  var CS = E($u => {
    "use strict";
    Object.defineProperty($u, "__esModule", {
      value: !0
    });
    $u.default = LU;

    function LU(e) {
      var t, r = e.Symbol;
      return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
    }
  });
  var OS = E((Yu, Ku) => {
    "use strict";
    Object.defineProperty(Yu, "__esModule", {
      value: !0
    });
    var kU = CS(),
      NU = BU(kU);

    function BU(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var gi;
    typeof self < "u" ? gi = self : typeof window < "u" ? gi = window : typeof global < "u" ? gi = global : typeof Ku < "u" ? gi = Ku : gi = Function("return this")();
    var VU = (0, NU.default)(gi);
    Yu.default = VU
  });
  var Qu = E(Tn => {
    "use strict";
    Tn.__esModule = !0;
    Tn.ActionTypes = void 0;
    Tn.default = FS;
    var GU = Xu(),
      zU = DS(GU),
      HU = OS(),
      MS = DS(HU);

    function DS(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var RS = Tn.ActionTypes = {
      INIT: "@@redux/INIT"
    };

    function FS(e, t, r) {
      var i;
      if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
        if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
        return r(FS)(e, t)
      }
      if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
      var n = e,
        a = t,
        s = [],
        o = s,
        l = !1;

      function p() {
        o === s && (o = s.slice())
      }

      function u() {
        return a
      }

      function h(m) {
        if (typeof m != "function") throw new Error("Expected listener to be a function.");
        var c = !0;
        return p(), o.push(m),
          function () {
            if (c) {
              c = !1, p();
              var y = o.indexOf(m);
              o.splice(y, 1)
            }
          }
      }

      function v(m) {
        if (!(0, zU.default)(m)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (typeof m.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (l) throw new Error("Reducers may not dispatch actions.");
        try {
          l = !0, a = n(a, m)
        } finally {
          l = !1
        }
        for (var c = s = o, g = 0; g < c.length; g++) c[g]();
        return m
      }

      function d(m) {
        if (typeof m != "function") throw new Error("Expected the nextReducer to be a function.");
        n = m, v({
          type: RS.INIT
        })
      }

      function f() {
        var m, c = h;
        return m = {
          subscribe: function (y) {
            if (typeof y != "object") throw new TypeError("Expected the observer to be an object.");

            function b() {
              y.next && y.next(u())
            }
            b();
            var _ = c(b);
            return {
              unsubscribe: _
            }
          }
        }, m[MS.default] = function () {
          return this
        }, m
      }
      return v({
        type: RS.INIT
      }), i = {
        dispatch: v,
        subscribe: h,
        getState: u,
        replaceReducer: d
      }, i[MS.default] = f, i
    }
  });
  var Ju = E(Zu => {
    "use strict";
    Zu.__esModule = !0;
    Zu.default = jU;

    function jU(e) {
      typeof console < "u" && typeof console.error == "function" && console.error(e);
      try {
        throw new Error(e)
      } catch {}
    }
  });
  var kS = E(eh => {
    "use strict";
    eh.__esModule = !0;
    eh.default = KU;
    var qS = Qu(),
      WU = Xu(),
      Xle = LS(WU),
      UU = Ju(),
      $le = LS(UU);

    function LS(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function XU(e, t) {
      var r = t && t.type,
        i = r && '"' + r.toString() + '"' || "an action";
      return "Given action " + i + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function $U(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          i = r(void 0, {
            type: qS.ActionTypes.INIT
          });
        if (typeof i > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
        var n = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, {
            type: n
          }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + qS.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
      })
    }

    function KU(e) {
      for (var t = Object.keys(e), r = {}, i = 0; i < t.length; i++) {
        var n = t[i];
        typeof e[n] == "function" && (r[n] = e[n])
      }
      var a = Object.keys(r);
      if (!1) var s;
      var o;
      try {
        $U(r)
      } catch (l) {
        o = l
      }
      return function () {
        var p = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
          u = arguments[1];
        if (o) throw o;
        if (!1) var h;
        for (var v = !1, d = {}, f = 0; f < a.length; f++) {
          var m = a[f],
            c = r[m],
            g = p[m],
            y = c(g, u);
          if (typeof y > "u") {
            var b = XU(m, u);
            throw new Error(b)
          }
          d[m] = y, v = v || y !== g
        }
        return v ? d : p
      }
    }
  });
  var BS = E(th => {
    "use strict";
    th.__esModule = !0;
    th.default = YU;

    function NS(e, t) {
      return function () {
        return t(e.apply(void 0, arguments))
      }
    }

    function YU(e, t) {
      if (typeof e == "function") return NS(e, t);
      if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      for (var r = Object.keys(e), i = {}, n = 0; n < r.length; n++) {
        var a = r[n],
          s = e[a];
        typeof s == "function" && (i[a] = NS(s, t))
      }
      return i
    }
  });
  var ih = E(rh => {
    "use strict";
    rh.__esModule = !0;
    rh.default = QU;

    function QU() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      if (t.length === 0) return function (a) {
        return a
      };
      if (t.length === 1) return t[0];
      var i = t[t.length - 1],
        n = t.slice(0, -1);
      return function () {
        return n.reduceRight(function (a, s) {
          return s(a)
        }, i.apply(void 0, arguments))
      }
    }
  });
  var VS = E(nh => {
    "use strict";
    nh.__esModule = !0;
    var ZU = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
      }
      return e
    };
    nh.default = rX;
    var JU = ih(),
      eX = tX(JU);

    function tX(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function rX() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return function (i) {
        return function (n, a, s) {
          var o = i(n, a, s),
            l = o.dispatch,
            p = [],
            u = {
              getState: o.getState,
              dispatch: function (v) {
                return l(v)
              }
            };
          return p = t.map(function (h) {
            return h(u)
          }), l = eX.default.apply(void 0, p)(o.dispatch), ZU({}, o, {
            dispatch: l
          })
        }
      }
    }
  });
  var ah = E(yt => {
    "use strict";
    yt.__esModule = !0;
    yt.compose = yt.applyMiddleware = yt.bindActionCreators = yt.combineReducers = yt.createStore = void 0;
    var iX = Qu(),
      nX = yi(iX),
      aX = kS(),
      sX = yi(aX),
      oX = BS(),
      lX = yi(oX),
      uX = VS(),
      hX = yi(uX),
      cX = ih(),
      fX = yi(cX),
      pX = Ju(),
      Jle = yi(pX);

    function yi(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    yt.createStore = nX.default;
    yt.combineReducers = sX.default;
    yt.bindActionCreators = lX.default;
    yt.applyMiddleware = hX.default;
    yt.compose = fX.default
  });
  var GS = E(je => {
    "use strict";
    Object.defineProperty(je, "__esModule", {
      value: !0
    });
    je.QuickEffectIds = je.QuickEffectDirectionConsts = je.EventTypeConsts = je.EventLimitAffectedElements = je.EventContinuousMouseAxes = je.EventBasedOn = je.EventAppliesTo = void 0;
    var dX = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL"
    };
    je.EventTypeConsts = dX;
    var mX = {
      ELEMENT: "ELEMENT",
      CLASS: "CLASS",
      PAGE: "PAGE"
    };
    je.EventAppliesTo = mX;
    var vX = {
      ELEMENT: "ELEMENT",
      VIEWPORT: "VIEWPORT"
    };
    je.EventBasedOn = vX;
    var gX = {
      X_AXIS: "X_AXIS",
      Y_AXIS: "Y_AXIS"
    };
    je.EventContinuousMouseAxes = gX;
    var yX = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    je.EventLimitAffectedElements = yX;
    var EX = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    je.QuickEffectIds = EX;
    var bX = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    };
    je.QuickEffectDirectionConsts = bX
  });
  var sh = E(Ei => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", {
      value: !0
    });
    Ei.ActionTypeConsts = Ei.ActionAppliesTo = void 0;
    var _X = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      OBJECT_VALUE: "OBJECT_VALUE",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      PLUGIN_SPLINE: "PLUGIN_SPLINE",
      PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    Ei.ActionTypeConsts = _X;
    var SX = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    };
    Ei.ActionAppliesTo = SX
  });
  var zS = E(cs => {
    "use strict";
    Object.defineProperty(cs, "__esModule", {
      value: !0
    });
    cs.InteractionTypeConsts = void 0;
    var xX = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION"
    };
    cs.InteractionTypeConsts = xX
  });
  var HS = E(fs => {
    "use strict";
    Object.defineProperty(fs, "__esModule", {
      value: !0
    });
    fs.ReducedMotionTypes = void 0;
    var IX = sh(),
      {
        TRANSFORM_MOVE: TX,
        TRANSFORM_SCALE: AX,
        TRANSFORM_ROTATE: PX,
        TRANSFORM_SKEW: wX,
        STYLE_SIZE: CX,
        STYLE_FILTER: OX,
        STYLE_FONT_VARIATION: MX
      } = IX.ActionTypeConsts,
      RX = {
        [TX]: !0,
        [AX]: !0,
        [PX]: !0,
        [wX]: !0,
        [CX]: !0,
        [OX]: !0,
        [MX]: !0
      };
    fs.ReducedMotionTypes = RX
  });
  var jS = E(pe => {
    "use strict";
    Object.defineProperty(pe, "__esModule", {
      value: !0
    });
    pe.IX2_VIEWPORT_WIDTH_CHANGED = pe.IX2_TEST_FRAME_RENDERED = pe.IX2_STOP_REQUESTED = pe.IX2_SESSION_STOPPED = pe.IX2_SESSION_STARTED = pe.IX2_SESSION_INITIALIZED = pe.IX2_RAW_DATA_IMPORTED = pe.IX2_PREVIEW_REQUESTED = pe.IX2_PLAYBACK_REQUESTED = pe.IX2_PARAMETER_CHANGED = pe.IX2_MEDIA_QUERIES_DEFINED = pe.IX2_INSTANCE_STARTED = pe.IX2_INSTANCE_REMOVED = pe.IX2_INSTANCE_ADDED = pe.IX2_EVENT_STATE_CHANGED = pe.IX2_EVENT_LISTENER_ADDED = pe.IX2_ELEMENT_STATE_CHANGED = pe.IX2_CLEAR_REQUESTED = pe.IX2_ANIMATION_FRAME_CHANGED = pe.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
    var DX = "IX2_RAW_DATA_IMPORTED";
    pe.IX2_RAW_DATA_IMPORTED = DX;
    var FX = "IX2_SESSION_INITIALIZED";
    pe.IX2_SESSION_INITIALIZED = FX;
    var qX = "IX2_SESSION_STARTED";
    pe.IX2_SESSION_STARTED = qX;
    var LX = "IX2_SESSION_STOPPED";
    pe.IX2_SESSION_STOPPED = LX;
    var kX = "IX2_PREVIEW_REQUESTED";
    pe.IX2_PREVIEW_REQUESTED = kX;
    var NX = "IX2_PLAYBACK_REQUESTED";
    pe.IX2_PLAYBACK_REQUESTED = NX;
    var BX = "IX2_STOP_REQUESTED";
    pe.IX2_STOP_REQUESTED = BX;
    var VX = "IX2_CLEAR_REQUESTED";
    pe.IX2_CLEAR_REQUESTED = VX;
    var GX = "IX2_EVENT_LISTENER_ADDED";
    pe.IX2_EVENT_LISTENER_ADDED = GX;
    var zX = "IX2_EVENT_STATE_CHANGED";
    pe.IX2_EVENT_STATE_CHANGED = zX;
    var HX = "IX2_ANIMATION_FRAME_CHANGED";
    pe.IX2_ANIMATION_FRAME_CHANGED = HX;
    var jX = "IX2_PARAMETER_CHANGED";
    pe.IX2_PARAMETER_CHANGED = jX;
    var WX = "IX2_INSTANCE_ADDED";
    pe.IX2_INSTANCE_ADDED = WX;
    var UX = "IX2_INSTANCE_STARTED";
    pe.IX2_INSTANCE_STARTED = UX;
    var XX = "IX2_INSTANCE_REMOVED";
    pe.IX2_INSTANCE_REMOVED = XX;
    var $X = "IX2_ELEMENT_STATE_CHANGED";
    pe.IX2_ELEMENT_STATE_CHANGED = $X;
    var KX = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    pe.IX2_ACTION_LIST_PLAYBACK_CHANGED = KX;
    var YX = "IX2_VIEWPORT_WIDTH_CHANGED";
    pe.IX2_VIEWPORT_WIDTH_CHANGED = YX;
    var QX = "IX2_MEDIA_QUERIES_DEFINED";
    pe.IX2_MEDIA_QUERIES_DEFINED = QX;
    var ZX = "IX2_TEST_FRAME_RENDERED";
    pe.IX2_TEST_FRAME_RENDERED = ZX
  });
  var WS = E(Y => {
    "use strict";
    Object.defineProperty(Y, "__esModule", {
      value: !0
    });
    Y.W_MOD_JS = Y.W_MOD_IX = Y.WILL_CHANGE = Y.WIDTH = Y.WF_PAGE = Y.TRANSLATE_Z = Y.TRANSLATE_Y = Y.TRANSLATE_X = Y.TRANSLATE_3D = Y.TRANSFORM = Y.SKEW_Y = Y.SKEW_X = Y.SKEW = Y.SIBLINGS = Y.SCALE_Z = Y.SCALE_Y = Y.SCALE_X = Y.SCALE_3D = Y.ROTATE_Z = Y.ROTATE_Y = Y.ROTATE_X = Y.RENDER_TRANSFORM = Y.RENDER_STYLE = Y.RENDER_PLUGIN = Y.RENDER_GENERAL = Y.PRESERVE_3D = Y.PLAIN_OBJECT = Y.PARENT = Y.OPACITY = Y.IX2_ID_DELIMITER = Y.IMMEDIATE_CHILDREN = Y.HTML_ELEMENT = Y.HEIGHT = Y.FONT_VARIATION_SETTINGS = Y.FLEX = Y.FILTER = Y.DISPLAY = Y.CONFIG_Z_VALUE = Y.CONFIG_Z_UNIT = Y.CONFIG_Y_VALUE = Y.CONFIG_Y_UNIT = Y.CONFIG_X_VALUE = Y.CONFIG_X_UNIT = Y.CONFIG_VALUE = Y.CONFIG_UNIT = Y.COMMA_DELIMITER = Y.COLOR = Y.COLON_DELIMITER = Y.CHILDREN = Y.BOUNDARY_SELECTOR = Y.BORDER_COLOR = Y.BAR_DELIMITER = Y.BACKGROUND_COLOR = Y.BACKGROUND = Y.AUTO = Y.ABSTRACT_NODE = void 0;
    var JX = "|";
    Y.IX2_ID_DELIMITER = JX;
    var e4 = "data-wf-page";
    Y.WF_PAGE = e4;
    var t4 = "w-mod-js";
    Y.W_MOD_JS = t4;
    var r4 = "w-mod-ix";
    Y.W_MOD_IX = r4;
    var i4 = ".w-dyn-item";
    Y.BOUNDARY_SELECTOR = i4;
    var n4 = "xValue";
    Y.CONFIG_X_VALUE = n4;
    var a4 = "yValue";
    Y.CONFIG_Y_VALUE = a4;
    var s4 = "zValue";
    Y.CONFIG_Z_VALUE = s4;
    var o4 = "value";
    Y.CONFIG_VALUE = o4;
    var l4 = "xUnit";
    Y.CONFIG_X_UNIT = l4;
    var u4 = "yUnit";
    Y.CONFIG_Y_UNIT = u4;
    var h4 = "zUnit";
    Y.CONFIG_Z_UNIT = h4;
    var c4 = "unit";
    Y.CONFIG_UNIT = c4;
    var f4 = "transform";
    Y.TRANSFORM = f4;
    var p4 = "translateX";
    Y.TRANSLATE_X = p4;
    var d4 = "translateY";
    Y.TRANSLATE_Y = d4;
    var m4 = "translateZ";
    Y.TRANSLATE_Z = m4;
    var v4 = "translate3d";
    Y.TRANSLATE_3D = v4;
    var g4 = "scaleX";
    Y.SCALE_X = g4;
    var y4 = "scaleY";
    Y.SCALE_Y = y4;
    var E4 = "scaleZ";
    Y.SCALE_Z = E4;
    var b4 = "scale3d";
    Y.SCALE_3D = b4;
    var _4 = "rotateX";
    Y.ROTATE_X = _4;
    var S4 = "rotateY";
    Y.ROTATE_Y = S4;
    var x4 = "rotateZ";
    Y.ROTATE_Z = x4;
    var I4 = "skew";
    Y.SKEW = I4;
    var T4 = "skewX";
    Y.SKEW_X = T4;
    var A4 = "skewY";
    Y.SKEW_Y = A4;
    var P4 = "opacity";
    Y.OPACITY = P4;
    var w4 = "filter";
    Y.FILTER = w4;
    var C4 = "font-variation-settings";
    Y.FONT_VARIATION_SETTINGS = C4;
    var O4 = "width";
    Y.WIDTH = O4;
    var M4 = "height";
    Y.HEIGHT = M4;
    var R4 = "backgroundColor";
    Y.BACKGROUND_COLOR = R4;
    var D4 = "background";
    Y.BACKGROUND = D4;
    var F4 = "borderColor";
    Y.BORDER_COLOR = F4;
    var q4 = "color";
    Y.COLOR = q4;
    var L4 = "display";
    Y.DISPLAY = L4;
    var k4 = "flex";
    Y.FLEX = k4;
    var N4 = "willChange";
    Y.WILL_CHANGE = N4;
    var B4 = "AUTO";
    Y.AUTO = B4;
    var V4 = ",";
    Y.COMMA_DELIMITER = V4;
    var G4 = ":";
    Y.COLON_DELIMITER = G4;
    var z4 = "|";
    Y.BAR_DELIMITER = z4;
    var H4 = "CHILDREN";
    Y.CHILDREN = H4;
    var j4 = "IMMEDIATE_CHILDREN";
    Y.IMMEDIATE_CHILDREN = j4;
    var W4 = "SIBLINGS";
    Y.SIBLINGS = W4;
    var U4 = "PARENT";
    Y.PARENT = U4;
    var X4 = "preserve-3d";
    Y.PRESERVE_3D = X4;
    var $4 = "HTML_ELEMENT";
    Y.HTML_ELEMENT = $4;
    var K4 = "PLAIN_OBJECT";
    Y.PLAIN_OBJECT = K4;
    var Y4 = "ABSTRACT_NODE";
    Y.ABSTRACT_NODE = Y4;
    var Q4 = "RENDER_TRANSFORM";
    Y.RENDER_TRANSFORM = Q4;
    var Z4 = "RENDER_GENERAL";
    Y.RENDER_GENERAL = Z4;
    var J4 = "RENDER_STYLE";
    Y.RENDER_STYLE = J4;
    var e6 = "RENDER_PLUGIN";
    Y.RENDER_PLUGIN = e6
  });
  var ot = E(Ne => {
    "use strict";
    var US = Br().default;
    Object.defineProperty(Ne, "__esModule", {
      value: !0
    });
    var ps = {
      IX2EngineActionTypes: !0,
      IX2EngineConstants: !0
    };
    Ne.IX2EngineConstants = Ne.IX2EngineActionTypes = void 0;
    var oh = GS();
    Object.keys(oh).forEach(function (e) {
      e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(ps, e) || e in Ne && Ne[e] === oh[e] || Object.defineProperty(Ne, e, {
        enumerable: !0,
        get: function () {
          return oh[e]
        }
      })
    });
    var lh = sh();
    Object.keys(lh).forEach(function (e) {
      e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(ps, e) || e in Ne && Ne[e] === lh[e] || Object.defineProperty(Ne, e, {
        enumerable: !0,
        get: function () {
          return lh[e]
        }
      })
    });
    var uh = zS();
    Object.keys(uh).forEach(function (e) {
      e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(ps, e) || e in Ne && Ne[e] === uh[e] || Object.defineProperty(Ne, e, {
        enumerable: !0,
        get: function () {
          return uh[e]
        }
      })
    });
    var hh = HS();
    Object.keys(hh).forEach(function (e) {
      e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(ps, e) || e in Ne && Ne[e] === hh[e] || Object.defineProperty(Ne, e, {
        enumerable: !0,
        get: function () {
          return hh[e]
        }
      })
    });
    var t6 = US(jS());
    Ne.IX2EngineActionTypes = t6;
    var r6 = US(WS());
    Ne.IX2EngineConstants = r6
  });
  var XS = E(ds => {
    "use strict";
    Object.defineProperty(ds, "__esModule", {
      value: !0
    });
    ds.ixData = void 0;
    var i6 = ot(),
      {
        IX2_RAW_DATA_IMPORTED: n6
      } = i6.IX2EngineActionTypes,
      a6 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case n6:
            return t.payload.ixData || Object.freeze({});
          default:
            return e
        }
      };
    ds.ixData = a6
  });
  var bi = E(De => {
    "use strict";
    Object.defineProperty(De, "__esModule", {
      value: !0
    });
    var s6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e
    } : function (e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    De.clone = vs;
    De.addLast = YS;
    De.addFirst = QS;
    De.removeLast = ZS;
    De.removeFirst = JS;
    De.insert = ex;
    De.removeAt = tx;
    De.replaceAt = rx;
    De.getIn = gs;
    De.set = ys;
    De.setIn = Es;
    De.update = nx;
    De.updateIn = ax;
    De.merge = sx;
    De.mergeDeep = ox;
    De.mergeIn = lx;
    De.omit = ux;
    De.addDefaults = hx;
    var $S = "INVALID_ARGS";

    function KS(e) {
      throw new Error(e)
    }

    function ch(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
    }
    var o6 = {}.hasOwnProperty;

    function vs(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ch(e), r = {}, i = 0; i < t.length; i++) {
        var n = t[i];
        r[n] = e[n]
      }
      return r
    }

    function lt(e, t, r) {
      var i = r;
      i == null && KS($S);
      for (var n = !1, a = arguments.length, s = Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) s[o - 3] = arguments[o];
      for (var l = 0; l < s.length; l++) {
        var p = s[l];
        if (p != null) {
          var u = ch(p);
          if (u.length)
            for (var h = 0; h <= u.length; h++) {
              var v = u[h];
              if (!(e && i[v] !== void 0)) {
                var d = p[v];
                t && ms(i[v]) && ms(d) && (d = lt(e, t, i[v], d)), !(d === void 0 || d === i[v]) && (n || (n = !0, i = vs(i)), i[v] = d)
              }
            }
        }
      }
      return i
    }

    function ms(e) {
      var t = typeof e > "u" ? "undefined" : s6(e);
      return e != null && (t === "object" || t === "function")
    }

    function YS(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t])
    }

    function QS(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e)
    }

    function ZS(e) {
      return e.length ? e.slice(0, e.length - 1) : e
    }

    function JS(e) {
      return e.length ? e.slice(1) : e
    }

    function ex(e, t, r) {
      return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
    }

    function tx(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
    }

    function rx(e, t, r) {
      if (e[t] === r) return e;
      for (var i = e.length, n = Array(i), a = 0; a < i; a++) n[a] = e[a];
      return n[t] = r, n
    }

    function gs(e, t) {
      if (!Array.isArray(t) && KS($S), e != null) {
        for (var r = e, i = 0; i < t.length; i++) {
          var n = t[i];
          if (r = r ? . [n], r === void 0) return r
        }
        return r
      }
    }

    function ys(e, t, r) {
      var i = typeof t == "number" ? [] : {},
        n = e ? ? i;
      if (n[t] === r) return n;
      var a = vs(n);
      return a[t] = r, a
    }

    function ix(e, t, r, i) {
      var n = void 0,
        a = t[i];
      if (i === t.length - 1) n = r;
      else {
        var s = ms(e) && ms(e[a]) ? e[a] : typeof t[i + 1] == "number" ? [] : {};
        n = ix(s, t, r, i + 1)
      }
      return ys(e, a, n)
    }

    function Es(e, t, r) {
      return t.length ? ix(e, t, r, 0) : r
    }

    function nx(e, t, r) {
      var i = e ? . [t],
        n = r(i);
      return ys(e, t, n)
    }

    function ax(e, t, r) {
      var i = gs(e, t),
        n = r(i);
      return Es(e, t, n)
    }

    function sx(e, t, r, i, n, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
      return o.length ? lt.call.apply(lt, [null, !1, !1, e, t, r, i, n, a].concat(o)) : lt(!1, !1, e, t, r, i, n, a)
    }

    function ox(e, t, r, i, n, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
      return o.length ? lt.call.apply(lt, [null, !1, !0, e, t, r, i, n, a].concat(o)) : lt(!1, !0, e, t, r, i, n, a)
    }

    function lx(e, t, r, i, n, a, s) {
      var o = gs(e, t);
      o == null && (o = {});
      for (var l = void 0, p = arguments.length, u = Array(p > 7 ? p - 7 : 0), h = 7; h < p; h++) u[h - 7] = arguments[h];
      return u.length ? l = lt.call.apply(lt, [null, !1, !1, o, r, i, n, a, s].concat(u)) : l = lt(!1, !1, o, r, i, n, a, s), Es(e, t, l)
    }

    function ux(e, t) {
      for (var r = Array.isArray(t) ? t : [t], i = !1, n = 0; n < r.length; n++)
        if (o6.call(e, r[n])) {
          i = !0;
          break
        } if (!i) return e;
      for (var a = {}, s = ch(e), o = 0; o < s.length; o++) {
        var l = s[o];
        r.indexOf(l) >= 0 || (a[l] = e[l])
      }
      return a
    }

    function hx(e, t, r, i, n, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
      return o.length ? lt.call.apply(lt, [null, !0, !1, e, t, r, i, n, a].concat(o)) : lt(!0, !1, e, t, r, i, n, a)
    }
    var l6 = {
      clone: vs,
      addLast: YS,
      addFirst: QS,
      removeLast: ZS,
      removeFirst: JS,
      insert: ex,
      removeAt: tx,
      replaceAt: rx,
      getIn: gs,
      set: ys,
      setIn: Es,
      update: nx,
      updateIn: ax,
      merge: sx,
      mergeDeep: ox,
      mergeIn: lx,
      omit: ux,
      addDefaults: hx
    };
    De.default = l6
  });
  var fx = E(bs => {
    "use strict";
    var u6 = ht().default;
    Object.defineProperty(bs, "__esModule", {
      value: !0
    });
    bs.ixRequest = void 0;
    var h6 = u6(Ar()),
      c6 = ot(),
      f6 = bi(),
      {
        IX2_PREVIEW_REQUESTED: p6,
        IX2_PLAYBACK_REQUESTED: d6,
        IX2_STOP_REQUESTED: m6,
        IX2_CLEAR_REQUESTED: v6
      } = c6.IX2EngineActionTypes,
      g6 = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      },
      cx = Object.create(null, {
        [p6]: {
          value: "preview"
        },
        [d6]: {
          value: "playback"
        },
        [m6]: {
          value: "stop"
        },
        [v6]: {
          value: "clear"
        }
      }),
      y6 = (e = g6, t) => {
        if (t.type in cx) {
          let r = [cx[t.type]];
          return (0, f6.setIn)(e, [r], (0, h6.default)({}, t.payload))
        }
        return e
      };
    bs.ixRequest = y6
  });
  var dx = E(_s => {
    "use strict";
    Object.defineProperty(_s, "__esModule", {
      value: !0
    });
    _s.ixSession = void 0;
    var E6 = ot(),
      Vt = bi(),
      {
        IX2_SESSION_INITIALIZED: b6,
        IX2_SESSION_STARTED: _6,
        IX2_TEST_FRAME_RENDERED: S6,
        IX2_SESSION_STOPPED: x6,
        IX2_EVENT_LISTENER_ADDED: I6,
        IX2_EVENT_STATE_CHANGED: T6,
        IX2_ANIMATION_FRAME_CHANGED: A6,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: P6,
        IX2_VIEWPORT_WIDTH_CHANGED: w6,
        IX2_MEDIA_QUERIES_DEFINED: C6
      } = E6.IX2EngineActionTypes,
      px = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1
      },
      O6 = 20,
      M6 = (e = px, t) => {
        switch (t.type) {
          case b6: {
            let {
              hasBoundaryNodes: r,
              reducedMotion: i
            } = t.payload;
            return (0, Vt.merge)(e, {
              hasBoundaryNodes: r,
              reducedMotion: i
            })
          }
          case _6:
            return (0, Vt.set)(e, "active", !0);
          case S6: {
            let {
              payload: {
                step: r = O6
              }
            } = t;
            return (0, Vt.set)(e, "tick", e.tick + r)
          }
          case x6:
            return px;
          case A6: {
            let {
              payload: {
                now: r
              }
            } = t;
            return (0, Vt.set)(e, "tick", r)
          }
          case I6: {
            let r = (0, Vt.addLast)(e.eventListeners, t.payload);
            return (0, Vt.set)(e, "eventListeners", r)
          }
          case T6: {
            let {
              stateKey: r,
              newState: i
            } = t.payload;
            return (0, Vt.setIn)(e, ["eventState", r], i)
          }
          case P6: {
            let {
              actionListId: r,
              isPlaying: i
            } = t.payload;
            return (0, Vt.setIn)(e, ["playbackState", r], i)
          }
          case w6: {
            let {
              width: r,
              mediaQueries: i
            } = t.payload, n = i.length, a = null;
            for (let s = 0; s < n; s++) {
              let {
                key: o,
                min: l,
                max: p
              } = i[s];
              if (r >= l && r <= p) {
                a = o;
                break
              }
            }
            return (0, Vt.merge)(e, {
              viewportWidth: r,
              mediaQueryKey: a
            })
          }
          case C6:
            return (0, Vt.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e
        }
      };
    _s.ixSession = M6
  });
  var fh = E((fue, mx) => {
    var R6 = or(),
      D6 = Pr(),
      F6 = Wi();

    function q6(e) {
      return function (t, r, i) {
        var n = Object(t);
        if (!D6(t)) {
          var a = R6(r, 3);
          t = F6(t), r = function (o) {
            return a(n[o], o, n)
          }
        }
        var s = e(t, r, i);
        return s > -1 ? n[a ? t[s] : s] : void 0
      }
    }
    mx.exports = q6
  });
  var ph = E((pue, vx) => {
    var L6 = fh(),
      k6 = Go(),
      N6 = L6(k6);
    vx.exports = N6
  });
  var xs = E(rt => {
    "use strict";
    var B6 = ht().default;
    Object.defineProperty(rt, "__esModule", {
      value: !0
    });
    rt.withBrowser = rt.TRANSFORM_STYLE_PREFIXED = rt.TRANSFORM_PREFIXED = rt.IS_BROWSER_ENV = rt.FLEX_PREFIXED = rt.ELEMENT_MATCHES = void 0;
    var V6 = B6(ph()),
      yx = typeof window < "u";
    rt.IS_BROWSER_ENV = yx;
    var Ss = (e, t) => yx ? e() : t;
    rt.withBrowser = Ss;
    var G6 = Ss(() => (0, V6.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
    rt.ELEMENT_MATCHES = G6;
    var z6 = Ss(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let {
          length: i
        } = t;
        for (let n = 0; n < i; n++) {
          let a = t[n];
          if (e.style.display = a, e.style.display === a) return a
        }
        return r
      } catch {
        return r
      }
    }, "flex");
    rt.FLEX_PREFIXED = z6;
    var Ex = Ss(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          {
            length: i
          } = t;
        for (let n = 0; n < i; n++) {
          let a = t[n] + r;
          if (e.style[a] !== void 0) return a
        }
      }
      return "transform"
    }, "transform");
    rt.TRANSFORM_PREFIXED = Ex;
    var gx = Ex.split("transform")[0],
      H6 = gx ? gx + "TransformStyle" : "transformStyle";
    rt.TRANSFORM_STYLE_PREFIXED = H6
  });
  var dh = E((mue, Ix) => {
    var j6 = 4,
      W6 = .001,
      U6 = 1e-7,
      X6 = 10,
      An = 11,
      Is = 1 / (An - 1),
      $6 = typeof Float32Array == "function";

    function bx(e, t) {
      return 1 - 3 * t + 3 * e
    }

    function _x(e, t) {
      return 3 * t - 6 * e
    }

    function Sx(e) {
      return 3 * e
    }

    function Ts(e, t, r) {
      return ((bx(t, r) * e + _x(t, r)) * e + Sx(t)) * e
    }

    function xx(e, t, r) {
      return 3 * bx(t, r) * e * e + 2 * _x(t, r) * e + Sx(t)
    }

    function K6(e, t, r, i, n) {
      var a, s, o = 0;
      do s = t + (r - t) / 2, a = Ts(s, i, n) - e, a > 0 ? r = s : t = s; while (Math.abs(a) > U6 && ++o < X6);
      return s
    }

    function Y6(e, t, r, i) {
      for (var n = 0; n < j6; ++n) {
        var a = xx(t, r, i);
        if (a === 0) return t;
        var s = Ts(t, r, i) - e;
        t -= s / a
      }
      return t
    }
    Ix.exports = function (t, r, i, n) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
      var a = $6 ? new Float32Array(An) : new Array(An);
      if (t !== r || i !== n)
        for (var s = 0; s < An; ++s) a[s] = Ts(s * Is, t, i);

      function o(l) {
        for (var p = 0, u = 1, h = An - 1; u !== h && a[u] <= l; ++u) p += Is;
        --u;
        var v = (l - a[u]) / (a[u + 1] - a[u]),
          d = p + v * Is,
          f = xx(d, t, i);
        return f >= W6 ? Y6(l, d, t, i) : f === 0 ? d : K6(l, p, p + Is, t, i)
      }
      return function (p) {
        return t === r && i === n ? p : p === 0 ? 0 : p === 1 ? 1 : Ts(o(p), r, n)
      }
    }
  });
  var mh = E(fe => {
    "use strict";
    var Q6 = ht().default;
    Object.defineProperty(fe, "__esModule", {
      value: !0
    });
    fe.bounce = D$;
    fe.bouncePast = F$;
    fe.easeOut = fe.easeInOut = fe.easeIn = fe.ease = void 0;
    fe.inBack = I$;
    fe.inCirc = b$;
    fe.inCubic = a$;
    fe.inElastic = P$;
    fe.inExpo = g$;
    fe.inOutBack = A$;
    fe.inOutCirc = S$;
    fe.inOutCubic = o$;
    fe.inOutElastic = C$;
    fe.inOutExpo = E$;
    fe.inOutQuad = n$;
    fe.inOutQuart = h$;
    fe.inOutQuint = p$;
    fe.inOutSine = v$;
    fe.inQuad = r$;
    fe.inQuart = l$;
    fe.inQuint = c$;
    fe.inSine = d$;
    fe.outBack = T$;
    fe.outBounce = x$;
    fe.outCirc = _$;
    fe.outCubic = s$;
    fe.outElastic = w$;
    fe.outExpo = y$;
    fe.outQuad = i$;
    fe.outQuart = u$;
    fe.outQuint = f$;
    fe.outSine = m$;
    fe.swingFrom = M$;
    fe.swingFromTo = O$;
    fe.swingTo = R$;
    var As = Q6(dh()),
      rr = 1.70158,
      Z6 = (0, As.default)(.25, .1, .25, 1);
    fe.ease = Z6;
    var J6 = (0, As.default)(.42, 0, 1, 1);
    fe.easeIn = J6;
    var e$ = (0, As.default)(0, 0, .58, 1);
    fe.easeOut = e$;
    var t$ = (0, As.default)(.42, 0, .58, 1);
    fe.easeInOut = t$;

    function r$(e) {
      return Math.pow(e, 2)
    }

    function i$(e) {
      return -(Math.pow(e - 1, 2) - 1)
    }

    function n$(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function a$(e) {
      return Math.pow(e, 3)
    }

    function s$(e) {
      return Math.pow(e - 1, 3) + 1
    }

    function o$(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function l$(e) {
      return Math.pow(e, 4)
    }

    function u$(e) {
      return -(Math.pow(e - 1, 4) - 1)
    }

    function h$(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function c$(e) {
      return Math.pow(e, 5)
    }

    function f$(e) {
      return Math.pow(e - 1, 5) + 1
    }

    function p$(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function d$(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function m$(e) {
      return Math.sin(e * (Math.PI / 2))
    }

    function v$(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function g$(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function y$(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function E$(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function b$(e) {
      return -(Math.sqrt(1 - e * e) - 1)
    }

    function _$(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function S$(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function x$(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function I$(e) {
      let t = rr;
      return e * e * ((t + 1) * e - t)
    }

    function T$(e) {
      let t = rr;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function A$(e) {
      let t = rr;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function P$(e) {
      let t = rr,
        r = 0,
        i = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), i < 1 ? (i = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function w$(e) {
      let t = rr,
        r = 0,
        i = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), i < 1 ? (i = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function C$(e) {
      let t = rr,
        r = 0,
        i = 1;
      return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), i < 1 ? (i = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / i), e < 1 ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function O$(e) {
      let t = rr;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function M$(e) {
      let t = rr;
      return e * e * ((t + 1) * e - t)
    }

    function R$(e) {
      let t = rr;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function D$(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function F$(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
  });
  var gh = E(Pn => {
    "use strict";
    var q$ = ht().default,
      L$ = Br().default;
    Object.defineProperty(Pn, "__esModule", {
      value: !0
    });
    Pn.applyEasing = B$;
    Pn.createBezierEasing = N$;
    Pn.optimizeFloat = vh;
    var Tx = L$(mh()),
      k$ = q$(dh());

    function vh(e, t = 5, r = 10) {
      let i = Math.pow(r, t),
        n = Number(Math.round(e * i) / i);
      return Math.abs(n) > 1e-4 ? n : 0
    }

    function N$(e) {
      return (0, k$.default)(...e)
    }

    function B$(e, t, r) {
      return t === 0 ? 0 : t === 1 ? 1 : vh(r ? t > 0 ? r(t) : t : t > 0 && e && Tx[e] ? Tx[e](t) : t)
    }
  });
  var Cx = E(_i => {
    "use strict";
    Object.defineProperty(_i, "__esModule", {
      value: !0
    });
    _i.createElementState = wx;
    _i.ixElements = void 0;
    _i.mergeActionState = yh;
    var Ps = bi(),
      Px = ot(),
      {
        HTML_ELEMENT: yue,
        PLAIN_OBJECT: V$,
        ABSTRACT_NODE: Eue,
        CONFIG_X_VALUE: G$,
        CONFIG_Y_VALUE: z$,
        CONFIG_Z_VALUE: H$,
        CONFIG_VALUE: j$,
        CONFIG_X_UNIT: W$,
        CONFIG_Y_UNIT: U$,
        CONFIG_Z_UNIT: X$,
        CONFIG_UNIT: $$
      } = Px.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: K$,
        IX2_INSTANCE_ADDED: Y$,
        IX2_ELEMENT_STATE_CHANGED: Q$
      } = Px.IX2EngineActionTypes,
      Ax = {},
      Z$ = "refState",
      J$ = (e = Ax, t = {}) => {
        switch (t.type) {
          case K$:
            return Ax;
          case Y$: {
            let {
              elementId: r,
              element: i,
              origin: n,
              actionItem: a,
              refType: s
            } = t.payload, {
              actionTypeId: o
            } = a, l = e;
            return (0, Ps.getIn)(l, [r, i]) !== i && (l = wx(l, i, s, r, a)), yh(l, r, o, n, a)
          }
          case Q$: {
            let {
              elementId: r,
              actionTypeId: i,
              current: n,
              actionItem: a
            } = t.payload;
            return yh(e, r, i, n, a)
          }
          default:
            return e
        }
      };
    _i.ixElements = J$;

    function wx(e, t, r, i, n) {
      let a = r === V$ ? (0, Ps.getIn)(n, ["config", "target", "objectId"]) : null;
      return (0, Ps.mergeIn)(e, [i], {
        id: i,
        ref: t,
        refId: a,
        refType: r
      })
    }

    function yh(e, t, r, i, n) {
      let a = tK(n),
        s = [t, Z$, r];
      return (0, Ps.mergeIn)(e, s, i, a)
    }
    var eK = [
      [G$, W$],
      [z$, U$],
      [H$, X$],
      [j$, $$]
    ];

    function tK(e) {
      let {
        config: t
      } = e;
      return eK.reduce((r, i) => {
        let n = i[0],
          a = i[1],
          s = t[n],
          o = t[a];
        return s != null && o != null && (r[a] = o), r
      }, {})
    }
  });
  var Ox = E(We => {
    "use strict";
    Object.defineProperty(We, "__esModule", {
      value: !0
    });
    We.renderPlugin = We.getPluginOrigin = We.getPluginDuration = We.getPluginDestination = We.getPluginConfig = We.createPluginInstance = We.clearPlugin = void 0;
    var rK = e => e.value;
    We.getPluginConfig = rK;
    var iK = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
    };
    We.getPluginDuration = iK;
    var nK = e => e || {
      value: 0
    };
    We.getPluginOrigin = nK;
    var aK = e => ({
      value: e.value
    });
    We.getPluginDestination = aK;
    var sK = e => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t
    };
    We.createPluginInstance = sK;
    var oK = (e, t, r) => {
      if (!e) return;
      let i = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * i)
    };
    We.renderPlugin = oK;
    var lK = e => {
      window.Webflow.require("lottie").createInstance(e).stop()
    };
    We.clearPlugin = lK
  });
  var Rx = E(Ue => {
    "use strict";
    Object.defineProperty(Ue, "__esModule", {
      value: !0
    });
    Ue.renderPlugin = Ue.getPluginOrigin = Ue.getPluginDuration = Ue.getPluginDestination = Ue.getPluginConfig = Ue.createPluginInstance = Ue.clearPlugin = void 0;
    var uK = e => document.querySelector(`[data-w-id="${e}"]`),
      hK = () => window.Webflow.require("spline"),
      cK = (e, t) => e.filter(r => !t.includes(r)),
      fK = (e, t) => e.value[t];
    Ue.getPluginConfig = fK;
    var pK = () => null;
    Ue.getPluginDuration = pK;
    var Mx = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      }),
      dK = (e, t) => {
        let r = t.config.value,
          i = Object.keys(r);
        if (e) {
          let a = Object.keys(e),
            s = cK(i, a);
          return s.length ? s.reduce((l, p) => (l[p] = Mx[p], l), e) : e
        }
        return i.reduce((a, s) => (a[s] = Mx[s], a), {})
      };
    Ue.getPluginOrigin = dK;
    var mK = e => e.value;
    Ue.getPluginDestination = mK;
    var vK = (e, t) => {
      var r, i;
      let n = t == null || (r = t.config) === null || r === void 0 || (i = r.target) === null || i === void 0 ? void 0 : i.pluginElement;
      return n ? uK(n) : null
    };
    Ue.createPluginInstance = vK;
    var gK = (e, t, r) => {
      let i = hK().getInstance(e),
        n = r.config.target.objectId;
      if (!i || !n) return;
      let a = i.spline.findObjectById(n);
      if (!a) return;
      let {
        PLUGIN_SPLINE: s
      } = t;
      s.positionX != null && (a.position.x = s.positionX), s.positionY != null && (a.position.y = s.positionY), s.positionZ != null && (a.position.z = s.positionZ), s.rotationX != null && (a.rotation.x = s.rotationX), s.rotationY != null && (a.rotation.y = s.rotationY), s.rotationZ != null && (a.rotation.z = s.rotationZ), s.scaleX != null && (a.scale.x = s.scaleX), s.scaleY != null && (a.scale.y = s.scaleY), s.scaleZ != null && (a.scale.z = s.scaleZ)
    };
    Ue.renderPlugin = gK;
    var yK = () => null;
    Ue.clearPlugin = yK
  });
  var Fx = E(Ge => {
    "use strict";
    Object.defineProperty(Ge, "__esModule", {
      value: !0
    });
    Ge.getPluginOrigin = Ge.getPluginDuration = Ge.getPluginDestination = Ge.getPluginConfig = Ge.createPluginInstance = Ge.clearPlugin = void 0;
    Ge.normalizeColor = Dx;
    Ge.renderPlugin = void 0;

    function Dx(e) {
      let t, r, i, n = 1,
        a = e.replace(/\s/g, "").toLowerCase();
      if (a.startsWith("#")) {
        let s = a.substring(1);
        s.length === 3 ? (t = parseInt(s[0] + s[0], 16), r = parseInt(s[1] + s[1], 16), i = parseInt(s[2] + s[2], 16)) : s.length === 6 && (t = parseInt(s.substring(0, 2), 16), r = parseInt(s.substring(2, 4), 16), i = parseInt(s.substring(4, 6), 16))
      } else if (a.startsWith("rgba")) {
        let s = a.match(/rgba\(([^)]+)\)/)[1].split(",");
        t = parseInt(s[0], 10), r = parseInt(s[1], 10), i = parseInt(s[2], 10), n = parseFloat(s[3])
      } else if (a.startsWith("rgb")) {
        let s = a.match(/rgb\(([^)]+)\)/)[1].split(",");
        t = parseInt(s[0], 10), r = parseInt(s[1], 10), i = parseInt(s[2], 10)
      } else if (a.startsWith("hsla")) {
        let s = a.match(/hsla\(([^)]+)\)/)[1].split(","),
          o = parseFloat(s[0]),
          l = parseFloat(s[1].replace("%", "")) / 100,
          p = parseFloat(s[2].replace("%", "")) / 100;
        n = parseFloat(s[3]);
        let u = (1 - Math.abs(2 * p - 1)) * l,
          h = u * (1 - Math.abs(o / 60 % 2 - 1)),
          v = p - u / 2,
          d, f, m;
        o >= 0 && o < 60 ? (d = u, f = h, m = 0) : o >= 60 && o < 120 ? (d = h, f = u, m = 0) : o >= 120 && o < 180 ? (d = 0, f = u, m = h) : o >= 180 && o < 240 ? (d = 0, f = h, m = u) : o >= 240 && o < 300 ? (d = h, f = 0, m = u) : (d = u, f = 0, m = h), t = Math.round((d + v) * 255), r = Math.round((f + v) * 255), i = Math.round((m + v) * 255)
      } else if (a.startsWith("hsl")) {
        let s = a.match(/hsl\(([^)]+)\)/)[1].split(","),
          o = parseFloat(s[0]),
          l = parseFloat(s[1].replace("%", "")) / 100,
          p = parseFloat(s[2].replace("%", "")) / 100,
          u = (1 - Math.abs(2 * p - 1)) * l,
          h = u * (1 - Math.abs(o / 60 % 2 - 1)),
          v = p - u / 2,
          d, f, m;
        o >= 0 && o < 60 ? (d = u, f = h, m = 0) : o >= 60 && o < 120 ? (d = h, f = u, m = 0) : o >= 120 && o < 180 ? (d = 0, f = u, m = h) : o >= 180 && o < 240 ? (d = 0, f = h, m = u) : o >= 240 && o < 300 ? (d = h, f = 0, m = u) : (d = u, f = 0, m = h), t = Math.round((d + v) * 255), r = Math.round((f + v) * 255), i = Math.round((m + v) * 255)
      }
      return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(i)) && `${e}`, {
        red: t,
        green: r,
        blue: i,
        alpha: n
      }
    }
    var EK = (e, t) => e.value[t];
    Ge.getPluginConfig = EK;
    var bK = () => null;
    Ge.getPluginDuration = bK;
    var _K = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        i = t.config.target.objectId,
        n = getComputedStyle(document.documentElement).getPropertyValue(i);
      if (r.size != null) return {
        size: parseInt(n, 10)
      };
      if (r.red != null && r.green != null && r.blue != null) return Dx(n)
    };
    Ge.getPluginOrigin = _K;
    var SK = e => e.value;
    Ge.getPluginDestination = SK;
    var xK = () => null;
    Ge.createPluginInstance = xK;
    var IK = (e, t, r) => {
      let i = r.config.target.objectId,
        n = r.config.value.unit,
        {
          PLUGIN_VARIABLE: a
        } = t,
        {
          size: s,
          red: o,
          green: l,
          blue: p,
          alpha: u
        } = a,
        h;
      s != null && (h = s + n), o != null && p != null && l != null && u != null && (h = `rgba(${o}, ${l}, ${p}, ${u})`), h != null && document.documentElement.style.setProperty(i, h)
    };
    Ge.renderPlugin = IK;
    var TK = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r)
    };
    Ge.clearPlugin = TK
  });
  var qx = E(ws => {
    "use strict";
    var _h = Br().default,
      AK = ht().default;
    Object.defineProperty(ws, "__esModule", {
      value: !0
    });
    ws.pluginMethodMap = void 0;
    var Eh = AK(Ar()),
      bh = ot(),
      PK = _h(Ox()),
      wK = _h(Rx()),
      CK = _h(Fx()),
      OK = new Map([
        [bh.ActionTypeConsts.PLUGIN_LOTTIE, (0, Eh.default)({}, PK)],
        [bh.ActionTypeConsts.PLUGIN_SPLINE, (0, Eh.default)({}, wK)],
        [bh.ActionTypeConsts.PLUGIN_VARIABLE, (0, Eh.default)({}, CK)]
      ]);
    ws.pluginMethodMap = OK
  });
  var Sh = E(ze => {
    "use strict";
    Object.defineProperty(ze, "__esModule", {
      value: !0
    });
    ze.getPluginOrigin = ze.getPluginDuration = ze.getPluginDestination = ze.getPluginConfig = ze.createPluginInstance = ze.clearPlugin = void 0;
    ze.isPluginType = RK;
    ze.renderPlugin = void 0;
    var MK = xs(),
      Lx = qx();

    function RK(e) {
      return Lx.pluginMethodMap.has(e)
    }
    var Vr = e => t => {
        if (!MK.IS_BROWSER_ENV) return () => null;
        let r = Lx.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let i = r[e];
        if (!i) throw new Error(`IX2 invalid plugin method: ${e}`);
        return i
      },
      DK = Vr("getPluginConfig");
    ze.getPluginConfig = DK;
    var FK = Vr("getPluginOrigin");
    ze.getPluginOrigin = FK;
    var qK = Vr("getPluginDuration");
    ze.getPluginDuration = qK;
    var LK = Vr("getPluginDestination");
    ze.getPluginDestination = LK;
    var kK = Vr("createPluginInstance");
    ze.createPluginInstance = kK;
    var NK = Vr("renderPlugin");
    ze.renderPlugin = NK;
    var BK = Vr("clearPlugin");
    ze.clearPlugin = BK
  });
  var Nx = E((Aue, kx) => {
    function VK(e, t) {
      return e == null || e !== e ? t : e
    }
    kx.exports = VK
  });
  var Vx = E((Pue, Bx) => {
    function GK(e, t, r, i) {
      var n = -1,
        a = e == null ? 0 : e.length;
      for (i && a && (r = e[++n]); ++n < a;) r = t(r, e[n], n, e);
      return r
    }
    Bx.exports = GK
  });
  var zx = E((wue, Gx) => {
    function zK(e) {
      return function (t, r, i) {
        for (var n = -1, a = Object(t), s = i(t), o = s.length; o--;) {
          var l = s[e ? o : ++n];
          if (r(a[l], l, a) === !1) break
        }
        return t
      }
    }
    Gx.exports = zK
  });
  var jx = E((Cue, Hx) => {
    var HK = zx(),
      jK = HK();
    Hx.exports = jK
  });
  var xh = E((Oue, Wx) => {
    var WK = jx(),
      UK = Wi();

    function XK(e, t) {
      return e && WK(e, t, UK)
    }
    Wx.exports = XK
  });
  var Xx = E((Mue, Ux) => {
    var $K = Pr();

    function KK(e, t) {
      return function (r, i) {
        if (r == null) return r;
        if (!$K(r)) return e(r, i);
        for (var n = r.length, a = t ? n : -1, s = Object(r);
          (t ? a-- : ++a < n) && i(s[a], a, s) !== !1;);
        return r
      }
    }
    Ux.exports = KK
  });
  var Ih = E((Rue, $x) => {
    var YK = xh(),
      QK = Xx(),
      ZK = QK(YK);
    $x.exports = ZK
  });
  var Yx = E((Due, Kx) => {
    function JK(e, t, r, i, n) {
      return n(e, function (a, s, o) {
        r = i ? (i = !1, a) : t(r, a, s, o)
      }), r
    }
    Kx.exports = JK
  });
  var Zx = E((Fue, Qx) => {
    var e8 = Vx(),
      t8 = Ih(),
      r8 = or(),
      i8 = Yx(),
      n8 = He();

    function a8(e, t, r) {
      var i = n8(e) ? e8 : i8,
        n = arguments.length < 3;
      return i(e, r8(t, 4), r, n, t8)
    }
    Qx.exports = a8
  });
  var eI = E((que, Jx) => {
    var s8 = fo(),
      o8 = or(),
      l8 = Vo(),
      u8 = Math.max,
      h8 = Math.min;

    function c8(e, t, r) {
      var i = e == null ? 0 : e.length;
      if (!i) return -1;
      var n = i - 1;
      return r !== void 0 && (n = l8(r), n = r < 0 ? u8(i + n, 0) : h8(n, i - 1)), s8(e, o8(t, 3), n, !0)
    }
    Jx.exports = c8
  });
  var rI = E((Lue, tI) => {
    var f8 = fh(),
      p8 = eI(),
      d8 = f8(p8);
    tI.exports = d8
  });
  var nI = E(Cs => {
    "use strict";
    Object.defineProperty(Cs, "__esModule", {
      value: !0
    });
    Cs.default = void 0;
    var m8 = Object.prototype.hasOwnProperty;

    function iI(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function v8(e, t) {
      if (iI(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      let r = Object.keys(e),
        i = Object.keys(t);
      if (r.length !== i.length) return !1;
      for (let n = 0; n < r.length; n++)
        if (!m8.call(t, r[n]) || !iI(e[r[n]], t[r[n]])) return !1;
      return !0
    }
    var g8 = v8;
    Cs.default = g8
  });
  var xI = E(Se => {
    "use strict";
    var Ds = ht().default;
    Object.defineProperty(Se, "__esModule", {
      value: !0
    });
    Se.cleanupHTMLElement = m9;
    Se.clearAllStyles = d9;
    Se.clearObjectCache = q8;
    Se.getActionListProgress = g9;
    Se.getAffectedElements = Mh;
    Se.getComputedStyle = H8;
    Se.getDestinationValues = Y8;
    Se.getElementId = B8;
    Se.getInstanceId = k8;
    Se.getInstanceOrigin = U8;
    Se.getItemConfigByKey = void 0;
    Se.getMaxDurationItemIndex = SI;
    Se.getNamespacedParameterId = b9;
    Se.getRenderType = EI;
    Se.getStyleProp = Q8;
    Se.mediaQueriesEqual = S9;
    Se.observeStore = z8;
    Se.reduceListToGroup = y9;
    Se.reifyState = V8;
    Se.renderHTMLElement = Z8;
    Object.defineProperty(Se, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return fI.default
      }
    });
    Se.shouldAllowMediaQuery = _9;
    Se.shouldNamespaceEventParameter = E9;
    Se.stringifyTarget = x9;
    var Er = Ds(Nx()),
      Ph = Ds(Zx()),
      Ah = Ds(rI()),
      aI = bi(),
      Gr = ot(),
      fI = Ds(nI()),
      y8 = gh(),
      Ht = Sh(),
      it = xs(),
      {
        BACKGROUND: E8,
        TRANSFORM: b8,
        TRANSLATE_3D: _8,
        SCALE_3D: S8,
        ROTATE_X: x8,
        ROTATE_Y: I8,
        ROTATE_Z: T8,
        SKEW: A8,
        PRESERVE_3D: P8,
        FLEX: w8,
        OPACITY: Ms,
        FILTER: wn,
        FONT_VARIATION_SETTINGS: Cn,
        WIDTH: Gt,
        HEIGHT: zt,
        BACKGROUND_COLOR: pI,
        BORDER_COLOR: C8,
        COLOR: O8,
        CHILDREN: sI,
        IMMEDIATE_CHILDREN: M8,
        SIBLINGS: oI,
        PARENT: R8,
        DISPLAY: Rs,
        WILL_CHANGE: Si,
        AUTO: br,
        COMMA_DELIMITER: On,
        COLON_DELIMITER: D8,
        BAR_DELIMITER: Th,
        RENDER_TRANSFORM: dI,
        RENDER_GENERAL: wh,
        RENDER_STYLE: Ch,
        RENDER_PLUGIN: mI
      } = Gr.IX2EngineConstants,
      {
        TRANSFORM_MOVE: xi,
        TRANSFORM_SCALE: Ii,
        TRANSFORM_ROTATE: Ti,
        TRANSFORM_SKEW: Mn,
        STYLE_OPACITY: vI,
        STYLE_FILTER: Rn,
        STYLE_FONT_VARIATION: Dn,
        STYLE_SIZE: Ai,
        STYLE_BACKGROUND_COLOR: Pi,
        STYLE_BORDER: wi,
        STYLE_TEXT_COLOR: Ci,
        GENERAL_DISPLAY: Fs,
        OBJECT_VALUE: F8
      } = Gr.ActionTypeConsts,
      gI = e => e.trim(),
      Oh = Object.freeze({
        [Pi]: pI,
        [wi]: C8,
        [Ci]: O8
      }),
      yI = Object.freeze({
        [it.TRANSFORM_PREFIXED]: b8,
        [pI]: E8,
        [Ms]: Ms,
        [wn]: wn,
        [Gt]: Gt,
        [zt]: zt,
        [Cn]: Cn
      }),
      Os = new Map;

    function q8() {
      Os.clear()
    }
    var L8 = 1;

    function k8() {
      return "i" + L8++
    }
    var N8 = 1;

    function B8(e, t) {
      for (let r in e) {
        let i = e[r];
        if (i && i.ref === t) return i.id
      }
      return "e" + N8++
    }

    function V8({
      events: e,
      actionLists: t,
      site: r
    } = {}) {
      let i = (0, Ph.default)(e, (s, o) => {
          let {
            eventTypeId: l
          } = o;
          return s[l] || (s[l] = {}), s[l][o.id] = o, s
        }, {}),
        n = r && r.mediaQueries,
        a = [];
      return n ? a = n.map(s => s.key) : (n = [], console.warn("IX2 missing mediaQueries in site data")), {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: i,
          mediaQueries: n,
          mediaQueryKeys: a
        }
      }
    }
    var G8 = (e, t) => e === t;

    function z8({
      store: e,
      select: t,
      onChange: r,
      comparator: i = G8
    }) {
      let {
        getState: n,
        subscribe: a
      } = e, s = a(l), o = t(n());

      function l() {
        let p = t(n());
        if (p == null) {
          s();
          return
        }
        i(p, o) || (o = p, r(o, e))
      }
      return s
    }

    function lI(e) {
      let t = typeof e;
      if (t === "string") return {
        id: e
      };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: i,
          selector: n,
          selectorGuids: a,
          appliesTo: s,
          useEventTarget: o
        } = e;
        return {
          id: r,
          objectId: i,
          selector: n,
          selectorGuids: a,
          appliesTo: s,
          useEventTarget: o
        }
      }
      return {}
    }

    function Mh({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: i,
      elementApi: n
    }) {
      var a, s, o;
      if (!n) throw new Error("IX2 missing elementApi");
      let {
        targets: l
      } = e;
      if (Array.isArray(l) && l.length > 0) return l.reduce((V, W) => V.concat(Mh({
        config: {
          target: W
        },
        event: t,
        eventTarget: r,
        elementRoot: i,
        elementApi: n
      })), []);
      let {
        getValidDocument: p,
        getQuerySelector: u,
        queryDocument: h,
        getChildElements: v,
        getSiblingElements: d,
        matchSelector: f,
        elementContains: m,
        isSiblingNode: c
      } = n, {
        target: g
      } = e;
      if (!g) return [];
      let {
        id: y,
        objectId: b,
        selector: _,
        selectorGuids: S,
        appliesTo: I,
        useEventTarget: x
      } = lI(g);
      if (b) return [Os.has(b) ? Os.get(b) : Os.set(b, {}).get(b)];
      if (I === Gr.EventAppliesTo.PAGE) {
        let V = p(y);
        return V ? [V] : []
      }
      let L = ((a = t == null || (s = t.action) === null || s === void 0 || (o = s.config) === null || o === void 0 ? void 0 : o.affectedElements) !== null && a !== void 0 ? a : {})[y || _] || {},
        D = !!(L.id || L.selector),
        O, B, R, F = t && u(lI(t.target));
      if (D ? (O = L.limitAffectedElements, B = F, R = u(L)) : B = R = u({
          id: y,
          selector: _,
          selectorGuids: S
        }), t && x) {
        let V = r && (R || x === !0) ? [r] : h(F);
        if (R) {
          if (x === R8) return h(R).filter(W => V.some(ee => m(W, ee)));
          if (x === sI) return h(R).filter(W => V.some(ee => m(ee, W)));
          if (x === oI) return h(R).filter(W => V.some(ee => c(ee, W)))
        }
        return V
      }
      return B == null || R == null ? [] : it.IS_BROWSER_ENV && i ? h(R).filter(V => i.contains(V)) : O === sI ? h(B, R) : O === M8 ? v(h(B)).filter(f(R)) : O === oI ? d(h(B)).filter(f(R)) : h(R)
    }

    function H8({
      element: e,
      actionItem: t
    }) {
      if (!it.IS_BROWSER_ENV) return {};
      let {
        actionTypeId: r
      } = t;
      switch (r) {
        case Ai:
        case Pi:
        case wi:
        case Ci:
        case Fs:
          return window.getComputedStyle(e);
        default:
          return {}
      }
    }
    var uI = /px/,
      j8 = (e, t) => t.reduce((r, i) => (r[i.type] == null && (r[i.type] = J8[i.type]), r), e || {}),
      W8 = (e, t) => t.reduce((r, i) => (r[i.type] == null && (r[i.type] = e9[i.type] || i.defaultValue || 0), r), e || {});

    function U8(e, t = {}, r = {}, i, n) {
      let {
        getStyle: a
      } = n, {
        actionTypeId: s
      } = i;
      if ((0, Ht.isPluginType)(s)) return (0, Ht.getPluginOrigin)(s)(t[s], i);
      switch (i.actionTypeId) {
        case xi:
        case Ii:
        case Ti:
        case Mn:
          return t[i.actionTypeId] || Rh[i.actionTypeId];
        case Rn:
          return j8(t[i.actionTypeId], i.config.filters);
        case Dn:
          return W8(t[i.actionTypeId], i.config.fontVariations);
        case vI:
          return {
            value: (0, Er.default)(parseFloat(a(e, Ms)), 1)
          };
        case Ai: {
          let o = a(e, Gt),
            l = a(e, zt),
            p, u;
          return i.config.widthUnit === br ? p = uI.test(o) ? parseFloat(o) : parseFloat(r.width) : p = (0, Er.default)(parseFloat(o), parseFloat(r.width)), i.config.heightUnit === br ? u = uI.test(l) ? parseFloat(l) : parseFloat(r.height) : u = (0, Er.default)(parseFloat(l), parseFloat(r.height)), {
            widthValue: p,
            heightValue: u
          }
        }
        case Pi:
        case wi:
        case Ci:
          return c9({
            element: e,
            actionTypeId: i.actionTypeId,
            computedStyle: r,
            getStyle: a
          });
        case Fs:
          return {
            value: (0, Er.default)(a(e, Rs), r.display)
          };
        case F8:
          return t[i.actionTypeId] || {
            value: 0
          };
        default:
          return
      }
    }
    var X8 = (e, t) => (t && (e[t.type] = t.value || 0), e),
      $8 = (e, t) => (t && (e[t.type] = t.value || 0), e),
      K8 = (e, t, r) => {
        if ((0, Ht.isPluginType)(e)) return (0, Ht.getPluginConfig)(e)(r, t);
        switch (e) {
          case Rn: {
            let i = (0, Ah.default)(r.filters, ({
              type: n
            }) => n === t);
            return i ? i.value : 0
          }
          case Dn: {
            let i = (0, Ah.default)(r.fontVariations, ({
              type: n
            }) => n === t);
            return i ? i.value : 0
          }
          default:
            return r[t]
        }
      };
    Se.getItemConfigByKey = K8;

    function Y8({
      element: e,
      actionItem: t,
      elementApi: r
    }) {
      if ((0, Ht.isPluginType)(t.actionTypeId)) return (0, Ht.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case xi:
        case Ii:
        case Ti:
        case Mn: {
          let {
            xValue: i,
            yValue: n,
            zValue: a
          } = t.config;
          return {
            xValue: i,
            yValue: n,
            zValue: a
          }
        }
        case Ai: {
          let {
            getStyle: i,
            setStyle: n,
            getProperty: a
          } = r, {
            widthUnit: s,
            heightUnit: o
          } = t.config, {
            widthValue: l,
            heightValue: p
          } = t.config;
          if (!it.IS_BROWSER_ENV) return {
            widthValue: l,
            heightValue: p
          };
          if (s === br) {
            let u = i(e, Gt);
            n(e, Gt, ""), l = a(e, "offsetWidth"), n(e, Gt, u)
          }
          if (o === br) {
            let u = i(e, zt);
            n(e, zt, ""), p = a(e, "offsetHeight"), n(e, zt, u)
          }
          return {
            widthValue: l,
            heightValue: p
          }
        }
        case Pi:
        case wi:
        case Ci: {
          let {
            rValue: i,
            gValue: n,
            bValue: a,
            aValue: s
          } = t.config;
          return {
            rValue: i,
            gValue: n,
            bValue: a,
            aValue: s
          }
        }
        case Rn:
          return t.config.filters.reduce(X8, {});
        case Dn:
          return t.config.fontVariations.reduce($8, {});
        default: {
          let {
            value: i
          } = t.config;
          return {
            value: i
          }
        }
      }
    }

    function EI(e) {
      if (/^TRANSFORM_/.test(e)) return dI;
      if (/^STYLE_/.test(e)) return Ch;
      if (/^GENERAL_/.test(e)) return wh;
      if (/^PLUGIN_/.test(e)) return mI
    }

    function Q8(e, t) {
      return e === Ch ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function Z8(e, t, r, i, n, a, s, o, l) {
      switch (o) {
        case dI:
          return i9(e, t, r, n, s);
        case Ch:
          return f9(e, t, r, n, a, s);
        case wh:
          return p9(e, n, s);
        case mI: {
          let {
            actionTypeId: p
          } = n;
          if ((0, Ht.isPluginType)(p)) return (0, Ht.renderPlugin)(p)(l, t, n)
        }
      }
    }
    var Rh = {
        [xi]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [Ii]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [Ti]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [Mn]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      },
      J8 = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      }),
      e9 = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      }),
      t9 = (e, t) => {
        let r = (0, Ah.default)(t.filters, ({
          type: i
        }) => i === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%"
        }
      },
      r9 = Object.keys(Rh);

    function i9(e, t, r, i, n) {
      let a = r9.map(o => {
          let l = Rh[o],
            {
              xValue: p = l.xValue,
              yValue: u = l.yValue,
              zValue: h = l.zValue,
              xUnit: v = "",
              yUnit: d = "",
              zUnit: f = ""
            } = t[o] || {};
          switch (o) {
            case xi:
              return `${_8}(${p}${v}, ${u}${d}, ${h}${f})`;
            case Ii:
              return `${S8}(${p}${v}, ${u}${d}, ${h}${f})`;
            case Ti:
              return `${x8}(${p}${v}) ${I8}(${u}${d}) ${T8}(${h}${f})`;
            case Mn:
              return `${A8}(${p}${v}, ${u}${d})`;
            default:
              return ""
          }
        }).join(" "),
        {
          setStyle: s
        } = n;
      zr(e, it.TRANSFORM_PREFIXED, n), s(e, it.TRANSFORM_PREFIXED, a), s9(i, r) && s(e, it.TRANSFORM_STYLE_PREFIXED, P8)
    }

    function n9(e, t, r, i) {
      let n = (0, Ph.default)(t, (s, o, l) => `${s} ${l}(${o}${t9(l,r)})`, ""),
        {
          setStyle: a
        } = i;
      zr(e, wn, i), a(e, wn, n)
    }

    function a9(e, t, r, i) {
      let n = (0, Ph.default)(t, (s, o, l) => (s.push(`"${l}" ${o}`), s), []).join(", "),
        {
          setStyle: a
        } = i;
      zr(e, Cn, i), a(e, Cn, n)
    }

    function s9({
      actionTypeId: e
    }, {
      xValue: t,
      yValue: r,
      zValue: i
    }) {
      return e === xi && i !== void 0 || e === Ii && i !== void 0 || e === Ti && (t !== void 0 || r !== void 0)
    }
    var o9 = "\\(([^)]+)\\)",
      l9 = /^rgb/,
      u9 = RegExp(`rgba?${o9}`);

    function h9(e, t) {
      let r = e.exec(t);
      return r ? r[1] : ""
    }

    function c9({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: i
    }) {
      let n = Oh[t],
        a = i(e, n),
        s = l9.test(a) ? a : r[n],
        o = h9(u9, s).split(On);
      return {
        rValue: (0, Er.default)(parseInt(o[0], 10), 255),
        gValue: (0, Er.default)(parseInt(o[1], 10), 255),
        bValue: (0, Er.default)(parseInt(o[2], 10), 255),
        aValue: (0, Er.default)(parseFloat(o[3]), 1)
      }
    }

    function f9(e, t, r, i, n, a) {
      let {
        setStyle: s
      } = a;
      switch (i.actionTypeId) {
        case Ai: {
          let {
            widthUnit: o = "",
            heightUnit: l = ""
          } = i.config, {
            widthValue: p,
            heightValue: u
          } = r;
          p !== void 0 && (o === br && (o = "px"), zr(e, Gt, a), s(e, Gt, p + o)), u !== void 0 && (l === br && (l = "px"), zr(e, zt, a), s(e, zt, u + l));
          break
        }
        case Rn: {
          n9(e, r, i.config, a);
          break
        }
        case Dn: {
          a9(e, r, i.config, a);
          break
        }
        case Pi:
        case wi:
        case Ci: {
          let o = Oh[i.actionTypeId],
            l = Math.round(r.rValue),
            p = Math.round(r.gValue),
            u = Math.round(r.bValue),
            h = r.aValue;
          zr(e, o, a), s(e, o, h >= 1 ? `rgb(${l},${p},${u})` : `rgba(${l},${p},${u},${h})`);
          break
        }
        default: {
          let {
            unit: o = ""
          } = i.config;
          zr(e, n, a), s(e, n, r.value + o);
          break
        }
      }
    }

    function p9(e, t, r) {
      let {
        setStyle: i
      } = r;
      switch (t.actionTypeId) {
        case Fs: {
          let {
            value: n
          } = t.config;
          n === w8 && it.IS_BROWSER_ENV ? i(e, Rs, it.FLEX_PREFIXED) : i(e, Rs, n);
          return
        }
      }
    }

    function zr(e, t, r) {
      if (!it.IS_BROWSER_ENV) return;
      let i = yI[t];
      if (!i) return;
      let {
        getStyle: n,
        setStyle: a
      } = r, s = n(e, Si);
      if (!s) {
        a(e, Si, i);
        return
      }
      let o = s.split(On).map(gI);
      o.indexOf(i) === -1 && a(e, Si, o.concat(i).join(On))
    }

    function bI(e, t, r) {
      if (!it.IS_BROWSER_ENV) return;
      let i = yI[t];
      if (!i) return;
      let {
        getStyle: n,
        setStyle: a
      } = r, s = n(e, Si);
      !s || s.indexOf(i) === -1 || a(e, Si, s.split(On).map(gI).filter(o => o !== i).join(On))
    }

    function d9({
      store: e,
      elementApi: t
    }) {
      let {
        ixData: r
      } = e.getState(), {
        events: i = {},
        actionLists: n = {}
      } = r;
      Object.keys(i).forEach(a => {
        let s = i[a],
          {
            config: o
          } = s.action,
          {
            actionListId: l
          } = o,
          p = n[l];
        p && hI({
          actionList: p,
          event: s,
          elementApi: t
        })
      }), Object.keys(n).forEach(a => {
        hI({
          actionList: n[a],
          elementApi: t
        })
      })
    }

    function hI({
      actionList: e = {},
      event: t,
      elementApi: r
    }) {
      let {
        actionItemGroups: i,
        continuousParameterGroups: n
      } = e;
      i && i.forEach(a => {
        cI({
          actionGroup: a,
          event: t,
          elementApi: r
        })
      }), n && n.forEach(a => {
        let {
          continuousActionGroups: s
        } = a;
        s.forEach(o => {
          cI({
            actionGroup: o,
            event: t,
            elementApi: r
          })
        })
      })
    }

    function cI({
      actionGroup: e,
      event: t,
      elementApi: r
    }) {
      let {
        actionItems: i
      } = e;
      i.forEach(n => {
        let {
          actionTypeId: a,
          config: s
        } = n, o;
        (0, Ht.isPluginType)(a) ? o = l => (0, Ht.clearPlugin)(a)(l, n): o = _I({
          effect: v9,
          actionTypeId: a,
          elementApi: r
        }), Mh({
          config: s,
          event: t,
          elementApi: r
        }).forEach(o)
      })
    }

    function m9(e, t, r) {
      let {
        setStyle: i,
        getStyle: n
      } = r, {
        actionTypeId: a
      } = t;
      if (a === Ai) {
        let {
          config: s
        } = t;
        s.widthUnit === br && i(e, Gt, ""), s.heightUnit === br && i(e, zt, "")
      }
      n(e, Si) && _I({
        effect: bI,
        actionTypeId: a,
        elementApi: r
      })(e)
    }
    var _I = ({
      effect: e,
      actionTypeId: t,
      elementApi: r
    }) => i => {
      switch (t) {
        case xi:
        case Ii:
        case Ti:
        case Mn:
          e(i, it.TRANSFORM_PREFIXED, r);
          break;
        case Rn:
          e(i, wn, r);
          break;
        case Dn:
          e(i, Cn, r);
          break;
        case vI:
          e(i, Ms, r);
          break;
        case Ai:
          e(i, Gt, r), e(i, zt, r);
          break;
        case Pi:
        case wi:
        case Ci:
          e(i, Oh[t], r);
          break;
        case Fs:
          e(i, Rs, r);
          break
      }
    };

    function v9(e, t, r) {
      let {
        setStyle: i
      } = r;
      bI(e, t, r), i(e, t, ""), t === it.TRANSFORM_PREFIXED && i(e, it.TRANSFORM_STYLE_PREFIXED, "")
    }

    function SI(e) {
      let t = 0,
        r = 0;
      return e.forEach((i, n) => {
        let {
          config: a
        } = i, s = a.delay + a.duration;
        s >= t && (t = s, r = n)
      }), r
    }

    function g9(e, t) {
      let {
        actionItemGroups: r,
        useFirstGroupAsInitialState: i
      } = e, {
        actionItem: n,
        verboseTimeElapsed: a = 0
      } = t, s = 0, o = 0;
      return r.forEach((l, p) => {
        if (i && p === 0) return;
        let {
          actionItems: u
        } = l, h = u[SI(u)], {
          config: v,
          actionTypeId: d
        } = h;
        n.id === h.id && (o = s + a);
        let f = EI(d) === wh ? 0 : v.duration;
        s += v.delay + f
      }), s > 0 ? (0, y8.optimizeFloat)(o / s) : 0
    }

    function y9({
      actionList: e,
      actionItemId: t,
      rawData: r
    }) {
      let {
        actionItemGroups: i,
        continuousParameterGroups: n
      } = e, a = [], s = o => (a.push((0, aI.mergeIn)(o, ["config"], {
        delay: 0,
        duration: 0
      })), o.id === t);
      return i && i.some(({
        actionItems: o
      }) => o.some(s)), n && n.some(o => {
        let {
          continuousActionGroups: l
        } = o;
        return l.some(({
          actionItems: p
        }) => p.some(s))
      }), (0, aI.setIn)(r, ["actionLists"], {
        [e.id]: {
          id: e.id,
          actionItemGroups: [{
            actionItems: a
          }]
        }
      })
    }

    function E9(e, {
      basedOn: t
    }) {
      return e === Gr.EventTypeConsts.SCROLLING_IN_VIEW && (t === Gr.EventBasedOn.ELEMENT || t == null) || e === Gr.EventTypeConsts.MOUSE_MOVE && t === Gr.EventBasedOn.ELEMENT
    }

    function b9(e, t) {
      return e + D8 + t
    }

    function _9(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1
    }

    function S9(e, t) {
      return (0, fI.default)(e && e.sort(), t && t.sort())
    }

    function x9(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId) return e.pluginElement + Th + e.objectId;
      if (e.objectId) return e.objectId;
      let {
        id: t = "",
        selector: r = "",
        useEventTarget: i = ""
      } = e;
      return t + Th + r + Th + i
    }
  });
  var Hr = E(nt => {
    "use strict";
    var Oi = Br().default;
    Object.defineProperty(nt, "__esModule", {
      value: !0
    });
    nt.IX2VanillaUtils = nt.IX2VanillaPlugins = nt.IX2ElementsReducer = nt.IX2Easings = nt.IX2EasingUtils = nt.IX2BrowserSupport = void 0;
    var I9 = Oi(xs());
    nt.IX2BrowserSupport = I9;
    var T9 = Oi(mh());
    nt.IX2Easings = T9;
    var A9 = Oi(gh());
    nt.IX2EasingUtils = A9;
    var P9 = Oi(Cx());
    nt.IX2ElementsReducer = P9;
    var w9 = Oi(Sh());
    nt.IX2VanillaPlugins = w9;
    var C9 = Oi(xI());
    nt.IX2VanillaUtils = C9
  });
  var PI = E(Ls => {
    "use strict";
    Object.defineProperty(Ls, "__esModule", {
      value: !0
    });
    Ls.ixInstances = void 0;
    var II = ot(),
      TI = Hr(),
      Mi = bi(),
      {
        IX2_RAW_DATA_IMPORTED: O9,
        IX2_SESSION_STOPPED: M9,
        IX2_INSTANCE_ADDED: R9,
        IX2_INSTANCE_STARTED: D9,
        IX2_INSTANCE_REMOVED: F9,
        IX2_ANIMATION_FRAME_CHANGED: q9
      } = II.IX2EngineActionTypes,
      {
        optimizeFloat: qs,
        applyEasing: AI,
        createBezierEasing: L9
      } = TI.IX2EasingUtils,
      {
        RENDER_GENERAL: k9
      } = II.IX2EngineConstants,
      {
        getItemConfigByKey: Dh,
        getRenderType: N9,
        getStyleProp: B9
      } = TI.IX2VanillaUtils,
      V9 = (e, t) => {
        let {
          position: r,
          parameterId: i,
          actionGroups: n,
          destinationKeys: a,
          smoothing: s,
          restingValue: o,
          actionTypeId: l,
          customEasingFn: p,
          skipMotion: u,
          skipToValue: h
        } = e, {
          parameters: v
        } = t.payload, d = Math.max(1 - s, .01), f = v[i];
        f == null && (d = 1, f = o);
        let m = Math.max(f, 0) || 0,
          c = qs(m - r),
          g = u ? h : qs(r + c * d),
          y = g * 100;
        if (g === r && e.current) return e;
        let b, _, S, I;
        for (let P = 0, {
            length: L
          } = n; P < L; P++) {
          let {
            keyframe: D,
            actionItems: O
          } = n[P];
          if (P === 0 && (b = O[0]), y >= D) {
            b = O[0];
            let B = n[P + 1],
              R = B && y !== D;
            _ = R ? B.actionItems[0] : null, R && (S = D / 100, I = (B.keyframe - D) / 100)
          }
        }
        let x = {};
        if (b && !_)
          for (let P = 0, {
              length: L
            } = a; P < L; P++) {
            let D = a[P];
            x[D] = Dh(l, D, b.config)
          } else if (b && _ && S !== void 0 && I !== void 0) {
            let P = (g - S) / I,
              L = b.config.easing,
              D = AI(L, P, p);
            for (let O = 0, {
                length: B
              } = a; O < B; O++) {
              let R = a[O],
                F = Dh(l, R, b.config),
                ee = (Dh(l, R, _.config) - F) * D + F;
              x[R] = ee
            }
          } return (0, Mi.merge)(e, {
          position: g,
          current: x
        })
      },
      G9 = (e, t) => {
        let {
          active: r,
          origin: i,
          start: n,
          immediate: a,
          renderType: s,
          verbose: o,
          actionItem: l,
          destination: p,
          destinationKeys: u,
          pluginDuration: h,
          instanceDelay: v,
          customEasingFn: d,
          skipMotion: f
        } = e, m = l.config.easing, {
          duration: c,
          delay: g
        } = l.config;
        h != null && (c = h), g = v ? ? g, s === k9 ? c = 0 : (a || f) && (c = g = 0);
        let {
          now: y
        } = t.payload;
        if (r && i) {
          let b = y - (n + g);
          if (o) {
            let P = y - n,
              L = c + g,
              D = qs(Math.min(Math.max(0, P / L), 1));
            e = (0, Mi.set)(e, "verboseTimeElapsed", L * D)
          }
          if (b < 0) return e;
          let _ = qs(Math.min(Math.max(0, b / c), 1)),
            S = AI(m, _, d),
            I = {},
            x = null;
          return u.length && (x = u.reduce((P, L) => {
            let D = p[L],
              O = parseFloat(i[L]) || 0,
              R = (parseFloat(D) - O) * S + O;
            return P[L] = R, P
          }, {})), I.current = x, I.position = _, _ === 1 && (I.active = !1, I.complete = !0), (0, Mi.merge)(e, I)
        }
        return e
      },
      z9 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case O9:
            return t.payload.ixInstances || Object.freeze({});
          case M9:
            return Object.freeze({});
          case R9: {
            let {
              instanceId: r,
              elementId: i,
              actionItem: n,
              eventId: a,
              eventTarget: s,
              eventStateKey: o,
              actionListId: l,
              groupIndex: p,
              isCarrier: u,
              origin: h,
              destination: v,
              immediate: d,
              verbose: f,
              continuous: m,
              parameterId: c,
              actionGroups: g,
              smoothing: y,
              restingValue: b,
              pluginInstance: _,
              pluginDuration: S,
              instanceDelay: I,
              skipMotion: x,
              skipToValue: P
            } = t.payload, {
              actionTypeId: L
            } = n, D = N9(L), O = B9(D, L), B = Object.keys(v).filter(F => v[F] != null && typeof v[F] != "string"), {
              easing: R
            } = n.config;
            return (0, Mi.set)(e, r, {
              id: r,
              elementId: i,
              active: !1,
              position: 0,
              start: 0,
              origin: h,
              destination: v,
              destinationKeys: B,
              immediate: d,
              verbose: f,
              current: null,
              actionItem: n,
              actionTypeId: L,
              eventId: a,
              eventTarget: s,
              eventStateKey: o,
              actionListId: l,
              groupIndex: p,
              renderType: D,
              isCarrier: u,
              styleProp: O,
              continuous: m,
              parameterId: c,
              actionGroups: g,
              smoothing: y,
              restingValue: b,
              pluginInstance: _,
              pluginDuration: S,
              instanceDelay: I,
              skipMotion: x,
              skipToValue: P,
              customEasingFn: Array.isArray(R) && R.length === 4 ? L9(R) : void 0
            })
          }
          case D9: {
            let {
              instanceId: r,
              time: i
            } = t.payload;
            return (0, Mi.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: i
            })
          }
          case F9: {
            let {
              instanceId: r
            } = t.payload;
            if (!e[r]) return e;
            let i = {},
              n = Object.keys(e),
              {
                length: a
              } = n;
            for (let s = 0; s < a; s++) {
              let o = n[s];
              o !== r && (i[o] = e[o])
            }
            return i
          }
          case q9: {
            let r = e,
              i = Object.keys(e),
              {
                length: n
              } = i;
            for (let a = 0; a < n; a++) {
              let s = i[a],
                o = e[s],
                l = o.continuous ? V9 : G9;
              r = (0, Mi.set)(r, s, l(o, t))
            }
            return r
          }
          default:
            return e
        }
      };
    Ls.ixInstances = z9
  });
  var wI = E(ks => {
    "use strict";
    Object.defineProperty(ks, "__esModule", {
      value: !0
    });
    ks.ixParameters = void 0;
    var H9 = ot(),
      {
        IX2_RAW_DATA_IMPORTED: j9,
        IX2_SESSION_STOPPED: W9,
        IX2_PARAMETER_CHANGED: U9
      } = H9.IX2EngineActionTypes,
      X9 = (e = {}, t) => {
        switch (t.type) {
          case j9:
            return t.payload.ixParameters || {};
          case W9:
            return {};
          case U9: {
            let {
              key: r,
              value: i
            } = t.payload;
            return e[r] = i, e
          }
          default:
            return e
        }
      };
    ks.ixParameters = X9
  });
  var CI = E(Ns => {
    "use strict";
    Object.defineProperty(Ns, "__esModule", {
      value: !0
    });
    Ns.default = void 0;
    var $9 = ah(),
      K9 = XS(),
      Y9 = fx(),
      Q9 = dx(),
      Z9 = Hr(),
      J9 = PI(),
      e7 = wI(),
      {
        ixElements: t7
      } = Z9.IX2ElementsReducer,
      r7 = (0, $9.combineReducers)({
        ixData: K9.ixData,
        ixRequest: Y9.ixRequest,
        ixSession: Q9.ixSession,
        ixElements: t7,
        ixInstances: J9.ixInstances,
        ixParameters: e7.ixParameters
      });
    Ns.default = r7
  });
  var OI = E((Hue, Fn) => {
    function i7(e, t) {
      if (e == null) return {};
      var r = {},
        i = Object.keys(e),
        n, a;
      for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
      return r
    }
    Fn.exports = i7, Fn.exports.__esModule = !0, Fn.exports.default = Fn.exports
  });
  var RI = E((jue, MI) => {
    var n7 = ar(),
      a7 = He(),
      s7 = Xt(),
      o7 = "[object String]";

    function l7(e) {
      return typeof e == "string" || !a7(e) && s7(e) && n7(e) == o7
    }
    MI.exports = l7
  });
  var FI = E((Wue, DI) => {
    var u7 = Bo(),
      h7 = u7("length");
    DI.exports = h7
  });
  var LI = E((Uue, qI) => {
    var c7 = "\\ud800-\\udfff",
      f7 = "\\u0300-\\u036f",
      p7 = "\\ufe20-\\ufe2f",
      d7 = "\\u20d0-\\u20ff",
      m7 = f7 + p7 + d7,
      v7 = "\\ufe0e\\ufe0f",
      g7 = "\\u200d",
      y7 = RegExp("[" + g7 + c7 + m7 + v7 + "]");

    function E7(e) {
      return y7.test(e)
    }
    qI.exports = E7
  });
  var WI = E((Xue, jI) => {
    var NI = "\\ud800-\\udfff",
      b7 = "\\u0300-\\u036f",
      _7 = "\\ufe20-\\ufe2f",
      S7 = "\\u20d0-\\u20ff",
      x7 = b7 + _7 + S7,
      I7 = "\\ufe0e\\ufe0f",
      T7 = "[" + NI + "]",
      Fh = "[" + x7 + "]",
      qh = "\\ud83c[\\udffb-\\udfff]",
      A7 = "(?:" + Fh + "|" + qh + ")",
      BI = "[^" + NI + "]",
      VI = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      GI = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      P7 = "\\u200d",
      zI = A7 + "?",
      HI = "[" + I7 + "]?",
      w7 = "(?:" + P7 + "(?:" + [BI, VI, GI].join("|") + ")" + HI + zI + ")*",
      C7 = HI + zI + w7,
      O7 = "(?:" + [BI + Fh + "?", Fh, VI, GI, T7].join("|") + ")",
      kI = RegExp(qh + "(?=" + qh + ")|" + O7 + C7, "g");

    function M7(e) {
      for (var t = kI.lastIndex = 0; kI.test(e);) ++t;
      return t
    }
    jI.exports = M7
  });
  var XI = E(($ue, UI) => {
    var R7 = FI(),
      D7 = LI(),
      F7 = WI();

    function q7(e) {
      return D7(e) ? F7(e) : R7(e)
    }
    UI.exports = q7
  });
  var KI = E((Kue, $I) => {
    var L7 = ta(),
      k7 = ra(),
      N7 = Pr(),
      B7 = RI(),
      V7 = XI(),
      G7 = "[object Map]",
      z7 = "[object Set]";

    function H7(e) {
      if (e == null) return 0;
      if (N7(e)) return B7(e) ? V7(e) : e.length;
      var t = k7(e);
      return t == G7 || t == z7 ? e.size : L7(e).length
    }
    $I.exports = H7
  });
  var QI = E((Yue, YI) => {
    var j7 = "Expected a function";

    function W7(e) {
      if (typeof e != "function") throw new TypeError(j7);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2])
        }
        return !e.apply(this, t)
      }
    }
    YI.exports = W7
  });
  var Lh = E((Que, ZI) => {
    var U7 = sr(),
      X7 = function () {
        try {
          var e = U7(Object, "defineProperty");
          return e({}, "", {}), e
        } catch {}
      }();
    ZI.exports = X7
  });
  var kh = E((Zue, eT) => {
    var JI = Lh();

    function $7(e, t, r) {
      t == "__proto__" && JI ? JI(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : e[t] = r
    }
    eT.exports = $7
  });
  var rT = E((Jue, tT) => {
    var K7 = kh(),
      Y7 = Wn(),
      Q7 = Object.prototype,
      Z7 = Q7.hasOwnProperty;

    function J7(e, t, r) {
      var i = e[t];
      (!(Z7.call(e, t) && Y7(i, r)) || r === void 0 && !(t in e)) && K7(e, t, r)
    }
    tT.exports = J7
  });
  var aT = E((ehe, nT) => {
    var eY = rT(),
      tY = Xi(),
      rY = Qn(),
      iT = Ft(),
      iY = ri();

    function nY(e, t, r, i) {
      if (!iT(e)) return e;
      t = tY(t, e);
      for (var n = -1, a = t.length, s = a - 1, o = e; o != null && ++n < a;) {
        var l = iY(t[n]),
          p = r;
        if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
        if (n != s) {
          var u = o[l];
          p = i ? i(u, l, o) : void 0, p === void 0 && (p = iT(u) ? u : rY(t[n + 1]) ? [] : {})
        }
        eY(o, l, p), o = o[l]
      }
      return e
    }
    nT.exports = nY
  });
  var oT = E((the, sT) => {
    var aY = aa(),
      sY = aT(),
      oY = Xi();

    function lY(e, t, r) {
      for (var i = -1, n = t.length, a = {}; ++i < n;) {
        var s = t[i],
          o = aY(e, s);
        r(o, s) && sY(a, oY(s, e), o)
      }
      return a
    }
    sT.exports = lY
  });
  var uT = E((rhe, lT) => {
    var uY = Kn(),
      hY = Uu(),
      cY = xo(),
      fY = So(),
      pY = Object.getOwnPropertySymbols,
      dY = pY ? function (e) {
        for (var t = []; e;) uY(t, cY(e)), e = hY(e);
        return t
      } : fY;
    lT.exports = dY
  });
  var cT = E((ihe, hT) => {
    function mY(e) {
      var t = [];
      if (e != null)
        for (var r in Object(e)) t.push(r);
      return t
    }
    hT.exports = mY
  });
  var pT = E((nhe, fT) => {
    var vY = Ft(),
      gY = ea(),
      yY = cT(),
      EY = Object.prototype,
      bY = EY.hasOwnProperty;

    function _Y(e) {
      if (!vY(e)) return yY(e);
      var t = gY(e),
        r = [];
      for (var i in e) i == "constructor" && (t || !bY.call(e, i)) || r.push(i);
      return r
    }
    fT.exports = _Y
  });
  var mT = E((ahe, dT) => {
    var SY = To(),
      xY = pT(),
      IY = Pr();

    function TY(e) {
      return IY(e) ? SY(e, !0) : xY(e)
    }
    dT.exports = TY
  });
  var gT = E((she, vT) => {
    var AY = _o(),
      PY = uT(),
      wY = mT();

    function CY(e) {
      return AY(e, wY, PY)
    }
    vT.exports = CY
  });
  var ET = E((ohe, yT) => {
    var OY = No(),
      MY = or(),
      RY = oT(),
      DY = gT();

    function FY(e, t) {
      if (e == null) return {};
      var r = OY(DY(e), function (i) {
        return [i]
      });
      return t = MY(t), RY(e, r, function (i, n) {
        return t(i, n[0])
      })
    }
    yT.exports = FY
  });
  var _T = E((lhe, bT) => {
    var qY = or(),
      LY = QI(),
      kY = ET();

    function NY(e, t) {
      return kY(e, LY(qY(t)))
    }
    bT.exports = NY
  });
  var xT = E((uhe, ST) => {
    var BY = ta(),
      VY = ra(),
      GY = Gi(),
      zY = He(),
      HY = Pr(),
      jY = Yn(),
      WY = ea(),
      UY = Jn(),
      XY = "[object Map]",
      $Y = "[object Set]",
      KY = Object.prototype,
      YY = KY.hasOwnProperty;

    function QY(e) {
      if (e == null) return !0;
      if (HY(e) && (zY(e) || typeof e == "string" || typeof e.splice == "function" || jY(e) || UY(e) || GY(e))) return !e.length;
      var t = VY(e);
      if (t == XY || t == $Y) return !e.size;
      if (WY(e)) return !BY(e).length;
      for (var r in e)
        if (YY.call(e, r)) return !1;
      return !0
    }
    ST.exports = QY
  });
  var TT = E((hhe, IT) => {
    var ZY = kh(),
      JY = xh(),
      eQ = or();

    function tQ(e, t) {
      var r = {};
      return t = eQ(t, 3), JY(e, function (i, n, a) {
        ZY(r, n, t(i, n, a))
      }), r
    }
    IT.exports = tQ
  });
  var PT = E((che, AT) => {
    function rQ(e, t) {
      for (var r = -1, i = e == null ? 0 : e.length; ++r < i && t(e[r], r, e) !== !1;);
      return e
    }
    AT.exports = rQ
  });
  var CT = E((fhe, wT) => {
    var iQ = oa();

    function nQ(e) {
      return typeof e == "function" ? e : iQ
    }
    wT.exports = nQ
  });
  var MT = E((phe, OT) => {
    var aQ = PT(),
      sQ = Ih(),
      oQ = CT(),
      lQ = He();

    function uQ(e, t) {
      var r = lQ(e) ? aQ : sQ;
      return r(e, oQ(t))
    }
    OT.exports = uQ
  });
  var DT = E((dhe, RT) => {
    var hQ = It(),
      cQ = function () {
        return hQ.Date.now()
      };
    RT.exports = cQ
  });
  var LT = E((mhe, qT) => {
    var fQ = Ft(),
      Nh = DT(),
      FT = la(),
      pQ = "Expected a function",
      dQ = Math.max,
      mQ = Math.min;

    function vQ(e, t, r) {
      var i, n, a, s, o, l, p = 0,
        u = !1,
        h = !1,
        v = !0;
      if (typeof e != "function") throw new TypeError(pQ);
      t = FT(t) || 0, fQ(r) && (u = !!r.leading, h = "maxWait" in r, a = h ? dQ(FT(r.maxWait) || 0, t) : a, v = "trailing" in r ? !!r.trailing : v);

      function d(I) {
        var x = i,
          P = n;
        return i = n = void 0, p = I, s = e.apply(P, x), s
      }

      function f(I) {
        return p = I, o = setTimeout(g, t), u ? d(I) : s
      }

      function m(I) {
        var x = I - l,
          P = I - p,
          L = t - x;
        return h ? mQ(L, a - P) : L
      }

      function c(I) {
        var x = I - l,
          P = I - p;
        return l === void 0 || x >= t || x < 0 || h && P >= a
      }

      function g() {
        var I = Nh();
        if (c(I)) return y(I);
        o = setTimeout(g, m(I))
      }

      function y(I) {
        return o = void 0, v && i ? d(I) : (i = n = void 0, s)
      }

      function b() {
        o !== void 0 && clearTimeout(o), p = 0, i = l = n = o = void 0
      }

      function _() {
        return o === void 0 ? s : y(Nh())
      }

      function S() {
        var I = Nh(),
          x = c(I);
        if (i = arguments, n = this, l = I, x) {
          if (o === void 0) return f(l);
          if (h) return clearTimeout(o), o = setTimeout(g, t), d(l)
        }
        return o === void 0 && (o = setTimeout(g, t)), s
      }
      return S.cancel = b, S.flush = _, S
    }
    qT.exports = vQ
  });
  var NT = E((vhe, kT) => {
    var gQ = LT(),
      yQ = Ft(),
      EQ = "Expected a function";

    function bQ(e, t, r) {
      var i = !0,
        n = !0;
      if (typeof e != "function") throw new TypeError(EQ);
      return yQ(r) && (i = "leading" in r ? !!r.leading : i, n = "trailing" in r ? !!r.trailing : n), gQ(e, t, {
        leading: i,
        maxWait: t,
        trailing: n
      })
    }
    kT.exports = bQ
  });
  var Bs = E(de => {
    "use strict";
    var _Q = ht().default;
    Object.defineProperty(de, "__esModule", {
      value: !0
    });
    de.viewportWidthChanged = de.testFrameRendered = de.stopRequested = de.sessionStopped = de.sessionStarted = de.sessionInitialized = de.rawDataImported = de.previewRequested = de.playbackRequested = de.parameterChanged = de.mediaQueriesDefined = de.instanceStarted = de.instanceRemoved = de.instanceAdded = de.eventStateChanged = de.eventListenerAdded = de.elementStateChanged = de.clearRequested = de.animationFrameChanged = de.actionListPlaybackChanged = void 0;
    var BT = _Q(Ar()),
      VT = ot(),
      SQ = Hr(),
      {
        IX2_RAW_DATA_IMPORTED: xQ,
        IX2_SESSION_INITIALIZED: IQ,
        IX2_SESSION_STARTED: TQ,
        IX2_SESSION_STOPPED: AQ,
        IX2_PREVIEW_REQUESTED: PQ,
        IX2_PLAYBACK_REQUESTED: wQ,
        IX2_STOP_REQUESTED: CQ,
        IX2_CLEAR_REQUESTED: OQ,
        IX2_EVENT_LISTENER_ADDED: MQ,
        IX2_TEST_FRAME_RENDERED: RQ,
        IX2_EVENT_STATE_CHANGED: DQ,
        IX2_ANIMATION_FRAME_CHANGED: FQ,
        IX2_PARAMETER_CHANGED: qQ,
        IX2_INSTANCE_ADDED: LQ,
        IX2_INSTANCE_STARTED: kQ,
        IX2_INSTANCE_REMOVED: NQ,
        IX2_ELEMENT_STATE_CHANGED: BQ,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: VQ,
        IX2_VIEWPORT_WIDTH_CHANGED: GQ,
        IX2_MEDIA_QUERIES_DEFINED: zQ
      } = VT.IX2EngineActionTypes,
      {
        reifyState: HQ
      } = SQ.IX2VanillaUtils,
      jQ = e => ({
        type: xQ,
        payload: (0, BT.default)({}, HQ(e))
      });
    de.rawDataImported = jQ;
    var WQ = ({
      hasBoundaryNodes: e,
      reducedMotion: t
    }) => ({
      type: IQ,
      payload: {
        hasBoundaryNodes: e,
        reducedMotion: t
      }
    });
    de.sessionInitialized = WQ;
    var UQ = () => ({
      type: TQ
    });
    de.sessionStarted = UQ;
    var XQ = () => ({
      type: AQ
    });
    de.sessionStopped = XQ;
    var $Q = ({
      rawData: e,
      defer: t
    }) => ({
      type: PQ,
      payload: {
        defer: t,
        rawData: e
      }
    });
    de.previewRequested = $Q;
    var KQ = ({
      actionTypeId: e = VT.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: i,
      allowEvents: n,
      immediate: a,
      testManual: s,
      verbose: o,
      rawData: l
    }) => ({
      type: wQ,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: s,
        eventId: i,
        allowEvents: n,
        immediate: a,
        verbose: o,
        rawData: l
      }
    });
    de.playbackRequested = KQ;
    var YQ = e => ({
      type: CQ,
      payload: {
        actionListId: e
      }
    });
    de.stopRequested = YQ;
    var QQ = () => ({
      type: OQ
    });
    de.clearRequested = QQ;
    var ZQ = (e, t) => ({
      type: MQ,
      payload: {
        target: e,
        listenerParams: t
      }
    });
    de.eventListenerAdded = ZQ;
    var JQ = (e = 1) => ({
      type: RQ,
      payload: {
        step: e
      }
    });
    de.testFrameRendered = JQ;
    var eZ = (e, t) => ({
      type: DQ,
      payload: {
        stateKey: e,
        newState: t
      }
    });
    de.eventStateChanged = eZ;
    var tZ = (e, t) => ({
      type: FQ,
      payload: {
        now: e,
        parameters: t
      }
    });
    de.animationFrameChanged = tZ;
    var rZ = (e, t) => ({
      type: qQ,
      payload: {
        key: e,
        value: t
      }
    });
    de.parameterChanged = rZ;
    var iZ = e => ({
      type: LQ,
      payload: (0, BT.default)({}, e)
    });
    de.instanceAdded = iZ;
    var nZ = (e, t) => ({
      type: kQ,
      payload: {
        instanceId: e,
        time: t
      }
    });
    de.instanceStarted = nZ;
    var aZ = e => ({
      type: NQ,
      payload: {
        instanceId: e
      }
    });
    de.instanceRemoved = aZ;
    var sZ = (e, t, r, i) => ({
      type: BQ,
      payload: {
        elementId: e,
        actionTypeId: t,
        current: r,
        actionItem: i
      }
    });
    de.elementStateChanged = sZ;
    var oZ = ({
      actionListId: e,
      isPlaying: t
    }) => ({
      type: VQ,
      payload: {
        actionListId: e,
        isPlaying: t
      }
    });
    de.actionListPlaybackChanged = oZ;
    var lZ = ({
      width: e,
      mediaQueries: t
    }) => ({
      type: GQ,
      payload: {
        width: e,
        mediaQueries: t
      }
    });
    de.viewportWidthChanged = lZ;
    var uZ = () => ({
      type: zQ
    });
    de.mediaQueriesDefined = uZ
  });
  var HT = E(Xe => {
    "use strict";
    Object.defineProperty(Xe, "__esModule", {
      value: !0
    });
    Xe.elementContains = _Z;
    Xe.getChildElements = xZ;
    Xe.getClosestElement = void 0;
    Xe.getProperty = vZ;
    Xe.getQuerySelector = yZ;
    Xe.getRefType = AZ;
    Xe.getSiblingElements = IZ;
    Xe.getStyle = mZ;
    Xe.getValidDocument = EZ;
    Xe.isSiblingNode = SZ;
    Xe.matchSelector = gZ;
    Xe.queryDocument = bZ;
    Xe.setStyle = dZ;
    var hZ = Hr(),
      cZ = ot(),
      {
        ELEMENT_MATCHES: Bh
      } = hZ.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: GT,
        HTML_ELEMENT: fZ,
        PLAIN_OBJECT: pZ,
        WF_PAGE: zT
      } = cZ.IX2EngineConstants;

    function dZ(e, t, r) {
      e.style[t] = r
    }

    function mZ(e, t) {
      return e.style[t]
    }

    function vZ(e, t) {
      return e[t]
    }

    function gZ(e) {
      return t => t[Bh](e)
    }

    function yZ({
      id: e,
      selector: t
    }) {
      if (e) {
        let r = e;
        if (e.indexOf(GT) !== -1) {
          let i = e.split(GT),
            n = i[0];
          if (r = i[1], n !== document.documentElement.getAttribute(zT)) return null
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
      }
      return t
    }

    function EZ(e) {
      return e == null || e === document.documentElement.getAttribute(zT) ? document : null
    }

    function bZ(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function _Z(e, t) {
      return e.contains(t)
    }

    function SZ(e, t) {
      return e !== t && e.parentNode === t.parentNode
    }

    function xZ(e) {
      let t = [];
      for (let r = 0, {
          length: i
        } = e || []; r < i; r++) {
        let {
          children: n
        } = e[r], {
          length: a
        } = n;
        if (a)
          for (let s = 0; s < a; s++) t.push(n[s])
      }
      return t
    }

    function IZ(e = []) {
      let t = [],
        r = [];
      for (let i = 0, {
          length: n
        } = e; i < n; i++) {
        let {
          parentNode: a
        } = e[i];
        if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1) continue;
        r.push(a);
        let s = a.firstElementChild;
        for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
      }
      return t
    }
    var TZ = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
      if (!document.documentElement.contains(e)) return null;
      let r = e;
      do {
        if (r[Bh] && r[Bh](t)) return r;
        r = r.parentNode
      } while (r != null);
      return null
    };
    Xe.getClosestElement = TZ;

    function AZ(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? fZ : pZ : null
    }
  });
  var Vh = E((Ehe, WT) => {
    var PZ = Ft(),
      jT = Object.create,
      wZ = function () {
        function e() {}
        return function (t) {
          if (!PZ(t)) return {};
          if (jT) return jT(t);
          e.prototype = t;
          var r = new e;
          return e.prototype = void 0, r
        }
      }();
    WT.exports = wZ
  });
  var Vs = E((bhe, UT) => {
    function CZ() {}
    UT.exports = CZ
  });
  var zs = E((_he, XT) => {
    var OZ = Vh(),
      MZ = Vs();

    function Gs(e, t) {
      this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    Gs.prototype = OZ(MZ.prototype);
    Gs.prototype.constructor = Gs;
    XT.exports = Gs
  });
  var QT = E((She, YT) => {
    var $T = Kr(),
      RZ = Gi(),
      DZ = He(),
      KT = $T ? $T.isConcatSpreadable : void 0;

    function FZ(e) {
      return DZ(e) || RZ(e) || !!(KT && e && e[KT])
    }
    YT.exports = FZ
  });
  var eA = E((xhe, JT) => {
    var qZ = Kn(),
      LZ = QT();

    function ZT(e, t, r, i, n) {
      var a = -1,
        s = e.length;
      for (r || (r = LZ), n || (n = []); ++a < s;) {
        var o = e[a];
        t > 0 && r(o) ? t > 1 ? ZT(o, t - 1, r, i, n) : qZ(n, o) : i || (n[n.length] = o)
      }
      return n
    }
    JT.exports = ZT
  });
  var rA = E((Ihe, tA) => {
    var kZ = eA();

    function NZ(e) {
      var t = e == null ? 0 : e.length;
      return t ? kZ(e, 1) : []
    }
    tA.exports = NZ
  });
  var nA = E((The, iA) => {
    function BZ(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2])
      }
      return e.apply(t, r)
    }
    iA.exports = BZ
  });
  var oA = E((Ahe, sA) => {
    var VZ = nA(),
      aA = Math.max;

    function GZ(e, t, r) {
      return t = aA(t === void 0 ? e.length - 1 : t, 0),
        function () {
          for (var i = arguments, n = -1, a = aA(i.length - t, 0), s = Array(a); ++n < a;) s[n] = i[t + n];
          n = -1;
          for (var o = Array(t + 1); ++n < t;) o[n] = i[n];
          return o[t] = r(s), VZ(e, this, o)
        }
    }
    sA.exports = GZ
  });
  var uA = E((Phe, lA) => {
    function zZ(e) {
      return function () {
        return e
      }
    }
    lA.exports = zZ
  });
  var fA = E((whe, cA) => {
    var HZ = uA(),
      hA = Lh(),
      jZ = oa(),
      WZ = hA ? function (e, t) {
        return hA(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: HZ(t),
          writable: !0
        })
      } : jZ;
    cA.exports = WZ
  });
  var dA = E((Che, pA) => {
    var UZ = 800,
      XZ = 16,
      $Z = Date.now;

    function KZ(e) {
      var t = 0,
        r = 0;
      return function () {
        var i = $Z(),
          n = XZ - (i - r);
        if (r = i, n > 0) {
          if (++t >= UZ) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
      }
    }
    pA.exports = KZ
  });
  var vA = E((Ohe, mA) => {
    var YZ = fA(),
      QZ = dA(),
      ZZ = QZ(YZ);
    mA.exports = ZZ
  });
  var yA = E((Mhe, gA) => {
    var JZ = rA(),
      eJ = oA(),
      tJ = vA();

    function rJ(e) {
      return tJ(eJ(e, void 0, JZ), e + "")
    }
    gA.exports = rJ
  });
  var _A = E((Rhe, bA) => {
    var EA = Po(),
      iJ = EA && new EA;
    bA.exports = iJ
  });
  var xA = E((Dhe, SA) => {
    function nJ() {}
    SA.exports = nJ
  });
  var Gh = E((Fhe, TA) => {
    var IA = _A(),
      aJ = xA(),
      sJ = IA ? function (e) {
        return IA.get(e)
      } : aJ;
    TA.exports = sJ
  });
  var PA = E((qhe, AA) => {
    var oJ = {};
    AA.exports = oJ
  });
  var zh = E((Lhe, CA) => {
    var wA = PA(),
      lJ = Object.prototype,
      uJ = lJ.hasOwnProperty;

    function hJ(e) {
      for (var t = e.name + "", r = wA[t], i = uJ.call(wA, t) ? r.length : 0; i--;) {
        var n = r[i],
          a = n.func;
        if (a == null || a == e) return n.name
      }
      return t
    }
    CA.exports = hJ
  });
  var js = E((khe, OA) => {
    var cJ = Vh(),
      fJ = Vs(),
      pJ = 4294967295;

    function Hs(e) {
      this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = pJ, this.__views__ = []
    }
    Hs.prototype = cJ(fJ.prototype);
    Hs.prototype.constructor = Hs;
    OA.exports = Hs
  });
  var RA = E((Nhe, MA) => {
    function dJ(e, t) {
      var r = -1,
        i = e.length;
      for (t || (t = Array(i)); ++r < i;) t[r] = e[r];
      return t
    }
    MA.exports = dJ
  });
  var FA = E((Bhe, DA) => {
    var mJ = js(),
      vJ = zs(),
      gJ = RA();

    function yJ(e) {
      if (e instanceof mJ) return e.clone();
      var t = new vJ(e.__wrapped__, e.__chain__);
      return t.__actions__ = gJ(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
    DA.exports = yJ
  });
  var kA = E((Vhe, LA) => {
    var EJ = js(),
      qA = zs(),
      bJ = Vs(),
      _J = He(),
      SJ = Xt(),
      xJ = FA(),
      IJ = Object.prototype,
      TJ = IJ.hasOwnProperty;

    function Ws(e) {
      if (SJ(e) && !_J(e) && !(e instanceof EJ)) {
        if (e instanceof qA) return e;
        if (TJ.call(e, "__wrapped__")) return xJ(e)
      }
      return new qA(e)
    }
    Ws.prototype = bJ.prototype;
    Ws.prototype.constructor = Ws;
    LA.exports = Ws
  });
  var BA = E((Ghe, NA) => {
    var AJ = js(),
      PJ = Gh(),
      wJ = zh(),
      CJ = kA();

    function OJ(e) {
      var t = wJ(e),
        r = CJ[t];
      if (typeof r != "function" || !(t in AJ.prototype)) return !1;
      if (e === r) return !0;
      var i = PJ(r);
      return !!i && e === i[0]
    }
    NA.exports = OJ
  });
  var HA = E((zhe, zA) => {
    var VA = zs(),
      MJ = yA(),
      RJ = Gh(),
      Hh = zh(),
      DJ = He(),
      GA = BA(),
      FJ = "Expected a function",
      qJ = 8,
      LJ = 32,
      kJ = 128,
      NJ = 256;

    function BJ(e) {
      return MJ(function (t) {
        var r = t.length,
          i = r,
          n = VA.prototype.thru;
        for (e && t.reverse(); i--;) {
          var a = t[i];
          if (typeof a != "function") throw new TypeError(FJ);
          if (n && !s && Hh(a) == "wrapper") var s = new VA([], !0)
        }
        for (i = s ? i : r; ++i < r;) {
          a = t[i];
          var o = Hh(a),
            l = o == "wrapper" ? RJ(a) : void 0;
          l && GA(l[0]) && l[1] == (kJ | qJ | LJ | NJ) && !l[4].length && l[9] == 1 ? s = s[Hh(l[0])].apply(s, l[3]) : s = a.length == 1 && GA(a) ? s[o]() : s.thru(a)
        }
        return function () {
          var p = arguments,
            u = p[0];
          if (s && p.length == 1 && DJ(u)) return s.plant(u).value();
          for (var h = 0, v = r ? t[h].apply(this, p) : u; ++h < r;) v = t[h].call(this, v);
          return v
        }
      })
    }
    zA.exports = BJ
  });
  var WA = E((Hhe, jA) => {
    var VJ = HA(),
      GJ = VJ();
    jA.exports = GJ
  });
  var XA = E((jhe, UA) => {
    function zJ(e, t, r) {
      return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
    }
    UA.exports = zJ
  });
  var KA = E((Whe, $A) => {
    var HJ = XA(),
      jh = la();

    function jJ(e, t, r) {
      return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = jh(r), r = r === r ? r : 0), t !== void 0 && (t = jh(t), t = t === t ? t : 0), HJ(jh(e), t, r)
    }
    $A.exports = jJ
  });
  var pP = E(Ys => {
    "use strict";
    var Ks = ht().default;
    Object.defineProperty(Ys, "__esModule", {
      value: !0
    });
    Ys.default = void 0;
    var Et = Ks(Ar()),
      WJ = Ks(WA()),
      UJ = Ks(sa()),
      XJ = Ks(KA()),
      jr = ot(),
      Wh = Kh(),
      Us = Bs(),
      $J = Hr(),
      {
        MOUSE_CLICK: KJ,
        MOUSE_SECOND_CLICK: YJ,
        MOUSE_DOWN: QJ,
        MOUSE_UP: ZJ,
        MOUSE_OVER: JJ,
        MOUSE_OUT: eee,
        DROPDOWN_CLOSE: tee,
        DROPDOWN_OPEN: ree,
        SLIDER_ACTIVE: iee,
        SLIDER_INACTIVE: nee,
        TAB_ACTIVE: aee,
        TAB_INACTIVE: see,
        NAVBAR_CLOSE: oee,
        NAVBAR_OPEN: lee,
        MOUSE_MOVE: uee,
        PAGE_SCROLL_DOWN: nP,
        SCROLL_INTO_VIEW: aP,
        SCROLL_OUT_OF_VIEW: hee,
        PAGE_SCROLL_UP: cee,
        SCROLLING_IN_VIEW: fee,
        PAGE_FINISH: sP,
        ECOMMERCE_CART_CLOSE: pee,
        ECOMMERCE_CART_OPEN: dee,
        PAGE_START: oP,
        PAGE_SCROLL: mee
      } = jr.EventTypeConsts,
      Uh = "COMPONENT_ACTIVE",
      lP = "COMPONENT_INACTIVE",
      {
        COLON_DELIMITER: YA
      } = jr.IX2EngineConstants,
      {
        getNamespacedParameterId: QA
      } = $J.IX2VanillaUtils,
      uP = e => t => typeof t == "object" && e(t) ? !0 : t,
      Ln = uP(({
        element: e,
        nativeEvent: t
      }) => e === t.target),
      vee = uP(({
        element: e,
        nativeEvent: t
      }) => e.contains(t.target)),
      jt = (0, WJ.default)([Ln, vee]),
      hP = (e, t) => {
        if (t) {
          let {
            ixData: r
          } = e.getState(), {
            events: i
          } = r, n = i[t];
          if (n && !yee[n.eventTypeId]) return n
        }
        return null
      },
      gee = ({
        store: e,
        event: t
      }) => {
        let {
          action: r
        } = t, {
          autoStopEventId: i
        } = r.config;
        return !!hP(e, i)
      },
      ut = ({
        store: e,
        event: t,
        element: r,
        eventStateKey: i
      }, n) => {
        let {
          action: a,
          id: s
        } = t, {
          actionListId: o,
          autoStopEventId: l
        } = a.config, p = hP(e, l);
        return p && (0, Wh.stopActionGroup)({
          store: e,
          eventId: l,
          eventTarget: r,
          eventStateKey: l + YA + i.split(YA)[1],
          actionListId: (0, UJ.default)(p, "action.config.actionListId")
        }), (0, Wh.stopActionGroup)({
          store: e,
          eventId: s,
          eventTarget: r,
          eventStateKey: i,
          actionListId: o
        }), (0, Wh.startActionGroup)({
          store: e,
          eventId: s,
          eventTarget: r,
          eventStateKey: i,
          actionListId: o
        }), n
      },
      Ct = (e, t) => (r, i) => e(r, i) === !0 ? t(r, i) : i,
      kn = {
        handler: Ct(jt, ut)
      },
      cP = (0, Et.default)({}, kn, {
        types: [Uh, lP].join(" ")
      }),
      Xh = [{
        target: window,
        types: "resize orientationchange",
        throttle: !0
      }, {
        target: document,
        types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
        throttle: !0
      }],
      ZA = "mouseover mouseout",
      $h = {
        types: Xh
      },
      yee = {
        PAGE_START: oP,
        PAGE_FINISH: sP
      },
      qn = (() => {
        let e = window.pageXOffset !== void 0,
          r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, XJ.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        })
      })(),
      Eee = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
      bee = ({
        element: e,
        nativeEvent: t
      }) => {
        let {
          type: r,
          target: i,
          relatedTarget: n
        } = t, a = e.contains(i);
        if (r === "mouseover" && a) return !0;
        let s = e.contains(n);
        return !!(r === "mouseout" && a && s)
      },
      _ee = e => {
        let {
          element: t,
          event: {
            config: r
          }
        } = e, {
          clientWidth: i,
          clientHeight: n
        } = qn(), a = r.scrollOffsetValue, l = r.scrollOffsetUnit === "PX" ? a : n * (a || 0) / 100;
        return Eee(t.getBoundingClientRect(), {
          left: 0,
          top: l,
          right: i,
          bottom: n - l
        })
      },
      fP = e => (t, r) => {
        let {
          type: i
        } = t.nativeEvent, n = [Uh, lP].indexOf(i) !== -1 ? i === Uh : r.isActive, a = (0, Et.default)({}, r, {
          isActive: n
        });
        return (!r || a.isActive !== r.isActive) && e(t, a) || a
      },
      JA = e => (t, r) => {
        let i = {
          elementHovered: bee(t)
        };
        return (r ? i.elementHovered !== r.elementHovered : i.elementHovered) && e(t, i) || i
      },
      See = e => (t, r) => {
        let i = (0, Et.default)({}, r, {
          elementVisible: _ee(t)
        });
        return (r ? i.elementVisible !== r.elementVisible : i.elementVisible) && e(t, i) || i
      },
      eP = e => (t, r = {}) => {
        let {
          stiffScrollTop: i,
          scrollHeight: n,
          innerHeight: a
        } = qn(), {
          event: {
            config: s,
            eventTypeId: o
          }
        } = t, {
          scrollOffsetValue: l,
          scrollOffsetUnit: p
        } = s, u = p === "PX", h = n - a, v = Number((i / h).toFixed(2));
        if (r && r.percentTop === v) return r;
        let d = (u ? l : a * (l || 0) / 100) / h,
          f, m, c = 0;
        r && (f = v > r.percentTop, m = r.scrollingDown !== f, c = m ? v : r.anchorTop);
        let g = o === nP ? v >= c + d : v <= c - d,
          y = (0, Et.default)({}, r, {
            percentTop: v,
            inBounds: g,
            anchorTop: c,
            scrollingDown: f
          });
        return r && g && (m || y.inBounds !== r.inBounds) && e(t, y) || y
      },
      xee = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
      Iee = e => (t, r) => {
        let i = {
          finished: document.readyState === "complete"
        };
        return i.finished && !(r && r.finshed) && e(t), i
      },
      Tee = e => (t, r) => {
        let i = {
          started: !0
        };
        return r || e(t), i
      },
      tP = e => (t, r = {
        clickCount: 0
      }) => {
        let i = {
          clickCount: r.clickCount % 2 + 1
        };
        return i.clickCount !== r.clickCount && e(t, i) || i
      },
      Xs = (e = !0) => (0, Et.default)({}, cP, {
        handler: Ct(e ? jt : Ln, fP((t, r) => r.isActive ? kn.handler(t, r) : r))
      }),
      $s = (e = !0) => (0, Et.default)({}, cP, {
        handler: Ct(e ? jt : Ln, fP((t, r) => r.isActive ? r : kn.handler(t, r)))
      }),
      rP = (0, Et.default)({}, $h, {
        handler: See((e, t) => {
          let {
            elementVisible: r
          } = t, {
            event: i,
            store: n
          } = e, {
            ixData: a
          } = n.getState(), {
            events: s
          } = a;
          return !s[i.action.config.autoStopEventId] && t.triggered ? t : i.eventTypeId === aP === r ? (ut(e), (0, Et.default)({}, t, {
            triggered: !0
          })) : t
        })
      }),
      iP = .05,
      Aee = {
        [iee]: Xs(),
        [nee]: $s(),
        [ree]: Xs(),
        [tee]: $s(),
        [lee]: Xs(!1),
        [oee]: $s(!1),
        [aee]: Xs(),
        [see]: $s(),
        [dee]: {
          types: "ecommerce-cart-open",
          handler: Ct(jt, ut)
        },
        [pee]: {
          types: "ecommerce-cart-close",
          handler: Ct(jt, ut)
        },
        [KJ]: {
          types: "click",
          handler: Ct(jt, tP((e, {
            clickCount: t
          }) => {
            gee(e) ? t === 1 && ut(e) : ut(e)
          }))
        },
        [YJ]: {
          types: "click",
          handler: Ct(jt, tP((e, {
            clickCount: t
          }) => {
            t === 2 && ut(e)
          }))
        },
        [QJ]: (0, Et.default)({}, kn, {
          types: "mousedown"
        }),
        [ZJ]: (0, Et.default)({}, kn, {
          types: "mouseup"
        }),
        [JJ]: {
          types: ZA,
          handler: Ct(jt, JA((e, t) => {
            t.elementHovered && ut(e)
          }))
        },
        [eee]: {
          types: ZA,
          handler: Ct(jt, JA((e, t) => {
            t.elementHovered || ut(e)
          }))
        },
        [uee]: {
          types: "mousemove mouseout scroll",
          handler: ({
            store: e,
            element: t,
            eventConfig: r,
            nativeEvent: i,
            eventStateKey: n
          }, a = {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          }) => {
            let {
              basedOn: s,
              selectedAxis: o,
              continuousParameterGroupId: l,
              reverse: p,
              restingState: u = 0
            } = r, {
              clientX: h = a.clientX,
              clientY: v = a.clientY,
              pageX: d = a.pageX,
              pageY: f = a.pageY
            } = i, m = o === "X_AXIS", c = i.type === "mouseout", g = u / 100, y = l, b = !1;
            switch (s) {
              case jr.EventBasedOn.VIEWPORT: {
                g = m ? Math.min(h, window.innerWidth) / window.innerWidth : Math.min(v, window.innerHeight) / window.innerHeight;
                break
              }
              case jr.EventBasedOn.PAGE: {
                let {
                  scrollLeft: _,
                  scrollTop: S,
                  scrollWidth: I,
                  scrollHeight: x
                } = qn();
                g = m ? Math.min(_ + d, I) / I : Math.min(S + f, x) / x;
                break
              }
              case jr.EventBasedOn.ELEMENT:
              default: {
                y = QA(n, l);
                let _ = i.type.indexOf("mouse") === 0;
                if (_ && jt({
                    element: t,
                    nativeEvent: i
                  }) !== !0) break;
                let S = t.getBoundingClientRect(),
                  {
                    left: I,
                    top: x,
                    width: P,
                    height: L
                  } = S;
                if (!_ && !xee({
                    left: h,
                    top: v
                  }, S)) break;
                b = !0, g = m ? (h - I) / P : (v - x) / L;
                break
              }
            }
            return c && (g > 1 - iP || g < iP) && (g = Math.round(g)), (s !== jr.EventBasedOn.ELEMENT || b || b !== a.elementHovered) && (g = p ? 1 - g : g, e.dispatch((0, Us.parameterChanged)(y, g))), {
              elementHovered: b,
              clientX: h,
              clientY: v,
              pageX: d,
              pageY: f
            }
          }
        },
        [mee]: {
          types: Xh,
          handler: ({
            store: e,
            eventConfig: t
          }) => {
            let {
              continuousParameterGroupId: r,
              reverse: i
            } = t, {
              scrollTop: n,
              scrollHeight: a,
              clientHeight: s
            } = qn(), o = n / (a - s);
            o = i ? 1 - o : o, e.dispatch((0, Us.parameterChanged)(r, o))
          }
        },
        [fee]: {
          types: Xh,
          handler: ({
            element: e,
            store: t,
            eventConfig: r,
            eventStateKey: i
          }, n = {
            scrollPercent: 0
          }) => {
            let {
              scrollLeft: a,
              scrollTop: s,
              scrollWidth: o,
              scrollHeight: l,
              clientHeight: p
            } = qn(), {
              basedOn: u,
              selectedAxis: h,
              continuousParameterGroupId: v,
              startsEntering: d,
              startsExiting: f,
              addEndOffset: m,
              addStartOffset: c,
              addOffsetValue: g = 0,
              endOffsetValue: y = 0
            } = r, b = h === "X_AXIS";
            if (u === jr.EventBasedOn.VIEWPORT) {
              let _ = b ? a / o : s / l;
              return _ !== n.scrollPercent && t.dispatch((0, Us.parameterChanged)(v, _)), {
                scrollPercent: _
              }
            } else {
              let _ = QA(i, v),
                S = e.getBoundingClientRect(),
                I = (c ? g : 0) / 100,
                x = (m ? y : 0) / 100;
              I = d ? I : 1 - I, x = f ? x : 1 - x;
              let P = S.top + Math.min(S.height * I, p),
                D = S.top + S.height * x - P,
                O = Math.min(p + D, l),
                R = Math.min(Math.max(0, p - P), O) / O;
              return R !== n.scrollPercent && t.dispatch((0, Us.parameterChanged)(_, R)), {
                scrollPercent: R
              }
            }
          }
        },
        [aP]: rP,
        [hee]: rP,
        [nP]: (0, Et.default)({}, $h, {
          handler: eP((e, t) => {
            t.scrollingDown && ut(e)
          })
        }),
        [cee]: (0, Et.default)({}, $h, {
          handler: eP((e, t) => {
            t.scrollingDown || ut(e)
          })
        }),
        [sP]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ct(Ln, Iee(ut))
        },
        [oP]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ct(Ln, Tee(ut))
        }
      };
    Ys.default = Aee
  });
  var Kh = E(Sr => {
    "use strict";
    var Mt = ht().default,
      Pee = Br().default;
    Object.defineProperty(Sr, "__esModule", {
      value: !0
    });
    Sr.observeRequests = ite;
    Sr.startActionGroup = tc;
    Sr.startEngine = to;
    Sr.stopActionGroup = ec;
    Sr.stopAllActionGroups = SP;
    Sr.stopEngine = ro;
    var wee = Mt(Ar()),
      Cee = Mt(OI()),
      Oee = Mt(ph()),
      _r = Mt(sa()),
      Mee = Mt(KI()),
      Ree = Mt(_T()),
      Dee = Mt(xT()),
      Fee = Mt(TT()),
      Nn = Mt(MT()),
      qee = Mt(NT()),
      Ot = ot(),
      vP = Hr(),
      qe = Bs(),
      Be = Pee(HT()),
      Lee = Mt(pP()),
      kee = ["store", "computedStyle"],
      Nee = Object.keys(Ot.QuickEffectIds),
      Yh = e => Nee.includes(e),
      {
        COLON_DELIMITER: Qh,
        BOUNDARY_SELECTOR: Qs,
        HTML_ELEMENT: gP,
        RENDER_GENERAL: Bee,
        W_MOD_IX: dP
      } = Ot.IX2EngineConstants,
      {
        getAffectedElements: Zs,
        getElementId: Vee,
        getDestinationValues: Zh,
        observeStore: Wr,
        getInstanceId: Gee,
        renderHTMLElement: zee,
        clearAllStyles: yP,
        getMaxDurationItemIndex: Hee,
        getComputedStyle: jee,
        getInstanceOrigin: Wee,
        reduceListToGroup: Uee,
        shouldNamespaceEventParameter: Xee,
        getNamespacedParameterId: $ee,
        shouldAllowMediaQuery: Js,
        cleanupHTMLElement: Kee,
        clearObjectCache: Yee,
        stringifyTarget: Qee,
        mediaQueriesEqual: Zee,
        shallowEqual: Jee
      } = vP.IX2VanillaUtils,
      {
        isPluginType: eo,
        createPluginInstance: Jh,
        getPluginDuration: ete
      } = vP.IX2VanillaPlugins,
      mP = navigator.userAgent,
      tte = mP.match(/iPad/i) || mP.match(/iPhone/),
      rte = 12;

    function ite(e) {
      Wr({
        store: e,
        select: ({
          ixRequest: t
        }) => t.preview,
        onChange: ste
      }), Wr({
        store: e,
        select: ({
          ixRequest: t
        }) => t.playback,
        onChange: ote
      }), Wr({
        store: e,
        select: ({
          ixRequest: t
        }) => t.stop,
        onChange: lte
      }), Wr({
        store: e,
        select: ({
          ixRequest: t
        }) => t.clear,
        onChange: ute
      })
    }

    function nte(e) {
      Wr({
        store: e,
        select: ({
          ixSession: t
        }) => t.mediaQueryKey,
        onChange: () => {
          ro(e), yP({
            store: e,
            elementApi: Be
          }), to({
            store: e,
            allowEvents: !0
          }), EP()
        }
      })
    }

    function ate(e, t) {
      let r = Wr({
        store: e,
        select: ({
          ixSession: i
        }) => i.tick,
        onChange: i => {
          t(i), r()
        }
      })
    }

    function ste({
      rawData: e,
      defer: t
    }, r) {
      let i = () => {
        to({
          store: r,
          rawData: e,
          allowEvents: !0
        }), EP()
      };
      t ? setTimeout(i, 0) : i()
    }

    function EP() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function ote(e, t) {
      let {
        actionTypeId: r,
        actionListId: i,
        actionItemId: n,
        eventId: a,
        allowEvents: s,
        immediate: o,
        testManual: l,
        verbose: p = !0
      } = e, {
        rawData: u
      } = e;
      if (i && n && u && o) {
        let h = u.actionLists[i];
        h && (u = Uee({
          actionList: h,
          actionItemId: n,
          rawData: u
        }))
      }
      if (to({
          store: t,
          rawData: u,
          allowEvents: s,
          testManual: l
        }), i && r === Ot.ActionTypeConsts.GENERAL_START_ACTION || Yh(r)) {
        ec({
          store: t,
          actionListId: i
        }), _P({
          store: t,
          actionListId: i,
          eventId: a
        });
        let h = tc({
          store: t,
          eventId: a,
          actionListId: i,
          immediate: o,
          verbose: p
        });
        p && h && t.dispatch((0, qe.actionListPlaybackChanged)({
          actionListId: i,
          isPlaying: !o
        }))
      }
    }

    function lte({
      actionListId: e
    }, t) {
      e ? ec({
        store: t,
        actionListId: e
      }) : SP({
        store: t
      }), ro(t)
    }

    function ute(e, t) {
      ro(t), yP({
        store: t,
        elementApi: Be
      })
    }

    function to({
      store: e,
      rawData: t,
      allowEvents: r,
      testManual: i
    }) {
      let {
        ixSession: n
      } = e.getState();
      t && e.dispatch((0, qe.rawDataImported)(t)), n.active || (e.dispatch((0, qe.sessionInitialized)({
        hasBoundaryNodes: !!document.querySelector(Qs),
        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
      })), r && (mte(e), hte(), e.getState().ixSession.hasDefinedMediaQueries && nte(e)), e.dispatch((0, qe.sessionStarted)()), cte(e, i))
    }

    function hte() {
      let {
        documentElement: e
      } = document;
      e.className.indexOf(dP) === -1 && (e.className += ` ${dP}`)
    }

    function cte(e, t) {
      let r = i => {
        let {
          ixSession: n,
          ixParameters: a
        } = e.getState();
        n.active && (e.dispatch((0, qe.animationFrameChanged)(i, a)), t ? ate(e, r) : requestAnimationFrame(r))
      };
      r(window.performance.now())
    }

    function ro(e) {
      let {
        ixSession: t
      } = e.getState();
      if (t.active) {
        let {
          eventListeners: r
        } = t;
        r.forEach(fte), Yee(), e.dispatch((0, qe.sessionStopped)())
      }
    }

    function fte({
      target: e,
      listenerParams: t
    }) {
      e.removeEventListener.apply(e, t)
    }

    function pte({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: i,
      eventConfig: n,
      actionListId: a,
      parameterGroup: s,
      smoothing: o,
      restingValue: l
    }) {
      let {
        ixData: p,
        ixSession: u
      } = e.getState(), {
        events: h
      } = p, v = h[i], {
        eventTypeId: d
      } = v, f = {}, m = {}, c = [], {
        continuousActionGroups: g
      } = s, {
        id: y
      } = s;
      Xee(d, n) && (y = $ee(t, y));
      let b = u.hasBoundaryNodes && r ? Be.getClosestElement(r, Qs) : null;
      g.forEach(_ => {
        let {
          keyframe: S,
          actionItems: I
        } = _;
        I.forEach(x => {
          let {
            actionTypeId: P
          } = x, {
            target: L
          } = x.config;
          if (!L) return;
          let D = L.boundaryMode ? b : null,
            O = Qee(L) + Qh + P;
          if (m[O] = dte(m[O], S, x), !f[O]) {
            f[O] = !0;
            let {
              config: B
            } = x;
            Zs({
              config: B,
              event: v,
              eventTarget: r,
              elementRoot: D,
              elementApi: Be
            }).forEach(R => {
              c.push({
                element: R,
                key: O
              })
            })
          }
        })
      }), c.forEach(({
        element: _,
        key: S
      }) => {
        let I = m[S],
          x = (0, _r.default)(I, "[0].actionItems[0]", {}),
          {
            actionTypeId: P
          } = x,
          L = eo(P) ? Jh(P)(_, x) : null,
          D = Zh({
            element: _,
            actionItem: x,
            elementApi: Be
          }, L);
        rc({
          store: e,
          element: _,
          eventId: i,
          actionListId: a,
          actionItem: x,
          destination: D,
          continuous: !0,
          parameterId: y,
          actionGroups: I,
          smoothing: o,
          restingValue: l,
          pluginInstance: L
        })
      })
    }

    function dte(e = [], t, r) {
      let i = [...e],
        n;
      return i.some((a, s) => a.keyframe === t ? (n = s, !0) : !1), n == null && (n = i.length, i.push({
        keyframe: t,
        actionItems: []
      })), i[n].actionItems.push(r), i
    }

    function mte(e) {
      let {
        ixData: t
      } = e.getState(), {
        eventTypeMap: r
      } = t;
      bP(e), (0, Nn.default)(r, (n, a) => {
        let s = Lee.default[a];
        if (!s) {
          console.warn(`IX2 event type not configured: ${a}`);
          return
        }
        _te({
          logic: s,
          store: e,
          events: n
        })
      });
      let {
        ixSession: i
      } = e.getState();
      i.eventListeners.length && gte(e)
    }
    var vte = ["resize", "orientationchange"];

    function gte(e) {
      let t = () => {
        bP(e)
      };
      vte.forEach(r => {
        window.addEventListener(r, t), e.dispatch((0, qe.eventListenerAdded)(window, [r, t]))
      }), t()
    }

    function bP(e) {
      let {
        ixSession: t,
        ixData: r
      } = e.getState(), i = window.innerWidth;
      if (i !== t.viewportWidth) {
        let {
          mediaQueries: n
        } = r;
        e.dispatch((0, qe.viewportWidthChanged)({
          width: i,
          mediaQueries: n
        }))
      }
    }
    var yte = (e, t) => (0, Ree.default)((0, Fee.default)(e, t), Dee.default),
      Ete = (e, t) => {
        (0, Nn.default)(e, (r, i) => {
          r.forEach((n, a) => {
            let s = i + Qh + a;
            t(n, i, s)
          })
        })
      },
      bte = e => {
        let t = {
          target: e.target,
          targets: e.targets
        };
        return Zs({
          config: t,
          elementApi: Be
        })
      };

    function _te({
      logic: e,
      store: t,
      events: r
    }) {
      Ste(r);
      let {
        types: i,
        handler: n
      } = e, {
        ixData: a
      } = t.getState(), {
        actionLists: s
      } = a, o = yte(r, bte);
      if (!(0, Mee.default)(o)) return;
      (0, Nn.default)(o, (h, v) => {
        let d = r[v],
          {
            action: f,
            id: m,
            mediaQueries: c = a.mediaQueryKeys
          } = d,
          {
            actionListId: g
          } = f.config;
        Zee(c, a.mediaQueryKeys) || t.dispatch((0, qe.mediaQueriesDefined)()), f.actionTypeId === Ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(d.config) ? d.config : [d.config]).forEach(b => {
          let {
            continuousParameterGroupId: _
          } = b, S = (0, _r.default)(s, `${g}.continuousParameterGroups`, []), I = (0, Oee.default)(S, ({
            id: L
          }) => L === _), x = (b.smoothing || 0) / 100, P = (b.restingState || 0) / 100;
          I && h.forEach((L, D) => {
            let O = m + Qh + D;
            pte({
              store: t,
              eventStateKey: O,
              eventTarget: L,
              eventId: m,
              eventConfig: b,
              actionListId: g,
              parameterGroup: I,
              smoothing: x,
              restingValue: P
            })
          })
        }), (f.actionTypeId === Ot.ActionTypeConsts.GENERAL_START_ACTION || Yh(f.actionTypeId)) && _P({
          store: t,
          actionListId: g,
          eventId: m
        })
      });
      let l = h => {
          let {
            ixSession: v
          } = t.getState();
          Ete(o, (d, f, m) => {
            let c = r[f],
              g = v.eventState[m],
              {
                action: y,
                mediaQueries: b = a.mediaQueryKeys
              } = c;
            if (!Js(b, v.mediaQueryKey)) return;
            let _ = (S = {}) => {
              let I = n({
                store: t,
                element: d,
                event: c,
                eventConfig: S,
                nativeEvent: h,
                eventStateKey: m
              }, g);
              Jee(I, g) || t.dispatch((0, qe.eventStateChanged)(m, I))
            };
            y.actionTypeId === Ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(c.config) ? c.config : [c.config]).forEach(_) : _()
          })
        },
        p = (0, qee.default)(l, rte),
        u = ({
          target: h = document,
          types: v,
          throttle: d
        }) => {
          v.split(" ").filter(Boolean).forEach(f => {
            let m = d ? p : l;
            h.addEventListener(f, m), t.dispatch((0, qe.eventListenerAdded)(h, [f, m]))
          })
        };
      Array.isArray(i) ? i.forEach(u) : typeof i == "string" && u(e)
    }

    function Ste(e) {
      if (!tte) return;
      let t = {},
        r = "";
      for (let i in e) {
        let {
          eventTypeId: n,
          target: a
        } = e[i], s = Be.getQuerySelector(a);
        t[s] || (n === Ot.EventTypeConsts.MOUSE_CLICK || n === Ot.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
      }
      if (r) {
        let i = document.createElement("style");
        i.textContent = r, document.body.appendChild(i)
      }
    }

    function _P({
      store: e,
      actionListId: t,
      eventId: r
    }) {
      let {
        ixData: i,
        ixSession: n
      } = e.getState(), {
        actionLists: a,
        events: s
      } = i, o = s[r], l = a[t];
      if (l && l.useFirstGroupAsInitialState) {
        let p = (0, _r.default)(l, "actionItemGroups[0].actionItems", []),
          u = (0, _r.default)(o, "mediaQueries", i.mediaQueryKeys);
        if (!Js(u, n.mediaQueryKey)) return;
        p.forEach(h => {
          var v;
          let {
            config: d,
            actionTypeId: f
          } = h, m = (d == null || (v = d.target) === null || v === void 0 ? void 0 : v.useEventTarget) === !0 ? {
            target: o.target,
            targets: o.targets
          } : d, c = Zs({
            config: m,
            event: o,
            elementApi: Be
          }), g = eo(f);
          c.forEach(y => {
            let b = g ? Jh(f)(y, h) : null;
            rc({
              destination: Zh({
                element: y,
                actionItem: h,
                elementApi: Be
              }, b),
              immediate: !0,
              store: e,
              element: y,
              eventId: r,
              actionItem: h,
              actionListId: t,
              pluginInstance: b
            })
          })
        })
      }
    }

    function SP({
      store: e
    }) {
      let {
        ixInstances: t
      } = e.getState();
      (0, Nn.default)(t, r => {
        if (!r.continuous) {
          let {
            actionListId: i,
            verbose: n
          } = r;
          ic(r, e), n && e.dispatch((0, qe.actionListPlaybackChanged)({
            actionListId: i,
            isPlaying: !1
          }))
        }
      })
    }

    function ec({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: i,
      actionListId: n
    }) {
      let {
        ixInstances: a,
        ixSession: s
      } = e.getState(), o = s.hasBoundaryNodes && r ? Be.getClosestElement(r, Qs) : null;
      (0, Nn.default)(a, l => {
        let p = (0, _r.default)(l, "actionItem.config.target.boundaryMode"),
          u = i ? l.eventStateKey === i : !0;
        if (l.actionListId === n && l.eventId === t && u) {
          if (o && p && !Be.elementContains(o, l.element)) return;
          ic(l, e), l.verbose && e.dispatch((0, qe.actionListPlaybackChanged)({
            actionListId: n,
            isPlaying: !1
          }))
        }
      })
    }

    function tc({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: i,
      actionListId: n,
      groupIndex: a = 0,
      immediate: s,
      verbose: o
    }) {
      var l;
      let {
        ixData: p,
        ixSession: u
      } = e.getState(), {
        events: h
      } = p, v = h[t] || {}, {
        mediaQueries: d = p.mediaQueryKeys
      } = v, f = (0, _r.default)(p, `actionLists.${n}`, {}), {
        actionItemGroups: m,
        useFirstGroupAsInitialState: c
      } = f;
      if (!m || !m.length) return !1;
      a >= m.length && (0, _r.default)(v, "config.loop") && (a = 0), a === 0 && c && a++;
      let y = (a === 0 || a === 1 && c) && Yh((l = v.action) === null || l === void 0 ? void 0 : l.actionTypeId) ? v.config.delay : void 0,
        b = (0, _r.default)(m, [a, "actionItems"], []);
      if (!b.length || !Js(d, u.mediaQueryKey)) return !1;
      let _ = u.hasBoundaryNodes && r ? Be.getClosestElement(r, Qs) : null,
        S = Hee(b),
        I = !1;
      return b.forEach((x, P) => {
        let {
          config: L,
          actionTypeId: D
        } = x, O = eo(D), {
          target: B
        } = L;
        if (!B) return;
        let R = B.boundaryMode ? _ : null;
        Zs({
          config: L,
          event: v,
          eventTarget: r,
          elementRoot: R,
          elementApi: Be
        }).forEach((V, W) => {
          let ee = O ? Jh(D)(V, x) : null,
            A = O ? ete(D)(V, x) : null;
          I = !0;
          let q = S === P && W === 0,
            G = jee({
              element: V,
              actionItem: x
            }),
            C = Zh({
              element: V,
              actionItem: x,
              elementApi: Be
            }, ee);
          rc({
            store: e,
            element: V,
            actionItem: x,
            eventId: t,
            eventTarget: r,
            eventStateKey: i,
            actionListId: n,
            groupIndex: a,
            isCarrier: q,
            computedStyle: G,
            destination: C,
            immediate: s,
            verbose: o,
            pluginInstance: ee,
            pluginDuration: A,
            instanceDelay: y
          })
        })
      }), I
    }

    function rc(e) {
      var t;
      let {
        store: r,
        computedStyle: i
      } = e, n = (0, Cee.default)(e, kee), {
        element: a,
        actionItem: s,
        immediate: o,
        pluginInstance: l,
        continuous: p,
        restingValue: u,
        eventId: h
      } = n, v = !p, d = Gee(), {
        ixElements: f,
        ixSession: m,
        ixData: c
      } = r.getState(), g = Vee(f, a), {
        refState: y
      } = f[g] || {}, b = Be.getRefType(a), _ = m.reducedMotion && Ot.ReducedMotionTypes[s.actionTypeId], S;
      if (_ && p) switch ((t = c.events[h]) === null || t === void 0 ? void 0 : t.eventTypeId) {
        case Ot.EventTypeConsts.MOUSE_MOVE:
        case Ot.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
          S = u;
          break;
        default:
          S = .5;
          break
      }
      let I = Wee(a, y, i, s, Be, l);
      if (r.dispatch((0, qe.instanceAdded)((0, wee.default)({
          instanceId: d,
          elementId: g,
          origin: I,
          refType: b,
          skipMotion: _,
          skipToValue: S
        }, n))), xP(document.body, "ix2-animation-started", d), o) {
        xte(r, d);
        return
      }
      Wr({
        store: r,
        select: ({
          ixInstances: x
        }) => x[d],
        onChange: IP
      }), v && r.dispatch((0, qe.instanceStarted)(d, m.tick))
    }

    function ic(e, t) {
      xP(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState()
      });
      let {
        elementId: r,
        actionItem: i
      } = e, {
        ixElements: n
      } = t.getState(), {
        ref: a,
        refType: s
      } = n[r] || {};
      s === gP && Kee(a, i, Be), t.dispatch((0, qe.instanceRemoved)(e.id))
    }

    function xP(e, t, r) {
      let i = document.createEvent("CustomEvent");
      i.initCustomEvent(t, !0, !0, r), e.dispatchEvent(i)
    }

    function xte(e, t) {
      let {
        ixParameters: r
      } = e.getState();
      e.dispatch((0, qe.instanceStarted)(t, 0)), e.dispatch((0, qe.animationFrameChanged)(performance.now(), r));
      let {
        ixInstances: i
      } = e.getState();
      IP(i[t], e)
    }

    function IP(e, t) {
      let {
        active: r,
        continuous: i,
        complete: n,
        elementId: a,
        actionItem: s,
        actionTypeId: o,
        renderType: l,
        current: p,
        groupIndex: u,
        eventId: h,
        eventTarget: v,
        eventStateKey: d,
        actionListId: f,
        isCarrier: m,
        styleProp: c,
        verbose: g,
        pluginInstance: y
      } = e, {
        ixData: b,
        ixSession: _
      } = t.getState(), {
        events: S
      } = b, I = S[h] || {}, {
        mediaQueries: x = b.mediaQueryKeys
      } = I;
      if (Js(x, _.mediaQueryKey) && (i || r || n)) {
        if (p || l === Bee && n) {
          t.dispatch((0, qe.elementStateChanged)(a, o, p, s));
          let {
            ixElements: P
          } = t.getState(), {
            ref: L,
            refType: D,
            refState: O
          } = P[a] || {}, B = O && O[o];
          (D === gP || eo(o)) && zee(L, O, B, h, s, c, Be, l, y)
        }
        if (n) {
          if (m) {
            let P = tc({
              store: t,
              eventId: h,
              eventTarget: v,
              eventStateKey: d,
              actionListId: f,
              groupIndex: u + 1,
              verbose: g
            });
            g && !P && t.dispatch((0, qe.actionListPlaybackChanged)({
              actionListId: f,
              isPlaying: !1
            }))
          }
          ic(e, t)
        }
      }
    }
  });
  var AP = E(ir => {
    "use strict";
    var Ite = Br().default,
      Tte = ht().default;
    Object.defineProperty(ir, "__esModule", {
      value: !0
    });
    ir.actions = void 0;
    ir.destroy = TP;
    ir.init = Ote;
    ir.setEnv = Cte;
    ir.store = void 0;
    TS();
    var Ate = ah(),
      Pte = Tte(CI()),
      nc = Kh(),
      wte = Ite(Bs());
    ir.actions = wte;
    var io = (0, Ate.createStore)(Pte.default);
    ir.store = io;

    function Cte(e) {
      e() && (0, nc.observeRequests)(io)
    }

    function Ote(e) {
      TP(), (0, nc.startEngine)({
        store: io,
        rawData: e,
        allowEvents: !0
      })
    }

    function TP() {
      (0, nc.stopEngine)(io)
    }
  });
  var OP = E((Khe, CP) => {
    var PP = Ze(),
      wP = AP();
    wP.setEnv(PP.env);
    PP.define("ix2", CP.exports = function () {
      return wP
    })
  });
  var RP = E((Yhe, MP) => {
    var Ri = Ze();
    Ri.define("links", MP.exports = function (e, t) {
      var r = {},
        i = e(window),
        n, a = Ri.env(),
        s = window.location,
        o = document.createElement("a"),
        l = "w--current",
        p = /index\.(html|php)$/,
        u = /\/$/,
        h, v;
      r.ready = r.design = r.preview = d;

      function d() {
        n = a && Ri.env("design"), v = Ri.env("slug") || s.pathname || "", Ri.scroll.off(m), h = [];
        for (var g = document.links, y = 0; y < g.length; ++y) f(g[y]);
        h.length && (Ri.scroll.on(m), m())
      }

      function f(g) {
        var y = n && g.getAttribute("href-disabled") || g.getAttribute("href");
        if (o.href = y, !(y.indexOf(":") >= 0)) {
          var b = e(g);
          if (o.hash.length > 1 && o.host + o.pathname === s.host + s.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(o.hash)) return;
            var _ = e(o.hash);
            _.length && h.push({
              link: b,
              sec: _,
              active: !1
            });
            return
          }
          if (!(y === "#" || y === "")) {
            var S = o.href === s.href || y === v || p.test(y) && u.test(v);
            c(b, l, S)
          }
        }
      }

      function m() {
        var g = i.scrollTop(),
          y = i.height();
        t.each(h, function (b) {
          var _ = b.link,
            S = b.sec,
            I = S.offset().top,
            x = S.outerHeight(),
            P = y * .5,
            L = S.is(":visible") && I + x - P >= g && I + P <= g + y;
          b.active !== L && (b.active = L, c(_, l, L))
        })
      }

      function c(g, y, b) {
        var _ = g.hasClass(y);
        b && _ || !b && !_ || (b ? g.addClass(y) : g.removeClass(y))
      }
      return r
    })
  });
  var FP = E((Qhe, DP) => {
    var no = Ze();
    no.define("scroll", DP.exports = function (e) {
      var t = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        },
        r = window.location,
        i = f() ? null : window.history,
        n = e(window),
        a = e(document),
        s = e(document.body),
        o = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (B) {
          window.setTimeout(B, 15)
        },
        l = no.env("editor") ? ".w-editor-body" : "body",
        p = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
        u = 'a[href="#"]',
        h = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
        v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
        d = document.createElement("style");
      d.appendChild(document.createTextNode(v));

      function f() {
        try {
          return !!window.frameElement
        } catch {
          return !0
        }
      }
      var m = /^#[a-zA-Z0-9][\w:.-]*$/;

      function c(B) {
        return m.test(B.hash) && B.host + B.pathname === r.host + r.pathname
      }
      let g = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

      function y() {
        return document.body.getAttribute("data-wf-scroll-motion") === "none" || g.matches
      }

      function b(B, R) {
        var F;
        switch (R) {
          case "add":
            F = B.attr("tabindex"), F ? B.attr("data-wf-tabindex-swap", F) : B.attr("tabindex", "-1");
            break;
          case "remove":
            F = B.attr("data-wf-tabindex-swap"), F ? (B.attr("tabindex", F), B.removeAttr("data-wf-tabindex-swap")) : B.removeAttr("tabindex");
            break
        }
        B.toggleClass("wf-force-outline-none", R === "add")
      }

      function _(B) {
        var R = B.currentTarget;
        if (!(no.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(R.className))) {
          var F = c(R) ? R.hash : "";
          if (F !== "") {
            var V = e(F);
            V.length && (B && (B.preventDefault(), B.stopPropagation()), S(F, B), window.setTimeout(function () {
              I(V, function () {
                b(V, "add"), V.get(0).focus({
                  preventScroll: !0
                }), b(V, "remove")
              })
            }, B ? 0 : 300))
          }
        }
      }

      function S(B) {
        if (r.hash !== B && i && i.pushState && !(no.env.chrome && r.protocol === "file:")) {
          var R = i.state && i.state.hash;
          R !== B && i.pushState({
            hash: B
          }, "", B)
        }
      }

      function I(B, R) {
        var F = n.scrollTop(),
          V = x(B);
        if (F !== V) {
          var W = P(B, F, V),
            ee = Date.now(),
            A = function () {
              var q = Date.now() - ee;
              window.scroll(0, L(F, V, q, W)), q <= W ? o(A) : typeof R == "function" && R()
            };
          o(A)
        }
      }

      function x(B) {
        var R = e(p),
          F = R.css("position") === "fixed" ? R.outerHeight() : 0,
          V = B.offset().top - F;
        if (B.data("scroll") === "mid") {
          var W = n.height() - F,
            ee = B.outerHeight();
          ee < W && (V -= Math.round((W - ee) / 2))
        }
        return V
      }

      function P(B, R, F) {
        if (y()) return 0;
        var V = 1;
        return s.add(B).each(function (W, ee) {
          var A = parseFloat(ee.getAttribute("data-scroll-time"));
          !isNaN(A) && A >= 0 && (V = A)
        }), (472.143 * Math.log(Math.abs(R - F) + 125) - 2e3) * V
      }

      function L(B, R, F, V) {
        return F > V ? R : B + (R - B) * D(F / V)
      }

      function D(B) {
        return B < .5 ? 4 * B * B * B : (B - 1) * (2 * B - 2) * (2 * B - 2) + 1
      }

      function O() {
        var {
          WF_CLICK_EMPTY: B,
          WF_CLICK_SCROLL: R
        } = t;
        a.on(R, h, _), a.on(B, u, function (F) {
          F.preventDefault()
        }), document.head.insertBefore(d, document.head.firstChild)
      }
      return {
        ready: O
      }
    })
  });
  var LP = E((Zhe, qP) => {
    var Mte = Ze();
    Mte.define("touch", qP.exports = function (e) {
      var t = {},
        r = window.getSelection;
      e.event.special.tap = {
        bindType: "click",
        delegateType: "click"
      }, t.init = function (a) {
        return a = typeof a == "string" ? e(a).get(0) : a, a ? new i(a) : null
      };

      function i(a) {
        var s = !1,
          o = !1,
          l = Math.min(Math.round(window.innerWidth * .04), 40),
          p, u;
        a.addEventListener("touchstart", h, !1), a.addEventListener("touchmove", v, !1), a.addEventListener("touchend", d, !1), a.addEventListener("touchcancel", f, !1), a.addEventListener("mousedown", h, !1), a.addEventListener("mousemove", v, !1), a.addEventListener("mouseup", d, !1), a.addEventListener("mouseout", f, !1);

        function h(c) {
          var g = c.touches;
          g && g.length > 1 || (s = !0, g ? (o = !0, p = g[0].clientX) : p = c.clientX, u = p)
        }

        function v(c) {
          if (s) {
            if (o && c.type === "mousemove") {
              c.preventDefault(), c.stopPropagation();
              return
            }
            var g = c.touches,
              y = g ? g[0].clientX : c.clientX,
              b = y - u;
            u = y, Math.abs(b) > l && r && String(r()) === "" && (n("swipe", c, {
              direction: b > 0 ? "right" : "left"
            }), f())
          }
        }

        function d(c) {
          if (s && (s = !1, o && c.type === "mouseup")) {
            c.preventDefault(), c.stopPropagation(), o = !1;
            return
          }
        }

        function f() {
          s = !1
        }

        function m() {
          a.removeEventListener("touchstart", h, !1), a.removeEventListener("touchmove", v, !1), a.removeEventListener("touchend", d, !1), a.removeEventListener("touchcancel", f, !1), a.removeEventListener("mousedown", h, !1), a.removeEventListener("mousemove", v, !1), a.removeEventListener("mouseup", d, !1), a.removeEventListener("mouseout", f, !1), a = null
        }
        this.destroy = m
      }

      function n(a, s, o) {
        var l = e.Event(a, {
          originalEvent: s
        });
        e(s.target).trigger(l, o)
      }
      return t.instance = t.init(document), t
    })
  });
  var kP = E(ac => {
    "use strict";
    Object.defineProperty(ac, "__esModule", {
      value: !0
    });
    ac.default = Rte;

    function Rte(e, t, r, i, n, a, s, o, l, p, u, h, v) {
      return function (d) {
        e(d);
        var f = d.form,
          m = {
            name: f.attr("data-name") || f.attr("name") || "Untitled Form",
            pageId: f.attr("data-wf-page-id") || "",
            elementId: f.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(f.html()),
            trackingCookies: i()
          };
        let c = f.attr("data-wf-flow");
        c && (m.wfFlow = c), n(d);
        var g = a(f, m.fields);
        if (g) return s(g);
        if (m.fileUploads = o(f), l(d), !p) {
          u(d);
          return
        }
        h.ajax({
          url: v,
          type: "POST",
          data: m,
          dataType: "json",
          crossDomain: !0
        }).done(function (y) {
          y && y.code === 200 && (d.success = !0), u(d)
        }).fail(function () {
          u(d)
        })
      }
    }
  });
  var BP = E((ece, NP) => {
    var ao = Ze();
    ao.define("forms", NP.exports = function (e, t) {
      var r = {},
        i = e(document),
        n, a = window.location,
        s = window.XDomainRequest && !window.atob,
        o = ".w-form",
        l, p = /e(-)?mail/i,
        u = /^\S+@\S+$/,
        h = window.alert,
        v = ao.env(),
        d, f, m, c = /list-manage[1-9]?.com/i,
        g = t.debounce(function () {
          h("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
        }, 100);
      r.ready = r.design = r.preview = function () {
        y(), !v && !d && _()
      };

      function y() {
        l = e("html").attr("data-wf-site"), f = "https://webflow.com/api/v1/form/" + l, s && f.indexOf("https://webflow.com") >= 0 && (f = f.replace("https://webflow.com", "https://formdata.webflow.com")), m = `${f}/signFile`, n = e(o + " form"), n.length && n.each(b)
      }

      function b(q, G) {
        var C = e(G),
          w = e.data(G, o);
        w || (w = e.data(G, o, {
          form: C
        })), S(w);
        var M = C.closest("div.w-form");
        w.done = M.find("> .w-form-done"), w.fail = M.find("> .w-form-fail"), w.fileUploads = M.find(".w-file-upload"), w.fileUploads.each(function (te) {
          W(te, w)
        });
        var k = w.form.attr("aria-label") || w.form.attr("data-name") || "Form";
        w.done.attr("aria-label") || w.form.attr("aria-label", k), w.done.attr("tabindex", "-1"), w.done.attr("role", "region"), w.done.attr("aria-label") || w.done.attr("aria-label", k + " success"), w.fail.attr("tabindex", "-1"), w.fail.attr("role", "region"), w.fail.attr("aria-label") || w.fail.attr("aria-label", k + " failure");
        var Q = w.action = C.attr("action");
        if (w.handler = null, w.redirect = C.attr("data-redirect"), c.test(Q)) {
          w.handler = R;
          return
        }
        if (!Q) {
          if (l) {
            w.handler = (() => {
              let te = kP().default;
              return te(S, a, ao, D, V, x, h, P, I, l, F, e, f)
            })();
            return
          }
          g()
        }
      }

      function _() {
        d = !0, i.on("submit", o + " form", function (te) {
          var Z = e.data(this, o);
          Z.handler && (Z.evt = te, Z.handler(Z))
        });
        let q = ".w-checkbox-input",
          G = ".w-radio-input",
          C = "w--redirected-checked",
          w = "w--redirected-focus",
          M = "w--redirected-focus-visible",
          k = ":focus-visible, [data-wf-focus-visible]",
          Q = [
            ["checkbox", q],
            ["radio", G]
          ];
        i.on("change", o + ' form input[type="checkbox"]:not(' + q + ")", te => {
          e(te.target).siblings(q).toggleClass(C)
        }), i.on("change", o + ' form input[type="radio"]', te => {
          e(`input[name="${te.target.name}"]:not(${q})`).map((re, ce) => e(ce).siblings(G).removeClass(C));
          let Z = e(te.target);
          Z.hasClass("w-radio-input") || Z.siblings(G).addClass(C)
        }), Q.forEach(([te, Z]) => {
          i.on("focus", o + ` form input[type="${te}"]:not(` + Z + ")", re => {
            e(re.target).siblings(Z).addClass(w), e(re.target).filter(k).siblings(Z).addClass(M)
          }), i.on("blur", o + ` form input[type="${te}"]:not(` + Z + ")", re => {
            e(re.target).siblings(Z).removeClass(`${w} ${M}`)
          })
        })
      }

      function S(q) {
        var G = q.btn = q.form.find(':input[type="submit"]');
        q.wait = q.btn.attr("data-wait") || null, q.success = !1, G.prop("disabled", !1), q.label && G.val(q.label)
      }

      function I(q) {
        var G = q.btn,
          C = q.wait;
        G.prop("disabled", !0), C && (q.label = G.val(), G.val(C))
      }

      function x(q, G) {
        var C = null;
        return G = G || {}, q.find(':input:not([type="submit"]):not([type="file"])').each(function (w, M) {
          var k = e(M),
            Q = k.attr("type"),
            te = k.attr("data-name") || k.attr("name") || "Field " + (w + 1),
            Z = k.val();
          if (Q === "checkbox") Z = k.is(":checked");
          else if (Q === "radio") {
            if (G[te] === null || typeof G[te] == "string") return;
            Z = q.find('input[name="' + k.attr("name") + '"]:checked').val() || null
          }
          typeof Z == "string" && (Z = e.trim(Z)), G[te] = Z, C = C || O(k, Q, te, Z)
        }), C
      }

      function P(q) {
        var G = {};
        return q.find(':input[type="file"]').each(function (C, w) {
          var M = e(w),
            k = M.attr("data-name") || M.attr("name") || "File " + (C + 1),
            Q = M.attr("data-value");
          typeof Q == "string" && (Q = e.trim(Q)), G[k] = Q
        }), G
      }
      let L = {
        _mkto_trk: "marketo"
      };

      function D() {
        return document.cookie.split("; ").reduce(function (G, C) {
          let w = C.split("="),
            M = w[0];
          if (M in L) {
            let k = L[M],
              Q = w.slice(1).join("=");
            G[k] = Q
          }
          return G
        }, {})
      }

      function O(q, G, C, w) {
        var M = null;
        return G === "password" ? M = "Passwords cannot be submitted." : q.attr("required") ? w ? p.test(q.attr("type")) && (u.test(w) || (M = "Please enter a valid email address for: " + C)) : M = "Please fill out the required field: " + C : C === "g-recaptcha-response" && !w && (M = "Please confirm you\u2019re not a robot."), M
      }

      function B(q) {
        V(q), F(q)
      }

      function R(q) {
        S(q);
        var G = q.form,
          C = {};
        if (/^https/.test(a.href) && !/^https/.test(q.action)) {
          G.attr("method", "post");
          return
        }
        V(q);
        var w = x(G, C);
        if (w) return h(w);
        I(q);
        var M;
        t.each(C, function (Z, re) {
          p.test(re) && (C.EMAIL = Z), /^((full[ _-]?)?name)$/i.test(re) && (M = Z), /^(first[ _-]?name)$/i.test(re) && (C.FNAME = Z), /^(last[ _-]?name)$/i.test(re) && (C.LNAME = Z)
        }), M && !C.FNAME && (M = M.split(" "), C.FNAME = M[0], C.LNAME = C.LNAME || M[1]);
        var k = q.action.replace("/post?", "/post-json?") + "&c=?",
          Q = k.indexOf("u=") + 2;
        Q = k.substring(Q, k.indexOf("&", Q));
        var te = k.indexOf("id=") + 3;
        te = k.substring(te, k.indexOf("&", te)), C["b_" + Q + "_" + te] = "", e.ajax({
          url: k,
          data: C,
          dataType: "jsonp"
        }).done(function (Z) {
          q.success = Z.result === "success" || /already/.test(Z.msg), q.success || console.info("MailChimp error: " + Z.msg), F(q)
        }).fail(function () {
          F(q)
        })
      }

      function F(q) {
        var G = q.form,
          C = q.redirect,
          w = q.success;
        if (w && C) {
          ao.location(C);
          return
        }
        q.done.toggle(w), q.fail.toggle(!w), w ? q.done.focus() : q.fail.focus(), G.toggle(!w), S(q)
      }

      function V(q) {
        q.evt && q.evt.preventDefault(), q.evt = null
      }

      function W(q, G) {
        if (!G.fileUploads || !G.fileUploads[q]) return;
        var C, w = e(G.fileUploads[q]),
          M = w.find("> .w-file-upload-default"),
          k = w.find("> .w-file-upload-uploading"),
          Q = w.find("> .w-file-upload-success"),
          te = w.find("> .w-file-upload-error"),
          Z = M.find(".w-file-upload-input"),
          re = M.find(".w-file-upload-label"),
          ce = re.children(),
          se = te.find(".w-file-upload-error-msg"),
          N = Q.find(".w-file-upload-file"),
          J = Q.find(".w-file-remove-link"),
          ie = N.find(".w-file-upload-file-name"),
          K = se.attr("data-w-size-error"),
          ve = se.attr("data-w-type-error"),
          Ae = se.attr("data-w-generic-error");
        if (v || re.on("click keydown", function (j) {
            j.type === "keydown" && j.which !== 13 && j.which !== 32 || (j.preventDefault(), Z.click())
          }), re.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), J.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), v) Z.on("click", function (j) {
          j.preventDefault()
        }), re.on("click", function (j) {
          j.preventDefault()
        }), ce.on("click", function (j) {
          j.preventDefault()
        });
        else {
          J.on("click keydown", function (j) {
            if (j.type === "keydown") {
              if (j.which !== 13 && j.which !== 32) return;
              j.preventDefault()
            }
            Z.removeAttr("data-value"), Z.val(""), ie.html(""), M.toggle(!0), Q.toggle(!1), re.focus()
          }), Z.on("change", function (j) {
            C = j.target && j.target.files && j.target.files[0], C && (M.toggle(!1), te.toggle(!1), k.toggle(!0), k.focus(), ie.text(C.name), U() || I(G), G.fileUploads[q].uploading = !0, ee(C, z))
          });
          var Pe = re.outerHeight();
          Z.height(Pe), Z.width(1)
        }

        function T(j) {
          var X = j.responseJSON && j.responseJSON.msg,
            ae = Ae;
          typeof X == "string" && X.indexOf("InvalidFileTypeError") === 0 ? ae = ve : typeof X == "string" && X.indexOf("MaxFileSizeError") === 0 && (ae = K), se.text(ae), Z.removeAttr("data-value"), Z.val(""), k.toggle(!1), M.toggle(!0), te.toggle(!0), te.focus(), G.fileUploads[q].uploading = !1, U() || S(G)
        }

        function z(j, X) {
          if (j) return T(j);
          var ae = X.fileName,
            oe = X.postData,
            ye = X.fileId,
            ne = X.s3Url;
          Z.attr("data-value", ye), A(ne, oe, C, ae, H)
        }

        function H(j) {
          if (j) return T(j);
          k.toggle(!1), Q.css("display", "inline-block"), Q.focus(), G.fileUploads[q].uploading = !1, U() || S(G)
        }

        function U() {
          var j = G.fileUploads && G.fileUploads.toArray() || [];
          return j.some(function (X) {
            return X.uploading
          })
        }
      }

      function ee(q, G) {
        var C = new URLSearchParams({
          name: q.name,
          size: q.size
        });
        e.ajax({
          type: "GET",
          url: `${m}?${C}`,
          crossDomain: !0
        }).done(function (w) {
          G(null, w)
        }).fail(function (w) {
          G(w)
        })
      }

      function A(q, G, C, w, M) {
        var k = new FormData;
        for (var Q in G) k.append(Q, G[Q]);
        k.append("file", C, w), e.ajax({
          type: "POST",
          url: q,
          data: k,
          processData: !1,
          contentType: !1
        }).done(function () {
          M(null)
        }).fail(function (te) {
          M(te)
        })
      }
      return r
    })
  });
  var zP = E((tce, GP) => {
    var sc = Ze(),
      VP = "w-condition-invisible",
      Dte = "." + VP;

    function Fte(e) {
      return e.filter(function (t) {
        return !Vn(t)
      })
    }

    function Vn(e) {
      return !!(e.$el && e.$el.closest(Dte).length)
    }

    function oc(e, t) {
      for (var r = e; r >= 0; r--)
        if (!Vn(t[r])) return r;
      return -1
    }

    function lc(e, t) {
      for (var r = e; r <= t.length - 1; r++)
        if (!Vn(t[r])) return r;
      return -1
    }

    function qte(e, t) {
      return oc(e - 1, t) === -1
    }

    function Lte(e, t) {
      return lc(e + 1, t) === -1
    }

    function Bn(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t)
    }

    function kte(e, t, r, i) {
      var n = r.tram,
        a = Array.isArray,
        s = "w-lightbox",
        o = s + "-",
        l = /(^|\s+)/g,
        p = [],
        u, h, v, d = [];

      function f(w, M) {
        return p = a(w) ? w : [w], h || f.build(), Fte(p).length > 1 && (h.items = h.empty, p.forEach(function (k, Q) {
          var te = G("thumbnail"),
            Z = G("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(te);
          Bn(Z, `show item ${Q+1} of ${p.length}`), Vn(k) && Z.addClass(VP), h.items = h.items.add(Z), D(k.thumbnailUrl || k.url, function (re) {
            re.prop("width") > re.prop("height") ? W(re, "wide") : W(re, "tall"), te.append(W(re, "thumbnail-image"))
          })
        }), h.strip.empty().append(h.items), W(h.content, "group")), n(ee(h.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
          opacity: 1
        }), W(h.html, "noscroll"), f.show(M || 0)
      }
      f.build = function () {
        return f.destroy(), h = {
          html: r(t.documentElement),
          empty: r()
        }, h.arrowLeft = G("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), h.arrowRight = G("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), h.close = G("control close").attr("role", "button"), Bn(h.arrowLeft, "previous image"), Bn(h.arrowRight, "next image"), Bn(h.close, "close lightbox"), h.spinner = G("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), h.strip = G("strip").attr("role", "tablist"), v = new R(h.spinner, F("hide")), h.content = G("content").append(h.spinner, h.arrowLeft, h.arrowRight, h.close), h.container = G("container").append(h.content, h.strip), h.lightbox = G("backdrop hide").append(h.container), h.strip.on("click", V("item"), b), h.content.on("swipe", _).on("click", V("left"), c).on("click", V("right"), g).on("click", V("close"), y).on("click", V("image, caption"), g), h.container.on("click", V("view"), y).on("dragstart", V("img"), I), h.lightbox.on("keydown", x).on("focusin", S), r(i).append(h.lightbox), f
      }, f.destroy = function () {
        h && (ee(h.html, "noscroll"), h.lightbox.remove(), h = void 0)
      }, f.show = function (w) {
        if (w !== u) {
          var M = p[w];
          if (!M) return f.hide();
          if (Vn(M)) {
            if (w < u) {
              var k = oc(w - 1, p);
              w = k > -1 ? k : w
            } else {
              var Q = lc(w + 1, p);
              w = Q > -1 ? Q : w
            }
            M = p[w]
          }
          var te = u;
          u = w, h.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), v.show();
          var Z = M.html && C(M.width, M.height) || M.url;
          return D(Z, function (re) {
            if (w !== u) return;
            var ce = G("figure", "figure").append(W(re, "image")),
              se = G("frame").append(ce),
              N = G("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(se),
              J, ie;
            M.html && (J = r(M.html), ie = J.is("iframe"), ie && J.on("load", K), ce.append(W(J, "embed"))), M.caption && ce.append(G("caption", "figcaption").text(M.caption)), h.spinner.before(N), ie || K();

            function K() {
              if (h.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), v.hide(), w !== u) {
                N.remove();
                return
              }
              let ve = qte(w, p);
              A(h.arrowLeft, "inactive", ve), q(h.arrowLeft, ve), ve && h.arrowLeft.is(":focus") && h.arrowRight.focus();
              let Ae = Lte(w, p);
              if (A(h.arrowRight, "inactive", Ae), q(h.arrowRight, Ae), Ae && h.arrowRight.is(":focus") && h.arrowLeft.focus(), h.view ? (n(h.view).add("opacity .3s").start({
                  opacity: 0
                }).then(O(h.view)), n(N).add("opacity .3s").add("transform .3s").set({
                  x: w > te ? "80px" : "-80px"
                }).start({
                  opacity: 1,
                  x: 0
                })) : N.css("opacity", 1), h.view = N, h.view.prop("tabIndex", 0), h.items) {
                ee(h.items, "active"), h.items.removeAttr("aria-selected");
                var Pe = h.items.eq(w);
                W(Pe, "active"), Pe.attr("aria-selected", !0), B(Pe)
              }
            }
          }), h.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), d.length === 0 && (r("body").children().each(function () {
            r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (d.push({
              node: r(this),
              hidden: r(this).attr("aria-hidden"),
              tabIndex: r(this).attr("tabIndex")
            }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
          }), h.close.focus()), f
        }
      }, f.hide = function () {
        return n(h.lightbox).add("opacity .3s").start({
          opacity: 0
        }).then(L), f
      }, f.prev = function () {
        var w = oc(u - 1, p);
        w > -1 && f.show(w)
      }, f.next = function () {
        var w = lc(u + 1, p);
        w > -1 && f.show(w)
      };

      function m(w) {
        return function (M) {
          this === M.target && (M.stopPropagation(), M.preventDefault(), w())
        }
      }
      var c = m(f.prev),
        g = m(f.next),
        y = m(f.hide),
        b = function (w) {
          var M = r(this).index();
          w.preventDefault(), f.show(M)
        },
        _ = function (w, M) {
          w.preventDefault(), M.direction === "left" ? f.next() : M.direction === "right" && f.prev()
        },
        S = function () {
          this.focus()
        };

      function I(w) {
        w.preventDefault()
      }

      function x(w) {
        var M = w.keyCode;
        M === 27 || P(M, "close") ? f.hide() : M === 37 || P(M, "left") ? f.prev() : M === 39 || P(M, "right") ? f.next() : P(M, "item") && r(":focus").click()
      }

      function P(w, M) {
        if (w !== 13 && w !== 32) return !1;
        var k = r(":focus").attr("class"),
          Q = F(M).trim();
        return k.includes(Q)
      }

      function L() {
        h && (h.strip.scrollLeft(0).empty(), ee(h.html, "noscroll"), W(h.lightbox, "hide"), h.view && h.view.remove(), ee(h.content, "group"), W(h.arrowLeft, "inactive"), W(h.arrowRight, "inactive"), u = h.view = void 0, d.forEach(function (w) {
          var M = w.node;
          M && (w.hidden ? M.attr("aria-hidden", w.hidden) : M.removeAttr("aria-hidden"), w.tabIndex ? M.attr("tabIndex", w.tabIndex) : M.removeAttr("tabIndex"))
        }), d = [], r(".active-lightbox").removeClass("active-lightbox").focus())
      }

      function D(w, M) {
        var k = G("img", "img");
        return k.one("load", function () {
          M(k)
        }), k.attr("src", w), k
      }

      function O(w) {
        return function () {
          w.remove()
        }
      }

      function B(w) {
        var M = w.get(0),
          k = h.strip.get(0),
          Q = M.offsetLeft,
          te = M.clientWidth,
          Z = k.scrollLeft,
          re = k.clientWidth,
          ce = k.scrollWidth - re,
          se;
        Q < Z ? se = Math.max(0, Q + te - re) : Q + te > re + Z && (se = Math.min(Q, ce)), se != null && n(h.strip).add("scroll-left 500ms").start({
          "scroll-left": se
        })
      }

      function R(w, M, k) {
        this.$element = w, this.className = M, this.delay = k || 200, this.hide()
      }
      R.prototype.show = function () {
        var w = this;
        w.timeoutId || (w.timeoutId = setTimeout(function () {
          w.$element.removeClass(w.className), delete w.timeoutId
        }, w.delay))
      }, R.prototype.hide = function () {
        var w = this;
        if (w.timeoutId) {
          clearTimeout(w.timeoutId), delete w.timeoutId;
          return
        }
        w.$element.addClass(w.className)
      };

      function F(w, M) {
        return w.replace(l, (M ? " ." : " ") + o)
      }

      function V(w) {
        return F(w, !0)
      }

      function W(w, M) {
        return w.addClass(F(M))
      }

      function ee(w, M) {
        return w.removeClass(F(M))
      }

      function A(w, M, k) {
        return w.toggleClass(F(M), k)
      }

      function q(w, M) {
        return w.attr("aria-hidden", M).attr("tabIndex", M ? -1 : 0)
      }

      function G(w, M) {
        return W(r(t.createElement(M || "div")), w)
      }

      function C(w, M) {
        var k = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + M + '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(k)
      }
      return function () {
        var w = e.navigator.userAgent,
          M = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
          k = w.match(M),
          Q = w.indexOf("Android ") > -1 && w.indexOf("Chrome") === -1;
        if (!Q && (!k || k[2] > 7)) return;
        var te = t.createElement("style");
        t.head.appendChild(te), e.addEventListener("resize", Z, !0);

        function Z() {
          var re = e.innerHeight,
            ce = e.innerWidth,
            se = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + re + "px}.w-lightbox-view {width:" + ce + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * re + "px}.w-lightbox-image {max-width:" + ce + "px;max-height:" + re + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * re + "px}.w-lightbox-strip {padding: 0 " + .01 * re + "px}.w-lightbox-item {width:" + .1 * re + "px;padding:" + .02 * re + "px " + .01 * re + "px}.w-lightbox-thumbnail {height:" + .1 * re + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * re + "px}.w-lightbox-content {margin-top:" + .02 * re + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * re + "px}.w-lightbox-image {max-width:" + .96 * ce + "px;max-height:" + .96 * re + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * ce + "px;max-height:" + .84 * re + "px}}";
          te.textContent = se
        }
        Z()
      }(), f
    }
    sc.define("lightbox", GP.exports = function (e) {
      var t = {},
        r = sc.env(),
        i = kte(window, document, e, r ? "#lightbox-mountpoint" : "body"),
        n = e(document),
        a, s, o = ".w-lightbox",
        l;
      t.ready = t.design = t.preview = p;

      function p() {
        s = r && sc.env("design"), i.destroy(), l = {}, a = n.find(o), a.webflowLightBox(), a.each(function () {
          Bn(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
        })
      }
      jQuery.fn.extend({
        webflowLightBox: function () {
          var d = this;
          e.each(d, function (f, m) {
            var c = e.data(m, o);
            c || (c = e.data(m, o, {
              el: e(m),
              mode: "images",
              images: [],
              embed: ""
            })), c.el.off(o), u(c), s ? c.el.on("setting" + o, u.bind(null, c)) : c.el.on("click" + o, h(c)).on("click" + o, function (g) {
              g.preventDefault()
            })
          })
        }
      });

      function u(d) {
        var f = d.el.children(".w-json").html(),
          m, c;
        if (!f) {
          d.items = [];
          return
        }
        try {
          f = JSON.parse(f)
        } catch (g) {
          console.error("Malformed lightbox JSON configuration.", g)
        }
        v(f), f.items.forEach(function (g) {
          g.$el = d.el
        }), m = f.group, m ? (c = l[m], c || (c = l[m] = []), d.items = c, f.items.length && (d.index = c.length, c.push.apply(c, f.items))) : (d.items = f.items, d.index = 0)
      }

      function h(d) {
        return function () {
          d.items.length && i(d.items, d.index || 0)
        }
      }

      function v(d) {
        d.images && (d.images.forEach(function (f) {
          f.type = "image"
        }), d.items = d.images), d.embed && (d.embed.type = "video", d.items = [d.embed]), d.groupId && (d.group = d.groupId)
      }
      return t
    })
  });
  var jP = E((rce, HP) => {
    var xr = Ze(),
      Nte = hs(),
      $e = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
    xr.define("navbar", HP.exports = function (e, t) {
      var r = {},
        i = e.tram,
        n = e(window),
        a = e(document),
        s = t.debounce,
        o, l, p, u, h = xr.env(),
        v = '<div class="w-nav-overlay" data-wf-ignore />',
        d = ".w-nav",
        f = "w--open",
        m = "w--nav-dropdown-open",
        c = "w--nav-dropdown-toggle-open",
        g = "w--nav-dropdown-list-open",
        y = "w--nav-link-open",
        b = Nte.triggers,
        _ = e();
      r.ready = r.design = r.preview = S, r.destroy = function () {
        _ = e(), I(), l && l.length && l.each(D)
      };

      function S() {
        p = h && xr.env("design"), u = xr.env("editor"), o = e(document.body), l = a.find(d), l.length && (l.each(L), I(), x())
      }

      function I() {
        xr.resize.off(P)
      }

      function x() {
        xr.resize.on(P)
      }

      function P() {
        l.each(M)
      }

      function L(N, J) {
        var ie = e(J),
          K = e.data(J, d);
        K || (K = e.data(J, d, {
          open: !1,
          el: ie,
          config: {},
          selectedIdx: -1
        })), K.menu = ie.find(".w-nav-menu"), K.links = K.menu.find(".w-nav-link"), K.dropdowns = K.menu.find(".w-dropdown"), K.dropdownToggle = K.menu.find(".w-dropdown-toggle"), K.dropdownList = K.menu.find(".w-dropdown-list"), K.button = ie.find(".w-nav-button"), K.container = ie.find(".w-container"), K.overlayContainerId = "w-nav-overlay-" + N, K.outside = C(K);
        var ve = ie.find(".w-nav-brand");
        ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"), K.button.attr("style", "-webkit-user-select: text;"), K.button.attr("aria-label") == null && K.button.attr("aria-label", "menu"), K.button.attr("role", "button"), K.button.attr("tabindex", "0"), K.button.attr("aria-controls", K.overlayContainerId), K.button.attr("aria-haspopup", "menu"), K.button.attr("aria-expanded", "false"), K.el.off(d), K.button.off(d), K.menu.off(d), R(K), p ? (O(K), K.el.on("setting" + d, F(K))) : (B(K), K.button.on("click" + d, q(K)), K.menu.on("click" + d, "a", G(K)), K.button.on("keydown" + d, V(K)), K.el.on("keydown" + d, W(K))), M(N, J)
      }

      function D(N, J) {
        var ie = e.data(J, d);
        ie && (O(ie), e.removeData(J, d))
      }

      function O(N) {
        N.overlay && (se(N, !0), N.overlay.remove(), N.overlay = null)
      }

      function B(N) {
        N.overlay || (N.overlay = e(v).appendTo(N.el), N.overlay.attr("id", N.overlayContainerId), N.parent = N.menu.parent(), se(N, !0))
      }

      function R(N) {
        var J = {},
          ie = N.config || {},
          K = J.animation = N.el.attr("data-animation") || "default";
        J.animOver = /^over/.test(K), J.animDirect = /left$/.test(K) ? -1 : 1, ie.animation !== K && N.open && t.defer(A, N), J.easing = N.el.attr("data-easing") || "ease", J.easing2 = N.el.attr("data-easing2") || "ease";
        var ve = N.el.attr("data-duration");
        J.duration = ve != null ? Number(ve) : 400, J.docHeight = N.el.attr("data-doc-height"), N.config = J
      }

      function F(N) {
        return function (J, ie) {
          ie = ie || {};
          var K = n.width();
          R(N), ie.open === !0 && re(N, !0), ie.open === !1 && se(N, !0), N.open && t.defer(function () {
            K !== n.width() && A(N)
          })
        }
      }

      function V(N) {
        return function (J) {
          switch (J.keyCode) {
            case $e.SPACE:
            case $e.ENTER:
              return q(N)(), J.preventDefault(), J.stopPropagation();
            case $e.ESCAPE:
              return se(N), J.preventDefault(), J.stopPropagation();
            case $e.ARROW_RIGHT:
            case $e.ARROW_DOWN:
            case $e.HOME:
            case $e.END:
              return N.open ? (J.keyCode === $e.END ? N.selectedIdx = N.links.length - 1 : N.selectedIdx = 0, ee(N), J.preventDefault(), J.stopPropagation()) : (J.preventDefault(), J.stopPropagation())
          }
        }
      }

      function W(N) {
        return function (J) {
          if (N.open) switch (N.selectedIdx = N.links.index(document.activeElement), J.keyCode) {
            case $e.HOME:
            case $e.END:
              return J.keyCode === $e.END ? N.selectedIdx = N.links.length - 1 : N.selectedIdx = 0, ee(N), J.preventDefault(), J.stopPropagation();
            case $e.ESCAPE:
              return se(N), N.button.focus(), J.preventDefault(), J.stopPropagation();
            case $e.ARROW_LEFT:
            case $e.ARROW_UP:
              return N.selectedIdx = Math.max(-1, N.selectedIdx - 1), ee(N), J.preventDefault(), J.stopPropagation();
            case $e.ARROW_RIGHT:
            case $e.ARROW_DOWN:
              return N.selectedIdx = Math.min(N.links.length - 1, N.selectedIdx + 1), ee(N), J.preventDefault(), J.stopPropagation()
          }
        }
      }

      function ee(N) {
        if (N.links[N.selectedIdx]) {
          var J = N.links[N.selectedIdx];
          J.focus(), G(J)
        }
      }

      function A(N) {
        N.open && (se(N, !0), re(N, !0))
      }

      function q(N) {
        return s(function () {
          N.open ? se(N) : re(N)
        })
      }

      function G(N) {
        return function (J) {
          var ie = e(this),
            K = ie.attr("href");
          if (!xr.validClick(J.currentTarget)) {
            J.preventDefault();
            return
          }
          K && K.indexOf("#") === 0 && N.open && se(N)
        }
      }

      function C(N) {
        return N.outside && a.off("click" + d, N.outside),
          function (J) {
            var ie = e(J.target);
            u && ie.closest(".w-editor-bem-EditorOverlay").length || w(N, ie)
          }
      }
      var w = s(function (N, J) {
        if (N.open) {
          var ie = J.closest(".w-nav-menu");
          N.menu.is(ie) || se(N)
        }
      });

      function M(N, J) {
        var ie = e.data(J, d),
          K = ie.collapsed = ie.button.css("display") !== "none";
        if (ie.open && !K && !p && se(ie, !0), ie.container.length) {
          var ve = Q(ie);
          ie.links.each(ve), ie.dropdowns.each(ve)
        }
        ie.open && ce(ie)
      }
      var k = "max-width";

      function Q(N) {
        var J = N.container.css(k);
        return J === "none" && (J = ""),
          function (ie, K) {
            K = e(K), K.css(k, ""), K.css(k) === "none" && K.css(k, J)
          }
      }

      function te(N, J) {
        J.setAttribute("data-nav-menu-open", "")
      }

      function Z(N, J) {
        J.removeAttribute("data-nav-menu-open")
      }

      function re(N, J) {
        if (N.open) return;
        N.open = !0, N.menu.each(te), N.links.addClass(y), N.dropdowns.addClass(m), N.dropdownToggle.addClass(c), N.dropdownList.addClass(g), N.button.addClass(f);
        var ie = N.config,
          K = ie.animation;
        (K === "none" || !i.support.transform || ie.duration <= 0) && (J = !0);
        var ve = ce(N),
          Ae = N.menu.outerHeight(!0),
          Pe = N.menu.outerWidth(!0),
          T = N.el.height(),
          z = N.el[0];
        if (M(0, z), b.intro(0, z), xr.redraw.up(), p || a.on("click" + d, N.outside), J) {
          j();
          return
        }
        var H = "transform " + ie.duration + "ms " + ie.easing;
        if (N.overlay && (_ = N.menu.prev(), N.overlay.show().append(N.menu)), ie.animOver) {
          i(N.menu).add(H).set({
            x: ie.animDirect * Pe,
            height: ve
          }).start({
            x: 0
          }).then(j), N.overlay && N.overlay.width(Pe);
          return
        }
        var U = T + Ae;
        i(N.menu).add(H).set({
          y: -U
        }).start({
          y: 0
        }).then(j);

        function j() {
          N.button.attr("aria-expanded", "true")
        }
      }

      function ce(N) {
        var J = N.config,
          ie = J.docHeight ? a.height() : o.height();
        return J.animOver ? N.menu.height(ie) : N.el.css("position") !== "fixed" && (ie -= N.el.outerHeight(!0)), N.overlay && N.overlay.height(ie), ie
      }

      function se(N, J) {
        if (!N.open) return;
        N.open = !1, N.button.removeClass(f);
        var ie = N.config;
        if ((ie.animation === "none" || !i.support.transform || ie.duration <= 0) && (J = !0), b.outro(0, N.el[0]), a.off("click" + d, N.outside), J) {
          i(N.menu).stop(), z();
          return
        }
        var K = "transform " + ie.duration + "ms " + ie.easing2,
          ve = N.menu.outerHeight(!0),
          Ae = N.menu.outerWidth(!0),
          Pe = N.el.height();
        if (ie.animOver) {
          i(N.menu).add(K).start({
            x: Ae * ie.animDirect
          }).then(z);
          return
        }
        var T = Pe + ve;
        i(N.menu).add(K).start({
          y: -T
        }).then(z);

        function z() {
          N.menu.height(""), i(N.menu).set({
            x: 0,
            y: 0
          }), N.menu.each(Z), N.links.removeClass(y), N.dropdowns.removeClass(m), N.dropdownToggle.removeClass(c), N.dropdownList.removeClass(g), N.overlay && N.overlay.children().length && (_.length ? N.menu.insertAfter(_) : N.menu.prependTo(N.parent), N.overlay.attr("style", "").hide()), N.el.triggerHandler("w-close"), N.button.attr("aria-expanded", "false")
        }
      }
      return r
    })
  });
  var XP = E((ice, UP) => {
    var Ir = Ze(),
      Bte = hs(),
      Wt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      },
      WP = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Ir.define("slider", UP.exports = function (e, t) {
      var r = {},
        i = e.tram,
        n = e(document),
        a, s, o = Ir.env(),
        l = ".w-slider",
        p = '<div class="w-slider-dot" data-wf-ignore />',
        u = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
        h = "w-slider-force-show",
        v = Bte.triggers,
        d, f = !1;
      r.ready = function () {
        s = Ir.env("design"), m()
      }, r.design = function () {
        s = !0, setTimeout(m, 1e3)
      }, r.preview = function () {
        s = !1, m()
      }, r.redraw = function () {
        f = !0, m(), f = !1
      }, r.destroy = c;

      function m() {
        a = n.find(l), a.length && (a.each(b), !d && (c(), g()))
      }

      function c() {
        Ir.resize.off(y), Ir.redraw.off(r.redraw)
      }

      function g() {
        Ir.resize.on(y), Ir.redraw.on(r.redraw)
      }

      function y() {
        a.filter(":visible").each(W)
      }

      function b(C, w) {
        var M = e(w),
          k = e.data(w, l);
        k || (k = e.data(w, l, {
          index: 0,
          depth: 1,
          hasFocus: {
            keyboard: !1,
            mouse: !1
          },
          el: M,
          config: {}
        })), k.mask = M.children(".w-slider-mask"), k.left = M.children(".w-slider-arrow-left"), k.right = M.children(".w-slider-arrow-right"), k.nav = M.children(".w-slider-nav"), k.slides = k.mask.children(".w-slide"), k.slides.each(v.reset), f && (k.maskWidth = 0), M.attr("role") === void 0 && M.attr("role", "region"), M.attr("aria-label") === void 0 && M.attr("aria-label", "carousel");
        var Q = k.mask.attr("id");
        if (Q || (Q = "w-slider-mask-" + C, k.mask.attr("id", Q)), !s && !k.ariaLiveLabel && (k.ariaLiveLabel = e(u).appendTo(k.mask)), k.left.attr("role", "button"), k.left.attr("tabindex", "0"), k.left.attr("aria-controls", Q), k.left.attr("aria-label") === void 0 && k.left.attr("aria-label", "previous slide"), k.right.attr("role", "button"), k.right.attr("tabindex", "0"), k.right.attr("aria-controls", Q), k.right.attr("aria-label") === void 0 && k.right.attr("aria-label", "next slide"), !i.support.transform) {
          k.left.hide(), k.right.hide(), k.nav.hide(), d = !0;
          return
        }
        k.el.off(l), k.left.off(l), k.right.off(l), k.nav.off(l), _(k), s ? (k.el.on("setting" + l, R(k)), B(k), k.hasTimer = !1) : (k.el.on("swipe" + l, R(k)), k.left.on("click" + l, P(k)), k.right.on("click" + l, L(k)), k.left.on("keydown" + l, x(k, P)), k.right.on("keydown" + l, x(k, L)), k.nav.on("keydown" + l, "> div", R(k)), k.config.autoplay && !k.hasTimer && (k.hasTimer = !0, k.timerCount = 1, O(k)), k.el.on("mouseenter" + l, I(k, !0, "mouse")), k.el.on("focusin" + l, I(k, !0, "keyboard")), k.el.on("mouseleave" + l, I(k, !1, "mouse")), k.el.on("focusout" + l, I(k, !1, "keyboard"))), k.nav.on("click" + l, "> div", R(k)), o || k.mask.contents().filter(function () {
          return this.nodeType === 3
        }).remove();
        var te = M.filter(":hidden");
        te.addClass(h);
        var Z = M.parents(":hidden");
        Z.addClass(h), f || W(C, w), te.removeClass(h), Z.removeClass(h)
      }

      function _(C) {
        var w = {};
        w.crossOver = 0, w.animation = C.el.attr("data-animation") || "slide", w.animation === "outin" && (w.animation = "cross", w.crossOver = .5), w.easing = C.el.attr("data-easing") || "ease";
        var M = C.el.attr("data-duration");
        if (w.duration = M != null ? parseInt(M, 10) : 500, S(C.el.attr("data-infinite")) && (w.infinite = !0), S(C.el.attr("data-disable-swipe")) && (w.disableSwipe = !0), S(C.el.attr("data-hide-arrows")) ? w.hideArrows = !0 : C.config.hideArrows && (C.left.show(), C.right.show()), S(C.el.attr("data-autoplay"))) {
          w.autoplay = !0, w.delay = parseInt(C.el.attr("data-delay"), 10) || 2e3, w.timerMax = parseInt(C.el.attr("data-autoplay-limit"), 10);
          var k = "mousedown" + l + " touchstart" + l;
          s || C.el.off(k).one(k, function () {
            B(C)
          })
        }
        var Q = C.right.width();
        w.edge = Q ? Q + 40 : 100, C.config = w
      }

      function S(C) {
        return C === "1" || C === "true"
      }

      function I(C, w, M) {
        return function (k) {
          if (w) C.hasFocus[M] = w;
          else if (e.contains(C.el.get(0), k.relatedTarget) || (C.hasFocus[M] = w, C.hasFocus.mouse && M === "keyboard" || C.hasFocus.keyboard && M === "mouse")) return;
          w ? (C.ariaLiveLabel.attr("aria-live", "polite"), C.hasTimer && B(C)) : (C.ariaLiveLabel.attr("aria-live", "off"), C.hasTimer && O(C))
        }
      }

      function x(C, w) {
        return function (M) {
          switch (M.keyCode) {
            case Wt.SPACE:
            case Wt.ENTER:
              return w(C)(), M.preventDefault(), M.stopPropagation()
          }
        }
      }

      function P(C) {
        return function () {
          V(C, {
            index: C.index - 1,
            vector: -1
          })
        }
      }

      function L(C) {
        return function () {
          V(C, {
            index: C.index + 1,
            vector: 1
          })
        }
      }

      function D(C, w) {
        var M = null;
        w === C.slides.length && (m(), ee(C)), t.each(C.anchors, function (k, Q) {
          e(k.els).each(function (te, Z) {
            e(Z).index() === w && (M = Q)
          })
        }), M != null && V(C, {
          index: M,
          immediate: !0
        })
      }

      function O(C) {
        B(C);
        var w = C.config,
          M = w.timerMax;
        M && C.timerCount++ > M || (C.timerId = window.setTimeout(function () {
          C.timerId == null || s || (L(C)(), O(C))
        }, w.delay))
      }

      function B(C) {
        window.clearTimeout(C.timerId), C.timerId = null
      }

      function R(C) {
        return function (w, M) {
          M = M || {};
          var k = C.config;
          if (s && w.type === "setting") {
            if (M.select === "prev") return P(C)();
            if (M.select === "next") return L(C)();
            if (_(C), ee(C), M.select == null) return;
            D(C, M.select);
            return
          }
          if (w.type === "swipe") return k.disableSwipe || Ir.env("editor") ? void 0 : M.direction === "left" ? L(C)() : M.direction === "right" ? P(C)() : void 0;
          if (C.nav.has(w.target).length) {
            var Q = e(w.target).index();
            if (w.type === "click" && V(C, {
                index: Q
              }), w.type === "keydown") switch (w.keyCode) {
              case Wt.ENTER:
              case Wt.SPACE: {
                V(C, {
                  index: Q
                }), w.preventDefault();
                break
              }
              case Wt.ARROW_LEFT:
              case Wt.ARROW_UP: {
                F(C.nav, Math.max(Q - 1, 0)), w.preventDefault();
                break
              }
              case Wt.ARROW_RIGHT:
              case Wt.ARROW_DOWN: {
                F(C.nav, Math.min(Q + 1, C.pages)), w.preventDefault();
                break
              }
              case Wt.HOME: {
                F(C.nav, 0), w.preventDefault();
                break
              }
              case Wt.END: {
                F(C.nav, C.pages), w.preventDefault();
                break
              }
              default:
                return
            }
          }
        }
      }

      function F(C, w) {
        var M = C.children().eq(w).focus();
        C.children().not(M)
      }

      function V(C, w) {
        w = w || {};
        var M = C.config,
          k = C.anchors;
        C.previous = C.index;
        var Q = w.index,
          te = {};
        Q < 0 ? (Q = k.length - 1, M.infinite && (te.x = -C.endX, te.from = 0, te.to = k[0].width)) : Q >= k.length && (Q = 0, M.infinite && (te.x = k[k.length - 1].width, te.from = -k[k.length - 1].x, te.to = te.from - te.x)), C.index = Q;
        var Z = C.nav.children().eq(Q).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
        C.nav.children().not(Z).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), M.hideArrows && (C.index === k.length - 1 ? C.right.hide() : C.right.show(), C.index === 0 ? C.left.hide() : C.left.show());
        var re = C.offsetX || 0,
          ce = C.offsetX = -k[C.index].x,
          se = {
            x: ce,
            opacity: 1,
            visibility: ""
          },
          N = e(k[C.index].els),
          J = e(k[C.previous] && k[C.previous].els),
          ie = C.slides.not(N),
          K = M.animation,
          ve = M.easing,
          Ae = Math.round(M.duration),
          Pe = w.vector || (C.index > C.previous ? 1 : -1),
          T = "opacity " + Ae + "ms " + ve,
          z = "transform " + Ae + "ms " + ve;
        if (N.find(WP).removeAttr("tabindex"), N.removeAttr("aria-hidden"), N.find("*").removeAttr("aria-hidden"), ie.find(WP).attr("tabindex", "-1"), ie.attr("aria-hidden", "true"), ie.find("*").attr("aria-hidden", "true"), s || (N.each(v.intro), ie.each(v.outro)), w.immediate && !f) {
          i(N).set(se), j();
          return
        }
        if (C.index === C.previous) return;
        if (s || C.ariaLiveLabel.text(`Slide ${Q+1} of ${k.length}.`), K === "cross") {
          var H = Math.round(Ae - Ae * M.crossOver),
            U = Math.round(Ae - H);
          T = "opacity " + H + "ms " + ve, i(J).set({
            visibility: ""
          }).add(T).start({
            opacity: 0
          }), i(N).set({
            visibility: "",
            x: ce,
            opacity: 0,
            zIndex: C.depth++
          }).add(T).wait(U).then({
            opacity: 1
          }).then(j);
          return
        }
        if (K === "fade") {
          i(J).set({
            visibility: ""
          }).stop(), i(N).set({
            visibility: "",
            x: ce,
            opacity: 0,
            zIndex: C.depth++
          }).add(T).start({
            opacity: 1
          }).then(j);
          return
        }
        if (K === "over") {
          se = {
            x: C.endX
          }, i(J).set({
            visibility: ""
          }).stop(), i(N).set({
            visibility: "",
            zIndex: C.depth++,
            x: ce + k[C.index].width * Pe
          }).add(z).start({
            x: ce
          }).then(j);
          return
        }
        M.infinite && te.x ? (i(C.slides.not(J)).set({
          visibility: "",
          x: te.x
        }).add(z).start({
          x: ce
        }), i(J).set({
          visibility: "",
          x: te.from
        }).add(z).start({
          x: te.to
        }), C.shifted = J) : (M.infinite && C.shifted && (i(C.shifted).set({
          visibility: "",
          x: re
        }), C.shifted = null), i(C.slides).set({
          visibility: ""
        }).add(z).start({
          x: ce
        }));

        function j() {
          N = e(k[C.index].els), ie = C.slides.not(N), K !== "slide" && (se.visibility = "hidden"), i(ie).set(se)
        }
      }

      function W(C, w) {
        var M = e.data(w, l);
        if (M) {
          if (q(M)) return ee(M);
          s && G(M) && ee(M)
        }
      }

      function ee(C) {
        var w = 1,
          M = 0,
          k = 0,
          Q = 0,
          te = C.maskWidth,
          Z = te - C.config.edge;
        Z < 0 && (Z = 0), C.anchors = [{
          els: [],
          x: 0,
          width: 0
        }], C.slides.each(function (ce, se) {
          k - M > Z && (w++, M += te, C.anchors[w - 1] = {
            els: [],
            x: k,
            width: 0
          }), Q = e(se).outerWidth(!0), k += Q, C.anchors[w - 1].width += Q, C.anchors[w - 1].els.push(se);
          var N = ce + 1 + " of " + C.slides.length;
          e(se).attr("aria-label", N), e(se).attr("role", "group")
        }), C.endX = k, s && (C.pages = null), C.nav.length && C.pages !== w && (C.pages = w, A(C));
        var re = C.index;
        re >= w && (re = w - 1), V(C, {
          immediate: !0,
          index: re
        })
      }

      function A(C) {
        var w = [],
          M, k = C.el.attr("data-nav-spacing");
        k && (k = parseFloat(k) + "px");
        for (var Q = 0, te = C.pages; Q < te; Q++) M = e(p), M.attr("aria-label", "Show slide " + (Q + 1) + " of " + te).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), C.nav.hasClass("w-num") && M.text(Q + 1), k != null && M.css({
          "margin-left": k,
          "margin-right": k
        }), w.push(M);
        C.nav.empty().append(w)
      }

      function q(C) {
        var w = C.mask.width();
        return C.maskWidth !== w ? (C.maskWidth = w, !0) : !1
      }

      function G(C) {
        var w = 0;
        return C.slides.each(function (M, k) {
          w += e(k).outerWidth(!0)
        }), C.slidesWidth !== w ? (C.slidesWidth = w, !0) : !1
      }
      return r
    })
  });
  Q_();
  Z_();
  J_();
  rS();
  nS();
  sS();
  uS();
  hs();
  OP();
  RP();
  FP();
  LP();
  BP();
  zP();
  jP();
  XP();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  "events": {
    "e-4": {
      "id": "e-4",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-2",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-3"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616209996395
    },
    "e-6": {
      "id": "e-6",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-5"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616211028504
    },
    "e-8": {
      "id": "e-8",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-7"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616211310937
    },
    "e-10": {
      "id": "e-10",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-4",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-9"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616217989638
    },
    "e-12": {
      "id": "e-12",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-3",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-11"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616218003635
    },
    "e-14": {
      "id": "e-14",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-16",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-13"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616218359265
    },
    "e-16": {
      "id": "e-16",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-7",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-15"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616218573020
    },
    "e-18": {
      "id": "e-18",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-8",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-17"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616218884159
    },
    "e-20": {
      "id": "e-20",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-9",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-19"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616219097454
    },
    "e-22": {
      "id": "e-22",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-21"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616220010209
    },
    "e-24": {
      "id": "e-24",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-11",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-23"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616220262339
    },
    "e-26": {
      "id": "e-26",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-12",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-25"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616220386286
    },
    "e-28": {
      "id": "e-28",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-13",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-27"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616220704431
    },
    "e-30": {
      "id": "e-30",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-13",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-29"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616220751484
    },
    "e-31": {
      "id": "e-31",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-14",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-32"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "63943b9c-6471-a1d0-0e34-f689a7f14369",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "63943b9c-6471-a1d0-0e34-f689a7f14369",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616303725389
    },
    "e-32": {
      "id": "e-32",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-15",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-31"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "63943b9c-6471-a1d0-0e34-f689a7f14369",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "63943b9c-6471-a1d0-0e34-f689a7f14369",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616303725396
    },
    "e-36": {
      "id": "e-36",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "PAGE_FINISH",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-35"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792",
        "appliesTo": "PAGE",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616524743553
    },
    "e-43": {
      "id": "e-43",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-19",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-44"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "39b1d19c-cc49-1a0d-2040-e423fb1d8bc9",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "39b1d19c-cc49-1a0d-2040-e423fb1d8bc9",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616771838045
    },
    "e-44": {
      "id": "e-44",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-20",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-43"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "39b1d19c-cc49-1a0d-2040-e423fb1d8bc9",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "39b1d19c-cc49-1a0d-2040-e423fb1d8bc9",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1616771838050
    },
    "e-45": {
      "id": "e-45",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-19",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-46"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "605f6f12150ebedf38e5ef9d|5488898d-4b2d-f94f-1361-96e63ad75ef6",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "605f6f12150ebedf38e5ef9d|5488898d-4b2d-f94f-1361-96e63ad75ef6",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1645828912478
    },
    "e-46": {
      "id": "e-46",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-20",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-45"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "605f6f12150ebedf38e5ef9d|5488898d-4b2d-f94f-1361-96e63ad75ef6",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "605f6f12150ebedf38e5ef9d|5488898d-4b2d-f94f-1361-96e63ad75ef6",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1645828912478
    },
    "e-47": {
      "id": "e-47",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-14",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-48"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "63b7053e5d8fb7fe651c4be1|b3d8ec54-2d57-f1a6-d0c6-a5e6ae275ba3",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "63b7053e5d8fb7fe651c4be1|b3d8ec54-2d57-f1a6-d0c6-a5e6ae275ba3",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1673026528540
    },
    "e-48": {
      "id": "e-48",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-15",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-47"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "63b7053e5d8fb7fe651c4be1|b3d8ec54-2d57-f1a6-d0c6-a5e6ae275ba3",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "63b7053e5d8fb7fe651c4be1|b3d8ec54-2d57-f1a6-d0c6-a5e6ae275ba3",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1673026528540
    },
    "e-49": {
      "id": "e-49",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-39",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-50"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "63b864d83b7bfcbcdf0c9722|b3d8ec54-2d57-f1a6-d0c6-a5e6ae275ba3",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "63b864d83b7bfcbcdf0c9722|b3d8ec54-2d57-f1a6-d0c6-a5e6ae275ba3",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1673028825160
    },
    "e-50": {
      "id": "e-50",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-40",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-49"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "63b864d83b7bfcbcdf0c9722|b3d8ec54-2d57-f1a6-d0c6-a5e6ae275ba3",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "63b864d83b7bfcbcdf0c9722|b3d8ec54-2d57-f1a6-d0c6-a5e6ae275ba3",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1673028825160
    },
    "e-51": {
      "id": "e-51",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-14",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-52"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792|5d387f6d-e77f-a39c-0dc9-08872c592c09",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792|5d387f6d-e77f-a39c-0dc9-08872c592c09",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1676309166978
    },
    "e-52": {
      "id": "e-52",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-15",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-51"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "6055103e0e01ad03e00b8792|5d387f6d-e77f-a39c-0dc9-08872c592c09",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "6055103e0e01ad03e00b8792|5d387f6d-e77f-a39c-0dc9-08872c592c09",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1676309166978
    },
    "e-53": {
      "id": "e-53",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-44",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-54"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|3614d29d-ce1e-2401-a4f5-b97ada968a7c",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|3614d29d-ce1e-2401-a4f5-b97ada968a7c",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1676572955502
    },
    "e-54": {
      "id": "e-54",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-45",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-53"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|3614d29d-ce1e-2401-a4f5-b97ada968a7c",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|3614d29d-ce1e-2401-a4f5-b97ada968a7c",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1676572955502
    },
    "e-55": {
      "id": "e-55",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-46",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-56"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|c8c74a2c-431a-10e3-b135-1f162f57bc85",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|c8c74a2c-431a-10e3-b135-1f162f57bc85",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1676572980399
    },
    "e-56": {
      "id": "e-56",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-47",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-55"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|c8c74a2c-431a-10e3-b135-1f162f57bc85",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|c8c74a2c-431a-10e3-b135-1f162f57bc85",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1676572980399
    },
    "e-57": {
      "id": "e-57",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-48",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-58"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|206833f9-8551-df61-06bf-af6cf35bf8d9",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|206833f9-8551-df61-06bf-af6cf35bf8d9",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1676572991665
    },
    "e-58": {
      "id": "e-58",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-49",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-57"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|206833f9-8551-df61-06bf-af6cf35bf8d9",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".nav-link.mobile-nav-link",
        "originalId": "6055103e0e01ad03e00b8792|206833f9-8551-df61-06bf-af6cf35bf8d9",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1676572991665
    }
  },
  "actionLists": {
    "a-2": {
      "id": "a-2",
      "title": "Top Logo",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-2-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "d40ac25f-f8cd-930a-1aff-ff5288309996"
            },
            "yValue": -56,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-2-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "outQuad",
            "duration": 700,
            "target": {
              "id": "d40ac25f-f8cd-930a-1aff-ff5288309996"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616211038577
    },
    "a": {
      "id": "a",
      "title": "CRSA",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 3000,
            "target": {
              "id": "6055103e0e01ad03e00b8792|d8a7fcff-866e-3626-8bb6-1a0ca9cf958b"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-n-5",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|d8a7fcff-866e-3626-8bb6-1a0ca9cf958b"
            },
            "xValue": 32,
            "yValue": 0,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "DEG"
          }
        }, {
          "id": "a-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|d8a7fcff-866e-3626-8bb6-1a0ca9cf958b"
            },
            "yValue": 56,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 1000,
            "target": {
              "id": "6055103e0e01ad03e00b8792|d8a7fcff-866e-3626-8bb6-1a0ca9cf958b"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "outQuad",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|d8a7fcff-866e-3626-8bb6-1a0ca9cf958b"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-n-6",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "swingFrom",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|d8a7fcff-866e-3626-8bb6-1a0ca9cf958b"
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "DEG"
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616210004721
    },
    "a-5": {
      "id": "a-5",
      "title": "Architecture",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-5-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|ba78d293-dc33-93e9-6291-433c96b406c0"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-5-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|ba78d293-dc33-93e9-6291-433c96b406c0"
            },
            "xValue": 32,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-5-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "outQuad",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|ba78d293-dc33-93e9-6291-433c96b406c0"
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-5-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|ba78d293-dc33-93e9-6291-433c96b406c0"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616217531167
    },
    "a-4": {
      "id": "a-4",
      "title": "Landscape",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-4-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|7ab8650b-8227-7225-e154-a4bbe6466dad"
            },
            "xValue": 32,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-4-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|7ab8650b-8227-7225-e154-a4bbe6466dad"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-4-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 200,
            "easing": "outQuad",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|7ab8650b-8227-7225-e154-a4bbe6466dad"
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-4-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 200,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|7ab8650b-8227-7225-e154-a4bbe6466dad"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616217285330
    },
    "a-3": {
      "id": "a-3",
      "title": "Design",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-3-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|e78f37b0-e168-0038-a72e-fb99a6d93467"
            },
            "xValue": 32,
            "yValue": 0,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-3-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|e78f37b0-e168-0038-a72e-fb99a6d93467"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-3-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 400,
            "easing": "outQuad",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|e78f37b0-e168-0038-a72e-fb99a6d93467"
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-3-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 400,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|e78f37b0-e168-0038-a72e-fb99a6d93467"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616216938723
    },
    "a-16": {
      "id": "a-16",
      "title": "Since 1976 Mobile",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-16-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|f16d3ce6-6d0a-904a-c1c9-ea36bc1c59ed"
            },
            "xValue": -32,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-16-n-7",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|f16d3ce6-6d0a-904a-c1c9-ea36bc1c59ed"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-16-n-9",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|f16d3ce6-6d0a-904a-c1c9-ea36bc1c59ed"
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-16-n-10",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|f16d3ce6-6d0a-904a-c1c9-ea36bc1c59ed"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616218364181
    },
    "a-7": {
      "id": "a-7",
      "title": "Projects",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-7-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|9d156ef6-7cfa-92f3-8e53-e4cd9d96b8c6"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-7-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 750,
            "easing": "easeOut",
            "duration": 1500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|9d156ef6-7cfa-92f3-8e53-e4cd9d96b8c6"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616218579760
    },
    "a-8": {
      "id": "a-8",
      "title": "Nav 1",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-8-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "39b1d19c-cc49-1a0d-2040-e423fb1d8bc9"
            },
            "yValue": -32,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-8-n-6",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "39b1d19c-cc49-1a0d-2040-e423fb1d8bc9"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-8-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 250,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "39b1d19c-cc49-1a0d-2040-e423fb1d8bc9"
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-8-n-8",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 250,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "39b1d19c-cc49-1a0d-2040-e423fb1d8bc9"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616218889948
    },
    "a-9": {
      "id": "a-9",
      "title": "Nav 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-9-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "dfcc92ad-71ba-0977-f72d-813765b19ed1"
            },
            "yValue": -32,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-9-n-6",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "dfcc92ad-71ba-0977-f72d-813765b19ed1"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-9-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 350,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "dfcc92ad-71ba-0977-f72d-813765b19ed1"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-9-n-8",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 350,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "dfcc92ad-71ba-0977-f72d-813765b19ed1"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616219218094
    },
    "a-10": {
      "id": "a-10",
      "title": "Nav 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-10-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "4d02d74f-1938-20bf-abdf-6636686b5b28"
            },
            "yValue": -32,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-10-n-6",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "4d02d74f-1938-20bf-abdf-6636686b5b28"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-10-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 450,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "4d02d74f-1938-20bf-abdf-6636686b5b28"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-10-n-8",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 450,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "4d02d74f-1938-20bf-abdf-6636686b5b28"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616220017134
    },
    "a-11": {
      "id": "a-11",
      "title": "Nav 4",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-11-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5c164ec1-eef6-7043-208e-6ea48038fd27"
            },
            "yValue": -32,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-11-n-5",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5c164ec1-eef6-7043-208e-6ea48038fd27"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-11-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 550,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "5c164ec1-eef6-7043-208e-6ea48038fd27"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-11-n-8",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 550,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "5c164ec1-eef6-7043-208e-6ea48038fd27"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616220268702
    },
    "a-12": {
      "id": "a-12",
      "title": "Nav 5",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-12-n-5",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "d13c2744-1939-585a-5b07-8e22f3460ff2"
            },
            "yValue": -32,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-12-n-6",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "d13c2744-1939-585a-5b07-8e22f3460ff2"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-12-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 650,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "d13c2744-1939-585a-5b07-8e22f3460ff2"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-12-n-8",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 650,
            "easing": "easeOut",
            "duration": 350,
            "target": {
              "id": "d13c2744-1939-585a-5b07-8e22f3460ff2"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616220394010
    },
    "a-13": {
      "id": "a-13",
      "title": "Nav Arrow",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-13-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "63943b9c-6471-a1d0-0e34-f689a7f14367"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-13-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "63943b9c-6471-a1d0-0e34-f689a7f14367"
            },
            "xValue": 32,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-13-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 750,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "63943b9c-6471-a1d0-0e34-f689a7f14367"
            },
            "xValue": 1,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-13-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 750,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "63943b9c-6471-a1d0-0e34-f689a7f14367"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616220709383
    },
    "a-14": {
      "id": "a-14",
      "title": "Menu Open",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-14-n-2",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "f8e4520b-06fc-5563-6089-ba685a5c10d3"
            },
            "xValue": 0,
            "yValue": 0,
            "zValue": 45,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "deg"
          }
        }, {
          "id": "a-14-n-5",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "a15d6af6-4055-44de-4450-94ff032617cc"
            },
            "zValue": -45,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }, {
          "id": "a-14-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 100,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "f8e4520b-06fc-5563-6089-ba685a5c10d3"
            },
            "xValue": 0,
            "yValue": 2,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-14-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 100,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "a15d6af6-4055-44de-4450-94ff032617cc"
            },
            "yValue": -3,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1616303745089
    },
    "a-15": {
      "id": "a-15",
      "title": "Menu Close",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-15-n-5",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "f8e4520b-06fc-5563-6089-ba685a5c10d3"
            },
            "zValue": 0,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }, {
          "id": "a-15-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 100,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "f8e4520b-06fc-5563-6089-ba685a5c10d3"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-15-n-7",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "a15d6af6-4055-44de-4450-94ff032617cc"
            },
            "zValue": 0,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }, {
          "id": "a-15-n-8",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 100,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "a15d6af6-4055-44de-4450-94ff032617cc"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1616303745089
    },
    "a-6": {
      "id": "a-6",
      "title": "Since 1975",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-6-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|de07c5ee-aee1-f44b-9123-3afd1abe0b30"
            },
            "xValue": -32,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-6-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|de07c5ee-aee1-f44b-9123-3afd1abe0b30"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-6-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuad",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|de07c5ee-aee1-f44b-9123-3afd1abe0b30"
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-6-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "6055103e0e01ad03e00b8792|de07c5ee-aee1-f44b-9123-3afd1abe0b30"
            },
            "xValue": 0,
            "xUnit": "px",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616218364181
    },
    "a-19": {
      "id": "a-19",
      "title": "Underline In",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-19-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 0,
            "locked": false
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-19-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outExpo",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 1,
            "locked": false
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616771761154
    },
    "a-20": {
      "id": "a-20",
      "title": "Underline Out",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-20-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outExpo",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 0,
            "locked": false
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1616771761154
    },
    "a-39": {
      "id": "a-39",
      "title": "Menu Open 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-39-n",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "63b864d83b7bfcbcdf0c9722|f8e4520b-06fc-5563-6089-ba685a5c10d3"
            },
            "xValue": 0,
            "yValue": 0,
            "zValue": 45,
            "xUnit": "deg",
            "yUnit": "deg",
            "zUnit": "deg"
          }
        }, {
          "id": "a-39-n-2",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "63b864d83b7bfcbcdf0c9722|a15d6af6-4055-44de-4450-94ff032617cc"
            },
            "zValue": -45,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }, {
          "id": "a-39-n-3",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 100,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "63b864d83b7bfcbcdf0c9722|f8e4520b-06fc-5563-6089-ba685a5c10d3"
            },
            "xValue": 0,
            "yValue": 2,
            "xUnit": "px",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-39-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 100,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "63b864d83b7bfcbcdf0c9722|a15d6af6-4055-44de-4450-94ff032617cc"
            },
            "yValue": -3,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1616303745089
    },
    "a-40": {
      "id": "a-40",
      "title": "Menu Close 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-40-n",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "63b864d83b7bfcbcdf0c9722|f8e4520b-06fc-5563-6089-ba685a5c10d3"
            },
            "zValue": 0,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }, {
          "id": "a-40-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 100,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "63b864d83b7bfcbcdf0c9722|f8e4520b-06fc-5563-6089-ba685a5c10d3"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }, {
          "id": "a-40-n-3",
          "actionTypeId": "TRANSFORM_ROTATE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 250,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "63b864d83b7bfcbcdf0c9722|a15d6af6-4055-44de-4450-94ff032617cc"
            },
            "zValue": 0,
            "xUnit": "DEG",
            "yUnit": "DEG",
            "zUnit": "deg"
          }
        }, {
          "id": "a-40-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "ease",
            "duration": 100,
            "target": {
              "useEventTarget": "CHILDREN",
              "id": "63b864d83b7bfcbcdf0c9722|a15d6af6-4055-44de-4450-94ff032617cc"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "px",
            "zUnit": "PX"
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1616303745089
    },
    "a-44": {
      "id": "a-44",
      "title": "Underline In 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-44-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 0,
            "locked": false
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-44-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outExpo",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 1,
            "locked": false
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616771761154
    },
    "a-45": {
      "id": "a-45",
      "title": "Underline Out 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-45-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outExpo",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 0,
            "locked": false
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1616771761154
    },
    "a-46": {
      "id": "a-46",
      "title": "Underline In 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-46-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 0,
            "locked": false
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-46-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outExpo",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 1,
            "locked": false
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616771761154
    },
    "a-47": {
      "id": "a-47",
      "title": "Underline Out 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-47-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outExpo",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 0,
            "locked": false
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1616771761154
    },
    "a-48": {
      "id": "a-48",
      "title": "Underline In 4",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-48-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 0,
            "locked": false
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-48-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outExpo",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 1,
            "locked": false
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1616771761154
    },
    "a-49": {
      "id": "a-49",
      "title": "Underline Out 4",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-49-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outExpo",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".underline",
              "selectorGuids": ["a3ad2fae-d197-7dd7-1c20-400795c92743"]
            },
            "xValue": 0,
            "locked": false
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1616771761154
    }
  },
  "site": {
    "mediaQueries": [{
      "key": "main",
      "min": 992,
      "max": 10000
    }, {
      "key": "medium",
      "min": 768,
      "max": 991
    }, {
      "key": "small",
      "min": 480,
      "max": 767
    }, {
      "key": "tiny",
      "min": 0,
      "max": 479
    }]
  }
});