"""Render the downloadable CV (public/cv.pdf) from the site's CV page, using its print styles.

Usage (from the website folder, with the dev server running: npm run dev):
    python scripts/render-cv.py [url]
Default url: http://localhost:4321/about/cv/
Needs Playwright and Microsoft Edge. Re-run after changing src/data/cv.ts, then commit public/cv.pdf.
"""
import pathlib
import sys

from playwright.sync_api import sync_playwright

SITE = pathlib.Path(__file__).resolve().parent.parent
URL = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:4321/about/cv/"

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge")
    page = browser.new_page()
    page.goto(URL, wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    page.emulate_media(media="print")
    page.pdf(
        path=str(SITE / "public" / "cv.pdf"),
        prefer_css_page_size=True,
        print_background=False,
        tagged=True,
    )
    browser.close()

print("wrote public/cv.pdf")
