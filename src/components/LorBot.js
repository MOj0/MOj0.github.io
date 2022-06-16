const LorBot = () => {
    return (
        <div>
            <p>This project was initially made for fun,
                but I thought some people might find it interesting.
                <br />
                I've always enjoyed automating tasks and I believe  it is the right
                mindset to have and leads to a lot of great optimizations. So I decided
                to make a bot for a card game Legends of Runeterra.
            </p>
            <br />
            <h5>Technical Details</h5>
            <p>I used an in-game API to get the information of the cards present in the game
                (their location, name, stats ...). This was done by requesting and processing a JSON file from
                a local server running the game's background. I extracted one more information about the game's
                state, which is the current mana value. I did this by using Opencv, a computer vision library.
                I also tried OCR (Optical Character Recognition), but it didn't work well, and when it did,
                it was inconsistent with the results. Lastly, I implemented the game logic into the bot, which
                was not simple, since a lot of things could go wrong and debugging was not so straightforward.
                But perhaps the most difficult part was <i>tying it all together</i>. When I first started I
                didn't realize this was going to be so large, but I learned how to organize such a project
                (to some extent - it's still messy). There are a lot of separate components which have
                to work together, but OOP made it significantly simpler.
            </p>
            <br />
            <h5>Conclusion</h5>
            <p>The bot is not perfect, it is quite limited in its strategy and only works at a specific resolution,
                but it works and I am quite proud of it. It may not be the most useful bot, but I had a lot of fun
                making it, which is the most important part. :D
            </p>
        </div>
    )
}

export default LorBot;