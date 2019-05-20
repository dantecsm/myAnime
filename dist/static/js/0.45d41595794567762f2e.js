webpackJsonp([0],{"2QKD":function(t,e){},"2Sx8":function(t,e,a){"use strict";var s=a("p+dL"),i="select content, include author from CommentsDb where owner=pointer('ArticleDb','{{articleId}}') limit {{page}}, 8 order by createdAt desc",n="update ArticleDb set comments = {{num}} where objectId = '{{articleId}}'",r="insert into CommentsDb(owner, author, content) values(pointer('ArticleDb', '{{articleId}}'), pointer('_User', '{{authorId}}'), '{{content}}')",o="select content, include author, include owner from CommentsDb limit 8 order by createdAt desc",c="select count(*) from CommentsDb where owner=pointer('ArticleDb','{{articleId}}')";e.a={getComments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},e=t.articleId,a=t.page,n=void 0===a?1:a;return n=8*(n-1),Object(s.a)(i,{articleId:e,page:n},"获取评论列表失败")},setCommentsNum:function(t){var e=t.articleId,a=t.num;return Object(s.a)(n,{articleId:e,num:a},"更新评论数失败")},addComment:function(t){var e=t.articleId,a=t.authorId,i=t.content;return Object(s.a)(r,{articleId:e,authorId:a,content:i},"添加评论失败")},getNewestComments:function(){return Object(s.a)(o,{},"获取最新评论失败")},getCommentsTotal:function(t){var e=t.articleId;return Object(s.a)(c,{articleId:e},"获取评论数失败")}}},"6gQe":function(t,e,a){"use strict";e.a={Guide:"5ce6ade3f884af0033ee50fd",Unzip:"5ce6ade3f884af0033ee50fe",Message:"5ce6ade3f884af0033ee50ff"}},"GY+S":function(t,e){},I0a2:function(t,e){},I389:function(t,e){},Iw35:function(t,e){},Mp08:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("2Sx8"),r=a("viA7"),o=a("NYxO"),c=a("zL8q"),l=a("6gQe"),d="https://i.bmp.ovh/imgs/2019/05/2660bf1d3c6530f7.jpg",u={name:"Comments",data:function(){return{id:"",page:1,total:0,comments:[],loading:!0}},watch:{$route:{handler:function(t,e){this.id=this.getId(t),this.getComments(),this.setTotal()},deep:!0,immediate:!0}},computed:i()({},Object(o.c)(["isLogin","userId"])),methods:{getId:function(t){return t?["Guide","Unzip","Message"].includes(t.name)?l.a[t.name]:t.params.blogId:""},getComments:function(){var t=this;this.loading=!0,n.a.getComments({articleId:this.id,page:this.page}).then(function(e){t.comments=e.results.map(function(t){var e=t.get("author").get("avatar");return e=e&&e.url()||d,i()({id:t.id,createdAt:t.createdAt,avatar:e},t.attributes)}),t.loading=!1})},setTotal:function(){var t=this;n.a.getCommentsTotal({articleId:this.id}).then(function(e){t.total=e.count,r.a.setArticleComments({id:t.id,num:t.total}),r.a.setArticleViews({id:t.id})})},onSubmit:function(t){var e=this;if(this.isLogin){var a=this.userId,s=t.currentTarget.querySelector("[name='comment']").value;n.a.addComment({articleId:this.id,authorId:a,content:s}).then(function(t){e.comments.push({author:AV.User.current(),avatar:AV.User.current().get("avatar").get("url")||d,content:s,createdAt:new Date})})}else c.Message.error("请登录后再发表评论")},onPageChange:function(t){this.page=t,this.getComments(),this.$router.push({query:{cpage:t}})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Comments"},[a("h3",{staticClass:"commentTitle"},[a("i",{staticClass:"el-icon-s-comment"}),t._v(" "+t._s(t.total)+" 条评论")]),t._v(" "),t.loading?a("div",{staticClass:"commentsLoading"},[a("i",{staticClass:"el-icon-loading"})]):t._e(),t._v(" "),t.loading?t._e():a("ul",{staticClass:"commentList"},t._l(t.comments,function(e){return a("li",{staticClass:"comment-item",attrs:{id:e.id,"data-aos":"zoom-out-right"}},[a("article",{staticClass:"commentBody"},[a("footer",{staticClass:"commentMeta"},[a("div",{staticClass:"commentAuthor"},[a("img",{staticClass:"avatar",attrs:{src:e.avatar}}),t._v(" "),a("b",{staticClass:"fn"},[t._v(t._s(e.author.attributes.username))]),a("span",{staticClass:"says"},[t._v("说道：")])]),t._v(" "),a("div",{staticClass:"comment-metadata"},[a("a",{attrs:{href:"https://www.mygalgame.com/huaworkspring.html/comment-page-4/Comments.vue#comment-25696"}},[a("time",[t._v(t._s(t._f("formatDate")(e.createdAt)))])])])]),t._v(" "),a("div",{staticClass:"commentContent"},[a("p",[t._v(t._s(e.content))])])])])}),0),t._v(" "),a("nav",{staticClass:"commentNav"},[a("el-pagination",{attrs:{background:"",layout:"pager","page-size":8,total:t.total,"current-page":t.page,"hide-on-single-page":!0},on:{"current-change":t.onPageChange}})],1),t._v(" "),a("div",{staticClass:"commentCommit"},[a("div",{staticClass:"commentBody"},[a("div",{staticClass:"commentMeta"}),t._v(" "),a("form",{staticClass:"commentContent",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("textarea",{staticClass:"commentText",attrs:{name:"comment"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.onSubmit(e))}}},[t._v("说点什么吧！")]),t._v(" "),a("input",{staticClass:"commentConfirm",attrs:{type:"submit",value:"发表"}})])])])])},staticRenderFns:[]};var v=a("VU/8")(u,m,!1,function(t){a("cn2d"),a("Iw35")},"data-v-1b683651",null);e.a=v.exports},OQQf:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("viA7"),r=a("6gQe"),o={name:"Article",data:function(){return{id:"",title:"",createdAt:"",views:"",category:"",tags:[],markdown:"",screenshots:[],intro:"",staff:"",shareLink:"",appends:[],md5:"",rawContnet:"",loading:!0,deviceWidth:1366}},watch:{$route:{handler:function(t,e){var a=this.getId(e),s=this.getId(t);s!==a&&(this.id=s,this.getDetail())},deep:!0,immediate:!0}},computed:{ymd:function(){var t=this.createdAt;return t?t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate():"2019-05-12"},isSpecialArticle:function(){for(var t in r.a)if(r.a[t]===this.id)return!0;return!1}},created:function(){this.deviceWidth=window.innerWidth},methods:{getId:function(t){return t?["Guide","Unzip","Message"].includes(t.name)?r.a[t.name]:t.params.blogId:""},getDetail:function(){var t=this;this.loading=!0,n.a.getArticleDetail({id:this.id}).then(function(e){var a=(e=e.results.map(function(t){return i()({id:t.id,createdAt:t.createdAt},t.attributes)}))[0];a&&(t.title=a.title,t.createdAt=a.createdAt,t.views=a.views,t.category=a.category,t.tags=a.tags,t.screenshots=a.screenshots,t.intro=a.intro,t.staff=a.staff,t.shareLink=a.href,t.appends=t.process(a.appends||[]),t.md5=a.md5,t.rawContent=a.rawContent,t.loading=!1)})},process:function(t){return t.map(function(t){var e=t.trim().match(/(提取密码.|备注.)*(.*?)$/);return{title:(e[1]||"").trim(),content:(e[2]||"").trim()}})},rawContentParser:function(t){for(var e=((t=(t=(t=t.replace(/^## ([\s\S]+?)$([\s\S]+?)(?=(^##|$(?![\r\n])))/gm,'<h2>$1</h2>\n<div class="article">$2\n</div>\n')).replace(/\r\n/g,"\n")).replace(/^[\s]*\n/gm,"")).match(/<div class="article">[\s\S]+?<\/div>/g)||[]).map(function(t){return t.split("\n").length-2}),a=0;a<e.length;a++){var s=e[a]>=3?'class="article lightgreen"':'class="article lightblue"';t=t.replace(/class="article"/,s)}return t=t.replace(/>\n/gm,">")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Article",attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[t.loading?[t._m(0)]:t._e(),t._v(" "),t.loading?t._e():[a("section",{staticClass:"title-wrapper"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),a("section",{staticClass:"tags-wrapper"},[a("li",{staticClass:"tag"},[a("i",{staticClass:"el-icon-date"}),t._v(t._s(t.ymd))]),t._v(" "),a("li",{staticClass:"tag"},[a("i",{staticClass:"el-icon-view"}),t._v(t._s(t.views)+"℃")])]),t._v(" "),a("section",{staticClass:"detail-wrapper"},[t.isSpecialArticle?t._e():[a("div",{staticClass:"screenshots"},[a("h2",[t._v("游戏截图")]),t._v(" "),t._l(t.screenshots,function(e){return[a("a",{staticClass:"highslide",style:{"min-height":t.deviceWidth<1280?"50vw":(e.height||368)+"px"},attrs:{href:e.src,onclick:"return window.innerWidth < 1280? false: hs.expand(this, hs.galleryOptions)"},on:{click:function(t){t.preventDefault()}}},[a("img",{attrs:{src:e.src,width:"650",height:(e.height||364)+"px"}})]),a("br")]})],2),t._v(" "),a("div",{staticClass:"intro"},[a("h2",[t._v("游戏简介")]),t._v(" "),a("div",{staticClass:"article lightgreen",domProps:{innerHTML:t._s(t.intro)}})]),t._v(" "),t.staff?a("div",{staticClass:"staff"},[a("h2",[t._v("STAFF")]),t._v(" "),a("div",{staticClass:"article lightgreen",domProps:{innerHTML:t._s(t.staff)}})]):t._e(),t._v(" "),a("div",{staticClass:"panel"},[a("header",[t._v("百度网盘链接")]),t._v(" "),a("main",[a("a",{attrs:{target:"blank",href:t.shareLink}},[t._v("链接")])]),t._v(" "),a("footer",t._l(t.appends,function(e){return a("div",[e.content?[a("b",[t._v(t._s(e.title))]),t._v(t._s(e.content)+"\n              ")]:t._e()],2)}),0)]),t._v(" "),t.md5?a("div",{staticClass:"article lightblue",domProps:{innerHTML:t._s(t.md5)}}):t._e()],t._v(" "),t.isSpecialArticle?[a("div",{domProps:{innerHTML:t._s(t.rawContentParser(t.rawContent))}})]:t._e()],2),t._v(" "),a("section",{staticClass:"blogTags-wrapper"},[a("i",{staticClass:"el-icon-price-tag"}),t._v(" "),t._l(t.tags,function(e){return[a("router-link",{staticClass:"tag",attrs:{to:"/tag/"+e}},[t._v(t._s(e))])]})],2)]],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-wrapper"},[e("div",{staticClass:"loading"},[this._v("读取中")])])}]};var l=a("VU/8")(o,c,!1,function(t){a("iUbN")},"data-v-12a7dc98",null);e.a=l.exports},WhLl:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("2Sx8"),o=(a("w4Ir"),a("VmfC")),c=a("Pfph"),l="https://i.bmp.ovh/imgs/2019/05/2660bf1d3c6530f7.jpg",d={name:"Avatar",data:function(){return{avatarPath:l,uploading:!1}},computed:{uploaded:function(){return this.avatarPath!==l}},created:function(){var t=AV.User.current();if(t){var e=t.get("avatar");e&&(this.avatarPath=e.get("url")||l)}},methods:{setIcon:function(t){var e=this,a=t.target.files[0],s=new AV.File("avatar.jpg",a);this.uploading=!0,s.save().then(function(t){c.a.setUserAvatar(t).then(function(t){e.$message.success("头像上传成功!"),e.avatarPath=window.URL.createObjectURL(a),e.uploading=!1})}).catch(function(t){console.error(t),e.$message.error("头像上传失败"),e.uploading=!1}),t.target.value=""}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Avatar"},[a("div",{staticClass:"imagePicker",class:{uploading:t.uploading,uploaded:t.uploaded}},[a("img",{staticClass:"image",attrs:{src:t.avatarPath}}),t._v(" "),t.uploading?a("div",{staticClass:"mask"},[t._v("上传中")]):a("div",{staticClass:"mask"},[t._v("编辑")]),t._v(" "),a("input",{staticClass:"upload",attrs:{disabled:t.uploading,type:"file",name:"image",title:"点击上传头像"},on:{change:t.setIcon}})])])},staticRenderFns:[]};var m=a("VU/8")(d,u,!1,function(t){a("I0a2")},"data-v-5a3d65a4",null).exports,v=a("jArS"),h={name:"Besider",data:function(){return{searchText:"",comments:[],posts:[],isShowAvatar:!0,isFoldUserInfo:!1,isCloseUserInfo:!1,isFoldCommentList:!1,isCloseCommentList:!1,isFoldArticleList:!1,isCloseArticleList:!1}},components:{Avatar:m},computed:i()({},Object(n.c)(["isLogin","user"])),created:function(){var t=this;this.checkLogin(),this.isFoldUserInfo=window.innerWidth<1280,this.isFoldCommentList=window.innerWidth<1280,this.isFoldArticleList=window.innerWidth<1280,r.a.getNewestComments().then(function(e){t.comments=e.results.map(function(t){var e=t.id,a=t.get("owner").id;t.get("author").get("avatar");return{id:e,articleId:a,avatar:"https://i.bmp.ovh/imgs/2019/05/2660bf1d3c6530f7.jpg",content:t.get("content")}})}),v.a.fetchRandomArticles().then(function(e){t.posts=e.results.map(function(t){return i()({id:t.id},t.attributes)})})},mounted:function(){Object(o.a)(document.querySelector(".Besider"),function(){AOS.refresh()})},methods:i()({},Object(n.b)(["checkLogin","logout"]),{search:function(){""!==this.searchText.trim()&&this.$router.push("/search/"+encodeURIComponent(this.searchText.trim()))},foldPane:function(t){switch(t){case"userInfo":this.isFoldUserInfo=!this.isFoldUserInfo;break;case"commentList":this.isFoldCommentList=!this.isFoldCommentList;break;case"articleList":this.isFoldArticleList=!this.isFoldArticleList}},closePane:function(t){switch(t){case"userInfo":this.isCloseUserInfo=!0;break;case"commentList":this.isCloseCommentList=!0;break;case"articleList":this.isCloseArticleList=!0}}})},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Besider"},[a("aside",{staticClass:"search-wrapper"},[a("div",{staticClass:"input-wrapper",attrs:{"data-aos":"flip-up","data-aos-mirror":"true","data-aos-delay":"100"}},[a("div",{staticClass:"input"},[a("el-input",{staticClass:"searchInput",attrs:{placeholder:"输入关键词搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t._v(" "),a("router-link",{staticClass:"searchConfirm",attrs:{disabled:""===t.searchText.trim(),tag:"el-button",to:"/search/"+encodeURIComponent(t.searchText.trim())}},[a("i",{staticClass:"el-icon-search"})])],1)])]),t._v(" "),a("aside",{staticClass:"userInfo-wrapper",attrs:{"data-aos":"flip-left","data-aos-mirror":"true","data-aos-delay":"200"}},[a("div",{staticClass:"floatPanel userInfo",class:{fold:this.isFoldUserInfo,close:this.isCloseUserInfo}},[a("div",{staticClass:"panelHeading"},[a("i",{staticClass:"el-icon-user"}),t._v(" "),a("span",[t._v("个人中心")]),t._v(" "),a("i",{class:t.isFoldUserInfo?"el-icon-arrow-down":"el-icon-arrow-up",on:{click:function(e){return t.foldPane("userInfo")}}}),t._v(" "),a("i",{staticClass:"el-icon-close",on:{click:function(e){return t.closePane("userInfo")}}})]),t._v(" "),a("div",{staticClass:"panelContent"},[t.isLogin?[t.isShowAvatar?a("div",{staticClass:"avatar-wrapper"},[a("Avatar")],1):t._e(),t._v(" "),a("h3",[t._v("你好, "+t._s(t.user))]),t._v(" "),a("div",{staticClass:"btnGroup"},[a("el-button",[t._v("个人")]),t._v(" "),a("el-button",{on:{click:t.logout}},[t._v("登出")])],1)]:[a("h3",[t._v("请登录")]),t._v(" "),a("div",{staticClass:"btnGroup"},[a("router-link",{attrs:{tag:"el-button",to:"/login"}},[t._v("登录")]),t._v(" "),a("router-link",{attrs:{tag:"el-button",to:"/register"}},[t._v("注册")])],1)]],2)])]),t._v(" "),a("aside",{staticClass:"commentList-wrapper",attrs:{"data-aos":"fade-up","data-aos-mirror":"true","data-aos-delay":"200","data-aos-duration":"1000"}},[a("div",{staticClass:"floatPanel commentList",class:{fold:this.isFoldCommentList,close:this.isCloseCommentList}},[a("div",{staticClass:"panelHeading"},[a("i",{staticClass:"el-icon-s-comment"}),t._v(" "),a("span",[t._v("最新评论")]),t._v(" "),a("i",{class:t.isFoldCommentList?"el-icon-arrow-down":"el-icon-arrow-up",on:{click:function(e){return t.foldPane("commentList")}}}),t._v(" "),a("i",{staticClass:"el-icon-close",on:{click:function(e){return t.closePane("commentList")}}})]),t._v(" "),a("div",{staticClass:"panelContent"},[a("ul",{staticClass:"listGroup"},[t._l(t.comments,function(e){return[a("router-link",{staticClass:"listGroupItem",attrs:{tag:"li",to:"/detail/"+e.articleId+"#"+e.id}},[a("img",{attrs:{src:e.avatar}}),t._v(" "),a("span",{staticClass:"text commentLog"},[t._v(" "+t._s(e.content)+" ")])])]})],2)])])]),t._v(" "),a("aside",{staticClass:"articleList-wrapper",attrs:{"data-aos":"fade-up","data-aos-mirror":"true","data-aos-duration":"1000"}},[a("div",{staticClass:"floatPanel articleList",class:{fold:this.isFoldArticleList,close:this.isCloseArticleList}},[a("div",{staticClass:"panelHeading"},[a("i",{staticClass:"el-icon-menu"}),t._v(" "),a("span",[t._v("随机文章")]),t._v(" "),a("i",{class:t.isFoldArticleList?"el-icon-arrow-down":"el-icon-arrow-up",on:{click:function(e){return t.foldPane("articleList")}}}),t._v(" "),a("i",{staticClass:"el-icon-close",on:{click:function(e){return t.closePane("articleList")}}})]),t._v(" "),a("div",{staticClass:"panelContent"},[a("ul",{staticClass:"listGroup"},[t._l(t.posts,function(e){return[a("router-link",{staticClass:"listGroupItem",attrs:{tag:"li",to:"/detail/"+e.id}},[a("span",{staticClass:"text title"},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"tag"},[t._v(" "+t._s(e.views)+" ℃ ")])])]})],2)])])])])},staticRenderFns:[]};var p=a("VU/8")(h,g,!1,function(t){a("I389"),a("hklv")},"data-v-2dfef6e8",null);e.a=p.exports},ZBIj:function(t,e){},aV4V:function(t,e){},biLz:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("w4Ir"),r={name:"Posts",data:function(){return{page:1,total:0,posts:[],loading:!0}},watch:{$route:{handler:function(t,e){this.page=parseInt(this.$route.query.page)||1,this.getPosts()},deep:!0,immediate:!0}},created:function(){this.page=parseInt(this.$route.query.page)||1,this.getPosts()},methods:{getPosts:function(){var t=this;this.loading=!0;var e={page:this.page},a=this.$route.params,s=a.tagName,r=a.categoryName,o=a.keyword;e.tag=void 0===s?"%%":decodeURIComponent(s),e.category=void 0===r?"":decodeURIComponent(r),e.search=void 0===o?"":decodeURIComponent(o),n.a.getArticles(e).then(function(e){t.posts=e.results.map(function(t){return i()({id:t.id,createdAt:t.createdAt},t.attributes)}),t.loading=!1}),this.getPostsTotal(e)},getPostsTotal:function(t){var e=this;n.a.getArticlesTotal(t).then(function(t){e.total=t.count})},onPageChange:function(t){this.page=t,this.getPosts(),this.$router.push({query:{page:t}})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"Posts"},[t.loading?[t._m(0)]:t._e(),t._v(" "),t.loading?t._e():t._l(t.posts,function(e){return a("li",{attrs:{"data-aos":"flip-up"}},[a("div",{staticClass:"post-item"},[a("div",{staticClass:"title-wrapper"},[a("router-link",{attrs:{to:"/detail/"+e.id}},[a("h1",{staticClass:"title"},[t._v(t._s(e.title))])])],1),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(e.createdAt.getMonth()+1)+"月"),a("b",[t._v(t._s(e.createdAt.getDate()))])]),t._v(" "),a("ul",{staticClass:"tags"},[e.tags&&e.tags.length?a("li",{staticClass:"tag"},[a("i",{staticClass:"el-icon-collection-tag"}),t._v(t._s(e.tags.toString()))]):t._e(),t._v(" "),a("li",{staticClass:"tag"},[a("i",{staticClass:"el-icon-view"}),t._v(t._s(e.views))]),t._v(" "),a("li",{staticClass:"tag"},[a("i",{staticClass:"el-icon-chat-line-square"}),t._v(t._s(e.comments))])]),t._v(" "),a("div",{staticClass:"poster-wrapper"},[a("router-link",{staticClass:"poster",attrs:{tag:"figure",to:"/detail/"+e.id}},[a("img",{attrs:{src:e.cover}}),t._v(" "),a("figcaption",[a("div",{staticClass:"content"},[t._v(t._s(e.intro))])])])],1)])])}),t._v(" "),a("li",{staticClass:"pagination-wrapper"},[t.loading?t._e():a("el-pagination",{attrs:{background:"",layout:"pager","page-size":8,total:t.total,"current-page":t.page,"hide-on-single-page":!0},on:{"current-change":t.onPageChange}})],1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-wrapper"},[e("div",{staticClass:"loading"},[this._v("\n        加载中\n      ")])])}]};var c=a("VU/8")(r,o,!1,function(t){a("ZBIj"),a("aV4V")},"data-v-d809fb04",null);e.a=c.exports},cn2d:function(t,e){},duME:function(t,e,a){"use strict";var s=a("Dd8w"),i=a.n(s),n=a("viA7"),r={name:"BreadCrumb",data:function(){return{name:this.$route.name,params:this.$route.params,crumbs:[]}},watch:{$route:{handler:function(){this.getCrumb()},deep:!0,immediate:!0}},methods:{queryCategory:function(t){var e=this.crumbs;if(t+1!==e.length){var a=e.splice(0,t+1).join("_");this.$router.push({name:"Category",params:{categoryName:a}})}},getCrumb:function(){var t=this;switch(this.name=this.$route.name,this.params=this.$route.params,this.name){case"Guide":this.crumbs=["未分类","关于若干注意事项（新人必读）"];break;case"Unzip":this.crumbs=["未分类","关于解压的相关说明（解压必读）"];break;case"Tag":this.crumbs=[this.params.tagName||""];break;case"Category":this.crumbs=this.params.categoryName.split("_");break;case"Search":this.crumbs=["搜索 "+this.params.keyword+" 的结果"];break;case"Detail":n.a.getArticleDetail({id:this.params.blogId}).then(function(e){var a=(e=e.results.map(function(t){return i()({id:t.id,createdAt:t.createdAt},t.attributes)}))[0];a&&(t.crumbs=a.category.split("_"))});break;default:this.crumbs=[]}}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"BreadCrumb"},[a("i",{staticClass:"el-icon-s-home"}),t._v(" "),a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t._l(t.crumbs,function(e,s){return[a("el-breadcrumb-item",{class:{current:s===t.crumbs.length-1}},[a("span",{on:{click:function(e){return t.queryCategory(s)}}},[t._v(t._s(e))])])]})],2)],1)},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(t){a("GY+S"),a("2QKD")},"data-v-12cdbe1c",null);e.a=c.exports},hklv:function(t,e){},iUbN:function(t,e){},"p+dL":function(t,e,a){"use strict";var s=a("pFYg"),i=a.n(s),n=a("//Fk"),r=a.n(n),o=a("Xjl2"),c=a("zL8q");a.n(c);e.a=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";for(var s in e){var n=("string"===(void 0===(l=e[s])?"undefined":i()(l)).toLowerCase()&&(l=l.replace(/([\(\)])/g,"[$1]")),l);t=t.replaceAll("{{"+s+"}}",n)}var l;return new r.a(function(e,s){o.a.Query.doCloudQuery(t).then(function(t){e(t)}).catch(function(t){a&&c.Message.error(a),s(t)})})}},viA7:function(t,e,a){"use strict";var s=a("p+dL"),i="select * from ArticleDb where objectId = '{{id}}'",n="update ArticleDb set views = op('Increment', {'amount': 1}) where objectId = '{{id}}'",r="update ArticleDb set comments = {{num}} where objectId = '{{id}}'";e.a={getArticleDetail:function(t){var e=t.id;return Object(s.a)(i,{id:e},"获取文章内容失败")},setArticleViews:function(t){var e=t.id;return Object(s.a)(n,{id:e},"更新浏览数失败")},setArticleComments:function(t){var e=t.id,a=t.num;return Object(s.a)(r,{id:e,num:a},"更新评论数失败")}}},w4Ir:function(t,e,a){"use strict";var s=a("p+dL"),i="select title, views, cover, intro, tags, comments from ArticleDb \n  where tag like '%{{tag}}%' and category like '%{{category}}%' and title like '%{{search}}%' \n  limit {{page}}, 8 order by createdAt desc",n="select title, views from ArticleDb limit 8 order by updatedAt desc",r="select count(*) from ArticleDb \n  where tag like '%{{tag}}%' and category like '%{{category}}%' and title like '%{{search}}%'";e.a={getArticles:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tag:"",category:"",search:"",page:1},e=t.tag,a=void 0===e?"":e,n=t.category,r=void 0===n?"":n,o=t.search,c=void 0===o?"":o,l=t.page,d=void 0===l?1:l;return d=8*(d-1),Object(s.a)(i,{tag:a,category:r,search:c,page:d},"获取文章列表失败")},getNewestArticles:function(){return Object(s.a)(n,{},"获取最新文章失败")},getArticlesTotal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tag:"",category:"",search:""},e=t.tag,a=void 0===e?"":e,i=t.category,n=void 0===i?"":i,o=t.search,c=void 0===o?"":o;return Object(s.a)(r,{tag:a,category:n,search:c},"获取文章数失败")}}}});
//# sourceMappingURL=0.45d41595794567762f2e.js.map