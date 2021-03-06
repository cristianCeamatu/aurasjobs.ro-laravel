!(function(t) {
  var e = {};
  function a(n) {
    if (e[n]) return e[n].exports;
    var s = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
  }
  (a.m = t),
    (a.c = e),
    (a.d = function(t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function(t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          a.d(
            n,
            s,
            function(e) {
              return t[e];
            }.bind(null, s)
          );
      return n;
    }),
    (a.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "/"),
    a((a.s = 0));
})([
  function(t, e, a) {
    a(1), (t.exports = a(2));
  },
  function(t, e) {
    !(function(t) {
      "use strict";
      t(document).on("click", "a.page-scroll", function(e) {
        var a = t(this);
        t("html, body")
          .stop()
          .animate(
            { scrollTop: t(a.attr("href")).offset().top - 54 },
            1250,
            "easeInOutExpo"
          ),
          e.preventDefault();
      }),
        t("body").scrollspy({ target: "#mainNav", offset: 54 }),
        t(".navbar-collapse>ul>li>a").click(function() {
          t(".navbar-collapse").collapse("hide");
        }),
        t(window).scroll(function() {
          t("#mainNav").offset().top > 100
            ? t("#mainNav").addClass("navbar-shrink")
            : t("#mainNav").removeClass("navbar-shrink");
        });
    })(jQuery),
      $(function() {
        $("#applyForm input,#applyForm textarea").jqBootstrapValidation({
          preventSubmit: !0,
          submitError: function(t, e, a) {},
          submitSuccess: function(t, e) {
            e.preventDefault(), $("#modal-apply").hide();
            var a = $("input#applyName").val(),
              n = a;
            n.indexOf(" ") >= 0 &&
              (n = a
                .split(" ")
                .slice(0, -1)
                .join(" "));
            var s = new FormData();
            s.append("name", a),
              s.append("cv", $("input#cv")[0].files[0]),
              s.append("email", $("input#applyEmail").val()),
              s.append("phone", $("input#applyPhone").val()),
              s.append("department", $("select#department").val()),
              s.append("_token", token),
              $("textarea#applyMessage").val() &&
                s.append("message", $("textarea#applyMessage").val()),
              $("#applySuccess").html("<div class='alert alert-warning'>"),
              $("#applySuccess > .alert-warning")
                .html(
                  "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                )
                .append("</button>"),
              $("#applySuccess > .alert-warning").append(
                "<strong>Sending request. Give us a sec...</strong>"
              ),
              $("#applySuccess > .alert-warning").append(
                "<div id='fountainG'>"
              ),
              $("#fountainG").append(
                "<div id='fountainG_1' class='fountainG'></div><div id='fountainG_2' class='fountainG'></div><div id='fountainG_3' class='fountainG'></div><div id='fountainG_4' class='fountainG'></div><div id='fountainG_5' class='fountainG'></div><div id='fountainG_6' class='fountainG'></div><div id='fountainG_7' class='fountainG'></div><div id='fountainG_8' class='fountainG'></div></div>"
              ),
              $("#applySuccess > .alert-warning").append("</div>"),
              $.ajax({
                type: "POST",
                url: applyUrl,
                data: s,
                processData: !1,
                contentType: !1,
                cache: !1,
                success: function(t) {
                  $("#applySuccess").html("<div class='alert alert-success'>"),
                    $("#applySuccess > .alert-success")
                      .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                      )
                      .append("</button>"),
                    $("#applySuccess > .alert-success").append(
                      "<strong>Your application was successful. We will be back to you shortly. Thank you, Mr/Ms " +
                        n +
                        "</strong>"
                    ),
                    $("#applySuccess > .alert-success").append("</div>"),
                    $("#applyForm").trigger("reset"),
                    $("#modal-apply").show();
                },
                error: function(t) {
                  var e = '<ul class="list-unstyled">';
                  for (datos in (void 0 === t.responseJSON &&
                    (e +=
                      "<li>Sorry " +
                      n +
                      ", it seems something went wrong. Please try again later!</li>"),
                  t.responseJSON))
                    e += "<li>" + t.responseJSON[datos] + "</li>";
                  (e += "</ul>"),
                    $("#applySuccess").html("<div class='alert alert-danger'>"),
                    $("#applySuccess > .alert-danger")
                      .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                      )
                      .append("</button>"),
                    $("#applySuccess > .alert-danger").append(
                      $("<strong>").html(e)
                    ),
                    $("#applySuccess > .alert-danger").append("</div>"),
                    $("#modal-apply").show();
                },
              });
          },
          filter: function() {
            return $(this).is(":visible");
          },
        }),
          $('a[data-toggle="tab"]').click(function(t) {
            t.preventDefault(), $(this).tab("show");
          });
      }),
      $("#applyName").focus(function() {
        $("#applySuccess").html("");
      }),
      $(function() {
        $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
          preventSubmit: !0,
          submitError: function(t, e, a) {},
          submitSuccess: function(t, e) {
            e.preventDefault(), $("#modal-contact").hide();
            var a = $("input#name").val(),
              n = $("input#email").val(),
              s = $("input#phone").val(),
              i = $("textarea#message").val(),
              o = a;
            o.indexOf(" ") >= 0 &&
              (o = a
                .split(" ")
                .slice(0, -1)
                .join(" ")),
              $("#success").html("<div class='alert alert-warning'>"),
              $("#success > .alert-warning")
                .html(
                  "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                )
                .append("</button>"),
              $("#success > .alert-warning").append(
                "<strong>Sending request. Give us a sec...</strong>"
              ),
              $("#success > .alert-warning").append("<div id='fountainG'>"),
              $("#fountainG").append(
                "<div id='fountainG_1' class='fountainG'></div><div id='fountainG_2' class='fountainG'></div><div id='fountainG_3' class='fountainG'></div><div id='fountainG_4' class='fountainG'></div><div id='fountainG_5' class='fountainG'></div><div id='fountainG_6' class='fountainG'></div><div id='fountainG_7' class='fountainG'></div><div id='fountainG_8' class='fountainG'></div></div>"
              ),
              $("#success > .alert-warning").append("</div>"),
              $.ajax({
                type: "POST",
                url: url,
                data: {
                  name: a,
                  email: n,
                  phone: s,
                  message: i,
                  _token: token,
                },
                cache: !1,
                success: function() {
                  $("#success").html("<div class='alert alert-success'>"),
                    $("#success > .alert-success")
                      .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                      )
                      .append("</button>"),
                    $("#success > .alert-success").append(
                      "<strong>Your message has been sent. Thank you Mr/Ms " +
                        o +
                        "</strong>"
                    ),
                    $("#success > .alert-success").append("</div>"),
                    $("#contactForm").trigger("reset"),
                    $("#modal-contact").show();
                },
                error: function(t) {
                  var e = '<ul class="list-unstyled">';
                  for (datos in (void 0 === t.responseJSON &&
                    (e +=
                      "<li>Sorry " +
                      o +
                      ", it seems that my mail server is not responding. Please try again later!</li>"),
                  t.responseJSON))
                    e += "<li>" + t.responseJSON[datos] + "</li>";
                  (e += "</ul>"),
                    $("#success").html("<div class='alert alert-danger'>"),
                    $("#success > .alert-danger")
                      .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                      )
                      .append("</button>"),
                    $("#success > .alert-danger").append($("<strong>").html(e)),
                    $("#success > .alert-danger").append("</div>"),
                    $("#modal-contact").show();
                },
              });
          },
          filter: function() {
            return $(this).is(":visible");
          },
        }),
          $('a[data-toggle="tab"]').click(function(t) {
            t.preventDefault(), $(this).tab("show");
          });
      }),
      $("#name").focus(function() {
        $("#success").html("");
      }),
      $(function() {
        var t = $(this).scrollTop();
        $(document).scroll(function() {
          $(this).scrollTop() > t + 10
            ? $("#facebookLike").show("slow")
            : $("#facebookLike").hide("slow");
        });
      }),
      $(function() {
        $('button[data-dismiss="covid-modal"]').click(function(t) {
          t.preventDefault(), $("#covid-modal").hide();
        });
      });
  },
  function(t, e) {},
]);
