const PocketTanks = () => {
    return (
        <div>
            <p>
                This is a remake of the videogame Pocket Tanks. Although it's a very simplified version of the game, it
                does what it's supposed to do.
                <br/>
                I made this using plain Java, from scratch so to speak, since I believe making things from scratch is an
                important factor in learning.
                <br/>
                In this game you play as a tank (in shape of a circle and a rectangle) and the goal is to eliminate your
                opponent, before he eliminates you. After each player makes his move, it's the opponent's turn.
                <br/>
                I implemented a simple bot, as a form of an opponent, or one can also choose to play against another player by passing
                mouse and keyboard (the way it is in the original game), and finally I also implemented play through the Local Area Network.
                I knew how to implement sending data over the network, since I had already done that in the Connect 4 game, but in this case
                it was more complex since more data about the state of the game is necessary (tank's position, bullet's position, explosion, current turn).
            </p>
        </div>
    )
}

export default PocketTanks;