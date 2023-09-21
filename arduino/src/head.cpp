#include <Arduino.h>
#include <Servo.h>

const int headPin = A2;
Servo servoHead;

void setupHead()
{
    servoHead.attach(headPin);
    servoHead.write(30); // SET TO NORMAL
}

void displayHeadKey(String key)
{
    if (key == "1")
    {
        servoHead.write(0); // TURN LEFT
    }
    else if (key == "2")
    {
        servoHead.write(60); // TURN RIGHT
    }
    else
    {
        servoHead.write(30); // NORMAL
    }
}