window.onload = () =>{
    const transition_el = document.querySelector('.transition');
    // add in delay of transition, prevent snapping traight to another page
    const anchors = document.querySelectorAll('a');

    setTimeout(() =>{
        transition_el.classList.remove('is-active'); 
    }, 500);

    // loop through every iteration of anchor
    for (let i=0; i <anchors.length; i++){
        const anchor = anchors[i];

        // PREVENT: Animation of the transition is going to go default (no delay, change too quickly) depending on the speed of internet
        anchor.addEventListener('click', e => {
            e.preventDefault();
            //not going to do default linking to a different page
            let target = e.target.href;
            // get the link where the click is supposed to link to --> store in target

            transition_el.classList.add('is-active');
            // add the overlay transition on top of the page

            setTimeout(() => {
                window.location.href = target;
            }, 500) //set to 0.5s in css
            // add prevented default, not going to the next page
            // go to the next page after the transition
    
            console.log(target);
        })
    }
}