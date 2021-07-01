OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
while (OrientBit.getwheelDist(OrientBit.wheelSide.left) <= 40) {
    basic.pause(100)
}
if (OrientBit.getwheelDist(OrientBit.wheelSide.left) >= 40) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}
maqueen.motorStop(maqueen.Motors.M1)
maqueen.servoRun(maqueen.Servos.S1, 60)
basic.pause(500)
maqueen.servoRun(maqueen.Servos.S1, 20)
basic.forever(function () {
	
})
