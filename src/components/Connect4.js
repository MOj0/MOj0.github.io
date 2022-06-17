const Connect4 = () => {
    return (
        <div>
            <p>
                This was my first larger project in Java.
                <br/>
                It is the classic table game Connect 4. I made a simple bot, where instead of using the 
                <a target="_blank" href="https://en.wikipedia.org/wiki/Minimax"> Minimax algorithm</a> I added or subtracted a score from the bot, based
                on where he placed the token according to the current game state. I remember there being a lot of edge cases, and it
                was quite messy, but it worked surprisigly well (not as well as Minimax though).
                <br/>
                I also implemented play through the Local Area Network, where each player simply sends the column where they placed the
                token as an integer over the network.
            </p>
        </div>
    )
}

export default Connect4;