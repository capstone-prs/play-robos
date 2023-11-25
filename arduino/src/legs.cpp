#include <Arduino.h>
#include <legs.h>

const int leftLegPin = 3;
const int rightLegPin = 4;

void setupLegs()
{
    pinMode(leftLegPin, OUTPUT);
    pinMode(rightLegPin, OUTPUT);

    digitalWrite(leftLegPin, HIGH);
    digitalWrite(rightLegPin, HIGH);
}

void displayLegsKey(String leftLeg, String rightLeg)
{

    if (leftLeg.toInt() == 1)
    {
        digitalWrite(leftLegPin, LOW); // Move forward
    }
    else
    {
        digitalWrite(leftLegPin, HIGH);
    }

    if (rightLeg.toInt() == 1)
    {
        digitalWrite(rightLegPin, LOW); // Move forward
    }
    else
    {
        digitalWrite(rightLegPin, HIGH);
    }
}