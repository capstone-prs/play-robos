#include <Arduino.h>
#include <LedControl.h>
#include "eyes.h"

int numberOfDevices = 2; // Change this to match your setup
LedControl lc = LedControl(11, 13, 10, numberOfDevices);

void displayEyes(Eyes inp)
{
  for (int i = 0; i < 8; i++)
  {
    lc.setRow(0, i, inp.right[i]);
    lc.setRow(1, i, inp.left[i]);
  };
};

void setup()
{
  lc.shutdown(0, false); // Wake up the display (not shut down)
  lc.shutdown(1, false); // Wake up the display (not shut down)
  lc.setIntensity(0, 8); // Set the brightness (0-15)
  lc.setIntensity(1, 8); // Set the brightness (0-15)
  lc.clearDisplay(0);    // Clear the display
  lc.clearDisplay(1);    // Clear the display
}

void loop()
{
  displayEyes(lookUp);
}
