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


using System.Collections.Generic;
using UnityEngine;

public class SpawnPrefabOnMonetization : MonoBehaviour
{

    public GameObject Prefab;
// register one or both events if you want to use them
    void OnEnable()
    {
        WMBroadcaster.OnMonetizationStart += OnMonetizationStart;
        WMBroadcaster.OnMonetizationProgress += OnMonetizationProgress;
    }
    
    // unregister events that you've registered
    void OnDisable()
    {
        WMBroadcaster.OnMonetizationStart -= OnMonetizationStart;
        WMBroadcaster.OnMonetizationProgress -= OnMonetizationProgress;
    }

    // A monetization start event should occur roughly after a second or two after your game loads as WebGL.
    void OnMonetizationStart(Dictionary<string, object> detail)
    {
        // these are the parameters that you can read from the detail dictionary.
        // recommended: wrap parsing of each of these values in a try/catch in case the spec changes.
        // https://coil.com/docs/#browser-start

        // string requestId = detail["requestId"] as string;
        // string id = detail["id"] as string;
        // string resolvedEndpoint = detail["resolvedEndpoint"] as string;
        // string metaContent = detail["metaContent"] as string;

        // Debug.Log("MonetizationStart requestId: " + requestId + ", id: " + id + ", resolvedEndpoint: " + resolvedEndpoint + ", metaContent" + metaContent);

        GetComponent<SpriteRenderer>().color = Color.green;
    }

    // A monetization progress event should occur roughly every two seconds after the monetization progress occurs
    void OnMonetizationProgress(Dictionary<string, object> detail)
    {
        // these are the parameters that you can read from the detail dictionary.
        // recommended: wrap parsing of each of these values in a try/catch in case the spec changes.
        // https://coil.com/docs/#browser-progress
        
        // string amount = detail["amount"] as string;
        // long amountAsLong = Convert.ToInt64(amount);
        // string assetCode = detail["assetCode"] as string;
        // long scale = (long) detail["assetScale"];
        
        // Debug.Log("MonetizationProgress amount " + amountAsLong + ", assetCode: " + assetCode + ", scale: " + scale);
        if (Prefab)
        {
            var spawned = Instantiate(Prefab, transform.position, transform.rotation);
            //Give it a little nudge, so they don't land on top of each other.
            spawned.GetComponent<Rigidbody2D>().velocity = new Vector2(UnityEngine.Random.Range(-0.5f, 0.5f), 0f);
        }
        else
        {
            Debug.Log("SpawnPrefabOnMonetization: No Prefab Found!");
        }

    }

}
