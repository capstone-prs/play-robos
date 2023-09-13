#include <Arduino.h>
#include <LedControl.h>
#include "eyes.h"
#include <Servo.h>

int numberOfDevices = 2; // Change this to match your setup
LedControl lc = LedControl(11, 13, 12, numberOfDevices);

Servo servo; // Create a servo object
int servoPin = 9; // Define the servo control pin

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
  servo.attach(servoPin);
}

void loop()
{
  displayEyes(normal);
delay(1000);
displayEyes(semiClose);
delay(100);
displayEyes(normal);
delay(2000);
displayEyes(lookUp);
delay(500);
displayEyes(lookUpLeft);
delay(500);

 servo.write(30);
  delay(1000); // Wait for 1 second

  servo.write(60);
  delay(1000); // Wait for 1 second

 servo.write(0);
  delay(1000); // Wait for 1 second
  
 servo.write(60);
  delay(1000); // Wait for 1 second


}
