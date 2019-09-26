# Internal development

You can use `Plugins/testharness.html` to test out the `WebMonetization.jslib` [https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html](https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html). Look at the javascript console for details.

## Building the README.pdf from README.md

Download node.js
```
npm i -g md-to-pdf
md-to-pdf README.md 
md-to-pdf README.md Assets/WebMonetization/README.pdf
```

## Making a release

Try to use oldest version of Unity available (currently 2017.1) that makes it compatible w/ more installs.

In Unity, Assets => Export Package => (add the web monetization folder). Save to `/Releases` with a new version number.

Use AssetStoreTools to actually release to the Unity asset store. Contact support (https://simmer.io/support) if you want to have me do this.