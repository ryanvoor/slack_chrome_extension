// when a slack channel is open
if ( typeof document.getElementById( 'footer' ) !== 'undefined' ) {
    // make sure we only do this when the slack window is really tall (like when I'm using vertical monitors)
    if ( document.getElementsByTagName( 'body' )[0].clientHeight > 1200 ) {
        console.log( 'Putting extra space under the footer (place where you type messages) for ease of viewing on vertical monitors' );
        document.getElementById( 'footer' ).style.marginBottom = '500px';
    }
}
