import React from 'react';

const MoodStatement = (props) => {
    switch(props.mood) {
        case 1 : return <div> I'm chillin </div>;
        case 2 : return <div> Damn </div>;
        case 3 : return <div> It's like that? </div>
        case 4 : return <div> You should see what I have in my hand </div>;
        case 5 : return <div> It's fine </div>;
        case 6 : return <div> But Why?! </div>;
        case 7 : return <div> Oh I'm manascrewed </div>;
        case 8 : return <div> Just wait till my next turn </div>;
        case 9 : return <div> Why would you do that?! </div>;
        case 10 : return <div> Exile soul ring!!! Get it outta here! </div>;
        default: return null;
    }
}


export default MoodStatement