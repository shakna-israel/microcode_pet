input.onButtonPressed(Button.A, function () {
    light2 = input.lightLevel()
    if (light2 < 65) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Silly)
        if (sound) {
            soundExpression.happy.playUntilDone()
        } else {
            basic.pause(1000)
        }
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (sound) {
        sound = false
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.showIcon(IconNames.Asleep)
    } else {
        sound = true
        basic.showIcon(IconNames.Yes)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.pause(500)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.B, function () {
    light2 = input.lightLevel()
    if (light2 < 65) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Ghost)
        if (sound) {
            soundExpression.yawn.playUntilDone()
        } else {
            basic.pause(1000)
        }
        basic.showIcon(IconNames.Asleep)
    }
})
input.onGesture(Gesture.Shake, function () {
    light2 = input.lightLevel()
    if (light2 < 45) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Sad)
        if (sound) {
            soundExpression.sad.playUntilDone()
        } else {
            basic.pause(1000)
        }
        basic.showIcon(IconNames.Asleep)
    }
})
radio.onReceivedValue(function (name, value) {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    light2 = input.lightLevel()
    if (light2 < 65) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
        if (sound) {
            soundExpression.giggle.playUntilDone()
        } else {
            basic.pause(1000)
        }
        basic.showIcon(IconNames.Asleep)
    }
})
let light2 = 0
let sound = false
basic.showIcon(IconNames.Asleep)
sound = true
input.calibrateCompass()
basic.forever(function () {
    if (input.isGesture(Gesture.SixG)) {
        basic.showIcon(IconNames.Skull)
        basic.pause(5000)
    }
})
