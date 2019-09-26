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


mergeInto(LibraryManager.library, {
    
    InitializeMonetization: function (paymentPointer, verbose) {
        
        function log(){
            if (verbose){
                console.log.apply(this);
            }
        }
        
        var paymentPointerString = '$coil.xrptipbot.com/JABJLDXNSje7h_bY26_6wg';
            
        if (paymentPointer) {
            paymentPointerString = Pointer_stringify(paymentPointer);
        }
        else{
            console.log('It appears that your payment pointer is not configured properly.');
        }
        
        // remove any existing payment tags
        var existingMonetizationTags = document.querySelectorAll('meta[name=monetization]');
        existingMonetizationTags.forEach(function(el){
            console.log('removing existing monetization tag', el);
            el.parentNode.removeChild(el);
        });
        
        // we want to make sure that we recieve a new monetizationstarted event, so we wait a frame before injecting the
        // meta tag. (In the case where we've actually removed an existing webmonetization meta tag.
        setTimeout(function(){
            var meta = document.createElement('meta');
            meta.setAttribute('name', 'monetization');
            meta.setAttribute('content', paymentPointerString);
            document.head.append(meta);

            //monetization start event.

            if (document.monetization){

                function sendMessageToWebMonetizationBroadcaster(fnName, detail){
                    unityInstance.SendMessage('WebMonetizationBroadcaster', fnName, JSON.stringify(detail));
                }

                document.monetization.addEventListener('monetizationstart', function(event){
                    sendMessageToWebMonetizationBroadcaster('monetizationstart', event.detail);
                });

                document.monetization.addEventListener('monetizationprogress', function(event){
                    sendMessageToWebMonetizationBroadcaster('monetizationprogress', event.detail);
                });
            }
            else{
                console.log('no monetization found');
            }
        }, 1)

        
        
    }

});