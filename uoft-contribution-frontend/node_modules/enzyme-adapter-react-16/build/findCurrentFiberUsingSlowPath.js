"use strict";

// Extracted from https://github.com/facebook/react/blob/7bdf93b17a35a5d8fcf0ceae0bf48ed5e6b16688/src/renderers/shared/fiber/ReactFiberTreeReflection.js#L104-L228
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;

  if (!alternate) {
    return fiber;
  } // If we have two possible branches, we'll walk backwards up to the root
  // to see what path the root points to. On the way we may hit one of the
  // special cases and we'll deal with them.


  var a = fiber;
  var b = alternate;

  while (true) {
    // eslint-disable-line
    var parentA = a["return"];
    var parentB = parentA ? parentA.alternate : null;

    if (!parentA || !parentB) {
      // We're at the root.
      break;
    } // If both copies of the parent fiber point to the same child, we can
    // assume that the child is current. This happens when we bailout on low
    // priority: the bailed out fiber's child reuses the current child.


    if (parentA.child === parentB.child) {
      var child = parentA.child;

      while (child) {
        if (child === a) {
          // We've determined that A is the current branch.
          return fiber;
        }

        if (child === b) {
          // We've determined that B is the current branch.
          return alternate;
        }

        child = child.sibling;
      } // We should never have an alternate for any mounting node. So the only
      // way this could possibly happen is if this was unmounted, if at all.


      throw new Error('Unable to find node on an unmounted component.');
    }

    if (a["return"] !== b["return"]) {
      // The return pointer of A and the return pointer of B point to different
      // fibers. We assume that return pointers never criss-cross, so A must
      // belong to the child set of A.return, and B must belong to the child
      // set of B.return.
      a = parentA;
      b = parentB;
    } else {
      // The return pointers point to the same fiber. We'll have to use the
      // default, slow path: scan the child sets of each parent alternate to see
      // which child belongs to which set.
      //
      // Search parent A's child set
      var didFindChild = false;
      var _child = parentA.child;

      while (_child) {
        if (_child === a) {
          didFindChild = true;
          a = parentA;
          b = parentB;
          break;
        }

        if (_child === b) {
          didFindChild = true;
          b = parentA;
          a = parentB;
          break;
        }

        _child = _child.sibling;
      }

      if (!didFindChild) {
        // Search parent B's child set
        _child = parentB.child;

        while (_child) {
          if (_child === a) {
            didFindChild = true;
            a = parentB;
            b = parentA;
            break;
          }

          if (_child === b) {
            didFindChild = true;
            b = parentB;
            a = parentA;
            break;
          }

          _child = _child.sibling;
        }

        if (!didFindChild) {
          throw new Error('Child was not found in either parent set. This indicates a bug ' + 'in React related to the return pointer. Please file an issue.');
        }
      }
    }
  }

  if (a.stateNode.current === a) {
    // We've determined that A is the current branch.
    return fiber;
  } // Otherwise B has to be current branch.


  return alternate;
}

module.exports = findCurrentFiberUsingSlowPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maW5kQ3VycmVudEZpYmVyVXNpbmdTbG93UGF0aC5qcyJdLCJuYW1lcyI6WyJmaW5kQ3VycmVudEZpYmVyVXNpbmdTbG93UGF0aCIsImZpYmVyIiwiYWx0ZXJuYXRlIiwiYSIsImIiLCJwYXJlbnRBIiwicGFyZW50QiIsImNoaWxkIiwic2libGluZyIsIkVycm9yIiwiZGlkRmluZENoaWxkIiwic3RhdGVOb2RlIiwiY3VycmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxTQUFTQSw2QkFBVCxDQUF1Q0MsS0FBdkMsRUFBOEM7QUFBQSxNQUNwQ0MsU0FEb0MsR0FDdEJELEtBRHNCLENBQ3BDQyxTQURvQzs7QUFFNUMsTUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2QsV0FBT0QsS0FBUDtBQUNELEdBSjJDLENBSzVDO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSUUsQ0FBQyxHQUFHRixLQUFSO0FBQ0EsTUFBSUcsQ0FBQyxHQUFHRixTQUFSOztBQUNBLFNBQU8sSUFBUCxFQUFhO0FBQUU7QUFDYixRQUFNRyxPQUFPLEdBQUdGLENBQUMsVUFBakI7QUFDQSxRQUFNRyxPQUFPLEdBQUdELE9BQU8sR0FBR0EsT0FBTyxDQUFDSCxTQUFYLEdBQXVCLElBQTlDOztBQUNBLFFBQUksQ0FBQ0csT0FBRCxJQUFZLENBQUNDLE9BQWpCLEVBQTBCO0FBQ3hCO0FBQ0E7QUFDRCxLQU5VLENBUVg7QUFDQTtBQUNBOzs7QUFDQSxRQUFJRCxPQUFPLENBQUNFLEtBQVIsS0FBa0JELE9BQU8sQ0FBQ0MsS0FBOUIsRUFBcUM7QUFBQSxVQUM3QkEsS0FENkIsR0FDbkJGLE9BRG1CLENBQzdCRSxLQUQ2Qjs7QUFFbkMsYUFBT0EsS0FBUCxFQUFjO0FBQ1osWUFBSUEsS0FBSyxLQUFLSixDQUFkLEVBQWlCO0FBQ2Y7QUFDQSxpQkFBT0YsS0FBUDtBQUNEOztBQUNELFlBQUlNLEtBQUssS0FBS0gsQ0FBZCxFQUFpQjtBQUNmO0FBQ0EsaUJBQU9GLFNBQVA7QUFDRDs7QUFDREssUUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNDLE9BQWQ7QUFDRCxPQVprQyxDQWFuQztBQUNBOzs7QUFDQSxZQUFNLElBQUlDLEtBQUosQ0FBVSxnREFBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBSU4sQ0FBQyxVQUFELEtBQWFDLENBQUMsVUFBbEIsRUFBMkI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQUQsTUFBQUEsQ0FBQyxHQUFHRSxPQUFKO0FBQ0FELE1BQUFBLENBQUMsR0FBR0UsT0FBSjtBQUNELEtBUEQsTUFPTztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJSSxZQUFZLEdBQUcsS0FBbkI7QUFOSyxVQU9DSCxNQVBELEdBT1dGLE9BUFgsQ0FPQ0UsS0FQRDs7QUFRTCxhQUFPQSxNQUFQLEVBQWM7QUFDWixZQUFJQSxNQUFLLEtBQUtKLENBQWQsRUFBaUI7QUFDZk8sVUFBQUEsWUFBWSxHQUFHLElBQWY7QUFDQVAsVUFBQUEsQ0FBQyxHQUFHRSxPQUFKO0FBQ0FELFVBQUFBLENBQUMsR0FBR0UsT0FBSjtBQUNBO0FBQ0Q7O0FBQ0QsWUFBSUMsTUFBSyxLQUFLSCxDQUFkLEVBQWlCO0FBQ2ZNLFVBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0FOLFVBQUFBLENBQUMsR0FBR0MsT0FBSjtBQUNBRixVQUFBQSxDQUFDLEdBQUdHLE9BQUo7QUFDQTtBQUNEOztBQUNEQyxRQUFBQSxNQUFLLEdBQUdBLE1BQUssQ0FBQ0MsT0FBZDtBQUNEOztBQUNELFVBQUksQ0FBQ0UsWUFBTCxFQUFtQjtBQUNqQjtBQUNHSCxRQUFBQSxNQUZjLEdBRUpELE9BRkksQ0FFZEMsS0FGYzs7QUFHakIsZUFBT0EsTUFBUCxFQUFjO0FBQ1osY0FBSUEsTUFBSyxLQUFLSixDQUFkLEVBQWlCO0FBQ2ZPLFlBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0FQLFlBQUFBLENBQUMsR0FBR0csT0FBSjtBQUNBRixZQUFBQSxDQUFDLEdBQUdDLE9BQUo7QUFDQTtBQUNEOztBQUNELGNBQUlFLE1BQUssS0FBS0gsQ0FBZCxFQUFpQjtBQUNmTSxZQUFBQSxZQUFZLEdBQUcsSUFBZjtBQUNBTixZQUFBQSxDQUFDLEdBQUdFLE9BQUo7QUFDQUgsWUFBQUEsQ0FBQyxHQUFHRSxPQUFKO0FBQ0E7QUFDRDs7QUFDREUsVUFBQUEsTUFBSyxHQUFHQSxNQUFLLENBQUNDLE9BQWQ7QUFDRDs7QUFDRCxZQUFJLENBQUNFLFlBQUwsRUFBbUI7QUFDakIsZ0JBQU0sSUFBSUQsS0FBSixDQUFVLG9FQUNaLCtEQURFLENBQU47QUFFRDtBQUNGO0FBQ0Y7QUFDRjs7QUFDRCxNQUFJTixDQUFDLENBQUNRLFNBQUYsQ0FBWUMsT0FBWixLQUF3QlQsQ0FBNUIsRUFBK0I7QUFDN0I7QUFDQSxXQUFPRixLQUFQO0FBQ0QsR0FqRzJDLENBa0c1Qzs7O0FBQ0EsU0FBT0MsU0FBUDtBQUNEOztBQUVEVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLDZCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4dHJhY3RlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzdiZGY5M2IxN2EzNWE1ZDhmY2YwY2VhZTBiZjQ4ZWQ1ZTZiMTY2ODgvc3JjL3JlbmRlcmVycy9zaGFyZWQvZmliZXIvUmVhY3RGaWJlclRyZWVSZWZsZWN0aW9uLmpzI0wxMDQtTDIyOFxuZnVuY3Rpb24gZmluZEN1cnJlbnRGaWJlclVzaW5nU2xvd1BhdGgoZmliZXIpIHtcbiAgY29uc3QgeyBhbHRlcm5hdGUgfSA9IGZpYmVyO1xuICBpZiAoIWFsdGVybmF0ZSkge1xuICAgIHJldHVybiBmaWJlcjtcbiAgfVxuICAvLyBJZiB3ZSBoYXZlIHR3byBwb3NzaWJsZSBicmFuY2hlcywgd2UnbGwgd2FsayBiYWNrd2FyZHMgdXAgdG8gdGhlIHJvb3RcbiAgLy8gdG8gc2VlIHdoYXQgcGF0aCB0aGUgcm9vdCBwb2ludHMgdG8uIE9uIHRoZSB3YXkgd2UgbWF5IGhpdCBvbmUgb2YgdGhlXG4gIC8vIHNwZWNpYWwgY2FzZXMgYW5kIHdlJ2xsIGRlYWwgd2l0aCB0aGVtLlxuICBsZXQgYSA9IGZpYmVyO1xuICBsZXQgYiA9IGFsdGVybmF0ZTtcbiAgd2hpbGUgKHRydWUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGNvbnN0IHBhcmVudEEgPSBhLnJldHVybjtcbiAgICBjb25zdCBwYXJlbnRCID0gcGFyZW50QSA/IHBhcmVudEEuYWx0ZXJuYXRlIDogbnVsbDtcbiAgICBpZiAoIXBhcmVudEEgfHwgIXBhcmVudEIpIHtcbiAgICAgIC8vIFdlJ3JlIGF0IHRoZSByb290LlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSWYgYm90aCBjb3BpZXMgb2YgdGhlIHBhcmVudCBmaWJlciBwb2ludCB0byB0aGUgc2FtZSBjaGlsZCwgd2UgY2FuXG4gICAgLy8gYXNzdW1lIHRoYXQgdGhlIGNoaWxkIGlzIGN1cnJlbnQuIFRoaXMgaGFwcGVucyB3aGVuIHdlIGJhaWxvdXQgb24gbG93XG4gICAgLy8gcHJpb3JpdHk6IHRoZSBiYWlsZWQgb3V0IGZpYmVyJ3MgY2hpbGQgcmV1c2VzIHRoZSBjdXJyZW50IGNoaWxkLlxuICAgIGlmIChwYXJlbnRBLmNoaWxkID09PSBwYXJlbnRCLmNoaWxkKSB7XG4gICAgICBsZXQgeyBjaGlsZCB9ID0gcGFyZW50QTtcbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQgPT09IGEpIHtcbiAgICAgICAgICAvLyBXZSd2ZSBkZXRlcm1pbmVkIHRoYXQgQSBpcyB0aGUgY3VycmVudCBicmFuY2guXG4gICAgICAgICAgcmV0dXJuIGZpYmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZCA9PT0gYikge1xuICAgICAgICAgIC8vIFdlJ3ZlIGRldGVybWluZWQgdGhhdCBCIGlzIHRoZSBjdXJyZW50IGJyYW5jaC5cbiAgICAgICAgICByZXR1cm4gYWx0ZXJuYXRlO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gY2hpbGQuc2libGluZztcbiAgICAgIH1cbiAgICAgIC8vIFdlIHNob3VsZCBuZXZlciBoYXZlIGFuIGFsdGVybmF0ZSBmb3IgYW55IG1vdW50aW5nIG5vZGUuIFNvIHRoZSBvbmx5XG4gICAgICAvLyB3YXkgdGhpcyBjb3VsZCBwb3NzaWJseSBoYXBwZW4gaXMgaWYgdGhpcyB3YXMgdW5tb3VudGVkLCBpZiBhdCBhbGwuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmaW5kIG5vZGUgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4nKTtcbiAgICB9XG5cbiAgICBpZiAoYS5yZXR1cm4gIT09IGIucmV0dXJuKSB7XG4gICAgICAvLyBUaGUgcmV0dXJuIHBvaW50ZXIgb2YgQSBhbmQgdGhlIHJldHVybiBwb2ludGVyIG9mIEIgcG9pbnQgdG8gZGlmZmVyZW50XG4gICAgICAvLyBmaWJlcnMuIFdlIGFzc3VtZSB0aGF0IHJldHVybiBwb2ludGVycyBuZXZlciBjcmlzcy1jcm9zcywgc28gQSBtdXN0XG4gICAgICAvLyBiZWxvbmcgdG8gdGhlIGNoaWxkIHNldCBvZiBBLnJldHVybiwgYW5kIEIgbXVzdCBiZWxvbmcgdG8gdGhlIGNoaWxkXG4gICAgICAvLyBzZXQgb2YgQi5yZXR1cm4uXG4gICAgICBhID0gcGFyZW50QTtcbiAgICAgIGIgPSBwYXJlbnRCO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgcmV0dXJuIHBvaW50ZXJzIHBvaW50IHRvIHRoZSBzYW1lIGZpYmVyLiBXZSdsbCBoYXZlIHRvIHVzZSB0aGVcbiAgICAgIC8vIGRlZmF1bHQsIHNsb3cgcGF0aDogc2NhbiB0aGUgY2hpbGQgc2V0cyBvZiBlYWNoIHBhcmVudCBhbHRlcm5hdGUgdG8gc2VlXG4gICAgICAvLyB3aGljaCBjaGlsZCBiZWxvbmdzIHRvIHdoaWNoIHNldC5cbiAgICAgIC8vXG4gICAgICAvLyBTZWFyY2ggcGFyZW50IEEncyBjaGlsZCBzZXRcbiAgICAgIGxldCBkaWRGaW5kQ2hpbGQgPSBmYWxzZTtcbiAgICAgIGxldCB7IGNoaWxkIH0gPSBwYXJlbnRBO1xuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCA9PT0gYSkge1xuICAgICAgICAgIGRpZEZpbmRDaGlsZCA9IHRydWU7XG4gICAgICAgICAgYSA9IHBhcmVudEE7XG4gICAgICAgICAgYiA9IHBhcmVudEI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkID09PSBiKSB7XG4gICAgICAgICAgZGlkRmluZENoaWxkID0gdHJ1ZTtcbiAgICAgICAgICBiID0gcGFyZW50QTtcbiAgICAgICAgICBhID0gcGFyZW50QjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjaGlsZCA9IGNoaWxkLnNpYmxpbmc7XG4gICAgICB9XG4gICAgICBpZiAoIWRpZEZpbmRDaGlsZCkge1xuICAgICAgICAvLyBTZWFyY2ggcGFyZW50IEIncyBjaGlsZCBzZXRcbiAgICAgICAgKHsgY2hpbGQgfSA9IHBhcmVudEIpO1xuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQgPT09IGEpIHtcbiAgICAgICAgICAgIGRpZEZpbmRDaGlsZCA9IHRydWU7XG4gICAgICAgICAgICBhID0gcGFyZW50QjtcbiAgICAgICAgICAgIGIgPSBwYXJlbnRBO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaGlsZCA9PT0gYikge1xuICAgICAgICAgICAgZGlkRmluZENoaWxkID0gdHJ1ZTtcbiAgICAgICAgICAgIGIgPSBwYXJlbnRCO1xuICAgICAgICAgICAgYSA9IHBhcmVudEE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGQgPSBjaGlsZC5zaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGlkRmluZENoaWxkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGlsZCB3YXMgbm90IGZvdW5kIGluIGVpdGhlciBwYXJlbnQgc2V0LiBUaGlzIGluZGljYXRlcyBhIGJ1ZyAnXG4gICAgICAgICAgICArICdpbiBSZWFjdCByZWxhdGVkIHRvIHRoZSByZXR1cm4gcG9pbnRlci4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGEuc3RhdGVOb2RlLmN1cnJlbnQgPT09IGEpIHtcbiAgICAvLyBXZSd2ZSBkZXRlcm1pbmVkIHRoYXQgQSBpcyB0aGUgY3VycmVudCBicmFuY2guXG4gICAgcmV0dXJuIGZpYmVyO1xuICB9XG4gIC8vIE90aGVyd2lzZSBCIGhhcyB0byBiZSBjdXJyZW50IGJyYW5jaC5cbiAgcmV0dXJuIGFsdGVybmF0ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kQ3VycmVudEZpYmVyVXNpbmdTbG93UGF0aDtcbiJdfQ==
//# sourceMappingURL=findCurrentFiberUsingSlowPath.js.map