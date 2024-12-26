input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
basic.forever(function () {
    basic.showNumber(steps)
})
