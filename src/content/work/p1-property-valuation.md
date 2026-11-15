---
code: P1
title: Property valuation with honest uncertainty
deck: UK sale-price predictions that come with a calibrated range and a reason, not a single number.
kind: models
status: In progress
order: 1
featured: true
data: HM Land Registry Price Paid Data, EPC certificates
stack: [Python, pandas, scikit-learn, gradient boosting, conformal prediction, SHAP, pytest]
target: Live by early January 2027
---

## Problem

Lenders and wealth managers need a price range they can trust, not a single number. A wrong valuation on a high-value home is expensive, and a point estimate hides how wrong it might be.

## Data

HM Land Registry Price Paid Data, published under the Open Government Licence, joined to Energy Performance Certificate records for floor area and property features. Raw files stay out of the repository; the pipeline downloads and validates them.

## Approach

1. A baseline: the median price by postcode district and property type. Every later model has to beat it.
2. A linear model, then gradient boosting.
3. Conformal prediction for the intervals, with a 90% coverage target that is measured, not assumed.
4. SHAP explanations, so each prediction says what drove it.

## Evaluation

A time-based split, so the model is always tested on sales after the ones it learned from. A leakage audit before any score is reported, and errors broken down by price band, because an average error hides where a model fails.

## Deployment

A small demo where you enter a property and get a range and its main drivers. Link to follow when it is live.

## Limits

To be written honestly once the results are in.
