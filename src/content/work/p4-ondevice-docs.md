---
code: P4
title: On-device documents
deck: Private extraction of key fields from financial documents, without the document leaving the device.
kind: pipelines
status: Planned
order: 4
data: Synthetic and public sample documents
stack: [Python, small language models, OCR]
target: By July 2027
---

## Problem

Statements and invoices hold sensitive data. Sending them to a cloud service is often not allowed, yet reading them by hand is slow.

## Data

Synthetic documents and public samples only, so nothing private is ever used.

## Plan

A small model that runs locally, extracts the fields a team needs, and says how sure it is about each one, with field-level accuracy measured on a held-out set.

## What done looks like

Code, tests, measured accuracy per field, and a demo that runs on an ordinary laptop.
