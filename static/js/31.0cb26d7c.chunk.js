(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{309:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=d(n(0)),s=n(310),l=d(n(311)),o=d(n(177)),u=d(n(178)),c=d(n(5));function d(e){return e&&e.__esModule?e:{default:e}}var h=["fullscreenchange","MSFullscreenChange","mozfullscreenchange","webkitfullscreenchange"],f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.slideToIndex=function(e,t){var r=n.state,i=r.currentIndex;if(!r.isTransitioning){t&&n._intervalId&&(n.pause(!1),n.play(!1));var a=n.props.items.length-1,s=e;e<0?s=a:e>a&&(s=0),n.setState({previousIndex:i,currentIndex:s,isTransitioning:s!==i,offsetPercentage:0,style:{transition:"all "+n.props.slideDuration+"ms ease-out"}},n._onSliding)}},n._onSliding=function(){var e=n.state.isTransitioning;n._transitionTimer=window.setTimeout(function(){e&&(n.setState({isTransitioning:!e}),n.props.onSlide&&n.props.onSlide(n.state.currentIndex))},n.props.slideDuration+50)},n._handleScreenChange=function(){var e=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;n.props.onScreenChange&&n.props.onScreenChange(e),n.setState({isFullscreen:!!e})},n._toggleFullScreen=function(){n.state.isFullscreen?n.exitFullScreen():n.fullScreen()},n._togglePlay=function(){n._intervalId?n.pause():n.play()},n._initGalleryResizing=function(e){e&&(n._imageGallerySlideWrapper=e,n.resizeObserver=new u.default(n._createResizeObserver),n.resizeObserver.observe(e))},n._createResizeObserver=(0,o.default)(function(e){e&&e.forEach(function(){n._handleResize()})},300),n._handleResize=function(){var e=n.state.currentIndex;n._imageGallery&&n.setState({galleryWidth:n._imageGallery.offsetWidth}),n._imageGallerySlideWrapper&&n.setState({gallerySlideWrapperHeight:n._imageGallerySlideWrapper.offsetHeight}),n._thumbnailsWrapper&&(n._isThumbnailVertical()?n.setState({thumbnailsWrapperHeight:n._thumbnailsWrapper.offsetHeight}):n.setState({thumbnailsWrapperWidth:n._thumbnailsWrapper.offsetWidth})),n._setThumbsTranslate(-n._getThumbsTranslate(e))},n._handleKeyDown=function(e){if(!n.props.disableArrowKeys){switch(parseInt(e.keyCode||e.which||0)){case 37:n._canSlideLeft()&&!n._intervalId&&n._slideLeft();break;case 39:n._canSlideRight()&&!n._intervalId&&n._slideRight();break;case 27:n.state.isFullscreen&&!n.props.useBrowserFullscreen&&n.exitFullScreen()}}},n._handleImageError=function(e){n.props.defaultImage&&-1===e.target.src.indexOf(n.props.defaultImage)&&(e.target.src=n.props.defaultImage)},n._handleOnSwiped=function(e){var t=e.event,r=e.dir,i=e.velocity;if(!n.props.disableSwipe){var a=n.state,l=a.scrollingUpDown,o=a.scrollingLeftRight,u=n.props.isRTL;if(n.props.stopPropagation&&t.stopPropagation(),l&&n.setState({scrollingUpDown:!1}),o&&n.setState({scrollingLeftRight:!1}),!l){var c=(r===s.LEFT?1:-1)*(u?-1:1),d=i>n.props.flickThreshold;n._handleOnSwipedTo(c,d)}}},n._handleSwiping=function(e){var t=e.event,r=e.absX,i=e.dir;if(!n.props.disableSwipe){var a=n.state,l=a.galleryWidth,o=a.isTransitioning,u=a.scrollingUpDown,c=a.scrollingLeftRight,d=n.props.swipingTransitionDuration;if(n._setScrollDirection(i),n.props.stopPropagation&&t.stopPropagation(),(n.props.preventDefaultTouchmoveEvent||c)&&t.cancelable&&t.preventDefault(),o||u)n.setState({offsetPercentage:0});else{var h=i===s.RIGHT?1:-1,f=r/l*100;Math.abs(f)>=100&&(f=100);var p={transition:"transform "+d+"ms ease-out"};n.setState({offsetPercentage:h*f,style:p})}}},n._slideLeft=function(){n.props.isRTL?n._slideNext():n._slidePrevious()},n._slideRight=function(){n.props.isRTL?n._slidePrevious():n._slideNext()},n._slidePrevious=function(e){n.slideToIndex(n.state.currentIndex-1,e)},n._slideNext=function(e){n.slideToIndex(n.state.currentIndex+1,e)},n._renderItem=function(e){var t=n.props.onImageError||n._handleImageError;return a.default.createElement("div",{className:"image-gallery-image"},e.imageSet?a.default.createElement("picture",{onLoad:n.props.onImageLoad,onError:t},e.imageSet.map(function(e,t){return a.default.createElement("source",{key:t,media:e.media,srcSet:e.srcSet,type:e.type})}),a.default.createElement("img",{alt:e.originalAlt,src:e.original})):a.default.createElement("img",{src:e.original,alt:e.originalAlt,srcSet:e.srcSet,sizes:e.sizes,title:e.originalTitle,onLoad:n.props.onImageLoad,onError:t}),e.description&&a.default.createElement("span",{className:"image-gallery-description"},e.description))},n._renderThumbInner=function(e){var t=n.props.onThumbnailError||n._handleImageError;return a.default.createElement("div",{className:"image-gallery-thumbnail-inner"},a.default.createElement("img",{src:e.thumbnail,alt:e.thumbnailAlt,title:e.thumbnailTitle,onError:t}),e.thumbnailLabel&&a.default.createElement("div",{className:"image-gallery-thumbnail-label"},e.thumbnailLabel))},n._onThumbnailClick=function(e,t){n.slideToIndex(t,e),n.props.onThumbnailClick&&n.props.onThumbnailClick(e,t)},n._onThumbnailMouseOver=function(e,t){n._thumbnailMouseOverTimer&&(window.clearTimeout(n._thumbnailMouseOverTimer),n._thumbnailMouseOverTimer=null),n._thumbnailMouseOverTimer=window.setTimeout(function(){n.slideToIndex(t),n.pause()},300)},n._onThumbnailMouseLeave=function(){n._thumbnailMouseOverTimer&&(window.clearTimeout(n._thumbnailMouseOverTimer),n._thumbnailMouseOverTimer=null,n.props.autoPlay&&n.play())},n.state={currentIndex:e.startIndex,thumbsTranslate:0,offsetPercentage:0,galleryWidth:0,thumbnailsWrapperWidth:0,thumbnailsWrapperHeight:0,isFullscreen:!1,isPlaying:!1},n._unthrottledSlideToIndex=n.slideToIndex,n.slideToIndex=(0,l.default)(n._unthrottledSlideToIndex,e.slideDuration,{trailing:!1}),e.lazyLoad&&(n._lazyLoaded=[]),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),i(t,[{key:"componentDidUpdate",value:function(e,t){var n=e.items.length!==this.props.items.length,r=e.items!==this.props.items,i=e.startIndex!==this.props.startIndex;n&&this._handleResize(),t.currentIndex!==this.state.currentIndex&&this._slideThumbnailBar(t.currentIndex),e.slideDuration!==this.props.slideDuration&&(this.slideToIndex=(0,l.default)(this._unthrottledSlideToIndex,this.props.slideDuration,{trailing:!1})),!this.props.lazyLoad||e.lazyLoad&&!r||(this._lazyLoaded=[]),(i||r)&&this.setState({currentIndex:this.props.startIndex})}},{key:"componentDidMount",value:function(){this.props.autoPlay&&this.play(),window.addEventListener("keydown",this._handleKeyDown),this._onScreenChangeEvent()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this._handleKeyDown),this._offScreenChangeEvent(),this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null),this.resizeObserver&&this._imageGallerySlideWrapper&&this.resizeObserver.unobserve(this._imageGallerySlideWrapper),this._transitionTimer&&window.clearTimeout(this._transitionTimer),this._createResizeObserver&&this._createResizeObserver()}},{key:"play",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this._intervalId){var n=this.props,r=n.slideInterval,i=n.slideDuration;this.setState({isPlaying:!0}),this._intervalId=window.setInterval(function(){e.props.infinite||e._canSlideRight()?e.slideToIndex(e.state.currentIndex+1):e.pause()},Math.max(r,i)),this.props.onPlay&&t&&this.props.onPlay(this.state.currentIndex)}}},{key:"pause",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null,this.setState({isPlaying:!1}),this.props.onPause&&e&&this.props.onPause(this.state.currentIndex))}},{key:"setModalFullscreen",value:function(e){this.setState({modalFullscreen:e}),this.props.onScreenChange&&this.props.onScreenChange(e)}},{key:"fullScreen",value:function(){var e=this._imageGallery;this.props.useBrowserFullscreen?e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():this.setModalFullscreen(!0):this.setModalFullscreen(!0),this.setState({isFullscreen:!0})}},{key:"exitFullScreen",value:function(){this.state.isFullscreen&&(this.props.useBrowserFullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this.setModalFullscreen(!1):this.setModalFullscreen(!1),this.setState({isFullscreen:!1}))}},{key:"getCurrentIndex",value:function(){return this.state.currentIndex}},{key:"_onScreenChangeEvent",value:function(){var e=this;h.map(function(t){document.addEventListener(t,e._handleScreenChange)})}},{key:"_offScreenChangeEvent",value:function(){var e=this;h.map(function(t){document.removeEventListener(t,e._handleScreenChange)})}},{key:"_isThumbnailVertical",value:function(){var e=this.props.thumbnailPosition;return"left"===e||"right"===e}},{key:"_setScrollDirection",value:function(e){var t=this.state,n=t.scrollingUpDown,r=t.scrollingLeftRight;n||r||(e===s.LEFT||e===s.RIGHT?this.setState({scrollingLeftRight:!0}):this.setState({scrollingUpDown:!0}))}},{key:"_handleOnSwipedTo",value:function(e,t){var n=this.state,r=n.currentIndex,i=n.isTransitioning,a=r;!this._sufficientSwipeOffset()&&!t||i||(a+=e),e<0?this._canSlideLeft()||(a=r):this._canSlideRight()||(a=r),this._unthrottledSlideToIndex(a)}},{key:"_sufficientSwipeOffset",value:function(){return Math.abs(this.state.offsetPercentage)>this.props.swipeThreshold}},{key:"_canNavigate",value:function(){return this.props.items.length>=2}},{key:"_canSlideLeft",value:function(){return this.props.infinite||(this.props.isRTL?this._canSlideNext():this._canSlidePrevious())}},{key:"_canSlideRight",value:function(){return this.props.infinite||(this.props.isRTL?this._canSlidePrevious():this._canSlideNext())}},{key:"_canSlidePrevious",value:function(){return this.state.currentIndex>0}},{key:"_canSlideNext",value:function(){return this.state.currentIndex<this.props.items.length-1}},{key:"_slideThumbnailBar",value:function(e){var t=this.state,n=t.thumbsTranslate,r=t.currentIndex;if(0===this.state.currentIndex)this._setThumbsTranslate(0);else{var i=Math.abs(e-r),a=this._getThumbsTranslate(i);a>0&&(e<r?this._setThumbsTranslate(n-a):e>r&&this._setThumbsTranslate(n+a))}}},{key:"_setThumbsTranslate",value:function(e){this.setState({thumbsTranslate:e})}},{key:"_getThumbsTranslate",value:function(e){if(this.props.disableThumbnailScroll)return 0;var t=this.state,n=t.thumbnailsWrapperWidth,r=t.thumbnailsWrapperHeight,i=void 0;if(this._thumbnails){if(this._isThumbnailVertical()){if(this._thumbnails.scrollHeight<=r)return 0;i=this._thumbnails.scrollHeight-r}else{if(this._thumbnails.scrollWidth<=n||n<=0)return 0;i=this._thumbnails.scrollWidth-n}return e*(i/(this._thumbnails.children.length-1))}}},{key:"_getAlignmentClassName",value:function(e){var t=this.state.currentIndex,n="";switch(e){case t-1:n=" left";break;case t:n=" center";break;case t+1:n=" right"}return this.props.items.length>=3&&this.props.infinite&&(0===e&&t===this.props.items.length-1?n=" right":e===this.props.items.length-1&&0===t&&(n=" left")),n}},{key:"_isGoingFromFirstToLast",value:function(){var e=this.state,t=e.currentIndex,n=e.previousIndex,r=this.props.items.length-1;return 0===n&&t===r}},{key:"_isGoingFromLastToFirst",value:function(){var e=this.state,t=e.currentIndex;return e.previousIndex===this.props.items.length-1&&0===t}},{key:"_getTranslateXForTwoSlide",value:function(e){var t=this.state,n=t.currentIndex,r=t.offsetPercentage,i=t.previousIndex,a=-100*n+100*e+r;return r>0?this.direction="left":r<0&&(this.direction="right"),0===n&&1===e&&r>0?a=-100+r:1===n&&0===e&&r<0&&(a=100+r),n!==i?0===i&&0===e&&0===r&&"left"===this.direction?a=100:1===i&&1===e&&0===r&&"right"===this.direction&&(a=-100):0===n&&1===e&&0===r&&"left"===this.direction?a=-100:1===n&&0===e&&0===r&&"right"===this.direction&&(a=100),a}},{key:"_getThumbnailBarHeight",value:function(){return this._isThumbnailVertical()?{height:this.state.gallerySlideWrapperHeight}:{}}},{key:"_shouldPushSlideOnInfiniteMode",value:function(e){return!this._slideIsTransitioning(e)||this._ignoreIsTransitioning()&&!this._isFirstOrLastSlide(e)}},{key:"_slideIsTransitioning",value:function(e){var t=this.state,n=t.isTransitioning,r=t.previousIndex,i=t.currentIndex;return n&&!(e===r||e===i)}},{key:"_isFirstOrLastSlide",value:function(e){return e===this.props.items.length-1||0===e}},{key:"_ignoreIsTransitioning",value:function(){var e=this.state,t=e.previousIndex,n=e.currentIndex,r=this.props.items.length-1;return Math.abs(t-n)>1&&!(0===t&&n===r)&&!(t===r&&0===n)}},{key:"_getSlideStyle",value:function(e){var t=this.state,n=t.currentIndex,r=t.offsetPercentage,i=this.props,a=i.infinite,s=i.items,l=i.useTranslate3D,o=i.isRTL,u=-100*n,c=s.length-1,d=(u+100*e)*(o?-1:1)+r;a&&s.length>2&&(0===n&&e===c?d=-100*(o?-1:1)+r:n===c&&0===e&&(d=100*(o?-1:1)+r)),a&&2===s.length&&(d=this._getTranslateXForTwoSlide(e));var h="translate("+d+"%, 0)";return l&&(h="translate3d("+d+"%, 0, 0)"),{WebkitTransform:h,MozTransform:h,msTransform:h,OTransform:h,transform:h}}},{key:"_getThumbnailStyle",value:function(){var e=void 0,t=this.props,n=t.useTranslate3D,r=t.isRTL,i=this.state.thumbsTranslate,a=r?-1*i:i;return this._isThumbnailVertical()?(e="translate(0, "+i+"px)",n&&(e="translate3d(0, "+i+"px, 0)")):(e="translate("+a+"px, 0)",n&&(e="translate3d("+a+"px, 0, 0)")),{WebkitTransform:e,MozTransform:e,msTransform:e,OTransform:e,transform:e}}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentIndex,i=t.isFullscreen,l=t.modalFullscreen,o=t.isPlaying,u=this.props,c=u.infinite,d=u.slideOnThumbnailOver,h=u.isRTL,f=u.lazyLoad,p=this._getThumbnailStyle(),m=this.props.thumbnailPosition,v=this._slideLeft,g=this._slideRight,b=[],y=[],T=[];this.props.items.forEach(function(t,i){var s=e._getAlignmentClassName(i),l=t.originalClass?" "+t.originalClass:"",o=t.thumbnailClass?" "+t.thumbnailClass:"",u=t.renderItem||e.props.renderItem||e._renderItem,h=t.renderThumbInner||e.props.renderThumbInner||e._renderThumbInner,p=!f||s||e._lazyLoaded[i];p&&f&&!e._lazyLoaded[i]&&(e._lazyLoaded[i]=!0);var m=e._getSlideStyle(i),v=a.default.createElement("div",{key:i,className:"image-gallery-slide"+s+l,style:r(m,e.state.style),onClick:e.props.onClick,onTouchMove:e.props.onTouchMove,onTouchEnd:e.props.onTouchEnd,onTouchStart:e.props.onTouchStart,onMouseOver:e.props.onMouseOver,onMouseLeave:e.props.onMouseLeave,role:e.props.onClick&&"button"},p?u(t):a.default.createElement("div",{style:{height:"100%"}}));if(c?e._shouldPushSlideOnInfiniteMode(i)&&b.push(v):b.push(v),e.props.showThumbnails&&y.push(a.default.createElement("a",{key:i,role:"button","aria-pressed":n===i?"true":"false","aria-label":"Go to Slide "+(i+1),className:"image-gallery-thumbnail"+(n===i?" active":"")+o,onMouseLeave:d?e._onThumbnailMouseLeave:void 0,onMouseOver:function(t){return d?e._onThumbnailMouseOver(t,i):void 0},onClick:function(t){return e._onThumbnailClick(t,i)}},h(t))),e.props.showBullets){T.push(a.default.createElement("button",{key:i,type:"button",className:["image-gallery-bullet",n===i?"active":"",t.bulletClass||""].join(" "),onClick:function(r){return t.bulletOnClick&&t.bulletOnClick({item:t,itemIndex:i,currentIndex:n}),e.slideToIndex.call(e,i,r)},"aria-pressed":n===i?"true":"false","aria-label":"Go to Slide "+(i+1)}))}});var _=a.default.createElement("div",{ref:this._initGalleryResizing,className:"image-gallery-slide-wrapper "+m+" "+(h?"image-gallery-rtl":"")},this.props.renderCustomControls&&this.props.renderCustomControls(),this.props.showFullscreenButton&&this.props.renderFullscreenButton(this._toggleFullScreen,i),this.props.showPlayButton&&this.props.renderPlayPauseButton(this._togglePlay,o),this._canNavigate()?[this.props.showNav&&a.default.createElement("span",{key:"navigation"},this.props.renderLeftNav(v,!this._canSlideLeft()),this.props.renderRightNav(g,!this._canSlideRight())),a.default.createElement(s.Swipeable,{className:"image-gallery-swipe",key:"swipeable",delta:0,onSwiping:this._handleSwiping,onSwiped:this._handleOnSwiped},a.default.createElement("div",{className:"image-gallery-slides"},b))]:a.default.createElement("div",{className:"image-gallery-slides"},b),this.props.showBullets&&a.default.createElement("div",{className:"image-gallery-bullets"},a.default.createElement("div",{className:"image-gallery-bullets-container",role:"navigation","aria-label":"Bullet Navigation"},T)),this.props.showIndex&&a.default.createElement("div",{className:"image-gallery-index"},a.default.createElement("span",{className:"image-gallery-index-current"},this.state.currentIndex+1),a.default.createElement("span",{className:"image-gallery-index-separator"},this.props.indexSeparator),a.default.createElement("span",{className:"image-gallery-index-total"},this.props.items.length))),S=["image-gallery",this.props.additionalClass,l?"fullscreen-modal":""].filter(function(e){return"string"===typeof e}).join(" ");return a.default.createElement("div",{ref:function(t){return e._imageGallery=t},className:S,"aria-live":"polite"},a.default.createElement("div",{className:"image-gallery-content"+(i?" fullscreen":"")},("bottom"===m||"right"===m)&&_,this.props.showThumbnails&&a.default.createElement("div",{className:"image-gallery-thumbnails-wrapper "+m+" "+(!this._isThumbnailVertical()&&h?"thumbnails-wrapper-rtl":""),style:this._getThumbnailBarHeight()},a.default.createElement("div",{className:"image-gallery-thumbnails",ref:function(t){return e._thumbnailsWrapper=t}},a.default.createElement("div",{ref:function(t){return e._thumbnails=t},className:"image-gallery-thumbnails-container",style:p,"aria-label":"Thumbnail Navigation"},y))),("top"===m||"left"===m)&&_))}}]),t}();f.propTypes={flickThreshold:c.default.number,items:c.default.array.isRequired,showNav:c.default.bool,autoPlay:c.default.bool,lazyLoad:c.default.bool,infinite:c.default.bool,showIndex:c.default.bool,showBullets:c.default.bool,showThumbnails:c.default.bool,showPlayButton:c.default.bool,showFullscreenButton:c.default.bool,disableThumbnailScroll:c.default.bool,disableArrowKeys:c.default.bool,disableSwipe:c.default.bool,useBrowserFullscreen:c.default.bool,preventDefaultTouchmoveEvent:c.default.bool,defaultImage:c.default.string,indexSeparator:c.default.string,thumbnailPosition:c.default.string,startIndex:c.default.number,slideDuration:c.default.number,slideInterval:c.default.number,slideOnThumbnailOver:c.default.bool,swipeThreshold:c.default.number,swipingTransitionDuration:c.default.number,onSlide:c.default.func,onScreenChange:c.default.func,onPause:c.default.func,onPlay:c.default.func,onClick:c.default.func,onImageLoad:c.default.func,onImageError:c.default.func,onTouchMove:c.default.func,onTouchEnd:c.default.func,onTouchStart:c.default.func,onMouseOver:c.default.func,onMouseLeave:c.default.func,onThumbnailError:c.default.func,onThumbnailClick:c.default.func,renderCustomControls:c.default.func,renderLeftNav:c.default.func,renderRightNav:c.default.func,renderPlayPauseButton:c.default.func,renderFullscreenButton:c.default.func,renderItem:c.default.func,stopPropagation:c.default.bool,additionalClass:c.default.string,useTranslate3D:c.default.bool,isRTL:c.default.bool},f.defaultProps={items:[],showNav:!0,autoPlay:!1,lazyLoad:!1,infinite:!0,showIndex:!1,showBullets:!1,showThumbnails:!0,showPlayButton:!0,showFullscreenButton:!0,disableThumbnailScroll:!1,disableArrowKeys:!1,disableSwipe:!1,useTranslate3D:!0,isRTL:!1,useBrowserFullscreen:!0,preventDefaultTouchmoveEvent:!1,flickThreshold:.4,stopPropagation:!1,indexSeparator:" / ",thumbnailPosition:"bottom",startIndex:0,slideDuration:450,swipingTransitionDuration:0,slideInterval:3e3,swipeThreshold:30,renderLeftNav:function(e,t){return a.default.createElement("button",{type:"button",className:"image-gallery-left-nav",disabled:t,onClick:e,"aria-label":"Previous Slide"})},renderRightNav:function(e,t){return a.default.createElement("button",{type:"button",className:"image-gallery-right-nav",disabled:t,onClick:e,"aria-label":"Next Slide"})},renderPlayPauseButton:function(e,t){return a.default.createElement("button",{type:"button",className:"image-gallery-play-button"+(t?" active":""),onClick:e,"aria-label":"Play or Pause Slideshow"})},renderFullscreenButton:function(e,t){return a.default.createElement("button",{type:"button",className:"image-gallery-fullscreen-button"+(t?" active":""),onClick:e,"aria-label":"Open Fullscreen"})}},t.default=f},310:function(e,t,n){"use strict";n.r(t),n.d(t,"DOWN",function(){return f}),n.d(t,"LEFT",function(){return c}),n.d(t,"RIGHT",function(){return d}),n.d(t,"Swipeable",function(){return w}),n.d(t,"UP",function(){return h}),n.d(t,"useSwipeable",function(){return S});var r=n(0),i=n.n(r),a=n(5),s=n.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},u={xy:[0,0],swiping:!1,lastEventData:void 0,start:void 0},c="Left",d="Right",h="Up",f="Down",p="touchstart",m="touchmove",v="touchend",g="mousemove",b="mouseup";function y(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function T(e,t){var n=function(t){t.touches&&t.touches.length>1||e(function(e,n){n.trackMouse&&(document.addEventListener(g,r),document.addEventListener(b,s));var i=t.touches?t.touches[0]:t,a=y([i.clientX,i.clientY],n.rotationAngle);return l({},e,u,{xy:a,start:t.timeStamp||0})})},r=function(t){e(function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var r=t.touches?t.touches[0]:t,i=y([r.clientX,r.clientY],n.rotationAngle),a=i[0],s=i[1],o=e.xy[0]-a,u=e.xy[1]-s,p=Math.abs(o),m=Math.abs(u),v=(t.timeStamp||0)-e.start,g=Math.sqrt(p*p+m*m)/(v||1);if(p<n.delta&&m<n.delta&&!e.swiping)return e;var b=function(e,t,n,r){return e>t?n>0?c:d:r>0?h:f}(p,m,o,u),T={event:t,absX:p,absY:m,deltaX:o,deltaY:u,velocity:g,dir:b};n.onSwiping&&n.onSwiping(T);var _=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+b])&&(_=!0),_&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),l({},e,{lastEventData:T,swiping:!0})})},i=function(t){e(function(e,n){if(e.swiping){var r=l({},e.lastEventData,{event:t});n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)}return l({},e,u)})},a=function(){document.removeEventListener(g,r),document.removeEventListener(b,s)},s=function(e){a(),i(e)},o=function(e){if(e&&e.addEventListener){var t=[[p,n],[m,r],[v,i]];return t.forEach(function(t){var n=t[0],r=t[1];return e.addEventListener(n,r)}),function(){return t.forEach(function(t){var n=t[0],r=t[1];return e.removeEventListener(n,r)})}}},T={ref:function(t){null!==t&&e(function(e,n){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&t&&(r.cleanUpTouch=o(t)),l({},e,{el:t},r)})}};return t.trackMouse&&(T.onMouseDown=n),[T,o]}function _(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),l({},e,r)}function S(e){var t=e.trackMouse,n=i.a.useRef(l({},u,{type:"hook"})),r=i.a.useRef();r.current=l({},o,e);var a=i.a.useMemo(function(){return T(function(e){return n.current=e(n.current,r.current)},{trackMouse:t})},[t]),s=a[0],c=a[1];return n.current=_(n.current,r.current,c),s}var w=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=l({},u,{type:"class"}),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.nodeName,a=void 0===r?"div":r,s=e.innerRef,o=e.children,u=e.trackMouse,c=T(this._set,{trackMouse:u}),d=c[0],h=c[1];this.transientState=_(this.transientState,this.props,h);var f=s?function(e){return s(e),d.ref(e)}:d.ref;return i.a.createElement(a,l({},d,{className:t,style:n,ref:f}),o)},r}(i.a.PureComponent);w.propTypes={onSwiped:s.a.func,onSwiping:s.a.func,onSwipedUp:s.a.func,onSwipedRight:s.a.func,onSwipedDown:s.a.func,onSwipedLeft:s.a.func,delta:s.a.number,preventDefaultTouchmoveEvent:s.a.bool,nodeName:s.a.string,trackMouse:s.a.bool,trackTouch:s.a.bool,innerRef:s.a.func,rotationAngle:s.a.number},w.defaultProps=o},311:function(e,t,n){(function(t){var n="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,h=c||d||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,v=function(){return h.Date.now()};function g(e,t,r){var i,a,s,l,o,u,c=0,d=!1,h=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function g(t){var n=i,r=a;return i=a=void 0,c=t,l=e.apply(r,n)}function T(e){var n=e-u;return void 0===u||n>=t||n<0||h&&e-c>=s}function _(){var e=v();if(T(e))return S(e);o=setTimeout(_,function(e){var n=t-(e-u);return h?m(n,s-(e-c)):n}(e))}function S(e){return o=void 0,f&&i?g(e):(i=a=void 0,l)}function w(){var e=v(),n=T(e);if(i=arguments,a=this,u=e,n){if(void 0===o)return function(e){return c=e,o=setTimeout(_,t),d?g(e):l}(u);if(h)return o=setTimeout(_,t),g(u)}return void 0===o&&(o=setTimeout(_,t)),l}return t=y(t)||0,b(r)&&(d=!!r.leading,s=(h="maxWait"in r)?p(y(r.maxWait)||0,t):s,f="trailing"in r?!!r.trailing:f),w.cancel=function(){void 0!==o&&clearTimeout(o),c=0,i=u=a=o=void 0},w.flush=function(){return void 0===o?l:S(v())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==i}(e))return r;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):s.test(e)?r:+e}e.exports=function(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(n);return b(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),g(e,t,{leading:i,maxWait:t,trailing:a})}}).call(this,n(18))},312:function(e,t,n){}}]);
//# sourceMappingURL=31.0cb26d7c.chunk.js.map