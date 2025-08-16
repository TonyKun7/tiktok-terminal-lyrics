import chalk from "chalk"
import { rockLyrics } from "./rockLyrics.js"

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

(async () => {
    for (const lyric of rockLyrics) {
        for (const char of lyric.text) {
            process.stdout.write(lyric.who === 'men' ? chalk.cyan(char) : lyric.who == "women" ? chalk.magenta(char) : chalk.white(char))
            await sleep(lyric.writeIn * 1000)
        }
        process.stdout.write('\n')
        
        await sleep(lyric.sleepDelay * 1000)
    }
})()