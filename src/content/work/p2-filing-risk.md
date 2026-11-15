---
code: P2
title: Filing risk
deck: Measuring how the risk language in SEC filings changes from one year to the next.
kind: models
status: Planned
order: 2
featured: true
data: SEC EDGAR annual reports (10-K)
stack: [Python, NLP, text embeddings]
target: On the site by end of February 2027
---

## Problem

Companies rarely announce a new risk. It appears as a quiet change in the wording of their annual report. Analysts and compliance teams read thousands of these sections; a model that flags what changed, and by how much, saves that time.

## Data

Annual reports (10-K) from SEC EDGAR, which are public and free. The risk-factor section is extracted and compared with the same company’s previous year.

## Plan

Section extraction, a year-on-year comparison at paragraph level, and a score for how much the risk language has shifted, checked against cases where the outcome is known.

## What done looks like

Code, tests, an honest evaluation and a demo where you pick a company and see what changed.
