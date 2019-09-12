var checkPageLoadedYet = setInterval(
    function() {
        // when a slack channel is open
        if ( typeof document.getElementsByTagName( 'footer' )[0] !== 'undefined' ) {
            // make sure we only do this when the slack window is really tall (like when I'm using vertical monitors)
            if ( document.getElementsByTagName( 'body' )[0].clientHeight > 1200 ) {
                console.log( 'Putting extra space under the footer (place where you type messages) for ease of viewing on vertical monitors' );
                document.getElementsByTagName( 'footer' )[0].style.marginBottom = '500px';
            }

            // This not defunct because slack updated to include a dark theme
            //// change colors so it works better with dark reader

            //// set sidebar background color to inverse of what it would show up as without dark reader so that with dark reader it will actually stay dark
            //document.getElementsByClassName( 'p-classic_nav__team_header' )[0].style.backgroundColor = '#ffedf9';
            //document.getElementsByClassName( 'c-scrollbar'                )[0].style.backgroundColor = '#ffedf9';

            //// change the color of the text inside the sidebar so that it stays visible. We make it black so that dark reader will make it white
            //document.getElementsByClassName( 'p-classic_nav__team_header' )[0].style.color = 'black';
            //document.getElementsByClassName( 'c-scrollbar'                )[0].style.color = 'black';

            //// change the text color of the "all unreads" and "threads" links
            //document.getElementsByClassName( 'p-channel_sidebar__link' )[0].style.color = 'black';
            //document.getElementsByClassName( 'p-channel_sidebar__link' )[1].style.color = 'black';

            //// change the text coloring for all the channel links and all the direct message links
            //var i;
            //for( i = 0; i < document.getElementsByClassName('p-channel_sidebar__channel').length; i++ )
            //{
            //    document.getElementsByClassName('p-channel_sidebar__channel')[i].style.color = 'black';
            //}

            clearInterval( checkPageLoadedYet );
        }
    },
    100 // check every 100 ms to see if the page is loaded yet
);
