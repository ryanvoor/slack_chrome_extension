var checkPageLoadedYet = setInterval(
    function() {
        // when a slack channel is open
        if ( typeof document.getElementsByTagName( 'footer' )[0] !== 'undefined' ) {
            // make sure we only do this when the slack window is really tall (like when I'm using vertical monitors)
            if ( document.getElementsByTagName( 'body' )[0].clientHeight > 1200 ) {
                console.log( 'Putting extra space under the footer (place where you type messages) for ease of viewing on vertical monitors' );
                document.getElementsByTagName( 'footer' )[0].style.marginBottom = '500px';
            }
            clearInterval( checkPageLoadedYet );
        }
    },
    100 // check every 100 ms to see if the page is loaded yet
);
