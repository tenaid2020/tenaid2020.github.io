(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "5+WD":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
  \**********************************************************************/
/*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_HANDLE, CDK_DRAG_PARENT, CDK_DRAG_PLACEHOLDER, CDK_DRAG_PREVIEW, CDK_DROP_LIST, CDK_DROP_LIST_GROUP, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_HANDLE", function() { return CDK_DRAG_HANDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PARENT", function() { return CDK_DRAG_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PLACEHOLDER", function() { return CDK_DRAG_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PREVIEW", function() { return CDK_DRAG_PREVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_GROUP", function() { return CDK_DROP_LIST_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony import */ var C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @docs-private
 */





function extendStyles(dest, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      dest[key] = source[key];
    }
  }

  return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */


function toggleNativeDragInteractions(element, enable) {
  var userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    touchAction: enable ? '' : 'none',
    webkitUserDrag: enable ? '' : 'none',
    webkitTapHighlightColor: enable ? '' : 'transparent',
    userSelect: userSelect,
    msUserSelect: userSelect,
    webkitUserSelect: userSelect,
    MozUserSelect: userSelect
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Parses a CSS time value to milliseconds. */


function parseCssTimeUnitsToMs(value) {
  // Some browsers will return it in seconds, whereas others will return milliseconds.
  var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */


function getTransformTransitionDurationInMs(element) {
  var computedStyle = getComputedStyle(element);
  var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  var property = transitionedProperties.find(function (prop) {
    return prop === 'transform' || prop === 'all';
  }); // If there's no transition for `all` or `transform`, we shouldn't do anything.

  if (!property) {
    return 0;
  } // Get the index of the property that we're interested in and match
  // it up to the same index in `transition-delay` and `transition-duration`.


  var propertyIndex = transitionedProperties.indexOf(property);
  var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */


function parseCssPropertyValue(computedStyle, name) {
  var value = computedStyle.getPropertyValue(name);
  return value.split(',').map(function (part) {
    return part.trim();
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets a mutable version of an element's bounding `ClientRect`. */


function getMutableClientRect(element) {
  var clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `ClientRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

  return {
    top: clientRect.top,
    right: clientRect.right,
    bottom: clientRect.bottom,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height
  };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */


function isInsideClientRect(clientRect, x, y) {
  var top = clientRect.top,
      bottom = clientRect.bottom,
      left = clientRect.left,
      right = clientRect.right;
  return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */


function adjustClientRect(clientRect, top, left) {
  clientRect.top += top;
  clientRect.bottom = clientRect.top + clientRect.height;
  clientRect.left += left;
  clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */


function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
  var top = rect.top,
      right = rect.right,
      bottom = rect.bottom,
      left = rect.left,
      width = rect.width,
      height = rect.height;
  var xThreshold = width * threshold;
  var yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Keeps track of the scroll position and dimensions of the parents of an element. */


var ParentPositionTracker = /*#__PURE__*/function () {
  function ParentPositionTracker(_document, _viewportRuler) {
    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ParentPositionTracker);

    this._document = _document;
    this._viewportRuler = _viewportRuler;
    /** Cached positions of the scrollable parent elements. */

    this.positions = new Map();
  }
  /** Clears the cached positions. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ParentPositionTracker, [{
    key: "clear",
    value: function clear() {
      this.positions.clear();
    }
    /** Caches the positions. Should be called at the beginning of a drag sequence. */

  }, {
    key: "cache",
    value: function cache(elements) {
      var _this = this;

      this.clear();
      this.positions.set(this._document, {
        scrollPosition: this._viewportRuler.getViewportScrollPosition()
      });
      elements.forEach(function (element) {
        _this.positions.set(element, {
          scrollPosition: {
            top: element.scrollTop,
            left: element.scrollLeft
          },
          clientRect: getMutableClientRect(element)
        });
      });
    }
    /** Handles scrolling while a drag is taking place. */

  }, {
    key: "handleScroll",
    value: function handleScroll(event) {
      var target = event.target;
      var cachedPosition = this.positions.get(target);

      if (!cachedPosition) {
        return null;
      } // Used when figuring out whether an element is inside the scroll parent. If the scrolled
      // parent is the `document`, we use the `documentElement`, because IE doesn't support
      // `contains` on the `document`.


      var scrolledParentNode = target === this._document ? target.documentElement : target;
      var scrollPosition = cachedPosition.scrollPosition;
      var newTop;
      var newLeft;

      if (target === this._document) {
        var viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();

        newTop = viewportScrollPosition.top;
        newLeft = viewportScrollPosition.left;
      } else {
        newTop = target.scrollTop;
        newLeft = target.scrollLeft;
      }

      var topDifference = scrollPosition.top - newTop;
      var leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
      // parents that are inside the element that was scrolled.

      this.positions.forEach(function (position, node) {
        if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
          adjustClientRect(position.clientRect, topDifference, leftDifference);
        }
      });
      scrollPosition.top = newTop;
      scrollPosition.left = newLeft;
      return {
        top: topDifference,
        left: leftDifference
      };
    }
  }]);

  return ParentPositionTracker;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Creates a deep clone of an element. */


function deepCloneNode(node) {
  var clone = node.cloneNode(true);
  var descendantsWithId = clone.querySelectorAll('[id]');
  var nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

  clone.removeAttribute('id');

  for (var i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }

  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }

  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */


function transferData(selector, node, clone, callback) {
  var descendantElements = node.querySelectorAll(selector);

  if (descendantElements.length) {
    var cloneElements = clone.querySelectorAll(selector);

    for (var i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
} // Counter for unique cloned radio button names.


var cloneUniqueId = 0;
/** Transfers the data of one input element to another. */

function transferInputData(source, clone) {
  clone.value = source.value; // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.

  if (clone.type === 'radio' && clone.name) {
    clone.name = "mat-clone-".concat(clone.name, "-").concat(cloneUniqueId++);
  }
}
/** Transfers the data of one canvas element to another. */


function transferCanvasData(source, clone) {
  var context = clone.getContext('2d');

  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch (_a) {}
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options that can be used to bind a passive event listener. */


var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
  passive: true
});
/** Options that can be used to bind an active event listener. */

var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
  passive: false
});
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */

var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */

var DragRef = /*#__PURE__*/function () {
  function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    var _this2 = this;

    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DragRef);

    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */

    this._passiveTransform = {
      x: 0,
      y: 0
    };
    /** CSS `transform` that is applied to the element while it's being dragged. */

    this._activeTransform = {
      x: 0,
      y: 0
    };
    /** Emits when the item is being moved. */

    this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Subscription to pointer movement events. */

    this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    /** Subscription to the event that is dispatched when the user lifts their pointer. */

    this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    /** Subscription to the viewport being scrolled. */

    this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    /** Subscription to the viewport being resized. */

    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    /** Cached reference to the boundary element. */

    this._boundaryElement = null;
    /** Whether the native dragging interactions have been enabled on the root element. */

    this._nativeInteractionsEnabled = true;
    /** Elements that can be used to drag the draggable item. */

    this._handles = [];
    /** Registered handles that are currently disabled. */

    this._disabledHandles = new Set();
    /** Layout direction of the item. */

    this._direction = 'ltr';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */

    this.dragStartDelay = 0;
    this._disabled = false;
    /** Emits as the drag sequence is being prepared. */

    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the user starts dragging the item. */

    this.started = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the user has released a drag item, before any animations have started. */

    this.released = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the user stops dragging an item in the container. */

    this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the user has moved the item into a new container. */

    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the user removes the item its container by dragging it into another container. */

    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the user drops the item inside a container. */

    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */

    this.moved = this._moveEvents;
    /** Handler for the `mousedown`/`touchstart` events. */

    this._pointerDown = function (event) {
      _this2.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.


      if (_this2._handles.length) {
        var targetHandle = _this2._handles.find(function (handle) {
          var target = event.target;
          return !!target && (target === handle || handle.contains(target));
        });

        if (targetHandle && !_this2._disabledHandles.has(targetHandle) && !_this2.disabled) {
          _this2._initializeDragSequence(targetHandle, event);
        }
      } else if (!_this2.disabled) {
        _this2._initializeDragSequence(_this2._rootElement, event);
      }
    };
    /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


    this._pointerMove = function (event) {
      // Prevent the default action as early as possible in order to block
      // native actions like dragging the selected text or images with the mouse.
      event.preventDefault();

      var pointerPosition = _this2._getPointerPositionOnPage(event);

      if (!_this2._hasStartedDragging) {
        var distanceX = Math.abs(pointerPosition.x - _this2._pickupPositionOnPage.x);
        var distanceY = Math.abs(pointerPosition.y - _this2._pickupPositionOnPage.y);
        var isOverThreshold = distanceX + distanceY >= _this2._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
        // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
        // in the `pointerMove` subscription, because we're not guaranteed to have one move event
        // per pixel of movement (e.g. if the user moves their pointer quickly).

        if (isOverThreshold) {
          var isDelayElapsed = Date.now() >= _this2._dragStartTime + _this2._getDragStartDelay(event);

          if (!isDelayElapsed) {
            _this2._endDragSequence(event);

            return;
          } // Prevent other drag sequences from starting while something in the container is still
          // being dragged. This can happen while we're waiting for the drop animation to finish
          // and can cause errors, because some elements might still be moving around.


          if (!_this2._dropContainer || !_this2._dropContainer.isDragging()) {
            _this2._hasStartedDragging = true;

            _this2._ngZone.run(function () {
              return _this2._startDragSequence(event);
            });
          }
        }

        return;
      } // We only need the preview dimensions if we have a boundary element.


      if (_this2._boundaryElement) {
        // Cache the preview element rect if we haven't cached it already or if
        // we cached it too early before the element dimensions were computed.
        if (!_this2._previewRect || !_this2._previewRect.width && !_this2._previewRect.height) {
          _this2._previewRect = (_this2._preview || _this2._rootElement).getBoundingClientRect();
        }
      }

      var constrainedPointerPosition = _this2._getConstrainedPointerPosition(pointerPosition);

      _this2._hasMoved = true;
      _this2._lastKnownPointerPosition = pointerPosition;

      _this2._updatePointerDirectionDelta(constrainedPointerPosition);

      if (_this2._dropContainer) {
        _this2._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        var activeTransform = _this2._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - _this2._pickupPositionOnPage.x + _this2._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - _this2._pickupPositionOnPage.y + _this2._passiveTransform.y;

        _this2._applyRootElementTransform(activeTransform.x, activeTransform.y); // Apply transform as attribute if dragging and svg element to work for IE


        if (typeof SVGElement !== 'undefined' && _this2._rootElement instanceof SVGElement) {
          var appliedTransform = "translate(".concat(activeTransform.x, " ").concat(activeTransform.y, ")");

          _this2._rootElement.setAttribute('transform', appliedTransform);
        }
      } // Since this event gets fired for every pixel while dragging, we only
      // want to fire it if the consumer opted into it. Also we have to
      // re-enter the zone because we run all of the events on the outside.


      if (_this2._moveEvents.observers.length) {
        _this2._ngZone.run(function () {
          _this2._moveEvents.next({
            source: _this2,
            pointerPosition: constrainedPointerPosition,
            event: event,
            distance: _this2._getDragDistance(constrainedPointerPosition),
            delta: _this2._pointerDirectionDelta
          });
        });
      }
    };
    /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


    this._pointerUp = function (event) {
      _this2._endDragSequence(event);
    };

    this.withRootElement(element);
    this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);

    _dragDropRegistry.registerDragItem(this);
  }
  /** Whether starting to drag this element is disabled. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DragRef, [{
    key: "disabled",
    get: function get() {
      return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
    },
    set: function set(value) {
      var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);

      if (newValue !== this._disabled) {
        this._disabled = newValue;

        this._toggleNativeDragInteractions();
      }
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */

  }, {
    key: "getPlaceholderElement",
    value: function getPlaceholderElement() {
      return this._placeholder;
    }
    /** Returns the root draggable element. */

  }, {
    key: "getRootElement",
    value: function getRootElement() {
      return this._rootElement;
    }
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     */

  }, {
    key: "getVisibleElement",
    value: function getVisibleElement() {
      return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    }
    /** Registers the handles that can be used to drag the element. */

  }, {
    key: "withHandles",
    value: function withHandles(handles) {
      this._handles = handles.map(function (handle) {
        return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(handle);
      });

      this._handles.forEach(function (handle) {
        return toggleNativeDragInteractions(handle, false);
      });

      this._toggleNativeDragInteractions();

      return this;
    }
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */

  }, {
    key: "withPreviewTemplate",
    value: function withPreviewTemplate(template) {
      this._previewTemplate = template;
      return this;
    }
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */

  }, {
    key: "withPlaceholderTemplate",
    value: function withPlaceholderTemplate(template) {
      this._placeholderTemplate = template;
      return this;
    }
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */

  }, {
    key: "withRootElement",
    value: function withRootElement(rootElement) {
      var _this3 = this;

      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(rootElement);

      if (element !== this._rootElement) {
        if (this._rootElement) {
          this._removeRootElementListeners(this._rootElement);
        }

        this._ngZone.runOutsideAngular(function () {
          element.addEventListener('mousedown', _this3._pointerDown, activeEventListenerOptions);
          element.addEventListener('touchstart', _this3._pointerDown, passiveEventListenerOptions);
        });

        this._initialTransform = undefined;
        this._rootElement = element;
      }

      if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
        this._ownerSVGElement = this._rootElement.ownerSVGElement;
      }

      return this;
    }
    /**
     * Element to which the draggable's position will be constrained.
     */

  }, {
    key: "withBoundaryElement",
    value: function withBoundaryElement(boundaryElement) {
      var _this4 = this;

      this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(boundaryElement) : null;

      this._resizeSubscription.unsubscribe();

      if (boundaryElement) {
        this._resizeSubscription = this._viewportRuler.change(10).subscribe(function () {
          return _this4._containInsideBoundaryOnResize();
        });
      }

      return this;
    }
    /** Removes the dragging functionality from the DOM element. */

  }, {
    key: "dispose",
    value: function dispose() {
      this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
      // stop being considered as dragged once it is removed.


      if (this.isDragging()) {
        // Since we move out the element to the end of the body while it's being
        // dragged, we have to make sure that it's removed if it gets destroyed.
        removeNode(this._rootElement);
      }

      removeNode(this._anchor);

      this._destroyPreview();

      this._destroyPlaceholder();

      this._dragDropRegistry.removeDragItem(this);

      this._removeSubscriptions();

      this.beforeStarted.complete();
      this.started.complete();
      this.released.complete();
      this.ended.complete();
      this.entered.complete();
      this.exited.complete();
      this.dropped.complete();

      this._moveEvents.complete();

      this._handles = [];

      this._disabledHandles.clear();

      this._dropContainer = undefined;

      this._resizeSubscription.unsubscribe();

      this._parentPositions.clear();

      this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = null;
    }
    /** Checks whether the element is currently being dragged. */

  }, {
    key: "isDragging",
    value: function isDragging() {
      return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    }
    /** Resets a standalone drag item to its initial position. */

  }, {
    key: "reset",
    value: function reset() {
      this._rootElement.style.transform = this._initialTransform || '';
      this._activeTransform = {
        x: 0,
        y: 0
      };
      this._passiveTransform = {
        x: 0,
        y: 0
      };
    }
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */

  }, {
    key: "disableHandle",
    value: function disableHandle(handle) {
      if (this._handles.indexOf(handle) > -1) {
        this._disabledHandles.add(handle);
      }
    }
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */

  }, {
    key: "enableHandle",
    value: function enableHandle(handle) {
      this._disabledHandles.delete(handle);
    }
    /** Sets the layout direction of the draggable item. */

  }, {
    key: "withDirection",
    value: function withDirection(direction) {
      this._direction = direction;
      return this;
    }
    /** Sets the container that the item is part of. */

  }, {
    key: "_withDropContainer",
    value: function _withDropContainer(container) {
      this._dropContainer = container;
    }
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */

  }, {
    key: "getFreeDragPosition",
    value: function getFreeDragPosition() {
      var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
      return {
        x: position.x,
        y: position.y
      };
    }
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */

  }, {
    key: "setFreeDragPosition",
    value: function setFreeDragPosition(value) {
      this._activeTransform = {
        x: 0,
        y: 0
      };
      this._passiveTransform.x = value.x;
      this._passiveTransform.y = value.y;

      if (!this._dropContainer) {
        this._applyRootElementTransform(value.x, value.y);
      }

      return this;
    }
    /** Updates the item's sort order based on the last-known pointer position. */

  }, {
    key: "_sortFromLastPointerPosition",
    value: function _sortFromLastPointerPosition() {
      var position = this._lastKnownPointerPosition;

      if (position && this._dropContainer) {
        this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
      }
    }
    /** Unsubscribes from the global subscriptions. */

  }, {
    key: "_removeSubscriptions",
    value: function _removeSubscriptions() {
      this._pointerMoveSubscription.unsubscribe();

      this._pointerUpSubscription.unsubscribe();

      this._scrollSubscription.unsubscribe();
    }
    /** Destroys the preview element and its ViewRef. */

  }, {
    key: "_destroyPreview",
    value: function _destroyPreview() {
      if (this._preview) {
        removeNode(this._preview);
      }

      if (this._previewRef) {
        this._previewRef.destroy();
      }

      this._preview = this._previewRef = null;
    }
    /** Destroys the placeholder element and its ViewRef. */

  }, {
    key: "_destroyPlaceholder",
    value: function _destroyPlaceholder() {
      if (this._placeholder) {
        removeNode(this._placeholder);
      }

      if (this._placeholderRef) {
        this._placeholderRef.destroy();
      }

      this._placeholder = this._placeholderRef = null;
    }
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */

  }, {
    key: "_endDragSequence",
    value: function _endDragSequence(event) {
      var _this5 = this;

      // Note that here we use `isDragging` from the service, rather than from `this`.
      // The difference is that the one from the service reflects whether a dragging sequence
      // has been initiated, whereas the one on `this` includes whether the user has passed
      // the minimum dragging threshold.
      if (!this._dragDropRegistry.isDragging(this)) {
        return;
      }

      this._removeSubscriptions();

      this._dragDropRegistry.stopDragging(this);

      this._toggleNativeDragInteractions();

      if (this._handles) {
        this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
      }

      if (!this._hasStartedDragging) {
        return;
      }

      this.released.next({
        source: this
      });

      if (this._dropContainer) {
        // Stop scrolling immediately, instead of waiting for the animation to finish.
        this._dropContainer._stopScrolling();

        this._animatePreviewToPlaceholder().then(function () {
          _this5._cleanupDragArtifacts(event);

          _this5._cleanupCachedDimensions();

          _this5._dragDropRegistry.stopDragging(_this5);
        });
      } else {
        // Convert the active transform into a passive one. This means that next time
        // the user starts dragging the item, its position will be calculated relatively
        // to the new passive transform.
        this._passiveTransform.x = this._activeTransform.x;
        this._passiveTransform.y = this._activeTransform.y;

        this._ngZone.run(function () {
          _this5.ended.next({
            source: _this5,
            distance: _this5._getDragDistance(_this5._getPointerPositionOnPage(event))
          });
        });

        this._cleanupCachedDimensions();

        this._dragDropRegistry.stopDragging(this);
      }
    }
    /** Starts the dragging sequence. */

  }, {
    key: "_startDragSequence",
    value: function _startDragSequence(event) {
      if (isTouchEvent(event)) {
        this._lastTouchEventTime = Date.now();
      }

      this._toggleNativeDragInteractions();

      var dropContainer = this._dropContainer;

      if (dropContainer) {
        var element = this._rootElement;
        var parent = element.parentNode;

        var preview = this._preview = this._createPreviewElement();

        var placeholder = this._placeholder = this._createPlaceholderElement();

        var anchor = this._anchor = this._anchor || this._document.createComment(''); // Insert an anchor node so that we can restore the element's position in the DOM.


        parent.insertBefore(anchor, element); // We move the element out at the end of the body and we make it hidden, because keeping it in
        // place will throw off the consumer's `:last-child` selectors. We can't remove the element
        // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

        element.style.display = 'none';

        this._document.body.appendChild(parent.replaceChild(placeholder, element));

        getPreviewInsertionPoint(this._document).appendChild(preview);
        this.started.next({
          source: this
        }); // Emit before notifying the container.

        dropContainer.start();
        this._initialContainer = dropContainer;
        this._initialIndex = dropContainer.getItemIndex(this);
      } else {
        this.started.next({
          source: this
        });
        this._initialContainer = this._initialIndex = undefined;
      } // Important to run after we've called `start` on the parent container
      // so that it has had time to resolve its scrollable parents.


      this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
    }
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */

  }, {
    key: "_initializeDragSequence",
    value: function _initializeDragSequence(referenceElement, event) {
      var _this6 = this;

      // Always stop propagation for the event that initializes
      // the dragging sequence, in order to prevent it from potentially
      // starting another sequence for a draggable parent somewhere up the DOM tree.
      event.stopPropagation();
      var isDragging = this.isDragging();
      var isTouchSequence = isTouchEvent(event);
      var isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
      var rootElement = this._rootElement;
      var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now(); // If the event started from an element with the native HTML drag&drop, it'll interfere
      // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
      // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
      // it's flaky and it fails if the user drags it away quickly. Also note that we only want
      // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
      // events from firing on touch devices.

      if (event.target && event.target.draggable && event.type === 'mousedown') {
        event.preventDefault();
      } // Abort if the user is already dragging or is using a mouse button other than the primary one.


      if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
        return;
      } // If we've got handles, we need to disable the tap highlight on the entire root element,
      // otherwise iOS will still add it, even though all the drag interactions on the handle
      // are disabled.


      if (this._handles.length) {
        this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
        rootElement.style.webkitTapHighlightColor = 'transparent';
      }

      this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
      // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

      this._removeSubscriptions();

      this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
      this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
      this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(function (scrollEvent) {
        _this6._updateOnScroll(scrollEvent);
      });

      if (this._boundaryElement) {
        this._boundaryRect = getMutableClientRect(this._boundaryElement);
      } // If we have a custom preview we can't know ahead of time how large it'll be so we position
      // it next to the cursor. The exception is when the consumer has opted into making the preview
      // the same size as the root element, in which case we do know the size.


      var previewTemplate = this._previewTemplate;
      this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
        x: 0,
        y: 0
      } : this._getPointerPositionInElement(referenceElement, event);

      var pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

      this._pointerDirectionDelta = {
        x: 0,
        y: 0
      };
      this._pointerPositionAtLastDirectionChange = {
        x: pointerPosition.x,
        y: pointerPosition.y
      };
      this._dragStartTime = Date.now();

      this._dragDropRegistry.startDragging(this, event);
    }
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */

  }, {
    key: "_cleanupDragArtifacts",
    value: function _cleanupDragArtifacts(event) {
      var _this7 = this;

      // Restore the element's visibility and insert it at its old position in the DOM.
      // It's important that we maintain the position, because moving the element around in the DOM
      // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
      // while moving the existing elements in all other cases.
      this._rootElement.style.display = '';

      this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

      this._destroyPreview();

      this._destroyPlaceholder();

      this._boundaryRect = this._previewRect = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

      this._ngZone.run(function () {
        var container = _this7._dropContainer;
        var currentIndex = container.getItemIndex(_this7);

        var pointerPosition = _this7._getPointerPositionOnPage(event);

        var distance = _this7._getDragDistance(_this7._getPointerPositionOnPage(event));

        var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

        _this7.ended.next({
          source: _this7,
          distance: distance
        });

        _this7.dropped.next({
          item: _this7,
          currentIndex: currentIndex,
          previousIndex: _this7._initialIndex,
          container: container,
          previousContainer: _this7._initialContainer,
          isPointerOverContainer: isPointerOverContainer,
          distance: distance
        });

        container.drop(_this7, currentIndex, _this7._initialContainer, isPointerOverContainer, distance, _this7._initialIndex);
        _this7._dropContainer = _this7._initialContainer;
      });
    }
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */

  }, {
    key: "_updateActiveDropContainer",
    value: function _updateActiveDropContainer(_ref, _ref2) {
      var _this8 = this;

      var x = _ref.x,
          y = _ref.y;
      var rawX = _ref2.x,
          rawY = _ref2.y;

      // Drop container that draggable has been moved into.
      var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
      // initial container, check whether the it's over the initial container. This handles the
      // case where two containers are connected one way and the user tries to undo dragging an
      // item into a new container.


      if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
        newContainer = this._initialContainer;
      }

      if (newContainer && newContainer !== this._dropContainer) {
        this._ngZone.run(function () {
          // Notify the old container that the item has left.
          _this8.exited.next({
            item: _this8,
            container: _this8._dropContainer
          });

          _this8._dropContainer.exit(_this8); // Notify the new container that the item has entered.


          _this8._dropContainer = newContainer;

          _this8._dropContainer.enter(_this8, x, y, newContainer === _this8._initialContainer && // If we're re-entering the initial container and sorting is disabled,
          // put item the into its starting index to begin with.
          newContainer.sortingDisabled ? _this8._initialIndex : undefined);

          _this8.entered.next({
            item: _this8,
            container: newContainer,
            currentIndex: newContainer.getItemIndex(_this8)
          });
        });
      }

      this._dropContainer._startScrollingIfNecessary(rawX, rawY);

      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

      this._preview.style.transform = getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */

  }, {
    key: "_createPreviewElement",
    value: function _createPreviewElement() {
      var previewConfig = this._previewTemplate;
      var previewClass = this.previewClass;
      var previewTemplate = previewConfig ? previewConfig.template : null;
      var preview;

      if (previewTemplate && previewConfig) {
        // Measure the element before we've inserted the preview
        // since the insertion could throw off the measurement.
        var rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
        var viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
        viewRef.detectChanges();
        preview = getRootNode(viewRef, this._document);
        this._previewRef = viewRef;

        if (previewConfig.matchSize) {
          matchElementSize(preview, rootRect);
        } else {
          preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
      } else {
        var element = this._rootElement;
        preview = deepCloneNode(element);
        matchElementSize(preview, element.getBoundingClientRect());
      }

      extendStyles(preview.style, {
        // It's important that we disable the pointer events on the preview, because
        // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
        pointerEvents: 'none',
        // We have to reset the margin, because it can throw off positioning relative to the viewport.
        margin: '0',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: "".concat(this._config.zIndex || 1000)
      });
      toggleNativeDragInteractions(preview, false);
      preview.classList.add('cdk-drag-preview');
      preview.setAttribute('dir', this._direction);

      if (previewClass) {
        if (Array.isArray(previewClass)) {
          previewClass.forEach(function (className) {
            return preview.classList.add(className);
          });
        } else {
          preview.classList.add(previewClass);
        }
      }

      return preview;
    }
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */

  }, {
    key: "_animatePreviewToPlaceholder",
    value: function _animatePreviewToPlaceholder() {
      var _this9 = this;

      // If the user hasn't moved yet, the transitionend event won't fire.
      if (!this._hasMoved) {
        return Promise.resolve();
      }

      var placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


      this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


      this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
      // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
      // apply its style, we take advantage of the available info to figure out whether we need to
      // bind the event in the first place.

      var duration = getTransformTransitionDurationInMs(this._preview);

      if (duration === 0) {
        return Promise.resolve();
      }

      return this._ngZone.runOutsideAngular(function () {
        return new Promise(function (resolve) {
          var handler = function handler(event) {
            if (!event || event.target === _this9._preview && event.propertyName === 'transform') {
              _this9._preview.removeEventListener('transitionend', handler);

              resolve();
              clearTimeout(timeout);
            }
          }; // If a transition is short enough, the browser might not fire the `transitionend` event.
          // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
          // fire if the transition hasn't completed when it was supposed to.


          var timeout = setTimeout(handler, duration * 1.5);

          _this9._preview.addEventListener('transitionend', handler);
        });
      });
    }
    /** Creates an element that will be shown instead of the current element while dragging. */

  }, {
    key: "_createPlaceholderElement",
    value: function _createPlaceholderElement() {
      var placeholderConfig = this._placeholderTemplate;
      var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
      var placeholder;

      if (placeholderTemplate) {
        this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

        this._placeholderRef.detectChanges();

        placeholder = getRootNode(this._placeholderRef, this._document);
      } else {
        placeholder = deepCloneNode(this._rootElement);
      }

      placeholder.classList.add('cdk-drag-placeholder');
      return placeholder;
    }
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */

  }, {
    key: "_getPointerPositionInElement",
    value: function _getPointerPositionInElement(referenceElement, event) {
      var elementRect = this._rootElement.getBoundingClientRect();

      var handleElement = referenceElement === this._rootElement ? null : referenceElement;
      var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
      var point = isTouchEvent(event) ? event.targetTouches[0] : event;

      var scrollPosition = this._getViewportScrollPosition();

      var x = point.pageX - referenceRect.left - scrollPosition.left;
      var y = point.pageY - referenceRect.top - scrollPosition.top;
      return {
        x: referenceRect.left - elementRect.left + x,
        y: referenceRect.top - elementRect.top + y
      };
    }
    /** Determines the point of the page that was touched by the user. */

  }, {
    key: "_getPointerPositionOnPage",
    value: function _getPointerPositionOnPage(event) {
      var scrollPosition = this._getViewportScrollPosition();

      var point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
      // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
      // to have a value, but Firefox in device emulation mode has a bug where both can be empty
      // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
      // throwing an error. The value returned here will be incorrect, but since this only
      // breaks inside a developer tool and the value is only used for secondary information,
      // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
      event.touches[0] || event.changedTouches[0] || {
        pageX: 0,
        pageY: 0
      } : event;
      var x = point.pageX - scrollPosition.left;
      var y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
      // coordinate system

      if (this._ownerSVGElement) {
        var svgMatrix = this._ownerSVGElement.getScreenCTM();

        if (svgMatrix) {
          var svgPoint = this._ownerSVGElement.createSVGPoint();

          svgPoint.x = x;
          svgPoint.y = y;
          return svgPoint.matrixTransform(svgMatrix.inverse());
        }
      }

      return {
        x: x,
        y: y
      };
    }
    /** Gets the pointer position on the page, accounting for any position constraints. */

  }, {
    key: "_getConstrainedPointerPosition",
    value: function _getConstrainedPointerPosition(point) {
      var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;

      var _ref3 = this.constrainPosition ? this.constrainPosition(point, this) : point,
          x = _ref3.x,
          y = _ref3.y;

      if (this.lockAxis === 'x' || dropContainerLock === 'x') {
        y = this._pickupPositionOnPage.y;
      } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
        x = this._pickupPositionOnPage.x;
      }

      if (this._boundaryRect) {
        var _this$_pickupPosition = this._pickupPositionInElement,
            pickupX = _this$_pickupPosition.x,
            pickupY = _this$_pickupPosition.y;
        var boundaryRect = this._boundaryRect;
        var previewRect = this._previewRect;
        var minY = boundaryRect.top + pickupY;
        var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
        var minX = boundaryRect.left + pickupX;
        var maxX = boundaryRect.right - (previewRect.width - pickupX);
        x = clamp(x, minX, maxX);
        y = clamp(y, minY, maxY);
      }

      return {
        x: x,
        y: y
      };
    }
    /** Updates the current drag delta, based on the user's current pointer position on the page. */

  }, {
    key: "_updatePointerDirectionDelta",
    value: function _updatePointerDirectionDelta(pointerPositionOnPage) {
      var x = pointerPositionOnPage.x,
          y = pointerPositionOnPage.y;
      var delta = this._pointerDirectionDelta;
      var positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

      var changeX = Math.abs(x - positionSinceLastChange.x);
      var changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
      // to change for every pixel, otherwise anything that depends on it can look erratic.
      // To make the delta more consistent, we track how much the user has moved since the last
      // delta change and we only update it after it has reached a certain threshold.

      if (changeX > this._config.pointerDirectionChangeThreshold) {
        delta.x = x > positionSinceLastChange.x ? 1 : -1;
        positionSinceLastChange.x = x;
      }

      if (changeY > this._config.pointerDirectionChangeThreshold) {
        delta.y = y > positionSinceLastChange.y ? 1 : -1;
        positionSinceLastChange.y = y;
      }

      return delta;
    }
    /** Toggles the native drag interactions, based on how many handles are registered. */

  }, {
    key: "_toggleNativeDragInteractions",
    value: function _toggleNativeDragInteractions() {
      if (!this._rootElement || !this._handles) {
        return;
      }

      var shouldEnable = this._handles.length > 0 || !this.isDragging();

      if (shouldEnable !== this._nativeInteractionsEnabled) {
        this._nativeInteractionsEnabled = shouldEnable;
        toggleNativeDragInteractions(this._rootElement, shouldEnable);
      }
    }
    /** Removes the manually-added event listeners from the root element. */

  }, {
    key: "_removeRootElementListeners",
    value: function _removeRootElementListeners(element) {
      element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
      element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    }
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */

  }, {
    key: "_applyRootElementTransform",
    value: function _applyRootElementTransform(x, y) {
      var transform = getTransform(x, y); // Cache the previous transform amount only after the first drag sequence, because
      // we don't want our own transforms to stack on top of each other.

      if (this._initialTransform == null) {
        this._initialTransform = this._rootElement.style.transform || '';
      } // Preserve the previous `transform` value, if there was one. Note that we apply our own
      // transform before the user's, because things like rotation can affect which direction
      // the element will be translated towards.


      this._rootElement.style.transform = this._initialTransform ? transform + ' ' + this._initialTransform : transform;
    }
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */

  }, {
    key: "_getDragDistance",
    value: function _getDragDistance(currentPosition) {
      var pickupPosition = this._pickupPositionOnPage;

      if (pickupPosition) {
        return {
          x: currentPosition.x - pickupPosition.x,
          y: currentPosition.y - pickupPosition.y
        };
      }

      return {
        x: 0,
        y: 0
      };
    }
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */

  }, {
    key: "_cleanupCachedDimensions",
    value: function _cleanupCachedDimensions() {
      this._boundaryRect = this._previewRect = undefined;

      this._parentPositions.clear();
    }
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */

  }, {
    key: "_containInsideBoundaryOnResize",
    value: function _containInsideBoundaryOnResize() {
      var _this$_passiveTransfo = this._passiveTransform,
          x = _this$_passiveTransfo.x,
          y = _this$_passiveTransfo.y;

      if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
        return;
      }

      var boundaryRect = this._boundaryElement.getBoundingClientRect();

      var elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
      // different tab). Don't do anything in this case so we don't clear the user's position.


      if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
        return;
      }

      var leftOverflow = boundaryRect.left - elementRect.left;
      var rightOverflow = elementRect.right - boundaryRect.right;
      var topOverflow = boundaryRect.top - elementRect.top;
      var bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
      // do much to make it fit so we just anchor it to the left.

      if (boundaryRect.width > elementRect.width) {
        if (leftOverflow > 0) {
          x += leftOverflow;
        }

        if (rightOverflow > 0) {
          x -= rightOverflow;
        }
      } else {
        x = 0;
      } // If the element has become taller than the boundary, we can't
      // do much to make it fit so we just anchor it to the top.


      if (boundaryRect.height > elementRect.height) {
        if (topOverflow > 0) {
          y += topOverflow;
        }

        if (bottomOverflow > 0) {
          y -= bottomOverflow;
        }
      } else {
        y = 0;
      }

      if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
        this.setFreeDragPosition({
          y: y,
          x: x
        });
      }
    }
    /** Gets the drag start delay, based on the event type. */

  }, {
    key: "_getDragStartDelay",
    value: function _getDragStartDelay(event) {
      var value = this.dragStartDelay;

      if (typeof value === 'number') {
        return value;
      } else if (isTouchEvent(event)) {
        return value.touch;
      }

      return value ? value.mouse : 0;
    }
    /** Updates the internal state of the draggable element when scrolling has occurred. */

  }, {
    key: "_updateOnScroll",
    value: function _updateOnScroll(event) {
      var scrollDifference = this._parentPositions.handleScroll(event);

      if (scrollDifference) {
        var target = event.target; // ClientRect dimensions are based on the scroll position of the page and its parent node so
        // we have to update the cached boundary ClientRect if the user has scrolled. Check for
        // the `document` specifically since IE doesn't support `contains` on it.

        if (this._boundaryRect && (target === this._document || target !== this._boundaryElement && target.contains(this._boundaryElement))) {
          adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
        }

        this._pickupPositionOnPage.x += scrollDifference.left;
        this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
        // it isn't relative to the viewport like the preview inside a drop list.

        if (!this._dropContainer) {
          this._activeTransform.x -= scrollDifference.left;
          this._activeTransform.y -= scrollDifference.top;

          this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
        }
      }
    }
    /** Gets the scroll position of the viewport. */

  }, {
    key: "_getViewportScrollPosition",
    value: function _getViewportScrollPosition() {
      var cachedPosition = this._parentPositions.positions.get(this._document);

      return cachedPosition ? cachedPosition.scrollPosition : this._viewportRuler.getViewportScrollPosition();
    }
  }]);

  return DragRef;
}();
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */


function getTransform(x, y) {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return "translate3d(".concat(Math.round(x), "px, ").concat(Math.round(y), "px, 0)");
}
/** Clamps a value between a minimum and a maximum. */


function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param node Node to be removed.
 */


function removeNode(node) {
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
/** Determines whether an event is a touch event. */


function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/** Gets the element into which the drag preview should be inserted. */


function getPreviewInsertionPoint(documentRef) {
  // We can't use the body if the user is in fullscreen mode,
  // because the preview will render under the fullscreen element.
  // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
  return documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */


function getRootNode(viewRef, _document) {
  var rootNodes = viewRef.rootNodes;

  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }

  var wrapper = _document.createElement('div');

  rootNodes.forEach(function (node) {
    return wrapper.appendChild(node);
  });
  return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */


function matchElementSize(target, sourceRect) {
  target.style.width = "".concat(sourceRect.width, "px");
  target.style.height = "".concat(sourceRect.height, "px");
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */


function moveItemInArray(array, fromIndex, toIndex) {
  var from = clamp$1(fromIndex, array.length - 1);
  var to = clamp$1(toIndex, array.length - 1);

  if (from === to) {
    return;
  }

  var target = array[from];
  var delta = to < from ? -1 : 1;

  for (var i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }

  array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */


function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  var from = clamp$1(currentIndex, currentArray.length - 1);
  var to = clamp$1(targetIndex, targetArray.length);

  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */


function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  var to = clamp$1(targetIndex, targetArray.length);

  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
/** Clamps a number between zero and a maximum. */


function clamp$1(value, max) {
  return Math.max(0, Math.min(max, value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */


var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */

var SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 */

var AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */

var DropListRef = /*#__PURE__*/function () {
  function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    var _this10 = this;

    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DropListRef);

    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    /** Whether starting a dragging sequence from this container is disabled. */

    this.disabled = false;
    /** Whether sorting items within the list is disabled. */

    this.sortingDisabled = false;
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */

    this.autoScrollDisabled = false;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */

    this.enterPredicate = function () {
      return true;
    };
    /** Emits right before dragging has started. */


    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /**
     * Emits when the user has moved a new drag item into this container.
     */

    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */

    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the user drops an item inside the container. */

    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits as the user is swapping items while actively dragging. */

    this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Whether an item in the list is being dragged. */

    this._isDragging = false;
    /** Cache of the dimensions of all the items inside the container. */

    this._itemPositions = [];
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occured and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */

    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
    /** Drop lists that are connected to the current one. */

    this._siblings = [];
    /** Direction in which the list is oriented. */

    this._orientation = 'vertical';
    /** Connected siblings that currently have a dragged item. */

    this._activeSiblings = new Set();
    /** Layout direction of the drop list. */

    this._direction = 'ltr';
    /** Subscription to the window being scrolled. */

    this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    /** Vertical direction in which the list is currently scrolling. */

    this._verticalScrollDirection = 0
    /* NONE */
    ;
    /** Horizontal direction in which the list is currently scrolling. */

    this._horizontalScrollDirection = 0
    /* NONE */
    ;
    /** Used to signal to the current auto-scroll sequence when to stop. */

    this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

    this._cachedShadowRoot = null;
    /** Starts the interval that'll auto-scroll the element. */

    this._startScrollInterval = function () {
      _this10._stopScrolling();

      Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_9__["animationFrameScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this10._stopScrollTimers)).subscribe(function () {
        var node = _this10._scrollNode;

        if (_this10._verticalScrollDirection === 1
        /* UP */
        ) {
            incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
          } else if (_this10._verticalScrollDirection === 2
        /* DOWN */
        ) {
            incrementVerticalScroll(node, AUTO_SCROLL_STEP);
          }

        if (_this10._horizontalScrollDirection === 1
        /* LEFT */
        ) {
            incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
          } else if (_this10._horizontalScrollDirection === 2
        /* RIGHT */
        ) {
            incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
          }
      });
    };

    this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(element);
    this._document = _document;
    this.withScrollableParents([this.element]);

    _dragDropRegistry.registerDropContainer(this);

    this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
  }
  /** Removes the drop list functionality from the DOM element. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DropListRef, [{
    key: "dispose",
    value: function dispose() {
      this._stopScrolling();

      this._stopScrollTimers.complete();

      this._viewportScrollSubscription.unsubscribe();

      this.beforeStarted.complete();
      this.entered.complete();
      this.exited.complete();
      this.dropped.complete();
      this.sorted.complete();

      this._activeSiblings.clear();

      this._scrollNode = null;

      this._parentPositions.clear();

      this._dragDropRegistry.removeDropContainer(this);
    }
    /** Whether an item from this list is currently being dragged. */

  }, {
    key: "isDragging",
    value: function isDragging() {
      return this._isDragging;
    }
    /** Starts dragging an item. */

  }, {
    key: "start",
    value: function start() {
      var _this11 = this;

      var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(this.element).style;
      this.beforeStarted.next();
      this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
      // scrolling. The browser seems to round the value based on the snapping points which means
      // that we can't increment/decrement the scroll position.

      this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
      styles.scrollSnapType = styles.msScrollSnapType = 'none';

      this._cacheItems();

      this._siblings.forEach(function (sibling) {
        return sibling._startReceiving(_this11);
      });

      this._viewportScrollSubscription.unsubscribe();

      this._listenToScrollEvents();
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param index Index at which the item entered. If omitted, the container will try to figure it
     *   out automatically.
     */

  }, {
    key: "enter",
    value: function enter(item, pointerX, pointerY, index) {
      this.start(); // If sorting is disabled, we want the item to return to its starting
      // position if the user is returning it to its initial container.

      var newIndex;

      if (index == null) {
        newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

        if (newIndex === -1) {
          // We use the coordinates of where the item entered the drop
          // zone to figure out at which index it should be inserted.
          newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        }
      } else {
        newIndex = index;
      }

      var activeDraggables = this._activeDraggables;
      var currentIndex = activeDraggables.indexOf(item);
      var placeholder = item.getPlaceholderElement();
      var newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
      // it means that we're trying to restore the item to its initial position. In this
      // case we should use the next item from the list as the reference.

      if (newPositionReference === item) {
        newPositionReference = activeDraggables[newIndex + 1];
      } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
      // into another container and back again), we have to ensure that it isn't duplicated.


      if (currentIndex > -1) {
        activeDraggables.splice(currentIndex, 1);
      } // Don't use items that are being dragged as a reference, because
      // their element has been moved down to the bottom of the body.


      if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
        var element = newPositionReference.getRootElement();
        element.parentElement.insertBefore(placeholder, element);
        activeDraggables.splice(newIndex, 0, item);
      } else if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
        var reference = activeDraggables[0].getRootElement();
        reference.parentNode.insertBefore(placeholder, reference);
        activeDraggables.unshift(item);
      } else {
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(this.element).appendChild(placeholder);
        activeDraggables.push(item);
      } // The transform needs to be cleared so it doesn't throw off the measurements.


      placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
      // but we need to refresh them since the amount of items has changed and also parent rects.

      this._cacheItemPositions();

      this._cacheParentPositions();

      this.entered.next({
        item: item,
        container: this,
        currentIndex: this.getItemIndex(item)
      });
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */

  }, {
    key: "exit",
    value: function exit(item) {
      this._reset();

      this.exited.next({
        item: item,
        container: this
      });
    }
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @param previousIndex Index of the item when dragging started.
     *
     * @breaking-change 11.0.0 `previousIndex` parameter to become required.
     */

  }, {
    key: "drop",
    value: function drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
      this._reset(); // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.


      if (previousIndex == null) {
        previousIndex = previousContainer.getItemIndex(item);
      }

      this.dropped.next({
        item: item,
        currentIndex: currentIndex,
        previousIndex: previousIndex,
        container: this,
        previousContainer: previousContainer,
        isPointerOverContainer: isPointerOverContainer,
        distance: distance
      });
    }
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */

  }, {
    key: "withItems",
    value: function withItems(items) {
      var _this12 = this;

      var previousItems = this._draggables;
      this._draggables = items;
      items.forEach(function (item) {
        return item._withDropContainer(_this12);
      });

      if (this.isDragging()) {
        var draggedItems = previousItems.filter(function (item) {
          return item.isDragging();
        }); // If all of the items being dragged were removed
        // from the list, abort the current drag sequence.

        if (draggedItems.every(function (item) {
          return items.indexOf(item) === -1;
        })) {
          this._reset();
        } else {
          this._cacheItems();
        }
      }

      return this;
    }
    /** Sets the layout direction of the drop list. */

  }, {
    key: "withDirection",
    value: function withDirection(direction) {
      this._direction = direction;
      return this;
    }
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */

  }, {
    key: "connectedTo",
    value: function connectedTo(_connectedTo) {
      this._siblings = _connectedTo.slice();
      return this;
    }
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */

  }, {
    key: "withOrientation",
    value: function withOrientation(orientation) {
      this._orientation = orientation;
      return this;
    }
    /**
     * Sets which parent elements are can be scrolled while the user is dragging.
     * @param elements Elements that can be scrolled.
     */

  }, {
    key: "withScrollableParents",
    value: function withScrollableParents(elements) {
      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(this.element); // We always allow the current element to be scrollable
      // so we need to ensure that it's in the array.

      this._scrollableElements = elements.indexOf(element) === -1 ? [element].concat(Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(elements)) : elements.slice();
      return this;
    }
    /** Gets the scrollable parents that are registered with this drop container. */

  }, {
    key: "getScrollableParents",
    value: function getScrollableParents() {
      return this._scrollableElements;
    }
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */

  }, {
    key: "getItemIndex",
    value: function getItemIndex(item) {
      if (!this._isDragging) {
        return this._draggables.indexOf(item);
      } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
      // The rest of the logic still stands no matter what orientation we're in, however
      // we need to invert the array when determining the index.


      var items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
      return findIndex(items, function (currentItem) {
        return currentItem.drag === item;
      });
    }
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */

  }, {
    key: "isReceiving",
    value: function isReceiving() {
      return this._activeSiblings.size > 0;
    }
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */

  }, {
    key: "_sortItem",
    value: function _sortItem(item, pointerX, pointerY, pointerDelta) {
      // Don't sort the item if sorting is disabled or it's out of range.
      if (this.sortingDisabled || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        return;
      }

      var siblings = this._itemPositions;

      var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

      if (newIndex === -1 && siblings.length > 0) {
        return;
      }

      var isHorizontal = this._orientation === 'horizontal';
      var currentIndex = findIndex(siblings, function (currentItem) {
        return currentItem.drag === item;
      });
      var siblingAtNewPosition = siblings[newIndex];
      var currentPosition = siblings[currentIndex].clientRect;
      var newPosition = siblingAtNewPosition.clientRect;
      var delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

      var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


      var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
      // We use this to check whether an item has been moved as a result of the sorting.


      var oldOrder = siblings.slice(); // Shuffle the array in place.

      moveItemInArray(siblings, currentIndex, newIndex);
      this.sorted.next({
        previousIndex: currentIndex,
        currentIndex: newIndex,
        container: this,
        item: item
      });
      siblings.forEach(function (sibling, index) {
        // Don't do anything if the position hasn't changed.
        if (oldOrder[index] === sibling) {
          return;
        }

        var isDraggedItem = sibling.drag === item;
        var offset = isDraggedItem ? itemOffset : siblingOffset;
        var elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

        sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
        // client rects to reflect their new position, as well as swap their positions in the cache.
        // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
        // elements may be mid-animation which will give us a wrong result.

        if (isHorizontal) {
          // Round the transforms since some browsers will
          // blur the elements, for sub-pixel transforms.
          elementToOffset.style.transform = "translate3d(".concat(Math.round(sibling.offset), "px, 0, 0)");
          adjustClientRect(sibling.clientRect, 0, offset);
        } else {
          elementToOffset.style.transform = "translate3d(0, ".concat(Math.round(sibling.offset), "px, 0)");
          adjustClientRect(sibling.clientRect, offset, 0);
        }
      }); // Note that it's important that we do this after the client rects have been adjusted.

      this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
      this._previousSwap.drag = siblingAtNewPosition.drag;
      this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    }
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */

  }, {
    key: "_startScrollingIfNecessary",
    value: function _startScrollingIfNecessary(pointerX, pointerY) {
      var _this13 = this;

      if (this.autoScrollDisabled) {
        return;
      }

      var scrollNode;
      var verticalScrollDirection = 0
      /* NONE */
      ;
      var horizontalScrollDirection = 0
      /* NONE */
      ; // Check whether we should start scrolling any of the parent containers.

      this._parentPositions.positions.forEach(function (position, element) {
        // We have special handling for the `document` below. Also this would be
        // nicer with a  for...of loop, but it requires changing a compiler flag.
        if (element === _this13._document || !position.clientRect || scrollNode) {
          return;
        }

        if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
          var _getElementScrollDire = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

          var _getElementScrollDire2 = Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_getElementScrollDire, 2);

          verticalScrollDirection = _getElementScrollDire2[0];
          horizontalScrollDirection = _getElementScrollDire2[1];

          if (verticalScrollDirection || horizontalScrollDirection) {
            scrollNode = element;
          }
        }
      }); // Otherwise check if we can start scrolling the viewport.


      if (!verticalScrollDirection && !horizontalScrollDirection) {
        var _this$_viewportRuler$ = this._viewportRuler.getViewportSize(),
            width = _this$_viewportRuler$.width,
            height = _this$_viewportRuler$.height;

        var clientRect = {
          width: width,
          height: height,
          top: 0,
          right: width,
          bottom: height,
          left: 0
        };
        verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
        horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
        scrollNode = window;
      }

      if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
        this._verticalScrollDirection = verticalScrollDirection;
        this._horizontalScrollDirection = horizontalScrollDirection;
        this._scrollNode = scrollNode;

        if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
          this._ngZone.runOutsideAngular(this._startScrollInterval);
        } else {
          this._stopScrolling();
        }
      }
    }
    /** Stops any currently-running auto-scroll sequences. */

  }, {
    key: "_stopScrolling",
    value: function _stopScrolling() {
      this._stopScrollTimers.next();
    }
    /** Caches the positions of the configured scrollable parents. */

  }, {
    key: "_cacheParentPositions",
    value: function _cacheParentPositions() {
      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(this.element);

      this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
      // so we can take advantage of the cached `ClientRect`.


      this._clientRect = this._parentPositions.positions.get(element).clientRect;
    }
    /** Refreshes the position cache of the items and sibling containers. */

  }, {
    key: "_cacheItemPositions",
    value: function _cacheItemPositions() {
      var isHorizontal = this._orientation === 'horizontal';
      this._itemPositions = this._activeDraggables.map(function (drag) {
        var elementToMeasure = drag.getVisibleElement();
        return {
          drag: drag,
          offset: 0,
          clientRect: getMutableClientRect(elementToMeasure)
        };
      }).sort(function (a, b) {
        return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
      });
    }
    /** Resets the container to its initial state. */

  }, {
    key: "_reset",
    value: function _reset() {
      var _this14 = this;

      this._isDragging = false;
      var styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(this.element).style;
      styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

      this._activeDraggables.forEach(function (item) {
        var rootElement = item.getRootElement();

        if (rootElement) {
          rootElement.style.transform = '';
        }
      });

      this._siblings.forEach(function (sibling) {
        return sibling._stopReceiving(_this14);
      });

      this._activeDraggables = [];
      this._itemPositions = [];
      this._previousSwap.drag = null;
      this._previousSwap.delta = 0;
      this._previousSwap.overlaps = false;

      this._stopScrolling();

      this._viewportScrollSubscription.unsubscribe();

      this._parentPositions.clear();
    }
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */

  }, {
    key: "_getSiblingOffsetPx",
    value: function _getSiblingOffsetPx(currentIndex, siblings, delta) {
      var isHorizontal = this._orientation === 'horizontal';
      var currentPosition = siblings[currentIndex].clientRect;
      var immediateSibling = siblings[currentIndex + delta * -1];
      var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

      if (immediateSibling) {
        var start = isHorizontal ? 'left' : 'top';
        var end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
        // after it in the direction in which the user is dragging, or vice versa. We add it to the
        // offset in order to push the element to where it will be when it's inline and is influenced
        // by the `margin` of its siblings.

        if (delta === -1) {
          siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
        } else {
          siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
        }
      }

      return siblingOffset;
    }
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */

  }, {
    key: "_getItemOffsetPx",
    value: function _getItemOffsetPx(currentPosition, newPosition, delta) {
      var isHorizontal = this._orientation === 'horizontal';
      var itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

      if (delta === -1) {
        itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
      }

      return itemOffset;
    }
    /**
     * Checks if pointer is entering in the first position
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     */

  }, {
    key: "_shouldEnterAsFirstChild",
    value: function _shouldEnterAsFirstChild(pointerX, pointerY) {
      if (!this._activeDraggables.length) {
        return false;
      }

      var itemPositions = this._itemPositions;
      var isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
      // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

      var reversed = itemPositions[0].drag !== this._activeDraggables[0];

      if (reversed) {
        var lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
        return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
      } else {
        var firstItemRect = itemPositions[0].clientRect;
        return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
      }
    }
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */

  }, {
    key: "_getItemIndexFromPointerPosition",
    value: function _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
      var _this15 = this;

      var isHorizontal = this._orientation === 'horizontal';
      return findIndex(this._itemPositions, function (_ref4, _, array) {
        var drag = _ref4.drag,
            clientRect = _ref4.clientRect;

        if (drag === item) {
          // If there's only one item left in the container, it must be
          // the dragged item itself so we use it as a reference.
          return array.length < 2;
        }

        if (delta) {
          var direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
          // the item after we made the swap, and they didn't change the direction in which they're
          // dragging, we don't consider it a direction swap.

          if (drag === _this15._previousSwap.drag && _this15._previousSwap.overlaps && direction === _this15._previousSwap.delta) {
            return false;
          }
        }

        return isHorizontal ? // Round these down since most browsers report client rects with
        // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
        pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
      });
    }
    /** Caches the current items in the list and their positions. */

  }, {
    key: "_cacheItems",
    value: function _cacheItems() {
      this._activeDraggables = this._draggables.slice();

      this._cacheItemPositions();

      this._cacheParentPositions();
    }
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */

  }, {
    key: "_isOverContainer",
    value: function _isOverContainer(x, y) {
      return isInsideClientRect(this._clientRect, x, y);
    }
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */

  }, {
    key: "_getSiblingContainerFromPosition",
    value: function _getSiblingContainerFromPosition(item, x, y) {
      return this._siblings.find(function (sibling) {
        return sibling._canReceive(item, x, y);
      });
    }
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */

  }, {
    key: "_canReceive",
    value: function _canReceive(item, x, y) {
      if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
        return false;
      }

      var elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
      // the client rect is probably scrolled out of the view.


      if (!elementFromPoint) {
        return false;
      }

      var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(this.element); // The `ClientRect`, that we're using to find the container over which the user is
      // hovering, doesn't give us any information on whether the element has been scrolled
      // out of the view or whether it's overlapping with other containers. This means that
      // we could end up transferring the item into a container that's invisible or is positioned
      // below another one. We use the result from `elementFromPoint` to get the top-most element
      // at the pointer position and to find whether it's one of the intersecting drop containers.

      return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    }
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */

  }, {
    key: "_startReceiving",
    value: function _startReceiving(sibling) {
      var activeSiblings = this._activeSiblings;

      if (!activeSiblings.has(sibling)) {
        activeSiblings.add(sibling);

        this._cacheParentPositions();

        this._listenToScrollEvents();
      }
    }
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */

  }, {
    key: "_stopReceiving",
    value: function _stopReceiving(sibling) {
      this._activeSiblings.delete(sibling);

      this._viewportScrollSubscription.unsubscribe();
    }
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */

  }, {
    key: "_listenToScrollEvents",
    value: function _listenToScrollEvents() {
      var _this16 = this;

      this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(function (event) {
        if (_this16.isDragging()) {
          var scrollDifference = _this16._parentPositions.handleScroll(event);

          if (scrollDifference) {
            // Since we know the amount that the user has scrolled we can shift all of the
            // client rectangles ourselves. This is cheaper than re-measuring everything and
            // we can avoid inconsistent behavior where we might be measuring the element before
            // its position has changed.
            _this16._itemPositions.forEach(function (_ref5) {
              var clientRect = _ref5.clientRect;
              adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
            }); // We need two loops for this, because we want all of the cached
            // positions to be up-to-date before we re-sort the item.


            _this16._itemPositions.forEach(function (_ref6) {
              var drag = _ref6.drag;

              if (_this16._dragDropRegistry.isDragging(drag)) {
                // We need to re-sort the item manually, because the pointer move
                // events won't be dispatched while the user is scrolling.
                drag._sortFromLastPointerPosition();
              }
            });
          }
        } else if (_this16.isReceiving()) {
          _this16._cacheParentPositions();
        }
      });
    }
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     */

  }, {
    key: "_getShadowRoot",
    value: function _getShadowRoot() {
      if (!this._cachedShadowRoot) {
        var shadowRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(this.element));

        this._cachedShadowRoot = shadowRoot || this._document;
      }

      return this._cachedShadowRoot;
    }
  }]);

  return DropListRef;
}();
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @param array Array in which to look for matches.
 * @param predicate Function used to determine whether an item is a match.
 */


function findIndex(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}
/**
 * Increments the vertical scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */


function incrementVerticalScroll(node, amount) {
  if (node === window) {
    node.scrollBy(0, amount);
  } else {
    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
    node.scrollTop += amount;
  }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */


function incrementHorizontalScroll(node, amount) {
  if (node === window) {
    node.scrollBy(amount, 0);
  } else {
    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
    node.scrollLeft += amount;
  }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */


function getVerticalScrollDirection(clientRect, pointerY) {
  var top = clientRect.top,
      bottom = clientRect.bottom,
      height = clientRect.height;
  var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return 1
    /* UP */
    ;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return 2
    /* DOWN */
    ;
  }

  return 0
  /* NONE */
  ;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */


function getHorizontalScrollDirection(clientRect, pointerX) {
  var left = clientRect.left,
      right = clientRect.right,
      width = clientRect.width;
  var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return 1
    /* LEFT */
    ;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return 2
    /* RIGHT */
    ;
  }

  return 0
  /* NONE */
  ;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */


function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
  var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  var verticalScrollDirection = 0
  /* NONE */
  ;
  var horizontalScrollDirection = 0
  /* NONE */
  ; // Note that we here we do some extra checks for whether the element is actually scrollable in
  // a certain direction and we only assign the scroll direction if it is. We do this so that we
  // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
  // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

  if (computedVertical) {
    var scrollTop = element.scrollTop;

    if (computedVertical === 1
    /* UP */
    ) {
        if (scrollTop > 0) {
          verticalScrollDirection = 1
          /* UP */
          ;
        }
      } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = 2
      /* DOWN */
      ;
    }
  }

  if (computedHorizontal) {
    var scrollLeft = element.scrollLeft;

    if (computedHorizontal === 1
    /* LEFT */
    ) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = 1
          /* LEFT */
          ;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
      horizontalScrollDirection = 2
      /* RIGHT */
      ;
    }
  }

  return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Event options that can be used to bind an active, capturing event. */


var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
  passive: false,
  capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.

var DragDropRegistry = /*#__PURE__*/function () {
  function DragDropRegistry(_ngZone, _document) {
    var _this17 = this;

    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DragDropRegistry);

    this._ngZone = _ngZone;
    /** Registered drop container instances. */

    this._dropInstances = new Set();
    /** Registered drag item instances. */

    this._dragInstances = new Set();
    /** Drag item instances that are currently being dragged. */

    this._activeDragInstances = new Set();
    /** Keeps track of the event listeners that we've bound to the `document`. */

    this._globalListeners = new Map();
    /**
     * Emits the `touchmove` or `mousemove` events that are dispatched
     * while the user is dragging a drag item instance.
     */

    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /**
     * Emits the `touchend` or `mouseup` events that are dispatched
     * while the user is dragging a drag item instance.
     */

    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the viewport has been scrolled while the user is dragging an item. */

    this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /**
     * Event listener that will prevent the default browser action while the user is dragging.
     * @param event Event whose default action should be prevented.
     */

    this._preventDefaultWhileDragging = function (event) {
      if (_this17._activeDragInstances.size) {
        event.preventDefault();
      }
    };
    /** Event listener for `touchmove` that is bound even if no dragging is happening. */


    this._persistentTouchmoveListener = function (event) {
      if (_this17._activeDragInstances.size) {
        event.preventDefault();

        _this17.pointerMove.next(event);
      }
    };

    this._document = _document;
  }
  /** Adds a drop container to the registry. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DragDropRegistry, [{
    key: "registerDropContainer",
    value: function registerDropContainer(drop) {
      if (!this._dropInstances.has(drop)) {
        this._dropInstances.add(drop);
      }
    }
    /** Adds a drag item instance to the registry. */

  }, {
    key: "registerDragItem",
    value: function registerDragItem(drag) {
      var _this18 = this;

      this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
      // won't preventDefault on a dynamically-added `touchmove` listener.
      // See https://bugs.webkit.org/show_bug.cgi?id=184250.


      if (this._dragInstances.size === 1) {
        this._ngZone.runOutsideAngular(function () {
          // The event handler has to be explicitly active,
          // because newer browsers make it passive by default.
          _this18._document.addEventListener('touchmove', _this18._persistentTouchmoveListener, activeCapturingEventOptions);
        });
      }
    }
    /** Removes a drop container from the registry. */

  }, {
    key: "removeDropContainer",
    value: function removeDropContainer(drop) {
      this._dropInstances.delete(drop);
    }
    /** Removes a drag item instance from the registry. */

  }, {
    key: "removeDragItem",
    value: function removeDragItem(drag) {
      this._dragInstances.delete(drag);

      this.stopDragging(drag);

      if (this._dragInstances.size === 0) {
        this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
      }
    }
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */

  }, {
    key: "startDragging",
    value: function startDragging(drag, event) {
      var _this19 = this;

      // Do not process the same drag twice to avoid memory leaks and redundant listeners
      if (this._activeDragInstances.has(drag)) {
        return;
      }

      this._activeDragInstances.add(drag);

      if (this._activeDragInstances.size === 1) {
        var _isTouchEvent = event.type.startsWith('touch'); // We explicitly bind __active__ listeners here, because newer browsers will default to
        // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
        // use `preventDefault` to prevent the page from scrolling while the user is dragging.


        this._globalListeners.set(_isTouchEvent ? 'touchend' : 'mouseup', {
          handler: function handler(e) {
            return _this19.pointerUp.next(e);
          },
          options: true
        }).set('scroll', {
          handler: function handler(e) {
            return _this19.scroll.next(e);
          },
          // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
          // the document. See https://github.com/angular/components/issues/17144.
          options: true
        }) // Preventing the default action on `mousemove` isn't enough to disable text selection
        // on Safari so we need to prevent the selection event as well. Alternatively this can
        // be done by setting `user-select: none` on the `body`, however it has causes a style
        // recalculation which can be expensive on pages with a lot of elements.
        .set('selectstart', {
          handler: this._preventDefaultWhileDragging,
          options: activeCapturingEventOptions
        }); // We don't have to bind a move event for touch drag sequences, because
        // we already have a persistent global one bound from `registerDragItem`.


        if (!_isTouchEvent) {
          this._globalListeners.set('mousemove', {
            handler: function handler(e) {
              return _this19.pointerMove.next(e);
            },
            options: activeCapturingEventOptions
          });
        }

        this._ngZone.runOutsideAngular(function () {
          _this19._globalListeners.forEach(function (config, name) {
            _this19._document.addEventListener(name, config.handler, config.options);
          });
        });
      }
    }
    /** Stops dragging a drag item instance. */

  }, {
    key: "stopDragging",
    value: function stopDragging(drag) {
      this._activeDragInstances.delete(drag);

      if (this._activeDragInstances.size === 0) {
        this._clearGlobalListeners();
      }
    }
    /** Gets whether a drag item instance is currently being dragged. */

  }, {
    key: "isDragging",
    value: function isDragging(drag) {
      return this._activeDragInstances.has(drag);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this20 = this;

      this._dragInstances.forEach(function (instance) {
        return _this20.removeDragItem(instance);
      });

      this._dropInstances.forEach(function (instance) {
        return _this20.removeDropContainer(instance);
      });

      this._clearGlobalListeners();

      this.pointerMove.complete();
      this.pointerUp.complete();
    }
    /** Clears out the global event listeners from the `document`. */

  }, {
    key: "_clearGlobalListeners",
    value: function _clearGlobalListeners() {
      var _this21 = this;

      this._globalListeners.forEach(function (config, name) {
        _this21._document.removeEventListener(name, config.handler, config.options);
      });

      this._globalListeners.clear();
    }
  }]);

  return DragDropRegistry;
}();

DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
  return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
};

DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
  factory: function DragDropRegistry_Factory() {
    return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
  },
  token: DragDropRegistry,
  providedIn: "root"
});

DragDropRegistry.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragDropRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Default configuration to be used when creating a `DragRef`. */


var DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */

var DragDrop = /*#__PURE__*/function () {
  function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DragDrop);

    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DragDrop, [{
    key: "createDrag",
    value: function createDrag(element) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONFIG;
      return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */

  }, {
    key: "createDropList",
    value: function createDropList(element) {
      return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }
  }]);

  return DragDrop;
}();

DragDrop.ɵfac = function DragDrop_Factory(t) {
  return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](DragDropRegistry));
};

DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
  factory: function DragDrop_Factory() {
    return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry));
  },
  token: DragDrop,
  providedIn: "root"
});

DragDrop.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]
  }, {
    type: DragDropRegistry
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragDrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]
    }, {
      type: DragDropRegistry
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */


var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
 * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

var CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CdkDropListGroup');
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */

var CdkDropListGroup = /*#__PURE__*/function () {
  function CdkDropListGroup() {
    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CdkDropListGroup);

    /** Drop lists registered inside the group. */
    this._items = new Set();
    this._disabled = false;
  }
  /** Whether starting a dragging sequence from inside this group is disabled. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkDropListGroup, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._items.clear();
    }
  }]);

  return CdkDropListGroup;
}();

CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
  return new (t || CdkDropListGroup)();
};

CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkDropListGroup,
  selectors: [["", "cdkDropListGroup", ""]],
  inputs: {
    disabled: ["cdkDropListGroupDisabled", "disabled"]
  },
  exportAs: ["cdkDropListGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: CDK_DROP_LIST_GROUP,
    useExisting: CdkDropListGroup
  }])]
});
CdkDropListGroup.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListGroupDisabled']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDropListGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[cdkDropListGroup]',
      exportAs: 'cdkDropListGroup',
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], function () {
    return [];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListGroupDisabled']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */


var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter used to generate unique ids for drop zones. */

var _uniqueIdCounter = 0;
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CdkDropList');
var ɵ0 = undefined;
/** Container that wraps a set of draggable items. */

var CdkDropList = /*#__PURE__*/function () {
  function CdkDropList(
  /** Element that the drop list is attached to. */
  element, dragDrop, _changeDetectorRef, _dir, _group,
  /**
   * @deprecated _scrollDispatcher parameter to become required.
   * @breaking-change 11.0.0
   */
  _scrollDispatcher, config) {
    var _this22 = this;

    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CdkDropList);

    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._group = _group;
    this._scrollDispatcher = _scrollDispatcher;
    /** Emits when the list has been destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /**
     * Other draggable containers that this container is connected to and into which the
     * container's items can be transferred. Can either be references to other drop containers,
     * or their unique IDs.
     */

    this.connectedTo = [];
    /**
     * Unique ID for the drop zone. Can be used as a reference
     * in the `connectedTo` of another `CdkDropList`.
     */

    this.id = "cdk-drop-list-".concat(_uniqueIdCounter++);
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */

    this.enterPredicate = function () {
      return true;
    };
    /** Emits when the user drops an item inside the container. */


    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * Emits when the user has moved a new drag item into this container.
     */

    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */

    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /** Emits as the user is swapping items while actively dragging. */

    this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * Keeps track of the items that are registered with this container. Historically we used to
     * do this with a `ContentChildren` query, however queries don't handle transplanted views very
     * well which means that we can't handle cases like dragging the headers of a `mat-table`
     * correctly. What we do instead is to have the items register themselves with the container
     * and then we sort them based on their position in the DOM.
     */

    this._unsortedItems = new Set();
    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;

    if (config) {
      this._assignDefaults(config);
    }

    this._dropListRef.enterPredicate = function (drag, drop) {
      return _this22.enterPredicate(drag.data, drop.data);
    };

    this._setupInputSyncSubscription(this._dropListRef);

    this._handleEvents(this._dropListRef);

    CdkDropList._dropLists.push(this);

    if (_group) {
      _group._items.add(this);
    }
  }
  /** Whether starting a dragging sequence from this container is disabled. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkDropList, [{
    key: "disabled",
    get: function get() {
      return this._disabled || !!this._group && this._group.disabled;
    },
    set: function set(value) {
      // Usually we sync the directive and ref state right before dragging starts, in order to have
      // a single point of failure and to avoid having to use setters for everything. `disabled` is
      // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
      // the user in a disabled state, so we also need to sync it as it's being set.
      this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
    /** Registers an items with the drop list. */

  }, {
    key: "addItem",
    value: function addItem(item) {
      this._unsortedItems.add(item);

      if (this._dropListRef.isDragging()) {
        this._syncItemsWithRef();
      }
    }
    /** Removes an item from the drop list. */

  }, {
    key: "removeItem",
    value: function removeItem(item) {
      this._unsortedItems.delete(item);

      if (this._dropListRef.isDragging()) {
        this._syncItemsWithRef();
      }
    }
    /** Gets the registered items in the list, sorted by their position in the DOM. */

  }, {
    key: "getSortedItems",
    value: function getSortedItems() {
      return Array.from(this._unsortedItems).sort(function (a, b) {
        var documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        // tslint:disable-next-line:no-bitwise


        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var index = CdkDropList._dropLists.indexOf(this);

      if (index > -1) {
        CdkDropList._dropLists.splice(index, 1);
      }

      if (this._group) {
        this._group._items.delete(this);
      }

      this._unsortedItems.clear();

      this._dropListRef.dispose();

      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */

  }, {
    key: "_setupInputSyncSubscription",
    value: function _setupInputSyncSubscription(ref) {
      var _this23 = this;

      if (this._dir) {
        this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (value) {
          return ref.withDirection(value);
        });
      }

      ref.beforeStarted.subscribe(function () {
        var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceArray"])(_this23.connectedTo).map(function (drop) {
          if (typeof drop === 'string') {
            var correspondingDropList = CdkDropList._dropLists.find(function (list) {
              return list.id === drop;
            });

            if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              console.warn("CdkDropList could not find connected drop list with id \"".concat(drop, "\""));
            }

            return correspondingDropList;
          }

          return drop;
        });

        if (_this23._group) {
          _this23._group._items.forEach(function (drop) {
            if (siblings.indexOf(drop) === -1) {
              siblings.push(drop);
            }
          });
        } // Note that we resolve the scrollable parents here so that we delay the resolution
        // as long as possible, ensuring that the element is in its final place in the DOM.
        // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.


        if (!_this23._scrollableParentsResolved && _this23._scrollDispatcher) {
          var scrollableParents = _this23._scrollDispatcher.getAncestorScrollContainers(_this23.element).map(function (scrollable) {
            return scrollable.getElementRef().nativeElement;
          });

          _this23._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
          // shouldn't be able to change without the drop list being destroyed.


          _this23._scrollableParentsResolved = true;
        }

        ref.disabled = _this23.disabled;
        ref.lockAxis = _this23.lockAxis;
        ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(_this23.sortingDisabled);
        ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(_this23.autoScrollDisabled);
        ref.connectedTo(siblings.filter(function (drop) {
          return drop && drop !== _this23;
        }).map(function (list) {
          return list._dropListRef;
        })).withOrientation(_this23.orientation);
      });
    }
    /** Handles events from the underlying DropListRef. */

  }, {
    key: "_handleEvents",
    value: function _handleEvents(ref) {
      var _this24 = this;

      ref.beforeStarted.subscribe(function () {
        _this24._syncItemsWithRef();

        _this24._changeDetectorRef.markForCheck();
      });
      ref.entered.subscribe(function (event) {
        _this24.entered.emit({
          container: _this24,
          item: event.item.data,
          currentIndex: event.currentIndex
        });
      });
      ref.exited.subscribe(function (event) {
        _this24.exited.emit({
          container: _this24,
          item: event.item.data
        });

        _this24._changeDetectorRef.markForCheck();
      });
      ref.sorted.subscribe(function (event) {
        _this24.sorted.emit({
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
          container: _this24,
          item: event.item.data
        });
      });
      ref.dropped.subscribe(function (event) {
        _this24.dropped.emit({
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
          previousContainer: event.previousContainer.data,
          container: event.container.data,
          item: event.item.data,
          isPointerOverContainer: event.isPointerOverContainer,
          distance: event.distance
        }); // Mark for check since all of these events run outside of change
        // detection and we're not guaranteed for something else to have triggered it.


        _this24._changeDetectorRef.markForCheck();
      });
    }
    /** Assigns the default input values based on a provided config object. */

  }, {
    key: "_assignDefaults",
    value: function _assignDefaults(config) {
      var lockAxis = config.lockAxis,
          draggingDisabled = config.draggingDisabled,
          sortingDisabled = config.sortingDisabled,
          listAutoScrollDisabled = config.listAutoScrollDisabled,
          listOrientation = config.listOrientation;
      this.disabled = draggingDisabled == null ? false : draggingDisabled;
      this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
      this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
      this.orientation = listOrientation || 'vertical';

      if (lockAxis) {
        this.lockAxis = lockAxis;
      }
    }
    /** Syncs up the registered drag items with underlying drop list ref. */

  }, {
    key: "_syncItemsWithRef",
    value: function _syncItemsWithRef() {
      this._dropListRef.withItems(this.getSortedItems().map(function (item) {
        return item._dragRef;
      }));
    }
  }]);

  return CdkDropList;
}();

CdkDropList.ɵfac = function CdkDropList_Factory(t) {
  return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
};

CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkDropList,
  selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
  hostAttrs: [1, "cdk-drop-list"],
  hostVars: 7,
  hostBindings: function CdkDropList_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    }
  },
  inputs: {
    connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
    id: "id",
    enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
    disabled: ["cdkDropListDisabled", "disabled"],
    sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
    autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
    orientation: ["cdkDropListOrientation", "orientation"],
    lockAxis: ["cdkDropListLockAxis", "lockAxis"],
    data: ["cdkDropListData", "data"]
  },
  outputs: {
    dropped: "cdkDropListDropped",
    entered: "cdkDropListEntered",
    exited: "cdkDropListExited",
    sorted: "cdkDropListSorted"
  },
  exportAs: ["cdkDropList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
  {
    provide: CDK_DROP_LIST_GROUP,
    useValue: ɵ0
  }, {
    provide: CDK_DROP_LIST,
    useExisting: CdkDropList
  }])]
});
/** Keeps track of the drop lists that are currently on the page. */

CdkDropList._dropLists = [];

CdkDropList.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: DragDrop
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }]
  }, {
    type: CdkDropListGroup,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [CDK_DROP_LIST_GROUP]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
    }]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatcher"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [CDK_DRAG_CONFIG]
    }]
  }];
};

CdkDropList.propDecorators = {
  connectedTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListConnectedTo']
  }],
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListData']
  }],
  orientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListOrientation']
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  lockAxis: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListLockAxis']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListDisabled']
  }],
  sortingDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListSortingDisabled']
  }],
  enterPredicate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListEnterPredicate']
  }],
  autoScrollDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDropListAutoScrollDisabled']
  }],
  dropped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDropListDropped']
  }],
  entered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDropListEntered']
  }],
  exited: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDropListExited']
  }],
  sorted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDropListSorted']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDropList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[cdkDropList], cdk-drop-list',
      exportAs: 'cdkDropList',
      providers: [// Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: ɵ0
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        'class': 'cdk-drop-list',
        '[id]': 'id',
        '[class.cdk-drop-list-disabled]': 'disabled',
        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }]
    }, {
      type: CdkDropListGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [CDK_DROP_LIST_GROUP]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
      }]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatcher"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [CDK_DRAG_CONFIG]
      }]
    }];
  }, {
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListConnectedTo']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    enterPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListEnterPredicate']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDropListDropped']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDropListEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDropListExited']
    }],
    sorted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDropListSorted']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListDisabled']
    }],
    sortingDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListSortingDisabled']
    }],
    autoScrollDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListAutoScrollDisabled']
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListOrientation']
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListLockAxis']
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDropListData']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
 * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CdkDragHandle');
/** Handle that can be used to drag a CdkDrag instance. */

var CdkDragHandle = /*#__PURE__*/function () {
  function CdkDragHandle(element, parentDrag) {
    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CdkDragHandle);

    this.element = element;
    /** Emits when the state of the handle has changed. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    this._disabled = false;
    this._parentDrag = parentDrag;
  }
  /** Whether starting to drag through this handle is disabled. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkDragHandle, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);

      this._stateChanges.next(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._stateChanges.complete();
    }
  }]);

  return CdkDragHandle;
}();

CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
  return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
};

CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkDragHandle,
  selectors: [["", "cdkDragHandle", ""]],
  hostAttrs: [1, "cdk-drag-handle"],
  inputs: {
    disabled: ["cdkDragHandleDisabled", "disabled"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_HANDLE,
    useExisting: CdkDragHandle
  }])]
});

CdkDragHandle.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [CDK_DRAG_PARENT]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
    }]
  }];
};

CdkDragHandle.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragHandleDisabled']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDragHandle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[cdkDragHandle]',
      host: {
        'class': 'cdk-drag-handle'
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [CDK_DRAG_PARENT]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragHandleDisabled']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
 * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CdkDragPlaceholder');
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */

var CdkDragPlaceholder = function CdkDragPlaceholder(templateRef) {
  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CdkDragPlaceholder);

  this.templateRef = templateRef;
};

CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
  return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
};

CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkDragPlaceholder,
  selectors: [["ng-template", "cdkDragPlaceholder", ""]],
  inputs: {
    data: "data"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PLACEHOLDER,
    useExisting: CdkDragPlaceholder
  }])]
});

CdkDragPlaceholder.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
  }];
};

CdkDragPlaceholder.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: 'ng-template[cdkDragPlaceholder]',
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
 * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CdkDragPreview');
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */

var CdkDragPreview = /*#__PURE__*/function () {
  function CdkDragPreview(templateRef) {
    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CdkDragPreview);

    this.templateRef = templateRef;
    this._matchSize = false;
  }
  /** Whether the preview should preserve the same size as the item that is being dragged. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkDragPreview, [{
    key: "matchSize",
    get: function get() {
      return this._matchSize;
    },
    set: function set(value) {
      this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
  }]);

  return CdkDragPreview;
}();

CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
  return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
};

CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkDragPreview,
  selectors: [["ng-template", "cdkDragPreview", ""]],
  inputs: {
    matchSize: "matchSize",
    data: "data"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PREVIEW,
    useExisting: CdkDragPreview
  }])]
});

CdkDragPreview.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
  }];
};

CdkDragPreview.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  matchSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDragPreview, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: 'ng-template[cdkDragPreview]',
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
    }];
  }, {
    matchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Element that can be moved inside a CdkDropList container. */


var CdkDrag = /*#__PURE__*/function () {
  function CdkDrag(
  /** Element that the draggable is attached to. */
  element,
  /** Droppable container that the draggable is a part of. */
  dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle) {
    var _this25 = this;

    Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CdkDrag);

    this.element = element;
    this.dropContainer = dropContainer;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._selfHandle = _selfHandle;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the user starts dragging the item. */

    this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /** Emits when the user has released a drag item, before any animations have started. */

    this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /** Emits when the user stops dragging an item in the container. */

    this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /** Emits when the user has moved the item into a new container. */

    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /** Emits when the user removes the item its container by dragging it into another container. */

    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /** Emits when the user drops the item inside a container. */

    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */

    this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (observer) {
      var subscription = _this25._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (movedEvent) {
        return {
          source: _this25,
          pointerPosition: movedEvent.pointerPosition,
          event: movedEvent.event,
          delta: movedEvent.delta,
          distance: movedEvent.distance
        };
      })).subscribe(observer);

      return function () {
        subscription.unsubscribe();
      };
    });
    this._dragRef = dragDrop.createDrag(element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config === null || config === void 0 ? void 0 : config.zIndex
    });
    this._dragRef.data = this;

    if (config) {
      this._assignDefaults(config);
    } // Note that usually the container is assigned when the drop list is picks up the item, but in
    // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
    // where there are no items on the first change detection pass, but the items get picked up as
    // soon as the user triggers another pass by dragging. This is a problem, because the item would
    // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
    // is too late since the two modes save different kinds of information. We work around it by
    // assigning the drop container both from here and the list.


    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);

      dropContainer.addItem(this);
    }

    this._syncInputs(this._dragRef);

    this._handleEvents(this._dragRef);
  }
  /** Whether starting to drag this element is disabled. */


  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkDrag, [{
    key: "disabled",
    get: function get() {
      return this._disabled || this.dropContainer && this.dropContainer.disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
      this._dragRef.disabled = this._disabled;
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */

  }, {
    key: "getPlaceholderElement",
    value: function getPlaceholderElement() {
      return this._dragRef.getPlaceholderElement();
    }
    /** Returns the root draggable element. */

  }, {
    key: "getRootElement",
    value: function getRootElement() {
      return this._dragRef.getRootElement();
    }
    /** Resets a standalone drag item to its initial position. */

  }, {
    key: "reset",
    value: function reset() {
      this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */

  }, {
    key: "getFreeDragPosition",
    value: function getFreeDragPosition() {
      return this._dragRef.getFreeDragPosition();
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this26 = this;

      // We need to wait for the zone to stabilize, in order for the reference
      // element to be in the proper place in the DOM. This is mostly relevant
      // for draggable elements inside portals since they get stamped out in
      // their original DOM position and then they get transferred to the portal.
      this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this26._updateRootElement(); // Listen for any newly-added handles.


        _this26._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(_this26._handles), // Sync the new handles with the DragRef.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (handles) {
          var childHandleElements = handles.filter(function (handle) {
            return handle._parentDrag === _this26;
          }).map(function (handle) {
            return handle.element;
          }); // Usually handles are only allowed to be a descendant of the drag element, but if
          // the consumer defined a different drag root, we should allow the drag element
          // itself to be a handle too.

          if (_this26._selfHandle && _this26.rootElementSelector) {
            childHandleElements.push(_this26.element);
          }

          _this26._dragRef.withHandles(childHandleElements);
        }), // Listen if the state of any of the handles changes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (handles) {
          return rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"].apply(void 0, Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(handles.map(function (item) {
            return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(item));
          })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this26._destroyed)).subscribe(function (handleInstance) {
          // Enabled/disable the handle that changed in the DragRef.
          var dragRef = _this26._dragRef;
          var handle = handleInstance.element.nativeElement;
          handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
        });

        if (_this26.freeDragPosition) {
          _this26._dragRef.setFreeDragPosition(_this26.freeDragPosition);
        }
      });
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var rootSelectorChange = changes['rootElementSelector'];
      var positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
      // handled in `ngAfterViewInit` where it needs to be deferred.

      if (rootSelectorChange && !rootSelectorChange.firstChange) {
        this._updateRootElement();
      } // Skip the first change since it's being handled in `ngAfterViewInit`.


      if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.dropContainer) {
        this.dropContainer.removeItem(this);
      }

      this._destroyed.next();

      this._destroyed.complete();

      this._dragRef.dispose();
    }
    /** Syncs the root element with the `DragRef`. */

  }, {
    key: "_updateRootElement",
    value: function _updateRootElement() {
      var element = this.element.nativeElement;
      var rootElement = this.rootElementSelector ? getClosestMatchingAncestor(element, this.rootElementSelector) : element;

      if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error("cdkDrag must be attached to an element node. " + "Currently attached to \"".concat(rootElement.nodeName, "\"."));
      }

      this._dragRef.withRootElement(rootElement || element);
    }
    /** Gets the boundary element, based on the `boundaryElement` value. */

  }, {
    key: "_getBoundaryElement",
    value: function _getBoundaryElement() {
      var boundary = this.boundaryElement;

      if (!boundary) {
        return null;
      }

      if (typeof boundary === 'string') {
        return getClosestMatchingAncestor(this.element.nativeElement, boundary);
      }

      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(boundary);

      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !element.contains(this.element.nativeElement)) {
        throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
      }

      return element;
    }
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */

  }, {
    key: "_syncInputs",
    value: function _syncInputs(ref) {
      var _this27 = this;

      ref.beforeStarted.subscribe(function () {
        if (!ref.isDragging()) {
          var dir = _this27._dir;
          var dragStartDelay = _this27.dragStartDelay;
          var placeholder = _this27._placeholderTemplate ? {
            template: _this27._placeholderTemplate.templateRef,
            context: _this27._placeholderTemplate.data,
            viewContainer: _this27._viewContainerRef
          } : null;
          var preview = _this27._previewTemplate ? {
            template: _this27._previewTemplate.templateRef,
            context: _this27._previewTemplate.data,
            matchSize: _this27._previewTemplate.matchSize,
            viewContainer: _this27._viewContainerRef
          } : null;
          ref.disabled = _this27.disabled;
          ref.lockAxis = _this27.lockAxis;
          ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(dragStartDelay);
          ref.constrainPosition = _this27.constrainPosition;
          ref.previewClass = _this27.previewClass;
          ref.withBoundaryElement(_this27._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview);

          if (dir) {
            ref.withDirection(dir.value);
          }
        }
      });
    }
    /** Handles the events from the underlying `DragRef`. */

  }, {
    key: "_handleEvents",
    value: function _handleEvents(ref) {
      var _this28 = this;

      ref.started.subscribe(function () {
        _this28.started.emit({
          source: _this28
        }); // Since all of these events run outside of change detection,
        // we need to ensure that everything is marked correctly.


        _this28._changeDetectorRef.markForCheck();
      });
      ref.released.subscribe(function () {
        _this28.released.emit({
          source: _this28
        });
      });
      ref.ended.subscribe(function (event) {
        _this28.ended.emit({
          source: _this28,
          distance: event.distance
        }); // Since all of these events run outside of change detection,
        // we need to ensure that everything is marked correctly.


        _this28._changeDetectorRef.markForCheck();
      });
      ref.entered.subscribe(function (event) {
        _this28.entered.emit({
          container: event.container.data,
          item: _this28,
          currentIndex: event.currentIndex
        });
      });
      ref.exited.subscribe(function (event) {
        _this28.exited.emit({
          container: event.container.data,
          item: _this28
        });
      });
      ref.dropped.subscribe(function (event) {
        _this28.dropped.emit({
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
          previousContainer: event.previousContainer.data,
          container: event.container.data,
          isPointerOverContainer: event.isPointerOverContainer,
          item: _this28,
          distance: event.distance
        });
      });
    }
    /** Assigns the default input values based on a provided config object. */

  }, {
    key: "_assignDefaults",
    value: function _assignDefaults(config) {
      var lockAxis = config.lockAxis,
          dragStartDelay = config.dragStartDelay,
          constrainPosition = config.constrainPosition,
          previewClass = config.previewClass,
          boundaryElement = config.boundaryElement,
          draggingDisabled = config.draggingDisabled,
          rootElementSelector = config.rootElementSelector;
      this.disabled = draggingDisabled == null ? false : draggingDisabled;
      this.dragStartDelay = dragStartDelay || 0;

      if (lockAxis) {
        this.lockAxis = lockAxis;
      }

      if (constrainPosition) {
        this.constrainPosition = constrainPosition;
      }

      if (previewClass) {
        this.previewClass = previewClass;
      }

      if (boundaryElement) {
        this.boundaryElement = boundaryElement;
      }

      if (rootElementSelector) {
        this.rootElementSelector = rootElementSelector;
      }
    }
  }]);

  return CdkDrag;
}();

CdkDrag.ɵfac = function CdkDrag_Factory(t) {
  return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10));
};

CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkDrag,
  selectors: [["", "cdkDrag", ""]],
  contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PREVIEW, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PLACEHOLDER, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_HANDLE, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    }
  },
  hostAttrs: [1, "cdk-drag"],
  hostVars: 4,
  hostBindings: function CdkDrag_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    }
  },
  inputs: {
    disabled: ["cdkDragDisabled", "disabled"],
    dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
    lockAxis: ["cdkDragLockAxis", "lockAxis"],
    constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
    previewClass: ["cdkDragPreviewClass", "previewClass"],
    boundaryElement: ["cdkDragBoundary", "boundaryElement"],
    rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
    data: ["cdkDragData", "data"],
    freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"]
  },
  outputs: {
    started: "cdkDragStarted",
    released: "cdkDragReleased",
    ended: "cdkDragEnded",
    entered: "cdkDragEntered",
    exited: "cdkDragExited",
    dropped: "cdkDragDropped",
    moved: "cdkDragMoved"
  },
  exportAs: ["cdkDrag"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PARENT,
    useExisting: CdkDrag
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});

CdkDrag.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [CDK_DROP_LIST]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [CDK_DRAG_CONFIG]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }]
  }, {
    type: DragDrop
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: CdkDragHandle,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [CDK_DRAG_HANDLE]
    }]
  }];
};

CdkDrag.propDecorators = {
  _handles: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
    args: [CDK_DRAG_HANDLE, {
      descendants: true
    }]
  }],
  _previewTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [CDK_DRAG_PREVIEW]
  }],
  _placeholderTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
    args: [CDK_DRAG_PLACEHOLDER]
  }],
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragData']
  }],
  lockAxis: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragLockAxis']
  }],
  rootElementSelector: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragRootElement']
  }],
  boundaryElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragBoundary']
  }],
  dragStartDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragStartDelay']
  }],
  freeDragPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragFreeDragPosition']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragDisabled']
  }],
  constrainPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragConstrainPosition']
  }],
  previewClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['cdkDragPreviewClass']
  }],
  started: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDragStarted']
  }],
  released: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDragReleased']
  }],
  ended: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDragEnded']
  }],
  entered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDragEntered']
  }],
  exited: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDragExited']
  }],
  dropped: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDragDropped']
  }],
  moved: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['cdkDragMoved']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkDrag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[cdkDrag]',
      exportAs: 'cdkDrag',
      host: {
        'class': 'cdk-drag',
        '[class.cdk-drag-disabled]': 'disabled',
        '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [CDK_DROP_LIST]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [CDK_DRAG_CONFIG]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }]
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: CdkDragHandle,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [CDK_DRAG_HANDLE]
      }]
    }];
  }, {
    started: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDragStarted']
    }],
    released: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDragReleased']
    }],
    ended: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDragEnded']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDragEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDragExited']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDragDropped']
    }],
    moved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['cdkDragMoved']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragDisabled']
    }],
    dragStartDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragStartDelay']
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragLockAxis']
    }],
    constrainPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragConstrainPosition']
    }],
    previewClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragPreviewClass']
    }],
    boundaryElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragBoundary']
    }],
    rootElementSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragRootElement']
    }],
    _handles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
      args: [CDK_DRAG_HANDLE, {
        descendants: true
      }]
    }],
    _previewTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [CDK_DRAG_PREVIEW]
    }],
    _placeholderTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
      args: [CDK_DRAG_PLACEHOLDER]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragData']
    }],
    freeDragPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['cdkDragFreeDragPosition']
    }]
  });
})();
/** Gets the closest ancestor of an element that matches a selector. */


function getClosestMatchingAncestor(element, selector) {
  var currentElement = element.parentElement;

  while (currentElement) {
    // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
    if (currentElement.matches ? currentElement.matches(selector) : currentElement.msMatchesSelector(selector)) {
      return currentElement;
    }

    currentElement = currentElement.parentElement;
  }

  return null;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var DragDropModule = function DragDropModule() {
  Object(C_Users_HOME_Documents_My_portfolio_Projects_T_M_S_V1_2_1_material_dashboard_angular2_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DragDropModule);
};

DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: DragDropModule
});
DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function DragDropModule_Factory(t) {
    return new (t || DragDropModule)();
  },
  providers: [DragDrop],
  imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkScrollableModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DragDropModule, {
    declarations: function declarations() {
      return [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
    },
    exports: function exports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragDropModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkScrollableModule"], CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      providers: [DragDrop]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "6FpW":
/*!*****************************************!*\
  !*** ./src/app/profile/models/house.ts ***!
  \*****************************************/
/*! exports provided: HouseModel, TenantsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseModel", function() { return HouseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsModel", function() { return TenantsModel; });
var HouseModel = /** @class */ (function () {
    function HouseModel(id, name, type, tenants, capacity) {
        if (id === void 0) { id = ''; }
        if (name === void 0) { name = ''; }
        if (type === void 0) { type = ''; }
        if (tenants === void 0) { tenants = []; }
        if (capacity === void 0) { capacity = 0; }
        this.userId = id;
        this.name = name;
        this.tenants = tenants;
        this.type = type;
        this.capacity = capacity;
    }
    return HouseModel;
}());

var TenantsModel = /** @class */ (function () {
    function TenantsModel(name, fee, label, phone_number, rentPogress) {
        if (name === void 0) { name = ''; }
        if (fee === void 0) { fee = 0; }
        if (label === void 0) { label = ''; }
        if (phone_number === void 0) { phone_number = ''; }
        if (rentPogress === void 0) { rentPogress = {}; }
        this.name = name;
        this.fee = fee;
        this.label = label;
        this.phone_number = phone_number;
        this.rentPogress = rentPogress;
    }
    return TenantsModel;
}());



/***/ }),

/***/ "8Ers":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/kanban/kanban.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"titles\">Residences</h2>\r\n<div \r\ncdkDropList\r\ncdkDropListOrientation=\"horizontal\"\r\nclass=\"boards\"\r\nstyle=\"padding-left: 0;\"\r\n(cdkDropListDropped)=\"drop($event)\"\r\n>\r\n<app-house cdkDrag *ngFor=\"let house of houses\" [house]=\"house\">\r\n    <mat-icon cdkDragHandle class=\"handle\">drag_indicator</mat-icon>\r\n  </app-house>\r\n<div class=\"board-button\">\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      cdkDragDisabled\r\n      (click)=\"openHouseDialog()\"\r\n    >\r\n      Add residence\r\n    </button>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "F02r":
/*!*****************************************************!*\
  !*** ./src/app/profile/charts/charts.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "LK2/":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/house/house.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"outer-card\">\r\n    <mat-card-header>\r\n      <!-- Slot for the handle -->\r\n      <div style=\"float: right;\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n\r\n      <mat-card-title \r\n        class=\"title\"\r\n      >\r\n        {{ house.name }}\r\n      </mat-card-title>\r\n      <mat-card-subtitle style=\"margin-bottom: 0; margin-top: 10px;\">\r\n        {{ house.type }}\r\n      </mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        \r\n    </mat-card-content>\r\n    <mat-card-content>\r\n        <div\r\n        class=\"tasks\"\r\n        cdkDropList\r\n        cdkDropListOrientation=\"vertical\"\r\n        \r\n      >\r\n        <div\r\n          class=\"inner-card\"\r\n          *ngFor=\"let tenant of house.tenants; let i = index\"\r\n          (click)=\"openDialog(tenant, i)\"\r\n        >\r\n          <mat-card > \r\n            <mat-card-header \r\n            >\r\n            <mat-card-title style=\"width: 100%;\">\r\n             <h3 style=\"width: 100%; text-align: center;\">{{ tenant.name }}</h3>  \r\n            </mat-card-title>\r\n          </mat-card-header>  \r\n            <mat-card-content>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <section>\r\n                  <button mat-raised-button>\r\n                    <img \r\n                    class=\"icon-action\"\r\n                    src=\"assets/calendar.svg\" alt=\"\" srcset=\"\">\r\n                  </button>\r\n\r\n                </section>\r\n                <section >\r\n                   <button mat-raised-button>\r\n                    <img \r\n                    class=\"icon-action\"\r\n                    src=\"assets/pencil.svg\" alt=\"\" srcset=\"\">\r\n                   </button>\r\n                </section>\r\n\r\n                <section>\r\n                  <button mat-raised-button>\r\n                    <img \r\n                    class=\"icon-action\"\r\n                    src=\"assets/delete.svg\" alt=\"\" srcset=\"\">\r\n                  </button>\r\n\r\n                </section>\r\n              </div>\r\n\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-footer style=\"margin-left: 10px;\">\r\n        <button mat-stroked-button (click)=\"openDialog()\">\r\n            <mat-icon>add</mat-icon>\r\n          </button>\r\n          <div style=\"float: right;\">\r\n            <app-delete \r\n          \r\n            (delete)=\"handleDelete()\"></app-delete>\r\n          </div>\r\n\r\n    </mat-card-footer>\r\n\r\n  </mat-card>\r\n  \r\n\r\n\r\n");

/***/ }),

/***/ "M8mW":
/*!*********************************************************************!*\
  !*** ./src/app/profile/components/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "zWDh");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "wUU4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_3__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var datawebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Bar"]('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "RnFE":
/*!*************************************************************!*\
  !*** ./src/app/profile/components/to-do/to-do.component.ts ***!
  \*************************************************************/
/*! exports provided: ToDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoComponent", function() { return ToDoComponent; });
/* harmony import */ var _raw_loader_to_do_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./to-do.component.html */ "qWbZ");
/* harmony import */ var _to_do_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.component.css */ "bt/M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToDoComponent = /** @class */ (function () {
    function ToDoComponent() {
    }
    ToDoComponent.prototype.ngOnInit = function () {
    };
    ToDoComponent.ctorParameters = function () { return []; };
    ToDoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-to-do',
            template: _raw_loader_to_do_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_to_do_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ToDoComponent);
    return ToDoComponent;
}());



/***/ }),

/***/ "T+oj":
/*!****************************************************!*\
  !*** ./src/app/profile/charts/charts.component.ts ***!
  \****************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _raw_loader_charts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./charts.component.html */ "y4wY");
/* harmony import */ var _charts_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.component.css */ "F02r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent.ctorParameters = function () { return []; };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-charts',
            template: _raw_loader_charts_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_charts_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "U7vX":
/*!*********************************************************!*\
  !*** ./src/app/profile/components/dialogs/dialogs.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  overflow: hidden;\n  height: auto;\n  padding: 20px;\n  width: 100%;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\ntextarea {\n  display: block;\n  width: 100%;\n}\n\n.blue {\n  color: #71deff;\n}\n\n.green {\n  color: #36e9b6;\n}\n\n.yellow {\n  color: #ffcf44;\n}\n\n.purple {\n  color: #b15cff;\n}\n\n.gray {\n  color: gray;\n}\n\n.red {\n  color: #e74a4a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL2RpYWxvZ3MvZGlhbG9ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUFXLGNBQUE7RUFBZ0IsV0FBQTtBQUczQjs7QUFEQTtFQUFRLGNBQUE7QUFLUjs7QUFKQTtFQUFTLGNBQUE7QUFRVDs7QUFQQTtFQUFVLGNBQUE7QUFXVjs7QUFWQTtFQUFVLGNBQUE7QUFjVjs7QUFiQTtFQUFRLFdBQUE7QUFpQlI7O0FBaEJBO0VBQU8sY0FBQTtBQW9CUCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy9kaWFsb2dzL2RpYWxvZ3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbnRleHRhcmVhIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyB9XHJcblxyXG4uYmx1ZSB7IGNvbG9yOiAjNzFkZWZmOyB9XHJcbi5ncmVlbiB7IGNvbG9yOiAjMzZlOWI2OyB9XHJcbi55ZWxsb3cgeyBjb2xvcjogI2ZmY2Y0NDsgfVxyXG4ucHVycGxlIHsgY29sb3I6ICNiMTVjZmY7IH1cclxuLmdyYXkgeyBjb2xvcjogZ3JheTsgfVxyXG4ucmVkIHsgY29sb3I6ICNlNzRhNGE7IH0iXX0= */");

/***/ }),

/***/ "VCo7":
/*!***************************************************************!*\
  !*** ./src/app/profile/components/kanban/kanban.component.ts ***!
  \***************************************************************/
/*! exports provided: KanbanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KanbanComponent", function() { return KanbanComponent; });
/* harmony import */ var _raw_loader_kanban_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./kanban.component.html */ "8Ers");
/* harmony import */ var _kanban_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kanban.component.scss */ "X1bt");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/database.service */ "WAaD");
/* harmony import */ var app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/uielements.service */ "U9fw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _dialogs_house_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/house-dialog.component */ "iN4I");
/* harmony import */ var _models_house__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/house */ "6FpW");
/* harmony import */ var _models_stats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/stats */ "rp5j");
/* harmony import */ var _services_house_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/house.service */ "oEoP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var KanbanComponent = /** @class */ (function () {
    function KanbanComponent(dialog, databaseService, afAuth, houseService, uiElementsService) {
        this.dialog = dialog;
        this.databaseService = databaseService;
        this.afAuth = afAuth;
        this.houseService = houseService;
        this.uiElementsService = uiElementsService;
        this.houses = [];
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
    }
    KanbanComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uiElementsService.addSpinner();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.currentUser];
                    case 2:
                        user = _a.sent();
                        this.databaseService.readMultiple('houses', 'userId', user.uid).subscribe(function (houses) {
                            _this.uiElementsService.removeSpinner();
                            _this.houses = houses;
                            var tenants = 0;
                            houses.forEach(function (value) {
                                tenants += value.tenants.length;
                            });
                            var stats = new _models_stats__WEBPACK_IMPORTED_MODULE_11__["Stats"](tenants, 0, houses.length, 0);
                            _this.houseService.statsSubject.next(stats);
                            console.log(houses);
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.uiElementsService.addSnackBar(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KanbanComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.houses, event.previousIndex, event.currentIndex);
    };
    KanbanComponent.prototype.openHouseDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_house_dialog_component__WEBPACK_IMPORTED_MODULE_9__["HouseDialogComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var user, house, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!result) return [3 /*break*/, 6];
                        this.uiElementsService.addSpinner();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.afAuth.currentUser];
                    case 2:
                        user = _a.sent();
                        house = new _models_house__WEBPACK_IMPORTED_MODULE_10__["HouseModel"](user.uid, result.name, result.type);
                        return [4 /*yield*/, this.databaseService
                                .createGeneric('houses', house)];
                    case 3:
                        _a.sent();
                        this.uiElementsService.addSnackBar('House added');
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.uiElementsService.addSnackBar(error_2);
                        return [3 /*break*/, 5];
                    case 5:
                        this.uiElementsService.removeSpinner();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    KanbanComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _services_house_service__WEBPACK_IMPORTED_MODULE_12__["HouseService"] },
        { type: app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_7__["UIElementsService"] }
    ]; };
    KanbanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-kanban',
            template: _raw_loader_kanban_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_kanban_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _services_house_service__WEBPACK_IMPORTED_MODULE_12__["HouseService"],
            app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_7__["UIElementsService"]])
    ], KanbanComponent);
    return KanbanComponent;
}());



/***/ }),

/***/ "X1bt":
/*!*****************************************************************!*\
  !*** ./src/app/profile/components/kanban/kanban.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Source+Sans+Pro:wght@200&display=swap\");\n.titles {\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  text-align: center;\n}\n.boards {\n  width: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n}\n.boards::-webkit-scrollbar {\n  height: 4px;\n  width: 4px;\n}\n.boards::-webkit-scrollbar-track {\n  background-color: #000;\n}\n.boards::-webkit-scrollbar {\n  width: 3px;\n  background-color: #000;\n}\n.boards::-webkit-scrollbar-thumb {\n  background-color: #f5f5f5;\n  border: 2px solid #555555;\n}\n.boards .handle {\n  position: relative;\n  top: 5px;\n  left: 0;\n  cursor: move;\n}\n.cdk-drag-placeholder {\n  opacity: 0.2;\n  width: 350px;\n  border: 5px dashed gray;\n  margin: 0 10px;\n}\n.cdk-drag-animating {\n  transition: transform 300ms ease;\n}\n.boards.cdk-drop-list-dragging .cdk-drag {\n  transition: transform 300ms ease;\n}\n.board-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 5px gray dashed;\n  width: 300px;\n  padding: 32px;\n  height: 350px;\n}\nmat-card-content {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL2thbmJhbi9rYW5iYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsd0hBQUE7QUFFUjtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFFTjtBQUFJO0VBRUUsc0JBQUE7QUFDTjtBQUNJO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBQ047QUFFSTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUFETjtBQU1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFISjtBQU9FO0VBQ0UsZ0NBQUE7QUFKSjtBQU9FO0VBQ0UsZ0NBQUE7QUFKSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBTEo7QUFRRTtFQUNFLGtCQUFBO0FBTEoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2NvbXBvbmVudHMva2FuYmFuL2thbmJhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA5MDAmZmFtaWx5PVNvdXJjZStTYW5zK1Bybzp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi50aXRsZXN7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm9hcmRzIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgd2lkdGg6IDRweFxyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC8vICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGFuZGxlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYm9yZGVyOiA1cHggZGFzaGVkIGdyYXk7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuYm9hcmRzLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFnIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuYm9hcmQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiA1cHggZ3JheSBkYXNoZWQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICB9XHJcbiAgXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "ZL5W":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/stats/stats.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <!-- <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n        <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-warning card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                    <i class=\"material-icons\">person_pin</i>\r\n                </div>\r\n                <p class=\"card-category\">No. Tenants</p>\r\n                <h3 class=\"card-title\">\r\n                    {{stats.tenants}}\r\n                </h3>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"stats\">\r\n                    <i class=\"material-icons text-success\">add_box</i>\r\n                    <a href=\"javascript:void(0)\">Manage</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n        <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-success card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                    <i class=\"material-icons\">monetization_on</i>\r\n                </div>\r\n                <p class=\"card-category\">Revenue</p>\r\n                <h3 class=\"card-title\">R{{stats.revenue}}</h3>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"stats\">\r\n                    <i class=\"material-icons\">date_range</i> This month\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n        <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-danger card-header-icon\">\r\n                \r\n\r\n                <div fxLayout=\"column\" fxFlexAlign=\"center center\">\r\n                    <section>\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"material-icons\">shop</i>\r\n                        </div>\r\n                    </section>\r\n                    <section>\r\n                        <h5 style=\"color: #999999;\">Residences</h5>\r\n                    </section>\r\n                    <section>\r\n                        <h3 class=\"card-title\">{{stats.residences}}</h3>\r\n                    </section>\r\n                </div>\r\n\r\n                \r\n                \r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"stats\">\r\n                    <i class=\"material-icons\">local_offer</i> This month\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n        <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-info card-header-icon\">\r\n                <div class=\"card-icon\">\r\n                    <i class=\"material-icons\">money_off</i>\r\n                </div>\r\n                <p class=\"card-category\">Outstanding payments</p>\r\n                <h3 class=\"card-title\">{{stats.o_payments}}</h3>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"stats\">\r\n                    <i class=\"material-icons\">update</i> Just Updated\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div *ngFor=\"let stat of statsArray\" class=\"col-lg-3 col-md-6 col-sm-6\">\r\n        <div class=\"card card-stats\">\r\n            <div class=\"card-header card-header-icon\" [class]=\"stat.class\">\r\n                \r\n\r\n                <div fxLayout=\"column\" fxFlexAlign=\"center center\">\r\n                    <section>\r\n                        <div class=\"card-icon\">\r\n                            <i class=\"material-icons\">{{stat.icon}}</i>\r\n                        </div>\r\n                    </section>\r\n                    <section>\r\n                        <h5 style=\"color: #999999;\">{{stat.title}}</h5>\r\n                    </section>\r\n                    <section>\r\n                        <h3 class=\"card-title\">{{stat.stat}}</h3>\r\n                    </section>\r\n                </div>\r\n\r\n                \r\n                \r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"stats\">\r\n                    <i class=\"material-icons\">local_offer</i> This month\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "bt/M":
/*!**************************************************************!*\
  !*** ./src/app/profile/components/to-do/to-do.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy90by1kby90by1kby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "M8mW");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stats/stats.component */ "d8BU");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/charts.component */ "T+oj");
/* harmony import */ var _components_kanban_kanban_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/kanban/kanban.component */ "VCo7");
/* harmony import */ var _components_house_house_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/house/house.component */ "cxzG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _components_dialogs_house_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dialogs/house-dialog.component */ "iN4I");
/* harmony import */ var _components_dialogs_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dialogs/delete.component */ "skGP");
/* harmony import */ var _components_dialogs_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dialogs/tenant-dialog.component */ "hh3a");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_to_do_to_do_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/to-do/to-do.component */ "RnFE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_5__["StatsComponent"],
                _charts_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"],
                _components_kanban_kanban_component__WEBPACK_IMPORTED_MODULE_7__["KanbanComponent"],
                _components_dialogs_house_dialog_component__WEBPACK_IMPORTED_MODULE_10__["HouseDialogComponent"],
                _components_house_house_component__WEBPACK_IMPORTED_MODULE_8__["HouseComponent"],
                _components_dialogs_delete_component__WEBPACK_IMPORTED_MODULE_11__["DeleteComponent"],
                _components_dialogs_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_12__["TenantDialogComponent"], _components_to_do_to_do_component__WEBPACK_IMPORTED_MODULE_14__["ToDoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"]
            ],
            entryComponents: [_components_dialogs_house_dialog_component__WEBPACK_IMPORTED_MODULE_10__["HouseDialogComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "cxzG":
/*!*************************************************************!*\
  !*** ./src/app/profile/components/house/house.component.ts ***!
  \*************************************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var _raw_loader_house_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./house.component.html */ "LK2/");
/* harmony import */ var _house_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./house.component.scss */ "scHv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_house__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/house */ "6FpW");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _dialogs_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogs/tenant-dialog.component */ "hh3a");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/database.service */ "WAaD");
/* harmony import */ var app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/uielements.service */ "U9fw");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var HouseComponent = /** @class */ (function () {
    function HouseComponent(databaseService, dialog, uiElementsService) {
        this.databaseService = databaseService;
        this.dialog = dialog;
        this.uiElementsService = uiElementsService;
    }
    HouseComponent.prototype.taskDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.house.tenants, event.previousIndex, event.currentIndex);
    };
    HouseComponent.prototype.openDialog = function (tenant, idx) {
        var _this = this;
        var newTenant = { label: 'purple' };
        var dialogRef = this.dialog.open(_dialogs_tenant_dialog_component__WEBPACK_IMPORTED_MODULE_5__["TenantDialogComponent"], {
            width: '500px',
            autoFocus: false,
            maxHeight: '90vh',
            data: tenant
                ? { tenant: __assign({}, tenant), isNew: false, id: this.house.id, idx: idx }
                : { tenant: newTenant, isNew: true }
        });
        dialogRef.afterClosed().subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var house_copy, tenant_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!result) return [3 /*break*/, 4];
                        house_copy = __assign({}, this.house);
                        if (result.isNew) {
                            tenant_1 = new _models_house__WEBPACK_IMPORTED_MODULE_3__["TenantsModel"](result.tenant.name, result.tenant.fee, result.tenant.label, result.tenant.phone_number);
                            house_copy.tenants.push(result.tenant);
                        }
                        else {
                            house_copy.tenants.splice(result.idx, 1, result.tenant);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.databaseService.createWithIdorUpdate('houses', house_copy, this.house.id)];
                    case 2:
                        _a.sent();
                        this.uiElementsService.addSnackBar('Tenant added!');
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.uiElementsService.addSnackBar(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    HouseComponent.prototype.handleDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.databaseService.delete('houses', this.house.id)];
                    case 1:
                        _a.sent();
                        this.uiElementsService.addSnackBar('Residence deleted');
                        console.log(this.house.id);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.uiElementsService.addSnackBar(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [4 /*yield*/, this.databaseService.delete('houses', this.house.id)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HouseComponent.ctorParameters = function () { return [
        { type: app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_8__["UIElementsService"] }
    ]; };
    HouseComponent.propDecorators = {
        house: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    HouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-house',
            template: _raw_loader_house_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_house_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_8__["UIElementsService"]])
    ], HouseComponent);
    return HouseComponent;
}());



/***/ }),

/***/ "d8BU":
/*!*************************************************************!*\
  !*** ./src/app/profile/components/stats/stats.component.ts ***!
  \*************************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _raw_loader_stats_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./stats.component.html */ "ZL5W");
/* harmony import */ var _stats_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.component.css */ "z193");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/database.service */ "WAaD");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subscription */ "NTzu");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subscription__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/stats */ "rp5j");
/* harmony import */ var _services_house_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/house.service */ "oEoP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StatsComponent = /** @class */ (function () {
    function StatsComponent(databaseService, houseService) {
        this.databaseService = databaseService;
        this.houseService = houseService;
        this.stats = new _models_stats__WEBPACK_IMPORTED_MODULE_5__["Stats"]();
        this.statsArray = this.getItemsList(this.stats);
        this.subscript = new rxjs_Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscript = this.houseService.statsSubject.subscribe(function (value) {
            _this.stats = value;
            _this.statsArray = _this.getItemsList(value);
        });
    };
    StatsComponent.prototype.ngOnDestroy = function () {
        this.subscript.unsubscribe();
    };
    StatsComponent.prototype.getItemsList = function (stats) {
        return [
            {
                title: 'No. of tenants',
                icon: 'person_pin',
                stat: stats.tenants,
                class: 'card-header-warning'
            },
            {
                title: 'Revenue',
                icon: 'date_range',
                stat: stats.revenue,
                class: 'card-header-success'
            },
            {
                title: 'Residences',
                icon: 'house',
                stat: stats.residences,
                class: 'card-header-info'
            },
            {
                title: 'Outstanding payments',
                icon: 'money_off',
                stat: stats.o_payments,
                class: 'card-header-danger'
            }
        ];
    };
    StatsComponent.ctorParameters = function () { return [
        { type: app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
        { type: _services_house_service__WEBPACK_IMPORTED_MODULE_6__["HouseService"] }
    ]; };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stats',
            template: _raw_loader_stats_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_stats_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _services_house_service__WEBPACK_IMPORTED_MODULE_6__["HouseService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "hh3a":
/*!***********************************************************************!*\
  !*** ./src/app/profile/components/dialogs/tenant-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: TenantDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantDialogComponent", function() { return TenantDialogComponent; });
/* harmony import */ var _dialogs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogs.scss */ "U7vX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/database.service */ "WAaD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TenantDialogComponent = /** @class */ (function () {
    function TenantDialogComponent(dialogRef, databaseService, data) {
        this.dialogRef = dialogRef;
        this.databaseService = databaseService;
        this.data = data;
        this.labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];
    }
    TenantDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TenantDialogComponent.prototype.handleTaskDelete = function () {
        this.databaseService.removeFromArray('houses', this.data.id, this.data.tenant);
        this.dialogRef.close();
    };
    TenantDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    TenantDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tenant-dialog',
            template: "\n    \n  <h1 mat-dialog-title>Tenants</h1>\n  <mat-dialog-content>\n    <form #form=\"ngForm\">\n    <p>Name of tenant</p>\n    <mat-form-field>\n      <input placeholder=\"Name\" matInput \n      name=\"name\"\n      required\n      ngDefaultControl\n      [(ngModel)]=\"data.tenant.name\" />\n    </mat-form-field>\n  \n  \n  <p>Rent amount</p>\n  <mat-form-field appearance=\"fill\">\n     <!-- <mat-label>Favorite food</mat-label> -->\n     <input placeholder=\"Name\" matInput \n      name=\"fee\"\n      type=\"number\"\n      required\n      ngDefaultControl\n      [(ngModel)]=\"data.tenant.fee\" />\n  </mat-form-field>\n  <p>Phone number (optional)</p>\n  <mat-form-field appearance=\"fill\">\n     <!-- <mat-label>Favorite food</mat-label> -->\n     <input placeholder=\"Phone number\" matInput \n      name=\"phone\"\n      type=\"number\"\n      ngDefaultControl\n      [(ngModel)]=\"data.tenant.phone_number\" />\n  </mat-form-field>\n    <br />\n    <mat-button-toggle-group\n      #group=\"matButtonToggleGroup\"\n      [(ngModel)]=\"data.tenant.label\"\n      name=\"label\"\n    >\n      <mat-button-toggle *ngFor=\"let opt of labelOptions\" [value]=\"opt\">\n        <mat-icon [ngClass]=\"opt\">{{\n          opt === 'gray' ? 'check_circle' : 'lens'\n        }}</mat-icon>\n      </mat-button-toggle>\n    </mat-button-toggle-group>\n  <div mat-dialog-actions>\n    <button \n    [disabled]=\"form.invalid\"\n    mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>\n      {{ data.isNew ? 'Add Tenant' : 'Update tenant' }}\n    </button>\n\n    <app-delete\n      (delete)=\"handleTaskDelete()\"\n      *ngIf=\"!data.isNew\"\n    ></app-delete>\n    <button mat-button (click)=\"dialogRef.close()\" cdkFocusInitial>\n      close\n    </button>\n  </div>\n  </form>\n  </mat-dialog-content>\n  ",
            styles: [_dialogs_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], Object])
    ], TenantDialogComponent);
    return TenantDialogComponent;
}());



/***/ }),

/***/ "iN4I":
/*!**********************************************************************!*\
  !*** ./src/app/profile/components/dialogs/house-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: HouseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseDialogComponent", function() { return HouseDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HouseDialogComponent = /** @class */ (function () {
    function HouseDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.typeOptions = ['Commune', 'Flat', 'Town house'];
    }
    HouseDialogComponent.prototype.ngOnInit = function () {
    };
    HouseDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    HouseDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    HouseDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house-dialog',
            template: "\n       <h1 mat-dialog-title>Residence</h1>\n    <div mat-dialog-content>\n      <form #form=\"ngForm\">\n      <p>Name of residence</p>\n      <mat-form-field>\n        <input placeholder=\"Name\" matInput \n        name=\"name\"\n        required\n        ngDefaultControl\n        [(ngModel)]=\"data.name\" />\n      </mat-form-field>\n    \n      <div mat-dialog-content>\n    <p>Type of residence</p>\n    <mat-form-field appearance=\"fill\">\n       <!-- <mat-label>Favorite food</mat-label> -->\n        <mat-select [(ngModel)]=\"data.type\"\n          ngDefaultControl\n          required\n          name=\"select\">\n          <mat-option *ngFor=\"let type of typeOptions\" \n          \n          [value]=\"type\">\n            {{type}}\n          </mat-option>\n        </mat-select>\n    </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onNoClick()\">Cancel</button>\n      <button \n      [disabled]=\"form.invalid\"\n      mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>\n        Add\n      </button>\n    </div>  \n    </form>\n    \n    </div>\n    \n  "
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], HouseDialogComponent);
    return HouseDialogComponent;
}());



/***/ }),

/***/ "oEoP":
/*!***************************************************!*\
  !*** ./src/app/profile/services/house.service.ts ***!
  \***************************************************/
/*! exports provided: HouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseService", function() { return HouseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HouseService = /** @class */ (function () {
    function HouseService() {
        this.statsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    HouseService.ctorParameters = function () { return []; };
    HouseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HouseService);
    return HouseService;
}());



/***/ }),

/***/ "qWbZ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/to-do/to-do.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-tabs card-header-primary\">\r\n                <div class=\"nav-tabs-navigation\">\r\n                    <div class=\"nav-tabs-wrapper\">\r\n                        <span class=\"nav-tabs-title\">Tasks:</span>\r\n                        <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                            <li class=\"nav-item\">\r\n                                <a mat-button class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\r\n                                    <i class=\"material-icons\">bug_report</i> Bugs\r\n                                    <div class=\"ripple-container\"></div>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a mat-button class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\r\n                                    <i class=\"material-icons\">code</i> Website\r\n                                    <div class=\"ripple-container\"></div>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a mat-button class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\r\n                                    <i class=\"material-icons\">cloud</i> Server\r\n                                    <div class=\"ripple-container\"></div>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"tab-content\">\r\n                    <div class=\"tab-pane active\" id=\"profile\">\r\n                        <table class=\"table\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                    </td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Create 4 Invisible User Experiences you Never Knew About</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"tab-pane\" id=\"messages\">\r\n                        <table class=\"table\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                    </td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"tab-pane\" id=\"settings\">\r\n                        <table class=\"table\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                    </td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>\r\n                                        <div class=\"form-check\">\r\n                                            <label class=\"form-check-label\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\r\n                                                <span class=\"form-check-sign\">\r\n                                                    <span class=\"check\"></span>\r\n                                                </span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-warning\">\r\n                <h4 class=\"card-title\">Employees Stats</h4>\r\n                <p class=\"card-category\">New employees on 15th September, 2016</p>\r\n            </div>\r\n            <div class=\"card-body table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                    <thead class=\"text-warning\">\r\n                        <th>ID</th>\r\n                        <th>Name</th>\r\n                        <th>Salary</th>\r\n                        <th>Country</th>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>1</td>\r\n                            <td>Dakota Rice</td>\r\n                            <td>$36,738</td>\r\n                            <td>Niger</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>2</td>\r\n                            <td>Minerva Hooper</td>\r\n                            <td>$23,789</td>\r\n                            <td>Curaçao</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>3</td>\r\n                            <td>Sage Rodriguez</td>\r\n                            <td>$56,142</td>\r\n                            <td>Netherlands</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>4</td>\r\n                            <td>Philip Chaney</td>\r\n                            <td>$38,735</td>\r\n                            <td>Korea, South</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "rp5j":
/*!*****************************************!*\
  !*** ./src/app/profile/models/stats.ts ***!
  \*****************************************/
/*! exports provided: Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return Stats; });
var Stats = /** @class */ (function () {
    function Stats(tenants, revenue, residences, o_payments) {
        if (tenants === void 0) { tenants = 0; }
        if (revenue === void 0) { revenue = 0; }
        if (residences === void 0) { residences = 0; }
        if (o_payments === void 0) { o_payments = 0; }
        this.residences = residences;
        this.revenue = revenue;
        this.tenants = tenants;
        this.o_payments = o_payments;
    }
    return Stats;
}());



/***/ }),

/***/ "scHv":
/*!***************************************************************!*\
  !*** ./src/app/profile/components/house/house.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Source+Sans+Pro:wght@200&display=swap\");\n.outer-card {\n  margin: 0 10px 10px 0;\n  min-width: 300px;\n  max-width: 300px;\n  padding: 10px;\n  height: 350px;\n  overflow-y: scroll;\n}\n.title {\n  font-family: \"Source Sans Pro\", sans-serif;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  text-align: center;\n}\n.inner-card {\n  margin: 5px 0;\n  cursor: pointer;\n}\n.cdk-drag-animating {\n  transition: transform 300ms ease;\n}\n.tasks.cdk-drop-list-dragging .cdk-drag {\n  transition: transform 300ms ease;\n}\n.cdk-drag-placeholder {\n  opacity: 0.5;\n}\n.blue {\n  background: #71deff;\n  color: black;\n}\n.green {\n  background: #36e9b6;\n  color: black;\n}\n.yellow {\n  background: #ffcf44;\n  color: black;\n}\n.purple {\n  background: #b15cff;\n}\n.red {\n  background: #e74a4a;\n}\n.gray {\n  background: gray;\n  text-decoration: line-through;\n}\nmat-card::ng-deep.mat-card-header-text {\n  margin: 0 16px;\n  width: 100%;\n}\nmat-card::ng-deep h3 {\n  margin-top: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\nmat-card::ng-deep.mat-card-header .mat-card-subtitle:not(:first-child) {\n  text-align: center;\n}\nmat-card {\n  padding-top: 0;\n}\n.icon-action {\n  max-width: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL2hvdXNlL2hvdXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdIQUFBO0FBQ1I7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDRTtFQUVFLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDRTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBRU47QUFDRTtFQUNFLGdDQUFBO0FBRUo7QUFDRTtFQUNFLGdDQUFBO0FBRUo7QUFDQTtFQUNFLFlBQUE7QUFFRjtBQUNBO0VBQVEsbUJBQUE7RUFBcUIsWUFBQTtBQUk3QjtBQUhBO0VBQVMsbUJBQUE7RUFBcUIsWUFBQTtBQVE5QjtBQVBBO0VBQVUsbUJBQUE7RUFBcUIsWUFBQTtBQVkvQjtBQVhBO0VBQVUsbUJBQUE7QUFlVjtBQWRBO0VBQU8sbUJBQUE7QUFrQlA7QUFoQkE7RUFBUSxnQkFBQTtFQUFrQiw2QkFBQTtBQXFCMUI7QUFwQkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQXVCRjtBQXJCQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQXdCRjtBQXRCQTtFQUNFLGtCQUFBO0FBeUJGO0FBdkJBO0VBQ0UsY0FBQTtBQTBCRjtBQXhCQTtFQUNFLGtCQUFBO0FBMkJGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL2hvdXNlL2hvdXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDkwMCZmYW1pbHk9U291cmNlK1NhbnMrUHJvOndnaHRAMjAwJmRpc3BsYXk9c3dhcCcpO1xyXG4ub3V0ZXItY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICAvLyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaW5uZXItY2FyZCB7XHJcbiAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC50YXNrcy5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICB9XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmJsdWUgeyBiYWNrZ3JvdW5kOiAjNzFkZWZmOyBjb2xvcjogYmxhY2s7IH1cclxuLmdyZWVuIHsgYmFja2dyb3VuZDogIzM2ZTliNjsgY29sb3I6IGJsYWNrOyAgfVxyXG4ueWVsbG93IHsgYmFja2dyb3VuZDogI2ZmY2Y0NDsgY29sb3I6IGJsYWNrOyB9XHJcbi5wdXJwbGUgeyBiYWNrZ3JvdW5kOiAjYjE1Y2ZmOyB9XHJcbi5yZWQgeyBiYWNrZ3JvdW5kOiAjZTc0YTRhOyB9XHJcblxyXG4uZ3JheSB7IGJhY2tncm91bmQ6IGdyYXk7IHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyB9XHJcbm1hdC1jYXJkOjpuZy1kZWVwLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICBtYXJnaW46IDAgMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5tYXQtY2FyZDo6bmctZGVlcCBoMyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbm1hdC1jYXJkOjpuZy1kZWVwLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGU6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5pY29uLWFjdGlvbntcclxuICBtYXgtd2lkdGg6IDEuMjVyZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "skGP":
/*!****************************************************************!*\
  !*** ./src/app/profile/components/dialogs/delete.component.ts ***!
  \****************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeleteComponent = /** @class */ (function () {
    function DeleteComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DeleteComponent.prototype.cancel = function () {
        this.canDelete = false;
    };
    DeleteComponent.prototype.prepareForDelete = function () {
        this.canDelete = true;
    };
    DeleteComponent.prototype.deleteBoard = function () {
        this.delete.emit(true);
        this.canDelete = false;
    };
    DeleteComponent.propDecorators = {
        delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete',
            template: "\n   <button mat-button color=\"warn\" (click)=\"canDelete ? deleteBoard() : prepareForDelete()\">\n    <mat-icon>delete</mat-icon>\n    <span *ngIf=\"canDelete\">confirm</span> \n</button>\n\n<button *ngIf=\"canDelete\" mat-button (click)=\"cancel()\">\n    Cancel\n</button>\n  ",
            styles: [".confirm { min-width: 200px; }"]
        })
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "uki+":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root['Chartist'] = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /* Chartist.js 0.11.4
   * Copyright © 2019 Gion Kunz
   * Free to use under either the WTFPL license or the MIT license.
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
   */

  /**
   * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
   *
   * @module Chartist.Core
   */
  var Chartist = {
    version: '0.11.4'
  };

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * This object contains all namespaces used within Chartist.
     *
     * @memberof Chartist.Core
     * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
     */

    Chartist.namespaces = {
      svg: 'http://www.w3.org/2000/svg',
      xmlns: 'http://www.w3.org/2000/xmlns/',
      xhtml: 'http://www.w3.org/1999/xhtml',
      xlink: 'http://www.w3.org/1999/xlink',
      ct: 'http://gionkunz.github.com/chartist-js/ct'
    };
    /**
     * Helps to simplify functional style code
     *
     * @memberof Chartist.Core
     * @param {*} n This exact value will be returned by the noop function
     * @return {*} The same value that was provided to the n parameter
     */

    Chartist.noop = function (n) {
      return n;
    };
    /**
     * Generates a-z from a number 0 to 26
     *
     * @memberof Chartist.Core
     * @param {Number} n A number from 0 to 26 that will result in a letter a-z
     * @return {String} A character from a-z based on the input number n
     */


    Chartist.alphaNumerate = function (n) {
      // Limit to a-z
      return String.fromCharCode(97 + n % 26);
    };
    /**
     * Simple recursive object extend
     *
     * @memberof Chartist.Core
     * @param {Object} target Target object where the source will be merged into
     * @param {Object...} sources This object (objects) will be merged into target and then target is returned
     * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
     */


    Chartist.extend = function (target) {
      var i, source, sourceProp;
      target = target || {};

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];

        for (var prop in source) {
          sourceProp = source[prop];

          if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
            target[prop] = Chartist.extend(target[prop], sourceProp);
          } else {
            target[prop] = sourceProp;
          }
        }
      }

      return target;
    };
    /**
     * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
     *
     * @memberof Chartist.Core
     * @param {String} str
     * @param {String} subStr
     * @param {String} newSubStr
     * @return {String}
     */


    Chartist.replaceAll = function (str, subStr, newSubStr) {
      return str.replace(new RegExp(subStr, 'g'), newSubStr);
    };
    /**
     * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
     *
     * @memberof Chartist.Core
     * @param {Number} value
     * @param {String} unit
     * @return {String} Returns the passed number value with unit.
     */


    Chartist.ensureUnit = function (value, unit) {
      if (typeof value === 'number') {
        value = value + unit;
      }

      return value;
    };
    /**
     * Converts a number or string to a quantity object.
     *
     * @memberof Chartist.Core
     * @param {String|Number} input
     * @return {Object} Returns an object containing the value as number and the unit as string.
     */


    Chartist.quantity = function (input) {
      if (typeof input === 'string') {
        var match = /^(\d+)\s*(.*)$/g.exec(input);
        return {
          value: +match[1],
          unit: match[2] || undefined
        };
      }

      return {
        value: input
      };
    };
    /**
     * This is a wrapper around document.querySelector that will return the query if it's already of type Node
     *
     * @memberof Chartist.Core
     * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
     * @return {Node}
     */


    Chartist.querySelector = function (query) {
      return query instanceof Node ? query : document.querySelector(query);
    };
    /**
     * Functional style helper to produce array with given length initialized with undefined values
     *
     * @memberof Chartist.Core
     * @param length
     * @return {Array}
     */


    Chartist.times = function (length) {
      return Array.apply(null, new Array(length));
    };
    /**
     * Sum helper to be used in reduce functions
     *
     * @memberof Chartist.Core
     * @param previous
     * @param current
     * @return {*}
     */


    Chartist.sum = function (previous, current) {
      return previous + (current ? current : 0);
    };
    /**
     * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
     *
     * @memberof Chartist.Core
     * @param {Number} factor
     * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
     */


    Chartist.mapMultiply = function (factor) {
      return function (num) {
        return num * factor;
      };
    };
    /**
     * Add helper to be used in `Array.map` for adding a addend to each value of an array.
     *
     * @memberof Chartist.Core
     * @param {Number} addend
     * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
     */


    Chartist.mapAdd = function (addend) {
      return function (num) {
        return num + addend;
      };
    };
    /**
     * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
     *
     * @memberof Chartist.Core
     * @param arr
     * @param cb
     * @return {Array}
     */


    Chartist.serialMap = function (arr, cb) {
      var result = [],
          length = Math.max.apply(null, arr.map(function (e) {
        return e.length;
      }));
      Chartist.times(length).forEach(function (e, index) {
        var args = arr.map(function (e) {
          return e[index];
        });
        result[index] = cb.apply(null, args);
      });
      return result;
    };
    /**
     * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
     *
     * @memberof Chartist.Core
     * @param {Number} value The value that should be rounded with precision
     * @param {Number} [digits] The number of digits after decimal used to do the rounding
     * @returns {number} Rounded value
     */


    Chartist.roundWithPrecision = function (value, digits) {
      var precision = Math.pow(10, digits || Chartist.precision);
      return Math.round(value * precision) / precision;
    };
    /**
     * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
     *
     * @memberof Chartist.Core
     * @type {number}
     */


    Chartist.precision = 8;
    /**
     * A map with characters to escape for strings to be safely used as attribute values.
     *
     * @memberof Chartist.Core
     * @type {Object}
     */

    Chartist.escapingMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;'
    };
    /**
     * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
     * If called with null or undefined the function will return immediately with null or undefined.
     *
     * @memberof Chartist.Core
     * @param {Number|String|Object} data
     * @return {String}
     */

    Chartist.serialize = function (data) {
      if (data === null || data === undefined) {
        return data;
      } else if (typeof data === 'number') {
        data = '' + data;
      } else if (typeof data === 'object') {
        data = JSON.stringify({
          data: data
        });
      }

      return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
      }, data);
    };
    /**
     * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
     *
     * @memberof Chartist.Core
     * @param {String} data
     * @return {String|Number|Object}
     */


    Chartist.deserialize = function (data) {
      if (typeof data !== 'string') {
        return data;
      }

      data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
      }, data);

      try {
        data = JSON.parse(data);
        data = data.data !== undefined ? data.data : data;
      } catch (e) {}

      return data;
    };
    /**
     * Create or reinitialize the SVG element for the chart
     *
     * @memberof Chartist.Core
     * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
     * @param {String} width Set the width of the SVG element. Default is 100%
     * @param {String} height Set the height of the SVG element. Default is 100%
     * @param {String} className Specify a class to be added to the SVG element
     * @return {Object} The created/reinitialized SVG element
     */


    Chartist.createSvg = function (container, width, height, className) {
      var svg;
      width = width || '100%';
      height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
      // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

      Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
        return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
      }).forEach(function removePreviousElement(svg) {
        container.removeChild(svg);
      }); // Create svg object with width and height or use 100% as default

      svg = new Chartist.Svg('svg').attr({
        width: width,
        height: height
      }).addClass(className);
      svg._node.style.width = width;
      svg._node.style.height = height; // Add the DOM node to our container

      container.appendChild(svg._node);
      return svg;
    };
    /**
     * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
     *
     * @param  {Object} data The data object that is passed as second argument to the charts
     * @return {Object} The normalized data object
     */


    Chartist.normalizeData = function (data, reverse, multi) {
      var labelCount;
      var output = {
        raw: data,
        normalized: {}
      }; // Check if we should generate some labels based on existing series data

      output.normalized.series = Chartist.getDataArray({
        series: data.series || []
      }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
      // multi series data and we need to find the largest series if they are un-even

      if (output.normalized.series.every(function (value) {
        return value instanceof Array;
      })) {
        // Getting the series with the the most elements
        labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
          return series.length;
        }));
      } else {
        // We're dealing with Pie data so we just take the normalized array length
        labelCount = output.normalized.series.length;
      }

      output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

      Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
        return '';
      }));

      if (reverse) {
        Chartist.reverseData(output.normalized);
      }

      return output;
    };
    /**
     * This function safely checks if an objects has an owned property.
     *
     * @param {Object} object The object where to check for a property
     * @param {string} property The property name
     * @returns {boolean} Returns true if the object owns the specified property
     */


    Chartist.safeHasProperty = function (object, property) {
      return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
    };
    /**
     * Checks if a value is considered a hole in the data series.
     *
     * @param {*} value
     * @returns {boolean} True if the value is considered a data hole
     */


    Chartist.isDataHoleValue = function (value) {
      return value === null || value === undefined || typeof value === 'number' && isNaN(value);
    };
    /**
     * Reverses the series, labels and series data arrays.
     *
     * @memberof Chartist.Core
     * @param data
     */


    Chartist.reverseData = function (data) {
      data.labels.reverse();
      data.series.reverse();

      for (var i = 0; i < data.series.length; i++) {
        if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
          data.series[i].data.reverse();
        } else if (data.series[i] instanceof Array) {
          data.series[i].reverse();
        }
      }
    };
    /**
     * Convert data series into plain array
     *
     * @memberof Chartist.Core
     * @param {Object} data The series object that contains the data to be visualized in the chart
     * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
     * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
     * @return {Array} A plain array that contains the data to be visualized in the chart
     */


    Chartist.getDataArray = function (data, reverse, multi) {
      // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
      // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
      function recursiveConvert(value) {
        if (Chartist.safeHasProperty(value, 'value')) {
          // We are dealing with value object notation so we need to recurse on value property
          return recursiveConvert(value.value);
        } else if (Chartist.safeHasProperty(value, 'data')) {
          // We are dealing with series object notation so we need to recurse on data property
          return recursiveConvert(value.data);
        } else if (value instanceof Array) {
          // Data is of type array so we need to recurse on the series
          return value.map(recursiveConvert);
        } else if (Chartist.isDataHoleValue(value)) {
          // We're dealing with a hole in the data and therefore need to return undefined
          // We're also returning undefined for multi value output
          return undefined;
        } else {
          // We need to prepare multi value output (x and y data)
          if (multi) {
            var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
            // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
            // If multi is a string then it's assumed that it specified which dimension should be filled as default

            if (typeof multi === 'string') {
              multiValue[multi] = Chartist.getNumberOrUndefined(value);
            } else {
              multiValue.y = Chartist.getNumberOrUndefined(value);
            }

            multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
            multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
            return multiValue;
          } else {
            // We can return simple data
            return Chartist.getNumberOrUndefined(value);
          }
        }
      }

      return data.series.map(recursiveConvert);
    };
    /**
     * Converts a number into a padding object.
     *
     * @memberof Chartist.Core
     * @param {Object|Number} padding
     * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
     * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
     */


    Chartist.normalizePadding = function (padding, fallback) {
      fallback = fallback || 0;
      return typeof padding === 'number' ? {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      } : {
        top: typeof padding.top === 'number' ? padding.top : fallback,
        right: typeof padding.right === 'number' ? padding.right : fallback,
        bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
        left: typeof padding.left === 'number' ? padding.left : fallback
      };
    };

    Chartist.getMetaData = function (series, index) {
      var value = series.data ? series.data[index] : series[index];
      return value ? value.meta : undefined;
    };
    /**
     * Calculate the order of magnitude for the chart scale
     *
     * @memberof Chartist.Core
     * @param {Number} value The value Range of the chart
     * @return {Number} The order of magnitude
     */


    Chartist.orderOfMagnitude = function (value) {
      return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
    };
    /**
     * Project a data length into screen coordinates (pixels)
     *
     * @memberof Chartist.Core
     * @param {Object} axisLength The svg element for the chart
     * @param {Number} length Single data value from a series array
     * @param {Object} bounds All the values to set the bounds of the chart
     * @return {Number} The projected data length in pixels
     */


    Chartist.projectLength = function (axisLength, length, bounds) {
      return length / bounds.range * axisLength;
    };
    /**
     * Get the height of the area in the chart for the data series
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @return {Number} The height of the area in the chart for the data series
     */


    Chartist.getAvailableHeight = function (svg, options) {
      return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
    };
    /**
     * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
     *
     * @memberof Chartist.Core
     * @param {Array} data The array that contains the data to be visualized in the chart
     * @param {Object} options The Object that contains the chart options
     * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
     * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
     */


    Chartist.getHighLow = function (data, options, dimension) {
      // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
      options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
      var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
      var findHigh = options.high === undefined;
      var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

      function recursiveHighLow(data) {
        if (data === undefined) {
          return undefined;
        } else if (data instanceof Array) {
          for (var i = 0; i < data.length; i++) {
            recursiveHighLow(data[i]);
          }
        } else {
          var value = dimension ? +data[dimension] : +data;

          if (findHigh && value > highLow.high) {
            highLow.high = value;
          }

          if (findLow && value < highLow.low) {
            highLow.low = value;
          }
        }
      } // Start to find highest and lowest number recursively


      if (findHigh || findLow) {
        recursiveHighLow(data);
      } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
      // used to generate the chart. This is useful when the chart always needs to contain the position of the
      // invisible reference value in the view i.e. for bipolar scales.


      if (options.referenceValue || options.referenceValue === 0) {
        highLow.high = Math.max(options.referenceValue, highLow.high);
        highLow.low = Math.min(options.referenceValue, highLow.low);
      } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
      // to set the high or low to 0 depending on the polarity


      if (highLow.high <= highLow.low) {
        // If both values are 0 we set high to 1
        if (highLow.low === 0) {
          highLow.high = 1;
        } else if (highLow.low < 0) {
          // If we have the same negative value for the bounds we set bounds.high to 0
          highLow.high = 0;
        } else if (highLow.high > 0) {
          // If we have the same positive value for the bounds we set bounds.low to 0
          highLow.low = 0;
        } else {
          // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
          highLow.high = 1;
          highLow.low = 0;
        }
      }

      return highLow;
    };
    /**
     * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {Boolean}
     */


    Chartist.isNumeric = function (value) {
      return value === null ? false : isFinite(value);
    };
    /**
     * Returns true on all falsey values except the numeric value 0.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {boolean}
     */


    Chartist.isFalseyButZero = function (value) {
      return !value && value !== 0;
    };
    /**
     * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {*}
     */


    Chartist.getNumberOrUndefined = function (value) {
      return Chartist.isNumeric(value) ? +value : undefined;
    };
    /**
     * Checks if provided value object is multi value (contains x or y properties)
     *
     * @memberof Chartist.Core
     * @param value
     */


    Chartist.isMultiValue = function (value) {
      return typeof value === 'object' && ('x' in value || 'y' in value);
    };
    /**
     * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
     *
     * @memberof Chartist.Core
     * @param value
     * @param dimension
     * @param defaultValue
     * @returns {*}
     */


    Chartist.getMultiValue = function (value, dimension) {
      if (Chartist.isMultiValue(value)) {
        return Chartist.getNumberOrUndefined(value[dimension || 'y']);
      } else {
        return Chartist.getNumberOrUndefined(value);
      }
    };
    /**
     * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
     *
     * @memberof Chartist.Core
     * @param {Number} num An integer number where the smallest factor should be searched for
     * @returns {Number} The smallest integer factor of the parameter num.
     */


    Chartist.rho = function (num) {
      if (num === 1) {
        return num;
      }

      function gcd(p, q) {
        if (p % q === 0) {
          return q;
        } else {
          return gcd(q, p % q);
        }
      }

      function f(x) {
        return x * x + 1;
      }

      var x1 = 2,
          x2 = 2,
          divisor;

      if (num % 2 === 0) {
        return 2;
      }

      do {
        x1 = f(x1) % num;
        x2 = f(f(x2)) % num;
        divisor = gcd(Math.abs(x1 - x2), num);
      } while (divisor === 1);

      return divisor;
    };
    /**
     * Calculate and retrieve all the bounds for the chart and return them in one array
     *
     * @memberof Chartist.Core
     * @param {Number} axisLength The length of the Axis used for
     * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
     * @param {Number} scaleMinSpace The minimum projected length a step should result in
     * @param {Boolean} onlyInteger
     * @return {Object} All the values to set the bounds of the chart
     */


    Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
      var i,
          optimizationCounter = 0,
          newMin,
          newMax,
          bounds = {
        high: highLow.high,
        low: highLow.low
      };
      bounds.valueRange = bounds.high - bounds.low;
      bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
      bounds.step = Math.pow(10, bounds.oom);
      bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
      bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
      bounds.range = bounds.max - bounds.min;
      bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
      // If we are already below the scaleMinSpace value we will scale up

      var length = Chartist.projectLength(axisLength, bounds.step, bounds);
      var scaleUp = length < scaleMinSpace;
      var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

      if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
        bounds.step = 1;
      } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
        // If step 1 was too small, we can try the smallest factor of range
        // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
        // is larger than the scaleMinSpace we should go for it.
        bounds.step = smallestFactor;
      } else {
        // Trying to divide or multiply by 2 and find the best step value
        while (true) {
          if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
            bounds.step *= 2;
          } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
            bounds.step /= 2;

            if (onlyInteger && bounds.step % 1 !== 0) {
              bounds.step *= 2;
              break;
            }
          } else {
            break;
          }

          if (optimizationCounter++ > 1000) {
            throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
          }
        }
      }

      var EPSILON = 2.221E-16;
      bounds.step = Math.max(bounds.step, EPSILON);

      function safeIncrement(value, increment) {
        // If increment is too small use *= (1+EPSILON) as a simple nextafter
        if (value === (value += increment)) {
          value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
        }

        return value;
      } // Narrow min and max based on new step


      newMin = bounds.min;
      newMax = bounds.max;

      while (newMin + bounds.step <= bounds.low) {
        newMin = safeIncrement(newMin, bounds.step);
      }

      while (newMax - bounds.step >= bounds.high) {
        newMax = safeIncrement(newMax, -bounds.step);
      }

      bounds.min = newMin;
      bounds.max = newMax;
      bounds.range = bounds.max - bounds.min;
      var values = [];

      for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
        var value = Chartist.roundWithPrecision(i);

        if (value !== values[values.length - 1]) {
          values.push(value);
        }
      }

      bounds.values = values;
      return bounds;
    };
    /**
     * Calculate cartesian coordinates of polar coordinates
     *
     * @memberof Chartist.Core
     * @param {Number} centerX X-axis coordinates of center point of circle segment
     * @param {Number} centerY X-axis coordinates of center point of circle segment
     * @param {Number} radius Radius of circle segment
     * @param {Number} angleInDegrees Angle of circle segment in degrees
     * @return {{x:Number, y:Number}} Coordinates of point on circumference
     */


    Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    };
    /**
     * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
     * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
     */


    Chartist.createChartRect = function (svg, options, fallbackPadding) {
      var hasAxis = !!(options.axisX || options.axisY);
      var yAxisOffset = hasAxis ? options.axisY.offset : 0;
      var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

      var width = svg.width() || Chartist.quantity(options.width).value || 0;
      var height = svg.height() || Chartist.quantity(options.height).value || 0;
      var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

      width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
      height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
      var chartRect = {
        padding: normalizedPadding,
        width: function width() {
          return this.x2 - this.x1;
        },
        height: function height() {
          return this.y1 - this.y2;
        }
      };

      if (hasAxis) {
        if (options.axisX.position === 'start') {
          chartRect.y2 = normalizedPadding.top + xAxisOffset;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        } else {
          chartRect.y2 = normalizedPadding.top;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
        }

        if (options.axisY.position === 'start') {
          chartRect.x1 = normalizedPadding.left + yAxisOffset;
          chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        } else {
          chartRect.x1 = normalizedPadding.left;
          chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
        }
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      }

      return chartRect;
    };
    /**
     * Creates a grid line based on a projected value.
     *
     * @memberof Chartist.Core
     * @param position
     * @param index
     * @param axis
     * @param offset
     * @param length
     * @param group
     * @param classes
     * @param eventEmitter
     */


    Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
      var positionalData = {};
      positionalData[axis.units.pos + '1'] = position;
      positionalData[axis.units.pos + '2'] = position;
      positionalData[axis.counterUnits.pos + '1'] = offset;
      positionalData[axis.counterUnits.pos + '2'] = offset + length;
      var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

      eventEmitter.emit('draw', Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData));
    };
    /**
     * Creates a grid background rect and emits the draw event.
     *
     * @memberof Chartist.Core
     * @param gridGroup
     * @param chartRect
     * @param className
     * @param eventEmitter
     */


    Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
      var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height()
      }, className, true); // Event for grid background draw

      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
    };
    /**
     * Creates a label based on a projected value and an axis.
     *
     * @memberof Chartist.Core
     * @param position
     * @param length
     * @param index
     * @param labels
     * @param axis
     * @param axisOffset
     * @param labelOffset
     * @param group
     * @param classes
     * @param useForeignObject
     * @param eventEmitter
     */


    Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
      var labelElement;
      var positionalData = {};
      positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
      positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
      positionalData[axis.units.len] = length;
      positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

      if (useForeignObject) {
        // We need to set width and height explicitly to px as span will not expand with width and height being
        // 100% in all browsers
        var content = document.createElement('span');
        content.className = classes.join(' ');
        content.setAttribute('xmlns', Chartist.namespaces.xhtml);
        content.innerText = labels[index];
        content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
        content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
        labelElement = group.foreignObject(content, Chartist.extend({
          style: 'overflow: visible;'
        }, positionalData));
      } else {
        labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
      }

      eventEmitter.emit('draw', Chartist.extend({
        type: 'label',
        axis: axis,
        index: index,
        group: group,
        element: labelElement,
        text: labels[index]
      }, positionalData));
    };
    /**
     * Helper to read series specific options from options object. It automatically falls back to the global option if
     * there is no option in the series options.
     *
     * @param {Object} series Series object
     * @param {Object} options Chartist options object
     * @param {string} key The options key that should be used to obtain the options
     * @returns {*}
     */


    Chartist.getSeriesOption = function (series, options, key) {
      if (series.name && options.series && options.series[series.name]) {
        var seriesOptions = options.series[series.name];
        return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
      } else {
        return options[key];
      }
    };
    /**
     * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
     *
     * @memberof Chartist.Core
     * @param {Object} options Options set by user
     * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
     * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
     * @return {Object} The consolidated options object from the defaults, base and matching responsive options
     */


    Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
      var baseOptions = Chartist.extend({}, options),
          currentOptions,
          mediaQueryListeners = [],
          i;

      function updateCurrentOptions(mediaEvent) {
        var previousOptions = currentOptions;
        currentOptions = Chartist.extend({}, baseOptions);

        if (responsiveOptions) {
          for (i = 0; i < responsiveOptions.length; i++) {
            var mql = window.matchMedia(responsiveOptions[i][0]);

            if (mql.matches) {
              currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
            }
          }
        }

        if (eventEmitter && mediaEvent) {
          eventEmitter.emit('optionsChanged', {
            previousOptions: previousOptions,
            currentOptions: currentOptions
          });
        }
      }

      function removeMediaQueryListeners() {
        mediaQueryListeners.forEach(function (mql) {
          mql.removeListener(updateCurrentOptions);
        });
      }

      if (!window.matchMedia) {
        throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
      } else if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          mql.addListener(updateCurrentOptions);
          mediaQueryListeners.push(mql);
        }
      } // Execute initially without an event argument so we get the correct options


      updateCurrentOptions();
      return {
        removeMediaQueryListeners: removeMediaQueryListeners,
        getCurrentOptions: function getCurrentOptions() {
          return Chartist.extend({}, currentOptions);
        }
      };
    };
    /**
     * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
     * valueData property describing the segment.
     *
     * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
     * points with undefined values are discarded.
     *
     * **Options**
     * The following options are used to determine how segments are formed
     * ```javascript
     * var options = {
     *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
     *   fillHoles: false,
     *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
     *   increasingX: false
     * };
     * ```
     *
     * @memberof Chartist.Core
     * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
     * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
     * @param {Object} options Options set by user
     * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
     */


    Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
      var defaultOptions = {
        increasingX: false,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var segments = [];
      var hole = true;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        // If this value is a "hole" we set the hole flag
        if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
          // if(valueData[i / 2].value === undefined) {
          if (!options.fillHoles) {
            hole = true;
          }
        } else {
          if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
            // X is not increasing, so we need to make sure we start a new segment
            hole = true;
          } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


          if (hole) {
            segments.push({
              pathCoordinates: [],
              valueData: []
            }); // As we have a valid value now, we are not in a "hole" anymore

            hole = false;
          } // Add to the segment pathCoordinates and valueData


          segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
          segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
      }

      return segments;
    };
  })(this || global, Chartist);

  ;
  /**
  * Chartist path interpolation functions.
  *
  * @module Chartist.Interpolation
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.Interpolation = {};
    /**
     * This interpolation function does not smooth the path and the result is only containing lines and no curves.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.none({
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @return {Function}
     */

    Chartist.Interpolation.none = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function none(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var hole = true;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2];

          if (Chartist.getMultiValue(currData.value) !== undefined) {
            if (hole) {
              path.move(currX, currY, false, currData);
            } else {
              path.line(currX, currY, false, currData);
            }

            hole = false;
          } else if (!options.fillHoles) {
            hole = true;
          }
        }

        return path;
      };
    };
    /**
     * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
     *
     * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.simple({
     *     divisor: 2,
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the simple interpolation factory function.
     * @return {Function}
     */


    Chartist.Interpolation.simple = function (options) {
      var defaultOptions = {
        divisor: 2,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var d = 1 / Math.max(1, options.divisor);
      return function simple(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var length = (currX - prevX) * d;
          var currData = valueData[i / 2];

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = currX = prevData = undefined;
          }
        }

        return path;
      };
    };
    /**
     * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
     *
     * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 1,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the cardinal factory function.
     * @return {Function}
     */


    Chartist.Interpolation.cardinal = function (options) {
      var defaultOptions = {
        tension: 1,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var t = Math.min(1, Math.max(0, options.tension)),
          c = 1 - t;
      return function cardinal(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the cardinal function

          segments.forEach(function (segment) {
            paths.push(cardinal(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
              z;

          for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +pathCoordinates[i - 2],
              y: +pathCoordinates[i - 1]
            }, {
              x: +pathCoordinates[i],
              y: +pathCoordinates[i + 1]
            }, {
              x: +pathCoordinates[i + 2],
              y: +pathCoordinates[i + 3]
            }, {
              x: +pathCoordinates[i + 4],
              y: +pathCoordinates[i + 5]
            }];

            if (z) {
              if (!i) {
                p[0] = {
                  x: +pathCoordinates[iLen - 2],
                  y: +pathCoordinates[iLen - 1]
                };
              } else if (iLen - 4 === i) {
                p[3] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
              } else if (iLen - 2 === i) {
                p[2] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
                p[3] = {
                  x: +pathCoordinates[2],
                  y: +pathCoordinates[3]
                };
              }
            } else {
              if (iLen - 4 === i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                };
              }
            }

            path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
          }

          return path;
        }
      };
    };
    /**
     * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
     *
     * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.monotoneCubic({
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the monotoneCubic factory function.
     * @return {Function}
     */


    Chartist.Interpolation.monotoneCubic = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function monotoneCubic(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles,
          increasingX: true
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the monotoneCubic fn function

          segments.forEach(function (segment) {
            paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var xs = [],
              ys = [],
              i,
              n = pathCoordinates.length / 2,
              ms = [],
              ds = [],
              dys = [],
              dxs = [],
              path; // Populate x and y coordinates into separate arrays, for readability

          for (i = 0; i < n; i++) {
            xs[i] = pathCoordinates[i * 2];
            ys[i] = pathCoordinates[i * 2 + 1];
          } // Calculate deltas and derivative


          for (i = 0; i < n - 1; i++) {
            dys[i] = ys[i + 1] - ys[i];
            dxs[i] = xs[i + 1] - xs[i];
            ds[i] = dys[i] / dxs[i];
          } // Determine desired slope (m) at each point using Fritsch-Carlson method
          // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


          ms[0] = ds[0];
          ms[n - 1] = ds[n - 2];

          for (i = 1; i < n - 1; i++) {
            if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
              ms[i] = 0;
            } else {
              ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

              if (!isFinite(ms[i])) {
                ms[i] = 0;
              }
            }
          } // Now build a path from the slopes


          path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

          for (i = 0; i < n - 1; i++) {
            path.curve( // First control point
            xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
            xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
            xs[i + 1], ys[i + 1], false, valueData[i + 1]);
          }

          return path;
        }
      };
    };
    /**
     * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.step({
     *     postpone: true,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param options
     * @returns {Function}
     */


    Chartist.Interpolation.step = function (options) {
      var defaultOptions = {
        postpone: true,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function step(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              if (options.postpone) {
                // If postponed we should draw the step line with the value of the previous value
                path.line(currX, prevY, false, prevData);
              } else {
                // If not postponed we should draw the step line with the value of the current value
                path.line(prevX, currY, false, currData);
              } // Line to the actual point (this should only be a Y-Axis movement


              path.line(currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = prevY = prevData = undefined;
          }
        }

        return path;
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * A very basic event module that helps to generate and catch events.
  *
  * @module Chartist.Event
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.EventEmitter = function () {
      var handlers = [];
      /**
       * Add an event handler for a specific event
       *
       * @memberof Chartist.Event
       * @param {String} event The event name
       * @param {Function} handler A event handler function
       */

      function addEventHandler(event, handler) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      }
      /**
       * Remove an event handler of a specific event name or remove all event handlers for a specific event.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name where a specific or all handlers should be removed
       * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
       */


      function removeEventHandler(event, handler) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          // If handler is set we will look for a specific handler and only remove this
          if (handler) {
            handlers[event].splice(handlers[event].indexOf(handler), 1);

            if (handlers[event].length === 0) {
              delete handlers[event];
            }
          } else {
            // If no handler is specified we remove all handlers for this event
            delete handlers[event];
          }
        }
      }
      /**
       * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name that should be triggered
       * @param {*} data Arbitrary data that will be passed to the event handler callback functions
       */


      function emit(event, data) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          handlers[event].forEach(function (handler) {
            handler(data);
          });
        } // Emit event to star event handlers


        if (handlers['*']) {
          handlers['*'].forEach(function (starHandler) {
            starHandler(event, data);
          });
        }
      }

      return {
        addEventHandler: addEventHandler,
        removeEventHandler: removeEventHandler,
        emit: emit
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * This module provides some basic prototype inheritance utilities.
  *
  * @module Chartist.Class
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    function listToArray(list) {
      var arr = [];

      if (list.length) {
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i]);
        }
      }

      return arr;
    }
    /**
     * Method to extend from current prototype.
     *
     * @memberof Chartist.Class
     * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
     * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
     * @return {Function} Constructor function of the new class
     *
     * @example
     * var Fruit = Class.extend({
       * color: undefined,
       *   sugar: undefined,
       *
       *   constructor: function(color, sugar) {
       *     this.color = color;
       *     this.sugar = sugar;
       *   },
       *
       *   eat: function() {
       *     this.sugar = 0;
       *     return this;
       *   }
       * });
     *
     * var Banana = Fruit.extend({
       *   length: undefined,
       *
       *   constructor: function(length, sugar) {
       *     Banana.super.constructor.call(this, 'Yellow', sugar);
       *     this.length = length;
       *   }
       * });
     *
     * var banana = new Banana(20, 40);
     * console.log('banana instanceof Fruit', banana instanceof Fruit);
     * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
     * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
     * console.log(banana.sugar);
     * console.log(banana.eat().sugar);
     * console.log(banana.color);
     */


    function extend(properties, superProtoOverride) {
      var superProto = superProtoOverride || this.prototype || Chartist.Class;
      var proto = Object.create(superProto);
      Chartist.Class.cloneDefinitions(proto, properties);

      var constr = function constr() {
        var fn = proto.constructor || function () {},
            instance; // If this is linked to the Chartist namespace the constructor was not called with new
        // To provide a fallback we will instantiate here and return the instance


        instance = this === Chartist ? Object.create(proto) : this;
        fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
        // This will not harm when the constructor has been called with new as the returned value is ignored

        return instance;
      };

      constr.prototype = proto;
      constr.super = superProto;
      constr.extend = this.extend;
      return constr;
    } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


    function cloneDefinitions() {
      var args = listToArray(arguments);
      var target = args[0];
      args.splice(1, args.length - 1).forEach(function (source) {
        Object.getOwnPropertyNames(source).forEach(function (propName) {
          // If this property already exist in target we delete it first
          delete target[propName]; // Define the property with the descriptor from source

          Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
        });
      });
      return target;
    }

    Chartist.Class = {
      extend: extend,
      cloneDefinitions: cloneDefinitions
    };
  })(this || global, Chartist);

  ;
  /**
  * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
  *
  * @module Chartist.Base
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
    // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
    // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
    // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
    // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
    // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

    /**
     * Updates the chart which currently does a full reconstruction of the SVG DOM
     *
     * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
     * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
     * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
     * @memberof Chartist.Base
     */

    function update(data, options, override) {
      if (data) {
        this.data = data || {};
        this.data.labels = this.data.labels || [];
        this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

        this.eventEmitter.emit('data', {
          type: 'update',
          data: this.data
        });
      }

      if (options) {
        this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
        // Otherwise we re-create the optionsProvider at this point

        if (!this.initializeTimeoutId) {
          this.optionsProvider.removeMediaQueryListeners();
          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        }
      } // Only re-created the chart if it has been initialized yet


      if (!this.initializeTimeoutId) {
        this.createChart(this.optionsProvider.getCurrentOptions());
      } // Return a reference to the chart object to chain up calls


      return this;
    }
    /**
     * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
     *
     * @memberof Chartist.Base
     */


    function detach() {
      // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
      // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
      if (!this.initializeTimeoutId) {
        window.removeEventListener('resize', this.resizeListener);
        this.optionsProvider.removeMediaQueryListeners();
      } else {
        window.clearTimeout(this.initializeTimeoutId);
      }

      return this;
    }
    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event. Check the examples for supported events.
     * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */


    function on(event, handler) {
      this.eventEmitter.addEventHandler(event, handler);
      return this;
    }
    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event for which a handler should be removed
     * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */


    function off(event, handler) {
      this.eventEmitter.removeEventHandler(event, handler);
      return this;
    }

    function initialize() {
      // Add window resize listener that re-creates the chart
      window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
      // This will also register a listener that is re-creating the chart based on media changes

      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

      this.eventEmitter.addEventHandler('optionsChanged', function () {
        this.update();
      }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
      // Initialize all relevant plugins with our chart object and the plugin options specified in the config

      if (this.options.plugins) {
        this.options.plugins.forEach(function (plugin) {
          if (plugin instanceof Array) {
            plugin[0](this, plugin[1]);
          } else {
            plugin(this);
          }
        }.bind(this));
      } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


      this.eventEmitter.emit('data', {
        type: 'initial',
        data: this.data
      }); // Create the first chart

      this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
      // This is important if the chart gets initialized on the same element twice

      this.initializeTimeoutId = undefined;
    }
    /**
     * Constructor of chart base class.
     *
     * @param query
     * @param data
     * @param defaultOptions
     * @param options
     * @param responsiveOptions
     * @constructor
     */


    function Base(query, data, defaultOptions, options, responsiveOptions) {
      this.container = Chartist.querySelector(query);
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.defaultOptions = defaultOptions;
      this.options = options;
      this.responsiveOptions = responsiveOptions;
      this.eventEmitter = Chartist.EventEmitter();
      this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
      this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

      this.resizeListener = function resizeListener() {
        this.update();
      }.bind(this);

      if (this.container) {
        // If chartist was already initialized in this container we are detaching all event listeners first
        if (this.container.__chartist__) {
          this.container.__chartist__.detach();
        }

        this.container.__chartist__ = this;
      } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
      // the chart was created.


      this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
    } // Creating the chart base class


    Chartist.Base = Chartist.Class.extend({
      constructor: Base,
      optionsProvider: undefined,
      container: undefined,
      svg: undefined,
      eventEmitter: undefined,
      createChart: function createChart() {
        throw new Error('Base chart type can\'t be instantiated!');
      },
      update: update,
      detach: detach,
      on: on,
      off: off,
      version: Chartist.version,
      supportsForeignObject: false
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG module for simple SVG DOM abstraction
  *
  * @module Chartist.Svg
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var document = globalRoot.document;
    /**
     * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
     *
     * @memberof Chartist.Svg
     * @constructor
     * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
     * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} className This class or class list will be added to the SVG element
     * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
     * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     */

    function Svg(name, attributes, className, parent, insertFirst) {
      // If Svg is getting called with an SVG element we just return the wrapper
      if (name instanceof Element) {
        this._node = name;
      } else {
        this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

        if (name === 'svg') {
          this.attr({
            'xmlns:ct': Chartist.namespaces.ct
          });
        }
      }

      if (attributes) {
        this.attr(attributes);
      }

      if (className) {
        this.addClass(className);
      }

      if (parent) {
        if (insertFirst && parent._node.firstChild) {
          parent._node.insertBefore(this._node, parent._node.firstChild);
        } else {
          parent._node.appendChild(this._node);
        }
      }
    }
    /**
     * Set attributes on the current SVG element of the wrapper you're currently working on.
     *
     * @memberof Chartist.Svg
     * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
     * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
     * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
     */


    function attr(attributes, ns) {
      if (typeof attributes === 'string') {
        if (ns) {
          return this._node.getAttributeNS(ns, attributes);
        } else {
          return this._node.getAttribute(attributes);
        }
      }

      Object.keys(attributes).forEach(function (key) {
        // If the attribute value is undefined we can skip this one
        if (attributes[key] === undefined) {
          return;
        }

        if (key.indexOf(':') !== -1) {
          var namespacedAttribute = key.split(':');

          this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
        } else {
          this._node.setAttribute(key, attributes[key]);
        }
      }.bind(this));
      return this;
    }
    /**
     * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
     *
     * @memberof Chartist.Svg
     * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
     * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
     */


    function elem(name, attributes, className, insertFirst) {
      return new Chartist.Svg(name, attributes, className, this, insertFirst);
    }
    /**
     * Returns the parent Chartist.SVG wrapper object
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
     */


    function parent() {
      return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
    }
    /**
     * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
     */


    function root() {
      var node = this._node;

      while (node.nodeName !== 'svg') {
        node = node.parentNode;
      }

      return new Chartist.Svg(node);
    }
    /**
     * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
     */


    function querySelector(selector) {
      var foundNode = this._node.querySelector(selector);

      return foundNode ? new Chartist.Svg(foundNode) : null;
    }
    /**
     * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
     */


    function querySelectorAll(selector) {
      var foundNodes = this._node.querySelectorAll(selector);

      return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
    }
    /**
     * Returns the underlying SVG node for the current element.
     *
     * @memberof Chartist.Svg
     * @returns {Node}
     */


    function getNode() {
      return this._node;
    }
    /**
     * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
     *
     * @memberof Chartist.Svg
     * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
     * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
     * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
     */


    function foreignObject(content, attributes, className, insertFirst) {
      // If content is string then we convert it to DOM
      // TODO: Handle case where content is not a string nor a DOM Node
      if (typeof content === 'string') {
        var container = document.createElement('div');
        container.innerHTML = content;
        content = container.firstChild;
      } // Adding namespace to content element


      content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
      // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

      var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

      fnObj._node.appendChild(content);

      return fnObj;
    }
    /**
     * This method adds a new text element to the current Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} t The text that should be added to the text element that is created
     * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
     */


    function text(t) {
      this._node.appendChild(document.createTextNode(t));

      return this;
    }
    /**
     * This method will clear all child nodes of the current wrapper object.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The same wrapper object that got emptied
     */


    function empty() {
      while (this._node.firstChild) {
        this._node.removeChild(this._node.firstChild);
      }

      return this;
    }
    /**
     * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The parent wrapper object of the element that got removed
     */


    function remove() {
      this._node.parentNode.removeChild(this._node);

      return this.parent();
    }
    /**
     * This method will replace the element with a new element that can be created outside of the current DOM.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
     * @return {Chartist.Svg} The wrapper of the new element
     */


    function replace(newElement) {
      this._node.parentNode.replaceChild(newElement._node, this._node);

      return newElement;
    }
    /**
     * This method will append an element to the current element as a child.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
     * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
     * @return {Chartist.Svg} The wrapper of the appended object
     */


    function append(element, insertFirst) {
      if (insertFirst && this._node.firstChild) {
        this._node.insertBefore(element._node, this._node.firstChild);
      } else {
        this._node.appendChild(element._node);
      }

      return this;
    }
    /**
     * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
     *
     * @memberof Chartist.Svg
     * @return {Array} A list of classes or an empty array if there are no classes on the current element
     */


    function classes() {
      return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
    }
    /**
     * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function addClass(names) {
      this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
      }).join(' '));

      return this;
    }
    /**
     * Removes one or a space separated list of classes from the current element.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeClass(names) {
      var removedClasses = names.trim().split(/\s+/);

      this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
        return removedClasses.indexOf(name) === -1;
      }).join(' '));

      return this;
    }
    /**
     * Removes all classes from the current element.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeAllClasses() {
      this._node.setAttribute('class', '');

      return this;
    }
    /**
     * Get element height using `getBoundingClientRect`
     *
     * @memberof Chartist.Svg
     * @return {Number} The elements height in pixels
     */


    function height() {
      return this._node.getBoundingClientRect().height;
    }
    /**
     * Get element width using `getBoundingClientRect`
     *
     * @memberof Chartist.Core
     * @return {Number} The elements width in pixels
     */


    function width() {
      return this._node.getBoundingClientRect().width;
    }
    /**
     * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
     * **An animations object could look like this:**
     * ```javascript
     * element.animate({
     *   opacity: {
     *     dur: 1000,
     *     from: 0,
     *     to: 1
     *   },
     *   x1: {
     *     dur: '1000ms',
     *     from: 100,
     *     to: 200,
     *     easing: 'easeOutQuart'
     *   },
     *   y1: {
     *     dur: '2s',
     *     from: 0,
     *     to: 100
     *   }
     * });
     * ```
     * **Automatic unit conversion**
     * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
     * **Guided mode**
     * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
     * If guided mode is enabled the following behavior is added:
     * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
     * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
     * - The animate element will be forced to use `fill="freeze"`
     * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
     * - After the animation the element attribute value will be set to the `to` value of the animation
     * - The animate element is deleted from the DOM
     *
     * @memberof Chartist.Svg
     * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
     * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
     * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
     * @return {Chartist.Svg} The current element where the animation was added
     */


    function animate(animations, guided, eventEmitter) {
      if (guided === undefined) {
        guided = true;
      }

      Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
        function createAnimate(animationDefinition, guided) {
          var attributeProperties = {},
              animate,
              timeout,
              easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
          // be part of the animate element attributes.

          if (animationDefinition.easing) {
            // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
            easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
            delete animationDefinition.easing;
          } // If numeric dur or begin was provided we assume milli seconds


          animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
          animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

          if (easing) {
            animationDefinition.calcMode = 'spline';
            animationDefinition.keySplines = easing.join(' ');
            animationDefinition.keyTimes = '0;1';
          } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


          if (guided) {
            animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

            attributeProperties[attribute] = animationDefinition.from;
            this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
            // which needs to be in ms aside

            timeout = Chartist.quantity(animationDefinition.begin || 0).value;
            animationDefinition.begin = 'indefinite';
          }

          animate = this.elem('animate', Chartist.extend({
            attributeName: attribute
          }, animationDefinition));

          if (guided) {
            // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
            setTimeout(function () {
              // If beginElement fails we set the animated attribute to the end position and remove the animate element
              // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
              // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
              try {
                animate._node.beginElement();
              } catch (err) {
                // Set animated attribute to current animated value
                attributeProperties[attribute] = animationDefinition.to;
                this.attr(attributeProperties); // Remove the animate element as it's no longer required

                animate.remove();
              }
            }.bind(this), timeout);
          }

          if (eventEmitter) {
            animate._node.addEventListener('beginEvent', function handleBeginEvent() {
              eventEmitter.emit('animationBegin', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }.bind(this));
          }

          animate._node.addEventListener('endEvent', function handleEndEvent() {
            if (eventEmitter) {
              eventEmitter.emit('animationEnd', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }

            if (guided) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties); // Remove the animate element as it's no longer required

              animate.remove();
            }
          }.bind(this));
        } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


        if (animations[attribute] instanceof Array) {
          animations[attribute].forEach(function (animationDefinition) {
            createAnimate.bind(this)(animationDefinition, false);
          }.bind(this));
        } else {
          createAnimate.bind(this)(animations[attribute], guided);
        }
      }.bind(this));
      return this;
    }

    Chartist.Svg = Chartist.Class.extend({
      constructor: Svg,
      attr: attr,
      elem: elem,
      parent: parent,
      root: root,
      querySelector: querySelector,
      querySelectorAll: querySelectorAll,
      getNode: getNode,
      foreignObject: foreignObject,
      text: text,
      empty: empty,
      remove: remove,
      replace: replace,
      append: append,
      classes: classes,
      addClass: addClass,
      removeClass: removeClass,
      removeAllClasses: removeAllClasses,
      height: height,
      width: width,
      animate: animate
    });
    /**
     * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
     *
     * @memberof Chartist.Svg
     * @param {String} feature The SVG 1.1 feature that should be checked for support.
     * @return {Boolean} True of false if the feature is supported or not
     */

    Chartist.Svg.isSupported = function (feature) {
      return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
    };
    /**
     * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
     *
     * @memberof Chartist.Svg
     */


    var easingCubicBeziers = {
      easeInSine: [0.47, 0, 0.745, 0.715],
      easeOutSine: [0.39, 0.575, 0.565, 1],
      easeInOutSine: [0.445, 0.05, 0.55, 0.95],
      easeInQuad: [0.55, 0.085, 0.68, 0.53],
      easeOutQuad: [0.25, 0.46, 0.45, 0.94],
      easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
      easeInCubic: [0.55, 0.055, 0.675, 0.19],
      easeOutCubic: [0.215, 0.61, 0.355, 1],
      easeInOutCubic: [0.645, 0.045, 0.355, 1],
      easeInQuart: [0.895, 0.03, 0.685, 0.22],
      easeOutQuart: [0.165, 0.84, 0.44, 1],
      easeInOutQuart: [0.77, 0, 0.175, 1],
      easeInQuint: [0.755, 0.05, 0.855, 0.06],
      easeOutQuint: [0.23, 1, 0.32, 1],
      easeInOutQuint: [0.86, 0, 0.07, 1],
      easeInExpo: [0.95, 0.05, 0.795, 0.035],
      easeOutExpo: [0.19, 1, 0.22, 1],
      easeInOutExpo: [1, 0, 0, 1],
      easeInCirc: [0.6, 0.04, 0.98, 0.335],
      easeOutCirc: [0.075, 0.82, 0.165, 1],
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
      easeInBack: [0.6, -0.28, 0.735, 0.045],
      easeOutBack: [0.175, 0.885, 0.32, 1.275],
      easeInOutBack: [0.68, -0.55, 0.265, 1.55]
    };
    Chartist.Svg.Easing = easingCubicBeziers;
    /**
     * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
     * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
     *
     * @memberof Chartist.Svg
     * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
     * @constructor
     */

    function SvgList(nodeList) {
      var list = this;
      this.svgElements = [];

      for (var i = 0; i < nodeList.length; i++) {
        this.svgElements.push(new Chartist.Svg(nodeList[i]));
      } // Add delegation methods for Chartist.Svg


      Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
        return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
      }).forEach(function (prototypeProperty) {
        list[prototypeProperty] = function () {
          var args = Array.prototype.slice.call(arguments, 0);
          list.svgElements.forEach(function (element) {
            Chartist.Svg.prototype[prototypeProperty].apply(element, args);
          });
          return list;
        };
      });
    }

    Chartist.Svg.List = Chartist.Class.extend({
      constructor: SvgList
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG path module for SVG path description creation and modification.
  *
  * @module Chartist.Svg.Path
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';
    /**
     * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var elementDescriptions = {
      m: ['x', 'y'],
      l: ['x', 'y'],
      c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
      a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
    };
    /**
     * Default options for newly created SVG path objects.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var defaultOptions = {
      // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
      accuracy: 3
    };

    function element(command, params, pathElements, pos, relative, data) {
      var pathElement = Chartist.extend({
        command: relative ? command.toLowerCase() : command.toUpperCase()
      }, params, data ? {
        data: data
      } : {});
      pathElements.splice(pos, 0, pathElement);
    }

    function forEachParam(pathElements, cb) {
      pathElements.forEach(function (pathElement, pathElementIndex) {
        elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
          cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
        });
      });
    }
    /**
     * Used to construct a new path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
     * @param {Object} options Options object that overrides the default objects. See default options for more details.
     * @constructor
     */


    function SvgPath(close, options) {
      this.pathElements = [];
      this.pos = 0;
      this.close = close;
      this.options = Chartist.extend({}, defaultOptions, options);
    }
    /**
     * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
     * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
     */


    function position(pos) {
      if (pos !== undefined) {
        this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
        return this;
      } else {
        return this.pos;
      }
    }
    /**
     * Removes elements from the path starting at the current position.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} count Number of path elements that should be removed from the current position.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function remove(count) {
      this.pathElements.splice(this.pos, count);
      return this;
    }
    /**
     * Use this function to add a new move SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the move element.
     * @param {Number} y The y coordinate for the move element.
     * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function move(x, y, relative, data) {
      element('M', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new line SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the line element.
     * @param {Number} y The y coordinate for the line element.
     * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function line(x, y, relative, data) {
      element('L', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
     * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
     * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
     * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function curve(x1, y1, x2, y2, x, y, relative, data) {
      element('C', {
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new non-bezier curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} rx The radius to be used for the x-axis of the arc.
     * @param {Number} ry The radius to be used for the y-axis of the arc.
     * @param {Number} xAr Defines the orientation of the arc
     * @param {Number} lAf Large arc flag
     * @param {Number} sf Sweep flag
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
      element('A', {
        rx: +rx,
        ry: +ry,
        xAr: +xAr,
        lAf: +lAf,
        sf: +sf,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function parse(path) {
      // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
      var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
        if (element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

      if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
        chunks.pop();
      } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
      // For example {command: 'M', x: '10', y: '10'}


      var elements = chunks.map(function (chunk) {
        var command = chunk.shift(),
            description = elementDescriptions[command.toLowerCase()];
        return Chartist.extend({
          command: command
        }, description.reduce(function (result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

      var spliceArgs = [this.pos, 0];
      Array.prototype.push.apply(spliceArgs, elements);
      Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

      this.pos += elements.length;
      return this;
    }
    /**
     * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
     *
     * @memberof Chartist.Svg.Path
     * @return {String}
     */


    function stringify() {
      var accuracyMultiplier = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function (path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
          return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
        }.bind(this));
        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
    }
    /**
     * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function scale(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] *= paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function translate(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] += paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
     * The method signature of the callback function looks like this:
     * ```javascript
     * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
     * ```
     * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function transform(transformFnc) {
      forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
        var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

        if (transformed || transformed === 0) {
          pathElement[paramName] = transformed;
        }
      });
      return this;
    }
    /**
     * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
     * @return {Chartist.Svg.Path}
     */


    function clone(close) {
      var c = new Chartist.Svg.Path(close || this.close);
      c.pos = this.pos;
      c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
        return Chartist.extend({}, pathElement);
      });
      c.options = Chartist.extend({}, this.options);
      return c;
    }
    /**
     * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} command The command you'd like to use to split the path
     * @return {Array<Chartist.Svg.Path>}
     */


    function splitByCommand(command) {
      var split = [new Chartist.Svg.Path()];
      this.pathElements.forEach(function (pathElement) {
        if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
          split.push(new Chartist.Svg.Path());
        }

        split[split.length - 1].pathElements.push(pathElement);
      });
      return split;
    }
    /**
     * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
     *
     * @memberof Chartist.Svg.Path
     * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
     * @param {boolean} close If the newly created path should be a closed path
     * @param {Object} options Path options for the newly created path.
     * @return {Chartist.Svg.Path}
     */


    function join(paths, close, options) {
      var joinedPath = new Chartist.Svg.Path(close, options);

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        for (var j = 0; j < path.pathElements.length; j++) {
          joinedPath.pathElements.push(path.pathElements[j]);
        }
      }

      return joinedPath;
    }

    Chartist.Svg.Path = Chartist.Class.extend({
      constructor: SvgPath,
      position: position,
      remove: remove,
      move: move,
      line: line,
      curve: curve,
      arc: arc,
      scale: scale,
      translate: translate,
      transform: transform,
      parse: parse,
      stringify: stringify,
      clone: clone,
      splitByCommand: splitByCommand
    });
    Chartist.Svg.Path.elementDescriptions = elementDescriptions;
    Chartist.Svg.Path.join = join;
  })(this || global, Chartist);

  ;
  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    var axisUnits = {
      x: {
        pos: 'x',
        len: 'width',
        dir: 'horizontal',
        rectStart: 'x1',
        rectEnd: 'x2',
        rectOffset: 'y2'
      },
      y: {
        pos: 'y',
        len: 'height',
        dir: 'vertical',
        rectStart: 'y2',
        rectEnd: 'y1',
        rectOffset: 'x1'
      }
    };

    function Axis(units, chartRect, ticks, options) {
      this.units = units;
      this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
      this.chartRect = chartRect;
      this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
      this.gridOffset = chartRect[units.rectOffset];
      this.ticks = ticks;
      this.options = options;
    }

    function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
      var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
      var projectedValues = this.ticks.map(this.projectValue.bind(this));
      var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
      projectedValues.forEach(function (projectedValue, index) {
        var labelOffset = {
          x: 0,
          y: 0
        }; // TODO: Find better solution for solving this problem
        // Calculate how much space we have available for the label

        var labelLength;

        if (projectedValues[index + 1]) {
          // If we still have one label ahead, we can calculate the distance to the next tick / label
          labelLength = projectedValues[index + 1] - projectedValue;
        } else {
          // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
          // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
          // still be visible inside of the chart padding.
          labelLength = Math.max(this.axisLength - projectedValue, 30);
        } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


        if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
          return;
        } // Transform to global coordinates using the chartRect
        // We also need to set the label offset for the createLabel function


        if (this.units.pos === 'x') {
          projectedValue = this.chartRect.x1 + projectedValue;
          labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
          // different offset as for positioned with end (bottom)

          if (chartOptions.axisX.position === 'start') {
            labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          } else {
            labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          }
        } else {
          projectedValue = this.chartRect.y1 - projectedValue;
          labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
          // different offset as for positioned with end (right side)

          if (chartOptions.axisY.position === 'start') {
            labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
          } else {
            labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
          }
        }

        if (axisOptions.showGrid) {
          Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
        }

        if (axisOptions.showLabel) {
          Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
        }
      }.bind(this));
    }

    Chartist.Axis = Chartist.Class.extend({
      constructor: Axis,
      createGridAndLabels: createGridAndLabels,
      projectValue: function projectValue(value, index, data) {
        throw new Error('Base axis can\'t be instantiated!');
      }
    });
    Chartist.Axis.units = axisUnits;
  })(this || global, Chartist);

  ;
  /**
  * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
  *   scaleMinSpace: 20,
  *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
  *   onlyInteger: true,
  *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
  *   referenceValue: 5
  * };
  * ```
  *
  * @module Chartist.AutoScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function AutoScaleAxis(axisUnit, data, chartRect, options) {
      // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
      this.range = {
        min: this.bounds.min,
        max: this.bounds.max
      };
      Chartist.AutoScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
    }

    Chartist.AutoScaleAxis = Chartist.Axis.extend({
      constructor: AutoScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
  *   divisor: 4,
  *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
  *   ticks: [1, 10, 20, 30]
  * };
  * ```
  *
  * @module Chartist.FixedScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function FixedScaleAxis(axisUnit, data, chartRect, options) {
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.divisor = options.divisor || 1;
      this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
        return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
      }.bind(this));
      this.ticks.sort(function (a, b) {
        return a - b;
      });
      this.range = {
        min: highLow.low,
        max: highLow.high
      };
      Chartist.FixedScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.ticks, options);
      this.stepLength = this.axisLength / this.divisor;
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }

    Chartist.FixedScaleAxis = Chartist.Axis.extend({
      constructor: FixedScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
  *   ticks: ['One', 'Two', 'Three'],
  *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
  *   stretch: true
  * };
  * ```
  *
  * @module Chartist.StepAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function StepAxis(axisUnit, data, chartRect, options) {
      Chartist.StepAxis.super.constructor.call(this, axisUnit, chartRect, options.ticks, options);
      var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
      this.stepLength = this.axisLength / calc;
    }

    function projectValue(value, index) {
      return this.stepLength * index;
    }

    Chartist.StepAxis = Chartist.Axis.extend({
      constructor: StepAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
  *
  * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
  *
  * @module Chartist.Line
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Line
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the labels to the chart area
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the labels to the chart area
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // If the line should be drawn or not
      showLine: true,
      // If dots should be drawn or not
      showPoint: true,
      // If the line chart should draw an area
      showArea: false,
      // The base for the area chart that will be used to close the area shape (is normally 0)
      areaBase: 0,
      // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
      lineSmooth: true,
      // If the line chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
      fullWidth: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var axisX, axisY;

      if (options.axisX.type === undefined) {
        axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          ticks: data.normalized.labels,
          stretch: options.fullWidth
        }));
      } else {
        axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if (options.axisY.type === undefined) {
        axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
          low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
        }));
      } else {
        axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }

      axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        var pathCoordinates = [],
            pathData = [];
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var p = {
            x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
          };
          pathCoordinates.push(p.x, p.y);
          pathData.push({
            value: value,
            valueIndex: valueIndex,
            meta: Chartist.getMetaData(series, valueIndex)
          });
        }.bind(this));
        var seriesOptions = {
          lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
          showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
          showLine: Chartist.getSeriesOption(series, options, 'showLine'),
          showArea: Chartist.getSeriesOption(series, options, 'showArea'),
          areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
        };
        var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
        // index, value and meta data

        var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
        // Points are drawn from the pathElements returned by the interpolation function
        // Small offset for Firefox to render squares correctly

        if (seriesOptions.showPoint) {
          path.pathElements.forEach(function (pathElement) {
            var point = seriesElement.elem('line', {
              x1: pathElement.x,
              y1: pathElement.y,
              x2: pathElement.x + 0.01,
              y2: pathElement.y
            }, options.classNames.point).attr({
              'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
              'ct:meta': Chartist.serialize(pathElement.data.meta)
            });
            this.eventEmitter.emit('draw', {
              type: 'point',
              value: pathElement.data.value,
              index: pathElement.data.valueIndex,
              meta: pathElement.data.meta,
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              group: seriesElement,
              element: point,
              x: pathElement.x,
              y: pathElement.y
            });
          }.bind(this));
        }

        if (seriesOptions.showLine) {
          var line = seriesElement.elem('path', {
            d: path.stringify()
          }, options.classNames.line, true);
          this.eventEmitter.emit('draw', {
            type: 'line',
            values: data.normalized.series[seriesIndex],
            path: path.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            series: series,
            seriesIndex: seriesIndex,
            seriesMeta: series.meta,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: line
          });
        } // Area currently only works with axes that support a range!


        if (seriesOptions.showArea && axisY.range) {
          // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
          // the area is not drawn outside the chart area.
          var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

          var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

          path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
            // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
            return pathSegment.pathElements.length > 1;
          }).map(function convertToArea(solidPathSegments) {
            // Receiving the filtered solid path segments we can now convert those segments into fill areas
            var firstElement = solidPathSegments.pathElements[0];
            var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
            // We then insert a new move that should start at the area base and draw a straight line up or down
            // at the end of the path we add an additional straight line to the projected area base value
            // As the closing option is set our path will be automatically closed

            return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
          }).forEach(function createArea(areaPath) {
            // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
            // and adding the created DOM elements to the correct series group
            var area = seriesElement.elem('path', {
              d: areaPath.stringify()
            }, options.classNames.area, true); // Emit an event for each area that was drawn

            this.eventEmitter.emit('draw', {
              type: 'area',
              values: data.normalized.series[seriesIndex],
              path: areaPath.clone(),
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              chartRect: chartRect,
              index: seriesIndex,
              group: seriesElement,
              element: area
            });
          }.bind(this));
        }
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: axisY.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new line chart.
     *
     * @memberof Chartist.Line
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple line chart
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // As options we currently only set a static size of 300x200 px
     * var options = {
     *   width: '300px',
     *   height: '200px'
     * };
     *
     * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
     * new Chartist.Line('.ct-chart', data, options);
     *
     * @example
     * // Use specific interpolation function with configuration from the Chartist.Interpolation module
     *
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [
     *     [1, 1, 8, 1, 7]
     *   ]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 0.2
     *   })
     * });
     *
     * @example
     * // Create a line chart with responsive options
     *
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
     * var responsiveOptions = [
     *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
     *     showPoint: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return Mon, Tue, Wed etc. on medium screens
     *         return value.slice(0, 3);
     *       }
     *     }
     *   }],
     *   ['screen and (max-width: 640px)', {
     *     showLine: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return M, T, W etc. on small screens
     *         return value[0];
     *       }
     *     }
     *   }]
     * ];
     *
     * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
     *
     */


    function Line(query, data, options, responsiveOptions) {
      Chartist.Line.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating line chart type in Chartist namespace


    Chartist.Line = Chartist.Base.extend({
      constructor: Line,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
  *
  * @module Chartist.Bar
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Bar
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the chart drawing area to the border of the container
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum width in pixel of the scale steps
        scaleMinSpace: 30,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the chart drawing area to the border of the container
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
      referenceValue: 0,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // Specify the distance in pixel of bars in a group
      seriesBarDistance: 15,
      // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
      stackBars: false,
      // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
      // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
      stackMode: 'accumulate',
      // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
      horizontalBars: false,
      // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
      distributeSeries: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If the bar chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-bar',
        horizontalBars: 'ct-horizontal-bars',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        bar: 'ct-bar',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data;
      var highLow;

      if (options.distributeSeries) {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
        data.normalized.series = data.normalized.series.map(function (value) {
          return [value];
        });
      } else {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      } // Create new svg element


      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

      if (options.stackBars && data.normalized.series.length !== 0) {
        // If stacked bars we need to calculate the high low from stacked values from each series
        var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
          return Array.prototype.slice.call(arguments).map(function (value) {
            return value;
          }).reduce(function (prev, curr) {
            return {
              x: prev.x + (curr && curr.x) || 0,
              y: prev.y + (curr && curr.y) || 0
            };
          }, {
            x: 0,
            y: 0
          });
        });
        highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
      } else {
        highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
      } // Overrides of high / low from settings


      highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
      highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

      if (options.distributeSeries && options.stackBars) {
        // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
        // use only the first label for the step axis
        labelAxisTicks = data.normalized.labels.slice(0, 1);
      } else {
        // If distributed series are enabled but stacked bars aren't, we should use the series labels
        // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
        // as the bars are normalized
        labelAxisTicks = data.normalized.labels;
      } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


      if (options.horizontalBars) {
        if (options.axisX.type === undefined) {
          valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        }

        if (options.axisY.type === undefined) {
          labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
        }
      } else {
        if (options.axisX.type === undefined) {
          labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
        }

        if (options.axisY.type === undefined) {
          valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        }
      } // Projected 0 point


      var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

      var stackedBarValues = [];
      labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
        var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

        var periodHalfLength; // Current series SVG element

        var seriesElement; // We need to set periodHalfLength based on some options combinations

        if (options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
          // which is the series count and divide by 2
          periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
        } else if (options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
          // length by 2
          periodHalfLength = labelAxis.axisLength / 2;
        } else {
          // On regular bar charts we should just use the series length
          periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
        } // Adding the series group to the series element


        seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

          if (options.distributeSeries && !options.stackBars) {
            // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
            // on the step axis for label positioning
            labelAxisValueIndex = seriesIndex;
          } else if (options.distributeSeries && options.stackBars) {
            // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
            // 0 for projection on the label step axis
            labelAxisValueIndex = 0;
          } else {
            // On regular bar charts we just use the value index to project on the label step axis
            labelAxisValueIndex = valueIndex;
          } // We need to transform coordinates differently based on the chart layout


          if (options.horizontalBars) {
            projected = {
              x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
            };
          } else {
            projected = {
              x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
            };
          } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
          // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
          // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
          // add any automated positioning.


          if (labelAxis instanceof Chartist.StepAxis) {
            // Offset to center bar between grid lines, but only if the step axis is not stretched
            if (!labelAxis.options.stretch) {
              projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
            } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


            projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
          } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


          previousStack = stackedBarValues[valueIndex] || zeroPoint;
          stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

          if (value === undefined) {
            return;
          }

          var positions = {};
          positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
          positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

          if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
            // Stack mode: accumulate (default)
            // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
            // We want backwards compatibility, so the expected fallback without the 'stackMode' option
            // to be the original behaviour (accumulate)
            positions[labelAxis.counterUnits.pos + '1'] = previousStack;
            positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
          } else {
            // Draw from the zero line normally
            // This is also the same code for Stack mode: overlap
            positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
            positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
          } // Limit x and y so that they are within the chart rect


          positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
          positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
          positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
          positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
          var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

          bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
            'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(metaData)
          });
          this.eventEmitter.emit('draw', Chartist.extend({
            type: 'bar',
            value: value,
            index: valueIndex,
            meta: metaData,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            group: seriesElement,
            element: bar
          }, positions));
        }.bind(this));
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: valueAxis.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new bar chart and returns API object that you can use for later changes.
     *
     * @memberof Chartist.Bar
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple bar chart
     * var data = {
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
     * new Chartist.Bar('.ct-chart', data);
     *
     * @example
     * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
     * new Chartist.Bar('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5, 6, 7],
     *   series: [
     *     [1, 3, 2, -5, -3, 1, -6],
     *     [-5, -2, -4, -1, 2, -3, 1]
     *   ]
     * }, {
     *   seriesBarDistance: 12,
     *   low: -10,
     *   high: 10
     * });
     *
     */


    function Bar(query, data, options, responsiveOptions) {
      Chartist.Bar.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating bar chart type in Chartist namespace


    Chartist.Bar = Chartist.Base.extend({
      constructor: Bar,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
  *
  * @module Chartist.Pie
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Pie
     */

    var defaultOptions = {
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: 5,
      // Override the class names that are used to generate the SVG structure of the chart
      classNames: {
        chartPie: 'ct-chart-pie',
        chartDonut: 'ct-chart-donut',
        series: 'ct-series',
        slicePie: 'ct-slice-pie',
        sliceDonut: 'ct-slice-donut',
        sliceDonutSolid: 'ct-slice-donut-solid',
        label: 'ct-label'
      },
      // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
      startAngle: 0,
      // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
      total: undefined,
      // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
      donut: false,
      // If specified the donut segments will be drawn as shapes instead of strokes.
      donutSolid: false,
      // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
      // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
      donutWidth: 60,
      // If a label should be shown or not
      showLabel: true,
      // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
      labelOffset: 0,
      // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
      labelPosition: 'inside',
      // An interpolation function for the label value
      labelInterpolationFnc: Chartist.noop,
      // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
      labelDirection: 'neutral',
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If true empty values will be ignored to avoid drawing unncessary slices and labels
      ignoreEmptyValues: false
    };
    /**
     * Determines SVG anchor position based on direction and center parameter
     *
     * @param center
     * @param label
     * @param direction
     * @return {string}
     */

    function determineAnchorPosition(center, label, direction) {
      var toTheRight = label.x > center.x;

      if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
        return 'start';
      } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
        return 'end';
      } else {
        return 'middle';
      }
    }
    /**
     * Creates the pie chart
     *
     * @param options
     */


    function createChart(options) {
      var data = Chartist.normalizeData(this.data);
      var seriesGroups = [],
          labelsGroup,
          chartRect,
          radius,
          labelRadius,
          totalDataSum,
          startAngle = options.startAngle; // Create SVG.js draw

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

      chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

      radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

      totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, 0);
      var donutWidth = Chartist.quantity(options.donutWidth);

      if (donutWidth.unit === '%') {
        donutWidth.value *= radius / 100;
      } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
      // Unfortunately this is not possible with the current SVG Spec
      // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


      radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
      // if regular pie chart it's half of the radius

      if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
        labelRadius = radius;
      } else if (options.labelPosition === 'center') {
        // If labelPosition is center we start with 0 and will later wait for the labelOffset
        labelRadius = 0;
      } else if (options.donutSolid) {
        labelRadius = radius - donutWidth.value / 2;
      } else {
        // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
        // slice
        labelRadius = radius / 2;
      } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


      labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      }; // Check if there is only one non-zero value in the series array.

      var hasSingleValInSeries = data.raw.series.filter(function (val) {
        return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
      }).length === 1; // Creating the series groups

      data.raw.series.forEach(function (series, index) {
        seriesGroups[index] = this.svg.elem('g', null, null);
      }.bind(this)); //if we need to show labels we create the label group now

      if (options.showLabel) {
        labelsGroup = this.svg.elem('g', null, null);
      } // Draw the series
      // initialize series groups


      data.raw.series.forEach(function (series, index) {
        // If current value is zero and we are ignoring empty values then skip to next value
        if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

        seriesGroups[index].attr({
          'ct:series-name': series.name
        }); // Use series class from series data or if not set generate one

        seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

        var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

        var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees

        if (endAngle - overlappigStartAngle >= 359.99) {
          endAngle = overlappigStartAngle + 359.99;
        }

        var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
            end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
        var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

        var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

        if (!options.donut) {
          path.line(center.x, center.y);
        } else if (options.donutSolid) {
          donutSolidRadius = radius - donutWidth.value;
          innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
          innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
          path.line(innerStart.x, innerStart.y);
          path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
        } // Create the SVG path
        // If this is a donut chart we add the donut class, otherwise just a regular slice


        var pathClassName = options.classNames.slicePie;

        if (options.donut) {
          pathClassName = options.classNames.sliceDonut;

          if (options.donutSolid) {
            pathClassName = options.classNames.sliceDonutSolid;
          }
        }

        var pathElement = seriesGroups[index].elem('path', {
          d: path.stringify()
        }, pathClassName); // Adding the pie series value to the path

        pathElement.attr({
          'ct:value': data.normalized.series[index],
          'ct:meta': Chartist.serialize(series.meta)
        }); // If this is a donut, we add the stroke-width as style attribute

        if (options.donut && !options.donutSolid) {
          pathElement._node.style.strokeWidth = donutWidth.value + 'px';
        } // Fire off draw event


        this.eventEmitter.emit('draw', {
          type: 'slice',
          value: data.normalized.series[index],
          totalDataSum: totalDataSum,
          index: index,
          meta: series.meta,
          series: series,
          group: seriesGroups[index],
          element: pathElement,
          path: path.clone(),
          center: center,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle
        }); // If we need to show labels we need to add the label for this slice now

        if (options.showLabel) {
          var labelPosition;

          if (data.raw.series.length === 1) {
            // If we have only 1 series, we can position the label in the center of the pie
            labelPosition = {
              x: center.x,
              y: center.y
            };
          } else {
            // Position at the labelRadius distance from center and between start and end angle
            labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
          }

          var rawValue;

          if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
            rawValue = data.normalized.labels[index];
          } else {
            rawValue = data.normalized.series[index];
          }

          var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

          if (interpolatedValue || interpolatedValue === 0) {
            var labelElement = labelsGroup.elem('text', {
              dx: labelPosition.x,
              dy: labelPosition.y,
              'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
            }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

            this.eventEmitter.emit('draw', {
              type: 'label',
              index: index,
              group: labelsGroup,
              element: labelElement,
              text: '' + interpolatedValue,
              x: labelPosition.x,
              y: labelPosition.y
            });
          }
        } // Set next startAngle to current endAngle.
        // (except for last slice)


        startAngle = endAngle;
      }.bind(this));
      this.eventEmitter.emit('created', {
        chartRect: chartRect,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new pie chart and returns an object that can be used to redraw the chart.
     *
     * @memberof Chartist.Pie
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object with a version and an update method to manually redraw the chart
     *
     * @example
     * // Simple pie chart example with four series
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * });
     *
     * @example
     * // Drawing a donut chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * }, {
     *   donut: true
     * });
     *
     * @example
     * // Using donut, startAngle and total to draw a gauge chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   donut: true,
     *   donutWidth: 20,
     *   startAngle: 270,
     *   total: 200
     * });
     *
     * @example
     * // Drawing a pie chart with padding and labels that are outside the pie
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   chartPadding: 30,
     *   labelOffset: 50,
     *   labelDirection: 'explode'
     * });
     *
     * @example
     * // Overriding the class names for individual series as well as a name and meta data.
     * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
     * // to a ct:meta attribute.
     * new Chartist.Pie('.ct-chart', {
     *   series: [{
     *     value: 20,
     *     name: 'Series 1',
     *     className: 'my-custom-class-one',
     *     meta: 'Meta One'
     *   }, {
     *     value: 10,
     *     name: 'Series 2',
     *     className: 'my-custom-class-two',
     *     meta: 'Meta Two'
     *   }, {
     *     value: 70,
     *     name: 'Series 3',
     *     className: 'my-custom-class-three',
     *     meta: 'Meta Three'
     *   }]
     * });
     */


    function Pie(query, data, options, responsiveOptions) {
      Chartist.Pie.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating pie chart type in Chartist namespace


    Chartist.Pie = Chartist.Base.extend({
      constructor: Pie,
      createChart: createChart,
      determineAnchorPosition: determineAnchorPosition
    });
  })(this || global, Chartist);

  return Chartist;
});

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "M8mW");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "wUU4":
/*!**********************************************************************!*\
  !*** ./src/app/profile/components/dashboard/dashboard.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "y4wY":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/charts/charts.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card card-chart\">\r\n            <div class=\"card-header card-header-success\">\r\n                <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Daily Sales</h4>\r\n                <p class=\"card-category\">\r\n                    <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"stats\">\r\n                    <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card card-chart\">\r\n            <div class=\"card-header card-header-warning\">\r\n                <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Email Subscriptions</h4>\r\n                <p class=\"card-category\">Last Campaign Performance</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"stats\">\r\n                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card card-chart\">\r\n            <div class=\"card-header card-header-danger\">\r\n                <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Completed Tasks</h4>\r\n                <p class=\"card-category\">Last Campaign Performance</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"stats\">\r\n                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "z193":
/*!**************************************************************!*\
  !*** ./src/app/profile/components/stats/stats.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-stats .card-header.card-header-icon .card-title, .card-stats .card-header.card-header-text .card-title, .card-stats .card-header.card-header-icon .card-category, .card-stats .card-header.card-header-text .card-category {\r\n    margin: inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiAuY2FyZC10aXRsZSwgLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLXRleHQgLmNhcmQtdGl0bGUsIC5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uIC5jYXJkLWNhdGVnb3J5LCAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCAuY2FyZC1jYXRlZ29yeSB7XHJcbiAgICBtYXJnaW46IGluaGVyaXQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "zWDh":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/dashboard/dashboard.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n      <app-stats></app-stats>\r\n      <!-- <app-charts></app-charts> -->\r\n      <app-kanban></app-kanban>\r\n      <!-- <app-to-do></app-to-do> -->\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map