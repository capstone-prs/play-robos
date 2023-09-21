#include <Arduino.h>
#include <LedControl.h>
#include <eyes.h>
#include <eyesPattern.h>

EyesConvertion eyes[]{
    {"0", normal},
    {"a", semiClose},
    {"b", lookLeft},
    {"c", lookRight},
    {"d", lookUp},
    {"e", lookUpLeft},
    {"f", lookUpRight},
    {"g", winkLeft},
    {"h", winkRight},
    {"i", close},
};

const int numberOfDevices = 2;
const int eyesDINpin = 11;
const int eyesCLKpin = 13;
const int eyesCSpin = 12;

LedControl lc = LedControl(eyesDINpin, eyesCLKpin, eyesCSpin, numberOfDevices);

void setupEyes()
{
    lc.shutdown(0, false); // Wake up the display (not shut down)
    lc.shutdown(1, false); // Wake up the display (not shut down)
    lc.setIntensity(0, 8); // Set the brightness (0-15)
    lc.setIntensity(1, 8); // Set the brightness (0-15)
    lc.clearDisplay(0);    // Clear the display
    lc.clearDisplay(1);    // Clear the display
}

Eyes findEyesValue(String key)
{
    int eyesLen = sizeof(eyes) / sizeof(eyes[0]);
    for (int i = 0; i < eyesLen; i++)
    {
        if (eyes[i].key == key)
        {
            return eyes[i].value;
        }
    };

    return normal;
}

void displayEyes(Eyes inp)
{
    for (int i = 0; i < 8; i++)
    {
        lc.setRow(0, i, inp.right[i]);
        lc.setRow(1, i, inp.left[i]);
    };
};

void displayEyeKey(String i)
{
    displayEyes(findEyesValue(i));
}