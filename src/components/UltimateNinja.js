const UltimateNinja = () => {
    return (
        <div>
            <p>
                This project was made for the Game Technology and Virtual Reality class.
                <br />
                I developed this game using the Rust programming language and the <a target="_blank" href="https://github.com/ggez/good-web-game">good-web-game</a> library.
                During the development I noticed, I got a deeper understanding of the borrow checker, since I only had to deal with it a couple of times.
                Among other functionalities I also implemented a global leaderboard with the MongoDB database, with which the program communicates through HTTP with GET and PUT requests.
                <br />
                This was also the first game I published. You can try it out <a target="_blank" href="https://moj0.itch.io/ultimate-ninja">here</a>.
            </p>
        </div>
    )
}

export default UltimateNinja;