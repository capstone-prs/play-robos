#include <Arduino.h>
#include <Servo.h>
#include <arms.h>

const Arms arms[] = {
    {"0", 150, 30},
    {"1", 120, 60},
    {"2", 90, 90},
    {"3", 60, 120},
    {"4", 30, 150},
    {"5", 0, 180},
    {"6", 180, 0},
};

const int leftArmPin = A1;
const int rightArmPin = A0;

Servo servoLeftArm;
Servo servoRightArm;

void setupArms()
{
    servoLeftArm.attach(leftArmPin);
    servoRightArm.attach(rightArmPin);

    servoLeftArm.write(150); // SET TO NORMAL
    servoRightArm.write(30); // SET TO NORMAL
}

Arms findArmsValue(String key)
{
    int eyesLen = sizeof(arms) / sizeof(arms[0]);
    for (int i = 0; i < eyesLen; i++)
    {
        if (arms[i].key == key)
        {
            return arms[i];
        }
    };

    return arms[0];
}

void displayArmKeys(String leftArm, String rightArm)
{
    int leftArmValue = findArmsValue(leftArm).valueLeft;
    int rightArmValue = findArmsValue(rightArm).valueRight;

    servoLeftArm.write(leftArmValue);
    servoRightArm.write(rightArmValue);
}