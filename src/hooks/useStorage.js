import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    //function for tag encoding
    const tagsStr = (tag) => {
      console.log("called");
      var tagStr = "";
      const allTags = [
        "short sleeve top",
        "long sleeve top",
        "short sleeve outwear",
        "long sleeve outwear",
        "vest",
        "sling",
        "shorts",
        "trousers",
        "skirt",
        "short sleeve dress",
        "long sleeve dress",
        "vest dress",
        "sling dress",
      ];
      for (var i = 0; i < allTags.length; i++) {
        // console.log(allTags.length);
        var targetedTag = allTags[i];
        var presence = 0;
        // eslint-disable-next-line no-loop-func
        for (var j = 0; j < tag.length; j++) {
          var tagName = tag[j];
          if (tagName === targetedTag) {
            presence = 1;
          }
        }
        if (presence === 1) {
          tagStr += "1";
        } else {
          tagStr += "0";
        }
      }

      console.log(tagStr);
      return tagStr;
    };

    // function for image classification
    const apiData = async (img_url) => {
      var tags = [];
      const tagFetched = await fetch("http://127.0.0.1:5000/detect", {
        method: "POST",
        // mode: "no-cors",
        body: JSON.stringify({
          title: "detections",
          img_url: img_url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          json.labels.map((element) => {
            tags.push(element);
            return 0;
          });
          return tags;
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(tagFetched);
      return tagFetched;
    };

    // get tags
    const getTags = async (img_url) => {
      var arr = await apiData(img_url);
      console.log(arr);
      return tagsStr(arr);
    };

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        //write await to get the tags from api
        const tagsEncoded = await getTags(url);
        await collectionRef.add({ url, createdAt, tagsEncoded });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
