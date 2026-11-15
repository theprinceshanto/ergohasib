---
title: Why my valuation model gives a range, not a price
description: A single predicted price hides how wrong it might be. Notes from the first weeks of P1.
date: 2026-11-19
arm: ai-ml
draft: true
---

A lender does not need my best guess at a house price. They need to know how far off that guess could be.

That is why P1 predicts a range. Conformal prediction wraps the model and produces an interval with a stated coverage, here 90%. The important word is *stated*: the coverage is measured on sales the model has never seen, not assumed.

*Draft. Results to follow once the baseline is in.*
