#include <Arduino.h>

const int bluetoothLedPin = 2;
const int greenLedPin = 1;
const int redLedPin = 0;

int bluetoothLedState = LOW;
unsigned long previousMillis = 0; // Initialize the previous time variable
const long interval = 500;        // Interval between LED blinks in milliseconds (1 second)

void setupLed()
{
    pinMode(bluetoothLedPin, OUTPUT);
    // pinMode(greenLedPin, OUTPUT);
    // pinMode(redLedPin, OUTPUT);
}

int invertLedState(int ledPin, int ledState)
{
    int newState = (ledState == LOW) ? HIGH : LOW;
    digitalWrite(ledPin, newState);
    return newState;
}

void displayLed(bool isConnected)
{
    unsigned long currentMillis = millis();

    if (!isConnected)
    {
        if (currentMillis - previousMillis >= interval)
        {
            previousMillis = currentMillis;

            bluetoothLedState = invertLedState(bluetoothLedPin, bluetoothLedState);
        }
    }
    else
    {
        digitalWrite(bluetoothLedPin, HIGH);
    }
}
