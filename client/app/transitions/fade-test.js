import { isAnimating, finish, timeSpent, animate, stop } from "vendor/liquid-fire";
export default function fadeTest(oldView, insertNewView, opts) {
  var firstStep,
      outOpts = opts;

  if (isAnimating(oldView, 'fade-out')) {
    // if the old view is already fading out, let it finish.
    firstStep = finish(oldView, 'fade-out');
  } else {
    if (isAnimating(oldView, 'fade-in')) {
      // if the old view is partially faded in, scale its fade-out
      // duration appropriately.
      outOpts = { duration: timeSpent(oldView, 'fade-in') };
    }
    stop(oldView);
    firstStep = animate(oldView, {opacity: 0}, outOpts, 'fade-out');
  }

  return firstStep.then(insertNewView).then(function(newView){
    console.log(newView);
    return animate(newView, {opacity: [1, 0]}, opts, 'fade-in');
  });
}