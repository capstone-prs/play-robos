#ifndef EYES_H
#define EYES_H
#include <Arduino.h>
#include <eyesPattern.h>

typedef struct
{
    String key;
    Eyes value;
} EyesConvertion;

void setupEyes();
void displayEyeKey(String i);

#endif // EYES_DISPLAY_H