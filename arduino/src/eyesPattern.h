#ifndef EYES_PATTERN_H
#define EYES_PATTERN_H
#include <Arduino.h>

typedef struct
{
    int right[8];
    int left[8];
} Eyes;

extern Eyes normal;
extern Eyes semiClose;
extern Eyes lookRight;
extern Eyes lookLeft;
extern Eyes lookUp;
extern Eyes lookUpLeft;
extern Eyes lookUpRight;
extern Eyes winkRight;
extern Eyes winkLeft;
extern Eyes close;

#endif