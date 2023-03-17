import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/2d.loader.js",
    dataUrl: "build/2d.data",
    frameworkUrl: "build/2d.framework.js",
    codeUrl: "build/2d.wasm",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
}