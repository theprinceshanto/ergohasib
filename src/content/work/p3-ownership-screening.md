---
code: P3
title: Ownership screening
deck: Screening UK companies for hidden ownership and shell-company patterns.
kind: pipelines
status: Planned
order: 3
featured: true
data: Companies House registers (companies, officers, persons with significant control)
stack: [Python, graph analysis]
target: On the site by end of May 2027
---

## Problem

Shell companies and layered ownership hide who really controls a business. Compliance teams need to know which companies deserve a closer look before they rely on them.

## Data

Public Companies House registers: companies, officers, and persons with significant control.

## Plan

A pipeline that builds the ownership network, then screens it for known risk patterns such as circular ownership, mass-registration addresses and frequent officer changes. Each flag comes with the evidence behind it.

## What done looks like

A reproducible pipeline with tests, a clear account of false positives, and a demo that explains each flag.
