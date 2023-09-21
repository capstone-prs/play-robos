#include <Arduino.h>
#include <Stepper.h>
#include <legs.h>

const int leftLegPin1 = 7;
const int leftLegPin2 = 8;
const int leftLegPin3 = 9;
const int leftLegPin4 = 10;

const int rightLegPin1 = 3;
const int rightLegPin2 = 4;
const int rightLegPin3 = 5;
const int rightLegPin4 = 6;

const int stepsPerRevolution = 2048;

Stepper stepperLeftLeg(stepsPerRevolution, leftLegPin1, leftLegPin3, leftLegPin2, leftLegPin4);
Stepper stepperRightLeg(stepsPerRevolution, rightLegPin1, rightLegPin3, rightLegPin2, rightLegPin4);

void setupLegs()
{
    stepperLeftLeg.setSpeed(12);
    stepperRightLeg.setSpeed(12);

    stepperLeftLeg.step(1);
    stepperRightLeg.step(1);
}

void displayLegsKey(String leftLeg, String rightLeg)
{

    switch (leftLeg.toInt())
    {
    case 1:
        stepperLeftLeg.step(1); // Move forward
        break;
    case 2:
        stepperLeftLeg.step(-1); // More backward
        break;
    default:
        stepperLeftLeg.step(0); // Halt
    };

    switch (rightLeg.toInt())
    {
    case 1:
        stepperRightLeg.step(-1); // Move forward
        break;
    case 2:
        stepperRightLeg.step(1); // More backward
        break;
    default:
        stepperRightLeg.step(0); // Halt
    };
}