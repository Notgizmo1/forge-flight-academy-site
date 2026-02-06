---
title: "Weight & Balance Calculator"
description: "Calculate center of gravity and weight distribution for UAS platforms. Ensure safe flight operations with proper weight and balance."
date: 2025-02-06
draft: false
weight: 6
---

# Weight & Balance Calculator

Understanding and calculating weight and balance is critical for safe UAS operations, especially for custom-built or payload-equipped platforms.

---

## Why Weight & Balance Matters

### Safety
- **Flight stability** - Improper CG causes instability or loss of control
- **Control authority** - Out-of-range CG reduces control effectiveness
- **Motor stress** - Imbalanced load increases motor wear
- **Battery performance** - Excess weight reduces flight time

### Performance
- **Flight time** - Lighter aircraft = longer endurance
- **Maneuverability** - Proper balance improves handling
- **Maximum altitude** - Weight affects climb performance
- **Wind resistance** - Heavy aircraft struggle in wind

### Regulatory
- **Part 107 weight limits** - 0.55 to 55 lbs
- **Registration requirements** - Know your weight category
- **Operations over people** - Category limits by weight
- **Insurance compliance** - Operating within design limits

---

## Center of Gravity (CG) Basics

### What is CG?
The **center of gravity** is the point where all weight is balanced. Think of it as the balance point if you placed the aircraft on your finger.

### Why CG Location Matters

**CG Too Far Forward:**
- Nose-heavy flight attitude
- Increased motor load
- Reduced control authority (pitch up difficult)
- Higher stall speed

**CG Too Far Aft:**
- Tail-heavy flight attitude
- Unstable, twitchy flight characteristics
- Risk of tip stall
- Difficult to recover from pitch disturbances

**CG Just Right:**
- Stable, predictable flight
- Optimal motor efficiency
- Full control authority
- Easiest to fly

---

## How to Calculate CG

### Step 1: Set Reference Datum
Choose a reference point (datum) on your aircraft - typically the nose, motor mount, or leading edge of wing.

### Step 2: Weigh Components
Weigh each major component:
- Airframe
- Motors
- Battery
- Flight controller
- Payload (camera, sensors, etc.)
- Landing gear

### Step 3: Measure Arm Distance
Measure distance from datum to center of each component (in inches or cm).

### Step 4: Calculate Moments
**Moment = Weight × Arm Distance**

For each component, multiply its weight by its distance from datum.

### Step 5: Find CG Location
**CG Location = Total Moments ÷ Total Weight**

---

## Weight & Balance Calculator (Manual)

### Example Calculation

**Aircraft: Custom Fixed-Wing UAS**
**Datum: Nose of fuselage**

| Component | Weight (oz) | Arm (in) | Moment (oz-in) |
|-----------|-------------|----------|----------------|
| Fuselage | 12.0 | 15.0 | 180.0 |
| Wings | 8.0 | 18.0 | 144.0 |
| Motors (2x) | 6.0 | 20.0 | 120.0 |
| Battery | 18.0 | 16.0 | 288.0 |
| Flight Controller | 2.0 | 17.0 | 34.0 |
| Camera Payload | 4.0 | 14.0 | 56.0 |
| Landing Gear | 3.0 | 12.0 | 36.0 |
| **TOTAL** | **53.0 oz** | — | **858.0 oz-in** |

**CG Location = 858.0 ÷ 53.0 = 16.2 inches from nose**

**Total Weight = 53.0 oz = 3.3 lbs** ✓ (under 55 lbs for Part 107)

---

## CG Range Determination

### Finding Acceptable CG Range

Most aircraft have a CG range specification:
- **Forward limit** - Typically 25-30% of wing chord
- **Aft limit** - Typically 30-35% of wing chord

**For fixed-wing:**
- Measure wing chord (distance from leading edge to trailing edge)
- CG should be at 28-32% of chord (typical range)
- Example: 12" chord → CG should be 3.4-3.8" from leading edge

**For multi-rotor:**
- CG should be at geometric center
- Typically coincides with flight controller location
- Small deviations compensated by motor mixing

---

## Weight & Balance Worksheet

Use this template for your calculations:

```
WEIGHT & BALANCE WORKSHEET

Aircraft: ____________________  Date: __________

Datum Location: ____________________________

| Component        | Weight | Arm | Moment |
|------------------|--------|-----|--------|
| 1. _____________ | ______ | ___ | ______ |
| 2. _____________ | ______ | ___ | ______ |
| 3. _____________ | ______ | ___ | ______ |
| 4. _____________ | ______ | ___ | ______ |
| 5. _____________ | ______ | ___ | ______ |
| 6. _____________ | ______ | ___ | ______ |
| 7. _____________ | ______ | ___ | ______ |
| 8. _____________ | ______ | ___ | ______ |
| 9. _____________ | ______ | ___ | ______ |
| 10. ____________ | ______ | ___ | ______ |
|------------------|--------|-----|--------|
| TOTAL            | ______ |     | ______ |

CG LOCATION = Total Moment ÷ Total Weight
CG = _______ ÷ _______ = _______ inches from datum

ACCEPTABLE CG RANGE
Forward Limit: _______ inches
Aft Limit: _______ inches

CG WITHIN LIMITS? ☐ YES ☐ NO

TOTAL WEIGHT CHECK
Aircraft Weight: _______ lbs
Max Takeoff Weight: _______ lbs
Weight Within Limits? ☐ YES ☐ NO

Part 107 Compliance: ☐ YES (0.55-55 lbs)

CALCULATED BY: _______________________
DATE: ____________  SIGNATURE: ___________
```

---

## Adjusting CG

### If CG is Too Far Forward

**Add weight aft:**
- Move battery rearward
- Add ballast weight to tail
- Relocate heavy components aft

**Remove weight forward:**
- Use lighter nose components
- Remove unnecessary forward equipment
- Shorten nose section (if possible)

### If CG is Too Far Aft

**Add weight forward:**
- Move battery forward
- Add ballast weight to nose
- Relocate heavy components forward

**Remove weight aft:**
- Use lighter tail components
- Remove unnecessary aft equipment
- Reduce tail moment arm

---

## Practical CG Testing

### The Finger Test (Multi-Rotor)
1. Balance aircraft on finger at geometric center
2. Aircraft should sit level (no tilt)
3. If it tilts, move battery opposite direction
4. Retest until level

### The String Test (Fixed-Wing)
1. Tie string at estimated CG location (25-30% chord)
2. Suspend aircraft by string
3. Aircraft should hang nose-slightly-down (~5° angle)
4. Adjust battery position if wrong attitude
5. Mark final CG location

### Flight Test
**Warning: Only if confident in calculations**

1. First flight in calm conditions
2. Short duration (2-3 minutes max)
3. Test control authority at altitude
4. Note any trim requirements
5. Adjust CG if excessive trim needed

---

## Weight Reduction Tips

### Airframe
- Use lightweight materials (carbon fiber, foam)
- Minimize excess structure
- Remove non-essential components
- Use hollow fasteners where possible

### Electronics
- Select lightweight flight controller
- Use efficient ESCs (less weight + better performance)
- Minimize wiring (use shorter, lighter gauge)
- Consolidate components (fewer boards = less weight)

### Battery
- Right-size battery for mission
- Don't over-capacity for required flight time
- Consider weight vs. endurance tradeoff
- Use high-discharge batteries (lighter for same power)

### Payload
- Mount cameras/sensors efficiently
- Use minimal mounting hardware
- Integrate payload into structure
- Consider weight in sensor selection

---

## Weight Categories for Part 107

### Registration Requirements

**Under 0.55 lbs (250 grams):**
- No FAA registration required
- Still subject to Part 107 if commercial

**0.55 lbs to 55 lbs:**
- FAA registration required ($5 for 3 years)
- Standard Part 107 operations

**Over 55 lbs:**
- Not covered by Part 107
- Requires Section 333 exemption or different authorization
- Stricter requirements

### Operations Over People Categories

**Category 1:** <0.55 lbs
**Category 2:** <55 lbs, meets injury criteria
**Category 3:** <55 lbs, over closed or restricted access sites
**Category 4:** Small UAS with FAA-accepted Declaration of Compliance

Weight affects which category you can operate under.

---

## Common UAS Weights

### Consumer Drones
- DJI Mini 3 Pro: 0.55 lbs (249g)
- DJI Mavic 3: 2.0 lbs (899g)
- DJI Phantom 4: 3.0 lbs (1380g)
- DJI Inspire 2: 7.6 lbs (3440g)

### Professional Platforms
- DJI Matrice 300: 14.8 lbs (6.7 kg)
- Freefly Alta X: 26 lbs (11.8 kg)
- Custom Group 2: 15-55 lbs

### FPV Racing Drones
- Typical 5" quad: 1.1-1.5 lbs (500-700g)
- Cinewhoop: 0.7-1.0 lbs (300-450g)

---

## Tools & Equipment

### Essential Tools
- **Digital scale** - 0.01 oz / 0.1g resolution
- **Measuring tape** - Inches and centimeters
- **String or thread** - For suspension test
- **Calculator** - For moment calculations
- **Notebook** - Record configurations

### Advanced Tools
- **Laser measurement tool** - Precise arm distances
- **CG balancer** - Specialized tool for fixed-wing
- **Component database** - Track weights of common parts
- **Spreadsheet** - Automate calculations

---

## Digital Calculator (Coming Soon)

We're developing an interactive web-based calculator that will:
- Automatically calculate CG from your inputs
- Store common component weights
- Provide visual CG range diagram
- Export calculations as PDF
- Track multiple aircraft configurations

Check back soon or **[contact us](/contact/)** for early access.

---

## Professional Training

Learn proper weight and balance procedures, along with hands-on platform development.

Our **[Practical UAS Development program](/programs/practical-uas-development/)** includes comprehensive weight and balance instruction for custom-built platforms.

**[View Training Programs](/programs/)** | **[Contact Us](/contact/)**

---

*Always verify weight and balance calculations before first flight. When in doubt, consult an experienced builder or instructor.*
