//Sun Apr 27 2025 10:17:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
webpackJsonp([1], {
  "08/l": function (e, t) {},
  "0FVo": function (e, t) {},
  "1NRv": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0__api_readNewsPapers_index__ = __webpack_require__("ybLu"),
      __WEBPACK_IMPORTED_MODULE_1__components_Global__ = __webpack_require__("YF26"),
      __WEBPACK_IMPORTED_MODULE_2_vux_src_components_scroller_index_vue__ = __webpack_require__("S8Wg"),
      __WEBPACK_IMPORTED_MODULE_3_vux_src_components_datetime_index_vue__ = __webpack_require__("UNGY"),
      __WEBPACK_IMPORTED_MODULE_4_vux_src_components_swiper_swiper_vue__ = __webpack_require__("fBcm"),
      __WEBPACK_IMPORTED_MODULE_5_vux_src_components_swiper_swiper_item_vue__ = __webpack_require__("b+jt"),
      __WEBPACK_IMPORTED_MODULE_6_mint_ui__ = __webpack_require__("Au9i"),
      __WEBPACK_IMPORTED_MODULE_6_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mint_ui__),
      __WEBPACK_IMPORTED_MODULE_7__static_js_rwdImageMaps_min_js__ = __webpack_require__("jywq"),
      __WEBPACK_IMPORTED_MODULE_7__static_js_rwdImageMaps_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_js_rwdImageMaps_min_js__);
    __webpack_exports__.a = {
      data: function () {
        return {
          paperName: "",
          newsPapers: [],
          newsPapersList: [],
          newsDetail: {},
          newsPapersChildList: {},
          isShowReadIndex: !1,
          isShowReadList: !1,
          isShowReadChildList: !1,
          isShowDetail: !1,
          isShowHead: !0,
          pages: {},
          oldId: "",
          src: "",
          oldCheckItem: {
            id: "",
            src: ""
          },
          isShow: !1,
          checkNum: 0,
          checkChildNum: 1,
          cur_img_index: 1,
          areaList: [],
          toTime: "",
          imageUrl: __WEBPACK_IMPORTED_MODULE_1__components_Global__.a.ypImg,
          shareUrl: "",
          endDate: "",
          swiperItemIndex: 0,
          height: "",
          isShowSwiper: !0
        };
      },
      components: {
        Scroller: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_scroller_index_vue__.a,
        Datetime: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_datetime_index_vue__.a,
        Swiper: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_swiper_swiper_vue__.a,
        SwiperItem: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_swiper_swiper_item_vue__.a
      },
      watch: {
        cur_img_index: function () {
          this.refresh();
        }
      },
      methods: {
        getNewsPapersDetail: function getNewsPapersDetail() {
          var _this = this,
            params = {
              paperName: this.paperName,
              paperDate: this.toTime
            };
          Object(__WEBPACK_IMPORTED_MODULE_0__api_readNewsPapers_index__.e)(params).then(function (res) {
            _this.newsPapers = res.data, _this.toTime = _this.newsPapers.list[0].time, _this.endDate = _this.newsPapers.date, _this.newsPapersList = _this.newsPapers.list, _this.newsPapersChildList = _this.newsPapersList[0], _this.checkChildNum = 1, _this.checkNum = 1, _this.$nextTick(function () {
              if ("\u89E3\u653E\u65E5\u62A5" == _this.paperName) {
                var pageImg = $("#page_img"),
                  mapWidth = pageImg.width(),
                  pageWidth = 2778,
                  widthRatio = mapWidth / pageWidth;
                $("#PagePicMap area").each(function (i) {
                  var obj = $(this),
                    coords = "",
                    xy = obj.attr("xy");
                  if (xy) {
                    var jsonArr = null;
                    try {
                      jsonArr = JSON.parse(xy);
                    } catch (e) {
                      jsonArr = eval("(" + xy + ")");
                    }
                    for (var i = 0; i < jsonArr.length; i++) {
                      var point = jsonArr[i],
                        x = point.x * widthRatio;
                      x = Math.round(100 * x) / 100;
                      var y = point.y * widthRatio;
                      y = Math.round(100 * y) / 100, coords += x + "," + y + ",";
                    }
                    coords.length > 0 && (coords = coords.substring(0, coords.length - 1)), obj.attr("coords", coords), obj.removeAttr("xy");
                  }
                });
              }
              $("#paper0").css("display", "block"), $("area").attr("name", "my_area"), $("#readContent img").attr("name", "newsPaperImg");
              var img_url = $("#readContent img"),
                img_width = img_url[0].width,
                img_height = 584,
                pageWidth = $(window).width(),
                widthRatio = img_width / pageWidth;
              "\u89E3\u653E\u65E5\u62A5" == _this.paperName ? $("#readContent img").attr("style", "width:auto;height:auto;max-width:" + pageWidth + "px") : $("#readContent img").attr("style", "height:calc(100vh - 55px);width:100%"), $("#readContent map").attr("name", "PagePicMap"), "\u4EBA\u6C11\u653F\u534F\u62A5" == _this.paperName && $("#banzhibar").remove();
              for (var maps = $("[name='PagePicMap']"), j = 0; j < maps.length; j++) {
                var map = maps[j];
                map.setAttribute("name", "PagePicMap" + j);
              }
              var imgs = $("[name='newsPaperImg']");
              if ("\u89E3\u653E\u65E5\u62A5" != _this.paperName) {
                __WEBPACK_IMPORTED_MODULE_6_mint_ui__.Indicator.open("\u52A0\u8F7D\u4E2D...");
                var initAreaWidth = _this.newsPapers.initAreaWidth,
                  paperName = _this.paperName;
                $("<img/>").attr("src", imgs[0].getAttribute("src")).load(function () {
                  for (var e = 0; e < imgs.length; e++) {
                    var t = imgs[e];
                    t.setAttribute("usemap", "#PagePicMap" + e), t.setAttribute("id", "pic" + e), $("img[usemap]").rwdImageMaps(initAreaWidth, this.width, this.height, paperName);
                  }
                  __WEBPACK_IMPORTED_MODULE_6_mint_ui__.Indicator.close();
                });
              } else for (var z = 0; z < imgs.length; z++) {
                var img = imgs[z];
                img.setAttribute("usemap", "#PagePicMap" + z);
              }
              if (_this.areaList.length = 0, _this.areaList = $("[name='my_area']"), null != _this.areaList && _this.areaList.length > 0) for (var i = 0; i < _this.areaList.length; i++) {
                var area = _this.areaList[i],
                  coords = "",
                  area_arr = area.getAttribute("coords");
                $("area.area").removeAttr("target"), $("area.area").removeAttr("alt"), $("area.area").removeAttr("index");
                var hrefVal = area.getAttribute("href");
                if (null != hrefVal) {
                  var paperId = hrefVal.split("="),
                    href = "#/news/read_newspapers_detail?paperId=" + paperId[1] + "&shareUrl=" + __WEBPACK_IMPORTED_MODULE_1__components_Global__.a.newspapersShare + "/yppage-share/news/share/read_newspapers_detail?paperId=" + paperId[1];
                  area.setAttribute("data-href", href), area.removeAttribute("href");
                }
              }
            });
          });
        },
        notify: function (e, t) {
          var a = navigator.userAgent,
            n = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1),
            i = {
              method: "" + e,
              data: {
                content: "" + t
              }
            },
            r = "{\"method\":\"" + e + "\",data:{\"content\":\"" + t + "\"}}";
          !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(i), n && window.Native.postMessage(r);
        },
        adjustPosition: function (e, t, a) {
          for (var n = document.body.clientWidth, i = document.body.clientHeight, r = t, s = a, l = e.split(","), o = 0; o < l.length; o++) l[o] = Math.round(parseInt(l[o]) * n / r).toFixed(2), l[++o] = Math.round(parseInt(l[o]) * i / s).toFixed(2);
          var u = "";
          for (o = 0; o < l.length; o++) u += l[o], o < l.length - 1 && (u += ",");
          return u;
        },
        change: function (e) {
          this.toTime = e, this.getNewsPapersDetail();
        },
        onSwiperItemIndexChange: function (e) {
          this.newsPapersChildList = this.newsPapersList[e];
        },
        checkItem: function (e, t, a) {
          if ($("#" + e + " img").attr("src", t), $("#" + e).css("color", "#cd3333"), e != this.oldId && ($("#" + this.oldId + " img").attr("src", this.src), $("#" + this.oldId).css("color", "#666666"), $("#readDate_time").css("color", "#666666")), this.oldId = e, this.src = a, "readDate" == e && ($("#" + e + "_time").css("color", "#cd3333"), this.isShowSwiper = !0, this.isShowReadList = !1, this.isShowReadChildList = !1), "readList" == e && (this.isShowReadChildList ? (this.isShowReadChildList = !1, this.isShowSwiper = !0) : (this.isShowReadChildList = !0, this.isShowSwiper = !1), this.isShowReadList = !1), "readShare" == e) {
            var n = {
                method: "Share",
                data: {
                  shareType: "all",
                  title: "" + this.paperName,
                  subTitle: "\u8BFB\u62A5\u7EB8\uFF0C\u4E0A\u752C\u6D3E\uFF01",
                  imageUrl: "" + this.imageUrl,
                  shareUrl: "" + this.shareUrl
                }
              },
              i = "{\"method\":\"Share\",data:{\"shareType\":\"all\",\"title\":\"" + this.paperName + "\",\"subTitle\":\"\u8BFB\u62A5\u7EB8\uFF0C\u4E0A\u752C\u6D3E\uFF01\",\"imageUrl\":\"" + this.imageUrl + "\",\"shareUrl\":\"" + this.shareUrl + "\"}}",
              r = navigator.userAgent,
              s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
            !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
          }
          "readIndex" == e && (this.isShowReadList ? (this.isShowReadList = !1, this.isShowSwiper = !0) : (this.isShowReadList = !0, this.isShowSwiper = !1), this.isShowReadChildList = !1);
        },
        toChildList: function (e) {
          this.swiperItemIndex = e, this.isShowReadList = !1, this.isShowSwiper = !0;
        },
        toNewsDetail: function (e) {
          this.isShowReadList = !1, this.isShowReadChildList = !1, this.isShowReadIndex = !1;
        },
        next: function () {
          $("#paper" + this.cur_img_index).css("display", "none"), this.cur_img_index = (this.cur_img_index + this.newsPapers.list.length - 1) % this.newsPapers.list.length;
        },
        prev: function () {
          $("#paper" + this.cur_img_index).css("display", "none"), this.cur_img_index = (this.cur_img_index + 1) % this.newsPapers.list.length;
        },
        refresh: function () {
          $("#paper" + this.cur_img_index).css("display", "block");
        },
        setToday: function () {
          var e = new Date(),
            t = e.getMonth() + 1,
            a = e.getDate();
          t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), this.endDate = e.getFullYear() + "-" + t + "-" + a;
        },
        openPaperNews: function (e) {
          console.log(event.target.getAttribute("data-href"));
          var t = event.target.getAttribute("data-href").split("&shareUrl="),
            a = __WEBPACK_IMPORTED_MODULE_1__components_Global__.a.domainSrc + t[0],
            n = {
              method: "openPaper",
              data: {
                to: "" + a,
                share: "" + t[1]
              }
            },
            i = "{\"method\":\"openPaper\",data:{\"to\":\"" + a + "\",\"share\":\"" + t[1] + "\"}}",
            r = navigator.userAgent,
            s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
          !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
        }
      },
      mounted: function () {
        var e = $(window).height();
        this.height = e + "px", this.paperName = this.$route.query.paperName, document.title = decodeURIComponent(decodeURIComponent(this.paperName)), this.shareUrl = __WEBPACK_IMPORTED_MODULE_1__components_Global__.a.newspapersShare + "/yppage-share/news/share/read_newspapers_index?paperName=" + encodeURIComponent(encodeURIComponent(this.paperName)), this.getNewsPapersDetail(), this.isShowReadIndex = !0, $("#readIndex img").attr("src", "static/images/readNewsPapers/readIndex2.png"), $("#readIndex").css("color", "#cd3333"), this.oldId = "readIndex", this.src = "static/images/readNewsPapers/readIndex.png", this.checkNum = 1, this.toTime = "";
      }
    };
  },
  "1VUQ": function (e, t) {},
  "2GJp": function (e, t) {
    e.exports = [{
      name: "\u5317\u4EAC\u5E02",
      value: "110000"
    }, {
      name: "\u5929\u6D25\u5E02",
      value: "120000"
    }, {
      name: "\u6CB3\u5317\u7701",
      value: "130000"
    }, {
      name: "\u5C71\u897F\u7701",
      value: "140000"
    }, {
      name: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
      value: "150000"
    }, {
      name: "\u8FBD\u5B81\u7701",
      value: "210000"
    }, {
      name: "\u5409\u6797\u7701",
      value: "220000"
    }, {
      name: "\u9ED1\u9F99\u6C5F\u7701",
      value: "230000"
    }, {
      name: "\u4E0A\u6D77\u5E02",
      value: "310000"
    }, {
      name: "\u6C5F\u82CF\u7701",
      value: "320000"
    }, {
      name: "\u6D59\u6C5F\u7701",
      value: "330000"
    }, {
      name: "\u5B89\u5FBD\u7701",
      value: "340000"
    }, {
      name: "\u798F\u5EFA\u7701",
      value: "350000"
    }, {
      name: "\u6C5F\u897F\u7701",
      value: "360000"
    }, {
      name: "\u5C71\u4E1C\u7701",
      value: "370000"
    }, {
      name: "\u6CB3\u5357\u7701",
      value: "410000"
    }, {
      name: "\u6E56\u5317\u7701",
      value: "420000"
    }, {
      name: "\u6E56\u5357\u7701",
      value: "430000"
    }, {
      name: "\u5E7F\u4E1C\u7701",
      value: "440000"
    }, {
      name: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
      value: "450000"
    }, {
      name: "\u6D77\u5357\u7701",
      value: "460000"
    }, {
      name: "\u91CD\u5E86\u5E02",
      value: "500000"
    }, {
      name: "\u56DB\u5DDD\u7701",
      value: "510000"
    }, {
      name: "\u8D35\u5DDE\u7701",
      value: "520000"
    }, {
      name: "\u4E91\u5357\u7701",
      value: "530000"
    }, {
      name: "\u897F\u85CF\u81EA\u6CBB\u533A",
      value: "540000"
    }, {
      name: "\u9655\u897F\u7701",
      value: "610000"
    }, {
      name: "\u7518\u8083\u7701",
      value: "620000"
    }, {
      name: "\u9752\u6D77\u7701",
      value: "630000"
    }, {
      name: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
      value: "640000"
    }, {
      name: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
      value: "650000"
    }, {
      name: "\u5E02\u8F96\u533A",
      value: "110100",
      parent: "110000"
    }, {
      name: "\u4E1C\u57CE\u533A",
      value: "110101",
      parent: "110100"
    }, {
      name: "\u897F\u57CE\u533A",
      value: "110102",
      parent: "110100"
    }, {
      name: "\u671D\u9633\u533A",
      value: "110105",
      parent: "110100"
    }, {
      name: "\u4E30\u53F0\u533A",
      value: "110106",
      parent: "110100"
    }, {
      name: "\u77F3\u666F\u5C71\u533A",
      value: "110107",
      parent: "110100"
    }, {
      name: "\u6D77\u6DC0\u533A",
      value: "110108",
      parent: "110100"
    }, {
      name: "\u95E8\u5934\u6C9F\u533A",
      value: "110109",
      parent: "110100"
    }, {
      name: "\u623F\u5C71\u533A",
      value: "110111",
      parent: "110100"
    }, {
      name: "\u901A\u5DDE\u533A",
      value: "110112",
      parent: "110100"
    }, {
      name: "\u987A\u4E49\u533A",
      value: "110113",
      parent: "110100"
    }, {
      name: "\u660C\u5E73\u533A",
      value: "110114",
      parent: "110100"
    }, {
      name: "\u5927\u5174\u533A",
      value: "110115",
      parent: "110100"
    }, {
      name: "\u6000\u67D4\u533A",
      value: "110116",
      parent: "110100"
    }, {
      name: "\u5E73\u8C37\u533A",
      value: "110117",
      parent: "110100"
    }, {
      name: "\u5BC6\u4E91\u53BF",
      value: "110228",
      parent: "110100"
    }, {
      name: "\u5EF6\u5E86\u53BF",
      value: "110229",
      parent: "110100"
    }, {
      name: "\u5E02\u8F96\u533A",
      value: "120100",
      parent: "120000"
    }, {
      name: "\u548C\u5E73\u533A",
      value: "120101",
      parent: "120100"
    }, {
      name: "\u6CB3\u4E1C\u533A",
      value: "120102",
      parent: "120100"
    }, {
      name: "\u6CB3\u897F\u533A",
      value: "120103",
      parent: "120100"
    }, {
      name: "\u5357\u5F00\u533A",
      value: "120104",
      parent: "120100"
    }, {
      name: "\u6CB3\u5317\u533A",
      value: "120105",
      parent: "120100"
    }, {
      name: "\u7EA2\u6865\u533A",
      value: "120106",
      parent: "120100"
    }, {
      name: "\u4E1C\u4E3D\u533A",
      value: "120110",
      parent: "120100"
    }, {
      name: "\u897F\u9752\u533A",
      value: "120111",
      parent: "120100"
    }, {
      name: "\u6D25\u5357\u533A",
      value: "120112",
      parent: "120100"
    }, {
      name: "\u5317\u8FB0\u533A",
      value: "120113",
      parent: "120100"
    }, {
      name: "\u6B66\u6E05\u533A",
      value: "120114",
      parent: "120100"
    }, {
      name: "\u5B9D\u577B\u533A",
      value: "120115",
      parent: "120100"
    }, {
      name: "\u6EE8\u6D77\u65B0\u533A",
      value: "120116",
      parent: "120100"
    }, {
      name: "\u5B81\u6CB3\u533A",
      value: "120117",
      parent: "120100"
    }, {
      name: "\u9759\u6D77\u533A",
      value: "120118",
      parent: "120100"
    }, {
      name: "\u84DF\u53BF",
      value: "120225",
      parent: "120100"
    }, {
      name: "\u77F3\u5BB6\u5E84\u5E02",
      value: "130100",
      parent: "130000"
    }, {
      name: "\u5510\u5C71\u5E02",
      value: "130200",
      parent: "130000"
    }, {
      name: "\u79E6\u7687\u5C9B\u5E02",
      value: "130300",
      parent: "130000"
    }, {
      name: "\u90AF\u90F8\u5E02",
      value: "130400",
      parent: "130000"
    }, {
      name: "\u90A2\u53F0\u5E02",
      value: "130500",
      parent: "130000"
    }, {
      name: "\u4FDD\u5B9A\u5E02",
      value: "130600",
      parent: "130000"
    }, {
      name: "\u5F20\u5BB6\u53E3\u5E02",
      value: "130700",
      parent: "130000"
    }, {
      name: "\u627F\u5FB7\u5E02",
      value: "130800",
      parent: "130000"
    }, {
      name: "\u6CA7\u5DDE\u5E02",
      value: "130900",
      parent: "130000"
    }, {
      name: "\u5ECA\u574A\u5E02",
      value: "131000",
      parent: "130000"
    }, {
      name: "\u8861\u6C34\u5E02",
      value: "131100",
      parent: "130000"
    }, {
      name: "\u5B9A\u5DDE\u5E02",
      value: "139001",
      parent: "130000"
    }, {
      name: "\u8F9B\u96C6\u5E02",
      value: "139002",
      parent: "130000"
    }, {
      name: "\u957F\u5B89\u533A",
      value: "130102",
      parent: "130100"
    }, {
      name: "\u6865\u897F\u533A",
      value: "130104",
      parent: "130100"
    }, {
      name: "\u65B0\u534E\u533A",
      value: "130105",
      parent: "130100"
    }, {
      name: "\u4E95\u9649\u77FF\u533A",
      value: "130107",
      parent: "130100"
    }, {
      name: "\u88D5\u534E\u533A",
      value: "130108",
      parent: "130100"
    }, {
      name: "\u85C1\u57CE\u533A",
      value: "130109",
      parent: "130100"
    }, {
      name: "\u9E7F\u6CC9\u533A",
      value: "130110",
      parent: "130100"
    }, {
      name: "\u683E\u57CE\u533A",
      value: "130111",
      parent: "130100"
    }, {
      name: "\u4E95\u9649\u53BF",
      value: "130121",
      parent: "130100"
    }, {
      name: "\u6B63\u5B9A\u53BF",
      value: "130123",
      parent: "130100"
    }, {
      name: "\u884C\u5510\u53BF",
      value: "130125",
      parent: "130100"
    }, {
      name: "\u7075\u5BFF\u53BF",
      value: "130126",
      parent: "130100"
    }, {
      name: "\u9AD8\u9091\u53BF",
      value: "130127",
      parent: "130100"
    }, {
      name: "\u6DF1\u6CFD\u53BF",
      value: "130128",
      parent: "130100"
    }, {
      name: "\u8D5E\u7687\u53BF",
      value: "130129",
      parent: "130100"
    }, {
      name: "\u65E0\u6781\u53BF",
      value: "130130",
      parent: "130100"
    }, {
      name: "\u5E73\u5C71\u53BF",
      value: "130131",
      parent: "130100"
    }, {
      name: "\u5143\u6C0F\u53BF",
      value: "130132",
      parent: "130100"
    }, {
      name: "\u8D75\u53BF",
      value: "130133",
      parent: "130100"
    }, {
      name: "\u664B\u5DDE\u5E02",
      value: "130183",
      parent: "130100"
    }, {
      name: "\u65B0\u4E50\u5E02",
      value: "130184",
      parent: "130100"
    }, {
      name: "\u8DEF\u5357\u533A",
      value: "130202",
      parent: "130200"
    }, {
      name: "\u8DEF\u5317\u533A",
      value: "130203",
      parent: "130200"
    }, {
      name: "\u53E4\u51B6\u533A",
      value: "130204",
      parent: "130200"
    }, {
      name: "\u5F00\u5E73\u533A",
      value: "130205",
      parent: "130200"
    }, {
      name: "\u4E30\u5357\u533A",
      value: "130207",
      parent: "130200"
    }, {
      name: "\u4E30\u6DA6\u533A",
      value: "130208",
      parent: "130200"
    }, {
      name: "\u66F9\u5983\u7538\u533A",
      value: "130209",
      parent: "130200"
    }, {
      name: "\u6EE6\u53BF",
      value: "130223",
      parent: "130200"
    }, {
      name: "\u6EE6\u5357\u53BF",
      value: "130224",
      parent: "130200"
    }, {
      name: "\u4E50\u4EAD\u53BF",
      value: "130225",
      parent: "130200"
    }, {
      name: "\u8FC1\u897F\u53BF",
      value: "130227",
      parent: "130200"
    }, {
      name: "\u7389\u7530\u53BF",
      value: "130229",
      parent: "130200"
    }, {
      name: "\u9075\u5316\u5E02",
      value: "130281",
      parent: "130200"
    }, {
      name: "\u8FC1\u5B89\u5E02",
      value: "130283",
      parent: "130200"
    }, {
      name: "\u6D77\u6E2F\u533A",
      value: "130302",
      parent: "130300"
    }, {
      name: "\u5C71\u6D77\u5173\u533A",
      value: "130303",
      parent: "130300"
    }, {
      name: "\u5317\u6234\u6CB3\u533A",
      value: "130304",
      parent: "130300"
    }, {
      name: "\u629A\u5B81\u533A",
      value: "130306",
      parent: "130300"
    }, {
      name: "\u9752\u9F99\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "130321",
      parent: "130300"
    }, {
      name: "\u660C\u9ECE\u53BF",
      value: "130322",
      parent: "130300"
    }, {
      name: "\u5362\u9F99\u53BF",
      value: "130324",
      parent: "130300"
    }, {
      name: "\u90AF\u5C71\u533A",
      value: "130402",
      parent: "130400"
    }, {
      name: "\u4E1B\u53F0\u533A",
      value: "130403",
      parent: "130400"
    }, {
      name: "\u590D\u5174\u533A",
      value: "130404",
      parent: "130400"
    }, {
      name: "\u5CF0\u5CF0\u77FF\u533A",
      value: "130406",
      parent: "130400"
    }, {
      name: "\u90AF\u90F8\u53BF",
      value: "130421",
      parent: "130400"
    }, {
      name: "\u4E34\u6F33\u53BF",
      value: "130423",
      parent: "130400"
    }, {
      name: "\u6210\u5B89\u53BF",
      value: "130424",
      parent: "130400"
    }, {
      name: "\u5927\u540D\u53BF",
      value: "130425",
      parent: "130400"
    }, {
      name: "\u6D89\u53BF",
      value: "130426",
      parent: "130400"
    }, {
      name: "\u78C1\u53BF",
      value: "130427",
      parent: "130400"
    }, {
      name: "\u80A5\u4E61\u53BF",
      value: "130428",
      parent: "130400"
    }, {
      name: "\u6C38\u5E74\u53BF",
      value: "130429",
      parent: "130400"
    }, {
      name: "\u90B1\u53BF",
      value: "130430",
      parent: "130400"
    }, {
      name: "\u9E21\u6CFD\u53BF",
      value: "130431",
      parent: "130400"
    }, {
      name: "\u5E7F\u5E73\u53BF",
      value: "130432",
      parent: "130400"
    }, {
      name: "\u9986\u9676\u53BF",
      value: "130433",
      parent: "130400"
    }, {
      name: "\u9B4F\u53BF",
      value: "130434",
      parent: "130400"
    }, {
      name: "\u66F2\u5468\u53BF",
      value: "130435",
      parent: "130400"
    }, {
      name: "\u6B66\u5B89\u5E02",
      value: "130481",
      parent: "130400"
    }, {
      name: "\u6865\u4E1C\u533A",
      value: "130502",
      parent: "130500"
    }, {
      name: "\u6865\u897F\u533A",
      value: "130503",
      parent: "130500"
    }, {
      name: "\u90A2\u53F0\u53BF",
      value: "130521",
      parent: "130500"
    }, {
      name: "\u4E34\u57CE\u53BF",
      value: "130522",
      parent: "130500"
    }, {
      name: "\u5185\u4E18\u53BF",
      value: "130523",
      parent: "130500"
    }, {
      name: "\u67CF\u4E61\u53BF",
      value: "130524",
      parent: "130500"
    }, {
      name: "\u9686\u5C27\u53BF",
      value: "130525",
      parent: "130500"
    }, {
      name: "\u4EFB\u53BF",
      value: "130526",
      parent: "130500"
    }, {
      name: "\u5357\u548C\u53BF",
      value: "130527",
      parent: "130500"
    }, {
      name: "\u5B81\u664B\u53BF",
      value: "130528",
      parent: "130500"
    }, {
      name: "\u5DE8\u9E7F\u53BF",
      value: "130529",
      parent: "130500"
    }, {
      name: "\u65B0\u6CB3\u53BF",
      value: "130530",
      parent: "130500"
    }, {
      name: "\u5E7F\u5B97\u53BF",
      value: "130531",
      parent: "130500"
    }, {
      name: "\u5E73\u4E61\u53BF",
      value: "130532",
      parent: "130500"
    }, {
      name: "\u5A01\u53BF",
      value: "130533",
      parent: "130500"
    }, {
      name: "\u6E05\u6CB3\u53BF",
      value: "130534",
      parent: "130500"
    }, {
      name: "\u4E34\u897F\u53BF",
      value: "130535",
      parent: "130500"
    }, {
      name: "\u5357\u5BAB\u5E02",
      value: "130581",
      parent: "130500"
    }, {
      name: "\u6C99\u6CB3\u5E02",
      value: "130582",
      parent: "130500"
    }, {
      name: "\u7ADE\u79C0\u533A",
      value: "130602",
      parent: "130600"
    }, {
      name: "\u83B2\u6C60\u533A",
      value: "130606",
      parent: "130600"
    }, {
      name: "\u6EE1\u57CE\u533A",
      value: "130607",
      parent: "130600"
    }, {
      name: "\u6E05\u82D1\u533A",
      value: "130608",
      parent: "130600"
    }, {
      name: "\u5F90\u6C34\u533A",
      value: "130609",
      parent: "130600"
    }, {
      name: "\u6D9E\u6C34\u53BF",
      value: "130623",
      parent: "130600"
    }, {
      name: "\u961C\u5E73\u53BF",
      value: "130624",
      parent: "130600"
    }, {
      name: "\u5B9A\u5174\u53BF",
      value: "130626",
      parent: "130600"
    }, {
      name: "\u5510\u53BF",
      value: "130627",
      parent: "130600"
    }, {
      name: "\u9AD8\u9633\u53BF",
      value: "130628",
      parent: "130600"
    }, {
      name: "\u5BB9\u57CE\u53BF",
      value: "130629",
      parent: "130600"
    }, {
      name: "\u6D9E\u6E90\u53BF",
      value: "130630",
      parent: "130600"
    }, {
      name: "\u671B\u90FD\u53BF",
      value: "130631",
      parent: "130600"
    }, {
      name: "\u5B89\u65B0\u53BF",
      value: "130632",
      parent: "130600"
    }, {
      name: "\u6613\u53BF",
      value: "130633",
      parent: "130600"
    }, {
      name: "\u66F2\u9633\u53BF",
      value: "130634",
      parent: "130600"
    }, {
      name: "\u8821\u53BF",
      value: "130635",
      parent: "130600"
    }, {
      name: "\u987A\u5E73\u53BF",
      value: "130636",
      parent: "130600"
    }, {
      name: "\u535A\u91CE\u53BF",
      value: "130637",
      parent: "130600"
    }, {
      name: "\u96C4\u53BF",
      value: "130638",
      parent: "130600"
    }, {
      name: "\u6DBF\u5DDE\u5E02",
      value: "130681",
      parent: "130600"
    }, {
      name: "\u5B89\u56FD\u5E02",
      value: "130683",
      parent: "130600"
    }, {
      name: "\u9AD8\u7891\u5E97\u5E02",
      value: "130684",
      parent: "130600"
    }, {
      name: "\u6865\u4E1C\u533A",
      value: "130702",
      parent: "130700"
    }, {
      name: "\u6865\u897F\u533A",
      value: "130703",
      parent: "130700"
    }, {
      name: "\u5BA3\u5316\u533A",
      value: "130705",
      parent: "130700"
    }, {
      name: "\u4E0B\u82B1\u56ED\u533A",
      value: "130706",
      parent: "130700"
    }, {
      name: "\u5BA3\u5316\u53BF",
      value: "130721",
      parent: "130700"
    }, {
      name: "\u5F20\u5317\u53BF",
      value: "130722",
      parent: "130700"
    }, {
      name: "\u5EB7\u4FDD\u53BF",
      value: "130723",
      parent: "130700"
    }, {
      name: "\u6CBD\u6E90\u53BF",
      value: "130724",
      parent: "130700"
    }, {
      name: "\u5C1A\u4E49\u53BF",
      value: "130725",
      parent: "130700"
    }, {
      name: "\u851A\u53BF",
      value: "130726",
      parent: "130700"
    }, {
      name: "\u9633\u539F\u53BF",
      value: "130727",
      parent: "130700"
    }, {
      name: "\u6000\u5B89\u53BF",
      value: "130728",
      parent: "130700"
    }, {
      name: "\u4E07\u5168\u53BF",
      value: "130729",
      parent: "130700"
    }, {
      name: "\u6000\u6765\u53BF",
      value: "130730",
      parent: "130700"
    }, {
      name: "\u6DBF\u9E7F\u53BF",
      value: "130731",
      parent: "130700"
    }, {
      name: "\u8D64\u57CE\u53BF",
      value: "130732",
      parent: "130700"
    }, {
      name: "\u5D07\u793C\u53BF",
      value: "130733",
      parent: "130700"
    }, {
      name: "\u53CC\u6865\u533A",
      value: "130802",
      parent: "130800"
    }, {
      name: "\u53CC\u6EE6\u533A",
      value: "130803",
      parent: "130800"
    }, {
      name: "\u9E70\u624B\u8425\u5B50\u77FF\u533A",
      value: "130804",
      parent: "130800"
    }, {
      name: "\u627F\u5FB7\u53BF",
      value: "130821",
      parent: "130800"
    }, {
      name: "\u5174\u9686\u53BF",
      value: "130822",
      parent: "130800"
    }, {
      name: "\u5E73\u6CC9\u53BF",
      value: "130823",
      parent: "130800"
    }, {
      name: "\u6EE6\u5E73\u53BF",
      value: "130824",
      parent: "130800"
    }, {
      name: "\u9686\u5316\u53BF",
      value: "130825",
      parent: "130800"
    }, {
      name: "\u4E30\u5B81\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "130826",
      parent: "130800"
    }, {
      name: "\u5BBD\u57CE\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "130827",
      parent: "130800"
    }, {
      name: "\u56F4\u573A\u6EE1\u65CF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
      value: "130828",
      parent: "130800"
    }, {
      name: "\u65B0\u534E\u533A",
      value: "130902",
      parent: "130900"
    }, {
      name: "\u8FD0\u6CB3\u533A",
      value: "130903",
      parent: "130900"
    }, {
      name: "\u6CA7\u53BF",
      value: "130921",
      parent: "130900"
    }, {
      name: "\u9752\u53BF",
      value: "130922",
      parent: "130900"
    }, {
      name: "\u4E1C\u5149\u53BF",
      value: "130923",
      parent: "130900"
    }, {
      name: "\u6D77\u5174\u53BF",
      value: "130924",
      parent: "130900"
    }, {
      name: "\u76D0\u5C71\u53BF",
      value: "130925",
      parent: "130900"
    }, {
      name: "\u8083\u5B81\u53BF",
      value: "130926",
      parent: "130900"
    }, {
      name: "\u5357\u76AE\u53BF",
      value: "130927",
      parent: "130900"
    }, {
      name: "\u5434\u6865\u53BF",
      value: "130928",
      parent: "130900"
    }, {
      name: "\u732E\u53BF",
      value: "130929",
      parent: "130900"
    }, {
      name: "\u5B5F\u6751\u56DE\u65CF\u81EA\u6CBB\u53BF",
      value: "130930",
      parent: "130900"
    }, {
      name: "\u6CCA\u5934\u5E02",
      value: "130981",
      parent: "130900"
    }, {
      name: "\u4EFB\u4E18\u5E02",
      value: "130982",
      parent: "130900"
    }, {
      name: "\u9EC4\u9A85\u5E02",
      value: "130983",
      parent: "130900"
    }, {
      name: "\u6CB3\u95F4\u5E02",
      value: "130984",
      parent: "130900"
    }, {
      name: "\u5B89\u6B21\u533A",
      value: "131002",
      parent: "131000"
    }, {
      name: "\u5E7F\u9633\u533A",
      value: "131003",
      parent: "131000"
    }, {
      name: "\u56FA\u5B89\u53BF",
      value: "131022",
      parent: "131000"
    }, {
      name: "\u6C38\u6E05\u53BF",
      value: "131023",
      parent: "131000"
    }, {
      name: "\u9999\u6CB3\u53BF",
      value: "131024",
      parent: "131000"
    }, {
      name: "\u5927\u57CE\u53BF",
      value: "131025",
      parent: "131000"
    }, {
      name: "\u6587\u5B89\u53BF",
      value: "131026",
      parent: "131000"
    }, {
      name: "\u5927\u5382\u56DE\u65CF\u81EA\u6CBB\u53BF",
      value: "131028",
      parent: "131000"
    }, {
      name: "\u9738\u5DDE\u5E02",
      value: "131081",
      parent: "131000"
    }, {
      name: "\u4E09\u6CB3\u5E02",
      value: "131082",
      parent: "131000"
    }, {
      name: "\u6843\u57CE\u533A",
      value: "131102",
      parent: "131100"
    }, {
      name: "\u67A3\u5F3A\u53BF",
      value: "131121",
      parent: "131100"
    }, {
      name: "\u6B66\u9091\u53BF",
      value: "131122",
      parent: "131100"
    }, {
      name: "\u6B66\u5F3A\u53BF",
      value: "131123",
      parent: "131100"
    }, {
      name: "\u9976\u9633\u53BF",
      value: "131124",
      parent: "131100"
    }, {
      name: "\u5B89\u5E73\u53BF",
      value: "131125",
      parent: "131100"
    }, {
      name: "\u6545\u57CE\u53BF",
      value: "131126",
      parent: "131100"
    }, {
      name: "\u666F\u53BF",
      value: "131127",
      parent: "131100"
    }, {
      name: "\u961C\u57CE\u53BF",
      value: "131128",
      parent: "131100"
    }, {
      name: "\u5180\u5DDE\u5E02",
      value: "131181",
      parent: "131100"
    }, {
      name: "\u6DF1\u5DDE\u5E02",
      value: "131182",
      parent: "131100"
    }, {
      name: "\u592A\u539F\u5E02",
      value: "140100",
      parent: "140000"
    }, {
      name: "\u5927\u540C\u5E02",
      value: "140200",
      parent: "140000"
    }, {
      name: "\u9633\u6CC9\u5E02",
      value: "140300",
      parent: "140000"
    }, {
      name: "\u957F\u6CBB\u5E02",
      value: "140400",
      parent: "140000"
    }, {
      name: "\u664B\u57CE\u5E02",
      value: "140500",
      parent: "140000"
    }, {
      name: "\u6714\u5DDE\u5E02",
      value: "140600",
      parent: "140000"
    }, {
      name: "\u664B\u4E2D\u5E02",
      value: "140700",
      parent: "140000"
    }, {
      name: "\u8FD0\u57CE\u5E02",
      value: "140800",
      parent: "140000"
    }, {
      name: "\u5FFB\u5DDE\u5E02",
      value: "140900",
      parent: "140000"
    }, {
      name: "\u4E34\u6C7E\u5E02",
      value: "141000",
      parent: "140000"
    }, {
      name: "\u5415\u6881\u5E02",
      value: "141100",
      parent: "140000"
    }, {
      name: "\u5C0F\u5E97\u533A",
      value: "140105",
      parent: "140100"
    }, {
      name: "\u8FCE\u6CFD\u533A",
      value: "140106",
      parent: "140100"
    }, {
      name: "\u674F\u82B1\u5CAD\u533A",
      value: "140107",
      parent: "140100"
    }, {
      name: "\u5C16\u8349\u576A\u533A",
      value: "140108",
      parent: "140100"
    }, {
      name: "\u4E07\u67CF\u6797\u533A",
      value: "140109",
      parent: "140100"
    }, {
      name: "\u664B\u6E90\u533A",
      value: "140110",
      parent: "140100"
    }, {
      name: "\u6E05\u5F90\u53BF",
      value: "140121",
      parent: "140100"
    }, {
      name: "\u9633\u66F2\u53BF",
      value: "140122",
      parent: "140100"
    }, {
      name: "\u5A04\u70E6\u53BF",
      value: "140123",
      parent: "140100"
    }, {
      name: "\u53E4\u4EA4\u5E02",
      value: "140181",
      parent: "140100"
    }, {
      name: "\u57CE\u533A",
      value: "140202",
      parent: "140200"
    }, {
      name: "\u77FF\u533A",
      value: "140203",
      parent: "140200"
    }, {
      name: "\u5357\u90CA\u533A",
      value: "140211",
      parent: "140200"
    }, {
      name: "\u65B0\u8363\u533A",
      value: "140212",
      parent: "140200"
    }, {
      name: "\u9633\u9AD8\u53BF",
      value: "140221",
      parent: "140200"
    }, {
      name: "\u5929\u9547\u53BF",
      value: "140222",
      parent: "140200"
    }, {
      name: "\u5E7F\u7075\u53BF",
      value: "140223",
      parent: "140200"
    }, {
      name: "\u7075\u4E18\u53BF",
      value: "140224",
      parent: "140200"
    }, {
      name: "\u6D51\u6E90\u53BF",
      value: "140225",
      parent: "140200"
    }, {
      name: "\u5DE6\u4E91\u53BF",
      value: "140226",
      parent: "140200"
    }, {
      name: "\u5927\u540C\u53BF",
      value: "140227",
      parent: "140200"
    }, {
      name: "\u57CE\u533A",
      value: "140302",
      parent: "140300"
    }, {
      name: "\u77FF\u533A",
      value: "140303",
      parent: "140300"
    }, {
      name: "\u90CA\u533A",
      value: "140311",
      parent: "140300"
    }, {
      name: "\u5E73\u5B9A\u53BF",
      value: "140321",
      parent: "140300"
    }, {
      name: "\u76C2\u53BF",
      value: "140322",
      parent: "140300"
    }, {
      name: "\u57CE\u533A",
      value: "140402",
      parent: "140400"
    }, {
      name: "\u90CA\u533A",
      value: "140411",
      parent: "140400"
    }, {
      name: "\u957F\u6CBB\u53BF",
      value: "140421",
      parent: "140400"
    }, {
      name: "\u8944\u57A3\u53BF",
      value: "140423",
      parent: "140400"
    }, {
      name: "\u5C6F\u7559\u53BF",
      value: "140424",
      parent: "140400"
    }, {
      name: "\u5E73\u987A\u53BF",
      value: "140425",
      parent: "140400"
    }, {
      name: "\u9ECE\u57CE\u53BF",
      value: "140426",
      parent: "140400"
    }, {
      name: "\u58F6\u5173\u53BF",
      value: "140427",
      parent: "140400"
    }, {
      name: "\u957F\u5B50\u53BF",
      value: "140428",
      parent: "140400"
    }, {
      name: "\u6B66\u4E61\u53BF",
      value: "140429",
      parent: "140400"
    }, {
      name: "\u6C81\u53BF",
      value: "140430",
      parent: "140400"
    }, {
      name: "\u6C81\u6E90\u53BF",
      value: "140431",
      parent: "140400"
    }, {
      name: "\u6F5E\u57CE\u5E02",
      value: "140481",
      parent: "140400"
    }, {
      name: "\u57CE\u533A",
      value: "140502",
      parent: "140500"
    }, {
      name: "\u6C81\u6C34\u53BF",
      value: "140521",
      parent: "140500"
    }, {
      name: "\u9633\u57CE\u53BF",
      value: "140522",
      parent: "140500"
    }, {
      name: "\u9675\u5DDD\u53BF",
      value: "140524",
      parent: "140500"
    }, {
      name: "\u6CFD\u5DDE\u53BF",
      value: "140525",
      parent: "140500"
    }, {
      name: "\u9AD8\u5E73\u5E02",
      value: "140581",
      parent: "140500"
    }, {
      name: "\u6714\u57CE\u533A",
      value: "140602",
      parent: "140600"
    }, {
      name: "\u5E73\u9C81\u533A",
      value: "140603",
      parent: "140600"
    }, {
      name: "\u5C71\u9634\u53BF",
      value: "140621",
      parent: "140600"
    }, {
      name: "\u5E94\u53BF",
      value: "140622",
      parent: "140600"
    }, {
      name: "\u53F3\u7389\u53BF",
      value: "140623",
      parent: "140600"
    }, {
      name: "\u6000\u4EC1\u53BF",
      value: "140624",
      parent: "140600"
    }, {
      name: "\u6986\u6B21\u533A",
      value: "140702",
      parent: "140700"
    }, {
      name: "\u6986\u793E\u53BF",
      value: "140721",
      parent: "140700"
    }, {
      name: "\u5DE6\u6743\u53BF",
      value: "140722",
      parent: "140700"
    }, {
      name: "\u548C\u987A\u53BF",
      value: "140723",
      parent: "140700"
    }, {
      name: "\u6614\u9633\u53BF",
      value: "140724",
      parent: "140700"
    }, {
      name: "\u5BFF\u9633\u53BF",
      value: "140725",
      parent: "140700"
    }, {
      name: "\u592A\u8C37\u53BF",
      value: "140726",
      parent: "140700"
    }, {
      name: "\u7941\u53BF",
      value: "140727",
      parent: "140700"
    }, {
      name: "\u5E73\u9065\u53BF",
      value: "140728",
      parent: "140700"
    }, {
      name: "\u7075\u77F3\u53BF",
      value: "140729",
      parent: "140700"
    }, {
      name: "\u4ECB\u4F11\u5E02",
      value: "140781",
      parent: "140700"
    }, {
      name: "\u76D0\u6E56\u533A",
      value: "140802",
      parent: "140800"
    }, {
      name: "\u4E34\u7317\u53BF",
      value: "140821",
      parent: "140800"
    }, {
      name: "\u4E07\u8363\u53BF",
      value: "140822",
      parent: "140800"
    }, {
      name: "\u95FB\u559C\u53BF",
      value: "140823",
      parent: "140800"
    }, {
      name: "\u7A37\u5C71\u53BF",
      value: "140824",
      parent: "140800"
    }, {
      name: "\u65B0\u7EDB\u53BF",
      value: "140825",
      parent: "140800"
    }, {
      name: "\u7EDB\u53BF",
      value: "140826",
      parent: "140800"
    }, {
      name: "\u57A3\u66F2\u53BF",
      value: "140827",
      parent: "140800"
    }, {
      name: "\u590F\u53BF",
      value: "140828",
      parent: "140800"
    }, {
      name: "\u5E73\u9646\u53BF",
      value: "140829",
      parent: "140800"
    }, {
      name: "\u82AE\u57CE\u53BF",
      value: "140830",
      parent: "140800"
    }, {
      name: "\u6C38\u6D4E\u5E02",
      value: "140881",
      parent: "140800"
    }, {
      name: "\u6CB3\u6D25\u5E02",
      value: "140882",
      parent: "140800"
    }, {
      name: "\u5FFB\u5E9C\u533A",
      value: "140902",
      parent: "140900"
    }, {
      name: "\u5B9A\u8944\u53BF",
      value: "140921",
      parent: "140900"
    }, {
      name: "\u4E94\u53F0\u53BF",
      value: "140922",
      parent: "140900"
    }, {
      name: "\u4EE3\u53BF",
      value: "140923",
      parent: "140900"
    }, {
      name: "\u7E41\u5CD9\u53BF",
      value: "140924",
      parent: "140900"
    }, {
      name: "\u5B81\u6B66\u53BF",
      value: "140925",
      parent: "140900"
    }, {
      name: "\u9759\u4E50\u53BF",
      value: "140926",
      parent: "140900"
    }, {
      name: "\u795E\u6C60\u53BF",
      value: "140927",
      parent: "140900"
    }, {
      name: "\u4E94\u5BE8\u53BF",
      value: "140928",
      parent: "140900"
    }, {
      name: "\u5CA2\u5C9A\u53BF",
      value: "140929",
      parent: "140900"
    }, {
      name: "\u6CB3\u66F2\u53BF",
      value: "140930",
      parent: "140900"
    }, {
      name: "\u4FDD\u5FB7\u53BF",
      value: "140931",
      parent: "140900"
    }, {
      name: "\u504F\u5173\u53BF",
      value: "140932",
      parent: "140900"
    }, {
      name: "\u539F\u5E73\u5E02",
      value: "140981",
      parent: "140900"
    }, {
      name: "\u5C27\u90FD\u533A",
      value: "141002",
      parent: "141000"
    }, {
      name: "\u66F2\u6C83\u53BF",
      value: "141021",
      parent: "141000"
    }, {
      name: "\u7FFC\u57CE\u53BF",
      value: "141022",
      parent: "141000"
    }, {
      name: "\u8944\u6C7E\u53BF",
      value: "141023",
      parent: "141000"
    }, {
      name: "\u6D2A\u6D1E\u53BF",
      value: "141024",
      parent: "141000"
    }, {
      name: "\u53E4\u53BF",
      value: "141025",
      parent: "141000"
    }, {
      name: "\u5B89\u6CFD\u53BF",
      value: "141026",
      parent: "141000"
    }, {
      name: "\u6D6E\u5C71\u53BF",
      value: "141027",
      parent: "141000"
    }, {
      name: "\u5409\u53BF",
      value: "141028",
      parent: "141000"
    }, {
      name: "\u4E61\u5B81\u53BF",
      value: "141029",
      parent: "141000"
    }, {
      name: "\u5927\u5B81\u53BF",
      value: "141030",
      parent: "141000"
    }, {
      name: "\u96B0\u53BF",
      value: "141031",
      parent: "141000"
    }, {
      name: "\u6C38\u548C\u53BF",
      value: "141032",
      parent: "141000"
    }, {
      name: "\u84B2\u53BF",
      value: "141033",
      parent: "141000"
    }, {
      name: "\u6C7E\u897F\u53BF",
      value: "141034",
      parent: "141000"
    }, {
      name: "\u4FAF\u9A6C\u5E02",
      value: "141081",
      parent: "141000"
    }, {
      name: "\u970D\u5DDE\u5E02",
      value: "141082",
      parent: "141000"
    }, {
      name: "\u79BB\u77F3\u533A",
      value: "141102",
      parent: "141100"
    }, {
      name: "\u6587\u6C34\u53BF",
      value: "141121",
      parent: "141100"
    }, {
      name: "\u4EA4\u57CE\u53BF",
      value: "141122",
      parent: "141100"
    }, {
      name: "\u5174\u53BF",
      value: "141123",
      parent: "141100"
    }, {
      name: "\u4E34\u53BF",
      value: "141124",
      parent: "141100"
    }, {
      name: "\u67F3\u6797\u53BF",
      value: "141125",
      parent: "141100"
    }, {
      name: "\u77F3\u697C\u53BF",
      value: "141126",
      parent: "141100"
    }, {
      name: "\u5C9A\u53BF",
      value: "141127",
      parent: "141100"
    }, {
      name: "\u65B9\u5C71\u53BF",
      value: "141128",
      parent: "141100"
    }, {
      name: "\u4E2D\u9633\u53BF",
      value: "141129",
      parent: "141100"
    }, {
      name: "\u4EA4\u53E3\u53BF",
      value: "141130",
      parent: "141100"
    }, {
      name: "\u5B5D\u4E49\u5E02",
      value: "141181",
      parent: "141100"
    }, {
      name: "\u6C7E\u9633\u5E02",
      value: "141182",
      parent: "141100"
    }, {
      name: "\u547C\u548C\u6D69\u7279\u5E02",
      value: "150100",
      parent: "150000"
    }, {
      name: "\u5305\u5934\u5E02",
      value: "150200",
      parent: "150000"
    }, {
      name: "\u4E4C\u6D77\u5E02",
      value: "150300",
      parent: "150000"
    }, {
      name: "\u8D64\u5CF0\u5E02",
      value: "150400",
      parent: "150000"
    }, {
      name: "\u901A\u8FBD\u5E02",
      value: "150500",
      parent: "150000"
    }, {
      name: "\u9102\u5C14\u591A\u65AF\u5E02",
      value: "150600",
      parent: "150000"
    }, {
      name: "\u547C\u4F26\u8D1D\u5C14\u5E02",
      value: "150700",
      parent: "150000"
    }, {
      name: "\u5DF4\u5F66\u6DD6\u5C14\u5E02",
      value: "150800",
      parent: "150000"
    }, {
      name: "\u4E4C\u5170\u5BDF\u5E03\u5E02",
      value: "150900",
      parent: "150000"
    }, {
      name: "\u5174\u5B89\u76DF",
      value: "152200",
      parent: "150000"
    }, {
      name: "\u9521\u6797\u90ED\u52D2\u76DF",
      value: "152500",
      parent: "150000"
    }, {
      name: "\u963F\u62C9\u5584\u76DF",
      value: "152900",
      parent: "150000"
    }, {
      name: "\u65B0\u57CE\u533A",
      value: "150102",
      parent: "150100"
    }, {
      name: "\u56DE\u6C11\u533A",
      value: "150103",
      parent: "150100"
    }, {
      name: "\u7389\u6CC9\u533A",
      value: "150104",
      parent: "150100"
    }, {
      name: "\u8D5B\u7F55\u533A",
      value: "150105",
      parent: "150100"
    }, {
      name: "\u571F\u9ED8\u7279\u5DE6\u65D7",
      value: "150121",
      parent: "150100"
    }, {
      name: "\u6258\u514B\u6258\u53BF",
      value: "150122",
      parent: "150100"
    }, {
      name: "\u548C\u6797\u683C\u5C14\u53BF",
      value: "150123",
      parent: "150100"
    }, {
      name: "\u6E05\u6C34\u6CB3\u53BF",
      value: "150124",
      parent: "150100"
    }, {
      name: "\u6B66\u5DDD\u53BF",
      value: "150125",
      parent: "150100"
    }, {
      name: "\u4E1C\u6CB3\u533A",
      value: "150202",
      parent: "150200"
    }, {
      name: "\u6606\u90FD\u4ED1\u533A",
      value: "150203",
      parent: "150200"
    }, {
      name: "\u9752\u5C71\u533A",
      value: "150204",
      parent: "150200"
    }, {
      name: "\u77F3\u62D0\u533A",
      value: "150205",
      parent: "150200"
    }, {
      name: "\u767D\u4E91\u9102\u535A\u77FF\u533A",
      value: "150206",
      parent: "150200"
    }, {
      name: "\u4E5D\u539F\u533A",
      value: "150207",
      parent: "150200"
    }, {
      name: "\u571F\u9ED8\u7279\u53F3\u65D7",
      value: "150221",
      parent: "150200"
    }, {
      name: "\u56FA\u9633\u53BF",
      value: "150222",
      parent: "150200"
    }, {
      name: "\u8FBE\u5C14\u7F55\u8302\u660E\u5B89\u8054\u5408\u65D7",
      value: "150223",
      parent: "150200"
    }, {
      name: "\u6D77\u52C3\u6E7E\u533A",
      value: "150302",
      parent: "150300"
    }, {
      name: "\u6D77\u5357\u533A",
      value: "150303",
      parent: "150300"
    }, {
      name: "\u4E4C\u8FBE\u533A",
      value: "150304",
      parent: "150300"
    }, {
      name: "\u7EA2\u5C71\u533A",
      value: "150402",
      parent: "150400"
    }, {
      name: "\u5143\u5B9D\u5C71\u533A",
      value: "150403",
      parent: "150400"
    }, {
      name: "\u677E\u5C71\u533A",
      value: "150404",
      parent: "150400"
    }, {
      name: "\u963F\u9C81\u79D1\u5C14\u6C81\u65D7",
      value: "150421",
      parent: "150400"
    }, {
      name: "\u5DF4\u6797\u5DE6\u65D7",
      value: "150422",
      parent: "150400"
    }, {
      name: "\u5DF4\u6797\u53F3\u65D7",
      value: "150423",
      parent: "150400"
    }, {
      name: "\u6797\u897F\u53BF",
      value: "150424",
      parent: "150400"
    }, {
      name: "\u514B\u4EC0\u514B\u817E\u65D7",
      value: "150425",
      parent: "150400"
    }, {
      name: "\u7FC1\u725B\u7279\u65D7",
      value: "150426",
      parent: "150400"
    }, {
      name: "\u5580\u5587\u6C81\u65D7",
      value: "150428",
      parent: "150400"
    }, {
      name: "\u5B81\u57CE\u53BF",
      value: "150429",
      parent: "150400"
    }, {
      name: "\u6556\u6C49\u65D7",
      value: "150430",
      parent: "150400"
    }, {
      name: "\u79D1\u5C14\u6C81\u533A",
      value: "150502",
      parent: "150500"
    }, {
      name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u4E2D\u65D7",
      value: "150521",
      parent: "150500"
    }, {
      name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u540E\u65D7",
      value: "150522",
      parent: "150500"
    }, {
      name: "\u5F00\u9C81\u53BF",
      value: "150523",
      parent: "150500"
    }, {
      name: "\u5E93\u4F26\u65D7",
      value: "150524",
      parent: "150500"
    }, {
      name: "\u5948\u66FC\u65D7",
      value: "150525",
      parent: "150500"
    }, {
      name: "\u624E\u9C81\u7279\u65D7",
      value: "150526",
      parent: "150500"
    }, {
      name: "\u970D\u6797\u90ED\u52D2\u5E02",
      value: "150581",
      parent: "150500"
    }, {
      name: "\u4E1C\u80DC\u533A",
      value: "150602",
      parent: "150600"
    }, {
      name: "\u8FBE\u62C9\u7279\u65D7",
      value: "150621",
      parent: "150600"
    }, {
      name: "\u51C6\u683C\u5C14\u65D7",
      value: "150622",
      parent: "150600"
    }, {
      name: "\u9102\u6258\u514B\u524D\u65D7",
      value: "150623",
      parent: "150600"
    }, {
      name: "\u9102\u6258\u514B\u65D7",
      value: "150624",
      parent: "150600"
    }, {
      name: "\u676D\u9526\u65D7",
      value: "150625",
      parent: "150600"
    }, {
      name: "\u4E4C\u5BA1\u65D7",
      value: "150626",
      parent: "150600"
    }, {
      name: "\u4F0A\u91D1\u970D\u6D1B\u65D7",
      value: "150627",
      parent: "150600"
    }, {
      name: "\u6D77\u62C9\u5C14\u533A",
      value: "150702",
      parent: "150700"
    }, {
      name: "\u624E\u8D49\u8BFA\u5C14\u533A",
      value: "150703",
      parent: "150700"
    }, {
      name: "\u963F\u8363\u65D7",
      value: "150721",
      parent: "150700"
    }, {
      name: "\u83AB\u529B\u8FBE\u74E6\u8FBE\u65A1\u5C14\u65CF\u81EA\u6CBB\u65D7",
      value: "150722",
      parent: "150700"
    }, {
      name: "\u9102\u4F26\u6625\u81EA\u6CBB\u65D7",
      value: "150723",
      parent: "150700"
    }, {
      name: "\u9102\u6E29\u514B\u65CF\u81EA\u6CBB\u65D7",
      value: "150724",
      parent: "150700"
    }, {
      name: "\u9648\u5DF4\u5C14\u864E\u65D7",
      value: "150725",
      parent: "150700"
    }, {
      name: "\u65B0\u5DF4\u5C14\u864E\u5DE6\u65D7",
      value: "150726",
      parent: "150700"
    }, {
      name: "\u65B0\u5DF4\u5C14\u864E\u53F3\u65D7",
      value: "150727",
      parent: "150700"
    }, {
      name: "\u6EE1\u6D32\u91CC\u5E02",
      value: "150781",
      parent: "150700"
    }, {
      name: "\u7259\u514B\u77F3\u5E02",
      value: "150782",
      parent: "150700"
    }, {
      name: "\u624E\u5170\u5C6F\u5E02",
      value: "150783",
      parent: "150700"
    }, {
      name: "\u989D\u5C14\u53E4\u7EB3\u5E02",
      value: "150784",
      parent: "150700"
    }, {
      name: "\u6839\u6CB3\u5E02",
      value: "150785",
      parent: "150700"
    }, {
      name: "\u4E34\u6CB3\u533A",
      value: "150802",
      parent: "150800"
    }, {
      name: "\u4E94\u539F\u53BF",
      value: "150821",
      parent: "150800"
    }, {
      name: "\u78F4\u53E3\u53BF",
      value: "150822",
      parent: "150800"
    }, {
      name: "\u4E4C\u62C9\u7279\u524D\u65D7",
      value: "150823",
      parent: "150800"
    }, {
      name: "\u4E4C\u62C9\u7279\u4E2D\u65D7",
      value: "150824",
      parent: "150800"
    }, {
      name: "\u4E4C\u62C9\u7279\u540E\u65D7",
      value: "150825",
      parent: "150800"
    }, {
      name: "\u676D\u9526\u540E\u65D7",
      value: "150826",
      parent: "150800"
    }, {
      name: "\u96C6\u5B81\u533A",
      value: "150902",
      parent: "150900"
    }, {
      name: "\u5353\u8D44\u53BF",
      value: "150921",
      parent: "150900"
    }, {
      name: "\u5316\u5FB7\u53BF",
      value: "150922",
      parent: "150900"
    }, {
      name: "\u5546\u90FD\u53BF",
      value: "150923",
      parent: "150900"
    }, {
      name: "\u5174\u548C\u53BF",
      value: "150924",
      parent: "150900"
    }, {
      name: "\u51C9\u57CE\u53BF",
      value: "150925",
      parent: "150900"
    }, {
      name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u524D\u65D7",
      value: "150926",
      parent: "150900"
    }, {
      name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u4E2D\u65D7",
      value: "150927",
      parent: "150900"
    }, {
      name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u540E\u65D7",
      value: "150928",
      parent: "150900"
    }, {
      name: "\u56DB\u5B50\u738B\u65D7",
      value: "150929",
      parent: "150900"
    }, {
      name: "\u4E30\u9547\u5E02",
      value: "150981",
      parent: "150900"
    }, {
      name: "\u4E4C\u5170\u6D69\u7279\u5E02",
      value: "152201",
      parent: "152200"
    }, {
      name: "\u963F\u5C14\u5C71\u5E02",
      value: "152202",
      parent: "152200"
    }, {
      name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u524D\u65D7",
      value: "152221",
      parent: "152200"
    }, {
      name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u4E2D\u65D7",
      value: "152222",
      parent: "152200"
    }, {
      name: "\u624E\u8D49\u7279\u65D7",
      value: "152223",
      parent: "152200"
    }, {
      name: "\u7A81\u6CC9\u53BF",
      value: "152224",
      parent: "152200"
    }, {
      name: "\u4E8C\u8FDE\u6D69\u7279\u5E02",
      value: "152501",
      parent: "152500"
    }, {
      name: "\u9521\u6797\u6D69\u7279\u5E02",
      value: "152502",
      parent: "152500"
    }, {
      name: "\u963F\u5DF4\u560E\u65D7",
      value: "152522",
      parent: "152500"
    }, {
      name: "\u82CF\u5C3C\u7279\u5DE6\u65D7",
      value: "152523",
      parent: "152500"
    }, {
      name: "\u82CF\u5C3C\u7279\u53F3\u65D7",
      value: "152524",
      parent: "152500"
    }, {
      name: "\u4E1C\u4E4C\u73E0\u7A46\u6C81\u65D7",
      value: "152525",
      parent: "152500"
    }, {
      name: "\u897F\u4E4C\u73E0\u7A46\u6C81\u65D7",
      value: "152526",
      parent: "152500"
    }, {
      name: "\u592A\u4EC6\u5BFA\u65D7",
      value: "152527",
      parent: "152500"
    }, {
      name: "\u9576\u9EC4\u65D7",
      value: "152528",
      parent: "152500"
    }, {
      name: "\u6B63\u9576\u767D\u65D7",
      value: "152529",
      parent: "152500"
    }, {
      name: "\u6B63\u84DD\u65D7",
      value: "152530",
      parent: "152500"
    }, {
      name: "\u591A\u4F26\u53BF",
      value: "152531",
      parent: "152500"
    }, {
      name: "\u963F\u62C9\u5584\u5DE6\u65D7",
      value: "152921",
      parent: "152900"
    }, {
      name: "\u963F\u62C9\u5584\u53F3\u65D7",
      value: "152922",
      parent: "152900"
    }, {
      name: "\u989D\u6D4E\u7EB3\u65D7",
      value: "152923",
      parent: "152900"
    }, {
      name: "\u6C88\u9633\u5E02",
      value: "210100",
      parent: "210000"
    }, {
      name: "\u5927\u8FDE\u5E02",
      value: "210200",
      parent: "210000"
    }, {
      name: "\u978D\u5C71\u5E02",
      value: "210300",
      parent: "210000"
    }, {
      name: "\u629A\u987A\u5E02",
      value: "210400",
      parent: "210000"
    }, {
      name: "\u672C\u6EAA\u5E02",
      value: "210500",
      parent: "210000"
    }, {
      name: "\u4E39\u4E1C\u5E02",
      value: "210600",
      parent: "210000"
    }, {
      name: "\u9526\u5DDE\u5E02",
      value: "210700",
      parent: "210000"
    }, {
      name: "\u8425\u53E3\u5E02",
      value: "210800",
      parent: "210000"
    }, {
      name: "\u961C\u65B0\u5E02",
      value: "210900",
      parent: "210000"
    }, {
      name: "\u8FBD\u9633\u5E02",
      value: "211000",
      parent: "210000"
    }, {
      name: "\u76D8\u9526\u5E02",
      value: "211100",
      parent: "210000"
    }, {
      name: "\u94C1\u5CAD\u5E02",
      value: "211200",
      parent: "210000"
    }, {
      name: "\u671D\u9633\u5E02",
      value: "211300",
      parent: "210000"
    }, {
      name: "\u846B\u82A6\u5C9B\u5E02",
      value: "211400",
      parent: "210000"
    }, {
      name: "\u548C\u5E73\u533A",
      value: "210102",
      parent: "210100"
    }, {
      name: "\u6C88\u6CB3\u533A",
      value: "210103",
      parent: "210100"
    }, {
      name: "\u5927\u4E1C\u533A",
      value: "210104",
      parent: "210100"
    }, {
      name: "\u7687\u59D1\u533A",
      value: "210105",
      parent: "210100"
    }, {
      name: "\u94C1\u897F\u533A",
      value: "210106",
      parent: "210100"
    }, {
      name: "\u82CF\u5BB6\u5C6F\u533A",
      value: "210111",
      parent: "210100"
    }, {
      name: "\u6D51\u5357\u533A",
      value: "210112",
      parent: "210100"
    }, {
      name: "\u6C88\u5317\u65B0\u533A",
      value: "210113",
      parent: "210100"
    }, {
      name: "\u4E8E\u6D2A\u533A",
      value: "210114",
      parent: "210100"
    }, {
      name: "\u8FBD\u4E2D\u53BF",
      value: "210122",
      parent: "210100"
    }, {
      name: "\u5EB7\u5E73\u53BF",
      value: "210123",
      parent: "210100"
    }, {
      name: "\u6CD5\u5E93\u53BF",
      value: "210124",
      parent: "210100"
    }, {
      name: "\u65B0\u6C11\u5E02",
      value: "210181",
      parent: "210100"
    }, {
      name: "\u4E2D\u5C71\u533A",
      value: "210202",
      parent: "210200"
    }, {
      name: "\u897F\u5C97\u533A",
      value: "210203",
      parent: "210200"
    }, {
      name: "\u6C99\u6CB3\u53E3\u533A",
      value: "210204",
      parent: "210200"
    }, {
      name: "\u7518\u4E95\u5B50\u533A",
      value: "210211",
      parent: "210200"
    }, {
      name: "\u65C5\u987A\u53E3\u533A",
      value: "210212",
      parent: "210200"
    }, {
      name: "\u91D1\u5DDE\u533A",
      value: "210213",
      parent: "210200"
    }, {
      name: "\u957F\u6D77\u53BF",
      value: "210224",
      parent: "210200"
    }, {
      name: "\u74E6\u623F\u5E97\u5E02",
      value: "210281",
      parent: "210200"
    }, {
      name: "\u666E\u5170\u5E97\u5E02",
      value: "210282",
      parent: "210200"
    }, {
      name: "\u5E84\u6CB3\u5E02",
      value: "210283",
      parent: "210200"
    }, {
      name: "\u94C1\u4E1C\u533A",
      value: "210302",
      parent: "210300"
    }, {
      name: "\u94C1\u897F\u533A",
      value: "210303",
      parent: "210300"
    }, {
      name: "\u7ACB\u5C71\u533A",
      value: "210304",
      parent: "210300"
    }, {
      name: "\u5343\u5C71\u533A",
      value: "210311",
      parent: "210300"
    }, {
      name: "\u53F0\u5B89\u53BF",
      value: "210321",
      parent: "210300"
    }, {
      name: "\u5CAB\u5CA9\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "210323",
      parent: "210300"
    }, {
      name: "\u6D77\u57CE\u5E02",
      value: "210381",
      parent: "210300"
    }, {
      name: "\u65B0\u629A\u533A",
      value: "210402",
      parent: "210400"
    }, {
      name: "\u4E1C\u6D32\u533A",
      value: "210403",
      parent: "210400"
    }, {
      name: "\u671B\u82B1\u533A",
      value: "210404",
      parent: "210400"
    }, {
      name: "\u987A\u57CE\u533A",
      value: "210411",
      parent: "210400"
    }, {
      name: "\u629A\u987A\u53BF",
      value: "210421",
      parent: "210400"
    }, {
      name: "\u65B0\u5BBE\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "210422",
      parent: "210400"
    }, {
      name: "\u6E05\u539F\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "210423",
      parent: "210400"
    }, {
      name: "\u5E73\u5C71\u533A",
      value: "210502",
      parent: "210500"
    }, {
      name: "\u6EAA\u6E56\u533A",
      value: "210503",
      parent: "210500"
    }, {
      name: "\u660E\u5C71\u533A",
      value: "210504",
      parent: "210500"
    }, {
      name: "\u5357\u82AC\u533A",
      value: "210505",
      parent: "210500"
    }, {
      name: "\u672C\u6EAA\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "210521",
      parent: "210500"
    }, {
      name: "\u6853\u4EC1\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "210522",
      parent: "210500"
    }, {
      name: "\u5143\u5B9D\u533A",
      value: "210602",
      parent: "210600"
    }, {
      name: "\u632F\u5174\u533A",
      value: "210603",
      parent: "210600"
    }, {
      name: "\u632F\u5B89\u533A",
      value: "210604",
      parent: "210600"
    }, {
      name: "\u5BBD\u7538\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "210624",
      parent: "210600"
    }, {
      name: "\u4E1C\u6E2F\u5E02",
      value: "210681",
      parent: "210600"
    }, {
      name: "\u51E4\u57CE\u5E02",
      value: "210682",
      parent: "210600"
    }, {
      name: "\u53E4\u5854\u533A",
      value: "210702",
      parent: "210700"
    }, {
      name: "\u51CC\u6CB3\u533A",
      value: "210703",
      parent: "210700"
    }, {
      name: "\u592A\u548C\u533A",
      value: "210711",
      parent: "210700"
    }, {
      name: "\u9ED1\u5C71\u53BF",
      value: "210726",
      parent: "210700"
    }, {
      name: "\u4E49\u53BF",
      value: "210727",
      parent: "210700"
    }, {
      name: "\u51CC\u6D77\u5E02",
      value: "210781",
      parent: "210700"
    }, {
      name: "\u5317\u9547\u5E02",
      value: "210782",
      parent: "210700"
    }, {
      name: "\u7AD9\u524D\u533A",
      value: "210802",
      parent: "210800"
    }, {
      name: "\u897F\u5E02\u533A",
      value: "210803",
      parent: "210800"
    }, {
      name: "\u9C85\u9C7C\u5708\u533A",
      value: "210804",
      parent: "210800"
    }, {
      name: "\u8001\u8FB9\u533A",
      value: "210811",
      parent: "210800"
    }, {
      name: "\u76D6\u5DDE\u5E02",
      value: "210881",
      parent: "210800"
    }, {
      name: "\u5927\u77F3\u6865\u5E02",
      value: "210882",
      parent: "210800"
    }, {
      name: "\u6D77\u5DDE\u533A",
      value: "210902",
      parent: "210900"
    }, {
      name: "\u65B0\u90B1\u533A",
      value: "210903",
      parent: "210900"
    }, {
      name: "\u592A\u5E73\u533A",
      value: "210904",
      parent: "210900"
    }, {
      name: "\u6E05\u6CB3\u95E8\u533A",
      value: "210905",
      parent: "210900"
    }, {
      name: "\u7EC6\u6CB3\u533A",
      value: "210911",
      parent: "210900"
    }, {
      name: "\u961C\u65B0\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
      value: "210921",
      parent: "210900"
    }, {
      name: "\u5F70\u6B66\u53BF",
      value: "210922",
      parent: "210900"
    }, {
      name: "\u767D\u5854\u533A",
      value: "211002",
      parent: "211000"
    }, {
      name: "\u6587\u5723\u533A",
      value: "211003",
      parent: "211000"
    }, {
      name: "\u5B8F\u4F1F\u533A",
      value: "211004",
      parent: "211000"
    }, {
      name: "\u5F13\u957F\u5CAD\u533A",
      value: "211005",
      parent: "211000"
    }, {
      name: "\u592A\u5B50\u6CB3\u533A",
      value: "211011",
      parent: "211000"
    }, {
      name: "\u8FBD\u9633\u53BF",
      value: "211021",
      parent: "211000"
    }, {
      name: "\u706F\u5854\u5E02",
      value: "211081",
      parent: "211000"
    }, {
      name: "\u53CC\u53F0\u5B50\u533A",
      value: "211102",
      parent: "211100"
    }, {
      name: "\u5174\u9686\u53F0\u533A",
      value: "211103",
      parent: "211100"
    }, {
      name: "\u5927\u6D3C\u53BF",
      value: "211121",
      parent: "211100"
    }, {
      name: "\u76D8\u5C71\u53BF",
      value: "211122",
      parent: "211100"
    }, {
      name: "\u94F6\u5DDE\u533A",
      value: "211202",
      parent: "211200"
    }, {
      name: "\u6E05\u6CB3\u533A",
      value: "211204",
      parent: "211200"
    }, {
      name: "\u94C1\u5CAD\u53BF",
      value: "211221",
      parent: "211200"
    }, {
      name: "\u897F\u4E30\u53BF",
      value: "211223",
      parent: "211200"
    }, {
      name: "\u660C\u56FE\u53BF",
      value: "211224",
      parent: "211200"
    }, {
      name: "\u8C03\u5175\u5C71\u5E02",
      value: "211281",
      parent: "211200"
    }, {
      name: "\u5F00\u539F\u5E02",
      value: "211282",
      parent: "211200"
    }, {
      name: "\u53CC\u5854\u533A",
      value: "211302",
      parent: "211300"
    }, {
      name: "\u9F99\u57CE\u533A",
      value: "211303",
      parent: "211300"
    }, {
      name: "\u671D\u9633\u53BF",
      value: "211321",
      parent: "211300"
    }, {
      name: "\u5EFA\u5E73\u53BF",
      value: "211322",
      parent: "211300"
    }, {
      name: "\u5580\u5587\u6C81\u5DE6\u7FFC\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
      value: "211324",
      parent: "211300"
    }, {
      name: "\u5317\u7968\u5E02",
      value: "211381",
      parent: "211300"
    }, {
      name: "\u51CC\u6E90\u5E02",
      value: "211382",
      parent: "211300"
    }, {
      name: "\u8FDE\u5C71\u533A",
      value: "211402",
      parent: "211400"
    }, {
      name: "\u9F99\u6E2F\u533A",
      value: "211403",
      parent: "211400"
    }, {
      name: "\u5357\u7968\u533A",
      value: "211404",
      parent: "211400"
    }, {
      name: "\u7EE5\u4E2D\u53BF",
      value: "211421",
      parent: "211400"
    }, {
      name: "\u5EFA\u660C\u53BF",
      value: "211422",
      parent: "211400"
    }, {
      name: "\u5174\u57CE\u5E02",
      value: "211481",
      parent: "211400"
    }, {
      name: "\u957F\u6625\u5E02",
      value: "220100",
      parent: "220000"
    }, {
      name: "\u5409\u6797\u5E02",
      value: "220200",
      parent: "220000"
    }, {
      name: "\u56DB\u5E73\u5E02",
      value: "220300",
      parent: "220000"
    }, {
      name: "\u8FBD\u6E90\u5E02",
      value: "220400",
      parent: "220000"
    }, {
      name: "\u901A\u5316\u5E02",
      value: "220500",
      parent: "220000"
    }, {
      name: "\u767D\u5C71\u5E02",
      value: "220600",
      parent: "220000"
    }, {
      name: "\u677E\u539F\u5E02",
      value: "220700",
      parent: "220000"
    }, {
      name: "\u767D\u57CE\u5E02",
      value: "220800",
      parent: "220000"
    }, {
      name: "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE",
      value: "222400",
      parent: "220000"
    }, {
      name: "\u5357\u5173\u533A",
      value: "220102",
      parent: "220100"
    }, {
      name: "\u5BBD\u57CE\u533A",
      value: "220103",
      parent: "220100"
    }, {
      name: "\u671D\u9633\u533A",
      value: "220104",
      parent: "220100"
    }, {
      name: "\u4E8C\u9053\u533A",
      value: "220105",
      parent: "220100"
    }, {
      name: "\u7EFF\u56ED\u533A",
      value: "220106",
      parent: "220100"
    }, {
      name: "\u53CC\u9633\u533A",
      value: "220112",
      parent: "220100"
    }, {
      name: "\u4E5D\u53F0\u533A",
      value: "220113",
      parent: "220100"
    }, {
      name: "\u519C\u5B89\u53BF",
      value: "220122",
      parent: "220100"
    }, {
      name: "\u6986\u6811\u5E02",
      value: "220182",
      parent: "220100"
    }, {
      name: "\u5FB7\u60E0\u5E02",
      value: "220183",
      parent: "220100"
    }, {
      name: "\u660C\u9091\u533A",
      value: "220202",
      parent: "220200"
    }, {
      name: "\u9F99\u6F6D\u533A",
      value: "220203",
      parent: "220200"
    }, {
      name: "\u8239\u8425\u533A",
      value: "220204",
      parent: "220200"
    }, {
      name: "\u4E30\u6EE1\u533A",
      value: "220211",
      parent: "220200"
    }, {
      name: "\u6C38\u5409\u53BF",
      value: "220221",
      parent: "220200"
    }, {
      name: "\u86DF\u6CB3\u5E02",
      value: "220281",
      parent: "220200"
    }, {
      name: "\u6866\u7538\u5E02",
      value: "220282",
      parent: "220200"
    }, {
      name: "\u8212\u5170\u5E02",
      value: "220283",
      parent: "220200"
    }, {
      name: "\u78D0\u77F3\u5E02",
      value: "220284",
      parent: "220200"
    }, {
      name: "\u94C1\u897F\u533A",
      value: "220302",
      parent: "220300"
    }, {
      name: "\u94C1\u4E1C\u533A",
      value: "220303",
      parent: "220300"
    }, {
      name: "\u68A8\u6811\u53BF",
      value: "220322",
      parent: "220300"
    }, {
      name: "\u4F0A\u901A\u6EE1\u65CF\u81EA\u6CBB\u53BF",
      value: "220323",
      parent: "220300"
    }, {
      name: "\u516C\u4E3B\u5CAD\u5E02",
      value: "220381",
      parent: "220300"
    }, {
      name: "\u53CC\u8FBD\u5E02",
      value: "220382",
      parent: "220300"
    }, {
      name: "\u9F99\u5C71\u533A",
      value: "220402",
      parent: "220400"
    }, {
      name: "\u897F\u5B89\u533A",
      value: "220403",
      parent: "220400"
    }, {
      name: "\u4E1C\u4E30\u53BF",
      value: "220421",
      parent: "220400"
    }, {
      name: "\u4E1C\u8FBD\u53BF",
      value: "220422",
      parent: "220400"
    }, {
      name: "\u4E1C\u660C\u533A",
      value: "220502",
      parent: "220500"
    }, {
      name: "\u4E8C\u9053\u6C5F\u533A",
      value: "220503",
      parent: "220500"
    }, {
      name: "\u901A\u5316\u53BF",
      value: "220521",
      parent: "220500"
    }, {
      name: "\u8F89\u5357\u53BF",
      value: "220523",
      parent: "220500"
    }, {
      name: "\u67F3\u6CB3\u53BF",
      value: "220524",
      parent: "220500"
    }, {
      name: "\u6885\u6CB3\u53E3\u5E02",
      value: "220581",
      parent: "220500"
    }, {
      name: "\u96C6\u5B89\u5E02",
      value: "220582",
      parent: "220500"
    }, {
      name: "\u6D51\u6C5F\u533A",
      value: "220602",
      parent: "220600"
    }, {
      name: "\u6C5F\u6E90\u533A",
      value: "220605",
      parent: "220600"
    }, {
      name: "\u629A\u677E\u53BF",
      value: "220621",
      parent: "220600"
    }, {
      name: "\u9756\u5B87\u53BF",
      value: "220622",
      parent: "220600"
    }, {
      name: "\u957F\u767D\u671D\u9C9C\u65CF\u81EA\u6CBB\u53BF",
      value: "220623",
      parent: "220600"
    }, {
      name: "\u4E34\u6C5F\u5E02",
      value: "220681",
      parent: "220600"
    }, {
      name: "\u5B81\u6C5F\u533A",
      value: "220702",
      parent: "220700"
    }, {
      name: "\u524D\u90ED\u5C14\u7F57\u65AF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
      value: "220721",
      parent: "220700"
    }, {
      name: "\u957F\u5CAD\u53BF",
      value: "220722",
      parent: "220700"
    }, {
      name: "\u4E7E\u5B89\u53BF",
      value: "220723",
      parent: "220700"
    }, {
      name: "\u6276\u4F59\u5E02",
      value: "220781",
      parent: "220700"
    }, {
      name: "\u6D2E\u5317\u533A",
      value: "220802",
      parent: "220800"
    }, {
      name: "\u9547\u8D49\u53BF",
      value: "220821",
      parent: "220800"
    }, {
      name: "\u901A\u6986\u53BF",
      value: "220822",
      parent: "220800"
    }, {
      name: "\u6D2E\u5357\u5E02",
      value: "220881",
      parent: "220800"
    }, {
      name: "\u5927\u5B89\u5E02",
      value: "220882",
      parent: "220800"
    }, {
      name: "\u5EF6\u5409\u5E02",
      value: "222401",
      parent: "222400"
    }, {
      name: "\u56FE\u4EEC\u5E02",
      value: "222402",
      parent: "222400"
    }, {
      name: "\u6566\u5316\u5E02",
      value: "222403",
      parent: "222400"
    }, {
      name: "\u73F2\u6625\u5E02",
      value: "222404",
      parent: "222400"
    }, {
      name: "\u9F99\u4E95\u5E02",
      value: "222405",
      parent: "222400"
    }, {
      name: "\u548C\u9F99\u5E02",
      value: "222406",
      parent: "222400"
    }, {
      name: "\u6C6A\u6E05\u53BF",
      value: "222424",
      parent: "222400"
    }, {
      name: "\u5B89\u56FE\u53BF",
      value: "222426",
      parent: "222400"
    }, {
      name: "\u54C8\u5C14\u6EE8\u5E02",
      value: "230100",
      parent: "230000"
    }, {
      name: "\u9F50\u9F50\u54C8\u5C14\u5E02",
      value: "230200",
      parent: "230000"
    }, {
      name: "\u9E21\u897F\u5E02",
      value: "230300",
      parent: "230000"
    }, {
      name: "\u9E64\u5C97\u5E02",
      value: "230400",
      parent: "230000"
    }, {
      name: "\u53CC\u9E2D\u5C71\u5E02",
      value: "230500",
      parent: "230000"
    }, {
      name: "\u5927\u5E86\u5E02",
      value: "230600",
      parent: "230000"
    }, {
      name: "\u4F0A\u6625\u5E02",
      value: "230700",
      parent: "230000"
    }, {
      name: "\u4F73\u6728\u65AF\u5E02",
      value: "230800",
      parent: "230000"
    }, {
      name: "\u4E03\u53F0\u6CB3\u5E02",
      value: "230900",
      parent: "230000"
    }, {
      name: "\u7261\u4E39\u6C5F\u5E02",
      value: "231000",
      parent: "230000"
    }, {
      name: "\u9ED1\u6CB3\u5E02",
      value: "231100",
      parent: "230000"
    }, {
      name: "\u7EE5\u5316\u5E02",
      value: "231200",
      parent: "230000"
    }, {
      name: "\u5927\u5174\u5B89\u5CAD\u5730\u533A",
      value: "232700",
      parent: "230000"
    }, {
      name: "\u9053\u91CC\u533A",
      value: "230102",
      parent: "230100"
    }, {
      name: "\u5357\u5C97\u533A",
      value: "230103",
      parent: "230100"
    }, {
      name: "\u9053\u5916\u533A",
      value: "230104",
      parent: "230100"
    }, {
      name: "\u5E73\u623F\u533A",
      value: "230108",
      parent: "230100"
    }, {
      name: "\u677E\u5317\u533A",
      value: "230109",
      parent: "230100"
    }, {
      name: "\u9999\u574A\u533A",
      value: "230110",
      parent: "230100"
    }, {
      name: "\u547C\u5170\u533A",
      value: "230111",
      parent: "230100"
    }, {
      name: "\u963F\u57CE\u533A",
      value: "230112",
      parent: "230100"
    }, {
      name: "\u53CC\u57CE\u533A",
      value: "230113",
      parent: "230100"
    }, {
      name: "\u4F9D\u5170\u53BF",
      value: "230123",
      parent: "230100"
    }, {
      name: "\u65B9\u6B63\u53BF",
      value: "230124",
      parent: "230100"
    }, {
      name: "\u5BBE\u53BF",
      value: "230125",
      parent: "230100"
    }, {
      name: "\u5DF4\u5F66\u53BF",
      value: "230126",
      parent: "230100"
    }, {
      name: "\u6728\u5170\u53BF",
      value: "230127",
      parent: "230100"
    }, {
      name: "\u901A\u6CB3\u53BF",
      value: "230128",
      parent: "230100"
    }, {
      name: "\u5EF6\u5BFF\u53BF",
      value: "230129",
      parent: "230100"
    }, {
      name: "\u5C1A\u5FD7\u5E02",
      value: "230183",
      parent: "230100"
    }, {
      name: "\u4E94\u5E38\u5E02",
      value: "230184",
      parent: "230100"
    }, {
      name: "\u9F99\u6C99\u533A",
      value: "230202",
      parent: "230200"
    }, {
      name: "\u5EFA\u534E\u533A",
      value: "230203",
      parent: "230200"
    }, {
      name: "\u94C1\u950B\u533A",
      value: "230204",
      parent: "230200"
    }, {
      name: "\u6602\u6602\u6EAA\u533A",
      value: "230205",
      parent: "230200"
    }, {
      name: "\u5BCC\u62C9\u5C14\u57FA\u533A",
      value: "230206",
      parent: "230200"
    }, {
      name: "\u78BE\u5B50\u5C71\u533A",
      value: "230207",
      parent: "230200"
    }, {
      name: "\u6885\u91CC\u65AF\u8FBE\u65A1\u5C14\u65CF\u533A",
      value: "230208",
      parent: "230200"
    }, {
      name: "\u9F99\u6C5F\u53BF",
      value: "230221",
      parent: "230200"
    }, {
      name: "\u4F9D\u5B89\u53BF",
      value: "230223",
      parent: "230200"
    }, {
      name: "\u6CF0\u6765\u53BF",
      value: "230224",
      parent: "230200"
    }, {
      name: "\u7518\u5357\u53BF",
      value: "230225",
      parent: "230200"
    }, {
      name: "\u5BCC\u88D5\u53BF",
      value: "230227",
      parent: "230200"
    }, {
      name: "\u514B\u5C71\u53BF",
      value: "230229",
      parent: "230200"
    }, {
      name: "\u514B\u4E1C\u53BF",
      value: "230230",
      parent: "230200"
    }, {
      name: "\u62DC\u6CC9\u53BF",
      value: "230231",
      parent: "230200"
    }, {
      name: "\u8BB7\u6CB3\u5E02",
      value: "230281",
      parent: "230200"
    }, {
      name: "\u9E21\u51A0\u533A",
      value: "230302",
      parent: "230300"
    }, {
      name: "\u6052\u5C71\u533A",
      value: "230303",
      parent: "230300"
    }, {
      name: "\u6EF4\u9053\u533A",
      value: "230304",
      parent: "230300"
    }, {
      name: "\u68A8\u6811\u533A",
      value: "230305",
      parent: "230300"
    }, {
      name: "\u57CE\u5B50\u6CB3\u533A",
      value: "230306",
      parent: "230300"
    }, {
      name: "\u9EBB\u5C71\u533A",
      value: "230307",
      parent: "230300"
    }, {
      name: "\u9E21\u4E1C\u53BF",
      value: "230321",
      parent: "230300"
    }, {
      name: "\u864E\u6797\u5E02",
      value: "230381",
      parent: "230300"
    }, {
      name: "\u5BC6\u5C71\u5E02",
      value: "230382",
      parent: "230300"
    }, {
      name: "\u5411\u9633\u533A",
      value: "230402",
      parent: "230400"
    }, {
      name: "\u5DE5\u519C\u533A",
      value: "230403",
      parent: "230400"
    }, {
      name: "\u5357\u5C71\u533A",
      value: "230404",
      parent: "230400"
    }, {
      name: "\u5174\u5B89\u533A",
      value: "230405",
      parent: "230400"
    }, {
      name: "\u4E1C\u5C71\u533A",
      value: "230406",
      parent: "230400"
    }, {
      name: "\u5174\u5C71\u533A",
      value: "230407",
      parent: "230400"
    }, {
      name: "\u841D\u5317\u53BF",
      value: "230421",
      parent: "230400"
    }, {
      name: "\u7EE5\u6EE8\u53BF",
      value: "230422",
      parent: "230400"
    }, {
      name: "\u5C16\u5C71\u533A",
      value: "230502",
      parent: "230500"
    }, {
      name: "\u5CAD\u4E1C\u533A",
      value: "230503",
      parent: "230500"
    }, {
      name: "\u56DB\u65B9\u53F0\u533A",
      value: "230505",
      parent: "230500"
    }, {
      name: "\u5B9D\u5C71\u533A",
      value: "230506",
      parent: "230500"
    }, {
      name: "\u96C6\u8D24\u53BF",
      value: "230521",
      parent: "230500"
    }, {
      name: "\u53CB\u8C0A\u53BF",
      value: "230522",
      parent: "230500"
    }, {
      name: "\u5B9D\u6E05\u53BF",
      value: "230523",
      parent: "230500"
    }, {
      name: "\u9976\u6CB3\u53BF",
      value: "230524",
      parent: "230500"
    }, {
      name: "\u8428\u5C14\u56FE\u533A",
      value: "230602",
      parent: "230600"
    }, {
      name: "\u9F99\u51E4\u533A",
      value: "230603",
      parent: "230600"
    }, {
      name: "\u8BA9\u80E1\u8DEF\u533A",
      value: "230604",
      parent: "230600"
    }, {
      name: "\u7EA2\u5C97\u533A",
      value: "230605",
      parent: "230600"
    }, {
      name: "\u5927\u540C\u533A",
      value: "230606",
      parent: "230600"
    }, {
      name: "\u8087\u5DDE\u53BF",
      value: "230621",
      parent: "230600"
    }, {
      name: "\u8087\u6E90\u53BF",
      value: "230622",
      parent: "230600"
    }, {
      name: "\u6797\u7538\u53BF",
      value: "230623",
      parent: "230600"
    }, {
      name: "\u675C\u5C14\u4F2F\u7279\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
      value: "230624",
      parent: "230600"
    }, {
      name: "\u4F0A\u6625\u533A",
      value: "230702",
      parent: "230700"
    }, {
      name: "\u5357\u5C94\u533A",
      value: "230703",
      parent: "230700"
    }, {
      name: "\u53CB\u597D\u533A",
      value: "230704",
      parent: "230700"
    }, {
      name: "\u897F\u6797\u533A",
      value: "230705",
      parent: "230700"
    }, {
      name: "\u7FE0\u5CE6\u533A",
      value: "230706",
      parent: "230700"
    }, {
      name: "\u65B0\u9752\u533A",
      value: "230707",
      parent: "230700"
    }, {
      name: "\u7F8E\u6EAA\u533A",
      value: "230708",
      parent: "230700"
    }, {
      name: "\u91D1\u5C71\u5C6F\u533A",
      value: "230709",
      parent: "230700"
    }, {
      name: "\u4E94\u8425\u533A",
      value: "230710",
      parent: "230700"
    }, {
      name: "\u4E4C\u9A6C\u6CB3\u533A",
      value: "230711",
      parent: "230700"
    }, {
      name: "\u6C64\u65FA\u6CB3\u533A",
      value: "230712",
      parent: "230700"
    }, {
      name: "\u5E26\u5CAD\u533A",
      value: "230713",
      parent: "230700"
    }, {
      name: "\u4E4C\u4F0A\u5CAD\u533A",
      value: "230714",
      parent: "230700"
    }, {
      name: "\u7EA2\u661F\u533A",
      value: "230715",
      parent: "230700"
    }, {
      name: "\u4E0A\u7518\u5CAD\u533A",
      value: "230716",
      parent: "230700"
    }, {
      name: "\u5609\u836B\u53BF",
      value: "230722",
      parent: "230700"
    }, {
      name: "\u94C1\u529B\u5E02",
      value: "230781",
      parent: "230700"
    }, {
      name: "\u5411\u9633\u533A",
      value: "230803",
      parent: "230800"
    }, {
      name: "\u524D\u8FDB\u533A",
      value: "230804",
      parent: "230800"
    }, {
      name: "\u4E1C\u98CE\u533A",
      value: "230805",
      parent: "230800"
    }, {
      name: "\u90CA\u533A",
      value: "230811",
      parent: "230800"
    }, {
      name: "\u6866\u5357\u53BF",
      value: "230822",
      parent: "230800"
    }, {
      name: "\u6866\u5DDD\u53BF",
      value: "230826",
      parent: "230800"
    }, {
      name: "\u6C64\u539F\u53BF",
      value: "230828",
      parent: "230800"
    }, {
      name: "\u629A\u8FDC\u53BF",
      value: "230833",
      parent: "230800"
    }, {
      name: "\u540C\u6C5F\u5E02",
      value: "230881",
      parent: "230800"
    }, {
      name: "\u5BCC\u9526\u5E02",
      value: "230882",
      parent: "230800"
    }, {
      name: "\u65B0\u5174\u533A",
      value: "230902",
      parent: "230900"
    }, {
      name: "\u6843\u5C71\u533A",
      value: "230903",
      parent: "230900"
    }, {
      name: "\u8304\u5B50\u6CB3\u533A",
      value: "230904",
      parent: "230900"
    }, {
      name: "\u52C3\u5229\u53BF",
      value: "230921",
      parent: "230900"
    }, {
      name: "\u4E1C\u5B89\u533A",
      value: "231002",
      parent: "231000"
    }, {
      name: "\u9633\u660E\u533A",
      value: "231003",
      parent: "231000"
    }, {
      name: "\u7231\u6C11\u533A",
      value: "231004",
      parent: "231000"
    }, {
      name: "\u897F\u5B89\u533A",
      value: "231005",
      parent: "231000"
    }, {
      name: "\u4E1C\u5B81\u53BF",
      value: "231024",
      parent: "231000"
    }, {
      name: "\u6797\u53E3\u53BF",
      value: "231025",
      parent: "231000"
    }, {
      name: "\u7EE5\u82AC\u6CB3\u5E02",
      value: "231081",
      parent: "231000"
    }, {
      name: "\u6D77\u6797\u5E02",
      value: "231083",
      parent: "231000"
    }, {
      name: "\u5B81\u5B89\u5E02",
      value: "231084",
      parent: "231000"
    }, {
      name: "\u7A46\u68F1\u5E02",
      value: "231085",
      parent: "231000"
    }, {
      name: "\u7231\u8F89\u533A",
      value: "231102",
      parent: "231100"
    }, {
      name: "\u5AE9\u6C5F\u53BF",
      value: "231121",
      parent: "231100"
    }, {
      name: "\u900A\u514B\u53BF",
      value: "231123",
      parent: "231100"
    }, {
      name: "\u5B59\u5434\u53BF",
      value: "231124",
      parent: "231100"
    }, {
      name: "\u5317\u5B89\u5E02",
      value: "231181",
      parent: "231100"
    }, {
      name: "\u4E94\u5927\u8FDE\u6C60\u5E02",
      value: "231182",
      parent: "231100"
    }, {
      name: "\u5317\u6797\u533A",
      value: "231202",
      parent: "231200"
    }, {
      name: "\u671B\u594E\u53BF",
      value: "231221",
      parent: "231200"
    }, {
      name: "\u5170\u897F\u53BF",
      value: "231222",
      parent: "231200"
    }, {
      name: "\u9752\u5188\u53BF",
      value: "231223",
      parent: "231200"
    }, {
      name: "\u5E86\u5B89\u53BF",
      value: "231224",
      parent: "231200"
    }, {
      name: "\u660E\u6C34\u53BF",
      value: "231225",
      parent: "231200"
    }, {
      name: "\u7EE5\u68F1\u53BF",
      value: "231226",
      parent: "231200"
    }, {
      name: "\u5B89\u8FBE\u5E02",
      value: "231281",
      parent: "231200"
    }, {
      name: "\u8087\u4E1C\u5E02",
      value: "231282",
      parent: "231200"
    }, {
      name: "\u6D77\u4F26\u5E02",
      value: "231283",
      parent: "231200"
    }, {
      name: "\u547C\u739B\u53BF",
      value: "232721",
      parent: "232700"
    }, {
      name: "\u5854\u6CB3\u53BF",
      value: "232722",
      parent: "232700"
    }, {
      name: "\u6F20\u6CB3\u53BF",
      value: "232723",
      parent: "232700"
    }, {
      name: "\u5E02\u8F96\u533A",
      value: "310100",
      parent: "310000"
    }, {
      name: "\u9EC4\u6D66\u533A",
      value: "310101",
      parent: "310100"
    }, {
      name: "\u5F90\u6C47\u533A",
      value: "310104",
      parent: "310100"
    }, {
      name: "\u957F\u5B81\u533A",
      value: "310105",
      parent: "310100"
    }, {
      name: "\u9759\u5B89\u533A",
      value: "310106",
      parent: "310100"
    }, {
      name: "\u666E\u9640\u533A",
      value: "310107",
      parent: "310100"
    }, {
      name: "\u95F8\u5317\u533A",
      value: "310108",
      parent: "310100"
    }, {
      name: "\u8679\u53E3\u533A",
      value: "310109",
      parent: "310100"
    }, {
      name: "\u6768\u6D66\u533A",
      value: "310110",
      parent: "310100"
    }, {
      name: "\u95F5\u884C\u533A",
      value: "310112",
      parent: "310100"
    }, {
      name: "\u5B9D\u5C71\u533A",
      value: "310113",
      parent: "310100"
    }, {
      name: "\u5609\u5B9A\u533A",
      value: "310114",
      parent: "310100"
    }, {
      name: "\u6D66\u4E1C\u65B0\u533A",
      value: "310115",
      parent: "310100"
    }, {
      name: "\u91D1\u5C71\u533A",
      value: "310116",
      parent: "310100"
    }, {
      name: "\u677E\u6C5F\u533A",
      value: "310117",
      parent: "310100"
    }, {
      name: "\u9752\u6D66\u533A",
      value: "310118",
      parent: "310100"
    }, {
      name: "\u5949\u8D24\u533A",
      value: "310120",
      parent: "310100"
    }, {
      name: "\u5D07\u660E\u53BF",
      value: "310230",
      parent: "310100"
    }, {
      name: "\u5357\u4EAC\u5E02",
      value: "320100",
      parent: "320000"
    }, {
      name: "\u65E0\u9521\u5E02",
      value: "320200",
      parent: "320000"
    }, {
      name: "\u5F90\u5DDE\u5E02",
      value: "320300",
      parent: "320000"
    }, {
      name: "\u5E38\u5DDE\u5E02",
      value: "320400",
      parent: "320000"
    }, {
      name: "\u82CF\u5DDE\u5E02",
      value: "320500",
      parent: "320000"
    }, {
      name: "\u5357\u901A\u5E02",
      value: "320600",
      parent: "320000"
    }, {
      name: "\u8FDE\u4E91\u6E2F\u5E02",
      value: "320700",
      parent: "320000"
    }, {
      name: "\u6DEE\u5B89\u5E02",
      value: "320800",
      parent: "320000"
    }, {
      name: "\u76D0\u57CE\u5E02",
      value: "320900",
      parent: "320000"
    }, {
      name: "\u626C\u5DDE\u5E02",
      value: "321000",
      parent: "320000"
    }, {
      name: "\u9547\u6C5F\u5E02",
      value: "321100",
      parent: "320000"
    }, {
      name: "\u6CF0\u5DDE\u5E02",
      value: "321200",
      parent: "320000"
    }, {
      name: "\u5BBF\u8FC1\u5E02",
      value: "321300",
      parent: "320000"
    }, {
      name: "\u7384\u6B66\u533A",
      value: "320102",
      parent: "320100"
    }, {
      name: "\u79E6\u6DEE\u533A",
      value: "320104",
      parent: "320100"
    }, {
      name: "\u5EFA\u90BA\u533A",
      value: "320105",
      parent: "320100"
    }, {
      name: "\u9F13\u697C\u533A",
      value: "320106",
      parent: "320100"
    }, {
      name: "\u6D66\u53E3\u533A",
      value: "320111",
      parent: "320100"
    }, {
      name: "\u6816\u971E\u533A",
      value: "320113",
      parent: "320100"
    }, {
      name: "\u96E8\u82B1\u53F0\u533A",
      value: "320114",
      parent: "320100"
    }, {
      name: "\u6C5F\u5B81\u533A",
      value: "320115",
      parent: "320100"
    }, {
      name: "\u516D\u5408\u533A",
      value: "320116",
      parent: "320100"
    }, {
      name: "\u6EA7\u6C34\u533A",
      value: "320117",
      parent: "320100"
    }, {
      name: "\u9AD8\u6DF3\u533A",
      value: "320118",
      parent: "320100"
    }, {
      name: "\u5D07\u5B89\u533A",
      value: "320202",
      parent: "320200"
    }, {
      name: "\u5357\u957F\u533A",
      value: "320203",
      parent: "320200"
    }, {
      name: "\u5317\u5858\u533A",
      value: "320204",
      parent: "320200"
    }, {
      name: "\u9521\u5C71\u533A",
      value: "320205",
      parent: "320200"
    }, {
      name: "\u60E0\u5C71\u533A",
      value: "320206",
      parent: "320200"
    }, {
      name: "\u6EE8\u6E56\u533A",
      value: "320211",
      parent: "320200"
    }, {
      name: "\u6C5F\u9634\u5E02",
      value: "320281",
      parent: "320200"
    }, {
      name: "\u5B9C\u5174\u5E02",
      value: "320282",
      parent: "320200"
    }, {
      name: "\u9F13\u697C\u533A",
      value: "320302",
      parent: "320300"
    }, {
      name: "\u4E91\u9F99\u533A",
      value: "320303",
      parent: "320300"
    }, {
      name: "\u8D3E\u6C6A\u533A",
      value: "320305",
      parent: "320300"
    }, {
      name: "\u6CC9\u5C71\u533A",
      value: "320311",
      parent: "320300"
    }, {
      name: "\u94DC\u5C71\u533A",
      value: "320312",
      parent: "320300"
    }, {
      name: "\u4E30\u53BF",
      value: "320321",
      parent: "320300"
    }, {
      name: "\u6C9B\u53BF",
      value: "320322",
      parent: "320300"
    }, {
      name: "\u7762\u5B81\u53BF",
      value: "320324",
      parent: "320300"
    }, {
      name: "\u65B0\u6C82\u5E02",
      value: "320381",
      parent: "320300"
    }, {
      name: "\u90B3\u5DDE\u5E02",
      value: "320382",
      parent: "320300"
    }, {
      name: "\u5929\u5B81\u533A",
      value: "320402",
      parent: "320400"
    }, {
      name: "\u949F\u697C\u533A",
      value: "320404",
      parent: "320400"
    }, {
      name: "\u65B0\u5317\u533A",
      value: "320411",
      parent: "320400"
    }, {
      name: "\u6B66\u8FDB\u533A",
      value: "320412",
      parent: "320400"
    }, {
      name: "\u91D1\u575B\u533A",
      value: "320413",
      parent: "320400"
    }, {
      name: "\u6EA7\u9633\u5E02",
      value: "320481",
      parent: "320400"
    }, {
      name: "\u864E\u4E18\u533A",
      value: "320505",
      parent: "320500"
    }, {
      name: "\u5434\u4E2D\u533A",
      value: "320506",
      parent: "320500"
    }, {
      name: "\u76F8\u57CE\u533A",
      value: "320507",
      parent: "320500"
    }, {
      name: "\u59D1\u82CF\u533A",
      value: "320508",
      parent: "320500"
    }, {
      name: "\u5434\u6C5F\u533A",
      value: "320509",
      parent: "320500"
    }, {
      name: "\u5E38\u719F\u5E02",
      value: "320581",
      parent: "320500"
    }, {
      name: "\u5F20\u5BB6\u6E2F\u5E02",
      value: "320582",
      parent: "320500"
    }, {
      name: "\u6606\u5C71\u5E02",
      value: "320583",
      parent: "320500"
    }, {
      name: "\u592A\u4ED3\u5E02",
      value: "320585",
      parent: "320500"
    }, {
      name: "\u5D07\u5DDD\u533A",
      value: "320602",
      parent: "320600"
    }, {
      name: "\u6E2F\u95F8\u533A",
      value: "320611",
      parent: "320600"
    }, {
      name: "\u901A\u5DDE\u533A",
      value: "320612",
      parent: "320600"
    }, {
      name: "\u6D77\u5B89\u53BF",
      value: "320621",
      parent: "320600"
    }, {
      name: "\u5982\u4E1C\u53BF",
      value: "320623",
      parent: "320600"
    }, {
      name: "\u542F\u4E1C\u5E02",
      value: "320681",
      parent: "320600"
    }, {
      name: "\u5982\u768B\u5E02",
      value: "320682",
      parent: "320600"
    }, {
      name: "\u6D77\u95E8\u5E02",
      value: "320684",
      parent: "320600"
    }, {
      name: "\u8FDE\u4E91\u533A",
      value: "320703",
      parent: "320700"
    }, {
      name: "\u6D77\u5DDE\u533A",
      value: "320706",
      parent: "320700"
    }, {
      name: "\u8D63\u6986\u533A",
      value: "320707",
      parent: "320700"
    }, {
      name: "\u4E1C\u6D77\u53BF",
      value: "320722",
      parent: "320700"
    }, {
      name: "\u704C\u4E91\u53BF",
      value: "320723",
      parent: "320700"
    }, {
      name: "\u704C\u5357\u53BF",
      value: "320724",
      parent: "320700"
    }, {
      name: "\u6E05\u6CB3\u533A",
      value: "320802",
      parent: "320800"
    }, {
      name: "\u6DEE\u5B89\u533A",
      value: "320803",
      parent: "320800"
    }, {
      name: "\u6DEE\u9634\u533A",
      value: "320804",
      parent: "320800"
    }, {
      name: "\u6E05\u6D66\u533A",
      value: "320811",
      parent: "320800"
    }, {
      name: "\u6D9F\u6C34\u53BF",
      value: "320826",
      parent: "320800"
    }, {
      name: "\u6D2A\u6CFD\u53BF",
      value: "320829",
      parent: "320800"
    }, {
      name: "\u76F1\u7719\u53BF",
      value: "320830",
      parent: "320800"
    }, {
      name: "\u91D1\u6E56\u53BF",
      value: "320831",
      parent: "320800"
    }, {
      name: "\u4EAD\u6E56\u533A",
      value: "320902",
      parent: "320900"
    }, {
      name: "\u76D0\u90FD\u533A",
      value: "320903",
      parent: "320900"
    }, {
      name: "\u5927\u4E30\u533A",
      value: "320904",
      parent: "320900"
    }, {
      name: "\u54CD\u6C34\u53BF",
      value: "320921",
      parent: "320900"
    }, {
      name: "\u6EE8\u6D77\u53BF",
      value: "320922",
      parent: "320900"
    }, {
      name: "\u961C\u5B81\u53BF",
      value: "320923",
      parent: "320900"
    }, {
      name: "\u5C04\u9633\u53BF",
      value: "320924",
      parent: "320900"
    }, {
      name: "\u5EFA\u6E56\u53BF",
      value: "320925",
      parent: "320900"
    }, {
      name: "\u4E1C\u53F0\u5E02",
      value: "320981",
      parent: "320900"
    }, {
      name: "\u5E7F\u9675\u533A",
      value: "321002",
      parent: "321000"
    }, {
      name: "\u9097\u6C5F\u533A",
      value: "321003",
      parent: "321000"
    }, {
      name: "\u6C5F\u90FD\u533A",
      value: "321012",
      parent: "321000"
    }, {
      name: "\u5B9D\u5E94\u53BF",
      value: "321023",
      parent: "321000"
    }, {
      name: "\u4EEA\u5F81\u5E02",
      value: "321081",
      parent: "321000"
    }, {
      name: "\u9AD8\u90AE\u5E02",
      value: "321084",
      parent: "321000"
    }, {
      name: "\u4EAC\u53E3\u533A",
      value: "321102",
      parent: "321100"
    }, {
      name: "\u6DA6\u5DDE\u533A",
      value: "321111",
      parent: "321100"
    }, {
      name: "\u4E39\u5F92\u533A",
      value: "321112",
      parent: "321100"
    }, {
      name: "\u4E39\u9633\u5E02",
      value: "321181",
      parent: "321100"
    }, {
      name: "\u626C\u4E2D\u5E02",
      value: "321182",
      parent: "321100"
    }, {
      name: "\u53E5\u5BB9\u5E02",
      value: "321183",
      parent: "321100"
    }, {
      name: "\u6D77\u9675\u533A",
      value: "321202",
      parent: "321200"
    }, {
      name: "\u9AD8\u6E2F\u533A",
      value: "321203",
      parent: "321200"
    }, {
      name: "\u59DC\u5830\u533A",
      value: "321204",
      parent: "321200"
    }, {
      name: "\u5174\u5316\u5E02",
      value: "321281",
      parent: "321200"
    }, {
      name: "\u9756\u6C5F\u5E02",
      value: "321282",
      parent: "321200"
    }, {
      name: "\u6CF0\u5174\u5E02",
      value: "321283",
      parent: "321200"
    }, {
      name: "\u5BBF\u57CE\u533A",
      value: "321302",
      parent: "321300"
    }, {
      name: "\u5BBF\u8C6B\u533A",
      value: "321311",
      parent: "321300"
    }, {
      name: "\u6CAD\u9633\u53BF",
      value: "321322",
      parent: "321300"
    }, {
      name: "\u6CD7\u9633\u53BF",
      value: "321323",
      parent: "321300"
    }, {
      name: "\u6CD7\u6D2A\u53BF",
      value: "321324",
      parent: "321300"
    }, {
      name: "\u676D\u5DDE\u5E02",
      value: "330100",
      parent: "330000"
    }, {
      name: "\u5B81\u6CE2\u5E02",
      value: "330200",
      parent: "330000"
    }, {
      name: "\u6E29\u5DDE\u5E02",
      value: "330300",
      parent: "330000"
    }, {
      name: "\u5609\u5174\u5E02",
      value: "330400",
      parent: "330000"
    }, {
      name: "\u6E56\u5DDE\u5E02",
      value: "330500",
      parent: "330000"
    }, {
      name: "\u7ECD\u5174\u5E02",
      value: "330600",
      parent: "330000"
    }, {
      name: "\u91D1\u534E\u5E02",
      value: "330700",
      parent: "330000"
    }, {
      name: "\u8862\u5DDE\u5E02",
      value: "330800",
      parent: "330000"
    }, {
      name: "\u821F\u5C71\u5E02",
      value: "330900",
      parent: "330000"
    }, {
      name: "\u53F0\u5DDE\u5E02",
      value: "331000",
      parent: "330000"
    }, {
      name: "\u4E3D\u6C34\u5E02",
      value: "331100",
      parent: "330000"
    }, {
      name: "\u4E0A\u57CE\u533A",
      value: "330102",
      parent: "330100"
    }, {
      name: "\u4E0B\u57CE\u533A",
      value: "330103",
      parent: "330100"
    }, {
      name: "\u6C5F\u5E72\u533A",
      value: "330104",
      parent: "330100"
    }, {
      name: "\u62F1\u5885\u533A",
      value: "330105",
      parent: "330100"
    }, {
      name: "\u897F\u6E56\u533A",
      value: "330106",
      parent: "330100"
    }, {
      name: "\u6EE8\u6C5F\u533A",
      value: "330108",
      parent: "330100"
    }, {
      name: "\u8427\u5C71\u533A",
      value: "330109",
      parent: "330100"
    }, {
      name: "\u4F59\u676D\u533A",
      value: "330110",
      parent: "330100"
    }, {
      name: "\u5BCC\u9633\u533A",
      value: "330111",
      parent: "330100"
    }, {
      name: "\u6850\u5E90\u53BF",
      value: "330122",
      parent: "330100"
    }, {
      name: "\u6DF3\u5B89\u53BF",
      value: "330127",
      parent: "330100"
    }, {
      name: "\u5EFA\u5FB7\u5E02",
      value: "330182",
      parent: "330100"
    }, {
      name: "\u4E34\u5B89\u5E02",
      value: "330185",
      parent: "330100"
    }, {
      name: "\u6D77\u66D9\u533A",
      value: "330203",
      parent: "330200"
    }, {
      name: "\u6C5F\u4E1C\u533A",
      value: "330204",
      parent: "330200"
    }, {
      name: "\u6C5F\u5317\u533A",
      value: "330205",
      parent: "330200"
    }, {
      name: "\u5317\u4ED1\u533A",
      value: "330206",
      parent: "330200"
    }, {
      name: "\u9547\u6D77\u533A",
      value: "330211",
      parent: "330200"
    }, {
      name: "\u911E\u5DDE\u533A",
      value: "330212",
      parent: "330200"
    }, {
      name: "\u8C61\u5C71\u53BF",
      value: "330225",
      parent: "330200"
    }, {
      name: "\u5B81\u6D77\u53BF",
      value: "330226",
      parent: "330200"
    }, {
      name: "\u4F59\u59DA\u5E02",
      value: "330281",
      parent: "330200"
    }, {
      name: "\u6148\u6EAA\u5E02",
      value: "330282",
      parent: "330200"
    }, {
      name: "\u5949\u5316\u5E02",
      value: "330283",
      parent: "330200"
    }, {
      name: "\u9E7F\u57CE\u533A",
      value: "330302",
      parent: "330300"
    }, {
      name: "\u9F99\u6E7E\u533A",
      value: "330303",
      parent: "330300"
    }, {
      name: "\u74EF\u6D77\u533A",
      value: "330304",
      parent: "330300"
    }, {
      name: "\u6D1E\u5934\u533A",
      value: "330305",
      parent: "330300"
    }, {
      name: "\u6C38\u5609\u53BF",
      value: "330324",
      parent: "330300"
    }, {
      name: "\u5E73\u9633\u53BF",
      value: "330326",
      parent: "330300"
    }, {
      name: "\u82CD\u5357\u53BF",
      value: "330327",
      parent: "330300"
    }, {
      name: "\u6587\u6210\u53BF",
      value: "330328",
      parent: "330300"
    }, {
      name: "\u6CF0\u987A\u53BF",
      value: "330329",
      parent: "330300"
    }, {
      name: "\u745E\u5B89\u5E02",
      value: "330381",
      parent: "330300"
    }, {
      name: "\u4E50\u6E05\u5E02",
      value: "330382",
      parent: "330300"
    }, {
      name: "\u5357\u6E56\u533A",
      value: "330402",
      parent: "330400"
    }, {
      name: "\u79C0\u6D32\u533A",
      value: "330411",
      parent: "330400"
    }, {
      name: "\u5609\u5584\u53BF",
      value: "330421",
      parent: "330400"
    }, {
      name: "\u6D77\u76D0\u53BF",
      value: "330424",
      parent: "330400"
    }, {
      name: "\u6D77\u5B81\u5E02",
      value: "330481",
      parent: "330400"
    }, {
      name: "\u5E73\u6E56\u5E02",
      value: "330482",
      parent: "330400"
    }, {
      name: "\u6850\u4E61\u5E02",
      value: "330483",
      parent: "330400"
    }, {
      name: "\u5434\u5174\u533A",
      value: "330502",
      parent: "330500"
    }, {
      name: "\u5357\u6D54\u533A",
      value: "330503",
      parent: "330500"
    }, {
      name: "\u5FB7\u6E05\u53BF",
      value: "330521",
      parent: "330500"
    }, {
      name: "\u957F\u5174\u53BF",
      value: "330522",
      parent: "330500"
    }, {
      name: "\u5B89\u5409\u53BF",
      value: "330523",
      parent: "330500"
    }, {
      name: "\u8D8A\u57CE\u533A",
      value: "330602",
      parent: "330600"
    }, {
      name: "\u67EF\u6865\u533A",
      value: "330603",
      parent: "330600"
    }, {
      name: "\u4E0A\u865E\u533A",
      value: "330604",
      parent: "330600"
    }, {
      name: "\u65B0\u660C\u53BF",
      value: "330624",
      parent: "330600"
    }, {
      name: "\u8BF8\u66A8\u5E02",
      value: "330681",
      parent: "330600"
    }, {
      name: "\u5D4A\u5DDE\u5E02",
      value: "330683",
      parent: "330600"
    }, {
      name: "\u5A7A\u57CE\u533A",
      value: "330702",
      parent: "330700"
    }, {
      name: "\u91D1\u4E1C\u533A",
      value: "330703",
      parent: "330700"
    }, {
      name: "\u6B66\u4E49\u53BF",
      value: "330723",
      parent: "330700"
    }, {
      name: "\u6D66\u6C5F\u53BF",
      value: "330726",
      parent: "330700"
    }, {
      name: "\u78D0\u5B89\u53BF",
      value: "330727",
      parent: "330700"
    }, {
      name: "\u5170\u6EAA\u5E02",
      value: "330781",
      parent: "330700"
    }, {
      name: "\u4E49\u4E4C\u5E02",
      value: "330782",
      parent: "330700"
    }, {
      name: "\u4E1C\u9633\u5E02",
      value: "330783",
      parent: "330700"
    }, {
      name: "\u6C38\u5EB7\u5E02",
      value: "330784",
      parent: "330700"
    }, {
      name: "\u67EF\u57CE\u533A",
      value: "330802",
      parent: "330800"
    }, {
      name: "\u8862\u6C5F\u533A",
      value: "330803",
      parent: "330800"
    }, {
      name: "\u5E38\u5C71\u53BF",
      value: "330822",
      parent: "330800"
    }, {
      name: "\u5F00\u5316\u53BF",
      value: "330824",
      parent: "330800"
    }, {
      name: "\u9F99\u6E38\u53BF",
      value: "330825",
      parent: "330800"
    }, {
      name: "\u6C5F\u5C71\u5E02",
      value: "330881",
      parent: "330800"
    }, {
      name: "\u5B9A\u6D77\u533A",
      value: "330902",
      parent: "330900"
    }, {
      name: "\u666E\u9640\u533A",
      value: "330903",
      parent: "330900"
    }, {
      name: "\u5CB1\u5C71\u53BF",
      value: "330921",
      parent: "330900"
    }, {
      name: "\u5D4A\u6CD7\u53BF",
      value: "330922",
      parent: "330900"
    }, {
      name: "\u6912\u6C5F\u533A",
      value: "331002",
      parent: "331000"
    }, {
      name: "\u9EC4\u5CA9\u533A",
      value: "331003",
      parent: "331000"
    }, {
      name: "\u8DEF\u6865\u533A",
      value: "331004",
      parent: "331000"
    }, {
      name: "\u7389\u73AF\u53BF",
      value: "331021",
      parent: "331000"
    }, {
      name: "\u4E09\u95E8\u53BF",
      value: "331022",
      parent: "331000"
    }, {
      name: "\u5929\u53F0\u53BF",
      value: "331023",
      parent: "331000"
    }, {
      name: "\u4ED9\u5C45\u53BF",
      value: "331024",
      parent: "331000"
    }, {
      name: "\u6E29\u5CAD\u5E02",
      value: "331081",
      parent: "331000"
    }, {
      name: "\u4E34\u6D77\u5E02",
      value: "331082",
      parent: "331000"
    }, {
      name: "\u83B2\u90FD\u533A",
      value: "331102",
      parent: "331100"
    }, {
      name: "\u9752\u7530\u53BF",
      value: "331121",
      parent: "331100"
    }, {
      name: "\u7F19\u4E91\u53BF",
      value: "331122",
      parent: "331100"
    }, {
      name: "\u9042\u660C\u53BF",
      value: "331123",
      parent: "331100"
    }, {
      name: "\u677E\u9633\u53BF",
      value: "331124",
      parent: "331100"
    }, {
      name: "\u4E91\u548C\u53BF",
      value: "331125",
      parent: "331100"
    }, {
      name: "\u5E86\u5143\u53BF",
      value: "331126",
      parent: "331100"
    }, {
      name: "\u666F\u5B81\u7572\u65CF\u81EA\u6CBB\u53BF",
      value: "331127",
      parent: "331100"
    }, {
      name: "\u9F99\u6CC9\u5E02",
      value: "331181",
      parent: "331100"
    }, {
      name: "\u5408\u80A5\u5E02",
      value: "340100",
      parent: "340000"
    }, {
      name: "\u829C\u6E56\u5E02",
      value: "340200",
      parent: "340000"
    }, {
      name: "\u868C\u57E0\u5E02",
      value: "340300",
      parent: "340000"
    }, {
      name: "\u6DEE\u5357\u5E02",
      value: "340400",
      parent: "340000"
    }, {
      name: "\u9A6C\u978D\u5C71\u5E02",
      value: "340500",
      parent: "340000"
    }, {
      name: "\u6DEE\u5317\u5E02",
      value: "340600",
      parent: "340000"
    }, {
      name: "\u94DC\u9675\u5E02",
      value: "340700",
      parent: "340000"
    }, {
      name: "\u5B89\u5E86\u5E02",
      value: "340800",
      parent: "340000"
    }, {
      name: "\u9EC4\u5C71\u5E02",
      value: "341000",
      parent: "340000"
    }, {
      name: "\u6EC1\u5DDE\u5E02",
      value: "341100",
      parent: "340000"
    }, {
      name: "\u961C\u9633\u5E02",
      value: "341200",
      parent: "340000"
    }, {
      name: "\u5BBF\u5DDE\u5E02",
      value: "341300",
      parent: "340000"
    }, {
      name: "\u516D\u5B89\u5E02",
      value: "341500",
      parent: "340000"
    }, {
      name: "\u4EB3\u5DDE\u5E02",
      value: "341600",
      parent: "340000"
    }, {
      name: "\u6C60\u5DDE\u5E02",
      value: "341700",
      parent: "340000"
    }, {
      name: "\u5BA3\u57CE\u5E02",
      value: "341800",
      parent: "340000"
    }, {
      name: "\u7476\u6D77\u533A",
      value: "340102",
      parent: "340100"
    }, {
      name: "\u5E90\u9633\u533A",
      value: "340103",
      parent: "340100"
    }, {
      name: "\u8700\u5C71\u533A",
      value: "340104",
      parent: "340100"
    }, {
      name: "\u5305\u6CB3\u533A",
      value: "340111",
      parent: "340100"
    }, {
      name: "\u957F\u4E30\u53BF",
      value: "340121",
      parent: "340100"
    }, {
      name: "\u80A5\u4E1C\u53BF",
      value: "340122",
      parent: "340100"
    }, {
      name: "\u80A5\u897F\u53BF",
      value: "340123",
      parent: "340100"
    }, {
      name: "\u5E90\u6C5F\u53BF",
      value: "340124",
      parent: "340100"
    }, {
      name: "\u5DE2\u6E56\u5E02",
      value: "340181",
      parent: "340100"
    }, {
      name: "\u955C\u6E56\u533A",
      value: "340202",
      parent: "340200"
    }, {
      name: "\u5F0B\u6C5F\u533A",
      value: "340203",
      parent: "340200"
    }, {
      name: "\u9E20\u6C5F\u533A",
      value: "340207",
      parent: "340200"
    }, {
      name: "\u4E09\u5C71\u533A",
      value: "340208",
      parent: "340200"
    }, {
      name: "\u829C\u6E56\u53BF",
      value: "340221",
      parent: "340200"
    }, {
      name: "\u7E41\u660C\u53BF",
      value: "340222",
      parent: "340200"
    }, {
      name: "\u5357\u9675\u53BF",
      value: "340223",
      parent: "340200"
    }, {
      name: "\u65E0\u4E3A\u53BF",
      value: "340225",
      parent: "340200"
    }, {
      name: "\u9F99\u5B50\u6E56\u533A",
      value: "340302",
      parent: "340300"
    }, {
      name: "\u868C\u5C71\u533A",
      value: "340303",
      parent: "340300"
    }, {
      name: "\u79B9\u4F1A\u533A",
      value: "340304",
      parent: "340300"
    }, {
      name: "\u6DEE\u4E0A\u533A",
      value: "340311",
      parent: "340300"
    }, {
      name: "\u6000\u8FDC\u53BF",
      value: "340321",
      parent: "340300"
    }, {
      name: "\u4E94\u6CB3\u53BF",
      value: "340322",
      parent: "340300"
    }, {
      name: "\u56FA\u9547\u53BF",
      value: "340323",
      parent: "340300"
    }, {
      name: "\u5927\u901A\u533A",
      value: "340402",
      parent: "340400"
    }, {
      name: "\u7530\u5BB6\u5EB5\u533A",
      value: "340403",
      parent: "340400"
    }, {
      name: "\u8C22\u5BB6\u96C6\u533A",
      value: "340404",
      parent: "340400"
    }, {
      name: "\u516B\u516C\u5C71\u533A",
      value: "340405",
      parent: "340400"
    }, {
      name: "\u6F58\u96C6\u533A",
      value: "340406",
      parent: "340400"
    }, {
      name: "\u51E4\u53F0\u53BF",
      value: "340421",
      parent: "340400"
    }, {
      name: "\u82B1\u5C71\u533A",
      value: "340503",
      parent: "340500"
    }, {
      name: "\u96E8\u5C71\u533A",
      value: "340504",
      parent: "340500"
    }, {
      name: "\u535A\u671B\u533A",
      value: "340506",
      parent: "340500"
    }, {
      name: "\u5F53\u6D82\u53BF",
      value: "340521",
      parent: "340500"
    }, {
      name: "\u542B\u5C71\u53BF",
      value: "340522",
      parent: "340500"
    }, {
      name: "\u548C\u53BF",
      value: "340523",
      parent: "340500"
    }, {
      name: "\u675C\u96C6\u533A",
      value: "340602",
      parent: "340600"
    }, {
      name: "\u76F8\u5C71\u533A",
      value: "340603",
      parent: "340600"
    }, {
      name: "\u70C8\u5C71\u533A",
      value: "340604",
      parent: "340600"
    }, {
      name: "\u6FC9\u6EAA\u53BF",
      value: "340621",
      parent: "340600"
    }, {
      name: "\u94DC\u5B98\u5C71\u533A",
      value: "340702",
      parent: "340700"
    }, {
      name: "\u72EE\u5B50\u5C71\u533A",
      value: "340703",
      parent: "340700"
    }, {
      name: "\u90CA\u533A",
      value: "340711",
      parent: "340700"
    }, {
      name: "\u94DC\u9675\u53BF",
      value: "340721",
      parent: "340700"
    }, {
      name: "\u8FCE\u6C5F\u533A",
      value: "340802",
      parent: "340800"
    }, {
      name: "\u5927\u89C2\u533A",
      value: "340803",
      parent: "340800"
    }, {
      name: "\u5B9C\u79C0\u533A",
      value: "340811",
      parent: "340800"
    }, {
      name: "\u6000\u5B81\u53BF",
      value: "340822",
      parent: "340800"
    }, {
      name: "\u679E\u9633\u53BF",
      value: "340823",
      parent: "340800"
    }, {
      name: "\u6F5C\u5C71\u53BF",
      value: "340824",
      parent: "340800"
    }, {
      name: "\u592A\u6E56\u53BF",
      value: "340825",
      parent: "340800"
    }, {
      name: "\u5BBF\u677E\u53BF",
      value: "340826",
      parent: "340800"
    }, {
      name: "\u671B\u6C5F\u53BF",
      value: "340827",
      parent: "340800"
    }, {
      name: "\u5CB3\u897F\u53BF",
      value: "340828",
      parent: "340800"
    }, {
      name: "\u6850\u57CE\u5E02",
      value: "340881",
      parent: "340800"
    }, {
      name: "\u5C6F\u6EAA\u533A",
      value: "341002",
      parent: "341000"
    }, {
      name: "\u9EC4\u5C71\u533A",
      value: "341003",
      parent: "341000"
    }, {
      name: "\u5FBD\u5DDE\u533A",
      value: "341004",
      parent: "341000"
    }, {
      name: "\u6B59\u53BF",
      value: "341021",
      parent: "341000"
    }, {
      name: "\u4F11\u5B81\u53BF",
      value: "341022",
      parent: "341000"
    }, {
      name: "\u9EDF\u53BF",
      value: "341023",
      parent: "341000"
    }, {
      name: "\u7941\u95E8\u53BF",
      value: "341024",
      parent: "341000"
    }, {
      name: "\u7405\u740A\u533A",
      value: "341102",
      parent: "341100"
    }, {
      name: "\u5357\u8C2F\u533A",
      value: "341103",
      parent: "341100"
    }, {
      name: "\u6765\u5B89\u53BF",
      value: "341122",
      parent: "341100"
    }, {
      name: "\u5168\u6912\u53BF",
      value: "341124",
      parent: "341100"
    }, {
      name: "\u5B9A\u8FDC\u53BF",
      value: "341125",
      parent: "341100"
    }, {
      name: "\u51E4\u9633\u53BF",
      value: "341126",
      parent: "341100"
    }, {
      name: "\u5929\u957F\u5E02",
      value: "341181",
      parent: "341100"
    }, {
      name: "\u660E\u5149\u5E02",
      value: "341182",
      parent: "341100"
    }, {
      name: "\u988D\u5DDE\u533A",
      value: "341202",
      parent: "341200"
    }, {
      name: "\u988D\u4E1C\u533A",
      value: "341203",
      parent: "341200"
    }, {
      name: "\u988D\u6CC9\u533A",
      value: "341204",
      parent: "341200"
    }, {
      name: "\u4E34\u6CC9\u53BF",
      value: "341221",
      parent: "341200"
    }, {
      name: "\u592A\u548C\u53BF",
      value: "341222",
      parent: "341200"
    }, {
      name: "\u961C\u5357\u53BF",
      value: "341225",
      parent: "341200"
    }, {
      name: "\u988D\u4E0A\u53BF",
      value: "341226",
      parent: "341200"
    }, {
      name: "\u754C\u9996\u5E02",
      value: "341282",
      parent: "341200"
    }, {
      name: "\u57C7\u6865\u533A",
      value: "341302",
      parent: "341300"
    }, {
      name: "\u7800\u5C71\u53BF",
      value: "341321",
      parent: "341300"
    }, {
      name: "\u8427\u53BF",
      value: "341322",
      parent: "341300"
    }, {
      name: "\u7075\u74A7\u53BF",
      value: "341323",
      parent: "341300"
    }, {
      name: "\u6CD7\u53BF",
      value: "341324",
      parent: "341300"
    }, {
      name: "\u91D1\u5B89\u533A",
      value: "341502",
      parent: "341500"
    }, {
      name: "\u88D5\u5B89\u533A",
      value: "341503",
      parent: "341500"
    }, {
      name: "\u5BFF\u53BF",
      value: "341521",
      parent: "341500"
    }, {
      name: "\u970D\u90B1\u53BF",
      value: "341522",
      parent: "341500"
    }, {
      name: "\u8212\u57CE\u53BF",
      value: "341523",
      parent: "341500"
    }, {
      name: "\u91D1\u5BE8\u53BF",
      value: "341524",
      parent: "341500"
    }, {
      name: "\u970D\u5C71\u53BF",
      value: "341525",
      parent: "341500"
    }, {
      name: "\u8C2F\u57CE\u533A",
      value: "341602",
      parent: "341600"
    }, {
      name: "\u6DA1\u9633\u53BF",
      value: "341621",
      parent: "341600"
    }, {
      name: "\u8499\u57CE\u53BF",
      value: "341622",
      parent: "341600"
    }, {
      name: "\u5229\u8F9B\u53BF",
      value: "341623",
      parent: "341600"
    }, {
      name: "\u8D35\u6C60\u533A",
      value: "341702",
      parent: "341700"
    }, {
      name: "\u4E1C\u81F3\u53BF",
      value: "341721",
      parent: "341700"
    }, {
      name: "\u77F3\u53F0\u53BF",
      value: "341722",
      parent: "341700"
    }, {
      name: "\u9752\u9633\u53BF",
      value: "341723",
      parent: "341700"
    }, {
      name: "\u5BA3\u5DDE\u533A",
      value: "341802",
      parent: "341800"
    }, {
      name: "\u90CE\u6EAA\u53BF",
      value: "341821",
      parent: "341800"
    }, {
      name: "\u5E7F\u5FB7\u53BF",
      value: "341822",
      parent: "341800"
    }, {
      name: "\u6CFE\u53BF",
      value: "341823",
      parent: "341800"
    }, {
      name: "\u7EE9\u6EAA\u53BF",
      value: "341824",
      parent: "341800"
    }, {
      name: "\u65CC\u5FB7\u53BF",
      value: "341825",
      parent: "341800"
    }, {
      name: "\u5B81\u56FD\u5E02",
      value: "341881",
      parent: "341800"
    }, {
      name: "\u798F\u5DDE\u5E02",
      value: "350100",
      parent: "350000"
    }, {
      name: "\u53A6\u95E8\u5E02",
      value: "350200",
      parent: "350000"
    }, {
      name: "\u8386\u7530\u5E02",
      value: "350300",
      parent: "350000"
    }, {
      name: "\u4E09\u660E\u5E02",
      value: "350400",
      parent: "350000"
    }, {
      name: "\u6CC9\u5DDE\u5E02",
      value: "350500",
      parent: "350000"
    }, {
      name: "\u6F33\u5DDE\u5E02",
      value: "350600",
      parent: "350000"
    }, {
      name: "\u5357\u5E73\u5E02",
      value: "350700",
      parent: "350000"
    }, {
      name: "\u9F99\u5CA9\u5E02",
      value: "350800",
      parent: "350000"
    }, {
      name: "\u5B81\u5FB7\u5E02",
      value: "350900",
      parent: "350000"
    }, {
      name: "\u9F13\u697C\u533A",
      value: "350102",
      parent: "350100"
    }, {
      name: "\u53F0\u6C5F\u533A",
      value: "350103",
      parent: "350100"
    }, {
      name: "\u4ED3\u5C71\u533A",
      value: "350104",
      parent: "350100"
    }, {
      name: "\u9A6C\u5C3E\u533A",
      value: "350105",
      parent: "350100"
    }, {
      name: "\u664B\u5B89\u533A",
      value: "350111",
      parent: "350100"
    }, {
      name: "\u95FD\u4FAF\u53BF",
      value: "350121",
      parent: "350100"
    }, {
      name: "\u8FDE\u6C5F\u53BF",
      value: "350122",
      parent: "350100"
    }, {
      name: "\u7F57\u6E90\u53BF",
      value: "350123",
      parent: "350100"
    }, {
      name: "\u95FD\u6E05\u53BF",
      value: "350124",
      parent: "350100"
    }, {
      name: "\u6C38\u6CF0\u53BF",
      value: "350125",
      parent: "350100"
    }, {
      name: "\u5E73\u6F6D\u53BF",
      value: "350128",
      parent: "350100"
    }, {
      name: "\u798F\u6E05\u5E02",
      value: "350181",
      parent: "350100"
    }, {
      name: "\u957F\u4E50\u5E02",
      value: "350182",
      parent: "350100"
    }, {
      name: "\u601D\u660E\u533A",
      value: "350203",
      parent: "350200"
    }, {
      name: "\u6D77\u6CA7\u533A",
      value: "350205",
      parent: "350200"
    }, {
      name: "\u6E56\u91CC\u533A",
      value: "350206",
      parent: "350200"
    }, {
      name: "\u96C6\u7F8E\u533A",
      value: "350211",
      parent: "350200"
    }, {
      name: "\u540C\u5B89\u533A",
      value: "350212",
      parent: "350200"
    }, {
      name: "\u7FD4\u5B89\u533A",
      value: "350213",
      parent: "350200"
    }, {
      name: "\u57CE\u53A2\u533A",
      value: "350302",
      parent: "350300"
    }, {
      name: "\u6DB5\u6C5F\u533A",
      value: "350303",
      parent: "350300"
    }, {
      name: "\u8354\u57CE\u533A",
      value: "350304",
      parent: "350300"
    }, {
      name: "\u79C0\u5C7F\u533A",
      value: "350305",
      parent: "350300"
    }, {
      name: "\u4ED9\u6E38\u53BF",
      value: "350322",
      parent: "350300"
    }, {
      name: "\u6885\u5217\u533A",
      value: "350402",
      parent: "350400"
    }, {
      name: "\u4E09\u5143\u533A",
      value: "350403",
      parent: "350400"
    }, {
      name: "\u660E\u6EAA\u53BF",
      value: "350421",
      parent: "350400"
    }, {
      name: "\u6E05\u6D41\u53BF",
      value: "350423",
      parent: "350400"
    }, {
      name: "\u5B81\u5316\u53BF",
      value: "350424",
      parent: "350400"
    }, {
      name: "\u5927\u7530\u53BF",
      value: "350425",
      parent: "350400"
    }, {
      name: "\u5C24\u6EAA\u53BF",
      value: "350426",
      parent: "350400"
    }, {
      name: "\u6C99\u53BF",
      value: "350427",
      parent: "350400"
    }, {
      name: "\u5C06\u4E50\u53BF",
      value: "350428",
      parent: "350400"
    }, {
      name: "\u6CF0\u5B81\u53BF",
      value: "350429",
      parent: "350400"
    }, {
      name: "\u5EFA\u5B81\u53BF",
      value: "350430",
      parent: "350400"
    }, {
      name: "\u6C38\u5B89\u5E02",
      value: "350481",
      parent: "350400"
    }, {
      name: "\u9CA4\u57CE\u533A",
      value: "350502",
      parent: "350500"
    }, {
      name: "\u4E30\u6CFD\u533A",
      value: "350503",
      parent: "350500"
    }, {
      name: "\u6D1B\u6C5F\u533A",
      value: "350504",
      parent: "350500"
    }, {
      name: "\u6CC9\u6E2F\u533A",
      value: "350505",
      parent: "350500"
    }, {
      name: "\u60E0\u5B89\u53BF",
      value: "350521",
      parent: "350500"
    }, {
      name: "\u5B89\u6EAA\u53BF",
      value: "350524",
      parent: "350500"
    }, {
      name: "\u6C38\u6625\u53BF",
      value: "350525",
      parent: "350500"
    }, {
      name: "\u5FB7\u5316\u53BF",
      value: "350526",
      parent: "350500"
    }, {
      name: "\u91D1\u95E8\u53BF",
      value: "350527",
      parent: "350500"
    }, {
      name: "\u77F3\u72EE\u5E02",
      value: "350581",
      parent: "350500"
    }, {
      name: "\u664B\u6C5F\u5E02",
      value: "350582",
      parent: "350500"
    }, {
      name: "\u5357\u5B89\u5E02",
      value: "350583",
      parent: "350500"
    }, {
      name: "\u8297\u57CE\u533A",
      value: "350602",
      parent: "350600"
    }, {
      name: "\u9F99\u6587\u533A",
      value: "350603",
      parent: "350600"
    }, {
      name: "\u4E91\u9704\u53BF",
      value: "350622",
      parent: "350600"
    }, {
      name: "\u6F33\u6D66\u53BF",
      value: "350623",
      parent: "350600"
    }, {
      name: "\u8BCF\u5B89\u53BF",
      value: "350624",
      parent: "350600"
    }, {
      name: "\u957F\u6CF0\u53BF",
      value: "350625",
      parent: "350600"
    }, {
      name: "\u4E1C\u5C71\u53BF",
      value: "350626",
      parent: "350600"
    }, {
      name: "\u5357\u9756\u53BF",
      value: "350627",
      parent: "350600"
    }, {
      name: "\u5E73\u548C\u53BF",
      value: "350628",
      parent: "350600"
    }, {
      name: "\u534E\u5B89\u53BF",
      value: "350629",
      parent: "350600"
    }, {
      name: "\u9F99\u6D77\u5E02",
      value: "350681",
      parent: "350600"
    }, {
      name: "\u5EF6\u5E73\u533A",
      value: "350702",
      parent: "350700"
    }, {
      name: "\u5EFA\u9633\u533A",
      value: "350703",
      parent: "350700"
    }, {
      name: "\u987A\u660C\u53BF",
      value: "350721",
      parent: "350700"
    }, {
      name: "\u6D66\u57CE\u53BF",
      value: "350722",
      parent: "350700"
    }, {
      name: "\u5149\u6CFD\u53BF",
      value: "350723",
      parent: "350700"
    }, {
      name: "\u677E\u6EAA\u53BF",
      value: "350724",
      parent: "350700"
    }, {
      name: "\u653F\u548C\u53BF",
      value: "350725",
      parent: "350700"
    }, {
      name: "\u90B5\u6B66\u5E02",
      value: "350781",
      parent: "350700"
    }, {
      name: "\u6B66\u5937\u5C71\u5E02",
      value: "350782",
      parent: "350700"
    }, {
      name: "\u5EFA\u74EF\u5E02",
      value: "350783",
      parent: "350700"
    }, {
      name: "\u65B0\u7F57\u533A",
      value: "350802",
      parent: "350800"
    }, {
      name: "\u6C38\u5B9A\u533A",
      value: "350803",
      parent: "350800"
    }, {
      name: "\u957F\u6C40\u53BF",
      value: "350821",
      parent: "350800"
    }, {
      name: "\u4E0A\u676D\u53BF",
      value: "350823",
      parent: "350800"
    }, {
      name: "\u6B66\u5E73\u53BF",
      value: "350824",
      parent: "350800"
    }, {
      name: "\u8FDE\u57CE\u53BF",
      value: "350825",
      parent: "350800"
    }, {
      name: "\u6F33\u5E73\u5E02",
      value: "350881",
      parent: "350800"
    }, {
      name: "\u8549\u57CE\u533A",
      value: "350902",
      parent: "350900"
    }, {
      name: "\u971E\u6D66\u53BF",
      value: "350921",
      parent: "350900"
    }, {
      name: "\u53E4\u7530\u53BF",
      value: "350922",
      parent: "350900"
    }, {
      name: "\u5C4F\u5357\u53BF",
      value: "350923",
      parent: "350900"
    }, {
      name: "\u5BFF\u5B81\u53BF",
      value: "350924",
      parent: "350900"
    }, {
      name: "\u5468\u5B81\u53BF",
      value: "350925",
      parent: "350900"
    }, {
      name: "\u67D8\u8363\u53BF",
      value: "350926",
      parent: "350900"
    }, {
      name: "\u798F\u5B89\u5E02",
      value: "350981",
      parent: "350900"
    }, {
      name: "\u798F\u9F0E\u5E02",
      value: "350982",
      parent: "350900"
    }, {
      name: "\u5357\u660C\u5E02",
      value: "360100",
      parent: "360000"
    }, {
      name: "\u666F\u5FB7\u9547\u5E02",
      value: "360200",
      parent: "360000"
    }, {
      name: "\u840D\u4E61\u5E02",
      value: "360300",
      parent: "360000"
    }, {
      name: "\u4E5D\u6C5F\u5E02",
      value: "360400",
      parent: "360000"
    }, {
      name: "\u65B0\u4F59\u5E02",
      value: "360500",
      parent: "360000"
    }, {
      name: "\u9E70\u6F6D\u5E02",
      value: "360600",
      parent: "360000"
    }, {
      name: "\u8D63\u5DDE\u5E02",
      value: "360700",
      parent: "360000"
    }, {
      name: "\u5409\u5B89\u5E02",
      value: "360800",
      parent: "360000"
    }, {
      name: "\u5B9C\u6625\u5E02",
      value: "360900",
      parent: "360000"
    }, {
      name: "\u629A\u5DDE\u5E02",
      value: "361000",
      parent: "360000"
    }, {
      name: "\u4E0A\u9976\u5E02",
      value: "361100",
      parent: "360000"
    }, {
      name: "\u4E1C\u6E56\u533A",
      value: "360102",
      parent: "360100"
    }, {
      name: "\u897F\u6E56\u533A",
      value: "360103",
      parent: "360100"
    }, {
      name: "\u9752\u4E91\u8C31\u533A",
      value: "360104",
      parent: "360100"
    }, {
      name: "\u6E7E\u91CC\u533A",
      value: "360105",
      parent: "360100"
    }, {
      name: "\u9752\u5C71\u6E56\u533A",
      value: "360111",
      parent: "360100"
    }, {
      name: "\u65B0\u5EFA\u533A",
      value: "360112",
      parent: "360100"
    }, {
      name: "\u5357\u660C\u53BF",
      value: "360121",
      parent: "360100"
    }, {
      name: "\u5B89\u4E49\u53BF",
      value: "360123",
      parent: "360100"
    }, {
      name: "\u8FDB\u8D24\u53BF",
      value: "360124",
      parent: "360100"
    }, {
      name: "\u660C\u6C5F\u533A",
      value: "360202",
      parent: "360200"
    }, {
      name: "\u73E0\u5C71\u533A",
      value: "360203",
      parent: "360200"
    }, {
      name: "\u6D6E\u6881\u53BF",
      value: "360222",
      parent: "360200"
    }, {
      name: "\u4E50\u5E73\u5E02",
      value: "360281",
      parent: "360200"
    }, {
      name: "\u5B89\u6E90\u533A",
      value: "360302",
      parent: "360300"
    }, {
      name: "\u6E58\u4E1C\u533A",
      value: "360313",
      parent: "360300"
    }, {
      name: "\u83B2\u82B1\u53BF",
      value: "360321",
      parent: "360300"
    }, {
      name: "\u4E0A\u6817\u53BF",
      value: "360322",
      parent: "360300"
    }, {
      name: "\u82A6\u6EAA\u53BF",
      value: "360323",
      parent: "360300"
    }, {
      name: "\u5E90\u5C71\u533A",
      value: "360402",
      parent: "360400"
    }, {
      name: "\u6D54\u9633\u533A",
      value: "360403",
      parent: "360400"
    }, {
      name: "\u4E5D\u6C5F\u53BF",
      value: "360421",
      parent: "360400"
    }, {
      name: "\u6B66\u5B81\u53BF",
      value: "360423",
      parent: "360400"
    }, {
      name: "\u4FEE\u6C34\u53BF",
      value: "360424",
      parent: "360400"
    }, {
      name: "\u6C38\u4FEE\u53BF",
      value: "360425",
      parent: "360400"
    }, {
      name: "\u5FB7\u5B89\u53BF",
      value: "360426",
      parent: "360400"
    }, {
      name: "\u661F\u5B50\u53BF",
      value: "360427",
      parent: "360400"
    }, {
      name: "\u90FD\u660C\u53BF",
      value: "360428",
      parent: "360400"
    }, {
      name: "\u6E56\u53E3\u53BF",
      value: "360429",
      parent: "360400"
    }, {
      name: "\u5F6D\u6CFD\u53BF",
      value: "360430",
      parent: "360400"
    }, {
      name: "\u745E\u660C\u5E02",
      value: "360481",
      parent: "360400"
    }, {
      name: "\u5171\u9752\u57CE\u5E02",
      value: "360482",
      parent: "360400"
    }, {
      name: "\u6E1D\u6C34\u533A",
      value: "360502",
      parent: "360500"
    }, {
      name: "\u5206\u5B9C\u53BF",
      value: "360521",
      parent: "360500"
    }, {
      name: "\u6708\u6E56\u533A",
      value: "360602",
      parent: "360600"
    }, {
      name: "\u4F59\u6C5F\u53BF",
      value: "360622",
      parent: "360600"
    }, {
      name: "\u8D35\u6EAA\u5E02",
      value: "360681",
      parent: "360600"
    }, {
      name: "\u7AE0\u8D21\u533A",
      value: "360702",
      parent: "360700"
    }, {
      name: "\u5357\u5EB7\u533A",
      value: "360703",
      parent: "360700"
    }, {
      name: "\u8D63\u53BF",
      value: "360721",
      parent: "360700"
    }, {
      name: "\u4FE1\u4E30\u53BF",
      value: "360722",
      parent: "360700"
    }, {
      name: "\u5927\u4F59\u53BF",
      value: "360723",
      parent: "360700"
    }, {
      name: "\u4E0A\u72B9\u53BF",
      value: "360724",
      parent: "360700"
    }, {
      name: "\u5D07\u4E49\u53BF",
      value: "360725",
      parent: "360700"
    }, {
      name: "\u5B89\u8FDC\u53BF",
      value: "360726",
      parent: "360700"
    }, {
      name: "\u9F99\u5357\u53BF",
      value: "360727",
      parent: "360700"
    }, {
      name: "\u5B9A\u5357\u53BF",
      value: "360728",
      parent: "360700"
    }, {
      name: "\u5168\u5357\u53BF",
      value: "360729",
      parent: "360700"
    }, {
      name: "\u5B81\u90FD\u53BF",
      value: "360730",
      parent: "360700"
    }, {
      name: "\u4E8E\u90FD\u53BF",
      value: "360731",
      parent: "360700"
    }, {
      name: "\u5174\u56FD\u53BF",
      value: "360732",
      parent: "360700"
    }, {
      name: "\u4F1A\u660C\u53BF",
      value: "360733",
      parent: "360700"
    }, {
      name: "\u5BFB\u4E4C\u53BF",
      value: "360734",
      parent: "360700"
    }, {
      name: "\u77F3\u57CE\u53BF",
      value: "360735",
      parent: "360700"
    }, {
      name: "\u745E\u91D1\u5E02",
      value: "360781",
      parent: "360700"
    }, {
      name: "\u5409\u5DDE\u533A",
      value: "360802",
      parent: "360800"
    }, {
      name: "\u9752\u539F\u533A",
      value: "360803",
      parent: "360800"
    }, {
      name: "\u5409\u5B89\u53BF",
      value: "360821",
      parent: "360800"
    }, {
      name: "\u5409\u6C34\u53BF",
      value: "360822",
      parent: "360800"
    }, {
      name: "\u5CE1\u6C5F\u53BF",
      value: "360823",
      parent: "360800"
    }, {
      name: "\u65B0\u5E72\u53BF",
      value: "360824",
      parent: "360800"
    }, {
      name: "\u6C38\u4E30\u53BF",
      value: "360825",
      parent: "360800"
    }, {
      name: "\u6CF0\u548C\u53BF",
      value: "360826",
      parent: "360800"
    }, {
      name: "\u9042\u5DDD\u53BF",
      value: "360827",
      parent: "360800"
    }, {
      name: "\u4E07\u5B89\u53BF",
      value: "360828",
      parent: "360800"
    }, {
      name: "\u5B89\u798F\u53BF",
      value: "360829",
      parent: "360800"
    }, {
      name: "\u6C38\u65B0\u53BF",
      value: "360830",
      parent: "360800"
    }, {
      name: "\u4E95\u5188\u5C71\u5E02",
      value: "360881",
      parent: "360800"
    }, {
      name: "\u8881\u5DDE\u533A",
      value: "360902",
      parent: "360900"
    }, {
      name: "\u5949\u65B0\u53BF",
      value: "360921",
      parent: "360900"
    }, {
      name: "\u4E07\u8F7D\u53BF",
      value: "360922",
      parent: "360900"
    }, {
      name: "\u4E0A\u9AD8\u53BF",
      value: "360923",
      parent: "360900"
    }, {
      name: "\u5B9C\u4E30\u53BF",
      value: "360924",
      parent: "360900"
    }, {
      name: "\u9756\u5B89\u53BF",
      value: "360925",
      parent: "360900"
    }, {
      name: "\u94DC\u9F13\u53BF",
      value: "360926",
      parent: "360900"
    }, {
      name: "\u4E30\u57CE\u5E02",
      value: "360981",
      parent: "360900"
    }, {
      name: "\u6A1F\u6811\u5E02",
      value: "360982",
      parent: "360900"
    }, {
      name: "\u9AD8\u5B89\u5E02",
      value: "360983",
      parent: "360900"
    }, {
      name: "\u4E34\u5DDD\u533A",
      value: "361002",
      parent: "361000"
    }, {
      name: "\u5357\u57CE\u53BF",
      value: "361021",
      parent: "361000"
    }, {
      name: "\u9ECE\u5DDD\u53BF",
      value: "361022",
      parent: "361000"
    }, {
      name: "\u5357\u4E30\u53BF",
      value: "361023",
      parent: "361000"
    }, {
      name: "\u5D07\u4EC1\u53BF",
      value: "361024",
      parent: "361000"
    }, {
      name: "\u4E50\u5B89\u53BF",
      value: "361025",
      parent: "361000"
    }, {
      name: "\u5B9C\u9EC4\u53BF",
      value: "361026",
      parent: "361000"
    }, {
      name: "\u91D1\u6EAA\u53BF",
      value: "361027",
      parent: "361000"
    }, {
      name: "\u8D44\u6EAA\u53BF",
      value: "361028",
      parent: "361000"
    }, {
      name: "\u4E1C\u4E61\u53BF",
      value: "361029",
      parent: "361000"
    }, {
      name: "\u5E7F\u660C\u53BF",
      value: "361030",
      parent: "361000"
    }, {
      name: "\u4FE1\u5DDE\u533A",
      value: "361102",
      parent: "361100"
    }, {
      name: "\u5E7F\u4E30\u533A",
      value: "361103",
      parent: "361100"
    }, {
      name: "\u4E0A\u9976\u53BF",
      value: "361121",
      parent: "361100"
    }, {
      name: "\u7389\u5C71\u53BF",
      value: "361123",
      parent: "361100"
    }, {
      name: "\u94C5\u5C71\u53BF",
      value: "361124",
      parent: "361100"
    }, {
      name: "\u6A2A\u5CF0\u53BF",
      value: "361125",
      parent: "361100"
    }, {
      name: "\u5F0B\u9633\u53BF",
      value: "361126",
      parent: "361100"
    }, {
      name: "\u4F59\u5E72\u53BF",
      value: "361127",
      parent: "361100"
    }, {
      name: "\u9131\u9633\u53BF",
      value: "361128",
      parent: "361100"
    }, {
      name: "\u4E07\u5E74\u53BF",
      value: "361129",
      parent: "361100"
    }, {
      name: "\u5A7A\u6E90\u53BF",
      value: "361130",
      parent: "361100"
    }, {
      name: "\u5FB7\u5174\u5E02",
      value: "361181",
      parent: "361100"
    }, {
      name: "\u6D4E\u5357\u5E02",
      value: "370100",
      parent: "370000"
    }, {
      name: "\u9752\u5C9B\u5E02",
      value: "370200",
      parent: "370000"
    }, {
      name: "\u6DC4\u535A\u5E02",
      value: "370300",
      parent: "370000"
    }, {
      name: "\u67A3\u5E84\u5E02",
      value: "370400",
      parent: "370000"
    }, {
      name: "\u4E1C\u8425\u5E02",
      value: "370500",
      parent: "370000"
    }, {
      name: "\u70DF\u53F0\u5E02",
      value: "370600",
      parent: "370000"
    }, {
      name: "\u6F4D\u574A\u5E02",
      value: "370700",
      parent: "370000"
    }, {
      name: "\u6D4E\u5B81\u5E02",
      value: "370800",
      parent: "370000"
    }, {
      name: "\u6CF0\u5B89\u5E02",
      value: "370900",
      parent: "370000"
    }, {
      name: "\u5A01\u6D77\u5E02",
      value: "371000",
      parent: "370000"
    }, {
      name: "\u65E5\u7167\u5E02",
      value: "371100",
      parent: "370000"
    }, {
      name: "\u83B1\u829C\u5E02",
      value: "371200",
      parent: "370000"
    }, {
      name: "\u4E34\u6C82\u5E02",
      value: "371300",
      parent: "370000"
    }, {
      name: "\u5FB7\u5DDE\u5E02",
      value: "371400",
      parent: "370000"
    }, {
      name: "\u804A\u57CE\u5E02",
      value: "371500",
      parent: "370000"
    }, {
      name: "\u6EE8\u5DDE\u5E02",
      value: "371600",
      parent: "370000"
    }, {
      name: "\u83CF\u6CFD\u5E02",
      value: "371700",
      parent: "370000"
    }, {
      name: "\u5386\u4E0B\u533A",
      value: "370102",
      parent: "370100"
    }, {
      name: "\u5E02\u4E2D\u533A",
      value: "370103",
      parent: "370100"
    }, {
      name: "\u69D0\u836B\u533A",
      value: "370104",
      parent: "370100"
    }, {
      name: "\u5929\u6865\u533A",
      value: "370105",
      parent: "370100"
    }, {
      name: "\u5386\u57CE\u533A",
      value: "370112",
      parent: "370100"
    }, {
      name: "\u957F\u6E05\u533A",
      value: "370113",
      parent: "370100"
    }, {
      name: "\u5E73\u9634\u53BF",
      value: "370124",
      parent: "370100"
    }, {
      name: "\u6D4E\u9633\u53BF",
      value: "370125",
      parent: "370100"
    }, {
      name: "\u5546\u6CB3\u53BF",
      value: "370126",
      parent: "370100"
    }, {
      name: "\u7AE0\u4E18\u5E02",
      value: "370181",
      parent: "370100"
    }, {
      name: "\u5E02\u5357\u533A",
      value: "370202",
      parent: "370200"
    }, {
      name: "\u5E02\u5317\u533A",
      value: "370203",
      parent: "370200"
    }, {
      name: "\u9EC4\u5C9B\u533A",
      value: "370211",
      parent: "370200"
    }, {
      name: "\u5D02\u5C71\u533A",
      value: "370212",
      parent: "370200"
    }, {
      name: "\u674E\u6CA7\u533A",
      value: "370213",
      parent: "370200"
    }, {
      name: "\u57CE\u9633\u533A",
      value: "370214",
      parent: "370200"
    }, {
      name: "\u80F6\u5DDE\u5E02",
      value: "370281",
      parent: "370200"
    }, {
      name: "\u5373\u58A8\u5E02",
      value: "370282",
      parent: "370200"
    }, {
      name: "\u5E73\u5EA6\u5E02",
      value: "370283",
      parent: "370200"
    }, {
      name: "\u83B1\u897F\u5E02",
      value: "370285",
      parent: "370200"
    }, {
      name: "\u6DC4\u5DDD\u533A",
      value: "370302",
      parent: "370300"
    }, {
      name: "\u5F20\u5E97\u533A",
      value: "370303",
      parent: "370300"
    }, {
      name: "\u535A\u5C71\u533A",
      value: "370304",
      parent: "370300"
    }, {
      name: "\u4E34\u6DC4\u533A",
      value: "370305",
      parent: "370300"
    }, {
      name: "\u5468\u6751\u533A",
      value: "370306",
      parent: "370300"
    }, {
      name: "\u6853\u53F0\u53BF",
      value: "370321",
      parent: "370300"
    }, {
      name: "\u9AD8\u9752\u53BF",
      value: "370322",
      parent: "370300"
    }, {
      name: "\u6C82\u6E90\u53BF",
      value: "370323",
      parent: "370300"
    }, {
      name: "\u5E02\u4E2D\u533A",
      value: "370402",
      parent: "370400"
    }, {
      name: "\u859B\u57CE\u533A",
      value: "370403",
      parent: "370400"
    }, {
      name: "\u5CC4\u57CE\u533A",
      value: "370404",
      parent: "370400"
    }, {
      name: "\u53F0\u513F\u5E84\u533A",
      value: "370405",
      parent: "370400"
    }, {
      name: "\u5C71\u4EAD\u533A",
      value: "370406",
      parent: "370400"
    }, {
      name: "\u6ED5\u5DDE\u5E02",
      value: "370481",
      parent: "370400"
    }, {
      name: "\u4E1C\u8425\u533A",
      value: "370502",
      parent: "370500"
    }, {
      name: "\u6CB3\u53E3\u533A",
      value: "370503",
      parent: "370500"
    }, {
      name: "\u57A6\u5229\u53BF",
      value: "370521",
      parent: "370500"
    }, {
      name: "\u5229\u6D25\u53BF",
      value: "370522",
      parent: "370500"
    }, {
      name: "\u5E7F\u9976\u53BF",
      value: "370523",
      parent: "370500"
    }, {
      name: "\u829D\u7F58\u533A",
      value: "370602",
      parent: "370600"
    }, {
      name: "\u798F\u5C71\u533A",
      value: "370611",
      parent: "370600"
    }, {
      name: "\u725F\u5E73\u533A",
      value: "370612",
      parent: "370600"
    }, {
      name: "\u83B1\u5C71\u533A",
      value: "370613",
      parent: "370600"
    }, {
      name: "\u957F\u5C9B\u53BF",
      value: "370634",
      parent: "370600"
    }, {
      name: "\u9F99\u53E3\u5E02",
      value: "370681",
      parent: "370600"
    }, {
      name: "\u83B1\u9633\u5E02",
      value: "370682",
      parent: "370600"
    }, {
      name: "\u83B1\u5DDE\u5E02",
      value: "370683",
      parent: "370600"
    }, {
      name: "\u84EC\u83B1\u5E02",
      value: "370684",
      parent: "370600"
    }, {
      name: "\u62DB\u8FDC\u5E02",
      value: "370685",
      parent: "370600"
    }, {
      name: "\u6816\u971E\u5E02",
      value: "370686",
      parent: "370600"
    }, {
      name: "\u6D77\u9633\u5E02",
      value: "370687",
      parent: "370600"
    }, {
      name: "\u6F4D\u57CE\u533A",
      value: "370702",
      parent: "370700"
    }, {
      name: "\u5BD2\u4EAD\u533A",
      value: "370703",
      parent: "370700"
    }, {
      name: "\u574A\u5B50\u533A",
      value: "370704",
      parent: "370700"
    }, {
      name: "\u594E\u6587\u533A",
      value: "370705",
      parent: "370700"
    }, {
      name: "\u4E34\u6710\u53BF",
      value: "370724",
      parent: "370700"
    }, {
      name: "\u660C\u4E50\u53BF",
      value: "370725",
      parent: "370700"
    }, {
      name: "\u9752\u5DDE\u5E02",
      value: "370781",
      parent: "370700"
    }, {
      name: "\u8BF8\u57CE\u5E02",
      value: "370782",
      parent: "370700"
    }, {
      name: "\u5BFF\u5149\u5E02",
      value: "370783",
      parent: "370700"
    }, {
      name: "\u5B89\u4E18\u5E02",
      value: "370784",
      parent: "370700"
    }, {
      name: "\u9AD8\u5BC6\u5E02",
      value: "370785",
      parent: "370700"
    }, {
      name: "\u660C\u9091\u5E02",
      value: "370786",
      parent: "370700"
    }, {
      name: "\u4EFB\u57CE\u533A",
      value: "370811",
      parent: "370800"
    }, {
      name: "\u5156\u5DDE\u533A",
      value: "370812",
      parent: "370800"
    }, {
      name: "\u5FAE\u5C71\u53BF",
      value: "370826",
      parent: "370800"
    }, {
      name: "\u9C7C\u53F0\u53BF",
      value: "370827",
      parent: "370800"
    }, {
      name: "\u91D1\u4E61\u53BF",
      value: "370828",
      parent: "370800"
    }, {
      name: "\u5609\u7965\u53BF",
      value: "370829",
      parent: "370800"
    }, {
      name: "\u6C76\u4E0A\u53BF",
      value: "370830",
      parent: "370800"
    }, {
      name: "\u6CD7\u6C34\u53BF",
      value: "370831",
      parent: "370800"
    }, {
      name: "\u6881\u5C71\u53BF",
      value: "370832",
      parent: "370800"
    }, {
      name: "\u66F2\u961C\u5E02",
      value: "370881",
      parent: "370800"
    }, {
      name: "\u90B9\u57CE\u5E02",
      value: "370883",
      parent: "370800"
    }, {
      name: "\u6CF0\u5C71\u533A",
      value: "370902",
      parent: "370900"
    }, {
      name: "\u5CB1\u5CB3\u533A",
      value: "370911",
      parent: "370900"
    }, {
      name: "\u5B81\u9633\u53BF",
      value: "370921",
      parent: "370900"
    }, {
      name: "\u4E1C\u5E73\u53BF",
      value: "370923",
      parent: "370900"
    }, {
      name: "\u65B0\u6CF0\u5E02",
      value: "370982",
      parent: "370900"
    }, {
      name: "\u80A5\u57CE\u5E02",
      value: "370983",
      parent: "370900"
    }, {
      name: "\u73AF\u7FE0\u533A",
      value: "371002",
      parent: "371000"
    }, {
      name: "\u6587\u767B\u533A",
      value: "371003",
      parent: "371000"
    }, {
      name: "\u8363\u6210\u5E02",
      value: "371082",
      parent: "371000"
    }, {
      name: "\u4E73\u5C71\u5E02",
      value: "371083",
      parent: "371000"
    }, {
      name: "\u4E1C\u6E2F\u533A",
      value: "371102",
      parent: "371100"
    }, {
      name: "\u5C9A\u5C71\u533A",
      value: "371103",
      parent: "371100"
    }, {
      name: "\u4E94\u83B2\u53BF",
      value: "371121",
      parent: "371100"
    }, {
      name: "\u8392\u53BF",
      value: "371122",
      parent: "371100"
    }, {
      name: "\u83B1\u57CE\u533A",
      value: "371202",
      parent: "371200"
    }, {
      name: "\u94A2\u57CE\u533A",
      value: "371203",
      parent: "371200"
    }, {
      name: "\u5170\u5C71\u533A",
      value: "371302",
      parent: "371300"
    }, {
      name: "\u7F57\u5E84\u533A",
      value: "371311",
      parent: "371300"
    }, {
      name: "\u6CB3\u4E1C\u533A",
      value: "371312",
      parent: "371300"
    }, {
      name: "\u6C82\u5357\u53BF",
      value: "371321",
      parent: "371300"
    }, {
      name: "\u90EF\u57CE\u53BF",
      value: "371322",
      parent: "371300"
    }, {
      name: "\u6C82\u6C34\u53BF",
      value: "371323",
      parent: "371300"
    }, {
      name: "\u5170\u9675\u53BF",
      value: "371324",
      parent: "371300"
    }, {
      name: "\u8D39\u53BF",
      value: "371325",
      parent: "371300"
    }, {
      name: "\u5E73\u9091\u53BF",
      value: "371326",
      parent: "371300"
    }, {
      name: "\u8392\u5357\u53BF",
      value: "371327",
      parent: "371300"
    }, {
      name: "\u8499\u9634\u53BF",
      value: "371328",
      parent: "371300"
    }, {
      name: "\u4E34\u6CAD\u53BF",
      value: "371329",
      parent: "371300"
    }, {
      name: "\u5FB7\u57CE\u533A",
      value: "371402",
      parent: "371400"
    }, {
      name: "\u9675\u57CE\u533A",
      value: "371403",
      parent: "371400"
    }, {
      name: "\u5B81\u6D25\u53BF",
      value: "371422",
      parent: "371400"
    }, {
      name: "\u5E86\u4E91\u53BF",
      value: "371423",
      parent: "371400"
    }, {
      name: "\u4E34\u9091\u53BF",
      value: "371424",
      parent: "371400"
    }, {
      name: "\u9F50\u6CB3\u53BF",
      value: "371425",
      parent: "371400"
    }, {
      name: "\u5E73\u539F\u53BF",
      value: "371426",
      parent: "371400"
    }, {
      name: "\u590F\u6D25\u53BF",
      value: "371427",
      parent: "371400"
    }, {
      name: "\u6B66\u57CE\u53BF",
      value: "371428",
      parent: "371400"
    }, {
      name: "\u4E50\u9675\u5E02",
      value: "371481",
      parent: "371400"
    }, {
      name: "\u79B9\u57CE\u5E02",
      value: "371482",
      parent: "371400"
    }, {
      name: "\u4E1C\u660C\u5E9C\u533A",
      value: "371502",
      parent: "371500"
    }, {
      name: "\u9633\u8C37\u53BF",
      value: "371521",
      parent: "371500"
    }, {
      name: "\u8398\u53BF",
      value: "371522",
      parent: "371500"
    }, {
      name: "\u830C\u5E73\u53BF",
      value: "371523",
      parent: "371500"
    }, {
      name: "\u4E1C\u963F\u53BF",
      value: "371524",
      parent: "371500"
    }, {
      name: "\u51A0\u53BF",
      value: "371525",
      parent: "371500"
    }, {
      name: "\u9AD8\u5510\u53BF",
      value: "371526",
      parent: "371500"
    }, {
      name: "\u4E34\u6E05\u5E02",
      value: "371581",
      parent: "371500"
    }, {
      name: "\u6EE8\u57CE\u533A",
      value: "371602",
      parent: "371600"
    }, {
      name: "\u6CBE\u5316\u533A",
      value: "371603",
      parent: "371600"
    }, {
      name: "\u60E0\u6C11\u53BF",
      value: "371621",
      parent: "371600"
    }, {
      name: "\u9633\u4FE1\u53BF",
      value: "371622",
      parent: "371600"
    }, {
      name: "\u65E0\u68E3\u53BF",
      value: "371623",
      parent: "371600"
    }, {
      name: "\u535A\u5174\u53BF",
      value: "371625",
      parent: "371600"
    }, {
      name: "\u90B9\u5E73\u53BF",
      value: "371626",
      parent: "371600"
    }, {
      name: "\u7261\u4E39\u533A",
      value: "371702",
      parent: "371700"
    }, {
      name: "\u66F9\u53BF",
      value: "371721",
      parent: "371700"
    }, {
      name: "\u5355\u53BF",
      value: "371722",
      parent: "371700"
    }, {
      name: "\u6210\u6B66\u53BF",
      value: "371723",
      parent: "371700"
    }, {
      name: "\u5DE8\u91CE\u53BF",
      value: "371724",
      parent: "371700"
    }, {
      name: "\u90D3\u57CE\u53BF",
      value: "371725",
      parent: "371700"
    }, {
      name: "\u9104\u57CE\u53BF",
      value: "371726",
      parent: "371700"
    }, {
      name: "\u5B9A\u9676\u53BF",
      value: "371727",
      parent: "371700"
    }, {
      name: "\u4E1C\u660E\u53BF",
      value: "371728",
      parent: "371700"
    }, {
      name: "\u90D1\u5DDE\u5E02",
      value: "410100",
      parent: "410000"
    }, {
      name: "\u5F00\u5C01\u5E02",
      value: "410200",
      parent: "410000"
    }, {
      name: "\u6D1B\u9633\u5E02",
      value: "410300",
      parent: "410000"
    }, {
      name: "\u5E73\u9876\u5C71\u5E02",
      value: "410400",
      parent: "410000"
    }, {
      name: "\u5B89\u9633\u5E02",
      value: "410500",
      parent: "410000"
    }, {
      name: "\u9E64\u58C1\u5E02",
      value: "410600",
      parent: "410000"
    }, {
      name: "\u65B0\u4E61\u5E02",
      value: "410700",
      parent: "410000"
    }, {
      name: "\u7126\u4F5C\u5E02",
      value: "410800",
      parent: "410000"
    }, {
      name: "\u6FEE\u9633\u5E02",
      value: "410900",
      parent: "410000"
    }, {
      name: "\u8BB8\u660C\u5E02",
      value: "411000",
      parent: "410000"
    }, {
      name: "\u6F2F\u6CB3\u5E02",
      value: "411100",
      parent: "410000"
    }, {
      name: "\u4E09\u95E8\u5CE1\u5E02",
      value: "411200",
      parent: "410000"
    }, {
      name: "\u5357\u9633\u5E02",
      value: "411300",
      parent: "410000"
    }, {
      name: "\u5546\u4E18\u5E02",
      value: "411400",
      parent: "410000"
    }, {
      name: "\u4FE1\u9633\u5E02",
      value: "411500",
      parent: "410000"
    }, {
      name: "\u5468\u53E3\u5E02",
      value: "411600",
      parent: "410000"
    }, {
      name: "\u9A7B\u9A6C\u5E97\u5E02",
      value: "411700",
      parent: "410000"
    }, {
      name: "\u6D4E\u6E90\u5E02",
      value: "419001",
      parent: "410000"
    }, {
      name: "\u4E2D\u539F\u533A",
      value: "410102",
      parent: "410100"
    }, {
      name: "\u4E8C\u4E03\u533A",
      value: "410103",
      parent: "410100"
    }, {
      name: "\u7BA1\u57CE\u56DE\u65CF\u533A",
      value: "410104",
      parent: "410100"
    }, {
      name: "\u91D1\u6C34\u533A",
      value: "410105",
      parent: "410100"
    }, {
      name: "\u4E0A\u8857\u533A",
      value: "410106",
      parent: "410100"
    }, {
      name: "\u60E0\u6D4E\u533A",
      value: "410108",
      parent: "410100"
    }, {
      name: "\u4E2D\u725F\u53BF",
      value: "410122",
      parent: "410100"
    }, {
      name: "\u5DE9\u4E49\u5E02",
      value: "410181",
      parent: "410100"
    }, {
      name: "\u8365\u9633\u5E02",
      value: "410182",
      parent: "410100"
    }, {
      name: "\u65B0\u5BC6\u5E02",
      value: "410183",
      parent: "410100"
    }, {
      name: "\u65B0\u90D1\u5E02",
      value: "410184",
      parent: "410100"
    }, {
      name: "\u767B\u5C01\u5E02",
      value: "410185",
      parent: "410100"
    }, {
      name: "\u9F99\u4EAD\u533A",
      value: "410202",
      parent: "410200"
    }, {
      name: "\u987A\u6CB3\u56DE\u65CF\u533A",
      value: "410203",
      parent: "410200"
    }, {
      name: "\u9F13\u697C\u533A",
      value: "410204",
      parent: "410200"
    }, {
      name: "\u79B9\u738B\u53F0\u533A",
      value: "410205",
      parent: "410200"
    }, {
      name: "\u91D1\u660E\u533A",
      value: "410211",
      parent: "410200"
    }, {
      name: "\u7965\u7B26\u533A",
      value: "410212",
      parent: "410200"
    }, {
      name: "\u675E\u53BF",
      value: "410221",
      parent: "410200"
    }, {
      name: "\u901A\u8BB8\u53BF",
      value: "410222",
      parent: "410200"
    }, {
      name: "\u5C09\u6C0F\u53BF",
      value: "410223",
      parent: "410200"
    }, {
      name: "\u5170\u8003\u53BF",
      value: "410225",
      parent: "410200"
    }, {
      name: "\u8001\u57CE\u533A",
      value: "410302",
      parent: "410300"
    }, {
      name: "\u897F\u5DE5\u533A",
      value: "410303",
      parent: "410300"
    }, {
      name: "\u700D\u6CB3\u56DE\u65CF\u533A",
      value: "410304",
      parent: "410300"
    }, {
      name: "\u6DA7\u897F\u533A",
      value: "410305",
      parent: "410300"
    }, {
      name: "\u5409\u5229\u533A",
      value: "410306",
      parent: "410300"
    }, {
      name: "\u6D1B\u9F99\u533A",
      value: "410311",
      parent: "410300"
    }, {
      name: "\u5B5F\u6D25\u53BF",
      value: "410322",
      parent: "410300"
    }, {
      name: "\u65B0\u5B89\u53BF",
      value: "410323",
      parent: "410300"
    }, {
      name: "\u683E\u5DDD\u53BF",
      value: "410324",
      parent: "410300"
    }, {
      name: "\u5D69\u53BF",
      value: "410325",
      parent: "410300"
    }, {
      name: "\u6C5D\u9633\u53BF",
      value: "410326",
      parent: "410300"
    }, {
      name: "\u5B9C\u9633\u53BF",
      value: "410327",
      parent: "410300"
    }, {
      name: "\u6D1B\u5B81\u53BF",
      value: "410328",
      parent: "410300"
    }, {
      name: "\u4F0A\u5DDD\u53BF",
      value: "410329",
      parent: "410300"
    }, {
      name: "\u5043\u5E08\u5E02",
      value: "410381",
      parent: "410300"
    }, {
      name: "\u65B0\u534E\u533A",
      value: "410402",
      parent: "410400"
    }, {
      name: "\u536B\u4E1C\u533A",
      value: "410403",
      parent: "410400"
    }, {
      name: "\u77F3\u9F99\u533A",
      value: "410404",
      parent: "410400"
    }, {
      name: "\u6E5B\u6CB3\u533A",
      value: "410411",
      parent: "410400"
    }, {
      name: "\u5B9D\u4E30\u53BF",
      value: "410421",
      parent: "410400"
    }, {
      name: "\u53F6\u53BF",
      value: "410422",
      parent: "410400"
    }, {
      name: "\u9C81\u5C71\u53BF",
      value: "410423",
      parent: "410400"
    }, {
      name: "\u90CF\u53BF",
      value: "410425",
      parent: "410400"
    }, {
      name: "\u821E\u94A2\u5E02",
      value: "410481",
      parent: "410400"
    }, {
      name: "\u6C5D\u5DDE\u5E02",
      value: "410482",
      parent: "410400"
    }, {
      name: "\u6587\u5CF0\u533A",
      value: "410502",
      parent: "410500"
    }, {
      name: "\u5317\u5173\u533A",
      value: "410503",
      parent: "410500"
    }, {
      name: "\u6BB7\u90FD\u533A",
      value: "410505",
      parent: "410500"
    }, {
      name: "\u9F99\u5B89\u533A",
      value: "410506",
      parent: "410500"
    }, {
      name: "\u5B89\u9633\u53BF",
      value: "410522",
      parent: "410500"
    }, {
      name: "\u6C64\u9634\u53BF",
      value: "410523",
      parent: "410500"
    }, {
      name: "\u6ED1\u53BF",
      value: "410526",
      parent: "410500"
    }, {
      name: "\u5185\u9EC4\u53BF",
      value: "410527",
      parent: "410500"
    }, {
      name: "\u6797\u5DDE\u5E02",
      value: "410581",
      parent: "410500"
    }, {
      name: "\u9E64\u5C71\u533A",
      value: "410602",
      parent: "410600"
    }, {
      name: "\u5C71\u57CE\u533A",
      value: "410603",
      parent: "410600"
    }, {
      name: "\u6DC7\u6EE8\u533A",
      value: "410611",
      parent: "410600"
    }, {
      name: "\u6D5A\u53BF",
      value: "410621",
      parent: "410600"
    }, {
      name: "\u6DC7\u53BF",
      value: "410622",
      parent: "410600"
    }, {
      name: "\u7EA2\u65D7\u533A",
      value: "410702",
      parent: "410700"
    }, {
      name: "\u536B\u6EE8\u533A",
      value: "410703",
      parent: "410700"
    }, {
      name: "\u51E4\u6CC9\u533A",
      value: "410704",
      parent: "410700"
    }, {
      name: "\u7267\u91CE\u533A",
      value: "410711",
      parent: "410700"
    }, {
      name: "\u65B0\u4E61\u53BF",
      value: "410721",
      parent: "410700"
    }, {
      name: "\u83B7\u5609\u53BF",
      value: "410724",
      parent: "410700"
    }, {
      name: "\u539F\u9633\u53BF",
      value: "410725",
      parent: "410700"
    }, {
      name: "\u5EF6\u6D25\u53BF",
      value: "410726",
      parent: "410700"
    }, {
      name: "\u5C01\u4E18\u53BF",
      value: "410727",
      parent: "410700"
    }, {
      name: "\u957F\u57A3\u53BF",
      value: "410728",
      parent: "410700"
    }, {
      name: "\u536B\u8F89\u5E02",
      value: "410781",
      parent: "410700"
    }, {
      name: "\u8F89\u53BF\u5E02",
      value: "410782",
      parent: "410700"
    }, {
      name: "\u89E3\u653E\u533A",
      value: "410802",
      parent: "410800"
    }, {
      name: "\u4E2D\u7AD9\u533A",
      value: "410803",
      parent: "410800"
    }, {
      name: "\u9A6C\u6751\u533A",
      value: "410804",
      parent: "410800"
    }, {
      name: "\u5C71\u9633\u533A",
      value: "410811",
      parent: "410800"
    }, {
      name: "\u4FEE\u6B66\u53BF",
      value: "410821",
      parent: "410800"
    }, {
      name: "\u535A\u7231\u53BF",
      value: "410822",
      parent: "410800"
    }, {
      name: "\u6B66\u965F\u53BF",
      value: "410823",
      parent: "410800"
    }, {
      name: "\u6E29\u53BF",
      value: "410825",
      parent: "410800"
    }, {
      name: "\u6C81\u9633\u5E02",
      value: "410882",
      parent: "410800"
    }, {
      name: "\u5B5F\u5DDE\u5E02",
      value: "410883",
      parent: "410800"
    }, {
      name: "\u534E\u9F99\u533A",
      value: "410902",
      parent: "410900"
    }, {
      name: "\u6E05\u4E30\u53BF",
      value: "410922",
      parent: "410900"
    }, {
      name: "\u5357\u4E50\u53BF",
      value: "410923",
      parent: "410900"
    }, {
      name: "\u8303\u53BF",
      value: "410926",
      parent: "410900"
    }, {
      name: "\u53F0\u524D\u53BF",
      value: "410927",
      parent: "410900"
    }, {
      name: "\u6FEE\u9633\u53BF",
      value: "410928",
      parent: "410900"
    }, {
      name: "\u9B4F\u90FD\u533A",
      value: "411002",
      parent: "411000"
    }, {
      name: "\u8BB8\u660C\u53BF",
      value: "411023",
      parent: "411000"
    }, {
      name: "\u9122\u9675\u53BF",
      value: "411024",
      parent: "411000"
    }, {
      name: "\u8944\u57CE\u53BF",
      value: "411025",
      parent: "411000"
    }, {
      name: "\u79B9\u5DDE\u5E02",
      value: "411081",
      parent: "411000"
    }, {
      name: "\u957F\u845B\u5E02",
      value: "411082",
      parent: "411000"
    }, {
      name: "\u6E90\u6C47\u533A",
      value: "411102",
      parent: "411100"
    }, {
      name: "\u90FE\u57CE\u533A",
      value: "411103",
      parent: "411100"
    }, {
      name: "\u53EC\u9675\u533A",
      value: "411104",
      parent: "411100"
    }, {
      name: "\u821E\u9633\u53BF",
      value: "411121",
      parent: "411100"
    }, {
      name: "\u4E34\u988D\u53BF",
      value: "411122",
      parent: "411100"
    }, {
      name: "\u6E56\u6EE8\u533A",
      value: "411202",
      parent: "411200"
    }, {
      name: "\u6E11\u6C60\u53BF",
      value: "411221",
      parent: "411200"
    }, {
      name: "\u9655\u53BF",
      value: "411222",
      parent: "411200"
    }, {
      name: "\u5362\u6C0F\u53BF",
      value: "411224",
      parent: "411200"
    }, {
      name: "\u4E49\u9A6C\u5E02",
      value: "411281",
      parent: "411200"
    }, {
      name: "\u7075\u5B9D\u5E02",
      value: "411282",
      parent: "411200"
    }, {
      name: "\u5B9B\u57CE\u533A",
      value: "411302",
      parent: "411300"
    }, {
      name: "\u5367\u9F99\u533A",
      value: "411303",
      parent: "411300"
    }, {
      name: "\u5357\u53EC\u53BF",
      value: "411321",
      parent: "411300"
    }, {
      name: "\u65B9\u57CE\u53BF",
      value: "411322",
      parent: "411300"
    }, {
      name: "\u897F\u5CE1\u53BF",
      value: "411323",
      parent: "411300"
    }, {
      name: "\u9547\u5E73\u53BF",
      value: "411324",
      parent: "411300"
    }, {
      name: "\u5185\u4E61\u53BF",
      value: "411325",
      parent: "411300"
    }, {
      name: "\u6DC5\u5DDD\u53BF",
      value: "411326",
      parent: "411300"
    }, {
      name: "\u793E\u65D7\u53BF",
      value: "411327",
      parent: "411300"
    }, {
      name: "\u5510\u6CB3\u53BF",
      value: "411328",
      parent: "411300"
    }, {
      name: "\u65B0\u91CE\u53BF",
      value: "411329",
      parent: "411300"
    }, {
      name: "\u6850\u67CF\u53BF",
      value: "411330",
      parent: "411300"
    }, {
      name: "\u9093\u5DDE\u5E02",
      value: "411381",
      parent: "411300"
    }, {
      name: "\u6881\u56ED\u533A",
      value: "411402",
      parent: "411400"
    }, {
      name: "\u7762\u9633\u533A",
      value: "411403",
      parent: "411400"
    }, {
      name: "\u6C11\u6743\u53BF",
      value: "411421",
      parent: "411400"
    }, {
      name: "\u7762\u53BF",
      value: "411422",
      parent: "411400"
    }, {
      name: "\u5B81\u9675\u53BF",
      value: "411423",
      parent: "411400"
    }, {
      name: "\u67D8\u57CE\u53BF",
      value: "411424",
      parent: "411400"
    }, {
      name: "\u865E\u57CE\u53BF",
      value: "411425",
      parent: "411400"
    }, {
      name: "\u590F\u9091\u53BF",
      value: "411426",
      parent: "411400"
    }, {
      name: "\u6C38\u57CE\u5E02",
      value: "411481",
      parent: "411400"
    }, {
      name: "\u6D49\u6CB3\u533A",
      value: "411502",
      parent: "411500"
    }, {
      name: "\u5E73\u6865\u533A",
      value: "411503",
      parent: "411500"
    }, {
      name: "\u7F57\u5C71\u53BF",
      value: "411521",
      parent: "411500"
    }, {
      name: "\u5149\u5C71\u53BF",
      value: "411522",
      parent: "411500"
    }, {
      name: "\u65B0\u53BF",
      value: "411523",
      parent: "411500"
    }, {
      name: "\u5546\u57CE\u53BF",
      value: "411524",
      parent: "411500"
    }, {
      name: "\u56FA\u59CB\u53BF",
      value: "411525",
      parent: "411500"
    }, {
      name: "\u6F62\u5DDD\u53BF",
      value: "411526",
      parent: "411500"
    }, {
      name: "\u6DEE\u6EE8\u53BF",
      value: "411527",
      parent: "411500"
    }, {
      name: "\u606F\u53BF",
      value: "411528",
      parent: "411500"
    }, {
      name: "\u5DDD\u6C47\u533A",
      value: "411602",
      parent: "411600"
    }, {
      name: "\u6276\u6C9F\u53BF",
      value: "411621",
      parent: "411600"
    }, {
      name: "\u897F\u534E\u53BF",
      value: "411622",
      parent: "411600"
    }, {
      name: "\u5546\u6C34\u53BF",
      value: "411623",
      parent: "411600"
    }, {
      name: "\u6C88\u4E18\u53BF",
      value: "411624",
      parent: "411600"
    }, {
      name: "\u90F8\u57CE\u53BF",
      value: "411625",
      parent: "411600"
    }, {
      name: "\u6DEE\u9633\u53BF",
      value: "411626",
      parent: "411600"
    }, {
      name: "\u592A\u5EB7\u53BF",
      value: "411627",
      parent: "411600"
    }, {
      name: "\u9E7F\u9091\u53BF",
      value: "411628",
      parent: "411600"
    }, {
      name: "\u9879\u57CE\u5E02",
      value: "411681",
      parent: "411600"
    }, {
      name: "\u9A7F\u57CE\u533A",
      value: "411702",
      parent: "411700"
    }, {
      name: "\u897F\u5E73\u53BF",
      value: "411721",
      parent: "411700"
    }, {
      name: "\u4E0A\u8521\u53BF",
      value: "411722",
      parent: "411700"
    }, {
      name: "\u5E73\u8206\u53BF",
      value: "411723",
      parent: "411700"
    }, {
      name: "\u6B63\u9633\u53BF",
      value: "411724",
      parent: "411700"
    }, {
      name: "\u786E\u5C71\u53BF",
      value: "411725",
      parent: "411700"
    }, {
      name: "\u6CCC\u9633\u53BF",
      value: "411726",
      parent: "411700"
    }, {
      name: "\u6C5D\u5357\u53BF",
      value: "411727",
      parent: "411700"
    }, {
      name: "\u9042\u5E73\u53BF",
      value: "411728",
      parent: "411700"
    }, {
      name: "\u65B0\u8521\u53BF",
      value: "411729",
      parent: "411700"
    }, {
      name: "\u6B66\u6C49\u5E02",
      value: "420100",
      parent: "420000"
    }, {
      name: "\u9EC4\u77F3\u5E02",
      value: "420200",
      parent: "420000"
    }, {
      name: "\u5341\u5830\u5E02",
      value: "420300",
      parent: "420000"
    }, {
      name: "\u5B9C\u660C\u5E02",
      value: "420500",
      parent: "420000"
    }, {
      name: "\u8944\u9633\u5E02",
      value: "420600",
      parent: "420000"
    }, {
      name: "\u9102\u5DDE\u5E02",
      value: "420700",
      parent: "420000"
    }, {
      name: "\u8346\u95E8\u5E02",
      value: "420800",
      parent: "420000"
    }, {
      name: "\u5B5D\u611F\u5E02",
      value: "420900",
      parent: "420000"
    }, {
      name: "\u8346\u5DDE\u5E02",
      value: "421000",
      parent: "420000"
    }, {
      name: "\u9EC4\u5188\u5E02",
      value: "421100",
      parent: "420000"
    }, {
      name: "\u54B8\u5B81\u5E02",
      value: "421200",
      parent: "420000"
    }, {
      name: "\u968F\u5DDE\u5E02",
      value: "421300",
      parent: "420000"
    }, {
      name: "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      value: "422800",
      parent: "420000"
    }, {
      name: "\u4ED9\u6843\u5E02",
      value: "429004",
      parent: "420000"
    }, {
      name: "\u6F5C\u6C5F\u5E02",
      value: "429005",
      parent: "420000"
    }, {
      name: "\u5929\u95E8\u5E02",
      value: "429006",
      parent: "420000"
    }, {
      name: "\u795E\u519C\u67B6\u6797\u533A",
      value: "429021",
      parent: "420000"
    }, {
      name: "\u6C5F\u5CB8\u533A",
      value: "420102",
      parent: "420100"
    }, {
      name: "\u6C5F\u6C49\u533A",
      value: "420103",
      parent: "420100"
    }, {
      name: "\u785A\u53E3\u533A",
      value: "420104",
      parent: "420100"
    }, {
      name: "\u6C49\u9633\u533A",
      value: "420105",
      parent: "420100"
    }, {
      name: "\u6B66\u660C\u533A",
      value: "420106",
      parent: "420100"
    }, {
      name: "\u9752\u5C71\u533A",
      value: "420107",
      parent: "420100"
    }, {
      name: "\u6D2A\u5C71\u533A",
      value: "420111",
      parent: "420100"
    }, {
      name: "\u4E1C\u897F\u6E56\u533A",
      value: "420112",
      parent: "420100"
    }, {
      name: "\u6C49\u5357\u533A",
      value: "420113",
      parent: "420100"
    }, {
      name: "\u8521\u7538\u533A",
      value: "420114",
      parent: "420100"
    }, {
      name: "\u6C5F\u590F\u533A",
      value: "420115",
      parent: "420100"
    }, {
      name: "\u9EC4\u9642\u533A",
      value: "420116",
      parent: "420100"
    }, {
      name: "\u65B0\u6D32\u533A",
      value: "420117",
      parent: "420100"
    }, {
      name: "\u9EC4\u77F3\u6E2F\u533A",
      value: "420202",
      parent: "420200"
    }, {
      name: "\u897F\u585E\u5C71\u533A",
      value: "420203",
      parent: "420200"
    }, {
      name: "\u4E0B\u9646\u533A",
      value: "420204",
      parent: "420200"
    }, {
      name: "\u94C1\u5C71\u533A",
      value: "420205",
      parent: "420200"
    }, {
      name: "\u9633\u65B0\u53BF",
      value: "420222",
      parent: "420200"
    }, {
      name: "\u5927\u51B6\u5E02",
      value: "420281",
      parent: "420200"
    }, {
      name: "\u8305\u7BAD\u533A",
      value: "420302",
      parent: "420300"
    }, {
      name: "\u5F20\u6E7E\u533A",
      value: "420303",
      parent: "420300"
    }, {
      name: "\u90E7\u9633\u533A",
      value: "420304",
      parent: "420300"
    }, {
      name: "\u90E7\u897F\u53BF",
      value: "420322",
      parent: "420300"
    }, {
      name: "\u7AF9\u5C71\u53BF",
      value: "420323",
      parent: "420300"
    }, {
      name: "\u7AF9\u6EAA\u53BF",
      value: "420324",
      parent: "420300"
    }, {
      name: "\u623F\u53BF",
      value: "420325",
      parent: "420300"
    }, {
      name: "\u4E39\u6C5F\u53E3\u5E02",
      value: "420381",
      parent: "420300"
    }, {
      name: "\u897F\u9675\u533A",
      value: "420502",
      parent: "420500"
    }, {
      name: "\u4F0D\u5BB6\u5C97\u533A",
      value: "420503",
      parent: "420500"
    }, {
      name: "\u70B9\u519B\u533A",
      value: "420504",
      parent: "420500"
    }, {
      name: "\u7307\u4EAD\u533A",
      value: "420505",
      parent: "420500"
    }, {
      name: "\u5937\u9675\u533A",
      value: "420506",
      parent: "420500"
    }, {
      name: "\u8FDC\u5B89\u53BF",
      value: "420525",
      parent: "420500"
    }, {
      name: "\u5174\u5C71\u53BF",
      value: "420526",
      parent: "420500"
    }, {
      name: "\u79ED\u5F52\u53BF",
      value: "420527",
      parent: "420500"
    }, {
      name: "\u957F\u9633\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
      value: "420528",
      parent: "420500"
    }, {
      name: "\u4E94\u5CF0\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
      value: "420529",
      parent: "420500"
    }, {
      name: "\u5B9C\u90FD\u5E02",
      value: "420581",
      parent: "420500"
    }, {
      name: "\u5F53\u9633\u5E02",
      value: "420582",
      parent: "420500"
    }, {
      name: "\u679D\u6C5F\u5E02",
      value: "420583",
      parent: "420500"
    }, {
      name: "\u8944\u57CE\u533A",
      value: "420602",
      parent: "420600"
    }, {
      name: "\u6A0A\u57CE\u533A",
      value: "420606",
      parent: "420600"
    }, {
      name: "\u8944\u5DDE\u533A",
      value: "420607",
      parent: "420600"
    }, {
      name: "\u5357\u6F33\u53BF",
      value: "420624",
      parent: "420600"
    }, {
      name: "\u8C37\u57CE\u53BF",
      value: "420625",
      parent: "420600"
    }, {
      name: "\u4FDD\u5EB7\u53BF",
      value: "420626",
      parent: "420600"
    }, {
      name: "\u8001\u6CB3\u53E3\u5E02",
      value: "420682",
      parent: "420600"
    }, {
      name: "\u67A3\u9633\u5E02",
      value: "420683",
      parent: "420600"
    }, {
      name: "\u5B9C\u57CE\u5E02",
      value: "420684",
      parent: "420600"
    }, {
      name: "\u6881\u5B50\u6E56\u533A",
      value: "420702",
      parent: "420700"
    }, {
      name: "\u534E\u5BB9\u533A",
      value: "420703",
      parent: "420700"
    }, {
      name: "\u9102\u57CE\u533A",
      value: "420704",
      parent: "420700"
    }, {
      name: "\u4E1C\u5B9D\u533A",
      value: "420802",
      parent: "420800"
    }, {
      name: "\u6387\u5200\u533A",
      value: "420804",
      parent: "420800"
    }, {
      name: "\u4EAC\u5C71\u53BF",
      value: "420821",
      parent: "420800"
    }, {
      name: "\u6C99\u6D0B\u53BF",
      value: "420822",
      parent: "420800"
    }, {
      name: "\u949F\u7965\u5E02",
      value: "420881",
      parent: "420800"
    }, {
      name: "\u5B5D\u5357\u533A",
      value: "420902",
      parent: "420900"
    }, {
      name: "\u5B5D\u660C\u53BF",
      value: "420921",
      parent: "420900"
    }, {
      name: "\u5927\u609F\u53BF",
      value: "420922",
      parent: "420900"
    }, {
      name: "\u4E91\u68A6\u53BF",
      value: "420923",
      parent: "420900"
    }, {
      name: "\u5E94\u57CE\u5E02",
      value: "420981",
      parent: "420900"
    }, {
      name: "\u5B89\u9646\u5E02",
      value: "420982",
      parent: "420900"
    }, {
      name: "\u6C49\u5DDD\u5E02",
      value: "420984",
      parent: "420900"
    }, {
      name: "\u6C99\u5E02\u533A",
      value: "421002",
      parent: "421000"
    }, {
      name: "\u8346\u5DDE\u533A",
      value: "421003",
      parent: "421000"
    }, {
      name: "\u516C\u5B89\u53BF",
      value: "421022",
      parent: "421000"
    }, {
      name: "\u76D1\u5229\u53BF",
      value: "421023",
      parent: "421000"
    }, {
      name: "\u6C5F\u9675\u53BF",
      value: "421024",
      parent: "421000"
    }, {
      name: "\u77F3\u9996\u5E02",
      value: "421081",
      parent: "421000"
    }, {
      name: "\u6D2A\u6E56\u5E02",
      value: "421083",
      parent: "421000"
    }, {
      name: "\u677E\u6ECB\u5E02",
      value: "421087",
      parent: "421000"
    }, {
      name: "\u9EC4\u5DDE\u533A",
      value: "421102",
      parent: "421100"
    }, {
      name: "\u56E2\u98CE\u53BF",
      value: "421121",
      parent: "421100"
    }, {
      name: "\u7EA2\u5B89\u53BF",
      value: "421122",
      parent: "421100"
    }, {
      name: "\u7F57\u7530\u53BF",
      value: "421123",
      parent: "421100"
    }, {
      name: "\u82F1\u5C71\u53BF",
      value: "421124",
      parent: "421100"
    }, {
      name: "\u6D60\u6C34\u53BF",
      value: "421125",
      parent: "421100"
    }, {
      name: "\u8572\u6625\u53BF",
      value: "421126",
      parent: "421100"
    }, {
      name: "\u9EC4\u6885\u53BF",
      value: "421127",
      parent: "421100"
    }, {
      name: "\u9EBB\u57CE\u5E02",
      value: "421181",
      parent: "421100"
    }, {
      name: "\u6B66\u7A74\u5E02",
      value: "421182",
      parent: "421100"
    }, {
      name: "\u54B8\u5B89\u533A",
      value: "421202",
      parent: "421200"
    }, {
      name: "\u5609\u9C7C\u53BF",
      value: "421221",
      parent: "421200"
    }, {
      name: "\u901A\u57CE\u53BF",
      value: "421222",
      parent: "421200"
    }, {
      name: "\u5D07\u9633\u53BF",
      value: "421223",
      parent: "421200"
    }, {
      name: "\u901A\u5C71\u53BF",
      value: "421224",
      parent: "421200"
    }, {
      name: "\u8D64\u58C1\u5E02",
      value: "421281",
      parent: "421200"
    }, {
      name: "\u66FE\u90FD\u533A",
      value: "421303",
      parent: "421300"
    }, {
      name: "\u968F\u53BF",
      value: "421321",
      parent: "421300"
    }, {
      name: "\u5E7F\u6C34\u5E02",
      value: "421381",
      parent: "421300"
    }, {
      name: "\u6069\u65BD\u5E02",
      value: "422801",
      parent: "422800"
    }, {
      name: "\u5229\u5DDD\u5E02",
      value: "422802",
      parent: "422800"
    }, {
      name: "\u5EFA\u59CB\u53BF",
      value: "422822",
      parent: "422800"
    }, {
      name: "\u5DF4\u4E1C\u53BF",
      value: "422823",
      parent: "422800"
    }, {
      name: "\u5BA3\u6069\u53BF",
      value: "422825",
      parent: "422800"
    }, {
      name: "\u54B8\u4E30\u53BF",
      value: "422826",
      parent: "422800"
    }, {
      name: "\u6765\u51E4\u53BF",
      value: "422827",
      parent: "422800"
    }, {
      name: "\u9E64\u5CF0\u53BF",
      value: "422828",
      parent: "422800"
    }, {
      name: "\u957F\u6C99\u5E02",
      value: "430100",
      parent: "430000"
    }, {
      name: "\u682A\u6D32\u5E02",
      value: "430200",
      parent: "430000"
    }, {
      name: "\u6E58\u6F6D\u5E02",
      value: "430300",
      parent: "430000"
    }, {
      name: "\u8861\u9633\u5E02",
      value: "430400",
      parent: "430000"
    }, {
      name: "\u90B5\u9633\u5E02",
      value: "430500",
      parent: "430000"
    }, {
      name: "\u5CB3\u9633\u5E02",
      value: "430600",
      parent: "430000"
    }, {
      name: "\u5E38\u5FB7\u5E02",
      value: "430700",
      parent: "430000"
    }, {
      name: "\u5F20\u5BB6\u754C\u5E02",
      value: "430800",
      parent: "430000"
    }, {
      name: "\u76CA\u9633\u5E02",
      value: "430900",
      parent: "430000"
    }, {
      name: "\u90F4\u5DDE\u5E02",
      value: "431000",
      parent: "430000"
    }, {
      name: "\u6C38\u5DDE\u5E02",
      value: "431100",
      parent: "430000"
    }, {
      name: "\u6000\u5316\u5E02",
      value: "431200",
      parent: "430000"
    }, {
      name: "\u5A04\u5E95\u5E02",
      value: "431300",
      parent: "430000"
    }, {
      name: "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      value: "433100",
      parent: "430000"
    }, {
      name: "\u8299\u84C9\u533A",
      value: "430102",
      parent: "430100"
    }, {
      name: "\u5929\u5FC3\u533A",
      value: "430103",
      parent: "430100"
    }, {
      name: "\u5CB3\u9E93\u533A",
      value: "430104",
      parent: "430100"
    }, {
      name: "\u5F00\u798F\u533A",
      value: "430105",
      parent: "430100"
    }, {
      name: "\u96E8\u82B1\u533A",
      value: "430111",
      parent: "430100"
    }, {
      name: "\u671B\u57CE\u533A",
      value: "430112",
      parent: "430100"
    }, {
      name: "\u957F\u6C99\u53BF",
      value: "430121",
      parent: "430100"
    }, {
      name: "\u5B81\u4E61\u53BF",
      value: "430124",
      parent: "430100"
    }, {
      name: "\u6D4F\u9633\u5E02",
      value: "430181",
      parent: "430100"
    }, {
      name: "\u8377\u5858\u533A",
      value: "430202",
      parent: "430200"
    }, {
      name: "\u82A6\u6DDE\u533A",
      value: "430203",
      parent: "430200"
    }, {
      name: "\u77F3\u5CF0\u533A",
      value: "430204",
      parent: "430200"
    }, {
      name: "\u5929\u5143\u533A",
      value: "430211",
      parent: "430200"
    }, {
      name: "\u682A\u6D32\u53BF",
      value: "430221",
      parent: "430200"
    }, {
      name: "\u6538\u53BF",
      value: "430223",
      parent: "430200"
    }, {
      name: "\u8336\u9675\u53BF",
      value: "430224",
      parent: "430200"
    }, {
      name: "\u708E\u9675\u53BF",
      value: "430225",
      parent: "430200"
    }, {
      name: "\u91B4\u9675\u5E02",
      value: "430281",
      parent: "430200"
    }, {
      name: "\u96E8\u6E56\u533A",
      value: "430302",
      parent: "430300"
    }, {
      name: "\u5CB3\u5858\u533A",
      value: "430304",
      parent: "430300"
    }, {
      name: "\u6E58\u6F6D\u53BF",
      value: "430321",
      parent: "430300"
    }, {
      name: "\u6E58\u4E61\u5E02",
      value: "430381",
      parent: "430300"
    }, {
      name: "\u97F6\u5C71\u5E02",
      value: "430382",
      parent: "430300"
    }, {
      name: "\u73E0\u6656\u533A",
      value: "430405",
      parent: "430400"
    }, {
      name: "\u96C1\u5CF0\u533A",
      value: "430406",
      parent: "430400"
    }, {
      name: "\u77F3\u9F13\u533A",
      value: "430407",
      parent: "430400"
    }, {
      name: "\u84B8\u6E58\u533A",
      value: "430408",
      parent: "430400"
    }, {
      name: "\u5357\u5CB3\u533A",
      value: "430412",
      parent: "430400"
    }, {
      name: "\u8861\u9633\u53BF",
      value: "430421",
      parent: "430400"
    }, {
      name: "\u8861\u5357\u53BF",
      value: "430422",
      parent: "430400"
    }, {
      name: "\u8861\u5C71\u53BF",
      value: "430423",
      parent: "430400"
    }, {
      name: "\u8861\u4E1C\u53BF",
      value: "430424",
      parent: "430400"
    }, {
      name: "\u7941\u4E1C\u53BF",
      value: "430426",
      parent: "430400"
    }, {
      name: "\u8012\u9633\u5E02",
      value: "430481",
      parent: "430400"
    }, {
      name: "\u5E38\u5B81\u5E02",
      value: "430482",
      parent: "430400"
    }, {
      name: "\u53CC\u6E05\u533A",
      value: "430502",
      parent: "430500"
    }, {
      name: "\u5927\u7965\u533A",
      value: "430503",
      parent: "430500"
    }, {
      name: "\u5317\u5854\u533A",
      value: "430511",
      parent: "430500"
    }, {
      name: "\u90B5\u4E1C\u53BF",
      value: "430521",
      parent: "430500"
    }, {
      name: "\u65B0\u90B5\u53BF",
      value: "430522",
      parent: "430500"
    }, {
      name: "\u90B5\u9633\u53BF",
      value: "430523",
      parent: "430500"
    }, {
      name: "\u9686\u56DE\u53BF",
      value: "430524",
      parent: "430500"
    }, {
      name: "\u6D1E\u53E3\u53BF",
      value: "430525",
      parent: "430500"
    }, {
      name: "\u7EE5\u5B81\u53BF",
      value: "430527",
      parent: "430500"
    }, {
      name: "\u65B0\u5B81\u53BF",
      value: "430528",
      parent: "430500"
    }, {
      name: "\u57CE\u6B65\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "430529",
      parent: "430500"
    }, {
      name: "\u6B66\u5188\u5E02",
      value: "430581",
      parent: "430500"
    }, {
      name: "\u5CB3\u9633\u697C\u533A",
      value: "430602",
      parent: "430600"
    }, {
      name: "\u4E91\u6EAA\u533A",
      value: "430603",
      parent: "430600"
    }, {
      name: "\u541B\u5C71\u533A",
      value: "430611",
      parent: "430600"
    }, {
      name: "\u5CB3\u9633\u53BF",
      value: "430621",
      parent: "430600"
    }, {
      name: "\u534E\u5BB9\u53BF",
      value: "430623",
      parent: "430600"
    }, {
      name: "\u6E58\u9634\u53BF",
      value: "430624",
      parent: "430600"
    }, {
      name: "\u5E73\u6C5F\u53BF",
      value: "430626",
      parent: "430600"
    }, {
      name: "\u6C68\u7F57\u5E02",
      value: "430681",
      parent: "430600"
    }, {
      name: "\u4E34\u6E58\u5E02",
      value: "430682",
      parent: "430600"
    }, {
      name: "\u6B66\u9675\u533A",
      value: "430702",
      parent: "430700"
    }, {
      name: "\u9F0E\u57CE\u533A",
      value: "430703",
      parent: "430700"
    }, {
      name: "\u5B89\u4E61\u53BF",
      value: "430721",
      parent: "430700"
    }, {
      name: "\u6C49\u5BFF\u53BF",
      value: "430722",
      parent: "430700"
    }, {
      name: "\u6FA7\u53BF",
      value: "430723",
      parent: "430700"
    }, {
      name: "\u4E34\u6FA7\u53BF",
      value: "430724",
      parent: "430700"
    }, {
      name: "\u6843\u6E90\u53BF",
      value: "430725",
      parent: "430700"
    }, {
      name: "\u77F3\u95E8\u53BF",
      value: "430726",
      parent: "430700"
    }, {
      name: "\u6D25\u5E02\u5E02",
      value: "430781",
      parent: "430700"
    }, {
      name: "\u6C38\u5B9A\u533A",
      value: "430802",
      parent: "430800"
    }, {
      name: "\u6B66\u9675\u6E90\u533A",
      value: "430811",
      parent: "430800"
    }, {
      name: "\u6148\u5229\u53BF",
      value: "430821",
      parent: "430800"
    }, {
      name: "\u6851\u690D\u53BF",
      value: "430822",
      parent: "430800"
    }, {
      name: "\u8D44\u9633\u533A",
      value: "430902",
      parent: "430900"
    }, {
      name: "\u8D6B\u5C71\u533A",
      value: "430903",
      parent: "430900"
    }, {
      name: "\u5357\u53BF",
      value: "430921",
      parent: "430900"
    }, {
      name: "\u6843\u6C5F\u53BF",
      value: "430922",
      parent: "430900"
    }, {
      name: "\u5B89\u5316\u53BF",
      value: "430923",
      parent: "430900"
    }, {
      name: "\u6C85\u6C5F\u5E02",
      value: "430981",
      parent: "430900"
    }, {
      name: "\u5317\u6E56\u533A",
      value: "431002",
      parent: "431000"
    }, {
      name: "\u82CF\u4ED9\u533A",
      value: "431003",
      parent: "431000"
    }, {
      name: "\u6842\u9633\u53BF",
      value: "431021",
      parent: "431000"
    }, {
      name: "\u5B9C\u7AE0\u53BF",
      value: "431022",
      parent: "431000"
    }, {
      name: "\u6C38\u5174\u53BF",
      value: "431023",
      parent: "431000"
    }, {
      name: "\u5609\u79BE\u53BF",
      value: "431024",
      parent: "431000"
    }, {
      name: "\u4E34\u6B66\u53BF",
      value: "431025",
      parent: "431000"
    }, {
      name: "\u6C5D\u57CE\u53BF",
      value: "431026",
      parent: "431000"
    }, {
      name: "\u6842\u4E1C\u53BF",
      value: "431027",
      parent: "431000"
    }, {
      name: "\u5B89\u4EC1\u53BF",
      value: "431028",
      parent: "431000"
    }, {
      name: "\u8D44\u5174\u5E02",
      value: "431081",
      parent: "431000"
    }, {
      name: "\u96F6\u9675\u533A",
      value: "431102",
      parent: "431100"
    }, {
      name: "\u51B7\u6C34\u6EE9\u533A",
      value: "431103",
      parent: "431100"
    }, {
      name: "\u7941\u9633\u53BF",
      value: "431121",
      parent: "431100"
    }, {
      name: "\u4E1C\u5B89\u53BF",
      value: "431122",
      parent: "431100"
    }, {
      name: "\u53CC\u724C\u53BF",
      value: "431123",
      parent: "431100"
    }, {
      name: "\u9053\u53BF",
      value: "431124",
      parent: "431100"
    }, {
      name: "\u6C5F\u6C38\u53BF",
      value: "431125",
      parent: "431100"
    }, {
      name: "\u5B81\u8FDC\u53BF",
      value: "431126",
      parent: "431100"
    }, {
      name: "\u84DD\u5C71\u53BF",
      value: "431127",
      parent: "431100"
    }, {
      name: "\u65B0\u7530\u53BF",
      value: "431128",
      parent: "431100"
    }, {
      name: "\u6C5F\u534E\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "431129",
      parent: "431100"
    }, {
      name: "\u9E64\u57CE\u533A",
      value: "431202",
      parent: "431200"
    }, {
      name: "\u4E2D\u65B9\u53BF",
      value: "431221",
      parent: "431200"
    }, {
      name: "\u6C85\u9675\u53BF",
      value: "431222",
      parent: "431200"
    }, {
      name: "\u8FB0\u6EAA\u53BF",
      value: "431223",
      parent: "431200"
    }, {
      name: "\u6E86\u6D66\u53BF",
      value: "431224",
      parent: "431200"
    }, {
      name: "\u4F1A\u540C\u53BF",
      value: "431225",
      parent: "431200"
    }, {
      name: "\u9EBB\u9633\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "431226",
      parent: "431200"
    }, {
      name: "\u65B0\u6643\u4F97\u65CF\u81EA\u6CBB\u53BF",
      value: "431227",
      parent: "431200"
    }, {
      name: "\u82B7\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF",
      value: "431228",
      parent: "431200"
    }, {
      name: "\u9756\u5DDE\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u53BF",
      value: "431229",
      parent: "431200"
    }, {
      name: "\u901A\u9053\u4F97\u65CF\u81EA\u6CBB\u53BF",
      value: "431230",
      parent: "431200"
    }, {
      name: "\u6D2A\u6C5F\u5E02",
      value: "431281",
      parent: "431200"
    }, {
      name: "\u5A04\u661F\u533A",
      value: "431302",
      parent: "431300"
    }, {
      name: "\u53CC\u5CF0\u53BF",
      value: "431321",
      parent: "431300"
    }, {
      name: "\u65B0\u5316\u53BF",
      value: "431322",
      parent: "431300"
    }, {
      name: "\u51B7\u6C34\u6C5F\u5E02",
      value: "431381",
      parent: "431300"
    }, {
      name: "\u6D9F\u6E90\u5E02",
      value: "431382",
      parent: "431300"
    }, {
      name: "\u5409\u9996\u5E02",
      value: "433101",
      parent: "433100"
    }, {
      name: "\u6CF8\u6EAA\u53BF",
      value: "433122",
      parent: "433100"
    }, {
      name: "\u51E4\u51F0\u53BF",
      value: "433123",
      parent: "433100"
    }, {
      name: "\u82B1\u57A3\u53BF",
      value: "433124",
      parent: "433100"
    }, {
      name: "\u4FDD\u9756\u53BF",
      value: "433125",
      parent: "433100"
    }, {
      name: "\u53E4\u4E08\u53BF",
      value: "433126",
      parent: "433100"
    }, {
      name: "\u6C38\u987A\u53BF",
      value: "433127",
      parent: "433100"
    }, {
      name: "\u9F99\u5C71\u53BF",
      value: "433130",
      parent: "433100"
    }, {
      name: "\u5E7F\u5DDE\u5E02",
      value: "440100",
      parent: "440000"
    }, {
      name: "\u97F6\u5173\u5E02",
      value: "440200",
      parent: "440000"
    }, {
      name: "\u6DF1\u5733\u5E02",
      value: "440300",
      parent: "440000"
    }, {
      name: "\u73E0\u6D77\u5E02",
      value: "440400",
      parent: "440000"
    }, {
      name: "\u6C55\u5934\u5E02",
      value: "440500",
      parent: "440000"
    }, {
      name: "\u4F5B\u5C71\u5E02",
      value: "440600",
      parent: "440000"
    }, {
      name: "\u6C5F\u95E8\u5E02",
      value: "440700",
      parent: "440000"
    }, {
      name: "\u6E5B\u6C5F\u5E02",
      value: "440800",
      parent: "440000"
    }, {
      name: "\u8302\u540D\u5E02",
      value: "440900",
      parent: "440000"
    }, {
      name: "\u8087\u5E86\u5E02",
      value: "441200",
      parent: "440000"
    }, {
      name: "\u60E0\u5DDE\u5E02",
      value: "441300",
      parent: "440000"
    }, {
      name: "\u6885\u5DDE\u5E02",
      value: "441400",
      parent: "440000"
    }, {
      name: "\u6C55\u5C3E\u5E02",
      value: "441500",
      parent: "440000"
    }, {
      name: "\u6CB3\u6E90\u5E02",
      value: "441600",
      parent: "440000"
    }, {
      name: "\u9633\u6C5F\u5E02",
      value: "441700",
      parent: "440000"
    }, {
      name: "\u6E05\u8FDC\u5E02",
      value: "441800",
      parent: "440000"
    }, {
      name: "\u4E1C\u839E\u5E02",
      value: "441900",
      parent: "440000"
    }, {
      name: "\u4E2D\u5C71\u5E02",
      value: "442000",
      parent: "440000"
    }, {
      name: "\u6F6E\u5DDE\u5E02",
      value: "445100",
      parent: "440000"
    }, {
      name: "\u63ED\u9633\u5E02",
      value: "445200",
      parent: "440000"
    }, {
      name: "\u4E91\u6D6E\u5E02",
      value: "445300",
      parent: "440000"
    }, {
      name: "\u8354\u6E7E\u533A",
      value: "440103",
      parent: "440100"
    }, {
      name: "\u8D8A\u79C0\u533A",
      value: "440104",
      parent: "440100"
    }, {
      name: "\u6D77\u73E0\u533A",
      value: "440105",
      parent: "440100"
    }, {
      name: "\u5929\u6CB3\u533A",
      value: "440106",
      parent: "440100"
    }, {
      name: "\u767D\u4E91\u533A",
      value: "440111",
      parent: "440100"
    }, {
      name: "\u9EC4\u57D4\u533A",
      value: "440112",
      parent: "440100"
    }, {
      name: "\u756A\u79BA\u533A",
      value: "440113",
      parent: "440100"
    }, {
      name: "\u82B1\u90FD\u533A",
      value: "440114",
      parent: "440100"
    }, {
      name: "\u5357\u6C99\u533A",
      value: "440115",
      parent: "440100"
    }, {
      name: "\u4ECE\u5316\u533A",
      value: "440117",
      parent: "440100"
    }, {
      name: "\u589E\u57CE\u533A",
      value: "440118",
      parent: "440100"
    }, {
      name: "\u6B66\u6C5F\u533A",
      value: "440203",
      parent: "440200"
    }, {
      name: "\u6D48\u6C5F\u533A",
      value: "440204",
      parent: "440200"
    }, {
      name: "\u66F2\u6C5F\u533A",
      value: "440205",
      parent: "440200"
    }, {
      name: "\u59CB\u5174\u53BF",
      value: "440222",
      parent: "440200"
    }, {
      name: "\u4EC1\u5316\u53BF",
      value: "440224",
      parent: "440200"
    }, {
      name: "\u7FC1\u6E90\u53BF",
      value: "440229",
      parent: "440200"
    }, {
      name: "\u4E73\u6E90\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "440232",
      parent: "440200"
    }, {
      name: "\u65B0\u4E30\u53BF",
      value: "440233",
      parent: "440200"
    }, {
      name: "\u4E50\u660C\u5E02",
      value: "440281",
      parent: "440200"
    }, {
      name: "\u5357\u96C4\u5E02",
      value: "440282",
      parent: "440200"
    }, {
      name: "\u7F57\u6E56\u533A",
      value: "440303",
      parent: "440300"
    }, {
      name: "\u798F\u7530\u533A",
      value: "440304",
      parent: "440300"
    }, {
      name: "\u5357\u5C71\u533A",
      value: "440305",
      parent: "440300"
    }, {
      name: "\u5B9D\u5B89\u533A",
      value: "440306",
      parent: "440300"
    }, {
      name: "\u9F99\u5C97\u533A",
      value: "440307",
      parent: "440300"
    }, {
      name: "\u76D0\u7530\u533A",
      value: "440308",
      parent: "440300"
    }, {
      name: "\u9999\u6D32\u533A",
      value: "440402",
      parent: "440400"
    }, {
      name: "\u6597\u95E8\u533A",
      value: "440403",
      parent: "440400"
    }, {
      name: "\u91D1\u6E7E\u533A",
      value: "440404",
      parent: "440400"
    }, {
      name: "\u9F99\u6E56\u533A",
      value: "440507",
      parent: "440500"
    }, {
      name: "\u91D1\u5E73\u533A",
      value: "440511",
      parent: "440500"
    }, {
      name: "\u6FE0\u6C5F\u533A",
      value: "440512",
      parent: "440500"
    }, {
      name: "\u6F6E\u9633\u533A",
      value: "440513",
      parent: "440500"
    }, {
      name: "\u6F6E\u5357\u533A",
      value: "440514",
      parent: "440500"
    }, {
      name: "\u6F84\u6D77\u533A",
      value: "440515",
      parent: "440500"
    }, {
      name: "\u5357\u6FB3\u53BF",
      value: "440523",
      parent: "440500"
    }, {
      name: "\u7985\u57CE\u533A",
      value: "440604",
      parent: "440600"
    }, {
      name: "\u5357\u6D77\u533A",
      value: "440605",
      parent: "440600"
    }, {
      name: "\u987A\u5FB7\u533A",
      value: "440606",
      parent: "440600"
    }, {
      name: "\u4E09\u6C34\u533A",
      value: "440607",
      parent: "440600"
    }, {
      name: "\u9AD8\u660E\u533A",
      value: "440608",
      parent: "440600"
    }, {
      name: "\u84EC\u6C5F\u533A",
      value: "440703",
      parent: "440700"
    }, {
      name: "\u6C5F\u6D77\u533A",
      value: "440704",
      parent: "440700"
    }, {
      name: "\u65B0\u4F1A\u533A",
      value: "440705",
      parent: "440700"
    }, {
      name: "\u53F0\u5C71\u5E02",
      value: "440781",
      parent: "440700"
    }, {
      name: "\u5F00\u5E73\u5E02",
      value: "440783",
      parent: "440700"
    }, {
      name: "\u9E64\u5C71\u5E02",
      value: "440784",
      parent: "440700"
    }, {
      name: "\u6069\u5E73\u5E02",
      value: "440785",
      parent: "440700"
    }, {
      name: "\u8D64\u574E\u533A",
      value: "440802",
      parent: "440800"
    }, {
      name: "\u971E\u5C71\u533A",
      value: "440803",
      parent: "440800"
    }, {
      name: "\u5761\u5934\u533A",
      value: "440804",
      parent: "440800"
    }, {
      name: "\u9EBB\u7AE0\u533A",
      value: "440811",
      parent: "440800"
    }, {
      name: "\u9042\u6EAA\u53BF",
      value: "440823",
      parent: "440800"
    }, {
      name: "\u5F90\u95FB\u53BF",
      value: "440825",
      parent: "440800"
    }, {
      name: "\u5EC9\u6C5F\u5E02",
      value: "440881",
      parent: "440800"
    }, {
      name: "\u96F7\u5DDE\u5E02",
      value: "440882",
      parent: "440800"
    }, {
      name: "\u5434\u5DDD\u5E02",
      value: "440883",
      parent: "440800"
    }, {
      name: "\u8302\u5357\u533A",
      value: "440902",
      parent: "440900"
    }, {
      name: "\u7535\u767D\u533A",
      value: "440904",
      parent: "440900"
    }, {
      name: "\u9AD8\u5DDE\u5E02",
      value: "440981",
      parent: "440900"
    }, {
      name: "\u5316\u5DDE\u5E02",
      value: "440982",
      parent: "440900"
    }, {
      name: "\u4FE1\u5B9C\u5E02",
      value: "440983",
      parent: "440900"
    }, {
      name: "\u7AEF\u5DDE\u533A",
      value: "441202",
      parent: "441200"
    }, {
      name: "\u9F0E\u6E56\u533A",
      value: "441203",
      parent: "441200"
    }, {
      name: "\u9AD8\u8981\u533A",
      value: "441204",
      parent: "441200"
    }, {
      name: "\u5E7F\u5B81\u53BF",
      value: "441223",
      parent: "441200"
    }, {
      name: "\u6000\u96C6\u53BF",
      value: "441224",
      parent: "441200"
    }, {
      name: "\u5C01\u5F00\u53BF",
      value: "441225",
      parent: "441200"
    }, {
      name: "\u5FB7\u5E86\u53BF",
      value: "441226",
      parent: "441200"
    }, {
      name: "\u56DB\u4F1A\u5E02",
      value: "441284",
      parent: "441200"
    }, {
      name: "\u60E0\u57CE\u533A",
      value: "441302",
      parent: "441300"
    }, {
      name: "\u60E0\u9633\u533A",
      value: "441303",
      parent: "441300"
    }, {
      name: "\u535A\u7F57\u53BF",
      value: "441322",
      parent: "441300"
    }, {
      name: "\u60E0\u4E1C\u53BF",
      value: "441323",
      parent: "441300"
    }, {
      name: "\u9F99\u95E8\u53BF",
      value: "441324",
      parent: "441300"
    }, {
      name: "\u6885\u6C5F\u533A",
      value: "441402",
      parent: "441400"
    }, {
      name: "\u6885\u53BF\u533A",
      value: "441403",
      parent: "441400"
    }, {
      name: "\u5927\u57D4\u53BF",
      value: "441422",
      parent: "441400"
    }, {
      name: "\u4E30\u987A\u53BF",
      value: "441423",
      parent: "441400"
    }, {
      name: "\u4E94\u534E\u53BF",
      value: "441424",
      parent: "441400"
    }, {
      name: "\u5E73\u8FDC\u53BF",
      value: "441426",
      parent: "441400"
    }, {
      name: "\u8549\u5CAD\u53BF",
      value: "441427",
      parent: "441400"
    }, {
      name: "\u5174\u5B81\u5E02",
      value: "441481",
      parent: "441400"
    }, {
      name: "\u57CE\u533A",
      value: "441502",
      parent: "441500"
    }, {
      name: "\u6D77\u4E30\u53BF",
      value: "441521",
      parent: "441500"
    }, {
      name: "\u9646\u6CB3\u53BF",
      value: "441523",
      parent: "441500"
    }, {
      name: "\u9646\u4E30\u5E02",
      value: "441581",
      parent: "441500"
    }, {
      name: "\u6E90\u57CE\u533A",
      value: "441602",
      parent: "441600"
    }, {
      name: "\u7D2B\u91D1\u53BF",
      value: "441621",
      parent: "441600"
    }, {
      name: "\u9F99\u5DDD\u53BF",
      value: "441622",
      parent: "441600"
    }, {
      name: "\u8FDE\u5E73\u53BF",
      value: "441623",
      parent: "441600"
    }, {
      name: "\u548C\u5E73\u53BF",
      value: "441624",
      parent: "441600"
    }, {
      name: "\u4E1C\u6E90\u53BF",
      value: "441625",
      parent: "441600"
    }, {
      name: "\u6C5F\u57CE\u533A",
      value: "441702",
      parent: "441700"
    }, {
      name: "\u9633\u4E1C\u533A",
      value: "441704",
      parent: "441700"
    }, {
      name: "\u9633\u897F\u53BF",
      value: "441721",
      parent: "441700"
    }, {
      name: "\u9633\u6625\u5E02",
      value: "441781",
      parent: "441700"
    }, {
      name: "\u6E05\u57CE\u533A",
      value: "441802",
      parent: "441800"
    }, {
      name: "\u6E05\u65B0\u533A",
      value: "441803",
      parent: "441800"
    }, {
      name: "\u4F5B\u5188\u53BF",
      value: "441821",
      parent: "441800"
    }, {
      name: "\u9633\u5C71\u53BF",
      value: "441823",
      parent: "441800"
    }, {
      name: "\u8FDE\u5C71\u58EE\u65CF\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "441825",
      parent: "441800"
    }, {
      name: "\u8FDE\u5357\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "441826",
      parent: "441800"
    }, {
      name: "\u82F1\u5FB7\u5E02",
      value: "441881",
      parent: "441800"
    }, {
      name: "\u8FDE\u5DDE\u5E02",
      value: "441882",
      parent: "441800"
    }, {
      name: "\u6E58\u6865\u533A",
      value: "445102",
      parent: "445100"
    }, {
      name: "\u6F6E\u5B89\u533A",
      value: "445103",
      parent: "445100"
    }, {
      name: "\u9976\u5E73\u53BF",
      value: "445122",
      parent: "445100"
    }, {
      name: "\u6995\u57CE\u533A",
      value: "445202",
      parent: "445200"
    }, {
      name: "\u63ED\u4E1C\u533A",
      value: "445203",
      parent: "445200"
    }, {
      name: "\u63ED\u897F\u53BF",
      value: "445222",
      parent: "445200"
    }, {
      name: "\u60E0\u6765\u53BF",
      value: "445224",
      parent: "445200"
    }, {
      name: "\u666E\u5B81\u5E02",
      value: "445281",
      parent: "445200"
    }, {
      name: "\u4E91\u57CE\u533A",
      value: "445302",
      parent: "445300"
    }, {
      name: "\u4E91\u5B89\u533A",
      value: "445303",
      parent: "445300"
    }, {
      name: "\u65B0\u5174\u53BF",
      value: "445321",
      parent: "445300"
    }, {
      name: "\u90C1\u5357\u53BF",
      value: "445322",
      parent: "445300"
    }, {
      name: "\u7F57\u5B9A\u5E02",
      value: "445381",
      parent: "445300"
    }, {
      name: "\u5357\u5B81\u5E02",
      value: "450100",
      parent: "450000"
    }, {
      name: "\u67F3\u5DDE\u5E02",
      value: "450200",
      parent: "450000"
    }, {
      name: "\u6842\u6797\u5E02",
      value: "450300",
      parent: "450000"
    }, {
      name: "\u68A7\u5DDE\u5E02",
      value: "450400",
      parent: "450000"
    }, {
      name: "\u5317\u6D77\u5E02",
      value: "450500",
      parent: "450000"
    }, {
      name: "\u9632\u57CE\u6E2F\u5E02",
      value: "450600",
      parent: "450000"
    }, {
      name: "\u94A6\u5DDE\u5E02",
      value: "450700",
      parent: "450000"
    }, {
      name: "\u8D35\u6E2F\u5E02",
      value: "450800",
      parent: "450000"
    }, {
      name: "\u7389\u6797\u5E02",
      value: "450900",
      parent: "450000"
    }, {
      name: "\u767E\u8272\u5E02",
      value: "451000",
      parent: "450000"
    }, {
      name: "\u8D3A\u5DDE\u5E02",
      value: "451100",
      parent: "450000"
    }, {
      name: "\u6CB3\u6C60\u5E02",
      value: "451200",
      parent: "450000"
    }, {
      name: "\u6765\u5BBE\u5E02",
      value: "451300",
      parent: "450000"
    }, {
      name: "\u5D07\u5DE6\u5E02",
      value: "451400",
      parent: "450000"
    }, {
      name: "\u5174\u5B81\u533A",
      value: "450102",
      parent: "450100"
    }, {
      name: "\u9752\u79C0\u533A",
      value: "450103",
      parent: "450100"
    }, {
      name: "\u6C5F\u5357\u533A",
      value: "450105",
      parent: "450100"
    }, {
      name: "\u897F\u4E61\u5858\u533A",
      value: "450107",
      parent: "450100"
    }, {
      name: "\u826F\u5E86\u533A",
      value: "450108",
      parent: "450100"
    }, {
      name: "\u9095\u5B81\u533A",
      value: "450109",
      parent: "450100"
    }, {
      name: "\u6B66\u9E23\u533A",
      value: "450110",
      parent: "450100"
    }, {
      name: "\u9686\u5B89\u53BF",
      value: "450123",
      parent: "450100"
    }, {
      name: "\u9A6C\u5C71\u53BF",
      value: "450124",
      parent: "450100"
    }, {
      name: "\u4E0A\u6797\u53BF",
      value: "450125",
      parent: "450100"
    }, {
      name: "\u5BBE\u9633\u53BF",
      value: "450126",
      parent: "450100"
    }, {
      name: "\u6A2A\u53BF",
      value: "450127",
      parent: "450100"
    }, {
      name: "\u57CE\u4E2D\u533A",
      value: "450202",
      parent: "450200"
    }, {
      name: "\u9C7C\u5CF0\u533A",
      value: "450203",
      parent: "450200"
    }, {
      name: "\u67F3\u5357\u533A",
      value: "450204",
      parent: "450200"
    }, {
      name: "\u67F3\u5317\u533A",
      value: "450205",
      parent: "450200"
    }, {
      name: "\u67F3\u6C5F\u53BF",
      value: "450221",
      parent: "450200"
    }, {
      name: "\u67F3\u57CE\u53BF",
      value: "450222",
      parent: "450200"
    }, {
      name: "\u9E7F\u5BE8\u53BF",
      value: "450223",
      parent: "450200"
    }, {
      name: "\u878D\u5B89\u53BF",
      value: "450224",
      parent: "450200"
    }, {
      name: "\u878D\u6C34\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "450225",
      parent: "450200"
    }, {
      name: "\u4E09\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF",
      value: "450226",
      parent: "450200"
    }, {
      name: "\u79C0\u5CF0\u533A",
      value: "450302",
      parent: "450300"
    }, {
      name: "\u53E0\u5F69\u533A",
      value: "450303",
      parent: "450300"
    }, {
      name: "\u8C61\u5C71\u533A",
      value: "450304",
      parent: "450300"
    }, {
      name: "\u4E03\u661F\u533A",
      value: "450305",
      parent: "450300"
    }, {
      name: "\u96C1\u5C71\u533A",
      value: "450311",
      parent: "450300"
    }, {
      name: "\u4E34\u6842\u533A",
      value: "450312",
      parent: "450300"
    }, {
      name: "\u9633\u6714\u53BF",
      value: "450321",
      parent: "450300"
    }, {
      name: "\u7075\u5DDD\u53BF",
      value: "450323",
      parent: "450300"
    }, {
      name: "\u5168\u5DDE\u53BF",
      value: "450324",
      parent: "450300"
    }, {
      name: "\u5174\u5B89\u53BF",
      value: "450325",
      parent: "450300"
    }, {
      name: "\u6C38\u798F\u53BF",
      value: "450326",
      parent: "450300"
    }, {
      name: "\u704C\u9633\u53BF",
      value: "450327",
      parent: "450300"
    }, {
      name: "\u9F99\u80DC\u5404\u65CF\u81EA\u6CBB\u53BF",
      value: "450328",
      parent: "450300"
    }, {
      name: "\u8D44\u6E90\u53BF",
      value: "450329",
      parent: "450300"
    }, {
      name: "\u5E73\u4E50\u53BF",
      value: "450330",
      parent: "450300"
    }, {
      name: "\u8354\u6D66\u53BF",
      value: "450331",
      parent: "450300"
    }, {
      name: "\u606D\u57CE\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "450332",
      parent: "450300"
    }, {
      name: "\u4E07\u79C0\u533A",
      value: "450403",
      parent: "450400"
    }, {
      name: "\u957F\u6D32\u533A",
      value: "450405",
      parent: "450400"
    }, {
      name: "\u9F99\u5729\u533A",
      value: "450406",
      parent: "450400"
    }, {
      name: "\u82CD\u68A7\u53BF",
      value: "450421",
      parent: "450400"
    }, {
      name: "\u85E4\u53BF",
      value: "450422",
      parent: "450400"
    }, {
      name: "\u8499\u5C71\u53BF",
      value: "450423",
      parent: "450400"
    }, {
      name: "\u5C91\u6EAA\u5E02",
      value: "450481",
      parent: "450400"
    }, {
      name: "\u6D77\u57CE\u533A",
      value: "450502",
      parent: "450500"
    }, {
      name: "\u94F6\u6D77\u533A",
      value: "450503",
      parent: "450500"
    }, {
      name: "\u94C1\u5C71\u6E2F\u533A",
      value: "450512",
      parent: "450500"
    }, {
      name: "\u5408\u6D66\u53BF",
      value: "450521",
      parent: "450500"
    }, {
      name: "\u6E2F\u53E3\u533A",
      value: "450602",
      parent: "450600"
    }, {
      name: "\u9632\u57CE\u533A",
      value: "450603",
      parent: "450600"
    }, {
      name: "\u4E0A\u601D\u53BF",
      value: "450621",
      parent: "450600"
    }, {
      name: "\u4E1C\u5174\u5E02",
      value: "450681",
      parent: "450600"
    }, {
      name: "\u94A6\u5357\u533A",
      value: "450702",
      parent: "450700"
    }, {
      name: "\u94A6\u5317\u533A",
      value: "450703",
      parent: "450700"
    }, {
      name: "\u7075\u5C71\u53BF",
      value: "450721",
      parent: "450700"
    }, {
      name: "\u6D66\u5317\u53BF",
      value: "450722",
      parent: "450700"
    }, {
      name: "\u6E2F\u5317\u533A",
      value: "450802",
      parent: "450800"
    }, {
      name: "\u6E2F\u5357\u533A",
      value: "450803",
      parent: "450800"
    }, {
      name: "\u8983\u5858\u533A",
      value: "450804",
      parent: "450800"
    }, {
      name: "\u5E73\u5357\u53BF",
      value: "450821",
      parent: "450800"
    }, {
      name: "\u6842\u5E73\u5E02",
      value: "450881",
      parent: "450800"
    }, {
      name: "\u7389\u5DDE\u533A",
      value: "450902",
      parent: "450900"
    }, {
      name: "\u798F\u7EF5\u533A",
      value: "450903",
      parent: "450900"
    }, {
      name: "\u5BB9\u53BF",
      value: "450921",
      parent: "450900"
    }, {
      name: "\u9646\u5DDD\u53BF",
      value: "450922",
      parent: "450900"
    }, {
      name: "\u535A\u767D\u53BF",
      value: "450923",
      parent: "450900"
    }, {
      name: "\u5174\u4E1A\u53BF",
      value: "450924",
      parent: "450900"
    }, {
      name: "\u5317\u6D41\u5E02",
      value: "450981",
      parent: "450900"
    }, {
      name: "\u53F3\u6C5F\u533A",
      value: "451002",
      parent: "451000"
    }, {
      name: "\u7530\u9633\u53BF",
      value: "451021",
      parent: "451000"
    }, {
      name: "\u7530\u4E1C\u53BF",
      value: "451022",
      parent: "451000"
    }, {
      name: "\u5E73\u679C\u53BF",
      value: "451023",
      parent: "451000"
    }, {
      name: "\u5FB7\u4FDD\u53BF",
      value: "451024",
      parent: "451000"
    }, {
      name: "\u90A3\u5761\u53BF",
      value: "451026",
      parent: "451000"
    }, {
      name: "\u51CC\u4E91\u53BF",
      value: "451027",
      parent: "451000"
    }, {
      name: "\u4E50\u4E1A\u53BF",
      value: "451028",
      parent: "451000"
    }, {
      name: "\u7530\u6797\u53BF",
      value: "451029",
      parent: "451000"
    }, {
      name: "\u897F\u6797\u53BF",
      value: "451030",
      parent: "451000"
    }, {
      name: "\u9686\u6797\u5404\u65CF\u81EA\u6CBB\u53BF",
      value: "451031",
      parent: "451000"
    }, {
      name: "\u9756\u897F\u5E02",
      value: "451081",
      parent: "451000"
    }, {
      name: "\u516B\u6B65\u533A",
      value: "451102",
      parent: "451100"
    }, {
      name: "\u662D\u5E73\u53BF",
      value: "451121",
      parent: "451100"
    }, {
      name: "\u949F\u5C71\u53BF",
      value: "451122",
      parent: "451100"
    }, {
      name: "\u5BCC\u5DDD\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "451123",
      parent: "451100"
    }, {
      name: "\u91D1\u57CE\u6C5F\u533A",
      value: "451202",
      parent: "451200"
    }, {
      name: "\u5357\u4E39\u53BF",
      value: "451221",
      parent: "451200"
    }, {
      name: "\u5929\u5CE8\u53BF",
      value: "451222",
      parent: "451200"
    }, {
      name: "\u51E4\u5C71\u53BF",
      value: "451223",
      parent: "451200"
    }, {
      name: "\u4E1C\u5170\u53BF",
      value: "451224",
      parent: "451200"
    }, {
      name: "\u7F57\u57CE\u4EEB\u4F6C\u65CF\u81EA\u6CBB\u53BF",
      value: "451225",
      parent: "451200"
    }, {
      name: "\u73AF\u6C5F\u6BDB\u5357\u65CF\u81EA\u6CBB\u53BF",
      value: "451226",
      parent: "451200"
    }, {
      name: "\u5DF4\u9A6C\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "451227",
      parent: "451200"
    }, {
      name: "\u90FD\u5B89\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "451228",
      parent: "451200"
    }, {
      name: "\u5927\u5316\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "451229",
      parent: "451200"
    }, {
      name: "\u5B9C\u5DDE\u5E02",
      value: "451281",
      parent: "451200"
    }, {
      name: "\u5174\u5BBE\u533A",
      value: "451302",
      parent: "451300"
    }, {
      name: "\u5FFB\u57CE\u53BF",
      value: "451321",
      parent: "451300"
    }, {
      name: "\u8C61\u5DDE\u53BF",
      value: "451322",
      parent: "451300"
    }, {
      name: "\u6B66\u5BA3\u53BF",
      value: "451323",
      parent: "451300"
    }, {
      name: "\u91D1\u79C0\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "451324",
      parent: "451300"
    }, {
      name: "\u5408\u5C71\u5E02",
      value: "451381",
      parent: "451300"
    }, {
      name: "\u6C5F\u5DDE\u533A",
      value: "451402",
      parent: "451400"
    }, {
      name: "\u6276\u7EE5\u53BF",
      value: "451421",
      parent: "451400"
    }, {
      name: "\u5B81\u660E\u53BF",
      value: "451422",
      parent: "451400"
    }, {
      name: "\u9F99\u5DDE\u53BF",
      value: "451423",
      parent: "451400"
    }, {
      name: "\u5927\u65B0\u53BF",
      value: "451424",
      parent: "451400"
    }, {
      name: "\u5929\u7B49\u53BF",
      value: "451425",
      parent: "451400"
    }, {
      name: "\u51ED\u7965\u5E02",
      value: "451481",
      parent: "451400"
    }, {
      name: "\u6D77\u53E3\u5E02",
      value: "460100",
      parent: "460000"
    }, {
      name: "\u4E09\u4E9A\u5E02",
      value: "460200",
      parent: "460000"
    }, {
      name: "\u4E09\u6C99\u5E02",
      value: "460300",
      parent: "460000"
    }, {
      name: "\u4E94\u6307\u5C71\u5E02",
      value: "469001",
      parent: "460000"
    }, {
      name: "\u743C\u6D77\u5E02",
      value: "469002",
      parent: "460000"
    }, {
      name: "\u510B\u5DDE\u5E02",
      value: "469003",
      parent: "460000"
    }, {
      name: "\u6587\u660C\u5E02",
      value: "469005",
      parent: "460000"
    }, {
      name: "\u4E07\u5B81\u5E02",
      value: "469006",
      parent: "460000"
    }, {
      name: "\u4E1C\u65B9\u5E02",
      value: "469007",
      parent: "460000"
    }, {
      name: "\u5B9A\u5B89\u53BF",
      value: "469021",
      parent: "460000"
    }, {
      name: "\u5C6F\u660C\u53BF",
      value: "469022",
      parent: "460000"
    }, {
      name: "\u6F84\u8FC8\u53BF",
      value: "469023",
      parent: "460000"
    }, {
      name: "\u4E34\u9AD8\u53BF",
      value: "469024",
      parent: "460000"
    }, {
      name: "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      value: "469025",
      parent: "460000"
    }, {
      name: "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      value: "469026",
      parent: "460000"
    }, {
      name: "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      value: "469027",
      parent: "460000"
    }, {
      name: "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      value: "469028",
      parent: "460000"
    }, {
      name: "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "469029",
      parent: "460000"
    }, {
      name: "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "469030",
      parent: "460000"
    }, {
      name: "\u79C0\u82F1\u533A",
      value: "460105",
      parent: "460100"
    }, {
      name: "\u9F99\u534E\u533A",
      value: "460106",
      parent: "460100"
    }, {
      name: "\u743C\u5C71\u533A",
      value: "460107",
      parent: "460100"
    }, {
      name: "\u7F8E\u5170\u533A",
      value: "460108",
      parent: "460100"
    }, {
      name: "\u6D77\u68E0\u533A",
      value: "460202",
      parent: "460200"
    }, {
      name: "\u5409\u9633\u533A",
      value: "460203",
      parent: "460200"
    }, {
      name: "\u5929\u6DAF\u533A",
      value: "460204",
      parent: "460200"
    }, {
      name: "\u5D16\u5DDE\u533A",
      value: "460205",
      parent: "460200"
    }, {
      name: "\u897F\u6C99\u7FA4\u5C9B",
      value: "460321",
      parent: "460300"
    }, {
      name: "\u5357\u6C99\u7FA4\u5C9B",
      value: "460322",
      parent: "460300"
    }, {
      name: "\u4E2D\u6C99\u7FA4\u5C9B\u7684\u5C9B\u7901\u53CA\u5176\u6D77\u57DF",
      value: "460323",
      parent: "460300"
    }, {
      name: "\u5E02\u8F96\u533A",
      value: "500100",
      parent: "500000"
    }, {
      name: "\u4E07\u5DDE\u533A",
      value: "500101",
      parent: "500100"
    }, {
      name: "\u6DAA\u9675\u533A",
      value: "500102",
      parent: "500100"
    }, {
      name: "\u6E1D\u4E2D\u533A",
      value: "500103",
      parent: "500100"
    }, {
      name: "\u5927\u6E21\u53E3\u533A",
      value: "500104",
      parent: "500100"
    }, {
      name: "\u6C5F\u5317\u533A",
      value: "500105",
      parent: "500100"
    }, {
      name: "\u6C99\u576A\u575D\u533A",
      value: "500106",
      parent: "500100"
    }, {
      name: "\u4E5D\u9F99\u5761\u533A",
      value: "500107",
      parent: "500100"
    }, {
      name: "\u5357\u5CB8\u533A",
      value: "500108",
      parent: "500100"
    }, {
      name: "\u5317\u789A\u533A",
      value: "500109",
      parent: "500100"
    }, {
      name: "\u7DA6\u6C5F\u533A",
      value: "500110",
      parent: "500100"
    }, {
      name: "\u5927\u8DB3\u533A",
      value: "500111",
      parent: "500100"
    }, {
      name: "\u6E1D\u5317\u533A",
      value: "500112",
      parent: "500100"
    }, {
      name: "\u5DF4\u5357\u533A",
      value: "500113",
      parent: "500100"
    }, {
      name: "\u9ED4\u6C5F\u533A",
      value: "500114",
      parent: "500100"
    }, {
      name: "\u957F\u5BFF\u533A",
      value: "500115",
      parent: "500100"
    }, {
      name: "\u6C5F\u6D25\u533A",
      value: "500116",
      parent: "500100"
    }, {
      name: "\u5408\u5DDD\u533A",
      value: "500117",
      parent: "500100"
    }, {
      name: "\u6C38\u5DDD\u533A",
      value: "500118",
      parent: "500100"
    }, {
      name: "\u5357\u5DDD\u533A",
      value: "500119",
      parent: "500100"
    }, {
      name: "\u74A7\u5C71\u533A",
      value: "500120",
      parent: "500100"
    }, {
      name: "\u94DC\u6881\u533A",
      value: "500151",
      parent: "500100"
    }, {
      name: "\u6F7C\u5357\u533A",
      value: "500152",
      parent: "500100"
    }, {
      name: "\u8363\u660C\u533A",
      value: "500153",
      parent: "500100"
    }, {
      name: "\u6881\u5E73\u53BF",
      value: "500228",
      parent: "500100"
    }, {
      name: "\u57CE\u53E3\u53BF",
      value: "500229",
      parent: "500100"
    }, {
      name: "\u4E30\u90FD\u53BF",
      value: "500230",
      parent: "500100"
    }, {
      name: "\u57AB\u6C5F\u53BF",
      value: "500231",
      parent: "500100"
    }, {
      name: "\u6B66\u9686\u53BF",
      value: "500232",
      parent: "500100"
    }, {
      name: "\u5FE0\u53BF",
      value: "500233",
      parent: "500100"
    }, {
      name: "\u5F00\u53BF",
      value: "500234",
      parent: "500100"
    }, {
      name: "\u4E91\u9633\u53BF",
      value: "500235",
      parent: "500100"
    }, {
      name: "\u5949\u8282\u53BF",
      value: "500236",
      parent: "500100"
    }, {
      name: "\u5DEB\u5C71\u53BF",
      value: "500237",
      parent: "500100"
    }, {
      name: "\u5DEB\u6EAA\u53BF",
      value: "500238",
      parent: "500100"
    }, {
      name: "\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
      value: "500240",
      parent: "500100"
    }, {
      name: "\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "500241",
      parent: "500100"
    }, {
      name: "\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "500242",
      parent: "500100"
    }, {
      name: "\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
      value: "500243",
      parent: "500100"
    }, {
      name: "\u6210\u90FD\u5E02",
      value: "510100",
      parent: "510000"
    }, {
      name: "\u81EA\u8D21\u5E02",
      value: "510300",
      parent: "510000"
    }, {
      name: "\u6500\u679D\u82B1\u5E02",
      value: "510400",
      parent: "510000"
    }, {
      name: "\u6CF8\u5DDE\u5E02",
      value: "510500",
      parent: "510000"
    }, {
      name: "\u5FB7\u9633\u5E02",
      value: "510600",
      parent: "510000"
    }, {
      name: "\u7EF5\u9633\u5E02",
      value: "510700",
      parent: "510000"
    }, {
      name: "\u5E7F\u5143\u5E02",
      value: "510800",
      parent: "510000"
    }, {
      name: "\u9042\u5B81\u5E02",
      value: "510900",
      parent: "510000"
    }, {
      name: "\u5185\u6C5F\u5E02",
      value: "511000",
      parent: "510000"
    }, {
      name: "\u4E50\u5C71\u5E02",
      value: "511100",
      parent: "510000"
    }, {
      name: "\u5357\u5145\u5E02",
      value: "511300",
      parent: "510000"
    }, {
      name: "\u7709\u5C71\u5E02",
      value: "511400",
      parent: "510000"
    }, {
      name: "\u5B9C\u5BBE\u5E02",
      value: "511500",
      parent: "510000"
    }, {
      name: "\u5E7F\u5B89\u5E02",
      value: "511600",
      parent: "510000"
    }, {
      name: "\u8FBE\u5DDE\u5E02",
      value: "511700",
      parent: "510000"
    }, {
      name: "\u96C5\u5B89\u5E02",
      value: "511800",
      parent: "510000"
    }, {
      name: "\u5DF4\u4E2D\u5E02",
      value: "511900",
      parent: "510000"
    }, {
      name: "\u8D44\u9633\u5E02",
      value: "512000",
      parent: "510000"
    }, {
      name: "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",
      value: "513200",
      parent: "510000"
    }, {
      name: "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "513300",
      parent: "510000"
    }, {
      name: "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
      value: "513400",
      parent: "510000"
    }, {
      name: "\u9526\u6C5F\u533A",
      value: "510104",
      parent: "510100"
    }, {
      name: "\u9752\u7F8A\u533A",
      value: "510105",
      parent: "510100"
    }, {
      name: "\u91D1\u725B\u533A",
      value: "510106",
      parent: "510100"
    }, {
      name: "\u6B66\u4FAF\u533A",
      value: "510107",
      parent: "510100"
    }, {
      name: "\u6210\u534E\u533A",
      value: "510108",
      parent: "510100"
    }, {
      name: "\u9F99\u6CC9\u9A7F\u533A",
      value: "510112",
      parent: "510100"
    }, {
      name: "\u9752\u767D\u6C5F\u533A",
      value: "510113",
      parent: "510100"
    }, {
      name: "\u65B0\u90FD\u533A",
      value: "510114",
      parent: "510100"
    }, {
      name: "\u6E29\u6C5F\u533A",
      value: "510115",
      parent: "510100"
    }, {
      name: "\u91D1\u5802\u53BF",
      value: "510121",
      parent: "510100"
    }, {
      name: "\u53CC\u6D41\u53BF",
      value: "510122",
      parent: "510100"
    }, {
      name: "\u90EB\u53BF",
      value: "510124",
      parent: "510100"
    }, {
      name: "\u5927\u9091\u53BF",
      value: "510129",
      parent: "510100"
    }, {
      name: "\u84B2\u6C5F\u53BF",
      value: "510131",
      parent: "510100"
    }, {
      name: "\u65B0\u6D25\u53BF",
      value: "510132",
      parent: "510100"
    }, {
      name: "\u90FD\u6C5F\u5830\u5E02",
      value: "510181",
      parent: "510100"
    }, {
      name: "\u5F6D\u5DDE\u5E02",
      value: "510182",
      parent: "510100"
    }, {
      name: "\u909B\u5D03\u5E02",
      value: "510183",
      parent: "510100"
    }, {
      name: "\u5D07\u5DDE\u5E02",
      value: "510184",
      parent: "510100"
    }, {
      name: "\u81EA\u6D41\u4E95\u533A",
      value: "510302",
      parent: "510300"
    }, {
      name: "\u8D21\u4E95\u533A",
      value: "510303",
      parent: "510300"
    }, {
      name: "\u5927\u5B89\u533A",
      value: "510304",
      parent: "510300"
    }, {
      name: "\u6CBF\u6EE9\u533A",
      value: "510311",
      parent: "510300"
    }, {
      name: "\u8363\u53BF",
      value: "510321",
      parent: "510300"
    }, {
      name: "\u5BCC\u987A\u53BF",
      value: "510322",
      parent: "510300"
    }, {
      name: "\u4E1C\u533A",
      value: "510402",
      parent: "510400"
    }, {
      name: "\u897F\u533A",
      value: "510403",
      parent: "510400"
    }, {
      name: "\u4EC1\u548C\u533A",
      value: "510411",
      parent: "510400"
    }, {
      name: "\u7C73\u6613\u53BF",
      value: "510421",
      parent: "510400"
    }, {
      name: "\u76D0\u8FB9\u53BF",
      value: "510422",
      parent: "510400"
    }, {
      name: "\u6C5F\u9633\u533A",
      value: "510502",
      parent: "510500"
    }, {
      name: "\u7EB3\u6EAA\u533A",
      value: "510503",
      parent: "510500"
    }, {
      name: "\u9F99\u9A6C\u6F6D\u533A",
      value: "510504",
      parent: "510500"
    }, {
      name: "\u6CF8\u53BF",
      value: "510521",
      parent: "510500"
    }, {
      name: "\u5408\u6C5F\u53BF",
      value: "510522",
      parent: "510500"
    }, {
      name: "\u53D9\u6C38\u53BF",
      value: "510524",
      parent: "510500"
    }, {
      name: "\u53E4\u853A\u53BF",
      value: "510525",
      parent: "510500"
    }, {
      name: "\u65CC\u9633\u533A",
      value: "510603",
      parent: "510600"
    }, {
      name: "\u4E2D\u6C5F\u53BF",
      value: "510623",
      parent: "510600"
    }, {
      name: "\u7F57\u6C5F\u53BF",
      value: "510626",
      parent: "510600"
    }, {
      name: "\u5E7F\u6C49\u5E02",
      value: "510681",
      parent: "510600"
    }, {
      name: "\u4EC0\u90A1\u5E02",
      value: "510682",
      parent: "510600"
    }, {
      name: "\u7EF5\u7AF9\u5E02",
      value: "510683",
      parent: "510600"
    }, {
      name: "\u6DAA\u57CE\u533A",
      value: "510703",
      parent: "510700"
    }, {
      name: "\u6E38\u4ED9\u533A",
      value: "510704",
      parent: "510700"
    }, {
      name: "\u4E09\u53F0\u53BF",
      value: "510722",
      parent: "510700"
    }, {
      name: "\u76D0\u4EAD\u53BF",
      value: "510723",
      parent: "510700"
    }, {
      name: "\u5B89\u53BF",
      value: "510724",
      parent: "510700"
    }, {
      name: "\u6893\u6F7C\u53BF",
      value: "510725",
      parent: "510700"
    }, {
      name: "\u5317\u5DDD\u7F8C\u65CF\u81EA\u6CBB\u53BF",
      value: "510726",
      parent: "510700"
    }, {
      name: "\u5E73\u6B66\u53BF",
      value: "510727",
      parent: "510700"
    }, {
      name: "\u6C5F\u6CB9\u5E02",
      value: "510781",
      parent: "510700"
    }, {
      name: "\u5229\u5DDE\u533A",
      value: "510802",
      parent: "510800"
    }, {
      name: "\u662D\u5316\u533A",
      value: "510811",
      parent: "510800"
    }, {
      name: "\u671D\u5929\u533A",
      value: "510812",
      parent: "510800"
    }, {
      name: "\u65FA\u82CD\u53BF",
      value: "510821",
      parent: "510800"
    }, {
      name: "\u9752\u5DDD\u53BF",
      value: "510822",
      parent: "510800"
    }, {
      name: "\u5251\u9601\u53BF",
      value: "510823",
      parent: "510800"
    }, {
      name: "\u82CD\u6EAA\u53BF",
      value: "510824",
      parent: "510800"
    }, {
      name: "\u8239\u5C71\u533A",
      value: "510903",
      parent: "510900"
    }, {
      name: "\u5B89\u5C45\u533A",
      value: "510904",
      parent: "510900"
    }, {
      name: "\u84EC\u6EAA\u53BF",
      value: "510921",
      parent: "510900"
    }, {
      name: "\u5C04\u6D2A\u53BF",
      value: "510922",
      parent: "510900"
    }, {
      name: "\u5927\u82F1\u53BF",
      value: "510923",
      parent: "510900"
    }, {
      name: "\u5E02\u4E2D\u533A",
      value: "511002",
      parent: "511000"
    }, {
      name: "\u4E1C\u5174\u533A",
      value: "511011",
      parent: "511000"
    }, {
      name: "\u5A01\u8FDC\u53BF",
      value: "511024",
      parent: "511000"
    }, {
      name: "\u8D44\u4E2D\u53BF",
      value: "511025",
      parent: "511000"
    }, {
      name: "\u9686\u660C\u53BF",
      value: "511028",
      parent: "511000"
    }, {
      name: "\u5E02\u4E2D\u533A",
      value: "511102",
      parent: "511100"
    }, {
      name: "\u6C99\u6E7E\u533A",
      value: "511111",
      parent: "511100"
    }, {
      name: "\u4E94\u901A\u6865\u533A",
      value: "511112",
      parent: "511100"
    }, {
      name: "\u91D1\u53E3\u6CB3\u533A",
      value: "511113",
      parent: "511100"
    }, {
      name: "\u728D\u4E3A\u53BF",
      value: "511123",
      parent: "511100"
    }, {
      name: "\u4E95\u7814\u53BF",
      value: "511124",
      parent: "511100"
    }, {
      name: "\u5939\u6C5F\u53BF",
      value: "511126",
      parent: "511100"
    }, {
      name: "\u6C90\u5DDD\u53BF",
      value: "511129",
      parent: "511100"
    }, {
      name: "\u5CE8\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "511132",
      parent: "511100"
    }, {
      name: "\u9A6C\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "511133",
      parent: "511100"
    }, {
      name: "\u5CE8\u7709\u5C71\u5E02",
      value: "511181",
      parent: "511100"
    }, {
      name: "\u987A\u5E86\u533A",
      value: "511302",
      parent: "511300"
    }, {
      name: "\u9AD8\u576A\u533A",
      value: "511303",
      parent: "511300"
    }, {
      name: "\u5609\u9675\u533A",
      value: "511304",
      parent: "511300"
    }, {
      name: "\u5357\u90E8\u53BF",
      value: "511321",
      parent: "511300"
    }, {
      name: "\u8425\u5C71\u53BF",
      value: "511322",
      parent: "511300"
    }, {
      name: "\u84EC\u5B89\u53BF",
      value: "511323",
      parent: "511300"
    }, {
      name: "\u4EEA\u9647\u53BF",
      value: "511324",
      parent: "511300"
    }, {
      name: "\u897F\u5145\u53BF",
      value: "511325",
      parent: "511300"
    }, {
      name: "\u9606\u4E2D\u5E02",
      value: "511381",
      parent: "511300"
    }, {
      name: "\u4E1C\u5761\u533A",
      value: "511402",
      parent: "511400"
    }, {
      name: "\u5F6D\u5C71\u533A",
      value: "511403",
      parent: "511400"
    }, {
      name: "\u4EC1\u5BFF\u53BF",
      value: "511421",
      parent: "511400"
    }, {
      name: "\u6D2A\u96C5\u53BF",
      value: "511423",
      parent: "511400"
    }, {
      name: "\u4E39\u68F1\u53BF",
      value: "511424",
      parent: "511400"
    }, {
      name: "\u9752\u795E\u53BF",
      value: "511425",
      parent: "511400"
    }, {
      name: "\u7FE0\u5C4F\u533A",
      value: "511502",
      parent: "511500"
    }, {
      name: "\u5357\u6EAA\u533A",
      value: "511503",
      parent: "511500"
    }, {
      name: "\u5B9C\u5BBE\u53BF",
      value: "511521",
      parent: "511500"
    }, {
      name: "\u6C5F\u5B89\u53BF",
      value: "511523",
      parent: "511500"
    }, {
      name: "\u957F\u5B81\u53BF",
      value: "511524",
      parent: "511500"
    }, {
      name: "\u9AD8\u53BF",
      value: "511525",
      parent: "511500"
    }, {
      name: "\u73D9\u53BF",
      value: "511526",
      parent: "511500"
    }, {
      name: "\u7B60\u8FDE\u53BF",
      value: "511527",
      parent: "511500"
    }, {
      name: "\u5174\u6587\u53BF",
      value: "511528",
      parent: "511500"
    }, {
      name: "\u5C4F\u5C71\u53BF",
      value: "511529",
      parent: "511500"
    }, {
      name: "\u5E7F\u5B89\u533A",
      value: "511602",
      parent: "511600"
    }, {
      name: "\u524D\u950B\u533A",
      value: "511603",
      parent: "511600"
    }, {
      name: "\u5CB3\u6C60\u53BF",
      value: "511621",
      parent: "511600"
    }, {
      name: "\u6B66\u80DC\u53BF",
      value: "511622",
      parent: "511600"
    }, {
      name: "\u90BB\u6C34\u53BF",
      value: "511623",
      parent: "511600"
    }, {
      name: "\u534E\u84E5\u5E02",
      value: "511681",
      parent: "511600"
    }, {
      name: "\u901A\u5DDD\u533A",
      value: "511702",
      parent: "511700"
    }, {
      name: "\u8FBE\u5DDD\u533A",
      value: "511703",
      parent: "511700"
    }, {
      name: "\u5BA3\u6C49\u53BF",
      value: "511722",
      parent: "511700"
    }, {
      name: "\u5F00\u6C5F\u53BF",
      value: "511723",
      parent: "511700"
    }, {
      name: "\u5927\u7AF9\u53BF",
      value: "511724",
      parent: "511700"
    }, {
      name: "\u6E20\u53BF",
      value: "511725",
      parent: "511700"
    }, {
      name: "\u4E07\u6E90\u5E02",
      value: "511781",
      parent: "511700"
    }, {
      name: "\u96E8\u57CE\u533A",
      value: "511802",
      parent: "511800"
    }, {
      name: "\u540D\u5C71\u533A",
      value: "511803",
      parent: "511800"
    }, {
      name: "\u8365\u7ECF\u53BF",
      value: "511822",
      parent: "511800"
    }, {
      name: "\u6C49\u6E90\u53BF",
      value: "511823",
      parent: "511800"
    }, {
      name: "\u77F3\u68C9\u53BF",
      value: "511824",
      parent: "511800"
    }, {
      name: "\u5929\u5168\u53BF",
      value: "511825",
      parent: "511800"
    }, {
      name: "\u82A6\u5C71\u53BF",
      value: "511826",
      parent: "511800"
    }, {
      name: "\u5B9D\u5174\u53BF",
      value: "511827",
      parent: "511800"
    }, {
      name: "\u5DF4\u5DDE\u533A",
      value: "511902",
      parent: "511900"
    }, {
      name: "\u6069\u9633\u533A",
      value: "511903",
      parent: "511900"
    }, {
      name: "\u901A\u6C5F\u53BF",
      value: "511921",
      parent: "511900"
    }, {
      name: "\u5357\u6C5F\u53BF",
      value: "511922",
      parent: "511900"
    }, {
      name: "\u5E73\u660C\u53BF",
      value: "511923",
      parent: "511900"
    }, {
      name: "\u96C1\u6C5F\u533A",
      value: "512002",
      parent: "512000"
    }, {
      name: "\u5B89\u5CB3\u53BF",
      value: "512021",
      parent: "512000"
    }, {
      name: "\u4E50\u81F3\u53BF",
      value: "512022",
      parent: "512000"
    }, {
      name: "\u7B80\u9633\u5E02",
      value: "512081",
      parent: "512000"
    }, {
      name: "\u6C76\u5DDD\u53BF",
      value: "513221",
      parent: "513200"
    }, {
      name: "\u7406\u53BF",
      value: "513222",
      parent: "513200"
    }, {
      name: "\u8302\u53BF",
      value: "513223",
      parent: "513200"
    }, {
      name: "\u677E\u6F58\u53BF",
      value: "513224",
      parent: "513200"
    }, {
      name: "\u4E5D\u5BE8\u6C9F\u53BF",
      value: "513225",
      parent: "513200"
    }, {
      name: "\u91D1\u5DDD\u53BF",
      value: "513226",
      parent: "513200"
    }, {
      name: "\u5C0F\u91D1\u53BF",
      value: "513227",
      parent: "513200"
    }, {
      name: "\u9ED1\u6C34\u53BF",
      value: "513228",
      parent: "513200"
    }, {
      name: "\u9A6C\u5C14\u5EB7\u53BF",
      value: "513229",
      parent: "513200"
    }, {
      name: "\u58E4\u5858\u53BF",
      value: "513230",
      parent: "513200"
    }, {
      name: "\u963F\u575D\u53BF",
      value: "513231",
      parent: "513200"
    }, {
      name: "\u82E5\u5C14\u76D6\u53BF",
      value: "513232",
      parent: "513200"
    }, {
      name: "\u7EA2\u539F\u53BF",
      value: "513233",
      parent: "513200"
    }, {
      name: "\u5EB7\u5B9A\u5E02",
      value: "513301",
      parent: "513300"
    }, {
      name: "\u6CF8\u5B9A\u53BF",
      value: "513322",
      parent: "513300"
    }, {
      name: "\u4E39\u5DF4\u53BF",
      value: "513323",
      parent: "513300"
    }, {
      name: "\u4E5D\u9F99\u53BF",
      value: "513324",
      parent: "513300"
    }, {
      name: "\u96C5\u6C5F\u53BF",
      value: "513325",
      parent: "513300"
    }, {
      name: "\u9053\u5B5A\u53BF",
      value: "513326",
      parent: "513300"
    }, {
      name: "\u7089\u970D\u53BF",
      value: "513327",
      parent: "513300"
    }, {
      name: "\u7518\u5B5C\u53BF",
      value: "513328",
      parent: "513300"
    }, {
      name: "\u65B0\u9F99\u53BF",
      value: "513329",
      parent: "513300"
    }, {
      name: "\u5FB7\u683C\u53BF",
      value: "513330",
      parent: "513300"
    }, {
      name: "\u767D\u7389\u53BF",
      value: "513331",
      parent: "513300"
    }, {
      name: "\u77F3\u6E20\u53BF",
      value: "513332",
      parent: "513300"
    }, {
      name: "\u8272\u8FBE\u53BF",
      value: "513333",
      parent: "513300"
    }, {
      name: "\u7406\u5858\u53BF",
      value: "513334",
      parent: "513300"
    }, {
      name: "\u5DF4\u5858\u53BF",
      value: "513335",
      parent: "513300"
    }, {
      name: "\u4E61\u57CE\u53BF",
      value: "513336",
      parent: "513300"
    }, {
      name: "\u7A3B\u57CE\u53BF",
      value: "513337",
      parent: "513300"
    }, {
      name: "\u5F97\u8363\u53BF",
      value: "513338",
      parent: "513300"
    }, {
      name: "\u897F\u660C\u5E02",
      value: "513401",
      parent: "513400"
    }, {
      name: "\u6728\u91CC\u85CF\u65CF\u81EA\u6CBB\u53BF",
      value: "513422",
      parent: "513400"
    }, {
      name: "\u76D0\u6E90\u53BF",
      value: "513423",
      parent: "513400"
    }, {
      name: "\u5FB7\u660C\u53BF",
      value: "513424",
      parent: "513400"
    }, {
      name: "\u4F1A\u7406\u53BF",
      value: "513425",
      parent: "513400"
    }, {
      name: "\u4F1A\u4E1C\u53BF",
      value: "513426",
      parent: "513400"
    }, {
      name: "\u5B81\u5357\u53BF",
      value: "513427",
      parent: "513400"
    }, {
      name: "\u666E\u683C\u53BF",
      value: "513428",
      parent: "513400"
    }, {
      name: "\u5E03\u62D6\u53BF",
      value: "513429",
      parent: "513400"
    }, {
      name: "\u91D1\u9633\u53BF",
      value: "513430",
      parent: "513400"
    }, {
      name: "\u662D\u89C9\u53BF",
      value: "513431",
      parent: "513400"
    }, {
      name: "\u559C\u5FB7\u53BF",
      value: "513432",
      parent: "513400"
    }, {
      name: "\u5195\u5B81\u53BF",
      value: "513433",
      parent: "513400"
    }, {
      name: "\u8D8A\u897F\u53BF",
      value: "513434",
      parent: "513400"
    }, {
      name: "\u7518\u6D1B\u53BF",
      value: "513435",
      parent: "513400"
    }, {
      name: "\u7F8E\u59D1\u53BF",
      value: "513436",
      parent: "513400"
    }, {
      name: "\u96F7\u6CE2\u53BF",
      value: "513437",
      parent: "513400"
    }, {
      name: "\u8D35\u9633\u5E02",
      value: "520100",
      parent: "520000"
    }, {
      name: "\u516D\u76D8\u6C34\u5E02",
      value: "520200",
      parent: "520000"
    }, {
      name: "\u9075\u4E49\u5E02",
      value: "520300",
      parent: "520000"
    }, {
      name: "\u5B89\u987A\u5E02",
      value: "520400",
      parent: "520000"
    }, {
      name: "\u6BD5\u8282\u5E02",
      value: "520500",
      parent: "520000"
    }, {
      name: "\u94DC\u4EC1\u5E02",
      value: "520600",
      parent: "520000"
    }, {
      name: "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      value: "522300",
      parent: "520000"
    }, {
      name: "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",
      value: "522600",
      parent: "520000"
    }, {
      name: "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      value: "522700",
      parent: "520000"
    }, {
      name: "\u5357\u660E\u533A",
      value: "520102",
      parent: "520100"
    }, {
      name: "\u4E91\u5CA9\u533A",
      value: "520103",
      parent: "520100"
    }, {
      name: "\u82B1\u6EAA\u533A",
      value: "520111",
      parent: "520100"
    }, {
      name: "\u4E4C\u5F53\u533A",
      value: "520112",
      parent: "520100"
    }, {
      name: "\u767D\u4E91\u533A",
      value: "520113",
      parent: "520100"
    }, {
      name: "\u89C2\u5C71\u6E56\u533A",
      value: "520115",
      parent: "520100"
    }, {
      name: "\u5F00\u9633\u53BF",
      value: "520121",
      parent: "520100"
    }, {
      name: "\u606F\u70FD\u53BF",
      value: "520122",
      parent: "520100"
    }, {
      name: "\u4FEE\u6587\u53BF",
      value: "520123",
      parent: "520100"
    }, {
      name: "\u6E05\u9547\u5E02",
      value: "520181",
      parent: "520100"
    }, {
      name: "\u949F\u5C71\u533A",
      value: "520201",
      parent: "520200"
    }, {
      name: "\u516D\u679D\u7279\u533A",
      value: "520203",
      parent: "520200"
    }, {
      name: "\u6C34\u57CE\u53BF",
      value: "520221",
      parent: "520200"
    }, {
      name: "\u76D8\u53BF",
      value: "520222",
      parent: "520200"
    }, {
      name: "\u7EA2\u82B1\u5C97\u533A",
      value: "520302",
      parent: "520300"
    }, {
      name: "\u6C47\u5DDD\u533A",
      value: "520303",
      parent: "520300"
    }, {
      name: "\u9075\u4E49\u53BF",
      value: "520321",
      parent: "520300"
    }, {
      name: "\u6850\u6893\u53BF",
      value: "520322",
      parent: "520300"
    }, {
      name: "\u7EE5\u9633\u53BF",
      value: "520323",
      parent: "520300"
    }, {
      name: "\u6B63\u5B89\u53BF",
      value: "520324",
      parent: "520300"
    }, {
      name: "\u9053\u771F\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "520325",
      parent: "520300"
    }, {
      name: "\u52A1\u5DDD\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "520326",
      parent: "520300"
    }, {
      name: "\u51E4\u5188\u53BF",
      value: "520327",
      parent: "520300"
    }, {
      name: "\u6E44\u6F6D\u53BF",
      value: "520328",
      parent: "520300"
    }, {
      name: "\u4F59\u5E86\u53BF",
      value: "520329",
      parent: "520300"
    }, {
      name: "\u4E60\u6C34\u53BF",
      value: "520330",
      parent: "520300"
    }, {
      name: "\u8D64\u6C34\u5E02",
      value: "520381",
      parent: "520300"
    }, {
      name: "\u4EC1\u6000\u5E02",
      value: "520382",
      parent: "520300"
    }, {
      name: "\u897F\u79C0\u533A",
      value: "520402",
      parent: "520400"
    }, {
      name: "\u5E73\u575D\u533A",
      value: "520403",
      parent: "520400"
    }, {
      name: "\u666E\u5B9A\u53BF",
      value: "520422",
      parent: "520400"
    }, {
      name: "\u9547\u5B81\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "520423",
      parent: "520400"
    }, {
      name: "\u5173\u5CAD\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "520424",
      parent: "520400"
    }, {
      name: "\u7D2B\u4E91\u82D7\u65CF\u5E03\u4F9D\u65CF\u81EA\u6CBB\u53BF",
      value: "520425",
      parent: "520400"
    }, {
      name: "\u4E03\u661F\u5173\u533A",
      value: "520502",
      parent: "520500"
    }, {
      name: "\u5927\u65B9\u53BF",
      value: "520521",
      parent: "520500"
    }, {
      name: "\u9ED4\u897F\u53BF",
      value: "520522",
      parent: "520500"
    }, {
      name: "\u91D1\u6C99\u53BF",
      value: "520523",
      parent: "520500"
    }, {
      name: "\u7EC7\u91D1\u53BF",
      value: "520524",
      parent: "520500"
    }, {
      name: "\u7EB3\u96CD\u53BF",
      value: "520525",
      parent: "520500"
    }, {
      name: "\u5A01\u5B81\u5F5D\u65CF\u56DE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "520526",
      parent: "520500"
    }, {
      name: "\u8D6B\u7AE0\u53BF",
      value: "520527",
      parent: "520500"
    }, {
      name: "\u78A7\u6C5F\u533A",
      value: "520602",
      parent: "520600"
    }, {
      name: "\u4E07\u5C71\u533A",
      value: "520603",
      parent: "520600"
    }, {
      name: "\u6C5F\u53E3\u53BF",
      value: "520621",
      parent: "520600"
    }, {
      name: "\u7389\u5C4F\u4F97\u65CF\u81EA\u6CBB\u53BF",
      value: "520622",
      parent: "520600"
    }, {
      name: "\u77F3\u9621\u53BF",
      value: "520623",
      parent: "520600"
    }, {
      name: "\u601D\u5357\u53BF",
      value: "520624",
      parent: "520600"
    }, {
      name: "\u5370\u6C5F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "520625",
      parent: "520600"
    }, {
      name: "\u5FB7\u6C5F\u53BF",
      value: "520626",
      parent: "520600"
    }, {
      name: "\u6CBF\u6CB3\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
      value: "520627",
      parent: "520600"
    }, {
      name: "\u677E\u6843\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "520628",
      parent: "520600"
    }, {
      name: "\u5174\u4E49\u5E02",
      value: "522301",
      parent: "522300"
    }, {
      name: "\u5174\u4EC1\u53BF",
      value: "522322",
      parent: "522300"
    }, {
      name: "\u666E\u5B89\u53BF",
      value: "522323",
      parent: "522300"
    }, {
      name: "\u6674\u9686\u53BF",
      value: "522324",
      parent: "522300"
    }, {
      name: "\u8D1E\u4E30\u53BF",
      value: "522325",
      parent: "522300"
    }, {
      name: "\u671B\u8C1F\u53BF",
      value: "522326",
      parent: "522300"
    }, {
      name: "\u518C\u4EA8\u53BF",
      value: "522327",
      parent: "522300"
    }, {
      name: "\u5B89\u9F99\u53BF",
      value: "522328",
      parent: "522300"
    }, {
      name: "\u51EF\u91CC\u5E02",
      value: "522601",
      parent: "522600"
    }, {
      name: "\u9EC4\u5E73\u53BF",
      value: "522622",
      parent: "522600"
    }, {
      name: "\u65BD\u79C9\u53BF",
      value: "522623",
      parent: "522600"
    }, {
      name: "\u4E09\u7A57\u53BF",
      value: "522624",
      parent: "522600"
    }, {
      name: "\u9547\u8FDC\u53BF",
      value: "522625",
      parent: "522600"
    }, {
      name: "\u5C91\u5DE9\u53BF",
      value: "522626",
      parent: "522600"
    }, {
      name: "\u5929\u67F1\u53BF",
      value: "522627",
      parent: "522600"
    }, {
      name: "\u9526\u5C4F\u53BF",
      value: "522628",
      parent: "522600"
    }, {
      name: "\u5251\u6CB3\u53BF",
      value: "522629",
      parent: "522600"
    }, {
      name: "\u53F0\u6C5F\u53BF",
      value: "522630",
      parent: "522600"
    }, {
      name: "\u9ECE\u5E73\u53BF",
      value: "522631",
      parent: "522600"
    }, {
      name: "\u6995\u6C5F\u53BF",
      value: "522632",
      parent: "522600"
    }, {
      name: "\u4ECE\u6C5F\u53BF",
      value: "522633",
      parent: "522600"
    }, {
      name: "\u96F7\u5C71\u53BF",
      value: "522634",
      parent: "522600"
    }, {
      name: "\u9EBB\u6C5F\u53BF",
      value: "522635",
      parent: "522600"
    }, {
      name: "\u4E39\u5BE8\u53BF",
      value: "522636",
      parent: "522600"
    }, {
      name: "\u90FD\u5300\u5E02",
      value: "522701",
      parent: "522700"
    }, {
      name: "\u798F\u6CC9\u5E02",
      value: "522702",
      parent: "522700"
    }, {
      name: "\u8354\u6CE2\u53BF",
      value: "522722",
      parent: "522700"
    }, {
      name: "\u8D35\u5B9A\u53BF",
      value: "522723",
      parent: "522700"
    }, {
      name: "\u74EE\u5B89\u53BF",
      value: "522725",
      parent: "522700"
    }, {
      name: "\u72EC\u5C71\u53BF",
      value: "522726",
      parent: "522700"
    }, {
      name: "\u5E73\u5858\u53BF",
      value: "522727",
      parent: "522700"
    }, {
      name: "\u7F57\u7538\u53BF",
      value: "522728",
      parent: "522700"
    }, {
      name: "\u957F\u987A\u53BF",
      value: "522729",
      parent: "522700"
    }, {
      name: "\u9F99\u91CC\u53BF",
      value: "522730",
      parent: "522700"
    }, {
      name: "\u60E0\u6C34\u53BF",
      value: "522731",
      parent: "522700"
    }, {
      name: "\u4E09\u90FD\u6C34\u65CF\u81EA\u6CBB\u53BF",
      value: "522732",
      parent: "522700"
    }, {
      name: "\u6606\u660E\u5E02",
      value: "530100",
      parent: "530000"
    }, {
      name: "\u66F2\u9756\u5E02",
      value: "530300",
      parent: "530000"
    }, {
      name: "\u7389\u6EAA\u5E02",
      value: "530400",
      parent: "530000"
    }, {
      name: "\u4FDD\u5C71\u5E02",
      value: "530500",
      parent: "530000"
    }, {
      name: "\u662D\u901A\u5E02",
      value: "530600",
      parent: "530000"
    }, {
      name: "\u4E3D\u6C5F\u5E02",
      value: "530700",
      parent: "530000"
    }, {
      name: "\u666E\u6D31\u5E02",
      value: "530800",
      parent: "530000"
    }, {
      name: "\u4E34\u6CA7\u5E02",
      value: "530900",
      parent: "530000"
    }, {
      name: "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
      value: "532300",
      parent: "530000"
    }, {
      name: "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
      value: "532500",
      parent: "530000"
    }, {
      name: "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      value: "532600",
      parent: "530000"
    }, {
      name: "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",
      value: "532800",
      parent: "530000"
    }, {
      name: "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",
      value: "532900",
      parent: "530000"
    }, {
      name: "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",
      value: "533100",
      parent: "530000"
    }, {
      name: "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",
      value: "533300",
      parent: "530000"
    }, {
      name: "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "533400",
      parent: "530000"
    }, {
      name: "\u4E94\u534E\u533A",
      value: "530102",
      parent: "530100"
    }, {
      name: "\u76D8\u9F99\u533A",
      value: "530103",
      parent: "530100"
    }, {
      name: "\u5B98\u6E21\u533A",
      value: "530111",
      parent: "530100"
    }, {
      name: "\u897F\u5C71\u533A",
      value: "530112",
      parent: "530100"
    }, {
      name: "\u4E1C\u5DDD\u533A",
      value: "530113",
      parent: "530100"
    }, {
      name: "\u5448\u8D21\u533A",
      value: "530114",
      parent: "530100"
    }, {
      name: "\u664B\u5B81\u53BF",
      value: "530122",
      parent: "530100"
    }, {
      name: "\u5BCC\u6C11\u53BF",
      value: "530124",
      parent: "530100"
    }, {
      name: "\u5B9C\u826F\u53BF",
      value: "530125",
      parent: "530100"
    }, {
      name: "\u77F3\u6797\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "530126",
      parent: "530100"
    }, {
      name: "\u5D69\u660E\u53BF",
      value: "530127",
      parent: "530100"
    }, {
      name: "\u7984\u529D\u5F5D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "530128",
      parent: "530100"
    }, {
      name: "\u5BFB\u7538\u56DE\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "530129",
      parent: "530100"
    }, {
      name: "\u5B89\u5B81\u5E02",
      value: "530181",
      parent: "530100"
    }, {
      name: "\u9E92\u9E9F\u533A",
      value: "530302",
      parent: "530300"
    }, {
      name: "\u9A6C\u9F99\u53BF",
      value: "530321",
      parent: "530300"
    }, {
      name: "\u9646\u826F\u53BF",
      value: "530322",
      parent: "530300"
    }, {
      name: "\u5E08\u5B97\u53BF",
      value: "530323",
      parent: "530300"
    }, {
      name: "\u7F57\u5E73\u53BF",
      value: "530324",
      parent: "530300"
    }, {
      name: "\u5BCC\u6E90\u53BF",
      value: "530325",
      parent: "530300"
    }, {
      name: "\u4F1A\u6CFD\u53BF",
      value: "530326",
      parent: "530300"
    }, {
      name: "\u6CBE\u76CA\u53BF",
      value: "530328",
      parent: "530300"
    }, {
      name: "\u5BA3\u5A01\u5E02",
      value: "530381",
      parent: "530300"
    }, {
      name: "\u7EA2\u5854\u533A",
      value: "530402",
      parent: "530400"
    }, {
      name: "\u6C5F\u5DDD\u53BF",
      value: "530421",
      parent: "530400"
    }, {
      name: "\u6F84\u6C5F\u53BF",
      value: "530422",
      parent: "530400"
    }, {
      name: "\u901A\u6D77\u53BF",
      value: "530423",
      parent: "530400"
    }, {
      name: "\u534E\u5B81\u53BF",
      value: "530424",
      parent: "530400"
    }, {
      name: "\u6613\u95E8\u53BF",
      value: "530425",
      parent: "530400"
    }, {
      name: "\u5CE8\u5C71\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "530426",
      parent: "530400"
    }, {
      name: "\u65B0\u5E73\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF",
      value: "530427",
      parent: "530400"
    }, {
      name: "\u5143\u6C5F\u54C8\u5C3C\u65CF\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF",
      value: "530428",
      parent: "530400"
    }, {
      name: "\u9686\u9633\u533A",
      value: "530502",
      parent: "530500"
    }, {
      name: "\u65BD\u7538\u53BF",
      value: "530521",
      parent: "530500"
    }, {
      name: "\u9F99\u9675\u53BF",
      value: "530523",
      parent: "530500"
    }, {
      name: "\u660C\u5B81\u53BF",
      value: "530524",
      parent: "530500"
    }, {
      name: "\u817E\u51B2\u5E02",
      value: "530581",
      parent: "530500"
    }, {
      name: "\u662D\u9633\u533A",
      value: "530602",
      parent: "530600"
    }, {
      name: "\u9C81\u7538\u53BF",
      value: "530621",
      parent: "530600"
    }, {
      name: "\u5DE7\u5BB6\u53BF",
      value: "530622",
      parent: "530600"
    }, {
      name: "\u76D0\u6D25\u53BF",
      value: "530623",
      parent: "530600"
    }, {
      name: "\u5927\u5173\u53BF",
      value: "530624",
      parent: "530600"
    }, {
      name: "\u6C38\u5584\u53BF",
      value: "530625",
      parent: "530600"
    }, {
      name: "\u7EE5\u6C5F\u53BF",
      value: "530626",
      parent: "530600"
    }, {
      name: "\u9547\u96C4\u53BF",
      value: "530627",
      parent: "530600"
    }, {
      name: "\u5F5D\u826F\u53BF",
      value: "530628",
      parent: "530600"
    }, {
      name: "\u5A01\u4FE1\u53BF",
      value: "530629",
      parent: "530600"
    }, {
      name: "\u6C34\u5BCC\u53BF",
      value: "530630",
      parent: "530600"
    }, {
      name: "\u53E4\u57CE\u533A",
      value: "530702",
      parent: "530700"
    }, {
      name: "\u7389\u9F99\u7EB3\u897F\u65CF\u81EA\u6CBB\u53BF",
      value: "530721",
      parent: "530700"
    }, {
      name: "\u6C38\u80DC\u53BF",
      value: "530722",
      parent: "530700"
    }, {
      name: "\u534E\u576A\u53BF",
      value: "530723",
      parent: "530700"
    }, {
      name: "\u5B81\u8497\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "530724",
      parent: "530700"
    }, {
      name: "\u601D\u8305\u533A",
      value: "530802",
      parent: "530800"
    }, {
      name: "\u5B81\u6D31\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "530821",
      parent: "530800"
    }, {
      name: "\u58A8\u6C5F\u54C8\u5C3C\u65CF\u81EA\u6CBB\u53BF",
      value: "530822",
      parent: "530800"
    }, {
      name: "\u666F\u4E1C\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "530823",
      parent: "530800"
    }, {
      name: "\u666F\u8C37\u50A3\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "530824",
      parent: "530800"
    }, {
      name: "\u9547\u6C85\u5F5D\u65CF\u54C8\u5C3C\u65CF\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF",
      value: "530825",
      parent: "530800"
    }, {
      name: "\u6C5F\u57CE\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "530826",
      parent: "530800"
    }, {
      name: "\u5B5F\u8FDE\u50A3\u65CF\u62C9\u795C\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF",
      value: "530827",
      parent: "530800"
    }, {
      name: "\u6F9C\u6CA7\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF",
      value: "530828",
      parent: "530800"
    }, {
      name: "\u897F\u76DF\u4F64\u65CF\u81EA\u6CBB\u53BF",
      value: "530829",
      parent: "530800"
    }, {
      name: "\u4E34\u7FD4\u533A",
      value: "530902",
      parent: "530900"
    }, {
      name: "\u51E4\u5E86\u53BF",
      value: "530921",
      parent: "530900"
    }, {
      name: "\u4E91\u53BF",
      value: "530922",
      parent: "530900"
    }, {
      name: "\u6C38\u5FB7\u53BF",
      value: "530923",
      parent: "530900"
    }, {
      name: "\u9547\u5EB7\u53BF",
      value: "530924",
      parent: "530900"
    }, {
      name: "\u53CC\u6C5F\u62C9\u795C\u65CF\u4F64\u65CF\u5E03\u6717\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF",
      value: "530925",
      parent: "530900"
    }, {
      name: "\u803F\u9A6C\u50A3\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF",
      value: "530926",
      parent: "530900"
    }, {
      name: "\u6CA7\u6E90\u4F64\u65CF\u81EA\u6CBB\u53BF",
      value: "530927",
      parent: "530900"
    }, {
      name: "\u695A\u96C4\u5E02",
      value: "532301",
      parent: "532300"
    }, {
      name: "\u53CC\u67CF\u53BF",
      value: "532322",
      parent: "532300"
    }, {
      name: "\u725F\u5B9A\u53BF",
      value: "532323",
      parent: "532300"
    }, {
      name: "\u5357\u534E\u53BF",
      value: "532324",
      parent: "532300"
    }, {
      name: "\u59DA\u5B89\u53BF",
      value: "532325",
      parent: "532300"
    }, {
      name: "\u5927\u59DA\u53BF",
      value: "532326",
      parent: "532300"
    }, {
      name: "\u6C38\u4EC1\u53BF",
      value: "532327",
      parent: "532300"
    }, {
      name: "\u5143\u8C0B\u53BF",
      value: "532328",
      parent: "532300"
    }, {
      name: "\u6B66\u5B9A\u53BF",
      value: "532329",
      parent: "532300"
    }, {
      name: "\u7984\u4E30\u53BF",
      value: "532331",
      parent: "532300"
    }, {
      name: "\u4E2A\u65E7\u5E02",
      value: "532501",
      parent: "532500"
    }, {
      name: "\u5F00\u8FDC\u5E02",
      value: "532502",
      parent: "532500"
    }, {
      name: "\u8499\u81EA\u5E02",
      value: "532503",
      parent: "532500"
    }, {
      name: "\u5F25\u52D2\u5E02",
      value: "532504",
      parent: "532500"
    }, {
      name: "\u5C4F\u8FB9\u82D7\u65CF\u81EA\u6CBB\u53BF",
      value: "532523",
      parent: "532500"
    }, {
      name: "\u5EFA\u6C34\u53BF",
      value: "532524",
      parent: "532500"
    }, {
      name: "\u77F3\u5C4F\u53BF",
      value: "532525",
      parent: "532500"
    }, {
      name: "\u6CF8\u897F\u53BF",
      value: "532527",
      parent: "532500"
    }, {
      name: "\u5143\u9633\u53BF",
      value: "532528",
      parent: "532500"
    }, {
      name: "\u7EA2\u6CB3\u53BF",
      value: "532529",
      parent: "532500"
    }, {
      name: "\u91D1\u5E73\u82D7\u65CF\u7476\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF",
      value: "532530",
      parent: "532500"
    }, {
      name: "\u7EFF\u6625\u53BF",
      value: "532531",
      parent: "532500"
    }, {
      name: "\u6CB3\u53E3\u7476\u65CF\u81EA\u6CBB\u53BF",
      value: "532532",
      parent: "532500"
    }, {
      name: "\u6587\u5C71\u5E02",
      value: "532601",
      parent: "532600"
    }, {
      name: "\u781A\u5C71\u53BF",
      value: "532622",
      parent: "532600"
    }, {
      name: "\u897F\u7574\u53BF",
      value: "532623",
      parent: "532600"
    }, {
      name: "\u9EBB\u6817\u5761\u53BF",
      value: "532624",
      parent: "532600"
    }, {
      name: "\u9A6C\u5173\u53BF",
      value: "532625",
      parent: "532600"
    }, {
      name: "\u4E18\u5317\u53BF",
      value: "532626",
      parent: "532600"
    }, {
      name: "\u5E7F\u5357\u53BF",
      value: "532627",
      parent: "532600"
    }, {
      name: "\u5BCC\u5B81\u53BF",
      value: "532628",
      parent: "532600"
    }, {
      name: "\u666F\u6D2A\u5E02",
      value: "532801",
      parent: "532800"
    }, {
      name: "\u52D0\u6D77\u53BF",
      value: "532822",
      parent: "532800"
    }, {
      name: "\u52D0\u814A\u53BF",
      value: "532823",
      parent: "532800"
    }, {
      name: "\u5927\u7406\u5E02",
      value: "532901",
      parent: "532900"
    }, {
      name: "\u6F3E\u6FDE\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "532922",
      parent: "532900"
    }, {
      name: "\u7965\u4E91\u53BF",
      value: "532923",
      parent: "532900"
    }, {
      name: "\u5BBE\u5DDD\u53BF",
      value: "532924",
      parent: "532900"
    }, {
      name: "\u5F25\u6E21\u53BF",
      value: "532925",
      parent: "532900"
    }, {
      name: "\u5357\u6DA7\u5F5D\u65CF\u81EA\u6CBB\u53BF",
      value: "532926",
      parent: "532900"
    }, {
      name: "\u5DCD\u5C71\u5F5D\u65CF\u56DE\u65CF\u81EA\u6CBB\u53BF",
      value: "532927",
      parent: "532900"
    }, {
      name: "\u6C38\u5E73\u53BF",
      value: "532928",
      parent: "532900"
    }, {
      name: "\u4E91\u9F99\u53BF",
      value: "532929",
      parent: "532900"
    }, {
      name: "\u6D31\u6E90\u53BF",
      value: "532930",
      parent: "532900"
    }, {
      name: "\u5251\u5DDD\u53BF",
      value: "532931",
      parent: "532900"
    }, {
      name: "\u9E64\u5E86\u53BF",
      value: "532932",
      parent: "532900"
    }, {
      name: "\u745E\u4E3D\u5E02",
      value: "533102",
      parent: "533100"
    }, {
      name: "\u8292\u5E02",
      value: "533103",
      parent: "533100"
    }, {
      name: "\u6881\u6CB3\u53BF",
      value: "533122",
      parent: "533100"
    }, {
      name: "\u76C8\u6C5F\u53BF",
      value: "533123",
      parent: "533100"
    }, {
      name: "\u9647\u5DDD\u53BF",
      value: "533124",
      parent: "533100"
    }, {
      name: "\u6CF8\u6C34\u53BF",
      value: "533321",
      parent: "533300"
    }, {
      name: "\u798F\u8D21\u53BF",
      value: "533323",
      parent: "533300"
    }, {
      name: "\u8D21\u5C71\u72EC\u9F99\u65CF\u6012\u65CF\u81EA\u6CBB\u53BF",
      value: "533324",
      parent: "533300"
    }, {
      name: "\u5170\u576A\u767D\u65CF\u666E\u7C73\u65CF\u81EA\u6CBB\u53BF",
      value: "533325",
      parent: "533300"
    }, {
      name: "\u9999\u683C\u91CC\u62C9\u5E02",
      value: "533401",
      parent: "533400"
    }, {
      name: "\u5FB7\u94A6\u53BF",
      value: "533422",
      parent: "533400"
    }, {
      name: "\u7EF4\u897F\u5088\u50F3\u65CF\u81EA\u6CBB\u53BF",
      value: "533423",
      parent: "533400"
    }, {
      name: "\u62C9\u8428\u5E02",
      value: "540100",
      parent: "540000"
    }, {
      name: "\u65E5\u5580\u5219\u5E02",
      value: "540200",
      parent: "540000"
    }, {
      name: "\u660C\u90FD\u5E02",
      value: "540300",
      parent: "540000"
    }, {
      name: "\u6797\u829D\u5E02",
      value: "540400",
      parent: "540000"
    }, {
      name: "\u5C71\u5357\u5730\u533A",
      value: "542200",
      parent: "540000"
    }, {
      name: "\u90A3\u66F2\u5730\u533A",
      value: "542400",
      parent: "540000"
    }, {
      name: "\u963F\u91CC\u5730\u533A",
      value: "542500",
      parent: "540000"
    }, {
      name: "\u57CE\u5173\u533A",
      value: "540102",
      parent: "540100"
    }, {
      name: "\u6797\u5468\u53BF",
      value: "540121",
      parent: "540100"
    }, {
      name: "\u5F53\u96C4\u53BF",
      value: "540122",
      parent: "540100"
    }, {
      name: "\u5C3C\u6728\u53BF",
      value: "540123",
      parent: "540100"
    }, {
      name: "\u66F2\u6C34\u53BF",
      value: "540124",
      parent: "540100"
    }, {
      name: "\u5806\u9F99\u5FB7\u5E86\u53BF",
      value: "540125",
      parent: "540100"
    }, {
      name: "\u8FBE\u5B5C\u53BF",
      value: "540126",
      parent: "540100"
    }, {
      name: "\u58A8\u7AF9\u5DE5\u5361\u53BF",
      value: "540127",
      parent: "540100"
    }, {
      name: "\u6851\u73E0\u5B5C\u533A",
      value: "540202",
      parent: "540200"
    }, {
      name: "\u5357\u6728\u6797\u53BF",
      value: "540221",
      parent: "540200"
    }, {
      name: "\u6C5F\u5B5C\u53BF",
      value: "540222",
      parent: "540200"
    }, {
      name: "\u5B9A\u65E5\u53BF",
      value: "540223",
      parent: "540200"
    }, {
      name: "\u8428\u8FE6\u53BF",
      value: "540224",
      parent: "540200"
    }, {
      name: "\u62C9\u5B5C\u53BF",
      value: "540225",
      parent: "540200"
    }, {
      name: "\u6602\u4EC1\u53BF",
      value: "540226",
      parent: "540200"
    }, {
      name: "\u8C22\u901A\u95E8\u53BF",
      value: "540227",
      parent: "540200"
    }, {
      name: "\u767D\u6717\u53BF",
      value: "540228",
      parent: "540200"
    }, {
      name: "\u4EC1\u5E03\u53BF",
      value: "540229",
      parent: "540200"
    }, {
      name: "\u5EB7\u9A6C\u53BF",
      value: "540230",
      parent: "540200"
    }, {
      name: "\u5B9A\u7ED3\u53BF",
      value: "540231",
      parent: "540200"
    }, {
      name: "\u4EF2\u5DF4\u53BF",
      value: "540232",
      parent: "540200"
    }, {
      name: "\u4E9A\u4E1C\u53BF",
      value: "540233",
      parent: "540200"
    }, {
      name: "\u5409\u9686\u53BF",
      value: "540234",
      parent: "540200"
    }, {
      name: "\u8042\u62C9\u6728\u53BF",
      value: "540235",
      parent: "540200"
    }, {
      name: "\u8428\u560E\u53BF",
      value: "540236",
      parent: "540200"
    }, {
      name: "\u5C97\u5DF4\u53BF",
      value: "540237",
      parent: "540200"
    }, {
      name: "\u5361\u82E5\u533A",
      value: "540302",
      parent: "540300"
    }, {
      name: "\u6C5F\u8FBE\u53BF",
      value: "540321",
      parent: "540300"
    }, {
      name: "\u8D21\u89C9\u53BF",
      value: "540322",
      parent: "540300"
    }, {
      name: "\u7C7B\u4E4C\u9F50\u53BF",
      value: "540323",
      parent: "540300"
    }, {
      name: "\u4E01\u9752\u53BF",
      value: "540324",
      parent: "540300"
    }, {
      name: "\u5BDF\u96C5\u53BF",
      value: "540325",
      parent: "540300"
    }, {
      name: "\u516B\u5BBF\u53BF",
      value: "540326",
      parent: "540300"
    }, {
      name: "\u5DE6\u8D21\u53BF",
      value: "540327",
      parent: "540300"
    }, {
      name: "\u8292\u5EB7\u53BF",
      value: "540328",
      parent: "540300"
    }, {
      name: "\u6D1B\u9686\u53BF",
      value: "540329",
      parent: "540300"
    }, {
      name: "\u8FB9\u575D\u53BF",
      value: "540330",
      parent: "540300"
    }, {
      name: "\u5DF4\u5B9C\u533A",
      value: "540402",
      parent: "540400"
    }, {
      name: "\u5DE5\u5E03\u6C5F\u8FBE\u53BF",
      value: "540421",
      parent: "540400"
    }, {
      name: "\u7C73\u6797\u53BF",
      value: "540422",
      parent: "540400"
    }, {
      name: "\u58A8\u8131\u53BF",
      value: "540423",
      parent: "540400"
    }, {
      name: "\u6CE2\u5BC6\u53BF",
      value: "540424",
      parent: "540400"
    }, {
      name: "\u5BDF\u9685\u53BF",
      value: "540425",
      parent: "540400"
    }, {
      name: "\u6717\u53BF",
      value: "540426",
      parent: "540400"
    }, {
      name: "\u4E43\u4E1C\u53BF",
      value: "542221",
      parent: "542200"
    }, {
      name: "\u624E\u56CA\u53BF",
      value: "542222",
      parent: "542200"
    }, {
      name: "\u8D21\u560E\u53BF",
      value: "542223",
      parent: "542200"
    }, {
      name: "\u6851\u65E5\u53BF",
      value: "542224",
      parent: "542200"
    }, {
      name: "\u743C\u7ED3\u53BF",
      value: "542225",
      parent: "542200"
    }, {
      name: "\u66F2\u677E\u53BF",
      value: "542226",
      parent: "542200"
    }, {
      name: "\u63AA\u7F8E\u53BF",
      value: "542227",
      parent: "542200"
    }, {
      name: "\u6D1B\u624E\u53BF",
      value: "542228",
      parent: "542200"
    }, {
      name: "\u52A0\u67E5\u53BF",
      value: "542229",
      parent: "542200"
    }, {
      name: "\u9686\u5B50\u53BF",
      value: "542231",
      parent: "542200"
    }, {
      name: "\u9519\u90A3\u53BF",
      value: "542232",
      parent: "542200"
    }, {
      name: "\u6D6A\u5361\u5B50\u53BF",
      value: "542233",
      parent: "542200"
    }, {
      name: "\u90A3\u66F2\u53BF",
      value: "542421",
      parent: "542400"
    }, {
      name: "\u5609\u9ECE\u53BF",
      value: "542422",
      parent: "542400"
    }, {
      name: "\u6BD4\u5982\u53BF",
      value: "542423",
      parent: "542400"
    }, {
      name: "\u8042\u8363\u53BF",
      value: "542424",
      parent: "542400"
    }, {
      name: "\u5B89\u591A\u53BF",
      value: "542425",
      parent: "542400"
    }, {
      name: "\u7533\u624E\u53BF",
      value: "542426",
      parent: "542400"
    }, {
      name: "\u7D22\u53BF",
      value: "542427",
      parent: "542400"
    }, {
      name: "\u73ED\u6208\u53BF",
      value: "542428",
      parent: "542400"
    }, {
      name: "\u5DF4\u9752\u53BF",
      value: "542429",
      parent: "542400"
    }, {
      name: "\u5C3C\u739B\u53BF",
      value: "542430",
      parent: "542400"
    }, {
      name: "\u53CC\u6E56\u53BF",
      value: "542431",
      parent: "542400"
    }, {
      name: "\u666E\u5170\u53BF",
      value: "542521",
      parent: "542500"
    }, {
      name: "\u672D\u8FBE\u53BF",
      value: "542522",
      parent: "542500"
    }, {
      name: "\u5676\u5C14\u53BF",
      value: "542523",
      parent: "542500"
    }, {
      name: "\u65E5\u571F\u53BF",
      value: "542524",
      parent: "542500"
    }, {
      name: "\u9769\u5409\u53BF",
      value: "542525",
      parent: "542500"
    }, {
      name: "\u6539\u5219\u53BF",
      value: "542526",
      parent: "542500"
    }, {
      name: "\u63AA\u52E4\u53BF",
      value: "542527",
      parent: "542500"
    }, {
      name: "\u897F\u5B89\u5E02",
      value: "610100",
      parent: "610000"
    }, {
      name: "\u94DC\u5DDD\u5E02",
      value: "610200",
      parent: "610000"
    }, {
      name: "\u5B9D\u9E21\u5E02",
      value: "610300",
      parent: "610000"
    }, {
      name: "\u54B8\u9633\u5E02",
      value: "610400",
      parent: "610000"
    }, {
      name: "\u6E2D\u5357\u5E02",
      value: "610500",
      parent: "610000"
    }, {
      name: "\u5EF6\u5B89\u5E02",
      value: "610600",
      parent: "610000"
    }, {
      name: "\u6C49\u4E2D\u5E02",
      value: "610700",
      parent: "610000"
    }, {
      name: "\u6986\u6797\u5E02",
      value: "610800",
      parent: "610000"
    }, {
      name: "\u5B89\u5EB7\u5E02",
      value: "610900",
      parent: "610000"
    }, {
      name: "\u5546\u6D1B\u5E02",
      value: "611000",
      parent: "610000"
    }, {
      name: "\u65B0\u57CE\u533A",
      value: "610102",
      parent: "610100"
    }, {
      name: "\u7891\u6797\u533A",
      value: "610103",
      parent: "610100"
    }, {
      name: "\u83B2\u6E56\u533A",
      value: "610104",
      parent: "610100"
    }, {
      name: "\u705E\u6865\u533A",
      value: "610111",
      parent: "610100"
    }, {
      name: "\u672A\u592E\u533A",
      value: "610112",
      parent: "610100"
    }, {
      name: "\u96C1\u5854\u533A",
      value: "610113",
      parent: "610100"
    }, {
      name: "\u960E\u826F\u533A",
      value: "610114",
      parent: "610100"
    }, {
      name: "\u4E34\u6F7C\u533A",
      value: "610115",
      parent: "610100"
    }, {
      name: "\u957F\u5B89\u533A",
      value: "610116",
      parent: "610100"
    }, {
      name: "\u9AD8\u9675\u533A",
      value: "610117",
      parent: "610100"
    }, {
      name: "\u84DD\u7530\u53BF",
      value: "610122",
      parent: "610100"
    }, {
      name: "\u5468\u81F3\u53BF",
      value: "610124",
      parent: "610100"
    }, {
      name: "\u6237\u53BF",
      value: "610125",
      parent: "610100"
    }, {
      name: "\u738B\u76CA\u533A",
      value: "610202",
      parent: "610200"
    }, {
      name: "\u5370\u53F0\u533A",
      value: "610203",
      parent: "610200"
    }, {
      name: "\u8000\u5DDE\u533A",
      value: "610204",
      parent: "610200"
    }, {
      name: "\u5B9C\u541B\u53BF",
      value: "610222",
      parent: "610200"
    }, {
      name: "\u6E2D\u6EE8\u533A",
      value: "610302",
      parent: "610300"
    }, {
      name: "\u91D1\u53F0\u533A",
      value: "610303",
      parent: "610300"
    }, {
      name: "\u9648\u4ED3\u533A",
      value: "610304",
      parent: "610300"
    }, {
      name: "\u51E4\u7FD4\u53BF",
      value: "610322",
      parent: "610300"
    }, {
      name: "\u5C90\u5C71\u53BF",
      value: "610323",
      parent: "610300"
    }, {
      name: "\u6276\u98CE\u53BF",
      value: "610324",
      parent: "610300"
    }, {
      name: "\u7709\u53BF",
      value: "610326",
      parent: "610300"
    }, {
      name: "\u9647\u53BF",
      value: "610327",
      parent: "610300"
    }, {
      name: "\u5343\u9633\u53BF",
      value: "610328",
      parent: "610300"
    }, {
      name: "\u9E9F\u6E38\u53BF",
      value: "610329",
      parent: "610300"
    }, {
      name: "\u51E4\u53BF",
      value: "610330",
      parent: "610300"
    }, {
      name: "\u592A\u767D\u53BF",
      value: "610331",
      parent: "610300"
    }, {
      name: "\u79E6\u90FD\u533A",
      value: "610402",
      parent: "610400"
    }, {
      name: "\u6768\u9675\u533A",
      value: "610403",
      parent: "610400"
    }, {
      name: "\u6E2D\u57CE\u533A",
      value: "610404",
      parent: "610400"
    }, {
      name: "\u4E09\u539F\u53BF",
      value: "610422",
      parent: "610400"
    }, {
      name: "\u6CFE\u9633\u53BF",
      value: "610423",
      parent: "610400"
    }, {
      name: "\u4E7E\u53BF",
      value: "610424",
      parent: "610400"
    }, {
      name: "\u793C\u6CC9\u53BF",
      value: "610425",
      parent: "610400"
    }, {
      name: "\u6C38\u5BFF\u53BF",
      value: "610426",
      parent: "610400"
    }, {
      name: "\u5F6C\u53BF",
      value: "610427",
      parent: "610400"
    }, {
      name: "\u957F\u6B66\u53BF",
      value: "610428",
      parent: "610400"
    }, {
      name: "\u65EC\u9091\u53BF",
      value: "610429",
      parent: "610400"
    }, {
      name: "\u6DF3\u5316\u53BF",
      value: "610430",
      parent: "610400"
    }, {
      name: "\u6B66\u529F\u53BF",
      value: "610431",
      parent: "610400"
    }, {
      name: "\u5174\u5E73\u5E02",
      value: "610481",
      parent: "610400"
    }, {
      name: "\u4E34\u6E2D\u533A",
      value: "610502",
      parent: "610500"
    }, {
      name: "\u534E\u53BF",
      value: "610521",
      parent: "610500"
    }, {
      name: "\u6F7C\u5173\u53BF",
      value: "610522",
      parent: "610500"
    }, {
      name: "\u5927\u8354\u53BF",
      value: "610523",
      parent: "610500"
    }, {
      name: "\u5408\u9633\u53BF",
      value: "610524",
      parent: "610500"
    }, {
      name: "\u6F84\u57CE\u53BF",
      value: "610525",
      parent: "610500"
    }, {
      name: "\u84B2\u57CE\u53BF",
      value: "610526",
      parent: "610500"
    }, {
      name: "\u767D\u6C34\u53BF",
      value: "610527",
      parent: "610500"
    }, {
      name: "\u5BCC\u5E73\u53BF",
      value: "610528",
      parent: "610500"
    }, {
      name: "\u97E9\u57CE\u5E02",
      value: "610581",
      parent: "610500"
    }, {
      name: "\u534E\u9634\u5E02",
      value: "610582",
      parent: "610500"
    }, {
      name: "\u5B9D\u5854\u533A",
      value: "610602",
      parent: "610600"
    }, {
      name: "\u5EF6\u957F\u53BF",
      value: "610621",
      parent: "610600"
    }, {
      name: "\u5EF6\u5DDD\u53BF",
      value: "610622",
      parent: "610600"
    }, {
      name: "\u5B50\u957F\u53BF",
      value: "610623",
      parent: "610600"
    }, {
      name: "\u5B89\u585E\u53BF",
      value: "610624",
      parent: "610600"
    }, {
      name: "\u5FD7\u4E39\u53BF",
      value: "610625",
      parent: "610600"
    }, {
      name: "\u5434\u8D77\u53BF",
      value: "610626",
      parent: "610600"
    }, {
      name: "\u7518\u6CC9\u53BF",
      value: "610627",
      parent: "610600"
    }, {
      name: "\u5BCC\u53BF",
      value: "610628",
      parent: "610600"
    }, {
      name: "\u6D1B\u5DDD\u53BF",
      value: "610629",
      parent: "610600"
    }, {
      name: "\u5B9C\u5DDD\u53BF",
      value: "610630",
      parent: "610600"
    }, {
      name: "\u9EC4\u9F99\u53BF",
      value: "610631",
      parent: "610600"
    }, {
      name: "\u9EC4\u9675\u53BF",
      value: "610632",
      parent: "610600"
    }, {
      name: "\u6C49\u53F0\u533A",
      value: "610702",
      parent: "610700"
    }, {
      name: "\u5357\u90D1\u53BF",
      value: "610721",
      parent: "610700"
    }, {
      name: "\u57CE\u56FA\u53BF",
      value: "610722",
      parent: "610700"
    }, {
      name: "\u6D0B\u53BF",
      value: "610723",
      parent: "610700"
    }, {
      name: "\u897F\u4E61\u53BF",
      value: "610724",
      parent: "610700"
    }, {
      name: "\u52C9\u53BF",
      value: "610725",
      parent: "610700"
    }, {
      name: "\u5B81\u5F3A\u53BF",
      value: "610726",
      parent: "610700"
    }, {
      name: "\u7565\u9633\u53BF",
      value: "610727",
      parent: "610700"
    }, {
      name: "\u9547\u5DF4\u53BF",
      value: "610728",
      parent: "610700"
    }, {
      name: "\u7559\u575D\u53BF",
      value: "610729",
      parent: "610700"
    }, {
      name: "\u4F5B\u576A\u53BF",
      value: "610730",
      parent: "610700"
    }, {
      name: "\u6986\u9633\u533A",
      value: "610802",
      parent: "610800"
    }, {
      name: "\u795E\u6728\u53BF",
      value: "610821",
      parent: "610800"
    }, {
      name: "\u5E9C\u8C37\u53BF",
      value: "610822",
      parent: "610800"
    }, {
      name: "\u6A2A\u5C71\u53BF",
      value: "610823",
      parent: "610800"
    }, {
      name: "\u9756\u8FB9\u53BF",
      value: "610824",
      parent: "610800"
    }, {
      name: "\u5B9A\u8FB9\u53BF",
      value: "610825",
      parent: "610800"
    }, {
      name: "\u7EE5\u5FB7\u53BF",
      value: "610826",
      parent: "610800"
    }, {
      name: "\u7C73\u8102\u53BF",
      value: "610827",
      parent: "610800"
    }, {
      name: "\u4F73\u53BF",
      value: "610828",
      parent: "610800"
    }, {
      name: "\u5434\u5821\u53BF",
      value: "610829",
      parent: "610800"
    }, {
      name: "\u6E05\u6DA7\u53BF",
      value: "610830",
      parent: "610800"
    }, {
      name: "\u5B50\u6D32\u53BF",
      value: "610831",
      parent: "610800"
    }, {
      name: "\u6C49\u6EE8\u533A",
      value: "610902",
      parent: "610900"
    }, {
      name: "\u6C49\u9634\u53BF",
      value: "610921",
      parent: "610900"
    }, {
      name: "\u77F3\u6CC9\u53BF",
      value: "610922",
      parent: "610900"
    }, {
      name: "\u5B81\u9655\u53BF",
      value: "610923",
      parent: "610900"
    }, {
      name: "\u7D2B\u9633\u53BF",
      value: "610924",
      parent: "610900"
    }, {
      name: "\u5C9A\u768B\u53BF",
      value: "610925",
      parent: "610900"
    }, {
      name: "\u5E73\u5229\u53BF",
      value: "610926",
      parent: "610900"
    }, {
      name: "\u9547\u576A\u53BF",
      value: "610927",
      parent: "610900"
    }, {
      name: "\u65EC\u9633\u53BF",
      value: "610928",
      parent: "610900"
    }, {
      name: "\u767D\u6CB3\u53BF",
      value: "610929",
      parent: "610900"
    }, {
      name: "\u5546\u5DDE\u533A",
      value: "611002",
      parent: "611000"
    }, {
      name: "\u6D1B\u5357\u53BF",
      value: "611021",
      parent: "611000"
    }, {
      name: "\u4E39\u51E4\u53BF",
      value: "611022",
      parent: "611000"
    }, {
      name: "\u5546\u5357\u53BF",
      value: "611023",
      parent: "611000"
    }, {
      name: "\u5C71\u9633\u53BF",
      value: "611024",
      parent: "611000"
    }, {
      name: "\u9547\u5B89\u53BF",
      value: "611025",
      parent: "611000"
    }, {
      name: "\u67DE\u6C34\u53BF",
      value: "611026",
      parent: "611000"
    }, {
      name: "\u5170\u5DDE\u5E02",
      value: "620100",
      parent: "620000"
    }, {
      name: "\u5609\u5CEA\u5173\u5E02",
      value: "620200",
      parent: "620000"
    }, {
      name: "\u91D1\u660C\u5E02",
      value: "620300",
      parent: "620000"
    }, {
      name: "\u767D\u94F6\u5E02",
      value: "620400",
      parent: "620000"
    }, {
      name: "\u5929\u6C34\u5E02",
      value: "620500",
      parent: "620000"
    }, {
      name: "\u6B66\u5A01\u5E02",
      value: "620600",
      parent: "620000"
    }, {
      name: "\u5F20\u6396\u5E02",
      value: "620700",
      parent: "620000"
    }, {
      name: "\u5E73\u51C9\u5E02",
      value: "620800",
      parent: "620000"
    }, {
      name: "\u9152\u6CC9\u5E02",
      value: "620900",
      parent: "620000"
    }, {
      name: "\u5E86\u9633\u5E02",
      value: "621000",
      parent: "620000"
    }, {
      name: "\u5B9A\u897F\u5E02",
      value: "621100",
      parent: "620000"
    }, {
      name: "\u9647\u5357\u5E02",
      value: "621200",
      parent: "620000"
    }, {
      name: "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",
      value: "622900",
      parent: "620000"
    }, {
      name: "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "623000",
      parent: "620000"
    }, {
      name: "\u57CE\u5173\u533A",
      value: "620102",
      parent: "620100"
    }, {
      name: "\u4E03\u91CC\u6CB3\u533A",
      value: "620103",
      parent: "620100"
    }, {
      name: "\u897F\u56FA\u533A",
      value: "620104",
      parent: "620100"
    }, {
      name: "\u5B89\u5B81\u533A",
      value: "620105",
      parent: "620100"
    }, {
      name: "\u7EA2\u53E4\u533A",
      value: "620111",
      parent: "620100"
    }, {
      name: "\u6C38\u767B\u53BF",
      value: "620121",
      parent: "620100"
    }, {
      name: "\u768B\u5170\u53BF",
      value: "620122",
      parent: "620100"
    }, {
      name: "\u6986\u4E2D\u53BF",
      value: "620123",
      parent: "620100"
    }, {
      name: "\u91D1\u5DDD\u533A",
      value: "620302",
      parent: "620300"
    }, {
      name: "\u6C38\u660C\u53BF",
      value: "620321",
      parent: "620300"
    }, {
      name: "\u767D\u94F6\u533A",
      value: "620402",
      parent: "620400"
    }, {
      name: "\u5E73\u5DDD\u533A",
      value: "620403",
      parent: "620400"
    }, {
      name: "\u9756\u8FDC\u53BF",
      value: "620421",
      parent: "620400"
    }, {
      name: "\u4F1A\u5B81\u53BF",
      value: "620422",
      parent: "620400"
    }, {
      name: "\u666F\u6CF0\u53BF",
      value: "620423",
      parent: "620400"
    }, {
      name: "\u79E6\u5DDE\u533A",
      value: "620502",
      parent: "620500"
    }, {
      name: "\u9EA6\u79EF\u533A",
      value: "620503",
      parent: "620500"
    }, {
      name: "\u6E05\u6C34\u53BF",
      value: "620521",
      parent: "620500"
    }, {
      name: "\u79E6\u5B89\u53BF",
      value: "620522",
      parent: "620500"
    }, {
      name: "\u7518\u8C37\u53BF",
      value: "620523",
      parent: "620500"
    }, {
      name: "\u6B66\u5C71\u53BF",
      value: "620524",
      parent: "620500"
    }, {
      name: "\u5F20\u5BB6\u5DDD\u56DE\u65CF\u81EA\u6CBB\u53BF",
      value: "620525",
      parent: "620500"
    }, {
      name: "\u51C9\u5DDE\u533A",
      value: "620602",
      parent: "620600"
    }, {
      name: "\u6C11\u52E4\u53BF",
      value: "620621",
      parent: "620600"
    }, {
      name: "\u53E4\u6D6A\u53BF",
      value: "620622",
      parent: "620600"
    }, {
      name: "\u5929\u795D\u85CF\u65CF\u81EA\u6CBB\u53BF",
      value: "620623",
      parent: "620600"
    }, {
      name: "\u7518\u5DDE\u533A",
      value: "620702",
      parent: "620700"
    }, {
      name: "\u8083\u5357\u88D5\u56FA\u65CF\u81EA\u6CBB\u53BF",
      value: "620721",
      parent: "620700"
    }, {
      name: "\u6C11\u4E50\u53BF",
      value: "620722",
      parent: "620700"
    }, {
      name: "\u4E34\u6CFD\u53BF",
      value: "620723",
      parent: "620700"
    }, {
      name: "\u9AD8\u53F0\u53BF",
      value: "620724",
      parent: "620700"
    }, {
      name: "\u5C71\u4E39\u53BF",
      value: "620725",
      parent: "620700"
    }, {
      name: "\u5D06\u5CD2\u533A",
      value: "620802",
      parent: "620800"
    }, {
      name: "\u6CFE\u5DDD\u53BF",
      value: "620821",
      parent: "620800"
    }, {
      name: "\u7075\u53F0\u53BF",
      value: "620822",
      parent: "620800"
    }, {
      name: "\u5D07\u4FE1\u53BF",
      value: "620823",
      parent: "620800"
    }, {
      name: "\u534E\u4EAD\u53BF",
      value: "620824",
      parent: "620800"
    }, {
      name: "\u5E84\u6D6A\u53BF",
      value: "620825",
      parent: "620800"
    }, {
      name: "\u9759\u5B81\u53BF",
      value: "620826",
      parent: "620800"
    }, {
      name: "\u8083\u5DDE\u533A",
      value: "620902",
      parent: "620900"
    }, {
      name: "\u91D1\u5854\u53BF",
      value: "620921",
      parent: "620900"
    }, {
      name: "\u74DC\u5DDE\u53BF",
      value: "620922",
      parent: "620900"
    }, {
      name: "\u8083\u5317\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
      value: "620923",
      parent: "620900"
    }, {
      name: "\u963F\u514B\u585E\u54C8\u8428\u514B\u65CF\u81EA\u6CBB\u53BF",
      value: "620924",
      parent: "620900"
    }, {
      name: "\u7389\u95E8\u5E02",
      value: "620981",
      parent: "620900"
    }, {
      name: "\u6566\u714C\u5E02",
      value: "620982",
      parent: "620900"
    }, {
      name: "\u897F\u5CF0\u533A",
      value: "621002",
      parent: "621000"
    }, {
      name: "\u5E86\u57CE\u53BF",
      value: "621021",
      parent: "621000"
    }, {
      name: "\u73AF\u53BF",
      value: "621022",
      parent: "621000"
    }, {
      name: "\u534E\u6C60\u53BF",
      value: "621023",
      parent: "621000"
    }, {
      name: "\u5408\u6C34\u53BF",
      value: "621024",
      parent: "621000"
    }, {
      name: "\u6B63\u5B81\u53BF",
      value: "621025",
      parent: "621000"
    }, {
      name: "\u5B81\u53BF",
      value: "621026",
      parent: "621000"
    }, {
      name: "\u9547\u539F\u53BF",
      value: "621027",
      parent: "621000"
    }, {
      name: "\u5B89\u5B9A\u533A",
      value: "621102",
      parent: "621100"
    }, {
      name: "\u901A\u6E2D\u53BF",
      value: "621121",
      parent: "621100"
    }, {
      name: "\u9647\u897F\u53BF",
      value: "621122",
      parent: "621100"
    }, {
      name: "\u6E2D\u6E90\u53BF",
      value: "621123",
      parent: "621100"
    }, {
      name: "\u4E34\u6D2E\u53BF",
      value: "621124",
      parent: "621100"
    }, {
      name: "\u6F33\u53BF",
      value: "621125",
      parent: "621100"
    }, {
      name: "\u5CB7\u53BF",
      value: "621126",
      parent: "621100"
    }, {
      name: "\u6B66\u90FD\u533A",
      value: "621202",
      parent: "621200"
    }, {
      name: "\u6210\u53BF",
      value: "621221",
      parent: "621200"
    }, {
      name: "\u6587\u53BF",
      value: "621222",
      parent: "621200"
    }, {
      name: "\u5B95\u660C\u53BF",
      value: "621223",
      parent: "621200"
    }, {
      name: "\u5EB7\u53BF",
      value: "621224",
      parent: "621200"
    }, {
      name: "\u897F\u548C\u53BF",
      value: "621225",
      parent: "621200"
    }, {
      name: "\u793C\u53BF",
      value: "621226",
      parent: "621200"
    }, {
      name: "\u5FBD\u53BF",
      value: "621227",
      parent: "621200"
    }, {
      name: "\u4E24\u5F53\u53BF",
      value: "621228",
      parent: "621200"
    }, {
      name: "\u4E34\u590F\u5E02",
      value: "622901",
      parent: "622900"
    }, {
      name: "\u4E34\u590F\u53BF",
      value: "622921",
      parent: "622900"
    }, {
      name: "\u5EB7\u4E50\u53BF",
      value: "622922",
      parent: "622900"
    }, {
      name: "\u6C38\u9756\u53BF",
      value: "622923",
      parent: "622900"
    }, {
      name: "\u5E7F\u6CB3\u53BF",
      value: "622924",
      parent: "622900"
    }, {
      name: "\u548C\u653F\u53BF",
      value: "622925",
      parent: "622900"
    }, {
      name: "\u4E1C\u4E61\u65CF\u81EA\u6CBB\u53BF",
      value: "622926",
      parent: "622900"
    }, {
      name: "\u79EF\u77F3\u5C71\u4FDD\u5B89\u65CF\u4E1C\u4E61\u65CF\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF",
      value: "622927",
      parent: "622900"
    }, {
      name: "\u5408\u4F5C\u5E02",
      value: "623001",
      parent: "623000"
    }, {
      name: "\u4E34\u6F6D\u53BF",
      value: "623021",
      parent: "623000"
    }, {
      name: "\u5353\u5C3C\u53BF",
      value: "623022",
      parent: "623000"
    }, {
      name: "\u821F\u66F2\u53BF",
      value: "623023",
      parent: "623000"
    }, {
      name: "\u8FED\u90E8\u53BF",
      value: "623024",
      parent: "623000"
    }, {
      name: "\u739B\u66F2\u53BF",
      value: "623025",
      parent: "623000"
    }, {
      name: "\u788C\u66F2\u53BF",
      value: "623026",
      parent: "623000"
    }, {
      name: "\u590F\u6CB3\u53BF",
      value: "623027",
      parent: "623000"
    }, {
      name: "\u897F\u5B81\u5E02",
      value: "630100",
      parent: "630000"
    }, {
      name: "\u6D77\u4E1C\u5E02",
      value: "630200",
      parent: "630000"
    }, {
      name: "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "632200",
      parent: "630000"
    }, {
      name: "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "632300",
      parent: "630000"
    }, {
      name: "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "632500",
      parent: "630000"
    }, {
      name: "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "632600",
      parent: "630000"
    }, {
      name: "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "632700",
      parent: "630000"
    }, {
      name: "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      value: "632800",
      parent: "630000"
    }, {
      name: "\u57CE\u4E1C\u533A",
      value: "630102",
      parent: "630100"
    }, {
      name: "\u57CE\u4E2D\u533A",
      value: "630103",
      parent: "630100"
    }, {
      name: "\u57CE\u897F\u533A",
      value: "630104",
      parent: "630100"
    }, {
      name: "\u57CE\u5317\u533A",
      value: "630105",
      parent: "630100"
    }, {
      name: "\u5927\u901A\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF",
      value: "630121",
      parent: "630100"
    }, {
      name: "\u6E5F\u4E2D\u53BF",
      value: "630122",
      parent: "630100"
    }, {
      name: "\u6E5F\u6E90\u53BF",
      value: "630123",
      parent: "630100"
    }, {
      name: "\u4E50\u90FD\u533A",
      value: "630202",
      parent: "630200"
    }, {
      name: "\u5E73\u5B89\u533A",
      value: "630203",
      parent: "630200"
    }, {
      name: "\u6C11\u548C\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF",
      value: "630222",
      parent: "630200"
    }, {
      name: "\u4E92\u52A9\u571F\u65CF\u81EA\u6CBB\u53BF",
      value: "630223",
      parent: "630200"
    }, {
      name: "\u5316\u9686\u56DE\u65CF\u81EA\u6CBB\u53BF",
      value: "630224",
      parent: "630200"
    }, {
      name: "\u5FAA\u5316\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF",
      value: "630225",
      parent: "630200"
    }, {
      name: "\u95E8\u6E90\u56DE\u65CF\u81EA\u6CBB\u53BF",
      value: "632221",
      parent: "632200"
    }, {
      name: "\u7941\u8FDE\u53BF",
      value: "632222",
      parent: "632200"
    }, {
      name: "\u6D77\u664F\u53BF",
      value: "632223",
      parent: "632200"
    }, {
      name: "\u521A\u5BDF\u53BF",
      value: "632224",
      parent: "632200"
    }, {
      name: "\u540C\u4EC1\u53BF",
      value: "632321",
      parent: "632300"
    }, {
      name: "\u5C16\u624E\u53BF",
      value: "632322",
      parent: "632300"
    }, {
      name: "\u6CFD\u5E93\u53BF",
      value: "632323",
      parent: "632300"
    }, {
      name: "\u6CB3\u5357\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF",
      value: "632324",
      parent: "632300"
    }, {
      name: "\u5171\u548C\u53BF",
      value: "632521",
      parent: "632500"
    }, {
      name: "\u540C\u5FB7\u53BF",
      value: "632522",
      parent: "632500"
    }, {
      name: "\u8D35\u5FB7\u53BF",
      value: "632523",
      parent: "632500"
    }, {
      name: "\u5174\u6D77\u53BF",
      value: "632524",
      parent: "632500"
    }, {
      name: "\u8D35\u5357\u53BF",
      value: "632525",
      parent: "632500"
    }, {
      name: "\u739B\u6C81\u53BF",
      value: "632621",
      parent: "632600"
    }, {
      name: "\u73ED\u739B\u53BF",
      value: "632622",
      parent: "632600"
    }, {
      name: "\u7518\u5FB7\u53BF",
      value: "632623",
      parent: "632600"
    }, {
      name: "\u8FBE\u65E5\u53BF",
      value: "632624",
      parent: "632600"
    }, {
      name: "\u4E45\u6CBB\u53BF",
      value: "632625",
      parent: "632600"
    }, {
      name: "\u739B\u591A\u53BF",
      value: "632626",
      parent: "632600"
    }, {
      name: "\u7389\u6811\u5E02",
      value: "632701",
      parent: "632700"
    }, {
      name: "\u6742\u591A\u53BF",
      value: "632722",
      parent: "632700"
    }, {
      name: "\u79F0\u591A\u53BF",
      value: "632723",
      parent: "632700"
    }, {
      name: "\u6CBB\u591A\u53BF",
      value: "632724",
      parent: "632700"
    }, {
      name: "\u56CA\u8C26\u53BF",
      value: "632725",
      parent: "632700"
    }, {
      name: "\u66F2\u9EBB\u83B1\u53BF",
      value: "632726",
      parent: "632700"
    }, {
      name: "\u683C\u5C14\u6728\u5E02",
      value: "632801",
      parent: "632800"
    }, {
      name: "\u5FB7\u4EE4\u54C8\u5E02",
      value: "632802",
      parent: "632800"
    }, {
      name: "\u4E4C\u5170\u53BF",
      value: "632821",
      parent: "632800"
    }, {
      name: "\u90FD\u5170\u53BF",
      value: "632822",
      parent: "632800"
    }, {
      name: "\u5929\u5CFB\u53BF",
      value: "632823",
      parent: "632800"
    }, {
      name: "\u94F6\u5DDD\u5E02",
      value: "640100",
      parent: "640000"
    }, {
      name: "\u77F3\u5634\u5C71\u5E02",
      value: "640200",
      parent: "640000"
    }, {
      name: "\u5434\u5FE0\u5E02",
      value: "640300",
      parent: "640000"
    }, {
      name: "\u56FA\u539F\u5E02",
      value: "640400",
      parent: "640000"
    }, {
      name: "\u4E2D\u536B\u5E02",
      value: "640500",
      parent: "640000"
    }, {
      name: "\u5174\u5E86\u533A",
      value: "640104",
      parent: "640100"
    }, {
      name: "\u897F\u590F\u533A",
      value: "640105",
      parent: "640100"
    }, {
      name: "\u91D1\u51E4\u533A",
      value: "640106",
      parent: "640100"
    }, {
      name: "\u6C38\u5B81\u53BF",
      value: "640121",
      parent: "640100"
    }, {
      name: "\u8D3A\u5170\u53BF",
      value: "640122",
      parent: "640100"
    }, {
      name: "\u7075\u6B66\u5E02",
      value: "640181",
      parent: "640100"
    }, {
      name: "\u5927\u6B66\u53E3\u533A",
      value: "640202",
      parent: "640200"
    }, {
      name: "\u60E0\u519C\u533A",
      value: "640205",
      parent: "640200"
    }, {
      name: "\u5E73\u7F57\u53BF",
      value: "640221",
      parent: "640200"
    }, {
      name: "\u5229\u901A\u533A",
      value: "640302",
      parent: "640300"
    }, {
      name: "\u7EA2\u5BFA\u5821\u533A",
      value: "640303",
      parent: "640300"
    }, {
      name: "\u76D0\u6C60\u53BF",
      value: "640323",
      parent: "640300"
    }, {
      name: "\u540C\u5FC3\u53BF",
      value: "640324",
      parent: "640300"
    }, {
      name: "\u9752\u94DC\u5CE1\u5E02",
      value: "640381",
      parent: "640300"
    }, {
      name: "\u539F\u5DDE\u533A",
      value: "640402",
      parent: "640400"
    }, {
      name: "\u897F\u5409\u53BF",
      value: "640422",
      parent: "640400"
    }, {
      name: "\u9686\u5FB7\u53BF",
      value: "640423",
      parent: "640400"
    }, {
      name: "\u6CFE\u6E90\u53BF",
      value: "640424",
      parent: "640400"
    }, {
      name: "\u5F6D\u9633\u53BF",
      value: "640425",
      parent: "640400"
    }, {
      name: "\u6C99\u5761\u5934\u533A",
      value: "640502",
      parent: "640500"
    }, {
      name: "\u4E2D\u5B81\u53BF",
      value: "640521",
      parent: "640500"
    }, {
      name: "\u6D77\u539F\u53BF",
      value: "640522",
      parent: "640500"
    }, {
      name: "\u4E4C\u9C81\u6728\u9F50\u5E02",
      value: "650100",
      parent: "650000"
    }, {
      name: "\u514B\u62C9\u739B\u4F9D\u5E02",
      value: "650200",
      parent: "650000"
    }, {
      name: "\u5410\u9C81\u756A\u5E02",
      value: "650400",
      parent: "650000"
    }, {
      name: "\u54C8\u5BC6\u5730\u533A",
      value: "652200",
      parent: "650000"
    }, {
      name: "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",
      value: "652300",
      parent: "650000"
    }, {
      name: "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",
      value: "652700",
      parent: "650000"
    }, {
      name: "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",
      value: "652800",
      parent: "650000"
    }, {
      name: "\u963F\u514B\u82CF\u5730\u533A",
      value: "652900",
      parent: "650000"
    }, {
      name: "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",
      value: "653000",
      parent: "650000"
    }, {
      name: "\u5580\u4EC0\u5730\u533A",
      value: "653100",
      parent: "650000"
    }, {
      name: "\u548C\u7530\u5730\u533A",
      value: "653200",
      parent: "650000"
    }, {
      name: "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",
      value: "654000",
      parent: "650000"
    }, {
      name: "\u5854\u57CE\u5730\u533A",
      value: "654200",
      parent: "650000"
    }, {
      name: "\u963F\u52D2\u6CF0\u5730\u533A",
      value: "654300",
      parent: "650000"
    }, {
      name: "\u77F3\u6CB3\u5B50\u5E02",
      value: "659001",
      parent: "650000"
    }, {
      name: "\u963F\u62C9\u5C14\u5E02",
      value: "659002",
      parent: "650000"
    }, {
      name: "\u56FE\u6728\u8212\u514B\u5E02",
      value: "659003",
      parent: "650000"
    }, {
      name: "\u4E94\u5BB6\u6E20\u5E02",
      value: "659004",
      parent: "650000"
    }, {
      name: "\u5929\u5C71\u533A",
      value: "650102",
      parent: "650100"
    }, {
      name: "\u6C99\u4F9D\u5DF4\u514B\u533A",
      value: "650103",
      parent: "650100"
    }, {
      name: "\u65B0\u5E02\u533A",
      value: "650104",
      parent: "650100"
    }, {
      name: "\u6C34\u78E8\u6C9F\u533A",
      value: "650105",
      parent: "650100"
    }, {
      name: "\u5934\u5C6F\u6CB3\u533A",
      value: "650106",
      parent: "650100"
    }, {
      name: "\u8FBE\u5742\u57CE\u533A",
      value: "650107",
      parent: "650100"
    }, {
      name: "\u7C73\u4E1C\u533A",
      value: "650109",
      parent: "650100"
    }, {
      name: "\u4E4C\u9C81\u6728\u9F50\u53BF",
      value: "650121",
      parent: "650100"
    }, {
      name: "\u72EC\u5C71\u5B50\u533A",
      value: "650202",
      parent: "650200"
    }, {
      name: "\u514B\u62C9\u739B\u4F9D\u533A",
      value: "650203",
      parent: "650200"
    }, {
      name: "\u767D\u78B1\u6EE9\u533A",
      value: "650204",
      parent: "650200"
    }, {
      name: "\u4E4C\u5C14\u79BE\u533A",
      value: "650205",
      parent: "650200"
    }, {
      name: "\u9AD8\u660C\u533A",
      value: "650402",
      parent: "650400"
    }, {
      name: "\u912F\u5584\u53BF",
      value: "650421",
      parent: "650400"
    }, {
      name: "\u6258\u514B\u900A\u53BF",
      value: "650422",
      parent: "650400"
    }, {
      name: "\u54C8\u5BC6\u5E02",
      value: "652201",
      parent: "652200"
    }, {
      name: "\u5DF4\u91CC\u5764\u54C8\u8428\u514B\u81EA\u6CBB\u53BF",
      value: "652222",
      parent: "652200"
    }, {
      name: "\u4F0A\u543E\u53BF",
      value: "652223",
      parent: "652200"
    }, {
      name: "\u660C\u5409\u5E02",
      value: "652301",
      parent: "652300"
    }, {
      name: "\u961C\u5EB7\u5E02",
      value: "652302",
      parent: "652300"
    }, {
      name: "\u547C\u56FE\u58C1\u53BF",
      value: "652323",
      parent: "652300"
    }, {
      name: "\u739B\u7EB3\u65AF\u53BF",
      value: "652324",
      parent: "652300"
    }, {
      name: "\u5947\u53F0\u53BF",
      value: "652325",
      parent: "652300"
    }, {
      name: "\u5409\u6728\u8428\u5C14\u53BF",
      value: "652327",
      parent: "652300"
    }, {
      name: "\u6728\u5792\u54C8\u8428\u514B\u81EA\u6CBB\u53BF",
      value: "652328",
      parent: "652300"
    }, {
      name: "\u535A\u4E50\u5E02",
      value: "652701",
      parent: "652700"
    }, {
      name: "\u963F\u62C9\u5C71\u53E3\u5E02",
      value: "652702",
      parent: "652700"
    }, {
      name: "\u7CBE\u6CB3\u53BF",
      value: "652722",
      parent: "652700"
    }, {
      name: "\u6E29\u6CC9\u53BF",
      value: "652723",
      parent: "652700"
    }, {
      name: "\u5E93\u5C14\u52D2\u5E02",
      value: "652801",
      parent: "652800"
    }, {
      name: "\u8F6E\u53F0\u53BF",
      value: "652822",
      parent: "652800"
    }, {
      name: "\u5C09\u7281\u53BF",
      value: "652823",
      parent: "652800"
    }, {
      name: "\u82E5\u7F8C\u53BF",
      value: "652824",
      parent: "652800"
    }, {
      name: "\u4E14\u672B\u53BF",
      value: "652825",
      parent: "652800"
    }, {
      name: "\u7109\u8006\u56DE\u65CF\u81EA\u6CBB\u53BF",
      value: "652826",
      parent: "652800"
    }, {
      name: "\u548C\u9759\u53BF",
      value: "652827",
      parent: "652800"
    }, {
      name: "\u548C\u7855\u53BF",
      value: "652828",
      parent: "652800"
    }, {
      name: "\u535A\u6E56\u53BF",
      value: "652829",
      parent: "652800"
    }, {
      name: "\u963F\u514B\u82CF\u5E02",
      value: "652901",
      parent: "652900"
    }, {
      name: "\u6E29\u5BBF\u53BF",
      value: "652922",
      parent: "652900"
    }, {
      name: "\u5E93\u8F66\u53BF",
      value: "652923",
      parent: "652900"
    }, {
      name: "\u6C99\u96C5\u53BF",
      value: "652924",
      parent: "652900"
    }, {
      name: "\u65B0\u548C\u53BF",
      value: "652925",
      parent: "652900"
    }, {
      name: "\u62DC\u57CE\u53BF",
      value: "652926",
      parent: "652900"
    }, {
      name: "\u4E4C\u4EC0\u53BF",
      value: "652927",
      parent: "652900"
    }, {
      name: "\u963F\u74E6\u63D0\u53BF",
      value: "652928",
      parent: "652900"
    }, {
      name: "\u67EF\u576A\u53BF",
      value: "652929",
      parent: "652900"
    }, {
      name: "\u963F\u56FE\u4EC0\u5E02",
      value: "653001",
      parent: "653000"
    }, {
      name: "\u963F\u514B\u9676\u53BF",
      value: "653022",
      parent: "653000"
    }, {
      name: "\u963F\u5408\u5947\u53BF",
      value: "653023",
      parent: "653000"
    }, {
      name: "\u4E4C\u6070\u53BF",
      value: "653024",
      parent: "653000"
    }, {
      name: "\u5580\u4EC0\u5E02",
      value: "653101",
      parent: "653100"
    }, {
      name: "\u758F\u9644\u53BF",
      value: "653121",
      parent: "653100"
    }, {
      name: "\u758F\u52D2\u53BF",
      value: "653122",
      parent: "653100"
    }, {
      name: "\u82F1\u5409\u6C99\u53BF",
      value: "653123",
      parent: "653100"
    }, {
      name: "\u6CFD\u666E\u53BF",
      value: "653124",
      parent: "653100"
    }, {
      name: "\u838E\u8F66\u53BF",
      value: "653125",
      parent: "653100"
    }, {
      name: "\u53F6\u57CE\u53BF",
      value: "653126",
      parent: "653100"
    }, {
      name: "\u9EA6\u76D6\u63D0\u53BF",
      value: "653127",
      parent: "653100"
    }, {
      name: "\u5CB3\u666E\u6E56\u53BF",
      value: "653128",
      parent: "653100"
    }, {
      name: "\u4F3D\u5E08\u53BF",
      value: "653129",
      parent: "653100"
    }, {
      name: "\u5DF4\u695A\u53BF",
      value: "653130",
      parent: "653100"
    }, {
      name: "\u5854\u4EC0\u5E93\u5C14\u5E72\u5854\u5409\u514B\u81EA\u6CBB\u53BF",
      value: "653131",
      parent: "653100"
    }, {
      name: "\u548C\u7530\u5E02",
      value: "653201",
      parent: "653200"
    }, {
      name: "\u548C\u7530\u53BF",
      value: "653221",
      parent: "653200"
    }, {
      name: "\u58A8\u7389\u53BF",
      value: "653222",
      parent: "653200"
    }, {
      name: "\u76AE\u5C71\u53BF",
      value: "653223",
      parent: "653200"
    }, {
      name: "\u6D1B\u6D66\u53BF",
      value: "653224",
      parent: "653200"
    }, {
      name: "\u7B56\u52D2\u53BF",
      value: "653225",
      parent: "653200"
    }, {
      name: "\u4E8E\u7530\u53BF",
      value: "653226",
      parent: "653200"
    }, {
      name: "\u6C11\u4E30\u53BF",
      value: "653227",
      parent: "653200"
    }, {
      name: "\u4F0A\u5B81\u5E02",
      value: "654002",
      parent: "654000"
    }, {
      name: "\u594E\u5C6F\u5E02",
      value: "654003",
      parent: "654000"
    }, {
      name: "\u970D\u5C14\u679C\u65AF\u5E02",
      value: "654004",
      parent: "654000"
    }, {
      name: "\u4F0A\u5B81\u53BF",
      value: "654021",
      parent: "654000"
    }, {
      name: "\u5BDF\u5E03\u67E5\u5C14\u9521\u4F2F\u81EA\u6CBB\u53BF",
      value: "654022",
      parent: "654000"
    }, {
      name: "\u970D\u57CE\u53BF",
      value: "654023",
      parent: "654000"
    }, {
      name: "\u5DE9\u7559\u53BF",
      value: "654024",
      parent: "654000"
    }, {
      name: "\u65B0\u6E90\u53BF",
      value: "654025",
      parent: "654000"
    }, {
      name: "\u662D\u82CF\u53BF",
      value: "654026",
      parent: "654000"
    }, {
      name: "\u7279\u514B\u65AF\u53BF",
      value: "654027",
      parent: "654000"
    }, {
      name: "\u5C3C\u52D2\u514B\u53BF",
      value: "654028",
      parent: "654000"
    }, {
      name: "\u5854\u57CE\u5E02",
      value: "654201",
      parent: "654200"
    }, {
      name: "\u4E4C\u82CF\u5E02",
      value: "654202",
      parent: "654200"
    }, {
      name: "\u989D\u654F\u53BF",
      value: "654221",
      parent: "654200"
    }, {
      name: "\u6C99\u6E7E\u53BF",
      value: "654223",
      parent: "654200"
    }, {
      name: "\u6258\u91CC\u53BF",
      value: "654224",
      parent: "654200"
    }, {
      name: "\u88D5\u6C11\u53BF",
      value: "654225",
      parent: "654200"
    }, {
      name: "\u548C\u5E03\u514B\u8D5B\u5C14\u8499\u53E4\u81EA\u6CBB\u53BF",
      value: "654226",
      parent: "654200"
    }, {
      name: "\u963F\u52D2\u6CF0\u5E02",
      value: "654301",
      parent: "654300"
    }, {
      name: "\u5E03\u5C14\u6D25\u53BF",
      value: "654321",
      parent: "654300"
    }, {
      name: "\u5BCC\u8574\u53BF",
      value: "654322",
      parent: "654300"
    }, {
      name: "\u798F\u6D77\u53BF",
      value: "654323",
      parent: "654300"
    }, {
      name: "\u54C8\u5DF4\u6CB3\u53BF",
      value: "654324",
      parent: "654300"
    }, {
      name: "\u9752\u6CB3\u53BF",
      value: "654325",
      parent: "654300"
    }, {
      name: "\u5409\u6728\u4E43\u53BF",
      value: "654326",
      parent: "654300"
    }, {
      name: "\u4E2D\u897F\u5340",
      value: "810001",
      parent: "810000"
    }, {
      name: "\u7063\u4ED4\u5340",
      value: "810002",
      parent: "810000"
    }, {
      name: "\u6771\u5340",
      value: "810003",
      parent: "810000"
    }, {
      name: "\u5357\u5340",
      value: "810004",
      parent: "810000"
    }, {
      name: "\u6CB9\u5C16\u65FA\u5340",
      value: "810005",
      parent: "810000"
    }, {
      name: "\u6DF1\u6C34\u57D7\u5340",
      value: "810006",
      parent: "810000"
    }, {
      name: "\u4E5D\u9F8D\u57CE\u5340",
      value: "810007",
      parent: "810000"
    }, {
      name: "\u9EC3\u5927\u4ED9\u5340",
      value: "810008",
      parent: "810000"
    }, {
      name: "\u89C0\u5858\u5340",
      value: "810009",
      parent: "810000"
    }, {
      name: "\u8343\u7063\u5340",
      value: "810010",
      parent: "810000"
    }, {
      name: "\u5C6F\u9580\u5340",
      value: "810011",
      parent: "810000"
    }, {
      name: "\u5143\u6717\u5340",
      value: "810012",
      parent: "810000"
    }, {
      name: "\u5317\u5340",
      value: "810013",
      parent: "810000"
    }, {
      name: "\u5927\u57D4\u5340",
      value: "810014",
      parent: "810000"
    }, {
      name: "\u897F\u8CA2\u5340",
      value: "810015",
      parent: "810000"
    }, {
      name: "\u6C99\u7530\u5340",
      value: "810016",
      parent: "810000"
    }, {
      name: "\u8475\u9752\u5340",
      value: "810017",
      parent: "810000"
    }, {
      name: "\u96E2\u5CF6\u5340",
      value: "810018",
      parent: "810000"
    }, {
      name: "\u82B1\u5730\u746A\u5802\u5340",
      value: "820001",
      parent: "820000"
    }, {
      name: "\u82B1\u738B\u5802\u5340",
      value: "820002",
      parent: "820000"
    }, {
      name: "\u671B\u5FB7\u5802\u5340",
      value: "820003",
      parent: "820000"
    }, {
      name: "\u5927\u5802\u5340",
      value: "820004",
      parent: "820000"
    }, {
      name: "\u98A8\u9806\u5802\u5340",
      value: "820005",
      parent: "820000"
    }, {
      name: "\u5609\u6A21\u5802\u5340",
      value: "820006",
      parent: "820000"
    }, {
      name: "\u8DEF\u6C39\u586B\u6D77\u5340",
      value: "820007",
      parent: "820000"
    }, {
      name: "\u8056\u65B9\u6FDF\u5404\u5802\u5340",
      value: "820008",
      parent: "820000"
    }, {
      name: "--",
      value: "--",
      parent: "110200"
    }, {
      name: "--",
      value: "--",
      parent: "120200"
    }, {
      name: "--",
      value: "--",
      parent: "139000"
    }, {
      name: "--",
      value: "--",
      parent: "139001"
    }, {
      name: "--",
      value: "--",
      parent: "139002"
    }, {
      name: "--",
      value: "--",
      parent: "310200"
    }, {
      name: "--",
      value: "--",
      parent: "419000"
    }, {
      name: "--",
      value: "--",
      parent: "419001"
    }, {
      name: "--",
      value: "--",
      parent: "429000"
    }, {
      name: "--",
      value: "--",
      parent: "429004"
    }, {
      name: "--",
      value: "--",
      parent: "429005"
    }, {
      name: "--",
      value: "--",
      parent: "429006"
    }, {
      name: "--",
      value: "--",
      parent: "429021"
    }, {
      name: "--",
      value: "--",
      parent: "441900"
    }, {
      name: "--",
      value: "--",
      parent: "442000"
    }, {
      name: "--",
      value: "--",
      parent: "469000"
    }, {
      name: "--",
      value: "--",
      parent: "469001"
    }, {
      name: "--",
      value: "--",
      parent: "469002"
    }, {
      name: "--",
      value: "--",
      parent: "469003"
    }, {
      name: "--",
      value: "--",
      parent: "469005"
    }, {
      name: "--",
      value: "--",
      parent: "469006"
    }, {
      name: "--",
      value: "--",
      parent: "469007"
    }, {
      name: "--",
      value: "--",
      parent: "469021"
    }, {
      name: "--",
      value: "--",
      parent: "469022"
    }, {
      name: "--",
      value: "--",
      parent: "469023"
    }, {
      name: "--",
      value: "--",
      parent: "469024"
    }, {
      name: "--",
      value: "--",
      parent: "469025"
    }, {
      name: "--",
      value: "--",
      parent: "469026"
    }, {
      name: "--",
      value: "--",
      parent: "469027"
    }, {
      name: "--",
      value: "--",
      parent: "469028"
    }, {
      name: "--",
      value: "--",
      parent: "469029"
    }, {
      name: "--",
      value: "--",
      parent: "469030"
    }, {
      name: "--",
      value: "--",
      parent: "500200"
    }, {
      name: "--",
      value: "--",
      parent: "620200"
    }, {
      name: "--",
      value: "--",
      parent: "659000"
    }, {
      name: "--",
      value: "--",
      parent: "659001"
    }, {
      name: "--",
      value: "--",
      parent: "659002"
    }, {
      name: "--",
      value: "--",
      parent: "659003"
    }, {
      name: "--",
      value: "--",
      parent: "659004"
    }];
  },
  "2r5U": function (e, t) {},
  "36EF": function (e, t) {},
  "3Lt7": function (e, t, a) {
    "use strict";

    Number, String, Number, String;
    var n = ["-moz-box-", "-webkit-box-", ""],
      i = {
        name: "flexbox-item",
        props: {
          span: [Number, String],
          order: [Number, String]
        },
        beforeMount: function () {
          this.bodyWidth = document.documentElement.offsetWidth;
        },
        methods: {
          buildWidth: function (e) {
            return "number" == typeof e ? e < 1 ? e : e / 12 : "string" == typeof e ? e.replace("px", "") / this.bodyWidth : void 0;
          }
        },
        computed: {
          style: function () {
            var e = {},
              t = "horizontal" === this.$parent.orient ? "marginLeft" : "marginTop";
            if (1 * this.$parent.gutter != 0 && (e[t] = this.$parent.gutter + "px"), this.span) for (var a = 0; a < n.length; a++) e[n[a] + "flex"] = "0 0 " + 100 * this.buildWidth(this.span) + "%";
            return void 0 !== this.order && (e.order = this.order), e;
          }
        },
        data: function () {
          return {
            bodyWidth: 0
          };
        }
      },
      r = {
        render: function () {
          var e = this.$createElement;
          return (this._self._c || e)("div", {
            staticClass: "vux-flexbox-item",
            style: this.style
          }, [this._t("default")], 2);
        },
        staticRenderFns: []
      },
      s = a("VU/8")(i, r, !1, null, null, null);
    t.a = s.exports;
  },
  "4gI8": function (e, t) {},
  "5QqT": function (e, t) {},
  "7K6v": function (e, t) {},
  "8nE4": function (e, t) {},
  Bqdf: function (e, t) {},
  E8sN: function (e, t) {},
  "EKQ/": function (e, t) {},
  KV2i: function (e, t) {},
  KWAb: function (e, t) {},
  "LB/e": function (e, t) {},
  Md9n: function (e, t) {},
  NHnr: function (e, t, a) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n,
      i = a("7+uW"),
      r = {
        render: function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            attrs: {
              id: "app"
            }
          }, [t("router-view")], 1);
        },
        staticRenderFns: []
      },
      s = a("VU/8")({
        name: "App"
      }, r, !1, null, null, null).exports,
      l = a("/ocq"),
      o = a("pFYg"),
      u = a.n(o),
      p = a("mvHQ"),
      m = a.n(p),
      v = a("mtWM"),
      c = a.n(v),
      d = function (e) {
        return c.a.get("/yongpai-news/api/news/detail", {
          params: e
        });
      },
      h = function (e) {
        return c.a.get("/yongpai-ugc/api/vote/result", {
          params: e
        });
      },
      g = function (e) {
        return c.a.get("/yongpai-ugc/api/vote/vote_multi", {
          params: e
        });
      },
      f = function (e) {
        return c.a.get("/yongpai-news/api/news/related", {
          params: e
        });
      },
      _ = function (e) {
        return c.a.get("/yongpai-news/api/news/live_message_refresh", {
          params: e
        });
      },
      w = function (e) {
        return c.a.get("/yongpai-ugc/api/bbs/getBbs", {
          params: e
        });
      },
      y = function (e) {
        return c.a.get("/yongpai-ugc/api/bbs/getBbsMessageList", {
          params: e
        });
      },
      b = function (e) {
        return c.a.get("/yongpai-ugc/api/bbs/addBbsMessage", {
          params: e
        });
      },
      x = function (e) {
        return c.a.get("/yongpai-news/api/news/topic2", {
          params: e
        });
      },
      S = function (e) {
        return c.a.get("/yongpai-ugc/api/vote/pre_vote", {
          params: e
        });
      },
      C = function (e) {
        return c.a.post("/yongpai-news/api/myh/follow", e);
      },
      I = function (e) {
        return c.a.post("/yongpai-news/api/hrt/follow", e);
      },
      k = a("bOdI"),
      L = a.n(k),
      M = (n = {
        isRepeat: function (e, t) {
          return e == t;
        },
        password: function (e) {
          return e.length > 5 && e.length < 26;
        },
        isNull: function (e) {
          return null != e.trim() && "" != e.trim();
        },
        isEmail: function (e) {
          return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e);
        },
        isPhone: function (e) {
          return /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(e);
        },
        getNowFormatDate: function () {
          var e = new Date(),
            t = e.getMonth() + 1,
            a = e.getMinutes(),
            n = e.getDate();
          return t >= 1 && t <= 9 && (t = "0" + t), a >= 1 && a <= 9 && (a = "0" + a), n >= 0 && n <= 9 && (n = "0" + n), e.getFullYear() + "-" + t + "-" + n + " " + e.getHours() + ":" + a + ":" + e.getSeconds();
        },
        GetDateDiff: function (e, t) {
          var a = new Date(Date.parse(e.replace(/-/g, "/"))).getTime(),
            n = new Date(Date.parse(t.replace(/-/g, "/"))).getTime(),
            i = Math.abs(a - n) / 86400000;
          return i = parseInt(i);
        },
        isWeiXin: function () {
          return "micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
        },
        is_qq: function () {
          return "qq" == navigator.userAgent.toLowerCase().match(/QQ/i);
        },
        is_dingding: function () {
          return navigator.userAgent.toLowerCase().indexOf("dingtalk") >= 0;
        }
      }, L()(n, "is_dingding", function () {
        return navigator.userAgent.toLowerCase().indexOf("dingtalk") >= 0;
      }), L()(n, "getCookie", function (e) {
        var t,
          a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (t = document.cookie.match(a)) ? unescape(t[2]) : null;
      }), L()(n, "notify", function (e, t, a) {
        var n = navigator.userAgent,
          i = (navigator.appVersion, n.indexOf("Android") > -1 || n.indexOf("Linux") > -1),
          r = !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          s = null;
        "content" == t ? s = {
          method: "" + e,
          callBackMethod: "callBack",
          data: {
            content: "" + a
          }
        } : "isLogin" == t && (s = {
          method: "" + e,
          data: {
            isLogin: "" + a
          }
        });
        var l = "{\"method\":\"" + e + "\",\"callBackMethod\":\"callBack\",data:{\"" + t + "\":\"" + a + "\"}}";
        r && window.webkit.messageHandlers.Native.postMessage(s), i && window.Native.postMessage(l);
      }), n),
      A = a("NC6I"),
      N = a.n(A),
      T = (String, String, String, String, Object, String, Number, {
        name: "yp-detail",
        props: {
          newInfo: {
            title: String,
            from: String,
            time: String,
            body: String
          },
          detailCountDown: Object,
          finishTime: String,
          timeFormatType: Number
        },
        data: function () {
          return {
            fontSize: "",
            userInfo: {},
            isFollow: 1,
            myhChannelId: 0,
            titleFontSize: "",
            introtitleFontSize: "",
            subheadingFontSize: "",
            today: 0,
            hourTime: 0,
            minuteTime: 0,
            secondTime: 0,
            setINT: null
          };
        },
        methods: {
          fontSizeCallBack: function (e) {
            var t = e.split("%"),
              a = t[0].toString().indexOf(".");
            -1 != a ? "100" == t[0].toString().split(".")[0].toString() ? (this.fontSize = "18px", this.titleFontSize = "22px", this.introtitleFontSize = "20px", this.subheadingFontSize = "20px") : (this.fontSize = e, this.titleFontSize = Number(t[0]) + 22 + "%", this.introtitleFontSize = Number(t[0]) + 11 + "%", this.subheadingFontSize = Number(t[0]) + 11 + "%") : "100" == t[0].toString() ? (this.fontSize = "18px", this.titleFontSize = "22px", this.introtitleFontSize = "20px", this.subheadingFontSize = "20px") : (this.fontSize = e, this.titleFontSize = Number(t[0]) + 22 + "%", this.introtitleFontSize = Number(t[0]) + 11 + "%", this.subheadingFontSize = Number(t[0]) + 11 + "%");
            var n = {
                95: 11,
                98: 13,
                100: 15,
                120: 17,
                150: 19
              },
              i = "15px",
              r = "24px",
              s = navigator.userAgent,
              l = (s.indexOf("Android") > -1 || s.indexOf("Linux"), !!s.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/));
            console.log(l);
            var o = "";
            o = l ? 150 == t[0].toString() ? "120" : 200 == t[0].toString() ? "150" : 120 == t[0].toString() ? "100" : t[0].toString() : t[0].toString(), ["95", "98", "100", "120", "150"].includes(o) ? (i = n[o], r = n[o] + 9 + "px") : (i = "15px", r = "24px"), console.log(i, r), $("#AI_detail").css("font-size", i), $("#AI_detail").css("line-height", r), $("#ai_icon").css("height", i), console.log("fontSize2:" + this.titleFontSize, a), $("#content").css("font-size", this.fontSize), $("#content").css("line-height", "1.6em"), $("#introtitle").css("font-size", this.introtitleFontSize), $("#title").css("font-size", this.titleFontSize), $("#subheading").css("font-size", this.subheadingFontSize), setTimeout(function () {
              for (var e = document.getElementsByName("resizeFont"), a = 0; a < e.length; a++) {
                var n = e[a].getAttribute("data-fontsize").substring(0, 2);
                e[a].style.fontSize = t[0] / 100 * n + "px";
              }
            }, 1000);
          },
          follow: function (e, t) {
            var a = navigator.userAgent,
              n = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1);
            if (this.isFollow = e, this.myhChannelId = t, n) {
              this.isFollow = e, this.myhChannelId = t;
              a = navigator.userAgent, navigator.appVersion, n = a.indexOf("Android") > -1 || a.indexOf("Linux") > -1;
              !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(ios_message), n && window.Native.postMessage("{\"method\":\"userJson\",\"callBackMethod\":\"callBackFollow\",data:{\"isLogin\":\"true\"}}");
            } else {
              a = navigator.userAgent, navigator.appVersion, n = a.indexOf("Android") > -1 || a.indexOf("Linux") > -1;
              !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                method: "userJson",
                data: {
                  isLogin: "" + !0
                }
              });
            }
          },
          callBackFollow: function (e) {
            var t = this;
            if (console.log("\u8C03callback\u4E86"), this.userInfo = JSON.parse(e), console.log(this.userInfo), null != this.userInfo || void 0 !== this.userInfo.userId || "" != this.userInfo.userId) {
              var a = new Date().getTime(),
                n = {
                  userId: this.userInfo.userId,
                  token: this.userInfo.token,
                  timestamp: a,
                  id: this.myhChannelId,
                  type: this.isFollow,
                  sign: N()("timestamp" + a + "userId" + this.userInfo.userId + "test_123456679890123456")
                };
              console.log(n), this.myhChannelId > 20000 ? I(n).then(function (e) {
                0 == e.code ? 1 == t.isFollow ? (document.getElementById("follow").style.display = "none", document.getElementById("no_follow").style.display = "block", console.log(t.newInfo.isFollow), e.data.score > 0 ? M.notify("showAlert", "content", "\u5173\u6CE8\u6210\u529F\uFF0C\u589E\u52A0" + e.data.score + "\u79EF\u5206") : M.notify("showAlert", "content", "\u5173\u6CE8\u6210\u529F")) : (document.getElementById("follow").style.display = "block", document.getElementById("no_follow").style.display = "none", M.notify("showAlert", "content", "\u5DF2\u53D6\u6D88\u5173\u6CE8")) : 3101 == e.code ? (document.getElementById("follow").style.display = "none", document.getElementById("no_follow").style.display = "block", M.notify("showAlert", "content", e.message)) : M.notify("showAlert", "content", e.message);
              }) : C(n).then(function (e) {
                0 == e.code ? 1 == t.isFollow ? (document.getElementById("follow").style.display = "none", document.getElementById("no_follow").style.display = "block", console.log(t.newInfo.isFollow), e.data.score > 0 ? M.notify("showAlert", "content", "\u5173\u6CE8\u6210\u529F\uFF0C\u589E\u52A0" + e.data.score + "\u79EF\u5206") : M.notify("showAlert", "content", "\u5173\u6CE8\u6210\u529F")) : (document.getElementById("follow").style.display = "block", document.getElementById("no_follow").style.display = "none", M.notify("showAlert", "content", "\u5DF2\u53D6\u6D88\u5173\u6CE8")) : 3101 == e.code ? (document.getElementById("follow").style.display = "none", document.getElementById("no_follow").style.display = "block", M.notify("showAlert", "content", e.message)) : M.notify("showAlert", "content", e.message);
              });
            }
          },
          iosFollow: function (e, t) {
            var a = this;
            if (console.log("\u8C03callback\u4E862new", e), this.userInfo = JSON.parse(e), console.log(this.userInfo.userId), void 0 !== this.userInfo.userId && "" != this.userInfo.userId) {
              var n = new Date().getTime(),
                i = {
                  userId: this.userInfo.userId,
                  token: this.userInfo.token,
                  timestamp: n,
                  id: t,
                  type: this.isFollow,
                  sign: N()("timestamp" + n + "userId" + this.userInfo.userId + "test_123456679890123456")
                };
              console.log(i), t > 20000 ? I(i).then(function (e) {
                0 == e.code ? 1 == a.isFollow ? (document.getElementById("follow").style.display = "none", document.getElementById("no_follow").style.display = "block", console.log(a.newInfo.isFollow), e.data.score > 0 ? M.notify("showAlert", "content", "\u5173\u6CE8\u6210\u529F\uFF0C\u589E\u52A0" + e.data.score + "\u79EF\u5206") : M.notify("showAlert", "content", "\u5173\u6CE8\u6210\u529F")) : (document.getElementById("follow").style.display = "block", document.getElementById("no_follow").style.display = "none", M.notify("showAlert", "content", "\u5DF2\u53D6\u6D88\u5173\u6CE8")) : 3101 == e.code ? (document.getElementById("follow").style.display = "none", document.getElementById("no_follow").style.display = "block", M.notify("showAlert", "content", e.message)) : M.notify("showAlert", "content", e.message);
              }) : C(i).then(function (e) {
                0 == e.code ? 1 == a.isFollow ? (document.getElementById("follow").style.display = "none", document.getElementById("no_follow").style.display = "block", console.log(a.newInfo.isFollow), e.data.score > 0 ? M.notify("showAlert", "content", "\u5173\u6CE8\u6210\u529F\uFF0C\u589E\u52A0" + e.data.score + "\u79EF\u5206") : M.notify("showAlert", "content", "\u5173\u6CE8\u6210\u529F")) : (document.getElementById("follow").style.display = "block", document.getElementById("no_follow").style.display = "none", M.notify("showAlert", "content", "\u5DF2\u53D6\u6D88\u5173\u6CE8")) : 3101 == e.code ? (document.getElementById("follow").style.display = "none", document.getElementById("no_follow").style.display = "block", M.notify("showAlert", "content", e.message)) : M.notify("showAlert", "content", e.message);
              });
            }
          },
          toLink: function (e) {
            var t = JSON.parse(e),
              a = {
                method: "channelHome",
                data: {
                  channelId: "" + t.id
                }
              },
              n = "{\"method\":\"channelHome\",data:{\"channelId\":\"" + t.id + "\"}}",
              i = navigator.userAgent;
            navigator.appVersion, i.indexOf("Android") > -1 || i.indexOf("Linux");
            !!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? window.webkit.messageHandlers.Native.postMessage(a) : window.Native.postMessage(n);
          },
          countdown: function () {
            var e = new Date(document.getElementById("countdown").getAttribute("data-finishTime")),
              t = document.getElementById("countdown").getAttribute("data-timeFormatType"),
              a = e - new Date();
            a < 0 && (document.getElementById("countdown").style.display = "none"), this.formatSeconds(a, t);
          },
          formatSeconds: function (e, t) {
            var a,
              n = 0,
              i = 0,
              r = 0,
              s = Math.ceil(e / 1000);
            r = Math.floor(s / 3600), a = Math.floor(r / 24), Math.floor(r % 24), r = Math.floor(r % 24), Math.floor(s / 60 % 60), i = Math.floor(s / 60 % 60), Math.floor(s % 60), n = Math.floor(s % 60), this.today = a, this.hourTime = r, this.minuteTime = i, this.secondTime = n, 1 == t ? 0 == this.minuteTime && (document.getElementById("countdown").style.display = "none") : 2 == t ? 0 == this.hourTime && (document.getElementById("countdown").style.display = "none") : 3 == t && 0 == this.today && (document.getElementById("countdown").style.display = "none");
          }
        },
        created: function () {},
        mounted: function () {
          var e = this;
          window.callBackFollow = this.callBackFollow, window.fontSizeCallBack = this.fontSizeCallBack, this.$nextTick(function () {
            e.setINT = setInterval(function () {
              null == document.getElementById("countdown") ? clearInterval(e.setINT) : e.countdown();
            }, 200);
          }), this.fontSize = this.$route.query.fontSize, this.fontSizeCallBack(this.fontSize + "%");
        }
      }),
      B = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", {
            staticClass: "div-body"
          }, [n("div", {
            staticClass: "introtitle",
            style: {
              textAlign: e.newInfo.fontStyle
            },
            attrs: {
              id: "introtitle"
            },
            domProps: {
              innerHTML: e._s(e.newInfo.introtitle)
            }
          }), e._v(" "), n("div", {
            staticClass: "div-title",
            style: {
              textAlign: e.newInfo.fontStyle
            },
            attrs: {
              id: "title"
            },
            domProps: {
              innerHTML: e._s(e.newInfo.title)
            }
          }), e._v(" "), n("div", {
            staticClass: "subheading",
            style: {
              textAlign: e.newInfo.fontStyle
            },
            attrs: {
              id: "subheading"
            },
            domProps: {
              innerHTML: e._s(e.newInfo.subheading)
            }
          }), e._v(" "), "undefined" != e.newInfo.source ? n("div", {
            staticClass: "div-newsInfo"
          }, [e.newInfo.isMoldyFish ? e._e() : n("div", {
            staticClass: "div-newsInfo-1",
            attrs: {
              id: "source"
            }
          }, [n("span", [e._v(e._s(e.newInfo.source))])]), e._v(" "), e.newInfo.isMoldyFish && e.newInfo.myhChannelId > 0 ? n("div", {
            staticClass: "div-newsInfo-1",
            attrs: {
              id: "source"
            }
          }, [n("span", [e._v(e._s(e.newInfo.myhChannelName))]), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !e.newInfo.isFollow,
              expression: "!newInfo.isFollow"
            }],
            staticClass: "follow",
            attrs: {
              id: "follow"
            },
            on: {
              click: function (t) {
                return e.follow(1, e.newInfo.myhChannelId, e.newInfo);
              }
            }
          }, [e._v("\u5173\u6CE8")]), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.newInfo.isFollow,
              expression: "newInfo.isFollow"
            }],
            staticClass: "no_follow",
            attrs: {
              id: "no_follow"
            },
            on: {
              click: function (t) {
                return e.follow(2, e.newInfo.myhChannelId, e.newInfo);
              }
            }
          }, [e._v("\u5DF2\u5173\u6CE8")])]) : e._e()]) : e._e(), e._v(" "), e.newInfo.read > 0 ? n("div", {
            staticClass: "div-newsInfo-2",
            attrs: {
              id: "div-newsInfo-2"
            }
          }, [n("span", [e._v(e._s(e.newInfo.sourcetime) + "\xA0|\xA0")]), e._v(" "), n("div"), e._v(" "), e.newInfo.read < 10000 ? n("span", [e._v("\xA0" + e._s(e.newInfo.read))]) : n("span", [e._v("\xA0" + e._s((e.newInfo.read / 10000).toFixed(1)) + "\u4E07\xA0")]), e._v("\xA0\xA0"), null != e.newInfo.sourceChannel && "" != e.newInfo.sourceChannel ? n("span", {
            on: {
              click: function (t) {
                return e.toLink(e.newInfo.sourceChannel);
              }
            }
          }, [e._v(e._s(JSON.parse(e.newInfo.sourceChannel).name))]) : e._e()]) : e._e(), e._v(" "), null != e.newInfo.aiAbstract ? n("div", {
            staticClass: "AI_detail",
            attrs: {
              id: "AI_detail"
            }
          }, [n("img", {
            staticClass: "ai_icon",
            attrs: {
              src: a("PNYO"),
              id: "ai_icon"
            }
          }), e._v("\n    " + e._s(e.newInfo.aiAbstract) + "\n    ")]) : e._e(), e._v(" "), null != e.detailCountDown && 0 == e.detailCountDown.position ? n("div", {
            staticClass: "countdown",
            attrs: {
              id: "countdown",
              "data-finishTime": e.finishTime,
              "data-timeFormatType": e.timeFormatType
            }
          }, [n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 0 == e.detailCountDown.timeFormatType,
              expression: "detailCountDown.timeFormatType == 0"
            }],
            staticClass: "countdown-name"
          }, [n("span", {
            style: {
              color: e.detailCountDown.textColor
            }
          }, [e._v(e._s(e.detailCountDown.name))]), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.today))]) : e._e(), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5929")]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.hourTime))]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u65F6")]) : e._e(), e._v(" "), e.minuteTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.minuteTime))]) : e._e(), e._v(" "), e.minuteTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5206")]) : e._e(), e._v(" "), e.secondTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.secondTime))]) : e._e(), e._v(" "), e.secondTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u79D2")]) : e._e()]), e._v(" "), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 1 == e.detailCountDown.timeFormatType,
              expression: "detailCountDown.timeFormatType == 1"
            }],
            staticClass: "countdown-name"
          }, [n("span", {
            style: {
              color: e.detailCountDown.textColor
            }
          }, [e._v(e._s(e.detailCountDown.name))]), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.today))]) : e._e(), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5929")]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.hourTime))]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u65F6")]) : e._e(), e._v(" "), e.minuteTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.minuteTime))]) : e._e(), e._v(" "), e.minuteTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5206")]) : e._e()]), e._v(" "), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 2 == e.detailCountDown.timeFormatType,
              expression: "detailCountDown.timeFormatType == 2"
            }],
            staticClass: "countdown-name"
          }, [n("span", {
            style: {
              color: e.detailCountDown.textColor
            }
          }, [e._v(e._s(e.detailCountDown.name))]), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.today))]) : e._e(), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5929")]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.hourTime))]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u65F6")]) : e._e()]), e._v(" "), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 3 == e.detailCountDown.timeFormatType,
              expression: "detailCountDown.timeFormatType == 3"
            }],
            staticClass: "countdown-name"
          }, [n("span", {
            style: {
              color: e.detailCountDown.textColor
            }
          }, [e._v(e._s(e.detailCountDown.name))]), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.today))]) : e._e(), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5929")]) : e._e()])]) : e._e(), e._v(" "), n("div", {
            staticClass: "body",
            attrs: {
              id: "content"
            },
            domProps: {
              innerHTML: e._s(e.newInfo.body)
            }
          }), e._v(" "), null != e.detailCountDown && 1 == e.detailCountDown.position ? n("div", {
            staticClass: "countdown",
            attrs: {
              id: "countdown",
              "data-finishTime": e.finishTime,
              "data-timeFormatType": e.timeFormatType
            }
          }, [n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 0 == e.detailCountDown.timeFormatType,
              expression: "detailCountDown.timeFormatType == 0"
            }],
            staticClass: "countdown-name"
          }, [n("span", {
            style: {
              color: e.detailCountDown.textColor
            }
          }, [e._v(e._s(e.detailCountDown.name))]), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.today))]) : e._e(), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5929")]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.hourTime))]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u65F6")]) : e._e(), e._v(" "), e.minuteTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.minuteTime))]) : e._e(), e._v(" "), e.minuteTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5206")]) : e._e(), e._v(" "), e.secondTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.secondTime))]) : e._e(), e._v(" "), e.secondTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u79D2")]) : e._e()]), e._v(" "), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 1 == e.detailCountDown.timeFormatType,
              expression: "detailCountDown.timeFormatType == 1"
            }],
            staticClass: "countdown-name"
          }, [n("span", {
            style: {
              color: e.detailCountDown.textColor
            }
          }, [e._v(e._s(e.detailCountDown.name))]), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.today))]) : e._e(), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5929")]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.hourTime))]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u65F6")]) : e._e(), e._v(" "), e.minuteTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.minuteTime))]) : e._e(), e._v(" "), e.minuteTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5206")]) : e._e()]), e._v(" "), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 2 == e.detailCountDown.timeFormatType,
              expression: "detailCountDown.timeFormatType == 2"
            }],
            staticClass: "countdown-name"
          }, [n("span", {
            style: {
              color: e.detailCountDown.textColor
            }
          }, [e._v(e._s(e.detailCountDown.name))]), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.today))]) : e._e(), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5929")]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.hourTime))]) : e._e(), e._v(" "), e.hourTime > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u65F6")]) : e._e()]), e._v(" "), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 3 == e.detailCountDown.timeFormatType,
              expression: "detailCountDown.timeFormatType == 3"
            }],
            staticClass: "countdown-name"
          }, [n("span", {
            style: {
              color: e.detailCountDown.textColor
            }
          }, [e._v(e._s(e.detailCountDown.name))]), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "number",
            style: {
              color: e.detailCountDown.numberColor
            }
          }, [e._v(e._s(e.today))]) : e._e(), e._v(" "), e.today > 0 ? n("span", {
            staticClass: "countdown-text"
          }, [e._v("\u5929")]) : e._e()])]) : e._e()]);
        },
        staticRenderFns: []
      };
    var D = a("VU/8")(T, B, !1, function (e) {
        a("ora6");
      }, "data-v-a866e2b6", null).exports,
      E = (Boolean, {
        name: "yp-share",
        props: {
          isShow: Boolean
        },
        methods: {
          openShare: function (e) {
            var t = {
                method: "Share",
                shareType: e
              },
              a = "{\"method\":\"Share\",\"shareType\":\"" + e + "\"}",
              n = navigator.userAgent,
              i = (navigator.appVersion, n.indexOf("Android") > -1 || n.indexOf("Linux") > -1);
            !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(t), i && window.Native.postMessage(a);
          }
        },
        mounted: function () {}
      }),
      O = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return e.isShow ? a("div", {
            staticStyle: {
              width: "100%",
              "margin-top": "2rem",
              "margin-bottom": "3%"
            }
          }, [e._m(0), e._v(" "), a("div", {
            staticClass: "iocnDiv"
          }, [a("div", {
            staticClass: "oneIcon",
            on: {
              click: function (t) {
                return e.openShare("poster");
              }
            }
          }, [a("div", {
            staticClass: "iocn",
            staticStyle: {
              "background-image": "url('static/images/hb.png')"
            }
          }), e._v(" "), a("div", {
            staticClass: "txt"
          }, [e._v("\u6D77\u62A5")])]), e._v(" "), a("div", {
            staticClass: "oneIcon",
            on: {
              click: function (t) {
                return e.openShare("wx_moments");
              }
            }
          }, [a("div", {
            staticClass: "iocn",
            staticStyle: {
              "background-image": "url('static/images/wechat_moment.png')"
            }
          }), e._v(" "), a("div", {
            staticClass: "txt"
          }, [e._v("\u670B\u53CB\u5708")])]), e._v(" "), a("div", {
            staticClass: "oneIcon",
            on: {
              click: function (t) {
                return e.openShare("wx_friend");
              }
            }
          }, [a("div", {
            staticClass: "iocn",
            staticStyle: {
              "background-image": "url('static/images/wechat.png')"
            }
          }), e._v(" "), a("div", {
            staticClass: "txt"
          }, [e._v("\u5FAE\u4FE1")])]), e._v(" "), a("div", {
            staticClass: "oneIcon",
            on: {
              click: function (t) {
                return e.openShare("QQ");
              }
            }
          }, [a("div", {
            staticClass: "iocn",
            staticStyle: {
              "background-image": "url('static/images/QQ.png')"
            }
          }), e._v(" "), a("div", {
            staticClass: "txt"
          }, [e._v("QQ")])]), e._v(" "), a("div", {
            staticClass: "oneIcon",
            on: {
              click: function (t) {
                return e.openShare("sina");
              }
            }
          }, [a("div", {
            staticClass: "iocn",
            staticStyle: {
              "background-image": "url('static/images/weibo.png')"
            }
          }), e._v(" "), a("div", {
            staticClass: "txt"
          }, [e._v("\u5FAE\u535A")])]), e._v(" "), a("div", {
            staticClass: "oneIcon",
            on: {
              click: function (t) {
                return e.openShare("more");
              }
            }
          }, [a("div", {
            staticClass: "iocn",
            staticStyle: {
              "background-image": "url('static/images/more.png')"
            }
          }), e._v(" "), a("div", {
            staticClass: "txt"
          }, [e._v("\u66F4\u591A")])])])]) : e._e();
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div_father"
          }, [t("div", [t("span", [this._v("-\xA0\u5206\u4EAB\u81F3\xA0-")])])]);
        }]
      };
    var P = a("VU/8")(E, O, !1, function (e) {
        a("m2Xv");
      }, "data-v-3a3e2e5d", null).exports,
      V = a("YF26");
    a("wSOg");
    Array, Number, String, Boolean, String, Number;
    a("wSOg");
    var R = {
        name: "yp-vote",
        props: {
          voteList: Array,
          isEnd: Number,
          isShare: !1,
          userInfo: String,
          isVoteLogin: Boolean,
          newsId: String,
          vBottom: Number
        },
        data: function () {
          return {
            checkList: [],
            resultList: [],
            is_show_vote: !0,
            list: [],
            overlay_show: !1,
            nvcVal: "",
            sessionId: "",
            sig: "",
            authToken: "",
            is_sub: !0
          };
        },
        methods: {
          submitVote: function (e, t) {
            this.is_sub && this.onclick(), this.is_sub = !1;
          },
          checked: function (e, t, a) {
            this.isHasObj(this.checkList, e, t, a);
            var n = this.userInfo;
            "object" != (void 0 === n ? "undefined" : u()(n)) && "[object object]" != Object.prototype.toString.call(n).toLowerCase() && n.length && (n = JSON.parse(n)), 1 == this.voteList[0].isLogin ? (localStorage.removeItem(this.newsId + "_" + n.userId), localStorage.setItem(this.newsId + "_" + n.userId, m()(this.checkList))) : (localStorage.removeItem(this.newsId + "_" + n.deviceId), localStorage.setItem(this.newsId + "_" + n.deviceId, m()(this.checkList)));
          },
          removeByValue: function (e, t, a) {
            for (var n = 0; n < e.length; n++) if (-1 != m()(e[n]).indexOf(m()(t)) && -1 != m()(e[n]).indexOf(m()(a))) {
              e.splice(n, 1);
              break;
            }
          },
          isHasObj: function (e, t, a, n) {
            for (var i = 0, r = 0; r < e.length; r++) -1 != m()(e[r]).indexOf(m()(t)) && -1 != m()(e[r]).indexOf(m()(a)) && (i = 1);
            if (1 == i) this.removeByValue(e, t, a);else if (this.checkList.push({
              voteId: "" + t,
              optionsId: "" + a
            }), 0 == n) {
              var s = this.checkList.filter(function (e) {
                return e.voteId == t && e.optionsId != a;
              });
              void 0 !== s[0] && (s = s[0], this.removeByValue(e, s.voteId, s.optionsId));
            }
          },
          onclick: function () {
            var e = this;
            window.nvc.getNVCValAsync(function (t) {
              var a = document.createElement("script");
              document.body.append(a), e.overlay_show = !1, e.validation(), e.nvcVal = t;
            });
          },
          deleteRadioArr: function (e) {
            return this.checkList = this.checkList.filter(function (t) {
              return t.voteId === e;
            }), this.checkList;
          },
          deleteReelectArr: function (e, t) {
            return this.checkList = this.checkList.filter(function (a) {
              return a.voteId === e && a.optionsId === t;
            }), this.checkList;
          },
          validation: function () {
            var e = this.userInfo;
            if ("object" != (void 0 === e ? "undefined" : u()(e)) && "[object object]" != Object.prototype.toString.call(e).toLowerCase() && e.length && (e = JSON.parse(e)), this.CompareDate(M.getNowFormatDate(), this.voteList[0].endTime)) return this.notify("showAlert", "content", "\u6295\u7968\u5DF2\u7ED3\u675F"), this.getVoteResult("", e.deviceId), !1;
            if (1 == this.voteList[0].isLogin) {
              if (void 0 === e.userId || "" == e.userId) return this.is_sub = !0, void this.notify("userJson", "isLogin", "true");
              this.getPreVote(this.newsId, e, 1, 1, 1);
            } else if (null == localStorage.getItem(this.newsId + "_" + e.deviceId)) {
              var t = this.voteList[0];
              this.scrollIntoView(t.id);
            } else this.getPreVote(this.newsId, e, 1, 1, 1);
          },
          getPreVote: function (e, t, a, n, i) {
            var r = this,
              s = {
                newsId: e,
                userId: t.userId,
                deviceId: t.deviceId,
                token: t.token,
                type: a
              };
            S(s).then(function (e) {
              if (0 != e.code && 130 != e.code) 1 == n && r.notify("showAlert", "content", e.message), r.getVoteResult(t.userId, t.deviceId);else if (1 == i) {
                var a = r.validationVoteInfo(r.voteList);
                r.checkedList(), a && c()({
                  method: "POST",
                  url: V.a.apiUrl + "/yongpai-ugc/api/vote/vote_multi",
                  data: {
                    votes: r.list,
                    userId: t.userId,
                    timestamp: new Date().getTime(),
                    deviceId: t.deviceId,
                    token: t.token,
                    type: 1,
                    sign: N()("timestamp" + new Date().getTime() + "type1vote-multi_20191018(zhejiang120102#$%)"),
                    nvc: r.nvcVal,
                    sessionId: r.sessionId,
                    sig: r.sig,
                    authToken: r.authToken,
                    scene: "nc_activity_h5"
                  }
                }).then(function (e) {
                  if (r.content = e.message, 0 == e.code) r.content = "\u6295\u7968\u6210\u529F", r.notify("showAlert", "content", r.content), localStorage.removeItem(r.newsId + "_" + t.deviceId), r.getVoteResult("", t.deviceId);else if (2101 == e.code) r.getVoteResult("", t.deviceId);else if (123 == e.code || 125 == e.code || 203 == e.code) r.notify("loginTimeOut", "content", r.content);else if (2112 == e.code) {
                    r.overlay_show = !0;
                    var a = r;
                    r.nvcVal = "", document.getElementById("nc").innerHTML = "", AWSC.use("nc", function (e, n) {
                      window.nc = n.init({
                        appkey: "FFFF0N00000000009F9B",
                        scene: "nc_activity_h5",
                        renderTo: "#nc",
                        customWidth: 235,
                        success: function (e) {
                          a.overlay_show = !1, a.sessionId = e.sessionId, a.sig = e.sig, a.authToken = e.token, a.getPreVote(a.newsId, t, 1, 1, 1);
                        },
                        fail: function (e) {
                          window.console && console.log(e), window.nc.reset;
                        },
                        error: function (e) {
                          window.console && console.log(e);
                        }
                      });
                    });
                  } else r.notify("showAlert", "content", r.content);
                  r.is_sub = !0;
                });
              }
            });
          },
          validationVoteInfo: function (e) {
            for (var t = this, a = 0; a < e.length; a++) {
              var n = e[a];
              if (0 == n.type) {
                var i = !1;
                if ($("input:radio[name='item" + n.id + "']:checked").each(function () {
                  i = !0;
                }), !i) return this.notify("showAlert", "content", "\u5355\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879"), this.scrollIntoView(n.id), this.is_sub = !0, !1;
              } else {
                var r = function () {
                  var e = "";
                  return $("input:checkbox[name='item" + n.id + "']:checked").each(function () {
                    e += "" == e ? $(this).val() : "," + $(this).val();
                  }), e.split(",").length < n.voteMin ? (t.notify("showAlert", "content", "\u60A8\u7684\u6295\u7968\u9009\u9879\u5C11\u4E8E" + n.voteMin + "\u9879\uFF0C\u8BF7\u6838\u5BF9"), t.scrollIntoView(n.id), t.is_sub = !0, {
                    v: !1
                  }) : e.split(",").length > n.voteMax ? (t.notify("showAlert", "content", "\u60A8\u7684\u6295\u7968\u9009\u9879\u591A\u4E8E" + n.voteMax + "\u9879\uFF0C\u8BF7\u6838\u5BF9"), t.scrollIntoView(n.id), t.is_sub = !0, {
                    v: !1
                  }) : void 0;
                }();
                if ("object" === (void 0 === r ? "undefined" : u()(r))) return r.v;
              }
            }
            return !0;
          },
          scrollIntoView: function (e) {
            var t = "#miao_" + e;
            document.querySelector(t).scrollIntoView(!0), document.getElementById("miao_" + e).style.cssText += "background:rgba(255,255,255,1);box-shadow:0px 0px 12px 0px rgba(245,86,86,0.3);border-radius:10px;border:1px solid rgba(205,51,51,0.3);";
          },
          notify: function (e, t, a) {
            var n = navigator.userAgent,
              i = (navigator.appVersion, n.indexOf("Android") > -1 || n.indexOf("Linux") > -1),
              r = !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
              s = null;
            "content" == t ? s = {
              method: "" + e,
              data: {
                content: "" + a
              }
            } : "isLogin" == t && (s = {
              method: "" + e,
              data: {
                isLogin: "" + a
              }
            });
            var l = "{\"method\":\"" + e + "\",data:{\"" + t + "\":\"" + a + "\"}}";
            r && window.webkit.messageHandlers.Native.postMessage(s), i && window.Native.postMessage(l);
          },
          getVoteResult: function (e, t) {
            for (var a = this, n = "", i = 0; i < this.voteList.length; i++) n += "" == n ? this.voteList[i].id : "," + this.voteList[i].id;
            h("" != e && "" == t ? {
              votes: n,
              userId: e
            } : {
              votes: n,
              deviceId: t
            }).then(function (e) {
              if (0 == e.code) {
                a.resultList = e.data, a.is_show_vote = !1;
                for (var t = document.getElementById("news-body").clientWidth, n = 0; n < a.resultList.length; n++) {
                  for (var i = a.resultList[n], r = 0, s = 0, l = 0; l < i.options.length; l++) r += i.options[l].voteCount;
                  i.count = r;
                }
                for (var o = 0; o < a.resultList.length; o++) {
                  i = a.resultList[o];
                  for (var u = 0; u < i.options.length; u++) {
                    var p = i.options[u];
                    s = 0;
                    0 != i.count && 0 != p.voteCount ? (s = (s = p.voteCount / i.count * 100).toFixed(2), p.per = s, p.per2 = t * (p.voteCount / i.count), p.per2 = p.per2 - 10, p.per2 >= t && (p.per2 = t - 10)) : (p.per = s, p.per2 = 0);
                  }
                }
              }
            });
          },
          checkedList: function () {
            this.list.length = 0;
            for (var e = 0; e < this.voteList.length; e++) {
              var t = this.voteList[e];
              if (0 == t.type) {
                var a = "";
                $("input:radio[name='item" + t.id + "']:checked").each(function () {
                  a += $(this).val();
                }), this.list.push({
                  voteId: "" + t.id,
                  optionsId: "" + a
                });
              } else {
                var n = "";
                $("input:checkbox[name='item" + t.id + "']:checked").each(function () {
                  n += "" == n ? $(this).val() : "," + $(this).val();
                }), this.list.push({
                  voteId: "" + t.id,
                  optionsId: "" + n
                });
              }
            }
          },
          CompareDate: function (e, t) {
            return new Date(e.replace(/-/g, "/")) > new Date(t.replace(/-/g, "/"));
          },
          validation2: function () {
            var e = this.userInfo;
            if ("object" != (void 0 === e ? "undefined" : u()(e)) && "[object object]" != Object.prototype.toString.call(e).toLowerCase() && e.length && (e = JSON.parse(e)), this.CompareDate(M.getNowFormatDate(), this.voteList[0].endTime)) return this.getVoteResult("", e.deviceId), !1;
            if (1 == this.voteList[0].isLogin) {
              if (void 0 === e.userId || "" == e.userId) return;
              this.getPreVote2();
            } else if (null == localStorage.getItem(this.newsId + "_" + e.deviceId)) {
              var t = this.voteList[0];
              this.scrollIntoView(t.id);
            } else this.getPreVote2();
          },
          getPreVote2: function () {
            var e = this,
              t = {
                newsId: this.newsId,
                userId: this.userInfo.userId,
                deviceId: this.userInfo.deviceId,
                token: this.userInfo.token,
                type: 1
              };
            S(t).then(function (t) {
              0 != t.code && 130 != t.code && e.getVoteResult(e.userInfo.userId, e.userInfo.deviceId);
            });
          }
        },
        mounted: function () {
          var e = this.userInfo;
          "object" != (void 0 === e ? "undefined" : u()(e)) && "[object object]" != Object.prototype.toString.call(e).toLowerCase() && e.length && (e = JSON.parse(e));
          var t = JSON.parse(localStorage.getItem(this.$route.query.newsId + "_" + e.deviceId));
          if (null != t) for (var a = 0; a < t.length; a++) $("#item_" + t[a].optionsId).attr("checked", "checked");
          this.validation2(), AWSC.use("nvc", function (e, t) {
            window.nvc = t.init({
              appkey: "FFFF0N00000000009F9B",
              scene: "nc_activity_h5",
              success: function (e) {
                window.console && console.log(e);
              },
              fail: function (e) {
                window.console && console.log(e);
              },
              error: function (e) {
                window.console && console.log(e);
              }
            });
          });
        }
      },
      U = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "92%",
              "margin-bottom": "3%",
              "margin-left": "4%",
              position: "relative"
            }
          }, [e._m(0), e._v(" "), e._l(e.voteList, function (t, n) {
            return e.is_show_vote ? a("div", [a("div", {
              staticClass: "vote_div",
              attrs: {
                id: "miao_" + t.id
              }
            }, [a("div", {
              staticClass: "vote_title"
            }, [1 == t.type ? a("span", [e._v("\u3010\u591A\u9009\u3011" + e._s(t.title) + "\n          "), t.voteMin != t.voteMax ? a("span", [e._v("\u81F3\u5C11\u9009\u8DB3" + e._s(t.voteMin) + "\u4E2A\uFF0C\u81F3\u591A\u9009\u62E9" + e._s(t.voteMax) + "\u4E2A")]) : e._e(), e._v(" "), t.voteMin == t.voteMax ? a("span", [e._v("\u5FC5\u987B\u9009\u8DB3" + e._s(t.voteMin) + "\u4E2A,\u591A\u9009\u6216\u5C11\u9009\u65E0\u6548")]) : e._e()]) : e._e(), e._v(" "), 0 == t.type ? a("span", [e._v("\u3010\u5355\u9009\u3011" + e._s(t.title))]) : e._e()]), e._v(" "), e._l(t.options, function (n, i) {
              return a("div", {
                staticClass: "options_div"
              }, [1 == t.type ? a("div", {
                staticClass: "vote_select"
              }, [a("input", {
                staticStyle: {
                  display: "none"
                },
                attrs: {
                  id: "item_" + n.id,
                  type: "checkbox",
                  name: "item" + t.id
                },
                domProps: {
                  value: n.id
                }
              }), e._v(" "), a("label", {
                attrs: {
                  for: "item_" + n.id
                },
                on: {
                  click: function (a) {
                    return e.checked(t.id, n.id, t.voteMax);
                  }
                }
              })]) : e._e(), e._v(" "), 0 == t.type ? a("div", {
                staticClass: "vote_select"
              }, [a("input", {
                staticStyle: {
                  display: "none"
                },
                attrs: {
                  id: "item_" + n.id,
                  type: "radio",
                  name: "item" + t.id
                },
                domProps: {
                  value: n.id
                }
              }), e._v(" "), a("label", {
                staticStyle: {
                  "border-radius": "50%"
                },
                attrs: {
                  for: "item_" + n.id
                },
                on: {
                  click: function (a) {
                    return e.checked(t.id, n.id, t.voteMax);
                  }
                }
              })]) : e._e(), e._v(" "), a("div", {
                staticClass: "vote_answer"
              }, [e._v("\n          " + e._s(n.options) + "\n        ")])]);
            })], 2)]) : e._e();
          }), e._v(" "), e._l(e.resultList, function (t, n) {
            return e.is_show_vote ? e._e() : a("div", {
              key: t.id,
              staticClass: "vote_div"
            }, [a("div", {
              staticClass: "vote_title"
            }, [1 == t.type ? a("span", [e._v("\u3010\u591A\u9009\u3011" + e._s(t.title) + "\n        "), t.voteMin != t.voteMax ? a("span", [e._v("\u81F3\u5C11\u9009\u8DB3" + e._s(t.voteMin) + "\u4E2A\uFF0C\u81F3\u591A\u9009\u62E9" + e._s(t.voteMax) + "\u4E2A")]) : e._e(), e._v(" "), t.voteMin == t.voteMax ? a("span", [e._v("\u5FC5\u987B\u9009\u8DB3" + e._s(t.voteMin) + "\u4E2A,\u591A\u9009\u6216\u5C11\u9009\u65E0\u6548")]) : e._e()]) : e._e(), e._v(" "), 0 == t.type ? a("span", [e._v("\u3010\u5355\u9009\u3011" + e._s(t.title))]) : e._e()]), e._v(" "), a("table", {
              staticClass: "vote-result"
            }, e._l(t.options, function (t, n) {
              return a("tr", [a("td", {
                staticStyle: {
                  width: "190px"
                }
              }, [e._v(e._s(t.options))]), e._v(" "), a("td", {
                staticStyle: {
                  width: "60px",
                  "text-align": "right",
                  "font-size": "12px"
                }
              }, [e._v(e._s(t.voteCount) + "\u7968")]), e._v(" "), a("td", {
                staticStyle: {
                  width: "60px",
                  "text-align": "center",
                  "font-size": "12px"
                }
              }, [e._v(e._s(t.per) + "%")]), e._v(" "), a("table", {
                staticStyle: {
                  height: "1px",
                  "background-color": "#cd3333",
                  "margin-left": "10px"
                },
                style: {
                  width: t.per2 + "px"
                }
              })]);
            }), 0)]);
          }), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              "text-align": "center"
            }
          }, [e.is_show_vote ? a("div", {
            staticClass: "div_vote_button",
            on: {
              click: function (t) {
                return e.submitVote();
              }
            }
          }, [a("span", {
            staticClass: "vote_font"
          }, [e._v("\u6295\u7968")])]) : e._e(), e._v(" "), e.is_show_vote ? e._e() : a("div", {
            staticClass: "div_vote_button"
          }, [a("span", {
            staticClass: "vote_font"
          }, [e._v("\u5DF2\u6295\u7968")])])]), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.overlay_show,
              expression: "overlay_show"
            }],
            staticClass: "overlay"
          }), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.overlay_show,
              expression: "overlay_show"
            }],
            staticClass: "block"
          }, [a("div", {
            staticClass: "overlay_title"
          }, [e._v("\u8BF7\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1")]), e._v(" "), e._m(1)])], 2);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div_father"
          }, [t("div", {
            staticClass: "div_head"
          }, [t("span", {
            staticClass: "vote_head"
          }, [this._v("-\xA0\u6295\xA0\u7968\xA0-")])])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("div", {
            attrs: {
              id: "nc"
            }
          })]);
        }]
      };
    var F = a("VU/8")(R, U, !1, function (e) {
        a("Md9n");
      }, "data-v-6bc480f2", null).exports,
      j = (Boolean, Object, String, Object, String, {
        name: "yp-like",
        props: {
          isShow: Boolean,
          userInfo: Object | String,
          likeInfo: Object,
          newsId: String
        },
        data: function () {
          return {
            isLoad: !1
          };
        },
        methods: {
          clickLike: function () {
            if (!this.isLoad) {
              var e = this.userInfo;
              if ("object" != (void 0 === e ? "undefined" : u()(e)) && "[object object]" != Object.prototype.toString.call(e).toLowerCase() && e.length && (e = JSON.parse(e)), void 0 !== e.userId && "" != e.userId) {
                if (0 == this.likeInfo.isPraise) {
                  var t = navigator.userAgent,
                    a = (navigator.appVersion, t.indexOf("Android") > -1 || t.indexOf("Linux") > -1);
                  !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                    method: "h5Praise"
                  }), a && window.Native.postMessage("{\"method\":\"h5Praise\"}"), window.h5PraiseCallBack = this.h5PraiseCallBack;
                } else this.notify("showAlert", "content", "\u60A8\u5DF2\u732E\u8FC7\u7231\u5FC3\u4E86~");
              } else this.notify("userJson", "isLogin", "true");
            }
          },
          h5PraiseCallBack: function (e) {
            console.log("h5PraiseCallBack", e), this.likeInfo.praise++, this.likeInfo.isPraise = 1;
          },
          notify: function (e, t, a) {
            var n = navigator.userAgent,
              i = (navigator.appVersion, n.indexOf("Android") > -1 || n.indexOf("Linux") > -1),
              r = !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
              s = null;
            "content" == t ? s = {
              method: "" + e,
              data: {
                content: "" + a
              }
            } : "isLogin" == t && (s = {
              method: "" + e,
              data: {
                isLogin: "" + a
              }
            });
            var l = "{\"method\":\"" + e + "\",data:{\"" + t + "\":\"" + a + "\"}}";
            r && window.webkit.messageHandlers.Native.postMessage(s), i && window.Native.postMessage(l);
          }
        },
        mounted: function () {
          window.h5PraiseCallBack = this.h5PraiseCallBack;
        }
      }),
      z = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return e.isShow ? a("div", {
            staticStyle: {
              width: "100%",
              "margin-top": "2rem",
              "margin-bottom": "3%"
            }
          }, [a("div", {
            staticClass: "btn",
            on: {
              click: function (t) {
                return e.clickLike();
              }
            }
          }, [a("div", {
            staticClass: "boxshow"
          }, [1 == e.likeInfo.isPraise ? a("div", {
            staticClass: "icon icon1"
          }) : a("div", {
            staticClass: "icon icon2"
          }), e._v(" "), a("div", {
            class: 1 == e.likeInfo.isPraise ? "txt liked" : "txt "
          }, [e._v("\n        " + e._s(e.likeInfo.praise) + "\n      ")])])])]) : e._e();
        },
        staticRenderFns: []
      };
    var W = a("VU/8")(j, z, !1, function (e) {
        a("wSdX");
      }, "data-v-81ca7a74", null).exports,
      H = {
        data: function () {
          return {
            isShowTopic: !1,
            newsId: "",
            imgParame: "?x-oss-process=image/resize,w_372",
            imgParame2: "?x-oss-process=image/resize,w_800",
            newsInfo: {},
            topic: {},
            topicList: [],
            isMore: !1,
            topicId: "",
            num: 0,
            voteList: [],
            isShowVote: !1,
            isEnd: 2,
            isVoteLogin: !1,
            srcList: [],
            htmlList: [],
            isShowShare: !0,
            isShowLike: !1,
            userInfo: {},
            relatedNewsList: [],
            isShowRelatedMore: !1,
            isShowRelated: !1,
            currentPage: 1,
            audioList: [],
            myhChannelId: 0,
            v_bottom: 30,
            fontSize: "",
            detailCountDown: {},
            finishTime: null,
            showDetail: !1,
            timeFormatType: null,
            likeInfo: {}
          };
        },
        components: {
          "yp-detail": D,
          "yp-share": P,
          "yp-vote": F,
          "yp-like": W
        },
        methods: {
          get_news_detail: function () {
            var e = this,
              t = navigator.userAgent;
            navigator.appVersion;
            !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && (this.userInfo = JSON.parse(this.userInfo));
            var a = null;
            a = null == this.userInfo ? {
              newsId: this.newsId
            } : void 0 === this.userInfo.userId || "" == this.userInfo.userId ? {
              newsId: this.newsId
            } : {
              newsId: this.newsId,
              userId: this.userInfo.userId
            }, d(a).then(function (t) {
              if (0 === t.code) {
                if (e.showDetail = !0, e.newsInfo = t.data, e.likeInfo = {
                  praise: e.newsInfo.praise,
                  isPraise: e.newsInfo.isPraise
                }, null == e.newsInfo.countdown) e.detailCountDown = null;else e.detailCountDown = e.newsInfo.countdown.detailCountDown, new Date(e.newsInfo.countdown.finishTime) - new Date() < 0 ? e.detailCountDown = null : (e.finishTime = e.newsInfo.countdown.finishTime, e.timeFormatType = e.newsInfo.countdown.detailCountDown.timeFormatType);
                e.newsInfo.hasOwnProperty("detailTitle") && (e.newsInfo.title = e.newsInfo.detailTitle), e.newsInfo.hasOwnProperty("fontStyle") && (1 == e.newsInfo.fontStyle ? e.newsInfo.fontStyle = "left" : 2 == e.newsInfo.fontStyle ? e.newsInfo.fontStyle = "center" : 3 == e.newsInfo.fontStyle && (e.newsInfo.fontStyle = "right")), e.newsInfo.read > 10000 && (e.num = 0.0001 * e.newsInfo.read, e.num = e.num.toFixed(1), e.newsInfo.readNumber = e.num), e.myhChannelId = e.newsInfo.myhChannelId, e.newsInfo.hasOwnProperty("myhChannelId") && e.newsInfo.myhChannelId > 0 ? e.newsInfo.isMoldyFish = !0 : e.newsInfo.isMoldyFish = !1, null != e.newsInfo.related && (e.relatedNewsList = e.newsInfo.related.content, e.newsInfo.related.totalElements > 3 && (e.isShowRelatedMore = !0), e.relatedNewsList.length > 0 && (e.isShowRelated = !0, e.v_bottom = e.v_bottom + 441, console.log(e.v_bottom))), e.$nextTick(function () {
                  $("strong").css({
                    "font-family": "FZZCYSJW"
                  }), $("#content img").css({
                    width: "100%",
                    height: "auto"
                  }), e.newsInfo.isEnglish && $("#content").css({
                    "text-align": "left"
                  }), $("video").attr("name", "my_video"), e.srcList = document.getElementsByName("my_video"), $("audio").attr("name", "my_audio");
                  var t = document.getElementsByName("my_audio");
                  if ($.each(t, function (t, a) {
                    if (jQuery(a).attr("id", "myAudio" + t), null != a) {
                      a.load();
                      var n = {
                        audioId: "myAudio" + t,
                        audioSrc: document.getElementById("myAudio" + t).getElementsByTagName("source")[0].getAttribute("src"),
                        duration: e.formatDuraton(a.getAttribute("duration"))
                      };
                      e.audioList.push(n);
                      var i = "<div style=\"background-color: #EEEEEE;max-width: 670px;  height: 2.875rem;  border: 1px solid #DDDDDD;  border-radius: 4px;  width: 92%;  margin: 0 auto;\"><div style=\"float: left;  text-align: center;  width: 18%;  height: 100%;\"><div style=\"width: 32px;height: 32px;background-color: #cd3333;border-radius: 4px;margin: 7px 0px 7px 9px;display: flex;justify-content: center;align-items: center;\"><div style=\"width: 10px;height: 12px;background-repeat: round;background-image: url(static/images/play1.png)\" id=\"audioPlayer" + t + "\"></div></div></div><div style=\"margin-right: 2%;  float: left;  width: 68%;  height: 100%;margin-left: 2%;\"><div style=\"background-color: #dddddd;  position: relative;  height: 4px;  cursor: pointer;  margin-top: 0.8rem;  border-radius: 4px;\" id=\"progressBarBg" + t + "\"><span id=\"progressDot" + t + "\" style=\"width: 12px;  height: 12px;  border-radius: 50%;  -moz-border-radius: 50%;  -webkit-border-radius: 50%;  background-color: #cd3333;  position: absolute;  left: 0;  top: 50%;  margin-top: -6px;  margin-left: -5px;  cursor: pointer;\"></span><div style=\"background-color: #cd3333;  width: 0;  height: 4px;\" id=\"progressBar" + t + "\"></div></div><div style=\"overflow: hidden;  margin-top: 10px;\"><span style=\"float: left;  font-size: 10px;  color: #666666;line-height: 10px;\" id=\"audioCurTime" + t + "\">00:00</span><span style=\"float: right;  font-size: 10px;  color: #666666;line-height: 10px;\" id=\"durationTime" + t + "\"></span></div></div><div style=\"width: 4%;float: right;height: 100%;display:flex;justify-content:center;align-items:center;margin-right: 3.5%;\"><div style=\"width: 11px;height: 14px;background-image: url(static/images/swing.png);background-repeat: round;\" id=\"audioSurge" + t + "\"></div></div></div>";
                      $("#myAudio" + t).after(i), $("#myAudio" + t).css("display", "contents"), sessionStorage.setItem("m" + t, 0);
                      var r = document.getElementById("myAudio" + t);
                      e.initAudioEvent(r, t, e.audioList);
                    }
                  }), $(".one-image").length > 0) for (var a = $(".one-image"), n = 0; n < a.length; n++) for (var i = a[n].children, r = 0; r < i.length; r++) "IMG" == i[r].tagName && (i[r].style.cssText = "width: 100%;height: auto;display: block");
                  for (var s = 0; s < e.srcList.length; s++) {
                    e.srcList[s].setAttribute("id", "video" + (s + 1));
                    var l = "";
                    if ("" == e.srcList[s].src) l = document.getElementById("video" + (s + 1)).getElementsByTagName("source")[0].getAttribute("src");else l = e.srcList[s].src;
                    var o = document.body.clientWidth / 16 * 9,
                      u = o - 67,
                      p = "<div id='video" + s + "' style='width: 100%;height: " + o + "px;background-image: url(" + e.srcList[s].poster + ");background-repeat: no-repeat;background-size: 100% 100%;'   data-video-url='" + l + "' data-video-poster='" + e.srcList[s].poster + "' data-isVideo='true' ><div style='font-size: 0.625em;position: absolute;margin-top: " + u + "px;margin-left: 0.875rem;width: 3.25rem;height: 3.25rem;background-color: #000000;border-radius: 2rem;opacity: 0.7;'   data-video-poster='" + e.srcList[s].poster + "' data-video-url='" + l + "' data-isVideo='true'><div style='width: 0.9275rem;margin: 1rem 1.0625rem 0rem 1.25rem;background-image: url(static/images/playButton.png);background-repeat: round;height: 1.25rem;'   data-video-poster='" + e.srcList[s].poster + "' data-video-url='" + l + "' data-isVideo='true'></div></div></div>";
                    e.htmlList.push(p);
                  }
                  for (var m = 0; m < e.htmlList.length; m++) {
                    $("#video" + (m + 1)).replaceWith(e.htmlList[m]), document.getElementById("video" + m).onclick = function (e) {
                      var t = e.target.getAttribute("data-video-url"),
                        a = e.target.getAttribute("data-video-poster"),
                        n = {
                          method: "VideoPlay",
                          data: {
                            videoUrl: t,
                            imgUrl: a,
                            pageY: e.pageY
                          }
                        },
                        i = "{\"method\":\"VideoPlay\",data:{\"videoUrl\":\"" + t + "\",\"imgUrl\":\"" + a + "\",\"pageY\":\"" + e.pageY + "\"}}",
                        r = navigator.userAgent,
                        s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
                      !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
                    };
                  }
                  var v = document.getElementsByTagName("a");
                  if (null != v || v.length > 0) for (var c = 0; c < v.length; c++) {
                    if (null != (_ = v[c].getAttribute("href"))) {
                      var d = _.split("?");
                      if (d.length > 1) {
                        var h = "";
                        "https://a.mlinks.cc/AK94" == d[0] ? (h = "yp://app?" + d[1], v[c].setAttribute("href", h)) : "https://arhivs.mlinks.cc/AK94" == d[0] && (h = "yp://app?" + d[1], v[c].setAttribute("href", h));
                      }
                    }
                  }
                  var g = document.getElementsByTagName("a");
                  if (null != g || g.length > 0) for (n = 0; n < g.length; n++) {
                    var f = new RegExp("^((https|http)?://)"),
                      _ = v[n].getAttribute("href");
                    if (f.test(_)) v[n].setAttribute("data-a-href", _), v[n].setAttribute("href", "javascript:void(0)"), v[n].setAttribute("id", "my_a" + n), document.getElementById("my_a" + n).onclick = function (e) {
                      var t = e.currentTarget.getAttribute("data-a-href"),
                        a = {
                          method: "openPaper",
                          data: {
                            to: t
                          }
                        },
                        n = "{\"method\":\"openPaper\",data:{\"to\":\"" + t + "\"}}",
                        i = navigator.userAgent,
                        r = (navigator.appVersion, i.indexOf("Android") > -1 || i.indexOf("Linux") > -1);
                      !!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(a), r && window.Native.postMessage(n);
                    };
                    var w = g[n].getElementsByTagName("img");
                    if (w.length > 0) for (var y = 0; y < w.length; y++) w[y].setAttribute("data-notImgPreview", !0);
                  }
                  e.voteList = e.newsInfo.vote, null != e.voteList && e.voteList.length > 0 && (e.isShowVote = !0), e.fontSizeCallBack2(e.fontSize + "%");
                });
              }
            });
          },
          getPreVote: function () {
            var e = this,
              t = {
                newsId: this.newsId,
                userId: this.userInfo.userId,
                deviceId: this.userInfo.deviceId,
                token: this.userInfo.token,
                type: 1
              };
            S(t).then(function (t) {
              0 != t.code ? e.getVoteResult(e.userInfo.userId, e.userInfo.deviceId) : 0 == t.code && (e.isEnd = 1);
            });
          },
          notify: function (e, t, a) {
            var n = navigator.userAgent,
              i = (navigator.appVersion, n.indexOf("Android") > -1 || n.indexOf("Linux") > -1),
              r = !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
              s = null;
            "content" == t ? s = {
              method: "" + e,
              data: {
                content: "" + a
              }
            } : "isLogin" == t && (s = {
              method: "" + e,
              data: {
                isLogin: "" + a
              }
            });
            var l = "{\"method\":\"" + e + "\",data:{\"" + t + "\":\"" + a + "\"}}";
            r && window.webkit.messageHandlers.Native.postMessage(s), i && window.Native.postMessage(l);
          },
          getRelatedList: function (e) {
            var t = this;
            this.currentPage = this.currentPage + 1;
            var a = {
              newsId: this.newsId,
              currentPage: this.currentPage
            };
            f(a).then(function (e) {
              if (e.data.content.length > 0) for (var a = 0; a < e.data.content.length; a++) t.relatedNewsList.push(e.data.content[a]);
              e.data.totalElements - t.relatedNewsList.length <= 3 && (t.isShowRelatedMore = !1);
            });
          },
          getTopicList: function () {
            var e = this,
              t = {
                newsId: this.newsId
              };
            x(t).then(function (t) {
              if (0 == t.code) {
                e.topic = t.data, e.isShowTopic = !0;
                var a = e.topic.news;
                e.topicId = e.topic.id, a.length > 2 ? (e.isMore = !0, e.topicList.push(a[0]), e.topicList.push(a[1])) : (e.topicList = a, e.isMore = !1);
              }
            });
          },
          updateIsEnd: function (e, t) {
            this.isEnd = e, this.voteList = t;
          },
          refreshUser: function (e) {
            this.userInfo = JSON.parse(e);
          },
          callBack: function (e) {
            e = m()(e), this.userInfo = JSON.parse(e), console.log(this.userInfo), 0 != this.myhChannelId && this.myhChannelId ? this.$refs.mychild.iosFollow(this.userInfo, this.myhChannelId) : this.get_news_detail();
          },
          getVoteResult: function () {
            var e = this;
            if (this.CompareDate(M.getNowFormatDate(), this.voteList[0].endTime)) {
              this.isEnd = 3;
              for (var t = 0; t < this.voteList.length; t++) {
                for (var a = this.voteList[t], n = 0, i = 0, r = 0; r < a.options.length; r++) n += a.options[r].voteCount;
                a.count = n;
              }
              for (var s = 0; s < this.voteList.length; s++) {
                a = this.voteList[s];
                for (var l = 0; l < a.options.length; l++) {
                  var o = a.options[l];
                  i = (i = o.voteCount / a.count * 100).toFixed(2), o.per = i;
                }
              }
            } else {
              "object" != (void 0 === (v = this.userInfo) ? "undefined" : u()(v)) && "[object object]" != Object.prototype.toString.call(v).toLowerCase() && v.length && (v = JSON.parse(v));
              var p = "";
              for (t = 0; t < this.voteList.length; t++) p += "" == p ? this.voteList[t].id : "," + this.voteList[t].id;
              var m = null;
              if (1 == this.voteList[0].isLogin) {
                if (null != v && null != v.userId && void 0 !== v.userId && "" != v.userId) m = {
                  votes: p,
                  userId: v.userId
                };else {
                  var v = navigator.userAgent,
                    c = (navigator.appVersion, v.indexOf("Android") > -1 || v.indexOf("Linux") > -1);
                  !!v.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                    method: "userJson",
                    data: {
                      isLogin: "" + !1
                    }
                  }), c && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"false\"}}"), window.callBack = this.callBack;
                }
              } else if (null != v && null != v.deviceId && void 0 !== v.deviceId && "" != v.deviceId) m = {
                votes: p,
                deviceId: v.deviceId
              };else {
                v = navigator.userAgent, navigator.appVersion, c = v.indexOf("Android") > -1 || v.indexOf("Linux") > -1;
                !!v.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                  method: "userJson",
                  data: {
                    isLogin: "" + !1
                  }
                }), c && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"false\"}}"), window.callBack = this.callBack;
              }
              h(m).then(function (t) {
                if (0 == t.code) if (console.log(t), e.resultList.length = 0, e.resultList = t.data, 1 == e.resultList[0].isVote) {
                  for (var a = 0; a < e.resultList.length; a++) {
                    for (var n = e.resultList[a], i = 0, r = 0, s = 0; s < n.options.length; s++) i += n.options[s].voteCount;
                    n.count = i;
                  }
                  for (var l = 0; l < e.resultList.length; l++) {
                    n = e.resultList[l];
                    for (var o = 0; o < n.options.length; o++) {
                      var u = n.options[o];
                      r = 0;
                      0 != n.count && 0 != u.voteCount ? (r = (r = u.voteCount / n.count * 100).toFixed(2), u.per = r) : u.per = r;
                    }
                  }
                  e.isEnd = 2, e.voteList.length = 0, e.voteList = e.resultList;
                } else e.isEnd = 1;
              });
            }
          },
          initAudioEvent: function (e, t, a) {
            var n = this,
              i = document.getElementById("audioPlayer" + t),
              r = document.getElementById("audioSurge" + t);
            document.getElementById("durationTime" + t).innerText = this.transTime(e.getAttribute("duration")), i.addEventListener("click", function () {
              if (e.addEventListener("timeupdate", function () {
                n.updateProgress(e, t);
              }, !1), e.addEventListener("ended", function () {
                n.audioEnded(t);
              }, !1), e.paused) {
                e.play(), i.style.background = "url('static/images/pause1.png')", i.style.backgroundRepeat = "round", r.style.background = "url('static/images/surge.gif')", r.style.backgroundRepeat = "round";
                for (var s = 0; s < a.length; s++) if (e.getAttribute("id") != a[s].audioId) {
                  var l = document.getElementById("myAudio" + s),
                    o = document.getElementById("audioPlayer" + s),
                    u = document.getElementById("audioSurge" + s);
                  l.pause(), o.style.background = "url('static/images/play1.png')", o.style.backgroundRepeat = "round", u.style.background = "url('static/images/swing.png')", u.style.backgroundRepeat = "round";
                }
              } else e.pause(), i.style.background = "url('static/images/play1.png')", i.style.backgroundRepeat = "round", r.style.background = "url('static/images/swing.png')", r.style.backgroundRepeat = "round";
            }, !1);
            var s = document.getElementById("progressBarBg" + t);
            s.addEventListener("mousedown", function (a) {
              if (!e.paused || 0 != e.currentTime) {
                var i = parseFloat(window.getComputedStyle(s, null).width.replace("px", "")),
                  r = a.offsetX / i;
                e.currentTime = e.duration * r, n.updateProgress(e, t);
              }
            }, !1), this.dragProgressDotEvent(e, t);
          },
          updateProgress: function (e, t) {
            var a = e.currentTime / e.duration;
            document.getElementById("progressBar" + t).style.width = 100 * a + "%", document.getElementById("progressDot" + t).style.left = 100 * a + "%", document.getElementById("audioCurTime" + t).innerText = this.transTime(e.currentTime);
          },
          audioEnded: function (e) {
            document.getElementById("progressBar" + e).style.width = 0, document.getElementById("progressDot" + e).style.left = 0, document.getElementById("audioCurTime" + e).innerText = this.transTime(0), document.getElementById("audioPlayer" + e).style.background = "url('static/images/play1.png')", document.getElementById("audioPlayer" + e).style.backgroundRepeat = "round";
          },
          transTime: function (e) {
            var t = parseInt(e / 3600);
            e %= 3600;
            var a = parseInt(e / 60),
              n = parseInt(e % 60);
            return t > 0 ? this.formatTime(t + ":" + a + ":" + n) : this.formatTime(a + ":" + n);
          },
          formatTime: function (e) {
            for (var t = "", a = e.split(":"), n = 0; n < a.length - 1; n++) t += 1 == a[n].length ? "0" + a[n] : a[n], t += ":";
            return t += 1 == a[n].length ? "0" + a[n] : a[n];
          },
          dragProgressDotEvent: function (e, t) {
            var a = this,
              n = document.getElementById("progressDot" + t),
              i = document.getElementById("progressBarBg" + t),
              r = {
                oriOffestLeft: 0,
                oriX: 0,
                maxLeft: 0,
                maxRight: 0
              };
            this.flag = !1, n.ontouchstart = function (s) {
              e.paused && 0 == e.currentTime || (a.flag = !0, r.oriOffestLeft = n.offsetLeft, r.oriX = event.touches ? event.touches[0].clientX : event.clientX, r.maxLeft = r.oriOffestLeft, r.maxRight = document.getElementById("progressBarBg" + t).offsetWidth - r.oriOffestLeft, event && event.preventDefault ? event.preventDefault() : event.returnValue = !1, event && event.stopPropagation ? event.stopPropagation() : window.event.cancelBubble = !0), i.ontouchmove = function (n) {
                if (a.flag) {
                  var i = (event.touches ? event.touches[0].clientX : event.clientX) - r.oriX;
                  i > r.maxRight ? i = r.maxRight : i < -r.maxLeft && (i = -r.maxLeft);
                  var s = document.getElementById("progressBarBg" + t),
                    l = parseFloat(window.getComputedStyle(s, null).width.replace("px", "")),
                    o = (r.oriOffestLeft + i) / l;
                  e.currentTime = e.duration * o, a.$options.methods.updateProgress(e, t);
                }
              }, i.ontouchend = function (e) {
                a.flag = !1;
              };
            };
          },
          formatDuraton: function (e) {
            if (e > -1) {
              var t = Math.floor(e / 3600),
                a = Math.floor(e / 60) % 60,
                n = e % 60;
              e = t <= 0 ? "" : t < 10 ? "0" + t + ":" : t + ":", a < 10 && (e += "0"), e += a + ":", n < 10 && (e += "0"), e += n;
            }
            return e.split(".")[0];
          },
          CompareDate: function (e, t) {
            return new Date(e.replace(/-/g, "/")) > new Date(t.replace(/-/g, "/"));
          }
        },
        created: function () {
          this.newsId = this.$route.query.newsId;
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !1
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"false\"}}"), window.callBack = this.callBack, window.refreshUser = this.refreshUser, this.fontSize = this.$route.query.fontSize, this.getTopicList();
        },
        mounted: function () {}
      },
      q = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", [e.isShowTopic ? a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            }
          }, [a("a", {
            staticClass: "head-a",
            attrs: {
              href: "yp://app?type=news&topicId=" + e.topicId + "&topicType=2"
            }
          }, [a("img", {
            attrs: {
              src: e.topic.image + e.imgParame2
            }
          })]), e._v(" "), a("div", {
            staticClass: "news-list"
          }, e._l(e.topicList, function (t, n) {
            return a("div", {
              staticClass: "news-list-div"
            }, [a("a", {
              staticClass: "noLine",
              staticStyle: {
                "text-decoration": "none"
              },
              attrs: {
                href: "yp://app?type=news&topicId=" + e.topicId + "&topicType=2"
              }
            }, [5 != t.displaymode ? a("div", {
              staticClass: "news-content-div"
            }, [a("div", {
              staticClass: "news-content-div-right"
            }, [a("div", [e._v("\n                " + e._s(t.title) + "\n              ")])]), e._v(" "), a("div", {
              staticClass: "news-content-div-middle"
            }), e._v(" "), a("div", {
              staticClass: "news-content-div-left"
            }, [a("img", {
              attrs: {
                src: t.tb1 + e.imgParame
              }
            })])]) : e._e(), e._v(" "), 5 == t.displaymode ? a("div", {
              staticClass: "news-content-div"
            }, [a("div", {
              staticClass: "news-content-div-wt"
            }, [a("div", [e._v("\n                " + e._s(t.title) + "\n              ")])])]) : e._e()]), e._v(" "), a("div", {
              staticStyle: {
                width: "100%",
                height: "1px"
              }
            })]);
          }), 0), e._v(" "), e.isMore ? a("div", {
            staticClass: "more"
          }, [a("a", {
            staticClass: "noLine",
            attrs: {
              href: "yp://app?type=news&topicId=" + e.topicId + "&topicType=2"
            }
          }, [e._m(0)])]) : e._e()]) : e._e(), e._v(" "), e.showDetail ? a("yp-detail", {
            ref: "mychild",
            attrs: {
              newInfo: e.newsInfo,
              detailCountDown: e.detailCountDown,
              timeFormatType: e.timeFormatType,
              finishTime: e.finishTime,
              id: "news-body"
            }
          }) : e._e(), e._v(" "), a("yp-share", {
            attrs: {
              isShow: e.isShowShare
            }
          }), e._v(" "), a("yp-like", {
            attrs: {
              isShow: e.isShowLike,
              newsId: e.newsId,
              userInfo: e.userInfo,
              likeInfo: e.likeInfo
            }
          }), e._v(" "), e.isShowVote ? a("yp-vote", {
            ref: "myVote",
            attrs: {
              voteList: e.voteList,
              isEnd: e.isEnd,
              userInfo: e.userInfo,
              isShare: !1,
              isLogin: e.isVoteLogin,
              newsId: e.newsId,
              vBottom: e.v_bottom
            },
            on: {
              updateIsEnd: e.updateIsEnd
            }
          }) : e._e(), e._v(" "), e.isShowRelated ? a("div", {
            staticClass: "related-body"
          }, [e._m(1), e._v(" "), e._l(e.relatedNewsList, function (t, n) {
            return a("div", {
              staticClass: "related-list"
            }, [0 == t.enablebodyurl ? a("a", {
              staticClass: "noLine",
              attrs: {
                href: "yp://app?type=news&id=" + t.newsId + "&modetype=" + t.modeType + "&topicId=" + t.topicId
              }
            }, [5 != t.displaymode ? a("div", {
              staticClass: "related-list-div"
            }, [a("div", {
              staticClass: "related-list-right"
            }, [a("div", {
              staticClass: "related-list-title",
              attrs: {
                id: "related" + n
              }
            }, [a("span", {
              staticStyle: {
                "-webkit-box-orient": "vertical"
              }
            }, [e._v(e._s(t.title))])]), e._v(" "), a("div", {
              staticClass: "related-list-bottom"
            }, [a("div", {
              staticClass: "related-list-bottom-pl"
            }, [a("span", [e._v(e._s(t.pinlun) + "\u8BC4\u8BBA")])]), e._v(" "), a("div", {
              staticClass: "related-list-bottom-date"
            }, [a("span", [e._v(e._s(t.date))])])])]), e._v(" "), a("div", {
              staticClass: "related-list-middle"
            }), e._v(" "), a("div", {
              staticClass: "related-list-left"
            }, [a("img", {
              attrs: {
                src: t.tb1 + e.imgParame
              }
            })])]) : e._e(), e._v(" "), 5 == t.displaymode ? a("div", {
              staticClass: "related-list-div"
            }, [a("div", {
              staticClass: "related-list-wt"
            }, [a("div", {
              staticClass: "related-list-title",
              attrs: {
                id: "related" + n
              }
            }, [a("span", {
              staticStyle: {
                "-webkit-box-orient": "vertical"
              }
            }, [e._v(e._s(t.title))])]), e._v(" "), a("div", {
              staticClass: "related-list-bottom"
            }, [a("div", {
              staticClass: "related-list-bottom-pl"
            }, [a("span", [e._v(e._s(t.pinlun) + "\u8BC4\u8BBA")])]), e._v(" "), a("div", {
              staticClass: "related-list-bottom-date"
            }, [a("span", [e._v(e._s(t.date))])])])])]) : e._e()]) : e._e(), e._v(" "), 1 == t.enablebodyurl ? a("a", {
              staticClass: "noLine",
              attrs: {
                href: t.bodyurl
              }
            }, [a("div", {
              staticClass: "related-list-div"
            }, [a("div", {
              staticClass: "related-list-left"
            }, [a("img", {
              attrs: {
                src: t.tb1 + e.imgParame
              }
            })]), e._v(" "), a("div", {
              staticClass: "related-list-middle"
            }), e._v(" "), a("div", {
              staticClass: "related-list-right"
            }, [a("div", {
              staticClass: "related-list-title",
              attrs: {
                id: "related" + n
              }
            }, [a("span", {
              staticStyle: {
                "-webkit-box-orient": "vertical"
              }
            }, [e._v(e._s(t.title))])]), e._v(" "), a("div", {
              staticClass: "related-list-bottom"
            }, [a("div", {
              staticClass: "related-list-bottom-pl"
            }, [a("span", [e._v(e._s(t.pinlun) + "\u8BC4\u8BBA")])]), e._v(" "), a("div", {
              staticClass: "related-list-bottom-date"
            }, [a("span", [e._v(e._s(t.date))])])])])])]) : e._e(), e._v(" "), a("div", {
              staticStyle: {
                width: "100%",
                height: "1rem"
              }
            })]);
          }), e._v(" "), e.isShowRelatedMore ? a("div", {
            staticClass: "related-more",
            on: {
              click: function (t) {
                return e.getRelatedList(e.newsId);
              }
            }
          }, [e._m(2)]) : e._e()], 2) : e._e()], 1);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("span", [this._v("\u66F4\u591A\u4E13\u9898\u65B0\u95FB")])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "related-title"
          }, [t("div", [t("span", [this._v("-\xA0\u76F8\u5173\u65B0\u95FB\xA0-")])])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("span", [this._v("\u67E5\u770B\u66F4\u591A")])]);
        }]
      };
    var J = a("VU/8")(H, q, !1, function (e) {
        a("f9uy");
      }, "data-v-e2aad26a", null).exports,
      X = (Array, Number, String, Boolean, {
        name: "yp-vote",
        props: {
          voteList: Array,
          isEnd: Number,
          isShare: !1,
          userInfo: String,
          isVoteLogin: Boolean
        },
        data: function () {
          return {
            checkList: {},
            list: [],
            content: "",
            user: {},
            checkBoxList: [],
            resultList: [],
            isClick: !0
          };
        },
        methods: {
          submitVote: function (e, t) {
            var a = this;
            if (this.isClick = !1, this.CompareDate(M.getNowFormatDate(), this.voteList[0].endTime)) {
              this.content = "\u8BE5\u6295\u7968\u5DF2\u7ED3\u675F";
              var n = {
                  method: "showAlert",
                  data: {
                    content: "" + this.content
                  }
                },
                i = "{\"method\":\"showAlert\",data:{\"content\":\"" + this.content + "\"}}";
              l && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
            } else {
              var r = navigator.userAgent,
                s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1),
                l = !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
              if (1 == this.voteList[0].isLogin) {
                var o = JSON.parse(e);
                if ("object" != (void 0 === o ? "undefined" : u()(o)) && "[object object]" != Object.prototype.toString.call(o).toLowerCase() && o.length && (o = JSON.parse(o)), void 0 !== o.userId && "" != o.userId) {
                  for (var p = 0; p < this.voteList.length; p++) {
                    if (1 == (x = this.voteList[p]).voteMax) {
                      var v = "";
                      if ($("input:radio[name='item" + x.id + "']:checked").each(function () {
                        v += $(this).val();
                      }), v.length <= 0) {
                        this.isClick = !0, this.content = "\u5355\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879";
                        var d = {
                            method: "showAlert",
                            data: {
                              content: "" + this.content
                            }
                          },
                          h = "{\"method\":\"showAlert\",data:{\"content\":\"" + this.content + "\"}}";
                        return l && window.webkit.messageHandlers.Native.postMessage(d), s && window.Native.postMessage(h), this.list.length = 0, void (this.checkList.length = 0);
                      }
                      this.list.push({
                        voteId: "" + x.id,
                        optionsId: "" + v
                      }), this.checkList = this.list;
                    } else {
                      var g = "";
                      if ($("input:checkbox[name='item" + x.id + "']:checked").each(function () {
                        g += "" == g ? $(this).val() : "," + $(this).val();
                      }), g.length <= 0) {
                        this.isClick = !0, this.content = "\u591A\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879";
                        var f = {
                            method: "showAlert",
                            data: {
                              content: "" + this.content
                            }
                          },
                          _ = "{\"method\":\"showAlert\",data:{\"content\":\"" + this.content + "\"}}";
                        return l && window.webkit.messageHandlers.Native.postMessage(f), s && window.Native.postMessage(_), this.checkList.length = 0, void (this.list.length = 0);
                      }
                      if (g.split(",").length > x.voteMax) {
                        this.isClick = !0, this.content = x.title + "\u6700\u591A\u9009\u62E9" + x.voteMax + "\u4E2A\u9009\u9879\uFF01";
                        var w = {
                            method: "showAlert",
                            data: {
                              content: "" + this.content
                            }
                          },
                          y = "{\"method\":\"showAlert\",data:{\"content\":\"" + this.content + "\"}}";
                        return l && window.webkit.messageHandlers.Native.postMessage(w), s && window.Native.postMessage(y), this.checkList.length = 0, void (this.list.length = 0);
                      }
                      this.list.push({
                        voteId: "" + x.id,
                        optionsId: "" + g
                      }), this.checkList = this.list;
                    }
                  }
                  c()({
                    method: "POST",
                    url: "https://ypstatic.cnnb.com.cn//yongpai-ugc/api/vote/vote_multi",
                    data: {
                      votes: m()(this.checkList),
                      userId: o.userId,
                      timestamp: new Date().getTime(),
                      deviceId: o.deviceId,
                      token: o.token,
                      sign: N()("deviceId" + o.deviceId + "timestamp" + new Date().getTime() + "test_123456679890123456")
                    }
                  }).then(function (e) {
                    if (a.content = e.message, 0 == e.code) {
                      a.isClick = !1, a.content = "\u6295\u7968\u6210\u529F";
                      var t = {
                          method: "showAlert",
                          data: {
                            content: "" + a.content
                          }
                        },
                        n = "{\"method\":\"showAlert\",data:{\"content\":\"" + a.content + "\"}}";
                      l && window.webkit.messageHandlers.Native.postMessage(t), s && window.Native.postMessage(n), a.resultList = e.data;
                      for (var i = 0; i < a.resultList.length; i++) {
                        for (var r = a.resultList[i], u = 0, p = 0, m = 0; m < r.options.length; m++) u += r.options[m].voteCount;
                        r.count = u;
                      }
                      for (var v = 0; v < a.resultList.length; v++) {
                        r = a.resultList[v];
                        for (var c = 0; c < r.options.length; c++) {
                          var d = r.options[c];
                          p = 0;
                          0 != r.count && 0 != d.voteCount ? (p = (p = d.voteCount / r.count * 100).toFixed(2), d.per = p) : d.per = p;
                        }
                      }
                      a.$emit("updateIsEnd", 2, a.resultList);
                    } else if (a.isClick = !0, 2101 == e.code) a.getVoteResult(o.userId, "");else if (123 == e.code || 125 == e.code || 203 == e.code) {
                      var h = {
                          method: "loginTimeOut",
                          data: {
                            content: "" + a.content
                          }
                        },
                        g = "{\"method\":\"loginTimeOut\",data:{\"content\":\"" + a.content + "\"}}";
                      l && window.webkit.messageHandlers.Native.postMessage(h), s && window.Native.postMessage(g);
                    } else {
                      var f = {
                          method: "showAlert",
                          data: {
                            content: "" + a.content
                          }
                        },
                        _ = "{\"method\":\"showAlert\",data:{\"content\":\"" + a.content + "\"}}";
                      l && window.webkit.messageHandlers.Native.postMessage(f), s && window.Native.postMessage(_);
                    }
                    a.checkList.length = 0;
                  });
                } else {
                  this.isClick = !0;
                  l && window.webkit.messageHandlers.Native.postMessage({
                    method: "userJson",
                    data: {
                      isLogin: "" + !0
                    }
                  }), s && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
                }
              } else {
                var b = JSON.parse(e);
                for (p = 0; p < this.voteList.length; p++) {
                  var x;
                  if (1 == (x = this.voteList[p]).voteMax) {
                    v = "";
                    if ($("input:radio[name='item" + x.id + "']:checked").each(function () {
                      v += $(this).val();
                    }), v.length <= 0) {
                      this.isClick = !0, this.content = "\u5355\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879";
                      var S = {
                          method: "showAlert",
                          data: {
                            content: "" + this.content
                          }
                        },
                        C = "{\"method\":\"showAlert\",data:{\"content\":\"" + this.content + "\"}}";
                      return l && window.webkit.messageHandlers.Native.postMessage(S), s && window.Native.postMessage(C), this.list.length = 0, void (this.checkList.length = 0);
                    }
                    this.list.push({
                      voteId: "" + x.id,
                      optionsId: "" + v
                    }), this.checkList = this.list;
                  } else {
                    g = "";
                    if ($("input:checkbox[name='item" + x.id + "']:checked").each(function () {
                      g += "" == g ? $(this).val() : "," + $(this).val();
                    }), g.length <= 0) {
                      this.isClick = !0, this.content = "\u591A\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879";
                      var I = {
                          method: "showAlert",
                          data: {
                            content: "" + this.content
                          }
                        },
                        k = "{\"method\":\"showAlert\",data:{\"content\":\"" + this.content + "\"}}";
                      return l && window.webkit.messageHandlers.Native.postMessage(I), s && window.Native.postMessage(k), this.checkList.length = 0, void (this.list.length = 0);
                    }
                    if (g.split(",").length > x.voteMax) {
                      this.isClick = !0, this.content = x.title + "\u6700\u591A\u9009\u62E9" + x.voteMax + "\u4E2A\u9009\u9879\uFF01";
                      var L = {
                          method: "showAlert",
                          data: {
                            content: "" + this.content
                          }
                        },
                        A = "{\"method\":\"showAlert\",data:{\"content\":\"" + this.content + "\"}}";
                      return l && window.webkit.messageHandlers.Native.postMessage(L), s && window.Native.postMessage(A), this.checkList.length = 0, void (this.list.length = 0);
                    }
                    this.list.push({
                      voteId: "" + x.id,
                      optionsId: "" + g
                    }), this.checkList = this.list;
                  }
                }
                c()({
                  method: "POST",
                  url: "https://ypstatic.cnnb.com.cn//yongpai-ugc/api/vote/vote_multi",
                  data: {
                    votes: m()(this.checkList),
                    userId: "",
                    timestamp: new Date().getTime(),
                    deviceId: b.deviceId,
                    token: "",
                    sign: N()("deviceId" + b.deviceId + "timestamp" + new Date().getTime() + "test_123456679890123456")
                  }
                }).then(function (e) {
                  if (a.content = e.message, 0 == e.code) {
                    a.isClick = !1, a.content = "\u6295\u7968\u6210\u529F";
                    var t = {
                        method: "showAlert",
                        data: {
                          content: "" + a.content
                        }
                      },
                      n = "{\"method\":\"showAlert\",data:{\"content\":\"" + a.content + "\"}}";
                    l && window.webkit.messageHandlers.Native.postMessage(t), s && window.Native.postMessage(n), a.resultList.length = 0, a.resultList = e.data;
                    for (var i = 0; i < a.resultList.length; i++) {
                      for (var r = a.resultList[i], o = 0, u = 0, p = 0; p < r.options.length; p++) o += r.options[p].voteCount;
                      r.count = o;
                    }
                    for (var m = 0; m < a.resultList.length; m++) {
                      r = a.resultList[m];
                      for (var v = 0; v < r.options.length; v++) {
                        var c = r.options[v];
                        u = 0;
                        0 != r.count && 0 != c.voteCount ? (u = (u = c.voteCount / r.count * 100).toFixed(2), c.per = u) : c.per = u;
                      }
                    }
                    a.$emit("updateIsEnd", 2, a.resultList);
                  } else if (a.isClick = !0, 2101 == e.code) a.content = e.message, a.resultList.length = 0, a.content = e.message, a.getVoteResult("", b.deviceId);else {
                    var d = {
                        method: "showAlert",
                        data: {
                          content: "" + a.content
                        }
                      },
                      h = "{\"method\":\"showAlert\",data:{\"content\":\"" + a.content + "\"}}";
                    l && window.webkit.messageHandlers.Native.postMessage(d), s && window.Native.postMessage(h);
                  }
                  a.checkList.length = 0;
                });
              }
            }
          },
          getVoteResult: function (e, t) {
            var a = this;
            console.log(123);
            for (var n = "", i = 0; i < this.voteList.length; i++) n += "" == n ? this.voteList[i].id : "," + this.voteList[i].id;
            h("" != e && "" == t ? {
              votes: n,
              userId: e
            } : {
              votes: n,
              deviceId: t
            }).then(function (e) {
              if (0 == e.code && (a.resultList = e.data, 1 == a.resultList[0].isVote)) {
                for (var t = 0; t < a.resultList.length; t++) {
                  for (var n = a.resultList[t], i = 0, r = 0, s = 0; s < n.options.length; s++) i += n.options[s].voteCount;
                  n.count = i;
                }
                for (var l = 0; l < a.resultList.length; l++) {
                  n = a.resultList[l];
                  for (var o = 0; o < n.options.length; o++) {
                    var u = n.options[o];
                    r = 0;
                    0 != n.count && 0 != u.voteCount ? (r = (r = u.voteCount / n.count * 100).toFixed(2), u.per = r) : u.per = r;
                  }
                }
                a.$emit("updateIsEnd", 2, a.resultList);
              }
            });
          },
          CompareDate: function (e, t) {
            return new Date(e.replace(/-/g, "/")) > new Date(t.replace(/-/g, "/"));
          }
        }
      }),
      Y = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "92%",
              "margin-bottom": "3%",
              "margin-left": "4%"
            }
          }, [e._m(0), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 1 == e.isEnd,
              expression: "isEnd == 1"
            }],
            staticClass: "div_father"
          }, e._l(e.voteList, function (t, n) {
            return a("div", {
              staticStyle: {
                width: "100%",
                "text-align": "left",
                margin: "2rem 0rem"
              }
            }, [a("div", [1 == t.voteMax ? a("span", {
              staticClass: "vote_title"
            }, [e._v("\u3010\u5355\u9009\u3011" + e._s(t.title))]) : e._e(), e._v(" "), t.voteMax > 1 ? a("span", {
              staticClass: "vote_title"
            }, [e._v("\u3010\u591A\u9009\u3011" + e._s(t.title))]) : e._e()]), e._v(" "), e._l(t.options, function (n, i) {
              return 1 == t.voteMax ? a("div", {
                staticClass: "div_person2"
              }, [a("input", {
                staticStyle: {
                  display: "none"
                },
                attrs: {
                  id: "item_" + n.id,
                  type: "radio",
                  name: "item" + t.id
                },
                domProps: {
                  value: n.id
                }
              }), e._v(" "), a("label", {
                attrs: {
                  for: "item_" + n.id
                }
              }), e._v(" "), a("span", {
                staticClass: "vote_answer"
              }, [e._v(e._s(n.options))])]) : e._e();
            }), e._v(" "), e._l(t.options, function (n, i) {
              return t.voteMax > 1 ? a("div", {
                staticClass: "div_person"
              }, [a("input", {
                staticStyle: {
                  display: "none"
                },
                attrs: {
                  id: "item_" + n.id,
                  type: "checkbox",
                  name: "item" + t.id
                },
                domProps: {
                  value: n.id
                }
              }), e._v(" "), a("label", {
                attrs: {
                  for: "item_" + n.id
                }
              }), e._v(" "), a("span", {
                staticClass: "vote_answer"
              }, [e._v(e._s(n.options))])]) : e._e();
            })], 2);
          }), 0), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 2 == e.isEnd || 3 == e.isEnd,
              expression: "isEnd == 2 || isEnd == 3"
            }],
            staticClass: "div_father"
          }, e._l(e.voteList, function (t, n) {
            return a("div", {
              staticStyle: {
                "margin-top": "1.5rem"
              }
            }, [a("div", {
              staticStyle: {
                "text-align": "left"
              }
            }, [1 == t.voteMax ? a("span", {
              staticClass: "vote_title"
            }, [e._v("\u3010\u5355\u9009\u3011" + e._s(t.title))]) : e._e(), e._v(" "), t.voteMax > 1 ? a("span", {
              staticClass: "vote_title"
            }, [e._v("\u3010\u591A\u9009\u3011" + e._s(t.title))]) : e._e()]), e._v(" "), e._l(t.options, function (t, n) {
              return a("div", {
                staticClass: "div_person",
                staticStyle: {
                  width: "100%",
                  height: "3.8rem"
                }
              }, [a("div", 0 == n ? {
                staticStyle: {
                  width: "100%",
                  height: "34px"
                }
              } : {
                staticStyle: {
                  width: "100%",
                  "margin-top": "1.8125rem",
                  height: "34px"
                }
              }, [a("div", {
                staticClass: "circle"
              }), e._v(" "), a("div", {
                staticStyle: {
                  width: "90%",
                  float: "left",
                  "text-align": "left",
                  "margin-top": "0.4rem"
                }
              }, [a("span", {
                staticClass: "vote_answer",
                staticStyle: {
                  "margin-left": "0",
                  float: "left",
                  "line-height": "1.25rem"
                }
              }, [e._v(e._s(t.options))])])]), e._v(" "), a("div", {
                staticStyle: {
                  width: "90%",
                  height: "1.25rem",
                  "margin-left": "10%"
                }
              }, [a("div", {
                staticClass: "progress"
              }, [a("div", {
                staticClass: "progress-bar",
                staticStyle: {
                  "background-color": "#B52E2E"
                },
                style: {
                  width: t.per + "%"
                }
              })]), e._v(" "), a("div", {
                staticStyle: {
                  float: "left",
                  "margin-left": "0.8rem",
                  width: "4.25rem"
                }
              }, [a("span", {
                staticStyle: {
                  "font-size": "12px",
                  "font-family": "PingFangSC-Regular",
                  color: "rgba(153,153,153,1)",
                  "line-height": "17px"
                }
              }, [e._v(e._s(t.voteCount) + "\u7968")])]), e._v(" "), a("div", {
                staticStyle: {
                  float: "right",
                  width: "3rem"
                }
              }, [a("span", {
                staticStyle: {
                  "font-size": "12px",
                  "font-family": "PingFangSC-Regular",
                  color: "rgba(153,153,153,1)",
                  "line-height": "17px"
                }
              }, [e._v(e._s(t.per) + "%")])])])]);
            })], 2);
          }), 0), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 1 == e.isEnd,
              expression: "isEnd == 1"
            }],
            staticClass: "div_father"
          }, [e.isClick ? a("div", {
            staticClass: "div_vote_button",
            on: {
              click: function (t) {
                return e.submitVote(e.userInfo, e.isVoteLogin);
              }
            }
          }, [a("span", {
            staticClass: "vote_font"
          }, [e._v("\u6295\u7968")])]) : e._e(), e._v(" "), e.isClick ? e._e() : a("div", {
            staticClass: "div_vote_button"
          }, [a("span", {
            staticClass: "vote_font"
          }, [e._v("\u6295\u7968")])])]), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 2 == e.isEnd,
              expression: "isEnd == 2"
            }],
            staticClass: "div_father"
          }, [e._m(1)]), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 3 == e.isEnd,
              expression: "isEnd == 3"
            }],
            staticClass: "div_father"
          }, [e._m(2)])]);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div_father"
          }, [t("div", {
            staticClass: "div_head"
          }, [t("span", {
            staticClass: "vote_head"
          }, [this._v("-\xA0\u6295\xA0\u7968\xA0-")])])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div_vote_button"
          }, [t("span", {
            staticClass: "vote_font"
          }, [this._v("\u5DF2\u6295\u7968")])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div_vote_button"
          }, [t("span", {
            staticClass: "vote_font"
          }, [this._v("\u5DF2\u7ED3\u675F")])]);
        }]
      };
    var K = a("VU/8")(X, Y, !1, function (e) {
        a("on2V");
      }, "data-v-5a2a7f9c", null).exports,
      Q = {
        data: function () {
          return {
            newsId: "",
            newsInfo: {},
            list: [],
            newsLive: {},
            liveMessageList: [],
            topMessageList: [],
            voteList: [],
            isShowVote: !0,
            timestamp: "",
            content: "",
            srcList: [],
            htmlList: [],
            checkList: [],
            checkList2: [],
            list2: [],
            list3: [],
            checkBoxList: [],
            resultList: [],
            resultList2: [],
            userInfo: null,
            oldChangeOrder: 1,
            imgList: [],
            isShowBbs: !0,
            height: 0,
            audioList: [],
            topStatus: "",
            allLoaded: !1
          };
        },
        components: {
          "yp-vote": K
        },
        mounted: function () {
          this.height = $(window).height() + "px", void 0 === this.$route.query.newsId || "" == this.$route.query.newsId ? this.isShowBbs = !1 : (this.newsId = this.$route.query.newsId, this.timestamp = "", this.get_news_detail(), this.refresh(), window.changeOrder = this.changeOrder);
        },
        methods: {
          loadTop: function (e) {
            this.refresh(), this.$refs.loadmore.onTopLoaded();
          },
          getLiveMessage: function () {
            var e = this,
              t = {
                newsId: this.newsId,
                timestamp: this.timestamp
              };
            _(t).then(function (t) {
              if (0 == t.code && null != t.data.messages) {
                e.list = t.data.messages, e.timestamp = t.data.timestamp;
                for (var a = 0; a < e.list.length; a++) 1 == e.list[a].isTop ? e.topMessageList.push(e.list[a]) : e.liveMessageList.push(e.list[a]);
                if (e.liveMessageList.reverse(), 0 == e.oldChangeOrder && e.liveMessageList.reverse(), null != e.userInfo) {
                  var n = JSON.parse(e.userInfo);
                  "object" != (void 0 === n ? "undefined" : u()(n)) && "[object object]" != Object.prototype.toString.call(n).toLowerCase() && n.length && (n = JSON.parse(n));
                }
                e.replaceVideo(), e.close();
              }
            });
          },
          getLoadVoteResult: function (e, t, a) {
            for (var n = this, i = 0; i < t.length; i++) {
              var r,
                s,
                l,
                o = t[i];
              if (null != o.vote) !function () {
                for (r = o.vote, s = "", l = 0; l < r.length; l++) s += "" == s ? r[l].id : "," + r[l].id;
                var t = o.liveMessageId,
                  i = null;
                void 0 !== e.userId ? i = {
                  votes: s,
                  userId: e.userId
                } : void 0 !== e.deviceId && (i = {
                  votes: s,
                  deviceId: e.deviceId
                }), h(i).then(function (e) {
                  if (0 == e.code) {
                    var i = new Array();
                    if (1 == (i = e.data)[0].isVote) {
                      for (var r = 0; r < i.length; r++) {
                        for (var s = i[r], l = 0, o = 0, u = 0; u < s.options.length; u++) l += s.options[u].voteCount;
                        s.count = l;
                      }
                      for (var p = 0; p < i.length; p++) {
                        s = i[p];
                        for (var m = 0; m < s.options.length; m++) {
                          var v = s.options[m];
                          o = 0;
                          0 != s.count && 0 != v.voteCount ? (o = (o = v.voteCount / s.count * 100).toFixed(2), v.per = o) : v.per = o;
                        }
                      }
                      var c = {};
                      c.liveId = t, c.val = i, 1 == a ? (n.resultList.push(c), document.getElementById("messageVote" + t).style.display = "none", document.getElementById("messageButton" + t).style.display = "none", document.getElementById("messageNotButton" + t).style.display = "block") : (n.resultList2.push(c), document.getElementById("topMessageVote" + t).style.display = "none", document.getElementById("topMessageButton" + t).style.display = "none", document.getElementById("topMessageNotButton" + t).style.display = "block");
                    }
                  }
                });
              }();
            }
          },
          refresh: function () {
            var e = this;
            this.timestamp = "";
            var t = {
              newsId: this.newsId,
              timestamp: this.timestamp
            };
            _(t).then(function (t) {
              if (e.list.length = 0, e.topMessageList.length = 0, e.liveMessageList.length = 0, 0 == t.code && null != t.data.messages) {
                e.list = t.data.messages, e.timestamp = t.data.timestamp;
                for (var a = 0; a < e.list.length; a++) 1 == e.list[a].isTop ? e.topMessageList.push(e.list[a]) : e.liveMessageList.push(e.list[a]);
                if (e.liveMessageList, null != e.userInfo) {
                  var n = JSON.parse(e.userInfo);
                  "object" != (void 0 === n ? "undefined" : u()(n)) && "[object object]" != Object.prototype.toString.call(n).toLowerCase() && n.length && (n = JSON.parse(n)), e.liveMessageList.length > 0 && e.getLoadVoteResult(n, e.liveMessageList, 1), e.topMessageList.length > 0 && e.getLoadVoteResult(n, e.topMessageList, 2);
                }
                e.replaceVideo(), e.replaceAudio(), e.close(), e.$nextTick(function () {
                  var t = navigator.userAgent,
                    a = (navigator.appVersion, t.indexOf("Android") > -1 || t.indexOf("Linux") > -1);
                  !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                    method: "userJson",
                    data: {
                      isLogin: "" + !1
                    }
                  }), a && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"false\"}}"), window.callBack = e.callBack;
                });
              }
            });
          },
          get_news_detail: function () {
            var e = this,
              t = {
                newsId: this.newsId
              };
            d(t).then(function (t) {
              (e.newsInfo = t.data, e.newsLive = e.newsInfo.newsLive, 1 == e.newsLive.isRefresh) && new Date().getTime() - e.newsLive.endTime < 0 && e.intervalRefresh();
            });
          },
          intervalRefresh: function () {
            var e = this;
            setInterval(function () {
              e.timestamp = new Date().getTime();
              var t = {
                newsId: e.newsId,
                timestamp: e.timestamp
              };
              _(t).then(function (t) {
                if (e.timestamp = t.data.timestamp, 0 == t.code && null != t.data.messages) {
                  e.list = t.data.messages;
                  for (var a = 0; a < e.list.length; a++) 1 == e.list[a].isTop ? e.topMessageList.push(e.list[a]) : e.liveMessageList.push(e.list[a]);
                }
              }), e.replaceVideo();
            }, 1000 * this.newsLive.refresh);
          },
          open: function () {
            $("#body").removeClass("sub_body"), document.getElementById("triangle-down").style.display = "none", document.getElementById("triangle-up").style.display = "block", document.getElementById("body").style.display = "block";
          },
          close: function () {
            document.getElementById("body").style.display = "none", document.getElementById("triangle-down").style.display = "block", document.getElementById("triangle-up").style.display = "none";
          },
          changeOrder: function (e) {
            e != this.oldChangeOrder && (this.liveMessageList.reverse(), this.replaceVideo(), this.replaceAudio());
          },
          callBack: function (e) {
            e = m()(e), this.userInfo = e;
          },
          checkBox: function (e, t, a) {
            document.getElementById("" + e).checked ? this.checkBoxList.push(t) : this.checkBoxList.splice($.inArray(t, this.checkBoxList), 1);
          },
          submitTopVote: function (e) {
            var t = this;
            this.list3.length = 0, this.checkList2.length = 0;
            for (var a = new Array(), n = "", i = 0; i < this.topMessageList.length; i++) if (this.topMessageList[i].liveMessageId == e) {
              a = this.topMessageList[i].vote;
              for (var r = 0; r < a.length; r++) n += "" == n ? a[r].id : "," + a[r].id;
            }
            if (a.length > 0) if (this.CompareDate(M.getNowFormatDate(), a[0].endTime)) this.content = "\u8BE5\u6295\u7968\u5DF2\u7ED3\u675F", this.postMessage();else if (1 == a[0].isLogin) {
              if (null != this.userInfo) {
                var s = JSON.parse(this.userInfo);
                if ("object" != (void 0 === s ? "undefined" : u()(s)) && "[object object]" != Object.prototype.toString.call(s).toLowerCase() && s.length && (s = JSON.parse(s)), void 0 !== s.userId && "" != s.userId) {
                  for (var l = 0; l < a.length; l++) if (1 == a[l].voteMax) {
                    var o = "";
                    if ($("input:radio[name='item" + a[l].id + "']:checked").each(function () {
                      o += $(this).val();
                    }), o.length <= 0) return this.content = "\u5355\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879", this.postMessage(), this.checkList2.length = 0, void (this.list.length = 0);
                    this.list.push("{\"voteId\":\"" + a[l].id + "\",\"optionsId\":\"" + o + "\"}"), this.checkList2 = this.list;
                  } else {
                    var p = "";
                    if ($("input:checkbox[name='item" + a[l].id + "']:checked").each(function () {
                      p += "" == p ? $(this).val() : "," + $(this).val();
                    }), p.length <= 0) return this.content = "\u591A\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879", this.postMessage(), this.checkList2.length = 0, void (this.list.length = 0);
                    if (p.split(",").length > a[l].voteMax) return this.content = a[l].title + "\u6700\u591A\u9009\u62E9" + a[l].voteMax + "\u4E2A\u9009\u9879\uFF01", this.postMessage(), this.checkList2.length = 0, void (this.list.length = 0);
                    this.list.push("{\"voteId\":\"" + a[l].id + "\",\"optionsId\":\"" + p + "\"}"), this.checkList2 = this.list;
                  }
                  var v = {
                    votes: m()(this.checkList2),
                    userId: s.userId,
                    timestamp: new Date().getTime(),
                    deviceId: s.deviceId,
                    token: s.token,
                    sign: N()("deviceId" + s.deviceId + "timestamp" + new Date().getTime() + "test_123456679890123456")
                  };
                  g(v).then(function (a) {
                    if (t.content = a.message, 0 == a.code) {
                      t.content = "\u6295\u7968\u6210\u529F", t.postMessage();
                      var i = new Array();
                      i = a.data;
                      for (var r = 0; r < i.length; r++) {
                        for (var l = i[r], o = 0, u = 0, p = 0; p < l.options.length; p++) o += l.options[p].voteCount;
                        l.count = o;
                      }
                      for (var m = 0; m < i.length; m++) {
                        l = i[m];
                        for (var v = 0; v < l.options.length; v++) {
                          var c = l.options[v];
                          u = 0;
                          0 != l.count && 0 != c.voteCount ? (u = (u = c.voteCount / l.count * 100).toFixed(2), c.per = u) : c.per = u;
                        }
                      }
                      var d = {};
                      d.liveId = e, d.val = i, t.resultList2.push(d), document.getElementById("topMessageVote" + e).style.display = "none", document.getElementById("topMessageButton" + e).style.display = "none", document.getElementById("topMessageNotButton" + e).style.display = "block";
                    } else if (2101 == a.code) t.getVoteResult(s.userId, "", e, n), t.content = "\u60A8\u5DF2\u6295\u7968", t.postMessage();else if (123 == a.code || 125 == a.code || 203 == a.code) {
                      var h = navigator.userAgent,
                        g = (navigator.appVersion, h.indexOf("Android") > -1 || h.indexOf("Linux") > -1),
                        f = !!h.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                        _ = {
                          method: "loginTimeOut",
                          data: {
                            content: "" + t.content
                          }
                        },
                        w = "{\"method\":\"loginTimeOut\",data:{\"content\":\"" + t.content + "\"}}";
                      f && window.webkit.messageHandlers.Native.postMessage(_), g && window.Native.postMessage(w);
                    } else t.postMessage();
                    t.checkList2.length = 0;
                  });
                } else {
                  var c = navigator.userAgent,
                    d = (navigator.appVersion, c.indexOf("Android") > -1 || c.indexOf("Linux") > -1);
                  !!c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                    method: "userJson",
                    data: {
                      isLogin: "" + !0
                    }
                  }), d && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
                }
              } else {
                c = navigator.userAgent, navigator.appVersion, d = c.indexOf("Android") > -1 || c.indexOf("Linux") > -1;
                !!c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                  method: "userJson",
                  data: {
                    isLogin: "" + !0
                  }
                }), d && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
              }
            } else {
              var h = JSON.parse(this.userInfo);
              "object" != (void 0 === h ? "undefined" : u()(h)) && "[object object]" != Object.prototype.toString.call(h).toLowerCase() && h.length && (h = JSON.parse(h));
              for (l = 0; l < a.length; l++) if (1 == a[l].voteMax) {
                o = "";
                if ($("input:radio[name='item" + a[l].id + "']:checked").each(function () {
                  o += $(this).val();
                }), o.length <= 0) return this.content = "\u5355\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879", this.postMessage(), this.checkList2.length = 0, void (this.list.length = 0);
                this.list.push("{\"voteId\":\"" + a[l].id + "\",\"optionsId\":\"" + o + "\"}"), this.checkList2 = this.list;
              } else {
                p = "";
                if ($("input:checkbox[name='item" + a[l].id + "']:checked").each(function () {
                  p += "" == p ? $(this).val() : "," + $(this).val();
                }), p.length <= 0) return this.content = "\u591A\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879", this.postMessage(), this.checkList2.length = 0, void (this.list.length = 0);
                if (p.split(",").length > a[l].voteMax) return this.content = a[l].title + "\u6700\u591A\u9009\u62E9" + a[l].voteMax + "\u4E2A\u9009\u9879\uFF01", this.postMessage(), this.checkList2.length = 0, void (this.list.length = 0);
                this.list.push("{\"voteId\":\"" + a[l].id + "\",\"optionsId\":\"" + p + "\"}"), this.checkList2 = this.list;
              }
              var f = {
                votes: m()(this.checkList2),
                userId: "",
                timestamp: new Date().getTime(),
                deviceId: h.deviceId,
                token: "",
                sign: N()("deviceId" + h.deviceId + "timestamp" + new Date().getTime() + "test_123456679890123456")
              };
              g(f).then(function (a) {
                if (t.content = a.message, 0 == a.code) {
                  t.content = "\u6295\u7968\u6210\u529F", t.postMessage();
                  var i = new Array();
                  i = a.data;
                  for (var r = 0; r < i.length; r++) {
                    for (var s = i[r], l = 0, o = 0, u = 0; u < s.options.length; u++) l += s.options[u].voteCount;
                    s.count = l;
                  }
                  for (var p = 0; p < i.length; p++) {
                    s = i[p];
                    for (var m = 0; m < s.options.length; m++) {
                      var v = s.options[m];
                      o = 0;
                      0 != s.count && 0 != v.voteCount ? (o = (o = v.voteCount / s.count * 100).toFixed(2), v.per = o) : v.per = o;
                    }
                  }
                  var c = {};
                  c.liveId = e, c.val = i, t.resultList2.push(c), document.getElementById("topMessageVote" + e).style.display = "none", document.getElementById("topMessageButton" + e).style.display = "none", document.getElementById("topMessageNotButton" + e).style.display = "block";
                } else 2101 == a.code ? (t.postMessage(), t.getVoteResult("", h.deviceId, e, n)) : t.postMessage();
                t.checkList2.length = 0;
              });
            }
          },
          submitVote: function (e) {
            var t = this;
            this.list2.length = 0, this.checkList.length = 0;
            for (var a = new Array(), n = "", i = 0; i < this.liveMessageList.length; i++) if (this.liveMessageList[i].liveMessageId == e) {
              a = this.liveMessageList[i].vote;
              for (var r = 0; r < a.length; r++) n += "" == n ? a[r].id : "," + a[r].id;
            }
            if (a.length > 0) if (this.CompareDate(M.getNowFormatDate(), a[0].endTime)) this.content = "\u8BE5\u6295\u7968\u5DF2\u7ED3\u675F", this.postMessage();else if (1 == a[0].isLogin) {
              if (null != this.userInfo) {
                var s = JSON.parse(this.userInfo);
                if ("object" != (void 0 === s ? "undefined" : u()(s)) && "[object object]" != Object.prototype.toString.call(s).toLowerCase() && s.length && (s = JSON.parse(s)), void 0 !== s.userId && "" != s.userId) {
                  for (var l = 0; l < a.length; l++) if (1 == a[l].voteMax) {
                    var o = "";
                    if ($("input:radio[name='item" + a[l].id + "']:checked").each(function () {
                      o += $(this).val();
                    }), o.length <= 0) return this.content = "\u5355\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879", this.postMessage(), this.checkList.length = 0, void (this.list.length = 0);
                    this.list2.push("{\"voteId\":\"" + a[l].id + "\",\"optionsId\":\"" + o + "\"}"), this.checkList = this.list2;
                  } else {
                    var p = "";
                    if ($("input:checkbox[name='item" + a[l].id + "']:checked").each(function () {
                      p += "" == p ? $(this).val() : "," + $(this).val();
                    }), p.length <= 0) return this.content = "\u591A\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879", this.postMessage(), this.checkList.length = 0, void (this.list.length = 0);
                    if (p.split(",").length > a[l].voteMax) return this.content = a[l].title + "\u6700\u591A\u9009\u62E9" + a[l].voteMax + "\u4E2A\u9009\u9879\uFF01", this.postMessage(), this.checkList.length = 0, void (this.list.length = 0);
                    this.list2.push("{\"voteId\":\"" + a[l].id + "\",\"optionsId\":\"" + p + "\"}"), this.checkList = this.list2;
                  }
                  var v = {
                    votes: m()(this.checkList),
                    userId: s.userId,
                    timestamp: new Date().getTime(),
                    deviceId: s.deviceId,
                    token: s.token,
                    sign: N()("deviceId" + s.deviceId + "timestamp" + new Date().getTime() + "test_123456679890123456")
                  };
                  g(v).then(function (a) {
                    if (t.content = a.message, 0 == a.code) {
                      t.content = "\u6295\u7968\u6210\u529F", t.postMessage();
                      var i = new Array();
                      i = a.data;
                      for (var r = 0; r < i.length; r++) {
                        for (var l = i[r], o = 0, u = 0, p = 0; p < l.options.length; p++) o += l.options[p].voteCount;
                        l.count = o;
                      }
                      for (var m = 0; m < i.length; m++) {
                        l = i[m];
                        for (var v = 0; v < l.options.length; v++) {
                          var c = l.options[v];
                          u = 0;
                          0 != l.count && 0 != c.voteCount ? (u = (u = c.voteCount / l.count * 100).toFixed(2), c.per = u) : c.per = u;
                        }
                      }
                      var d = {};
                      d.liveId = e, d.val = i, t.resultList.push(d), document.getElementById("messageVote" + e).style.display = "none", document.getElementById("messageButton" + e).style.display = "none", document.getElementById("messageNotButton" + e).style.display = "block";
                    } else 2101 == a.code ? (t.getVoteResult(s.userId, "", e, n), t.content = "\u60A8\u5DF2\u6295\u7968", t.postMessage()) : t.postMessage();
                    t.checkList.length = 0;
                  });
                } else {
                  var c = navigator.userAgent,
                    d = (navigator.appVersion, c.indexOf("Android") > -1 || c.indexOf("Linux") > -1);
                  !!c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                    method: "userJson",
                    data: {
                      isLogin: "" + !0
                    }
                  }), d && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
                }
              } else {
                c = navigator.userAgent, navigator.appVersion, d = c.indexOf("Android") > -1 || c.indexOf("Linux") > -1;
                !!c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                  method: "userJson",
                  data: {
                    isLogin: "" + !0
                  }
                }), d && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
              }
            } else {
              var h = JSON.parse(this.userInfo);
              "object" != (void 0 === h ? "undefined" : u()(h)) && "[object object]" != Object.prototype.toString.call(h).toLowerCase() && h.length && (h = JSON.parse(h));
              for (l = 0; l < a.length; l++) if (1 == a[l].voteMax) {
                o = "";
                if ($("input:radio[name='item" + a[l].id + "']:checked").each(function () {
                  o += $(this).val();
                }), o.length <= 0) return this.content = "\u5355\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879", this.postMessage(), this.checkList.length = 0, void (this.list.length = 0);
                this.list2.push("{\"voteId\":\"" + a[l].id + "\",\"optionsId\":\"" + o + "\"}"), this.checkList = this.list2;
              } else {
                p = "";
                if ($("input:checkbox[name='item" + a[l].id + "']:checked").each(function () {
                  p += "" == p ? $(this).val() : "," + $(this).val();
                }), p.length <= 0) return this.content = "\u591A\u9009\u6295\u7968\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u9009\u9879", this.postMessage(), this.checkList.length = 0, void (this.list.length = 0);
                if (p.split(",").length > a[l].voteMax) return this.content = a[l].title + "\u6700\u591A\u9009\u62E9" + a[l].voteMax + "\u4E2A\u9009\u9879\uFF01", this.postMessage(), this.checkList.length = 0, void (this.list.length = 0);
                this.list2.push("{\"voteId\":\"" + a[l].id + "\",\"optionsId\":\"" + p + "\"}"), this.checkList = this.list2;
              }
              var f = {
                votes: m()(this.checkList),
                userId: "",
                timestamp: new Date().getTime(),
                deviceId: h.deviceId,
                token: "",
                sign: N()("deviceId" + h.deviceId + "timestamp" + new Date().getTime() + "test_123456679890123456")
              };
              g(f).then(function (a) {
                if (t.content = a.message, 0 == a.code) {
                  t.content = "\u6295\u7968\u6210\u529F", t.postMessage();
                  var i = new Array();
                  i = a.data;
                  for (var r = 0; r < i.length; r++) {
                    for (var s = i[r], l = 0, o = 0, u = 0; u < s.options.length; u++) l += s.options[u].voteCount;
                    s.count = l;
                  }
                  for (var p = 0; p < i.length; p++) {
                    s = i[p];
                    for (var m = 0; m < s.options.length; m++) {
                      var v = s.options[m];
                      o = 0;
                      0 != s.count && 0 != v.voteCount ? (o = (o = v.voteCount / s.count * 100).toFixed(2), v.per = o) : v.per = o;
                    }
                  }
                  var c = {};
                  c.liveId = e, c.val = i, t.resultList.push(c), document.getElementById("messageVote" + e).style.display = "none", document.getElementById("messageButton" + e).style.display = "none", document.getElementById("messageNotButton" + e).style.display = "block";
                } else 2101 == a.code ? (t.postMessage(), t.getVoteResult("", h.deviceId, e, n)) : t.postMessage();
                t.checkList.length = 0;
              });
            }
          },
          postMessage: function () {
            var e = navigator.userAgent,
              t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1),
              a = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
              n = {
                method: "showAlert",
                data: {
                  content: "" + this.content
                }
              },
              i = "{\"method\":\"showAlert\",data:{\"content\":\"" + this.content + "\"}}";
            a && window.webkit.messageHandlers.Native.postMessage(n), t && window.Native.postMessage(i);
          },
          getVoteResult: function (e, t, a, n) {
            var i = this;
            h("" != e && "" == t ? {
              votes: n,
              userId: e
            } : {
              votes: n,
              deviceId: t
            }).then(function (e) {
              if (0 == e.code) {
                var t = new Array();
                if (1 == (t = e.data)[0].isVote) {
                  for (var n = 0; n < t.length; n++) {
                    for (var r = t[n], s = 0, l = 0, o = 0; o < r.options.length; o++) s += r.options[o].voteCount;
                    r.count = s;
                  }
                  for (var u = 0; u < t.length; u++) {
                    r = t[u];
                    for (var p = 0; p < r.options.length; p++) {
                      var m = r.options[p];
                      l = 0;
                      0 != r.count && 0 != m.voteCount ? (l = (l = m.voteCount / r.count * 100).toFixed(2), m.per = l) : m.per = l;
                    }
                  }
                  var v = {};
                  v.liveId = a, v.val = t, i.resultList.push(v), document.getElementById("messageVote" + a).style.display = "none", document.getElementById("messageButton" + a).style.display = "none", document.getElementById("messageNotButton" + a).style.display = "block";
                }
              }
            });
          },
          replaceAudio: function () {
            var e = this;
            this.$nextTick(function () {
              $("audio").attr("name", "my_audio");
              var t = document.getElementsByName("my_audio");
              $.each(t, function (t, a) {
                if (jQuery(a).attr("id", "myAudio" + t), null != a) {
                  a.load();
                  var n = {
                    audioId: "myAudio" + t,
                    audioSrc: document.getElementById("myAudio" + t).getElementsByTagName("source")[0].getAttribute("src"),
                    duration: e.formatDuraton(a.getAttribute("duration"))
                  };
                  e.audioList.push(n);
                  var i = "<div style=\"background-color: #EEEEEE;max-width: 670px;  height: 2.875rem;  border: 1px solid #DDDDDD;  border-radius: 4px;  width: 92%;  margin: 0 auto;\"><div style=\"float: left;  text-align: center;  width: 18%;  height: 100%;\"><div style=\"width: 32px;height: 32px;background-color: #cd3333;border-radius: 4px;margin: 7px 0px 7px 9px;display: flex;justify-content: center;align-items: center;\"><div style=\"width: 10px;height: 12px;background-repeat: round;background-image: url(static/images/play1.png)\" id=\"audioPlayer" + t + "\"></div></div></div><div style=\"margin-right: 2%;  float: left;  width: 68%;  height: 100%;margin-left: 2%;\"><div style=\"background-color: #dddddd;  position: relative;  height: 4px;  cursor: pointer;  margin-top: 0.8rem;  border-radius: 4px;\" id=\"progressBarBg" + t + "\"><span id=\"progressDot" + t + "\" style=\"width: 12px;  height: 12px;  border-radius: 50%;  -moz-border-radius: 50%;  -webkit-border-radius: 50%;  background-color: #cd3333;  position: absolute;  left: 0;  top: 50%;  margin-top: -6px;  margin-left: -5px;  cursor: pointer;\"></span><div style=\"background-color: #cd3333;  width: 0;  height: 4px;\" id=\"progressBar" + t + "\"></div></div><div style=\"overflow: hidden;  margin-top: 10px;\"><span style=\"float: left;  font-size: 10px;  color: #666666;line-height: 10px;\" id=\"audioCurTime" + t + "\">00:00</span><span style=\"float: right;  font-size: 10px;  color: #666666;line-height: 10px;\" id=\"durationTime" + t + "\"></span></div></div><div style=\"width: 4%;float: right;height: 100%;display:flex;justify-content:center;align-items:center;margin-right: 3.5%;\"><div style=\"width: 11px;height: 14px;background-image: url(static/images/swing.png);background-repeat: round;\" id=\"audioSurge" + t + "\"></div></div></div>";
                  $("#myAudio" + t).after(i), $("#myAudio" + t).removeAttr("controls"), sessionStorage.setItem("m" + t, 0);
                  var r = document.getElementById("myAudio" + t);
                  e.initAudioEvent(r, t, e.audioList);
                }
              });
            });
          },
          replaceVideo: function () {
            var e = this;
            this.htmlList.length = 0, this.$nextTick(function () {
              $("img").attr("name", "my_img"), $("p").css("margin", "0px 0px"), $("#liveMessageContent video").attr("name", "myVideo"), e.srcList = document.getElementsByName("myVideo");
              for (var t = 0; t < e.srcList.length; t++) {
                e.srcList[t].setAttribute("id", "video" + (t + 1));
                var a = "";
                if ("" == e.srcList[t].src) a = document.getElementById("video" + (t + 1)).getElementsByTagName("source")[0].getAttribute("src");else a = e.srcList[t].src;
                var n = "<div id='video" + t + "' style='width: 100%;height: 210px;background-image: url(" + e.srcList[t].poster + ");background-repeat: no-repeat;background-size: cover;' id='my_name'  data-video-url='" + a + "' data-video-poster='" + e.srcList[t].poster + "' data-isVideo='true'><div style='font-size: 0.625em;position: absolute;margin-top: 9rem;margin-left: 0.875rem;width: 3.25rem;height: 3.25rem;background-color: #000000;border-radius: 2rem;opacity: 0.7;'   data-video-poster='" + e.srcList[t].poster + "' data-video-url='" + a + "' data-isVideo='true'><div style='width: 0.9275rem;margin: 1rem 1.0625rem 0rem 1.25rem;background-image: url(static/images/playButton.png);background-repeat: round;height: 1.25rem;'   data-video-poster='" + e.srcList[t].poster + "' data-video-url='" + a + "' data-isVideo='true'></div></div></div>";
                e.htmlList.push(n);
              }
              for (var i = 0; i < e.htmlList.length; i++) {
                $("#video" + (i + 1)).replaceWith(e.htmlList[i]), document.getElementById("video" + i).onclick = function (e) {
                  var t = e.target.getAttribute("data-video-url"),
                    a = e.target.getAttribute("data-video-poster"),
                    n = {
                      method: "VideoPlay",
                      data: {
                        videoUrl: t,
                        imgUrl: a,
                        pageY: e.pageY
                      }
                    },
                    i = "{\"method\":\"VideoPlay\",data:{\"videoUrl\":\"" + t + "\",\"imgUrl\":\"" + a + "\",\"pageY\":\"" + e.pageY + "\"}}",
                    r = navigator.userAgent,
                    s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
                  !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
                };
              }
              var r = document.getElementById("liveMessageContent").getElementsByTagName("img"),
                s = function (e) {
                  "object" === u()(r[e]) && (r[e].onload = function () {
                    r[e].style.width = "100%", r[e].style.height = "100%";
                  });
                };
              for (var l in r) s(l);
            });
          },
          openImageProxy: function (e) {
            if ("my_img" === e.target.name) {
              var t = e.target.getAttribute("src"),
                a = {
                  method: "imgOpen",
                  data: {
                    imgUrl: t
                  }
                },
                n = "{\"method\":\"imgOpen\",data:{\"imgUrl\":\"" + t + "\"}}",
                i = navigator.userAgent,
                r = (navigator.appVersion, i.indexOf("Android") > -1 || i.indexOf("Linux") > -1);
              !!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(a), r && window.Native.postMessage(n);
            }
          },
          openVideo: function (e) {
            if ("my_name" === e.target.id) {
              var t = e.target.getAttribute("data-video-url"),
                a = e.target.getAttribute("data-video-poster"),
                n = {
                  method: "VideoPlay",
                  data: {
                    videoUrl: t,
                    imgUrl: a
                  }
                },
                i = "{\"method\":\"VideoPlay\",data:{\"videoUrl\":\"" + t + "\",\"imgUrl\":\"" + a + "\"}}",
                r = navigator.userAgent,
                s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
              !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
            }
          },
          CompareDate: function (e, t) {
            return new Date(e.replace(/-/g, "/")) > new Date(t.replace(/-/g, "/"));
          },
          initAudioEvent: function (e, t, a) {
            var n = this,
              i = document.getElementById("audioPlayer" + t),
              r = document.getElementById("audioSurge" + t);
            document.getElementById("durationTime" + t).innerText = this.transTime(e.getAttribute("duration")), i.addEventListener("click", function () {
              if (e.addEventListener("timeupdate", function () {
                n.updateProgress(e, t);
              }, !1), e.addEventListener("ended", function () {
                n.audioEnded(t);
              }, !1), e.paused) {
                e.play(), i.style.background = "url('static/images/pause1.png')", i.style.backgroundRepeat = "round", r.style.background = "url('static/images/surge.gif')", r.style.backgroundRepeat = "round";
                for (var s = 0; s < a.length; s++) if (e.getAttribute("id") != a[s].audioId) {
                  var l = document.getElementById("myAudio" + s),
                    o = document.getElementById("audioPlayer" + s),
                    u = document.getElementById("audioSurge" + s);
                  l.pause(), o.style.background = "url('static/images/play1.png')", o.style.backgroundRepeat = "round", u.style.background = "url('static/images/swing.png')", u.style.backgroundRepeat = "round";
                }
              } else e.pause(), i.style.background = "url('static/images/play1.png')", i.style.backgroundRepeat = "round", r.style.background = "url('static/images/swing.png')", r.style.backgroundRepeat = "round";
            }, !1);
            var s = document.getElementById("progressBarBg" + t);
            s.addEventListener("mousedown", function (a) {
              if (!e.paused || 0 != e.currentTime) {
                var i = parseFloat(window.getComputedStyle(s, null).width.replace("px", "")),
                  r = a.offsetX / i;
                e.currentTime = e.duration * r, n.updateProgress(e, t);
              }
            }, !1), this.dragProgressDotEvent(e, t);
          },
          updateProgress: function (e, t) {
            var a = e.currentTime / e.duration;
            document.getElementById("progressBar" + t).style.width = 100 * a + "%", document.getElementById("progressDot" + t).style.left = 100 * a + "%", document.getElementById("audioCurTime" + t).innerText = this.transTime(e.currentTime);
          },
          audioEnded: function (e) {
            document.getElementById("progressBar" + e).style.width = 0, document.getElementById("progressDot" + e).style.left = 0, document.getElementById("audioCurTime" + e).innerText = this.transTime(0), document.getElementById("audioPlayer" + e).style.background = "url('static/images/play1.png')", document.getElementById("audioPlayer" + e).style.backgroundRepeat = "round";
          },
          transTime: function (e) {
            var t = parseInt(e / 3600);
            e %= 3600;
            var a = parseInt(e / 60),
              n = parseInt(e % 60);
            return t > 0 ? this.formatTime(t + ":" + a + ":" + n) : this.formatTime(a + ":" + n);
          },
          formatTime: function (e) {
            for (var t = "", a = e.split(":"), n = 0; n < a.length - 1; n++) t += 1 == a[n].length ? "0" + a[n] : a[n], t += ":";
            return t += 1 == a[n].length ? "0" + a[n] : a[n];
          },
          dragProgressDotEvent: function (e, t) {
            var a = this,
              n = document.getElementById("progressDot" + t),
              i = document.getElementById("progressBarBg" + t),
              r = {
                oriOffestLeft: 0,
                oriX: 0,
                maxLeft: 0,
                maxRight: 0
              };
            this.flag = !1, n.ontouchstart = function (s) {
              e.paused && 0 == e.currentTime || (a.flag = !0, r.oriOffestLeft = n.offsetLeft, r.oriX = event.touches ? event.touches[0].clientX : event.clientX, r.maxLeft = r.oriOffestLeft, r.maxRight = document.getElementById("progressBarBg" + t).offsetWidth - r.oriOffestLeft, event && event.preventDefault ? event.preventDefault() : event.returnValue = !1, event && event.stopPropagation ? event.stopPropagation() : window.event.cancelBubble = !0), i.ontouchmove = function (n) {
                if (a.flag) {
                  var i = (event.touches ? event.touches[0].clientX : event.clientX) - r.oriX;
                  i > r.maxRight ? i = r.maxRight : i < -r.maxLeft && (i = -r.maxLeft);
                  var s = document.getElementById("progressBarBg" + t),
                    l = parseFloat(window.getComputedStyle(s, null).width.replace("px", "")),
                    o = (r.oriOffestLeft + i) / l;
                  e.currentTime = e.duration * o, a.$options.methods.updateProgress(e, t);
                }
              }, i.ontouchend = function (e) {
                a.flag = !1;
              };
            };
          },
          formatDuraton: function (e) {
            if (e > -1) {
              var t = Math.floor(e / 3600),
                a = Math.floor(e / 60) % 60,
                n = e % 60;
              e = t <= 0 ? "" : t < 10 ? "0" + t + ":" : t + ":", a < 10 && (e += "0"), e += a + ":", n < 10 && (e += "0"), e += n;
            }
            return e.split(".")[0];
          },
          created: function () {
            window.callBack = this.callBack;
          }
        }
      },
      G = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", [a("mt-loadmore", {
            ref: "loadmore",
            attrs: {
              "top-method": e.loadTop,
              autoFill: !0,
              topDistance: 70
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            },
            attrs: {
              id: "scrollerDetail"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              height: "100%",
              "background-color": "#ffffff"
            }
          }, [a("div", {
            staticStyle: {
              width: "92%",
              height: "100%",
              "margin-left": "4%"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              "line-height": "20px",
              "padding-top": "0.7rem"
            }
          }, [a("span", {
            staticClass: "sub_title",
            staticStyle: {
              "font-family": "FZZCYSJW",
              "font-size": "1.0625em"
            }
          }, [e._v(e._s(e.newsInfo.title))])]), e._v(" "), a("div", {
            staticClass: "body",
            staticStyle: {
              width: "100%",
              overflow: "auto",
              "margin-top": "0.5rem",
              "text-align": "justify",
              "font-family": "fzjt"
            },
            attrs: {
              id: "body"
            },
            domProps: {
              innerHTML: e._s(e.newsInfo.body)
            }
          }), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              height: "8px",
              "margin-top": "10px",
              "margin-bottom": "10px"
            }
          }, [a("div", {
            staticStyle: {
              display: "none",
              "background-image": "url('static/images/down.png')",
              "background-repeat": "round",
              width: "14px",
              height: "8px",
              "margin-left": "48%"
            },
            attrs: {
              id: "triangle-down"
            },
            on: {
              click: e.open
            }
          }), e._v(" "), a("div", {
            staticStyle: {
              "background-image": "url('static/images/up.png')",
              "background-repeat": "round",
              width: "14px",
              height: "8px",
              "margin-left": "48%"
            },
            attrs: {
              id: "triangle-up"
            },
            on: {
              click: e.close
            }
          })])])]), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              height: "100%",
              "background-color": "#F6F6F6",
              overflow: "hidden"
            },
            attrs: {
              id: "liveMessageContent"
            },
            on: {
              click: function (t) {
                return e.openVideo(t);
              }
            }
          }, [e._l(e.topMessageList, function (t, n) {
            return a("div", {
              staticStyle: {
                width: "92%",
                "margin-left": "4%"
              }
            }, [a("div", {
              staticStyle: {
                "border-left": "1px solid #ECECEC",
                width: "1px",
                height: "30px",
                float: "left"
              }
            }, [a("span", {
              staticStyle: {
                content: "''",
                position: "absolute",
                "margin-top": "0.7rem",
                width: "5px",
                height: "5px",
                border: "1px solid #cd3333",
                "border-radius": "10px",
                background: "#ffffff",
                right: "-2px"
              }
            })]), e._v(" "), a("div", {
              staticStyle: {
                float: "left",
                "font-size": "12px",
                color: "#cd3333",
                "line-height": "30px",
                "margin-left": "10px"
              }
            }, [e._v(e._s(t.createTime))]), e._v(" "), a("div", {
              staticStyle: {
                width: "100%",
                height: "100%",
                "background-color": "#ffffff",
                float: "left",
                "border-left": "1px solid rgb(236, 236, 236)"
              }
            }, [a("div", {
              staticStyle: {
                width: "94%",
                height: "20px",
                "margin-left": "3%",
                "margin-top": "0.625rem"
              }
            }, [a("div", {
              staticStyle: {
                width: "17px",
                height: "17px",
                float: "left"
              }
            }, ["null" == t.icon ? a("img", {
              staticStyle: {
                width: "17px",
                height: "17px",
                "border-radius": "50%",
                border: "1px solid rgba(0,0,0,0.1)"
              },
              attrs: {
                src: "static/images/yongpai.png"
              }
            }) : a("img", {
              staticStyle: {
                width: "17px",
                height: "17px",
                "border-radius": "50%",
                border: "1px solid rgba(0,0,0,0.1)"
              },
              attrs: {
                src: t.icon
              }
            })]), e._v(" "), a("div", {
              staticStyle: {
                width: "75%",
                "font-size": "14px",
                "font-family": "fzjt",
                color: "#005D76",
                "line-height": "18px",
                "margin-left": "0.3rem",
                float: "left"
              }
            }, [e._v(e._s(t.nickname))]), e._v(" "), a("div", {
              staticStyle: {
                width: "10.8%",
                height: "1rem",
                "margin-top": "0.21rem",
                float: "left"
              }
            }, [a("img", {
              staticStyle: {
                width: "1.875rem",
                height: "1rem"
              },
              attrs: {
                src: "static/images/top.png"
              }
            })])]), e._v(" "), a("div", {
              staticStyle: {
                width: "94%",
                height: "100%",
                "margin-left": "3%",
                "font-size": "1.0625em",
                "font-family": "fzjt",
                color: "rgba(102,102,102,1)",
                "padding-bottom": "0.625rem",
                "margin-top": "0.5rem"
              },
              domProps: {
                innerHTML: e._s(t.content)
              },
              on: {
                click: function (t) {
                  return e.openImageProxy(t);
                }
              }
            }), e._v(" "), null != t.vote && t.vote.length > 0 ? a("div", {
              staticStyle: {
                width: "94%",
                height: "100%",
                "margin-left": "3%"
              }
            }, [a("div", {
              staticClass: "div_father",
              staticStyle: {
                display: "block"
              },
              attrs: {
                id: "topMessageVote" + t.liveMessageId
              }
            }, e._l(t.vote, function (t, n) {
              return a("div", {
                staticStyle: {
                  width: "100%",
                  "text-align": "left"
                }
              }, [a("div", [1 == t.voteMax ? a("span", {
                staticClass: "vote_title"
              }, [e._v("\u3010\u5355\u9009\u3011" + e._s(t.title))]) : e._e(), e._v(" "), t.voteMax > 1 ? a("span", {
                staticClass: "vote_title"
              }, [e._v("\u3010\u591A\u9009\u3011" + e._s(t.title))]) : e._e()]), e._v(" "), e._l(t.options, function (n, i) {
                return 1 == t.voteMax ? a("div", {
                  staticClass: "div_person2"
                }, [a("input", {
                  staticStyle: {
                    display: "none"
                  },
                  attrs: {
                    id: "item_" + n.id,
                    type: "radio",
                    name: "item" + t.id
                  },
                  domProps: {
                    value: n.id
                  }
                }), e._v(" "), a("label", {
                  attrs: {
                    for: "item_" + n.id
                  }
                }), e._v(" "), a("span", {
                  staticClass: "vote_answer"
                }, [e._v(e._s(n.options))])]) : e._e();
              }), e._v(" "), e._l(t.options, function (n, i) {
                return t.voteMax > 1 ? a("div", {
                  staticClass: "div_person",
                  on: {
                    click: function (a) {
                      return e.checkBox("item_" + n.id, n.id, t.voteMax);
                    }
                  }
                }, [a("input", {
                  staticStyle: {
                    display: "none"
                  },
                  attrs: {
                    id: "item_" + n.id,
                    type: "checkbox",
                    name: "item" + t.id
                  },
                  domProps: {
                    value: n.id
                  }
                }), e._v(" "), a("label", {
                  attrs: {
                    for: "item_" + n.id
                  }
                }), e._v(" "), a("span", {
                  staticClass: "vote_answer"
                }, [e._v(e._s(n.options))])]) : e._e();
              })], 2);
            }), 0), e._v(" "), e._l(e.resultList2, function (n, i) {
              return null != n && n.liveId == t.liveMessageId ? a("div", {
                staticClass: "div_father",
                attrs: {
                  id: "topMessageResult" + t.liveMessageId
                }
              }, e._l(n.val, function (t, n) {
                return a("div", [a("div", {
                  staticStyle: {
                    "text-align": "left"
                  }
                }, [1 == t.voteMax ? a("span", {
                  staticClass: "vote_title"
                }, [e._v("\u3010\u5355\u9009\u3011" + e._s(t.title))]) : e._e(), e._v(" "), t.voteMax > 1 ? a("span", {
                  staticClass: "vote_title"
                }, [e._v("\u3010\u591A\u9009\u3011" + e._s(t.title))]) : e._e()]), e._v(" "), e._l(t.options, function (t, n) {
                  return a("div", {
                    staticClass: "div_person",
                    staticStyle: {
                      width: "100%",
                      height: "3.8rem"
                    }
                  }, [a("div", 0 == n ? {
                    staticStyle: {
                      width: "100%",
                      height: "34px"
                    }
                  } : {
                    staticStyle: {
                      width: "100%",
                      "margin-top": "1.8125rem",
                      height: "34px"
                    }
                  }, [a("div", {
                    staticClass: "circle"
                  }), e._v(" "), a("div", {
                    staticStyle: {
                      width: "90%",
                      float: "left",
                      "text-align": "left",
                      "margin-top": "0.4rem"
                    }
                  }, [a("span", {
                    staticClass: "vote_answer",
                    staticStyle: {
                      "margin-left": "0",
                      float: "left",
                      "line-height": "1.25rem"
                    }
                  }, [e._v(e._s(t.options))])])]), e._v(" "), a("div", {
                    staticStyle: {
                      width: "90%",
                      height: "1.25rem",
                      "margin-left": "10%"
                    }
                  }, [a("div", {
                    staticClass: "progress"
                  }, [a("div", {
                    staticClass: "progress-bar",
                    staticStyle: {
                      "background-color": "#B52E2E"
                    },
                    style: {
                      width: t.per + "%"
                    }
                  })]), e._v(" "), a("div", {
                    staticStyle: {
                      float: "left",
                      "margin-left": "0.8rem",
                      width: "4.25rem"
                    }
                  }, [a("span", {
                    staticStyle: {
                      "font-size": "12px",
                      "font-family": "PingFangSC-Regular",
                      color: "rgba(153,153,153,1)",
                      "line-height": "17px"
                    }
                  }, [e._v(e._s(t.voteCount) + "\u7968")])]), e._v(" "), a("div", {
                    staticStyle: {
                      float: "right",
                      width: "3rem"
                    }
                  }, [a("span", {
                    staticStyle: {
                      "font-size": "12px",
                      "font-family": "PingFangSC-Regular",
                      color: "rgba(153,153,153,1)",
                      "line-height": "17px"
                    }
                  }, [e._v(e._s(t.per) + "%")])])])]);
                })], 2);
              }), 0) : e._e();
            }), e._v(" "), a("div", {
              staticClass: "div_father",
              attrs: {
                id: "topMessageButton" + t.liveMessageId
              }
            }, [a("div", {
              staticClass: "div_vote_button",
              on: {
                click: function (a) {
                  return e.submitTopVote(t.liveMessageId);
                }
              }
            }, [a("span", {
              staticClass: "vote_font"
            }, [e._v("\u6295\u7968")])])]), e._v(" "), a("div", {
              staticClass: "div_father",
              staticStyle: {
                display: "none"
              },
              attrs: {
                id: "topMessageNotButton" + t.liveMessageId
              }
            }, [a("div", {
              staticClass: "div_vote_button"
            }, [a("span", {
              staticClass: "vote_font"
            }, [e._v("\u5DF2\u6295\u7968")])])])], 2) : e._e()])]);
          }), e._v(" "), e._l(e.liveMessageList, function (t, n) {
            return a("div", {
              staticStyle: {
                width: "92%",
                "margin-left": "4%",
                "margin-bottom": "1rem"
              }
            }, [a("div", {
              staticStyle: {
                "border-left": "1px solid #ECECEC",
                width: "1px",
                height: "30px",
                float: "left"
              }
            }, [a("span", {
              staticStyle: {
                content: "''",
                position: "absolute",
                "margin-top": "0.7rem",
                width: "5px",
                height: "5px",
                border: "1px solid #cd3333",
                "border-radius": "10px",
                background: "#ffffff",
                right: "-2px"
              }
            })]), e._v(" "), a("div", {
              staticStyle: {
                float: "left",
                "font-size": "12px",
                color: "#cd3333",
                "line-height": "30px",
                "margin-left": "10px"
              }
            }, [e._v(e._s(t.createTime))]), e._v(" "), a("div", {
              staticStyle: {
                width: "100%",
                height: "100%",
                "background-color": "#ffffff",
                float: "left",
                "border-left": "1px solid rgb(236, 236, 236)"
              }
            }, [a("div", {
              staticStyle: {
                width: "94%",
                height: "20px",
                "margin-left": "3%",
                "margin-top": "0.625rem"
              }
            }, [a("div", {
              staticStyle: {
                width: "17px",
                height: "17px",
                float: "left"
              }
            }, ["null" == t.icon ? a("img", {
              staticStyle: {
                width: "17px",
                height: "17px",
                "border-radius": "50%",
                border: "1px solid rgba(0,0,0,0.1)"
              },
              attrs: {
                src: "static/images/yongpai.png"
              }
            }) : a("img", {
              staticStyle: {
                width: "17px",
                height: "17px",
                "border-radius": "50%",
                border: "1px solid rgba(0,0,0,0.1)"
              },
              attrs: {
                src: t.icon
              }
            })]), e._v(" "), a("div", {
              staticStyle: {
                width: "75%",
                "font-size": "14px",
                "font-family": "fzjt",
                color: "#005D76",
                "line-height": "18px",
                "margin-left": "0.21rem",
                float: "left"
              }
            }, [e._v(e._s(t.nickname))])]), e._v(" "), a("div", {
              staticStyle: {
                width: "94%",
                height: "100%",
                "margin-left": "3%",
                "font-size": "1.0625em",
                "font-family": "fzjt",
                color: "rgba(102,102,102,1)",
                "padding-bottom": "0.625rem",
                "margin-top": "0.5rem"
              },
              domProps: {
                innerHTML: e._s(t.content)
              },
              on: {
                click: function (t) {
                  return e.openImageProxy(t);
                }
              }
            }), e._v(" "), null != t.vote && t.vote.length > 0 ? a("div", {
              staticStyle: {
                width: "94%",
                height: "100%",
                "margin-left": "3%"
              }
            }, [a("div", {
              staticClass: "div_father",
              staticStyle: {
                display: "block"
              },
              attrs: {
                id: "messageVote" + t.liveMessageId
              }
            }, e._l(t.vote, function (t, n) {
              return a("div", {
                staticStyle: {
                  width: "100%",
                  "text-align": "left"
                }
              }, [a("div", [1 == t.voteMax ? a("span", {
                staticClass: "vote_title"
              }, [e._v("\u3010\u5355\u9009\u3011" + e._s(t.title))]) : e._e(), e._v(" "), t.voteMax > 1 ? a("span", {
                staticClass: "vote_title"
              }, [e._v("\u3010\u591A\u9009\u3011" + e._s(t.title))]) : e._e()]), e._v(" "), e._l(t.options, function (n, i) {
                return 1 == t.voteMax ? a("div", {
                  staticClass: "div_person2"
                }, [a("input", {
                  staticStyle: {
                    display: "none"
                  },
                  attrs: {
                    id: "item_" + n.id,
                    type: "radio",
                    name: "item" + t.id
                  },
                  domProps: {
                    value: n.id
                  }
                }), e._v(" "), a("label", {
                  attrs: {
                    for: "item_" + n.id
                  }
                }), e._v(" "), a("span", {
                  staticClass: "vote_answer"
                }, [e._v(e._s(n.options))])]) : e._e();
              }), e._v(" "), e._l(t.options, function (n, i) {
                return t.voteMax > 1 ? a("div", {
                  staticClass: "div_person",
                  on: {
                    click: function (a) {
                      return e.checkBox("item_" + n.id, n.id, t.voteMax);
                    }
                  }
                }, [a("input", {
                  staticStyle: {
                    display: "none"
                  },
                  attrs: {
                    id: "item_" + n.id,
                    type: "checkbox",
                    name: "item" + t.id
                  },
                  domProps: {
                    value: n.id
                  }
                }), e._v(" "), a("label", {
                  attrs: {
                    for: "item_" + n.id
                  }
                }), e._v(" "), a("span", {
                  staticClass: "vote_answer"
                }, [e._v(e._s(n.options))])]) : e._e();
              })], 2);
            }), 0), e._v(" "), e._l(e.resultList, function (n, i) {
              return null != n && n.liveId == t.liveMessageId ? a("div", {
                staticClass: "div_father",
                attrs: {
                  id: "messageResult" + t.liveMessageId
                }
              }, e._l(n.val, function (t, n) {
                return a("div", [a("div", {
                  staticStyle: {
                    "text-align": "left"
                  }
                }, [1 == t.voteMax ? a("span", {
                  staticClass: "vote_title"
                }, [e._v("\u3010\u5355\u9009\u3011" + e._s(t.title))]) : e._e(), e._v(" "), t.voteMax > 1 ? a("span", {
                  staticClass: "vote_title"
                }, [e._v("\u3010\u591A\u9009\u3011" + e._s(t.title))]) : e._e()]), e._v(" "), e._l(t.options, function (t, n) {
                  return a("div", {
                    staticClass: "div_person",
                    staticStyle: {
                      width: "100%",
                      height: "3.8rem"
                    }
                  }, [a("div", 0 == n ? {
                    staticStyle: {
                      width: "100%",
                      height: "34px"
                    }
                  } : {
                    staticStyle: {
                      width: "100%",
                      "margin-top": "1.8125rem",
                      height: "34px"
                    }
                  }, [a("div", {
                    staticClass: "circle"
                  }), e._v(" "), a("div", {
                    staticStyle: {
                      width: "90%",
                      float: "left",
                      "text-align": "left",
                      "margin-top": "0.4rem"
                    }
                  }, [a("span", {
                    staticClass: "vote_answer",
                    staticStyle: {
                      "margin-left": "0",
                      float: "left",
                      "line-height": "1.25rem"
                    }
                  }, [e._v(e._s(t.options))])])]), e._v(" "), a("div", {
                    staticStyle: {
                      width: "90%",
                      height: "1.25rem",
                      "margin-left": "10%"
                    }
                  }, [a("div", {
                    staticClass: "progress"
                  }, [a("div", {
                    staticClass: "progress-bar",
                    staticStyle: {
                      "background-color": "#B52E2E"
                    },
                    style: {
                      width: t.per + "%"
                    }
                  })]), e._v(" "), a("div", {
                    staticStyle: {
                      float: "left",
                      "margin-left": "0.8rem",
                      width: "4.25rem"
                    }
                  }, [a("span", {
                    staticStyle: {
                      "font-size": "12px",
                      "font-family": "PingFangSC-Regular",
                      color: "rgba(153,153,153,1)",
                      "line-height": "17px"
                    }
                  }, [e._v(e._s(t.voteCount) + "\u7968")])]), e._v(" "), a("div", {
                    staticStyle: {
                      float: "right",
                      width: "3rem"
                    }
                  }, [a("span", {
                    staticStyle: {
                      "font-size": "12px",
                      "font-family": "PingFangSC-Regular",
                      color: "rgba(153,153,153,1)",
                      "line-height": "17px"
                    }
                  }, [e._v(e._s(t.per) + "%")])])])]);
                })], 2);
              }), 0) : e._e();
            }), e._v(" "), a("div", {
              staticClass: "div_father",
              attrs: {
                id: "messageButton" + t.liveMessageId
              }
            }, [a("div", {
              staticClass: "div_vote_button",
              on: {
                click: function (a) {
                  return e.submitVote(t.liveMessageId);
                }
              }
            }, [a("span", {
              staticClass: "vote_font"
            }, [e._v("\u6295\u7968")])])]), e._v(" "), a("div", {
              staticClass: "div_father",
              staticStyle: {
                display: "none"
              },
              attrs: {
                id: "messageNotButton" + t.liveMessageId
              }
            }, [a("div", {
              staticClass: "div_vote_button"
            }, [a("span", {
              staticClass: "vote_font"
            }, [e._v("\u5DF2\u6295\u7968")])])])], 2) : e._e()])]);
          })], 2)])])], 1);
        },
        staticRenderFns: []
      };
    var Z = a("VU/8")(Q, G, !1, function (e) {
        a("4gI8");
      }, "data-v-754e57d1", null).exports,
      ee = a("S8Wg"),
      te = (ee.a, String, Array, Number, {
        components: {
          Scroller: ee.a
        },
        name: "yp-related-video",
        props: {
          newsId: String,
          relatedList: Array,
          relatedNewsListLength: Number
        },
        data: function () {
          return {
            width: 0
          };
        },
        methods: {
          openVideo: function (e) {
            window.location.href = "yp://app?type=news&id=" + e.newsId + "&modetype=" + e.modeType + "&topicId=" + e.topicId;
          }
        },
        mounted: function () {}
      }),
      ae = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "100%",
              "margin-bottom": "3.125rem"
            }
          }, [e._m(0), e._v(" "), a("div", [a("scroller", {
            attrs: {
              "lock-y": "",
              "scrollbar-x": "",
              bounce: !1,
              "scrollbar-x": !1
            }
          }, [a("div", {
            staticClass: "box1",
            style: {
              width: 10 * e.relatedNewsListLength + 0.625 * (e.relatedNewsListLength + 1) + "rem"
            }
          }, e._l(e.relatedList, function (t, n) {
            return a("div", {
              staticClass: "box1-item"
            }, [a("a", {
              staticStyle: {
                width: "10rem",
                height: "5.625rem",
                display: "inline-block",
                "text-decoration": "none"
              },
              attrs: {
                href: "yp://app?type=news&id=" + t.newsId + "&modetype=" + t.modeType + "&topicId=" + t.topicId
              }
            }, [a("div", {
              staticStyle: {
                width: "10rem",
                height: "5.625rem",
                "background-repeat": "round"
              },
              style: {
                backgroundImage: "url(" + t.videoImage + ")"
              }
            }, [a("div", {
              staticStyle: {
                "font-size": "0.625em",
                position: "absolute",
                "margin-top": "3.125rem",
                "margin-left": "0.3125rem",
                width: "1.25rem",
                height: "1.25rem",
                "background-color": "#000000",
                "border-radius": "2rem",
                opacity: "0.75"
              }
            }, [a("div", {
              staticStyle: {
                width: "0.3125rem",
                margin: "7px 7px 7px 8px",
                "background-image": "url(static/images/playButton.png)",
                "background-repeat": "round",
                height: "0.4375rem"
              }
            })]), e._v(" "), a("div", {
              staticStyle: {
                width: "10rem",
                height: "0.875rem",
                opacity: "0.75",
                "background-color": "#000000",
                position: "absolute",
                bottom: "0.53rem",
                color: "#ffffff",
                "font-size": "0.625em",
                "line-height": "0.875rem",
                "border-bottom-right-radius": "2px",
                "border-bottom-left-radius": "2px"
              }
            }, [a("div", {
              staticStyle: {
                width: "6.25rem",
                height: "0.875rem",
                float: "left",
                position: "absolute",
                "margin-left": "0.3125rem",
                "text-align": "left"
              }
            }, [e._v(e._s(t.title))]), e._v(" "), a("div", {
              staticStyle: {
                width: "2.5rem",
                height: "0.875rem",
                float: "right",
                "margin-right": "0.3125rem"
              }
            }, [e._v(e._s(t.duration))])])]), e._v(" "), a("div", {
              staticStyle: {
                width: "10rem",
                height: "0.875rem",
                "margin-top": "0.625rem",
                "line-height": "0.875rem"
              }
            }, [a("span", {
              staticStyle: {
                "font-size": "0.625em",
                color: "#151515",
                "text-align": "left"
              }
            }, [e._v(e._s(t.date))])])])]);
          }), 0)])], 1)]);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div_father"
          }, [t("div", [t("span", [this._v("-\xA0\u76F8\u5173\u89C6\u9891\xA0-")])])]);
        }]
      };
    var ne = a("VU/8")(te, ae, !1, function (e) {
        a("08/l");
      }, "data-v-242b70a4", null).exports,
      ie = {
        data: function () {
          return {
            relatedNewsList: [{}],
            newsId: "",
            newsInfo: {},
            relatedNewsListLength: 0,
            isShowShare: !1,
            isShowLike: !1,
            isShowRelated: !1,
            currentPage: 1,
            imgParame: "?x-oss-process=image/resize,w_372",
            isShowRelatedMore: !1,
            userInfo: {},
            myhChannelId: 0,
            detailCountDown: {},
            finishTime: null,
            timeFormatType: null,
            likeInfo: {}
          };
        },
        components: {
          "yp-detail": D,
          "yp-relate-video": ne,
          "yp-share": P,
          "yp-like": W
        },
        methods: {
          get_news_detail: function () {
            var e = this,
              t = navigator.userAgent;
            navigator.appVersion;
            !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && (this.userInfo = JSON.parse(this.userInfo));
            var a = null;
            a = null == this.userInfo ? {
              newsId: this.newsId
            } : void 0 === this.userInfo.userId || "" == this.userInfo.userId ? {
              newsId: this.newsId
            } : {
              newsId: this.newsId,
              userId: this.userInfo.userId
            }, d(a).then(function (t) {
              (3003 == t.code && (e.isShowBbs = !1), e.newsInfo = t.data, e.likeInfo = {
                praise: e.newsInfo.praise,
                isPraise: e.newsInfo.isPraise
              }, null == e.newsInfo.countdown) ? e.detailCountDown = null : (e.detailCountDown = e.newsInfo.countdown.detailCountDown, new Date(e.newsInfo.countdown.finishTime) - new Date() < 0 ? e.detailCountDown = null : (e.finishTime = e.newsInfo.countdown.finishTime, e.timeFormatType = e.newsInfo.countdown.detailCountDown.timeFormatType));
              null != e.newsInfo.related && (e.relatedNewsList = e.newsInfo.related.content, e.newsInfo.related.totalElements > 3 && (e.isShowRelatedMore = !0), e.relatedNewsList.length > 0 && (e.isShowRelated = !0)), e.newsInfo.hasOwnProperty("myhChannelId") && e.newsInfo.myhChannelId > 0 ? e.newsInfo.isMoldyFish = !0 : e.newsInfo.isMoldyFish = !1, e.$nextTick(function () {
                $("strong").css({
                  "font-family": "FZZCYSJW"
                });
                var t = document.getElementsByTagName("a");
                if (null != t || t.length > 0) for (var a = 0; a < t.length; a++) {
                  var n = t[a].getAttribute("href").split("?");
                  if (n.length > 1) {
                    var i = "";
                    "https://a.mlinks.cc/AK94" == n[0] ? (i = "yp://app?" + n[1], t[a].setAttribute("href", i)) : "https://arhivs.mlinks.cc/AK94" == n[0] && (i = "yp://app?" + n[1], t[a].setAttribute("href", i));
                  }
                }
                e.isShowShare = !0;
              });
            });
          },
          getRelatedList: function (e) {
            var t = this;
            this.currentPage = this.currentPage + 1;
            var a = {
              newsId: this.newsId,
              currentPage: this.currentPage
            };
            f(a).then(function (e) {
              if (e.data.content.length > 0) for (var a = 0; a < e.data.content.length; a++) t.relatedNewsList.push(e.data.content[a]);
              e.data.totalElements - t.relatedNewsList.length <= 3 && (t.isShowRelatedMore = !1);
            });
          },
          callBack: function (e) {
            e = m()(e), this.userInfo = JSON.parse(e), 0 != this.myhChannelId && this.myhChannelId ? this.$refs.mychild.iosFollow(this.userInfo, this.myhChannelId) : this.get_news_detail();
          }
        },
        mounted: function () {
          this.newsId = this.$route.query.newsId;
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !1
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"false\"}}"), window.callBack = this.callBack;
        }
      },
      re = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            }
          }, [a("yp-detail", {
            ref: "mychild",
            attrs: {
              newInfo: e.newsInfo,
              detailCountDown: e.detailCountDown,
              timeFormatType: e.timeFormatType,
              finishTime: e.finishTime,
              id: "news-body"
            }
          }), e._v(" "), a("yp-share", {
            attrs: {
              isShow: e.isShowShare
            }
          }), e._v(" "), a("yp-like", {
            attrs: {
              isShow: e.isShowLike,
              newsId: e.newsId,
              userInfo: e.userInfo,
              likeInfo: e.likeInfo
            }
          }), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowRelated,
              expression: "isShowRelated"
            }],
            staticStyle: {
              width: "100%",
              "margin-top": "2rem"
            }
          }, [e._m(0), e._v(" "), e._l(e.relatedNewsList, function (t, n) {
            return a("div", {
              staticStyle: {
                width: "92%",
                height: "100%",
                "margin-left": "4%"
              }
            }, [0 == t.enablebodyurl ? a("a", {
              attrs: {
                href: "yp://app?type=news&id=" + t.newsId + "&modetype=" + t.modeType + "&topicId=" + t.topicId
              }
            }, [a("div", {
              staticStyle: {
                width: "100%",
                height: "5.8rem",
                "border-bottom": "1px solid #ECECEC"
              }
            }, [a("div", {
              staticStyle: {
                float: "left",
                width: "33%",
                height: "5rem"
              }
            }, [a("div", {
              staticStyle: {
                width: "100%",
                height: "5rem",
                "background-repeat": "round",
                "border-radius": "4px"
              },
              style: {
                backgroundImage: "url(" + t.tb1 + e.imgParame + ")"
              }
            })]), e._v(" "), a("div", {
              staticStyle: {
                width: "3%",
                height: "5rem",
                float: "left"
              }
            }), e._v(" "), a("div", {
              staticStyle: {
                float: "left",
                width: "64%",
                height: "5rem",
                "text-align": "left"
              }
            }, [a("div", {
              staticStyle: {
                width: "100%",
                height: "2.75rem"
              }
            }, [a("span", {
              staticClass: "sub_title"
            }, [e._v(e._s(t.title))])]), e._v(" "), a("div", {
              staticStyle: {
                width: "100%",
                height: "1.25rem",
                "margin-top": "1rem"
              }
            }, [a("div", {
              staticStyle: {
                width: "50%",
                float: "left"
              }
            }, [a("span", {
              staticStyle: {
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#999999",
                "line-height": "1.25rem",
                "padding-left": "0.25rem"
              }
            }, [e._v(e._s(t.pinlun) + "\u8BC4\u8BBA")])]), e._v(" "), a("div", {
              staticStyle: {
                width: "50%",
                float: "left",
                "text-align": "right"
              }
            }, [a("span", {
              staticStyle: {
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#999999",
                "line-height": "1.25rem"
              }
            }, [e._v(e._s(t.date))])])])])])]) : e._e(), e._v(" "), 1 == t.enablebodyurl ? a("a", {
              attrs: {
                href: t.bodyurl
              }
            }, [a("div", {
              staticStyle: {
                width: "100%",
                height: "5.8rem",
                "border-bottom": "1px solid #ECECEC"
              }
            }, [a("div", {
              staticStyle: {
                float: "left",
                width: "33%",
                height: "5rem"
              }
            }, [a("div", {
              staticStyle: {
                width: "100%",
                height: "5rem",
                "background-repeat": "round",
                "border-radius": "4px"
              },
              style: {
                backgroundImage: "url(" + t.tb1 + e.imgParame + ")"
              }
            })]), e._v(" "), a("div", {
              staticStyle: {
                width: "3%",
                height: "5rem",
                float: "left"
              }
            }), e._v(" "), a("div", {
              staticStyle: {
                float: "left",
                width: "64%",
                height: "5rem",
                "text-align": "left"
              }
            }, [a("div", {
              staticStyle: {
                width: "100%",
                height: "2.75rem"
              }
            }, [a("span", {
              staticClass: "sub_title"
            }, [e._v(e._s(t.title))])]), e._v(" "), a("div", {
              staticStyle: {
                width: "100%",
                height: "1.25rem",
                "margin-top": "1rem"
              }
            }, [a("div", {
              staticStyle: {
                width: "50%",
                float: "left"
              }
            }, [a("span", {
              staticStyle: {
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#999999",
                "line-height": "1.25rem",
                "padding-left": "0.25rem"
              }
            }, [e._v(e._s(t.pinlun) + "\u8BC4\u8BBA")])]), e._v(" "), a("div", {
              staticStyle: {
                width: "50%",
                float: "left",
                "text-align": "right"
              }
            }, [a("span", {
              staticStyle: {
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#999999",
                "line-height": "1.25rem"
              }
            }, [e._v(e._s(t.date))])])])])])]) : e._e(), e._v(" "), a("div", {
              staticStyle: {
                width: "100%",
                height: "1rem"
              }
            })]);
          }), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowRelatedMore,
              expression: "isShowRelatedMore"
            }],
            staticStyle: {
              width: "100%",
              height: "4rem"
            },
            on: {
              click: function (t) {
                return e.getRelatedList(e.newsId);
              }
            }
          }, [e._m(1)])], 2)], 1);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div_father"
          }, [t("div", {
            staticClass: "div_head"
          }, [t("span", {
            staticClass: "related_news_head"
          }, [this._v("-\xA0\u76F8\u5173\u65B0\u95FB\xA0-")])])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "100%",
              height: "1.25rem",
              "text-align": "center",
              "padding-top": "1.2rem"
            }
          }, [t("span", {
            staticStyle: {
              "font-size": "0.875em",
              "font-family": "PingFangSC-Regular",
              color: "#666666",
              "line-height": "1.25rem"
            }
          }, [this._v("\u67E5\u770B\u66F4\u591A")])]);
        }]
      };
    var se = a("VU/8")(ie, re, !1, function (e) {
        a("OH/X");
      }, "data-v-709b35c0", null).exports,
      le = a("ybLu"),
      oe = {
        data: function () {
          return {
            newsPapers: [],
            pages: {}
          };
        },
        methods: {
          getNewsPapers: function () {
            var e = this,
              t = {
                timestamp: new Date().getTime()
              };
            Object(le.d)(t).then(function (t) {
              e.newsPapers = t.data.newspaperMediaList;
            });
          },
          getNewsPapersDetail: function (e) {
            var t = encodeURI(e),
              a = {
                method: "openPaper",
                data: {
                  to: V.a.shareSrc + "news/read_newspapers_index?paperName=" + t,
                  share: "https://ypstatic.cnnb.com.cn/yppage-share/news/share/read_newspapers_index?paperName=" + t
                }
              },
              n = "{\"method\":\"openPaper\",data:{\"to\":\"" + V.a.shareSrc + "news/read_newspapers_index?paperName=" + t + "\",\"share\":\"https://ypstatic.cnnb.com.cn/yppage-share/news/share/read_newspapers_index?paperName=" + t + "\"}}",
              i = navigator.userAgent,
              r = (navigator.appVersion, i.indexOf("Android") > -1 || i.indexOf("Linux") > -1);
            !!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(a), r && window.Native.postMessage(n);
          }
        },
        mounted: function () {
          this.getNewsPapers();
        }
      },
      ue = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "head"
          }, [a("div", {
            staticClass: "content"
          }, e._l(e.newsPapers, function (t, n) {
            return a("div", [(n + 1) % 2 == 0 ? a("div", {
              staticClass: "img_div",
              staticStyle: {
                float: "right",
                "background-color": "#ffffff"
              },
              on: {
                click: function (a) {
                  return e.getNewsPapersDetail(t.paperName);
                }
              }
            }, [a("img", {
              attrs: {
                src: t.icon
              }
            })]) : e._e(), e._v(" "), (n + 1) % 2 != 0 ? a("div", {
              staticClass: "img_div",
              staticStyle: {
                float: "left",
                "background-color": "#ffffff"
              },
              on: {
                click: function (a) {
                  return e.getNewsPapersDetail(t.paperName);
                }
              }
            }, [a("img", {
              attrs: {
                src: t.icon
              }
            })]) : e._e()]);
          }), 0)]);
        },
        staticRenderFns: []
      };
    var pe = a("VU/8")(oe, ue, !1, function (e) {
        a("z/1Y");
      }, "data-v-49aa2874", null).exports,
      me = (a("sJsH"), a("1NRv")),
      ve = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "head"
          }, [a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowHead,
              expression: "isShowHead"
            }],
            staticClass: "paper_head"
          }, [a("div", {
            staticClass: "boxDiv",
            attrs: {
              id: "readIndex"
            },
            on: {
              click: function (t) {
                return e.checkItem("readIndex", "static/images/readNewsPapers/readIndex2.png", "static/images/readNewsPapers/readIndex.png");
              }
            }
          }, [e._m(0), e._v(" "), a("span", [e._v("\xA0\u7248\u9762")])]), e._v(" "), a("div", {
            staticClass: "boxDiv",
            attrs: {
              id: "readList"
            },
            on: {
              click: function (t) {
                return e.checkItem("readList", "static/images/readNewsPapers/readList2.png", "static/images/readNewsPapers/readList.png");
              }
            }
          }, [e._m(1), e._v(" "), a("span", [e._v("\xA0\u5217\u8868")])]), e._v(" "), a("div", {
            staticClass: "boxDiv",
            attrs: {
              id: "readDate"
            },
            on: {
              click: function (t) {
                return e.checkItem("readDate", "static/images/readNewsPapers/readDate2.png", "static/images/readNewsPapers/readDate.png");
              }
            }
          }, [e._m(2), e._v(" "), a("datetime", {
            staticStyle: {
              "text-decoration": "none",
              padding: "0px"
            },
            attrs: {
              "end-date": e.endDate
            },
            on: {
              "on-confirm": e.change
            },
            model: {
              value: e.toTime,
              callback: function (t) {
                e.toTime = t;
              },
              expression: "toTime"
            }
          }, [a("span", {
            staticStyle: {
              color: "#666666"
            },
            attrs: {
              id: "readDate_time"
            }
          }, [e._v("\xA0\u65E5\u671F")])])], 1), e._v(" "), a("div", {
            staticClass: "boxDiv",
            attrs: {
              id: "readShare"
            },
            on: {
              click: function (t) {
                return e.checkItem("readShare", "static/images/readNewsPapers/readShare2.png", "static/images/readNewsPapers/readShare.png");
              }
            }
          }, [e._m(3), e._v(" "), a("span", [e._v("\xA0\u5206\u4EAB")])])]), e._v(" "), a("div", {
            staticClass: "readContent",
            attrs: {
              id: "readContent"
            }
          }, [a("swiper", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowSwiper,
              expression: "isShowSwiper"
            }],
            staticClass: "swiper_css",
            attrs: {
              height: e.height,
              loop: "",
              "show-dots": !1
            },
            on: {
              "on-index-change": e.onSwiperItemIndexChange
            },
            model: {
              value: e.swiperItemIndex,
              callback: function (t) {
                e.swiperItemIndex = t;
              },
              expression: "swiperItemIndex"
            }
          }, e._l(e.newsPapers.list, function (t, n) {
            return a("swiper-item", {
              key: n
            }, [a("div", {
              staticClass: "abc",
              attrs: {
                id: "paper" + n
              },
              domProps: {
                innerHTML: e._s(t.mapInfo)
              },
              on: {
                click: function (t) {
                  return e.openPaperNews(t);
                }
              }
            })]);
          }), 1), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowReadList,
              expression: "isShowReadList"
            }],
            staticClass: "contentDiv"
          }, [a("scroller", {
            attrs: {
              "lock-x": "",
              "scrollbar-y": "",
              height: "-52"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            }
          }, e._l(e.newsPapersList, function (t, n) {
            return a("div", {
              staticClass: "contentList",
              on: {
                click: function (t) {
                  return e.toChildList(n);
                }
              }
            }, [a("div", [e._v("\xA0" + e._s(t.title))])]);
          }), 0)])], 1), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowReadChildList,
              expression: "isShowReadChildList"
            }],
            staticClass: "contentDiv"
          }, [a("div", {
            staticClass: "contentListHeadDiv"
          }, [a("span", [e._v(e._s(e.newsPapersChildList.title))])]), e._v(" "), a("scroller", {
            attrs: {
              "lock-x": "",
              "scrollbar-y": "",
              height: "-86"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            }
          }, e._l(e.newsPapersChildList.child, function (t, n) {
            return a("div", {
              staticClass: "contentList"
            }, [a("a", {
              staticStyle: {
                "text-decoration": "none",
                color: "#151515"
              },
              attrs: {
                href: "#/news/read_newspapers_detail?paperId=" + t.paperId + "&shareUrl=https://ypstatic.cnnb.com.cn/yppage-share/news/share/read_newspapers_detail?paperId=" + t.paperId
              }
            }, [a("div", [e._v("\xA0" + e._s(t.newsTitle))])])]);
          }), 0)])], 1)], 1)]);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "iconDiv"
          }, [t("img", {
            attrs: {
              src: "static/images/readNewsPapers/readIndex.png"
            }
          })]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "iconDiv"
          }, [t("img", {
            attrs: {
              src: "static/images/readNewsPapers/readList.png"
            }
          })]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "iconDiv"
          }, [t("img", {
            attrs: {
              src: "static/images/readNewsPapers/readDate.png"
            }
          })]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "iconDiv"
          }, [t("img", {
            attrs: {
              src: "static/images/readNewsPapers/readShare.png"
            }
          })]);
        }]
      };
    var ce = function (e) {
        a("yC+J");
      },
      de = a("VU/8")(me.a, ve, !1, ce, "data-v-5a3c4f78", null).exports,
      he = a("xNvf"),
      ge = (he.a, Boolean, Number, String, String, String, Boolean, String, String, {
        name: "toast",
        mixins: [he.a],
        props: {
          value: Boolean,
          time: {
            type: Number,
            default: 2000
          },
          type: {
            type: String,
            default: "success"
          },
          transition: String,
          width: {
            type: String,
            default: "7.6em"
          },
          isShowMask: {
            type: Boolean,
            default: !1
          },
          text: String,
          position: String
        },
        data: function () {
          return {
            show: !1
          };
        },
        created: function () {
          this.value && (this.show = !0);
        },
        computed: {
          currentTransition: function () {
            return this.transition ? this.transition : "top" === this.position ? "vux-slide-from-top" : "bottom" === this.position ? "vux-slide-from-bottom" : "vux-fade";
          },
          toastClass: function () {
            return {
              "weui-toast_forbidden": "warn" === this.type,
              "weui-toast_cancel": "cancel" === this.type,
              "weui-toast_success": "success" === this.type,
              "weui-toast_text": "text" === this.type,
              "vux-toast-top": "top" === this.position,
              "vux-toast-bottom": "bottom" === this.position,
              "vux-toast-middle": "middle" === this.position
            };
          },
          style: function () {
            if ("text" === this.type && "auto" === this.width) return {
              padding: "10px"
            };
          }
        },
        watch: {
          show: function (e) {
            var t = this;
            e && (this.$emit("input", !0), this.$emit("on-show"), this.fixSafariOverflowScrolling("auto"), clearTimeout(this.timeout), this.timeout = setTimeout(function () {
              t.show = !1, t.$emit("input", !1), t.$emit("on-hide"), t.fixSafariOverflowScrolling("touch");
            }, this.time));
          },
          value: function (e) {
            this.show = e;
          }
        }
      }),
      fe = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-toast"
          }, [a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowMask && e.show,
              expression: "isShowMask && show"
            }],
            staticClass: "weui-mask_transparent"
          }), e._v(" "), a("transition", {
            attrs: {
              name: e.currentTransition
            }
          }, [a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.show,
              expression: "show"
            }],
            staticClass: "weui-toast",
            class: e.toastClass,
            style: {
              width: e.width
            }
          }, [a("i", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: "text" !== e.type,
              expression: "type !== 'text'"
            }],
            staticClass: "weui-icon-success-no-circle weui-icon_toast"
          }), e._v(" "), e.text ? a("p", {
            staticClass: "weui-toast__content",
            style: e.style,
            domProps: {
              innerHTML: e._s(e.text)
            }
          }) : a("p", {
            staticClass: "weui-toast__content",
            style: e.style
          }, [e._t("default")], 2)])])], 1);
        },
        staticRenderFns: []
      };
    var _e = a("VU/8")(ge, fe, !1, function (e) {
        a("ZxZ9");
      }, null, null).exports,
      we = {
        data: function () {
          return {
            poster: {},
            paperId: "",
            userInfo: null,
            isCollect: !1,
            content: "",
            showCancelMessage: !1,
            showSuccessMessage: !1,
            fontSize: "",
            imageUrl: V.a.ypImg,
            shareUrl: ""
          };
        },
        components: {
          Toast: _e
        },
        methods: {
          getNewsDetail: function () {
            var e = this,
              t = {
                paperId: this.paperId
              };
            Object(le.c)(t).then(function (t) {
              e.poster = t.data, document.title = e.poster.title;
              var a = {
                  method: "ShareDetail",
                  data: {
                    shareType: "all",
                    title: "" + e.poster.title,
                    subTitle: "" + e.poster.title,
                    imageUrl: "" + e.imageUrl,
                    shareUrl: "" + e.shareUrl
                  }
                },
                n = "{\"method\":\"ShareDetail\",data:{\"shareType\":\"all\",\"title\":\"" + e.poster.title + "\",\"subTitle\":\"" + e.poster.title + "\",\"imageUrl\":\"" + e.imageUrl + "\",\"shareUrl\":\"" + e.shareUrl + "\"}}",
                i = navigator.userAgent,
                r = (navigator.appVersion, i.indexOf("Android") > -1 || i.indexOf("Linux") > -1);
              !!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(a), r && window.Native.postMessage(n);
            });
          },
          callBack: function (e) {
            var t = this;
            if (e = m()(e), this.userInfo = e, null != this.userInfo) {
              var a = JSON.parse(this.userInfo);
              if ("object" != (void 0 === a ? "undefined" : u()(a)) && "[object object]" != Object.prototype.toString.call(a).toLowerCase() && a.length && (a = JSON.parse(a)), void 0 !== a.userId) {
                var n = {
                  userId: a.userId,
                  paperId: this.paperId
                };
                Object(le.a)(n).then(function (e) {
                  0 == e.data.status ? t.isCollect = !1 : t.isCollect = !0;
                });
              }
            }
          },
          collect: function () {
            var e = this;
            if (null != this.userInfo) {
              var t = JSON.parse(this.userInfo);
              "object" != (void 0 === t ? "undefined" : u()(t)) && "[object object]" != Object.prototype.toString.call(t).toLowerCase() && t.length && (t = JSON.parse(t));
              var a = navigator.userAgent,
                n = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1),
                i = !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
              if (void 0 !== t.userId && "" != t.userId) {
                if (this.isCollect) {
                  var r = {
                    userId: t.userId,
                    token: t.token,
                    paperId: this.paperId
                  };
                  Object(le.b)(r).then(function (t) {
                    if (0 == t.code) e.showSuccessMessage = !0, e.content = "\u53D6\u6D88\u6536\u85CF", e.isCollect = !1;else if (123 == t.code || 125 == t.code || 203 == t.code) {
                      var a = {
                          method: "loginTimeOut",
                          data: {
                            content: "" + e.content
                          }
                        },
                        r = "{\"method\":\"loginTimeOut\",data:{\"content\":\"" + e.content + "\"}}";
                      i && window.webkit.messageHandlers.Native.postMessage(a), n && window.Native.postMessage(r);
                    } else e.showCancelMessage = !0, e.content = "\u53D6\u6D88\u6536\u85CF\u5931\u8D25";
                  });
                } else {
                  var s = V.a.shareSrc + "news/read_newspapers_detail?paperId=" + this.paperId,
                    l = {
                      userId: t.userId,
                      token: t.token,
                      paperId: this.paperId,
                      title: this.poster.title,
                      url: s
                    };
                  Object(le.f)(l).then(function (t) {
                    if (0 == t.code) e.showSuccessMessage = !0, e.content = "\u6536\u85CF\u6210\u529F", e.isCollect = !0;else if (123 == t.code || 125 == t.code || 203 == t.code) {
                      var a = {
                          method: "loginTimeOut",
                          data: {
                            content: "" + e.content
                          }
                        },
                        r = "{\"method\":\"loginTimeOut\",data:{\"content\":\"" + e.content + "\"}}";
                      i && window.webkit.messageHandlers.Native.postMessage(a), n && window.Native.postMessage(r);
                    } else e.showCancelMessage = !0, e.content = t.message;
                  });
                }
              } else {
                i && window.webkit.messageHandlers.Native.postMessage({
                  method: "userJson",
                  data: {
                    isLogin: "" + !0
                  }
                }), n && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
              }
            } else {
              i && window.webkit.messageHandlers.Native.postMessage({
                method: "userJson",
                data: {
                  isLogin: "" + !0
                }
              }), n && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
            }
          },
          fontSizeCallBack: function (e) {
            this.fontSize = e, $("#content").css("font-size", this.fontSize);
          }
        },
        created: function () {
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !1
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"false\"}}"), window.callBack = this.callBack;
        },
        mounted: function () {
          this.paperId = this.$route.query.paperId, this.shareUrl = V.a.shareSrc + "news/share/read_newspapers_detail?paperId=" + this.paperId, this.getNewsDetail(), window.callBack = this.callBack, window.fontSizeCallBack = this.fontSizeCallBack;
        }
      },
      ye = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "94%",
              height: "100%",
              "margin-left": "3%"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              "text-align": "justify",
              "margin-top": "5%"
            }
          }, [a("span", {
            staticClass: "sub_title"
          }, [e._v(e._s(e.poster.title))])]), e._v(" "), a("div", {
            staticClass: "body",
            attrs: {
              id: "content"
            },
            domProps: {
              innerHTML: e._s(e.poster.body)
            }
          }), e._v(" "), e.isCollect ? e._e() : a("div", {
            staticClass: "topic_skip",
            on: {
              click: e.collect
            }
          }, [a("div", {
            staticStyle: {
              width: "1.25rem",
              height: "1.25rem",
              "background-image": "url('./static/images/notCollect.png')",
              "background-repeat": "round",
              float: "left",
              "margin-top": "0.35rem",
              "margin-left": "0.5rem"
            }
          }), e._v("\u6536\u85CF\n  ")]), e._v(" "), e.isCollect ? a("div", {
            staticClass: "topic_skip",
            on: {
              click: e.collect
            }
          }, [a("div", {
            staticStyle: {
              width: "1.25rem",
              height: "1.25rem",
              "background-image": "url('./static/images/collect.png')",
              "background-repeat": "round",
              float: "left",
              "margin-top": "0.35rem",
              "margin-left": "0.5rem"
            }
          }), e._v("\u6536\u85CF\n  ")]) : e._e(), e._v(" "), a("toast", {
            attrs: {
              type: "cancel",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showCancelMessage,
              callback: function (t) {
                e.showCancelMessage = t;
              },
              expression: "showCancelMessage"
            }
          }, [e._v(e._s(e.content))]), e._v(" "), a("toast", {
            attrs: {
              type: "success",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showSuccessMessage,
              callback: function (t) {
                e.showSuccessMessage = t;
              },
              expression: "showSuccessMessage"
            }
          }, [e._v(e._s(e.content))])], 1);
        },
        staticRenderFns: []
      };
    var be = a("VU/8")(we, ye, !1, function (e) {
        a("hu4J");
      }, "data-v-20e765bc", null).exports,
      xe = {
        components: {
          Toast: _e
        },
        data: function () {
          return {
            categoryList: [{}],
            categoryHeight: 0,
            categoryId: 0,
            bbs: {},
            messageList: [{}],
            moreList: [{}],
            pageNo: 1,
            isShowMessage: !1,
            isShowMore: !1,
            isShow: !1,
            message_title: "",
            message_content: "",
            selected: "-1",
            showAlert: !1,
            showToast: !1,
            showToast_cancel: !1,
            showNullMessage: !1,
            toastContent: "",
            alertTitle: "",
            bbsId: "",
            userId: "",
            historyCheckId: "0",
            userInfo: null,
            height: 0,
            isShowBbs: !0
          };
        },
        methods: {
          open: function (e) {
            $("#content" + e).removeClass("mui-ellipsis-3"), $("#open_" + e).remove();
          },
          getBbs: function () {
            var e = this,
              t = {
                bbsId: this.bbsId
              };
            w(t).then(function (t) {
              if (null != t.data.bbs) {
                if (e.bbs = t.data.bbs, e.categoryList = t.data.categoryList, e.messageList = t.data.bbsMessageList, null != e.messageList && e.messageList.length > 0 ? (e.isShowMessage = !0, t.data.count > 10 && (e.isShowMore = !0)) : e.showNullMessage = !0, null != e.categoryList && e.categoryList.length > 0) {
                  e.isShow = !0;
                  var a = e.categoryList.length / 3;
                  e.categoryHeight = 2.125 * a + 1 * a;
                }
              } else e.isShowBbs = !1;
            });
          },
          getBbsMessageList: function (e) {
            var t = this,
              a = {
                bbsId: this.bbsId,
                categoryId: e,
                pageNo: 1,
                pageSize: 10
              };
            y(a).then(function (e) {
              null == e.data ? (t.isShowMessage = !1, t.isShowMore = !1, t.showNullMessage = !0) : (t.messageList = e.data.bbsMessageList, t.messageList.length > 0 && t.messageList.length < 10 && (t.isShowMessage = !0, t.isShowMore = !1, t.showNullMessage = !1), e.data.count > 10 && (t.isShowMore = !0));
            });
          },
          more: function () {
            var e = this;
            this.pageNo = this.pageNo + 1;
            var t = {
              bbsId: this.bbsId,
              categoryId: this.categoryId,
              pageNo: this.pageNo,
              pageSize: 10
            };
            y(t).then(function (t) {
              if (202 === t.code && null === t.data && (e.isShowMore = !1), e.moreList = t.data.bbsMessageList, e.moreList.length > 0) for (var a = 0; a < e.moreList.length; a++) e.messageList.push(e.moreList[a]);
              t.data.count > 10 && (e.isShowMore = !0);
            });
          },
          callBack: function (e) {
            e = m()(e), this.userInfo = e;
          },
          submitMessage: function () {
            var e = this,
              t = JSON.parse(this.userInfo);
            if ("object" != (void 0 === t ? "undefined" : u()(t)) && "[object object]" != Object.prototype.toString.call(t).toLowerCase() && t.length && (t = JSON.parse(t)), void 0 !== t.userId && "" != t.userId) {
              if ("" == this.selected || "-1" == this.selected) return void this.$alert({
                title: "\u8BF7\u9009\u62E9\u5206\u7C7B",
                content: "",
                btnText: "\u597D"
              });
              if ("" == this.message_title) return void this.$alert({
                title: "\u8BF7\u8F93\u5165\u6807\u9898",
                content: "",
                btnText: "\u597D"
              });
              if ("" == this.message_content) return void this.$alert({
                title: "\u8BF7\u8F93\u5165\u60A8\u7684\u7559\u8A00",
                content: "",
                btnText: "\u597D"
              });
              var a = {
                bbsId: this.bbsId,
                categoryId: this.selected,
                userId: t.userId,
                title: this.message_title,
                content: this.message_content
              };
              b(a).then(function (t) {
                null == t.data ? (e.toastContent = t.message, e.showToast_cancel = !0) : (e.toastContent = "\u63D0\u4EA4\u6210\u529F", e.showToast = !0, e.selected = "-1", e.message_title = "", e.message_content = "");
              });
            } else {
              var n = navigator.userAgent,
                i = (navigator.appVersion, n.indexOf("Android") > -1 || n.indexOf("Linux") > -1);
              !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                method: "userJson",
                data: {
                  isLogin: "" + !0
                }
              }), i && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
            }
          },
          check: function (e) {
            this.categoryId = e, $("#" + e).css("background", "#cd3333"), $("#span_" + e).css("color", "#ffffff"), $("#" + this.historyCheckId).css("background", "#ffffff"), $("#span_" + this.historyCheckId).css("color", "#666666"), this.historyCheckId = e, this.getBbsMessageList(e);
          }
        },
        created: function () {
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !1,
              isMessage: "" + !0
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"false\",\"isMessage\":\"true\"}}"), window.callBack = this.callBack;
        },
        mounted: function () {
          this.height = $(window).height() + "px", this.bbsId = this.$route.query.bbsId, this.getBbs();
        }
      },
      Se = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "92%",
              height: "100%",
              "margin-left": "4%"
            }
          }, [e.isShowBbs ? a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            }
          }, [a("div", {
            staticClass: "div head"
          }, [a("div", {
            staticStyle: {
              width: "100%"
            }
          }, [a("img", {
            attrs: {
              src: e.bbs.imgUrl + "?x-oss-process=image/resize,w_800"
            }
          })])]), e._v(" "), a("div", {
            staticClass: "div div_content"
          }, [a("div", {
            staticClass: "div title"
          }, [e._v(e._s(e.bbs.title))]), e._v(" "), a("div", {
            staticClass: "div content",
            domProps: {
              innerHTML: e._s(e.bbs.body)
            }
          })]), e._v(" "), a("div", {
            staticClass: "div",
            staticStyle: {
              "margin-top": "2.75rem"
            }
          }, [e._m(0), e._v(" "), a("div", {
            staticClass: "div",
            staticStyle: {
              "margin-top": "1.25rem"
            }
          }, [a("div", {
            staticClass: "div",
            staticStyle: {
              height: "2.125rem",
              "background-color": "#F6F6F6"
            }
          }, [e._m(1), e._v(" "), a("div", {
            staticStyle: {
              width: "86%",
              height: "2.125rem",
              "background-color": "#F6F6F6",
              border: "none",
              float: "left"
            }
          }, [a("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.selected,
              expression: "selected"
            }],
            staticStyle: {
              "font-size": "0.875em",
              color: "#666666"
            },
            on: {
              change: function (t) {
                var a = Array.prototype.filter.call(t.target.options, function (e) {
                  return e.selected;
                }).map(function (e) {
                  return "_value" in e ? e._value : e.value;
                });
                e.selected = t.target.multiple ? a : a[0];
              }
            }
          }, [a("option", {
            domProps: {
              value: -1
            }
          }, [e._v("\u8BF7\u9009\u62E9\u5206\u7C7B")]), e._v(" "), e._l(e.categoryList, function (t, n) {
            return n > 0 ? a("option", {
              domProps: {
                value: t.categoryId
              }
            }, [e._v(e._s(t.name))]) : e._e();
          })], 2)])]), e._v(" "), a("div", {
            staticClass: "div",
            staticStyle: {
              height: "2.125rem",
              "background-color": "#F6F6F6",
              "margin-top": "0.625rem"
            }
          }, [e._m(2), e._v(" "), a("div", {
            staticStyle: {
              width: "83%",
              height: "2.125rem",
              border: "none",
              float: "left"
            }
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.message_title,
              expression: "message_title"
            }],
            staticStyle: {
              "font-size": "0.875em"
            },
            attrs: {
              type: "text",
              maxlength: "50"
            },
            domProps: {
              value: e.message_title
            },
            on: {
              input: function (t) {
                t.target.composing || (e.message_title = t.target.value);
              }
            }
          })])]), e._v(" "), a("div", {
            staticClass: "div",
            staticStyle: {
              height: "8.75rem",
              "background-color": "#F6F6F6",
              "margin-top": "0.625rem"
            }
          }, [a("textarea", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.message_content,
              expression: "message_content"
            }],
            staticStyle: {
              "font-size": "0.875em",
              color: "black"
            },
            attrs: {
              maxlength: "200"
            },
            domProps: {
              value: e.message_content
            },
            on: {
              input: function (t) {
                t.target.composing || (e.message_content = t.target.value);
              }
            }
          })]), e._v(" "), a("div", {
            staticClass: "div",
            staticStyle: {
              height: "2.125rem",
              "margin-top": "1.875rem",
              position: "relative"
            }
          }, [a("div", {
            staticClass: "submit_div"
          }, [a("div", {
            staticClass: "submit_font_div",
            on: {
              click: function (t) {
                return e.submitMessage();
              }
            }
          }, [a("span", [e._v("\u63D0\u4EA4\u7559\u8A00")])])])])]), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShow,
              expression: "isShow"
            }],
            staticClass: "div",
            staticStyle: {
              "margin-top": "2.75rem"
            }
          }, [e._m(3), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              "margin-top": "1.25rem",
              display: "table"
            },
            style: {
              height: e.categoryHeight + "rem"
            }
          }, e._l(e.categoryList, function (t, n) {
            return a("div", [0 == n && "true" == t.isFirst ? a("div", {
              staticClass: "first_category",
              staticStyle: {
                "background-color": "#cd3333"
              },
              attrs: {
                id: t.categoryId
              },
              on: {
                click: function (a) {
                  return e.check(t.categoryId);
                }
              }
            }, [a("span", {
              staticClass: "first_category_font",
              attrs: {
                id: "span_" + t.categoryId
              }
            }, [e._v(e._s(t.name))])]) : e._e(), e._v(" "), n > 0 && "true" == t.isFirst ? a("div", {
              staticClass: "first_category",
              attrs: {
                id: t.categoryId
              },
              on: {
                click: function (a) {
                  return e.check(t.categoryId);
                }
              }
            }, [a("span", {
              staticClass: "category_font",
              attrs: {
                id: "span_" + t.categoryId
              }
            }, [e._v(e._s(t.name))])]) : e._e(), e._v(" "), "false" == t.isFirst ? a("div", {
              staticClass: "other_category",
              attrs: {
                id: t.categoryId
              },
              on: {
                click: function (a) {
                  return e.check(t.categoryId);
                }
              }
            }, [a("span", {
              staticClass: "category_font",
              attrs: {
                id: "span_" + t.categoryId
              }
            }, [e._v(e._s(t.name))])]) : e._e()]);
          }), 0)]), e._v(" "), e._m(4), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.showNullMessage,
              expression: "showNullMessage"
            }],
            staticClass: "div"
          }, [e._m(5)]), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowMessage,
              expression: "isShowMessage"
            }],
            staticClass: "div"
          }, e._l(e.messageList, function (t, n) {
            return a("div", {
              staticStyle: {
                "border-bottom": "1px solid #ECECEC"
              }
            }, [a("div", {
              staticStyle: {
                width: "100%",
                height: "2.26rem",
                "margin-top": "1.56625rem"
              }
            }, [a("div", {
              staticStyle: {
                width: "11%",
                height: "2.26rem",
                float: "left"
              }
            }, [a("div", {
              staticStyle: {
                width: "1.875rem",
                height: "2.26rem",
                "border-radius": "0px 0px 6px 6px",
                "padding-top": "0.16rem"
              }
            }, [null != t.icon ? a("img", {
              staticStyle: {
                width: "1.875rem",
                height: "1.875rem",
                "border-radius": "1rem"
              },
              attrs: {
                src: t.icon
              }
            }) : e._e(), e._v(" "), null == t.icon ? a("img", {
              staticStyle: {
                width: "1.875rem",
                height: "1.875rem",
                "border-radius": "1rem"
              },
              attrs: {
                src: "static/images/headPortrait.png"
              }
            }) : e._e()])]), e._v(" "), a("div", {
              staticStyle: {
                width: "86%",
                height: "2.26rem",
                float: "left",
                "margin-left": "3%"
              }
            }, [a("div", {
              staticClass: "sub_title"
            }, [e._v(e._s(t.title))]), e._v(" "), a("div", {
              staticStyle: {
                width: "100%",
                height: "0.875rem"
              }
            }, [a("div", {
              staticClass: "sub_nickName"
            }, [e._v(e._s(t.nickname))]), e._v(" "), "local" === t.type ? a("div", {
              staticStyle: {
                width: "18%",
                height: "0.875rem",
                float: "left",
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#B0B0B0",
                "line-height": "0.875rem",
                "margin-left": "1rem"
              }
            }, [e._v("\u752C\u6D3E\u7528\u6237")]) : e._e(), e._v(" "), "QQ" === t.type ? a("div", {
              staticStyle: {
                width: "18%",
                height: "0.875rem",
                float: "left",
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#B0B0B0",
                "line-height": "0.875rem",
                "margin-left": "1rem"
              }
            }, [e._v("QQ\u7528\u6237")]) : e._e(), e._v(" "), "wx" === t.type ? a("div", {
              staticStyle: {
                width: "18%",
                height: "0.875rem",
                float: "left",
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#B0B0B0",
                "line-height": "0.875rem",
                "margin-left": "1rem"
              }
            }, [e._v("\u5FAE\u4FE1\u7528\u6237")]) : e._e(), e._v(" "), "wb" === t.type ? a("div", {
              staticStyle: {
                width: "18%",
                height: "0.875rem",
                float: "left",
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#B0B0B0",
                "line-height": "0.875rem",
                "margin-left": "1rem"
              }
            }, [e._v("\u5FAE\u535A\u7528\u6237")]) : e._e(), e._v(" "), a("div", {
              staticStyle: {
                width: "38%",
                height: "0.875rem",
                float: "left",
                "font-size": "0.625em",
                "font-family": "PingFangSC-Regular",
                color: "#999999",
                "line-height": "0.875rem",
                "margin-left": "0.3rem"
              }
            }, [e._v(e._s(t.timeAgo))])])])]), e._v(" "), a("div", {
              staticClass: "mui-ellipsis-3",
              staticStyle: {
                width: "86%",
                "font-size": "16px",
                "font-family": "PingFangSC-Regular",
                color: "#666666",
                "line-height": "24px",
                margin: "0.6875rem 14%"
              },
              attrs: {
                id: "content" + n
              }
            }, [e._v("\n            " + e._s(t.content) + "\n          ")]), e._v(" "), t.length > 60 ? a("div", {
              staticStyle: {
                width: "100%",
                height: "1.125rem",
                "margin-bottom": "1.56rem"
              },
              attrs: {
                id: "open_" + n
              }
            }, [a("div", {
              staticStyle: {
                width: "4rem",
                height: "1.125rem",
                "font-size": "13px",
                "font-family": "PingFangSC-Regular",
                color: "rgba(205,51,51,1)",
                "line-height": "18px",
                "margin-left": "42.5%"
              },
              on: {
                click: function (t) {
                  return e.open(n);
                }
              }
            }, [e._v("\n              \u5C55\u5F00\u5168\u6587"), e._m(6, !0)])]) : e._e()]);
          }), 0), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShowMore,
              expression: "isShowMore"
            }],
            staticClass: "div",
            staticStyle: {
              "margin-top": "1.625rem",
              "margin-bottom": "1.812rem"
            },
            on: {
              click: function (t) {
                return e.more();
              }
            }
          }, [e._m(7)]), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              height: "100%",
              "margin-bottom": "1rem"
            }
          }, [a("img", {
            attrs: {
              src: e.bbs.logoUrl
            }
          })])])]) : e._e(), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !e.isShowBbs,
              expression: "!isShowBbs"
            }],
            staticStyle: {
              width: "100%"
            },
            style: {
              height: e.height
            }
          }, [a("div", {
            staticStyle: {
              width: "12rem",
              height: "12rem",
              margin: "auto",
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              "background-image": "url('../../assets/images/newsNull.png')",
              "background-repeat": "round"
            }
          })]), e._v(" "), a("toast", {
            attrs: {
              time: 1500
            },
            model: {
              value: e.showToast,
              callback: function (t) {
                e.showToast = t;
              },
              expression: "showToast"
            }
          }, [e._v(e._s(e.toastContent))]), e._v(" "), a("toast", {
            attrs: {
              type: "cancel",
              time: 1500
            },
            model: {
              value: e.showToast_cancel,
              callback: function (t) {
                e.showToast_cancel = t;
              },
              expression: "showToast_cancel"
            }
          }, [e._v(e._s(e.toastContent))])], 1);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div"
          }, [t("div", {
            staticClass: "message_head"
          }, [this._v("- \u5EFA\u8A00\u732E\u7B56 -")])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "14%",
              height: "2.125rem",
              "background-color": "#F6F6F6",
              border: "none",
              float: "left",
              "font-size": "0.875em",
              "font-family": "PingFangSC-Regular",
              color: "#666666",
              "line-height": "20px"
            }
          }, [t("div", {
            staticStyle: {
              "margin-top": "0.45rem",
              "margin-left": "0.625rem"
            }
          }, [this._v("\u5206\u7C7B")])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "14%",
              height: "2.125rem",
              "background-color": "#F6F6F6",
              border: "none",
              float: "left",
              "font-size": "0.875em",
              "font-family": "PingFangSC-Regular",
              color: "#666666",
              "line-height": "20px"
            }
          }, [t("div", {
            staticStyle: {
              "margin-top": "0.45rem",
              "margin-left": "0.625rem"
            }
          }, [this._v("\u6807\u9898")])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div"
          }, [t("div", {
            staticClass: "message_head"
          }, [this._v("- \u5EFA\u8A00\u9009\u767B -")])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div",
            staticStyle: {
              "margin-top": "2.75rem"
            }
          }, [t("div", {
            staticClass: "message_head"
          }, [this._v("- \u7559\u8A00 -")])]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "50%",
              height: "50%",
              "margin-left": "25%"
            }
          }, [t("img", {
            attrs: {
              src: "static/images/message_board/nullMessage.png"
            }
          })]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              float: "right"
            }
          }, [t("img", {
            staticStyle: {
              width: "0.6875rem",
              height: "0.375rem"
            },
            attrs: {
              src: a("YjfP")
            }
          })]);
        }, function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "div"
          }, [t("div", {
            staticClass: "message_head"
          }, [this._v("\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A")])]);
        }]
      };
    var Ce = a("VU/8")(xe, Se, !1, function (e) {
        a("r49R");
      }, "data-v-336b7127", null).exports,
      Ie = a("rHil"),
      ke = a("kbG3"),
      Le = a("0FxO"),
      Me = a("2IIR"),
      Ae = a("wmxo"),
      Ne = a("vLYD"),
      Te = (ke.a, Object(Me.a)(), {
        name: "cell",
        components: {
          InlineDesc: ke.a
        },
        props: Object(Me.a)(),
        created: function () {
          0;
        },
        beforeMount: function () {
          this.hasTitleSlot = !!this.$slots.title, this.$slots.value;
        },
        computed: {
          labelStyles: function () {
            return Object(Ae.a)({
              width: Object(Ne.a)(this, "labelWidth"),
              textAlign: Object(Ne.a)(this, "labelAlign"),
              marginRight: Object(Ne.a)(this, "labelMarginRight")
            });
          },
          valueClass: function () {
            return {
              "vux-cell-primary": "content" === this.primary || "left" === this.valueAlign,
              "vux-cell-align-left": "left" === this.valueAlign,
              "vux-cell-arrow-transition": !!this.arrowDirection,
              "vux-cell-arrow-up": "up" === this.arrowDirection,
              "vux-cell-arrow-down": "down" === this.arrowDirection
            };
          },
          labelClass: function () {
            return {
              "vux-cell-justify": this.$parent && ("justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign)
            };
          },
          style: function () {
            if (this.alignItems) return {
              alignItems: this.alignItems
            };
          }
        },
        methods: {
          onClick: function () {
            !this.disabled && Object(Le.a)(this.link, this.$router);
          }
        },
        data: function () {
          return {
            hasTitleSlot: !0,
            hasMounted: !1
          };
        }
      }),
      Be = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "weui-cell",
            class: {
              "vux-tap-active": e.isLink || !!e.link,
              "weui-cell_access": e.isLink || !!e.link,
              "vux-cell-no-border-intent": !e.borderIntent,
              "vux-cell-disabled": e.disabled
            },
            style: e.style,
            on: {
              click: e.onClick
            }
          }, [a("div", {
            staticClass: "weui-cell__hd"
          }, [e._t("icon")], 2), e._v(" "), a("div", {
            staticClass: "vux-cell-bd",
            class: {
              "vux-cell-primary": "title" === e.primary && "left" !== e.valueAlign
            }
          }, [a("p", [e.title || e.hasTitleSlot ? a("label", {
            staticClass: "vux-label",
            class: e.labelClass,
            style: e.labelStyles
          }, [e._t("title", function () {
            return [e._v(e._s(e.title))];
          })], 2) : e._e(), e._v(" "), e._t("after-title")], 2), e._v(" "), a("inline-desc", [e._t("inline-desc", function () {
            return [e._v(e._s(e.inlineDesc))];
          })], 2)], 1), e._v(" "), a("div", {
            staticClass: "weui-cell__ft",
            class: e.valueClass
          }, [e._t("value"), e._v(" "), e._t("default", function () {
            return [e._v(e._s(e.value))];
          }), e._v(" "), e.isLoading ? a("i", {
            staticClass: "weui-loading"
          }) : e._e()], 2), e._v(" "), e._t("child")], 2);
        },
        staticRenderFns: []
      };
    var De = a("VU/8")(Te, Be, !1, function (e) {
        a("WwFh");
      }, null, null).exports,
      Ee = (Ie.a, {
        components: {
          Group: Ie.a,
          Cell: De
        },
        data: function () {
          return {
            status: "",
            reviewName: "",
            unitName: "",
            address: "",
            ic: "",
            name: "",
            enterpriseType: "",
            establishmentDate: "",
            personnelCategory: ""
          };
        },
        methods: {},
        mounted: function () {
          this.status = this.$route.query.status, this.reviewName = this.$route.query.reviewName, this.unitName = this.$route.query.unitName, this.address = this.$route.query.address, this.ic = this.$route.query.ic, this.name = this.$route.query.name, this.establishmentDate = this.$route.query.establishmentDate, this.enterpriseType = this.$route.query.enterpriseType, this.personnelCategory = this.$route.query.personnelCategory;
        }
      }),
      Oe = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "content"
          }, [a("div", {
            staticStyle: {
              width: "100%",
              "margin-top": "1rem"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%"
            }
          }, [a("div", {
            staticStyle: {
              width: "94%",
              "font-size": "16px",
              "margin-left": "0.8rem",
              height: "3rem"
            }
          }, [a("div", {
            staticStyle: {
              "background-color": "cornflowerblue",
              "text-align": "center",
              width: "3rem",
              height: "2.5rem",
              float: "left"
            }
          }, [a("span", {
            staticStyle: {
              "font-size": "12px",
              color: "white",
              height: "2.5rem",
              "line-height": "2.5rem"
            }
          }, [e._v(e._s(e.status))])]), e._v("\n\n        \xA0\xA0\xA0\xA0[\u5BA1\u6838\u4EBA]" + e._s(e.reviewName) + "\n      ")]), e._v(" "), e._m(0), e._v(" "), a("group", {
            staticStyle: {
              "margin-top": "-1.25rem"
            },
            attrs: {
              "label-width": "7em",
              "label-margin-right": "2em",
              "label-align": "left"
            }
          }, [a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u5355\u4F4D\u5168\u79F0",
              value: e.unitName,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u7533\u62A5\u5730\u70B9",
              value: e.address,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u8EAB\u4EFD\u8BC1\u53F7",
              value: e.ic,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u59D3\u540D",
              value: e.name,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u6210\u7ACB\u65F6\u95F4",
              value: e.establishmentDate,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u521B\u4E1A\u7C7B\u578B",
              value: e.enterpriseType,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u521B\u4E1A\u8005\u7C7B\u522B",
              value: e.personnelCategory,
              "value-align": "left"
            }
          })], 1)], 1)])]);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "100%",
              "background-color": "#f6f6f6"
            }
          }, [t("table", [t("tr", [t("td", {
            staticStyle: {
              "font-size": "14px",
              color: "lightgray"
            }
          }, [this._v("\xA0\xA0\xA0\u7533\u62A5\u4FE1\u606F")])])])]);
        }]
      };
    var Pe = a("VU/8")(Ee, Oe, !1, function (e) {
        a("gYSq");
      }, "data-v-b52701ac", null).exports,
      Ve = a("NXHL"),
      $e = a.n(Ve),
      Re = a("KRg4"),
      Ue = (Re.a, Ae.a, String, String, Array, String, String, Boolean, String, Number, Object, Boolean, Array, {
        name: "selector",
        mixins: [Re.a],
        created: function () {
          void 0 !== this.value && (this.currentValue = this.value);
        },
        beforeMount: function () {
          this.isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
        },
        computed: {
          fixIos: function () {
            return !this.placeholder && this.isEmptyValue(this.value) && this.isIOS && this.title;
          },
          color: function () {
            return this.showPlaceholder ? "#A9A9A9" : "";
          },
          processOptions: function () {
            var e = this;
            if (!this.options.length) return [];
            var t = "object" === u()(this.options[0]);
            return t && !this.valueMap ? this.options : t && this.valueMap ? this.options.map(function (t) {
              return {
                key: t[e.valueMap[0]],
                value: t[e.valueMap[1]]
              };
            }) : this.options.map(function (e) {
              return {
                key: e,
                value: e
              };
            });
          },
          showPlaceholder: function () {
            return !(!this.isEmptyValue(this.value) || !this.placeholder);
          },
          labelClass: function () {
            return this.$parent ? {
              "vux-cell-justify": "justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign
            } : {};
          }
        },
        methods: {
          isEmptyValue: function (e) {
            return void 0 === e || "" === e || null === e;
          },
          cleanStyle: Ae.a,
          getFullValue: function () {
            var e = this;
            return this.value && this.options.length ? "object" !== u()(this.options[0]) ? this.value : this.valueMap ? this.options.filter(function (t) {
              return t[e.valueMap[0]] === e.value;
            }) : this.options.filter(function (t) {
              return t.key === e.value;
            }) : null;
          }
        },
        filters: {
          findByKey: function (e, t) {
            var a = $e()(t, function (t) {
              return t.key === e;
            });
            return a ? a.value : e;
          }
        },
        watch: {
          value: function (e) {
            this.currentValue = e;
          },
          currentValue: function (e) {
            this.$emit("input", e), this.$emit("on-change", e);
          }
        },
        props: {
          title: String,
          direction: String,
          options: {
            type: Array,
            required: !0
          },
          name: String,
          placeholder: String,
          readonly: Boolean,
          value: [String, Number, Object, Boolean],
          valueMap: {
            type: Array,
            validator: function (e) {
              return !(!e.length || 2 !== e.length);
            }
          }
        },
        data: function () {
          return {
            currentValue: "",
            isIOS: !1
          };
        }
      }),
      Fe = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-selector weui-cell",
            class: {
              "weui-cell_select": !e.readonly,
              "weui-cell_select-after": e.title
            }
          }, [e.title ? a("div", {
            staticClass: "weui-cell__hd"
          }, [a("label", {
            staticClass: "weui-label",
            class: e.labelClass,
            style: e.cleanStyle({
              width: e.$parent.labelWidth,
              textAlign: e.$parent.labelAlign,
              marginRight: e.$parent.labelMarginRight
            }),
            attrs: {
              for: "vux-selector-" + e.uuid
            },
            domProps: {
              innerHTML: e._s(e.title)
            }
          })]) : e._e(), e._v(" "), e.readonly ? a("div", {
            staticClass: "weui-cell__ft vux-selector-readonly"
          }, [e._v("\n    " + e._s(e._f("findByKey")(e.value, e.processOptions)) + "\n  ")]) : a("div", {
            staticClass: "weui-cell__bd"
          }, [a("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.currentValue,
              expression: "currentValue"
            }],
            staticClass: "weui-select",
            style: e.cleanStyle({
              direction: e.direction,
              color: e.color
            }),
            attrs: {
              id: "vux-selector-" + e.uuid,
              name: e.name
            },
            on: {
              change: function (t) {
                var a = Array.prototype.filter.call(t.target.options, function (e) {
                  return e.selected;
                }).map(function (e) {
                  return "_value" in e ? e._value : e.value;
                });
                e.currentValue = t.target.multiple ? a : a[0];
              }
            }
          }, [e.showPlaceholder ? a("option", {
            domProps: {
              value: null === e.value ? "null" : "",
              selected: e.isEmptyValue(e.value) && !!e.placeholder
            }
          }, [e._v(e._s(e.placeholder))]) : e._e(), e._v(" "), e.fixIos ? a("option", {
            attrs: {
              disabled: ""
            }
          }) : e._e(), e._v(" "), e._l(e.processOptions, function (t) {
            return a("option", {
              domProps: {
                value: t.key
              }
            }, [e._v(e._s("rtl" === e.direction ? t.value + "\u200E" : t.value))]);
          })], 2)])]);
        },
        staticRenderFns: []
      };
    var je = a("VU/8")(Ue, Fe, !1, function (e) {
        a("oCDN");
      }, null, null).exports,
      ze = (Boolean, Boolean, Boolean, String, String, Boolean, String, Object, Array, {
        name: "x-button",
        props: {
          type: {
            default: "default"
          },
          disabled: Boolean,
          mini: Boolean,
          plain: Boolean,
          text: String,
          actionType: String,
          showLoading: Boolean,
          link: [String, Object],
          gradients: {
            type: Array,
            validator: function (e) {
              return 2 === e.length;
            }
          }
        },
        methods: {
          onClick: function () {
            !this.disabled && Object(Le.a)(this.link, this.$router);
          }
        },
        computed: {
          noBorder: function () {
            return Array.isArray(this.gradients);
          },
          buttonStyle: function () {
            if (this.gradients) return {
              background: "linear-gradient(90deg, " + this.gradients[0] + ", " + this.gradients[1] + ")",
              color: "#FFFFFF"
            };
          },
          classes: function () {
            return [{
              "weui-btn_disabled": !this.plain && this.disabled,
              "weui-btn_plain-disabled": this.plain && this.disabled,
              "weui-btn_mini": this.mini,
              "vux-x-button-no-border": this.noBorder
            }, this.plain ? "" : "weui-btn_" + this.type, this.plain ? "weui-btn_plain-" + this.type : "", this.showLoading ? "weui-btn_loading" : ""];
          }
        }
      }),
      We = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("button", {
            staticClass: "weui-btn",
            class: e.classes,
            style: e.buttonStyle,
            attrs: {
              disabled: e.disabled,
              type: e.actionType
            },
            on: {
              click: e.onClick
            }
          }, [e.showLoading ? a("i", {
            staticClass: "weui-loading"
          }) : e._e(), e._v(" "), e._t("default", function () {
            return [e._v(e._s(e.text))];
          })], 2);
        },
        staticRenderFns: []
      };
    var He = a("VU/8")(ze, We, !1, function (e) {
        a("KWAb");
      }, null, null).exports,
      qe = a("fZjL"),
      Je = a.n(qe),
      Xe = a("f6Hi"),
      Ye = a("oWtu"),
      Ke = a("2LX0"),
      Qe = a.n(Ke),
      Ge = a("Ewe+"),
      Ze = a.n(Ge),
      et = a("nror"),
      tt = a("lFEC"),
      at = a.n(tt),
      nt = (Qe.a, Xe.a, Ye.a, ke.a, String, String, String, String, Number, String, Boolean, Boolean, String, String, String, Function, Number, Number, Boolean, String, String, String, String, String, String, Boolean, String, Number, String, String, String, Boolean, {
        email: {
          fn: Qe.a,
          msg: "\u90AE\u7BB1\u683C\u5F0F"
        },
        "china-mobile": {
          fn: function (e) {
            return Ze()(e, "zh-CN");
          },
          msg: "\u624B\u673A\u53F7\u7801"
        },
        "china-name": {
          fn: function (e) {
            return e.length >= 2 && e.length <= 6;
          },
          msg: "\u4E2D\u6587\u59D3\u540D"
        }
      }),
      it = {
        name: "x-input",
        created: function () {
          var e = this;
          this.currentValue = void 0 === this.value || null === this.value ? "" : this.mask ? this.maskValue(this.value) : this.value, !this.required || void 0 !== this.currentValue && "" !== this.currentValue || (this.valid = !1), this.handleChangeEvent = !0, this.debounce && (this._debounce = Object(et.a)(function () {
            e.$emit("on-change", e.currentValue);
          }, this.debounce));
        },
        beforeMount: function () {
          this.$slots && this.$slots["restricted-label"] && (this.hasRestrictedLabel = !0), this.$slots && this.$slots["right-full-height"] && (this.hasRightFullHeightSlot = !0);
        },
        beforeDestroy: function () {
          this._debounce && this._debounce.cancel();
        },
        mixins: [Xe.a],
        components: {
          Icon: Ye.a,
          InlineDesc: ke.a,
          Toast: _e
        },
        props: {
          title: {
            type: String,
            default: ""
          },
          type: {
            type: String,
            default: "text"
          },
          placeholder: String,
          value: [String, Number],
          name: String,
          readonly: Boolean,
          disabled: Boolean,
          keyboard: String,
          inlineDesc: String,
          isType: [String, Function],
          min: Number,
          max: Number,
          showClear: {
            type: Boolean,
            default: !0
          },
          equalWith: String,
          textAlign: String,
          autocomplete: {
            type: String,
            default: "off"
          },
          autocapitalize: {
            type: String,
            default: "off"
          },
          autocorrect: {
            type: String,
            default: "off"
          },
          spellcheck: {
            type: String,
            default: "false"
          },
          novalidate: {
            type: Boolean,
            default: !1
          },
          iconType: String,
          debounce: Number,
          placeholderAlign: String,
          labelWidth: String,
          mask: String,
          shouldToastError: {
            type: Boolean,
            default: !0
          }
        },
        computed: {
          labelStyles: function () {
            var e = this.$parent,
              t = void 0 === e ? {} : e;
            return {
              width: this.labelWidthComputed || t.labelWidth || this.labelWidthComputed,
              textAlign: t.labelAlign,
              marginRight: t.labelMarginRight
            };
          },
          labelClass: function () {
            return {
              "vux-cell-justify": this.$parent && ("justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign)
            };
          },
          pattern: function () {
            if ("number" === this.keyboard || "china-mobile" === this.isType) return "[0-9]*";
          },
          labelWidthComputed: function () {
            var e = this.title.replace(/[^x00-xff]/g, "00").length / 2 + 1;
            if (e < 10) return e + "em";
          },
          hasErrors: function () {
            return Je()(this.errors).length > 0;
          },
          inputStyle: function () {
            if (this.textAlign) return {
              textAlign: this.textAlign
            };
          },
          showWarn: function () {
            return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
          }
        },
        methods: {
          scrollIntoView: function () {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            /iphone/i.test(navigator.userAgent), "INPUT" !== document.activeElement.tagName && "TEXTAREA" !== document.activeElement.tagName || setTimeout(function () {
              e.$refs.input.scrollIntoViewIfNeeded(!0);
            }, t);
          },
          onClickErrorIcon: function () {
            this.shouldToastError && this.firstError && (this.showErrorToast = !0), this.$emit("on-click-error-icon", this.firstError);
          },
          maskValue: function (e) {
            return this.mask ? at.a.toPattern(e, this.mask) : e;
          },
          reset: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            this.dirty = !1, this.currentValue = e, this.firstError = "", this.valid = !0;
          },
          clear: function () {
            this.currentValue = "", this.focus(), this.$emit("on-click-clear-icon");
          },
          focus: function () {
            this.$refs.input.focus();
          },
          blur: function () {
            this.$refs.input.blur();
          },
          focusHandler: function (e) {
            var t = this;
            this.$emit("on-focus", this.currentValue, e), this.isFocus = !0, setTimeout(function () {
              !t.$refs.input || t.$refs.input.scrollIntoViewIfNeeded(!1);
            }, 1000);
          },
          onBlur: function (e) {
            this.setTouched(), this.validate(), this.isFocus = !1, this.$emit("on-blur", this.currentValue, e);
          },
          onKeyUp: function (e) {
            "Enter" === e.key && (e.target.blur(), this.$emit("on-enter", this.currentValue, e));
          },
          getError: function () {
            var e = Je()(this.errors)[0];
            this.firstError = this.errors[e];
          },
          validate: function () {
            if (void 0 === this.equalWith) {
              if (this.errors = {}, this.currentValue || this.required) {
                if (!this.currentValue && this.required) return this.valid = !1, this.errors.required = "\u5FC5\u586B\u54E6", void this.getError();
                if ("string" == typeof this.isType) {
                  var e = nt[this.isType];
                  if (e) {
                    var t = this.currentValue;
                    if ("china-mobile" === this.isType && "999 9999 9999" === this.mask && (t = this.currentValue.replace(/\s+/g, "")), this.valid = e.fn(t), !this.valid) return this.forceShowError = !0, this.errors.format = e.msg + "\u683C\u5F0F\u4E0D\u5BF9\u54E6~", void this.getError();
                    delete this.errors.format;
                  }
                }
                if ("function" == typeof this.isType) {
                  var a = this.isType(this.currentValue);
                  if (this.valid = a.valid, !this.valid) return this.errors.format = a.msg, this.forceShowError = !0, void this.getError();
                  delete this.errors.format;
                }
                if (this.min) {
                  if (this.currentValue.length < this.min) return this.errors.min = "\u6700\u5C11\u5E94\u8BE5\u8F93\u5165" + this.min + "\u4E2A\u5B57\u7B26\u54E6", this.valid = !1, void this.getError();
                  delete this.errors.min;
                }
                if (this.max) {
                  if (this.currentValue.length > this.max) return this.errors.max = "\u6700\u591A\u53EF\u4EE5\u8F93\u5165" + this.max + "\u4E2A\u5B57\u7B26\u54E6", this.valid = !1, void (this.forceShowError = !0);
                  this.forceShowError = !1, delete this.errors.max;
                }
                this.valid = !0;
              } else this.valid = !0;
            } else this.validateEqual();
          },
          validateEqual: function () {
            return !this.equalWith && this.currentValue ? (this.valid = !1, void (this.errors.equal = "\u8F93\u5165\u4E0D\u4E00\u81F4")) : (this.dirty || this.currentValue.length >= this.equalWith.length) && this.currentValue !== this.equalWith ? (this.valid = !1, void (this.errors.equal = "\u8F93\u5165\u4E0D\u4E00\u81F4")) : void (!this.currentValue && this.required ? this.valid = !1 : (this.valid = !0, delete this.errors.equal));
          },
          _getInputMaskSelection: function (e, t, a, n) {
            if (!this.mask || n && 0 === t) return e;
            if ((0 === t && (t = this.lastDirection), t > 0) && !this.mask.substr(e - t, 1).match(/[9SA]/)) return this._getInputMaskSelection(e + 1, t, a, !0);
            return e;
          }
        },
        data: function () {
          return {
            hasRightFullHeightSlot: !1,
            hasRestrictedLabel: !1,
            firstError: "",
            forceShowError: !1,
            hasLengthEqual: !1,
            valid: !0,
            currentValue: "",
            showErrorToast: !1,
            isFocus: !1
          };
        },
        watch: {
          mask: function (e) {
            e && this.currentValue && (this.currentValue = this.maskValue(this.currentValue));
          },
          valid: function () {
            this.getError();
          },
          value: function (e) {
            this.currentValue = e;
          },
          equalWith: function (e) {
            e && this.equalWith ? (e.length === this.equalWith.length && (this.hasLengthEqual = !0), this.validateEqual()) : this.validate();
          },
          currentValue: function (e, t) {
            var a = this,
              n = null;
            !this.equalWith && e && this.validateEqual(), e && this.equalWith ? (e.length === this.equalWith.length && (this.hasLengthEqual = !0), this.validateEqual()) : this.validate();
            try {
              n = this.$refs.input.selectionStart;
              var i = e.length - t.length;
              n = this._getInputMaskSelection(n, i, this.maskValue(e)), this.lastDirection = i;
            } catch (e) {}
            this.$emit("input", this.maskValue(e)), this.$nextTick(function () {
              a.$refs.input.selectionStart !== n && (a.$refs.input.selectionStart = n, a.$refs.input.selectionEnd = n), a.currentValue !== a.maskValue(e) && (a.currentValue = a.maskValue(e));
            }), this._debounce ? this._debounce() : this.$emit("on-change", e);
          }
        }
      },
      rt = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-x-input weui-cell",
            class: {
              "weui-cell_warn": e.showWarn,
              disabled: e.disabled,
              "vux-x-input-has-right-full": e.hasRightFullHeightSlot
            }
          }, [a("div", {
            staticClass: "weui-cell__hd"
          }, [e.hasRestrictedLabel ? a("div", {
            style: e.labelStyles
          }, [e._t("restricted-label")], 2) : e._e(), e._v(" "), e._t("label", function () {
            return [e.title ? a("label", {
              staticClass: "weui-label",
              class: e.labelClass,
              style: {
                width: e.labelWidth || e.$parent.labelWidth || e.labelWidthComputed,
                textAlign: e.$parent.labelAlign,
                marginRight: e.$parent.labelMarginRight
              },
              attrs: {
                for: "vux-x-input-" + e.uuid
              },
              domProps: {
                innerHTML: e._s(e.title)
              }
            }) : e._e(), e._v(" "), e.inlineDesc ? a("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()];
          })], 2), e._v(" "), a("div", {
            staticClass: "weui-cell__bd weui-cell__primary",
            class: e.placeholderAlign ? "vux-x-input-placeholder-" + e.placeholderAlign : ""
          }, [e.type && "text" !== e.type ? e._e() : a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: e.inputStyle,
            attrs: {
              id: "vux-x-input-" + e.uuid,
              maxlength: e.max,
              autocomplete: e.autocomplete,
              autocapitalize: e.autocapitalize,
              autocorrect: e.autocorrect,
              spellcheck: e.spellcheck,
              type: "text",
              name: e.name,
              pattern: e.pattern,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled
            },
            domProps: {
              value: e.currentValue
            },
            on: {
              focus: e.focusHandler,
              blur: e.onBlur,
              keyup: e.onKeyUp,
              input: function (t) {
                t.target.composing || (e.currentValue = t.target.value);
              }
            }
          }), e._v(" "), "number" === e.type ? a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: e.inputStyle,
            attrs: {
              id: "vux-x-input-" + e.uuid,
              maxlength: e.max,
              autocomplete: e.autocomplete,
              autocapitalize: e.autocapitalize,
              autocorrect: e.autocorrect,
              spellcheck: e.spellcheck,
              type: "number",
              name: e.name,
              pattern: e.pattern,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled
            },
            domProps: {
              value: e.currentValue
            },
            on: {
              focus: e.focusHandler,
              blur: e.onBlur,
              keyup: e.onKeyUp,
              input: function (t) {
                t.target.composing || (e.currentValue = t.target.value);
              }
            }
          }) : e._e(), e._v(" "), "email" === e.type ? a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: e.inputStyle,
            attrs: {
              id: "vux-x-input-" + e.uuid,
              maxlength: e.max,
              autocomplete: e.autocomplete,
              autocapitalize: e.autocapitalize,
              autocorrect: e.autocorrect,
              spellcheck: e.spellcheck,
              type: "email",
              name: e.name,
              pattern: e.pattern,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled
            },
            domProps: {
              value: e.currentValue
            },
            on: {
              focus: e.focusHandler,
              blur: e.onBlur,
              keyup: e.onKeyUp,
              input: function (t) {
                t.target.composing || (e.currentValue = t.target.value);
              }
            }
          }) : e._e(), e._v(" "), "password" === e.type ? a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: e.inputStyle,
            attrs: {
              id: "vux-x-input-" + e.uuid,
              maxlength: e.max,
              autocomplete: e.autocomplete,
              autocapitalize: e.autocapitalize,
              autocorrect: e.autocorrect,
              spellcheck: e.spellcheck,
              type: "password",
              name: e.name,
              pattern: e.pattern,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled
            },
            domProps: {
              value: e.currentValue
            },
            on: {
              focus: e.focusHandler,
              blur: e.onBlur,
              keyup: e.onKeyUp,
              input: function (t) {
                t.target.composing || (e.currentValue = t.target.value);
              }
            }
          }) : e._e(), e._v(" "), "tel" === e.type ? a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: e.inputStyle,
            attrs: {
              id: "vux-x-input-" + e.uuid,
              maxlength: e.max,
              autocomplete: e.autocomplete,
              autocapitalize: e.autocapitalize,
              autocorrect: e.autocorrect,
              spellcheck: e.spellcheck,
              type: "tel",
              name: e.name,
              pattern: e.pattern,
              placeholder: e.placeholder,
              readonly: e.readonly,
              disabled: e.disabled
            },
            domProps: {
              value: e.currentValue
            },
            on: {
              focus: e.focusHandler,
              blur: e.onBlur,
              keyup: e.onKeyUp,
              input: function (t) {
                t.target.composing || (e.currentValue = t.target.value);
              }
            }
          }) : e._e()]), e._v(" "), a("div", {
            staticClass: "weui-cell__ft"
          }, [a("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !e.hasRightFullHeightSlot && !e.equalWith && e.showClear && "" !== e.currentValue && !e.readonly && !e.disabled && e.isFocus,
              expression: "!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"
            }],
            attrs: {
              type: "clear"
            },
            nativeOn: {
              touchstart: function (t) {
                return e.clear.apply(null, arguments);
              }
            }
          }), e._v(" "), a("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.showWarn,
              expression: "showWarn"
            }],
            staticClass: "vux-input-icon",
            attrs: {
              type: "warn",
              title: e.valid ? "" : e.firstError
            },
            nativeOn: {
              click: function (t) {
                return e.onClickErrorIcon.apply(null, arguments);
              }
            }
          }), e._v(" "), !e.novalidate && e.hasLengthEqual && e.dirty && e.equalWith && !e.valid ? a("icon", {
            staticClass: "vux-input-icon",
            attrs: {
              type: "warn"
            },
            nativeOn: {
              click: function (t) {
                return e.onClickErrorIcon.apply(null, arguments);
              }
            }
          }) : e._e(), e._v(" "), a("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !e.novalidate && e.equalWith && e.equalWith === e.currentValue && e.valid,
              expression: "!novalidate && equalWith && equalWith === currentValue && valid"
            }],
            attrs: {
              type: "success"
            }
          }), e._v(" "), a("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.novalidate && "success" === e.iconType,
              expression: "novalidate && iconType === 'success'"
            }],
            staticClass: "vux-input-icon",
            attrs: {
              type: "success"
            }
          }), e._v(" "), a("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.novalidate && "error" === e.iconType,
              expression: "novalidate && iconType === 'error'"
            }],
            staticClass: "vux-input-icon",
            attrs: {
              type: "warn"
            }
          }), e._v(" "), e._t("right"), e._v(" "), e.hasRightFullHeightSlot ? a("div", {
            staticClass: "vux-x-input-right-full"
          }, [e._t("right-full-height")], 2) : e._e()], 2), e._v(" "), a("toast", {
            attrs: {
              type: "text",
              width: "auto",
              time: 600
            },
            model: {
              value: e.showErrorToast,
              callback: function (t) {
                e.showErrorToast = t;
              },
              expression: "showErrorToast"
            }
          }, [e._v(e._s(e.firstError))])], 1);
        },
        staticRenderFns: []
      };
    var st = a("VU/8")(it, rt, !1, function (e) {
        a("1VUQ");
      }, null, null).exports,
      lt = a("UNGY"),
      ot = function (e) {
        return c.a.get("/yongpai-service/api/subsidy/get_place", {
          params: e
        });
      },
      ut = function (e) {
        return c.a.get("/yongpai-service/api/subsidy/get_startup_type", {
          params: e
        });
      },
      pt = function (e) {
        return c.a.get("/yongpai-service/api/subsidy/saveStartupSubsidy", {
          params: e
        });
      },
      mt = function (e) {
        return c.a.get("/yongpai-service/api/subsidy/get_subsidy_info", {
          params: e
        });
      },
      vt = function (e) {
        return c.a.get("/yongpai-service/api/subsidy/get_user_type", {
          params: e
        });
      },
      ct = function (e) {
        return c.a.get("/yongpai-service/api/subsidy/get_employment_subsidy", {
          params: e
        });
      },
      dt = function (e) {
        return c.a.get("/yongpai-service/api/subsidy/save_employment_subsidy", {
          params: e
        });
      },
      ht = (Ie.a, lt.a, {
        data: function () {
          return {
            address: "",
            type: "",
            unitName: "",
            ic: "",
            userName: "",
            phone: "",
            type2: "",
            type2List: [{
              key: 1,
              value: "\u5B81\u6CE2\u6237\u7C4D\u4EBA\u5458(\u975E5\u5E74\u5185\u9AD8\u6821\u6BD5\u4E1A\u751F)"
            }, {
              key: 3,
              value: "5\u5E74\u5185\u9AD8\u6821\u6BD5\u4E1A\u751F"
            }, {
              key: 9,
              value: "\u975E\u4E0A\u8FF0\u7C7B\u578B"
            }],
            isYes: "",
            isYesList: [{
              key: 0,
              value: "\u5426"
            }, {
              key: 1,
              value: "\u662F"
            }],
            isYes2: "",
            isYes2List: [{
              key: 0,
              value: "\u5426"
            }, {
              key: 1,
              value: "\u662F"
            }],
            isProperty: "",
            isPropertyList: [{
              key: 0,
              value: "\u5426"
            }, {
              key: 1,
              value: "\u662F"
            }],
            list: [{}],
            code: "",
            value1: "2015-11-12",
            startupTypeList: [],
            list2: [],
            userInfo: null,
            content: "",
            showCancelMessage: !1,
            showSuccessMessage: !1
          };
        },
        components: {
          Group: Ie.a,
          Selector: je,
          XButton: He,
          XInput: st,
          Datetime: lt.a,
          Toast: _e
        },
        methods: {
          change: function (e) {
            console.log("change", e);
          },
          log: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            console.log(e, t);
          },
          getStartupType: function () {
            var e = this;
            ut({}).then(function (t) {
              e.list2 = t.data;
              for (var a = 0; a < e.list2.length; a++) {
                var n = e.list2[a],
                  i = {};
                i.key = n.type, i.value = n.name, e.startupTypeList.push(i);
              }
            });
          },
          save: function () {
            var e = this;
            if (null == this.userInfo) {
              var t = navigator.userAgent,
                a = (navigator.appVersion, t.indexOf("Android") > -1 || t.indexOf("Linux") > -1);
              !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                method: "userJson",
                data: {
                  isLogin: "" + !0
                }
              }), a && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
            } else if ("" == this.type) this.showCancelMessage = !0, this.content = "\u521B\u4E1A\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.unitName) this.showCancelMessage = !0, this.content = "\u5355\u4F4D\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.address) this.showCancelMessage = !0, this.content = "\u7533\u62A5\u5730\u70B9\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.value1) this.showCancelMessage = !0, this.content = "\u6210\u7ACB\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.ic) this.showCancelMessage = !0, this.content = "\u8EAB\u4EFD\u8BC1\u53F7\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.userName) this.showCancelMessage = !0, this.content = "\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.phone) this.showCancelMessage = !0, this.content = "\u624B\u673A\u53F7\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.type2) this.showCancelMessage = !0, this.content = "\u521B\u4E1A\u8005\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.isYes) this.showCancelMessage = !0, this.content = "\u8FDE\u7EED\u53C2\u4FDD\u6EE112\u4E2A\u6708\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.isYes2) this.showCancelMessage = !0, this.content = "\u6708\u5747\u7EB3\u7A0E\u989D\u8FBE500\u5143\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else if ("" == this.isProperty) this.showCancelMessage = !0, this.content = "\u4FE1\u606F\u586B\u62A5\u662F\u5426\u5C5E\u5B9E\u4E0D\u80FD\u4E3A\u7A7A\uFF01";else {
              var n = {
                code: this.code,
                userId: this.userInfo.userId,
                unitName: this.unitName,
                enterpriseType: this.type,
                establishmentDate: value1,
                ic: this.ic,
                mobile: this.phone,
                name: this.userName,
                personnelCategory: this.type2,
                isInsurance: this.isYes,
                isTax: this.isYes2,
                isCheck: this.isProperty,
                timestamp: new Date().getTime(),
                sign: N()("userId" + this.userInfo.userId + "timestamp" + new Date().getTime())
              };
              pt(n).then(function (t) {
                0 == t.data.statusCode ? (e.showSuccessMessage = !0, e.content = "\u7533\u62A5\u6210\u529F") : (e.showCancelMessage = !0, e.content = t.data.message);
              });
            }
          },
          callBack: function (e) {
            this.userInfo = "" == e ? null : e;
          }
        },
        mounted: function () {
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !0
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}"), window.callBack = this.callBack, this.code = this.$route.query.code, this.address = this.$route.query.name, this.getStartupType();
        }
      }),
      gt = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              height: "1.8rem",
              "background-color": "#f6f6f6",
              "font-size": "0.8125em",
              "line-height": "1.8rem",
              color: "#757575"
            }
          }, [e._v("\xA0\xA0\u9009\u62E9\u7533\u62A5\u5730\u70B9")]), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              "border-bottom": "1px solid #D9D9D9"
            }
          }, [a("group", {
            attrs: {
              "label-width": "5em",
              "label-margin-right": "2.8em",
              "label-align": "left"
            }
          }, [a("selector", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9\u521B\u4E1A\u7C7B\u578B",
              title: "\u521B\u4E1A\u7C7B\u578B",
              name: "district",
              options: e.startupTypeList
            },
            model: {
              value: e.type,
              callback: function (t) {
                e.type = t;
              },
              expression: "type"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u8F93\u5165\u5355\u4F4D\u540D\u79F0",
              title: "\u5B9E\u4F53\u5168\u79F0",
              name: "district"
            },
            model: {
              value: e.unitName,
              callback: function (t) {
                e.unitName = t;
              },
              expression: "unitName"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u7533\u62A5\u5730\u70B9",
              name: "district"
            },
            model: {
              value: e.address,
              callback: function (t) {
                e.address = t;
              },
              expression: "address"
            }
          }), e._v(" "), a("datetime", {
            attrs: {
              title: "\u6210\u7ACB\u65F6\u95F4",
              "value-text-align": "left"
            },
            model: {
              value: e.value1,
              callback: function (t) {
                e.value1 = t;
              },
              expression: "value1"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",
              title: "\u8EAB\u4EFD\u8BC1\u53F7",
              name: "district"
            },
            model: {
              value: e.ic,
              callback: function (t) {
                e.ic = t;
              },
              expression: "ic"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
              title: "\u59D3\u540D",
              name: "district"
            },
            model: {
              value: e.userName,
              callback: function (t) {
                e.userName = t;
              },
              expression: "userName"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",
              title: "\u624B\u673A\u53F7\u7801",
              name: "district"
            },
            model: {
              value: e.phone,
              callback: function (t) {
                e.phone = t;
              },
              expression: "phone"
            }
          }), e._v(" "), a("selector", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9\u521B\u4E1A\u8005\u7C7B\u522B",
              title: "\u521B\u4E1A\u8005\u7C7B\u522B",
              name: "district",
              options: e.type2List
            },
            model: {
              value: e.type2,
              callback: function (t) {
                e.type2 = t;
              },
              expression: "type2"
            }
          })], 1)], 1), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              "border-bottom": "1px solid #D9D9D9"
            }
          }, [a("group", {
            attrs: {
              "label-width": "9em",
              "label-margin-right": "2.8em",
              "label-align": "left"
            }
          }, [a("selector", {
            staticStyle: {
              "font-size": "14px",
              "border-bottom": "1px solid #D9D9D9"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9",
              title: "\u8FDE\u7EED\u53C2\u4FDD\u6EE112\u4E2A\u6708",
              name: "district",
              options: e.isYesList
            },
            model: {
              value: e.isYes,
              callback: function (t) {
                e.isYes = t;
              },
              expression: "isYes"
            }
          })], 1), e._v(" "), a("p", {
            staticStyle: {
              "font-size": "13px",
              color: "red",
              width: "93%",
              "margin-left": "3.5%"
            }
          }, [e._v("\n      \u8BF4\u660E\uFF1A\u521B\u529E\u4F01\u4E1A\u548C\u4E2A\u4F53\u5DE5\u5546\u6237\uFF08\u6709\u96C7\u5DE5\uFF09\u7684\u521B\u4E1A\u8005\u9700\u901A\u8FC7\u5176\u521B\u529E\u521B\u4E1A\u5B9E\u4F53\u8FDE\u7EED\u7F34\u7EB3\u793E\u4F1A\u4FDD\u9669\u6EE112\u4E2A\u6708;\u521B\u529E\u4E2A\u4F53\u5DE5\u5546\u6237\uFF08\u65E0\u96C7\u5DE5\uFF09\u3001\u7F51\u7EDC\u521B\u4E1A\uFF0C\u6751\u7EA7\u7535\u5546\u9700\u901A\u8FC7\u793E\u4F1A\u4FDD\u9669\u4EE3\u7406\u7B49\u65B9\u5F0F\u8FDE\u7EED\u7F34\u7EB3\u793E\u4F1A\u4FDD\u9669\u6EE112\u4E2A\u6708\u3002\n    ")])], 1), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              "border-bottom": "1px solid #D9D9D9"
            }
          }, [a("group", {
            attrs: {
              "label-width": "9em",
              "label-margin-right": "2.8em",
              "label-align": "left"
            }
          }, [a("selector", {
            staticStyle: {
              "font-size": "14px",
              "border-bottom": "1px solid #D9D9D9"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9",
              title: "\u6708\u5747\u7EB3\u7A0E\u989D\u8FBE500\u5143",
              name: "district",
              options: e.isYes2List
            },
            model: {
              value: e.isYes2,
              callback: function (t) {
                e.isYes2 = t;
              },
              expression: "isYes2"
            }
          })], 1), e._v(" "), a("p", {
            staticStyle: {
              "font-size": "13px",
              color: "red",
              width: "93%",
              "margin-left": "3.5%"
            }
          }, [e._v("\n      \u8BF4\u660E\uFF1A\u8865\u8D34\u62DF\u4EAB\u53D7\u65F6\u6BB5\u5185\u6708\u5747\u7EB3\u7A0E\u989D\u8FBE\u5230500\u5143\u4EE5\u4E0A\u3002\n    ")])], 1), e._v(" "), a("div", {
            staticStyle: {
              width: "100%"
            }
          }, [a("group", {
            attrs: {
              "label-width": "15em",
              "label-margin-right": "2.8em",
              "label-align": "left"
            }
          }, [a("selector", {
            staticStyle: {
              "font-size": "14px",
              "border-bottom": "1px solid #D9D9D9"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9",
              title: "\u672C\u4EBA\u627F\u8BFA\u4EE5\u4E0A\u4FE1\u606F\u586B\u62A5\u5C5E\u5B9E",
              name: "district",
              options: e.isPropertyList
            },
            model: {
              value: e.isProperty,
              callback: function (t) {
                e.isProperty = t;
              },
              expression: "isProperty"
            }
          })], 1)], 1), e._v(" "), a("div", {
            staticStyle: {
              width: "95%",
              "margin-top": "15%",
              "margin-left": "2.5%"
            }
          }, [a("x-button", {
            staticStyle: {
              "background-color": "#4e8fd4"
            },
            attrs: {
              type: "primary"
            },
            nativeOn: {
              click: function (t) {
                return e.next.apply(null, arguments);
              }
            }
          }, [e._v("\u63D0\u4EA4")])], 1), e._v(" "), e._m(0), e._v(" "), a("toast", {
            attrs: {
              type: "cancel",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showCancelMessage,
              callback: function (t) {
                e.showCancelMessage = t;
              },
              expression: "showCancelMessage"
            }
          }, [e._v(e._s(e.content))]), e._v(" "), a("toast", {
            attrs: {
              type: "success",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showSuccessMessage,
              callback: function (t) {
                e.showSuccessMessage = t;
              },
              expression: "showSuccessMessage"
            }
          }, [e._v(e._s(e.content))])], 1);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "94%",
              color: "red",
              "margin-top": "3rem",
              "margin-left": "0.8rem"
            }
          }, [t("p", {
            staticStyle: {
              "font-size": "15px"
            }
          }, [this._v("\u6CE8\u610F\u4E8B\u9879")]), this._v(" "), t("p", {
            staticStyle: {
              "font-size": "13px"
            }
          }, [this._v("1.\u53C2\u4FDD\u6EE112\u4E2A\u6708\u6307\u521B\u529E\u4F01\u4E1A\u548C\u4E2A\u4F53\u5DE5\u5546\u6237\uFF08\u6709\u96C7\u5DE5\uFF09\u7684\u521B\u4E1A\u8005\u9700\u901A\u8FC7\u5176\u521B\u529E\u4F01\u4E1A\u5B9E\u4F53\u8FDE\u7EED\u7F34\u7EB3\u793E\u4F1A\u4FDD\u969C\u6EE112\u4E2A\u6708;\u521B\u529E\u4E2A\u4F53\u5DE5\u5546\u6237\uFF08\u65E0\u96C7\u5DE5\uFF09\u3001\u7F51\u7EDC\u521B\u4E1A\u3001\u6751\u7EA7\u7535\u5546\u9700\u901A\u8FC7\u793E\u4F1A\u4FDD\u9669\u4EE3\u7406\u7B49\u65B9\u5F0F\u8FDE\u7EED\u7F34\u7EB3\u793E\u4F1A\u4FDD\u9669\u6EE112\u4E2A\u6708\u3002")]), this._v(" "), t("p", {
            staticStyle: {
              "font-size": "13px"
            }
          }, [this._v("2.\u6708\u5747\u7EB3\u7A0E\u989D\u8FBE500\u5143\u6307\u8865\u8D34\u62DF\u4EAB\u53D7\u65F6\u6BB5\u5185\u6708\u5747\u7EB3\u7A0E\u989D\u8FBE\u5230500\u5143\u4EE5\u4E0A\u3002")]), this._v(" "), t("p", {
            staticStyle: {
              "font-size": "13px"
            }
          }, [this._v("\u4EBA\u529B\u8D44\u6E90\u548C\u793E\u4F1A\u4FDD\u969C\u7EDF\u4E00\u54A8\u8BE2\u7535\u8BDD\uFF1A12333\u3002")])]);
        }]
      };
    var ft = a("VU/8")(ht, gt, !1, function (e) {
        a("Ti49"), a("2r5U");
      }, "data-v-fb07ac9a", null).exports,
      _t = {
        data: function () {
          return {
            content: "\u6682\u65E0\u516C\u544A\u4FE1\u606F",
            params: {},
            cyList: [],
            isShow: !1
          };
        },
        methods: {
          next: function () {
            this.$router.push({
              path: "/cy/next"
            });
          },
          getSubsidyInfo: function () {
            var e = this,
              t = {
                userId: this.userId
              };
            mt(t).then(function (t) {
              e.cyList = t.data, e.cyList.length > 0 && (e.isShow = !0);
            });
          },
          toPath: function (e) {
            this.$router.push({
              path: "/cy/detail",
              query: {
                status: e.status,
                reviewName: e.reviewName,
                unitName: e.unitName,
                address: e.address,
                ic: e.ic,
                name: e.name,
                personnelCategory: e.personnelCategory,
                establishmentDate: e.establishmentDate,
                enterpriseType: e.enterpriseType
              }
            });
          },
          callBack: function (e) {
            this.userInfo = "" == e ? null : e;
          }
        },
        mounted: function () {
          this.userId = this.$route.query.userId, this.getSubsidyInfo();
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !0
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}"), window.callBack = this.callBack;
        }
      },
      wt = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            }
          }, [a("div", {
            staticClass: "notice"
          }, [e._v("\u516C\u544A\uFF1A")]), e._v(" "), a("div", {
            staticClass: "notice_content"
          }, [a("marquee", [e._v(e._s(e.content))])], 1), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShow,
              expression: "isShow"
            }],
            staticStyle: {
              width: "100%",
              "margin-bottom": "4rem"
            }
          }, e._l(e.cyList, function (t, n) {
            return a("table", {
              staticStyle: {
                width: "100%",
                "border-bottom": "1px solid lightgray"
              },
              on: {
                click: function (a) {
                  return e.toPath(t);
                }
              }
            }, [a("tr", [a("td", [a("table", {
              staticStyle: {
                width: "98%",
                "margin-left": "0.5rem"
              }
            }, [a("tr", [a("td", [a("div", {
              staticStyle: {
                "background-color": "cornflowerblue",
                "text-align": "center",
                width: "3rem",
                height: "2.5rem"
              }
            }, [a("span", {
              staticStyle: {
                "font-size": "12px",
                color: "white",
                height: "2.5rem",
                "line-height": "2.5rem"
              }
            }, [e._v(e._s(t.status))])])]), e._v(" "), a("td", [e._v("[\u5BA1\u6838\u4EBA]" + e._s(t.reviewName))]), e._v(" "), a("td", {
              staticStyle: {
                "font-size": "14px"
              }
            }, [e._v(e._s(t.time))]), e._v(" "), a("td", {
              staticStyle: {
                color: "lightgray"
              }
            }, [e._v("\n                >\n              ")])]), e._v(" "), a("tr", [a("td", {
              staticStyle: {
                "font-size": "13px",
                color: "lightgray"
              },
              attrs: {
                colspan: "2"
              }
            }, [e._v(e._s(t.message))])])])]), e._v(" "), a("td")])]);
          }), 0), e._v(" "), a("div", {
            staticClass: "button",
            on: {
              click: e.next
            }
          }, [e._v("\u7ACB\u5373\u7533\u62A5")])]);
        },
        staticRenderFns: []
      };
    var yt = a("VU/8")(_t, wt, !1, function (e) {
        a("E8sN");
      }, "data-v-ea47da1e", null).exports,
      bt = (Ie.a, {
        data: function () {
          return {
            address: "",
            address2: "",
            list2: [],
            list: [],
            codeList: [],
            codeList2: [],
            chageName: "",
            chageName2: "",
            chageCode: "",
            params: {
              id: "",
              name: ""
            },
            isShow: !1,
            content: "",
            showCancelMessage: !1,
            showSuccessMessage: !1
          };
        },
        components: {
          Group: Ie.a,
          Selector: je,
          XButton: He,
          Toast: _e
        },
        methods: {
          getPlace: function () {
            var e = this;
            ot({
              type: 0
            }).then(function (t) {
              e.list2 = t.data;
              for (var a = 0; a < e.list2.length; a++) {
                var n = e.list2[a],
                  i = {};
                i.key = n.code, i.value = n.name, e.list.push(i);
              }
            });
          },
          onChange: function (e) {
            for (var t = 0; t < this.list2.length; t++) {
              var a = this.list2[t];
              e == a.code && (this.codeList = a.places, this.chageName = "", this.chageName = a.name);
            }
            if (this.codeList.length > 0) {
              for (var n = 0; n < this.codeList.length; n++) {
                var i = this.codeList[n],
                  r = {
                    key: i.code,
                    value: i.name
                  };
                this.codeList2.push(r);
              }
              this.isShow = !0;
            }
          },
          onChange2: function (e) {
            this.chageCode = "", this.chageCode = e;
            for (var t = 0; t < this.codeList2.length; t++) {
              var a = this.codeList2[t];
              e == a.key && (this.chageName2 = a.value);
            }
          },
          next: function () {
            if ("" == this.chageCode) this.showCancelMessage = !0, this.content = "\u7533\u62A5\u5730\u5740\u672A\u9009\u62E9\u5B8C\u6574";else {
              this.params.id = this.chageCode;
              var e = this.chageName + this.chageName2;
              this.$router.push({
                path: "/cy/form",
                query: {
                  code: this.chageCode,
                  name: e
                }
              });
            }
          },
          callBack: function (e) {
            this.userInfo = "" == e ? null : e;
          }
        },
        mounted: function () {
          this.getPlace();
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !0
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}"), window.callBack = this.callBack;
        }
      }),
      xt = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticStyle: {
              width: "100%",
              height: "100%"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              height: "1.8rem",
              "background-color": "#f6f6f6",
              "font-size": "0.8125em",
              "line-height": "1.8rem",
              color: "#757575"
            }
          }, [e._v("\xA0\xA0\u9009\u62E9\u7533\u62A5\u5730\u70B9")]), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              height: "2.8rem"
            }
          }, [a("group", {
            attrs: {
              "label-width": "5em",
              "label-margin-right": "2.8em",
              "label-align": "left"
            }
          }, [a("selector", {
            staticStyle: {
              "font-size": "14px",
              "border-bottom": "1px solid #D9D9D9"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9\u533A\u57DF",
              title: "\u7533\u62A5\u533A\u57DF",
              name: "district",
              options: e.list
            },
            on: {
              "on-change": e.onChange
            },
            model: {
              value: e.address,
              callback: function (t) {
                e.address = t;
              },
              expression: "address"
            }
          }), e._v(" "), a("selector", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShow,
              expression: "isShow"
            }],
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9\u8857\u9053(\u4E61\u9547)",
              title: "\u7533\u62A5\u4E61\u9547",
              name: "district",
              options: e.codeList2
            },
            on: {
              "on-change": e.onChange2
            },
            model: {
              value: e.address2,
              callback: function (t) {
                e.address2 = t;
              },
              expression: "address2"
            }
          })], 1)], 1), e._v(" "), a("div", {
            staticStyle: {
              width: "95%",
              "margin-top": "30%",
              "margin-left": "0.6rem"
            }
          }, [a("x-button", {
            staticStyle: {
              "background-color": "#4e8fd4"
            },
            attrs: {
              type: "primary"
            },
            nativeOn: {
              click: function (t) {
                return e.next.apply(null, arguments);
              }
            }
          }, [e._v("\u4E0B\u4E00\u6B65")])], 1), e._v(" "), e._m(0), e._v(" "), a("toast", {
            attrs: {
              type: "cancel",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showCancelMessage,
              callback: function (t) {
                e.showCancelMessage = t;
              },
              expression: "showCancelMessage"
            }
          }, [e._v(e._s(e.content))]), e._v(" "), a("toast", {
            attrs: {
              type: "success",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showSuccessMessage,
              callback: function (t) {
                e.showSuccessMessage = t;
              },
              expression: "showSuccessMessage"
            }
          }, [e._v(e._s(e.content))])], 1);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "94%",
              color: "red",
              "margin-top": "3rem",
              "margin-left": "0.8rem"
            }
          }, [t("p", {
            staticStyle: {
              "font-size": "15px"
            }
          }, [this._v("\u6CE8\u610F\u4E8B\u9879")]), this._v(" "), t("p", {
            staticStyle: {
              "font-size": "13px"
            }
          }, [this._v("\u4F01\u4E1A\u548C\u4E2A\u4F53\u5DE5\u5546\u6237\u5411\u8425\u4E1A\u6267\u7167\u7ECF\u8425\u6240\u5728\u5730\u8857\u9053(\u4E61\u9547)\u4EBA\u529B\u8D44\u6E90\u793E\u4FDD\u670D\u52A1\u673A\u6784\u7533\u62A5,\u672A\u7ECF\u5DE5\u5546\u6CE8\u518C\u767B\u8BB0\u7684\u7F51\u7EDC\u521B\u4E1A\u3001\u6751\u7EA7\u7535\u5546\uFF0C\u5411\u6237\u7C4D\u6240\u5728\u5730\u8857\u9053(\u4E61\u9547)\u4EBA\u529B\u793E\u4FDD\u670D\u52A1\u673A\u6784\u7533\u62A5\u3002")])]);
        }]
      };
    var St = a("VU/8")(bt, xt, !1, function (e) {
        a("36EF"), a("UGEm");
      }, "data-v-48ba547a", null).exports,
      Ct = {
        components: {
          XButton: He
        },
        data: function () {
          return {
            userId: "",
            userInfoList: [],
            declareList: [],
            detailsInfo: {},
            status01: !1,
            status02: !1,
            status03: !1,
            status04: !1,
            status05: !1,
            status06: !1,
            userInfo: null
          };
        },
        methods: {
          toPath: function (e) {
            this.$router.push({
              path: "/gx/declareDetail",
              query: {
                status: e.status,
                reviewName: e.reviewName,
                unitName: e.unitName,
                organizationCode: e.organizationCode,
                businessLicenseNumber: e.businessLicenseNumber,
                address: e.address,
                ic: e.ic,
                name: e.name,
                school: e.school,
                education: e.education,
                graduationTime: e.graduationTime,
                personnelType: e.personnelType
              }
            });
          },
          getEmploymentSubsidy: function () {
            var e = this,
              t = {
                userId: JSON.parse(this.userInfo).userId
              };
            ct(t).then(function (t) {
              t.data.length > 0 ? e.declareList = t.data : e.declareList.length = 0;
            });
          },
          next: function () {
            this.$router.push({
              path: "/gx/declareIndex"
            });
          },
          callBack: function (e) {
            this.userInfo = e, this.getEmploymentSubsidy();
          }
        },
        created: function () {
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !0
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}"), window.callBack = this.callBack;
        },
        mounted: function () {}
      },
      It = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "content"
          }, [a("div", {
            staticStyle: {
              width: "100%",
              "margin-bottom": "3rem"
            }
          }, e._l(e.declareList, function (t, n) {
            return a("table", {
              staticStyle: {
                width: "100%",
                "border-bottom": "1px solid lightgray"
              },
              on: {
                click: function (a) {
                  return e.toPath(t);
                }
              }
            }, [a("tr", [a("td", [a("table", {
              staticStyle: {
                width: "98%",
                "margin-left": "0.5rem"
              }
            }, [a("tr", [a("td", [a("div", {
              staticStyle: {
                "background-color": "cornflowerblue",
                "text-align": "center",
                width: "3rem",
                height: "2.5rem"
              }
            }, [a("span", {
              staticStyle: {
                "font-size": "12px",
                color: "white",
                height: "2.5rem",
                "line-height": "2.5rem"
              }
            }, [e._v(e._s(t.status))])])]), e._v(" "), a("td", [e._v("[\u5BA1\u6838\u4EBA]" + e._s(t.reviewName))]), e._v(" "), a("td", {
              staticStyle: {
                "font-size": "14px"
              }
            }, [e._v(e._s(t.time))]), e._v(" "), a("td", {
              staticStyle: {
                color: "lightgray"
              }
            }, [e._v("\n                >\n              ")])]), e._v(" "), a("tr", [a("td", {
              staticStyle: {
                "font-size": "13px",
                color: "lightgray"
              },
              attrs: {
                colspan: "2"
              }
            }, [e._v(e._s(t.message))])])])]), e._v(" "), a("td")])]);
          }), 0), e._v(" "), a("div", {
            staticStyle: {
              width: "94%",
              position: "fixed",
              bottom: "0",
              "margin-left": "0.8rem"
            }
          }, [a("x-button", {
            staticStyle: {
              "background-color": "#4e8fd4",
              "margin-bottom": "1rem"
            },
            attrs: {
              type: "primary"
            },
            nativeOn: {
              click: function (t) {
                return e.next.apply(null, arguments);
              }
            }
          }, [e._v("\u7ACB\u5373\u7533\u62A5")])], 1)]);
        },
        staticRenderFns: []
      };
    var kt = a("VU/8")(Ct, It, !1, function (e) {
        a("UFDS");
      }, "data-v-33b96e4c", null).exports,
      Lt = (Ie.a, {
        components: {
          Group: Ie.a,
          Cell: De
        },
        data: function () {
          return {
            status: "",
            reviewName: "",
            unitName: "",
            organizationCode: "",
            businessLicenseNumber: "",
            address: "",
            ic: "",
            name: "",
            school: "",
            education: "",
            graduationTime: "",
            personnelType: ""
          };
        },
        methods: {},
        mounted: function () {
          this.status = this.$route.query.status, this.reviewName = this.$route.query.reviewName, this.unitName = this.$route.query.unitName, this.organizationCode = this.$route.query.organizationCode, this.businessLicenseNumber = this.$route.query.businessLicenseNumber, this.address = this.$route.query.address, this.ic = this.$route.query.ic, this.name = this.$route.query.name, this.school = this.$route.query.school, this.education = this.$route.query.education, this.graduationTime = this.$route.query.graduationTime, this.personnelType = this.$route.query.personnelType;
        }
      }),
      Mt = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "content"
          }, [a("div", {
            staticStyle: {
              width: "100%",
              "margin-top": "1rem"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%"
            }
          }, [a("div", {
            staticStyle: {
              width: "94%",
              "font-size": "16px",
              "margin-left": "0.8rem",
              height: "3rem"
            }
          }, [a("div", {
            staticStyle: {
              "background-color": "cornflowerblue",
              "text-align": "center",
              width: "3rem",
              height: "2.5rem",
              float: "left"
            }
          }, [a("span", {
            staticStyle: {
              "font-size": "12px",
              color: "white",
              height: "2.5rem",
              "line-height": "2.5rem"
            }
          }, [e._v(e._s(e.status))])]), e._v("\n\n        \xA0\xA0\xA0\xA0[\u5BA1\u6838\u4EBA]" + e._s(e.reviewName) + "\n      ")]), e._v(" "), e._m(0), e._v(" "), a("group", {
            staticStyle: {
              "margin-top": "-1.25rem"
            },
            attrs: {
              "label-width": "7em",
              "label-margin-right": "2em",
              "label-align": "left"
            }
          }, [a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u5355\u4F4D\u5168\u79F0",
              value: e.unitName,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u7EC4\u7EC7\u673A\u6784\u4EE3\u7801",
              value: e.organizationCode,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u8425\u4E1A\u6267\u7167\u53F7",
              value: e.businessLicenseNumber,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u7533\u62A5\u5730\u70B9",
              value: e.address,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u8EAB\u4EFD\u8BC1\u53F7",
              value: e.ic,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u59D3\u540D",
              value: e.name,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u6BD5\u4E1A\u5B66\u6821",
              value: e.school,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u5B66\u5386",
              value: e.education,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u6BD5\u4E1A\u65F6\u95F4",
              value: e.graduationTime,
              "value-align": "left"
            }
          }), e._v(" "), a("cell", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u4EBA\u5458\u7C7B\u522B",
              value: e.personnelType,
              "value-align": "left"
            }
          })], 1)], 1)])]);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "100%",
              "background-color": "#f6f6f6"
            }
          }, [t("table", [t("tr", [t("td", {
            staticStyle: {
              "font-size": "14px",
              color: "lightgray"
            }
          }, [this._v("\xA0\xA0\xA0\u7533\u62A5\u4FE1\u606F")])])])]);
        }]
      };
    var At = a("VU/8")(Lt, Mt, !1, function (e) {
        a("jZ+z");
      }, "data-v-32fa1561", null).exports,
      Nt = a("BEQ0"),
      Tt = a.n(Nt),
      Bt = (Object, String, String, Object, {
        name: "x-header",
        props: {
          leftOptions: Object,
          title: String,
          transition: String,
          rightOptions: {
            type: Object,
            default: function () {
              return {
                showMore: !1
              };
            }
          }
        },
        beforeMount: function () {
          this.$slots["overwrite-title"] && (this.shouldOverWriteTitle = !0);
        },
        computed: {
          _leftOptions: function () {
            return Tt()({
              showBack: !0,
              preventGoBack: !1
            }, this.leftOptions || {});
          }
        },
        methods: {
          onClickBack: function () {
            this._leftOptions.preventGoBack ? this.$emit("on-click-back") : this.$router ? this.$router.back() : window.history.back();
          }
        },
        data: function () {
          return {
            shouldOverWriteTitle: !1
          };
        }
      }),
      Dt = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-header"
          }, [a("div", {
            staticClass: "vux-header-left"
          }, [e._t("overwrite-left", function () {
            return [a("transition", {
              attrs: {
                name: e.transition
              }
            }, [a("a", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: e._leftOptions.showBack,
                expression: "_leftOptions.showBack"
              }],
              staticClass: "vux-header-back",
              on: {
                click: [function (t) {
                  if (!t.type.indexOf("key") && e._k(t.keyCode, "preventDefault", void 0, t.key, void 0)) return null;
                }, e.onClickBack]
              }
            }, [e._v(e._s(void 0 === e._leftOptions.backText ? "\u8FD4\u56DE" : e._leftOptions.backText))])]), e._v(" "), a("transition", {
              attrs: {
                name: e.transition
              }
            }, [a("div", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: e._leftOptions.showBack,
                expression: "_leftOptions.showBack"
              }],
              staticClass: "left-arrow",
              on: {
                click: e.onClickBack
              }
            })])];
          }), e._v(" "), e._t("left")], 2), e._v(" "), e.shouldOverWriteTitle ? e._e() : a("h1", {
            staticClass: "vux-header-title",
            on: {
              click: function (t) {
                return e.$emit("on-click-title");
              }
            }
          }, [e._t("default", function () {
            return [a("transition", {
              attrs: {
                name: e.transition
              }
            }, [a("span", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: e.title,
                expression: "title"
              }]
            }, [e._v(e._s(e.title))])])];
          })], 2), e._v(" "), e.shouldOverWriteTitle ? a("div", {
            staticClass: "vux-header-title-area"
          }, [e._t("overwrite-title")], 2) : e._e(), e._v(" "), a("div", {
            staticClass: "vux-header-right"
          }, [e.rightOptions.showMore ? a("a", {
            staticClass: "vux-header-more",
            on: {
              click: [function (t) {
                if (!t.type.indexOf("key") && e._k(t.keyCode, "preventDefault", void 0, t.key, void 0)) return null;
              }, function (t) {
                return e.$emit("on-click-more");
              }]
            }
          }) : e._e(), e._v(" "), e._t("right")], 2)]);
        },
        staticRenderFns: []
      };
    var Et = a("VU/8")(Bt, Dt, !1, function (e) {
        a("oGTJ");
      }, null, null).exports,
      Ot = a("dH7R"),
      Pt = a("NE4E"),
      Vt = a("+geU"),
      $t = a("F3HL"),
      Rt = a("zDi5"),
      Ut = (a("cEdU"), $t.a, $t.b, Array, Number, Number, Array, String, Array, {
        name: "picker",
        components: {
          Flexbox: $t.a,
          FlexboxItem: $t.b
        },
        created: function () {
          if (0 !== this.columns) {
            var e = this.columns;
            this.store = new Rt.a(this.data, e, this.fixedColumns || this.columns), this.currentData = this.store.getColumns(this.value);
          }
        },
        mounted: function () {
          var e = this;
          this.uuid = Math.random().toString(36).substring(3, 8), this.$nextTick(function () {
            e.render(e.currentData, e.currentValue);
          });
        },
        props: {
          data: Array,
          columns: {
            type: Number,
            default: 0
          },
          fixedColumns: {
            type: Number,
            default: 0
          },
          value: Array,
          itemClass: {
            type: String,
            default: "scroller-item"
          },
          columnWidth: Array
        },
        methods: {
          getNameValues: function () {
            return Object(Pt.a)(this.currentValue, this.data);
          },
          getId: function (e) {
            return "#vux-picker-" + this.uuid + "-" + e;
          },
          render: function (e, t) {
            this.count = this.currentData.length;
            var a = this;
            if (e && e.length) {
              var n = this.currentData.length;
              if (t.length < n) for (var i = 0; i < n; i++) this.$set(a.currentValue, i, e[i][0].value || e[i][0]);
              for (var r = function (n) {
                  if (!document.querySelector(a.getId(n))) return {
                    v: void 0
                  };
                  a.scroller[n] && a.scroller[n].destroy(), a.scroller[n] = new Vt.a(a.getId(n), {
                    data: e[n],
                    defaultValue: t[n] || e[n][0].value,
                    itemClass: a.itemClass,
                    onSelect: function (e) {
                      a.$set(a.currentValue, n, e), (!this.columns || this.columns && a.getValue().length === a.store.count) && a.$nextTick(function () {
                        a.$emit("on-change", a.getValue());
                      }), 0 !== a.columns && a.renderChain(n + 1);
                    }
                  }), a.currentValue && a.scroller[n].select(t[n]);
                }, s = 0; s < e.length; s++) {
                var l = r(s);
                if ("object" === (void 0 === l ? "undefined" : u()(l))) return l.v;
              }
            }
          },
          renderChain: function (e) {
            if (this.columns && !(e > this.count - 1)) {
              var t = this,
                a = this.getId(e);
              this.scroller[e].destroy();
              var n = this.store.getChildren(t.getValue()[e - 1]);
              this.scroller[e] = new Vt.a(a, {
                data: n,
                itemClass: t.item_class,
                onSelect: function (a) {
                  t.$set(t.currentValue, e, a), t.$nextTick(function () {
                    t.$emit("on-change", t.getValue());
                  }), t.renderChain(e + 1);
                }
              }), n.length ? (this.$set(this.currentValue, e, n[0].value), this.renderChain(e + 1)) : this.$set(this.currentValue, e, null);
            }
          },
          getValue: function () {
            for (var e = [], t = 0; t < this.currentData.length; t++) {
              if (!this.scroller[t]) return [];
              e.push(this.scroller[t].value);
            }
            return e;
          },
          emitValueChange: function (e) {
            (!this.columns || this.columns && e.length === this.store.count) && this.$emit("on-change", e);
          }
        },
        data: function () {
          return {
            scroller: [],
            count: 0,
            uuid: "",
            currentData: this.data,
            currentValue: this.value
          };
        },
        watch: {
          value: function (e) {
            m()(e) !== m()(this.currentValue) && (this.currentValue = e);
          },
          currentValue: function (e, t) {
            if (this.$emit("input", e), 0 !== this.columns) e.length > 0 ? m()(e) !== m()(t) && (this.currentData = this.store.getColumns(e), this.$nextTick(function () {
              this.render(this.currentData, e);
            })) : this.render(this.currentData, []);else if (e.length) for (var a = 0; a < e.length; a++) this.scroller[a] && this.scroller[a].value !== e[a] && this.scroller[a].select(e[a]);else this.render(this.currentData, []);
          },
          data: function (e) {
            m()(e) !== m()(this.currentData) && (this.currentData = e);
          },
          currentData: function (e) {
            var t = this;
            if ("[object Array]" === Object.prototype.toString.call(e[0])) this.$nextTick(function () {
              t.render(e, t.currentValue), t.$nextTick(function () {
                t.emitValueChange(t.getValue()), m()(t.getValue()) !== m()(t.currentValue) && (!t.columns || t.columns && t.getValue().length === t.store.count) && (t.currentValue = t.getValue());
              });
            });else if (0 !== this.columns) {
              if (!e.length) return;
              var a = this.columns;
              this.store = new Rt.a(e, a, this.fixedColumns || this.columns), this.currentData = this.store.getColumns(this.currentValue);
            }
          }
        },
        beforeDestroy: function () {
          for (var e = 0; e < this.count; e++) this.scroller[e] && this.scroller[e].destroy(), this.scroller[e] = null;
        }
      }),
      Ft = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-picker"
          }, [a("flexbox", {
            attrs: {
              gutter: 0
            }
          }, e._l(e.currentData, function (t, n) {
            return a("flexbox-item", {
              key: n,
              staticStyle: {
                "margin-left": "0"
              },
              attrs: {
                span: e.columnWidth && e.columnWidth[n]
              }
            }, [a("div", {
              staticClass: "vux-picker-item",
              attrs: {
                id: "vux-picker-" + e.uuid + "-" + n
              }
            })]);
          }), 1)], 1);
        },
        staticRenderFns: []
      };
    var jt = a("VU/8")(Ut, Ft, !1, function (e) {
        a("fYnh");
      }, null, null).exports,
      zt = a("+v63"),
      Wt = a("te2A"),
      Ht = (Boolean, String, String, Boolean, Boolean, Boolean, String, String, Object, Boolean, Boolean, Boolean, {
        name: "popup",
        props: {
          value: Boolean,
          height: {
            type: String,
            default: "auto"
          },
          width: {
            type: String,
            default: "auto"
          },
          showMask: {
            type: Boolean,
            default: !0
          },
          isTransparent: Boolean,
          hideOnBlur: {
            type: Boolean,
            default: !0
          },
          position: {
            type: String,
            default: "bottom"
          },
          maxHeight: String,
          popupStyle: Object,
          hideOnDeactivated: {
            type: Boolean,
            default: !0
          },
          shouldRerenderOnShow: {
            type: Boolean,
            default: !1
          },
          shouldScrollTopOnShow: {
            type: Boolean,
            default: !1
          }
        },
        created: function () {
          this.$vux && this.$vux.config && "VIEW_BOX" === this.$vux.config.$layout && (this.layout = "VIEW_BOX");
        },
        mounted: function () {
          var e = this;
          this.$overflowScrollingList = document.querySelectorAll(".vux-fix-safari-overflow-scrolling"), this.$nextTick(function () {
            var t = e;
            e.popup = new zt.a({
              showMask: t.showMask,
              container: t.$el,
              hideOnBlur: t.hideOnBlur,
              onOpen: function () {
                t.fixSafariOverflowScrolling("auto"), t.show = !0;
              },
              onClose: function () {
                t.show = !1, window.__$vuxPopups && Je()(window.__$vuxPopups).length > 1 || document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled") || setTimeout(function () {
                  t.fixSafariOverflowScrolling("touch");
                }, 300);
              }
            }), e.value && e.popup.show(), e.initialShow = !1;
          });
        },
        deactivated: function () {
          this.hideOnDeactivated && (this.show = !1), this.removeModalClassName();
        },
        methods: {
          fixSafariOverflowScrolling: function (e) {
            if (this.$overflowScrollingList.length) for (var t = 0; t < this.$overflowScrollingList.length; t++) this.$overflowScrollingList[t].style.webkitOverflowScrolling = e;
          },
          removeModalClassName: function () {
            "VIEW_BOX" === this.layout && Wt.a.removeClass(document.body, "vux-modal-open");
          },
          doShow: function () {
            this.popup && this.popup.show(), this.$emit("on-show"), this.fixSafariOverflowScrolling("auto"), "VIEW_BOX" === this.layout && Wt.a.addClass(document.body, "vux-modal-open"), this.hasFirstShow || (this.$emit("on-first-show"), this.hasFirstShow = !0);
          },
          scrollTop: function () {
            var e = this;
            this.$nextTick(function () {
              e.$el.scrollTop = 0;
              var t = e.$el.querySelectorAll(".vux-scrollable");
              if (t.length) for (var a = 0; a < t.length; a++) t[a].scrollTop = 0;
            });
          }
        },
        data: function () {
          return {
            layout: "",
            initialShow: !0,
            hasFirstShow: !1,
            shouldRenderBody: !0,
            show: this.value
          };
        },
        computed: {
          styles: function () {
            var e = {};
            if (this.position && "bottom" !== this.position && "top" !== this.position ? e.width = this.width : e.height = this.height, this.maxHeight && (e["max-height"] = this.maxHeight), this.isTransparent && (e.background = "transparent"), this.popupStyle) for (var t in this.popupStyle) e[t] = this.popupStyle[t];
            return e;
          }
        },
        watch: {
          value: function (e) {
            this.show = e;
          },
          show: function (e) {
            var t = this;
            this.$emit("input", e), e ? this.shouldRerenderOnShow ? (this.shouldRenderBody = !1, this.$nextTick(function () {
              t.scrollTop(), t.shouldRenderBody = !0, t.doShow();
            })) : (this.shouldScrollTopOnShow && this.scrollTop(), this.doShow()) : (this.$emit("on-hide"), this.show = !1, this.popup.hide(!1), setTimeout(function () {
              document.querySelector(".vux-popup-dialog.vux-popup-show") || t.fixSafariOverflowScrolling("touch"), t.removeModalClassName();
            }, 200));
          }
        },
        beforeDestroy: function () {
          this.popup && this.popup.destroy(), this.fixSafariOverflowScrolling("touch"), this.removeModalClassName();
        }
      }),
      qt = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("transition", {
            attrs: {
              name: "vux-popup-animate-" + e.position
            }
          }, [a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.show && !e.initialShow,
              expression: "show && !initialShow"
            }],
            staticClass: "vux-popup-dialog",
            class: ["vux-popup-" + e.position, e.show ? "vux-popup-show" : ""],
            style: e.styles
          }, [e.shouldRenderBody ? e._t("default") : e._e()], 2)]);
        },
        staticRenderFns: []
      };
    var Jt = a("VU/8")(Ht, qt, !1, function (e) {
        a("5QqT");
      }, null, null).exports,
      Xt = (String, String, String, Boolean, {
        name: "popup-header",
        props: {
          leftText: String,
          rightText: String,
          title: String,
          showBottomBorder: {
            type: Boolean,
            default: !0
          }
        }
      }),
      Yt = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-popup-header",
            class: e.showBottomBorder ? "vux-1px-b" : ""
          }, [a("div", {
            staticClass: "vux-popup-header-left",
            on: {
              click: function (t) {
                return e.$emit("on-click-left");
              }
            }
          }, [e._t("left-text", function () {
            return [e._v(e._s(e.leftText))];
          })], 2), e._v(" "), a("div", {
            staticClass: "vux-popup-header-title"
          }, [e._t("title", function () {
            return [e._v(e._s(e.title))];
          })], 2), e._v(" "), a("div", {
            staticClass: "vux-popup-header-right",
            on: {
              click: function (t) {
                return e.$emit("on-click-right");
              }
            }
          }, [e._t("right-text", function () {
            return [e._v(e._s(e.rightText))];
          })], 2)]);
        },
        staticRenderFns: []
      };
    var Kt = a("VU/8")(Xt, Yt, !1, function (e) {
        a("7K6v");
      }, null, null).exports,
      Qt = a("LsKW"),
      Gt = a("OFgA"),
      Zt = a("63CM"),
      ea = function (e) {
        return JSON.parse(m()(e));
      },
      ta = (Zt.a, Gt.a, $t.a, $t.b, ke.a, Qt.a, Pt.a, String, String, String, String, Array, String, Number, Number, Array, Boolean, String, Number, Array, Object, Boolean, Boolean, Boolean, Function, Boolean, Array, Object, String, Boolean, Pt.a, function (e) {
        return JSON.parse(m()(e));
      }),
      aa = {
        name: "popup-picker",
        directives: {
          TransferDom: Zt.a
        },
        created: function () {
          void 0 !== this.show && (this.showValue = this.show);
        },
        mixins: [Gt.a],
        components: {
          Picker: jt,
          Cell: De,
          Popup: Jt,
          PopupHeader: Kt,
          Flexbox: $t.a,
          FlexboxItem: $t.b,
          InlineDesc: ke.a
        },
        filters: {
          array2string: Qt.a,
          value2name: Pt.a
        },
        props: {
          valueTextAlign: {
            type: String,
            default: "right"
          },
          title: String,
          cancelText: String,
          confirmText: String,
          data: {
            type: Array,
            default: function () {
              return [];
            }
          },
          placeholder: String,
          columns: {
            type: Number,
            default: 0
          },
          fixedColumns: {
            type: Number,
            default: 0
          },
          value: {
            type: Array,
            default: function () {
              return [];
            }
          },
          showName: Boolean,
          inlineDesc: [String, Number, Array, Object, Boolean],
          showCell: {
            type: Boolean,
            default: !0
          },
          show: Boolean,
          displayFormat: Function,
          isTransferDom: {
            type: Boolean,
            default: !0
          },
          columnWidth: Array,
          popupStyle: Object,
          popupTitle: String,
          disabled: Boolean
        },
        computed: {
          labelStyles: function () {
            return {
              display: "block",
              width: this.$parent && (this.$parent.labelWidth || this.$parent.$parent.labelWidth) || "auto",
              textAlign: this.$parent && (this.$parent.labelAlign || this.$parent.$parent.labelAlign),
              marginRight: this.$parent && (this.$parent.labelMarginRight || this.$parent.$parent.labelMarginRight)
            };
          },
          labelClass: function () {
            return {
              "vux-cell-justify": this.$parent && ("justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign)
            };
          }
        },
        methods: {
          value2name: Pt.a,
          getNameValues: function () {
            return Object(Pt.a)(this.currentValue, this.data);
          },
          onClick: function () {
            this.disabled || (this.showValue = !0);
          },
          onHide: function (e) {
            this.showValue = !1, e && (this.closeType = !0, this.currentValue = ta(this.tempValue)), e || (this.closeType = !1, this.value.length > 0 && (this.tempValue = ta(this.currentValue)));
          },
          onPopupShow: function () {
            this.closeType = !1, this.$emit("on-show");
          },
          onPopupHide: function (e) {
            this.value.length > 0 && (this.tempValue = ta(this.currentValue)), this.$emit("on-hide", this.closeType);
          },
          onPickerChange: function (e) {
            if (m()(this.currentValue) !== m()(e) && this.value.length) {
              var t = m()(this.data);
              t !== this.currentData && "[]" !== this.currentData && (this.tempValue = ta(e)), this.currentData = t;
            }
            var a = ta(e);
            this.$emit("on-shadow-change", a, Object(Pt.a)(a, this.data).split(" "));
          }
        },
        watch: {
          value: function (e) {
            m()(e) !== m()(this.tempValue) && (this.tempValue = ta(e), this.currentValue = ta(e));
          },
          currentValue: function (e) {
            this.$emit("input", ta(e)), this.$emit("on-change", ta(e));
          },
          show: function (e) {
            this.showValue = e;
          },
          showValue: function (e) {
            this.$emit("update:show", e);
          }
        },
        data: function () {
          return {
            onShowProcess: !1,
            tempValue: ta(this.value),
            closeType: !1,
            currentData: m()(this.data),
            showValue: !1,
            currentValue: this.value
          };
        }
      },
      na = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-cell-box"
          }, [a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.showCell,
              expression: "showCell"
            }],
            staticClass: "weui-cell vux-tap-active",
            class: {
              "weui-cell_access": !e.disabled
            },
            on: {
              click: e.onClick
            }
          }, [a("div", {
            staticClass: "weui-cell__hd"
          }, [e._t("title", function () {
            return [e.title ? a("label", {
              staticClass: "weui-label",
              class: e.labelClass,
              style: e.labelStyles,
              domProps: {
                innerHTML: e._s(e.title)
              }
            }) : e._e()];
          }, {
            labelClass: "weui-label",
            labelStyle: e.labelStyles,
            labelTitle: e.title
          }), e._v(" "), e.inlineDesc ? a("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()], 2), e._v(" "), a("div", {
            staticClass: "vux-cell-primary vux-popup-picker-select-box"
          }, [a("div", {
            staticClass: "vux-popup-picker-select",
            style: {
              textAlign: e.valueTextAlign
            }
          }, [e.displayFormat || e.showName || !e.value.length ? e._e() : a("span", {
            staticClass: "vux-popup-picker-value vux-cell-value"
          }, [e._v(e._s(e._f("array2string")(e.value)))]), e._v(" "), !e.displayFormat && e.showName && e.value.length ? a("span", {
            staticClass: "vux-popup-picker-value vux-cell-value"
          }, [e._v(e._s(e._f("value2name")(e.value, e.data)))]) : e._e(), e._v(" "), e.displayFormat && e.value.length ? a("span", {
            staticClass: "vux-popup-picker-value vux-cell-value"
          }, [e._v(e._s(e.displayFormat(e.value, e.value2name(e.value, e.data))))]) : e._e(), e._v(" "), !e.value.length && e.placeholder ? a("span", {
            staticClass: "vux-popup-picker-placeholder vux-cell-placeholder",
            domProps: {
              textContent: e._s(e.placeholder)
            }
          }) : e._e()])]), e._v(" "), a("div", {
            staticClass: "weui-cell__ft"
          })]), e._v(" "), a("div", {
            directives: [{
              name: "transfer-dom",
              rawName: "v-transfer-dom",
              value: e.isTransferDom,
              expression: "isTransferDom"
            }]
          }, [a("popup", {
            staticClass: "vux-popup-picker",
            attrs: {
              id: "vux-popup-picker-" + e.uuid,
              "popup-style": e.popupStyle
            },
            on: {
              "on-hide": e.onPopupHide,
              "on-show": e.onPopupShow
            },
            model: {
              value: e.showValue,
              callback: function (t) {
                e.showValue = t;
              },
              expression: "showValue"
            }
          }, [a("div", {
            staticClass: "vux-popup-picker-container"
          }, [a("popup-header", {
            attrs: {
              "left-text": e.cancelText || "\u53D6\u6D88",
              "right-text": e.confirmText || "\u5B8C\u6210",
              title: e.popupTitle
            },
            on: {
              "on-click-left": function (t) {
                return e.onHide(!1);
              },
              "on-click-right": function (t) {
                return e.onHide(!0);
              }
            }
          }), e._v(" "), a("picker", {
            attrs: {
              data: e.data,
              columns: e.columns,
              "fixed-columns": e.fixedColumns,
              container: "#vux-popup-picker-" + e.uuid,
              "column-width": e.columnWidth
            },
            on: {
              "on-change": e.onPickerChange
            },
            model: {
              value: e.tempValue,
              callback: function (t) {
                e.tempValue = t;
              },
              expression: "tempValue"
            }
          })], 1)])], 1)]);
        },
        staticRenderFns: []
      };
    var ia = a("VU/8")(aa, na, !1, function (e) {
        a("z0Ty");
      }, null, null).exports,
      ra = (String, Array, Number, Boolean, Array, String, String, String, Boolean, String, String, String, Function, Object, String, Boolean, Boolean, {
        name: "x-address",
        components: {
          PopupPicker: ia
        },
        props: {
          title: {
            type: String,
            required: !0
          },
          value: {
            type: Array,
            default: function () {
              return [];
            }
          },
          columns: {
            type: Number,
            default: function () {
              return 3;
            }
          },
          rawValue: Boolean,
          list: {
            type: Array,
            required: !0
          },
          labelWidth: String,
          inlineDesc: String,
          placeholder: String,
          hideDistrict: Boolean,
          valueTextAlign: String,
          confirmText: String,
          cancelText: String,
          displayFormat: {
            type: Function,
            default: function (e, t) {
              return t;
            }
          },
          popupStyle: Object,
          popupTitle: String,
          show: Boolean,
          disabled: Boolean
        },
        created: function () {
          if (this.currentValue.length && this.rawValue) {
            var e = Object(Ot.a)(this.currentValue, this.list);
            /__/.test(e) ? (console.error("[VUX] Wrong address value", this.currentValue), this.currentValue = []) : this.currentValue = e.split(" ");
          }
          this.show && (this.showValue = !0);
        },
        methods: {
          emitHide: function (e) {
            this.$emit("on-hide", e);
          },
          getAddressName: function () {
            return Object(Pt.a)(this.value, this.list);
          },
          onShadowChange: function (e, t) {
            this.$emit("on-shadow-change", e, t);
          }
        },
        data: function () {
          return {
            currentValue: this.value,
            showValue: !1
          };
        },
        computed: {
          nameValue: function () {
            return Object(Pt.a)(this.currentValue, this.list);
          },
          labelClass: function () {
            return {
              "vux-cell-justify": this.$parent && ("justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign)
            };
          }
        },
        watch: {
          currentValue: function (e) {
            this.$emit("input", e);
          },
          value: function (e) {
            if (e.length && !/\d+/.test(e[0])) {
              var t = Object(Ot.a)(e, this.list).split(" ");
              if ("__" !== t[0] && "__" !== t[1]) return void (this.currentValue = t);
            }
            this.currentValue = e;
          },
          show: function (e) {
            this.showValue = e;
          },
          showValue: function (e) {
            this.$emit("update:show", e);
          }
        }
      }),
      sa = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("popup-picker", {
            attrs: {
              "fixed-columns": e.hideDistrict ? 2 : 0,
              columns: e.columns,
              data: e.list,
              title: e.title,
              "show-name": "",
              "inline-desc": e.inlineDesc,
              placeholder: e.placeholder,
              "value-text-align": e.valueTextAlign,
              "confirm-text": e.confirmText,
              "cancel-text": e.cancelText,
              "display-format": e.displayFormat,
              "popup-style": e.popupStyle,
              "popup-title": e.popupTitle,
              show: e.showValue,
              disabled: e.disabled
            },
            on: {
              "update:show": function (t) {
                e.showValue = t;
              },
              "on-shadow-change": e.onShadowChange,
              "on-hide": e.emitHide,
              "on-show": function (t) {
                return e.$emit("on-show");
              }
            },
            scopedSlots: e._u([{
              key: "title",
              fn: function (t) {
                return [e._t("title", function () {
                  return [t.labelTitle ? a("label", {
                    class: [t.labelClass, e.labelClass],
                    style: t.labelStyle,
                    domProps: {
                      innerHTML: e._s(t.labelTitle)
                    }
                  }) : e._e()];
                }, {
                  labelClass: t.labelClass,
                  labelStyle: t.labelStyles,
                  labelTitle: t.title
                })];
              }
            }], null, !0),
            model: {
              value: e.currentValue,
              callback: function (t) {
                e.currentValue = t;
              },
              expression: "currentValue"
            }
          });
        },
        staticRenderFns: []
      },
      la = a("VU/8")(ra, sa, !1, null, null, null).exports,
      oa = (a("2GJp"), Ye.a, Boolean, String, {
        name: "check-icon",
        components: {
          Icon: Ye.a
        },
        methods: {
          updateValue: function () {
            this.$emit("update:value", !this.value);
          }
        },
        props: {
          value: {
            type: Boolean,
            default: !1
          },
          type: {
            type: String,
            default: "default"
          }
        }
      }),
      ua = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-check-icon",
            on: {
              click: e.updateValue
            }
          }, [a("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: "default" === e.type && e.value,
              expression: "type === 'default' && value"
            }],
            attrs: {
              type: "success"
            }
          }), e._v(" "), a("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: "plain" === e.type && e.value,
              expression: "type === 'plain' && value"
            }],
            attrs: {
              type: "success_circle"
            }
          }), e._v(" "), a("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !e.value,
              expression: "!value"
            }],
            attrs: {
              type: "circle"
            }
          }), e._v(" "), a("span", [e._t("default")], 2)], 1);
        },
        staticRenderFns: []
      };
    var pa = a("VU/8")(oa, ua, !1, function (e) {
        a("LB/e");
      }, null, null).exports,
      ma = (Ie.a, lt.a, {
        components: {
          XHeader: Et,
          XButton: He,
          Group: Ie.a,
          XAddress: la,
          XInput: st,
          PopupPicker: ia,
          Datetime: lt.a,
          CheckIcon: pa,
          Selector: je,
          Toast: _e
        },
        data: function () {
          var e;
          return e = {
            code: "",
            educationList: [{
              key: "11",
              value: "\u535A\u58EB"
            }, {
              key: "12",
              value: "\u7855\u58EB"
            }, {
              key: "21",
              value: "\u5927\u5B66"
            }, {
              key: "31",
              value: "\u5927\u4E13"
            }],
            userTypeList: [],
            personnelType: "",
            companyName: "",
            organizationCode: "",
            licenceCode: "",
            address: "",
            carded: "",
            userName: "",
            school: "",
            education: "21",
            time1: "",
            isCheck: !1
          }, L()(e, "code", ""), L()(e, "schoolName", ""), L()(e, "userId", ""), L()(e, "show", !1), L()(e, "list", []), L()(e, "userInfo", null), L()(e, "content", ""), L()(e, "showCancelMessage", !1), L()(e, "showSuccessMessage", !1), e;
        },
        methods: {
          getUserType: function () {
            var e = this,
              t = {
                code: this.code,
                schoolName: this.school
              };
            vt(t).then(function (t) {
              e.list = t.data;
              for (var a = 0; a < e.list.length; a++) {
                var n = e.list[a],
                  i = {
                    key: n.id,
                    value: n.info
                  };
                e.userTypeList.push(i);
              }
            });
          },
          submit: function () {
            var e = this;
            if ("object" != (void 0 === (a = JSON.parse(this.userInfo)) ? "undefined" : u()(a)) && "[object object]" != Object.prototype.toString.call(a).toLowerCase() && a.length && (a = JSON.parse(a)), null != a && null != a.userId && void 0 !== a.userId && "" != a.userId) {
              if (this.isCheck && this.code && this.companyName && this.organizationCode && this.licenceCode && this.carded && this.userName && this.school && this.education && this.time1 && this.personnelType) {
                var t = {
                  code: this.code,
                  userId: a.userId,
                  unitName: this.companyName,
                  organizationCode: this.organizationCode,
                  licenceCode: this.licenceCode,
                  ic: this.carded,
                  name: this.userName,
                  school: this.school,
                  education: this.education,
                  graduationTime: this.time1,
                  personnelType: this.personnelType,
                  isCheck: 1,
                  timestamp: new Date().getTime(),
                  sign: N()("ic" + this.carded + "organizationCode" + this.organizationCode + "timestamp" + new Date().getTime() + "userId" + a.userId)
                };
                dt(t).then(function (t) {
                  e.showCancelMessage = !0, e.content = t.data.message;
                });
              } else this.showCancelMessage = !0, this.content = "\u6570\u636E\u672A\u586B\u5199\u5B8C\u6574";
            } else {
              var a = navigator.userAgent,
                n = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1);
              !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
                method: "userJson",
                data: {
                  isLogin: "" + !0
                }
              }), n && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}");
            }
          },
          callBack: function (e) {
            e = m()(e), this.userInfo = e;
          }
        },
        mounted: function () {
          this.address = this.$route.query.address, this.school = this.$route.query.school, this.code = this.$route.query.code, this.getUserType();
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !0
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}"), window.callBack = this.callBack;
        }
      }),
      va = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "content"
          }, [a("div", {
            staticStyle: {
              width: "100%",
              "margin-top": "3rem"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              "margin-top": "-3rem"
            }
          }, [e._m(0), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              "text-align": "left",
              "font-size": "12px",
              "background-color": "#f6f6f6"
            }
          }, [e._v("\xA0\xA0\xA0\xA0\u586B\u5199\u7533\u62A5\u4FE1\u606F")]), e._v(" "), a("group", {
            staticStyle: {
              "margin-top": "-1.25rem"
            },
            attrs: {
              "label-width": "7em",
              "label-margin-right": "2em",
              "label-align": "left"
            }
          }, [a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u5355\u4F4D\u5168\u79F0",
              placeholder: "\u8BF7\u8F93\u5165\u53C2\u4FDD\u5355\u4F4D\u540D\u79F0"
            },
            model: {
              value: e.companyName,
              callback: function (t) {
                e.companyName = t;
              },
              expression: "companyName"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u7EC4\u7EC7\u673A\u6784\u4EE3\u7801",
              placeholder: "\u8BF7\u8F93\u5165\u7EC4\u7EC7\u673A\u6784\u4EE3\u7801"
            },
            model: {
              value: e.organizationCode,
              callback: function (t) {
                e.organizationCode = t;
              },
              expression: "organizationCode"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u8425\u4E1A\u6267\u7167\u53F7",
              placeholder: "\u8BF7\u586B\u5199\u8425\u4E1A\u6267\u7167\u53F7"
            },
            model: {
              value: e.licenceCode,
              callback: function (t) {
                e.licenceCode = t;
              },
              expression: "licenceCode"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u7533\u62A5\u5730\u70B9",
              readonly: ""
            },
            model: {
              value: e.address,
              callback: function (t) {
                e.address = t;
              },
              expression: "address"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u8EAB\u4EFD\u8BC1\u53F7",
              placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7"
            },
            model: {
              value: e.carded,
              callback: function (t) {
                e.carded = t;
              },
              expression: "carded"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u59D3\u540D",
              placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
            },
            model: {
              value: e.userName,
              callback: function (t) {
                e.userName = t;
              },
              expression: "userName"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u6BD5\u4E1A\u5B66\u6821",
              readonly: ""
            },
            model: {
              value: e.school,
              callback: function (t) {
                e.school = t;
              },
              expression: "school"
            }
          }), e._v(" "), a("datetime", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              title: "\u6BD5\u4E1A\u65E5\u671F",
              placeholder: "\u8BF7\u9009\u62E9\u6BD5\u4E1A\u65E5\u671F",
              "value-text-align": "left"
            },
            model: {
              value: e.time1,
              callback: function (t) {
                e.time1 = t;
              },
              expression: "time1"
            }
          }), e._v(" "), a("selector", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9\u4EBA\u5458\u7C7B\u522B",
              title: "\u4EBA\u5458\u7C7B\u522B",
              name: "district",
              options: e.userTypeList
            },
            model: {
              value: e.personnelType,
              callback: function (t) {
                e.personnelType = t;
              },
              expression: "personnelType"
            }
          }), e._v(" "), a("selector", {
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9\u5B66\u5386\u7C7B\u578B",
              title: "\u5B66\u5386",
              name: "district",
              options: e.educationList
            },
            model: {
              value: e.education,
              callback: function (t) {
                e.education = t;
              },
              expression: "education"
            }
          })], 1)], 1), e._v(" "), a("div", {
            staticStyle: {
              width: "94%",
              "margin-top": "1rem",
              "margin-left": "0.6rem"
            }
          }, [a("check-icon", {
            attrs: {
              value: e.isCheck,
              type: "plain"
            },
            on: {
              "update:value": function (t) {
                e.isCheck = t;
              }
            }
          }, [a("span", {
            staticStyle: {
              "font-size": "14px"
            }
          }, [a("strong", [e._v("\u672C\u4EBA\u627F\u8BFA\u4EE5\u4E0A\u4FE1\u606F\u586B\u62A5\u5C5E\u5B9E")])])])], 1), e._v(" "), a("div", {
            staticStyle: {
              width: "95%",
              "margin-top": "1rem",
              "margin-left": "0.6rem",
              "margin-bottom": "1rem"
            }
          }, [a("x-button", {
            staticStyle: {
              "background-color": "#4e8fd4"
            },
            attrs: {
              type: "primary"
            },
            nativeOn: {
              click: function (t) {
                return e.submit.apply(null, arguments);
              }
            }
          }, [e._v("\u63D0\u4EA4\u7533\u62A5")])], 1)]), e._v(" "), a("toast", {
            attrs: {
              type: "cancel",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showCancelMessage,
              callback: function (t) {
                e.showCancelMessage = t;
              },
              expression: "showCancelMessage"
            }
          }, [e._v(e._s(e.content))]), e._v(" "), a("toast", {
            attrs: {
              type: "success",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showSuccessMessage,
              callback: function (t) {
                e.showSuccessMessage = t;
              },
              expression: "showSuccessMessage"
            }
          }, [e._v(e._s(e.content))])], 1);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "94%",
              "font-size": "12px",
              color: "red",
              "margin-left": "0.8rem"
            }
          }, [t("p", [this._v("\u6CE8\u610F\u4E8B\u9879\uFF1A")]), this._v(" "), t("p", [this._v("1.\u5355\u4F4D\u540D\u79F0\u662F\u6307\u793E\u4FDD\u53C2\u4FDD\u5355\u4F4D\uFF08\u52B3\u52A1\u6D3E\u9063\u7684\u586B\u5199\u6D3E\u9063\u516C\u53F8\u540D\u79F0\uFF09")]), this._v(" "), t("p", [this._v("2.\u4EBA\u5458\u7C7B\u522B\u201C2015.1.6\u540E\u88AB\u4F01\u4E1A\u5F55\u7528\u4EBA\u5458\u201D\u662F\u63072015\u5E741\u67086\u65E5\u540E\u9996\u6B21\u5C31\u4E1A\u5E76\u7F34\u7EB3\u793E\u4FDD\u7684\u4EBA\u5458\u3002")])]);
        }]
      };
    var ca = a("VU/8")(ma, va, !1, function (e) {
        a("0FVo");
      }, "data-v-79af6aee", null).exports,
      da = (Ie.a, {
        components: {
          XHeader: Et,
          XButton: He,
          Group: Ie.a,
          XAddress: la,
          XInput: st,
          Selector: je,
          Toast: _e
        },
        data: function () {
          return {
            address: "",
            address2: "",
            list2: [],
            list: [],
            codeList: [],
            codeList2: [],
            chageName: "",
            chageName2: "",
            chageCode: "",
            school: "",
            userId: "",
            isShow: !1,
            content: "",
            showCancelMessage: !1,
            showSuccessMessage: !1
          };
        },
        methods: {
          getPlace: function () {
            var e = this;
            ot({
              type: 1
            }).then(function (t) {
              e.list2 = t.data;
              for (var a = 0; a < e.list2.length; a++) {
                var n = e.list2[a],
                  i = {};
                i.key = n.code, i.value = n.name, e.list.push(i);
              }
            });
          },
          onChange: function (e) {
            for (var t = 0; t < this.list2.length; t++) {
              var a = this.list2[t];
              e == a.code && (this.codeList = a.places, this.chageName = "", this.chageName = a.name);
            }
            if (this.codeList.length > 0) {
              for (var n = 0; n < this.codeList.length; n++) {
                var i = this.codeList[n],
                  r = {
                    key: i.code,
                    value: i.name
                  };
                this.codeList2.push(r);
              }
              this.isShow = !0;
            }
          },
          onChange2: function (e) {
            this.chageCode = "", this.chageCode = e;
            for (var t = 0; t < this.codeList2.length; t++) {
              var a = this.codeList2[t];
              e == a.key && (this.chageName2 = a.value);
            }
          },
          next: function () {
            "" == this.chageCode ? (this.showCancelMessage = !0, this.content = "\u7533\u62A5\u5730\u5740\u672A\u9009\u62E9\u5B8C\u6574") : this.$router.push({
              path: "/gx/declareForm",
              query: {
                code: this.chageCode,
                address: this.chageName2,
                school: this.school
              }
            });
          },
          callBack: function (e) {
            this.userInfo = "" == e ? null : e;
          }
        },
        mounted: function () {
          this.getPlace();
          var e = navigator.userAgent,
            t = (navigator.appVersion, e.indexOf("Android") > -1 || e.indexOf("Linux") > -1);
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "" + !0
            }
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"}}"), window.callBack = this.callBack;
        }
      }),
      ha = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "content"
          }, [a("div", {
            staticStyle: {
              width: "100%"
            }
          }, [a("div", {
            staticStyle: {
              width: "100%",
              "text-align": "left",
              "font-size": "12px",
              "background-color": "#f6f6f6"
            }
          }, [e._v("\xA0\xA0\xA0\xA0\u9009\u62E9\u7533\u62A5\u5730\u70B9")]), e._v(" "), a("div", {
            staticStyle: {
              width: "100%",
              "margin-top": "-1.3rem"
            }
          }, [a("group", {
            attrs: {
              "label-width": "5em",
              "label-margin-right": "2em",
              "label-align": "left"
            }
          }, [a("selector", {
            staticStyle: {
              "font-size": "14px",
              "border-bottom": "1px solid #D9D9D9"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9\u533A\u57DF",
              title: "\u7533\u62A5\u533A\u57DF",
              name: "district",
              options: e.list
            },
            on: {
              "on-change": e.onChange
            },
            model: {
              value: e.address,
              callback: function (t) {
                e.address = t;
              },
              expression: "address"
            }
          }), e._v(" "), a("selector", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.isShow,
              expression: "isShow"
            }],
            staticStyle: {
              "font-size": "14px"
            },
            attrs: {
              placeholder: "\u8BF7\u9009\u62E9\u8857\u9053(\u4E61\u9547)",
              title: "\u7533\u62A5\u4E61\u9547",
              name: "district",
              options: e.codeList2
            },
            on: {
              "on-change": e.onChange2
            },
            model: {
              value: e.address2,
              callback: function (t) {
                e.address2 = t;
              },
              expression: "address2"
            }
          }), e._v(" "), a("x-input", {
            staticStyle: {
              "font-size": "14px",
              "border-bottom": "1px solid #D9D9D9"
            },
            attrs: {
              title: "\u6BD5\u4E1A\u5B66\u6821"
            },
            model: {
              value: e.school,
              callback: function (t) {
                e.school = t;
              },
              expression: "school"
            }
          })], 1)], 1), e._v(" "), a("div", {
            staticStyle: {
              width: "95%",
              "margin-top": "4rem",
              "margin-left": "0.6rem"
            }
          }, [a("x-button", {
            staticStyle: {
              "background-color": "#4e8fd4"
            },
            attrs: {
              type: "primary"
            },
            nativeOn: {
              click: function (t) {
                return e.next.apply(null, arguments);
              }
            }
          }, [e._v("\u4E0B\u4E00\u6B65")])], 1), e._v(" "), e._m(0)]), e._v(" "), a("toast", {
            attrs: {
              type: "cancel",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showCancelMessage,
              callback: function (t) {
                e.showCancelMessage = t;
              },
              expression: "showCancelMessage"
            }
          }, [e._v(e._s(e.content))]), e._v(" "), a("toast", {
            attrs: {
              type: "success",
              time: 1000,
              width: "10em"
            },
            model: {
              value: e.showSuccessMessage,
              callback: function (t) {
                e.showSuccessMessage = t;
              },
              expression: "showSuccessMessage"
            }
          }, [e._v(e._s(e.content))])], 1);
        },
        staticRenderFns: [function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticStyle: {
              width: "94%",
              color: "red",
              "margin-top": "3rem",
              "margin-left": "0.8rem"
            }
          }, [t("p", {
            staticStyle: {
              "font-size": "14px"
            }
          }, [t("strong", [this._v("\u4E0B\u5217\u60C5\u51B5\u8BF7\u76F4\u63A5\u5230\u7A97\u53E3\u7533\u62A5")])]), this._v(" "), t("p", {
            staticStyle: {
              "font-size": "12px"
            }
          }, [this._v("1.\u4F01\u4E1A\u4EE3\u4E3A\u7533\u62A5\uFF1B")]), this._v(" "), t("p", {
            staticStyle: {
              "font-size": "12px"
            }
          }, [this._v("2.\u9AD8\u6821\u6BD5\u4E1A\u751F\u5728\u540C\u4E00\u6CD5\u4EBA\u4EE3\u8868\u4F01\u4E1A\u4E4B\u95F4\u6216\u540C\u4E00\u96C6\u56E2\u516C\u53F8\u63A7\u80A150%\u4EE5\u4E0A\u7684\u5B50\u516C\u53F8\u95F4\u6D41\u52A8\u5C31\u4E1A\uFF0C\u89C6\u4E3A\u540C\u4E00\u5BB6\u4F01\u4E1A\u5C31\u4E1A\uFF0C\u7531\u96C6\u56E2\u516C\u53F8\u63D0\u51FA\u7533\u62A5\uFF1B")]), this._v(" "), t("p", {
            staticStyle: {
              "font-size": "12px"
            }
          }, [this._v("3.\u9AD8\u6821\u6BD5\u4E1A\u751F\u5728\u517C\u5E76\u91CD\u7EC4\u6216\u5408\u5E76\u5206\u7ACB\u4F01\u4E1A\u5C31\u4E1A\u7684\uFF0C\u517C\u5E76\u91CD\u7EC4\u6216\u5408\u5E76\u5206\u7ACB\u524D\u540E\u7684\u4F01\u4E1A\u53EF\u89C6\u4F5C\u540C\u4E00\u5BB6\u4F01\u4E1A")])]);
        }]
      };
    var ga = a("VU/8")(da, ha, !1, function (e) {
        a("8nE4");
      }, "data-v-12a74869", null).exports,
      fa = function (e) {
        return c.a.get("/yongpai-service/api/iapc/detail", {
          params: e
        });
      },
      _a = {
        data: function () {
          return {
            newsId: "",
            userId: "",
            studentId: "",
            newsInfo: {},
            isShowShare: !0
          };
        },
        components: {
          "yp-detail": D,
          "yp-share": P
        },
        methods: {
          get_news_detail: function () {
            var e = this,
              t = {
                newsId: this.newsId,
                userId: this.userId,
                studentId: this.studentId
              };
            fa(t).then(function (t) {
              0 === t.code && (e.newsInfo = t.data);
            });
          }
        },
        mounted: function () {
          this.newsId = this.$route.query.newsId, this.userId = this.$route.query.userId, this.studentId = this.$route.query.studentId, this.get_news_detail();
        }
      },
      wa = {
        render: function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("yp-detail", {
            attrs: {
              newInfo: this.newsInfo
            }
          }), this._v(" "), t("yp-share", {
            attrs: {
              isShow: this.isShowShare
            }
          })], 1);
        },
        staticRenderFns: []
      };
    var ya = a("VU/8")(_a, wa, !1, function (e) {
        a("UJMn");
      }, "data-v-d87e769c", null).exports,
      ba = function (e) {
        return c.a.get("/yongpai-service/api/cadre/read_news_detail", {
          params: e
        });
      },
      xa = {
        data: function () {
          return {
            newsId: "",
            newsInfo: {},
            srcList: [],
            htmlList: [],
            isShowVideo: !1
          };
        },
        components: {
          "yp-detail": D
        },
        methods: {
          get_news_detail: function () {
            var e = this,
              t = {
                newsId: this.newsId
              };
            ba(t).then(function (t) {
              e.newsInfo = t.data, e.$nextTick(function () {
                $("video").attr("name", "my_video"), e.srcList = document.getElementsByName("my_video");
                for (var t = 0; t < e.srcList.length; t++) {
                  e.srcList[t].setAttribute("id", "video" + (t + 1));
                  var a = "<div id='video" + t + "' style='width: 100%;height: 210px;background-image: url(" + e.srcList[t].poster + ");background-repeat: round'   data-video-url='" + e.srcList[t].src + "' data-isVideo='true'><div style='font-size: 0.625em;position: absolute;margin-top: 9rem;margin-left: 0.875rem;width: 3.25rem;height: 3.25rem;background-color: #000000;border-radius: 2rem;opacity: 0.7;'   data-video-poster='" + e.srcList[t].poster + "' data-video-url='" + e.srcList[t].src + "' data-isVideo='true'><div style='width: 0.9275rem;margin: 1rem 1.0625rem 0rem 1.25rem;background-image: url(static/images/playButton.png);background-repeat: round;height: 1.25rem;'   data-video-poster='" + e.srcList[t].poster + "' data-video-url='" + e.srcList[t].src + "' data-isVideo='true'></div></div></div>";
                  e.htmlList.push(a);
                }
                for (var n = 0; n < e.htmlList.length; n++) {
                  $("#video" + (n + 1)).replaceWith(e.htmlList[n]), document.getElementById("video" + n).onclick = function (e) {
                    var t = e.target.getAttribute("data-video-url"),
                      a = e.target.getAttribute("data-video-poster"),
                      n = {
                        method: "VideoPlay",
                        data: {
                          videoUrl: t,
                          imgUrl: a,
                          pageY: e.pageY
                        }
                      },
                      i = "{\"method\":\"VideoPlay\",data:{\"videoUrl\":\"" + t + "\",\"imgUrl\":\"" + a + "\",\"pageY\":\"" + e.pageY + "\"}}",
                      r = navigator.userAgent,
                      s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
                    !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
                  };
                }
              });
            });
          }
        },
        mounted: function () {
          this.newsId = this.$route.query.newsId, this.get_news_detail();
        }
      },
      Sa = {
        render: function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", [t("yp-detail", {
            attrs: {
              newInfo: this.newsInfo
            }
          })], 1);
        },
        staticRenderFns: []
      };
    var Ca = a("VU/8")(xa, Sa, !1, function (e) {
        a("XLtV");
      }, "data-v-6e93abd0", null).exports,
      Ia = function (e) {
        return c.a.get("/yongpai-ugc/api/vote/ugc", {
          params: e
        });
      },
      ka = function (e) {
        return c.a.get("/yongpai-ugc/api/vote/ugc/preVote", {
          params: e
        });
      },
      La = {
        getIamgePath: function () {
          return "";
        },
        iOS: function () {
          var e = navigator.userAgent;
          navigator.appVersion;
          return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        },
        Android: function () {
          var e = navigator.userAgent;
          navigator.appVersion;
          return e.indexOf("Android") > -1 || e.indexOf("Linux") > -1;
        },
        postMessage: function (e, t, a) {
          var n = {
              method: "" + e,
              data: {
                to: "" + t,
                header: "" + a
              }
            },
            i = "{\"method\":\"" + e + "\",data:{\"to\":\"" + t + "\",\"header\":\"" + a + "\"}}",
            r = navigator.userAgent,
            s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
          !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
        },
        isLogin: function () {
          var e = navigator.userAgent,
            t = e.indexOf("Android") > -1 || e.indexOf("Linux") > -1;
          !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage({
            method: "userJson",
            data: {
              isLogin: "true"
            },
            callBackMethod: "callBack"
          }), t && window.Native.postMessage("{\"method\":\"userJson\",data:{\"isLogin\":\"true\"},\"callBackMethod\":\"callBack\"}");
        },
        getCookie: function (e) {
          var t,
            a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
          return (t = document.cookie.match(a)) ? unescape(t[2]) : null;
        },
        toOrder: function (e) {
          var t = {
              method: "toOrder",
              data: {
                orderInfo: e
              }
            },
            a = m()({
              method: "toOrder",
              data: {
                orderInfo: e
              }
            }),
            n = navigator.userAgent,
            i = n.indexOf("Android") > -1 || n.indexOf("Linux") > -1;
          !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(t), i && window.Native.postMessage(a);
        },
        notify: function (e, t, a) {
          var n = navigator.userAgent,
            i = (navigator.appVersion, n.indexOf("Android") > -1 || n.indexOf("Linux") > -1),
            r = !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            s = null;
          "content" == t ? s = {
            method: "" + e,
            data: {
              content: "" + a
            }
          } : "isLogin" == t && (s = {
            method: "" + e,
            data: {
              isLogin: "" + a
            }
          });
          var l = "{\"method\":\"" + e + "\",data:{\"" + t + "\":\"" + a + "\"}}";
          r && window.webkit.messageHandlers.Native.postMessage(s), i && window.Native.postMessage(l);
        }
      },
      Ma = {
        data: function () {
          return {
            groupId: "",
            list: [],
            dataList_line: [],
            info: {},
            userInfo: {}
          };
        },
        methods: {
          postVotes: function (e) {
            var t = new Date().getTime();
            e.optionsId = e.id, c()({
              method: "POST",
              url: V.a.apiUrl + "/yongpai-ugc/api/vote/vote_multi",
              data: {
                userId: this.userInfo.userId,
                deviceId: this.userInfo.deviceId,
                token: this.userInfo.token,
                unionId: "",
                timestamp: t,
                type: 1,
                votes: [e],
                sign: N()("timestamp" + t + "type1vote-multi_20191018(zhejiang120102#$%)")
              }
            }).then(function (e) {
              0 == e.code ? La.notify("showAlert", "content", "\u6295\u7968\u6210\u529F") : La.notify("showAlert", "content", e.message);
            });
          },
          upCallback: function () {
            var e = this,
              t = {
                groupId: this.groupId
              };
            Ia(t).then(function (t) {
              if (0 == t.code) {
                for (var a = 0; a < t.data.length; a++) e.info = t.data[a];
                var n = e.info.options;
                if (n.length > 0) {
                  for (var i = 0; i < n.length; i++) e.list.push(n[i]);
                  e.getPreVote(), 1 != e.info.style && 2 != e.info.style || e.chunk(e.list, 2);
                } else 1 != e.info.style && 2 != e.info.style || e.chunk(e.list, 2);
              }
            });
          },
          getPreVote: function () {
            var e = this,
              t = {
                voteId: this.info.id,
                userId: this.userInfo.userId,
                deviceId: this.userInfo.deviceId,
                type: 1,
                token: this.userInfo.token
              };
            ka(t).then(function (t) {
              if (2101 == t.code) {
                var a = t.data;
                if (e.info.voteMax == a.length) e.list.forEach(function (e) {
                  e.notVote = !0;
                });else for (var n = 0; n < e.list.length; n++) e.list[n].id == a[n] ? e.list[n].notVote = !0 : e.list[n].notVote = !1;
                1 != e.info.style && 2 != e.info.style || e.chunk(e.list, 2);
              }
            });
          },
          chunk: function (e, t) {
            for (var a = [], n = 0; n < e.length; n += t) a.push(e.slice(n, n + t));
            this.dataList_line = a;
          }
        },
        created: function () {
          this.userInfo = JSON.parse(La.getCookie("userinfo"));
        },
        mounted: function () {
          this.groupId = this.$route.query.groupId, this.upCallback();
        }
      },
      Aa = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", [a("div", {
            staticClass: "head"
          }, [e._v("\n    \u6700\u4F73\u53D1\u5E16\u4EBA/\u4F5C\u54C1\n  ")]), e._v(" "), e._l(e.dataList_line, function (t, n) {
            return 3 == e.info.style ? a("div", {
              key: n,
              staticClass: "list_line"
            }, e._l(t, function (t, n) {
              return a("div", {
                key: n,
                staticClass: "article"
              }, [a("div", {
                staticClass: "img",
                style: {
                  backgroundImage: "url(" + t.postImage + ")"
                }
              }, [t.isPostVideo ? a("div", {
                staticClass: "play"
              }, [a("div", {
                staticClass: "play_button"
              })]) : e._e()]), e._v(" "), a("div", {
                staticClass: "nickname"
              }, [e._v("\n        " + e._s(t.options) + "\n      ")]), e._v(" "), a("div", {
                staticClass: "doc"
              }, [e._v("\n        " + e._s(t.content) + "\n      ")]), e._v(" "), t.notVote ? e._e() : a("div", {
                staticClass: "button",
                on: {
                  click: function (a) {
                    return e.postVotes(t);
                  }
                }
              }, [e._v("\n        \u6295\u7968\n      ")]), e._v(" "), t.notVote ? a("div", {
                staticClass: "not_button"
              }, [e._v("\n        \u6295\u7968\n      ")]) : e._e()]);
            }), 0) : e._e();
          }), e._v(" "), e._l(e.dataList_line, function (t, n) {
            return 2 == e.info.style ? a("div", {
              key: n,
              staticClass: "list_line2"
            }, e._l(t, function (t, n) {
              return a("div", {
                key: n,
                staticClass: "article2"
              }, [a("div", {
                staticClass: "img2",
                style: {
                  backgroundImage: "url(" + t.postImage + ")"
                }
              }, [a("div", {
                staticClass: "play2"
              })]), e._v(" "), a("div", {
                staticClass: "nickname2"
              }, [e._v("\n        " + e._s(t.options) + "\n      ")]), e._v(" "), t.notVote ? e._e() : a("div", {
                staticClass: "button2",
                on: {
                  click: function (a) {
                    return e.postVotes(t);
                  }
                }
              }, [e._v("\n        \u6295\u7968\n      ")]), e._v(" "), t.notVote ? a("div", {
                staticClass: "not_button2"
              }, [e._v("\n        \u6295\u7968\n      ")]) : e._e()]);
            }), 0) : e._e();
          }), e._v(" "), e._l(e.list, function (t, n) {
            return 1 == e.info.style ? a("div", {
              key: n,
              staticClass: "item_list"
            }, [a("div", {
              staticClass: "content"
            }, [a("div", {
              staticClass: "title_div"
            }, [a("div", {
              staticClass: "title"
            }, [e._v(e._s(t.options))]), e._v(" "), t.notVote ? e._e() : a("div", {
              staticClass: "vote",
              on: {
                click: function (a) {
                  return e.postVotes(t);
                }
              }
            }, [e._v("\u6295\u7968")]), e._v(" "), t.notVote ? a("div", {
              staticClass: "not_vote"
            }, [e._v("\u6295\u7968")]) : e._e()]), e._v(" "), a("div", {
              staticClass: "doc2"
            }, [e._v("\n        " + e._s(t.content) + "\n      ")]), e._v(" "), a("div", {
              staticClass: "to_more"
            }, [e._v("\n        \u67E5\u770B\u8BE6\u60C5>\n      ")])])]) : e._e();
          })], 2);
        },
        staticRenderFns: []
      };
    var Na = a("VU/8")(Ma, Aa, !1, function (e) {
      a("kbZs");
    }, "data-v-ad31b11a", null).exports;
    i.default.use(l.a);
    var Ta = new l.a({
        routes: [{
          path: "/news/news_detail",
          name: "news_detail",
          component: J
        }, {
          path: "/news/live_detail",
          name: "live_detail",
          component: Z
        }, {
          path: "/news/video_detail",
          name: "video_detail",
          component: se
        }, {
          path: "/news/read_newspapers",
          name: "read_newspapers",
          component: pe
        }, {
          path: "/news/read_newspapers_index",
          name: "read_newspapers_index",
          component: de
        }, {
          path: "/news/read_newspapers_detail",
          name: "read_newspapers_detail",
          component: be
        }, {
          path: "/news/message_board",
          name: "message_board",
          component: Ce
        }, {
          path: "/cy/detail",
          name: "detail",
          component: Pe
        }, {
          path: "/cy/form",
          name: "form",
          component: ft
        }, {
          path: "/cy/index",
          name: "index",
          component: yt
        }, {
          path: "/cy/next",
          name: "next",
          component: St
        }, {
          path: "/gx/declare",
          name: "gx_declare",
          component: kt
        }, {
          path: "/gx/declareDetail",
          name: "gx_declareDetail",
          component: At
        }, {
          path: "/gx/gx_declareForm",
          name: "gx_declareForm",
          component: ca
        }, {
          path: "/gx/gx_declareIndex",
          name: "gx_declareIndex",
          component: ga
        }, {
          path: "/iapc/news_detail",
          name: "iapc_news_detail",
          component: ya
        }, {
          path: "/gb/gb_news_detail",
          name: "gb_news_detail",
          component: Ca
        }, {
          path: "/ugc/voteList",
          name: "voteList",
          component: Na
        }]
      }),
      Ba = a("//Fk"),
      Da = a.n(Ba);
    c.a.defaults.baseURL = "https://ypservice.cnnb.com.cn", c.a.defaults.headers.common.Accept = "application/json", c.a.defaults.timeout = 5000, c.a.interceptors.response.use(function (e) {
      e.data;
      if (504 !== e.status) return e.data;
      Ta.push({
        path: "/504"
      });
    }, function (e) {
      return console.log("err" + e), Da.a.reject(e);
    });
    c.a, c.a;
    var Ea = a("TJas"),
      Oa = (a("EKQ/"), a("Au9i"));
    a("d8/S"), a("Lw6n");
    i.default.component(Oa.Loadmore.name, Oa.Loadmore), i.default.config.productionTip = !1, i.default.use(Ea.Alert, {}), new i.default({
      el: "#app",
      router: Ta,
      components: {
        App: s
      },
      template: "<App/>"
    });
  },
  "OH/X": function (e, t) {},
  PNYO: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAYAAAC7Q5mxAAAAAXNSR0IArs4c6QAAD0hJREFUaEPNmnl0VdW9x7/7nHPn3BAyR0LCFIKgDN4HyCCN67VqX6W1PMPTyiRgSy3FJQ8ZCpiBVwcERaha16soVmQJlteHVFdlUKsLAYlEZggzNCaEzMMdzrDf23vfc3Nu7r0QbF3t/QPO2dPZ+5Pf/v327/fbBOx37qNBMPQVSQZJoxSGB4QXg/8vwwNC2ZstXCZTQOHPEhTWhoh6ViZRKdxX9LdTKVJHqBypkyHaySBidMJqxXfNOmKIMVgvCeyrYkZmP7Mt60+IQlkdHwoE7KviC+EehsTHIUTMh8+EtzHnSyAR9g0KibIRLN/h85B5XwmQJYpmQCl5erjzFOHwqLHeGaJLs4K288Ru0JQAQBx2CgTQxJ7tDv5RZ8APKVzeaLB6gDhZnR9pfkByOujVDva/wevYz2Po/PkYgEwqnonLRbPaAdkt3r9uBSSPeM5pBeTw8wnDHR6nBfm6Ryzcq9HKpvDgyV7qa2yE0sPL61LrG/BBSjJ/HqypkTnk6qn0Q9QAGWnUV82/CHtWGs29BGzBZSAng/Y5Dyi5uRSowohgHt3CP3EMGNKP+irYcwUmtg7kYzamjunvgfYqpcpPCc7s3OJU8bIJjzWID9APNxXQGNjEADsgOZ28nbuDARZgrlIXBdp4bwGwDbLbRZNa2ZQFQAaPQ4oC2AKS5KF5zeG6KIAa9TUiDLAB+3QBLxZgiH7ICuMBzAnyPgKgnz9bAfoC/XiZ19dKiz4WY5cW1dGFB+4ZINtspQRVu3bndyiz+MLsQnJMgAcRQD9DSB+TMhMgk7D6DlHKJDDN7+fPQgLjAzzmdtHM9usDlD1M6gRJIYGd0sfhmgCTmdQ1ojsAj+khsYYuAD+/xET+mwHEFmBpwcRtRDm9a2evduWRWIAGPQjEBXjEadBeXQAyeGwMK0CPwSSxnc/dKoHZhpBGUwLPRG1fAdDbAnyRFAswTdcoF4RrACy8Wg85vJVZ064A7VkCKN/COUG+fdnPlMDTwTwqlA4gJLACXt9ALoGlrLCojgqA9/7xmgDj6z+h4zol0KCm/mPA843u6T8TYCL9Fx9gMw6HdSEDmEj/WQEm0n+Mw+eXYvVfQRWQlMd0YHz9V1pURJnmjAMwAGIXOq4n13XRBsQdNgCsvjEMqbsGREjgt2tA9tU3AH8HA8IAfpAnJNDUf1YDwgFuESZmmVUCu+q/aIBWA9IJ0NU8+n6b7nxMJkhzUW0bkk48ecXTJBTi//8hXnzLt8TdZntYk+jWGbM+XcjVhMUCWw1I9ax1c9DgX2H2xeQJfZOLR7Swd9MCH56x6mkEQlPEflN2+9bPmyoscAP21TPlHTYiJZtycOrCL8VY4ojFf/w4wv6xlLEi0YKGG0SaIyt5pe/pBXUmQLF9uwmQGZC+kSNMrAUe1DDk9jqSsdlugDB5ZSeolJD6+qE+e5ey79x5weu4f/egM7ImSYpGcHTo5WFP3X62NpEFrv7pKz9BXeuLYs2oT968fGDL9GfLoemFYuFsiUYmdDo03KYainQ0Ck7frF9h5cyTeHjNPWhu39xJ4hs9UQzvk+abP6stWgKF/kNxMV1W6f/fiA6MlsDEBsTUf7fUjlnfItm/Z2cHXUphMwCHgQ6X/cuhe3M6OpgB+a+3B2+3qZJPMsipNT+uuPOrHgHdakCY/mO/mrlrHkV7qAiqXiTgkFr08JahuWUZKG7q9vJvGziocE5x9cknXxqJxrb7hNQx1wAF0PXvd45DaiCRIzCM70bKCC5Dlt4NSyObRMD3eumTrN48wlgNiAAYTAzQakC6HmFyq709Dx8fWlHdSm39UyQMyJVh514I4KXtcz/ue3ArO0CPuuR0jj/Rb/jRgsChjflV7eb2tRqQmq2fpGLrnhMxkGy27RiY8xRqmgvR1Dad19ulr5CX/g6YN3Gm7lEYem/uBaV41iApuRZP3ne8UFPpydXb8lH19frImBTpoLSv5RvNAGkGaJ4FYBNATkXeXbYy32+X74iywBYDckMAOz0QYYHdfxkyrbnZ/esQJdCoFBg9UD4MWRmpUMATCn304aD9DzGAE+pSnKMrs247VHC1cmP+lfgAf7u1Nw6cXYyAdg9AvXwBsnwIXtcG2OQ6qIYTja2vcI+OkEakJs1DSOuNVv9TYWmtQrKnFG5HHV6as5dZ4JMLN96FptZ3IzAkUsFdOsPwhfuwM0oPUNor/L4bwE2gdFCkj8f1Hd8rv/o8xoCELXAXgNoj3bXA7Aw4buctf1RDNp9uSJAkur1foe3PjpBzHfMvFUo0VTl72/78i3WrXxv+vkzJCApater+o0WHsomWyIWrnrTyHCiS+AJSvXPhdl/E5dpt3d6+NuUdvLPoEQ5w3htzEAisjPTtkTQJ/uAwhNQSXuZwzIOqPgDDGMvfczIKUduwFIY+LdInOyPXt3LelUQWmAEsqQyJLZyrSrNZx+64cJnVeb2N8+mfUV0iVJcQTOqYlVVY85fMuhFfyQbcPNAgBZd5tIt/mPBZ9nFzQlX9Gsb8+t+qz8Zz4apf25WB7RXi5Mp+eVk/QEvHADSFjYpN2QGJXEJI+1dQmg/CnFnlfejoBY1JLgCX/RlsfOIp5gMfe2j1c1D1OZHxZGkHDNoHlBbwMknaA8O4lak38S7/AYY+DkB2uE+r780Vaew5kf5jdVwHek7t2pmhRwO8lguXeaD/Y7JfWWDoEmDIja1DT98W7KmHxhwfvU4x5EmyAdiodpBoF6aO2591xFzEmf6N41+fcLnKqv/43D06rV7w9kicufx+ZMGKvBOKXItA6CFeltnzQRCEUNe0AgYdDFn6HD17rII/mIv2DmG5va6fFa6ev0lOUemxB1YzIHd1W3q7NiSk0rehfFS3AMaTwGsB7HWwz8eSKvcnGoFB8PuvR11YzDyQOVW33pnk974lU8ICRNQdqP3hLQeT3jPndr5/fRRAdgZkLlz1Y+snoKZ5JkLqDyzrUGFT/gxVu5eXuR3PoyM4P2qdFDpc9rUIhB7n5TlpdxWWFe9lLtyFt/d42v+0tyxyrpNtR/DD4W/DEfbrWWDCKXxgsMjOrgOLQGgPcUREDSblP++bODN4LQNikcDdOzN0YtnCBk1kgbMbk4faGtzbFV0BUSWontCPawrq9rPBalt0edq5OyoUg2SwbWw3Am8MPEBnmIu+WNA4bsP486e7unDV//7cMRg0wwKnBW7Hmwiqd0A3hgHkKnplzEJT01i0hxbxdjbb/8Auf4yQPh6qWszLxvQtKHz47tqT//lmMdo6ngZFZmRMCj8kbnVFUefR2nzPZCHEcPsQCC76NqwYfC0DApShpHIJ28KdAOO5cNYjTE6Tt8Tmt82yqQqIJl06m3VmrJySbJg+8JTDY8sdmjybAbSpWkPeIS3VnG/1gIYYgDWfVHjwux082gZKeVvYle3JG5dMbylecY6FDCDLX8AmHUZAnRklgXbbBmj6EBjGv4BFLLYuzeEG5JevlSKoRkvrje5lQr7ybSgfeUMAEwVRTR9Y0Qw5XXV94Qgq6ZKqAAZZezH96kprEHVy1ZBhaS2pHzBHiUFMPxGELSBiu+cGNI3bPL7ytDUGSP1XCXE5ac2Ml9+Dpo8Ob9d1+O7wtdi2j4UJAbttMwyaDlUrgtf9BELarQiFZiDJUYr24DxQpEKSjuDdJWO5ASl5Ix9n6n+OkP6LKG6EnINd+Q2SvPuYUKBVGwdVmwlKC6PayeR5pNhe872wvCquB8IaFxfT0rIy0B9ZJPB6FliGVJSs402HLsOpyghKetEVu/901xjg3APjP1V00p8BdNZqsF8R++XygMYYgGYQtWL6c0dBqdhyyd75SE0+gvN/5TFQeJzPwh+cDAoX3nriZjz6m0fQ3LESSa55aPOv5W0U+T1sXvyQGYU+Nv/Vofi6dTk04y7L1hScJLIXFClRZz6xTZohk03Idj3ne2YJixR2scCdPnAUwMxTu3e6dTL7ekFUqtA1Np1MStIl2DX5cL3s565RDMCKUY+7Qo4nGEBJpVAuCkf21IgLQz8oPF3LJNB04bgF3lHhwcu72HYVotorg53ZMtDQ8ip/7+Gei+aOF0QCQ7oCgx+2k+FxPxaxwA5lbeG6RcuYBWZdWAgLqMGHCzYUoJaB1CYl3MUEl2CTy/sMH/Du+QWzO6xRmMgRposHwvRfaRmEBEYDTGxAjrjVbXmqPDxVk6DoKFOp9t8MHtN/vS1R6Psu9M24+a+5n8oGkjlEtiSif/H87fvujXuEmfJiOdqDPxcLpBR3jLgFX56YivbAYl6U2eMBNLU/GAZAuQGgPG8UgKr9h5BS1y8KX5j+ezOIqje1kJMLN01AW9sMaPpEdnROCJBVELIHiv1FTJ/wHh6foIkcCDCxtZX/QawxQCZ9EYATLQCvZ0BqXPr3m4FnczSpqieVpyAYao8HkLlw0w/7RmW2eMsVAwN1on92Pqd+wdY+p2tiLLCIwKwKLy4Ej+N3yW8sLG+Z+iw7nkzm5XcPG1w07e6rZhT61uMnpcPLN61CUJsKEIOfCSd958HBxSPbjj2zJRtHLk+Bpk2DEeX7sr8NhSx/AknaAV2fDEqHxUBlepKQl3Bz9uu+RaNazSSSNQZoAqQooaWVoW1cAm9qJ7PjZeFuNIhqTSKxyf3zB1ETJ5GuZUCYBHKAX14TYPwgamwU+psnkRjk2DTmtbJw1jB+dBA1Oo35t2fh4gZR+fYFmAUuKbkBgN8kC9fdNOa3kYXL1f92gF3TmGYQNQZgRtVHu3u1YSZxXD+IyvVtOI0ZPwsn8h5i+3bmgbtm4ax5YBNgd7JwLInEfpEwfjgPXHgVMC2wkp5Ks2tr0JkHFkl01s9MIrHn2DywNYlkOcLEWGAhgaUlJbTkoLadpFZ9tCVTw0suaj+XyAdOlMbsaoHNWwjx9F/iNKaA3t0snAnQegvBmoXrDkDrLQQ2nkhjAhgSiLmFEM+AsCOM+0cl/TuoXk7STu4Z5JRC672QlgRb1fOx1ziAaIDfThrzH3WNw5qFi3eNIx7AJfsXD7DbpVcdIdvP+OGVQfRIerkEkkYoDHaJSFwg6rx4wy8TEUJZmbiewwvCl4zEs51yJ45f3GHZYesFokh7fi5kF4k6LyEp4UtE/KoPvyjErwuJC0D8F74YRCVI/HKQeQlJfNfMsZkXhRSDRYrMq0zR841cJmL1fB3h74QvELESNjdCCSVEXFISrcLzpUSSQVqIZCspHU5O/R+1ku6XZB2IfQAAAABJRU5ErkJggg==";
  },
  QYBh: function (e, t) {},
  S8Wg: function (e, t, a) {
    "use strict";

    var n = a("mvHQ"),
      i = a.n(n),
      r = a("BEQ0"),
      s = a.n(r),
      l = a("WTNC"),
      o = a.n(l),
      u = a("ypEt"),
      p = a.n(u),
      m = a("qbvd"),
      v = a.n(m);
    Object, String, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Boolean, Object, Object, Boolean, Number;
    var c = {
      name: "scroller",
      props: {
        value: {
          type: Object,
          default: function () {
            return {
              pulldownStatus: "",
              pullupStatus: ""
            };
          }
        },
        height: String,
        lockX: Boolean,
        lockY: Boolean,
        scrollbarX: Boolean,
        scrollbarY: Boolean,
        bounce: {
          type: Boolean,
          default: !0
        },
        useOriginScroll: {
          type: Boolean,
          default: !1
        },
        useTransition: {
          type: Boolean,
          default: !0
        },
        preventDefault: {
          type: Boolean,
          default: !1
        },
        stopPropagation: Boolean,
        boundryCheck: {
          type: Boolean,
          default: !0
        },
        gpuAcceleration: {
          type: Boolean,
          default: !0
        },
        usePulldown: {
          type: Boolean,
          default: !1
        },
        usePullup: {
          type: Boolean,
          default: !1
        },
        pulldownConfig: {
          type: Object,
          default: function () {
            return {};
          }
        },
        pullupConfig: {
          type: Object,
          default: function () {
            return {};
          }
        },
        enableHorizontalSwiping: {
          type: Boolean,
          default: !1
        },
        scrollBottomOffset: {
          type: Number,
          default: 0
        }
      },
      methods: {
        reset: function (e, t, a) {
          e && (void 0 !== e.left && this._xscroll.scrollLeft(e.left, t, a), void 0 !== e.top && this._xscroll.scrollTop(e.top, t, a)), this._xscroll && this._xscroll.resetSize();
        },
        donePulldown: function () {
          var e = this;
          this.pulldown.reset(function () {
            e.reset();
          }), this.currentValue.pulldownStatus = "default";
        },
        disablePullup: function () {
          this.pullup.stop(), this.currentValue.pullupStatus = "disabled";
        },
        enablePullup: function () {
          this.currentValue.pullupStatus = "default", this.pullup.restart();
        },
        donePullup: function () {
          this.pullup.complete(), this.reset(), this.currentValue.pullupStatus = "default";
        },
        getStyles: function () {
          var e = this.height;
          !this.height && this.$el && !this.$el.style.height && this.lockX && (e = document.documentElement.clientHeight + "px", this.reset()), this.height && 0 === this.height.indexOf("-") && (e = document.documentElement.clientHeight + parseInt(this.height) + "px"), this.styles = {
            height: "" + e
          };
        }
      },
      created: function () {
        var e = this;
        this.value ? this.currentValue = this.value : this.currentValue = {
          pulldownStatus: "",
          pullupStatus: ""
        }, this.handleOrientationchange = function () {
          setTimeout(function () {
            e.reset();
          }, 100);
        };
      },
      data: function () {
        return {
          currentValue: {},
          styles: {}
        };
      },
      watch: {
        currentValue: {
          handler: function (e) {
            var t;
            this.$emit("input", (t = e, JSON.parse(i()(t))));
          },
          deep: !0
        },
        height: function () {
          this.getStyles();
        },
        value: {
          handler: function (e) {
            "default" === e.pullupStatus && "default" !== this.currentValue.pullupStatus && this.donePullup(), "default" === e.pulldownStatus && "default" !== this.currentValue.pulldownStatus && this.donePulldown(), "disabled" === e.pullupStatus && "disabled" !== this.currentValue.pullupStatus && this.disablePullup(), "enabled" === e.pullupStatus && "disabled" === this.currentValue.pullupStatus && this.enablePullup();
          },
          deep: !0
        }
      },
      mounted: function () {
        var e = this;
        this.uuid = Math.random().toString(36).substring(3, 8), this.$nextTick(function () {
          e.$el.setAttribute("id", "vux-scroller-" + e.uuid);
          var t = null;
          if (e.$slots.default && (t = e.$slots.default[0].elm), !t) throw new Error("no content is found");
          if (e._xscroll = new o.a({
            renderTo: "#vux-scroller-" + e.uuid,
            lockX: e.lockX,
            lockY: e.lockY,
            scrollbarX: e.scrollbarX,
            scrollbarY: e.scrollbarY,
            content: t,
            bounce: e.bounce,
            useOriginScroll: e.useOriginScroll,
            useTransition: e.useTransition,
            preventDefault: e.preventDefault,
            boundryCheck: e.boundryCheck,
            gpuAcceleration: e.gpuAcceleration,
            stopPropagation: e.stopPropagation
          }), e._xscroll.on("scroll", function () {
            if (e._xscroll) {
              var t = e._xscroll.getScrollTop();
              e.$emit("on-scroll", {
                top: t,
                left: e._xscroll.getScrollLeft()
              }), t >= e._xscroll.containerHeight - e._xscroll.height - e.scrollBottomOffset && e.$emit("on-scroll-bottom");
            }
          }), e.usePulldown) {
            var a = e.$slots.pulldown,
              n = s()({
                content: "Pull Down To Refresh",
                height: 60,
                autoRefresh: !1,
                downContent: "Pull Down To Refresh",
                upContent: "Release To Refresh",
                loadingContent: "Loading...",
                clsPrefix: "xs-plugin-pulldown-"
              }, e.pulldownConfig);
            a && (n.container = a[0].elm), e.pulldown = new p.a(n), e._xscroll.plug(e.pulldown), e.pulldown.on("loading", function (t) {
              e.$emit("on-pulldown-loading", e.uuid);
            }), e.pulldown.on("statuschange", function (t) {
              e.currentValue.pulldownStatus = t.newVal;
            });
          }
          if (e.usePullup) {
            var i = e.$slots.pullup,
              r = s()({
                content: "Pull Up To Refresh",
                pullUpHeight: 60,
                height: 40,
                autoRefresh: !1,
                downContent: "Release To Refresh",
                upContent: "Pull Up To Refresh",
                loadingContent: "Loading...",
                clsPrefix: "xs-plugin-pullup-"
              }, e.pullupConfig);
            i && (r.container = i[0].elm), e.pullup = new v.a(r), e._xscroll.plug(e.pullup), e.pullup.on("loading", function (t) {
              e.$emit("on-pullup-loading", e.uuid);
            }), e.pullup.on("statuschange", function (t) {
              e.currentValue.pullupStatus = t.newVal;
            });
          }
          e.enableHorizontalSwiping && (e._xscroll.on("panstart", function (t) {
            2 !== t.direction && 4 !== t.direction || (t.preventDefault(), e.scrollbarY && (e._xscroll.userConfig.scrollbarY = !1), e._xscroll.userConfig.lockY = !0);
          }), e._xscroll.on("panend", function () {
            e.scrollbarY && (e._xscroll.userConfig.scrollbarY = !0), e._xscroll.userConfig.lockY = !1;
          })), e._xscroll.render(), window.addEventListener("orientationchange", e.handleOrientationchange, !1);
        }), this.getStyles();
      },
      updated: function () {
        this.reset();
      },
      destroyed: function () {
        this.pullup && (this._xscroll.unplug(this.pullup), this.pullup.pluginDestructor()), this.pulldown && (this._xscroll.unplug(this.pulldown), this.pulldown.pluginDestructor()), window.removeEventListener("orientationchange", this.handleOrientationchange, !1), this._xscroll.destroy(), this._xscroll = null;
      }
    };
    var d = {
      render: function () {
        var e = this.$createElement,
          t = this._self._c || e;
        return t("div", {
          style: this.styles
        }, [t("div", {
          staticClass: "xs-container"
        }, [this._t("default"), this._v(" "), this._t("pulldown"), this._v(" "), this._t("pullup")], 2)]);
      },
      staticRenderFns: []
    };
    var h = a("VU/8")(c, d, !1, function (e) {
      a("ujlC");
    }, null, null);
    t.a = h.exports;
  },
  Ti49: function (e, t) {},
  UFDS: function (e, t) {},
  UGEm: function (e, t) {},
  UJMn: function (e, t) {},
  UNGY: function (e, t, a) {
    "use strict";

    var n = a("fZjL"),
      i = a.n(n),
      r = a("oWtu"),
      s = a("zV4+"),
      l = a("rHil"),
      o = a("kbG3"),
      u = a("KRg4"),
      p = a("ODCk"),
      m = (u.a, l.a, o.a, r.a, String, String, String, String, String, Number, Number, String, String, String, String, String, String, String, String, Boolean, Number, Number, String, String, String, Function, Boolean, Array, Array, Boolean, String, Function, Function, Object, {
        name: "datetime",
        mixins: [u.a],
        components: {
          Group: l.a,
          InlineDesc: o.a,
          Icon: r.a
        },
        props: {
          format: {
            type: String,
            default: "YYYY-MM-DD",
            validator: function (e) {
              return !0;
            }
          },
          title: String,
          value: {
            type: String,
            default: ""
          },
          inlineDesc: String,
          placeholder: String,
          minYear: Number,
          maxYear: Number,
          confirmText: String,
          cancelText: String,
          clearText: String,
          yearRow: {
            type: String,
            default: "{value}"
          },
          monthRow: {
            type: String,
            default: "{value}"
          },
          dayRow: {
            type: String,
            default: "{value}"
          },
          hourRow: {
            type: String,
            default: "{value}"
          },
          minuteRow: {
            type: String,
            default: "{value}"
          },
          required: {
            type: Boolean,
            default: !1
          },
          minHour: {
            type: Number,
            default: 0
          },
          maxHour: {
            type: Number,
            default: 23
          },
          startDate: {
            type: String,
            validator: function (e) {
              return !e || 10 === e.length;
            }
          },
          endDate: {
            type: String,
            validator: function (e) {
              return !e || 10 === e.length;
            }
          },
          valueTextAlign: String,
          displayFormat: Function,
          readonly: Boolean,
          hourList: Array,
          minuteList: Array,
          show: Boolean,
          defaultSelectedValue: String,
          computeHoursFunction: Function,
          computeDaysFunction: Function,
          orderMap: Object
        },
        created: function () {
          this.isFirstSetValue = !1, this.currentValue = this.value;
        },
        data: function () {
          return {
            currentShow: !1,
            currentValue: null,
            valid: !0,
            errors: {}
          };
        },
        mounted: function () {
          var e = this,
            t = this.uuid;
          this.$el.setAttribute("id", "vux-datetime-" + t), this.readonly || this.$nextTick(function () {
            e.render(), e.show && e.$nextTick(function () {
              e.picker && e.picker.show(e.currentValue);
            });
          });
        },
        computed: {
          styles: function () {
            return this.$parent ? {
              width: this.$parent.labelWidth,
              textAlign: this.$parent.labelAlign,
              marginRight: this.$parent.labelMarginRight
            } : {};
          },
          pickerOptions: function () {
            var e = this,
              t = {
                trigger: "#vux-datetime-" + this.uuid,
                format: this.format,
                value: this.currentValue,
                output: ".vux-datetime-value",
                confirmText: e.getButtonText("confirm"),
                cancelText: e.getButtonText("cancel"),
                clearText: e.clearText,
                yearRow: this.yearRow,
                monthRow: this.monthRow,
                dayRow: this.dayRow,
                hourRow: this.hourRow,
                minuteRow: this.minuteRow,
                minHour: this.minHour,
                maxHour: this.maxHour,
                startDate: this.startDate,
                endDate: this.endDate,
                hourList: this.hourList,
                minuteList: this.minuteList,
                defaultSelectedValue: this.defaultSelectedValue,
                computeHoursFunction: this.computeHoursFunction,
                computeDaysFunction: this.computeDaysFunction,
                orderMap: this.orderMap || {},
                onSelect: function (t, a, n) {
                  e.picker && e.picker.config.renderInline && (e.$emit("input", n), e.$emit("on-change", n));
                },
                onConfirm: function (t) {
                  e.currentValue = t;
                },
                onClear: function (t) {
                  e.$emit("on-clear", t);
                },
                onHide: function (t) {
                  e.currentShow = !1, e.$emit("update:show", !1), e.validate(), e.$emit("on-hide", t), "cancel" === t && e.$emit("on-cancel"), "confirm" === t && setTimeout(function () {
                    e.$nextTick(function () {
                      e.$emit("on-confirm", e.value);
                    });
                  });
                },
                onShow: function () {
                  e.currentShow = !0, e.$emit("update:show", !0), e.$emit("on-show");
                }
              };
            return this.minYear && (t.minYear = this.minYear), this.maxYear && (t.maxYear = this.maxYear), t;
          },
          firstError: function () {
            var e = i()(this.errors)[0];
            return this.errors[e];
          },
          labelClass: function () {
            return this.$parent ? {
              "vux-cell-justify": "justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign
            } : {};
          }
        },
        methods: {
          getButtonText: function (e) {
            return "cancel" === e && this.cancelText ? this.cancelText : "confirm" === e && this.confirmText ? this.confirmText : this.$el.getAttribute("data-" + e + "-text");
          },
          render: function () {
            var e = this;
            this.$nextTick(function () {
              e.picker && e.picker.destroy(), e.picker = new s.a(e.pickerOptions);
            });
          },
          validate: function () {
            if (!this.currentValue && this.required) return this.valid = !1, void (this.errors.required = "\u5FC5\u586B");
            this.valid = !0, this.errors = {};
          }
        },
        watch: {
          readonly: function (e) {
            e ? this.picker && this.picker.destroy() : this.render();
          },
          show: function (e) {
            e !== this.currentShow && (e ? this.picker && this.picker.show(this.currentValue) : this.picker && this.picker.hide(this.currentValue));
          },
          currentValue: function (e, t) {
            this.$emit("input", e), this.isFirstSetValue ? this.$emit("on-change", e) : (this.isFirstSetValue = !0, t && this.$emit("on-change", e)), this.validate();
          },
          startDate: function () {
            this.render();
          },
          endDate: function () {
            this.render();
          },
          format: function (e) {
            this.currentValue && (this.currentValue = Object(p.a)(this.currentValue, e)), this.render();
          },
          value: function (e) {
            this.readonly || this.picker && this.picker.config.renderInline ? this.currentValue = e : this.currentValue !== e && (this.currentValue = e, this.render());
          }
        },
        beforeDestroy: function () {
          this.picker && this.picker.destroy();
        }
      }),
      v = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("a", {
            staticClass: "vux-datetime weui-cell",
            class: {
              "weui-cell_access": !e.readonly
            },
            attrs: {
              "data-cancel-text": "\u53D6\u6D88",
              "data-confirm-text": "\u786E\u5B9A",
              href: "javascript:"
            }
          }, [e._t("default", function () {
            return [a("div", [e._t("title", function () {
              return [a("p", {
                class: e.labelClass,
                style: e.styles,
                domProps: {
                  innerHTML: e._s(e.title)
                }
              })];
            }), e._v(" "), e.inlineDesc ? a("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()], 2), e._v(" "), a("div", {
              staticClass: "weui-cell__ft vux-cell-primary vux-datetime-value",
              style: {
                textAlign: e.valueTextAlign
              }
            }, [!e.currentValue && e.placeholder ? a("span", {
              staticClass: "vux-cell-placeholder"
            }, [e._v(e._s(e.placeholder))]) : e._e(), e._v(" "), e.currentValue ? a("span", {
              staticClass: "vux-cell-value"
            }, [e._v(e._s(e.displayFormat ? e.displayFormat(e.currentValue) : e.currentValue))]) : e._e(), e._v(" "), a("icon", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.valid,
                expression: "!valid"
              }],
              staticClass: "vux-input-icon",
              attrs: {
                type: "warn",
                title: e.firstError
              }
            })], 1)];
          })], 2);
        },
        staticRenderFns: []
      };
    var c = a("VU/8")(m, v, !1, function (e) {
      a("X6Me");
    }, null, null);
    t.a = c.exports;
  },
  WwFh: function (e, t) {},
  X6Me: function (e, t) {},
  XLtV: function (e, t) {},
  YF26: function (e, t, a) {
    "use strict";

    var n = {
        shareSrc: "https://ypstatic.cnnb.com.cn/yppage-client/index.html#/",
        ypImg: "https://yongpaioss.oss-cn-hangzhou.aliyuncs.com/nf/icon.png",
        domainSrc: "https://ypstatic.cnnb.com.cn/yppage-client/index.html",
        apiUrl: "https://ypapp.cnnb.com.cn",
        newspapersShare: "https://ypstatic.cnnb.com.cn"
      },
      i = a("VU/8")(n, null, !1, null, null, null);
    t.a = i.exports;
  },
  YjfP: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAA/0lEQVQ4T6XST07CQBgF8PemsrNqOACJC7cK6R+2mHgCVp5OV2yMJyibrtsIcgFNlB0bDtCZjwwBU+m0JTDLSeaX9833OAuCN5B3nlLjhyz7xhlnEQRDDbxSqRfOwnAuIn0APxeeNzoVt2hBJhC5AjDhIo5vC61TAL1T8c8wjLVIAuAawIfy/Sfayc/BXeggTddb2IV3lHq8z/Ovpi+vQ+2bP7iCk78dclSHz6MoMsZMy+PbpPsg/+Bj8Ta0ktj5LQfJLSrGJALc7BdVTlqbuAkvyC60nrahtYldOMklRC6PQVthR1vs1banrvHLDaosz1WvXc/fAayU7z+3odbYALV+r/An7L2bAAAAAElFTkSuQmCC";
  },
  YxJB: function (e, t, a) {
    "use strict";

    Number, String, String, String, String, String;
    var n = {
        name: "flexbox",
        props: {
          gutter: {
            type: Number,
            default: 8
          },
          orient: {
            type: String,
            default: "horizontal"
          },
          justify: String,
          align: String,
          wrap: String,
          direction: String
        },
        computed: {
          styles: function () {
            var e = {
              "justify-content": this.justify,
              "-webkit-justify-content": this.justify,
              "align-items": this.align,
              "-webkit-align-items": this.align,
              "flex-wrap": this.wrap,
              "-webkit-flex-wrap": this.wrap,
              "flex-direction": this.direction,
              "-webkit-flex-direction": this.direction
            };
            return e;
          }
        }
      },
      i = {
        render: function () {
          var e = this.$createElement;
          return (this._self._c || e)("div", {
            staticClass: "vux-flexbox",
            class: {
              "vux-flex-col": "vertical" === this.orient,
              "vux-flex-row": "horizontal" === this.orient
            },
            style: this.styles
          }, [this._t("default")], 2);
        },
        staticRenderFns: []
      };
    var r = a("VU/8")(n, i, !1, function (e) {
      a("QYBh");
    }, null, null);
    t.a = r.exports;
  },
  ZxZ9: function (e, t) {},
  "b+jt": function (e, t, a) {
    "use strict";

    var n = {
        render: function () {
          var e = this.$createElement;
          return (this._self._c || e)("div", {
            staticClass: "vux-swiper-item"
          }, [this._t("default")], 2);
        },
        staticRenderFns: []
      },
      i = a("VU/8")({
        name: "swiper-item",
        mounted: function () {
          var e = this;
          this.$nextTick(function () {
            e.$parent.rerender();
          });
        },
        beforeDestroy: function () {
          var e = this.$parent;
          this.$nextTick(function () {
            e.rerender();
          });
        }
      }, n, !1, null, null, null);
    t.a = i.exports;
  },
  "d8/S": function (e, t) {},
  f9uy: function (e, t) {},
  fBcm: function (e, t, a) {
    "use strict";

    var n = a("mvHQ"),
      i = a.n(n),
      r = a("NjrX"),
      s = a("0FxO"),
      l = (Array, String, Boolean, Boolean, String, String, Boolean, Boolean, Number, Number, Number, String, Number, Number, Number, {
        name: "swiper",
        created: function () {
          this.index = this.value || 0, this.index && (this.current = this.index);
        },
        mounted: function () {
          var e = this;
          this.hasTwoLoopItem(), this.$nextTick(function () {
            e.list && 0 === e.list.length || e.render(e.index), e.xheight = e.getHeight(), e.$emit("on-get-height", e.xheight);
          });
        },
        methods: {
          hasTwoLoopItem: function () {
            2 === this.list.length && this.loop ? this.listTwoLoopItem = this.list : this.listTwoLoopItem = [];
          },
          clickListItem: function (e) {
            Object(s.a)(e.url, this.$router), this.$emit("on-click-list-item", JSON.parse(i()(e)));
          },
          buildBackgroundUrl: function (e) {
            return e.fallbackImg ? "url(" + e.img + "), url(" + e.fallbackImg + ")" : "url(" + e.img + ")";
          },
          render: function () {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.swiper && this.swiper.destroy(), this.swiper = new r.a({
              container: this.$el,
              direction: this.direction,
              auto: this.auto,
              loop: this.loop,
              interval: this.interval,
              threshold: this.threshold,
              duration: this.duration,
              height: this.height || this._height,
              minMovingDistance: this.minMovingDistance,
              imgList: this.imgList
            }).on("swiped", function (t, a) {
              e.current = a % e.length, e.index = a % e.length;
            }), t > 0 && this.swiper.go(t);
          },
          rerender: function () {
            var e = this;
            this.$el && !this.hasRender && (this.hasRender = !0, this.hasTwoLoopItem(), this.$nextTick(function () {
              e.index = e.value || 0, e.current = e.value || 0, e.length = e.list.length || e.$children.length, e.destroy(), e.render(e.value);
            }));
          },
          destroy: function () {
            this.hasRender = !1, this.swiper && this.swiper.destroy();
          },
          getHeight: function () {
            var e = parseInt(this.height, 10);
            return e ? this.height : e ? void 0 : this.aspectRatio ? this.$el.offsetWidth * this.aspectRatio + "px" : "180px";
          }
        },
        props: {
          list: {
            type: Array,
            default: function () {
              return [];
            }
          },
          direction: {
            type: String,
            default: "horizontal"
          },
          showDots: {
            type: Boolean,
            default: !0
          },
          showDescMask: {
            type: Boolean,
            default: !0
          },
          dotsPosition: {
            type: String,
            default: "right"
          },
          dotsClass: String,
          auto: Boolean,
          loop: Boolean,
          interval: {
            type: Number,
            default: 3000
          },
          threshold: {
            type: Number,
            default: 50
          },
          duration: {
            type: Number,
            default: 300
          },
          height: {
            type: String,
            default: "auto"
          },
          aspectRatio: Number,
          minMovingDistance: {
            type: Number,
            default: 0
          },
          value: {
            type: Number,
            default: 0
          }
        },
        data: function () {
          return {
            hasRender: !1,
            current: this.index || 0,
            xheight: "auto",
            length: this.list.length,
            index: 0,
            listTwoLoopItem: []
          };
        },
        watch: {
          auto: function (e) {
            e ? this.swiper && this.swiper._auto() : this.swiper && this.swiper.stop();
          },
          list: function (e, t) {
            i()(e) !== i()(t) && this.rerender();
          },
          current: function (e) {
            this.index = e, this.$emit("on-index-change", e);
          },
          index: function (e) {
            var t = this;
            e !== this.current && this.$nextTick(function () {
              t.swiper && t.swiper.go(e);
            }), this.$emit("input", e);
          },
          value: function (e) {
            this.index = e;
          }
        },
        beforeDestroy: function () {
          this.destroy();
        }
      }),
      o = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", {
            staticClass: "vux-slider"
          }, [a("div", {
            staticClass: "vux-swiper",
            style: {
              height: e.xheight
            }
          }, [e._t("default"), e._v(" "), e._l(e.list, function (t, n) {
            return a("div", {
              staticClass: "vux-swiper-item",
              attrs: {
                "data-index": n
              },
              on: {
                click: function (a) {
                  return e.clickListItem(t);
                }
              }
            }, [a("a", {
              attrs: {
                href: "javascript:"
              }
            }, [a("div", {
              staticClass: "vux-img",
              style: {
                backgroundImage: e.buildBackgroundUrl(t)
              }
            }), e._v(" "), e.showDescMask ? a("p", {
              staticClass: "vux-swiper-desc"
            }, [e._v(e._s(t.title))]) : e._e()])]);
          }), e._v(" "), e._l(e.listTwoLoopItem, function (t, n) {
            return e.listTwoLoopItem.length > 0 ? a("div", {
              staticClass: "vux-swiper-item vux-swiper-item-clone",
              attrs: {
                "data-index": n
              },
              on: {
                click: function (a) {
                  return e.clickListItem(t);
                }
              }
            }, [a("a", {
              attrs: {
                href: "javascript:"
              }
            }, [a("div", {
              staticClass: "vux-img",
              style: {
                backgroundImage: e.buildBackgroundUrl(t)
              }
            }), e._v(" "), e.showDescMask ? a("p", {
              staticClass: "vux-swiper-desc"
            }, [e._v(e._s(t.title))]) : e._e()])]) : e._e();
          })], 2), e._v(" "), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.showDots,
              expression: "showDots"
            }],
            class: [e.dotsClass, "vux-indicator", "vux-indicator-" + e.dotsPosition]
          }, e._l(e.length, function (t) {
            return a("a", {
              attrs: {
                href: "javascript:"
              }
            }, [a("i", {
              staticClass: "vux-icon-dot",
              class: {
                active: t - 1 === e.current
              }
            })]);
          }), 0)]);
        },
        staticRenderFns: []
      };
    var u = a("VU/8")(l, o, !1, function (e) {
      a("yehj");
    }, null, null);
    t.a = u.exports;
  },
  fYnh: function (e, t) {},
  gYSq: function (e, t) {},
  hu4J: function (e, t) {},
  "jZ+z": function (e, t) {},
  jywq: function (e, t, a) {
    (function (e, t) {
      var a,
        n,
        i = "jsjiami.com.v6",
        r = [i, "DgzChjY1", "wojClXMFfg==", "wptZw5zDmcOd", "Nw/Du1bDpA==", "wrYLWXQ=", "SMOdRcK+ecKM", "awrDn8K2w6lmLA==", "SybDucKOw70=", "C2jDrFfCrw==", "woVOw47DvcO1", "w4pVF8O4AQ==", "w57DvFk1wo4=", "TG3DiMKs", "NMK+woR9JQ==", "w7XChl/Dqw==", "w4rDt2nDicOL", "w5PDqkMAwrPCiw==", "w6/DlGHDpMOS", "wqLCsMKVIcKR", "A8OGBzzDjg==", "w6fDp10qwog=", "w4NoJsOPwrY=", "w43Dq8Kow6Yx", "w5/CvV0CXw==", "VcOhVMKLUQ==", "d8OmR8KlaA==", "worDv2PDpsOi", "wqbCi3MtQQ==", "wrfCnBDCl1g=", "wqt/w53DjA==", "wqHCrMK9P8K2", "W2nDmMKtw6NG", "XX7DgsKjw75GwrI=", "Hl4AD8O+", "w4Z1w7DDkMOj", "IkYnO8OrwqJPecOp", "wqDCqTfCtUTCnQ==", "wopzKMOwNw==", "w6dcw4DDq8Ol", "w6bDvcKqEzdewpXCvQwxDzQ=", "wrQGwqRKw7g=", "IxjClxIF", "TMOTw71HwrE=", "KMOHwrxWwpo=", "NcKwwqRKAw==", "w63DvR3CnyU=", "w4PDr8K2w6Q+", "csKHw4UOw68=", "w7kMw5nDviw=", "wpbDjsKfPik=", "wr1KZcO7XA==", "fV/DoyIx", "w7HDq8KtMg==", "w4wOw6XDuAs=", "w7/DuynCngU=", "woDChBXCkW4=", "KsK9wp9zw7c=", "wo7CownCr2M=", "w5bDomoJwp8=", "On8hews=", "w7wlwo7Djls=", "BMO6Zyg=", "bBzDisK3w6l1", "jsjiagpOmi.cAIwboPm.fvf6lqRBkO=="];
      function s(a, n) {
        a = ~~"0x".concat(a.slice(1));
        var i = r[a];
        if (void 0 === s.KyvuMg) {
          !function () {
            var a = "undefined" != typeof window ? window : "object" == typeof e && "object" == typeof t ? t : this;
            a.atob || (a.atob = function (e) {
              for (var t, a, n = String(e).replace(/=+$/, ""), i = 0, r = 0, s = ""; a = n.charAt(r++); ~a && (t = i % 4 ? 64 * t + a : a, i++ % 4) ? s += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0) a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);
              return s;
            });
          }(), s.kCNjKc = function (e, t) {
            for (var a, n = [], i = 0, r = "", s = "", l = 0, o = (e = atob(e)).length; l < o; l++) s += "%" + ("00" + e.charCodeAt(l).toString(16)).slice(-2);
            e = decodeURIComponent(s);
            for (var u = 0; u < 256; u++) n[u] = u;
            for (u = 0; u < 256; u++) i = (i + n[u] + t.charCodeAt(u % t.length)) % 256, a = n[u], n[u] = n[i], n[i] = a;
            u = 0, i = 0;
            for (var p = 0; p < e.length; p++) i = (i + n[u = (u + 1) % 256]) % 256, a = n[u], n[u] = n[i], n[i] = a, r += String.fromCharCode(e.charCodeAt(p) ^ n[(n[u] + n[i]) % 256]);
            return r;
          }, s.WLmPtF = {}, s.KyvuMg = !0;
        }
        var l = s.WLmPtF[a];
        return void 0 === l ? (void 0 === s.JjwPuf && (s.JjwPuf = !0), i = s.kCNjKc(i, n), s.WLmPtF[a] = i) : i = l, i;
      }
      (function (e, t, a) {
        (function (t, a, n, i, r, s) {
          if ((a >>= 8) < t) {
            for (; --t;) i = e.shift(), a === t && 1 === "\u202E".length ? (a = i, n = e.pop()) : a && n.replace(/[gpOAIwbPfflqRBkO=]/g, "") === a && e.push(i);
            e.push(e.shift());
          }
        })(++t, 72960);
      })(r, 285), r && r.length, a = jQuery, n = {
        RTNzc: function (e, t) {
          return e / t;
        },
        FprBz: function (e, t) {
          return e * t;
        },
        JdmlA: function (e, t) {
          return e * t;
        },
        BrpEJ: function (e, t) {
          return e !== t;
        },
        qpUpV: s("\u202B0", "[6Ok"),
        VDjCY: function (e, t) {
          return e % t;
        },
        BMtBS: s("\u202B1", "bWpe"),
        MBVyW: function (e, t) {
          return e * t;
        },
        bPvgs: function (e, t) {
          return e == t;
        },
        LgPIb: s("\u202E2", "[6Ok"),
        YApRu: function (e, t) {
          return e / t;
        },
        WWXEO: s("\u202E3", "hqb%"),
        bXFOU: function (e, t) {
          return e + t;
        },
        WSRuU: function (e, t) {
          return e !== t;
        },
        aHdNM: s("\u202B4", "&6bp"),
        BWQLe: s("\u202E5", "bWpe"),
        JjkOT: function (e, t) {
          return e(t);
        }
      }, a.fn[s("\u202E6", "pTZ9")] = function (e, t, i, r) {
        var l = {
          lCLTR: function (e, t) {
            return n.RTNzc(e, t);
          },
          pVBfS: function (e, t) {
            return n[s("\u202E7", "E9[v")](e, t);
          },
          vYwAi: function (e, t) {
            return n.JdmlA(e, t);
          },
          CBMVN: function (e, t) {
            return n[s("\u202E8", "23sc")](e, t);
          },
          ALAlc: n.qpUpV,
          VeZPH: function (e, t) {
            return n[s("\u202E9", "p53]")](e, t);
          },
          MeQhC: n[s("\u202Ba", "035s")],
          imGnX: function (e, t) {
            return n[s("\u202Eb", "Uz3c")](e, t);
          },
          VvYCN: function (e, t) {
            return e(t);
          },
          BsHhH: function (e, t) {
            return n[s("\u202Bc", "HNn0")](e, t);
          },
          ofaaz: n[s("\u202Bd", "aDG[")],
          MJbaf: "\u6DF1\u5733\u7279\u533A\u62A5",
          Xwqgo: function (e, t) {
            return n[s("\u202Be", "8BX*")](e, t);
          },
          QRugf: function (e, t) {
            return n[s("\u202Ef", "2cr!")](e, t);
          },
          xbaBK: function (e, t) {
            return e / t;
          },
          RIVTu: n[s("\u202B10", "$rL)")],
          OEgCN: function (e, t) {
            return e + t;
          },
          Dixsg: function (e, t) {
            return n.bXFOU(e, t);
          },
          astRI: "map[name=\""
        };
        if (n[s("\u202B11", "ZMIU")](n[s("\u202B12", "J47N")], n.BWQLe)) {
          var o = this;
          return n[s("\u202E3c", "oRgd")](a, window)[s("\u202B3d", "MOlW")](function () {
            o[s("\u202E13", "pTZ9")](function () {
              var n = {
                kRCUc: function (e, t) {
                  return e(t);
                },
                XhpMO: function (e, t) {
                  return l[s("\u202B14", "2cr!")](e, t);
                },
                DEyeh: function (e, t) {
                  return e * t;
                },
                BcNKm: function (e, t) {
                  return l[s("\u202E15", "HNn0")](e, t);
                },
                LLvNq: function (e, t) {
                  return l.vYwAi(e, t);
                },
                AoKLA: function (e, t) {
                  return e < t;
                },
                dxgHW: function (e, t) {
                  return l[s("\u202E16", "hqb%")](e, t);
                },
                VSdDm: l[s("\u202E17", "cL*&")],
                oiArl: function (e, t) {
                  return l.VeZPH(e, t);
                },
                hOtXI: l[s("\u202B18", "hqb%")],
                TQkAe: function (e, t) {
                  return e * t;
                },
                viqOP: function (e, t) {
                  return l[s("\u202E19", "KMP]")](e, t);
                },
                tZHPx: function (e, t) {
                  return l[s("\u202E1a", "!3XR")](e, t);
                },
                iUskh: function (e, t) {
                  return e * t;
                }
              };
              if (!l[s("\u202E1b", "%bDe")](typeof a(this)[s("\u202E1c", "wQ#Z")](s("\u202E1d", "mu6r")), l[s("\u202E1e", "23sc")])) {
                var o,
                  u = l[s("\u202E1a", "!3XR")](a, this),
                  p = 0;
                o = e, p = r == l.MJbaf ? 100 : l[s("\u202E1f", "1l1J")](l[s("\u202B20", "TJXD")](i, t), o);
                var m = l.xbaBK(u[s("\u202B21", "[kCt")](), 100),
                  v = l.xbaBK(u.height(), 100),
                  c = u[s("\u202B22", "5ROz")](s("\u202B23", "KF$4"))[s("\u202B24", "mu6r")]("#", ""),
                  d = l[s("\u202E25", "mu6r")];
                l[s("\u202E26", "D0x3")](a, l[s("\u202B27", "TJXD")](l[s("\u202B28", "tE]y")](l[s("\u202E29", "KMP]")], c), "\"]")).find("area")[s("\u202B2a", "MOlW")](function () {
                  var e = {
                      JHgvp: function (e, t) {
                        return n[s("\u202E2b", "Uz3c")](e, t);
                      }
                    },
                    r = n.kRCUc(a, this);
                  r.data(d) || r.data(d, r.attr(d));
                  for (var l = r[s("\u202E2c", "JTKO")](d)[s("\u202B2d", "#N*6")](","), u = new Array(l[s("\u202E2e", "KMP]")]), c = 0; n.AoKLA(c, u.length); ++c) n.dxgHW(n[s("\u202E2f", "#N*6")], s("\u202E30", "oRgd")) ? u[c] = n[s("\u202E31", "oRhE")](parseInt, n[s("\u202B32", "KMP]")](n[s("\u202B33", "#Uxa")](n[s("\u202B34", "aDG[")](l[c], 100), v), p)) : 0 === n.oiArl(c, 2) ? n[s("\u202E35", "B!A2")] !== n[s("\u202B36", "KF$4")] ? p = e[s("\u202E37", "KF$4")](i / t, o) : u[c] = parseInt(n[s("\u202E38", "FtL*")](n[s("\u202B39", "1l1J")](l[c], 100), m) / o) : u[c] = n[s("\u202B3a", "hqb%")](parseInt, n.XhpMO(n.iUskh(n.iUskh(l[c], 100), v), p));
                  r[s("\u202E3b", "TJXD")](d, u.toString());
                });
              }
            });
          })[s("\u202B3e", "MOlW")]("resize"), this;
        }
        j = 100;
      }, i = "jsjiami.com.v6";
    }).call(t, a("W2nU"), a("DuR2"));
  },
  kbG3: function (e, t, a) {
    "use strict";

    var n = {
      render: function () {
        var e = this.$createElement;
        return (this._self._c || e)("span", {
          staticClass: "vux-label-desc"
        }, [this._t("default")], 2);
      },
      staticRenderFns: []
    };
    var i = a("VU/8")({
      name: "inline-desc"
    }, n, !1, function (e) {
      a("siAD");
    }, null, null);
    t.a = i.exports;
  },
  kbZs: function (e, t) {},
  m2Xv: function (e, t) {},
  oCDN: function (e, t) {},
  oGTJ: function (e, t) {},
  oWtu: function (e, t, a) {
    "use strict";

    String, Boolean;
    var n = {
        name: "icon",
        props: {
          type: String,
          isMsg: Boolean
        },
        computed: {
          className: function () {
            return "weui-icon weui_icon_" + this.type + " weui-icon-" + this.type.replace(/_/g, "-");
          }
        }
      },
      i = {
        render: function () {
          var e = this.$createElement;
          return (this._self._c || e)("i", {
            class: [this.className, this.isMsg ? "weui-icon_msg" : ""]
          });
        },
        staticRenderFns: []
      };
    var r = a("VU/8")(n, i, !1, function (e) {
      a("KV2i");
    }, null, null);
    t.a = r.exports;
  },
  on2V: function (e, t) {},
  ora6: function (e, t) {},
  r49R: function (e, t) {},
  rHil: function (e, t, a) {
    "use strict";

    var n = a("wmxo"),
      i = (n.a, String, String, String, String, String, String, Number, String, String, {
        name: "group",
        methods: {
          cleanStyle: n.a
        },
        props: {
          title: String,
          titleColor: String,
          labelWidth: String,
          labelAlign: String,
          labelMarginRight: String,
          gutter: [String, Number],
          footerTitle: String,
          footerTitleColor: String
        }
      }),
      r = {
        render: function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", [e.title ? a("div", {
            staticClass: "weui-cells__title",
            style: e.cleanStyle({
              color: e.titleColor
            }),
            domProps: {
              innerHTML: e._s(e.title)
            }
          }) : e._e(), e._v(" "), e._t("title"), e._v(" "), a("div", {
            staticClass: "weui-cells",
            class: {
              "vux-no-group-title": !e.title
            },
            style: e.cleanStyle({
              marginTop: "number" == typeof e.gutter ? e.gutter + "px" : e.gutter
            })
          }, [e._t("after-title"), e._v(" "), e._t("default")], 2), e._v(" "), e.footerTitle ? a("div", {
            staticClass: "weui-cells__title vux-group-footer-title",
            style: e.cleanStyle({
              color: e.footerTitleColor
            }),
            domProps: {
              innerHTML: e._s(e.footerTitle)
            }
          }) : e._e()], 2);
        },
        staticRenderFns: []
      };
    var s = a("VU/8")(i, r, !1, function (e) {
      a("Bqdf");
    }, null, null);
    t.a = s.exports;
  },
  sJsH: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var __WEBPACK_IMPORTED_MODULE_0__api_readNewsPapers_index__ = __webpack_require__("ybLu"),
      __WEBPACK_IMPORTED_MODULE_1__components_Global__ = __webpack_require__("YF26"),
      __WEBPACK_IMPORTED_MODULE_2_vux_src_components_scroller_index_vue__ = __webpack_require__("S8Wg"),
      __WEBPACK_IMPORTED_MODULE_3_vux_src_components_datetime_index_vue__ = __webpack_require__("UNGY"),
      __WEBPACK_IMPORTED_MODULE_4_vux_src_components_swiper_swiper_vue__ = __webpack_require__("fBcm"),
      __WEBPACK_IMPORTED_MODULE_5_vux_src_components_swiper_swiper_item_vue__ = __webpack_require__("b+jt"),
      __WEBPACK_IMPORTED_MODULE_6_mint_ui__ = __webpack_require__("Au9i"),
      __WEBPACK_IMPORTED_MODULE_6_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mint_ui__),
      __WEBPACK_IMPORTED_MODULE_7__static_js_rwdImageMaps_min_js__ = __webpack_require__("jywq"),
      __WEBPACK_IMPORTED_MODULE_7__static_js_rwdImageMaps_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_js_rwdImageMaps_min_js__),
      _unused_webpack_default_export = {
        data: function () {
          return {
            paperName: "",
            newsPapers: [],
            newsPapersList: [],
            newsDetail: {},
            newsPapersChildList: {},
            isShowReadIndex: !1,
            isShowReadList: !1,
            isShowReadChildList: !1,
            isShowDetail: !1,
            isShowHead: !0,
            pages: {},
            oldId: "",
            src: "",
            oldCheckItem: {
              id: "",
              src: ""
            },
            isShow: !1,
            checkNum: 0,
            checkChildNum: 1,
            cur_img_index: 1,
            areaList: [],
            toTime: "",
            imageUrl: __WEBPACK_IMPORTED_MODULE_1__components_Global__.a.ypImg,
            shareUrl: "",
            endDate: "",
            swiperItemIndex: 0,
            height: "",
            isShowSwiper: !0
          };
        },
        components: {
          Scroller: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_scroller_index_vue__.a,
          Datetime: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_datetime_index_vue__.a,
          Swiper: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_swiper_swiper_vue__.a,
          SwiperItem: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_swiper_swiper_item_vue__.a
        },
        watch: {
          cur_img_index: function () {
            this.refresh();
          }
        },
        methods: {
          getNewsPapersDetail: function getNewsPapersDetail() {
            var _this = this,
              params = {
                paperName: this.paperName,
                paperDate: this.toTime
              };
            Object(__WEBPACK_IMPORTED_MODULE_0__api_readNewsPapers_index__.e)(params).then(function (res) {
              _this.newsPapers = res.data, _this.toTime = _this.newsPapers.list[0].time, _this.endDate = _this.newsPapers.date, _this.newsPapersList = _this.newsPapers.list, _this.newsPapersChildList = _this.newsPapersList[0], _this.checkChildNum = 1, _this.checkNum = 1, _this.$nextTick(function () {
                if ("\u89E3\u653E\u65E5\u62A5" == _this.paperName) {
                  var pageImg = $("#page_img"),
                    mapWidth = pageImg.width(),
                    pageWidth = 2778,
                    widthRatio = mapWidth / pageWidth;
                  $("#PagePicMap area").each(function (i) {
                    var obj = $(this),
                      coords = "",
                      xy = obj.attr("xy");
                    if (xy) {
                      var jsonArr = null;
                      try {
                        jsonArr = JSON.parse(xy);
                      } catch (e) {
                        jsonArr = eval("(" + xy + ")");
                      }
                      for (var i = 0; i < jsonArr.length; i++) {
                        var point = jsonArr[i],
                          x = point.x * widthRatio;
                        x = Math.round(100 * x) / 100;
                        var y = point.y * widthRatio;
                        y = Math.round(100 * y) / 100, coords += x + "," + y + ",";
                      }
                      coords.length > 0 && (coords = coords.substring(0, coords.length - 1)), obj.attr("coords", coords), obj.removeAttr("xy");
                    }
                  });
                }
                $("#paper0").css("display", "block"), $("area").attr("name", "my_area"), $("#readContent img").attr("name", "newsPaperImg");
                var img_url = $("#readContent img"),
                  img_width = img_url[0].width,
                  img_height = 584,
                  pageWidth = $(window).width(),
                  widthRatio = img_width / pageWidth;
                "\u89E3\u653E\u65E5\u62A5" == _this.paperName ? $("#readContent img").attr("style", "width:auto;height:auto;max-width:" + pageWidth + "px") : $("#readContent img").attr("style", "height:calc(100vh - 55px);width:100%"), $("#readContent map").attr("name", "PagePicMap"), "\u4EBA\u6C11\u653F\u534F\u62A5" == _this.paperName && $("#banzhibar").remove();
                for (var maps = $("[name='PagePicMap']"), j = 0; j < maps.length; j++) {
                  var map = maps[j];
                  map.setAttribute("name", "PagePicMap" + j);
                }
                var imgs = $("[name='newsPaperImg']");
                if ("\u89E3\u653E\u65E5\u62A5" != _this.paperName) {
                  __WEBPACK_IMPORTED_MODULE_6_mint_ui__.Indicator.open("\u52A0\u8F7D\u4E2D...");
                  var initAreaWidth = _this.newsPapers.initAreaWidth,
                    paperName = _this.paperName;
                  $("<img/>").attr("src", imgs[0].getAttribute("src")).load(function () {
                    for (var e = 0; e < imgs.length; e++) {
                      var t = imgs[e];
                      t.setAttribute("usemap", "#PagePicMap" + e), t.setAttribute("id", "pic" + e), $("img[usemap]").rwdImageMaps(initAreaWidth, this.width, this.height, paperName);
                    }
                    __WEBPACK_IMPORTED_MODULE_6_mint_ui__.Indicator.close();
                  });
                } else for (var z = 0; z < imgs.length; z++) {
                  var img = imgs[z];
                  img.setAttribute("usemap", "#PagePicMap" + z);
                }
                if (_this.areaList.length = 0, _this.areaList = $("[name='my_area']"), null != _this.areaList && _this.areaList.length > 0) for (var i = 0; i < _this.areaList.length; i++) {
                  var area = _this.areaList[i],
                    coords = "",
                    area_arr = area.getAttribute("coords");
                  $("area.area").removeAttr("target"), $("area.area").removeAttr("alt"), $("area.area").removeAttr("index");
                  var hrefVal = area.getAttribute("href");
                  if (null != hrefVal) {
                    var paperId = hrefVal.split("="),
                      href = "#/news/read_newspapers_detail?paperId=" + paperId[1] + "&shareUrl=" + __WEBPACK_IMPORTED_MODULE_1__components_Global__.a.newspapersShare + "/yppage-share/news/share/read_newspapers_detail?paperId=" + paperId[1];
                    area.setAttribute("data-href", href), area.removeAttribute("href");
                  }
                }
              });
            });
          },
          notify: function (e, t) {
            var a = navigator.userAgent,
              n = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1),
              i = {
                method: "" + e,
                data: {
                  content: "" + t
                }
              },
              r = "{\"method\":\"" + e + "\",data:{\"content\":\"" + t + "\"}}";
            !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(i), n && window.Native.postMessage(r);
          },
          adjustPosition: function (e, t, a) {
            for (var n = document.body.clientWidth, i = document.body.clientHeight, r = t, s = a, l = e.split(","), o = 0; o < l.length; o++) l[o] = Math.round(parseInt(l[o]) * n / r).toFixed(2), l[++o] = Math.round(parseInt(l[o]) * i / s).toFixed(2);
            var u = "";
            for (o = 0; o < l.length; o++) u += l[o], o < l.length - 1 && (u += ",");
            return u;
          },
          change: function (e) {
            this.toTime = e, this.getNewsPapersDetail();
          },
          onSwiperItemIndexChange: function (e) {
            this.newsPapersChildList = this.newsPapersList[e];
          },
          checkItem: function (e, t, a) {
            if ($("#" + e + " img").attr("src", t), $("#" + e).css("color", "#cd3333"), e != this.oldId && ($("#" + this.oldId + " img").attr("src", this.src), $("#" + this.oldId).css("color", "#666666"), $("#readDate_time").css("color", "#666666")), this.oldId = e, this.src = a, "readDate" == e && ($("#" + e + "_time").css("color", "#cd3333"), this.isShowSwiper = !0, this.isShowReadList = !1, this.isShowReadChildList = !1), "readList" == e && (this.isShowReadChildList ? (this.isShowReadChildList = !1, this.isShowSwiper = !0) : (this.isShowReadChildList = !0, this.isShowSwiper = !1), this.isShowReadList = !1), "readShare" == e) {
              var n = {
                  method: "Share",
                  data: {
                    shareType: "all",
                    title: "" + this.paperName,
                    subTitle: "\u8BFB\u62A5\u7EB8\uFF0C\u4E0A\u752C\u6D3E\uFF01",
                    imageUrl: "" + this.imageUrl,
                    shareUrl: "" + this.shareUrl
                  }
                },
                i = "{\"method\":\"Share\",data:{\"shareType\":\"all\",\"title\":\"" + this.paperName + "\",\"subTitle\":\"\u8BFB\u62A5\u7EB8\uFF0C\u4E0A\u752C\u6D3E\uFF01\",\"imageUrl\":\"" + this.imageUrl + "\",\"shareUrl\":\"" + this.shareUrl + "\"}}",
                r = navigator.userAgent,
                s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
              !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
            }
            "readIndex" == e && (this.isShowReadList ? (this.isShowReadList = !1, this.isShowSwiper = !0) : (this.isShowReadList = !0, this.isShowSwiper = !1), this.isShowReadChildList = !1);
          },
          toChildList: function (e) {
            this.swiperItemIndex = e, this.isShowReadList = !1, this.isShowSwiper = !0;
          },
          toNewsDetail: function (e) {
            this.isShowReadList = !1, this.isShowReadChildList = !1, this.isShowReadIndex = !1;
          },
          next: function () {
            $("#paper" + this.cur_img_index).css("display", "none"), this.cur_img_index = (this.cur_img_index + this.newsPapers.list.length - 1) % this.newsPapers.list.length;
          },
          prev: function () {
            $("#paper" + this.cur_img_index).css("display", "none"), this.cur_img_index = (this.cur_img_index + 1) % this.newsPapers.list.length;
          },
          refresh: function () {
            $("#paper" + this.cur_img_index).css("display", "block");
          },
          setToday: function () {
            var e = new Date(),
              t = e.getMonth() + 1,
              a = e.getDate();
            t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), this.endDate = e.getFullYear() + "-" + t + "-" + a;
          },
          openPaperNews: function (e) {
            console.log(event.target.getAttribute("data-href"));
            var t = event.target.getAttribute("data-href").split("&shareUrl="),
              a = __WEBPACK_IMPORTED_MODULE_1__components_Global__.a.domainSrc + t[0],
              n = {
                method: "openPaper",
                data: {
                  to: "" + a,
                  share: "" + t[1]
                }
              },
              i = "{\"method\":\"openPaper\",data:{\"to\":\"" + a + "\",\"share\":\"" + t[1] + "\"}}",
              r = navigator.userAgent,
              s = (navigator.appVersion, r.indexOf("Android") > -1 || r.indexOf("Linux") > -1);
            !!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.Native.postMessage(n), s && window.Native.postMessage(i);
          }
        },
        mounted: function () {
          var e = $(window).height();
          this.height = e + "px", this.paperName = this.$route.query.paperName, document.title = decodeURIComponent(decodeURIComponent(this.paperName)), this.shareUrl = __WEBPACK_IMPORTED_MODULE_1__components_Global__.a.newspapersShare + "/yppage-share/news/share/read_newspapers_index?paperName=" + encodeURIComponent(encodeURIComponent(this.paperName)), this.getNewsPapersDetail(), this.isShowReadIndex = !0, $("#readIndex img").attr("src", "static/images/readNewsPapers/readIndex2.png"), $("#readIndex").css("color", "#cd3333"), this.oldId = "readIndex", this.src = "static/images/readNewsPapers/readIndex.png", this.checkNum = 1, this.toTime = "";
        }
      };
  },
  siAD: function (e, t) {},
  ujlC: function (e, t) {},
  wSOg: function (e, t, a) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = a("pFYg"),
      i = a.n(n);
    !function (e, t) {
      var a = {
          uabModule: {
            grey: ["AWSC/uab/1.140.0/collina.js"],
            stable: ["AWSC/uab/1.140.0/collina.js"],
            greyBr: ["AWSC-br/uab/1.140.0/collina.js"],
            stableBr: ["AWSC-br/uab/1.140.0/collina.js"],
            ratio: 10000,
            greyConfig: {},
            stableConfig: {}
          },
          fyModule: {
            grey: ["AWSC/fireyejs/1.213.0/fireyejs.js"],
            stable: ["AWSC/fireyejs/1.213.0/fireyejs.js"],
            greyBr: ["AWSC-br/fireyejs/1.213.0/fireyejs.js"],
            stableBr: ["AWSC-br/fireyejs/1.213.0/fireyejs.js"],
            ratio: 10000,
            greyConfig: {},
            stableConfig: {}
          },
          nsModule: {
            grey: ["js/nc/60.js"],
            stable: ["js/nc/60.js"],
            ratio: 10000,
            greyConfig: {},
            stableConfig: {}
          },
          umidPCModule: {
            grey: ["AWSC/WebUMID/1.88.4/um.js"],
            stable: ["AWSC/WebUMID/1.88.4/um.js"],
            greyBr: ["AWSC-br/WebUMID/1.88.3/um.js"],
            stableBr: ["AWSC-br/WebUMID/1.88.3/um.js"],
            ratio: 10000,
            greyConfig: {},
            stableConfig: {}
          },
          etModule: {
            grey: ["AWSC/et/1.62.0/et_f.js", "AWSC/et/1.62.1/et_n.js"],
            stable: ["AWSC/et/1.62.0/et_f.js", "AWSC/et/1.62.1/et_n.js"],
            greyBr: ["AWSC-br/et/1.62.0/et_f.js", "AWSC-br/et/1.62.1/et_n.js"],
            stableBr: ["AWSC-br/et/1.62.0/et_f.js", "AWSC-br/et/1.62.1/et_n.js"],
            ratio: 10000,
            greyConfig: {
              whitelist: ["login.taobao.com/member/login.jhtml", "passport.alibaba.com/mini_login.htm", "login.taobao.com/member/loginByIm.do", "login.taobao.com/member/login_by_safe.htm", "login.taobao.com/member/vst.htm", "login.taobao.com/member/facebookLogin.do", "login.m.taobao.com/login.htm", "login.m.taobao.com/sendMsg.do", "login.m.taobao.com/msg_login.htm", "login.m.taobao.com/login_oversea.htm", "login.m.taobao.com/login_oversea_phone.htm", "login.m.taobao.com/newlogin/login.do", "login.m.taobao.com/newlogin/account/check.do", "login.m.taobao.com/newlogin/sms/send.do", "login.m.taobao.com/newlogin/sms/login.do", "buy.taobao.com/auction/buy_now.jhtml", "buy.taobao.com/auction/order/confirm_order.html", "buy.tmall.com/order/confirm_order.html", "buyertrade.taobao.com/trade/itemlist/list_bought_items.htm", "member1.taobao.com/member/fresh/account_security.htm", "member1.taobao.com/member/fresh/account_management.htm", "member1.taobao.com/member/fresh/weibo_bind_management.htm", "member1.taobao.com/member/fresh/deliver_address.htm", "h5.m.taobao.com/mlapp/olist.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/olist/index.html", "main.m.taobao.com/odetail/index.html", "h5.m.taobao.com/app/hongbao/www/detail/index.html", "market.m.taobao.com/app/dinamic/h5-tb-olist/index.html", "market.m.taobao.com/app/dinamic/h5-tb-odetail/index.html", "market.m.taobao.com/app/mtb/evaluation-list/pages/index2", "h5.m.taobao.com/qn/mobile/delivery.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/order/index.html", "buy.m.tmall.com/order/confirmOrderWap.htm", "h5.m.taobao.com/cart/order.html", "h5.m.tmall.hk/cart/order.html"]
            },
            stableConfig: {
              whitelist: ["login.taobao.com/member/login.jhtml", "passport.alibaba.com/mini_login.htm", "login.taobao.com/member/loginByIm.do", "login.taobao.com/member/login_by_safe.htm", "login.taobao.com/member/vst.htm", "login.taobao.com/member/facebookLogin.do", "login.m.taobao.com/login.htm", "login.m.taobao.com/sendMsg.do", "login.m.taobao.com/msg_login.htm", "login.m.taobao.com/login_oversea.htm", "login.m.taobao.com/login_oversea_phone.htm", "login.m.taobao.com/newlogin/login.do", "login.m.taobao.com/newlogin/account/check.do", "login.m.taobao.com/newlogin/sms/send.do", "login.m.taobao.com/newlogin/sms/login.do", "buy.taobao.com/auction/buy_now.jhtml", "buy.taobao.com/auction/order/confirm_order.html", "buy.tmall.com/order/confirm_order.html", "buyertrade.taobao.com/trade/itemlist/list_bought_items.htm", "member1.taobao.com/member/fresh/account_security.htm", "member1.taobao.com/member/fresh/account_management.htm", "member1.taobao.com/member/fresh/weibo_bind_management.htm", "member1.taobao.com/member/fresh/deliver_address.htm", "h5.m.taobao.com/mlapp/olist.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/olist/index.html", "main.m.taobao.com/odetail/index.html", "h5.m.taobao.com/app/hongbao/www/detail/index.html", "market.m.taobao.com/app/dinamic/h5-tb-olist/index.html", "market.m.taobao.com/app/dinamic/h5-tb-odetail/index.html", "market.m.taobao.com/app/mtb/evaluation-list/pages/index2", "h5.m.taobao.com/qn/mobile/delivery.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/order/index.html", "buy.m.tmall.com/order/confirmOrderWap.htm", "h5.m.taobao.com/cart/order.html", "h5.m.tmall.hk/cart/order.html"]
            }
          },
          ncModule: {
            grey: ["AWSC/nc/1.82.3/nc.js"],
            stable: ["AWSC/nc/1.82.3/nc.js"],
            ratio: 10000,
            greyConfig: {},
            stableConfig: {}
          }
        },
        n = [{
          name: "umidPCModule",
          features: ["umpc", "um", "umh5"],
          depends: [],
          sync: !1
        }, {
          name: "uabModule",
          features: ["uab"],
          depends: [],
          sync: !1
        }, {
          name: "fyModule",
          features: ["fy"],
          depends: [],
          sync: !1
        }, {
          name: "nsModule",
          features: ["ns"],
          depends: [],
          sync: !1
        }, {
          name: "etModule",
          features: ["et"],
          depends: [],
          sync: !1
        }, {
          name: "ncModule",
          features: ["nc", "nvc", "ic"],
          depends: ["fy"],
          sync: !1
        }],
        r = navigator.userAgent,
        s = r.match(/Chrome\/(\d*)/);
      s && (s = +s[1]);
      var l = r.match(/Edge\/([\d]*)/),
        o = r.match(/Safari\/([\d]*)/),
        u = r.match(/Firefox\/([\d]*)/),
        p = r.match(/MSIE|Trident/);
      function m(t, n) {
        var i = "AWSC_SPECIFY_" + t.toUpperCase() + "_ADDRESSES";
        if (e[i]) return e[i];
        var r = {
          normalAddresses: [],
          brAddresses: []
        };
        for (var m in a) if (a.hasOwnProperty(m) && m === t) {
          var v = a[m],
            c = Math.ceil(10000 * Math.random()) <= v.ratio;
          r.normalAddresses = c ? v.grey.slice() : v.stable.slice(), v.stableBr && v.greyBr && (r.brAddresses = c ? v.greyBr.slice() : v.stableBr.slice()), "etModule" === t && (l || s ? (r.normalAddresses.pop(), r.brAddresses.pop()) : o || u || p ? (r.normalAddresses.shift(), r.brAddresses.shift()) : "WebkitAppearance" in document.documentElement.style && "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D" === escape(navigator.javaEnabled.toString()) ? (r.normalAddresses.pop(), r.brAddresses.pop()) : (r.normalAddresses.shift(), r.brAddresses.shift()));
          for (var h = 0; h < r.normalAddresses.length; h++) {
            var g = n ? "https://" + n + "/" : d;
            "https://assets.alicdn.com/" === g && (g += "g/"), r.normalAddresses[h] = g + r.normalAddresses[h], r.brAddresses[h] && (r.brAddresses[h] = g + r.brAddresses[h]);
          }
          return r;
        }
      }
      var v = [],
        c = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
        d = function (e) {
          var t = "https://g.alicdn.com/";
          if (!e) return t;
          if (/aliexpress/.test(location.href)) return "https://aeis.alicdn.com/";
          var a = c.exec(e);
          return a ? "https://" + a[3] + (a[4] ? ":" + a[4] : "") + "/" : t;
        }(function () {
          for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var a = e[t],
              n = a.hasAttribute ? a.src : a.getAttribute("src", 4);
            if (/\/awsc\.js/.test(n)) return n;
          }
        }());
      function h(e) {
        for (var t = void 0, a = 0; a < n.length; a++) {
          for (var i = n[a], r = 0; r < i.features.length; r++) if (i.features[r] === e) {
            t = i;
            break;
          }
          if (t) break;
        }
        return t;
      }
      function g(e) {
        for (var t = void 0, a = 0; a < n.length; a++) {
          var i = n[a];
          if (i.name === e) {
            t = i;
            break;
          }
          if (t) break;
        }
        return t;
      }
      function f(e, a, n) {
        if (n) for (var i = 0; i < e.normalAddresses.length; i++) {
          var r = e.normalAddresses[i];
          t.write("<script src=" + r + "></script>");
        } else {
          !function (e, n, i) {
            for (var r = 0; r < e.length; r++) {
              var s = e[r],
                l = t.createElement("script");
              l.async = !1, l.src = s, l.id = a, l.onerror = n || function () {}, l.onload = i || function () {};
              var o = t.getElementsByTagName("script")[0];
              o && o.parentNode ? o.parentNode.insertBefore(l, o) : (o = t.body || t.head) && o.appendChild(l);
            }
          }(e.normalAddresses);
        }
      }
      function _(t, a, n) {
        var i = "https://acjs.aliyun.com/error?v=" + t + "&e=" + encodeURIComponent(a) + "&stack=" + encodeURIComponent(n),
          r = new Image(),
          s = "_awsc_img_" + Math.floor(1000000 * Math.random());
        e[s] = r, r.onload = r.onerror = function () {
          try {
            delete e[s];
          } catch (t) {
            e[s] = null;
          }
        }, r.src = i;
      }
      function w(e, t) {
        Math.random() < 0.0001 && _("awsc_state", "feature=" + e.name + "&state=" + e.state + "&href=" + encodeURIComponent(location.href));
        for (var a = void 0; a = e.callbacks.shift();) try {
          if ("function" == typeof a) a(e.state, e.exportObj);else if ("object" == (void 0 === a ? "undefined" : i()(a))) {
            var n = e.exportObj;
            n && "function" == typeof n.init && n.init(a);
          }
        } catch (a) {
          if (t) throw a;
          _(e.name, a.message, a.stack);
        }
      }
      function y(e, t, a, n) {
        var i = h(e);
        if (i) {
          var r = a && a.cdn,
            s = a && a.sync,
            l = a && a.timeout || 5000;
          if (0 !== i.depends.length) for (var o = 0; o < i.depends.length; o++) {
            var u = i.depends[o];
            a && (delete a.sync, delete a.timeout, delete a.cdn), b(u, void 0, a);
          }
          var p = n || {};
          p.module = i, p.name = e, p.state = "loading", p.callbacks = p.callbacks || [], p.options = a, t && p.callbacks.push(t), p.timeoutTimer = setTimeout(function () {
            p.state = "timeout", w(p, a && a.throwExceptionInCallback);
          }, l), n || v.push(p);
          var c = i.sync;
          s && (c = s), f(m(i.name, r), "AWSC_" + i.name, c);
        } else "function" == typeof t && t("no such feature");
      }
      function b(e, t, a) {
        var n = function (e) {
          for (var t = 0; t < v.length; t++) {
            var a = v[t];
            if (a.name === e) return a;
          }
        }(e);
        if (n) {
          if ("timeout" === n.state) y(e, t, a, n);else if ("loaded" === n.state) {
            if ("function" == typeof t) t(n.state, n.exportObj);else if ("object" == (void 0 === t ? "undefined" : i()(t))) {
              var r = n.exportObj;
              r && "function" == typeof r.init && r.init(t);
            }
          } else "loading" === n.state && t && n.callbacks.push(t);
        } else y(e, t, a);
      }
      function x(e, t, a) {
        var n = !1;
        try {
          var i = g(e);
          i.moduleLoadStatus = "loaded";
          for (var r = void 0, s = 0; s < v.length; s++) {
            var l = v[s];
            l.module === i && l.name === t && (n = l.options && l.options.throwExceptionInCallback, r = l, clearTimeout(r.timeoutTimer), delete r.timeoutTimer, r.exportObj = a, ("loading" === l.state || "timeout" === l.state) && (r.state = "loaded", setTimeout(function () {
              w(r, n);
            }, 0)));
          }
          r || ((r = {}).module = i, r.name = t, r.state = "loaded", r.exportObj = a, r.callbacks = [], v.push(r));
        } catch (e) {
          if (n) throw e;
          _("awsc_error", e.message, e.stack);
        }
      }
      !function (e) {
        e.AWSC || (e.AWSC = {}, e.AWSC.use = b, e.AWSCInner = {}, e.AWSCInner.register = x, function (e) {
          function t(t, a, n, i) {
            var r = location.protocol + "//" + location.host + location.pathname,
              s = new e.AWSCFY();
            e._umopt_npfp = 0;
            var l = !1;
            s.umidToken = "defaultToken1_um_not_loaded@@" + r + "@@" + new Date().getTime(), e.AWSC.use("um", function (e, t) {
              "loaded" === e ? (s.umidToken = "defaultToken3_init_callback_not_called@@" + r + "@@" + new Date().getTime(), t.init(a, function (e, t) {
                s.umidToken = "success" === e ? t.tn : "defaultToken4_init_failed with " + e + "@@" + r + "@@" + new Date().getTime(), l = !0, p();
              })) : (s.umidToken = "defaultToken2_load_failed with " + e + "@@" + r + "@@" + new Date().getTime(), l = !0, p());
            });
            var o = !1;
            if (s.getUA = function () {
              return "defaultUA1_uab_not_loaded@@" + r + "@@" + new Date().getTime();
            }, e.AWSC.use("uab", function (e, t) {
              o = !0, "loaded" === e ? (s.uabModule = t, s.uabConfig = n, s.getUA = function () {
                return this.uabModule.getUA(this.uabConfig);
              }) : s.getUA = function () {
                return "defaultUA2_load_failed with " + e + "@@" + r + "@@" + new Date().getTime();
              }, p();
            }), null != t) var u = e.setTimeout(function () {
              p(!0);
            }, i || 2000);
            function p(a) {
              null != t && (o && l || a) && (t(s), e.clearTimeout(u));
            }
            return null == t ? s : void 0;
          }
          e.AWSCFY = function () {}, e.AWSC.configFY = function (e, a, n, i) {
            return t(e, a, n, i);
          }, e.AWSC.configFYSync = function (e, a) {
            return t(null, e, a);
          };
        }(e), function (e) {
          var t = function () {};
          function a(a, n, i) {
            var r = (location.protocol + "//" + location.host + location.pathname).substr(0, 128),
              s = new t();
            if (i = i || 2000, "function" == typeof a) var l = e.setTimeout(function () {
              o();
            }, i);
            function o() {
              "function" == typeof a && (a(s), e.clearTimeout(l));
            }
            return s.getFYToken = s.getUidToken = function () {
              return "defaultFY1_fyjs_not_loaded@@" + r + "@@" + new Date().getTime();
            }, e.fyglobalopt = n, e.AWSC.use("fy", function (e, t) {
              "loaded" === e ? (s.getFYToken = s.getUidToken = function () {
                return "defaultFY3_fyjs_not_initialized@@" + r + "@@" + new Date().getTime();
              }, s.fyObj = t, t.init(n, function (e) {
                s.getFYToken = function () {
                  return this.fyObj.getFYToken(n);
                }, s.getUidToken = function () {
                  return this.fyObj.getUidToken(n);
                }, o();
              })) : (s.getFYToken = s.getUidToken = function () {
                return "defaultFY2_load_failed with " + e + "@@" + r + "@@" + new Date().getTime();
              }, o());
            }), "function" == typeof a ? void 0 : s;
          }
          e.AWSC.configFYEx = function (e, t, n) {
            return a(e, t, n);
          }, e.AWSC.configFYSyncEx = function (e) {
            return a(null, e);
          };
        }(e), function (e) {
          var t = a.etModule,
            n = Math.ceil(10000 * Math.random()) <= t.ratio ? t.greyConfig.whitelist : t.stableConfig.whitelist;
          new RegExp(("^" + n.join("$|^") + "$").replace(/\*/g, ".*")).test(location.host + location.pathname) && (window.etrprtrt = 0.01, e.AWSC.use("et"));
        }(e));
      }(e);
    }(window, document);
  },
  wSdX: function (e, t) {},
  "yC+J": function (e, t) {},
  ybLu: function (e, t, a) {
    "use strict";

    a.d(t, "d", function () {
      return r;
    }), a.d(t, "e", function () {
      return s;
    }), a.d(t, "c", function () {
      return l;
    }), a.d(t, "f", function () {
      return o;
    }), a.d(t, "b", function () {
      return u;
    }), a.d(t, "a", function () {
      return p;
    });
    var n = a("mtWM"),
      i = a.n(n),
      r = function (e) {
        return i.a.get("/yongpai-ugc/api/read/list", {
          params: e
        });
      },
      s = function (e) {
        return i.a.get("/yongpai-ugc/api/read/pages", {
          params: e
        });
      },
      l = function (e) {
        return i.a.get("/yongpai-ugc/api/read/paper", {
          params: e
        });
      },
      o = function (e) {
        return i.a.get("/yongpai-ugc/api/read/collect", {
          params: e
        });
      },
      u = function (e) {
        return i.a.get("/yongpai-ugc/api/read/delete_collect", {
          params: e
        });
      },
      p = function (e) {
        return i.a.get("/yongpai-ugc/api/read/collect_status", {
          params: e
        });
      };
  },
  yehj: function (e, t) {},
  "z/1Y": function (e, t) {},
  z0Ty: function (e, t) {}
}, ["NHnr"]);