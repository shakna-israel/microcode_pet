input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Silly)
    if (sound) {
        soundExpression.happy.playUntilDone()
    } else {
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Asleep)
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
        basic.pause(500)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
    if (sound) {
        soundExpression.yawn.playUntilDone()
    } else {
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    if (sound) {
        soundExpression.sad.playUntilDone()
    } else {
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    if (sound) {
        soundExpression.giggle.playUntilDone()
    } else {
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Asleep)
})
let sound = false
basic.showIcon(IconNames.Asleep)
sound = true
