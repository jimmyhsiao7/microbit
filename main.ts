input.onButtonPressed(Button.A, function () {
    bFlog = true
    while (bFlog) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
let bFlog = false
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (bFlog) {
        mbit_小车类.RGB_Car_Big(randint(0, 255), randint(0, 255), randint(0, 255))
        if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.White) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.White)) {
            mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 50, 40)
        } else if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.White) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.Black)) {
            mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_SpinRight, 50, 0)
        } else if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.Black) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.White)) {
            mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_SpinLeft, 0, 50)
        } else {
            mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 50, 40)
        }
        basic.pause(100)
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    }
})
