# Project Screenshots

Place your project screenshot images in this folder.

## How to add a screenshot to a project:

1. Copy your screenshot image file into this folder (`public/screenshots/`)
2. Open `src/data/projects.js`
3. Find the project entry you want to update
4. Set the `screenshot` field to the **filename** (e.g. `"policyhub.png"`)

## Example

```js
{
  name: "PolicyHub Policy & Compliance Management Web Application",
  screenshot: "policyhub.png",   // ← just the filename
  ...
}
```

## Supported formats
- `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`

## Tips
- Recommended size: **1280×720** or **1920×1080** (landscape)
- Images are displayed at `160px` height, cropped from the top
- Keep filenames lowercase with no spaces (e.g. `my-project.png`)
