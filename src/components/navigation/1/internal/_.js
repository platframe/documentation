/**
 * @overview Modified copy of Nav 1's logic for documentation.
 */

import { smoothstep } from '../../../../logic/js/libs/internal/math';

export default function() {

    if (document.querySelector('#docs .nav-1')) {

        function scroll(destination, duration) {

            let currentPosition = document.querySelector('.preview').scrollTop,
                distanceToGo = destination - currentPosition,
                timeStart = Date.now(),
                timeEnd = timeStart + duration;

            // initiate scroller
            !function scroller() {
                // incrementally set the new scrollTop
                const now = Date.now(),
                    // get the estimated next point on path
                    nextPoint = smoothstep(timeStart, timeEnd, now),
                    // calculate new scrollTop value
                    newScrollTop = Math.round(currentPosition + (distanceToGo * nextPoint));
                document.querySelector('.preview').scrollTop = newScrollTop;
                // check if we're done
                if (now >= timeEnd) return;
                // schedule next move
                requestAnimationFrame(scroller);
            }();
        }

        var context = document.querySelector('#id-1'),
            triggers = document.querySelectorAll('[data-go]'),
            duration = 350;

        for (let trigger of triggers) {

            // determine the intended destination
            let destination = trigger.attributes['data-go'].value === 'next'
                ? trigger.parentNode.nextElementSibling.offsetTop
                : context.offsetTop;

            trigger.addEventListener('click', function(event) {
                scroll(destination, duration);
                event.stopPropagation;
            });
        }

    }

}
