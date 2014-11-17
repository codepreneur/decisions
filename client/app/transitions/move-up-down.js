import { stop, animate, Promise, isAnimating, finish, timeSpent } from "vendor/liquid-fire";

export default function moveUpDown(oldView, insertNewView, direction, opts) {
  var oldParams = {},
  newParams = {},
  firstStep,
  property,
  measure,
  outOpts = opts;

  //direction = 1;

  //if (dimension.toLowerCase() === 'x') {
  //  property = 'translateX';
  //  measure = 'width';
  //} else {
    property = 'translateY';
    measure = 'height';
  //}

  if (isAnimating(oldView, 'moving-out')) {
    // if the old view is already moving up, let it finish.
    firstStep = finish(oldView, 'moving-out');
  } else {
    if (isAnimating(oldView, 'moving-in')) {
      // if the old view is partially moving down, scale its move-down
      // duration appropriately.
      outOpts = { duration: timeSpent(oldView, 'moving-in') };
    }
    stop(oldView);
    //if (oldView && oldView.$()) {
    //  var sizes = [parseInt(newView.$().css(measure), 10),
    //               parseInt(oldView.$().css(measure), 10)];
    //  var bigger = Math.max.apply(null, sizes);
    //  oldParams[property] = (bigger * direction) + 'px';
      //newParams[property] = ["0px", (-1 * bigger * direction) + 'px'];
    //} else {
      oldParams[property] = (100 * direction) + '%';
      //newParams[property] = ["0%", (-100 * direction) + '%'];
    //}
    firstStep = animate(oldView, oldParams, outOpts, 'moving-out');
  }

  return firstStep.then(insertNewView).then(function(newView){
    //if (newView && newView.$()) {
    //  var sizes = [parseInt(newView.$().css(measure), 10),
    //               parseInt(oldView.$().css(measure), 10)];
    //  var bigger = Math.max.apply(null, sizes);
      //oldParams[property] = (bigger * direction) + 'px';
    //  newParams[property] = ["0px", (-1 * bigger * direction) + 'px'];
    //} else {
      //oldParams[property] = (100 * direction) + '%';
      //newParams[property] = ["0%", (-100 * direction) + '%'];
      newParams[property] = ["0%", (100 * direction) + '%'];
    //}
    return animate(newView, newParams, opts, 'fade-in');
  });

  //if (isAnimating(oldView, 'moving-in')) {
    //if the old view is just moving in, let it finish
  //  firstStep = finish(oldView, 'moving-in');
  //} else {
  //  stop(oldView);
  //  firstStep = Promise.cast();
  //}


  /*return firstStep.then(insertNewView).then(function(newView){
    if (newView && newView.$() && oldView && oldView.$()) {
      var sizes = [parseInt(newView.$().css(measure), 10),
                   parseInt(oldView.$().css(measure), 10)];
      var bigger = Math.max.apply(null, sizes);
      oldParams[property] = (bigger * direction) + 'px';
      newParams[property] = ["0px", (-1 * bigger * direction) + 'px'];
    } else {
      oldParams[property] = (100 * direction) + '%';
      newParams[property] = ["0%", (-100 * direction) + '%'];
    }

    return Promise.all([
      animate(oldView, oldParams, opts),
      animate(newView, newParams, opts, 'moving-in')
    ]);
});*/
}
