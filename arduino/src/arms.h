#ifndef ARMS_H
#define ARMS_H
#include <Arduino.h>

typedef struct
{
    String key;
    int valueLeft;
    int valueRight;
} Arms;

void setupArms();
void displayArmKeys(String leftArm, String rightArm);

#endif