#!/usr/bin/env bash
# Run from the repo root (the folder that contains frogfederation/).
# Downloads the Google Sites images into frogfederation/assets/ and rewrites
# every page to use the local copies, so the site keeps working if Google
# expires the hotlinked URLs.
set -e
cd "$(dirname "$0")"
mkdir -p frogfederation/assets
python3 - << 'PY'
import json, os, re, urllib.request, glob
imgs = json.load(open("images.json"))
for name, url in imgs.items():
    dest = f"frogfederation/assets/{name}.jpg"
    if not os.path.exists(dest):
        print("downloading", name)
        urllib.request.urlretrieve(url, dest)
for path in glob.glob("frogfederation/**/index.html", recursive=True):
    depth = os.path.relpath(path, "frogfederation").count(os.sep)
    up = "../" * depth
    s = open(path).read()
    for name, url in imgs.items():
        s = s.replace(url, f"{up}assets/{name}.jpg")
    open(path, "w").write(s)
print("done")
PY
