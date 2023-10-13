#include <Arduino.h>
#include <SoftwareSerial.h>
#include <eyes.h>
#include <head.h>
#include <arms.h>
#include <legs.h>
#include <led.h>

SoftwareSerial bluetooth(A5, A4);
int bluetoothStatusPin = A3;

int isBtConnected = 0;

String message = "";
bool started = false;
long lastExecTime;

String getKey(int num)
{
  return String(message[num]);
}

void execState(String messageString)
{
  if (messageString.length() == 8 && messageString[0] == '<' && messageString[7] == '>')
  {
    displayEyeKey(getKey(1));
    displayHeadKey(getKey(2));
    displayArmKeys(getKey(3), getKey(4));
    displayLegsKey(getKey(5), getKey(6));
  }
}

void setup()
{
  setupEyes();
  setupHead();
  setupArms();
  setupLegs();
  setupLed();

  Serial.begin(9600);
  bluetooth.begin(9600);
  pinMode(bluetoothStatusPin, INPUT);
}

void loop()
{
  bluetooth.flush();
  isBtConnected = digitalRead(bluetoothStatusPin);
  displayLed(isBtConnected);

  if (bluetooth.available())
  {
    message = bluetooth.readStringUntil('\n');
    Serial.println(message);

    if (message == "^")
    {
      if (started)
      {
        bluetooth.write("(429)\n"); // request too many
        started = false;
        execState("000000");

        // indicator Fail()
      }
      else
      {
        bluetooth.write("(202)\n"); // accepted
        started = true;

        // indicator inProgress()
      }
    }
    else if (message == "$")
    {
      bluetooth.write("(200)\n"); // success
      started = false;
      execState("000000");

      // indicator Done()
    }
    else if (message.length() == 8 && message[0] == '<' && message[7] == '>')
    {
      execState(message);
      lastExecTime = millis();
    }
    else
    {
      bluetooth.write("(400)\n"); // bad request
      started = false;
      execState("000000");
    }
  }
  if (started && millis() - lastExecTime > 15000)
  {
    bluetooth.write("(400)\n"); // bad request
    started = false;
    execState("000000");
    // indicator Fail()
  }
}
