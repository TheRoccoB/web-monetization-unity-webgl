// Web Monetization for Unity WebGL by SIMMER.io / Rocco Balsamo
//
// Dual licenced.
//
// MIT license If downloaded from Github https://opensource.org/licenses/MIT
// Asset store EULA if downloaded from the Unity Asset Store https://unity3d.com/legal/as_terms
// 
// Need help? First read the README.pdf, then reach out to simmer.io/support if you have any questions.
//
// We always appreciate Github stars and Asset Store reviews. It would be great if you could help out while enjoying
// this free asset :-)

window.unityInstance = {
    SendMessage : function() {
        console.log('SendMessage', arguments)
    }
};

window.LibraryManager = {library:null};

window.Pointer_stringify = function(str){return str};

window.mergeInto = function(lib, fns){
    fns.InitializeMonetization('$coil.xrptipbot.com/JABJLDXNSje7h_bY26_6wg', true);
};
