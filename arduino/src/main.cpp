#include <Arduino.h>
#include <SoftwareSerial.h>
#include <eyes.h>
#include <head.h>
#include <arms.h>
#include <legs.h>

SoftwareSerial bluetooth(A5, A4);

String message = "";

String getKey(int num)
{
  return String(message[num]);
}

void setup()
{
  setupEyes();
  setupHead();
  setupArms();
  setupLegs();

  Serial.begin(9600);
  bluetooth.begin(9600);
}

void loop()
{

  if (bluetooth.available())
  {
    message = bluetooth.readStringUntil('\n');
  }

  if (message.length() == 8 && message[0] == '<' && message[7] == '>')
  {
    displayEyeKey(getKey(1));
    displayHeadKey(getKey(2));
    displayArmKeys(getKey(3), getKey(4));
    displayLegsKey(getKey(5), getKey(6));
  }
}
