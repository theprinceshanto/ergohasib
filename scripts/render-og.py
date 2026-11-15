"""Render the link preview image (public/og.png, 1200x630) from scripts/og.html.

Usage (from the website folder):  python scripts/render-og.py
Needs Playwright and Microsoft Edge. Fonts load from src/assets/fonts, so no internet is needed.
Re-run after changing the headline or tagline.
"""
import pathlib

from playwright.sync_api import sync_playwright

SITE = pathlib.Path(__file__).resolve().parent.parent

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge")
    page = browser.new_page(viewport={"width": 1300, "height": 700}, device_scale_factor=1)
    page.goto((SITE / "scripts" / "og.html").as_uri())
    page.evaluate("document.fonts.ready")
    page.wait_for_timeout(300)
    page.locator("#card").screenshot(path=str(SITE / "public" / "og.png"))
    browser.close()

print("wrote public/og.png")
